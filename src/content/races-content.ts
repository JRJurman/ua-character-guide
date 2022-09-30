import {
  registerHtml,
  TramOneComponent,
  useGlobalStore,
  useStore,
} from "tram-one";
import page from "../page";
import annotation from "../annotation";

const html = registerHtml({
  annotation: annotation,
  page: page,
});

const racesContent: TramOneComponent = () => {
  const pageFilters = useGlobalStore("PAGE_FILTERS", { race: "" });
  const setRace = (race) => (pageFilters.race = race);

  return html`
		<>
			<page title="Choose a Race" selection="race">
				Details can be found in the Unearthed Arcana - Origins (page 2-10).
				Select one of the following races to see instructions for writing in
				the details in your character sheet.
				<button onclick=${() => setRace("human")}>Human</button>
				<button onclick=${() => setRace("ardling")}>Ardling</button>
				<button onclick=${() => setRace("dragonborn")}>Dragonborn</button>
				<button onclick=${() => setRace("dwarf")}>Dwarf</button>
				<button onclick=${() => setRace("elf")}>Elf</button>
				<button onclick=${() => setRace("gnome")}>Gnome</button>
				<button onclick=${() => setRace("halfling")}>Halfling</button>
				<button onclick=${() => setRace("orc")}>Orc</button>
				<button onclick=${() => setRace("tiefling")}>Tiefling</button>
			</page>
			<page title="Human" group="race" selection="human" source="UA-Origins, Pg 2">
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
			<page title="Ardling" group="race" selection="ardling" source="UA-Origins, Pg 3">
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
				group="race"
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
						Add <b>Draconic</b> to <b>PROFICIENCIES & LANGUAGES</b>
						<annotation>
							<b>Draconic Language.</b> You instinctively know the language of
							dragons. You can therefore speak, read, and write Draconic.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Dwarf" group="race" selection="dwarf" source="UA-Origins, Pg 5">
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
						<b>LANGUAGES & PROFICIENCIES</b> section
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
			<page title="Elf" group="race" selection="elf" source="UA-Origins, Pg 6">
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
			<page title="Gnome" group="race" selection="gnome" source="UA-Origins, Pg 7">
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
			<page title="Halfling" group="race" selection="halfling" source="UA-Origins, Pg 8">
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
			<page title="Orc" group="race" selection="orc" source="UA-Origins, Pg 9">
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
			<page title="Tiefling" group="race" selection="tiefling" source="UA-Origins, Pg 9">
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
							cantrip. When you cast it with this trait, the Spell
							uses the same spellcasting ability you use for your Fiendish
							Legacy trait.
						</annotation>
					</li>
				</ol>
			</page>
		</>
  `;
};

export default racesContent;
