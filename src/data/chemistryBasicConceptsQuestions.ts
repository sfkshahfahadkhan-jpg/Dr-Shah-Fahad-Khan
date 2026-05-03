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
  },
  {
    id: 'chem-basic-51',
    text: 'The number of grams of a substance that contains 6.022 x 10^23 particles is called its:',
    options: ['Atomic mass', 'Molar mass', 'Equivalent mass', 'Molecular mass'],
    correctAnswer: 'Molar mass',
    explanation: 'Molar mass is the mass of one mole of a substance.'
  },
  {
    id: 'chem-basic-52',
    text: 'How many atoms are in 1.0 mole of Phosphorus (P4)?',
    options: ['6.022 x 10^23', '2.409 x 10^24', '1.204 x 10^24', '4'],
    correctAnswer: '2.409 x 10^24',
    explanation: '1 mole P4 has 4 * Na atoms = 24.088 x 10^23.'
  },
  {
    id: 'chem-basic-53',
    text: 'A compound with molecular mass 180 has empirical formula CH2O. Its molecular formula is:',
    options: ['C6H12O6', 'C3H6O3', 'C12H24O12', 'C2H4O2'],
    correctAnswer: 'C6H12O6',
    explanation: 'E.F. mass = 12+2+16 = 30. n = 180/30 = 6. M.F. = 6 * (CH2O) = C6H12O6.'
  },
  {
    id: 'chem-basic-54',
    text: 'Which of the following contains the greatest mass of Chlorine?',
    options: ['1 mole Cl2', '1 mole HCl', '1 mole NaCl', '1 mole CCl4'],
    correctAnswer: '1 mole CCl4',
    explanation: '1 mole CCl4 has 4 moles of Cl atoms (4 * 35.5 = 142g).'
  },
  {
    id: 'chem-basic-55',
    text: 'What is the mass of 0.5 mole of CO2?',
    options: ['22g', '44g', '11g', '88g'],
    correctAnswer: '22g',
    explanation: 'Mass = 0.5 * 44 = 22g.'
  },
  {
    id: 'chem-basic-56',
    text: 'The percentage of Carbon in Calcium Carbonate (CaCO3) is:',
    options: ['12%', '40%', '48%', '60%'],
    correctAnswer: '12%',
    explanation: 'Molar mass = 40+12+48 = 100. %C = (12/100) * 100 = 12%.'
  },
  {
    id: 'chem-basic-57',
    text: 'How many moles of ions are in 1 mole of Al2(SO4)3?',
    options: ['2', '3', '5', '1'],
    correctAnswer: '5',
    explanation: 'It dissociates into 2 Al³⁺ and 3 SO₄²⁻ ions. Total 2+3=5.'
  },
  {
    id: 'chem-basic-58',
    text: 'Which of the following is a quantitative statement about a chemical reaction?',
    options: ['Hydrogen reacts with Oxygen', '2g of H2 reacts with 16g of O2 to give 18g of H2O', 'Water is formed', 'Heat is released'],
    correctAnswer: '2g of H2 reacts with 16g of O2 to give 18g of H2O',
    explanation: 'Quantitative statements include numerical values.'
  },
  {
    id: 'chem-basic-59',
    text: 'The mass of one molecule of Water (H2O) is:',
    options: ['18g', '3.0 x 10^-23 g', '6.0 x 10^-23 g', '18 amu'],
    correctAnswer: '3.0 x 10^-23 g',
    explanation: '18 / (6.022 x 10^23) ≈ 2.99 x 10^-23 g.'
  },
  {
    id: 'chem-basic-60',
    text: 'One mole of H2O contains _____ moles of atoms.',
    options: ['1', '2', '3', '6'],
    correctAnswer: '3',
    explanation: '2 moles of H and 1 mole of O atoms.'
  },
  {
    id: 'chem-basic-61',
    text: 'Standard temperature and pressure (STP) refers to:',
    options: ['25°C and 1 atm', '0°C and 1 atm', '273 K and 101325 Pa', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: '0°C = 273.15 K; 1 atm = 101325 Pa.'
  },
  {
    id: 'chem-basic-62',
    text: 'The molar mass of Glucose (C6H12O6) is:',
    options: ['100', '180', '342', '60'],
    correctAnswer: '180',
    explanation: '6*12 + 12*1 + 6*16 = 72 + 12 + 96 = 180.'
  },
  {
    id: 'chem-basic-63',
    text: 'The number of molecules in 2.8g of Carbon monoxide (CO) is:',
    options: ['6.0 x 10^23', '6.0 x 10^22', '1.2 x 10^23', '3.0 x 10^22'],
    correctAnswer: '6.0 x 10^22',
    explanation: '2.8/28 = 0.1 moles. 0.1 * 6.022 x 10^23 = 6.022 x 10^22.'
  },
  {
    id: 'chem-basic-64',
    text: 'Stoichiometry is only valid for reactions that:',
    options: ['Go to completion', 'Are reversible', 'Are very fast', 'Occur in gas phase'],
    correctAnswer: 'Go to completion',
    explanation: 'Ideal calculations assume all reactants convert to products.'
  },
  {
    id: 'chem-basic-65',
    text: 'What is the number of moles of solute in 500 cm³ of 2.0 M solution?',
    options: ['1.0', '2.0', '0.5', '4.0'],
    correctAnswer: '1.0',
    explanation: 'Moles = Molarity * Volume(L) = 2.0 * 0.5 = 1.0.'
  },
  {
    id: 'chem-basic-66',
    text: 'Which is a poly-isotopic element?',
    options: ['Fluorine', 'Sodium', 'Gold', 'Nickel'],
    correctAnswer: 'Nickel',
    explanation: 'Nickel has 5 stable isotopes. F, Na, and Au are mono-isotopic.'
  },
  {
    id: 'chem-basic-67',
    text: 'The mass of 1 mole of P4O10 is (P=31, O=16):',
    options: ['140g', '284g', '424g', '250g'],
    correctAnswer: '284g',
    explanation: '4*31 + 10*16 = 124 + 160 = 284g.'
  },
  {
    id: 'chem-basic-68',
    text: 'Percentage of Calcium in CaCO3 (MW=100) is:',
    options: ['40%', '12%', '48%', '10%'],
    correctAnswer: '40%',
    explanation: 'Ca mass = 40. % = 40/100 = 40%.'
  },
  {
    id: 'chem-basic-69',
    text: 'Number of Oxygen atoms in 0.1 mole of Na2CO3.10H2O is:',
    options: ['1.3 Na', '0.3 Na', '1.0 Na', '0.1 Na'],
    correctAnswer: '1.3 Na',
    explanation: '1 formula unit has 3 + 10 = 13 Oxygen atoms. 0.1 mole has 1.3 moles of atoms.'
  },
  {
    id: 'chem-basic-70',
    text: 'Atomic mass of Magnesium is 24 amu. What is its gram-atomic mass?',
    options: ['24g', '12g', '24 kg', '0.24g'],
    correctAnswer: '24g',
    explanation: 'Gram-atomic mass is the atomic mass expressed in grams.'
  },
  {
    id: 'chem-basic-71',
    text: 'Which has the least number of molecules?',
    options: ['2g of H2', '16g of O2', '28g of N2', '18g of H2O'],
    correctAnswer: '16g of O2',
    explanation: '2g H2 = 1 mol. 16g O2 = 0.5 mol. 28g N2 = 1 mol. 18g H2O = 1 mol. O2 has the least moles.'
  },
  {
    id: 'chem-basic-72',
    text: 'How many electrons are in 1.0g of Hydrogen (H-1)?',
    options: ['6.02 x 10^23', '1.20 x 10^24', '3.01 x 10^23', 'None'],
    correctAnswer: '6.02 x 10^23',
    explanation: '1.0g H = 1 mole H atoms. Each atom has 1 electron.'
  },
  {
    id: 'chem-basic-73',
    text: 'The volume of 1g of Hydrogen gas at STP is:',
    options: ['11.2 dm³', '22.4 dm³', '5.6 dm³', '1.12 dm³'],
    correctAnswer: '11.2 dm³',
    explanation: '1g H2 = 1/2 = 0.5 moles. Volume = 0.5 * 22.4 = 11.2 dm³.'
  },
  {
    id: 'chem-basic-74',
    text: 'The mass of Oxygen produced by the decomposition of 12.25g of KClO3 (MW=122.5) is:',
    options: ['4.8g', '3.2g', '1.6g', '9.6g'],
    correctAnswer: '4.8g',
    explanation: '2KClO3 -> 2KCl + 3O2. 12.25g = 0.1 moles KClO3. Moles O2 = (3/2) * 0.1 = 0.15. Mass = 0.15 * 32 = 4.8g.'
  },
  {
    id: 'chem-basic-75',
    text: 'Which is a triatomic molecule?',
    options: ['He', 'Cl2', 'O3', 'P4'],
    correctAnswer: 'O3',
    explanation: 'Ozone has 3 atoms.'
  },
  {
    id: 'chem-basic-76',
    text: 'The mass of CO2 produced by burning 12g of pure Carbon is:',
    options: ['12g', '24g', '44g', '32g'],
    correctAnswer: '44g',
    explanation: 'C + O2 -> CO2. 1 mole C (12g) gives 1 mole CO2 (44g).'
  },
  {
    id: 'chem-basic-77',
    text: 'Isotopes of the same element have the same:',
    options: ['Chemical properties', 'Electronic configuration', 'Position in periodic table', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These depend on the atomic number (protons), which is same for isotopes.'
  },
  {
    id: 'chem-basic-78',
    text: 'The number of neutrons in 1 mole of Deuterium (H-2) is:',
    options: ['Na', '2 Na', 'Zero', '0.5 Na'],
    correctAnswer: 'Na',
    explanation: 'Each D atom has 1 neutron.'
  },
  {
    id: 'chem-basic-79',
    text: 'Avogadro’s number of atoms are present in:',
    options: ['16g O', '16g O2', '32g O', '8g O'],
    correctAnswer: '16g O',
    explanation: '16g of O atoms is 1 mole.'
  },
  {
    id: 'chem-basic-80',
    text: 'The number of moles of Nitrogen in 7g is:',
    options: ['0.25 mol of N2', '0.5 mol of N2', '0.5 mol of N', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: '7g N2 = 7/28 = 0.25 mol. 7g N atoms = 7/14 = 0.5 mol.'
  },
  {
    id: 'chem-basic-81',
    text: 'The number of moles of Sulphur atoms in 1 mole of H2SO4 is:',
    options: ['1', '2', '4', '7'],
    correctAnswer: '1',
    explanation: 'The formula has 1 S atom per molecule.'
  },
  {
    id: 'chem-basic-82',
    text: 'Which contains more atoms?',
    options: ['1 mole Cl2', '1 mole Cl', 'Same', 'Cannot be determined'],
    correctAnswer: '1 mole Cl2',
    explanation: '1 mole Cl2 has 2 * Na atoms; 1 mole Cl has 1 * Na atoms.'
  },
  {
    id: 'chem-basic-83',
    text: 'The percentage of Oxygen in NaOH (MW=40) is:',
    options: ['40%', '16%', '20%', '50%'],
    correctAnswer: '40%',
    explanation: 'O mass = 16. % = 16/40 = 0.4 = 40%.'
  },
  {
    id: 'chem-basic-84',
    text: 'Molar volume of H2 at 0°C and 1 atm is:',
    options: ['22.414 dm³', '11.2 dm³', '2.24 dm³', '0.224 dm³'],
    correctAnswer: '22.414 dm³',
    explanation: 'Standard molar volume.'
  },
  {
    id: 'chem-basic-85',
    text: 'Mass of 1 mole of electron is:',
    options: ['0.548 mg', '1.008 mg', '9.11 mg', '0.000548 g'],
    correctAnswer: '0.548 mg',
    explanation: '0.000548g = 0.548 mg.'
  },
  {
    id: 'chem-basic-86',
    text: 'Actual yield is always _____ than theoretical yield.',
    options: ['Greater', 'Smaller', 'Equal', 'Twice'],
    correctAnswer: 'Smaller',
    explanation: 'Due to inefficiencies in practice.'
  },
  {
    id: 'chem-basic-87',
    text: 'Molecular formula of glucose is C6H12O6. Its empirical formula is:',
    options: ['CH2O', 'CHO', 'C2H4O2', 'C3H6O3'],
    correctAnswer: 'CH2O',
    explanation: 'Simplest ratio 6:12:6 -> 1:2:1.'
  },
  {
    id: 'chem-basic-88',
    text: 'How many atoms are in 18g of Water?',
    options: ['6.02 x 10^23', '1.20 x 10^24', '1.81 x 10^24', '3.0'],
    correctAnswer: '1.81 x 10^24',
    explanation: '1 mole H2O has 3 * Na atoms = 18.066 x 10^23.'
  },
  {
    id: 'chem-basic-89',
    text: 'Mass of 1 mole of NH3 is:',
    options: ['17g', '14g', '15g', '3g'],
    correctAnswer: '17g',
    explanation: '14 + 3*1 = 17.'
  },
  {
    id: 'chem-basic-90',
    text: 'Relative atomic mass of O-16 is:',
    options: ['16 amu', '16g', '8 amu', '32 amu'],
    correctAnswer: '16 amu',
    explanation: 'Atomic mass units.'
  },
  {
    id: 'chem-basic-91',
    text: 'One mole of Carbon contains _____ atoms.',
    options: ['6.02 x 10^23', '1.2 x 10^24', '12', '1.0'],
    correctAnswer: '6.02 x 10^23',
    explanation: 'Definition of a mole.'
  },
  {
    id: 'chem-basic-92',
    text: '22.4 dm³ of CO2 at STP has mass:',
    options: ['44g', '22g', '11g', '88g'],
    correctAnswer: '44g',
    explanation: '1 mole CO2 = 44g.'
  },
  {
    id: 'chem-basic-93',
    text: 'Which of the following is used for combustion analysis?',
    options: ['Mass spectrometer', 'Absorption tubes (KOH, Mg(ClO4)2)', 'Filter paper', 'Centrifuge'],
    correctAnswer: 'Absorption tubes (KOH, Mg(ClO4)2)',
    explanation: 'KOH absorbs CO2; Mg(ClO4)2 absorbs H2O.'
  },
  {
    id: 'chem-basic-94',
    text: 'Limiting reactant is based on:',
    options: ['Mass of reactants', 'Moles of reactants', 'Balanced chemical equation', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'It is determined by comparing mole ratios from the equation.'
  },
  {
    id: 'chem-basic-95',
    text: 'Number of electrons in 1 mole of O2- ion is:',
    options: ['8 Na', '10 Na', '16 Na', '18 Na'],
    correctAnswer: '10 Na',
    explanation: 'Oxygen (8e) + 2e (gain) = 10e.'
  },
  {
    id: 'chem-basic-96',
    text: 'Percentage of S in H2SO4 (MW=98) is:',
    options: ['32.6%', '32.1%', '40.0%', '64.0%'],
    correctAnswer: '32.6%',
    explanation: '32/98 = 0.3265 = 32.65%.'
  },
  {
    id: 'chem-basic-97',
    text: 'Mass of 1 mole of NaCl is:',
    options: ['58.5g', '58.5 amu', '23g', '35.5g'],
    correctAnswer: '58.5g',
    explanation: '23 + 35.5 = 58.5.'
  },
  {
    id: 'chem-basic-98',
    text: 'One mole of any gas at STP occupies:',
    options: ['22.4 dm³', '22400 cm³', '0.0224 m³', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Conversions of volume units.'
  },
  {
    id: 'chem-basic-99',
    text: 'The empirical formula of CH3COOH (Acetic acid) is:',
    options: ['CH2O', 'CHO', 'C2H4O2', 'CH3'],
    correctAnswer: 'CH2O',
    explanation: 'Formula C2H4O2 -> ratio 1:2:1.'
  },
  {
    id: 'chem-basic-100',
    text: 'Efficiency of a reaction is measured by:',
    options: ['Theoretical yield', 'Actual yield', 'Percentage yield', 'Amount of reactants'],
    correctAnswer: 'Percentage yield',
    explanation: '% Yield = (Actual/Theoretical) * 100.'
  }
];

