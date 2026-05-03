import { Question } from '../types';

export const CHEMISTRY_ATOMIC_STRUCTURE_QUIZ: Question[] = [
  {
    id: 'chem-atom-1',
    text: 'Cathode rays were discovered by:',
    options: ['William Crookes', 'J.J. Thomson', 'Rutherford', 'Chadwick'],
    correctAnswer: 'William Crookes',
    explanation: 'William Crookes observed cathode rays in a discharge tube.'
  },
  {
    id: 'chem-atom-2',
    text: 'The charge-to-mass (e/m) ratio of cathode rays was determined by:',
    options: ['Goldstein', 'J.J. Thomson', 'Millikan', 'Planck'],
    correctAnswer: 'J.J. Thomson',
    explanation: 'Thomson showed that e/m is independent of the nature of the gas in the tube.'
  },
  {
    id: 'chem-atom-3',
    text: 'Canal rays (positive rays) were discovered by:',
    options: ['Goldstein', 'Thomson', 'Rutherford', 'Dalton'],
    correctAnswer: 'Goldstein',
    explanation: 'Eugen Goldstein used a perforated cathode to observe positive rays.'
  },
  {
    id: 'chem-atom-4',
    text: 'The neutron was discovered by James Chadwick in 1932 by bombarding _____ with alpha particles.',
    options: ['Boron', 'Beryllium', 'Gold', 'Nitrogen'],
    correctAnswer: 'Beryllium',
    explanation: 'Be-9 + alpha -> C-12 + neutron.'
  },
  {
    id: 'chem-atom-5',
    text: 'The experiment which proved that most of the atom is empty space was:',
    options: ['Millikan’s oil drop', 'Rutherford’s alpha scattering', 'Thomson’s plum pudding', 'Discharge tube'],
    correctAnswer: 'Rutherford’s alpha scattering',
    explanation: 'Most alpha particles passed straight through the gold foil.'
  },
  {
    id: 'chem-atom-6',
    text: 'According to Bohr’s model, an electron radiates energy when it:',
    options: ['Moves in a fixed orbit', 'Jumps from a higher to a lower orbit', 'Jumps from a lower to a higher orbit', 'Is at rest'],
    correctAnswer: 'Jumps from a higher to a lower orbit',
    explanation: 'Energy is emitted as a photon of specific frequency.'
  },
  {
    id: 'chem-atom-7',
    text: 'Planck’s constant (h) has the value:',
    options: ['6.626 x 10^-34 J s', '6.022 x 10^23', '3.0 x 10^8', '1.6 x 10^-19'],
    correctAnswer: '6.626 x 10^-34 J s',
    explanation: 'E = hf.'
  },
  {
    id: 'chem-atom-8',
    text: 'Which quantum number describes the main energy level or shell?',
    options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m)', 'Spin (s)'],
    correctAnswer: 'Principal (n)',
    explanation: 'n = 1, 2, 3... (K, L, M...).'
  },
  {
    id: 'chem-atom-9',
    text: 'The azimuthal quantum number (l) for a "p" orbital is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 's:0, p:1, d:2, f:3.'
  },
  {
    id: 'chem-atom-10',
    text: 'The maximum number of electrons in a subshell is given by the formula:',
    options: ['2n²', '2(2l + 1)', 'n²', '2l + 1'],
    correctAnswer: '2(2l + 1)',
    explanation: 'For s (l=0): 2. For p (l=1): 6.'
  },
  {
    id: 'chem-atom-11',
    text: 'Which rule states that "No two electrons in an atom can have the same set of four quantum numbers"?',
    options: ['Aufbau Principle', 'Hund’s Rule', 'Pauli Exclusion Principle', 'Heisenberg Uncertainty Principle'],
    correctAnswer: 'Pauli Exclusion Principle',
    explanation: 'This limits each orbital to 2 electrons with opposite spins.'
  },
  {
    id: 'chem-atom-12',
    text: 'Hund’s Rule is applicable when filling _____ orbitals.',
    options: ['Degenerate', 's', 'K-shell', 'Only valence'],
    correctAnswer: 'Degenerate',
    explanation: 'Degenerate orbitals (same energy, like px, py, pz) are filled singly before pairing.'
  },
  {
    id: 'chem-atom-13',
    text: 'The electronic configuration of Chromium (Z=24) is exceptional because of:',
    options: ['4s² 3d⁴', '4s¹ 3d⁵', '4s² 3d⁶', '4s⁰ 3d⁶'],
    correctAnswer: '4s¹ 3d⁵',
    explanation: 'Half-filled d-orbitals provide extra stability.'
  },
  {
    id: 'chem-atom-14',
    text: 'The uncertainty principle was proposed by:',
    options: ['Werner Heisenberg', 'Louis de Broglie', 'Erwin Schrodinger', 'Bohr'],
    correctAnswer: 'Werner Heisenberg',
    explanation: 'It is impossible to determine both position and momentum simultaneously.'
  },
  {
    id: 'chem-atom-15',
    text: 'The wave-particle duality of matter was proposed by:',
    options: ['De Broglie', 'Planck', 'Einstein', 'Maxwell'],
    correctAnswer: 'De Broglie',
    explanation: 'λ = h/mv.'
  },
  {
    id: 'chem-atom-16',
    text: 'The region of space where there is maximum probability of finding an electron is the:',
    options: ['Shell', 'Orbit', 'Orbital', 'Nucleus'],
    correctAnswer: 'Orbital',
    explanation: 'Orbitals are 3D regions defined by wave functions.'
  },
  {
    id: 'chem-atom-17',
    text: 'A "d" subshell has how many orbitals?',
    options: ['1', '3', '5', '7'],
    correctAnswer: '5',
    explanation: 'm = -l to +l. For l=2, m = -2, -1, 0, 1, 2.'
  },
  {
    id: 'chem-atom-18',
    text: 'The mass of a proton is approximately _____ times that of an electron.',
    options: ['100', '1836', '1000', '183.6'],
    correctAnswer: '1836',
    explanation: 'Protons and neutrons are much heavier than electrons.'
  },
  {
    id: 'chem-atom-19',
    text: 'Lyman series occurs when an electron jumps to which orbit?',
    options: ['n=1', 'n=2', 'n=3', 'n=4'],
    correctAnswer: 'n=1',
    explanation: 'Lyman: n=1 (UV). Balmer: n=2 (Visible). Paschen: n=3 (IR).'
  },
  {
    id: 'chem-atom-20',
    text: 'Which series in the hydrogen spectrum lies in the visible region?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
    correctAnswer: 'Balmer',
    explanation: 'Balmer series is the only one in the visible spectrum.'
  },
  {
    id: 'chem-atom-21',
    text: 'The magnetic quantum number (m) gives the _____ of the orbital in space.',
    options: ['Shape', 'Size', 'Orientation', 'Spin'],
    correctAnswer: 'Orientation',
    explanation: 'm defines the behavior in a magnetic field.'
  },
  {
    id: 'chem-atom-22',
    text: 'X-rays are produced when high-speed cathode rays strike a:',
    options: ['Gas', 'Liquid', 'Metal target', 'Non-metal'],
    correctAnswer: 'Metal target',
    explanation: 'Roentgen discovered X-rays in 1895.'
  },
  {
    id: 'chem-atom-23',
    text: 'Moseley’s Law relates the frequency of X-rays to the _____ of the target metal.',
    options: ['Atomic mass', 'Atomic number', 'Density', 'Valency'],
    correctAnswer: 'Atomic number',
    explanation: '√ν = a(Z - b). Z is the fundamental property.'
  },
  {
    id: 'chem-atom-24',
    text: 'The number of electrons in the outermost shell of an element with atomic number 17 is:',
    options: ['2', '5', '7', '8'],
    correctAnswer: '7',
    explanation: '1s² 2s² 2p⁶ 3s² 3p⁵. Valence shell is n=3, total 2+5=7.'
  },
  {
    id: 'chem-atom-25',
    text: 'The shape of an "s" orbital is:',
    options: ['Dumbbell', 'Spherical', 'Complex', 'Linear'],
    correctAnswer: 'Spherical',
    explanation: 's-orbitals are non-directional and symmetric.'
  },
  {
    id: 'chem-atom-26',
    text: 'The electronic configuration of Copper (Z=29) is:',
    options: ['[Ar] 4s² 3d⁹', '[Ar] 4s¹ 3d¹⁰', '[Ar] 4s² 3d¹⁰', '[Ar] 4s¹ 3d⁹'],
    correctAnswer: '[Ar] 4s¹ 3d¹⁰',
    explanation: 'Full d-subshell is very stable.'
  },
  {
    id: 'chem-atom-27',
    text: 'The radius of the first Bohr orbit of Hydrogen is:',
    options: ['0.529 Å', '1.0 Å', '2.1 Å', '0.0529 Å'],
    correctAnswer: '0.529 Å',
    explanation: 'r = n² * 0.529 Å.'
  },
  {
    id: 'chem-atom-28',
    text: 'How many nodes are present in a 2s orbital?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Radial nodes = n - l - 1 = 2 - 0 - 1 = 1.'
  },
  {
    id: 'chem-atom-29',
    text: 'Which is the correct order of filling orbitals according to n+l rule?',
    options: ['3d, 4s, 4p', '4s, 3d, 4p', '4s, 4p, 3d', '3d, 4p, 4s'],
    correctAnswer: '4s, 3d, 4p',
    explanation: '4s (4+0=4), 3d (3+2=5), 4p (4+1=5 but higher n).'
  },
  {
    id: 'chem-atom-30',
    text: 'The splitting of spectral lines in an electric field is called the:',
    options: ['Zeeman effect', 'Stark effect', 'Photoelectric effect', 'Compton effect'],
    correctAnswer: 'Stark effect',
    explanation: 'Zeeman effect is in a magnetic field; Stark is in an electric field.'
  }
];
