import { registerHtml, TramOneComponent } from "tram-one";
import "./expanded-page.css";
import "./page-colors.css";

const html = registerHtml();

const page: TramOneComponent<{ title: string; selection: string }> = (
  { title, selection },
  children
) => {
  return html`
    <section class="page" page-color="grey" page-selection=${selection}>
      <h2>${title}</h2>
      ${children}
    </section>
  `;
};

export default page;
