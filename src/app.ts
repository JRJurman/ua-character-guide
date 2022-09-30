import { registerHtml, TramOneComponent, useStore } from "tram-one";
import selectionCard from "./selection-card";
import "./app.css";
import "./table.css";
import pageScroller from "./page-scroller";
import page from "./page";
import annotation from "./annotation";

const html = registerHtml({
  "selection-card": selectionCard,
  "page-scroller": pageScroller,
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

          <fieldset>
            <legend>Useful links</legend>
            <ul>
              <li>
                D&D Beyond
                <ul>
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
                    <a
                      target="_blank"
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment"
                      >D&D Beyond Equipment</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                5e Tools
                <ul>
                  <li>
                    <a target="_blank" href="https://5e.tools/spells.html"
                      >5e Tools Spells</a
                    >
                  </li>
                </ul>
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
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 2-10)
          <button>Human</button>
          <button>Ardling</button>
          <button>Dragonborn</button>
        </page>
        <page title="Human" selection="human" source="UA-Origins, Pg 2">
          <ol>
            <li>Write <b>Human</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Resourceful</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Resourceful.</b> You gain Inspiration whenever you finish a
                Long Rest.
              </annotation>
            </li>
            <li>
              Add the <b>Skillful</b> trait to your <b>FEATS & TRAITS</b>, and
              fill in the circle next to any one skill in the
              <b>SKILLS</b> section.
              <annotation>
                <b>Skillful.</b> You gain Proficiency in one Skill of your
                choice.
              </annotation>
            </li>
            <li>
              Add the <b>Versatile</b> trait to your <b>FEATS & TRAITS</b>, and
              add the <b>Skilled</b> feat - then fill in the circles for three
              skills.
              <annotation>
                <b>Versatile.</b> You gain the Skilled Feat or another 1st-level
                Feat of your choice.
              </annotation>
              <annotation>
                <b>Skilled.</b> You have exceptionally broad learning. Choose
                three Skills in which you lack Proficiency. You gain Proficiency
                in those Skills.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Ardling" selection="ardling" source="UA-Origins, Pg 3">
          <ol>
            <li>Write <b>Ardling</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Angelic Flight</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Angelic Flight.</b> As a Bonus Action, you sprout spectral
                wings for a moment and fly up to a number of feet equal to your
                Speed. If you are in the air at the end of this movement, you
                fall if nothing is holding you aloft. You can use this Bonus
                Action a number of times equal to your Proficiency Bonus, and
                you regain all expended uses when you finish a Long Rest.
              </annotation>
            </li>
            <li>
              Add the <b>Celestial Legacy</b> trait to your
              <b>FEATS & TRAITS</b>, and select a Celestial Legacy from the
              <b>CELESTIAL LEGECIES</b> table. Add this in the <b>RACE</b> field
              in the header
              <annotation>
                <table>
                  <thead>
                    <tr>
                      <th>Legacy</th>
                      <th>Suggested Animals</th>
                      <th>1st Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Exalted</td>
                      <td>Cat, Eagle, Goat, Mule</td>
                      <td>
                        <a
                          href="https://5e.tools/spells.html#thaumaturgy_phb"
                          target="_blank"
                        >
                          Thaumaturgy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Heavenly</td>
                      <td>Elephant, Owl, Pig, Stork</td>
                      <td>
                        <a
                          href="https://5e.tools/spells.html#light_phb"
                          target="_blank"
                        >
                          Light
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Idyllic</td>
                      <td>Bear, Dog, Raven, Toad</td>
                      <td>Guidance (see UA - Expert Classes, pg 32)</td>
                    </tr>
                  </tbody>
                </table>
              </annotation>
            </li>
            <li>
              Write the <b>Damage Resistance</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation
                ><b>Damage Resistance.</b> You have Resistance to Radiant
                Damage.</annotation
              >
            </li>
          </ol>
        </page>
        <page
          title="Dragonborn"
          selection="dragonborn"
          source="UA-Origins, Pg 4"
        >
          <ol>
            <li>
              Write <b>Dragonborn</b> in the <b>RACE</b> field in the header
            </li>
            <li>
              Add the <b>Draconic Ancestry</b> trait to your
              <b>FEATS & TRAITS</b>, and select a Draconic Ancestor from the
              <b>DRACONIC ANCESTOR</b> table. Add this in the <b>RACE</b> field
              in the header
              <annotation>
                <table>
                  <thead>
                    <tr>
                      <th>Dragon</th>
                      <th>Damage Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Black</td>
                      <td>Acid</td>
                    </tr>
                    <tr>
                      <td>Blue</td>
                      <td>Lightning</td>
                    </tr>
                    <tr>
                      <td>Brass</td>
                      <td>Fire</td>
                    </tr>
                    <tr>
                      <td>Bronze</td>
                      <td>Lightning</td>
                    </tr>
                    <tr>
                      <td>Copper</td>
                      <td>Acid</td>
                    </tr>
                    <tr>
                      <td>Gold</td>
                      <td>Fire</td>
                    </tr>
                    <tr>
                      <td>Green</td>
                      <td>Poison</td>
                    </tr>
                    <tr>
                      <td>Red</td>
                      <td>Fire</td>
                    </tr>
                    <tr>
                      <td>Silver</td>
                      <td>Cold</td>
                    </tr>
                    <tr>
                      <td>White</td>
                      <td>Cold</td>
                    </tr>
                  </tbody>
                </table>
              </annotation>
            </li>
            <li>
              Add the <b>Breath Weapon</b> trait to the
              <b>FEATS & TRAITS</b> and add a <b>Breath Weapon</b> attack to the
              <b>ATTACKS & SPELLCASTING</b> table. Write <b>1d10 + 1</b> and the
              damage type from your Draconic Ancestry in the
              <b>DAMAGE / TYPE</b> field. Ignore <b>ATK BONUS</b> for now.
              <annotation>
                <b>Breath Weapon.</b> As an Action, you exhale destructive
                energy in a 15-foot cone. Each creature in that area must make a
                Dexterity saving throw against a DC equal to 8 + your
                Constitution modifier + your Proficiency Bonus. On a failed
                save, a creature takes 1d10 + your character level in damage of
                the type determined by your Draconic Ancestry trait. On a
                successful save, a creature takes half as much damage.You can
                use this Breath Weapon a number of times equal to your
                Proficiency Bonus, and you regain all expended uses when you
                finish a Long Rest.
              </annotation>
            </li>
            <li>
              Add the <b>Damage Resistance</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Damage Resistance.</b> You have Resistance to the damage type
                determined by your Draconic Ancestry trait.
              </annotation>
            </li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add <b>Draconic</b> to <b>PROFICIENCES & LANGUAGES</b>
              <annotation>
                <b>Draconic Language.</b> You instinctively know the language of
                dragons. You can therefore speak, read, and write Draconic.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Dwarf" selection="dwarf" source="UA-Origins, Pg 5">
          <ol>
            <li>Write <b>Dwarf</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add the <b>Dwarven Resilience</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Dwarven Resilience.</b> You have Resistance to Poison Damage.
                You also have Advantage on saving throws you make to avoid or
                end the Poisoned Condition on yourself.
              </annotation>
            </li>
            <li>
              Add the <b>Dwarven Toughness</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Dwarven Toughness.</b>
                Your Hit Point Maximum increases by 1, and it increases by 1
                again whenever you gain a level.
              </annotation>
            </li>
            <li>
              Add the <b>Forge Wise</b> trait to your <b>FEATS & TRAITS</b> and
              add two of the listed tool proficiencies in the
              <b>LANGUAGES & PROFICIENCES</b> section
              <annotation>
                <b>Forge Wise.</b>
                Your divine creator gave you an uncanny affinity for working
                with stone or metal. You gain Tool Proficiency with two of the
                following options of your choice: Jeweler's Tools, Mason's
                Tools, Smith's Tools, or Tinker's Tools.
              </annotation>
            </li>
            <li>
              Add the <b>Stonecunning</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Stonecunning.</b>
                As a Bonus Action, you gain Tremorsense with a range of 60 feet
                for 10 minutes. You must be on a stone surface or touching such
                a surface to use this Tremorsense. The stone can be natural or
                worked. You can use this Bonus Action a number of times equal to
                your Proficiency Bonus, and you regain all expended uses when
                you finish a Long Rest.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Elf" selection="elf" source="UA-Origins, Pg 6">
          <ol>
            <li>Write <b>Elf</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add the <b>Elven Lineage</b> trait to your <b>FEATS & TRAITS</b>,
              and select a Lineage from the <b>ELVEN LINEAGES</b> table. Add
              this in the <b>RACE</b> field in the header
              <annotation>
                <table>
                  <thead>
                    <tr>
                      <th>Lineage</th>
                      <th>1st Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Drow</td>
                      <td>
                        The range of your Darkvision increases to 120 feet. You
                        also know the
                        <a
                          href="https://5e.tools/spells.html#dancing%20lights_phb"
                          target="_blank"
                        >
                          Dancing Lights
                        </a>
                        cantrip.
                      </td>
                    </tr>
                    <tr>
                      <td>High Elf</td>
                      <td>
                        You know the
                        <a
                          href="https://5e.tools/spells.html#prestidigitation_phb"
                          target="_blank"
                        >
                          Prestidigitation
                        </a>
                        cantrip. Whenever you finish a Long Rest, you can
                        replace that cantrip with a different cantrip from the
                        Arcane Spell List.
                      </td>
                    </tr>
                    <tr>
                      <td>Wood Elf</td>
                      <td>
                        Your Speed increases to 35 feet. You also know the
                        <a
                          href="https://5e.tools/spells.html#druidcraft_phb"
                          target="_blank"
                        >
                          Druidcraft
                        </a>
                        cantrip.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </annotation>
            </li>
            <li>
              Add the <b>Fey Ancestry</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Fey Ancestry.</b> You have Advantage on saving throws you
                make to avoid or end the Charmed Condition on yourself.
              </annotation>
            </li>
            <li>
              Add the <b>Keen senses</b> trait to your <b>FEATS & TRAITS</b> and
              fill in the circle next to the <b>Perception</b> skill in the
              <b>SKILLS</b> section
              <annotation>
                <b>Keen senses.</b> You have Proficiency in the Perception
                Skill.
              </annotation>
            </li>
            <li>
              Add the <b>Trance</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Trance.</b> You don't need to sleep, and magic can't put you
                to sleep. You can finish a Long Rest in 4 hours if you spend
                those hours in a trancelike meditation, during which you retain
                consciousness.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Gnome" selection="gnome" source="UA-Origins, Pg 7">
          <ol>
            <li>Write <b>Gnome</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add the <b>Gnomish Cunning</b> trait to your <b>FEATS & TRAITS</b>
            </li>
            <li>
              Add the <b>Gnomish Lineage</b> trait to your
              <b>FEATS & TRAITS</b>, and select a Lineage from the
              <b>GNOMISH LINEAGES</b> table. Add this in the <b>RACE</b> field
              in the header
              <annotation>
                <table>
                  <thead>
                    <tr>
                      <th>Lineage</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Forest Gnome</td>
                      <td>
                        You know the
                        <a
                          href="https://5e.tools/spells.html#minor%20illusion_phb"
                          target="_blank"
                        >
                          Minor Illusion
                        </a>
                        cantrip. You can also cast the
                        <a
                          href="https://5e.tools/spells.html#speak%20with%20animals_phb"
                          target="_blank"
                        >
                          Speak with Animals
                        </a>
                        Spell with this trait. You can cast it with the trait a
                        number of times equal to your Proficiency Bonus, and you
                        regain all expended uses when you finish a Long Rest.
                        You can also use any Spell Slots you have to cast the
                        Spell.
                      </td>
                    </tr>
                    <tr>
                      <td>Rock Gnome</td>
                      <td>
                        You know the
                        <a
                          href="https://5e.tools/spells.html#mending_phb"
                          target="_blank"
                        >
                          Mending
                        </a>
                        and
                        <a
                          href="https://5e.tools/spells.html#prestidigitation_phb"
                          target="_blank"
                        >
                          Prestidigitation
                        </a>
                        cantrips. In addition, you can spend 10 minutes casting
                        Prestidigitation to create a Tiny clockwork device (AC
                        5, 1 HP), such as a toy, a fire starter, or a music box.
                        Casting the Spell in this way consumes 10GP worth of raw
                        material (string, gears, and the like), which you
                        provide during the casting. When you create the device,
                        you determine its function by choosing one effect from
                        Prestidigitation; the device produces that effect
                        whenever you or another creature takes a Bonus Action to
                        touch the device and activate it. If the chosen effect
                        has options within it, you choose one of those options
                        for the device when you create it. For example, if you
                        choose the spell's ignite-extinguish effect, you
                        determine whether the device ignites or extinguishes
                        fire; the device doesn't do both. You can have three
                        such devices in existence at a time, and each one
                        dismantles itself 8 hours after its creation. You can
                        also touch one of your devices and dismantle it as an
                        Action. After a device is dismantled, the 10 GP of
                        materials used to create it can be reclaimed.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Halfling" selection="halfling" source="UA-Origins, Pg 8">
          <ol>
            <li>
              Write <b>Halfling</b> in the <b>RACE</b> field in the header
            </li>
            <li>
              Add the <b>Brave</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Brave.</b> You have Advantage on saving throws you make to
                avoid or end the Frightened Condition on yourself.
              </annotation>
            </li>
            <li>
              Add the <b>Halfling Nimbleness</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Halfling Nimbleness.</b> You can move through the space of
                any creature that is of a Size larger than yours, but you can't
                stop there.
              </annotation>
            </li>
            <li>
              Add the <b>Luck</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Luck.</b> When you roll a 1 on the d20 of a d20 Test, you can
                reroll the die, and you must use the new roll.
              </annotation>
            </li>
            <li>
              Add the <b>Naturally Stealthy</b> trait to your
              <b>FEATS & TRAITS</b> and fill in the circle for <b>Stealth</b> in
              the <b>SKILLS</b> section.
              <annotation>
                <b>Naturally Stealthy.</b> You have Proficiency in the Stealth
                Skill.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Orc" selection="orc" source="UA-Origins, Pg 9">
          <ol>
            <li>Write <b>Orc</b> in the <b>RACE</b> field in the header</li>
            <li>
              Add the <b>Adrenaline Rush</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Adrenaline Rush.</b> You can take the Dash Action as a Bonus
                Action. When you do so, you gain a number of Temporary Hit
                Points equal to your Proficiency Bonus. You can use this trait a
                number of times equal to your Proficiency Bonus, and you regain
                all expended uses when you finish a Long Rest.
              </annotation>
            </li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add the <b>Powerful Build</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Powerful Build.</b> You count as one Size larger when
                determining your carrying capacity and the weight you can push,
                drag, or lift.
              </annotation>
            </li>
            <li>
              Add the <b>Relentless Endurance</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Relentless Endurance.</b> When you are reduced to 0 Hit
                Points but not killed outright, you can drop to 1 Hit Point
                instead. Once you use this trait, you can't do so again until
                you finish a Long Rest.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Tiefling" selection="tiefling" source="UA-Origins, Pg 9">
          <ol>
            <li>
              Write <b>Tiefling</b> in the <b>RACE</b> field in the header
            </li>
            <li>
              Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
              <annotation>
                <b>Darkvision.</b> You have Darkvision with a range of 60 feet.
              </annotation>
            </li>
            <li>
              Add the <b>Fiendish Legacy</b> trait to your
              <b>FEATS & TRAITS</b>, and select a Legacy from the
              <b>Fiendish Legacies</b> table. Add this in the <b>RACE</b> field
              in the header. Add the cantrip you recieve to your
              <b>ATTACKS & SPELLCASTING</b> section, ignoring <b>ATK BONUS</b>,
              and add this spell to the <b>SPELLCASTING</b> page.
              <annotation>
                <table>
                  <thead>
                    <tr>
                      <th>Legacy</th>
                      <th>1st Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Abyssal</td>
                      <td>
                        You have Resistance to Poison Damage. You also know the
                        <a
                          href="https://5e.tools/spells.html#poison%20spray_phb"
                          target="_blank"
                        >
                          Poison Spray
                        </a>
                        cantrip.
                      </td>
                    </tr>
                    <tr>
                      <td>Chthonic</td>
                      <td>
                        You have Resistance to Necrotic Damage.You also know the
                        <a
                          href="https://5e.tools/spells.html#chill%20touch_phb"
                          target="_blank"
                        >
                          Chill Touch
                        </a>
                        cantrip.
                      </td>
                    </tr>
                    <tr>
                      <td>Infernal</td>
                      <td>
                        You have Resistance to Fire Damage.You also know the
                        <a
                          href="https://5e.tools/spells.html#fire%20bolt_phb"
                          target="_blank"
                        >
                          Fire Bolt
                        </a>
                        cantrip.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </annotation>
            </li>
            <li>
              Add the <b>Otherworldly Presence</b> trait to your
              <b>FEATS & TRAITS</b>
              <annotation>
                <b>Otherworldly Presence.</b> You know the
                <a
                  href="https://5e.tools/spells.html#thaumaturgy_phb"
                  target="_blank"
                >
                  Thaumaturgy
                </a>
                Thaumaturgy cantrip. When you cast it with this trait, the Spell
                uses the same spellcasting ability you usefor your Fiendish
                Legacy trait.
              </annotation>
            </li>
          </ol>
        </page>
        <page title="Choose a Class" selection="class">
          Read the Classes in the PHB or go to the D&D Beyond links (listed
          below)
          <ol>
            <li>
              Choose a class and write the class name and "1" under "CLASS &
              LEVEL" in the top header (e.g. "Fighter 1")
            </li>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              (e.g. 1d8), write "1 of 1" for your "Total"
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              left box under "OTHER PROFICIENCIES & LANGUAGES"
            </li>
            <li>
              Mark your 2 Saving Throw Proficiencies by filling in the circles
              in the "SAVING THROWS" box
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
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
                  href="https://www.dndbeyond.com/classes/Paladin"
                >
                  Paladin</a
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
            <li>
              Choose a background and write the name under "BACKGROUND" in the
              top header
            </li>
            <li>
              Mark any 2 skill proficiencies in the "SKILLS" section
              <annotation>
                You may treat the 2 skills listed in your selected background as
                recommendations, but you can choose any 2, as long as they are
                thematic
              </annotation>
            </li>
            <li>
              Add the tool and language proficiencies in the "OTHER
              PROFICIENCIES & LANGUAGES" section
            </li>
            <li>
              Add the Feat in the "FEATURES & TRAITS" box
              <i>(Feats are detailed starting on page 16 of UA Origins)</i>
            </li>
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
        <page title="Set Ability Scores" selection="stat-block">
          <ol>
            <li>
              Using the standard array (15, 14, 13, 12, 10, 8), assign each
              value into the Ability Scores listed on the left of your character
              sheet, writing them in the tiny area under each option
              <fieldset>
                <legend>Class Priorities</legend>
                <ul>
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
              ability score from that armor, set your "ARMOR CLASS" (
              <a
                href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArmorandShields"
                target="_blank"
              >
                D&D Beyond - Armor and Shields
              </a>
              )
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
