import { Question } from '../types';

export const CHEMISTRY_BASIC_CONCEPTS_QUIZ: Question[] = [
  {
    id: 'chem-basic-1',
    text: 'The branch of chemistry that deals with the quantitative relationship between reactants and products in a balanced chemical equation is:',
    options: ['Chemical Kinetics', 'Stoichiometry', 'Thermochemistry', 'Electrochemistry'],
    correctAnswer: 'Stoichiometry',
    explanation: 'Stoichiometry is the study of quantitative relationships in chemical reactions.'
  },
  {
    id: 'chem-basic-2',
    text: 'How many atoms are present in 1 mole of Oxygen gas (O2)?',
    options: ['6.022 x 10^23', '1.204 x 10^24', '3.011 x 10^23', '16'],
    correctAnswer: '1.204 x 10^24',
    explanation: '1 mole of O2 contains 6.022 x 10^23 molecules. Since each molecule has 2 atoms, total atoms = 2 * 6.022 x 10^23 = 1.204 x 10^24.'
  },
  {
    id: 'chem-basic-3',
    text: 'The mass of one mole of electrons is approximately:',
    options: ['1.008 mg', '0.54 mg', '0.184 mg', '9.11 mg'],
    correctAnswer: '0.54 mg',
    explanation: 'Mass of 1 electron = 9.11 x 10^-31 kg. Mass of 1 mole = (9.11 x 10^-31) * (6.022 x 10^23) ≈ 5.48 x 10^-7 kg = 0.548 mg.'
  },
  {
    id: 'chem-basic-4',
    text: 'Which of the following contains the same number of molecules as 16g of Oxygen?',
    options: ['14g of Nitrogen', '2g of Hydrogen', '28g of CO', '44g of CO2'],
    correctAnswer: '14g of Nitrogen',
    explanation: '16g O2 = 16/32 = 0.5 moles. 14g N2 = 14/28 = 0.5 moles. Same moles = same molecules.'
  },
  {
    id: 'chem-basic-5',
    text: 'The percentage of Nitrogen in Urea (NH2CONH2) is approximately:',
    options: ['28%', '46%', '60%', '33%'],
    correctAnswer: '46%',
    explanation: 'Molar mass of urea = 60. Mass of N = 2 * 14 = 28. %N = (28/60) * 100 ≈ 46.6%.'
  },
  {
    id: 'chem-basic-6',
    text: 'The reactant which is consumed earlier in a chemical reaction and limits the amount of product formed is:',
    options: ['Excess reactant', 'Limiting reactant', 'Catalyst', 'Product'],
    correctAnswer: 'Limiting reactant',
    explanation: 'A limiting reactant is the one that is consumed first and controls the yield.'
  },
  {
    id: 'chem-basic-7',
    text: 'What is the volume of 2.0 moles of an ideal gas at STP?',
    options: ['22.4 dm³', '44.8 dm³', '11.2 dm³', '2.0 dm³'],
    correctAnswer: '44.8 dm³',
    explanation: 'At STP, 1 mole = 22.4 dm³. So 2 moles = 2 * 22.4 = 44.8 dm³.'
  },
  {
    id: 'chem-basic-8',
    text: 'The number of moles of CO2 which contains 8.0g of Oxygen is:',
    options: ['0.25', '0.50', '1.0', '1.5'],
    correctAnswer: '0.25',
    explanation: '1 mole CO2 has 32g Oxygen. So 8.0g Oxygen is in 8/32 = 0.25 moles of CO2.'
  },
  {
    id: 'chem-basic-9',
    text: 'Isotopes are atoms of the same element that differ in their:',
    options: ['Atomic number', 'Number of protons', 'Number of neutrons', 'Chemical properties'],
    correctAnswer: 'Number of neutrons',
    explanation: 'Isotopes have the same atomic number (protons) but different mass numbers (neutrons).'
  },
  {
    id: 'chem-basic-10',
    text: 'The relative atomic mass of Chlorine is 35.5 amu. This value indicates that:',
    options: ['Chlorine has only one isotope', 'It is the average of isotopes based on abundance', 'Chlorine cannot exist as a gas', 'The mass of a chlorine atom is exactly 35.5g'],
    correctAnswer: 'It is the average of isotopes based on abundance',
    explanation: 'Relative atomic mass is the weighted average of the masses of naturally occurring isotopes.'
  },
  {
    id: 'chem-basic-11',
    text: 'One amu (atomic mass unit) is equal to:',
    options: ['1.66 x 10^-27 kg', '1.66 x 10^-24 kg', '6.02 x 10^-23 g', '1.0g'],
    correctAnswer: '1.66 x 10^-27 kg',
    explanation: '1 amu = 1/12th mass of C-12 = 1.661 x 10^-27 kg.'
  },
  {
    id: 'chem-basic-12',
    text: 'The empirical formula of Benzene (C6H6) is:',
    options: ['CH', 'C2H2', 'C6H6', 'CH2'],
    correctAnswer: 'CH',
    explanation: 'Empirical formula is the simplest whole-number ratio. 6:6 reduces to 1:1 (CH).'
  },
  {
    id: 'chem-basic-13',
    text: 'A compound contains 50% Sulfur and 50% Oxygen by mass. Its empirical formula is:',
    options: ['SO', 'SO2', 'SO3', 'S2O'],
    correctAnswer: 'SO2',
    explanation: 'Moles of S = 50/32 = 1.56. Moles of O = 50/16 = 3.125. Ratio S:O = 1.56:3.125 ≈ 1:2 (SO2).'
  },
  {
    id: 'chem-basic-14',
    text: 'Which of the following statements is true for the "Actual Yield" of a reaction?',
    options: ['It is always greater than theoretical yield', 'It is always equal to theoretical yield', 'It is usually less than theoretical yield', 'It is calculated from the balanced equation'],
    correctAnswer: 'It is usually less than theoretical yield',
    explanation: 'Due to side reactions, mechanical loss, or reversible reactions, actual yield is usually less.'
  },
  {
    id: 'chem-basic-15',
    text: 'Percentage yield is calculated as:',
    options: ['(Actual/Theoretical) * 100', '(Theoretical/Actual) * 100', 'Actual + Theoretical', 'Theoretical - Actual'],
    correctAnswer: '(Actual/Theoretical) * 100',
    explanation: 'Efficiency of a reaction is expressed as % yield.'
  },
  {
    id: 'chem-basic-16',
    text: 'How many moles of Hydrogen atoms are in 1 mole of Ethanol (C2H5OH)?',
    options: ['5', '6', '1', '46'],
    correctAnswer: '6',
    explanation: 'The formula has 5 + 1 = 6 hydrogen atoms per molecule.'
  },
  {
    id: 'chem-basic-17',
    text: 'The molar volume of any ideal gas at STP is:',
    options: ['22.414 cm³', '22.414 dm³', '2.24 dm³', '224 dm³'],
    correctAnswer: '22.414 dm³',
    explanation: 'Standard molar volume is 22.414 dm³ (or liters).'
  },
  {
    id: 'chem-basic-18',
    text: 'Avogadro’s number represents the number of entities in:',
    options: ['1g of substance', '1 mole of substance', '1 kg of substance', '22.4 dm³ of liquid'],
    correctAnswer: '1 mole of substance',
    explanation: '1 mole contains 6.022 x 10^23 entities.'
  },
  {
    id: 'chem-basic-19',
    text: 'The mass of 0.1 mole of Sodium (Na) is:',
    options: ['23g', '2.3g', '0.23g', '230g'],
    correctAnswer: '2.3g',
    explanation: 'Mass = Moles * Molar mass = 0.1 * 23 = 2.3g.'
  },
  {
    id: 'chem-basic-20',
    text: 'Which has the maximum number of atoms?',
    options: ['24g of Mg', '16g of O2', '2g of H2', '108g of Ag'],
    correctAnswer: '2g of H2',
    explanation: '24g Mg = 1 mole atoms. 16g O2 = 0.5 mole molecules = 1 mole atoms. 2g H2 = 1 mole molecules = 2 mole atoms. 108g Ag = 1 mole atoms.'
  },
  {
    id: 'chem-basic-21',
    text: 'An element having the same atomic number but different mass number is called an isotope. This was discovered by:',
    options: ['Dalton', 'Soddy', 'Rutherford', 'Bohr'],
    correctAnswer: 'Soddy',
    explanation: 'Frederick Soddy proposed the concept of isotopes.'
  },
  {
    id: 'chem-basic-22',
    text: 'The largest number of molecules are present in:',
    options: ['3.6g of H2O', '4.8g of C2H5OH', '2.8g of CO', '5.4g of N2O5'],
    correctAnswer: '3.6g of H2O',
    explanation: '3.6/18 = 0.2 mol. 4.8/46 ≈ 0.1 mol. 2.8/28 = 0.1 mol. 5.4/108 = 0.05 mol. H2O has the highest moles.'
  },
  {
    id: 'chem-basic-23',
    text: 'The number of isotopes of Carbon is:',
    options: ['2', '3', '4', '1'],
    correctAnswer: '3',
    explanation: 'Carbon has three isotopes: C-12, C-13, and C-14.'
  },
  {
    id: 'chem-basic-24',
    text: 'Which of the following is NOT a mono-isotopic element?',
    options: ['Gold', 'Fluorine', 'Iodine', 'Chlorine'],
    correctAnswer: 'Chlorine',
    explanation: 'Chlorine has two common isotopes (35 and 37). Au, F, and I are mono-isotopic.'
  },
  {
    id: 'chem-basic-25',
    text: 'A limiting reactant is a reactant that:',
    options: ['Is in excess', 'Controls the amount of product', 'Does not react', 'Is always the most expensive'],
    correctAnswer: 'Controls the amount of product',
    explanation: 'It is the reactant that limits the yield of the reaction.'
  },
  {
    id: 'chem-basic-26',
    text: 'One mole of SO2 contains:',
    options: ['6.02 x 10^23 atoms of Oxygen', '18.1 x 10^23 total atoms', '6.02 x 10^23 atoms of Sulfur', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: '1 mole SO2 has 1 mol S atoms (6.02x10^23) and 2 mol O atoms (12.04x10^23). Total = 3 * 6.02x10^23 = 18.1x10^23.'
  },
  {
    id: 'chem-basic-27',
    text: 'Molecular formula is related to empirical formula by:',
    options: ['M.F. = n * E.F.', 'E.F. = n * M.F.', 'M.F. = E.F. / n', 'M.F. = E.F. + n'],
    correctAnswer: 'M.F. = n * E.F.',
    explanation: 'Where n is a simple whole number (Molar mass / Empirical mass).'
  },
  {
    id: 'chem-basic-28',
    text: 'Combustion analysis is used to determine:',
    options: ['Atomic number', 'Molecular weight', 'Empirical formula of organic compounds', 'Isotopes'],
    correctAnswer: 'Empirical formula of organic compounds',
    explanation: 'It measures CO2 and H2O produced to find C and H percentages.'
  },
  {
    id: 'chem-basic-29',
    text: 'The volume occupied by 1.4g of Nitrogen gas at STP is:',
    options: ['2.24 dm³', '1.12 dm³', '11.2 dm³', '22.4 dm³'],
    correctAnswer: '1.12 dm³',
    explanation: '1.4g N2 = 1.4/28 = 0.05 moles. Volume = 0.05 * 22.4 = 1.12 dm³.'
  },
  {
    id: 'chem-basic-30',
    text: 'Which of the following is used as a standard for relative atomic mass?',
    options: ['H-1', 'O-16', 'C-12', 'N-14'],
    correctAnswer: 'C-12',
    explanation: 'Since 1961, C-12 is the international standard.'
  },
  {
    id: 'chem-basic-31',
    text: 'The number of ions in 1 mole of NaCl is:',
    options: ['6.02 x 10^23', '1.204 x 10^24', '3.01 x 10^23', 'None'],
    correctAnswer: '1.204 x 10^24',
    explanation: '1 mole NaCl contains 1 mole Na+ and 1 mole Cl- ions. Total = 2 * 6.022 x 10^23.'
  },
  {
    id: 'chem-basic-32',
    text: 'Isotopes differ in their physical properties because they have different:',
    options: ['Number of electrons', 'Atomic number', 'Mass number', 'Valency'],
    correctAnswer: 'Mass number',
    explanation: 'Physical properties like density and boiling point depend on mass.'
  },
  {
    id: 'chem-basic-33',
    text: 'Which of the following is a molecular ion?',
    options: ['NH4+', 'CH4+', 'SO4^2-', 'OH-'],
    correctAnswer: 'CH4+',
    explanation: 'A molecular ion is formed when a molecule loses or gains electrons (like CH4+, N2+).'
  },
  {
    id: 'chem-basic-34',
    text: 'The most common isotope of Hydrogen is:',
    options: ['Protium', 'Deuterium', 'Tritium', 'None'],
    correctAnswer: 'Protium',
    explanation: 'Protium (H-1) is approximately 99.98% of natural hydrogen.'
  },
  {
    id: 'chem-basic-35',
    text: 'In 2H2 + O2 -> 2H2O, if we start with 4 moles of H2 and 1 mole of O2, the limiting reactant is:',
    options: ['H2', 'O2', 'H2O', 'None'],
    correctAnswer: 'O2',
    explanation: 'Ratio needed is 2:1. For 4 moles H2, we need 2 moles O2. We only have 1 mole O2, so it is limiting.'
  },
  {
    id: 'chem-basic-36',
    text: 'The mass of 10^-3 moles of MgSO4 (Molar mass = 120) is:',
    options: ['120g', '12g', '1.2g', '0.12g'],
    correctAnswer: '0.12g',
    explanation: 'Mass = 10^-3 * 120 = 0.12g.'
  },
  {
    id: 'chem-basic-37',
    text: 'How many isotopes does Tin (Sn) have?',
    options: ['3', '9', '11', '5'],
    correctAnswer: '11',
    explanation: 'Tin has the greatest number of stable isotopes, which is 11.'
  },
  {
    id: 'chem-basic-38',
    text: 'The efficiency of a reaction can be improved by:',
    options: ['Increasing theoretical yield', 'Reducing experimental errors', 'Using more reactants', 'Decreasing temperature always'],
    correctAnswer: 'Reducing experimental errors',
    explanation: 'Better techniques and conditions improve actual yield towards theoretical yield.'
  },
  {
    id: 'chem-basic-39',
    text: 'Which of the following contains the maximum number of protons?',
    options: ['1 mole of Hydrogen', '1 mole of Helium', '1 mole of Oxygen', '1 mole of Carbon'],
    correctAnswer: '1 mole of Oxygen',
    explanation: 'Oxygen has 8 protons per atom. 1 mole has 8 * Na protons.'
  },
  {
    id: 'chem-basic-40',
    text: 'Mass spectrometer is used to determine:',
    options: ['Atomic number', 'Exact mass of isotopes and their abundance', 'Electronic configuration', 'Crystal structure'],
    correctAnswer: 'Exact mass of isotopes and their abundance',
    explanation: 'It separates isotopes based on their m/e ratio.'
  },
  {
    id: 'chem-basic-41',
    text: 'The number of covalent bonds in 1 mole of Methane (CH4) is:',
    options: ['Na', '4 * Na', '2 * Na', '0.5 * Na'],
    correctAnswer: '4 * Na',
    explanation: 'Each molecule has 4 C-H bonds. 1 mole has 4 moles of bonds.'
  },
  {
    id: 'chem-basic-42',
    text: 'The ratio of atoms in Vitamin C (C6H8O6) is:',
    options: ['6:8:6', '3:4:3', '1:1.33:1', 'All of above'],
    correctAnswer: '3:4:3',
    explanation: 'Simplest whole number ratio of 6:8:6 is 3:4:3.'
  },
  {
    id: 'chem-basic-43',
    text: 'The sum of the mole fractions of all components in a mixture is always:',
    options: ['0', '1', '100', 'Variable'],
    correctAnswer: '1',
    explanation: 'Mole fraction is a part of a whole, and sum is always unity.'
  },
  {
    id: 'chem-basic-44',
    text: 'One mole of electron has charge:',
    options: ['1.6 x 10^-19 C', '96500 C', '1 C', '6.02 x 10^23 C'],
    correctAnswer: '96500 C',
    explanation: '1 Faraday = charge of 1 mole electrons ≈ 96500 Coulombs.'
  },
  {
    id: 'chem-basic-45',
    text: 'Which of the following is a triatomic molecule?',
    options: ['H2', 'CO2', 'NH3', 'CH4'],
    correctAnswer: 'CO2',
    explanation: 'CO2 has 1 Carbon + 2 Oxygen = 3 atoms.'
  },
  {
    id: 'chem-basic-46',
    text: 'If the percentage of Carbon in a compound is 40% and its molar mass is 180, how many Carbon atoms are in one molecule?',
    options: ['3', '6', '12', '1'],
    correctAnswer: '6',
    explanation: 'Mass of C = 0.40 * 180 = 72. Number of atoms = 72 / 12 = 6.'
  },
  {
    id: 'chem-basic-47',
    text: 'The mass of a single atom of Carbon-12 is:',
    options: ['12g', '1.99 x 10^-23 g', '6.02 x 10^23 g', '1 amu'],
    correctAnswer: '1.99 x 10^-23 g',
    explanation: '12g / (6.022 x 10^23) ≈ 1.99 x 10^-23 g.'
  },
  {
    id: 'chem-basic-48',
    text: 'The empirical formula of a compound with 10% H and 90% C is:',
    options: ['CH', 'CH2', 'C3H4', 'CH4'],
    correctAnswer: 'C3H4',
    explanation: 'Moles C = 90/12 = 7.5. Moles H = 10/1 = 10. Ratio C:H = 7.5:10 = 3:4.'
  },
  {
    id: 'chem-basic-49',
    text: 'Which law is strictly followed in stoichiometric calculations?',
    options: ['Law of multiple proportions', 'Law of conservation of mass', 'Boyle’s law', 'Charle’s law'],
    correctAnswer: 'Law of conservation of mass',
    explanation: 'Balanced equations are based on the conservation of mass and atoms.'
  },
  {
    id: 'chem-basic-50',
    text: 'Number of molecules in 1 cm³ of any ideal gas at STP is called:',
    options: ['Avogadro number', 'Loschmidt number', 'Faraday number', 'Atomic number'],
    correctAnswer: 'Loschmidt number',
    explanation: 'Loschmidt number is the number of molecules per unit volume of an ideal gas at STP.'
  }
];
