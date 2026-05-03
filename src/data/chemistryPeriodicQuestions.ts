import { Question } from '../types';

export const CHEMISTRY_PERIODIC_QUIZ: Question[] = [
  {
    id: 'ch-per-1',
    text: 'The first person to arrange elements in order of increasing atomic weights was:',
    options: ['Moseley', 'Mendeleev', 'Dobereiner', 'Newlands'],
    correctAnswer: 'Dobereiner',
    explanation: 'He proposed the Law of Triads (1817).'
  },
  {
    id: 'ch-per-2',
    text: 'Newlands proposed the Law of _____ in 1864.',
    options: ['Triads', 'Octaves', 'Reciprocal Proportions', 'Multiple Proportions'],
    correctAnswer: 'Octaves',
    explanation: 'Every eighth element has similar properties (up to Calcium).'
  },
  {
    id: 'ch-per-3',
    text: 'Mendeleev\'s periodic table was based on:',
    options: ['Atomic weight', 'Atomic number', 'Density', 'Atomic volume'],
    correctAnswer: 'Atomic weight',
    explanation: 'Elements were arranged in increasing order of atomic weights.'
  },
  {
    id: 'ch-per-4',
    text: 'Mendeleev left gaps in his periodic table for:',
    options: ['Noble gases', 'Undiscovered elements', 'Isotopes', 'None'],
    correctAnswer: 'Undiscovered elements',
    explanation: 'He predicted properties of elements like Eka-boron, Eka-aluminum.'
  },
  {
    id: 'ch-per-5',
    text: 'The Modern Periodic Table is based on the work of _____ who discovered atomic numbers.',
    options: ['Bohr', 'Moseley', 'Rutherford', 'Chadwick'],
    correctAnswer: 'Moseley',
    explanation: 'Showed that atomic number is a more fundamental property than atomic weight.'
  },
  {
    id: 'ch-per-6',
    text: 'The Modern Periodic Law states that properties of elements are periodic functions of their:',
    options: ['Atomic weight', 'Atomic number', 'Mass number', 'Atomic volume'],
    correctAnswer: 'Atomic number',
    explanation: 'Elements are arranged by increasing Z.'
  },
  {
    id: 'ch-per-7',
    text: 'Horizontal rows in the periodic table are called _____ and vertical columns are _____.',
    options: ['Groups, Periods', 'Periods, Groups', 'Families, Series', 'None'],
    correctAnswer: 'Periods, Groups',
    explanation: 'There are 7 periods and 18 groups (IUPAC).'
  },
  {
    id: 'ch-per-8',
    text: 'How many elements are present in the 1st period?',
    options: ['2', '8', '18', '32'],
    correctAnswer: '2',
    explanation: 'Hydrogen and Helium.'
  },
  {
    id: 'ch-per-9',
    text: 'The 2nd and 3rd periods are called _____ periods.',
    options: ['Very short', 'Short', 'Long', 'Very long'],
    correctAnswer: 'Short',
    explanation: 'They contain 8 elements each.'
  },
  {
    id: 'ch-per-10',
    text: 'The 4th and 5th periods are called _____ periods and contain _____ elements each.',
    options: ['Short, 8', 'Long, 18', 'Very long, 32', 'None'],
    correctAnswer: 'Long, 18',
    explanation: 'Includes transition elements.'
  },
  {
    id: 'ch-per-11',
    text: 'The 6th period is the longest and contains _____ elements.',
    options: ['18', '32', '50', '8'],
    correctAnswer: '32',
    explanation: 'Includes 14 lanthanides.'
  },
  {
    id: 'ch-per-12',
    text: 'Elements in the same group have the same number of:',
    options: ['Protons', 'Neutrons', 'Valence electrons', 'Total electrons'],
    correctAnswer: 'Valence electrons',
    explanation: 'This accounts for their similar chemical properties.'
  },
  {
    id: 'ch-per-13',
    text: 'Group 1 elements (except H) are called:',
    options: ['Alkaline earth metals', 'Alkali metals', 'Halogens', 'Noble gases'],
    correctAnswer: 'Alkali metals',
    explanation: 'They form strong alkalis with water.'
  },
  {
    id: 'ch-per-14',
    text: 'Group 2 elements are called:',
    options: ['Alkali metals', 'Alkaline earth metals', 'Chalcogens', 'Pnictogens'],
    correctAnswer: 'Alkaline earth metals',
    explanation: 'Found in the earth\'s crust and form alkaline solutions.'
  },
  {
    id: 'ch-per-15',
    text: 'Group 17 elements are called:',
    options: ['Noble gases', 'Halogens', 'Chalcogens', 'Metalloids'],
    correctAnswer: 'Halogens',
    explanation: 'Means "salt formers".'
  },
  {
    id: 'ch-per-16',
    text: 'Group 18 elements are called:',
    options: ['Noble/Inert gases', 'Halogens', 'Transition metals', 'Rare earths'],
    correctAnswer: 'Noble/Inert gases',
    explanation: 'They have a stable octet configuration (except He).'
  },
  {
    id: 'ch-per-17',
    text: 's-block and p-block elements (excluding noble gases) are together called:',
    options: ['Transition elements', 'Representative/Normal elements', 'Rare earth elements', 'Metalloids'],
    correctAnswer: 'Representative/Normal elements',
    explanation: 'Outer shells are being filled normally.'
  },
  {
    id: 'ch-per-18',
    text: 'd-block elements are known as:',
    options: ['Alkali metals', 'Outer transition elements', 'Inner transition elements', 'Metalloids'],
    correctAnswer: 'Outer transition elements',
    explanation: 'Found between s and p blocks.'
  },
  {
    id: 'ch-per-19',
    text: 'f-block elements are known as:',
    options: ['Alkali metals', 'Outer transition elements', 'Inner transition elements', 'Inert gases'],
    correctAnswer: 'Inner transition elements',
    explanation: 'Consist of Lanthanides and Actinides.'
  },
  {
    id: 'ch-per-20',
    text: 'Atomic radius _____ from left to right in a period.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Due to increase in nuclear charge pulling electrons closer.'
  },
  {
    id: 'ch-per-21',
    text: 'Atomic radius _____ from top to bottom in a group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to addition of new electron shells.'
  },
  {
    id: 'ch-per-22',
    text: 'The radius of a cation is _____ than its parent atom.',
    options: ['Larger', 'Smaller', 'Same', 'None'],
    correctAnswer: 'Smaller',
    explanation: 'Loss of electron reduces repulsion and often a whole shell.'
  },
  {
    id: 'ch-per-23',
    text: 'The radius of an anion is _____ than its parent atom.',
    options: ['Smaller', 'Larger', 'Same', 'None'],
    correctAnswer: 'Larger',
    explanation: 'Gain of electron increases inter-electronic repulsion.'
  },
  {
    id: 'ch-per-24',
    text: 'Ionization Energy (IE) is the energy required to remove an electron from a _____ gaseous atom.',
    options: ['Solid', 'Liquid', 'Neutral', 'Excited'],
    correctAnswer: 'Neutral',
    explanation: 'X(g) + IE -> X+(g) + e-.'
  },
  {
    id: 'ch-per-25',
    text: 'Ionization Energy _____ across a period and _____ down a group.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Increases, Increases', 'Decreases, Decreases'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Increases with nuclear charge; decreases as atoms get larger.'
  },
  {
    id: 'ch-per-26',
    text: 'The decrease in attractive force of the nucleus on valence electrons due to inner electrons is:',
    options: ['Ionization', 'Shielding/Screening effect', 'Electronegativity', 'None'],
    correctAnswer: 'Shielding/Screening effect',
    explanation: 'Increases down the group.'
  },
  {
    id: 'ch-per-27',
    text: 'Electron Affinity (EA) is the energy change when an electron is _____ to a gaseous atom.',
    options: ['Removed', 'Added', 'Shared', 'None'],
    correctAnswer: 'Added',
    explanation: 'X(g) + e- -> X-(g).'
  },
  {
    id: 'ch-per-28',
    text: 'Electron affinity is generally _____ (exothermic) for the first electron added.',
    options: ['Positive', 'Negative', 'Zero', 'None'],
    correctAnswer: 'Negative',
    explanation: 'Energy is released.'
  },
  {
    id: 'ch-per-29',
    text: 'The element with the highest electronegativity is:',
    options: ['Cesium', 'Fluorine', 'Oxygen', 'Chlorine'],
    correctAnswer: 'Fluorine',
    explanation: 'Value of 4.0 on Pauling scale.'
  },
  {
    id: 'ch-per-30',
    text: 'Electronegativity _____ across a period and _____ down a group.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Increases, Increases', 'Decreases, Decreases'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Follows the same trend as IE.'
  },
  {
    id: 'ch-per-31',
    text: 'Metallic character _____ across a period and _____ down a group.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Increases, Increases', 'Decreases, Decreases'],
    correctAnswer: 'Decreases, Increases',
    explanation: 'Metals are on the left; non-metals on the right.'
  },
  {
    id: 'ch-per-32',
    text: 'Oxides of metals are generally _____ in nature.',
    options: ['Acidic', 'Basic', 'Neutral', 'Amphoteric'],
    correctAnswer: 'Basic',
    explanation: 'e.g. Na2O, MgO.'
  },
  {
    id: 'ch-per-33',
    text: 'Oxides of non-metals are generally _____ in nature.',
    options: ['Basic', 'Acidic', 'Neutral', 'Amphoteric'],
    correctAnswer: 'Acidic',
    explanation: 'e.g. CO2, SO3, P4O10.'
  },
  {
    id: 'ch-per-34',
    text: 'Amphoteric oxides can react with both _____ and _____.',
    options: ['Water, Air', 'Acids, Bases', 'Metals, Non-metals', 'None'],
    correctAnswer: 'Acids, Bases',
    explanation: 'e.g. Al2O3, ZnO.'
  },
  {
    id: 'ch-per-35',
    text: 'In the 3rd period, basic character of oxides _____ from left to right.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Na2O (strong basic) -> Al2O3 (amphoteric) -> Cl2O7 (strong acidic).'
  },
  {
    id: 'ch-per-36',
    text: 'Melting and boiling points of metals _____ down the group (Group 1 and 2).',
    options: ['Increase', 'Decrease', 'Stay same', 'None'],
    correctAnswer: 'Decrease',
    explanation: 'Due to increase in size and decrease in metallic bond strength.'
  },
  {
    id: 'ch-per-37',
    text: 'Melting and boiling points of non-metals _____ down the group (Group 17 and 18).',
    options: ['Decrease', 'Increase', 'Stay same', 'None'],
    correctAnswer: 'Increase',
    explanation: 'Due to increase in Van der Waals forces with size.'
  },
  {
    id: 'ch-per-38',
    text: 'The property of an element to exist in more than one physical form is:',
    options: ['Isotropy', 'Allotropy', 'Isomerism', 'Polymorphism'],
    correctAnswer: 'Allotropy',
    explanation: 'e.g. Diamond and Graphite for Carbon.'
  },
  {
    id: 'ch-per-39',
    text: 'Which group contains the most reactive metals?',
    options: ['Group 1 (Alkali metals)', 'Group 2', 'Group 11', 'Group 18'],
    correctAnswer: 'Group 1 (Alkali metals)',
    explanation: 'They have low IE and lose electrons easily.'
  },
  {
    id: 'ch-per-40',
    text: 'Which group contains the most reactive non-metals?',
    options: ['Group 16', 'Group 17 (Halogens)', 'Group 18', 'None'],
    correctAnswer: 'Group 17 (Halogens)',
    explanation: 'They have high EA and gain electrons easily.'
  },
  {
    id: 'ch-per-41',
    text: 'Hydrides of Group 1 and 2 are _____ in nature.',
    options: ['Covalent', 'Ionic', 'Interstitial', 'None'],
    correctAnswer: 'Ionic',
    explanation: 'High difference in electronegativity.'
  },
  {
    id: 'ch-per-42',
    text: 'Hydrides of p-block elements are _____ in nature.',
    options: ['Ionic', 'Covalent', 'Metallic', 'None'],
    correctAnswer: 'Covalent',
    explanation: 'e.g. NH3, H2O, CH4.'
  },
  {
    id: 'ch-per-43',
    text: 'The diagonal relationship is seen between elements of _____ and _____ periods.',
    options: ['1st, 2nd', '2nd, 3rd', '3rd, 4th', 'None'],
    correctAnswer: '2nd, 3rd',
    explanation: 'e.g. Li-Mg, Be-Al, B-Si.'
  },
  {
    id: 'ch-per-44',
    text: 'Li and Mg show similar properties due to similar _____ and _____.',
    options: ['Color, Weight', 'Ionic radii, Charge density', 'Number of protons, Neutrons', 'None'],
    correctAnswer: 'Ionic radii, Charge density',
    explanation: 'Reason for diagonal relationship.'
  },
  {
    id: 'ch-per-45',
    text: 'Which is a "Typical" transition element?',
    options: ['Zinc', 'Copper', 'Iron', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Zinc (Group 12) has a full d-subshell and is often considered non-typical.'
  },
  {
    id: 'ch-per-46',
    text: 'Transition elements are all:',
    options: ['Non-metals', 'Metals', 'Metalloids', 'Gases'],
    correctAnswer: 'Metals',
    explanation: 'They are hard, dense, and have high MP/BP.'
  },
  {
    id: 'ch-per-47',
    text: 'Lanthanides are elements from Z = _____ to _____.',
    options: ['58, 71', '89, 103', '21, 30', 'None'],
    correctAnswer: '58, 71',
    explanation: 'Filling of 4f subshell.'
  },
  {
    id: 'ch-per-48',
    text: 'Actinides are elements from Z = _____ to _____.',
    options: ['58, 71', '90, 103', '57, 72', 'None'],
    correctAnswer: '90, 103',
    explanation: 'Filling of 5f subshell.'
  },
  {
    id: 'ch-per-49',
    text: 'Valence shell electronic configuration of alkali metals is:',
    options: ['ns1', 'ns2', 'ns2 np1', 'ns2 np5'],
    correctAnswer: 'ns1',
    explanation: 'Readily lose 1 electron to form +1 ions.'
  },
  {
    id: 'ch-per-50',
    text: 'Valence shell electronic configuration of halogens is:',
    options: ['ns2 np4', 'ns2 np5', 'ns2 np6', 'ns1'],
    correctAnswer: 'ns2 np5',
    explanation: 'Need 1 electron to complete octet.'
  },
  {
    id: 'ch-per-51',
    text: 'The energy released when an electron is added to Cl is _____ than for F.',
    options: ['Higher', 'Lower', 'Same', 'Zero'],
    correctAnswer: 'Higher',
    explanation: 'Unexpectedly, Cl has higher EA than F due to small size of F causing repulsion.'
  },
  {
    id: 'ch-per-52',
    text: 'Ionization energy of Nitrogen is higher than Oxygen because of:',
    options: ['Higher Z', 'Half-filled p-subshell stability', 'Large size', 'None'],
    correctAnswer: 'Half-filled p-subshell stability',
    explanation: 'Exception to the general period trend.'
  },
  {
    id: 'ch-per-53',
    text: 'Elements that show properties of both metals and non-metals are:',
    options: ['Transition metals', 'Metalloids/Semi-metals', 'Alkali metals', 'None'],
    correctAnswer: 'Metalloids/Semi-metals',
    explanation: 'e.g. Boron, Silicon, Germanium.'
  },
  {
    id: 'ch-per-54',
    text: 'Which element has the highest ionization energy?',
    options: ['Helium', 'Hydrogen', 'Fluorine', 'Cesium'],
    correctAnswer: 'Helium',
    explanation: 'Smallest atom with stable configuration.'
  },
  {
    id: 'ch-per-55',
    text: 'Which element has the lowest ionization energy?',
    options: ['Fluorine', 'Cesium', 'Francium', 'Lithium'],
    correctAnswer: 'Cesium',
    explanation: 'Largest stable atom (Fr is radioactive).'
  },
  {
    id: 'ch-per-56',
    text: 'A decrease in atomic size _____ electronegativity.',
    options: ['Increases', 'Decreases', 'Does not affect', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Nucleus can attract shared electrons more strongly.'
  },
  {
    id: 'ch-per-57',
    text: 'Shielding effect _____ across a period.',
    options: ['Increases', 'Decreases', 'Remains almost constant', 'None'],
    correctAnswer: 'Remains almost constant',
    explanation: 'Number of inner shells stays the same.'
  },
  {
    id: 'ch-per-58',
    text: 'Second ionization energy is always _____ than the first.',
    options: ['Lower', 'Higher', 'Same', 'Zero'],
    correctAnswer: 'Higher',
    explanation: 'Harder to remove an electron from a positive ion.'
  },
  {
    id: 'ch-per-59',
    text: 'Alkali metals are stored in _____ because they react with air/water.',
    options: ['Water', 'Kerosene oil', 'Open air', 'Glass jars'],
    correctAnswer: 'Kerosene oil',
    explanation: 'They are highly reactive.'
  },
  {
    id: 'ch-per-60',
    text: 'Beryllium is _____ than other alkaline earth metals.',
    options: ['Softer', 'Harder', 'More reactive', 'Larger'],
    correctAnswer: 'Harder',
    explanation: 'Shows anomalous behavior due to small size.'
  },
  {
    id: 'ch-per-61',
    text: 'Noble gases are monatomic because they have _____ configurations.',
    options: ['Stable/Closed shell', 'Unstable', 'Excited', 'None'],
    correctAnswer: 'Stable/Closed shell',
    explanation: 'Little tendency to gain, lose, or share electrons.'
  },
  {
    id: 'ch-per-62',
    text: 'Transition elements show _____ oxidation states.',
    options: ['Fixed', 'Variable', 'Zero', 'Negative only'],
    correctAnswer: 'Variable',
    explanation: 'Due to involvement of both ns and (n-1)d electrons.'
  },
  {
    id: 'ch-per-63',
    text: 'Most transition metal compounds are _____ due to d-d transitions.',
    options: ['White', 'Colored', 'Invisible', 'None'],
    correctAnswer: 'Colored',
    explanation: 'Characteristic property.'
  },
  {
    id: 'ch-per-64',
    text: 'Transition metals and their compounds are often used as _____ in industrial reactions.',
    options: ['Solvents', 'Catalysts', 'Fuel', 'None'],
    correctAnswer: 'Catalysts',
    explanation: 'e.g. Fe in Haber\'s process, V2O5 in Contact process.'
  },
  {
    id: 'ch-per-65',
    text: 'The element with the highest melting point in the 3rd period is:',
    options: ['Sodium', 'Silicon', 'Aluminum', 'Sulfur'],
    correctAnswer: 'Silicon',
    explanation: 'Forms a giant covalent network structure.'
  },
  {
    id: 'ch-per-66',
    text: 'Effective nuclear charge (Zeff) is _____ than actual nuclear charge (Z).',
    options: ['Greater', 'Less', 'Equal', 'None'],
    correctAnswer: 'Less',
    explanation: 'Zeff = Z - S (Shielding constant).'
  },
  {
    id: 'ch-per-67',
    text: 'Ionic character _____ down a group for metal-nonmetal compounds.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'IE of metal decreases, making it easier to form ions.'
  },
  {
    id: 'ch-per-68',
    text: 'The oxidation state of an element in its free state is:',
    options: ['+1', '-1', 'Zero', 'Dependent on Z'],
    correctAnswer: 'Zero',
    explanation: 'Uncombined state.'
  },
  {
    id: 'ch-per-69',
    text: 'Halogens exist as _____ molecules.',
    options: ['Monatomic', 'Diatomic (X2)', 'Triatomic', 'Polyatomic'],
    correctAnswer: 'Diatomic (X2)',
    explanation: 'e.g. F2, Cl2, Br2, I2.'
  },
  {
    id: 'ch-per-70',
    text: 'Oxidation state of Group 1 elements is always:',
    options: ['+1', '+2', '-1', 'Variable'],
    correctAnswer: '+1',
    explanation: 'Lose one valence electron.'
  },
  {
    id: 'ch-per-71',
    text: 'Oxidation state of Group 2 elements is always:',
    options: ['+1', '+2', '+3', 'Variable'],
    correctAnswer: '+2',
    explanation: 'Lose two valence electrons.'
  },
  {
    id: 'ch-per-72',
    text: 'Electronegativity of Hydrogen is approximately:',
    options: ['1.0', '2.1', '3.0', '4.0'],
    correctAnswer: '2.1',
    explanation: 'Similar to Phosphorus.'
  },
  {
    id: 'ch-per-73',
    text: 'Elements of Group 12 (Zn, Cd, Hg) are often called "_____ Transition Elements".',
    options: ['Typical', 'Non-typical/Post', 'Inner', 'None'],
    correctAnswer: 'Non-typical/Post',
    explanation: 'Their d-subshell is completely filled.'
  },
  {
    id: 'ch-per-74',
    text: 'Paramagnetism in transition elements is due to the presence of _____ electrons.',
    options: ['Paired', 'Unpaired', 'Inner shell', 'None'],
    correctAnswer: 'Unpaired',
    explanation: 'Attracted by magnetic fields.'
  },
  {
    id: 'ch-per-75',
    text: 'Interstitial compounds are formed when _____ atoms (like H, C, N) fit into spaces in metal lattices.',
    options: ['Large', 'Small', 'Radioactive', 'None'],
    correctAnswer: 'Small',
    explanation: 'Common in transition metals.'
  },
  {
    id: 'ch-per-76',
    text: 'Density _____ across a period up to middle and then _____.',
    options: ['Decreases, Increases', 'Increases, Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Peak is usually around transition metals.'
  },
  {
    id: 'ch-per-77',
    text: 'The size of an atom is measured in units like _____ or _____.',
    options: ['Angstroms (Å)', 'Picometers (pm)', 'Both A and B', 'Grams'],
    correctAnswer: 'Both A and B',
    explanation: '1 Å = 100 pm = 10^-10 m.'
  },
  {
    id: 'ch-per-78',
    text: 'Bond length _____ as the size of the atoms increases.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Larger atoms have centers further apart.'
  },
  {
    id: 'ch-per-79',
    text: 'A covalent radius is _____ of the distance between nuclei of two identical bonded atoms.',
    options: ['Double', 'One-third', 'Half', 'None'],
    correctAnswer: 'Half',
    explanation: 'Definition for non-metals.'
  },
  {
    id: 'ch-per-80',
    text: 'Which ion is the smallest: Na+, Mg2+, Al3+?',
    options: ['Na+', 'Mg2+', 'Al3+', 'All same size'],
    correctAnswer: 'Al3+',
    explanation: 'Highest nuclear charge for the same number of electrons (isoelectronic).'
  },
  {
    id: 'ch-per-81',
    text: 'Which ion is the largest: F-, O2-, N3-?',
    options: ['F-', 'O2-', 'N3-', 'All same'],
    correctAnswer: 'N3-',
    explanation: 'Lowest nuclear charge for the same number of electrons.'
  },
  {
    id: 'ch-per-82',
    text: 'The trend in a property that repeats at regular intervals is:',
    options: ['Regularity', 'Periodicity', 'Consistency', 'None'],
    correctAnswer: 'Periodicity',
    explanation: 'Heart of the periodic table.'
  },
  {
    id: 'ch-per-83',
    text: 'How many groups were there in Mendeleev\'s table?',
    options: ['8', '18', '7', 'None'],
    correctAnswer: '8',
    explanation: 'Noble gases were not yet known.'
  },
  {
    id: 'ch-per-84',
    text: 'The 7th period is currently:',
    options: ['Incomplete', 'Complete (up to Z=118)', 'Very short', 'None'],
    correctAnswer: 'Complete (up to Z=118)',
    explanation: 'Finished with Oganesson.'
  },
  {
    id: 'ch-per-85',
    text: 'Transuranic elements are those with atomic number greater than:',
    options: ['82 (Lead)', '92 (Uranium)', '100', 'None'],
    correctAnswer: '92 (Uranium)',
    explanation: 'Most are synthetic/man-made.'
  },
  {
    id: 'ch-per-86',
    text: 'Standard oxidation state of Oxygen is _____ (except in peroxides).',
    options: ['+2', '-2', '-1', '0'],
    correctAnswer: '-2',
    explanation: 'In peroxides like H2O2, it is -1.'
  },
  {
    id: 'ch-per-87',
    text: 'Which element has the highest electron affinity?',
    options: ['Fluorine', 'Chlorine', 'Oxygen', 'Neon'],
    correctAnswer: 'Chlorine',
    explanation: 'Releases about -349 kJ/mol.'
  },
  {
    id: 'ch-per-88',
    text: 'A "Group" is also called a:',
    options: ['Period', 'Family', 'Series', 'None'],
    correctAnswer: 'Family',
    explanation: 'e.g. Carbon family, Nitrogen family.'
  },
  {
    id: 'ch-per-89',
    text: 'Which is the most non-metallic element in the periodic table?',
    options: ['Oxygen', 'Helium', 'Fluorine', 'Chlorine'],
    correctAnswer: 'Fluorine',
    explanation: 'Top right corner (excluding noble gases).'
  },
  {
    id: 'ch-per-90',
    text: 'Transition metals are located in which blocks?',
    options: ['s and p', 'd and f', 's and d', 'p and f'],
    correctAnswer: 'd and f',
    explanation: 'f-block are "inner" transition.'
  },
  {
    id: 'ch-per-91',
    text: 'Lanthanide contraction is the steady _____ in size of atoms/ions from La to Lu.',
    options: ['Increase', 'Decrease', 'Stagnation', 'None'],
    correctAnswer: 'Decrease',
    explanation: 'Due to poor shielding by f-electrons.'
  },
  {
    id: 'ch-per-92',
    text: 'Actinides are mostly:',
    options: ['Stable', 'Radioactive', 'Non-metals', 'None'],
    correctAnswer: 'Radioactive',
    explanation: 'e.g. Uranium, Plutonium.'
  },
  {
    id: 'ch-per-93',
    text: 'The MP/BP of 3rd period elements peak at Group:',
    options: ['1', '14 (IVA)', '17', '18'],
    correctAnswer: '14 (IVA)',
    explanation: 'Carbon and Silicon families.'
  },
  {
    id: 'ch-per-94',
    text: 'Non-metals have _____ electronegativity and _____ ionization energy.',
    options: ['Low, Low', 'High, High', 'High, Low', 'Low, High'],
    correctAnswer: 'High, High',
    explanation: 'They "want" electrons and don\'t give them up easily.'
  },
  {
    id: 'ch-per-95',
    text: 'Metals have _____ electronegativity and _____ ionization energy.',
    options: ['Low, Low', 'High, High', 'Low, High', 'High, Low'],
    correctAnswer: 'Low, Low',
    explanation: 'They lose electrons easily.'
  },
  {
    id: 'ch-per-96',
    text: 'Ionic radius _____ down a group for isovalent ions (e.g. Li+, Na+, K+).',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to addition of shells.'
  },
  {
    id: 'ch-per-97',
    text: 'Which element is liquid at room temperature?',
    options: ['Mercury', 'Bromine', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Hg is a metal, Br is a non-metal.'
  },
  {
    id: 'ch-per-98',
    text: 'The size of Noble gases is measured as _____ radius.',
    options: ['Covalent', 'Van der Waals', 'Ionic', 'Metallic'],
    correctAnswer: 'Van der Waals',
    explanation: 'Since they don\'t normally form bonds.'
  },
  {
    id: 'ch-per-99',
    text: 'Van der Waals radius is always _____ than covalent radius for the same atom.',
    options: ['Smaller', 'Larger', 'Same', 'None'],
    correctAnswer: 'Larger',
    explanation: 'Measures distance between non-bonded atoms.'
  },
  {
    id: 'ch-per-100',
    text: 'Modern periodic table is a _____ representation of electronic configuration.',
    options: ['Mathematical', 'Visual/Spatial', 'Chemical', 'None'],
    correctAnswer: 'Visual/Spatial',
    explanation: 'Elements with similar valence configurations are grouped together.'
  }
];
