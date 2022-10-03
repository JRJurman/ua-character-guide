import { registerHtml, TramOneComponent, useStore } from "tram-one";
import "./app.css";
import "./table.css";
import pageScroller from "./page-scroller";
import page from "./page";
import annotation from "./annotation";
import {
  racesContent,
  pageFilters,
  classesContent,
  backgroundsContent,
} from "./content";

const html = registerHtml({
  "page-scroller": pageScroller,
  "races-content": racesContent,
  "page-filters": pageFilters,
  "classes-content": classesContent,
  "backgrounds-content": backgroundsContent,
  annotation: annotation,
  page: page,
});

const app: TramOneComponent = () => {
  const pagesStore = useStore({ race: "", class: "" });

  return html`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          <p>
            Use this web-app to guide you through creating a D&D Character. This
            includes the latest playtest rules for One D&D.
            <br /><br />
            This guide assumes players are starting at level 1, and may not
            reflect the exact rules-as-written, but attempts to simplify and
            guide new players through the process of making a new character.
            <br /><br />
            To start, scroll right and follow the pages in order. If there are
            any issues, feel free to post them here:
            <a href="https://github.com/jrjurman/ua-character-guide/issues"
              >https://github.com/jrjurman/ua-character-guide/issues</a
            >
          </p>
          <br />
          <fieldset>
            <legend>Useful links</legend>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment"
                >
                  D&D Beyond Equipment
                </a>
              </li>
              <li>
                <a target="_blank" href="https://5e.tools/spells.html">
                  5e Tools Spells
                </a>
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Starting Off" selection="starting">
          <ol>
            <li>Write your name in the header under <b>PLAYER NAME</b></li>
            <li>Write in <b>30</b> for your <b>SPEED</b></li>
            <li>
              Write <b>Common</b> as an initial language in
              <b>PROFICIENCIES & LANGUAGES</b>
            </li>
            <li>Write in <b>+2</b> for your <b>PROFICIENCY BONUS</b></li>
          </ol>
        </page>
        <page-filters />
        <races-content />
        <classes-content />
        <page
          title="Background"
          selection="background"
          source="UA-Origins, Pg 11"
        >
          Read the UA Origins (page 11-15) to see the list of sample
          backgrounds, ignoring Ability Scores for now
          <ol>
            <li>
              Choose a background and write the name under <b>BACKGROUND</b> in
              the top header
            </li>
            <li>
              Fill in the circles for any two skill proficiencies in the
              <b>SKILLS</b> section
              <annotation>
                You may treat the two skills listed in your selected background
                as recommendations, but you can choose any two, as long as they
                are thematic
              </annotation>
            </li>
            <li>
              Add the tool and language proficiencies in the
              <b>PROFICIENCIES & LANGUAGES</b> section
            </li>
            <li>
              Add the Feat in the "FEATURES & TRAITS" box
              <i>(Feats are detailed starting on page 16 of UA Origins)</i>
            </li>
            <li>Write the equipment in the "EQUIPMENT" section</li>
            <li>Add any additional GP to the "EQUIPMENT" section</li>
          </ol>
        </page>
        <backgrounds-content />
        <page title="Languages" selection="language" source="UA-Origins, Pg 16">
          Your character should start with Common, a language provided by the
          character background, and an additional starting language listed below
          <fieldset>
            <legend>Standard Languages</legend>
            <li>Common Sign Language</li>
            <li>Dwarvish</li>
            <li>Giant</li>
            <li>Gnomish</li>
            <li>Goblin</li>
            <li>Halfling</li>
            <li>Orc</li>
          </fieldset>

          <fieldset>
            <legend>Rare Languages</legend>
            <li>Abyssal</li>
            <li>Celestial</li>
            <li>Deep Speech</li>
            <li>Draconic</li>
            <li>Infernal</li>
            <li>Primordial</li>
            <li>Sylvan</li>
            <li>Undercommon</li>
          </fieldset>
        </page>
        <page title="Ability Scores" selection="stat-block">
          <ol>
            <li>
              Using the standard array (15, 14, 13, 12, 10, 8), assign each
              value into the Ability Scores listed on the left of your character
              sheet, writing them in the tiny box adjacent to each option
              <fieldset>
                <legend>Primary Abilities</legend>
                <ul>
                  <li>Bard: Charisma</li>
                  <li>Ranger: Dexterity, Wisdom</li>
                  <li>Rogue: Dexterity</li>
                </ul>
              </fieldset>
            </li>
            <li>
              Add an additional +2 and +1 to any two ability scores based on
              your background
              <annotation>
                You may treat the 2 ability scores listed in your selected
                background as recommendations, but you can choose any 2 in any
                order, as long as they are thematic
              </annotation>
            </li>
            <li>
              Fill in the large box above each score the modifier for that value
              <annotation>
                <table>
                  <tr>
                    <th>Score</th>
                    <th>Modifier</th>
                  </tr>
                  <tr>
                    <td>8, 9</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td>10, 11</td>
                    <td>+0</td>
                  </tr>
                  <tr>
                    <td>12, 13</td>
                    <td>+1</td>
                  </tr>
                  <tr>
                    <td>14, 15</td>
                    <td>+2</td>
                  </tr>
                  <tr>
                    <td>16, 17</td>
                    <td>+3</td>
                  </tr>
                </table>
              </annotation>
            </li>
            <li>Set your "INITIATIVE" to your DEX modifier</li>
            <li>
              Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + WIS Modifier (and
              add +2 if you have proficiency in the Perception skill)
            </li>
            <li>
              Set your "HIT POINT MAXIMUM" and "CURRENT HIT POINTS" to your max
              hit dice value (e.g. 8 for 1d8) + your CON Modifier
            </li>
            <li>
              Based on the armor you recieved from your class, and relevant
              ability score from that
              <a
                href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArmorandShields"
                target="_blank"
                >armor</a
              >, set your "ARMOR CLASS"
              <fieldset>
                <table>
                  <tr>
                    <th>Armor Name</th>
                    <th>Armor Class (AC)</th>
                  </tr>
                  <tr>
                    <td>Leather</td>
                    <td>11 + DEX Modifier</td>
                  </tr>
                  <tr>
                    <td>Studded Leather</td>
                    <td>12 + DEX Modifier</td>
                  </tr>
                  <tr>
                    <td>Shield</td>
                    <td>+2</td>
                  </tr>
                </table>
              </fieldset>
            </li>
          </ol>
        </page>
        <page title="Set Spellcasting Details" selection="spellcasting">
          If you have spells as part of your class or background, do the
          following on the Spellcasting Sheet

          <ol>
            <li>
              Set your "SPELLCASTING ABILITY" based on your class or background
              <i>(table below)</i>
            </li>

            <li>
              Set your "SPELL SAVE DC" to 8 + Proficiency Bonus + Spellcasting
              Ability Modifier
            </li>
            <li>
              Set your "SPELL ATTACK BONUS" to Proficiency Bonus + Spellcasting
              Ability Modifier
            </li>
          </ol>

          <fieldset>
            <legend>Class Spellcasting Ability</legend>
            <ul>
              <li>Bard: CHA</li>
              <li>Cleric: WIS</li>
              <li>Druid: WIS</li>
              <li>Sorcerer: CHA</li>
              <li>Warlock: CHA</li>
              <li>Wizard: INT</li>
            </ul>
            <annotation>
              If you got spellcasting from "MAGIC INITIATE" feat, choose either
              INT, WIS, or CHA
            </annotation>
          </fieldset>
        </page>
        <page title="Fill in Attack Bonus" selection="atk-bonus">
          Fill in "ATK BONUS" in the "ATTACKS & SPELLCASTING" section
          <ul>
            <li>
              For finess weapons, add either your STR or DEX modifier +
              Proficiency bonus
            </li>
            <li>
              For melee weapon attacks and unarmed strike, add your STR modifier
              + Proficiency bonus
            </li>
            <li>
              For ranged weapons, add your DEX modifier + Proficiency bonus
            </li>
            <li>
              For spells (that ask for an attack roll, not a DC check) use your
              "SPELL ATTACK BONUS"
            </li>
            <li>
              For spells that have a Spell Save DC check use your "SPELL SAVE
              DC"
            </li>
          </ul>
        </page>
      </page-scroller>
    </main>
  `;
};

export default app;
