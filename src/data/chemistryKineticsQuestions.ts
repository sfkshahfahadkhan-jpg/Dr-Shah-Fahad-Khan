import { Question } from '../types';

export const CHEMISTRY_KINETICS_QUIZ: Question[] = [
  {
    id: 'chem-kin-1',
    text: 'Chemical kinetics is the study of:',
    options: ['Reaction rates', 'Reaction mechanisms', 'Factors affecting rates', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Kinetics deals with how fast a reaction happens.'
  },
  {
    id: 'chem-kin-2',
    text: 'The rate of a reaction is usually expressed as the change in _____ per unit time.',
    options: ['Volume', 'Concentration', 'Mass', 'Pressure'],
    correctAnswer: 'Concentration',
    explanation: 'Rate = Δ[C] / Δt.'
  },
  {
    id: 'chem-kin-3',
    text: 'The units for the rate of a reaction are:',
    options: ['mol dm⁻³ s⁻¹', 'mol s⁻¹', 'dm³ s⁻¹', 's⁻¹'],
    correctAnswer: 'mol dm⁻³ s⁻¹',
    explanation: 'Concentration (M) per second.'
  },
  {
    id: 'chem-kin-4',
    text: 'The rate of reaction _____ as the reaction proceeds.',
    options: ['Increases', 'Decreases', 'Remains constant', 'Fluctuates'],
    correctAnswer: 'Decreases',
    explanation: 'As reactants are consumed, their concentration drops, slowing the rate.'
  },
  {
    id: 'chem-kin-5',
    text: 'The "Law of Mass Action" was proposed by:',
    options: ['Arrhenius', 'Guldberg and Waage', 'Le Chatelier', 'Haber'],
    correctAnswer: 'Guldberg and Waage',
    explanation: 'It relates rate to the concentration of reactants.'
  },
  {
    id: 'chem-kin-6',
    text: 'In the rate law Rate = k[A]ˣ[B]ʸ, the sum (x+y) is called the:',
    options: ['Molecularity', 'Rate constant', 'Order of reaction', 'Activation energy'],
    correctAnswer: 'Order of reaction',
    explanation: 'Order is determined experimentally.'
  },
  {
    id: 'chem-kin-7',
    text: 'The order of a reaction can be:',
    options: ['Positive integer', 'Fraction', 'Zero', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Unlike molecularity, order can be zero or fractional.'
  },
  {
    id: 'chem-kin-8',
    text: 'Molecularity of a reaction is always a:',
    options: ['Positive integer', 'Fraction', 'Zero', 'Negative integer'],
    correctAnswer: 'Positive integer',
    explanation: 'It is the number of reacting species in an elementary step.'
  },
  {
    id: 'chem-kin-9',
    text: 'The units of the rate constant (k) for a zero-order reaction are:',
    options: ['s⁻¹', 'mol dm⁻³ s⁻¹', 'mol⁻¹ dm³ s⁻¹', 'mol⁻² dm⁶ s⁻¹'],
    correctAnswer: 'mol dm⁻³ s⁻¹',
    explanation: 'Rate = k[A]⁰ = k.'
  },
  {
    id: 'chem-kin-10',
    text: 'The units of the rate constant (k) for a first-order reaction are:',
    options: ['mol dm⁻³ s⁻¹', 's⁻¹', 'mol⁻¹ dm³ s⁻¹', 'dm³ mol⁻¹'],
    correctAnswer: 's⁻¹',
    explanation: 'Rate = k[A]¹; k = Rate / [A].'
  },
  {
    id: 'chem-kin-11',
    text: 'The "Half-life" of a reaction is the time required for the reactant concentration to reduce to _____ of its initial value.',
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: '50%',
    explanation: 't_1/2 is the time for half completion.'
  },
  {
    id: 'chem-kin-12',
    text: 'For a first-order reaction, the half-life is _____ of the initial concentration.',
    options: ['Dependent', 'Independent', 'Directly proportional', 'Inversely proportional'],
    correctAnswer: 'Independent',
    explanation: 't_1/2 = 0.693 / k.'
  },
  {
    id: 'chem-kin-13',
    text: 'Which theory explains how temperature affects reaction rates?',
    options: ['VSEPR', 'Collision Theory', 'MOT', 'VBT'],
    correctAnswer: 'Collision Theory',
    explanation: 'Reactions occur when particles collide with sufficient energy and correct orientation.'
  },
  {
    id: 'chem-kin-14',
    text: 'The minimum energy required for a collision to result in a reaction is:',
    options: ['Kinetic energy', 'Potential energy', 'Activation energy (Ea)', 'Bond energy'],
    correctAnswer: 'Activation energy (Ea)',
    explanation: 'The energy barrier that must be overcome.'
  },
  {
    id: 'chem-kin-15',
    text: 'The Arrhenius Equation is:',
    options: ['k = Ae^(-Ea/RT)', 'k = A + e^(Ea/RT)', 'k = Ea / RT', 'k = A log(Ea/RT)'],
    correctAnswer: 'k = Ae^(-Ea/RT)',
    explanation: 'Relates rate constant to temperature and activation energy.'
  },
  {
    id: 'chem-kin-16',
    text: 'A catalyst increases the rate of reaction by:',
    options: ['Increasing temperature', 'Lowering activation energy', 'Increasing pressure', 'Consuming reactants'],
    correctAnswer: 'Lowering activation energy',
    explanation: 'It provides an alternative reaction pathway.'
  },
  {
    id: 'chem-kin-17',
    text: 'A catalyst that is in the same phase as the reactants is a:',
    options: ['Heterogeneous catalyst', 'Homogeneous catalyst', 'Autocatalyst', 'Enzyme'],
    correctAnswer: 'Homogeneous catalyst',
    explanation: 'Example: NO gas in the oxidation of SO2.'
  },
  {
    id: 'chem-kin-18',
    text: 'A catalyst that is in a different phase from the reactants is a:',
    options: ['Heterogeneous catalyst', 'Homogeneous catalyst', 'Inhibitor', 'Promoter'],
    correctAnswer: 'Heterogeneous catalyst',
    explanation: 'Example: Iron in Haber process.'
  },
  {
    id: 'chem-kin-19',
    text: 'A substance that increases the activity of a catalyst is a:',
    options: ['Poison', 'Inhibitor', 'Promoter', 'Co-catalyst'],
    correctAnswer: 'Promoter',
    explanation: 'Example: Molybdenum in Haber process.'
  },
  {
    id: 'chem-kin-20',
    text: 'A substance that decreases the rate of a reaction is a:',
    options: ['Negative catalyst (Inhibitor)', 'Positive catalyst', 'Promoter', 'Active mass'],
    correctAnswer: 'Negative catalyst (Inhibitor)',
    explanation: 'Example: Glycerin in decomposition of H2O2.'
  },
  {
    id: 'chem-kin-21',
    text: 'When one of the products of a reaction acts as a catalyst, it is called:',
    options: ['Homogeneous catalysis', 'Heterogeneous catalysis', 'Autocatalysis', 'Enzymatic catalysis'],
    correctAnswer: 'Autocatalysis',
    explanation: 'Example: Mn²⁺ ions in titration of oxalic acid with KMnO4.'
  },
  {
    id: 'chem-kin-22',
    text: 'The slow step in a multi-step reaction mechanism is called the:',
    options: ['Intermediate step', 'Fast step', 'Rate-determining step', 'Final step'],
    correctAnswer: 'Rate-determining step',
    explanation: 'The overall rate depends on this step.'
  },
  {
    id: 'chem-kin-23',
    text: 'The "Threshold Energy" is equal to:',
    options: ['Ea + average kinetic energy', 'Ea - average kinetic energy', 'Ea only', 'None'],
    correctAnswer: 'Ea + average kinetic energy',
    explanation: 'Total minimum energy colliding molecules must possess.'
  },
  {
    id: 'chem-kin-24',
    text: 'Which factor generally increases the rate of reaction?',
    options: ['Increased concentration', 'Increased surface area', 'Increased temperature', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These factors increase collision frequency or energy.'
  },
  {
    id: 'chem-kin-25',
    text: 'Biological catalysts are called:',
    options: ['Promoters', 'Enzymes', 'Inhibitors', 'Hormones'],
    correctAnswer: 'Enzymes',
    explanation: 'They are highly specific proteins.'
  },
  {
    id: 'chem-kin-26',
    text: 'The "Lock and Key" model describes the action of:',
    options: ['Metals', 'Enzymes', 'Acids', 'Bases'],
    correctAnswer: 'Enzymes',
    explanation: 'Specificity between substrate and active site.'
  },
  {
    id: 'chem-kin-27',
    text: 'The units of the rate constant (k) for a second-order reaction are:',
    options: ['s⁻¹', 'mol dm⁻³ s⁻¹', 'mol⁻¹ dm³ s⁻¹', 'mol⁻² dm⁶ s⁻¹'],
    correctAnswer: 'mol⁻¹ dm³ s⁻¹',
    explanation: 'Rate = k[A]².'
  },
  {
    id: 'chem-kin-28',
    text: 'In a zero-order reaction, the rate is _____ of the reactant concentration.',
    options: ['Independent', 'Directly proportional', 'Square', 'Square root'],
    correctAnswer: 'Independent',
    explanation: 'Rate = k[A]⁰ = k.'
  },
  {
    id: 'chem-kin-29',
    text: 'The plot of log(k) versus 1/T is a straight line with slope:',
    options: ['-Ea/R', '-Ea/2.303R', 'Ea/R', 'A'],
    correctAnswer: '-Ea/2.303R',
    explanation: 'From the logarithmic form of the Arrhenius equation.'
  },
  {
    id: 'chem-kin-30',
    text: 'The half-life of a second-order reaction is:',
    options: ['Independent of [A]₀', 'Directly proportional to [A]₀', 'Inversely proportional to [A]₀', 'Constant'],
    correctAnswer: 'Inversely proportional to [A]₀',
    explanation: 't_1/2 = 1 / (k[A]₀).'
  },
  {
    id: 'chem-kin-31',
    text: 'A reaction with molecularity 2 and order 1 is a:',
    options: ['Elementary reaction', 'Pseudo-first order reaction', 'Zero order reaction', 'Complex reaction'],
    correctAnswer: 'Pseudo-first order reaction',
    explanation: 'Example: Hydrolysis of ester where water is in large excess.'
  },
  {
    id: 'chem-kin-32',
    text: 'What happens to the rate of most reactions when temperature is increased by 10°C?',
    options: ['Remains same', 'Doubles or triples', 'Decreases by half', 'Increases 10 times'],
    correctAnswer: 'Doubles or triples',
    explanation: 'Due to a large increase in the fraction of molecules with E > Ea.'
  },
  {
    id: 'chem-kin-33',
    text: 'The sequence of elementary steps that leads to product formation is the:',
    options: ['Rate law', 'Order', 'Reaction mechanism', 'Kinetic profile'],
    correctAnswer: 'Reaction mechanism',
    explanation: 'The detailed pathway.'
  },
  {
    id: 'chem-kin-34',
    text: 'Highly reactive species formed in one step and consumed in another are:',
    options: ['Catalysts', 'Intermediates', 'Promoters', 'Poisons'],
    correctAnswer: 'Intermediates',
    explanation: 'They do not appear in the overall balanced equation.'
  },
  {
    id: 'chem-kin-35',
    text: 'An increase in pressure significantly affects the rate of reactions involving:',
    options: ['Solids', 'Liquids', 'Gases', 'All'],
    correctAnswer: 'Gases',
    explanation: 'Increases the concentration of gas particles.'
  },
  {
    id: 'chem-kin-36',
    text: 'The frequency factor (A) in Arrhenius equation represents:',
    options: ['Collision frequency', 'Energy of molecules', 'Volume of system', 'Pressure'],
    correctAnswer: 'Collision frequency',
    explanation: 'Also includes an orientation factor.'
  },
  {
    id: 'chem-kin-37',
    text: 'Activation energy is always:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Positive',
    explanation: 'Molecules must always overcome a barrier.'
  },
  {
    id: 'chem-kin-38',
    text: 'Which method is used to determine the order of reaction?',
    options: ['Method of initial rates', 'Half-life method', 'Graphical method', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Different experimental approaches.'
  },
  {
    id: 'chem-kin-39',
    text: 'In the method of initial rates, we measure the rate _____ the reaction begins.',
    options: ['Just as', 'Halfway through', 'At the end', 'Average of'],
    correctAnswer: 'Just as',
    explanation: 'To avoid effects of reverse reaction or product interference.'
  },
  {
    id: 'chem-kin-40',
    text: 'For which order is the unit of k the same as the unit of rate?',
    options: ['First', 'Second', 'Zero', 'Third'],
    correctAnswer: 'Zero',
    explanation: 'Rate = k.'
  },
  {
    id: 'chem-kin-41',
    text: 'If the rate of reaction triples when [A] is tripled, the order is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Rate ∝ [A]¹.'
  },
  {
    id: 'chem-kin-42',
    text: 'If the rate of reaction becomes 4 times when [A] is doubled, the order is:',
    options: ['0', '1', '2', '4'],
    correctAnswer: '2',
    explanation: 'Rate ∝ [A]².'
  },
  {
    id: 'chem-kin-43',
    text: 'The hydrolysis of cane sugar is an example of:',
    options: ['First order', 'Second order', 'Pseudo-first order', 'Zero order'],
    correctAnswer: 'Pseudo-first order',
    explanation: 'Water is present in large excess.'
  },
  {
    id: 'chem-kin-44',
    text: 'Catalytic converters in cars use _____ catalysts.',
    options: ['Homogeneous', 'Heterogeneous', 'Enzyme', 'Liquid'],
    correctAnswer: 'Heterogeneous',
    explanation: 'Solid Platinum, Palladium, or Rhodium.'
  },
  {
    id: 'chem-kin-45',
    text: 'Enzymes are also known as:',
    options: ['Biocatalysts', 'Bio-promoters', 'Bio-fuels', 'Bio-polymers'],
    correctAnswer: 'Biocatalysts',
    explanation: 'Speed up biochemical reactions.'
  },
  {
    id: 'chem-kin-46',
    text: 'The rate constant k _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stay same', 'Fluctuates'],
    correctAnswer: 'Increases',
    explanation: 'According to Arrhenius equation.'
  },
  {
    id: 'chem-kin-47',
    text: 'The unit of k for a third-order reaction is:',
    options: ['s⁻¹', 'mol⁻¹ dm³ s⁻¹', 'mol⁻² dm⁶ s⁻¹', 'mol dm⁻³ s⁻¹'],
    correctAnswer: 'mol⁻² dm⁶ s⁻¹',
    explanation: 'Derived from Rate = k[A]³.'
  },
  {
    id: 'chem-kin-48',
    text: 'A transition state is also called an:',
    options: ['Activated complex', 'Intermediate', 'Product', 'Reactant'],
    correctAnswer: 'Activated complex',
    explanation: 'An unstable arrangement of atoms at the peak of the energy barrier.'
  },
  {
    id: 'chem-kin-49',
    text: 'Light-induced reactions are called:',
    options: ['Thermochemical', 'Photochemical', 'Electrochemical', 'Nuclear'],
    correctAnswer: 'Photochemical',
    explanation: 'Usually zero-order with respect to reactants.'
  },
  {
    id: 'chem-kin-50',
    text: 'The number of moles of a reactant reacting per unit time per unit volume is:',
    options: ['Rate of reaction', 'Order', 'Molecularity', 'Rate constant'],
    correctAnswer: 'Rate of reaction',
    explanation: 'Basic definition.'
  },
  {
    id: 'chem-kin-51',
    text: 'Rate of reaction is always:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on temperature'],
    correctAnswer: 'Positive',
    explanation: 'Even if concentration decreases, we take the absolute value or negative of the slope.'
  },
  {
    id: 'chem-kin-52',
    text: 'The rate constant is also called _____ of a reaction.',
    options: ['Specific rate', 'General rate', 'Initial rate', 'Average rate'],
    correctAnswer: 'Specific rate',
    explanation: 'Rate when all reactant concentrations are 1 M.'
  },
  {
    id: 'chem-kin-53',
    text: 'The value of rate constant depends on:',
    options: ['Nature of reactants', 'Temperature', 'Catalyst', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Factors that affect the probability and energy of collisions.'
  },
  {
    id: 'chem-kin-54',
    text: 'Order of reaction is an _____ quantity.',
    options: ['Theoretical', 'Experimental', 'Calculated', 'Imaginary'],
    correctAnswer: 'Experimental',
    explanation: 'Cannot be predicted from the balanced equation for complex reactions.'
  },
  {
    id: 'chem-kin-55',
    text: 'Molecularity of a complex reaction:',
    options: ['Is the same as its order', 'Has no meaning', 'Is sum of all steps', 'Is zero'],
    correctAnswer: 'Has no meaning',
    explanation: 'Molecularity is only defined for elementary steps.'
  },
  {
    id: 'chem-kin-56',
    text: 'Radioactive decay follows _____ order kinetics.',
    options: ['Zero', 'First', 'Second', 'Third'],
    correctAnswer: 'First',
    explanation: 'Rate is proportional to the number of nuclei present.'
  },
  {
    id: 'chem-kin-57',
    text: 'For a first-order reaction, what percentage is left after 2 half-lives?',
    options: ['50%', '25%', '12.5%', '0%'],
    correctAnswer: '25%',
    explanation: '100% -> 50% -> 25%.'
  },
  {
    id: 'chem-kin-58',
    text: 'What percentage of a reactant is consumed after 3 half-lives in a first-order reaction?',
    options: ['75%', '87.5%', '12.5%', '100%'],
    correctAnswer: '87.5%',
    explanation: 'Remaining = 12.5%, so consumed = 100 - 12.5 = 87.5%.'
  },
  {
    id: 'chem-kin-59',
    text: 'The plot of concentration [A] versus time for a zero-order reaction is a:',
    options: ['Straight line with negative slope', 'Curve', 'Straight line with positive slope', 'Circle'],
    correctAnswer: 'Straight line with negative slope',
    explanation: '[A] = [A]₀ - kt.'
  },
  {
    id: 'chem-kin-60',
    text: 'The plot of ln[A] versus time for a first-order reaction is a:',
    options: ['Curve', 'Straight line with negative slope', 'Horizontal line', 'Vertical line'],
    correctAnswer: 'Straight line with negative slope',
    explanation: 'ln[A] = ln[A]₀ - kt.'
  },
  {
    id: 'chem-kin-61',
    text: 'Reactions that take place on the surface of a catalyst follow _____ order at high concentrations.',
    options: ['First', 'Second', 'Zero', 'Negative'],
    correctAnswer: 'Zero',
    explanation: 'Surface becomes saturated.'
  },
  {
    id: 'chem-kin-62',
    text: 'In the reaction A + B -> Products, doubling [B] while keeping [A] constant doubles the rate. Order wrt B is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Rate ∝ [B]¹.'
  },
  {
    id: 'chem-kin-63',
    text: 'In the above reaction, doubling both [A] and [B] increases the rate 8 times. Order wrt A is:',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: '8 = 2ˣ * 2¹; 2ˣ = 4; x = 2.'
  },
  {
    id: 'chem-kin-64',
    text: 'Photochemical reactions are usually _____ order.',
    options: ['Zero', 'First', 'Second', 'Fractional'],
    correctAnswer: 'Zero',
    explanation: 'Rate depends on light intensity, not reactant concentration.'
  },
  {
    id: 'chem-kin-65',
    text: 'Which is a complex reaction?',
    options: ['Elementary', 'One-step', 'Multi-step', 'Reversible only'],
    correctAnswer: 'Multi-step',
    explanation: 'Involves more than one elementary step.'
  },
  {
    id: 'chem-kin-66',
    text: 'The value of activation energy _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
    correctAnswer: 'Remains constant',
    explanation: 'Ea is an intrinsic property of the reaction path.'
  },
  {
    id: 'chem-kin-67',
    text: 'The fraction of molecules having energy ≥ Ea is given by:',
    options: ['e^(-Ea/RT)', 'e^(Ea/RT)', 'RT/Ea', '1/A'],
    correctAnswer: 'e^(-Ea/RT)',
    explanation: 'Boltzmann factor.'
  },
  {
    id: 'chem-kin-68',
    text: 'For a reaction, Ea forward = 50 kJ and ΔH = -20 kJ. Ea backward is:',
    options: ['30 kJ', '70 kJ', '20 kJ', '50 kJ'],
    correctAnswer: '70 kJ',
    explanation: 'Ea_fwd - Ea_back = ΔH; 50 - x = -20; x = 70.'
  },
  {
    id: 'chem-kin-69',
    text: 'The catalyst used in the hydrogenation of oils is:',
    options: ['Fe', 'Ni', 'Pt', 'V2O5'],
    correctAnswer: 'Ni',
    explanation: 'Finely divided Nickel.'
  },
  {
    id: 'chem-kin-70',
    text: 'The enzyme that converts sugar into glucose and fructose is:',
    options: ['Zymase', 'Invertase', 'Diastase', 'Urease'],
    correctAnswer: 'Invertase',
    explanation: 'Found in yeast.'
  },
  {
    id: 'chem-kin-71',
    text: 'The enzyme that converts glucose into ethanol is:',
    options: ['Invertase', 'Zymase', 'Lipase', 'Maltase'],
    correctAnswer: 'Zymase',
    explanation: 'Also found in yeast.'
  },
  {
    id: 'chem-kin-72',
    text: 'Which is a heterogeneous catalyst for the oxidation of SO2?',
    options: ['NO', 'V2O5', 'H2SO4', 'H2O'],
    correctAnswer: 'V2O5',
    explanation: 'Used in the Contact Process.'
  },
  {
    id: 'chem-kin-73',
    text: 'Enzymes work best at an _____ temperature.',
    options: ['Highest', 'Lowest', 'Optimum', 'Zero'],
    correctAnswer: 'Optimum',
    explanation: 'Usually around 37°C for human enzymes.'
  },
  {
    id: 'chem-kin-74',
    text: 'Loss of catalytic activity of an enzyme due to heat is:',
    options: ['Activation', 'Denaturation', 'Saturation', 'Inhibition'],
    correctAnswer: 'Denaturation',
    explanation: 'The protein structure unfolds.'
  },
  {
    id: 'chem-kin-75',
    text: 'The half-life of a zero-order reaction is _____ proportional to initial concentration.',
    options: ['Directly', 'Inversely', 'Not', 'Exponentially'],
    correctAnswer: 'Directly',
    explanation: 't_1/2 = [A]₀ / 2k.'
  },
  {
    id: 'chem-kin-76',
    text: 'What is the order of the reaction 2O3 -> 3O2?',
    options: ['1', '2', '3', 'Complex'],
    correctAnswer: 'Complex',
    explanation: 'Mechanism involves O as an intermediate; order is not 2.'
  },
  {
    id: 'chem-kin-77',
    text: 'Which has a higher activation energy?',
    options: ['Fast reaction', 'Slow reaction', 'Exothermic reaction', 'Endothermic reaction'],
    correctAnswer: 'Slow reaction',
    explanation: 'Higher barrier means fewer molecules can cross it.'
  },
  {
    id: 'chem-kin-78',
    text: 'The value of rate constant k is independent of:',
    options: ['Initial concentration', 'Final concentration', 'Time', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'k is constant for a given temperature and catalyst.'
  },
  {
    id: 'chem-kin-79',
    text: 'What is the molecularity of the reaction H2 + Cl2 -> 2HCl?',
    options: ['1', '2', '3', 'Zero'],
    correctAnswer: '2',
    explanation: 'Bi-molecular elementary step.'
  },
  {
    id: 'chem-kin-80',
    text: 'A reaction is of zero order if its rate _____ concentration.',
    options: ['Does not depend on', 'Is proportional to', 'Is proportional to square of', 'None'],
    correctAnswer: 'Does not depend on',
    explanation: 'Rate = k.'
  },
  {
    id: 'chem-kin-81',
    text: 'Specific reaction rate is the rate when:',
    options: ['t = 0', 'Concentrations of all reactants are unity', 'Reaction is complete', 'Average of rates'],
    correctAnswer: 'Concentrations of all reactants are unity',
    explanation: 'Rate = k(1)ⁿ = k.'
  },
  {
    id: 'chem-kin-82',
    text: 'The activation energy of a reaction is zero. The rate constant will be:',
    options: ['Zero', 'Equal to frequency factor A', 'Infinite', 'Independent of T'],
    correctAnswer: 'Equal to frequency factor A',
    explanation: 'k = Ae⁰ = A.'
  },
  {
    id: 'chem-kin-83',
    text: 'Most reactions are _____ order.',
    options: ['Zero', 'First or Second', 'Third', 'Fourth'],
    correctAnswer: 'First or Second',
    explanation: 'Higher-order reactions are rare because simultaneous collisions of many molecules are unlikely.'
  },
  {
    id: 'chem-kin-84',
    text: 'For a first-order reaction, the time for 90% completion is _____ times the half-life.',
    options: ['2', '3.32', '10', '4.34'],
    correctAnswer: '3.32',
    explanation: 'Calculated using log form.'
  },
  {
    id: 'chem-kin-85',
    text: 'If the concentration of a reactant is increased by factor of 10 and rate increases by 10, order is:',
    options: ['0', '1', '2', '10'],
    correctAnswer: '1',
    explanation: 'Rate ∝ [A].'
  },
  {
    id: 'chem-kin-86',
    text: 'Decomposition of NH3 on hot Pt surface is _____ order.',
    options: ['0', '1', '2', '3'],
    correctAnswer: '0',
    explanation: 'Surface reaction at high pressure.'
  },
  {
    id: 'chem-kin-87',
    text: 'Which is a promoter for iron in Haber process?',
    options: ['Pt', 'Mo', 'Ni', 'V2O5'],
    correctAnswer: 'Mo',
    explanation: 'Molybdenum increases iron\'s activity.'
  },
  {
    id: 'chem-kin-88',
    text: 'Which is a poison for the catalyst in Contact process?',
    options: ['As2O3', 'O2', 'N2', 'H2O'],
    correctAnswer: 'As2O3',
    explanation: 'Arsenic oxide "kills" the catalyst.'
  },
  {
    id: 'chem-kin-89',
    text: 'Enzymes belong to which class of compounds?',
    options: ['Carbohydrates', 'Proteins', 'Lipids', 'Minerals'],
    correctAnswer: 'Proteins',
    explanation: 'They are globular proteins.'
  },
  {
    id: 'chem-kin-90',
    text: 'What is the value of R in Arrhenius equation in J/mol.K?',
    options: ['0.0821', '1.98', '8.314', '0.001'],
    correctAnswer: '8.314',
    explanation: 'Gas constant in SI units.'
  },
  {
    id: 'chem-kin-91',
    text: 'A reaction with ΔH = +ve and high Ea is:',
    options: ['Fast and exothermic', 'Slow and endothermic', 'Fast and endothermic', 'Slow and exothermic'],
    correctAnswer: 'Slow and endothermic',
    explanation: 'Endothermic means products have higher energy; high Ea means slow.'
  },
  {
    id: 'chem-kin-92',
    text: 'The fraction of molecules having energy equal to or more than Ea _____ with temperature.',
    options: ['Increases exponentially', 'Decreases', 'Remains constant', 'Increases linearly'],
    correctAnswer: 'Increases exponentially',
    explanation: 'Leading to rapid increase in rate.'
  },
  {
    id: 'chem-kin-93',
    text: 'The rate constant of a reaction is 2 x 10⁻³ s⁻¹. What is the order?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Unit s⁻¹ is for first order.'
  },
  {
    id: 'chem-kin-94',
    text: 'What is the pH of a solution where [H+] = 0.0001?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '4',
    explanation: '-log(10⁻⁴) = 4.'
  },
  {
    id: 'chem-kin-95',
    text: 'In the presence of a catalyst, the heat of reaction (ΔH):',
    options: ['Increases', 'Decreases', 'Stay same', 'Goes to zero'],
    correctAnswer: 'Stay same',
    explanation: 'ΔH depends on initial and final states, not the path.'
  },
  {
    id: 'chem-kin-96',
    text: 'Catalysts are required in _____ amounts.',
    options: ['Large', 'Small', 'Equal to reactants', 'Massive'],
    correctAnswer: 'Small',
    explanation: 'They are regenerated at the end.'
  },
  {
    id: 'chem-kin-97',
    text: 'An enzyme found in human saliva is:',
    options: ['Pepsin', 'Ptyalin (Amylase)', 'Trypsin', 'Lipase'],
    correctAnswer: 'Ptyalin (Amylase)',
    explanation: 'Breaks down starch.'
  },
  {
    id: 'chem-kin-98',
    text: 'For a reaction, rate = k[A][B]². If concentration of both is doubled, the rate increases by:',
    options: ['2 times', '4 times', '8 times', '16 times'],
    correctAnswer: '8 times',
    explanation: '2¹ * 2² = 2 * 4 = 8.'
  },
  {
    id: 'chem-kin-99',
    text: 'The study of kinetics helps in determining the _____ of a reaction.',
    options: ['Enthalpy', 'Mechanism', 'Entropy', 'Free energy'],
    correctAnswer: 'Mechanism',
    explanation: 'Proposed pathways must match the observed rate law.'
  },
  {
    id: 'chem-kin-100',
    text: 'Kinetics is useful for:',
    options: ['Industry', 'Pharmacy', 'Environmental science', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Optimizing production, shelf-life, and pollution control.'
  }
];
