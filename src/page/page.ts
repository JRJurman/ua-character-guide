import { registerHtml, TramOneComponent } from "tram-one";
import "./expanded-page.css";
import "./page-colors.css";
import "./page.css";

const html = registerHtml();

const page: TramOneComponent<{
  title: string;
  group?: string;
  selection: string;
  source?: string;
}> = ({ title, group, selection, source }, children) => {
  return html`
    <section
      class="page"
      page-color="grey"
      page-group=${group}
      page-selection=${selection}
    >
      <h2 class="header">
        <span class="title">${title}</span>
        <span class="source">${source}</span>
      </h2>
      ${children}
    </section>
  `;
};

export default page;
