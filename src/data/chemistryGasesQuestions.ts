import { Question } from '../types';

export const CHEMISTRY_GASES_QUIZ: Question[] = [
  {
    id: 'chem-gas-1',
    text: 'According to Boyle’s Law, the volume of a given mass of gas is inversely proportional to its pressure provided that:',
    options: ['Temperature is constant', 'Density is constant', 'Volume is constant', 'Mass is variable'],
    correctAnswer: 'Temperature is constant',
    explanation: 'Boyle’s Law: V ∝ 1/P at constant T.'
  },
  {
    id: 'chem-gas-2',
    text: 'At constant pressure, the volume of a gas is directly proportional to its absolute temperature. This is known as:',
    options: ['Boyle’s Law', 'Charles’s Law', 'Avogadro’s Law', 'Dalton’s Law'],
    correctAnswer: 'Charles’s Law',
    explanation: 'Charles’s Law: V ∝ T at constant P.'
  },
  {
    id: 'chem-gas-3',
    text: 'The absolute zero temperature is equal to:',
    options: ['0°C', '273.15 K', '-273.15°C', '32°F'],
    correctAnswer: '-273.15°C',
    explanation: '0 K = -273.15°C. It is the temperature where molecular motion theoretically stops.'
  },
  {
    id: 'chem-gas-4',
    text: 'The value of the ideal gas constant R in units of dm³ atm K⁻¹ mol⁻¹ is:',
    options: ['8.314', '0.0821', '1.987', '62.4'],
    correctAnswer: '0.0821',
    explanation: 'R = 0.0821 dm³ atm / (K mol).'
  },
  {
    id: 'chem-gas-5',
    text: 'A gas occupies 100 cm³ at 1 atm. What will be its volume at 2 atm if temperature remains constant?',
    options: ['200 cm³', '50 cm³', '100 cm³', '25 cm³'],
    correctAnswer: '50 cm³',
    explanation: 'P1V1 = P2V2 => 1 * 100 = 2 * V2 => V2 = 50 cm³.'
  },
  {
    id: 'chem-gas-6',
    text: 'Which law states that the total pressure of a mixture of non-reacting gases is the sum of their partial pressures?',
    options: ['Graham’s Law', 'Dalton’s Law', 'Avogadro’s Law', 'Henry’s Law'],
    correctAnswer: 'Dalton’s Law',
    explanation: 'Dalton’s Law of Partial Pressures: P_total = P1 + P2 + ...'
  },
  {
    id: 'chem-gas-7',
    text: 'The rate of diffusion of a gas is inversely proportional to the square root of its molar mass. This is:',
    options: ['Graham’s Law', 'Dalton’s Law', 'Charles’s Law', 'Boyle’s Law'],
    correctAnswer: 'Graham’s Law',
    explanation: 'r1/r2 = √(M2/M1).'
  },
  {
    id: 'chem-gas-8',
    text: 'Which gas will diffuse most rapidly?',
    options: ['Oxygen (32)', 'Nitrogen (28)', 'Hydrogen (2)', 'Carbon dioxide (44)'],
    correctAnswer: 'Hydrogen (2)',
    explanation: 'Lighter gases diffuse faster. Hydrogen has the lowest molar mass.'
  },
  {
    id: 'chem-gas-9',
    text: 'The Kinetic Molecular Theory of gases was mainly developed by:',
    options: ['Bernoulli, Clausius, Maxwell, and Boltzmann', 'Dalton and Boyle', 'Einstein', 'Newton'],
    correctAnswer: 'Bernoulli, Clausius, Maxwell, and Boltzmann',
    explanation: 'These scientists laid the foundation of KMT.'
  },
  {
    id: 'chem-gas-10',
    text: 'According to KMT, the average kinetic energy of gas molecules is directly proportional to:',
    options: ['Pressure', 'Volume', 'Absolute Temperature', 'Molar Mass'],
    correctAnswer: 'Absolute Temperature',
    explanation: 'K.E. = 3/2 kT; it depends only on T.'
  },
  {
    id: 'chem-gas-11',
    text: 'Under which conditions do real gases deviate most from ideal behavior?',
    options: ['High temperature and low pressure', 'Low temperature and high pressure', 'High temperature and high pressure', 'Low temperature and low pressure'],
    correctAnswer: 'Low temperature and high pressure',
    explanation: 'At high P and low T, intermolecular forces and molecular volume become significant.'
  },
  {
    id: 'chem-gas-12',
    text: 'The Van der Waals equation corrects the ideal gas equation for:',
    options: ['Intermolecular forces and molecular volume', 'Temperature only', 'Pressure only', 'Gravity'],
    correctAnswer: 'Intermolecular forces and molecular volume',
    explanation: 'The terms "a" and "b" represent these corrections.'
  },
  {
    id: 'chem-gas-13',
    text: 'In the Van der Waals equation, the constant "a" represents:',
    options: ['Excluded volume', 'Intermolecular attractions', 'Kinetic energy', 'Collision frequency'],
    correctAnswer: 'Intermolecular attractions',
    explanation: '"a" measures the attraction between molecules; "b" measures the volume of molecules.'
  },
  {
    id: 'chem-gas-14',
    text: 'The units of pressure at STP are:',
    options: ['1 atm', '760 torr', '101325 Pa', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These are all equivalent standard pressure units.'
  },
  {
    id: 'chem-gas-15',
    text: 'The pressure of a gas is 76 cm of Hg. This is equal to:',
    options: ['760 mm of Hg', '1 atm', '760 torr', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Standard atmospheric pressure is 760 mmHg.'
  },
  {
    id: 'chem-gas-16',
    text: 'Deep sea divers use a mixture of oxygen and _____ to avoid the toxic effects of high-pressure nitrogen.',
    options: ['Hydrogen', 'Helium', 'Argon', 'Neon'],
    correctAnswer: 'Helium',
    explanation: 'Helium is less soluble in blood than nitrogen.'
  },
  {
    id: 'chem-gas-17',
    text: 'The value of R in SI units is:',
    options: ['0.0821', '8.314 J K⁻¹ mol⁻¹', '1.987', '0.008314'],
    correctAnswer: '8.314 J K⁻¹ mol⁻¹',
    explanation: 'In SI, Pressure is Pa, Volume is m³. R = 8.314.'
  },
  {
    id: 'chem-gas-18',
    text: 'If the pressure of a gas is doubled and its absolute temperature is halved, the volume will become:',
    options: ['Double', 'Half', 'One-fourth', 'Unchanged'],
    correctAnswer: 'One-fourth',
    explanation: 'V2 = V1 * (P1/P2) * (T2/T1) = V1 * (1/2) * (1/2) = V1/4.'
  },
  {
    id: 'chem-gas-19',
    text: 'The density of an ideal gas is directly proportional to:',
    options: ['Pressure', 'Molar Mass', 'Both A and B', 'Volume'],
    correctAnswer: 'Both A and B',
    explanation: 'PM = dRT => d = PM/RT. Density depends on P and M.'
  },
  {
    id: 'chem-gas-20',
    text: 'Dalton’s Law is NOT applicable to a mixture of:',
    options: ['N2 and O2', 'He and Ne', 'NH3 and HCl', 'H2 and CH4'],
    correctAnswer: 'NH3 and HCl',
    explanation: 'Dalton’s Law applies to non-reacting gases. NH3 and HCl react to form NH4Cl.'
  },
  {
    id: 'chem-gas-21',
    text: 'The process of a gas escaping through a tiny hole one molecule at a time is:',
    options: ['Diffusion', 'Effusion', 'Sublimation', 'Evaporation'],
    correctAnswer: 'Effusion',
    explanation: 'Effusion is leakage through a pinhole.'
  },
  {
    id: 'chem-gas-22',
    text: 'What is the molar mass of a gas if it diffuses 4 times slower than Hydrogen?',
    options: ['8', '16', '32', '64'],
    correctAnswer: '32',
    explanation: 'r_h/r_g = √(M_g/M_h) => 4 = √(M_g/2) => 16 = M_g/2 => M_g = 32.'
  },
  {
    id: 'chem-gas-23',
    text: 'Plasma is the _____ state of matter.',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctAnswer: 'Fourth',
    explanation: 'Plasma is an ionized gas state found in stars and lightning.'
  },
  {
    id: 'chem-gas-24',
    text: 'Which state of matter has the highest degree of randomness?',
    options: ['Solid', 'Liquid', 'Gas', 'Crystalline'],
    correctAnswer: 'Gas',
    explanation: 'Gases have maximum entropy/randomness due to free molecular motion.'
  },
  {
    id: 'chem-gas-25',
    text: 'The temperature at which a real gas behaves like an ideal gas over a range of pressure is called:',
    options: ['Critical temperature', 'Boyle temperature', 'Inversion temperature', 'Absolute zero'],
    correctAnswer: 'Boyle temperature',
    explanation: 'At this specific T, attractive and repulsive forces balance out.'
  },
  {
    id: 'chem-gas-26',
    text: 'The pressure exerted by gas molecules on the walls of the container is due to:',
    options: ['Intermolecular forces', 'Elastic collisions of molecules with the walls', 'Weight of the gas', 'Electrostatic forces'],
    correctAnswer: 'Elastic collisions of molecules with the walls',
    explanation: 'According to KMT, pressure is the result of frequent impacts.'
  },
  {
    id: 'chem-gas-27',
    text: 'Absolute zero can be reached by:',
    options: ['Using liquid nitrogen', 'Using liquid helium', 'Expanding a gas adiabatically', 'It is theoretically impossible to reach'],
    correctAnswer: 'It is theoretically impossible to reach',
    explanation: 'According to the Third Law of Thermodynamics, absolute zero cannot be reached in a finite number of steps.'
  },
  {
    id: 'chem-gas-28',
    text: 'One dm³ is equal to:',
    options: ['1 liter', '1000 cm³', '10^-3 m³', 'All of above'],
    correctAnswer: 'All of above',
    explanation: '1 dm³ = 1 L = 1000 mL = 1000 cm³.'
  },
  {
    id: 'chem-gas-29',
    text: 'The molar mass of an unknown gas occupying 22.4 dm³ at STP and weighing 44g is:',
    options: ['22', '44', '88', '32'],
    correctAnswer: '44',
    explanation: 'At STP, 22.4 dm³ is 1 mole. Weight of 1 mole is molar mass.'
  },
  {
    id: 'chem-gas-30',
    text: 'A gas that follows gas laws at all temperatures and pressures is:',
    options: ['Real gas', 'Ideal gas', 'Nobel gas', 'Plasma'],
    correctAnswer: 'Ideal gas',
    explanation: 'Ideal (or perfect) gases are theoretical constructs.'
  }
];
