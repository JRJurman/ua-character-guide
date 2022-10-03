import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const pageFilters: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", {
    race: "human",
    selectedClass: "bard",
    background: "acolyte",
  });
  return html`
    <style>
      .page[page-group="race"] {
        display: none;
      }
      .page[page-selection="${pageFilters.race}"] {
        display: inherit;
      }
      .page[page-group="classes"] {
        display: none;
      }
      .page[page-selection="${pageFilters.selectedClass}"] {
        display: inherit;
      }
      .page[page-group="backgrounds"] {
        display: none;
      }
      .page[page-selection="${pageFilters.background}"] {
        display: inherit;
      }
    </style>
  `;
};

export default pageFilters;
