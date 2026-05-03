import { Question } from '../types';

export const CHEMISTRY_THERMOCHEMISTRY_QUIZ: Question[] = [
  {
    id: 'ch-th-1',
    text: 'Thermochemistry is the study of _____ changes during chemical reactions.',
    options: ['Pressure', 'Heat/Energy', 'Color', 'Volume'],
    correctAnswer: 'Heat/Energy',
    explanation: 'Focuses on enthalpy changes.'
  },
  {
    id: 'ch-th-2',
    text: 'The part of the universe under observation is called the:',
    options: ['Surroundings', 'System', 'State', 'Boundary'],
    correctAnswer: 'System',
    explanation: 'Everything else is surroundings.'
  },
  {
    id: 'ch-th-3',
    text: 'A reaction that releases heat to the surroundings is:',
    options: ['Endothermic', 'Exothermic', 'Isothermal', 'Adiabatic'],
    correctAnswer: 'Exothermic',
    explanation: 'ΔH is negative.'
  },
  {
    id: 'ch-th-4',
    text: 'A reaction that absorbs heat from the surroundings is:',
    options: ['Exothermic', 'Endothermic', 'Spontaneous', 'None'],
    correctAnswer: 'Endothermic',
    explanation: 'ΔH is positive.'
  },
  {
    id: 'ch-th-5',
    text: 'The total heat content of a system at constant pressure is called:',
    options: ['Internal energy', 'Entropy', 'Enthalpy (H)', 'Gibbs energy'],
    correctAnswer: 'Enthalpy (H)',
    explanation: 'H = E + PV.'
  },
  {
    id: 'ch-th-6',
    text: 'ΔH for an exothermic reaction is always:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Negative',
    explanation: 'Energy of products < Energy of reactants.'
  },
  {
    id: 'ch-th-7',
    text: 'ΔH for an endothermic reaction is always:',
    options: ['Negative', 'Positive', 'Zero', 'None'],
    correctAnswer: 'Positive',
    explanation: 'Energy of products > Energy of reactants.'
  },
  {
    id: 'ch-th-8',
    text: 'Standard enthalpy changes are measured at _____ atm and _____ K.',
    options: ['1, 273', '1, 298 (25°C)', '10, 298', '1, 373'],
    correctAnswer: '1, 298 (25°C)',
    explanation: 'Standard state conditions.'
  },
  {
    id: 'ch-th-9',
    text: 'The enthalpy change when one mole of a compound is formed from its elements in their standard states is:',
    options: ['Enthalpy of combustion', 'Enthalpy of formation (ΔHf°)', 'Enthalpy of solution', 'Enthalpy of atomization'],
    correctAnswer: 'Enthalpy of formation (ΔHf°)',
    explanation: 'Definition of standard enthalpy of formation.'
  },
  {
    id: 'ch-th-10',
    text: 'The standard enthalpy of formation of a pure element in its most stable state is:',
    options: ['100 kJ/mol', '1 kJ/mol', 'Zero', 'Dependent on temperature'],
    correctAnswer: 'Zero',
    explanation: 'By convention.'
  },
  {
    id: 'ch-th-11',
    text: 'The heat evolved when one mole of a substance is completely burned in oxygen is:',
    options: ['Enthalpy of formation', 'Enthalpy of combustion (ΔHc°)', 'Enthalpy of neutralization', 'None'],
    correctAnswer: 'Enthalpy of combustion (ΔHc°)',
    explanation: 'Always exothermic (negative ΔH).'
  },
  {
    id: 'ch-th-12',
    text: 'The heat evolved when one mole of H+ ions from an acid reacts with one mole of OH- ions from a base is:',
    options: ['Enthalpy of formation', 'Enthalpy of neutralization', 'Enthalpy of solution', 'Bond energy'],
    correctAnswer: 'Enthalpy of neutralization',
    explanation: 'For strong acid and strong base, it is approx -57.4 kJ/mol.'
  },
  {
    id: 'ch-th-13',
    text: 'The enthalpy of neutralization of a strong acid and a strong base is approximately:',
    options: ['-13.7 kJ/mol', '-57.4 kJ/mol', '-100 kJ/mol', 'Zero'],
    correctAnswer: '-57.4 kJ/mol',
    explanation: 'Because it always involves the formation of 1 mole of H2O.'
  },
  {
    id: 'ch-th-14',
    text: 'Hess\'s Law states that the enthalpy change of a reaction is _____ of the route taken.',
    options: ['Dependent', 'Independent', 'Proportional', 'None'],
    correctAnswer: 'Independent',
    explanation: 'Provided initial and final states are the same.'
  },
  {
    id: 'ch-th-15',
    text: 'Hess\'s Law is a consequence of the law of conservation of:',
    options: ['Mass', 'Energy', 'Momentum', 'Volume'],
    correctAnswer: 'Energy',
    explanation: 'First law of thermodynamics.'
  },
  {
    id: 'ch-th-16',
    text: 'The energy required to break one mole of a specific bond in a gaseous molecule is:',
    options: ['Enthalpy of formation', 'Bond energy/Enthalpy', 'Lattice energy', 'Ionization energy'],
    correctAnswer: 'Bond energy/Enthalpy',
    explanation: 'Always positive (endothermic process).'
  },
  {
    id: 'ch-th-17',
    text: 'Breaking bonds is an _____ process, while forming bonds is an _____ process.',
    options: ['Exothermic, Endothermic', 'Endothermic, Exothermic', 'Spontaneous, Non-spontaneous', 'None'],
    correctAnswer: 'Endothermic, Exothermic',
    explanation: 'Energy is required to break, released when formed.'
  },
  {
    id: 'ch-th-18',
    text: 'The sum of kinetic and potential energies of all particles in a system is its:',
    options: ['Enthalpy', 'Entropy', 'Internal energy (E)', 'Free energy'],
    correctAnswer: 'Internal energy (E)',
    explanation: 'Absolute value cannot be measured, only changes (ΔE).'
  },
  {
    id: 'ch-th-19',
    text: 'According to the first law of thermodynamics, ΔE = ?',
    options: ['q + w', 'q - w', 'H + PV', 'None'],
    correctAnswer: 'q + w',
    explanation: 'q is heat added to system, w is work done ON the system (IUPAC convention).'
  },
  {
    id: 'ch-th-20',
    text: 'A "State Function" depends only on the _____ and _____ states of the system.',
    options: ['Intermediate, Final', 'Initial, Final', 'Initial, Middle', 'None'],
    correctAnswer: 'Initial, Final',
    explanation: 'Path independent. e.g. E, H, P, V, T.'
  },
  {
    id: 'ch-th-21',
    text: 'Which is NOT a state function?',
    options: ['Enthalpy', 'Internal energy', 'Heat (q)', 'Temperature'],
    correctAnswer: 'Heat (q)',
    explanation: 'Heat and Work are path functions.'
  },
  {
    id: 'ch-th-22',
    text: 'Work done by the system (expansion) is given as:',
    options: ['w = PΔV', 'w = -PΔV', 'w = ΔH', 'None'],
    correctAnswer: 'w = -PΔV',
    explanation: 'System loses energy by doing work on surroundings.'
  },
  {
    id: 'ch-th-23',
    text: 'At constant volume (ΔV = 0), ΔE is equal to:',
    options: ['qv (Heat at constant volume)', 'qp (Heat at constant pressure)', 'w', 'Zero'],
    correctAnswer: 'qv (Heat at constant volume)',
    explanation: 'Since w = -PΔV = 0.'
  },
  {
    id: 'ch-th-24',
    text: 'At constant pressure, ΔH is equal to:',
    options: ['qv', 'qp (Heat at constant pressure)', 'ΔE', 'Zero'],
    correctAnswer: 'qp (Heat at constant pressure)',
    explanation: 'ΔH = ΔE + PΔV.'
  },
  {
    id: 'ch-th-25',
    text: 'The instrument used to measure the heat of reaction at constant volume is:',
    options: ['Glass calorimeter', 'Bomb calorimeter', 'Thermometer', 'Barometer'],
    correctAnswer: 'Bomb calorimeter',
    explanation: 'Used for combustion reactions.'
  },
  {
    id: 'ch-th-26',
    text: 'A reaction that occurs on its own without any external assistance is:',
    options: ['Non-spontaneous', 'Spontaneous', 'Equilibrium', 'None'],
    correctAnswer: 'Spontaneous',
    explanation: 'Proceeds towards a state of lower energy or higher disorder.'
  },
  {
    id: 'ch-th-27',
    text: 'A non-spontaneous reaction can be made to occur by:',
    options: ['Lowering temperature', 'Supplying continuous external energy', 'Adding a catalyst', 'None'],
    correctAnswer: 'Supplying continuous external energy',
    explanation: 'e.g. Electrolysis of water.'
  },
  {
    id: 'ch-th-28',
    text: 'Enthalpy change of atomization (ΔHat°) is the heat required to produce one mole of _____ atoms from the element.',
    options: ['Solid', 'Liquid', 'Gaseous', 'None'],
    correctAnswer: 'Gaseous',
    explanation: 'Always endothermic.'
  },
  {
    id: 'ch-th-29',
    text: 'Lattice energy is the energy _____ when one mole of an ionic crystal is formed from gaseous ions.',
    options: ['Absorbed', 'Released', 'Created', 'None'],
    correctAnswer: 'Released',
    explanation: 'Measures the strength of ionic bonds.'
  },
  {
    id: 'ch-th-30',
    text: 'Which cycle is used to calculate lattice energy indirectly?',
    options: ['Nitrogen cycle', 'Born-Haber cycle', 'Carnot cycle', 'Krebs cycle'],
    correctAnswer: 'Born-Haber cycle',
    explanation: 'An application of Hess\'s Law.'
  },
  {
    id: 'ch-th-31',
    text: 'If ΔH for A -> B is -100 kJ, then ΔH for B -> A is:',
    options: ['-100 kJ', '+100 kJ', '0 kJ', 'None'],
    correctAnswer: '+100 kJ',
    explanation: 'Magnitude is same, sign is reversed.'
  },
  {
    id: 'ch-th-32',
    text: 'Most spontaneous reactions are:',
    options: ['Endothermic', 'Exothermic', 'Isothermal', 'Fast'],
    correctAnswer: 'Exothermic',
    explanation: 'Systems tend toward lower enthalpy.'
  },
  {
    id: 'ch-th-33',
    text: 'Can an endothermic reaction be spontaneous?',
    options: ['No, never', 'Yes, if entropy increase compensates', 'Only at 0K', 'None'],
    correctAnswer: 'Yes, if entropy increase compensates',
    explanation: 'e.g. Melting of ice at room temperature.'
  },
  {
    id: 'ch-th-34',
    text: 'The degree of randomness or disorder in a system is:',
    options: ['Enthalpy', 'Entropy (S)', 'Work', 'Pressure'],
    correctAnswer: 'Entropy (S)',
    explanation: 'Second law of thermodynamics states entropy of universe increases.'
  },
  {
    id: 'ch-th-35',
    text: 'The overall spontaneity of a reaction is determined by:',
    options: ['ΔH only', 'ΔS only', 'Gibbs Free Energy (ΔG)', 'Temperature only'],
    correctAnswer: 'Gibbs Free Energy (ΔG)',
    explanation: 'ΔG = ΔH - TΔS.'
  },
  {
    id: 'ch-th-36',
    text: 'For a spontaneous reaction, ΔG must be:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Negative',
    explanation: 'Criterion for spontaneity at constant T and P.'
  },
  {
    id: 'ch-th-37',
    text: 'If ΔG = 0, the system is at:',
    options: ['Boiling point', 'Equilibrium', 'Absolute zero', 'None'],
    correctAnswer: 'Equilibrium',
    explanation: 'No net change in either direction.'
  },
  {
    id: 'ch-th-38',
    text: 'Specific heat capacity is the heat required to raise the temperature of _____ of a substance by 1 K.',
    options: ['1 gram', '1 mole', '1 kg', 'Any amount'],
    correctAnswer: '1 gram',
    explanation: 'Units are J/g·K.'
  },
  {
    id: 'ch-th-39',
    text: 'Molar heat capacity is the heat required to raise the temperature of _____ of a substance by 1 K.',
    options: ['1 gram', '1 mole', '100 grams', 'None'],
    correctAnswer: '1 mole',
    explanation: 'Units are J/mol·K.'
  },
  {
    id: 'ch-th-40',
    text: 'For a gas, Cp - Cv = ?',
    options: ['0', '1', 'R (Gas constant)', 'PV'],
    correctAnswer: 'R (Gas constant)',
    explanation: 'Heat capacity at constant pressure is always greater than at constant volume.'
  },
  {
    id: 'ch-th-41',
    text: 'An isolated system can exchange _____ with surroundings.',
    options: ['Energy only', 'Matter only', 'Both Energy and Matter', 'Neither Energy nor Matter'],
    correctAnswer: 'Neither Energy nor Matter',
    explanation: 'e.g. A perfectly insulated thermos flask.'
  },
  {
    id: 'ch-th-42',
    text: 'A closed system can exchange _____ but not _____ with surroundings.',
    options: ['Matter, Energy', 'Energy, Matter', 'Heat, Work', 'None'],
    correctAnswer: 'Energy, Matter',
    explanation: 'e.g. A sealed container.'
  },
  {
    id: 'ch-th-43',
    text: 'An open system can exchange _____ with surroundings.',
    options: ['Energy only', 'Matter only', 'Both Energy and Matter', 'None'],
    correctAnswer: 'Both Energy and Matter',
    explanation: 'e.g. A cup of coffee.'
  },
  {
    id: 'ch-th-44',
    text: 'Extensive properties depend on the _____ of the substance.',
    options: ['Nature', 'Amount/Mass', 'Color', 'None'],
    correctAnswer: 'Amount/Mass',
    explanation: 'e.g. Mass, Volume, Enthalpy.'
  },
  {
    id: 'ch-th-45',
    text: 'Intensive properties _____ depend on the amount of substance.',
    options: ['Do', 'Do not', 'Always', 'Partially'],
    correctAnswer: 'Do not',
    explanation: 'e.g. Temperature, Pressure, Density, Concentration.'
  },
  {
    id: 'ch-th-46',
    text: 'The standard enthalpy of solution (ΔHsol°) can be _____ or _____.',
    options: ['Positive, Negative', 'Always Positive', 'Always Negative', 'Zero'],
    correctAnswer: 'Positive, Negative',
    explanation: 'Depends on the balance between lattice energy and hydration energy.'
  },
  {
    id: 'ch-th-47',
    text: 'Hydration energy is always:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Negative',
    explanation: 'Energy is released when ions are surrounded by water molecules.'
  },
  {
    id: 'ch-th-48',
    text: 'If Hydration Energy > Lattice Energy, the substance is likely to be:',
    options: ['Insoluble', 'Soluble (Exothermic)', 'Insoluble (Endothermic)', 'None'],
    correctAnswer: 'Soluble (Exothermic)',
    explanation: 'Net energy is released.'
  },
  {
    id: 'ch-th-49',
    text: 'If Lattice Energy > Hydration Energy, the dissolution will be:',
    options: ['Exothermic', 'Endothermic', 'Zero', 'Spontaneous always'],
    correctAnswer: 'Endothermic',
    explanation: 'Heat is absorbed from the solvent.'
  },
  {
    id: 'ch-th-50',
    text: 'Heat of reaction (q) = m × s × ΔT. What does \'s\' represent?',
    options: ['Mass', 'Specific heat capacity', 'Entropy', 'Speed'],
    correctAnswer: 'Specific heat capacity',
    explanation: 'Formula used in calorimetry.'
  },
  {
    id: 'ch-th-51',
    text: 'The standard state of Oxygen is _____ and of Carbon is _____.',
    options: ['O(g), Diamond', 'O2(g), Graphite', 'O3(g), Coal', 'O2(l), Graphite'],
    correctAnswer: 'O2(g), Graphite',
    explanation: 'Reference states for thermochemistry.'
  },
  {
    id: 'ch-th-52',
    text: 'Standard enthalpy of formation of H2O(l) is about:',
    options: ['-285.8 kJ/mol', '-241.8 kJ/mol', '0 kJ/mol', '+100 kJ/mol'],
    correctAnswer: '-285.8 kJ/mol',
    explanation: 'H2O(g) is -241.8 kJ/mol (less stable than liquid).'
  },
  {
    id: 'ch-th-53',
    text: 'Why is ΔHf° for CO2 negative?',
    options: ['It absorbs heat', 'It releases heat during formation', 'It is an element', 'None'],
    correctAnswer: 'It releases heat during formation',
    explanation: 'Formation of CO2 from C and O2 is exothermic.'
  },
  {
    id: 'ch-th-54',
    text: 'Enthalpy is an _____ property.',
    options: ['Intensive', 'Extensive', 'Chemical', 'None'],
    correctAnswer: 'Extensive',
    explanation: 'Value doubles if the amount of substance doubles.'
  },
  {
    id: 'ch-th-55',
    text: 'Molar enthalpy of fusion is the heat required to melt one mole of a _____ at its melting point.',
    options: ['Gas', 'Liquid', 'Solid', 'None'],
    correctAnswer: 'Solid',
    explanation: 'e.g. Ice to water.'
  },
  {
    id: 'ch-th-56',
    text: 'Molar enthalpy of vaporization is the heat required to convert one mole of _____ into _____ at its boiling point.',
    options: ['Solid, Liquid', 'Liquid, Gas', 'Gas, Solid', 'None'],
    correctAnswer: 'Liquid, Gas',
    explanation: 'Endothermic process.'
  },
  {
    id: 'ch-th-57',
    text: 'Sublimation is the direct conversion of _____ to _____.',
    options: ['Solid, Gas', 'Gas, Solid', 'Liquid, Gas', 'Solid, Liquid'],
    correctAnswer: 'Solid, Gas',
    explanation: 'ΔHsub = ΔHfus + ΔHvap.'
  },
  {
    id: 'ch-th-58',
    text: 'According to Hess\'s Law, ΔH for a reaction = ΣΔHf(products) - ?',
    options: ['ΣΔHf(reactants)', 'ΣBond energies', 'Zero', 'None'],
    correctAnswer: 'ΣΔHf(reactants)',
    explanation: 'Useful for calculating unknown enthalpy changes.'
  },
  {
    id: 'ch-th-59',
    text: 'Energy of activation (Ea) is the _____ energy required to start a reaction.',
    options: ['Maximum', 'Minimum', 'Average', 'Total'],
    correctAnswer: 'Minimum',
    explanation: 'Determines the rate of reaction.'
  },
  {
    id: 'ch-th-60',
    text: 'A catalyst _____ the activation energy, making the reaction faster.',
    options: ['Increases', 'Decreases', 'Removes', 'Ignores'],
    correctAnswer: 'Decreases',
    explanation: 'Provides an alternative pathway.'
  },
  {
    id: 'ch-th-61',
    text: 'The sign of work done by the system in thermodynamics is often taken as:',
    options: ['Positive', 'Negative', 'Zero', 'None'],
    correctAnswer: 'Negative',
    explanation: 'System loses energy (IUPAC convention).'
  },
  {
    id: 'ch-th-62',
    text: 'For a reaction involving only solids and liquids, ΔH is approximately equal to:',
    options: ['Zero', 'ΔE', 'w', 'None'],
    correctAnswer: 'ΔE',
    explanation: 'Since volume change (ΔV) is negligible.'
  },
  {
    id: 'ch-th-63',
    text: 'For a gaseous reaction where number of moles of products = reactants, ΔH _____ ΔE.',
    options: ['>', '<', '=', 'None'],
    correctAnswer: '=',
    explanation: 'Δn = 0, so PΔV = 0.'
  },
  {
    id: 'ch-th-64',
    text: 'For the reaction: C + O2 -> CO2, ΔH is _____ ΔE.',
    options: ['>', '<', '=', 'None'],
    correctAnswer: '=',
    explanation: 'Δn (gas) = 1 - 1 = 0.'
  },
  {
    id: 'ch-th-65',
    text: 'Bond dissociation energy of H-H bond is:',
    options: ['436 kJ/mol', '100 kJ/mol', '0 kJ/mol', '-436 kJ/mol'],
    correctAnswer: '436 kJ/mol',
    explanation: 'Requires energy to break.'
  },
  {
    id: 'ch-th-66',
    text: 'Strength of a bond is _____ proportional to its bond energy.',
    options: ['Directly', 'Inversely', 'Not', 'None'],
    correctAnswer: 'Directly',
    explanation: 'Higher bond energy means a stronger, more stable bond.'
  },
  {
    id: 'ch-th-67',
    text: 'Which is a "Thermochemical Equation"?',
    options: ['H2 + Cl2 -> 2HCl', 'H2(g) + Cl2(g) -> 2HCl(g) ΔH = -184 kJ', '2H + 2Cl -> 2HCl', 'None'],
    correctAnswer: 'H2(g) + Cl2(g) -> 2HCl(g) ΔH = -184 kJ',
    explanation: 'Must show physical states and ΔH.'
  },
  {
    id: 'ch-th-68',
    text: 'An adiabatic process is one in which _____ remains zero.',
    options: ['Work', 'Heat exchange (q)', 'Pressure', 'Volume'],
    correctAnswer: 'Heat exchange (q)',
    explanation: 'System is perfectly insulated.'
  },
  {
    id: 'ch-th-69',
    text: 'An isothermal process occurs at constant:',
    options: ['Pressure', 'Volume', 'Temperature', 'Entropy'],
    correctAnswer: 'Temperature',
    explanation: 'ΔT = 0.'
  },
  {
    id: 'ch-th-70',
    text: 'Internal energy of an ideal gas depends only on:',
    options: ['Pressure', 'Volume', 'Temperature', 'Mass'],
    correctAnswer: 'Temperature',
    explanation: 'Particles have no intermolecular forces.'
  },
  {
    id: 'ch-th-71',
    text: 'The Joule-Thomson effect is the _____ of a gas when it expands into a vacuum.',
    options: ['Heating', 'Cooling', 'Explosion', 'None'],
    correctAnswer: 'Cooling',
    explanation: 'Due to work done against intermolecular forces.'
  },
  {
    id: 'ch-th-72',
    text: 'Absolute zero (0 K) is the temperature at which the _____ of a perfect crystal is zero.',
    options: ['Enthalpy', 'Entropy', 'Mass', 'None'],
    correctAnswer: 'Entropy',
    explanation: 'Third law of thermodynamics.'
  },
  {
    id: 'ch-th-73',
    text: 'Spontaneity is favored by a _____ in enthalpy and a _____ in entropy.',
    options: ['Increase, Decrease', 'Decrease, Increase', 'Increase, Increase', 'Decrease, Decrease'],
    correctAnswer: 'Decrease, Increase',
    explanation: 'Lowest energy and highest disorder are preferred.'
  },
  {
    id: 'ch-th-74',
    text: 'A reaction with ΔH (+) and ΔS (-) will be spontaneous at:',
    options: ['All temperatures', 'High temperatures', 'Low temperatures', 'Never'],
    correctAnswer: 'Never',
    explanation: 'ΔG will always be positive.'
  },
  {
    id: 'ch-th-75',
    text: 'A reaction with ΔH (-) and ΔS (+) will be spontaneous at:',
    options: ['All temperatures', 'High temperatures only', 'Low temperatures only', 'Never'],
    correctAnswer: 'All temperatures',
    explanation: 'ΔG will always be negative.'
  },
  {
    id: 'ch-th-76',
    text: 'Entropy of a gas is _____ than entropy of a liquid.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Gas molecules are more disordered.'
  },
  {
    id: 'ch-th-77',
    text: 'Which has higher entropy: 1 mole of O2(g) or 1 mole of O3(g)?',
    options: ['O2', 'O3', 'Both same', 'None'],
    correctAnswer: 'O3',
    explanation: 'More complex molecule has more ways to arrange energy.'
  },
  {
    id: 'ch-th-78',
    text: 'The standard enthalpy of neutralization of HCl and NaOH is -57.3 kJ. What is it for CH3COOH and NaOH?',
    options: ['-57.3 kJ', 'More than -57.3 kJ (less negative)', 'Less than -57.3 kJ (more negative)', 'None'],
    correctAnswer: 'More than -57.3 kJ (less negative)',
    explanation: 'Some heat is used to ionize the weak acid.'
  },
  {
    id: 'ch-th-79',
    text: 'Combustion of fuels is always _____ and _____.',
    options: ['Endothermic, Spontaneous', 'Exothermic, Spontaneous', 'Exothermic, Non-spontaneous', 'None'],
    correctAnswer: 'Exothermic, Spontaneous',
    explanation: 'Releases large amounts of energy.'
  },
  {
    id: 'ch-th-80',
    text: 'Heat of formation of elements is zero ONLY in their _____ form.',
    options: ['Solid', 'Standard/Most stable', 'Gas', 'Liquid'],
    correctAnswer: 'Standard/Most stable',
    explanation: 'e.g. C(graphite) is 0, C(diamond) is not 0.'
  },
  {
    id: 'ch-th-81',
    text: 'Expansion of a gas against a constant external pressure is an _____ process.',
    options: ['Reversible', 'Irreversible', 'Isothermal only', 'None'],
    correctAnswer: 'Irreversible',
    explanation: 'Happens quickly with a large difference in pressure.'
  },
  {
    id: 'ch-th-82',
    text: 'Maximum work can be obtained from a _____ process.',
    options: ['Irreversible', 'Reversible', 'Sudden', 'Spontaneous'],
    correctAnswer: 'Reversible',
    explanation: 'Occurs in infinitely small steps.'
  },
  {
    id: 'ch-th-83',
    text: 'Internal energy (E) is a _____ property.',
    options: ['Path', 'State', 'Intensive', 'None'],
    correctAnswer: 'State',
    explanation: 'Depends only on current T, P, V.'
  },
  {
    id: 'ch-th-84',
    text: 'In a bomb calorimeter, the volume is kept constant, so ΔE = ?',
    options: ['qp', 'qv', 'ΔH', 'Zero'],
    correctAnswer: 'qv',
    explanation: 'Measured directly as the heat of combustion.'
  },
  {
    id: 'ch-th-85',
    text: 'Specific heat of water is approximately:',
    options: ['1.0 J/g·K', '4.18 J/g·K', '10.0 J/g·K', 'Zero'],
    correctAnswer: '4.18 J/g·K',
    explanation: 'Relatively high compared to other substances.'
  },
  {
    id: 'ch-th-86',
    text: 'Which is an "Isothermic" boundary?',
    options: ['Wood', 'Copper', 'Glass', 'Perfect insulator'],
    correctAnswer: 'Copper',
    explanation: 'Allows heat transfer to maintain temperature equilibrium.'
  },
  {
    id: 'ch-th-87',
    text: 'For the reaction: N2(g) + 3H2(g) -> 2NH3(g), Δn (gas) is:',
    options: ['-2', '+2', '0', '4'],
    correctAnswer: '-2',
    explanation: '2 (products) - 4 (reactants) = -2.'
  },
  {
    id: 'ch-th-88',
    text: 'When Δn is negative, ΔH is _____ ΔE.',
    options: ['>', '<', '=', 'None'],
    correctAnswer: '<',
    explanation: 'Because ΔH = ΔE + ΔnRT.'
  },
  {
    id: 'ch-th-89',
    text: 'Standard enthalpy of atomization is always:',
    options: ['Negative', 'Positive', 'Zero', 'None'],
    correctAnswer: 'Positive',
    explanation: 'Energy is always required to break an element into atoms.'
  },
  {
    id: 'ch-th-90',
    text: 'A spontaneous process proceeds towards lower _____ energy.',
    options: ['Kinetic', 'Potential/Free', 'Total', 'None'],
    correctAnswer: 'Potential/Free',
    explanation: 'Like a ball rolling down a hill.'
  },
  {
    id: 'ch-th-91',
    text: 'Heat capacity at constant pressure (Cp) is _____ than at constant volume (Cv).',
    options: ['Greater', 'Smaller', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'Because at constant P, some energy is used to do expansion work.'
  },
  {
    id: 'ch-th-92',
    text: 'Molar enthalpy of solution is defined for _____ of solute.',
    options: ['1 gram', '1 mole', '1 liter', 'None'],
    correctAnswer: '1 mole',
    explanation: 'Usually in excess solvent (infinite dilution).'
  },
  {
    id: 'ch-th-93',
    text: 'Bond energy of C-H in methane is an _____ of the four C-H bond energies.',
    options: ['Sum', 'Difference', 'Average', 'Product'],
    correctAnswer: 'Average',
    explanation: 'Each subsequent bond removal requires different energy.'
  },
  {
    id: 'ch-th-94',
    text: 'Which is a "Path Function"?',
    options: ['Pressure', 'Entropy', 'Work (w)', 'Volume'],
    correctAnswer: 'Work (w)',
    explanation: 'Depends on how the process was carried out.'
  },
  {
    id: 'ch-th-95',
    text: 'Enthalpy change of neutralization of HF with NaOH is higher than -57.3 kJ (more negative) because of high heat of _____ of Fluoride ion.',
    options: ['Ionization', 'Hydration', 'Combustion', 'None'],
    correctAnswer: 'Hydration',
    explanation: 'Small F- ion releases a lot of energy when hydrated.'
  },
  {
    id: 'ch-th-96',
    text: 'The value of ΔG° for a reaction can be used to calculate its _____ constant.',
    options: ['Rate', 'Equilibrium (K)', 'Gas', 'None'],
    correctAnswer: 'Equilibrium (K)',
    explanation: 'ΔG° = -RT ln K.'
  },
  {
    id: 'ch-th-97',
    text: 'The universe tends towards maximum:',
    options: ['Energy', 'Enthalpy', 'Entropy', 'Order'],
    correctAnswer: 'Entropy',
    explanation: 'Second law of thermodynamics.'
  },
  {
    id: 'ch-th-98',
    text: 'The work done in a vacuum (Pext = 0) is:',
    options: ['Maximum', 'Zero', 'Minimum', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'Known as free expansion.'
  },
  {
    id: 'ch-th-99',
    text: 'Hess\'s Law is useful for calculating ΔH of reactions that are _____ to carry out in a lab.',
    options: ['Easy', 'Difficult/Impossible', 'Fast', 'None'],
    correctAnswer: 'Difficult/Impossible',
    explanation: 'Indirect method.'
  },
  {
    id: 'ch-th-100',
    text: 'Thermochemistry provides the link between _____ and _____ in chemistry.',
    options: ['Mass, Volume', 'Structure, Reactivity/Spontaneity', 'Color, Taste', 'None'],
    correctAnswer: 'Structure, Reactivity/Spontaneity',
    explanation: 'Explains why reactions happen.'
  }
];
