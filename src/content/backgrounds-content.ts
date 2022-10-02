import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";
import backgroundsSelector from "./backgrounds-selector";

const html = registerHtml({
  annotation: annotation,
  page: page,
  "backgrounds-selector": backgroundsSelector,
});

const backgroundsContent: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { background: "acolyte" });
  const setBackground = (background) => (pageFilters.background = background);

  return html`
    <>
    <backgrounds-selector />
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
          Add the <b>Magic Initiate (Divine)</b> to the "FEATURES & TRAITS" box.
          You can read more details about this feat in UA-Origins, Pg 17. The
          Divine spell list can be found in UA-Origins, Pg 21

          <annotation>
            <b>Magic Initiate.</b> You gain the following benefits related to a
            magical tradition: <br />
            <b>Two Cantrips.</b> You learn two cantrips of your choice from the
            [Divine] Spell list. <br />
            <b>1st-Level Spell.</b> Choose one 1st-level Spell from the [Divine]
            Spell list. You always have that Spell prepared. You can cast it
            once without a Spell Slot, and you regain the ability to cast it in
            that way when you finish a Long Rest. You can also cast the Spell
            using any Spell Slots you have.
          </annotation>
        </li>
        <li>
          Write the following items in the <b>EQUIPMENT</b> section:<br />
          Book (Prayers), Parchment (10 sheets), Calligrapher's Supplies, Holy
          Symbol, Robe
        </li>
        <li>
          Add <b>3</b> to your existing Gold Pieces in the
          <b>EQUIPMENT</b> section.
        </li>
      </ol>
    </page>
    <page
      title="Artisan"
      group="backgrounds"
      selection="artisan"
      source="UA-Origins, Pg 12"
    >
      <ol>
        <li>
          Fill in the circles for <b>Investigation</b> and <b>Persuasion</b> in the
          <b>SKILLS</b> section
          <annotation>
            If you already have proficiency in these two skills, feel free to
            select any two skills, so long as they are thematic.
          </annotation>
        </li>
        <li>
          Add the
          <a href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArtisansTools" target="_blank">
          <b>Artisan's Tools</b> (one of your choice)</a> and <b>Gnomish</b> to the
          <b>PROFICIENCIES & LANGUAGES</b> section
        </li>
        <li>
          Add the <b>Crafter</b> to the "FEATURES & TRAITS" box.
          You can read more details about this feat in UA-Origins, Pg 16
          <annotation>
            <b>Crafter.</b> You gain the following benefits: <br />
            <b>Tool .</b> You learn two cantrips of your choice from the
            [Divine] Spell list. <br />
            <b>1st-Level Spell.</b> Choose one 1st-level Spell from the [Divine]
            Spell list. You always have that Spell prepared. You can cast it
            once without a Spell Slot, and you regain the ability to cast it in
            that way when you finish a Long Rest. You can also cast the Spell
            using any Spell Slots you have.
          </annotation>
        </li>
        <li>
          Write the following items in the <b>EQUIPMENT</b> section:<br />
          Book (Prayers), Parchment (10 sheets), Calligrapher's Supplies, Holy
          Symbol, Robe
        </li>
        <li>
          Add <b>3</b> to your existing Gold Pieces in the
          <b>EQUIPMENT</b> section.
        </li>
      </ol>
    </page>
    </>
  `;
};

export default backgroundsContent;
