import { registerHtml, TramOneComponent } from "tram-one";
import "./annotation.css";

const html = registerHtml();

const annotation: TramOneComponent = (props, children) => {
  return html`
    <fieldset class="annotation">
      <i>${children}</i>
    </fieldset>
  `;
};

export default annotation;
