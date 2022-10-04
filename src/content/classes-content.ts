import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";
import classesSelector from "./classes-selector";

const html = registerHtml({
  annotation: annotation,
  page: page,
  "classes-selector": classesSelector,
});

const classesContent: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { selectedClass: "bard" });
  const setClass = (selectedClass) =>
    (pageFilters.selectedClass = selectedClass);

  return html`
    <>
      <classes-selector />
      <page
        title="Bard"
        group="classes"
        selection="bard"
        source="UA-Expert-Classes, Pg 3"
      >
        <ol>
          <li>
            Write <b>Bard 1</b> in the <b>CLASS & LEVEL</b> field in the header
          </li>
          <li>
            Write <b>1d8</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Dexterity</b> and <b>Charisma</b>. You will add your proficiency
            bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Deception</b>, <b>Performance</b>,
            and <b>Persuasion</b> skills in the <b>SKILLS</b> section. If you
            already have proficiencies in these skills, feel free to pick any
            other skills as substitutes
          </li>
          <li>
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple Weapons</li>
              <li>
                Three
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
                  target="_blank"
                >
                  Musical Instruments
                </a>
              </li>
              <li>Light Armor</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Leather Armor</li>
              <li>Dagger</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Entertainer's Pack</a
                ><i
                  >(a backpack, a bedroll, 2 costumes, 5 candles, 5 days of
                  rations, a waterskin, and a disguise kit)</i
                >
              </li>
              <li>Shortsword</li>
              <li>
                a single musical instrument for which you have proficiency in
              </li>
              <li>18 Gold Pieces (GP)</li>
            </ul>
          </li>
        </ol>
      </page>
      <page
        title="Bard cont."
        group="classes"
        selection="bard"
        source="UA-Expert-Classes, Pg 3"
      >
        <ol>
          <li>
            Add <b>Bardic Inspiration</b> to the
            <b>FEATURES & TRAITS</b> section. Your bardic inspiration die is a
            <b>d6</b>
            <annotation>
              <b>Using Bardic Inspiration.</b> You can use your Bardic
              Inspiration die in the following ways:<br />
              <b>Boost a d20 Test.</b> When another creature within 60 feet of
              you that you can see or hear fails a d20 Test, you can use your
              Reaction to give the creature a Bardic Inspiration die. The
              creature rolls that die and adds the number rolled to the d20,
              potentially turning the failure into a success.<br />
              <b>Heal.</b> Immediately after another creature within 60 feet of
              you that you can see or hear takes damage, you can use your
              Reaction to roll your Bardic Inspiration die and restorea number
              of Hit Points to the creature equal to the number rolled.<br />
              <b>Number of Uses.</b> A Bardic Inspiration die is expended when
              it's rolled. You can confer a Bardic Inspiration die a number of
              times equal to your Proficiency Bonus, and you regain all expended
              uses when you finish a Long Rest.
            </annotation>
          </li>
          <li>
            Add <b>Spellcasting</b> to the <b>FEATURES & TRAITS</b> section. On
            the spellcasting page, set the total slots for
            <b>SPELL LEVEL 1</b> to <b>2</b>. Add
            <a
              href="https://5e.tools/spells.html#vicious%20mockery_phb"
              target="_blank"
              >Vicious Mockery</a
            >
            and
            <a
              href="https://5e.tools/spells.html#prestidigitation_phb"
              target="_blank"
              >Prestidigitation</a
            >
            under cantrips. Add
            <a
              href="https://5e.tools/spells.html#color%20spray_phb"
              target="_blank"
              >Color Spray</a
            >
            and
            <a
              href="https://5e.tools/spells.html#disguise%20self_phb"
              target="_blank"
              >Disguise Self</a
            >
            under level 1 spells.<br />
            Add Vicious Mockery to the <b>ATTACKS & SPELLCASTING</b> section.
            <annotation>
              <b>Prepared Spells.</b> Whenever you finish a Long Rest, you can
              practice your bardic arts and replace any Spell you have prepared
              for this Class with another Spell of the same level. Any Spell you
              prepare for this Class must be an Arcane Spell, and it must be
              from one of the following Schools of Magic: Divination,
              Enchantment, Illusion, or Transmutation (for a full listing, see
              UA - Expert Classes, pg 24)
            </annotation>
          </li>
          <li>
            In the spellcasting sheet, write <b>Charisma</b> as your
            <b>SPELLCASTING ABILITY</b>, <b>10 + CHA</b> as your <b>SPELL SAVE DC</b>,
            and <b>2 + CHA</b> as your <b>SPELL ATTACK BONUS</b>
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <table>
              <thead>
                <th>NAME</th>
                <th>ATK BONUS</th>
                <th>DAMAGE/TYPE</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
                      target="_blank"
                      >Dagger</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d4 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                      target="_blank"
                      >Shortsword</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://5e.tools/spells.html#vicious%20mockery_phb"
                      target="_blank"
                      >Vicious Mockery</a
                    >
                  </td>
                  <td>DC 10 + CHA</td>
                  <td>1d4 Psychic</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </page>
      <page
        title="Ranger"
        group="classes"
        selection="ranger"
        source="UA-Expert-Classes, Pg 8"
      >
        <ol>
          <li>
            Write <b>Ranger 1</b> in the <b>CLASS & LEVEL</b> field in the
            header
          </li>
          <li>
            Write <b>1d10</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Strength</b> and <b>Dexterity</b>. You will add your proficiency
            bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Athletics</b>, <b>Stealth</b>, and
            <b>Survival</b> skills in the <b>SKILLS</b> section. If you already
            have proficiencies in these skills, you may substitute with any from
            the following list: Animal Handling, Insight, Investigation, Nature,
            and Perception
          </li>
          <li>
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple & Martial Weapons</li>
              <li>Light Armor, Medium Armor, and Shields</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Studded Leather</li>
              <li>Longbow</li>
              <li>Quiver and Arrows (20)</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Explorer's Pack</a
                ><i>
                  (a backpack, a bedroll, a mess kit, a tinderbox, 10 torches,
                  10 days of rations, 50 feet of hempen rope, and a
                  waterskin)</i
                >
              </li>
              <li>Shortsword</li>
              <li>Scimitar</li>
              <li>8 Gold Pieces (GP)</li>
            </ul>
          </li>
        </ol>
      </page>
      <page
        title="Ranger cont."
        group="classes"
        selection="ranger"
        source="UA-Expert-Classes, Pg 8"
      >
        <ol>
          <li>
            Choose two skills for which you have proficiency, and mark these for
            you as having <b>Expertise</b> (you can mark this by adding another
            circle on the character sheet, or writing "E" in the space to the left).
            For these skills you'll add your proficiency bonus twice
            <annotation>
              Stealth and Survival are iconic choices for a Ranger if you have
              Proficiency in them.
            </annotation>
          </li>
          <li>
            Add <b>Favored Enemy</b> to the <b>FEATURES & TRAITS</b> section,
            and add
            <a
              href="https://5e.tools/spells.html#hunter's%20mark_phb"
              target="_blank"
            >
              Hunter's Mark
            </a>
            to the spellcasting page under 1st level spells
            <annotation>
              You are adept at focusing your ire on a single foe. You always
              have the Hunter's Mark Spell prepared, and it doesn't count
              against the number of Spells you can prepare. Moreover, you don't
              have to concentrate on the Spellonce you cast it; it lasts for
              itsfull duration, until you end it as a Bonus Action, or until you
              are Incapacitated.
            </annotation>
          </li>
          <li>
            Add <b>Spellcasting</b> to the <b>FEATURES & TRAITS</b> section. On
            the spellcasting page, set the total slots for
            <b>SPELL LEVEL 1</b> to <b>2</b>. Add Guidance (see UA - Expert
            Classes, pg 32) and
            <a
              href="https://5e.tools/spells.html#thorn%20whip_phb"
              target="_blank"
              >Thorn Whip</a
            >
            under cantrips. Add
            <a
              href="https://5e.tools/spells.html#cure%20wounds_phb"
              target="_blank"
              >Cure Wounds</a
            >
            and
            <a
              href="https://5e.tools/spells.html#speak%20with%20animals_phb"
              target="_blank"
              >Speak with Animals</a
            >
            under level 1 spells
            <annotation>
              <b>Prepared Spells.</b> Whenever you finish a Long Rest, you can
              commune with nature and replace any Spell you have prepared for
              this Class with another Spell of the same level. Any Spell you
              prepare for this Class must be an Primal Spell, and it can be from
              any School of Magic except Evocation (for a full listing, see UA -
              Expert Classes, pg 28)
            </annotation>
          </li>
          <li>
            In the spellcasting sheet, write <b>Wisdom</b> as your
            <b>SPELLCASTING ABILITY</b>, <b>10 + WIS</b> as your <b>SPELL SAVE DC</b>,
            and <b>2 + WIS</b> as your <b>SPELL ATTACK BONUS</b>
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <table>
              <thead>
                <th>NAME</th>
                <th>ATK BONUS</th>
                <th>DAMAGE/TYPE</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialRangedWeapons"
                      target="_blank"
                      >Longbow</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d8 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                      target="_blank"
                      >Shortsword</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                      target="_blank"
                      >Scimitar</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Slashing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://5e.tools/spells.html#thorn%20whip_phb"
                      target="_blank"
                      >Thorn whip</a
                    >
                  </td>
                  <td>WIS + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </page>
      <page
        title="Rogue"
        group="classes"
        selection="rogue"
        source="UA-Expert-Classes, Pg 12"
      >
        <ol>
          <li>
            Write <b>Rogue 1</b> in the <b>CLASS & LEVEL</b> field in the header
          </li>
          <li>
            Write <b>1d8</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Dexterity</b> and <b>Intelligence</b>. You will add your
            proficiency bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Acrobatics</b>,
            <b>Investigation</b>, <b>Sleight of Hand</b>, and
            <b>Stealth</b> skills in the <b>SKILLS</b> section. If you already
            have proficiencies in these skills, you may substitute with any from
            the following list: Athletics, Deception, Insight, Intimidation,
            Perception, Persuasion
          </li>
          <li>
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple & Martial Weapons</li>
              <li>Light Armor</li>
              <li>Thieves' Tools</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Leather Armor</li>
              <li>Shortbow</li>
              <li>Quiver and Arrows (20)</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Burglar's Pack</a
                >
                <i
                  >(a backpack, a bag of 1,000 ball bearings, 10 feet of string,
                  a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded
                  lantern, 2 flasks of oil, 5 days rations, a tinderbox, 50 feet
                  of hempen rope, and a waterskin)</i
                >
              </li>
              <li>Shortsword</li>
              <li>Dagger (2)</li>
              <li>Theives' Tools</li>
              <li>18 Gold Pieces (GP)</li>
            </ul>
          </li>
        </ol>
      </page>
      <page
        title="Rogue cont."
        group="classes"
        selection="rogue"
        source="UA-Expert-Classes, Pg 12"
      >
        <ol>
          <li>
            Choose two skills for which you have proficiency, and mark these for
            you as having <b>Expertise</b> (you can mark this by adding another
            circle on the character sheet, or annotating in some other way). For
            these skills you'll add your proficiency bonus twice
            <annotation>
              Sleight and Stealth are iconic choices for a Rogue if you have
              Proficiency in them.
            </annotation>
          </li>
          <li>
            Add <b>Sneak Attack</b> to the <b>FEATURES & TRAITS</b> section. The
            sneak attack damage for level 1 is <b>1d6</b>
            <annotation>
              <b>Sneak Attack</b>. Once on each of your turns when you take the
              Attack Action, you can deal extra damage to one creature you hit
              with an Attack Roll if you're attacking with a Finesse Weapon or a
              Ranged Weapon and if at least one of the following requirements is
              met:<br />
              <b>Advantage.</b> You have Advantage on the Attack Roll.<br />
              <b>Ally Adjacent to Target.</b> At least one of your allies is
              within 5 feet of the target, the ally isn't Incapacitated, and you
              don't have Disadvantage on the Attack Roll.
            </annotation>
          </li>
          <li>
            Add <b>Theives' Cant</b> and one other language to the
            <b>PROFICIENCIES & LANGUAGES</b> section. You can ses a listing of
            available languages in UA-Origins, Pg 16 or <b>Languages</b> later
            in this guide
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <table>
              <thead>
                <th>NAME</th>
                <th>ATK BONUS</th>
                <th>DAMAGE/TYPE</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
                      target="_blank"
                      >Dagger</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d4 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleRangedWeapons"
                      target="_blank"
                      >Shortbow</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                      target="_blank"
                      >Shortsword</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </page>
    </>
  `;
};

export default classesContent;
