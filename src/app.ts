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
          Use this web-app to guide you through creating a D&D Character. This
          includes the latest playtest rules for One D&D.
          <fieldset>
            <legend>Useful links</legend>
            <ul>
              <li>
                D&D Beyond
              <li>
                <a target="_blank" href="https://www.dndbeyond.com/spells"
                  >D&D Beyond Spells</a
                >
              </li>
              <li>
                <a target="_blank" href="https://www.dndbeyond.com/classes"
                  >D&D Beyond Classes</a
                >
              </li>
              <li>
                <a target="_blank" href="https://www.dndbeyond.com/sources/basic-rules/equipment"
                  >D&D Beyond Equipment</a
                >
              </li>
              </li>
              <li> 5e Tools
                <li><a target="_blank" href="https://5e.tools/spells.html">5e Tools Spells</a></li>
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 3-10)
          <ol>
            <li>Write your race in the "RACE" field in the header</li>
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
                  Adrenaline Rush, Darkvision, Powerful Build, Relentless
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
          Read the Classes or in the links below
          <ol>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              (e.g. 1d8), write "1 of 1" for your "Total"
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              left box under "OTHER PROFICIENCIES & LANGUAGES"
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
            </li>
            <li>
              Mark your 2 Saving Throw Proficiencies by filling in the circles
              in the "SAVING THROWS" box
            </li>
            <li>
              Select your starting equipment and add any weapons in "ATTACKS &
              SPELLCASTING" (Ignore ATK BONUS for now)
            </li>
            <li>Add any 1st level features to the "FEATURES & TRAITS" box</li>
            <li>
              If you get spellcasting as part of your 1st level features, add
              damage spells to the "ATTACKS & SPELLCASTING" section (Ignore ATK
              BONUS for now), and list spells in the dedicated Spellcasting
              sheet
            </li>
          </ol>

          <fieldset>
            <legend>Classes</legend>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Barbarian"
                >
                  Barbarian</a
                >, (PHB 46)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Bard"
                >
                  Bard</a
                >, (PHB 51)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Cleric"
                >
                  Cleric</a
                >, (PHB 56)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Druid"
                >
                  Druid</a
                >, (PHB 64)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Fighter"
                >
                  Fighter</a
                >, (PHB 70)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Monk"
                >
                  Monk</a
                >, (PHB 76)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Palidin"
                >
                  Palidin</a
                >, (PHB 82)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Ranger"
                >
                  Ranger</a
                >, (PHB 89)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Rogue"
                >
                  Rogue</a
                >, (PHB 94)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Sorcerer"
                >
                  Sorcerer</a
                >, (PHB 99)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Warlock"
                >
                  Warlock</a
                >, (PHB 105)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Wizard"
                >
                  Wizard</a
                >, (PHB 112)
              </li>
            </ul>
          </fieldset>
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
        <page title="Add a Language" selection="language">
          Your character should start with Common, a language provided by the
          character background, and an additional starting language listed below
          (UA Origins, pg 16)
          <fieldset>
            <legend>Standard Languages</legend>
            <li>Common</li>
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
            <li>Druidic</li>
            <li>Infernal</li>
            <li>
              Primordial (includes the Aquan, Auran, Ignan, and Terran dialects)
            </li>
            <li>Sylvan</li>
            <li>Thieves' Cant</li>
            <li>Undercommon</li>
          </fieldset>
        </page>
        <page title="Set Stat Blocks" selection="stat-block">
          Set your stats using the standard array - 15, 14, 13, 12, 10, 8
          <p style="font-size: small">
            <i>
              Look at the Class Priorities section below for recommendation as
              far as distrubuting stats in the standard array
            </i>
          </p>
          <ol>
            <li>
              Add an additional +2 and +1 to any two stats based on your
              background
              <ul>
                <li>You may choose any stats, as long as they are thematic</li>
                <li>
                  <i>
                    Note: you benefit from even number values, so use these to
                    get to 16, 14, etc
                  </i>
                </li>
              </ul>
            </li>
            <li>
              Set Proficiency Modifier
              <i>
                (All level 1 characters, regardless of class or race, get a +2
                proficiency bonus)
              </i>
            </li>
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
            <p style="font-size:small">
              <i>
                If you got spellcasting from "MAGIC INITIATE" feat, choose
                either INT, WIS, or CHA
              </i>
            </p>
          </fieldset>
        </page>
        <page title="Add Unarmed Strike" selection="unarmed-strike">
          Add Unarmed Strike as an option in the "ATTACKS & SPELLCASTING"
          section. For the damage, write 1 + your STR Mod "Bludgeoning".

          <i>
            Note: On a successful stike, you may alternatively grapple or shove
            instead of damaging with Unarmed Strike, see UA Origins - page 20.
          </i>
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
        <page title="Finishing Touches" selection="finishing-touches">
          <ul>
            <li>Write your name in header under "PLAYER NAME"</li>
            <li>
              Write your character's name in the top left header under
              "CHARACTER NAME"
            </li>
          </ul>
        </page>
      </page-scroller>
    </main>
  `;
};

export default app;
