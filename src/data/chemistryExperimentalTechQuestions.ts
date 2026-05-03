import { Question } from '../types';

export const CHEMISTRY_EXPERIMENTAL_TECH_QUIZ: Question[] = [
  {
    id: 'chem-exp-1',
    text: 'A technique used to separate insoluble solid particles from a liquid is:',
    options: ['Crystallization', 'Filtration', 'Sublimation', 'Chromatography'],
    correctAnswer: 'Filtration',
    explanation: 'Filtration is the process of separating suspended solid matter from a liquid by causing the latter to pass through the pores of a membrane.'
  },
  {
    id: 'chem-exp-2',
    text: 'To increase the rate of filtration, we often use a:',
    options: ['Standard funnel', 'Fluted filter paper', 'Gooch crucible', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Fluted filter paper increases surface area, and Gooch crucibles (with suction) speed up the process.'
  },
  {
    id: 'chem-exp-3',
    text: 'A Gooch crucible is made of porcelain and has a perforated bottom covered with:',
    options: ['Filter paper', 'Asbestos mat', 'Glass wool', 'Any of above'],
    correctAnswer: 'Asbestos mat',
    explanation: 'Traditionally, an asbestos mat or filter paper disc is used in a Gooch crucible.'
  },
  {
    id: 'chem-exp-4',
    text: 'The process of obtaining a pure solid from its saturated solution in the form of crystals is:',
    options: ['Sublimation', 'Crystallization', 'Distillation', 'Extraction'],
    correctAnswer: 'Crystallization',
    explanation: 'Crystallization is the formation of solid crystals from a solution.'
  },
  {
    id: 'chem-exp-5',
    text: 'Which of the following is NOT a step in crystallization?',
    options: ['Preparation of saturated solution', 'Filtration of hot solution', 'Sublimation of residue', 'Drying of crystals'],
    correctAnswer: 'Sublimation of residue',
    explanation: 'Sublimation is a separate purification technique, not part of crystallization.'
  },
  {
    id: 'chem-exp-6',
    text: 'The process in which a solid directly changes into vapors without passing through the liquid state is:',
    options: ['Evaporation', 'Sublimation', 'Condensation', 'Fusion'],
    correctAnswer: 'Sublimation',
    explanation: 'Sublimation is the transition from solid to gas phase directly.'
  },
  {
    id: 'chem-exp-7',
    text: 'Which substance can be purified by sublimation?',
    options: ['NaCl', 'Sand', 'Naphthalene', 'Sugar'],
    correctAnswer: 'Naphthalene',
    explanation: 'Naphthalene, Ammonium Chloride, Iodine, and Benzoic acid are common sublimable solids.'
  },
  {
    id: 'chem-exp-8',
    text: 'Solvent extraction is based on:',
    options: ['Boiling point difference', 'Distribution law', 'Molecular size', 'Rate of reaction'],
    correctAnswer: 'Distribution law',
    explanation: 'Solvent extraction relies on the Nernst Distribution Law (partition coefficient).'
  },
  {
    id: 'chem-exp-9',
    text: 'In solvent extraction, the efficiency of extraction is higher when using:',
    options: ['A single large volume of solvent', 'Multiple small volumes of solvent', 'Hot solvent always', 'No solvent'],
    correctAnswer: 'Multiple small volumes of solvent',
    explanation: 'Repeated extractions with smaller portions are more effective than a single large extraction.'
  },
  {
    id: 'chem-exp-10',
    text: 'Ether extraction is commonly used to separate:',
    options: ['Inorganic salts', 'Organic compounds from water', 'Gases from air', 'Metals from ores'],
    correctAnswer: 'Organic compounds from water',
    explanation: 'Diethyl ether is a common organic solvent used to extract organic solutes from aqueous solutions.'
  },
  {
    id: 'chem-exp-11',
    text: 'Chromatography is used for the separation of a mixture based on:',
    options: ['Color difference only', 'Distribution between stationary and mobile phases', 'Magnetic properties', 'Density'],
    correctAnswer: 'Distribution between stationary and mobile phases',
    explanation: 'Components move at different rates depending on their affinity for the two phases.'
  },
  {
    id: 'chem-exp-12',
    text: 'In paper chromatography, the stationary phase is:',
    options: ['Water adsorbed on paper fibers', 'Cellulose of paper', 'The solvent used', 'Air'],
    correctAnswer: 'Water adsorbed on paper fibers',
    explanation: 'In paper chromatography, the water molecules held in the cellulose fibers act as the stationary phase.'
  },
  {
    id: 'chem-exp-13',
    text: 'The ratio of the distance traveled by a component to the distance traveled by the solvent is called:',
    options: ['Retention factor (Rf)', 'Partition coefficient', 'Refractive index', 'Rate constant'],
    correctAnswer: 'Retention factor (Rf)',
    explanation: 'Rf = Distance moved by substance / Distance moved by solvent front.'
  },
  {
    id: 'chem-exp-14',
    text: 'Which technique is most suitable for separating the pigments in ink?',
    options: ['Filtration', 'Crystallization', 'Chromatography', 'Sublimation'],
    correctAnswer: 'Chromatography',
    explanation: 'Chromatography is ideal for separating complex mixtures like inks or plant pigments.'
  },
  {
    id: 'chem-exp-15',
    text: 'A sintered glass crucible has a porous disc made of:',
    options: ['Asbestos', 'Glass', 'Metal', 'Plastic'],
    correctAnswer: 'Glass',
    explanation: 'Sintered glass crucibles have a built-in porous glass disc, avoiding the need for filter paper.'
  },
  {
    id: 'chem-exp-16',
    text: 'Rf values are always:',
    options: ['Greater than 1', 'Less than 1', 'Equal to 1', 'Negative'],
    correctAnswer: 'Less than 1',
    explanation: 'Since the solvent front always moves further than the solute, the ratio is always < 1.'
  },
  {
    id: 'chem-exp-17',
    text: 'Chromatography where the stationary phase is a solid is called:',
    options: ['Partition chromatography', 'Adsorption chromatography', 'Gas chromatography', 'Thin layer chromatography'],
    correctAnswer: 'Adsorption chromatography',
    explanation: 'If stationary phase is solid, it is adsorption; if liquid, it is partition.'
  },
  {
    id: 'chem-exp-18',
    text: 'Which of the following solvents is commonly used in chromatography?',
    options: ['Ethanol', 'Acetone', 'Water', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Various polar and non-polar solvents are used depending on the mixture.'
  },
  {
    id: 'chem-exp-19',
    text: 'During crystallization, the process of slow cooling is preferred because it produces:',
    options: ['Small crystals', 'Large, pure crystals', 'Amorphous solid', 'No crystals'],
    correctAnswer: 'Large, pure crystals',
    explanation: 'Slow cooling allows molecules to arrange properly into a lattice, excluding impurities.'
  },
  {
    id: 'chem-exp-20',
    text: 'The insoluble impurities during crystallization are removed by:',
    options: ['Filtration of the hot saturated solution', 'Decantation', 'Centrifugation', 'Sublimation'],
    correctAnswer: 'Filtration of the hot saturated solution',
    explanation: 'Filtering while hot keeps the solute dissolved but removes insoluble matter.'
  },
  {
    id: 'chem-exp-21',
    text: 'The drying of crystals can be done using:',
    options: ['Filter paper folds', 'Desiccator', 'Oven', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Different methods are used depending on the stability of the crystals.'
  },
  {
    id: 'chem-exp-22',
    text: 'A desiccator uses a _____ to keep the environment dry.',
    options: ['Catalyst', 'Drying agent (e.g., CaCl2)', 'Vacuum pump only', 'Coolant'],
    correctAnswer: 'Drying agent (e.g., CaCl2)',
    explanation: 'Desiccants like anhydrous CaCl2 or silica gel absorb moisture.'
  },
  {
    id: 'chem-exp-23',
    text: 'In chromatography, the mobile phase can be:',
    options: ['Solid only', 'Liquid or Gas', 'Liquid only', 'Gas only'],
    correctAnswer: 'Liquid or Gas',
    explanation: 'The mobile phase flows over the stationary phase carrying the solutes.'
  },
  {
    id: 'chem-exp-24',
    text: 'The term "Chromatography" originates from the Greek word "Chroma" meaning:',
    options: ['Color', 'Separation', 'Liquid', 'Paper'],
    correctAnswer: 'Color',
    explanation: 'It was originally used to separate colored plant pigments.'
  },
  {
    id: 'chem-exp-25',
    text: 'Which of the following is NOT a type of chromatography?',
    options: ['Paper chromatography', 'Thin layer chromatography', 'Gas chromatography', 'Filtration chromatography'],
    correctAnswer: 'Filtration chromatography',
    explanation: 'Filtration is a separate technique from chromatography.'
  },
  {
    id: 'chem-exp-26',
    text: 'In ascendening paper chromatography, the solvent moves:',
    options: ['Upwards', 'Downwards', 'Sideways', 'Circularly'],
    correctAnswer: 'Upwards',
    explanation: 'The solvent moves up the paper by capillary action.'
  },
  {
    id: 'chem-exp-27',
    text: 'Rf has no units because it is a:',
    options: ['Vector quantity', 'Ratio of similar quantities', 'Constant for all substances', 'Scalar quantity'],
    correctAnswer: 'Ratio of similar quantities',
    explanation: 'Units of distance cancel out.'
  },
  {
    id: 'chem-exp-28',
    text: 'A mixture of Iodine and Common Salt can be separated by:',
    options: ['Crystallization', 'Sublimation', 'Filtration', 'Chromatography'],
    correctAnswer: 'Sublimation',
    explanation: 'Iodine sublimes while common salt (NaCl) does not.'
  },
  {
    id: 'chem-exp-29',
    text: 'The process of crystallization is used to:',
    options: ['Separate liquids', 'Purify solids', 'Measure boiling point', 'Synthesize gases'],
    correctAnswer: 'Purify solids',
    explanation: 'It is a primary method for the purification of solid chemical products.'
  },
  {
    id: 'chem-exp-30',
    text: 'Which of the following is a polar solvent?',
    options: ['Benzene', 'Carbon tetrachloride', 'Water', 'Hexane'],
    correctAnswer: 'Water',
    explanation: 'Water is the most common polar solvent used in labs.'
  }
];
