import { Question } from '../types';

export const CHEMISTRY_SOLUTIONS_QUIZ: Question[] = [
  {
    id: 'chem-sol-1',
    text: 'A homogeneous mixture of two or more substances is called a:',
    options: ['Solution', 'Compound', 'Suspension', 'Colloid'],
    correctAnswer: 'Solution',
    explanation: 'Solutions have uniform composition throughout.'
  },
  {
    id: 'chem-sol-2',
    text: 'The substance present in smaller amount in a solution is the:',
    options: ['Solvent', 'Solute', 'Reactant', 'Product'],
    correctAnswer: 'Solute',
    explanation: 'Solute is dissolved in the solvent.'
  },
  {
    id: 'chem-sol-3',
    text: 'The substance present in larger amount in a solution is the:',
    options: ['Solute', 'Solvent', 'Catalyst', 'Medium'],
    correctAnswer: 'Solvent',
    explanation: 'Solvent determines the physical state of the solution.'
  },
  {
    id: 'chem-sol-4',
    text: 'A solution with water as the solvent is called an:',
    options: ['Alcoholic solution', 'Aqueous solution', 'Nonaqueous solution', 'Solid solution'],
    correctAnswer: 'Aqueous solution',
    explanation: 'From Latin "aqua" (water).'
  },
  {
    id: 'chem-sol-5',
    text: 'Molarity (M) is defined as the number of moles of solute per _____ of solution.',
    options: ['Kilogram', 'Liter', 'Gram', 'Milliliter'],
    correctAnswer: 'Liter',
    explanation: 'M = n / V (in Liters).'
  },
  {
    id: 'chem-sol-6',
    text: 'Molality (m) is defined as the number of moles of solute per _____ of solvent.',
    options: ['Liter', 'Kilogram', 'Mole', 'Gram'],
    correctAnswer: 'Kilogram',
    explanation: 'm = n_solute / mass_solvent (in kg).'
  },
  {
    id: 'chem-sol-7',
    text: 'Which concentration unit is independent of temperature?',
    options: ['Molarity', 'Molality', 'Normality', 'Formality'],
    correctAnswer: 'Molality',
    explanation: 'Molality uses mass, which does not change with temperature.'
  },
  {
    id: 'chem-sol-8',
    text: 'Mole fraction (x) of a component is the ratio of its moles to the:',
    options: ['Total moles of solution', 'Moles of solvent', 'Moles of other component', 'Mass of solution'],
    correctAnswer: 'Total moles of solution',
    explanation: 'x_i = n_i / Σn_total.'
  },
  {
    id: 'chem-sol-9',
    text: 'The sum of mole fractions of all components in a solution is always:',
    options: ['0', '1', '100', 'Variable'],
    correctAnswer: '1',
    explanation: 'x_A + x_B + ... = 1.'
  },
  {
    id: 'chem-sol-10',
    text: 'Parts per million (ppm) is used for very _____ solutions.',
    options: ['Concentrated', 'Dilute', 'Saturated', 'Solid'],
    correctAnswer: 'Dilute',
    explanation: 'Used for pollutants or trace elements.'
  },
  {
    id: 'chem-sol-11',
    text: 'Solubility is the maximum amount of solute that can dissolve in a given amount of solvent at a:',
    options: ['Constant pressure', 'Constant temperature', 'Constant volume', 'Standard state'],
    correctAnswer: 'Constant temperature',
    explanation: 'Solubility usually changes with temperature.'
  },
  {
    id: 'chem-sol-12',
    text: 'A solution that cannot dissolve more solute at a given temperature is:',
    options: ['Unsaturated', 'Saturated', 'Supersaturated', 'Ideal'],
    correctAnswer: 'Saturated',
    explanation: 'Equilibrium exists between dissolved and undissolved solute.'
  },
  {
    id: 'chem-sol-13',
    text: 'A solution containing more solute than a saturated solution is:',
    options: ['Supersaturated', 'Unsaturated', 'Concentrated', 'Dilute'],
    correctAnswer: 'Supersaturated',
    explanation: 'This state is unstable.'
  },
  {
    id: 'chem-sol-14',
    text: '"Like dissolves like" means _____ solutes dissolve in _____ solvents.',
    options: ['Polar, Nonpolar', 'Polar, Polar', 'Ionic, Nonpolar', 'Covalent, Ionic'],
    correctAnswer: 'Polar, Polar',
    explanation: 'Similarity in intermolecular forces promotes solubility.'
  },
  {
    id: 'chem-sol-15',
    text: 'Hydration energy is the energy _____ when ions are surrounded by water molecules.',
    options: ['Absorbed', 'Released', 'Stored', 'None'],
    correctAnswer: 'Released',
    explanation: 'It is an exothermic process.'
  },
  {
    id: 'chem-sol-16',
    text: 'Raoult\'s Law states that the partial vapor pressure of a component in a solution is _____ to its mole fraction.',
    options: ['Inversely proportional', 'Directly proportional', 'Equal', 'Logarithmically related'],
    correctAnswer: 'Directly proportional',
    explanation: 'P_A = x_A * P_A°.'
  },
  {
    id: 'chem-sol-17',
    text: 'Ideal solutions follow _____ at all concentrations.',
    options: ['Henry\'s Law', 'Raoult\'s Law', 'Charles\' Law', 'Boyle\'s Law'],
    correctAnswer: 'Raoult\'s Law',
    explanation: 'Intermolecular forces are identical between all components.'
  },
  {
    id: 'chem-sol-18',
    text: 'For an ideal solution, ΔH_mixing is:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctAnswer: 'Zero',
    explanation: 'No heat is absorbed or released during mixing.'
  },
  {
    id: 'chem-sol-19',
    text: 'Non-ideal solutions show _____ from Raoult\'s Law.',
    options: ['Deviations', 'Compliance', 'Linearity', 'None'],
    correctAnswer: 'Deviations',
    explanation: 'Can be positive or negative deviations.'
  },
  {
    id: 'chem-sol-20',
    text: 'Positive deviation occurs when A-B attractions are _____ than A-A or B-B attractions.',
    options: ['Stronger', 'Weaker', 'Equal', 'Zero'],
    correctAnswer: 'Weaker',
    explanation: 'Molecules escape more easily into the vapor phase.'
  },
  {
    id: 'chem-sol-21',
    text: 'Azeotropes are mixtures that boil at a constant temperature and have the _____ composition in liquid and vapor phases.',
    options: ['Different', 'Same', 'Opposite', 'Variable'],
    correctAnswer: 'Same',
    explanation: 'They cannot be separated by simple distillation.'
  },
  {
    id: 'chem-sol-22',
    text: 'Properties that depend ONLY on the number of solute particles are called:',
    options: ['Chemical properties', 'Colligative properties', 'Physical properties', 'Intensive properties'],
    correctAnswer: 'Colligative properties',
    explanation: 'Includes osmotic pressure, boiling point elevation, etc.'
  },
  {
    id: 'chem-sol-23',
    text: 'Which is NOT a colligative property?',
    options: ['Vapor pressure lowering', 'Boiling point elevation', 'Freezing point depression', 'Viscosity'],
    correctAnswer: 'Viscosity',
    explanation: 'Viscosity depends on the nature of molecules.'
  },
  {
    id: 'chem-sol-24',
    text: 'Adding a non-volatile solute _____ the vapor pressure of the solvent.',
    options: ['Increases', 'Lowers', 'Stabilizes', 'Doubles'],
    correctAnswer: 'Lowers',
    explanation: 'Solute particles occupy surface area and reduce evaporation.'
  },
  {
    id: 'chem-sol-25',
    text: 'Adding a non-volatile solute _____ the boiling point of the solvent.',
    options: ['Increases', 'Decreases', 'Stay same', 'Fluctuates'],
    correctAnswer: 'Increases',
    explanation: 'Requires higher temperature to reach atmospheric pressure.'
  },
  {
    id: 'chem-sol-26',
    text: 'The molal boiling point elevation constant is also called the _____ constant.',
    options: ['Cryoscopic', 'Ebullioscopic', 'Planck\'s', 'Avogadro\'s'],
    correctAnswer: 'Ebullioscopic',
    explanation: 'Symbol: Kb.'
  },
  {
    id: 'chem-sol-27',
    text: 'Adding a non-volatile solute _____ the freezing point of the solvent.',
    options: ['Increases', 'Decreases', 'Stay same', 'Halves'],
    correctAnswer: 'Decreases',
    explanation: 'Used in anti-freeze and salting roads.'
  },
  {
    id: 'chem-sol-28',
    text: 'The molal freezing point depression constant is also called the _____ constant.',
    options: ['Cryoscopic', 'Ebullioscopic', 'Stefan\'s', 'Boltzmann\'s'],
    correctAnswer: 'Cryoscopic',
    explanation: 'Symbol: Kf.'
  },
  {
    id: 'chem-sol-29',
    text: 'Osmosis is the flow of solvent from _____ concentration to _____ concentration through a semi-permeable membrane.',
    options: ['Higher, Lower', 'Lower, Higher', 'Inside, Outside', 'None'],
    correctAnswer: 'Lower, Higher',
    explanation: 'Lower solute concentration means higher solvent concentration.'
  },
  {
    id: 'chem-sol-30',
    text: 'The pressure required to stop osmosis is called:',
    options: ['Vapor pressure', 'Osmotic pressure', 'Atmospheric pressure', 'Gauge pressure'],
    correctAnswer: 'Osmotic pressure',
    explanation: 'Symbol: π.'
  },
  {
    id: 'chem-sol-31',
    text: 'Solutions with the same osmotic pressure are:',
    options: ['Isotonic', 'Hypertonic', 'Hypotonic', 'Ideal'],
    correctAnswer: 'Isotonic',
    explanation: 'No net movement of water.'
  },
  {
    id: 'chem-sol-32',
    text: 'Colligative properties can be used to determine the _____ of a solute.',
    options: ['Density', 'Molar mass', 'Boiling point', 'Color'],
    correctAnswer: 'Molar mass',
    explanation: 'By measuring the change in property.'
  },
  {
    id: 'chem-sol-33',
    text: 'Which law describes the solubility of gases in liquids?',
    options: ['Raoult\'s Law', 'Henry\'s Law', 'Dalton\'s Law', 'Graham\'s Law'],
    correctAnswer: 'Henry\'s Law',
    explanation: 'Solubility is proportional to partial pressure.'
  },
  {
    id: 'chem-sol-34',
    text: 'Solubility of most solids _____ with increasing temperature.',
    options: ['Increases', 'Decreases', 'Remains same', 'Drops to zero'],
    correctAnswer: 'Increases',
    explanation: 'Usually an endothermic process.'
  },
  {
    id: 'chem-sol-35',
    text: 'Solubility of gases _____ with increasing temperature.',
    options: ['Increases', 'Decreases', 'Stay same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Kinetic energy increases, allowing gas to escape.'
  },
  {
    id: 'chem-sol-36',
    text: 'The van\'t Hoff factor (i) accounts for _____ of solute in solution.',
    options: ['Mass', 'Association or Dissociation', 'Volume', 'Density'],
    correctAnswer: 'Association or Dissociation',
    explanation: 'Electrolytes produce more particles than non-electrolytes.'
  },
  {
    id: 'chem-sol-37',
    text: 'For a non-electrolyte, the van\'t Hoff factor is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'No dissociation.'
  },
  {
    id: 'chem-sol-38',
    text: 'For NaCl, the theoretical van\'t Hoff factor is:',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: 'NaCl dissociates into Na+ and Cl-.'
  },
  {
    id: 'chem-sol-39',
    text: 'Fractional distillation is used to separate components of a _____ mixture.',
    options: ['Solid-solid', 'Liquid-liquid', 'Gas-gas', 'Solid-liquid'],
    correctAnswer: 'Liquid-liquid',
    explanation: 'Based on differences in boiling points.'
  },
  {
    id: 'chem-sol-40',
    text: 'Ethyl alcohol and water form an azeotropic mixture with _____ alcohol.',
    options: ['5%', '95%', '50%', '100%'],
    correctAnswer: '95%',
    explanation: 'Called rectified spirit.'
  },
  {
    id: 'chem-sol-41',
    text: 'The percent of solute by weight is (Mass of solute / _____) x 100.',
    options: ['Mass of solvent', 'Mass of solution', 'Volume of solution', 'Mole of solution'],
    correctAnswer: 'Mass of solution',
    explanation: 'w/w percentage.'
  },
  {
    id: 'chem-sol-42',
    text: 'Molar volume of an ideal gas at STP is:',
    options: ['22.4 dm³', '24 dm³', '1 dm³', 'Zero'],
    correctAnswer: '22.4 dm³',
    explanation: 'At 0°C and 1 atm.'
  },
  {
    id: 'chem-sol-43',
    text: 'Hydrated salts contain _____ in their crystal lattice.',
    options: ['Solvent', 'Water of crystallization', 'Air', 'Acid'],
    correctAnswer: 'Water of crystallization',
    explanation: 'Example: CuSO4.5H2O.'
  },
  {
    id: 'chem-sol-44',
    text: 'Efflorescence is the loss of _____ from a hydrated salt to the air.',
    options: ['Color', 'Water of crystallization', 'Mass', 'Shape'],
    correctAnswer: 'Water of crystallization',
    explanation: 'Occurs if vapor pressure of salt is higher than air.'
  },
  {
    id: 'chem-sol-45',
    text: 'Deliquescence is the absorption of enough moisture to _____ the salt.',
    options: ['Dry', 'Dissolve', 'Melt', 'Burn'],
    correctAnswer: 'Dissolve',
    explanation: 'Example: NaOH, CaCl2.'
  },
  {
    id: 'chem-sol-46',
    text: 'Hyposmotic solutions have _____ osmotic pressure than another solution.',
    options: ['Higher', 'Lower', 'Equal', 'Zero'],
    correctAnswer: 'Lower',
    explanation: 'Also called hypotonic.'
  },
  {
    id: 'chem-sol-47',
    text: 'The boiling point of a 1 molal aqueous solution of glucose is _____ 100°C.',
    options: ['Greater than', 'Less than', 'Equal to', 'Zero'],
    correctAnswer: 'Greater than',
    explanation: 'Elevation of boiling point.'
  },
  {
    id: 'chem-sol-48',
    text: 'Freezing point of sea water is _____ than pure water.',
    options: ['Higher', 'Lower', 'Same', 'Zero'],
    correctAnswer: 'Lower',
    explanation: 'Due to dissolved salts.'
  },
  {
    id: 'chem-sol-49',
    text: 'Reverse osmosis is used for:',
    options: ['Desalination of water', 'Sterilization', 'Adding color', 'None'],
    correctAnswer: 'Desalination of water',
    explanation: 'Pressure higher than osmotic pressure is applied.'
  },
  {
    id: 'chem-sol-50',
    text: 'Normality (N) is number of _____ of solute per liter of solution.',
    options: ['Moles', 'Grams', 'Equivalents', 'Units'],
    correctAnswer: 'Equivalents',
    explanation: 'N = M x acidity/basicity.'
  },
  {
    id: 'chem-sol-51',
    text: 'Colloids show the _____ effect (scattering of light).',
    options: ['Zeeman', 'Tyndall', 'Stark', 'Raman'],
    correctAnswer: 'Tyndall',
    explanation: 'Because their particles are large enough to scatter light.'
  },
  {
    id: 'chem-sol-52',
    text: 'An emulsion is a colloid of a _____ in a _____.',
    options: ['Solid, Liquid', 'Liquid, Liquid', 'Gas, Liquid', 'Solid, Solid'],
    correctAnswer: 'Liquid, Liquid',
    explanation: 'Example: Milk, mayonnaise.'
  },
  {
    id: 'chem-sol-53',
    text: 'The size of particles in a true solution is less than:',
    options: ['1 nm', '100 nm', '1 μm', '1 mm'],
    correctAnswer: '1 nm',
    explanation: 'They are at molecular or ionic level.'
  },
  {
    id: 'chem-sol-54',
    text: 'Solubility of a salt like Na2SO4.10H2O first _____ then _____ with temperature.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Stays same', 'Increases, Increases'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Due to transition from hydrated to anhydrous form.'
  },
  {
    id: 'chem-sol-55',
    text: 'Fractional crystallization is used to separate solids based on:',
    options: ['Boiling point', 'Solubility differences', 'Magnetic properties', 'Color'],
    correctAnswer: 'Solubility differences',
    explanation: 'By cooling the solution selectively.'
  },
  {
    id: 'chem-sol-56',
    text: 'A molal solution is _____ than a molar solution of the same solute.',
    options: ['More concentrated', 'Less concentrated', 'Equal', 'Depends on density'],
    correctAnswer: 'Less concentrated',
    explanation: 'Assuming density of solution is ~1 g/mL and solvent is water.'
  },
  {
    id: 'chem-sol-57',
    text: 'What is the molarity of 4g NaOH in 250 mL solution?',
    options: ['0.1 M', '0.4 M', '1 M', '0.25 M'],
    correctAnswer: '0.4 M',
    explanation: '4g / 40g/mol = 0.1 mol; 0.1 mol / 0.25 L = 0.4 M.'
  },
  {
    id: 'chem-sol-58',
    text: 'Freezing point depression constant (Kf) for water is:',
    options: ['0.52', '1.86', '100', '0'],
    correctAnswer: '1.86',
    explanation: 'Units: K kg mol⁻¹.'
  },
  {
    id: 'chem-sol-59',
    text: 'Boiling point elevation constant (Kb) for water is:',
    options: ['0.52', '1.86', '0.1', '100'],
    correctAnswer: '0.52',
    explanation: 'Units: K kg mol⁻¹.'
  },
  {
    id: 'chem-sol-60',
    text: 'Which will have the lowest freezing point?',
    options: ['0.1 M Sugar', '0.1 M NaCl', '0.1 M AlCl3', 'Pure water'],
    correctAnswer: '0.1 M AlCl3',
    explanation: 'AlCl3 produces 4 particles (i=4), causing max depression.'
  },
  {
    id: 'chem-sol-61',
    text: 'Binary solutions consist of _____ components.',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'One solute and one solvent.'
  },
  {
    id: 'chem-sol-62',
    text: 'Solubility of NaCl in water is _____ affected by pressure.',
    options: ['Highly', 'Minimally', 'Not at all', 'Doubly'],
    correctAnswer: 'Not at all',
    explanation: 'Pressure has little effect on solids/liquids.'
  },
  {
    id: 'chem-sol-63',
    text: 'In chromatography, the component that is more soluble in the mobile phase moves:',
    options: ['Slower', 'Faster', 'Stops', 'Backwards'],
    correctAnswer: 'Faster',
    explanation: 'Moves with the solvent.'
  },
  {
    id: 'chem-sol-64',
    text: 'The Rf value in chromatography is always _____ 1.',
    options: ['Greater than', 'Less than', 'Equal to', 'Infinite'],
    correctAnswer: 'Less than',
    explanation: 'Solute cannot move further than the solvent front.'
  },
  {
    id: 'chem-sol-65',
    text: 'Which is a non-aqueous solvent?',
    options: ['Benzene', 'Ether', 'Liquid NH3', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Solvents other than water.'
  },
  {
    id: 'chem-sol-66',
    text: 'What is the mole fraction of solute in 10% w/w NaOH aqueous solution?',
    options: ['0.047', '0.1', '0.5', '0.01'],
    correctAnswer: '0.047',
    explanation: '10g NaOH (0.25 mol) in 90g water (5 mol); 0.25 / 5.25 ≈ 0.047.'
  },
  {
    id: 'chem-sol-67',
    text: 'A mixture of ethanol and water shows _____ deviation from Raoult\'s Law.',
    options: ['Positive', 'Negative', 'No', 'Zero'],
    correctAnswer: 'Positive',
    explanation: 'Hydrogen bonding is weaker in the mixture.'
  },
  {
    id: 'chem-sol-68',
    text: 'A mixture of acetone and chloroform shows _____ deviation from Raoult\'s Law.',
    options: ['Positive', 'Negative', 'No', 'Maximum'],
    correctAnswer: 'Negative',
    explanation: 'Stronger intermolecular forces (H-bond) form between them.'
  },
  {
    id: 'chem-sol-69',
    text: 'Lowering of vapor pressure depends on:',
    options: ['Nature of solute', 'Concentration of solute', 'Temperature', 'Pressure'],
    correctAnswer: 'Concentration of solute',
    explanation: 'It is a colligative property.'
  },
  {
    id: 'chem-sol-70',
    text: 'At the boiling point, the vapor pressure of a liquid is equal to:',
    options: ['Vapor pressure of solid', 'Atmospheric pressure', 'Zero', '1 atm always'],
    correctAnswer: 'Atmospheric pressure',
    explanation: 'Definition of boiling point.'
  },
  {
    id: 'chem-sol-71',
    text: 'The molarity of pure water is:',
    options: ['1 M', '55.5 M', '18 M', '0 M'],
    correctAnswer: '55.5 M',
    explanation: '1000g / 18g/mol = 55.55 mol per Liter.'
  },
  {
    id: 'chem-sol-72',
    text: 'One molal solution contains one mole of solute in _____ of solvent.',
    options: ['1000 g', '1000 mL', '1 mole', '1 L'],
    correctAnswer: '1000 g',
    explanation: 'Definition of molality.'
  },
  {
    id: 'chem-sol-73',
    text: 'The freezing point of a solution is always _____ than the pure solvent.',
    options: ['Lower', 'Higher', 'Same', 'Negative'],
    correctAnswer: 'Lower',
    explanation: 'Solute interferes with lattice formation.'
  },
  {
    id: 'chem-sol-74',
    text: 'What is the effect of temperature on the mole fraction?',
    options: ['Increases', 'Decreases', 'No effect', 'Doubles'],
    correctAnswer: 'No effect',
    explanation: 'Mole fraction is based on moles, which are independent of T.'
  },
  {
    id: 'chem-sol-75',
    text: 'An ideal solution is formed when components have _____ molecular sizes and _____ intermolecular forces.',
    options: ['Different, Same', 'Same, Same', 'Same, Different', 'Different, Different'],
    correctAnswer: 'Same, Same',
    explanation: 'Minimal interaction changes on mixing.'
  },
  {
    id: 'chem-sol-76',
    text: 'The vapor pressure of a solution of non-volatile solute is _____ than the pure solvent.',
    options: ['Higher', 'Lower', 'Equal', 'Twice'],
    correctAnswer: 'Lower',
    explanation: 'Solute reduces the surface area available for evaporation.'
  },
  {
    id: 'chem-sol-77',
    text: 'Which instrument is used to measure osmotic pressure?',
    options: ['Barometer', 'Manometer', 'Berkeley-Hartley apparatus', 'Calorimeter'],
    correctAnswer: 'Berkeley-Hartley apparatus',
    explanation: 'Applies external pressure to stop osmosis.'
  },
  {
    id: 'chem-sol-78',
    text: 'If a cell is placed in a hypertonic solution, it will:',
    options: ['Swell', 'Shrink (Plasmolysis)', 'Stay same', 'Burst'],
    correctAnswer: 'Shrink (Plasmolysis)',
    explanation: 'Water moves out of the cell.'
  },
  {
    id: 'chem-sol-79',
    text: 'If a cell is placed in a hypotonic solution, it will:',
    options: ['Swell/Burst', 'Shrink', 'Freeze', 'Melt'],
    correctAnswer: 'Swell/Burst',
    explanation: 'Water moves into the cell.'
  },
  {
    id: 'chem-sol-80',
    text: 'What is the Molarity of a solution containing 1 mole of solute in 500 mL?',
    options: ['0.5 M', '1 M', '2 M', '5 M'],
    correctAnswer: '2 M',
    explanation: '1 mol / 0.5 L = 2 M.'
  },
  {
    id: 'chem-sol-81',
    text: 'Hydration of ions is an _____ process.',
    options: ['Endothermic', 'Exothermic', 'Isothermal', 'Adiabatic'],
    correctAnswer: 'Exothermic',
    explanation: 'Bonding between ion and water releases energy.'
  },
  {
    id: 'chem-sol-82',
    text: 'Which is a "Sol-in-Solid" colloid?',
    options: ['Milk', 'Fog', 'Ruby glass', 'Butter'],
    correctAnswer: 'Ruby glass',
    explanation: 'Gold particles in glass.'
  },
  {
    id: 'chem-sol-83',
    text: 'The osmotic pressure of a solution _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stay same', 'Fluctuates'],
    correctAnswer: 'Increases',
    explanation: 'π = iCRT; π is directly proportional to T.'
  },
  {
    id: 'chem-sol-84',
    text: 'Which colligative property is most suitable for determining molar mass of polymers?',
    options: ['Vapor pressure lowering', 'Boiling point elevation', 'Osmotic pressure', 'Freezing point depression'],
    correctAnswer: 'Osmotic pressure',
    explanation: 'Gives measurable values even at very low concentrations.'
  },
  {
    id: 'chem-sol-85',
    text: 'The ratio of weight of solute to volume of solution is:',
    options: ['% w/w', '% w/v', '% v/v', '% v/w'],
    correctAnswer: '% w/v',
    explanation: 'Commonly used in pharmacy.'
  },
  {
    id: 'chem-sol-86',
    text: 'What is the molarity of 98g H2SO4 in 1L solution?',
    options: ['1 M', '2 M', '0.5 M', '98 M'],
    correctAnswer: '1 M',
    explanation: 'Molar mass of H2SO4 is 98g/mol.'
  },
  {
    id: 'chem-sol-87',
    text: 'Standard solution is a solution whose _____ is known.',
    options: ['Volume', 'Concentration', 'Mass', 'Temperature'],
    correctAnswer: 'Concentration',
    explanation: 'Used for titration.'
  },
  {
    id: 'chem-sol-88',
    text: 'Molal elevation constant depends on:',
    options: ['Nature of solute', 'Nature of solvent', 'Concentration', 'Atmospheric pressure'],
    correctAnswer: 'Nature of solvent',
    explanation: 'Different solvents have different Kb values.'
  },
  {
    id: 'chem-sol-89',
    text: 'Cryoscopic constant is associated with _____ depression.',
    options: ['Boiling', 'Freezing', 'Vapor pressure', 'Mass'],
    correctAnswer: 'Freezing',
    explanation: 'Cryo- means cold.'
  },
  {
    id: 'chem-sol-90',
    text: 'A mixture of 20% ethanol and 80% water is _____ solution.',
    options: ['Liquid-liquid', 'Solid-liquid', 'Gas-liquid', 'Liquid-gas'],
    correctAnswer: 'Liquid-liquid',
    explanation: 'Both components are liquids.'
  },
  {
    id: 'chem-sol-91',
    text: 'Which describes the composition of a saturated solution at a higher temperature?',
    options: ['Unsaturated', 'Supersaturated', 'Dilute', 'Ideal'],
    correctAnswer: 'Supersaturated',
    explanation: 'If cooled without precipitation.'
  },
  {
    id: 'chem-sol-92',
    text: 'The unit of ppm is equivalent to:',
    options: ['mg/L', 'g/L', 'mg/kg', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: '1 mg in 1 million mg (1kg or 1L water).'
  },
  {
    id: 'chem-sol-93',
    text: 'What is the molality of a solution containing 0.5 mol solute in 500g solvent?',
    options: ['1 m', '0.5 m', '2 m', '0.1 m'],
    correctAnswer: '1 m',
    explanation: '0.5 mol / 0.5 kg = 1 m.'
  },
  {
    id: 'chem-sol-94',
    text: 'The vapor pressure of a pure liquid _____ with temperature.',
    options: ['Increases exponentially', 'Decreases', 'Stay same', 'Increases linearly'],
    correctAnswer: 'Increases exponentially',
    explanation: 'According to Clausius-Clapeyron equation.'
  },
  {
    id: 'chem-sol-95',
    text: 'Which is a colligative property of 0.1M Urea?',
    options: ['Elevation of B.P.', 'Density', 'Conductivity', 'Taste'],
    correctAnswer: 'Elevation of B.P.',
    explanation: 'Others are not colligative.'
  },
  {
    id: 'chem-sol-96',
    text: 'Adding sugar to water _____ its vapor pressure.',
    options: ['Increases', 'Decreases', 'Does not change', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Lowering of vapor pressure.'
  },
  {
    id: 'chem-sol-97',
    text: 'Two solutions are hypertonic to each other if they have _____ osmotic pressure.',
    options: ['Same', 'Different', 'Zero', 'Infinite'],
    correctAnswer: 'Different',
    explanation: 'The one with higher pressure is hypertonic.'
  },
  {
    id: 'chem-sol-98',
    text: 'In osmosis, only _____ molecules can pass through the membrane.',
    options: ['Solute', 'Solvent', 'Both', 'Neither'],
    correctAnswer: 'Solvent',
    explanation: 'Membrane is semi-permeable.'
  },
  {
    id: 'chem-sol-99',
    text: 'Solubility of AgCl in NaCl solution is _____ than in water.',
    options: ['More', 'Less', 'Equal', 'Zero'],
    correctAnswer: 'Less',
    explanation: 'Common ion effect.'
  },
  {
    id: 'chem-sol-100',
    text: 'A solution of known concentration used to determine an unknown is a:',
    options: ['Standard solution', 'Ideal solution', 'Saturated solution', 'Blank solution'],
    correctAnswer: 'Standard solution',
    explanation: 'Primary or secondary standard.'
  }
];
