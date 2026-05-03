import { Question } from '../types';

export const CHEMISTRY_ELECTROCHEMISTRY_QUIZ: Question[] = [
  {
    id: 'chem-elec-1',
    text: 'Electrochemistry is the study of the interconversion of _____ and _____ energy.',
    options: ['Chemical, Electrical', 'Mechanical, Electrical', 'Thermal, Chemical', 'Nuclear, Electrical'],
    correctAnswer: 'Chemical, Electrical',
    explanation: 'Deals with electricity and chemical changes.'
  },
  {
    id: 'chem-elec-2',
    text: 'Loss of electrons is called:',
    options: ['Reduction', 'Oxidation', 'Neutralization', 'Ionization'],
    correctAnswer: 'Oxidation',
    explanation: 'LEO: Loss of Electrons is Oxidation.'
  },
  {
    id: 'chem-elec-3',
    text: 'Gain of electrons is called:',
    options: ['Oxidation', 'Reduction', 'Displacement', 'Substitution'],
    correctAnswer: 'Reduction',
    explanation: 'GER: Gain of Electrons is Reduction.'
  },
  {
    id: 'chem-elec-4',
    text: 'The oxidation state of Oxygen in most compounds is:',
    options: ['0', '+1', '-2', '-1'],
    correctAnswer: '-2',
    explanation: 'Except in peroxides (-1) and with Fluorine (+2).'
  },
  {
    id: 'chem-elec-5',
    text: 'The oxidation state of free elements like O2, Na, or Cl2 is:',
    options: ['+1', '-1', '0', 'Variable'],
    correctAnswer: '0',
    explanation: 'Elemental state always has zero oxidation number.'
  },
  {
    id: 'chem-elec-6',
    text: 'A substance that oxidizes others and itself gets reduced is an:',
    options: ['Reducing agent', 'Oxidizing agent', 'Catalyst', 'Electrolyte'],
    correctAnswer: 'Oxidizing agent',
    explanation: 'It accepts electrons from others.'
  },
  {
    id: 'chem-elec-7',
    text: 'A substance that reduces others and itself gets oxidized is a:',
    options: ['Oxidizing agent', 'Reducing agent', 'Indicator', 'Electrode'],
    correctAnswer: 'Reducing agent',
    explanation: 'It donates electrons to others.'
  },
  {
    id: 'chem-elec-8',
    text: 'In an electrolytic cell, oxidation occurs at the:',
    options: ['Anode', 'Cathode', 'Salt bridge', 'Solution'],
    correctAnswer: 'Anode',
    explanation: 'Anode is the site of oxidation regardless of the cell type.'
  },
  {
    id: 'chem-elec-9',
    text: 'In an electrolytic cell, the cathode is _____ charged.',
    options: ['Positively', 'Negatively', 'Neutral', 'Variable'],
    correctAnswer: 'Negatively',
    explanation: 'It attracts cations (+) for reduction.'
  },
  {
    id: 'chem-elec-10',
    text: 'In a Galvanic cell, the anode is _____ charged.',
    options: ['Positively', 'Negatively', 'Neutral', 'None'],
    correctAnswer: 'Negatively',
    explanation: 'Electrons are released here and move to the cathode.'
  },
  {
    id: 'chem-elec-11',
    text: 'Faraday\'s First Law of Electrolysis states that the mass of substance deposited is _____ to the quantity of electricity.',
    options: ['Inversely proportional', 'Directly proportional', 'Equal', 'Logarithmically related'],
    correctAnswer: 'Directly proportional',
    explanation: 'm = ZIt.'
  },
  {
    id: 'chem-elec-12',
    text: 'The amount of electricity required to deposit one equivalent weight of any substance is:',
    options: ['1 Coulomb', '1 Faraday (96500 C)', '1 Ampere', '1 Volt'],
    correctAnswer: '1 Faraday (96500 C)',
    explanation: 'Equivalent to the charge of one mole of electrons.'
  },
  {
    id: 'chem-elec-13',
    text: 'A salt bridge is used in Galvanic cells to:',
    options: ['Complete the circuit', 'Maintain electrical neutrality', 'Prevent mixing of electrolytes', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'It contains an inert electrolyte like KCl.'
  },
  {
    id: 'chem-elec-14',
    text: 'The potential of the Standard Hydrogen Electrode (SHE) is arbitrarily taken as:',
    options: ['1.0 V', '0.0 V', '0.76 V', '-0.44 V'],
    correctAnswer: '0.0 V',
    explanation: 'Used as a reference for measuring other electrode potentials.'
  },
  {
    id: 'chem-elec-15',
    text: 'A list of elements arranged in order of their standard reduction potentials is:',
    options: ['Periodic table', 'Electrochemical series', 'Activity series', 'Atomic series'],
    correctAnswer: 'Electrochemical series',
    explanation: 'Helpful for predicting redox behavior.'
  },
  {
    id: 'chem-elec-16',
    text: 'Metals with low reduction potentials (highly negative) are strong:',
    options: ['Oxidizing agents', 'Reducing agents', 'Acids', 'Bases'],
    correctAnswer: 'Reducing agents',
    explanation: 'They lose electrons easily (e.g., Li, K, Na).'
  },
  {
    id: 'chem-elec-17',
    text: 'The EMF of a cell is calculated as:',
    options: ['E_cathode - E_anode', 'E_anode - E_cathode', 'E_cathode + E_anode', 'E_cathode / E_anode'],
    correctAnswer: 'E_cathode - E_anode',
    explanation: 'Using reduction potentials.'
  },
  {
    id: 'chem-elec-18',
    text: 'A spontaneous redox reaction has a _____ cell potential (E_cell).',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Positive',
    explanation: 'ΔG = -nFE_cell; positive E means negative ΔG.'
  },
  {
    id: 'chem-elec-19',
    text: 'Standard conditions for electrode potential measurement are:',
    options: ['1 M concentration', '298 K temperature', '1 atm pressure (for gases)', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Ensures consistency in values.'
  },
  {
    id: 'chem-elec-20',
    text: 'The Nernst Equation relates cell potential to:',
    options: ['Temperature', 'Concentration of ions', 'Standard potential', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'E = E° - (RT/nF)lnQ.'
  },
  {
    id: 'chem-elec-21',
    text: 'An example of a primary cell (non-rechargeable) is:',
    options: ['Lead storage battery', 'Dry cell (Leclanché cell)', 'Nickel-cadmium cell', 'Lithium-ion battery'],
    correctAnswer: 'Dry cell (Leclanché cell)',
    explanation: 'Once the chemicals are consumed, it cannot be reused.'
  },
  {
    id: 'chem-elec-22',
    text: 'The electrolyte used in a Lead Storage Battery is:',
    options: ['Dilute HCl', 'Concentrated H2SO4 (approx 38%)', 'KOH', 'NH4Cl'],
    correctAnswer: 'Concentrated H2SO4 (approx 38%)',
    explanation: 'The density of the acid decreases during discharge.'
  },
  {
    id: 'chem-elec-23',
    text: 'Corrosion is an _____ process.',
    options: ['Electrochemical', 'Photochemical', 'Nuclear', 'Physical'],
    correctAnswer: 'Electrochemical',
    explanation: 'Involves oxidation of metals (e.g., rusting of iron).'
  },
  {
    id: 'chem-elec-24',
    text: 'Rusting of iron requires both _____ and _____.',
    options: ['Water, Nitrogen', 'Oxygen, Water', 'Oxygen, Carbon', 'Salt, Light'],
    correctAnswer: 'Oxygen, Water',
    explanation: 'Fe -> Fe₂O₃.xH₂O.'
  },
  {
    id: 'chem-elec-25',
    text: 'Sacrificial protection (Galvanization) involves coating iron with:',
    options: ['Copper', 'Zinc', 'Tin', 'Silver'],
    correctAnswer: 'Zinc',
    explanation: 'Zinc is more reactive and oxidizes instead of iron.'
  },
  {
    id: 'chem-elec-26',
    text: 'Fuel cells convert chemical energy of _____ directly into electricity.',
    options: ['Gasoline', 'Hydrogen/Oxygen', 'Coal', 'Wood'],
    correctAnswer: 'Hydrogen/Oxygen',
    explanation: 'Highly efficient and clean; water is the only byproduct.'
  },
  {
    id: 'chem-elec-27',
    text: 'Which is a strong electrolyte?',
    options: ['Acetic acid', 'NaCl', 'Ammonia', 'Pure water'],
    correctAnswer: 'NaCl',
    explanation: 'Completely dissociates into ions in water.'
  },
  {
    id: 'chem-elec-28',
    text: 'The unit of conductance is:',
    options: ['Ohm', 'Siemens (S)', 'Ampere', 'Watt'],
    correctAnswer: 'Siemens (S)',
    explanation: 'Reciprocal of Ohm (mho).'
  },
  {
    id: 'chem-elec-29',
    text: 'Molar conductivity _____ with dilution.',
    options: ['Increases', 'Decreases', 'Remains same', 'Drops to zero'],
    correctAnswer: 'Increases',
    explanation: 'Due to increase in degree of dissociation and mobility of ions.'
  },
  {
    id: 'chem-elec-30',
    text: 'Kohlrausch\'s Law is used to calculate _____ at infinite dilution.',
    options: ['Molar mass', 'Molar conductivity', 'Concentration', 'Solubility'],
    correctAnswer: 'Molar conductivity',
    explanation: 'States that total conductivity is the sum of individual ion conductivities.'
  },
  {
    id: 'chem-elec-31',
    text: 'What is the oxidation number of Sulfur in H2SO4?',
    options: ['+4', '+6', '-2', '0'],
    correctAnswer: '+6',
    explanation: '2(+1) + S + 4(-2) = 0; S = +6.'
  },
  {
    id: 'chem-elec-32',
    text: 'What is the oxidation number of Chromium in K2Cr2O7?',
    options: ['+3', '+6', '+7', '0'],
    correctAnswer: '+6',
    explanation: '2(+1) + 2Cr + 7(-2) = 0; 2Cr = 12; Cr = +6.'
  },
  {
    id: 'chem-elec-33',
    text: 'In the reaction Zn + Cu²⁺ -> Zn²⁺ + Cu, which species is oxidized?',
    options: ['Zn', 'Cu²⁺', 'Zn²⁺', 'Cu'],
    correctAnswer: 'Zn',
    explanation: 'Zn loses two electrons.'
  },
  {
    id: 'chem-elec-34',
    text: 'Electrolysis of molten NaCl produces _____ at the cathode.',
    options: ['Chlorine gas', 'Sodium metal', 'Hydrogen gas', 'Oxygen gas'],
    correctAnswer: 'Sodium metal',
    explanation: 'Na+ + e- -> Na.'
  },
  {
    id: 'chem-elec-35',
    text: 'Electrolysis of aqueous NaCl produces _____ at the cathode.',
    options: ['Sodium metal', 'Hydrogen gas', 'Oxygen gas', 'NaOH only'],
    correctAnswer: 'Hydrogen gas',
    explanation: 'H+ is reduced more easily than Na+.'
  },
  {
    id: 'chem-elec-36',
    text: 'The process of coating a metal with another metal using electricity is:',
    options: ['Electropolishing', 'Electroplating', 'Electrotanning', 'Electroforming'],
    correctAnswer: 'Electroplating',
    explanation: 'Used for decoration or protection.'
  },
  {
    id: 'chem-elec-37',
    text: 'In silver plating, the object to be plated is made the:',
    options: ['Anode', 'Cathode', 'Electrolyte', 'External circuit'],
    correctAnswer: 'Cathode',
    explanation: 'Ag+ ions move to the cathode to be deposited as Ag metal.'
  },
  {
    id: 'chem-elec-38',
    text: 'The Daniell cell uses which two half-cells?',
    options: ['Zn/Zn²⁺ and Cu/Cu²⁺', 'Fe/Fe²⁺ and Sn/Sn²⁺', 'Pb/Pb²⁺ and H/H⁺', 'None'],
    correctAnswer: 'Zn/Zn²⁺ and Cu/Cu²⁺',
    explanation: 'Classic example of a Galvanic cell.'
  },
  {
    id: 'chem-elec-39',
    text: 'What is the voltage of a standard Daniell cell?',
    options: ['1.5 V', '1.1 V', '2.0 V', '0.5 V'],
    correctAnswer: '1.1 V',
    explanation: '0.34 V - (-0.76 V) = 1.10 V.'
  },
  {
    id: 'chem-elec-40',
    text: 'Which is a secondary cell (rechargeable)?',
    options: ['Dry cell', 'Mercury cell', 'Nickel-cadmium cell', 'Alkaline cell'],
    correctAnswer: 'Nickel-cadmium cell',
    explanation: 'Ni-Cd cells can be recharged many times.'
  },
  {
    id: 'chem-elec-41',
    text: 'One Faraday is equal to the charge of _____ electrons.',
    options: ['1', '6.022 x 10²³', '1.6 x 10⁻¹⁹', '1000'],
    correctAnswer: '6.022 x 10²³',
    explanation: 'Charge of one mole of electrons.'
  },
  {
    id: 'chem-elec-42',
    text: 'Which metal cannot displace hydrogen from dilute acids?',
    options: ['Zn', 'Fe', 'Cu', 'Al'],
    correctAnswer: 'Cu',
    explanation: 'Copper is below hydrogen in the electrochemical series.'
  },
  {
    id: 'chem-elec-43',
    text: 'Which is the strongest oxidizing agent?',
    options: ['F2', 'Cl2', 'Li', 'Na'],
    correctAnswer: 'F2',
    explanation: 'Fluorine has the highest standard reduction potential.'
  },
  {
    id: 'chem-elec-44',
    text: 'Which is the strongest reducing agent?',
    options: ['F2', 'Li', 'Au', 'Pt'],
    correctAnswer: 'Li',
    explanation: 'Lithium has the most negative reduction potential.'
  },
  {
    id: 'chem-elec-45',
    text: 'Electrolysis of water produces H2 and O2 in the molar ratio of:',
    options: ['1:1', '2:1', '1:2', '3:1'],
    correctAnswer: '2:1',
    explanation: '2H2O -> 2H2 + O2.'
  },
  {
    id: 'chem-elec-46',
    text: 'Standard electrode potential depends on:',
    options: ['Temperature', 'Pressure of gas', 'Concentration', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Standard conditions are defined as 25°C, 1 M, 1 atm.'
  },
  {
    id: 'chem-elec-47',
    text: 'The cathode in a dry cell is made of:',
    options: ['Zinc', 'Carbon (Graphite)', 'Lead', 'Iron'],
    correctAnswer: 'Carbon (Graphite)',
    explanation: 'Surrounded by MnO2 and carbon powder.'
  },
  {
    id: 'chem-elec-48',
    text: 'The anode in a dry cell is made of:',
    options: ['Zinc container', 'Carbon rod', 'Copper wire', 'Lead plate'],
    correctAnswer: 'Zinc container',
    explanation: 'Zinc oxidizes during use.'
  },
  {
    id: 'chem-elec-49',
    text: 'Lithium-ion batteries are popular for portable electronics because of their:',
    options: ['Low cost', 'High energy density and lightweight', 'Large size', 'Toxic components'],
    correctAnswer: 'High energy density and lightweight',
    explanation: 'Ideal for phones and laptops.'
  },
  {
    id: 'chem-elec-50',
    text: 'Aluminum is extracted from alumina by the _____ process.',
    options: ['Haber', 'Hall-Héroult', 'Contact', 'Solvay'],
    correctAnswer: 'Hall-Héroult',
    explanation: 'Electrolytic reduction in molten cryolite.'
  },
  {
    id: 'chem-elec-51',
    text: 'Oxidation Number of Cl in HClO4 is:',
    options: ['+1', '+3', '+5', '+7'],
    correctAnswer: '+7',
    explanation: 'Perchloric acid.'
  },
  {
    id: 'chem-elec-52',
    text: 'Oxidation Number of Mn in KMnO4 is:',
    options: ['+2', '+4', '+6', '+7'],
    correctAnswer: '+7',
    explanation: 'Permanganate ion.'
  },
  {
    id: 'chem-elec-53',
    text: 'A reaction where oxidation and reduction occur simultaneously is:',
    options: ['Neutralization', 'Redox', 'Decomposition', 'Combustion'],
    correctAnswer: 'Redox',
    explanation: 'Reduction-Oxidation.'
  },
  {
    id: 'chem-elec-54',
    text: 'The electrode where electrons enter the electrolyte is:',
    options: ['Anode', 'Cathode', 'Salt bridge', 'Terminal'],
    correctAnswer: 'Cathode',
    explanation: 'Cations move to cathode to take electrons.'
  },
  {
    id: 'chem-elec-55',
    text: 'The electrode where electrons leave the electrolyte is:',
    options: ['Cathode', 'Anode', 'Voltmeter', 'Switch'],
    correctAnswer: 'Anode',
    explanation: 'Anions move to anode to give up electrons.'
  },
  {
    id: 'chem-elec-56',
    text: 'Non-conductors of electricity are called:',
    options: ['Electrolytes', 'Insulators (Non-electrolytes)', 'Semiconductors', 'Metals'],
    correctAnswer: 'Insulators (Non-electrolytes)',
    explanation: 'Example: Sugar solution, Benzene.'
  },
  {
    id: 'chem-elec-57',
    text: 'Conductance in metals is due to movement of _____ while in electrolytes it is due to _____.',
    options: ['Ions, Electrons', 'Electrons, Ions', 'Protons, Neutrons', 'Atoms, Molecules'],
    correctAnswer: 'Electrons, Ions',
    explanation: 'Electronic vs. Ionic conduction.'
  },
  {
    id: 'chem-elec-58',
    text: 'Degree of ionization (α) of a weak electrolyte _____ with dilution.',
    options: ['Increases', 'Decreases', 'Stay same', 'Zeroes'],
    correctAnswer: 'Increases',
    explanation: 'Ostwald\'s Dilution Law.'
  },
  {
    id: 'chem-elec-59',
    text: 'Specific conductivity _____ with dilution.',
    options: ['Increases', 'Decreases', 'Stay same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Number of ions per unit volume decreases.'
  },
  {
    id: 'chem-elec-60',
    text: 'Electrochemical equivalent (Z) is the mass deposited by _____ of electricity.',
    options: ['1 Faraday', '1 Coulomb', '1 Ampere', '1 Volt'],
    correctAnswer: '1 Coulomb',
    explanation: 'm = Zq.'
  },
  {
    id: 'chem-elec-61',
    text: 'In the electrolysis of aqueous CuSO4 using inert electrodes, _____ gas is evolved at the anode.',
    options: ['H2', 'O2', 'SO2', 'Cu vapor'],
    correctAnswer: 'O2',
    explanation: 'Water is oxidized in preference to sulfate.'
  },
  {
    id: 'chem-elec-62',
    text: 'In the electrolysis of aqueous CuSO4 using Copper electrodes, the anode:',
    options: ['Gains weight', 'Loses weight', 'Stays same', 'Evolves O2'],
    correctAnswer: 'Loses weight',
    explanation: 'Copper dissolves into the solution: Cu -> Cu²⁺ + 2e⁻.'
  },
  {
    id: 'chem-elec-63',
    text: 'Standard EMF of a cell is zero if Kc is:',
    options: ['0', '1', '10', 'Infinity'],
    correctAnswer: '1',
    explanation: 'E° = (RT/nF)ln(Kc); ln(1) = 0.'
  },
  {
    id: 'chem-elec-64',
    text: 'The spontaneity of a reaction can be predicted by:',
    options: ['ΔG', 'E_cell', 'Both A and B', 'Atomic mass'],
    correctAnswer: 'Both A and B',
    explanation: 'ΔG < 0 or E_cell > 0 for spontaneity.'
  },
  {
    id: 'chem-elec-65',
    text: 'A metal can displace another metal from its salt solution if it is _____ in the electrochemical series.',
    options: ['Higher', 'Lower', 'Heavier', 'More expensive'],
    correctAnswer: 'Higher',
    explanation: 'More reactive metals displace less reactive ones.'
  },
  {
    id: 'chem-elec-66',
    text: 'Which metal will displace Cu from CuSO4 solution?',
    options: ['Ag', 'Au', 'Zn', 'Pt'],
    correctAnswer: 'Zn',
    explanation: 'Zinc is more reactive than copper.'
  },
  {
    id: 'chem-elec-67',
    text: 'A concentration cell is one where the two half-cells are _____ but have different _____.',
    options: ['Same, Temperatures', 'Identical, Concentrations', 'Different, Metals', 'Neutral, pH'],
    correctAnswer: 'Identical, Concentrations',
    explanation: 'Example: Two Cu electrodes in different CuSO4 concentrations.'
  },
  {
    id: 'chem-elec-68',
    text: 'The pH of a solution can be measured using which electrode?',
    options: ['SHE', 'Quinhydrone electrode', 'Glass electrode', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These electrodes have potentials that vary with [H+].'
  },
  {
    id: 'chem-elec-69',
    text: 'The "Electromotive Force" (EMF) is measured in:',
    options: ['Amperes', 'Volts', 'Watts', 'Joules'],
    correctAnswer: 'Volts',
    explanation: 'It is the potential difference.'
  },
  {
    id: 'chem-elec-70',
    text: 'Which is an application of electrolysis?',
    options: ['Electroplating', 'Purification of metals', 'Extraction of reactive metals', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Fundamental industrial processes.'
  },
  {
    id: 'chem-elec-71',
    text: 'When a lead storage battery is recharged, it acts as an:',
    options: ['Electrolytic cell', 'Galvanic cell', 'Fuel cell', 'Photovoltaic cell'],
    correctAnswer: 'Electrolytic cell',
    explanation: 'Electrical energy is used to drive a non-spontaneous chemical change.'
  },
  {
    id: 'chem-elec-72',
    text: 'White lead used in paints is a basic carbonate of:',
    options: ['Zinc', 'Lead', 'Iron', 'Aluminum'],
    correctAnswer: 'Lead',
    explanation: 'Pb(OH)₂.2PbCO₃.'
  },
  {
    id: 'chem-elec-73',
    text: 'The presence of _____ increases the rate of corrosion.',
    options: ['Salt (Electrolytes)', 'Moisture', 'Acidity', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These factors promote electrochemical reactions.'
  },
  {
    id: 'chem-elec-74',
    text: 'Cathodic protection involves making the metal to be protected the _____ of an electrochemical cell.',
    options: ['Anode', 'Cathode', 'Electrolyte', 'Insulator'],
    correctAnswer: 'Cathode',
    explanation: 'By connecting it to a more reactive metal (anode).'
  },
  {
    id: 'chem-elec-75',
    text: 'The efficiency of a fuel cell is much higher than a _____ engine.',
    options: ['Steam', 'Internal combustion', 'Electric', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Direct conversion to electricity bypasses thermal loss.'
  },
  {
    id: 'chem-elec-76',
    text: 'Standard Electrode Potential (E°) is an _____ property.',
    options: ['Intensive', 'Extensive', 'Chemical', 'Atomic'],
    correctAnswer: 'Intensive',
    explanation: 'It does not depend on the amount of substance.'
  },
  {
    id: 'chem-elec-77',
    text: 'If we double the stoichiometric coefficients of a half-reaction, E°:',
    options: ['Doubles', 'Stays same', 'Is halved', 'Is squared'],
    correctAnswer: 'Stays same',
    explanation: 'Because it is an intensive property.'
  },
  {
    id: 'chem-elec-78',
    text: 'The unit of cell constant is:',
    options: ['cm', 'cm⁻¹', 'Ohm', 'S'],
    correctAnswer: 'cm⁻¹',
    explanation: 'Ratio of distance between electrodes to their area (l/A).'
  },
  {
    id: 'chem-elec-79',
    text: 'Which is a better conductor?',
    options: ['Copper', 'NaCl solution', 'Graphite', 'Fused NaCl'],
    correctAnswer: 'Copper',
    explanation: 'Metals are generally far better conductors than electrolytes.'
  },
  {
    id: 'chem-elec-80',
    text: 'What is the oxidation state of O in OF2?',
    options: ['-2', '-1', '+2', '+1'],
    correctAnswer: '+2',
    explanation: 'Fluorine is more electronegative than Oxygen.'
  },
  {
    id: 'chem-elec-81',
    text: 'The process of refining impure copper using electrolysis is:',
    options: ['Anodizing', 'Electrorefining', 'Electropolishing', 'None'],
    correctAnswer: 'Electrorefining',
    explanation: 'Impure copper is anode, pure copper is cathode.'
  },
  {
    id: 'chem-elec-82',
    text: 'The "Anode Mud" collected during copper refining contains:',
    options: ['Iron', 'Zinc', 'Gold and Silver', 'Sand'],
    correctAnswer: 'Gold and Silver',
    explanation: 'Valuable impurities that do not dissolve.'
  },
  {
    id: 'chem-elec-83',
    text: 'What is the oxidation number of N in NH3?',
    options: ['+3', '-3', '0', '+5'],
    correctAnswer: '-3',
    explanation: 'N + 3(+1) = 0.'
  },
  {
    id: 'chem-elec-84',
    text: 'Which law relates mass to electricity and equivalent weight?',
    options: ['Faraday\'s 2nd Law', 'Faraday\'s 1st Law', 'Raoult\'s Law', 'Henry\'s Law'],
    correctAnswer: 'Faraday\'s 2nd Law',
    explanation: 'm1/m2 = E1/E2 for the same quantity of electricity.'
  },
  {
    id: 'chem-elec-85',
    text: 'The capacity of a battery is usually measured in:',
    options: ['Volts', 'Ampere-hours (Ah)', 'Watts', 'Coulombs'],
    correctAnswer: 'Ampere-hours (Ah)',
    explanation: 'Indicates how much charge it can store.'
  },
  {
    id: 'chem-elec-86',
    text: 'In the rusting of iron, the reduction of _____ takes place at the cathode.',
    options: ['Iron', 'Oxygen (in presence of H+)', 'Water', 'Nitrogen'],
    correctAnswer: 'Oxygen (in presence of H+)',
    explanation: 'O₂ + 4H⁺ + 4e⁻ -> 2H₂O.'
  },
  {
    id: 'chem-elec-87',
    text: 'Which metal is used as a sacrificial anode for underground iron pipes?',
    options: ['Copper', 'Magnesium', 'Silver', 'Gold'],
    correctAnswer: 'Magnesium',
    explanation: 'More reactive than iron; it corrodes first.'
  },
  {
    id: 'chem-elec-88',
    text: 'The standard potential for Zn²⁺/Zn is -0.76 V. This means Zinc is _____ to reduce than Hydrogen.',
    options: ['Easier', 'Harder', 'Same', 'Zero'],
    correctAnswer: 'Harder',
    explanation: 'Lower (more negative) potential means less tendency to reduce.'
  },
  {
    id: 'chem-elec-89',
    text: 'The standard potential for Cu²⁺/Cu is +0.34 V. This means Copper is _____ to reduce than Hydrogen.',
    options: ['Easier', 'Harder', 'Same', 'Zero'],
    correctAnswer: 'Easier',
    explanation: 'Positive potential means greater tendency to reduce.'
  },
  {
    id: 'chem-elec-90',
    text: 'Electrodes made of materials that do not take part in the reaction (e.g. Pt, C) are:',
    options: ['Active electrodes', 'Inert electrodes', 'Reference electrodes', 'Indicator electrodes'],
    correctAnswer: 'Inert electrodes',
    explanation: 'They only provide a surface for electron transfer.'
  },
  {
    id: 'chem-elec-91',
    text: 'Oxidation Number of Iodine in IF7 is:',
    options: ['+1', '+5', '+7', '-1'],
    correctAnswer: '+7',
    explanation: 'I + 7(-1) = 0.'
  },
  {
    id: 'chem-elec-92',
    text: 'Which is an electrolyte in the molten state but non-conductor in solid?',
    options: ['Glucose', 'NaCl', 'Sulfur', 'Plastic'],
    correctAnswer: 'NaCl',
    explanation: 'Ions are free only when melted or dissolved.'
  },
  {
    id: 'chem-elec-93',
    text: 'The concentration of H2SO4 in a fully charged lead battery is about:',
    options: ['10%', '38%', '70%', '98%'],
    correctAnswer: '38%',
    explanation: 'Density ~1.28 g/cm³.'
  },
  {
    id: 'chem-elec-94',
    text: 'What happens to the pH of an aqueous solution of NaCl after electrolysis?',
    options: ['Increases', 'Decreases', 'Stay same', 'Fluctuates'],
    correctAnswer: 'Increases',
    explanation: 'NaOH is produced in the solution.'
  },
  {
    id: 'chem-elec-95',
    text: 'The number of electrons involved in the reduction of 1 mole of Al³⁺ to Al is:',
    options: ['1', '2', '3', 'Avogadro\'s number x 3'],
    correctAnswer: 'Avogadro\'s number x 3',
    explanation: 'Al³⁺ + 3e⁻ -> Al.'
  },
  {
    id: 'chem-elec-96',
    text: 'Which of the following is a non-spontaneous reaction?',
    options: ['Reaction in a Galvanic cell', 'Reaction in an Electrolytic cell', 'Combustion of fuel', 'Acid-base neutralization'],
    correctAnswer: 'Reaction in an Electrolytic cell',
    explanation: 'Requires external electrical energy.'
  },
  {
    id: 'chem-elec-97',
    text: 'The unit of Faraday constant is:',
    options: ['Coulomb', 'Coulomb per mole', 'Volt per mole', 'Ampere'],
    correctAnswer: 'Coulomb per mole',
    explanation: 'Charge per mole of electrons.'
  },
  {
    id: 'chem-elec-98',
    text: 'Which equation is used for electrolysis of water?',
    options: ['2H2O -> 2H2 + O2', 'H2 + O2 -> H2O', 'H2O -> H+ + OH-', 'None'],
    correctAnswer: '2H2O -> 2H2 + O2',
    explanation: 'Overall reaction.'
  },
  {
    id: 'chem-elec-99',
    text: 'Oxidation number of Nitrogen in HNO3 is:',
    options: ['+1', '+3', '+5', '+7'],
    correctAnswer: '+5',
    explanation: '1 + N + 3(-2) = 0.'
  },
  {
    id: 'chem-elec-100',
    text: 'Electrochemical cells are crucial for:',
    options: ['Space exploration', 'Medical devices', 'Sustainable energy', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Batteries and fuel cells power modern technology.'
  }
];
