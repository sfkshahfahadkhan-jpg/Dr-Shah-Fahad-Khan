import { Question } from '../types';

export const CHEMISTRY_ALCOHOL_QUIZ: Question[] = [
  {
    id: 'ch-ap-1',
    text: 'Alcohols are derivatives of water in which one hydrogen atom is replaced by _____ group.',
    options: ['Aryl', 'Alkyl', 'Acyl', 'None'],
    correctAnswer: 'Alkyl',
    explanation: 'General formula R-OH.'
  },
  {
    id: 'ch-ap-2',
    text: 'Classification: An alcohol with two -OH groups is called:',
    options: ['Monohydric', 'Dihydric (Glycol)', 'Trihydric', 'None'],
    correctAnswer: 'Dihydric (Glycol)',
    explanation: 'e.g. Ethylene glycol.'
  },
  {
    id: 'ch-ap-3',
    text: 'Methanol is industrially prepared from "Water Gas" (CO + H2) using _____ catalyst.',
    options: ['Fe', 'ZnO + Cr2O3', 'Nickel', 'None'],
    correctAnswer: 'ZnO + Cr2O3',
    explanation: 'At 450°C and 200 atm pressure.'
  },
  {
    id: 'ch-ap-4',
    text: 'Ethanol is prepared on a large scale by the fermentation of _____ or _____.',
    options: ['Coal', 'Molasses, Starch', 'Petroleum', 'None'],
    correctAnswer: 'Molasses, Starch',
    explanation: 'Biological process using yeast.'
  },
  {
    id: 'ch-ap-5',
    text: 'The enzyme that converts Glucose into Ethanol is:',
    options: ['Diastase', 'Maltase', 'Zymase', 'Invertase'],
    correctAnswer: 'Zymase',
    explanation: 'Present in yeast.'
  },
  {
    id: 'ch-ap-6',
    text: 'The enzyme that converts Molasses (Sucrose) into Glucose and Fructose is:',
    options: ['Zymase', 'Invertase', 'Diastase', 'None'],
    correctAnswer: 'Invertase',
    explanation: 'First step in fermentation of molasses.'
  },
  {
    id: 'ch-ap-7',
    text: 'Fermentation stops when the alcohol concentration reaches about:',
    options: ['5%', '12-14%', '50%', '95%'],
    correctAnswer: '12-14%',
    explanation: 'Yeast cells are killed at higher concentrations.'
  },
  {
    id: 'ch-ap-8',
    text: 'Alcohol obtained by fermentation is purified by _____ to get 95% Ethanol.',
    options: ['Filtration', 'Fractional distillation', 'Crystallization', 'None'],
    correctAnswer: 'Fractional distillation',
    explanation: 'Forms an azeotropic mixture.'
  },
  {
    id: 'ch-ap-9',
    text: '95.5% Ethanol is called _____ spirit.',
    options: ['Absolute', 'Rectified', 'Denatured', 'Methylated'],
    correctAnswer: 'Rectified',
    explanation: 'Common commercial form.'
  },
  {
    id: 'ch-ap-10',
    text: '100% Ethanol is called _____ alcohol.',
    options: ['Rectified', 'Absolute', 'Pure', 'None'],
    correctAnswer: 'Absolute',
    explanation: 'Obtained by distilling rectified spirit with lime (CaO).'
  },
  {
    id: 'ch-ap-11',
    text: 'Methylated spirit is Ethanol containing about 10% _____ to make it unfit for drinking.',
    options: ['Water', 'Methanol', 'Benzene', 'Acetone'],
    correctAnswer: 'Methanol',
    explanation: 'Also contains small amounts of pyridine.'
  },
  {
    id: 'ch-ap-12',
    text: 'Lucas test is used to distinguish between:',
    options: ['Alkanes and Alkenes', '1°, 2°, 3° Alcohols', 'Aldehydes and Ketones', 'None'],
    correctAnswer: '1°, 2°, 3° Alcohols',
    explanation: 'Based on the rate of formation of alkyl chloride.'
  },
  {
    id: 'ch-ap-13',
    text: 'In Lucas test, _____ alcohols produce immediate cloudiness/turbidity.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Tertiary',
    explanation: 'Reaction is very fast.'
  },
  {
    id: 'ch-ap-14',
    text: 'In Lucas test, _____ alcohols produce turbidity after 5-10 minutes.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Secondary',
    explanation: 'Moderate rate of reaction.'
  },
  {
    id: 'ch-ap-15',
    text: 'In Lucas test, _____ alcohols do not produce turbidity at room temperature.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Primary',
    explanation: 'Requires heating for reaction.'
  },
  {
    id: 'ch-ap-16',
    text: 'Primary alcohols on oxidation with K2Cr2O7/H2SO4 first give _____ and then _____.',
    options: ['Ketones, Acids', 'Aldehydes, Carboxylic acids', 'Ethers, Esters', 'None'],
    correctAnswer: 'Aldehydes, Carboxylic acids',
    explanation: 'Sequential oxidation.'
  },
  {
    id: 'ch-ap-17',
    text: 'Secondary alcohols on oxidation give:',
    options: ['Aldehydes', 'Ketones', 'Acids with same C', 'None'],
    correctAnswer: 'Ketones',
    explanation: 'Resistant to further oxidation.'
  },
  {
    id: 'ch-ap-18',
    text: 'Tertiary alcohols on oxidation with acidified K2Cr2O7 give _____ and _____.',
    options: ['Ketones, Acids with fewer C atoms', 'Aldehydes', 'No reaction', 'None'],
    correctAnswer: 'Ketones, Acids with fewer C atoms',
    explanation: 'They undergo dehydration first to form alkenes, which then oxidize.'
  },
  {
    id: 'ch-ap-19',
    text: 'Dehydration of alcohols at 180°C with conc. H2SO4 gives:',
    options: ['Ethers', 'Alkenes', 'Aldehydes', 'None'],
    correctAnswer: 'Alkenes',
    explanation: 'Intramolecular dehydration.'
  },
  {
    id: 'ch-ap-20',
    text: 'Dehydration of alcohols at 140°C with excess alcohol gives:',
    options: ['Alkenes', 'Ethers', 'Esters', 'None'],
    correctAnswer: 'Ethers',
    explanation: 'Intermolecular dehydration.'
  },
  {
    id: 'ch-ap-21',
    text: 'The reaction of alcohol with carboxylic acid in the presence of H2SO4 is called:',
    options: ['Etherification', 'Esterification', 'Saponification', 'None'],
    correctAnswer: 'Esterification',
    explanation: 'Produces fruit-smelling esters.'
  },
  {
    id: 'ch-ap-22',
    text: 'Iodoform test is shown by _____ and _____.',
    options: ['Methanol, Ethanol', 'Ethanol, Isopropyl alcohol', 'Butanol, Pentanol', 'None'],
    correctAnswer: 'Ethanol, Isopropyl alcohol',
    explanation: 'Requires CH3CH(OH)- group.'
  },
  {
    id: 'ch-ap-23',
    text: 'Methanol _____ show the Iodoform test.',
    options: ['Does', 'Does not', 'Sometimes', 'None'],
    correctAnswer: 'Does not',
    explanation: 'Does not have a methyl group attached to the carbinol carbon.'
  },
  {
    id: 'ch-ap-24',
    text: 'Phenols are derivatives of benzene in which -OH is _____ attached to the ring.',
    options: ['Indirectly', 'Directly', 'Locally', 'None'],
    correctAnswer: 'Directly',
    explanation: 'General formula C6H5OH.'
  },
  {
    id: 'ch-ap-25',
    text: 'Phenol was first isolated from coal tar by _____ and named Carbolic acid.',
    options: ['Runge', 'Wohler', 'Faraday', 'None'],
    correctAnswer: 'Runge',
    explanation: 'In 1834.'
  },
  {
    id: 'ch-ap-26',
    text: 'Dow\'s process involves the reaction of _____ with NaOH at high T and P.',
    options: ['Benzene', 'Chlorobenzene', 'Phenol', 'None'],
    correctAnswer: 'Chlorobenzene',
    explanation: 'Industrial preparation of phenol.'
  },
  {
    id: 'ch-ap-27',
    text: 'Phenol is _____ acidic than alcohols.',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Due to resonance stabilization of phenoxide ion.'
  },
  {
    id: 'ch-ap-28',
    text: 'Phenol reacts with Zinc dust to give:',
    options: ['Cyclohexane', 'Benzene', 'Aniline', 'None'],
    correctAnswer: 'Benzene',
    explanation: 'Reduction reaction.'
  },
  {
    id: 'ch-ap-29',
    text: 'Bromination of phenol with bromine water gives a white precipitate of:',
    options: ['2-Bromophenol', '4-Bromophenol', '2,4,6-Tribromophenol', 'None'],
    correctAnswer: '2,4,6-Tribromophenol',
    explanation: 'Highly reactive ring.'
  },
  {
    id: 'ch-ap-30',
    text: 'Nitration of phenol with dilute HNO3 at room temperature gives _____ and _____.',
    options: ['o-Nitrophenol, p-Nitrophenol', 'm-Nitrophenol', 'Picric acid', 'None'],
    correctAnswer: 'o-Nitrophenol, p-Nitrophenol',
    explanation: '-OH is o,p-directing.'
  },
  {
    id: 'ch-ap-31',
    text: 'Reaction of phenol with concentrated HNO3 and H2SO4 gives:',
    options: ['o-Nitrophenol', 'Picric acid (2,4,6-trinitrophenol)', 'Benzoic acid', 'None'],
    correctAnswer: 'Picric acid (2,4,6-trinitrophenol)',
    explanation: 'Vigorous nitration.'
  },
  {
    id: 'ch-ap-32',
    text: 'Phenol is used as a _____ in soaps and lotions.',
    options: ['Fertilizer', 'Disinfectant/Antiseptic', 'Fuel', 'None'],
    correctAnswer: 'Disinfectant/Antiseptic',
    explanation: 'Lister first used it in surgery.'
  },
  {
    id: 'ch-ap-33',
    text: 'Bakelite is a polymer of _____ and _____.',
    options: ['Phenol, Formaldehyde', 'Phenol, Acetone', 'Urea, Formaldehyde', 'None'],
    correctAnswer: 'Phenol, Formaldehyde',
    explanation: 'Thermosetting plastic.'
  },
  {
    id: 'ch-ap-34',
    text: 'Ethers are organic compounds with the general formula:',
    options: ['R-OH', 'R-O-R\'', 'R-CHO', 'R-CO-R'],
    correctAnswer: 'R-O-R\'',
    explanation: 'Oxygen bridge between two alkyl groups.'
  },
  {
    id: 'ch-ap-35',
    text: 'In symmetrical ethers, the alkyl groups R and R\' are:',
    options: ['Different', 'Identical', 'Large', 'Small'],
    correctAnswer: 'Identical',
    explanation: 'e.g. Diethyl ether.'
  },
  {
    id: 'ch-ap-36',
    text: 'The best method for preparation of unsymmetrical ethers is:',
    options: ['Dehydration of alcohols', 'Williamson synthesis', 'Grignard', 'None'],
    correctAnswer: 'Williamson synthesis',
    explanation: 'R-X + Na-OR\' -> R-O-R\' + NaX.'
  },
  {
    id: 'ch-ap-37',
    text: 'Ethers are relatively _____ and are used as solvents.',
    options: ['Reactive', 'Inert', 'Acidic', 'Basic'],
    correctAnswer: 'Inert',
    explanation: 'Do not react with bases or reducing agents easily.'
  },
  {
    id: 'ch-ap-38',
    text: 'Diethyl ether was used as an _____ in the past.',
    options: ['Antiseptic', 'Anesthetic', 'Fuel', 'None'],
    correctAnswer: 'Anesthetic',
    explanation: 'Inhalational anesthetic.'
  },
  {
    id: 'ch-ap-39',
    text: 'The boiling points of ethers are _____ than isomeric alcohols.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'Ethers cannot form intermolecular hydrogen bonds.'
  },
  {
    id: 'ch-ap-40',
    text: 'Reaction of ether with hot concentrated HI gives:',
    options: ['Alcohol and Alkyl iodide', 'Two moles of alkyl iodide', 'Alkane', 'None'],
    correctAnswer: 'Two moles of alkyl iodide',
    explanation: 'C-O bond is cleaved.'
  },
  {
    id: 'ch-ap-41',
    text: 'Methanol is also known as _____ because it was obtained by destructive distillation of wood.',
    options: ['Grain alcohol', 'Wood spirit', 'Fruit spirit', 'None'],
    correctAnswer: 'Wood spirit',
    explanation: 'Historical name.'
  },
  {
    id: 'ch-ap-42',
    text: 'Ethanol is also known as _____ because it is found in beverages.',
    options: ['Wood spirit', 'Grain alcohol', 'Denatured spirit', 'None'],
    correctAnswer: 'Grain alcohol',
    explanation: 'Common name.'
  },
  {
    id: 'ch-ap-43',
    text: 'Which is a "Primary" alcohol?',
    options: ['2-Butanol', '1-Butanol', '2-Methyl-2-propanol', 'None'],
    correctAnswer: '1-Butanol',
    explanation: '-OH is on the first carbon.'
  },
  {
    id: 'ch-ap-44',
    text: 'Which is a "Tertiary" alcohol?',
    options: ['n-Butanol', 'Isopropanol', 't-Butyl alcohol', 'None'],
    correctAnswer: 't-Butyl alcohol',
    explanation: 'Carbon with -OH is attached to three other carbons.'
  },
  {
    id: 'ch-ap-45',
    text: 'Glycols are alcohols containing _____ hydroxyl groups.',
    options: ['1', '2', '3', 'None'],
    correctAnswer: '2',
    explanation: 'e.g. 1,2-ethanediol.'
  },
  {
    id: 'ch-ap-46',
    text: 'Glycerol (Glycerin) is a _____ alcohol.',
    options: ['Monohydric', 'Dihydric', 'Trihydric', 'None'],
    correctAnswer: 'Trihydric',
    explanation: 'Contains three -OH groups; 1,2,3-propanetriol.'
  },
  {
    id: 'ch-ap-47',
    text: 'Boiling point of alcohols _____ as the molecular mass increases.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to stronger Van der Waals forces.'
  },
  {
    id: 'ch-ap-48',
    text: 'The high boiling point of alcohols compared to alkanes of similar mass is due to:',
    options: ['Ionic bonding', 'Hydrogen bonding', 'Covalent bonding', 'None'],
    correctAnswer: 'Hydrogen bonding',
    explanation: 'Intermolecular attraction between -OH groups.'
  },
  {
    id: 'ch-ap-49',
    text: 'Solubility of alcohols in water _____ as the alkyl chain length increases.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Non-polar part becomes dominant.'
  },
  {
    id: 'ch-ap-50',
    text: 'Phenol turns _____ on exposure to air due to slow oxidation.',
    options: ['Blue', 'Pink/Reddish', 'Green', 'Yellow'],
    correctAnswer: 'Pink/Reddish',
    explanation: 'Formation of quinones.'
  },
  {
    id: 'ch-ap-51',
    text: 'Which reaction identifies the presence of -OH group in organic compounds?',
    options: ['Reaction with Sodium metal (H2 gas evolved)', 'Iodoform test', 'Tollen\'s test', 'None'],
    correctAnswer: 'Reaction with Sodium metal (H2 gas evolved)',
    explanation: 'General test for active hydrogen.'
  },
  {
    id: 'ch-ap-52',
    text: 'Methanol is _____ and can cause blindness if ingested.',
    options: ['Safe', 'Toxic', 'A nutrient', 'None'],
    correctAnswer: 'Toxic',
    explanation: 'Metabolized to formaldehyde and formic acid.'
  },
  {
    id: 'ch-ap-53',
    text: 'Alcohol + PCl5 -> ?',
    options: ['R-Cl + POCl3 + HCl', 'R-Cl + PCl3', 'R-OH2', 'None'],
    correctAnswer: 'R-Cl + POCl3 + HCl',
    explanation: 'Standard substitution reaction.'
  },
  {
    id: 'ch-ap-54',
    text: 'Ethyl alcohol reacts with conc. H2SO4 at room temperature to give:',
    options: ['Ethylene', 'Ethyl hydrogen sulfate', 'Diethyl ether', 'None'],
    correctAnswer: 'Ethyl hydrogen sulfate',
    explanation: 'Acid-base/Addition intermediate.'
  },
  {
    id: 'ch-ap-55',
    text: 'Which has the highest acidic strength?',
    options: ['Water', 'Ethanol', 'Phenol', 'Methanol'],
    correctAnswer: 'Phenol',
    explanation: 'Order: Phenol > Water > Methanol > Ethanol.'
  },
  {
    id: 'ch-ap-56',
    text: 'The acidity of phenol is _____ than water.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Ka of phenol is ~10^-10; water is ~10^-14.'
  },
  {
    id: 'ch-ap-57',
    text: 'Phenol reacts with _____ to give a violet color.',
    options: ['KMnO4', 'Neutral FeCl3', 'NaOH', 'None'],
    correctAnswer: 'Neutral FeCl3',
    explanation: 'Specific test for phenols.'
  },
  {
    id: 'ch-ap-58',
    text: 'Which compound is used as an antifreeze in car radiators?',
    options: ['Methanol', 'Ethanol', 'Ethylene glycol', 'None'],
    correctAnswer: 'Ethylene glycol',
    explanation: 'High boiling point and miscible with water.'
  },
  {
    id: 'ch-ap-59',
    text: 'Diethyl ether is _____ in water but _____ in organic solvents.',
    options: ['Highly soluble, Insoluble', 'Slightly soluble, Soluble', 'Both insoluble', 'None'],
    correctAnswer: 'Slightly soluble, Soluble',
    explanation: 'Can form limited H-bonds with water.'
  },
  {
    id: 'ch-ap-60',
    text: 'Ethers are _____ than water.',
    options: ['Heavier', 'Lighter', 'Equally dense', 'None'],
    correctAnswer: 'Lighter',
    explanation: 'Float on water.'
  },
  {
    id: 'ch-ap-61',
    text: 'Which is a "Mixed" ether?',
    options: ['Dimethyl ether', 'Diethyl ether', 'Ethyl methyl ether', 'None'],
    correctAnswer: 'Ethyl methyl ether',
    explanation: 'Two different alkyl groups.'
  },
  {
    id: 'ch-ap-62',
    text: 'Phenol on heating with conc. H2SO4 at 100°C gives mainly:',
    options: ['o-Phenolsulfonic acid', 'p-Phenolsulfonic acid', 'Benzene', 'None'],
    correctAnswer: 'p-Phenolsulfonic acid',
    explanation: 'Para product is more stable at higher temperature.'
  },
  {
    id: 'ch-ap-63',
    text: 'Reaction of phenol with Chloroform and NaOH is called _____ reaction.',
    options: ['Friedel-Crafts', 'Reimer-Tiemann', 'Dow\'s', 'None'],
    correctAnswer: 'Reimer-Tiemann',
    explanation: 'Produces Salicylaldehyde.'
  },
  {
    id: 'ch-ap-64',
    text: 'Phenol reacts with NaOH to form _____ which is water soluble.',
    options: ['Sodium phenoxide', 'Benzene', 'Phenol ether', 'None'],
    correctAnswer: 'Sodium phenoxide',
    explanation: 'Standard acid-base reaction.'
  },
  {
    id: 'ch-ap-65',
    text: 'Which alcohol is used in thermometers for measuring low temperatures?',
    options: ['Methanol', 'Ethanol', 'Phenol', 'None'],
    correctAnswer: 'Ethanol',
    explanation: 'Has low freezing point (-114°C).'
  },
  {
    id: 'ch-ap-66',
    text: 'The carbinol carbon is the one attached to the _____ group.',
    options: ['Alkyl', 'Hydroxyl (-OH)', 'Nitro', 'None'],
    correctAnswer: 'Hydroxyl (-OH)',
    explanation: 'Focus of chemical reactions in alcohols.'
  },
  {
    id: 'ch-ap-67',
    text: 'In the Esterification of alcohols, the O-H bond of _____ and C-O bond of _____ breaks.',
    options: ['Alcohol, Acid', 'Acid, Alcohol', 'Both Alcohol', 'None'],
    correctAnswer: 'Alcohol, Acid',
    explanation: 'Tracer studies show the O in ester comes from alcohol.'
  },
  {
    id: 'ch-ap-68',
    text: 'Formation of diethyl ether from ethanol is an example of _____ substitution.',
    options: ['Electrophilic', 'Nucleophilic', 'Free radical', 'None'],
    correctAnswer: 'Nucleophilic',
    explanation: 'One alcohol molecule attacks another.'
  },
  {
    id: 'ch-ap-69',
    text: 'Absolute alcohol is produced by adding _____ to rectified spirit and distilling.',
    options: ['Water', 'Benzene', 'NaOH', 'None'],
    correctAnswer: 'Benzene',
    explanation: 'Forms a ternary azeotrope that removes water.'
  },
  {
    id: 'ch-ap-70',
    text: 'Which functional group is found in "Epoxides"?',
    options: ['-O-', 'Three-membered cyclic ether', '-OH', 'None'],
    correctAnswer: 'Three-membered cyclic ether',
    explanation: 'Highly reactive due to ring strain.'
  },
  {
    id: 'ch-ap-71',
    text: 'Alcohol + Na metal -> Sodium alkoxide + H2. This shows _____ nature of alcohol.',
    options: ['Basic', 'Acidic', 'Reducing', 'None'],
    correctAnswer: 'Acidic',
    explanation: 'Release of H+ ion.'
  },
  {
    id: 'ch-ap-72',
    text: 'Which is a "Secondary" alcohol among these?',
    options: ['Isobutyl alcohol', 'Isopropyl alcohol', 't-Butyl alcohol', 'None'],
    correctAnswer: 'Isopropyl alcohol',
    explanation: '2-propanol.'
  },
  {
    id: 'ch-ap-73',
    text: 'Oxidation of 1-Propanol gives _____ first.',
    options: ['Propanone', 'Propanal', 'Propanoic acid', 'None'],
    correctAnswer: 'Propanal',
    explanation: 'Primary alcohol to aldehyde.'
  },
  {
    id: 'ch-ap-74',
    text: 'Oxidation of 2-Propanol gives:',
    options: ['Propanal', 'Propanone (Acetone)', 'Acetic acid', 'None'],
    correctAnswer: 'Propanone (Acetone)',
    explanation: 'Secondary alcohol to ketone.'
  },
  {
    id: 'ch-ap-75',
    text: 'Phenol reacts with acetyl chloride to give:',
    options: ['Phenyl acetate', 'Anisole', 'Phenol acid', 'None'],
    correctAnswer: 'Phenyl acetate',
    explanation: 'Acylation reaction.'
  },
  {
    id: 'ch-ap-76',
    text: 'Reaction of sodium phenoxide with methyl iodide gives:',
    options: ['Toluene', 'Anisole (Methyl phenyl ether)', 'Phenol', 'None'],
    correctAnswer: 'Anisole (Methyl phenyl ether)',
    explanation: 'Williamson synthesis for aromatic ether.'
  },
  {
    id: 'ch-ap-77',
    text: 'Which compound is used in the preparation of "Aspirin"?',
    options: ['Methanol', 'Phenol (via Salicylic acid)', 'Ethanol', 'None'],
    correctAnswer: 'Phenol (via Salicylic acid)',
    explanation: 'Acetyl salicylic acid.'
  },
  {
    id: 'ch-ap-78',
    text: 'Which is a "Polyvalent" functional group?',
    options: ['-OH', '-O-', '-CHO', '-Cl'],
    correctAnswer: '-O-',
    explanation: 'Attached to two other groups.'
  },
  {
    id: 'ch-ap-79',
    text: 'The IUPAC name of Diethyl ether is:',
    options: ['Ethoxymethane', 'Ethoxyethane', 'Propoxymethane', 'None'],
    correctAnswer: 'Ethoxyethane',
    explanation: 'Alkoxyalkane format.'
  },
  {
    id: 'ch-ap-80',
    text: 'The IUPAC name of Ethyl methyl ether is:',
    options: ['Methoxyethane', 'Ethoxymethane', 'Methoxypropane', 'None'],
    correctAnswer: 'Methoxyethane',
    explanation: 'Smaller group is alkoxy.'
  },
  {
    id: 'ch-ap-81',
    text: 'Ethers are stored in dark bottles because they form explosive _____ with air.',
    options: ['Oxides', 'Peroxides', 'Acids', 'None'],
    correctAnswer: 'Peroxides',
    explanation: 'Very dangerous during distillation.'
  },
  {
    id: 'ch-ap-82',
    text: 'The presence of peroxides in ethers is detected using _____ and starch.',
    options: ['KMnO4', 'KI', 'NaOH', 'None'],
    correctAnswer: 'KI',
    explanation: 'Peroxides liberate iodine from KI.'
  },
  {
    id: 'ch-ap-83',
    text: 'Which alcohol is known as "Spirit"?',
    options: ['Methanol', 'Ethanol', 'Phenol', 'None'],
    correctAnswer: 'Ethanol',
    explanation: 'General term for drinking alcohol.'
  },
  {
    id: 'ch-ap-84',
    text: 'Denatured alcohol contains _____ to prevent its misuse.',
    options: ['Poisonous substances', 'Sugars', 'Perfumes', 'None'],
    correctAnswer: 'Poisonous substances',
    explanation: 'Usually methanol and pyridine.'
  },
  {
    id: 'ch-ap-85',
    text: 'Reaction of alcohol with sodium metal is a/an _____ reaction.',
    options: ['Addition', 'Redox', 'Hydrolysis', 'None'],
    correctAnswer: 'Redox',
    explanation: 'Na is oxidized, H+ is reduced.'
  },
  {
    id: 'ch-ap-86',
    text: 'The conversion of starch to maltose uses the enzyme:',
    options: ['Zymase', 'Invertase', 'Diastase', 'Maltase'],
    correctAnswer: 'Diastase',
    explanation: 'Obtained from germinating barley.'
  },
  {
    id: 'ch-ap-87',
    text: 'The conversion of maltose to glucose uses the enzyme:',
    options: ['Zymase', 'Maltase', 'Diastase', 'None'],
    correctAnswer: 'Maltase',
    explanation: 'Found in yeast.'
  },
  {
    id: 'ch-ap-88',
    text: 'The solubility of glycerol in water is _____ due to multiple H-bonding sites.',
    options: ['Very low', 'Very high', 'Zero', 'None'],
    correctAnswer: 'Very high',
    explanation: 'Has three -OH groups.'
  },
  {
    id: 'ch-ap-89',
    text: 'The IUPAC name of Phenol is _____ benzene.',
    options: ['Hydroxy', 'Methyl', 'Nitro', 'None'],
    correctAnswer: 'Hydroxy',
    explanation: 'IUPAC also accepts the name Phenol.'
  },
  {
    id: 'ch-ap-90',
    text: 'Phenol + H2 (in presence of Ni) -> ?',
    options: ['Benzene', 'Cyclohexanol', 'Cyclohexane', 'None'],
    correctAnswer: 'Cyclohexanol',
    explanation: 'Reduction of the ring.'
  },
  {
    id: 'ch-ap-91',
    text: 'Which is used as a solvent in the extraction of fats and oils?',
    options: ['Water', 'Ether', 'Methanol', 'None'],
    correctAnswer: 'Ether',
    explanation: 'Excellent solvent for non-polar substances.'
  },
  {
    id: 'ch-ap-92',
    text: 'Phenols react with _____ to give a white precipitate (Kolbe\'s reaction).',
    options: ['CO2 and NaOH', 'HCl', 'Zn', 'None'],
    correctAnswer: 'CO2 and NaOH',
    explanation: 'Produces Salicylic acid (Kolbe-Schmitt reaction).'
  },
  {
    id: 'ch-ap-93',
    text: 'The hybridization of oxygen in ethers is:',
    options: ['sp', 'sp2', 'sp3', 'None'],
    correctAnswer: 'sp3',
    explanation: 'Bent geometry similar to water.'
  },
  {
    id: 'ch-ap-94',
    text: 'The C-O-C bond angle in ethers is _____ than 109.5° due to repulsion between alkyl groups.',
    options: ['Less', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'About 110° in dimethyl ether.'
  },
  {
    id: 'ch-ap-95',
    text: 'Which of these is used as a germicide?',
    options: ['Methanol', 'Ethyl alcohol (70%)', 'Phenol', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Common disinfectants.'
  },
  {
    id: 'ch-ap-96',
    text: 'Ethers do not react with _____ even on heating.',
    options: ['Oxygen', 'Bases and Alkali metals', 'Acids', 'None'],
    correctAnswer: 'Bases and Alkali metals',
    explanation: 'Lack of acidic hydrogen.'
  },
  {
    id: 'ch-ap-97',
    text: 'The reaction of ether with H2SO4 produces:',
    options: ['Alcohol', 'Oxonium salts', 'Alkanes', 'None'],
    correctAnswer: 'Oxonium salts',
    explanation: 'Ethers act as Lewis bases.'
  },
  {
    id: 'ch-ap-98',
    text: 'Which test distinguishes Methanol from Ethanol?',
    options: ['Lucas test', 'Iodoform test', 'FeCl3 test', 'None'],
    correctAnswer: 'Iodoform test',
    explanation: 'Ethanol gives yellow ppt, Methanol does not.'
  },
  {
    id: 'ch-ap-99',
    text: 'The general formula of monohydric alcohols is:',
    options: ['CnH2n+2O', 'CnH2nO', 'CnH2n+1O', 'None'],
    correctAnswer: 'CnH2n+2O',
    explanation: 'Same as ethers.'
  },
  {
    id: 'ch-ap-100',
    text: 'Phenol + 3H2SO4 (conc) -> ?',
    options: ['Picric acid', 'Phenol sulfonic acid', 'Benzene', 'None'],
    correctAnswer: 'Phenol sulfonic acid',
    explanation: 'Standard sulfonation.'
  }
];
