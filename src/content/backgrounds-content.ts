import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const classesContent: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { background: "acolyte" });
  const setBackground = (background) => (pageFilters.background = background);

  return html`
    <>
    <page title="Background" selection="background" source="UA-Origins, Pg 11">
      Details can be found in the Unearthed Arcana - Origins (page 11-15).
      Select one of the following backgrounds to see instructions for writing in
      the details in your character sheet.
      <button onclick=${() => setBackground("custom")}>
        Custom Background
      </button>
      <button onclick=${() => setBackground("acolyte")}>Acolyte</button>
      <button onclick=${() => setBackground("artisan")}>Artisan</button>
      <button onclick=${() => setBackground("charlatan")}>Charlatan</button>
      <button onclick=${() => setBackground("criminal")}>Criminal</button>
      <button onclick=${() => setBackground("cultist")}>Cultist</button>
      <button onclick=${() => setBackground("entertainer")}>Entertainer</button>
      <button onclick=${() => setBackground("farmer")}>Farmer</button>
      <button onclick=${() => setBackground("gladiator")}>Gladiator</button>
      <button onclick=${() => setBackground("guard")}>Guard</button>
      <button onclick=${() => setBackground("guide")}>Guide</button>
      <button onclick=${() => setBackground("hermit")}>Hermit</button>
      <button onclick=${() => setBackground("laborer")}>Laborer (Mason)</button>
      <button onclick=${() => setBackground("noble")}>Noble</button>
      <button onclick=${() => setBackground("pilgrim")}>Pilgrim</button>
      <button onclick=${() => setBackground("sage")}>Sage</button>
      <button onclick=${() => setBackground("sailor")}>Sailor</button>
      <button onclick=${() => setBackground("soldier")}>Soldier</button>
      <button onclick=${() => setBackground("urchin")}>Urchin</button>
    </page>
    <page
      title="Acolyte"
      group="backgrounds"
      selection="acolyte"
      source="UA-Origins, Pg 11"
    >
      <ol>
        <li>
          Fill in the circles for <b>Insight</b> and <b>Religion</b> in the
          <b>SKILLS</b> section
          <annotation>
            If you already have proficiency in these two skills, feel free to
            select any two skills, so long as they are thematic.
          </annotation>
        </li>
        <li>
          Add the <b>Calligrapher's Supplies</b> and <b>Celestial</b> to the
          <b>PROFICIENCIES & LANGUAGES</b> section
        </li>
        <li>
          Add the <b>Magic Initiate</b> to the "FEATURES & TRAITS" box. You
          <annotation>
            <b>Magic Initiate.</b> (Pg 17) You gain the following benefits
            related to a magical tradition: <br />
            <b>Two Cantrips.</b> You learn two cantrips of your choice from the
            Spell list <br />
            <b>1st-Level Spell.</b> Choose one 1st-level Spell from the Spell
            list. You always have that Spell prepared. You can cast it once
            without a Spell Slot, and you regain the ability to cast it in that
            way when you finish a Long Rest. You can also cast the Spell using
            any Spell Slots you have.
          </annotation>
        </li>
        <li>Write the equipment in the "EQUIPMENT" section</li>
        <li>Add any additional GP to the "EQUIPMENT" section</li>
      </ol>
    </page>
  `;
};

export default classesContent;
