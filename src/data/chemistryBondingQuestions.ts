import { Question } from '../types';

export const CHEMISTRY_BONDING_QUIZ: Question[] = [
  {
    id: 'chem-bond-1',
    text: 'The minimum energy required to remove an electron from an isolated gaseous atom is its:',
    options: ['Electron affinity', 'Ionization energy', 'Electronegativity', 'Lattice energy'],
    correctAnswer: 'Ionization energy',
    explanation: 'I.E. increases across a period and decreases down a group.'
  },
  {
    id: 'chem-bond-2',
    text: 'Which of the following elements has the highest electronegativity?',
    options: ['Oxygen', 'Nitrogen', 'Fluorine', 'Chlorine'],
    correctAnswer: 'Fluorine',
    explanation: 'Fluorine is the most electronegative element with a value of 4.0 on the Pauling scale.'
  },
  {
    id: 'chem-bond-3',
    text: 'An ionic bond is formed when the electronegativity difference between two atoms is:',
    options: ['Less than 1.7', 'Greater than 1.7', 'Zero', 'Exactly 1.0'],
    correctAnswer: 'Greater than 1.7',
    explanation: 'A difference > 1.7 generally results in the transfer of electrons.'
  },
  {
    id: 'chem-bond-4',
    text: 'The shape of a molecule with 2 bond pairs and 0 lone pairs is:',
    options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
    correctAnswer: 'Linear',
    explanation: 'Example: BeCl2 or CO2. Bond angle is 180°.'
  },
  {
    id: 'chem-bond-5',
    text: 'According to VSEPR theory, the geometry of a molecule is determined by:',
    options: ['Repulsions between electron pairs', 'Nuclear attractions', 'Atomic mass', 'Molecular weight'],
    correctAnswer: 'Repulsions between electron pairs',
    explanation: 'Electron pairs (both bonding and lone) arrange themselves to minimize repulsion.'
  },
  {
    id: 'chem-bond-6',
    text: 'The hybridization of Carbon in CH4 (Methane) is:',
    options: ['sp', 'sp2', 'sp3', 'dsp2'],
    correctAnswer: 'sp3',
    explanation: 'Methane has a tetrahedral geometry with four equivalent C-H sigma bonds.'
  },
  {
    id: 'chem-bond-7',
    text: 'A double covalent bond consists of:',
    options: ['Two sigma bonds', 'Two pi bonds', 'One sigma and one pi bond', 'Two ionic bonds'],
    correctAnswer: 'One sigma and one pi bond',
    explanation: 'The first bond is always sigma; subsequent bonds are pi.'
  },
  {
    id: 'chem-bond-8',
    text: 'Which theory uses the concept of "Bond Order"?',
    options: ['VSEPR', 'VBT', 'MOT (Molecular Orbital Theory)', 'Lewis Theory'],
    correctAnswer: 'MOT (Molecular Orbital Theory)',
    explanation: 'Bond Order = 1/2 (Bonding electrons - Antibonding electrons).'
  },
  {
    id: 'chem-bond-9',
    text: 'Oxygen molecule (O2) is paramagnetic. This is best explained by:',
    options: ['VSEPR', 'VBT', 'MOT', 'Octet rule'],
    correctAnswer: 'MOT',
    explanation: 'MOT shows that O2 has two unpaired electrons in antibonding pi orbitals.'
  },
  {
    id: 'chem-bond-10',
    text: 'The bond angle in a water molecule (H2O) is approximately:',
    options: ['109.5°', '120°', '104.5°', '180°'],
    correctAnswer: '104.5°',
    explanation: 'The two lone pairs on oxygen compress the bond angle from the ideal 109.5°.'
  },
  {
    id: 'chem-bond-11',
    text: 'A coordinate covalent bond is formed by:',
    options: ['Mutual sharing of electrons', 'Transfer of electrons', 'Sharing of an electron pair donated by one atom', 'Sharing of one electron only'],
    correctAnswer: 'Sharing of an electron pair donated by one atom',
    explanation: 'Also called a dative bond.'
  },
  {
    id: 'chem-bond-12',
    text: 'The energy released when an electron is added to a gaseous atom is:',
    options: ['Ionization energy', 'Electron affinity', 'Binding energy', 'Potential energy'],
    correctAnswer: 'Electron affinity',
    explanation: 'E.A. is generally exothermic for the first electron.'
  },
  {
    id: 'chem-bond-13',
    text: 'The dipole moment of a symmetrical non-polar molecule like CCl4 is:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'Individual bond dipoles cancel out due to symmetry.'
  },
  {
    id: 'chem-bond-14',
    text: 'Which of the following has the shortest bond length?',
    options: ['C-C', 'C=C', 'C≡C', 'All same'],
    correctAnswer: 'C≡C',
    explanation: 'Triple bonds are shorter and stronger than double or single bonds.'
  },
  {
    id: 'chem-bond-15',
    text: 'Hybridization of Carbon in Ethene (C2H4) is:',
    options: ['sp', 'sp2', 'sp3', 'dsp3'],
    correctAnswer: 'sp2',
    explanation: 'The geometry is trigonal planar around each carbon.'
  },
  {
    id: 'chem-bond-16',
    text: 'Bond order of N2 is:',
    options: ['1', '2', '3', '0'],
    correctAnswer: '3',
    explanation: 'N2 has a triple bond (one sigma, two pi).'
  },
  {
    id: 'chem-bond-17',
    text: 'The percentage of ionic character in a bond depends on the difference in:',
    options: ['Atomic size', 'Electronegativity', 'Ionization energy', 'Atomic number'],
    correctAnswer: 'Electronegativity',
    explanation: 'HF is about 43% ionic due to the high ΔEN.'
  },
  {
    id: 'chem-bond-18',
    text: 'Which molecule has a trigonal pyramidal shape?',
    options: ['BF3', 'NH3', 'CH4', 'H2O'],
    correctAnswer: 'NH3',
    explanation: 'Ammonia has 3 bond pairs and 1 lone pair.'
  },
  {
    id: 'chem-bond-19',
    text: 'The octet rule is NOT followed by:',
    options: ['CH4', 'H2O', 'PCl5', 'NH3'],
    correctAnswer: 'PCl5',
    explanation: 'Phosphorus has 10 valence electrons in PCl5 (expanded octet).'
  },
  {
    id: 'chem-bond-20',
    text: 'Sigma bond is formed by the _____ overlap of atomic orbitals.',
    options: ['Sideways', 'Head-to-head (linear)', 'Parallel', 'No overlap'],
    correctAnswer: 'Head-to-head (linear)',
    explanation: 'Sigma bonds are stronger than pi bonds due to greater overlap.'
  },
  {
    id: 'chem-bond-21',
    text: 'Electronegativity decreases down a group because of:',
    options: ['Increase in atomic radius', 'Decrease in nuclear charge effect', 'Increase in shielding effect', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Increasing size and shielding make it harder for the nucleus to attract shared electrons.'
  },
  {
    id: 'chem-bond-22',
    text: 'The polarity of a molecule is measured by its:',
    options: ['Bond energy', 'Dipole moment', 'Boiling point', 'Solubility'],
    correctAnswer: 'Dipole moment',
    explanation: 'Dipole moment (μ) = charge * distance.'
  },
  {
    id: 'chem-bond-23',
    text: 'The bond angle in BF3 (Trigonal planar) is:',
    options: ['90°', '109.5°', '120°', '180°'],
    correctAnswer: '120°',
    explanation: 'Three bond pairs repel each other equally in a plane.'
  },
  {
    id: 'chem-bond-24',
    text: 'Which theory explains the geometry of molecules but not the magnetic properties?',
    options: ['VSEPR', 'MOT', 'CFT', 'Octet rule'],
    correctAnswer: 'VSEPR',
    explanation: 'VSEPR is purely geometric; MOT explains magnetism.'
  },
  {
    id: 'chem-bond-25',
    text: 'Antibonding molecular orbitals are _____ in energy than bonding molecular orbitals.',
    options: ['Lower', 'Higher', 'Same', 'Negative'],
    correctAnswer: 'Higher',
    explanation: 'Antibonding orbitals are less stable.'
  },
  {
    id: 'chem-bond-26',
    text: 'The bond between two identical non-metal atoms (like Cl-Cl) is:',
    options: ['Polar covalent', 'Non-polar covalent', 'Ionic', 'Metallic'],
    correctAnswer: 'Non-polar covalent',
    explanation: 'Electrons are shared equally because ΔEN = 0.'
  },
  {
    id: 'chem-bond-27',
    text: 'Hybridization of Carbon in Ethyne (C2H2) is:',
    options: ['sp', 'sp2', 'sp3', 'sp3d'],
    correctAnswer: 'sp',
    explanation: 'Ethyne has a linear geometry (180°).'
  },
  {
    id: 'chem-bond-28',
    text: 'The strength of a chemical bond is measured by its:',
    options: ['Bond length', 'Bond energy', 'Bond angle', 'Bond order'],
    correctAnswer: 'Bond energy',
    explanation: 'Higher bond energy means a stronger bond.'
  },
  {
    id: 'chem-bond-29',
    text: 'Which molecule has a dipole moment of zero?',
    options: ['H2O', 'NH3', 'CO2', 'HCl'],
    correctAnswer: 'CO2',
    explanation: 'CO2 is linear, so dipoles cancel.'
  },
  {
    id: 'chem-bond-30',
    text: 'Ionic compounds are generally _____ at room temperature.',
    options: ['Gases', 'Liquids', 'Crystalline solids', 'Amorphous'],
    correctAnswer: 'Crystalline solids',
    explanation: 'They form strong 3D crystal lattices due to electrostatic attractions.'
  }
];
