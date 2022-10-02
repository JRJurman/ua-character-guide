import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const classesSelector: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { selectedClass: "bard" });
  const setClass = (selectedClass) =>
    (pageFilters.selectedClass = selectedClass);

  const selectedClass = pageFilters.selectedClass;

  return html`
    <page title="Class" selection="class" source="UA-Expert-Classes, Pg 3">
      Details can be found in the Unearthed Arcana - Expert Classes (page 3-15).
      Select one of the following classes to see instructions for writing in the
      details in your character sheet.
      <annotation>
        Note, only the Expert Classes are available for now. More will be added
        as the UA expands.
      </annotation>
      <div class="three-col-wrapper">
        <button
          class=${selectedClass == "bard" ? "selected" : ""}
          onclick=${() => setClass("bard")}
        >
          Bard
        </button>
        <button
          class=${selectedClass == "ranger" ? "selected" : ""}
          onclick=${() => setClass("ranger")}
        >
          Ranger
        </button>
        <button
          class=${selectedClass == "rogue" ? "selected" : ""}
          onclick=${() => setClass("rogue")}
        >
          Rogue
        </button>
      </div>
    </page>
  `;
};

export default classesSelector;
