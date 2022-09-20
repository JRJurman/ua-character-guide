import { registerHtml, TramOneComponent, useStore } from "tram-one";
import selectionCard from "./selection-card";
import "./app.css";
import "./table.css";
import pageScroller from "./page-scroller";
import page from "./page";

const html = registerHtml({
  "selection-card": selectionCard,
  "page-scroller": pageScroller,
  page: page,
});

const app: TramOneComponent = () => {
  return html`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          <selection-card id="race" title="Choose a Race" />
          <selection-card id="class" title="Choose a Class" />
          <selection-card id="background" title="Choose a Background" />
          <selection-card id="language" title="Additional Language" />
          <selection-card id="unarmed-strike" title="Add Unarmed Strike" />
          <selection-card id="stat-block" title="Set Stat Blocks" />
          <selection-card id="spellcasting" title="Set Spellcasting Details" />
          <selection-card id="atk-bonus" title="Fill in Attack Bonus" />
        </page>
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 3-10)
          <ol>
            <li>
              Write your race
              <i>
                (or sub-race, if picking from the "... of Many Worlds" section
                of a race)
              </i>
              in the "RACE" field in the header
            </li>
            <li>
              Write your movement speed in the "SPEED" box
              <i>(this should be 30ft, unless otherwise stated)</i>
            </li>
            <li>
              Write special traits in the "FEATURES & TRAITS" box
              <i
                >(while these are listed below, be sure to check what they do
                and how they might affect other sections of the character
                sheet)</i
              >
            </li>
          </ol>
          <fieldset>
            <legend>Races</legend>
            <table>
              <tr>
                <th>Race</th>
                <th>Special Traits</th>
              </tr>
              <tr>
                <td><b>Human</b></td>
                <td>Resourceful, Skillful, Versatile</td>
              </tr>
              <tr>
                <td><b>Ardling</b></td>
                <td>
                  Angelic Flight, Celestial Legacy, Damage Resistance (Radiant)
                </td>
              </tr>
              <tr>
                <td><b>Dragonborn</b></td>
                <td>
                  Draconic Ancestry, Breath Weapon, Damage Resistance,
                  Darkvision, Draconic Language
                </td>
              </tr>
              <tr>
                <td><b>Dwarf</b></td>
                <td>
                  Darkvision, Dwarven Resilience, Forge Wise, Stonecunning
                </td>
              </tr>
              <tr>
                <td><b>Elf</b></td>
                <td>
                  Darkvision, Elven Lineage, Fey Ancestry, Keen Senses, Trance
                </td>
              </tr>
              <tr>
                <td><b>Gnome</b></td>
                <td>Darkvision, Gnomish Cunning, Gnomish Lineage</td>
              </tr>
              <tr>
                <td><b>Halfling</b></td>
                <td>Brave, Halfling Nimbleness, Luck, Naturally Stealthy</td>
              </tr>
              <tr>
                <td><b>Orc</b></td>
                <td>
                  Adrenaline Rush, Darkvision, Powerful BUild, Relentless
                  Endurance
                </td>
              </tr>
              <tr>
                <td><b>Tiefling</b></td>
                <td>Darkvision, Fiendish Legacy, Otherwordly Presence</td>
              </tr>
            </table>
          </fieldset>
        </page>
        <page title="Choose a Class" selection="class">
          Read the Classes in the PHB (page XXX)
          <ol>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              (e.g. 1d8) and write "1 of 1" for your "Total"
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              right box under "OTHER PROFICIENCIES & LANGUAGES"
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
            </li>
            <li>
              Select your starting equipment and add any damage options in
              "ATTACKS & SPELLCASTING" (Ignore ATK BONUS for now)
            </li>
            <li>Add any 1st level features to the "FEATURES & TRAITS" box</li>
            <li>
              If you get spellcasting as part of your 1st level features, add
              damage spells to the "ATTACKS & SPELLCASTING" section (Ignore ATK
              BONUS for now), and list spells in the dedicated Spellcasting
              sheet.
            </li>
          </ol>
        </page>
        <page title="Choose a Background" selection="background">
          Read the UA Origins (page 11-15) Ignore Ability Scores for now
          <ol>
            <li>Mark the 2 skill proficiencies in the "SKILLS" section</li>
            <li>
              Add the tool and language proficiencies in the "OTHER
              PROFICIENCIES & LANGUAGES" section
            </li>
            <li>Add the Feat in the "FEATURES & TRAITS" box</li>
            <li>Write the equipment in the "EQUIPMENT" section</li>
            <li>Add any additional GP to the "EQUIPMENT" section</li>
          </ol>
        </page>
        <page title="Additional Language" selection="language">
          Add an additional starting language (UA Origins, pg 16)
        </page>
        <page title="Add Unarmed Strike" selection="unarmed-strike">
          (UA Origins, pg 20) to the "ATTACKS & SPELLCASTING" section
        </page>
        <page title="Set Stat Blocks" selection="stat-block">
          Set your stats using the standard array - 15, 14, 13, 12, 10, 8

          <ol>
            <li>
              Add an additional +2 and +1 to any two stats based on your
              background
              <ul>
                <li>You may choose any stats, as long as they are thematic.</li>
                <li>
                  Note: you benefit from even number values, so use these to get
                  to 16, 14, etc
                </li>
              </ul>
            </li>
            <li>Set Proficiency Modifier (+2)</li>
            <li>
              Based on your class, set your "HIT POINTS" based on a starting
              value + CON modifier
            </li>
            <li>
              Based on the armor you recieved from your class, and relevant
              stats from that armor, set your "ARMOR CLASS"
            </li>
            <li>Set your "INITIATIVE" to your DEX modifier</li>
            <li>
              Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + Perception skill
              modifier
            </li>
          </ol>
          <fieldset>
            <legend>Class Priorities</legend>
            <li>Barbarian: STR, CON, DEX</li>
            <li>Bard: CHA, DEX</li>
            <li>Cleric: WIS, STR or CON</li>
            <li>Druid: WIS, CON</li>
            <li>Fighter: STR (or DEX for ranged weapons), CON</li>
            <li>Monk: DEX, WIS</li>
            <li>Paladin: STR, CHA</li>
            <li>Ranger: DEX, WIS</li>
            <li>Rogue: DEX, INT or CHA</li>
            <li>Sorcerer: CHA, CON</li>
            <li>Warlock: CHA, CON</li>
            <li>Wizard: INT, CON or DEX</li>
          </fieldset>
        </page>
        <page title="Set Spellcasting Details" selection="spellcasting">
          If you have spells as part of your class or background, do the
          following on the Spellcasting Sheet

          <ol>
            <li>
              Set your "SPELLCASTING ABILITY" based on your class or background
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
              <br />
              <li>
                If you got spellcasting from "MAGIC INITIATE" feat, choose one
                from INT, WIS, CHA
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Fill in Attack Bonus" selection="atk-bonus">
          Fill in "ATK BONUS" in the "ATTACKS & SPELLCASTING" section.
          <ul>
            <ol>
              For melee weapon attacks, add your STR modifier + Proficiency
              bonus
            </ol>
            <ol>
              For finess weapons, add either your STR or DEX modifier +
              Proficiency bonus
            </ol>
            <ol>
              For ranged weapons, add either your DEX modifier + Proficiency
              bonus
            </ol>
            <ol>
              For spells (that ask for an attack roll, not a DC check) use your
              "SPELL ATTACK BONUS"
            </ol>
            <ol>
              For spells that have a Spell Save DC check use your "SPELL SAVE
              DC"
            </ol>
          </ul>
        </page>
      </page-scroller>
    </main>
  `;
};

export default app;
