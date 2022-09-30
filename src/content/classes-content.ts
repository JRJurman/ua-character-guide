import { registerHtml, TramOneComponent, useGlobalStore } from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const classesContent: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { selectedClass: "bard" });
  const setClass = (selectedClass) =>
    (pageFilters.selectedClass = selectedClass);

  return html`
    <>
      <page title="Choose a Class" selection="class">
        Details can be found in the Unearthed Arcana - Expert Classes (page
        3-15). Select one of the following classes to see instructions for
        writing in the details in your character sheet.
        <annotation>
          Note, only the Expert Classes are available for now. More will be
          added as the UA expands.
        </annotation>
        <button onclick=${() => setClass("bard")}>Bard</button>
        <button onclick=${() => setClass("ranger")}>Ranger</button>
        <button onclick=${() => setClass("rogue")}>Rogue</button>
      </page>
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
            Add <b>Simple Weapons</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add three
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              Musical Instruments
            </a>
            in the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Dagger</b> in the <b>EQUIPMENT</b> section. Additionally, add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
              target="_blank"
            >
              Dagger
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d4 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Entertainer's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a
            waterskin, and a disguise kit.
          </li>
          <li>Add <b>Leather Armor</b> in the <b>EQUIPMENT</b> section</li>
          <li>
            Add a single musical instrument for which you have proficiency in
            the <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
              target="_blank"
            >
              Shortsword
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d6 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Write in <b>18</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
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
            Add Vicious Mockery to the <b>ATTACKS & SPELLCASTING</b> section,
            ignoring ATK BONUS for now, write in <b>1d4 Psychic</b> for the
            <b>DAMAGE/TYPE</b>.
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
            <b>SPELLCASTING ABILITY</b>
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
            Add <b>Simple Weapons</b> and <b>Martial Weapons</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b>, <b>Medium Armor</b>, and <b>Shields</b> in
            the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Arrows (20)</b> and a <b>Quiver</b> in the
            <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Longbow</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialRangedWeapons"
              target="_blank"
            >
              Longbow
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d8 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Explorer's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days
            of rations, and a waterskin. The pack also has 50 feet of hempen
            rope strapped to the side of it.
          </li>
          <li>
            Add <b>Studded Leather Armor</b> in the <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
              target="_blank"
            >
              Shortsword
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d6 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Scimitar</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
              target="_blank"
            >
              Scimitar
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d6 Slashing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Write in <b>8</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
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
            you as having <b>Expertise</b>. For these skills you'll add your
            proficiency bonus twice
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
            under level 1 spells.<br />
            Add Thorn Whip to the <b>ATTACKS & SPELLCASTING</b> section,
            ignoring ATK BONUS for now, write in <b>1d6 piercing</b> for the
            <b>DAMAGE/TYPE</b>.
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
            <b>SPELLCASTING ABILITY</b>
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
            Add <b>Simple Weapons</b> and
            <b>Martial Weapons (finess only)</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Thieves' Tools</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Arrows (20)</b> and a <b>Quiver</b> in the
            <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Shortbow</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleRangedWeapons"
              target="_blank"
            >
              Shortbow
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d6 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
              target="_blank"
            >
              Shortsword
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d6 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Dagger (2)</b> in the <b>EQUIPMENT</b> section. Additionally,
            add
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
              target="_blank"
            >
              Dagger
            </a>
            in the <b>ATTACKS & SPELLCASTING</b> section, ignoring ATK BONUS for
            now, write <b>1d4 Piercing</b> as the <b>DAMAGE/TYPE</b>
          </li>
          <li>
            Add <b>Burglar's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell,
            5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2
            flasks of oil, 5 days rations, a tinderbox, and a waterskin. The
            pack also has 50 feet of hempen rope strapped to the side of it.
          </li>
          <li>Add <b>Leather Armor</b> in the <b>EQUIPMENT</b> section</li>
          <li>Add <b>Theives' Tools</b> in the <b>EQUIPMENT</b> section</li>
          <li>
            Write in <b>18</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page title="Rogue cont."
        group="classes"
        selection="rogue"
        source="UA-Expert-Classes, Pg 12"></page>
    </>
  `;
};

export default classesContent;
