import { registerHtml, TramOneComponent } from "tram-one";
import selectionCard from "./selection-card";
import "./app.css";

const html = registerHtml({
  "selection-card": selectionCard,
});

const app: TramOneComponent = () => {
  return html`
    <main class="app">
      <h1>Character Guide</h1>
      <form>
        <fieldset>
          <legend>First Selection</legend>

          <selection-card id="race">Choose a Race</selection-card>
          <h3>Read the UA Origins (page 3-10)</h3>
          <h3>Write your race (and sub-race) in the "RACE" in the header</h3>
          <h3>Write your movement speed in the "SPEED" box</h3>
          <h3>Write special traits in the "FEATURES & TRAITS" box</h3>

          <selection-card id="class">Choose a Class</selection-card>
          <h3>Read the Classes in the PHB (page XXX)</h3>
          <h3>
            Set your "HIT DICE" to whatever value dice roll for your class (e.g.
            1d8) and the "Total" to 1
          </h3>
          <h3>
            Write your armor, weapon, and tool proficiencies in the bottom right
            box under "OTHER PROFICIENCIES & LANGUAGES"
          </h3>
          <h3>
            Mark your 2 chosen skill proficiencies by filling in the circle in
            the "SKILLS" box
          </h3>
          <h3>
            Select your starting equipment and add any damage options in
            "ATTACKS & SPELLCASTING" (Ignore ATK BONUS for now)
          </h3>
          <h3>Add any 1st level features to the "FEATURES & TRAITS" box</h3>
          <h3>
            If you get spellcasting as part of your 1st level features, add
            damage spells to the "ATTACKS & SPELLCASTING" section (Ignore ATK
            BONUS for now), and list spells in the dedicated Spellcasting sheet.
          </h3>

          <selection-card id="unarmed-strike">
            Add Unarmed Strike (UA Origins, pg 20) to the "ATTACKS &
            SPELLCASTING" section
          </selection-card>

          <selection-card id="background">Choose a Background</selection-card>
          <h3>Read the UA Origins (page 11-15)</h3>
          <h3>Ignore Ability Scores for now</h3>
          <h3>Mark the 2 skill proficiencies in the "SKILLS" section</h3>
          <h3>
            Add the tool and language proficiencies in the "OTHER PROFICIENCIES
            & LANGUAGES" section
          </h3>
          <h3>Add the Feat in the "FEATURES & TRAITS" box</h3>
          <h3>Write the equipment in the "EQUIPMENT" section</h3>
          <h3>Add any additional GP to the "EQUIPMENT" section</h3>
          <selection-card id="language"
            >Add an additional starting language (UA Origins, pg
            16)</selection-card
          >

          <selection-card id="stat-block">Set Stat Blocks</selection-card>

          <h3>
            Set your stats starting with the standard array - 15, 14, 13, 12,
            10, 8
          </h3>
          <h4>For Barbarian, prioritize STR, CON, & DEX</h4>
          <h4>For Bard, prioritize CHA, DEX</h4>
          <h4>For Cleric, prioritize WIS, STR or CON</h4>
          <h4>For Druid, prioritize WIS, CON</h4>
          <h4>
            For Fighter, prioritize STR (or DEX for ranged weapons), and CON
          </h4>
          <h4>For Monk, prioritize DEX, WIS</h4>
          <h4>For Paladin, prioritize STR, CHA</h4>
          <h4>For Ranger, prioritize DEX, WIS</h4>
          <h4>For Rogue, prioritize DEX, INT or CHA</h4>
          <h4>For Sorcerer, prioritize CHA, CON</h4>
          <h4>For Warlock, prioritize CHA, CON</h4>
          <h4>For Wizard, prioritize INT, CON or DEX</h4>

          <h3>
            Add an additional +2 and +1 to any two stats based on your
            background
          </h3>
          <h4>prioritize boosts that would bump attributes to 16</h4>
          <h3>Set Proficiency Modifier (+2)</h3>

          <h3>
            Based on your class, set your "HIT POINTS" based on a starting value
            + CON modifier
          </h3>
          <h3>
            Based on the armor you recieved from your class, and relevant stats
            from that armor, set your "ARMOR CLASS"
          </h3>
          <h3>Set your "INITIATIVE" to your DEX modifier</h3>
          <h3>
            Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + Perception skill
            modifier
          </h3>

          <selection-card id="spellcasting"
            >Set Spellcasting Details</selection-card
          >
          <h3>
            If you have spells as part of your class or background, do the
            following on the Spellcasting Sheet
          </h3>

          <h3>
            Set your "SPELLCASTING ABILITY" based on your class or background
          </h3>
          <h4>Bard: CHA</h4>
          <h4>Cleric: WIS</h4>
          <h4>Druid: WIS</h4>
          <h4>Sorcerer: CHA</h4>
          <h4>Warlock: CHA</h4>
          <h4>Wizard: INT</h4>
          <h4>
            If you got spellcasting from "MAGIC INITIATE" feat, choose one from
            INT, WIS, CHA
          </h4>
          <h3>
            Set your "SPELL SAVE DC" to 8 + Proficiency Bonus (+2) +
            Spellcasting Ability Modifier
          </h3>
          <h3>
            Set your "SPELL ATTACK BONUS" to Proficiency Bonus (+2) +
            Spellcasting Ability Modifier
          </h3>

          <selection-card id="atk-bonus"
            >Fill in ATK BONUS for all attacks</selection-card
          >
          <h3>
            melee using STR, finess using STR or DEX, ranged using DEX, and
            spells using the SPELL ATTACK BONUS
          </h3>
        </fieldset>
      </form>
    </main>
  `;
};

export default app;
