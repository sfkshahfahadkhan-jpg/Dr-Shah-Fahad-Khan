import { Question } from '../types';

export const CHEMISTRY_HALOGEN_QUIZ: Question[] = [
  {
    id: 'ch-hal-1',
    text: 'Halogens are elements of Group _____ of the periodic table.',
    options: ['16', '17', '18', '15'],
    correctAnswer: '17',
    explanation: 'Means "salt formers".'
  },
  {
    id: 'ch-hal-2',
    text: 'The valence shell configuration of halogens is:',
    options: ['ns2 np4', 'ns2 np5', 'ns2 np6', 'ns1'],
    correctAnswer: 'ns2 np5',
    explanation: 'They need one electron to reach noble gas configuration.'
  },
  {
    id: 'ch-hal-3',
    text: 'Which halogen is a solid at room temperature?',
    options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Iodine',
    explanation: 'F, Cl are gases; Br is liquid.'
  },
  {
    id: 'ch-hal-4',
    text: 'Which halogen is a reddish-brown liquid at room temperature?',
    options: ['Chlorine', 'Bromine', 'Iodine', 'Astatine'],
    correctAnswer: 'Bromine',
    explanation: 'Only non-metallic liquid element.'
  },
  {
    id: 'ch-hal-5',
    text: 'Fluorine and Chlorine are _____ colored and _____ colored gases respectively.',
    options: ['Pale yellow, Greenish-yellow', 'Red, Blue', 'Colorless, Brown', 'None'],
    correctAnswer: 'Pale yellow, Greenish-yellow',
    explanation: 'Colors of halogen gases.'
  },
  {
    id: 'ch-hal-6',
    text: 'The volatility of halogens _____ down the group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Intermolecular Van der Waals forces increase with size.'
  },
  {
    id: 'ch-hal-7',
    text: 'Halogens are powerful _____ agents.',
    options: ['Reducing', 'Oxidizing', 'Dehydrating', 'None'],
    correctAnswer: 'Oxidizing',
    explanation: 'They have high electron affinity and gain electrons easily.'
  },
  {
    id: 'ch-hal-8',
    text: 'Which is the strongest oxidizing agent among halogens?',
    options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Fluorine',
    explanation: 'Due to low bond energy and high hydration energy of F-.'
  },
  {
    id: 'ch-hal-9',
    text: 'Fluorine can oxidize _____ other halide ions from their solutions.',
    options: ['Some', 'No', 'All', 'Only Cl-'],
    correctAnswer: 'All',
    explanation: 'Fluorine is at the top of the oxidizing power series.'
  },
  {
    id: 'ch-hal-10',
    text: 'The order of oxidizing power is:',
    options: ['F2 > Cl2 > Br2 > I2', 'I2 > Br2 > Cl2 > F2', 'Cl2 > F2 > Br2 > I2', 'None'],
    correctAnswer: 'F2 > Cl2 > Br2 > I2',
    explanation: 'Decreases down the group.'
  },
  {
    id: 'ch-hal-11',
    text: 'Hydrogen halides (HX) are _____ compounds.',
    options: ['Ionic', 'Covalent/Polar', 'Metallic', 'None'],
    correctAnswer: 'Covalent/Polar',
    explanation: 'Strength of polarity decreases from HF to HI.'
  },
  {
    id: 'ch-hal-12',
    text: 'Which hydrogen halide has the highest boiling point due to hydrogen bonding?',
    options: ['HCl', 'HBr', 'HI', 'HF'],
    correctAnswer: 'HF',
    explanation: 'Anomalous BP due to strong H-bonding.'
  },
  {
    id: 'ch-hal-13',
    text: 'The acidity of hydrogen halides _____ down the group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'HI is the strongest acid because the H-I bond is weakest.'
  },
  {
    id: 'ch-hal-14',
    text: 'Which is the weakest acid among hydrogen halides?',
    options: ['HCl', 'HF', 'HI', 'HBr'],
    correctAnswer: 'HF',
    explanation: 'Due to strong H-F bond and H-bonding.'
  },
  {
    id: 'ch-hal-15',
    text: 'Silver chloride (AgCl) is a _____ precipitate, _____ in NH4OH.',
    options: ['Yellow, insoluble', 'White, soluble', 'Pale yellow, sparingly soluble', 'None'],
    correctAnswer: 'White, soluble',
    explanation: 'Identification test for Cl-.'
  },
  {
    id: 'ch-hal-16',
    text: 'Silver iodide (AgI) is a _____ precipitate, _____ in NH4OH.',
    options: ['White, soluble', 'Yellow, insoluble', 'Red, soluble', 'None'],
    correctAnswer: 'Yellow, insoluble',
    explanation: 'Identification test for I-.'
  },
  {
    id: 'ch-hal-17',
    text: 'Bleaching powder is chemically:',
    options: ['Ca(ClO)2', 'CaOCl2', 'Ca(OH)2', 'CaCl2'],
    correctAnswer: 'CaOCl2',
    explanation: 'Calcium chloro-hypochlorite.'
  },
  {
    id: 'ch-hal-18',
    text: 'Bleaching powder is manufactured by _____ or _____ processes.',
    options: ['Haber, Solvay', 'Hasenclever, Beckmann', 'Contact, Ostwald', 'None'],
    correctAnswer: 'Hasenclever, Beckmann',
    explanation: 'Reaction of chlorine with slaked lime.'
  },
  {
    id: 'ch-hal-19',
    text: 'The available chlorine in a good sample of bleaching powder is about:',
    options: ['10%', '35-40%', '100%', 'None'],
    correctAnswer: '35-40%',
    explanation: 'Measure of its bleaching power.'
  },
  {
    id: 'ch-hal-20',
    text: 'Bleaching action of Chlorine is due to:',
    options: ['Reduction', 'Oxidation', 'Hydration', 'None'],
    correctAnswer: 'Oxidation',
    explanation: 'Permanent bleaching by releasing nascent oxygen.'
  },
  {
    id: 'ch-hal-21',
    text: 'Iodine turns starch paper _____ in color.',
    options: ['Red', 'Blue/Black', 'Green', 'Yellow'],
    correctAnswer: 'Blue/Black',
    explanation: 'Sensitive test for Iodine.'
  },
  {
    id: 'ch-hal-22',
    text: 'Compounds formed by the reaction of halogens with each other are called:',
    options: ['Pseudo-halogens', 'Interhalogen compounds', 'Polyhalides', 'None'],
    correctAnswer: 'Interhalogen compounds',
    explanation: 'e.g. ICl, BrF3, IF7.'
  },
  {
    id: 'ch-hal-23',
    text: 'Group VIII-A elements are called _____ because they rarely react.',
    options: ['Active gases', 'Noble/Inert gases', 'Halogens', 'None'],
    correctAnswer: 'Noble/Inert gases',
    explanation: 'Have complete valence shells.'
  },
  {
    id: 'ch-hal-24',
    text: 'Which is the most abundant noble gas in the atmosphere?',
    options: ['Helium', 'Neon', 'Argon (about 1%)', 'Xenon'],
    correctAnswer: 'Argon (about 1%)',
    explanation: 'Produced by radioactive decay of Potassium-40.'
  },
  {
    id: 'ch-hal-25',
    text: 'Which noble gas is used in filling balloons and airships?',
    options: ['Hydrogen', 'Helium', 'Argon', 'Neon'],
    correctAnswer: 'Helium',
    explanation: 'Lightweight and non-flammable (unlike Hydrogen).'
  },
  {
    id: 'ch-hal-26',
    text: 'Which noble gas is used in advertising signs for its brilliant red glow?',
    options: ['Helium', 'Neon', 'Argon', 'Krypton'],
    correctAnswer: 'Neon',
    explanation: 'Characteristic orange-red discharge.'
  },
  {
    id: 'ch-hal-27',
    text: 'Argon is used in electric bulbs to _____ the life of the filament.',
    options: ['Shorten', 'Prolong', 'Change color of', 'None'],
    correctAnswer: 'Prolong',
    explanation: 'Prevents evaporation of tungsten filament.'
  },
  {
    id: 'ch-hal-28',
    text: 'The first noble gas compound synthesized (by Neil Bartlett) was of:',
    options: ['Helium', 'Xenon', 'Neon', 'Argon'],
    correctAnswer: 'Xenon',
    explanation: 'XePtF6 (1962).'
  },
  {
    id: 'ch-hal-29',
    text: 'Radon (Rn) is a _____ noble gas.',
    options: ['Stable', 'Radioactive', 'Reactive', 'Common'],
    correctAnswer: 'Radioactive',
    explanation: 'Used in radiotherapy for cancer.'
  },
  {
    id: 'ch-hal-30',
    text: 'A mixture of 80% Helium and 20% Oxygen is used by _____ for breathing.',
    options: ['Pilots', 'Sea divers', 'Asthmatics', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Less soluble in blood than nitrogen; prevents "bends".'
  },
  {
    id: 'ch-hal-31',
    text: 'Tincture of iodine is a solution of Iodine in:',
    options: ['Water', 'Alcohol/Water mixture', 'Oil', 'None'],
    correctAnswer: 'Alcohol/Water mixture',
    explanation: 'Common antiseptic.'
  },
  {
    id: 'ch-hal-32',
    text: 'Which is a pseudo-halogen?',
    options: ['Cyanogen (CN)2', 'Chlorine', 'Iodine', 'None'],
    correctAnswer: 'Cyanogen (CN)2',
    explanation: 'Behaves like halogens but is a compound.'
  },
  {
    id: 'ch-hal-33',
    text: 'Which halogen has the highest electron affinity?',
    options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Chlorine',
    explanation: 'Cl > F > Br > I (due to small size of F causing repulsion).'
  },
  {
    id: 'ch-hal-34',
    text: 'The reaction Cl2 + H2O -> HCl + HClO is an example of:',
    options: ['Neutralization', 'Disproportionation', 'Addition', 'None'],
    correctAnswer: 'Disproportionation',
    explanation: 'Chlorine is both oxidized and reduced.'
  },
  {
    id: 'ch-hal-35',
    text: 'Cold, dilute NaOH reacts with Cl2 to give:',
    options: ['NaCl + NaClO (Sodium hypochlorite)', 'NaCl + NaClO3', 'NaClO2', 'None'],
    correctAnswer: 'NaCl + NaClO (Sodium hypochlorite)',
    explanation: 'Standard redox reaction.'
  },
  {
    id: 'ch-hal-36',
    text: 'Hot, concentrated NaOH reacts with Cl2 to give:',
    options: ['NaCl + NaClO', 'NaCl + NaClO3 (Sodium chlorate)', 'NaCl + Cl2', 'None'],
    correctAnswer: 'NaCl + NaClO3 (Sodium chlorate)',
    explanation: 'Higher oxidation state of Cl achieved.'
  },
  {
    id: 'ch-hal-37',
    text: 'Which acid is used for etching glass?',
    options: ['HCl', 'H2SO4', 'HF', 'HNO3'],
    correctAnswer: 'HF',
    explanation: 'Reacts with silicates in glass.'
  },
  {
    id: 'ch-hal-38',
    text: 'Which is a "stronger" acid: HClO or HClO4?',
    options: ['HClO', 'HClO4', 'Both same', 'None'],
    correctAnswer: 'HClO4',
    explanation: 'Acidity of oxyacids increases with oxidation state of halogen.'
  },
  {
    id: 'ch-hal-39',
    text: 'The IUPAC name of Bleaching powder is:',
    options: ['Calcium hypochlorite', 'Calcium chloro-hypochlorite', 'Calcium chlorate', 'None'],
    correctAnswer: 'Calcium chloro-hypochlorite',
    explanation: 'Technical chemical name.'
  },
  {
    id: 'ch-hal-40',
    text: 'Bromine is extracted from sea water by treating it with:',
    options: ['Oxygen', 'Chlorine', 'Fluorine', 'Sodium'],
    correctAnswer: 'Chlorine',
    explanation: 'Chlorine displaces Bromine: Cl2 + 2Br- -> 2Cl- + Br2.'
  },
  {
    id: 'ch-hal-41',
    text: 'The only halogen that does NOT form any oxyacid is:',
    options: ['Chlorine', 'Fluorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Fluorine',
    explanation: 'It only forms HOF (unstable) but no standard oxyacids like others.'
  },
  {
    id: 'ch-hal-42',
    text: 'Which halogen is used in Goitre prevention?',
    options: ['Chlorine', 'Fluorine', 'Iodine', 'None'],
    correctAnswer: 'Iodine',
    explanation: 'Necessary for thyroid function.'
  },
  {
    id: 'ch-hal-43',
    text: 'Teflon (PTFE) is a polymer containing:',
    options: ['Chlorine', 'Fluorine', 'Bromine', 'None'],
    correctAnswer: 'Fluorine',
    explanation: 'Polytetrafluoroethylene.'
  },
  {
    id: 'ch-hal-44',
    text: 'Which noble gas has the lowest boiling point of any substance (4.2 K)?',
    options: ['Helium', 'Neon', 'Hydrogen', 'Xenon'],
    correctAnswer: 'Helium',
    explanation: 'Weakest interatomic forces.'
  },
  {
    id: 'ch-hal-45',
    text: 'Which is an "Inner-transition" like property shown by Xenon?',
    options: ['Formation of color', 'Ability to form compounds with O and F', 'High density', 'None'],
    correctAnswer: 'Ability to form compounds with O and F',
    explanation: 'Xe is the only noble gas with extensive chemistry.'
  },
  {
    id: 'ch-hal-46',
    text: 'Xenon fluorides like XeF2, XeF4, XeF6 are formed by _____ reaction.',
    options: ['Indirect', 'Direct', 'Bacterial', 'None'],
    correctAnswer: 'Direct',
    explanation: 'Heating Xe and F2 together under pressure.'
  },
  {
    id: 'ch-hal-47',
    text: 'The geometry of XeF2 is:',
    options: ['Bent', 'Linear', 'Tetrahedral', 'Octahedral'],
    correctAnswer: 'Linear',
    explanation: 'sp3d hybridized with 3 lone pairs.'
  },
  {
    id: 'ch-hal-48',
    text: 'The geometry of XeF4 is:',
    options: ['Square planar', 'Tetrahedral', 'Pyramidal', 'Linear'],
    correctAnswer: 'Square planar',
    explanation: 'sp3d2 hybridized with 2 lone pairs.'
  },
  {
    id: 'ch-hal-49',
    text: 'Noble gases are monatomic because they have _____ ionization energy.',
    options: ['Very low', 'Very high', 'Zero', 'Negative'],
    correctAnswer: 'Very high',
    explanation: 'Does not lose electrons easily.'
  },
  {
    id: 'ch-hal-50',
    text: 'Halogens are all _____ colored.',
    options: ['White', 'Colored', 'Transparent', 'None'],
    correctAnswer: 'Colored',
    explanation: 'Due to absorption of visible light.'
  },
  {
    id: 'ch-hal-51',
    text: 'The bond energy of F-F is _____ than Cl-Cl.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'Exception due to lone-pair repulsion in small F atoms.'
  },
  {
    id: 'ch-hal-52',
    text: 'Which is the most reactive halogen?',
    options: ['Chlorine', 'Fluorine', 'Iodine', 'None'],
    correctAnswer: 'Fluorine',
    explanation: 'Known as "Super-halogen".'
  },
  {
    id: 'ch-hal-53',
    text: 'Chlorine is used in water treatment as a:',
    options: ['Nutrient', 'Disinfectant/Germicide', 'Solvent', 'None'],
    correctAnswer: 'Disinfectant/Germicide',
    explanation: 'Kills pathogens.'
  },
  {
    id: 'ch-hal-54',
    text: 'Chlorine was discovered by:',
    options: ['Scheele', 'Priestley', 'Lavoisier', 'None'],
    correctAnswer: 'Scheele',
    explanation: 'In 1774.'
  },
  {
    id: 'ch-hal-55',
    text: 'Iodine is a _____ colored solid that _____ on heating.',
    options: ['Yellow, melts', 'Violet, sublimes', 'Brown, boils', 'None'],
    correctAnswer: 'Violet, sublimes',
    explanation: 'Directly converts to purple vapor.'
  },
  {
    id: 'ch-hal-56',
    text: 'Bleaching powder releases _____ gas when treated with acids.',
    options: ['Oxygen', 'Chlorine', 'CO2', 'Nitrogen'],
    correctAnswer: 'Chlorine',
    explanation: 'CaOCl2 + H2SO4 -> CaSO4 + H2O + Cl2.'
  },
  {
    id: 'ch-hal-57',
    text: 'Which gas is used in "high-speed" photography (strobe lights)?',
    options: ['Neon', 'Xenon', 'Argon', 'Helium'],
    correctAnswer: 'Xenon',
    explanation: 'Produces intense white light.'
  },
  {
    id: 'ch-hal-58',
    text: 'Liquid Helium is used to maintain very low temperatures in:',
    options: ['Refrigerators', 'Superconducting magnets (MRI)', 'Ovens', 'None'],
    correctAnswer: 'Superconducting magnets (MRI)',
    explanation: 'Essential cryogen.'
  },
  {
    id: 'ch-hal-59',
    text: 'Helium is found in significant quantities in _____ gas deposits.',
    options: ['Coal', 'Natural', 'Ocean', 'None'],
    correctAnswer: 'Natural',
    explanation: 'Extracted via fractional distillation of natural gas.'
  },
  {
    id: 'ch-hal-60',
    text: 'The shielding effect _____ down the halogen group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Number of inner shells increases.'
  },
  {
    id: 'ch-hal-61',
    text: 'Which halogen is used in the manufacture of PVC?',
    options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Chlorine',
    explanation: 'Polyvinyl chloride.'
  },
  {
    id: 'ch-hal-62',
    text: 'Chlorofluorocarbons (CFCs) are used as _____ and _____.',
    options: ['Fuel, Food', 'Refrigerants, Propellants', 'Dyes, Paints', 'None'],
    correctAnswer: 'Refrigerants, Propellants',
    explanation: 'Stable but harmful to ozone layer.'
  },
  {
    id: 'ch-hal-63',
    text: 'Hydroiodic acid (HI) is a _____ reducing agent.',
    options: ['Weak', 'Strong', 'Zero', 'None'],
    correctAnswer: 'Strong',
    explanation: 'Easily loses its H atom.'
  },
  {
    id: 'ch-hal-64',
    text: 'Reaction of Iodine with hot conc. NaOH gives _____ and _____.',
    options: ['NaI, NaIO', 'NaI, NaIO3 (Sodium iodate)', 'NaI, I2', 'None'],
    correctAnswer: 'NaI, NaIO3 (Sodium iodate)',
    explanation: 'Similar to Chlorine.'
  },
  {
    id: 'ch-hal-65',
    text: 'Which halogen is used in "Silver bromide" for photography?',
    options: ['Chlorine', 'Fluorine', 'Bromine', 'None'],
    correctAnswer: 'Bromine',
    explanation: 'AgBr is light-sensitive.'
  },
  {
    id: 'ch-hal-66',
    text: 'Interhalogen compounds are _____ reactive than the individual halogens (except F2).',
    options: ['Less', 'More', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Due to polar nature of the bond.'
  },
  {
    id: 'ch-hal-67',
    text: 'Which is a "noble" behavior shown by noble gases?',
    options: ['Low reactivity', 'Monoatomic nature', 'High ionization energy', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Reasons for their "noble" status.'
  },
  {
    id: 'ch-hal-68',
    text: 'Xenon trioxide (XeO3) is a powerful _____ compound.',
    options: ['Reducing', 'Explosive/Oxidizing', 'Liquid', 'None'],
    correctAnswer: 'Explosive/Oxidizing',
    explanation: 'Unstable and dangerous.'
  },
  {
    id: 'ch-hal-69',
    text: 'What is the "Valency" of Noble gases?',
    options: ['0', '1', '7', '8'],
    correctAnswer: '0',
    explanation: 'Normally do not form any bonds.'
  },
  {
    id: 'ch-hal-70',
    text: 'Which halogen exists as a "pseudo-solid" under certain conditions?',
    options: ['Iodine', 'Astatine', 'Chlorine', 'None'],
    correctAnswer: 'Astatine',
    explanation: 'Radioactive and very rare.'
  },
  {
    id: 'ch-hal-71',
    text: 'The electronegativity of halogens _____ down the group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Fluorine is the highest (4.0).'
  },
  {
    id: 'ch-hal-72',
    text: 'Which gas is produced in the reaction: NaCl + H2SO4 -> ?',
    options: ['Cl2', 'HCl', 'Na2SO4 only', 'H2'],
    correctAnswer: 'HCl',
    explanation: 'Hydrogen chloride gas.'
  },
  {
    id: 'ch-hal-73',
    text: 'To get Cl2 from HCl, we need to treat it with a/an _____ agent like MnO2.',
    options: ['Reducing', 'Oxidizing', 'Bleaching', 'None'],
    correctAnswer: 'Oxidizing',
    explanation: 'MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2.'
  },
  {
    id: 'ch-hal-74',
    text: 'Ethylene dibromide (C2H4Br2) is added to leaded petrol to prevent _____ buildup.',
    options: ['Carbon', 'Lead oxide', 'Sulfur', 'None'],
    correctAnswer: 'Lead oxide',
    explanation: 'Converts lead to volatile lead bromide.'
  },
  {
    id: 'ch-hal-75',
    text: 'Iodine is _____ soluble in water but _____ in KI solution.',
    options: ['Highly, insoluble', 'Slightly, highly soluble', 'Both insoluble', 'None'],
    correctAnswer: 'Slightly, highly soluble',
    explanation: 'Forms soluble triiodide ion (I3-).'
  },
  {
    id: 'ch-hal-76',
    text: 'Chlorine water on standing in sunlight releases _____ gas.',
    options: ['CO2', 'Oxygen', 'Hydrogen', 'Nitrogen'],
    correctAnswer: 'Oxygen',
    explanation: '2HOCl -> 2HCl + O2.'
  },
  {
    id: 'ch-hal-77',
    text: 'Fluorine was first isolated by:',
    options: ['Moissan', 'Scheele', 'Davy', 'None'],
    correctAnswer: 'Moissan',
    explanation: 'In 1886; a very dangerous experiment.'
  },
  {
    id: 'ch-hal-78',
    text: 'Which halogen is used in making anti-knock compounds for gasoline?',
    options: ['Chlorine', 'Bromine', 'Fluorine', 'Iodine'],
    correctAnswer: 'Bromine',
    explanation: 'Used in ethylene dibromide.'
  },
  {
    id: 'ch-hal-79',
    text: 'Noble gases can be separated from each other by _____ on coconut charcoal.',
    options: ['Filtration', 'Adsorption (Dewar\'s method)', 'Centrifugation', 'None'],
    correctAnswer: 'Adsorption (Dewar\'s method)',
    explanation: 'Based on different adsorption capacities at low temperatures.'
  },
  {
    id: 'ch-hal-80',
    text: 'A mixture of Argon and Nitrogen is used in _____ to prevent oxidation.',
    options: ['Tires', 'Incandescent lamps', 'Balloons', 'None'],
    correctAnswer: 'Incandescent lamps',
    explanation: 'Standard light bulbs.'
  },
  {
    id: 'ch-hal-81',
    text: 'Helium is the _____ densest gas after Hydrogen.',
    options: ['First', 'Second', 'Third', 'None'],
    correctAnswer: 'Second',
    explanation: 'Lightest noble gas.'
  },
  {
    id: 'ch-hal-82',
    text: 'Halogens belong to the _____ block of the periodic table.',
    options: ['s', 'p', 'd', 'f'],
    correctAnswer: 'p',
    explanation: 'Group 17.'
  },
  {
    id: 'ch-hal-83',
    text: 'The size of Noble gas atoms _____ down the group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Trend is same as all groups.'
  },
  {
    id: 'ch-hal-84',
    text: 'Which is the "least" reactive halogen towards Hydrogen?',
    options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
    correctAnswer: 'Iodine',
    explanation: 'Reaction is reversible and requires a catalyst.'
  },
  {
    id: 'ch-hal-85',
    text: 'The color of I2 vapor is:',
    options: ['Red', 'Violet/Purple', 'Green', 'Blue'],
    correctAnswer: 'Violet/Purple',
    explanation: 'Sublimation product.'
  },
  {
    id: 'ch-hal-86',
    text: 'Oxyacids of Chlorine include:',
    options: ['HClO, HClO2', 'HClO3, HClO4', 'All of above', 'None'],
    correctAnswer: 'All of above',
    explanation: 'Hypochlorous, Chlorous, Chloric, Perchloric.'
  },
  {
    id: 'ch-hal-87',
    text: 'The oxidation state of Chlorine in KClO4 is:',
    options: ['+1', '+3', '+5', '+7'],
    correctAnswer: '+7',
    explanation: 'Highest for Chlorine.'
  },
  {
    id: 'ch-hal-88',
    text: 'The oxidation state of Chlorine in bleaching powder is _____ and _____.',
    options: ['0, 0', '+1, -1', '+2, -2', 'None'],
    correctAnswer: '+1, -1',
    explanation: 'One Cl is part of hypochlorite; one is chloride ion.'
  },
  {
    id: 'ch-hal-89',
    text: 'Which noble gas does not occur in the atmosphere?',
    options: ['Helium', 'Radon', 'Argon', 'None'],
    correctAnswer: 'Radon',
    explanation: 'It is a radioactive gas from decay of Radium/Uranium in soil.'
  },
  {
    id: 'ch-hal-90',
    text: 'Helium is used in _____ to cool superconducting magnets.',
    options: ['X-ray', 'MRI machines', 'CT scan', 'None'],
    correctAnswer: 'MRI machines',
    explanation: 'Requires cryogenic temperatures.'
  },
  {
    id: 'ch-hal-91',
    text: 'The "Neon" signs used for advertising contain _____ gas at _____ pressure.',
    options: ['Neon, High', 'Neon, Low', 'Argon, High', 'None'],
    correctAnswer: 'Neon, Low',
    explanation: 'Standard gas discharge tube condition.'
  },
  {
    id: 'ch-hal-92',
    text: 'The boiling point of HI is _____ than HBr.',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Due to larger size and stronger London forces.'
  },
  {
    id: 'ch-hal-93',
    text: 'In the halogen group, metallic character _____ down the group.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Iodine shows some metallic luster.'
  },
  {
    id: 'ch-hal-94',
    text: 'Interhalogen compounds of the type XX\'7 are only formed by _____ and _____.',
    options: ['Cl, F', 'Br, F', 'I, F', 'None'],
    correctAnswer: 'I, F',
    explanation: 'IF7 is the only known example due to size ratio.'
  },
  {
    id: 'ch-hal-95',
    text: 'Iodine is _____ reactive than Bromine.',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'Less',
    explanation: 'Reactivity decreases down the halogen group.'
  },
  {
    id: 'ch-hal-96',
    text: 'Fluorine reacts with water to release _____ gas.',
    options: ['Hydrogen', 'Oxygen/Ozone', 'Fluorine oxide', 'None'],
    correctAnswer: 'Oxygen/Ozone',
    explanation: 'Reaction is extremely vigorous.'
  },
  {
    id: 'ch-hal-97',
    text: 'Which halogen is used in "Iodized Salt"?',
    options: ['Chlorine', 'Fluorine', 'Iodine', 'None'],
    correctAnswer: 'Iodine',
    explanation: 'Usually added as KI or KIO3.'
  },
  {
    id: 'ch-hal-98',
    text: 'Xenon oxyfluorides include:',
    options: ['XeOF2', 'XeOF4', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Compounds of Xe with both O and F.'
  },
  {
    id: 'ch-hal-99',
    text: 'The bond in Noble gas crystals is _____ in nature.',
    options: ['Ionic', 'Covalent', 'Van der Waals', 'Metallic'],
    correctAnswer: 'Van der Waals',
    explanation: 'Very weak forces.'
  },
  {
    id: 'ch-hal-100',
    text: 'Halogens are all _____ and have _____ odors.',
    options: ['Sweet, pleasant', 'Toxic, suffocating', 'Odorless, safe', 'None'],
    correctAnswer: 'Toxic, suffocating',
    explanation: 'Must be handled with care.'
  }
];
