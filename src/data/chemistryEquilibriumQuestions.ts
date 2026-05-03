import { Question } from '../types';

export const CHEMISTRY_EQUILIBRIUM_QUIZ: Question[] = [
  {
    id: 'chem-equi-1',
    text: 'A reaction that proceeds in both directions is called:',
    options: ['Irreversible', 'Reversible', 'Spontaneous', 'Adiabatic'],
    correctAnswer: 'Reversible',
    explanation: 'Products can react back to form reactants.'
  },
  {
    id: 'chem-equi-2',
    text: 'At chemical equilibrium, the rates of forward and backward reactions are:',
    options: ['Zero', 'Equal', 'Variable', 'Maximum'],
    correctAnswer: 'Equal',
    explanation: 'This is the definition of dynamic equilibrium.'
  },
  {
    id: 'chem-equi-3',
    text: 'The value of the equilibrium constant Kc depends on:',
    options: ['Pressure', 'Concentration', 'Temperature', 'Catalyst'],
    correctAnswer: 'Temperature',
    explanation: 'Kc is constant for a given temperature.'
  },
  {
    id: 'chem-equi-4',
    text: 'If Kc > 1, the equilibrium favors the:',
    options: ['Reactants', 'Products', 'Neither', 'Solid state'],
    correctAnswer: 'Products',
    explanation: 'High Kc means higher concentration of products.'
  },
  {
    id: 'chem-equi-5',
    text: 'Le Chatelier’s Principle describes the effect of change in _____ on a system at equilibrium.',
    options: ['Concentration', 'Temperature', 'Pressure', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'The system shifts to counteract the stress.'
  },
  {
    id: 'chem-equi-6',
    text: 'In an exothermic reaction, increasing the temperature will shift the equilibrium to the:',
    options: ['Right', 'Left', 'Nowhere', 'Upward'],
    correctAnswer: 'Left',
    explanation: 'To absorb the added heat.'
  },
  {
    id: 'chem-equi-7',
    text: 'Adding a catalyst to a reversible reaction:',
    options: ['Increases yield', 'Changes Kc', 'Reaches equilibrium faster', 'Stops the reaction'],
    correctAnswer: 'Reaches equilibrium faster',
    explanation: 'It lowers the activation energy for both directions.'
  },
  {
    id: 'chem-equi-8',
    text: 'The pH of a 0.1 M HCl solution is:',
    options: ['0', '1', '2', '7'],
    correctAnswer: '1',
    explanation: '-log(0.1) = 1.'
  },
  {
    id: 'chem-equi-9',
    text: 'A buffer solution resists changes in:',
    options: ['Concentration', 'pH', 'Temperature', 'Pressure'],
    correctAnswer: 'pH',
    explanation: 'Contains a weak acid/base and its conjugate salt.'
  },
  {
    id: 'chem-equi-10',
    text: 'The solubility product Ksp is applicable to:',
    options: ['Soluble salts', 'Sparingly soluble salts', 'Gases', 'Acids'],
    correctAnswer: 'Sparingly soluble salts',
    explanation: 'Represents equilibrium between solid and ions.'
  },
  {
    id: 'chem-equi-11',
    text: 'A reversible reaction is one that can proceed in _____ directions.',
    options: ['One', 'Both', 'Only forward', 'Only backward'],
    correctAnswer: 'Both',
    explanation: 'Products can react to reform reactants.'
  },
  {
    id: 'chem-equi-12',
    text: 'Chemical equilibrium is a _____ state.',
    options: ['Static', 'Dynamic', 'Solid', 'Inert'],
    correctAnswer: 'Dynamic',
    explanation: 'Forward and backward reactions continue at equal rates.'
  },
  {
    id: 'chem-equi-13',
    text: 'At equilibrium, the concentration of reactants and products becomes:',
    options: ['Zero', 'Equal', 'Constant', 'Maximum'],
    correctAnswer: 'Constant',
    explanation: 'They do not necessarily have to be equal, but they stop changing.'
  },
  {
    id: 'chem-equi-14',
    text: 'The law of mass action was proposed by:',
    options: ['Le Chatelier', 'Guldberg and Waage', 'Haber', 'Ostwald'],
    correctAnswer: 'Guldberg and Waage',
    explanation: 'It relates reaction rate to the product of active masses.'
  },
  {
    id: 'chem-equi-15',
    text: 'The equilibrium constant (Kc) for the reaction A + B ⇌ C + D is:',
    options: ['[C][D] / [A][B]', '[A][B] / [C][D]', '[C] + [D] / [A] + [B]', '[C][D][A][B]'],
    correctAnswer: '[C][D] / [A][B]',
    explanation: 'Products over reactants.'
  },
  {
    id: 'chem-equi-16',
    text: 'If Kc is very large, it indicates that the reaction:',
    options: ['Hardly proceeds', 'Goes almost to completion', 'Is at equilibrium', 'Is very slow'],
    correctAnswer: 'Goes almost to completion',
    explanation: 'High Kc means products dominate at equilibrium.'
  },
  {
    id: 'chem-equi-17',
    text: 'If Kc is very small, it indicates that the reaction:',
    options: ['Hardly proceeds', 'Goes to completion', 'Is very fast', 'Has no reactants'],
    correctAnswer: 'Hardly proceeds',
    explanation: 'Low Kc means reactants dominate at equilibrium.'
  },
  {
    id: 'chem-equi-18',
    text: 'The relationship between Kp and Kc is:',
    options: ['Kp = Kc (RT)^Δn', 'Kc = Kp (RT)^Δn', 'Kp = Kc / RT', 'Kp = Kc'],
    correctAnswer: 'Kp = Kc (RT)^Δn',
    explanation: 'Δn is the change in number of moles of gaseous products and reactants.'
  },
  {
    id: 'chem-equi-19',
    text: 'Kp = Kc when Δn is:',
    options: ['1', '0', '-1', 'Infinity'],
    correctAnswer: '0',
    explanation: '(RT)⁰ = 1.'
  },
  {
    id: 'chem-equi-20',
    text: 'Le Chatelier’s Principle states that if a stress is applied to a system at equilibrium, the system:',
    options: ['Breaks down', 'Shifts to neutralize the stress', 'Stops reacting', 'Becomes solid'],
    correctAnswer: 'Shifts to neutralize the stress',
    explanation: 'The system adjusts to minimize the change.'
  },
  {
    id: 'chem-equi-21',
    text: 'Increasing the concentration of reactants will shift the equilibrium to the:',
    options: ['Left', 'Right', 'Nowhere', 'Upward'],
    correctAnswer: 'Right',
    explanation: 'To consume the added reactants.'
  },
  {
    id: 'chem-equi-22',
    text: 'For an exothermic reaction, increasing the temperature will shift the equilibrium to the:',
    options: ['Left', 'Right', 'Nowhere', 'Downward'],
    correctAnswer: 'Left',
    explanation: 'Heat is a product in exothermic reactions; adding it shifts equilibrium back to reactants.'
  },
  {
    id: 'chem-equi-23',
    text: 'Increasing the pressure will shift the equilibrium toward the side with:',
    options: ['More moles of gas', 'Fewer moles of gas', 'Higher mass', 'Liquids'],
    correctAnswer: 'Fewer moles of gas',
    explanation: 'To reduce the volume and pressure.'
  },
  {
    id: 'chem-equi-24',
    text: 'Adding a catalyst to a system at equilibrium will:',
    options: ['Shift it to the right', 'Shift it to the left', 'Have no effect on position', 'Increase Kc'],
    correctAnswer: 'Have no effect on position',
    explanation: 'A catalyst increases the rate of both forward and backward reactions equally.'
  },
  {
    id: 'chem-equi-25',
    text: 'The Haber Process is used for the synthesis of:',
    options: ['H2SO4', 'NH3', 'HNO3', 'HCl'],
    correctAnswer: 'NH3',
    explanation: 'N2 + 3H2 ⇌ 2NH3.'
  },
  {
    id: 'chem-equi-26',
    text: 'Optimum conditions for Haber process include:',
    options: ['High pressure', 'Low temperature (but not too low)', 'Iron catalyst', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Balanced for both rate and yield.'
  },
  {
    id: 'chem-equi-27',
    text: 'The Contact Process is used for the synthesis of:',
    options: ['NH3', 'H2SO4', 'NaOH', 'Cl2'],
    correctAnswer: 'H2SO4',
    explanation: 'Conversion of SO2 to SO3 is the equilibrium step.'
  },
  {
    id: 'chem-equi-28',
    text: 'In the reaction H2 + I2 ⇌ 2HI, what is the effect of pressure change?',
    options: ['Shift right', 'Shift left', 'No effect', 'Reaction stops'],
    correctAnswer: 'No effect',
    explanation: 'Moles of gas on both sides are equal (2=2).'
  },
  {
    id: 'chem-equi-29',
    text: 'The solubility product (Ksp) applies to _____ salts.',
    options: ['Highly soluble', 'Sparingly soluble', 'Insoluble', 'Liquid'],
    correctAnswer: 'Sparingly soluble',
    explanation: 'It represents the equilibrium between undissolved solid and dissolved ions.'
  },
  {
    id: 'chem-equi-30',
    text: 'A precipitate forms if the ionic product is _____ than Ksp.',
    options: ['Greater', 'Smaller', 'Equal', 'Zero'],
    correctAnswer: 'Greater',
    explanation: 'The solution is supersaturated.'
  },
  {
    id: 'chem-equi-31',
    text: 'The Common Ion Effect causes _____ in the solubility of a sparingly soluble salt.',
    options: ['Increase', 'Decrease', 'No change', 'Rapid shift'],
    correctAnswer: 'Decrease',
    explanation: 'Adding an ion already present shifts equilibrium to the solid side.'
  },
  {
    id: 'chem-equi-32',
    text: 'The pH of a neutral solution at 25°C is:',
    options: ['0', '7', '14', '1'],
    correctAnswer: '7',
    explanation: 'pOH is also 7.'
  },
  {
    id: 'chem-equi-33',
    text: 'pH is defined as:',
    options: ['-log[H+]', 'log[H+]', 'ln[H+]', '1/[H+]'],
    correctAnswer: '-log[H+]',
    explanation: 'Proposed by Sorensen.'
  },
  {
    id: 'chem-equi-34',
    text: 'A buffer solution resists change in:',
    options: ['Color', 'Volume', 'pH', 'Temperature'],
    correctAnswer: 'pH',
    explanation: 'Contains a weak acid/base and its salt.'
  },
  {
    id: 'chem-equi-35',
    text: 'Henderson-Hasselbalch equation for an acidic buffer is:',
    options: ['pH = pKa + log([Salt]/[Acid])', 'pH = pKa - log([Salt]/[Acid])', 'pOH = pKb + log([Salt]/[Base])', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'Calculates pH/pOH of buffers.'
  },
  {
    id: 'chem-equi-36',
    text: 'The ionization constant of water (Kw) at 25°C is:',
    options: ['1 x 10⁻⁷', '1 x 10⁻¹⁴', '1 x 10⁷', '14'],
    correctAnswer: '1 x 10⁻¹⁴',
    explanation: 'Kw = [H+][OH-].'
  },
  {
    id: 'chem-equi-37',
    text: 'An acidic solution has pH:',
    options: ['> 7', '< 7', '= 7', '14'],
    correctAnswer: '< 7',
    explanation: 'Concentration of H+ is greater than 10⁻⁷.'
  },
  {
    id: 'chem-equi-38',
    text: 'A basic solution has pH:',
    options: ['> 7', '< 7', '= 7', '0'],
    correctAnswer: '> 7',
    explanation: 'Concentration of OH- is greater than 10⁻⁷.'
  },
  {
    id: 'chem-equi-39',
    text: 'Acid dissociation constant (Ka) is a measure of acid:',
    options: ['Concentration', 'Strength', 'Volume', 'Density'],
    correctAnswer: 'Strength',
    explanation: 'Higher Ka means stronger acid.'
  },
  {
    id: 'chem-equi-40',
    text: 'pKa is equal to:',
    options: ['-log Ka', 'log Ka', '1/Ka', 'Ka²'],
    correctAnswer: '-log Ka',
    explanation: 'Lower pKa means stronger acid.'
  },
  {
    id: 'chem-equi-41',
    text: 'The hydrolysis of a salt of a strong acid and weak base results in a _____ solution.',
    options: ['Acidic', 'Basic', 'Neutral', 'Amphoteric'],
    correctAnswer: 'Acidic',
    explanation: 'The weak base cation reacts with water to release H+.'
  },
  {
    id: 'chem-equi-42',
    text: 'Kc depends ONLY on:',
    options: ['Pressure', 'Temperature', 'Concentration', 'Catalyst'],
    correctAnswer: 'Temperature',
    explanation: 'Changing concentration or pressure shifts equilibrium but doesn\'t change the constant value.'
  },
  {
    id: 'chem-equi-43',
    text: 'Units of Kc for the reaction H2 + I2 ⇌ 2HI are:',
    options: ['mol dm⁻³', 'mol⁻¹ dm³', 'No units', 'mol² dm⁻⁶'],
    correctAnswer: 'No units',
    explanation: 'The number of moles of products and reactants are equal.'
  },
  {
    id: 'chem-equi-44',
    text: 'In an endothermic reaction, increasing temperature _____ Kc.',
    options: ['Increases', 'Decreases', 'Stay same', 'Zeroes'],
    correctAnswer: 'Increases',
    explanation: 'Shifts equilibrium to the product side.'
  },
  {
    id: 'chem-equi-45',
    text: 'The reaction quotient (Qc) is used to predict:',
    options: ['Rate of reaction', 'Direction of reaction', 'Energy change', 'Color change'],
    correctAnswer: 'Direction of reaction',
    explanation: 'By comparing Qc with Kc.'
  },
  {
    id: 'chem-equi-46',
    text: 'If Qc < Kc, the reaction proceeds in the _____ direction.',
    options: ['Forward', 'Backward', 'Nowhere', 'Downward'],
    correctAnswer: 'Forward',
    explanation: 'To reach equilibrium concentration of products.'
  },
  {
    id: 'chem-equi-47',
    text: 'Percentage ionization of a weak acid _____ with dilution.',
    options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
    correctAnswer: 'Increases',
    explanation: 'According to Ostwald’s dilution law.'
  },
  {
    id: 'chem-equi-48',
    text: 'Buffer capacity is maximum when:',
    options: ['[Salt] = [Acid]', '[Salt] > [Acid]', '[Salt] < [Acid]', 'pH = 7'],
    correctAnswer: '[Salt] = [Acid]',
    explanation: 'At this point, pH = pKa.'
  },
  {
    id: 'chem-equi-49',
    text: 'The pH of human blood is maintained at approximately:',
    options: ['7.0', '7.4', '8.0', '6.5'],
    correctAnswer: '7.4',
    explanation: 'Maintained by carbonic acid/bicarbonate buffer.'
  },
  {
    id: 'chem-equi-50',
    text: 'AgCl is more soluble in _____ than in NaCl solution.',
    options: ['Pure water', 'KCl solution', 'CaCl2 solution', 'Sea water'],
    correctAnswer: 'Pure water',
    explanation: 'Common ion effect in others reduces solubility.'
  },
  {
    id: 'chem-equi-51',
    text: 'Lewis Acid is an electron pair:',
    options: ['Donor', 'Acceptor', 'Generator', 'Neutralizer'],
    correctAnswer: 'Acceptor',
    explanation: 'Example: BF3, AlCl3.'
  },
  {
    id: 'chem-equi-52',
    text: 'Lewis Base is an electron pair:',
    options: ['Donor', 'Acceptor', 'Consumer', 'Stable'],
    correctAnswer: 'Donor',
    explanation: 'Example: NH3, H2O.'
  },
  {
    id: 'chem-equi-53',
    text: 'Bronsted-Lowry Acid is a proton:',
    options: ['Donor', 'Acceptor', 'Carrier', 'Source'],
    correctAnswer: 'Donor',
    explanation: 'Releases H+.'
  },
  {
    id: 'chem-equi-54',
    text: 'The conjugate base of H2SO4 is:',
    options: ['SO4²⁻', 'HSO4⁻', 'H3SO4+', 'OH-'],
    correctAnswer: 'HSO4⁻',
    explanation: 'Formed after losing one proton.'
  },
  {
    id: 'chem-equi-55',
    text: 'A substance that can act as both an acid and a base is:',
    options: ['Amphoteric', 'Aprotic', 'Neutral', 'Polyprotic'],
    correctAnswer: 'Amphoteric',
    explanation: 'Example: H2O, Amino acids.'
  },
  {
    id: 'chem-equi-56',
    text: 'Which is a strong acid?',
    options: ['CH3COOH', 'HCl', 'H2CO3', 'HCN'],
    correctAnswer: 'HCl',
    explanation: 'Completely ionizes in water.'
  },
  {
    id: 'chem-equi-57',
    text: 'Which is a weak base?',
    options: ['NaOH', 'KOH', 'NH3', 'Ba(OH)2'],
    correctAnswer: 'NH3',
    explanation: 'Partially ionizes in water.'
  },
  {
    id: 'chem-equi-58',
    text: 'The sum of pH and pOH is always _____ at 25°C.',
    options: ['7', '10', '14', '0'],
    correctAnswer: '14',
    explanation: 'Derived from Kw.'
  },
  {
    id: 'chem-equi-59',
    text: 'Adding an inert gas at constant volume to an equilibrium system will:',
    options: ['Shift right', 'Shift left', 'Have no effect', 'Reaction stops'],
    correctAnswer: 'Have no effect',
    explanation: 'It does not change the partial pressures of the reacting gases.'
  },
  {
    id: 'chem-equi-60',
    text: 'The value of Kc for a reaction is the _____ of the Kc for the reverse reaction.',
    options: ['Negative', 'Reciprocal', 'Square root', 'Same'],
    correctAnswer: 'Reciprocal',
    explanation: 'K_rev = 1 / K_fwd.'
  },
  {
    id: 'chem-equi-61',
    text: 'Salt hydrolysis is the reaction of _____ with water.',
    options: ['Reactants', 'Products', 'Ions of salt', 'Gases'],
    correctAnswer: 'Ions of salt',
    explanation: 'Produces acidic or basic solutions.'
  },
  {
    id: 'chem-equi-62',
    text: 'Which salt will not undergo hydrolysis?',
    options: ['NaCl', 'CH3COONa', 'NH4Cl', 'AlCl3'],
    correctAnswer: 'NaCl',
    explanation: 'Salt of strong acid and strong base.'
  },
  {
    id: 'chem-equi-63',
    text: 'Ksp of AgCl is 1.8 x 10⁻¹⁰. Its solubility in mol/dm³ is:',
    options: ['1.34 x 10⁻⁵', '1.8 x 10⁻⁵', '1.8 x 10⁻¹⁰', 'Zero'],
    correctAnswer: '1.34 x 10⁻⁵',
    explanation: 'Solubility s = √Ksp.'
  },
  {
    id: 'chem-equi-64',
    text: 'Which acid has the highest Ka?',
    options: ['HF', 'HCl', 'HBr', 'HI'],
    correctAnswer: 'HI',
    explanation: 'HI is the strongest hydrohalic acid due to weak H-I bond.'
  },
  {
    id: 'chem-equi-65',
    text: 'What is the pH of 0.01 M HCl?',
    options: ['1', '2', '3', '7'],
    correctAnswer: '2',
    explanation: '-log(0.01) = 2.'
  },
  {
    id: 'chem-equi-66',
    text: 'What is the pOH of 0.001 M NaOH?',
    options: ['3', '11', '7', '1'],
    correctAnswer: '3',
    explanation: '-log(0.001) = 3.'
  },
  {
    id: 'chem-equi-67',
    text: 'Degree of dissociation (α) for a strong electrolyte is:',
    options: ['0', '0.5', '1 (or 100%)', 'Variable'],
    correctAnswer: '1 (or 100%)',
    explanation: 'Strong electrolytes ionize completely.'
  },
  {
    id: 'chem-equi-68',
    text: 'Which of the following is NOT a buffer?',
    options: ['CH3COOH + CH3COONa', 'NH3 + NH4Cl', 'HCl + NaCl', 'H2CO3 + NaHCO3'],
    correctAnswer: 'HCl + NaCl',
    explanation: 'Strong acid and its salt do not form a buffer.'
  },
  {
    id: 'chem-equi-69',
    text: 'Amphiprotic species can both _____ and _____ protons.',
    options: ['Gain and Lose', 'Create and Destroy', 'Oxidize and Reduce', 'None'],
    correctAnswer: 'Gain and Lose',
    explanation: 'Example: HCO3⁻ can become H2CO3 or SO4²⁻.'
  },
  {
    id: 'chem-equi-70',
    text: 'Ostwald’s dilution law is valid for:',
    options: ['Strong electrolytes', 'Weak electrolytes', 'Gases only', 'All'],
    correctAnswer: 'Weak electrolytes',
    explanation: 'Strong electrolytes have constant α ≈ 1.'
  },
  {
    id: 'chem-equi-71',
    text: 'In the reaction 2SO2 + O2 ⇌ 2SO3, decreasing the volume will:',
    options: ['Shift right', 'Shift left', 'No effect', 'Increase O2'],
    correctAnswer: 'Shift right',
    explanation: 'Moves toward fewer moles of gas (3 -> 2).'
  },
  {
    id: 'chem-equi-72',
    text: 'If Kp > Kc, then Δn is:',
    options: ['Positive', 'Negative', 'Zero', '1'],
    correctAnswer: 'Positive',
    explanation: 'Since RT > 1 at room temperature.'
  },
  {
    id: 'chem-equi-73',
    text: 'The equilibrium constant is _____ of the initial concentrations.',
    options: ['Dependent', 'Independent', 'Proportional', 'Inversely related'],
    correctAnswer: 'Independent',
    explanation: 'Kc remains same regardless of starting amounts.'
  },
  {
    id: 'chem-equi-74',
    text: 'Synthesis of HI from H2 and I2 is an _____ reaction.',
    options: ['Exothermic', 'Endothermic', 'Neutral', 'None'],
    correctAnswer: 'Endothermic',
    explanation: 'Heat is absorbed.'
  },
  {
    id: 'chem-equi-75',
    text: 'Adding more product will shift the equilibrium to the:',
    options: ['Left', 'Right', 'Nowhere', 'Upward'],
    correctAnswer: 'Left',
    explanation: 'To consume the excess product.'
  },
  {
    id: 'chem-equi-76',
    text: 'Unit of Kp depends on:',
    options: ['Pressure unit', 'Δn', 'Both A and B', 'Temperature'],
    correctAnswer: 'Both A and B',
    explanation: '(atm)^Δn.'
  },
  {
    id: 'chem-equi-77',
    text: 'Common ion effect is an application of:',
    options: ['Octet rule', 'Le Chatelier’s principle', 'Newton’s law', 'Haber’s law'],
    correctAnswer: 'Le Chatelier’s principle',
    explanation: 'Adding ions shifts equilibrium to the solid side.'
  },
  {
    id: 'chem-equi-78',
    text: 'The pKb of a strong base is:',
    options: ['High', 'Low', '7', '14'],
    correctAnswer: 'Low',
    explanation: 'Higher Kb means lower pKb.'
  },
  {
    id: 'chem-equi-79',
    text: 'The value of Kw increases with _____ in temperature.',
    options: ['Increase', 'Decrease', 'No change', 'Rapid change'],
    correctAnswer: 'Increase',
    explanation: 'Auto-ionization of water is endothermic.'
  },
  {
    id: 'chem-equi-80',
    text: 'Which is a neutral salt?',
    options: ['KNO3', 'CH3COONH4', 'Na2SO4', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Made from strong acid/strong base or equal strength weak acid/base.'
  },
  {
    id: 'chem-equi-81',
    text: 'Equilibrium is reached when the free energy (G) of the system is at:',
    options: ['Maximum', 'Minimum', 'Zero', 'Infinity'],
    correctAnswer: 'Minimum',
    explanation: 'ΔG = 0 at equilibrium.'
  },
  {
    id: 'chem-equi-82',
    text: 'A catalyst _____ the time to reach equilibrium.',
    options: ['Increases', 'Decreases', 'Does not change', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Speeds up both forward and reverse reactions.'
  },
  {
    id: 'chem-equi-83',
    text: 'The unit of concentration used in Kc is:',
    options: ['mol/L', 'g/L', 'mol/kg', 'Normality'],
    correctAnswer: 'mol/L',
    explanation: 'Molarity.'
  },
  {
    id: 'chem-equi-84',
    text: 'If Δn = 0, Kp is _____ to Kc.',
    options: ['Equal', 'Greater', 'Smaller', 'Double'],
    correctAnswer: 'Equal',
    explanation: 'Kp = Kc(RT)⁰ = Kc.'
  },
  {
    id: 'chem-equi-85',
    text: 'Which acid is found in vinegar?',
    options: ['Formic acid', 'Acetic acid', 'Citric acid', 'Lactic acid'],
    correctAnswer: 'Acetic acid',
    explanation: 'CH3COOH.'
  },
  {
    id: 'chem-equi-86',
    text: 'The process of a salt reacting with water to form an acid and a base is:',
    options: ['Neutralization', 'Hydrolysis', 'Ionization', 'Hydration'],
    correctAnswer: 'Hydrolysis',
    explanation: 'The opposite of neutralization.'
  },
  {
    id: 'chem-equi-87',
    text: 'The pH of a 0.001 M solution of NaOH is:',
    options: ['3', '11', '7', '14'],
    correctAnswer: '11',
    explanation: 'pOH = 3, so pH = 14 - 3 = 11.'
  },
  {
    id: 'chem-equi-88',
    text: 'Adding NaOH to a solution of CH3COOH will _____ its pH.',
    options: ['Increase', 'Decrease', 'Stay same', 'Zero'],
    correctAnswer: 'Increase',
    explanation: 'NaOH is a strong base.'
  },
  {
    id: 'chem-equi-89',
    text: 'Which is a polyprotic acid?',
    options: ['HCl', 'H2SO4', 'H3PO4', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'They can donate more than one proton.'
  },
  {
    id: 'chem-equi-90',
    text: 'Buffer solutions are used in:',
    options: ['Biological systems', 'Industrial processes', 'Chemical analysis', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'They maintain constant pH.'
  },
  {
    id: 'chem-equi-91',
    text: 'The ionization of a weak electrolyte is _____ by the addition of a strong electrolyte having a common ion.',
    options: ['Increased', 'Suppressed (Decreased)', 'Not affected', 'Doubled'],
    correctAnswer: 'Suppressed (Decreased)',
    explanation: 'Common ion effect.'
  },
  {
    id: 'chem-equi-92',
    text: 'At equilibrium, the Gibbs free energy change (ΔG) is:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctAnswer: 'Zero',
    explanation: 'The system is at its most stable state.'
  },
  {
    id: 'chem-equi-93',
    text: 'Solubility of a gas in a liquid _____ with increasing pressure.',
    options: ['Increases', 'Decreases', 'Remains same', 'Drops to zero'],
    correctAnswer: 'Increases',
    explanation: 'According to Henry\'s Law.'
  },
  {
    id: 'chem-equi-94',
    text: 'The pH of pure water at 100°C is _____ 7.',
    options: ['Greater than', 'Less than', 'Equal to', 'Zero'],
    correctAnswer: 'Less than',
    explanation: 'Kw increases with temperature, so [H+] increases, and pH decreases (but it\'s still neutral because [H+]=[OH-]).'
  },
  {
    id: 'chem-equi-95',
    text: 'Which ion is the strongest conjugate base?',
    options: ['Cl-', 'NO3-', 'CH3COO-', 'HSO4-'],
    correctAnswer: 'CH3COO-',
    explanation: 'Conjugate base of the weakest acid among the choices.'
  },
  {
    id: 'chem-equi-96',
    text: 'If Ksp is large, the salt is _____ soluble.',
    options: ['Highly', 'Sparingly', 'Moderately', 'Not'],
    correctAnswer: 'Highly',
    explanation: 'More ions can exist in solution.'
  },
  {
    id: 'chem-equi-97',
    text: 'Which is a Bronsted-Lowry base but not an Arrhenius base?',
    options: ['NaOH', 'NH3', 'KOH', 'Ca(OH)2'],
    correctAnswer: 'NH3',
    explanation: 'NH3 can accept a proton but does not contain OH- in its formula.'
  },
  {
    id: 'chem-equi-98',
    text: 'What is the pH of a solution with [H+] = 10⁻⁵?',
    options: ['5', '9', '7', '1'],
    correctAnswer: '5',
    explanation: '-log(10⁻⁵) = 5.'
  },
  {
    id: 'chem-equi-99',
    text: 'Ksp for Ag2SO4 is:',
    options: ['[Ag+][SO4²⁻]', '[Ag+]²[SO4²⁻]', '[2Ag+][SO4²⁻]', '[Ag+]²[SO4²⁻]²'],
    correctAnswer: '[Ag+]²[SO4²⁻]',
    explanation: 'Stoichiometric coefficients become powers.'
  },
  {
    id: 'chem-equi-100',
    text: 'Chemical equilibrium is reached in _____ systems.',
    options: ['Open', 'Closed', 'Isolated', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'No matter can leave or enter the system.'
  }
];
