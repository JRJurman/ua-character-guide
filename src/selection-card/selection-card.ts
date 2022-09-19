import { registerHtml, TramOneComponent } from "tram-one";
import "./selection-card.css";

const html = registerHtml();

const selectionCard: TramOneComponent = ({ id, title }, children) => {
  return html`
    <h2>
      <input
        class="selection-card"
        type="radio"
        id=${id}
        name="selection"
        value=${id}
      />
      <label for=${id}>${title}</label>
    </h2>
  `;
};

export default selectionCard;
