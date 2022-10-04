import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const backgroundsSelector: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { background: "acolyte" });
  const setBackground = (background) => (pageFilters.background = background);

  return html`
    <page title="Background" selection="background" source="UA-Origins, Pg 11">
      Details can be found in the Unearthed Arcana - Origins (page 11-15).
      Select one of the following backgrounds to see instructions for writing in
      the details in your character sheet.
      <div class="three-col-wrapper">
        <button
          class=${pageFilters.background == "acolyte" ? "selected" : ""}
          onclick=${() => setBackground("acolyte")}
        >
          Acolyte
        </button>
        <button
          class=${pageFilters.background == "artisan" ? "selected" : ""}
          onclick=${() => setBackground("artisan")}
        >
          Artisan
        </button>
        <button
          class=${pageFilters.background == "charlatan" ? "selected" : ""}
          onclick=${() => setBackground("charlatan")}
        >
          Charlatan
        </button>
        <button
          class=${pageFilters.background == "criminal" ? "selected" : ""}
          onclick=${() => setBackground("criminal")}
        >
          Criminal
        </button>
        <button
          class=${pageFilters.background == "cultist" ? "selected" : ""}
          onclick=${() => setBackground("cultist")}
        >
          Cultist
        </button>
        <button
          class=${pageFilters.background == "entertainer" ? "selected" : ""}
          onclick=${() => setBackground("entertainer")}
        >
          Entertainer
        </button>
        <button
          class=${pageFilters.background == "farmer" ? "selected" : ""}
          onclick=${() => setBackground("farmer")}
        >
          Farmer
        </button>
        <button
          class=${pageFilters.background == "gladiator" ? "selected" : ""}
          onclick=${() => setBackground("gladiator")}
        >
          Gladiator
        </button>
        <button
          class=${pageFilters.background == "guard" ? "selected" : ""}
          onclick=${() => setBackground("guard")}
        >
          Guard
        </button>
        <button
          class=${pageFilters.background == "guide" ? "selected" : ""}
          onclick=${() => setBackground("guide")}
        >
          Guide
        </button>
        <button
          class=${pageFilters.background == "hermit" ? "selected" : ""}
          onclick=${() => setBackground("hermit")}
        >
          Hermit
        </button>
        <button
          class=${pageFilters.background == "laborer" ? "selected" : ""}
          onclick=${() => setBackground("laborer")}
        >
          Laborer
        </button>
        <button
          class=${pageFilters.background == "noble" ? "selected" : ""}
          onclick=${() => setBackground("noble")}
        >
          Noble
        </button>
        <button
          class=${pageFilters.background == "pilgrim" ? "selected" : ""}
          onclick=${() => setBackground("pilgrim")}
        >
          Pilgrim
        </button>
        <button
          class=${pageFilters.background == "sage" ? "selected" : ""}
          onclick=${() => setBackground("sage")}
        >
          Sage
        </button>
        <button
          class=${pageFilters.background == "sailor" ? "selected" : ""}
          onclick=${() => setBackground("sailor")}
        >
          Sailor
        </button>
        <button
          class=${pageFilters.background == "soldier" ? "selected" : ""}
          onclick=${() => setBackground("soldier")}
        >
          Soldier
        </button>
        <button
          class=${pageFilters.background == "urchin" ? "selected" : ""}
          onclick=${() => setBackground("urchin")}
        >
          Urchin
        </button>
      </div>
    </page>
  `;
};

export default backgroundsSelector;
