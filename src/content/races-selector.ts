import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const racesSelector: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { race: "" });
  const setRace = (race) => (pageFilters.race = race);

  const selectedRace = pageFilters.race;

  return html`
		<page title="Race" selection="race" source="UA-Origins, Pg 2">
			Details can be found in the Unearthed Arcana - Origins (page 2-10).
			Select one of the following races to see instructions for writing in
			the details in your character sheet.
			<div class="three-col-wrapper">
				<button class=${selectedRace == "human" ? "selected" : ""} onclick=${() =>
    setRace("human")}>Human</button>
				<button class=${selectedRace == "ardling" ? "selected" : ""} onclick=${() =>
    setRace("ardling")}>Ardling</button>
			<button class=${selectedRace == "dragonborn" ? "selected" : ""}" onclick=${() =>
    setRace("dragonborn")}>Dragonborn</button>
				<button class=${selectedRace == "dwarf" ? "selected" : ""} onclick=${() =>
    setRace("dwarf")}>Dwarf</button>
				<button class=${selectedRace == "elf" ? "selected" : ""} onclick=${() =>
    setRace("elf")}>Elf</button>
				<button class=${selectedRace == "gnome" ? "selected" : ""} onclick=${() =>
    setRace("gnome")}>Gnome</button>
				<button class=${selectedRace == "halfling" ? "selected" : ""} onclick=${() =>
    setRace("halfling")}>Halfling</button>
				<button class=${selectedRace == "orc" ? "selected" : ""} onclick=${() =>
    setRace("orc")}>Orc</button>
				<button class=${selectedRace == "tiefling" ? "selected" : ""} onclick=${() =>
    setRace("tiefling")}>Tiefling</button>
			</div>
		</page>
  `;
};

export default racesSelector;
