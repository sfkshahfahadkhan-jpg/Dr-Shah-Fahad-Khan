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
    id: 'chem-atom-30',
    text: 'Which subatomic particle was discovered by J.J. Thomson?',
    options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
    correctAnswer: 'Electron',
    explanation: 'He discovered electrons using cathode ray experiments in 1897.'
  },
  {
    id: 'chem-atom-31',
    text: 'The charge of an electron is:',
    options: ['+1.6 x 10⁻¹9 C', '-1.6 x 10⁻¹9 C', '9.1 x 10⁻³¹ C', '0 C'],
    correctAnswer: '-1.6 x 10⁻¹9 C',
    explanation: 'First measured accurately by Millikan.'
  },
  {
    id: 'chem-atom-32',
    text: 'Cathode rays are beams of:',
    options: ['Protons', 'Neutrons', 'Electrons', 'Photons'],
    correctAnswer: 'Electrons',
    explanation: 'They originate from the cathode in a discharge tube.'
  },
  {
    id: 'chem-atom-33',
    text: 'Who discovered the atomic nucleus?',
    options: ['Thomson', 'Rutherford', 'Bohr', 'Chadwick'],
    correctAnswer: 'Rutherford',
    explanation: 'He used the alpha particle scattering experiment in 1911.'
  },
  {
    id: 'chem-atom-34',
    text: 'The nucleus consists of:',
    options: ['Electrons and Protons', 'Protons and Neutrons', 'Electrons and Neutrons', 'Electrons only'],
    correctAnswer: 'Protons and Neutrons',
    explanation: 'These are collectively known as nucleons.'
  },
  {
    id: 'chem-atom-35',
    text: 'The neutron was discovered by James Chadwick in:',
    options: ['1897', '1911', '1932', '1913'],
    correctAnswer: '1932',
    explanation: 'He bombarded beryllium with alpha particles.'
  },
  {
    id: 'chem-atom-36',
    text: 'Isotopes are atoms of the same element with different number of:',
    options: ['Protons', 'Electrons', 'Neutrons', 'Photons'],
    correctAnswer: 'Neutrons',
    explanation: 'They have the same atomic number but different mass numbers.'
  },
  {
    id: 'chem-atom-37',
    text: 'Bohr’s model of the atom is based on:',
    options: ['Classical mechanics', 'Quantum theory', 'Relativity', 'Newtonian gravity'],
    correctAnswer: 'Quantum theory',
    explanation: 'He introduced quantized energy levels for electrons.'
  },
  {
    id: 'chem-atom-38',
    text: 'The region around the nucleus where the probability of finding an electron is maximum is an:',
    options: ['Orbit', 'Orbital', 'Shell', 'Subshell'],
    correctAnswer: 'Orbital',
    explanation: 'An orbital is a 3D space defined by wave functions.'
  },
  {
    id: 'chem-atom-39',
    text: 'The maximum number of electrons in the "n" shell is:',
    options: ['n²', '2n²', '2n', 'n'],
    correctAnswer: '2n²',
    explanation: 'For example, M shell (n=3) can hold 2(3)² = 18 electrons.'
  },
  {
    id: 'chem-atom-40',
    text: 'The azimuthal quantum number (l) for a "p" orbital is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'l=0 for s, l=1 for p, l=2 for d, l=3 for f.'
  },
  {
    id: 'chem-atom-41',
    text: 'The shape of a "p" orbital is:',
    options: ['Spherical', 'Dumbbell', 'Double dumbbell', 'Complicated'],
    correctAnswer: 'Dumbbell',
    explanation: 'p-orbitals are oriented along x, y, and z axes.'
  },
  {
    id: 'chem-atom-42',
    text: 'Which rule states that "No two electrons in an atom can have the same set of four quantum numbers"?',
    options: ['Hund’s rule', 'Pauli Exclusion Principle', 'Aufbau Principle', 'Heisenberg Principle'],
    correctAnswer: 'Pauli Exclusion Principle',
    explanation: 'This limits each orbital to 2 electrons with opposite spins.'
  },
  {
    id: 'chem-atom-43',
    text: 'Hund’s rule is applicable when electrons are filled in _____ orbitals.',
    options: ['s', 'Degenerate (p, d, f)', 'Inner', 'Outer'],
    correctAnswer: 'Degenerate (p, d, f)',
    explanation: 'Electrons prefer to occupy orbitals singly with parallel spins first.'
  },
  {
    id: 'chem-atom-44',
    text: 'The Aufbau Principle states that electrons fill orbitals in order of:',
    options: ['Decreasing energy', 'Increasing energy', 'Decreasing mass', 'Increasing distance'],
    correctAnswer: 'Increasing energy',
    explanation: 'Electrons occupy the lowest available energy levels first.'
  },
  {
    id: 'chem-atom-45',
    text: 'The "n + l" rule is used to determine:',
    options: ['Atomic mass', 'Relative energy of orbitals', 'Number of neutrons', 'Spin direction'],
    correctAnswer: 'Relative energy of orbitals',
    explanation: 'Higher (n+l) value means higher energy.'
  },
  {
    id: 'chem-atom-46',
    text: 'Which element has the electron configuration [Ar] 4s² 3d¹⁰ 4p⁵?',
    options: ['Chlorine', 'Bromine', 'Iodine', 'Krypton'],
    correctAnswer: 'Bromine',
    explanation: 'Bromine (Z=35) ends in 4p⁵.'
  },
  {
    id: 'chem-atom-47',
    text: 'X-rays are produced when fast-moving electrons strike a:',
    options: ['Gas', 'Liquid', 'Heavy metal target', 'Wood'],
    correctAnswer: 'Heavy metal target',
    explanation: 'Discovered by Roentgen.'
  },
  {
    id: 'chem-atom-48',
    text: 'The wavelength of X-rays is _____ compared to visible light.',
    options: ['Longer', 'Shorter', 'Same', 'Zero'],
    correctAnswer: 'Shorter',
    explanation: 'X-rays have higher energy and frequency.'
  },
  {
    id: 'chem-atom-49',
    text: 'Moseley’s Law states that the square root of frequency of X-rays is proportional to:',
    options: ['Atomic mass', 'Atomic number (Z)', 'Number of neutrons', 'Valency'],
    correctAnswer: 'Atomic number (Z)',
    explanation: '√ν = a(Z - b). This established Z as the fundamental property.'
  },
  {
    id: 'chem-atom-50',
    text: 'Mass spectrometer is used to determine:',
    options: ['Electronic structure', 'Relative isotopic masses', 'Atomic radius', 'Bond energy'],
    correctAnswer: 'Relative isotopic masses',
    explanation: 'It separates ions based on mass-to-charge ratio (m/e).'
  },
  {
    id: 'chem-atom-51',
    text: 'The radius of the first Bohr orbit of Hydrogen is:',
    options: ['0.529 Å', '1.0 Å', '2.1 Å', '0.0529 Å'],
    correctAnswer: '0.529 Å',
    explanation: 'Also known as the Bohr radius (a₀).'
  },
  {
    id: 'chem-atom-52',
    text: 'Quantum numbers are required to specify the _____ of an electron.',
    options: ['Position', 'Energy', 'Spin', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'n, l, m, s fully describe the electron state.'
  },
  {
    id: 'chem-atom-53',
    text: 'The maximum number of electrons in a "d" subshell is:',
    options: ['2', '6', '10', '14'],
    correctAnswer: '10',
    explanation: 'd-subshell has 5 orbitals, each holding 2 electrons.'
  },
  {
    id: 'chem-atom-54',
    text: 'Canal rays consist of:',
    options: ['Electrons', 'Positive ions', 'Neutrons', 'Photons'],
    correctAnswer: 'Positive ions',
    explanation: 'Discovered by Goldstein in a discharge tube with a perforated cathode.'
  },
  {
    id: 'chem-atom-55',
    text: 'The e/m ratio of cathode rays depends on:',
    options: ['Nature of gas', 'Material of cathode', 'Both A and B', 'None of above'],
    correctAnswer: 'None of above',
    explanation: 'It is a universal constant because all cathode rays are electrons.'
  },
  {
    id: 'chem-atom-56',
    text: 'The e/m ratio of canal rays depends on:',
    options: ['Nature of gas', 'Nature of electrodes', 'Pressure', 'Voltage'],
    correctAnswer: 'Nature of gas',
    explanation: 'Positive ions have different masses for different gases.'
  },
  {
    id: 'chem-atom-57',
    text: 'Which is the lightest subatomic particle?',
    options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
    correctAnswer: 'Electron',
    explanation: 'Mass ≈ 1/1836 of a proton.'
  },
  {
    id: 'chem-atom-58',
    text: 'Radioactivity was discovered by:',
    options: ['Marie Curie', 'Henry Becquerel', 'Rutherford', 'Einstein'],
    correctAnswer: 'Henry Becquerel',
    explanation: 'He observed that uranium salts emitted rays that fogged photographic plates.'
  },
  {
    id: 'chem-atom-59',
    text: 'Alpha particles are:',
    options: ['Helium nuclei (He²⁺)', 'Fast electrons', 'High energy photons', 'Hydrogen ions'],
    correctAnswer: 'Helium nuclei (He²⁺)',
    explanation: 'Consist of 2 protons and 2 neutrons.'
  },
  {
    id: 'chem-atom-60',
    text: 'Which radioactive rays have the highest penetrating power?',
    options: ['Alpha', 'Beta', 'Gamma', 'Cathode rays'],
    correctAnswer: 'Gamma',
    explanation: 'Gamma rays are high-energy electromagnetic waves.'
  },
  {
    id: 'chem-atom-61',
    text: 'The mass of a neutron is approximately equal to that of a:',
    options: ['Electron', 'Proton', 'Alpha particle', 'Positron'],
    correctAnswer: 'Proton',
    explanation: 'Both have a mass of roughly 1 amu.'
  },
  {
    id: 'chem-atom-62',
    text: 'Who proposed the "Plum Pudding" model of the atom?',
    options: ['Dalton', 'Thomson', 'Bohr', 'Schrodinger'],
    correctAnswer: 'Thomson',
    explanation: 'He visualized electrons embedded in a positive sphere.'
  },
  {
    id: 'chem-atom-63',
    text: 'The Rydberg constant (Rh) is used to calculate the _____ of spectral lines.',
    options: ['Wavelength', 'Frequency', 'Wave number', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Based on the Rydberg formula.'
  },
  {
    id: 'chem-atom-64',
    text: 'Which spectral series of Hydrogen lies in the visible region?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
    correctAnswer: 'Balmer',
    explanation: 'It involves transitions to n=2.'
  },
  {
    id: 'chem-atom-65',
    text: 'The Lyman series involves transitions to the _____ orbit.',
    options: ['1st', '2nd', '3rd', 'Infinity'],
    correctAnswer: '1st',
    explanation: 'These lines are in the UV region.'
  },
  {
    id: 'chem-atom-66',
    text: 'Heisenberg’s Uncertainty Principle states that it is impossible to simultaneously measure precisely:',
    options: ['Mass and Volume', 'Position and Momentum', 'Charge and Mass', 'Energy and Temperature'],
    correctAnswer: 'Position and Momentum',
    explanation: 'Δx * Δp ≥ h / 4π.'
  },
  {
    id: 'chem-atom-67',
    text: 'Planck’s Quantum Theory states that energy is emitted or absorbed in discrete packets called:',
    options: ['Electrons', 'Quanta/Photons', 'Orbitals', 'Neutrons'],
    correctAnswer: 'Quanta/Photons',
    explanation: 'E = hν.'
  },
  {
    id: 'chem-atom-68',
    text: 'The dual nature of matter (particle and wave) was proposed by:',
    options: ['Einstein', 'de Broglie', 'Bohr', 'Newton'],
    correctAnswer: 'de Broglie',
    explanation: 'λ = h / mv.'
  },
  {
    id: 'chem-atom-69',
    text: 'Wave-particle duality was experimentally verified for electrons by:',
    options: ['Davisson and Germer', 'Millikan', 'Thomson', 'Chadwick'],
    correctAnswer: 'Davisson and Germer',
    explanation: 'They observed electron diffraction in nickel crystals.'
  },
  {
    id: 'chem-atom-70',
    text: 'The Schrodinger wave equation describes electrons as:',
    options: ['Solid spheres', 'Three-dimensional waves', 'Points in space', 'Planets'],
    correctAnswer: 'Three-dimensional waves',
    explanation: 'It is the foundation of wave mechanics.'
  },
  {
    id: 'chem-atom-71',
    text: 'Magnetic quantum number (m) describes the _____ of an orbital.',
    options: ['Size', 'Shape', 'Orientation', 'Spin'],
    correctAnswer: 'Orientation',
    explanation: 'For p-orbitals, m can be -1, 0, +1 (px, py, pz).'
  },
  {
    id: 'chem-atom-72',
    text: 'The number of orbitals in a shell is given by:',
    options: ['2n²', 'n²', '2l + 1', 'n'],
    correctAnswer: 'n²',
    explanation: 'For n=3, there are 3² = 9 orbitals (one s, three p, five d).'
  },
  {
    id: 'chem-atom-73',
    text: 'The spin of an electron can be:',
    options: ['Clockwise (+1/2)', 'Anti-clockwise (-1/2)', 'Both A and B', 'Zero'],
    correctAnswer: 'Both A and B',
    explanation: 'Spin quantum number s can only have two values.'
  },
  {
    id: 'chem-atom-74',
    text: 'Chromium (Z=24) has an exceptional configuration which is:',
    options: ['[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁵', '[Ar] 4s⁰ 3d⁶', '[Ar] 3d⁶'],
    correctAnswer: '[Ar] 4s¹ 3d⁵',
    explanation: 'Half-filled d-subshell is extra stable.'
  },
  {
    id: 'chem-atom-75',
    text: 'Copper (Z=29) has an exceptional configuration which is:',
    options: ['[Ar] 4s² 3d⁹', '[Ar] 4s¹ 3d¹⁰', '[Ar] 4s⁰ 3d¹¹', '[Ar] 3d¹¹'],
    correctAnswer: '[Ar] 4s¹ 3d¹⁰',
    explanation: 'Fully filled d-subshell is extra stable.'
  },
  {
    id: 'chem-atom-76',
    text: 'The energy of a photon is inversely proportional to its:',
    options: ['Frequency', 'Wavelength', 'Wave number', 'Intensity'],
    correctAnswer: 'Wavelength',
    explanation: 'E = hc / λ.'
  },
  {
    id: 'chem-atom-77',
    text: 'Neutrons are used for:',
    options: ['Cancer therapy', 'Fission reactions', 'Tracer studies', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Neutrons have many applications in medicine and energy.'
  },
  {
    id: 'chem-atom-78',
    text: 'An alpha particle is _____ times heavier than a proton.',
    options: ['2', '4', '1836', 'Zero'],
    correctAnswer: '4',
    explanation: 'Mass of alpha particle is roughly 4 amu.'
  },
  {
    id: 'chem-atom-79',
    text: 'Which is a correct set of quantum numbers for an electron in a 2s orbital?',
    options: ['n=2, l=1, m=0', 'n=2, l=0, m=0', 'n=1, l=0, m=0', 'n=2, l=0, m=1'],
    correctAnswer: 'n=2, l=0, m=0',
    explanation: 'For s-orbital, l=0 and m must be 0.'
  },
  {
    id: 'chem-atom-80',
    text: 'The total number of nodes in a 3s orbital is:',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: 'Nodes = n - 1.'
  },
  {
    id: 'chem-atom-81',
    text: 'Isotopes of an element have the same _____ properties.',
    options: ['Chemical', 'Physical', 'Nuclear', 'Density'],
    correctAnswer: 'Chemical',
    explanation: 'Chemical properties depend on the number of electrons/protons.'
  },
  {
    id: 'chem-atom-82',
    text: 'The e/m ratio of an electron is:',
    options: ['1.758 x 10¹¹ C/kg', '1.6 x 10⁻¹⁹ C/kg', '9.1 x 10⁻³¹ C/kg', '1.0 C/kg'],
    correctAnswer: '1.758 x 10¹¹ C/kg',
    explanation: 'Determined by J.J. Thomson.'
  },
  {
    id: 'chem-atom-83',
    text: 'Deflection of cathode rays in a magnetic field shows they are:',
    options: ['Neutral', 'Negatively charged', 'Positively charged', 'Electromagnetic'],
    correctAnswer: 'Negatively charged',
    explanation: 'Using the left-hand rule.'
  },
  {
    id: 'chem-atom-84',
    text: 'Bohr’s theory failed to explain:',
    options: ['Fine structure of spectral lines', 'Spectra of multi-electron atoms', 'Zeeman and Stark effects', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'It was a semi-classical model.'
  },
  {
    id: 'chem-atom-85',
    text: 'Zeeman effect is the splitting of spectral lines in a _____ field.',
    options: ['Electric', 'Magnetic', 'Gravitational', 'Centrifugal'],
    correctAnswer: 'Magnetic',
    explanation: 'Stark effect is in an electric field.'
  },
  {
    id: 'chem-atom-86',
    text: 'The wave number is defined as:',
    options: ['1 / λ', 'λ', 'c / λ', 'h / λ'],
    correctAnswer: '1 / λ',
    explanation: 'Number of waves per unit length.'
  },
  {
    id: 'chem-atom-87',
    text: 'What is the mass number of an atom with 11 protons and 12 neutrons?',
    options: ['11', '12', '23', '1'],
    correctAnswer: '23',
    explanation: 'Mass number (A) = Z + N.'
  },
  {
    id: 'chem-atom-88',
    text: 'Isotopes of Hydrogen include:',
    options: ['Protium', 'Deuterium', 'Tritium', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'H-1, H-2, and H-3.'
  },
  {
    id: 'chem-atom-89',
    text: 'Heavy water contains which isotope of hydrogen?',
    options: ['Protium', 'Deuterium', 'Tritium', 'Carbon'],
    correctAnswer: 'Deuterium',
    explanation: 'D2O is used as a moderator in nuclear reactors.'
  },
  {
    id: 'chem-atom-90',
    text: 'The energy difference between two adjacent shells _____ as we move away from the nucleus.',
    options: ['Increases', 'Decreases', 'Stay same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Energy levels become closer at higher n.'
  },
  {
    id: 'chem-atom-91',
    text: 'The angular momentum of an electron in a Bohr orbit is:',
    options: ['nh / 2π', 'h / 2π', 'n²h / 2π', 'nh / π'],
    correctAnswer: 'nh / 2π',
    explanation: 'mvr = nh / 2π.'
  },
  {
    id: 'chem-atom-92',
    text: 'Which subshell has the lowest energy?',
    options: ['3s', '3p', '3d', '4s'],
    correctAnswer: '3s',
    explanation: 'Within a shell, s < p < d < f.'
  },
  {
    id: 'chem-atom-93',
    text: 'The size of an orbital is determined by which quantum number?',
    options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m)', 'Spin (s)'],
    correctAnswer: 'Principal (n)',
    explanation: 'Larger n means larger shell and orbital size.'
  },
  {
    id: 'chem-atom-94',
    text: 'The number of electrons in the valence shell of an Alkali metal is:',
    options: ['1', '2', '7', '8'],
    correctAnswer: '1',
    explanation: 'Group 1 elements have ns¹ configuration.'
  },
  {
    id: 'chem-atom-95',
    text: 'Continuous spectrum is produced by:',
    options: ['Hot solids', 'Excited gases', 'Atoms', 'Electrons'],
    correctAnswer: 'Hot solids',
    explanation: 'Like a light bulb filament.'
  },
  {
    id: 'chem-atom-96',
    text: 'Line spectrum is characteristic of:',
    options: ['Molecules', 'Atoms', 'Solids', 'Liquids'],
    correctAnswer: 'Atoms',
    explanation: 'Also known as atomic spectrum.'
  },
  {
    id: 'chem-atom-97',
    text: 'The ionization energy of hydrogen atom in ground state is:',
    options: ['13.6 eV', '10.2 eV', '3.4 eV', '0 eV'],
    correctAnswer: '13.6 eV',
    explanation: 'Energy needed to remove the electron completely.'
  },
  {
    id: 'chem-atom-98',
    text: 'Atomic radius is typically measured in:',
    options: ['pm', 'nm', 'Å', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Picometers, Nanometers, and Angstroms are common.'
  },
  {
    id: 'chem-atom-99',
    text: 'Which particle is used as a projectile in the first artificial transmutation of an element?',
    options: ['Proton', 'Neutron', 'Alpha particle', 'Electron'],
    correctAnswer: 'Alpha particle',
    explanation: 'Rutherford converted Nitrogen into Oxygen using alpha particles.'
  },
  {
    id: 'chem-atom-100',
    text: 'The modern view of an atom is based on:',
    options: ['Bohr model', 'Wave mechanical model', 'Thomson model', 'Dalton theory'],
    correctAnswer: 'Wave mechanical model',
    explanation: 'Using quantum mechanics and probability.'
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
