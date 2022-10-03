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
            Add <b>Magic Initiate (Divine)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Divine Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Divine spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Book (Prayers), Parchment (10 sheets), Calligrapher's Supplies, Holy
            Symbol, Robe
          </li>
          <li>
            Add <b>3 GP</b> to your existing Gold Pieces in the
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
            Fill in the circles for <b>Investigation</b> and
            <b>Persuasion</b> in the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add an
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArtisansTools"
              target="_blank"
            >
              <b>Artisan's Tools</b> (one of your choice)</a
            >
            and <b>Gnomish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Crafter</b> to the <b>FEATURES & TRAITS</b> section, and add
            three more Artisan's Tools to the
            <b>PROFICIENCIES & LANGUAGES</b> section.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              You have a 20% discount on purchasing nonmagical items, and you
              craft 20% faster with tools you have proficiency in.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Abacus, Pouch (2), Traveler's Clothes, Merchant's Scale, and one
            Artisan's Tool that you have proficiency in.
          </li>
          <li>
            Add <b>25 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Charlatan"
        group="backgrounds"
        selection="charlatan"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>
            Fill in the circles for <b>Deception</b> and
            <b>Sleight of Hand</b> in the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Forgery Kit</b> and <b>Infernal</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Skilled</b> to the <b>FEATURES & TRAITS</b> section, and fill
            any three circles in your <b>SKILLS</b> for proficiency.
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Costume, Forgery Kit, Fine Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Criminal"
        group="backgrounds"
        selection="criminal"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>
            Fill in the circles for <b>Sleight of Hand</b> and <b>Stealth</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Thieves' Tools</b> and <b>Thieves' Cant</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Alert</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              During Initiative calculation, you will add +2 to your Initiative
              modifier. You gain the following benefits:<br />
              <b>Initiative Swap.</b> Immediately after you roll Initiative, you
              can swap your Initiative with the Initiative of one willing ally
              in the same combat. You can't make this swap if you or the ally is
              Incapacitated.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Crowbar, Dagger (2), Pouch (2), Thieves' Tools, Traveler's Clothes
          </li>
          <li>
            Add <b>16 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Cultist"
        group="backgrounds"
        selection="cultist"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>
            Fill in the circles for <b>Arcana</b> and <b>Religion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Disguise Kit</b> and <b>Abyssal</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Arcane)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Arcane Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Arcane spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bell, Lamp, Common Clothes, Robe, Dagger, Disguise Kit
          </li>
          <li>
            Add <b>19 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Entertainer"
        group="backgrounds"
        selection="entertainer"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>
            Fill in the circles for <b>Acrobatics</b> and <b>Performance</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              <b>Musical Instrument</b> (one of your choice)</a
            >
            and <b>Elvish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Musician</b> to the <b>FEATURES & TRAITS</b> section, and add
            three more Musical Instruments to the
            <b>PROFICIENCIES & LANGUAGES</b> section.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              After a short or long rest you can play on a Musical instrument
              for which you have proficiency, and give inspiration to your
              allies. The number of allies you can affect is equal to your
              Proficiency bonus.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Costume (2), Steel Mirror, Traveler's Clothes, Perfume, and one
            Musicial Instrument you have proficiency with.
          </li>
          <li>
            Add <b>8 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Farmer"
        group="backgrounds"
        selection="farmer"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>
            Fill in the circles for <b>Animal</b> and <b>Nature</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Carpenter's Tools</b> and <b>Halfling</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tough</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              During the Hit Point Calculation you will add 2 to your Hit Point
              Maximum
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Carpenter's Tools, Sickle, Healer's Kit, Traveler's Clothes, Iron
            Pot, Shovel
          </li>
          <li>
            Add <b>23 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Gladiator"
        group="backgrounds"
        selection="gladiator"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Performance</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Smith's Tools</b> and <b>Orc</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Savage Attacker</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Savage Attacker.</b> When you take the Attack Action and hit a
              target with a Weapon as part of that Action, you can roll the
              Weapon's damage dice twice and use either roll against the target.
              You can use this benefit only once per turn.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Chain, Costume, Healer's Kit, Javelin (6), Smith's Tools, Traveler's
            Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Guard"
        group="backgrounds"
        selection="guard"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Perception</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Dwarvish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Alert</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              During Initiative calculation, you will add +2 to your Initiative
              modifier. You gain the following benefits:<br />
              <b>Initiative Swap.</b> Immediately after you roll Initiative, you
              can swap your Initiative with the Initiative of one willing ally
              in the same combat. You can't make this swap if you or the ally is
              Incapacitated.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Crossbow Bolt (20), Hooded Lantern, Light Crossbow, Manacles,
            Quiver, Spear Traveler's Clothes, and a Gaming Set (same as above).
          </li>
          <li>
            Add <b>12 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Guide"
        group="backgrounds"
        selection="guide"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>
            Fill in the circles for <b>Stealth</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Cartographer's Tools</b> and <b>Giant</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Primal)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Primal Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Primal spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Arrow (20), Shortbow, Quiver, Bedroll, Tent, Cartographer's Tools,
            Traveler's Clothes, Fishing Tackle.
          </li>
          <li>
            Add <b>2 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Hermit"
        group="backgrounds"
        selection="hermit"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>
            Fill in the circles for <b>Medicine</b> and <b>Religion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Herbalism Kit</b> and <b>Sylvan</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Primal)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Primal Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Primal spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Book (Philosophy), Fishing Tackle, Herbalism Kit, Lamp, Oil
            (3 flasks), Quarterstaff, Traveler's Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Laborer"
        group="backgrounds"
        selection="laborer"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Mason's Tools</b> and <b>Dwarvish</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tough</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              During the Hit Point Calculation you will add 2 to your Hit Point
              Maximum
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bullseye Lantern, Oil (1 flask), Mess Kit, Common Clothes, Handaxe,
            Shovel, Light Hammer, Waterskin, Mason's Tools.
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Noble"
        group="backgrounds"
        selection="noble"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>
            Fill in the circles for <b>History</b> and <b>Persuasion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Draconic</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Skilled</b> to the <b>FEATURES & TRAITS</b> section, and fill
            any three circles in your <b>SKILLS</b> for proficiency.
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Fine Clothes, Gaming Set (same as above), Perfume, Signet Ring
          </li>
          <li>
            Add <b>24 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Pilgrim"
        group="backgrounds"
        selection="pilgrim"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>
            Fill in the circles for <b>Religion</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              <b>Musical Instrument</b> (one of your choice)</a
            >
            and <b>Halfling</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Healer</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Healer.</b> You get the following benefits: <br />
              <b>Battle Medic.</b> If you have a Healer's Kit, you can expend
              one use of it and tend to a creature within 5 feet of you as an
              Action. That creature can expend one of its Hit Dice, and you then
              roll that die. The creature regains a number of Hit Points equal
              to the roll plus your Proficiency Bonus. <br />
              <b>Healing Rerolls.</b> Whenever you roll a die to determine the
              number of Hit Points you restore with a spell or with this feat's
              Battle Medic benefit, you can reroll the die if it rolls a 1,and
              you must use the new roll.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Rations (2 days), Healer's Kit, Holy Symbol, Traveler's
            Clothes, a Musical Instrument you have proficiency in.
          </li>
          <li>
            Add <b>16 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Sage"
        group="backgrounds"
        selection="sage"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>
            Fill in the circles for <b>Arcana</b> and <b>History</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Calligrapher's Supplies</b> and <b>Elvish</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Arcana)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Arcana Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Arcana spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Book (History), Calligrapher's Supplies, Parchment (8 sheets),
            Quarterstaff, Robe
          </li>
          <li>
            Add <b>8 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Sailor"
        group="backgrounds"
        selection="sailor"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>
            Fill in the circles for <b>Acrobatics</b> and <b>Perception</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Navigator's Tools</b> and <b>Primordial</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tavern Brawler</b> to the "FEATURES & TRAITS" section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              You gain benefits to your Unarmed Strike, and can use Furniture as
              weapons.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Dagger, Fishing Tackle, Navigator's Tools, Silk Rope, Traveler's
            Clothes
          </li>
          <li>
            Add <b>10 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Soldier"
        group="backgrounds"
        selection="soldier"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Intimidation</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Goblin</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Savage Attacker</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Savage Attacker.</b> When you take the Attack Action and hit a
              target with a Weapon as part of that Action, you can roll the
              Weapon's damage dice twice and use either roll against the target.
              You can use this benefit only once per turn.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Arrows (20), Quiver, Shortbow, Spear, Healer's Kit, Gaming Set (same
            as above), Traveler's Clothes
          </li>
          <li>
            Add <b>14 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Urchin"
        group="backgrounds"
        selection="urchin"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>
            Fill in the circles for <b>Insight</b> and <b>Stealth</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Thieves' Tools</b> and <b>Common Sign Language</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Lucky</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Luck Points.</b> You have a number of Luck Points equal to your
              Proficiency Bonus. You can spend the points on the benefits below,
              and you regain your expended Luck Points when you finish a Long
              Rest. <br />
              <b>Advantage.</b> Immediately after you roll a d20 for a d20 Test,
              you can spend 1 Luck Point to give yourself Advantage on the roll.
              <br />
              <b>Disadvantage.</b> When a creature rolls a d20 for an attack
              roll against you, you can spend 1 Luck Point to impose
              Disadvantage on that roll.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Common Clothes, Dagger (2), a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >, Thieves' Tools, Pouch
          </li>
          <li>
            Add <b>18 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
    </>
  `;
};

export default backgroundsContent;
