import { Question } from '../types';

export const BIOLOGY_BIOENERGETICS_QUIZ: Question[] = [
  {
    id: 'bio-ener-1',
    text: 'Bioenergetics is the study of _____ in living systems.',
    options: ['Energy transformations', 'Genetics', 'Evolution', 'Ecology'],
    correctAnswer: 'Energy transformations',
    explanation: 'Deals with how organisms acquire and use energy.'
  },
  {
    id: 'bio-ener-2',
    text: 'The universal energy currency of the cell is:',
    options: ['Glucose', 'ATP', 'NADH', 'Oxygen'],
    correctAnswer: 'ATP',
    explanation: 'Adenosine Triphosphate stores energy in its high-energy phosphate bonds.'
  },
  {
    id: 'bio-ener-3',
    text: 'Photosynthesis occurs in which organelle?',
    options: ['Mitochondria', 'Chloroplast', 'Nucleus', 'Ribosome'],
    correctAnswer: 'Chloroplast',
    explanation: 'Chloroplasts contain chlorophyll and other pigments.'
  },
  {
    id: 'bio-ener-4',
    text: 'The primary photosynthetic pigment is:',
    options: ['Chlorophyll a', 'Chlorophyll b', 'Carotenoids', 'Xanthophylls'],
    correctAnswer: 'Chlorophyll a',
    explanation: 'It is directly involved in the conversion of light energy to chemical energy.'
  },
  {
    id: 'bio-ener-5',
    text: 'The light-dependent reactions take place in the:',
    options: ['Stroma', 'Thylakoid membranes', 'Inner membrane', 'Cytoplasm'],
    correctAnswer: 'Thylakoid membranes',
    explanation: 'Where the photosystems and electron transport chain are located.'
  },
  {
    id: 'bio-ener-6',
    text: 'The light-independent reactions (Calvin cycle) take place in the:',
    options: ['Thylakoids', 'Stroma', 'Mitochondria', 'Matrix'],
    correctAnswer: 'Stroma',
    explanation: 'The fluid surrounding the thylakoids.'
  },
  {
    id: 'bio-ener-7',
    text: 'Oxygen produced during photosynthesis comes from the splitting of:',
    options: ['CO2', 'Water (H2O)', 'Glucose', 'ATP'],
    correctAnswer: 'Water (H2O)',
    explanation: 'This process is called photolysis.'
  },
  {
    id: 'bio-ener-8',
    text: 'The process of producing ATP using light energy is:',
    options: ['Photophosphorylation', 'Oxidative phosphorylation', 'Substrate-level phosphorylation', 'Fermentation'],
    correctAnswer: 'Photophosphorylation',
    explanation: 'Can be cyclic or non-cyclic.'
  },
  {
    id: 'bio-ener-9',
    text: 'Which enzyme fixes CO2 in the Calvin cycle?',
    options: ['ATP synthase', 'RuBisCO', 'Pep carboxylase', 'Dehydrogenase'],
    correctAnswer: 'RuBisCO',
    explanation: 'Ribulose-1,5-bisphosphate carboxylase/oxygenase.'
  },
  {
    id: 'bio-ener-10',
    text: 'The first stable product of C3 photosynthesis is:',
    options: ['Glucose', 'G3P', '3-PGA', 'Oxaloacetate'],
    correctAnswer: '3-PGA',
    explanation: '3-phosphoglycerate is a 3-carbon compound.'
  },
  {
    id: 'bio-ener-11',
    text: 'In cellular respiration, the breakdown of glucose begins with:',
    options: ['Krebs cycle', 'Glycolysis', 'ETC', 'Pyruvate oxidation'],
    correctAnswer: 'Glycolysis',
    explanation: 'Occurs in the cytoplasm.'
  },
  {
    id: 'bio-ener-12',
    text: 'Glycolysis results in the production of two molecules of:',
    options: ['Lactic acid', 'Pyruvate', 'Ethanol', 'Acetyl-CoA'],
    correctAnswer: 'Pyruvate',
    explanation: 'Along with a net gain of 2 ATP and 2 NADH.'
  },
  {
    id: 'bio-ener-13',
    text: 'Where does the Krebs cycle take place?',
    options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Stroma'],
    correctAnswer: 'Mitochondrial matrix',
    explanation: 'Following the conversion of pyruvate to Acetyl-CoA.'
  },
  {
    id: 'bio-ener-14',
    text: 'The Electron Transport Chain (ETC) of respiration is located in the:',
    options: ['Outer mitochondrial membrane', 'Inner mitochondrial membrane (Cristae)', 'Matrix', 'Thylakoid'],
    correctAnswer: 'Inner mitochondrial membrane (Cristae)',
    explanation: 'Where the majority of ATP is produced.'
  },
  {
    id: 'bio-ener-15',
    text: 'The final electron acceptor in the respiratory ETC is:',
    options: ['NAD+', 'FAD', 'Oxygen', 'Water'],
    correctAnswer: 'Oxygen',
    explanation: 'It combines with electrons and protons to form water.'
  },
  {
    id: 'bio-ener-16',
    text: 'Fermentation occurs in the _____ of oxygen.',
    options: ['Presence', 'Absence', 'High concentration', 'None'],
    correctAnswer: 'Absence',
    explanation: 'Anaerobic process to regenerate NAD+.'
  },
  {
    id: 'bio-ener-17',
    text: 'Lactic acid fermentation occurs in:',
    options: ['Yeast', 'Muscle cells during intense exercise', 'Bacteria in yogurt', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Causes muscle fatigue in humans.'
  },
  {
    id: 'bio-ener-18',
    text: 'Alcoholic fermentation by yeast produces:',
    options: ['Lactic acid and CO2', 'Ethanol and CO2', 'Methane', 'Water'],
    correctAnswer: 'Ethanol and CO2',
    explanation: 'Used in baking and brewing industries.'
  },
  {
    id: 'bio-ener-19',
    text: 'The total net ATP yield from one molecule of glucose in aerobic respiration is approximately:',
    options: ['2', '4', '36-38', '100'],
    correctAnswer: '36-38',
    explanation: 'Varies slightly depending on the shuttle used for NADH.'
  },
  {
    id: 'bio-ener-20',
    text: 'Chemiosmosis describes the production of ATP using a _____ gradient.',
    options: ['Sodium', 'Proton (H+)', 'Electron', 'Sugar'],
    correctAnswer: 'Proton (H+)',
    explanation: 'Protons flow through ATP synthase.'
  },
  {
    id: 'bio-ener-21',
    text: 'Chlorophyll contains which metal ion at its center?',
    options: ['Iron', 'Magnesium', 'Copper', 'Zinc'],
    correctAnswer: 'Magnesium',
    explanation: 'Essential for the structure and function of chlorophyll.'
  },
  {
    id: 'bio-ener-22',
    text: 'The absorption spectrum of chlorophyll a shows peaks in _____ and _____ light.',
    options: ['Green and Yellow', 'Blue and Red', 'Orange and Violet', 'Green and Blue'],
    correctAnswer: 'Blue and Red',
    explanation: 'Green light is mostly reflected, which is why plants look green.'
  },
  {
    id: 'bio-ener-23',
    text: 'Accessory pigments like carotenoids help by:',
    options: ['Fixing CO2', 'Absorbing additional wavelengths of light', 'Protecting chlorophyll from photo-oxidation', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'They expand the range of light used for photosynthesis.'
  },
  {
    id: 'bio-ener-24',
    text: 'A photosystem consists of a reaction center and _____ complexes.',
    options: ['Antenna', 'Storage', 'Protein only', 'Enzyme'],
    correctAnswer: 'Antenna',
    explanation: 'Antenna pigments harvest light energy.'
  },
  {
    id: 'bio-ener-25',
    text: 'Photosystem II (PSII) best absorbs light at wavelength:',
    options: ['700 nm', '680 nm', '500 nm', '400 nm'],
    correctAnswer: '680 nm',
    explanation: 'Its reaction center is P680.'
  },
  {
    id: 'bio-ener-26',
    text: 'Photosystem I (PSI) best absorbs light at wavelength:',
    options: ['680 nm', '700 nm', '750 nm', '380 nm'],
    correctAnswer: '700 nm',
    explanation: 'Its reaction center is P700.'
  },
  {
    id: 'bio-ener-27',
    text: 'The non-cyclic electron flow (Z-scheme) produces:',
    options: ['ATP only', 'NADPH only', 'ATP and NADPH', 'Sugar'],
    correctAnswer: 'ATP and NADPH',
    explanation: 'Requires both PSI and PSII.'
  },
  {
    id: 'bio-ener-28',
    text: 'Cyclic electron flow involves only _____ and produces only _____.',
    options: ['PSII, NADPH', 'PSI, ATP', 'PSII, ATP', 'PSI, Sugar'],
    correctAnswer: 'PSI, ATP',
    explanation: 'Used when the cell needs more ATP relative to NADPH.'
  },
  {
    id: 'bio-ener-29',
    text: 'The Calvin cycle must turn _____ times to produce one molecule of glucose.',
    options: ['1', '3', '6', '12'],
    correctAnswer: '6',
    explanation: 'One carbon is fixed per turn.'
  },
  {
    id: 'bio-ener-30',
    text: 'Which is a C4 plant?',
    options: ['Rice', 'Wheat', 'Maize (Corn)', 'Potato'],
    correctAnswer: 'Maize (Corn)',
    explanation: 'C4 plants are adapted to hot, dry environments.'
  },
  {
    id: 'bio-ener-31',
    text: 'In C4 plants, the first stable product is a 4-carbon compound called:',
    options: ['3-PGA', 'Malate', 'Oxaloacetate', 'Succinate'],
    correctAnswer: 'Oxaloacetate',
    explanation: 'Fixed by PEP carboxylase.'
  },
  {
    id: 'bio-ener-32',
    text: 'CAM plants (like cacti) fix CO2 at:',
    options: ['Noon', 'Night', 'Dawn', 'Dusk'],
    correctAnswer: 'Night',
    explanation: 'Crassulacean Acid Metabolism helps conserve water.'
  },
  {
    id: 'bio-ener-33',
    text: 'The enzyme RuBisCO can react with both CO2 and:',
    options: ['Nitrogen', 'Oxygen', 'Hydrogen', 'Methane'],
    correctAnswer: 'Oxygen',
    explanation: 'This leads to a wasteful process called photorespiration.'
  },
  {
    id: 'bio-ener-34',
    text: 'Photorespiration occurs when _____ levels are high and _____ levels are low.',
    options: ['CO2, O2', 'O2, CO2', 'Sugar, ATP', 'Light, Water'],
    correctAnswer: 'O2, CO2',
    explanation: 'Usually happens on hot days when stomata are closed.'
  },
  {
    id: 'bio-ener-35',
    text: 'The "Transition Reaction" converts pyruvate into:',
    options: ['Glucose', 'Lactic acid', 'Acetyl-CoA', 'Citrate'],
    correctAnswer: 'Acetyl-CoA',
    explanation: 'Occurs as pyruvate enters the mitochondria.'
  },
  {
    id: 'bio-ener-36',
    text: 'One turn of the Krebs cycle produces how many ATP (via substrate-level phosphorylation)?',
    options: ['1', '2', '3', '32'],
    correctAnswer: '1',
    explanation: 'Produced as GTP.'
  },
  {
    id: 'bio-ener-37',
    text: 'How many NADH molecules are produced in one full Krebs cycle (per Acetyl-CoA)?',
    options: ['1', '2', '3', '10'],
    correctAnswer: '3',
    explanation: 'Also produces 1 FADH2.'
  },
  {
    id: 'bio-ener-38',
    text: 'The oxidation of one NADH in the ETC produces how many ATP?',
    options: ['1', '2', '3', '38'],
    correctAnswer: '3',
    explanation: 'Electrons pass through 3 proton-pumping complexes.'
  },
  {
    id: 'bio-ener-39',
    text: 'The oxidation of one FADH2 in the ETC produces how many ATP?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'FADH2 enters the ETC at a later stage.'
  },
  {
    id: 'bio-ener-40',
    text: 'The enzyme that synthesizes ATP during chemiosmosis is:',
    options: ['ATPase', 'ATP synthase', 'Kinase', 'Phosphatase'],
    correctAnswer: 'ATP synthase',
    explanation: 'Powered by the proton motive force.'
  },
  {
    id: 'bio-ener-41',
    text: 'Photosynthesis is an _____ process, while respiration is an _____ process.',
    options: ['Exergonic, Endergonic', 'Endergonic, Exergonic', 'Anabolic, Anabolic', 'Catabolic, Catabolic'],
    correctAnswer: 'Endergonic, Exergonic',
    explanation: 'Photosynthesis stores energy; respiration releases it.'
  },
  {
    id: 'bio-ener-42',
    text: 'The split of water in PSII is called:',
    options: ['Hydrolysis', 'Photolysis', 'Glycolysis', 'Electrolysis'],
    correctAnswer: 'Photolysis',
    explanation: 'Light-induced splitting.'
  },
  {
    id: 'bio-ener-43',
    text: 'NADPH is a carrier of:',
    options: ['Energy only', 'High-energy electrons and protons', 'Phosphate', 'Carbon'],
    correctAnswer: 'High-energy electrons and protons',
    explanation: 'Acts as a reducing agent in the Calvin cycle.'
  },
  {
    id: 'bio-ener-44',
    text: 'Which wavelength of light is least effective for photosynthesis?',
    options: ['Blue', 'Red', 'Green', 'Violet'],
    correctAnswer: 'Green',
    explanation: 'Green light is reflected/transmitted, not absorbed.'
  },
  {
    id: 'bio-ener-45',
    text: 'The sugar produced by the Calvin cycle is:',
    options: ['Glucose', 'Sucrose', 'G3P (Glyceraldehyde-3-phosphate)', 'Fructose'],
    correctAnswer: 'G3P (Glyceraldehyde-3-phosphate)',
    explanation: 'Two G3P molecules can make one glucose.'
  },
  {
    id: 'bio-ener-46',
    text: 'Bundle sheath cells are a feature of:',
    options: ['C3 plants', 'C4 plants', 'CAM plants', 'Algae'],
    correctAnswer: 'C4 plants',
    explanation: 'Part of "Kranz anatomy".'
  },
  {
    id: 'bio-ener-47',
    text: 'The end-product of glycolysis in anaerobic conditions in human muscle is:',
    options: ['Ethanol', 'Lactate', 'Pyruvate', 'Citrate'],
    correctAnswer: 'Lactate',
    explanation: 'Lactic acid causes burning sensation.'
  },
  {
    id: 'bio-ener-48',
    text: 'Cytochromes are iron-containing proteins found in:',
    options: ['Chloroplasts', 'Mitochondria', 'Both', 'Nucleus'],
    correctAnswer: 'Both',
    explanation: 'Involved in electron transport.'
  },
  {
    id: 'bio-ener-49',
    text: 'The breakdown of complex molecules to release energy is:',
    options: ['Anabolism', 'Catabolism', 'Metabolism', 'Photosynthesis'],
    correctAnswer: 'Catabolism',
    explanation: 'Example: Respiration.'
  },
  {
    id: 'bio-ener-50',
    text: 'Which bond in ATP is "high-energy"?',
    options: ['Ribose-adenine', 'Phosphate-phosphate', 'Ribose-phosphate', 'All'],
    correctAnswer: 'Phosphate-phosphate',
    explanation: 'Breaking the terminal phosphate releases ~7.3 kcal/mol.'
  },
  {
    id: 'bio-ener-51',
    text: 'The raw materials for photosynthesis are:',
    options: ['O2 and Glucose', 'CO2 and H2O', 'Sugar and H2O', 'ATP and CO2'],
    correctAnswer: 'CO2 and H2O',
    explanation: 'In the presence of light and chlorophyll.'
  },
  {
    id: 'bio-ener-52',
    text: 'Engelmann\'s experiment demonstrated the _____ spectrum of photosynthesis.',
    options: ['Absorption', 'Action', 'Refraction', 'Emission'],
    correctAnswer: 'Action',
    explanation: 'Using aerobic bacteria and Spirogyra.'
  },
  {
    id: 'bio-ener-53',
    text: 'The first step of the light reaction is:',
    options: ['Photolysis', 'Excitation of chlorophyll', 'Production of ATP', 'Fixation of CO2'],
    correctAnswer: 'Excitation of chlorophyll',
    explanation: 'Absorption of a photon.'
  },
  {
    id: 'bio-ener-54',
    text: 'The flow of electrons from water to NADP+ is:',
    options: ['Cyclic', 'Non-cyclic', 'Reversible', 'Static'],
    correctAnswer: 'Non-cyclic',
    explanation: 'Also known as the Z-scheme.'
  },
  {
    id: 'bio-ener-55',
    text: 'The enzyme ATP synthase is driven by:',
    options: ['Electron flow', 'Proton gradient', 'Sugar level', 'Oxygen concentration'],
    correctAnswer: 'Proton gradient',
    explanation: 'Chemiosmotic coupling.'
  },
  {
    id: 'bio-ener-56',
    text: 'One molecule of glucose requires _____ molecules of CO2 for synthesis.',
    options: ['1', '3', '6', '12'],
    correctAnswer: '6',
    explanation: 'C6H12O6.'
  },
  {
    id: 'bio-ener-57',
    text: 'RuBP is a _____ carbon sugar.',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'Ribulose bisphosphate.'
  },
  {
    id: 'bio-ener-58',
    text: 'PGA is reduced to G3P using _____ and _____.',
    options: ['ATP, NADPH', 'CO2, ATP', 'H2O, O2', 'NADH, FADH2'],
    correctAnswer: 'ATP, NADPH',
    explanation: 'Reduction step of Calvin cycle.'
  },
  {
    id: 'bio-ener-59',
    text: 'The most abundant protein in the world is probably:',
    options: ['Hemoglobin', 'Collagen', 'RuBisCO', 'Insulin'],
    correctAnswer: 'RuBisCO',
    explanation: 'Due to its crucial role in all green plants.'
  },
  {
    id: 'bio-ener-60',
    text: 'C4 plants minimize _____ by fixing CO2 in mesophyll and releasing it in bundle sheath.',
    options: ['Photosynthesis', 'Respiration', 'Photorespiration', 'Transpiration'],
    correctAnswer: 'Photorespiration',
    explanation: 'Maintains high CO2 concentration near RuBisCO.'
  },
  {
    id: 'bio-ener-61',
    text: 'Glycolysis is common to both _____ and _____ respiration.',
    options: ['Aerobic, Anaerobic', 'Cyclic, Non-cyclic', 'Plant, Animal', 'Light, Dark'],
    correctAnswer: 'Aerobic, Anaerobic',
    explanation: 'It does not require oxygen.'
  },
  {
    id: 'bio-ener-62',
    text: 'The net gain of ATP from glycolysis alone is:',
    options: ['2', '4', '32', '0'],
    correctAnswer: '2',
    explanation: '4 produced, 2 consumed.'
  },
  {
    id: 'bio-ener-63',
    text: 'Pyruvate enters the mitochondria via:',
    options: ['Simple diffusion', 'Active transport', 'Osmosis', 'Endocytosis'],
    correctAnswer: 'Active transport',
    explanation: 'Requires energy.'
  },
  {
    id: 'bio-ener-64',
    text: 'The 2-carbon Acetyl group combines with 4-carbon _____ to form 6-carbon Citrate.',
    options: ['Malate', 'Succinate', 'Oxaloacetate', 'Fumarate'],
    correctAnswer: 'Oxaloacetate',
    explanation: 'Starting step of Krebs cycle.'
  },
  {
    id: 'bio-ener-65',
    text: 'The Krebs cycle is also known as the:',
    options: ['Calvin cycle', 'TCA cycle', 'Urea cycle', 'Glycolytic pathway'],
    correctAnswer: 'TCA cycle',
    explanation: 'Tricarboxylic Acid cycle.'
  },
  {
    id: 'bio-ener-66',
    text: 'For every molecule of glucose, the Krebs cycle turns _____ times.',
    options: ['1', '2', '3', '6'],
    correctAnswer: '2',
    explanation: 'One turn for each pyruvate/acetyl-CoA.'
  },
  {
    id: 'bio-ener-67',
    text: 'FADH2 is produced in which pathway?',
    options: ['Glycolysis', 'Krebs cycle', 'Calvin cycle', 'Z-scheme'],
    correctAnswer: 'Krebs cycle',
    explanation: 'Specifically during conversion of succinate to fumarate.'
  },
  {
    id: 'bio-ener-68',
    text: 'What is the role of NADH and FADH2 in the ETC?',
    options: ['To fix CO2', 'To provide high-energy electrons', 'To make glucose', 'To absorb light'],
    correctAnswer: 'To provide high-energy electrons',
    explanation: 'They are oxidized to release electrons.'
  },
  {
    id: 'bio-ener-69',
    text: 'The final product of electron transport is:',
    options: ['O2', 'H2O', 'CO2', 'Glucose'],
    correctAnswer: 'H2O',
    explanation: 'Formed when oxygen accepts electrons and H+.'
  },
  {
    id: 'bio-ener-70',
    text: 'Cyanide kills by blocking:',
    options: ['Glycolysis', 'Krebs cycle', 'Cytochrome oxidase in ETC', 'Photosynthesis'],
    correctAnswer: 'Cytochrome oxidase in ETC',
    explanation: 'Stops the flow of electrons to oxygen.'
  },
  {
    id: 'bio-ener-71',
    text: 'A "Calorie" is the amount of heat needed to raise the temp of 1g of water by:',
    options: ['1°C', '10°C', '100°C', '0.1°C'],
    correctAnswer: '1°C',
    explanation: 'Used to measure food energy.'
  },
  {
    id: 'bio-ener-72',
    text: 'Oxidation is the _____ of electrons.',
    options: ['Gain', 'Loss', 'Sharing', 'None'],
    correctAnswer: 'Loss',
    explanation: 'Reduction is the gain.'
  },
  {
    id: 'bio-ener-73',
    text: 'Photosynthesis is a _____ process.',
    options: ['Redox', 'Hydrolytic', 'Combustion', 'Nuclear'],
    correctAnswer: 'Redox',
    explanation: 'CO2 is reduced, H2O is oxidized.'
  },
  {
    id: 'bio-ener-74',
    text: 'Chloroplasts have an extra compartment called _____ which mitochondria lack.',
    options: ['Matrix', 'Stroma', 'Thylakoid space', 'Intermembrane space'],
    correctAnswer: 'Thylakoid space',
    explanation: 'Where protons are accumulated in light reactions.'
  },
  {
    id: 'bio-ener-75',
    text: 'Carotenoids absorb light in which part of the spectrum?',
    options: ['Red-Orange', 'Blue-Green', 'Violet', 'Yellow'],
    correctAnswer: 'Blue-Green',
    explanation: 'They reflect yellow, orange, and red.'
  },
  {
    id: 'bio-ener-76',
    text: 'The "Reaction Center" contains a special pair of:',
    options: ['Chlorophyll a molecules', 'Chlorophyll b molecules', 'Carotenoids', 'Proteins'],
    correctAnswer: 'Chlorophyll a molecules',
    explanation: 'They pass electrons to the primary electron acceptor.'
  },
  {
    id: 'bio-ener-77',
    text: 'Non-cyclic phosphorylation involves _____ and _____ photolysis.',
    options: ['PSI, No', 'PSII, Yes', 'RuBisCO, No', 'ATP, No'],
    correctAnswer: 'PSII, Yes',
    explanation: 'PSII splits water.'
  },
  {
    id: 'bio-ener-78',
    text: 'The reduction of NADP+ to NADPH is catalyzed by:',
    options: ['NADP reductase', 'ATP synthase', 'RuBisCO', 'Pepco'],
    correctAnswer: 'NADP reductase',
    explanation: 'Located on the stroma side of the thylakoid membrane.'
  },
  {
    id: 'bio-ener-79',
    text: 'The synthesis of sugar from CO2 requires more _____ than _____.',
    options: ['NADPH, ATP', 'ATP, NADPH', 'H2O, O2', 'NADH, FAD'],
    correctAnswer: 'ATP, NADPH',
    explanation: 'Ratio is roughly 3:2. Cyclic flow helps provide the extra ATP.'
  },
  {
    id: 'bio-ener-80',
    text: 'Which is an adaptation of desert plants to minimize water loss?',
    options: ['C3 pathway', 'CAM pathway', 'C2 pathway', 'Large leaves'],
    correctAnswer: 'CAM pathway',
    explanation: 'Keep stomata closed during the day.'
  },
  {
    id: 'bio-ener-81',
    text: 'The "Respiration Quotient" (RQ) for carbohydrates is:',
    options: ['0.7', '1.0', '0.9', 'Infinite'],
    correctAnswer: '1.0',
    explanation: 'Ratio of CO2 produced to O2 consumed.'
  },
  {
    id: 'bio-ener-82',
    text: 'RQ for fats is usually around:',
    options: ['0.7', '1.0', '1.5', '0.1'],
    correctAnswer: '0.7',
    explanation: 'Fats are more reduced than carbohydrates.'
  },
  {
    id: 'bio-ener-83',
    text: 'The "Energy Investment" phase of glycolysis consumes _____ ATP.',
    options: ['1', '2', '4', '0'],
    correctAnswer: '2',
    explanation: 'Used to phosphorylate glucose.'
  },
  {
    id: 'bio-ener-84',
    text: 'The "Energy Payoff" phase of glycolysis produces _____ ATP.',
    options: ['2', '4', '32', '36'],
    correctAnswer: '4',
    explanation: 'Net gain is 2.'
  },
  {
    id: 'bio-ener-85',
    text: 'Substrate-level phosphorylation occurs in:',
    options: ['Glycolysis', 'Krebs cycle', 'ETC', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Direct transfer of phosphate to ADP/GDP.'
  },
  {
    id: 'bio-ener-86',
    text: 'The coenzyme A used in respiration is derived from which vitamin?',
    options: ['Vitamin C', 'Pantothenic acid (B5)', 'Riboflavin (B2)', 'Thiamine (B1)'],
    correctAnswer: 'Pantothenic acid (B5)',
    explanation: 'Vitamins are essential precursors for coenzymes.'
  },
  {
    id: 'bio-ener-87',
    text: 'Each NADH produced in the mitochondrial matrix yields _____ ATP.',
    options: ['2', '2.5 or 3', '1', '1.5'],
    correctAnswer: '2.5 or 3',
    explanation: 'Depending on the conversion factor used.'
  },
  {
    id: 'bio-ener-88',
    text: 'Mitochondria are often called "powerhouses" because they produce most of the cell\'s:',
    options: ['Glucose', 'Enzymes', 'ATP', 'Lipids'],
    correctAnswer: 'ATP',
    explanation: 'Through oxidative phosphorylation.'
  },
  {
    id: 'bio-ener-89',
    text: 'Which organelle contains its own DNA and ribosomes?',
    options: ['Mitochondria', 'Chloroplast', 'Both', 'Neither'],
    correctAnswer: 'Both',
    explanation: 'Supports the Endosymbiotic Theory.'
  },
  {
    id: 'bio-ener-90',
    text: 'Photosynthesis is limited by:',
    options: ['Light intensity', 'CO2 concentration', 'Temperature', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Law of limiting factors.'
  },
  {
    id: 'bio-ener-91',
    text: 'The compensation point is reached when the rate of photosynthesis _____ the rate of respiration.',
    options: ['Exceeds', 'Is less than', 'Equals', 'Is zero'],
    correctAnswer: 'Equals',
    explanation: 'No net exchange of CO2 or O2.'
  },
  {
    id: 'bio-ener-92',
    text: 'The carbon atom of CO2 ends up in which molecule after photosynthesis?',
    options: ['O2', 'Water', 'Glucose', 'Chlorophyll'],
    correctAnswer: 'Glucose',
    explanation: 'CO2 is the source of carbon for organic synthesis.'
  },
  {
    id: 'bio-ener-93',
    text: 'The oxygen atom of CO2 ends up in _____ and _____ after photosynthesis.',
    options: ['O2, Glucose', 'Water, O2', 'Glucose, Water', 'Chlorophyll, O2'],
    correctAnswer: 'Glucose, Water',
    explanation: 'Oxygen gas comes solely from water.'
  },
  {
    id: 'bio-ener-94',
    text: 'The function of water in photosynthesis is to act as an:',
    options: ['Oxidizing agent', 'Electron donor', 'Solvent only', 'Catalyst'],
    correctAnswer: 'Electron donor',
    explanation: 'Provides electrons to replace those lost by PSII.'
  },
  {
    id: 'bio-ener-95',
    text: 'Fermentation allows glycolysis to continue by regenerating:',
    options: ['ATP', 'NAD+', 'Pyruvate', 'Oxygen'],
    correctAnswer: 'NAD+',
    explanation: 'Crucial for the glyceraldehyde-3-phosphate dehydrogenase step.'
  },
  {
    id: 'bio-ener-96',
    text: 'Which molecule is the "Final Acceptor" of electrons in the Light Reaction?',
    options: ['Oxygen', 'Water', 'NADP+', 'CO2'],
    correctAnswer: 'NADP+',
    explanation: 'Reducing it to NADPH.'
  },
  {
    id: 'bio-ener-97',
    text: 'The number of G3P molecules required to regenerate one RuBP is:',
    options: ['1', '3', '5', '6'],
    correctAnswer: '5',
    explanation: '5 G3P (3 carbons each = 15 total) make 3 RuBP (5 carbons each = 15 total).'
  },
  {
    id: 'bio-ener-98',
    text: 'How many ATP are used in one turn of the Calvin cycle?',
    options: ['1', '2', '3', '9'],
    correctAnswer: '3',
    explanation: '2 for reduction, 1 for regeneration.'
  },
  {
    id: 'bio-ener-99',
    text: 'How many NADPH are used in one turn of the Calvin cycle?',
    options: ['1', '2', '3', '6'],
    correctAnswer: '2',
    explanation: 'Used in the reduction step.'
  },
  {
    id: 'bio-ener-100',
    text: 'Bioenergetics follows which laws of physics?',
    options: ['Newton\'s laws', 'Thermodynamics', 'Relativity', 'Quantum mechanics only'],
    correctAnswer: 'Thermodynamics',
    explanation: 'Energy cannot be created or destroyed, and entropy increases.'
  }
];
