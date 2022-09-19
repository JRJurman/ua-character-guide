import { registerHtml, TramOneComponent } from "tram-one";
import "./expanded-page.css";
import "./page-colors.css";

const html = registerHtml();

const page: TramOneComponent<{ title: string }> = ({ title }, children) => {
  return html`
    <section class="page expanded" page-color="grey">
      <h2>${title}</h2>
      ${children}
    </section>
  `;
};

export default page;
