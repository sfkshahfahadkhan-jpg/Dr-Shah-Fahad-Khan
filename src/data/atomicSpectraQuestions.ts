import { Question } from '../types';

export const ATOMIC_SPECTRA_QUIZ: Question[] = [
  {
    id: 'as-1',
    text: 'Which of the following types of spectra is typically produced by atoms in their gaseous state?',
    options: ['Continuous spectrum', 'Line spectrum', 'Band spectrum', 'Absorption spectrum'],
    correctAnswer: 'Line spectrum',
    explanation: 'Atomic gases or vapours at low pressure emit a line spectrum consisting of discrete wavelengths.'
  },
  {
    id: 'as-2',
    text: 'According to Bohr\'s theory, the angular momentum of an electron in a stationary orbit must be an integral multiple of:',
    options: ['h / π', 'h / 2π', '2π / h', 'nh / 2π'],
    correctAnswer: 'h / 2π',
    explanation: 'Bohr\'s second postulate states that mvr = n(h / 2π), where n is an integer.'
  },
  {
    id: 'as-3',
    text: 'The Balmer series of the hydrogen spectrum lies in which region of the electromagnetic spectrum?',
    options: ['Ultraviolet', 'Visible', 'Infrared', 'X-ray'],
    correctAnswer: 'Visible',
    explanation: 'The Balmer series corresponds to transitions ending at the n=2 level and its lines fall in the visible region.'
  },
  {
    id: 'as-4',
    text: 'What is the value of the ground state energy of a hydrogen atom?',
    options: ['13.6 eV', '-13.6 eV', '0 eV', '-3.4 eV'],
    correctAnswer: '-13.6 eV',
    explanation: 'The energy of the n=1 state in hydrogen is -13.6 eV.'
  },
  {
    id: 'as-5',
    text: 'The Lyman series of hydrogen spectrum is obtained when the electron transitions from outer orbits to which orbit?',
    options: ['First orbit (n=1)', 'Second orbit (n=2)', 'Third orbit (n=3)', 'Infinite orbit'],
    correctAnswer: 'First orbit (n=1)',
    explanation: 'Lyman series is produced when electrons jump from any higher state to the n=1 state.'
  },
  {
    id: 'as-6',
    text: 'The radius of the first Bohr orbit (n=1) for hydrogen is approximately:',
    options: ['0.53 nm', '0.053 nm', '5.3 nm', '0.0053 nm'],
    correctAnswer: '0.053 nm',
    explanation: 'The first Bohr radius r1 is calculated to be 0.053 nm or 0.53 Å.'
  },
  {
    id: 'as-7',
    text: 'X-rays are produced when high-speed electrons strike a target and knock out electrons from:',
    options: ['Outer shells', 'Inner shells', 'The nucleus', 'The surface only'],
    correctAnswer: 'Inner shells',
    explanation: 'Characteristic X-rays are emitted when an electron from an inner shell (K or L) is removed and an outer electron falls into the vacancy.'
  },
  {
    id: 'as-8',
    text: 'The "Bremsstrahlung" or braking radiation results in which type of X-ray spectrum?',
    options: ['Line spectrum', 'Band spectrum', 'Continuous spectrum', 'Absorption spectrum'],
    correctAnswer: 'Continuous spectrum',
    explanation: 'Continuous X-rays are produced due to the deceleration of electrons as they pass near the nuclei of the target atoms.'
  },
  {
    id: 'as-9',
    text: 'In the production of characteristic X-rays, a K-alpha (Kα) photon is emitted when an electron jumps from:',
    options: ['L shell to K shell', 'M shell to K shell', 'N shell to K shell', 'K shell to L shell'],
    correctAnswer: 'L shell to K shell',
    explanation: 'Kα transition occurs between adjacent shells L (n=2) and K (n=1).'
  },
  {
    id: 'as-10',
    text: 'LASER is an acronym for:',
    options: [
      'Light Amplification by Stimulated Emission of Radiation',
      'Light Absorption by Stimulated Emission of Radiation',
      'Long Amplification by Spontaneous Emission of Radiation',
      'Light Amplification by Spontaneous Emission of Radiation'
    ],
    correctAnswer: 'Light Amplification by Stimulated Emission of Radiation',
    explanation: 'Laser works on the principle of stimulated emission to produce coherent light.'
  },
  {
    id: 'as-11',
    text: 'A state in which an atom can reside for a relatively long time (~10⁻³ s) is known as:',
    options: ['Ground state', 'Excited state', 'Metastable state', 'Unstable state'],
    correctAnswer: 'Metastable state',
    explanation: 'Metastable states have much longer lifetimes than ordinary excited states (~10⁻⁸ s).'
  },
  {
    id: 'as-12',
    text: 'For laser action to occur, which condition must be satisfied?',
    options: ['Spontaneous emission', 'Population inversion', 'Thermal equilibrium', 'Ground state resonance'],
    correctAnswer: 'Population inversion',
    explanation: 'Population inversion means more atoms are in the excited state than in the ground state.'
  },
  {
    id: 'as-13',
    text: 'The energy of a photon emitted during a transition is given by hf = Ei - Ef. This is Bohr\'s:',
    options: ['First postulate', 'Second postulate', 'Third postulate', 'Fourth postulate'],
    correctAnswer: 'Third postulate',
    explanation: 'Bohr\'s third postulate relates the frequency of the emitted radiation to the energy difference between orbits.'
  },
  {
    id: 'as-14',
    text: 'The Paschen series transitions end at which energy level?',
    options: ['n = 1', 'n = 2', 'n = 3', 'n = 4'],
    correctAnswer: 'n = 3',
    explanation: 'Paschen series lines fall in the infrared region and result from transitions to the n=3 level.'
  },
  {
    id: 'as-15',
    text: 'What is the wavelength of K-alpha X-rays compared to K-beta X-rays?',
    options: ['Longer', 'Shorter', 'Same', 'Exactly half'],
    correctAnswer: 'Longer',
    explanation: 'Kα involves a smaller energy jump (L to K) than Kβ (M to K), therefore Kα has a longer wavelength (E = hc/λ).'
  },
  {
    id: 'as-16',
    text: 'In a Helium-Neon laser, the neon atoms are excited by collisions with:',
    options: ['Electrons', 'Photons', 'Helium atoms', 'Ne atoms'],
    correctAnswer: 'Helium atoms',
    explanation: 'Helium atoms are excited by discharge and then transfer their energy to Neon atoms via collisions.'
  },
  {
    id: 'as-17',
    text: 'The Rydberg constant Rh has a value of approximately:',
    options: ['1.097 x 10⁷ m⁻¹', '1.097 x 10⁻⁷ m⁻¹', '6.63 x 10⁻³⁴ J s', '9 x 10⁹ N m² C⁻²'],
    correctAnswer: '1.097 x 10⁷ m⁻¹',
    explanation: 'The Rydberg constant is fundamental in describing the spectral lines of various chemical elements.'
  },
  {
    id: 'as-18',
    text: 'Which of the following series of hydrogen spectrum is in the Ultraviolet region?',
    options: ['Balmer', 'Lyman', 'Paschen', 'Brackett'],
    correctAnswer: 'Lyman',
    explanation: 'Lyman series transitions have the largest energy changes, placing them in the UV region.'
  },
  {
    id: 'as-19',
    text: 'The transition of electrons in heavy atoms results in the emission of:',
    options: ['Visible light', 'Infrared radiation', 'X-rays', 'Gamma rays'],
    correctAnswer: 'X-rays',
    explanation: 'Heavy atoms have large Z, leading to high energy differences between inner shells, producing X-rays.'
  },
  {
    id: 'as-20',
    text: 'The minimum wavelength of X-rays produced depends on:',
    options: ['Nature of target', 'Current in the tube', 'Accelerating voltage V', 'Size of the tube'],
    correctAnswer: 'Accelerating voltage V',
    explanation: 'λ_min = hc / (eV). It is independent of the target material.'
  },
  {
    id: 'as-21',
    text: 'Heisenberg\'s uncertainty principle can be used to show that electrons:',
    options: [
      'Cannot exist inside the nucleus',
      'Must exist inside the nucleus',
      'Have zero momentum',
      'Move in circular paths'
    ],
    correctAnswer: 'Cannot exist inside the nucleus',
    explanation: 'If an electron were confined to a nucleus (~10⁻¹⁴ m), its kinetic energy would be so high (~20 MeV) that it would escape.'
  },
  {
    id: 'as-22',
    text: 'The CAT-scanner uses which radiation to visualize internal organs?',
    options: ['Infrared', 'Ultraviolet', 'X-rays', 'Microwaves'],
    correctAnswer: 'X-rays',
    explanation: 'Computerized Axial Tomography (CAT) uses X-ray beams from multiple angles to create 3D images.'
  },
  {
    id: 'as-23',
    text: 'Stimulated emission results in a photon that is:',
    options: [
      'In phase with the incident photon',
      'Out of phase with the incident photon',
      'Different frequency than incident photon',
      'Randomly directed'
    ],
    correctAnswer: 'In phase with the incident photon',
    explanation: 'In stimulated emission, the emitted photon has the same energy, phase, direction, and polarization as the incident one.'
  },
  {
    id: 'as-24',
    text: 'What is the energy of a photon required to excite an electron from n=1 to n=2 in a hydrogen atom?',
    options: ['13.6 eV', '10.2 eV', '3.4 eV', '1.85 eV'],
    correctAnswer: '10.2 eV',
    explanation: 'ΔE = E2 - E1 = -3.4 - (-13.6) = 10.2 eV.'
  },
  {
    id: 'as-25',
    text: 'The total energy of an electron in the nth orbit of hydrogen is proportional to:',
    options: ['n', 'n²', '1/n', '1/n²'],
    correctAnswer: '1/n²',
    explanation: 'En = -13.6 / n² eV. Thus En ∝ 1/n².'
  },
  {
    id: 'as-26',
    text: 'The ionization potential of hydrogen atom is:',
    options: ['13.6 V', '10.2 V', '3.4 V', '0 V'],
    correctAnswer: '13.6 V',
    explanation: 'Ionization energy is 13.6 eV, so the potential required is 13.6 V.'
  },
  {
    id: 'as-27',
    text: 'The Brackett series corresponds to electron transitions ending at level:',
    options: ['n = 2', 'n = 3', 'n = 4', 'n = 5'],
    correctAnswer: 'n = 4',
    explanation: 'Brackett series: transitions to n=4.'
  },
  {
    id: 'as-28',
    text: 'Which shell transition produces the most energetic X-ray in the K-series?',
    options: ['Kα', 'Kβ', 'Kγ', 'Lα'],
    correctAnswer: 'Kγ',
    explanation: 'Kγ involves a jump from n=4 to n=1, the largest energy difference listed for K-series.'
  },
  {
    id: 'as-29',
    text: 'Bohr\'s model was successful in explaining the spectrum of:',
    options: ['Hydrogen only', 'Helium', 'All multi-electron atoms', 'Heavy metals'],
    correctAnswer: 'Hydrogen only',
    explanation: 'Bohr\'s simple model only works for single-electron systems like H, He⁺, Li²⁺.'
  },
  {
    id: 'as-30',
    text: 'What is the characteristic feature of Laser light?',
    options: ['Monochromatic', 'Coherent', 'Uni-directional', 'All of these'],
    correctAnswer: 'All of these',
    explanation: 'Laser light is highly monochromatic, coherent, and travels in a single direction.'
  },
  {
    id: 'as-31',
    text: 'A band spectrum is characteristic of which of the following?',
    options: ['Atoms', 'Molecules', 'Solids', 'High-pressure gases'],
    correctAnswer: 'Molecules',
    explanation: 'Molecules produce band spectra due to closely spaced rotational and vibrational energy levels.'
  },
  {
    id: 'as-32',
    text: 'The value of the Bohr radius (r1) depends on which physical constants?',
    options: ['h, m, e, ε₀', 'h, c, e, G', 'h, m, c, k', 'ε₀, c, m, e'],
    correctAnswer: 'h, m, e, ε₀',
    explanation: 'r1 = ε₀h² / (πme²).'
  },
  {
    id: 'as-33',
    text: 'What is the velocity of an electron in the nth Bohr orbit proportional to?',
    options: ['n', 'n²', '1/n', '1/n²'],
    correctAnswer: '1/n',
    explanation: 'vn = 2πke² / (nh). Thus vn ∝ 1/n.'
  },
  {
    id: 'as-34',
    text: 'In the hydrogen atom, if the electron jumps from n=5 to n=2, the line belongs to which series?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Pfund'],
    correctAnswer: 'Balmer',
    explanation: 'Any transition ending at n=2 belongs to the Balmer series.'
  },
  {
    id: 'as-35',
    text: 'The "Series Limit" of a spectral series occurs when the initial orbit is:',
    options: ['n = 1', 'n = 2', 'n = 10', 'n = ∞'],
    correctAnswer: 'n = ∞',
    explanation: 'The series limit is the shortest wavelength in a series, occurring when an electron falls from infinity.'
  },
  {
    id: 'as-36',
    text: 'The energy of the electron in the nth orbit of hydrogen is En = -E₀ / n². What is E₀?',
    options: ['13.6 eV', '3.4 eV', '10.2 eV', '0 eV'],
    correctAnswer: '13.6 eV',
    explanation: 'E₀ is the ionization energy of hydrogen, 13.6 eV.'
  },
  {
    id: 'as-37',
    text: 'The production of X-rays is the inverse process of:',
    options: ['Pair production', 'Compton effect', 'Photoelectric effect', 'Nuclear fission'],
    correctAnswer: 'Photoelectric effect',
    explanation: 'Photoelectric effect: Light -> Electrons. X-rays: Electrons -> Light.'
  },
  {
    id: 'as-38',
    text: 'Which of the following is true for characteristic X-rays?',
    options: [
      'They depend on the target material',
      'They depend on the accelerating voltage only',
      'They form a continuous spectrum',
      'They are produced by deceleration only'
    ],
    correctAnswer: 'They depend on the target material',
    explanation: 'Characteristic X-rays result from electronic transitions within the atoms of the target metal.'
  },
  {
    id: 'as-39',
    text: 'The "K-shell" in an atom corresponds to which principal quantum number?',
    options: ['n = 0', 'n = 1', 'n = 2', 'n = 3'],
    correctAnswer: 'n = 1',
    explanation: 'The K, L, M, N shells correspond to n = 1, 2, 3, 4 respectively.'
  },
  {
    id: 'as-40',
    text: 'Which part of the X-ray spectrum is called "Hard X-rays"?',
    options: [
      'Low energy / Long wavelength',
      'High energy / Short wavelength',
      'Low energy / Short wavelength',
      'High energy / Long wavelength'
    ],
    correctAnswer: 'High energy / Short wavelength',
    explanation: 'Hard X-rays have higher frequency and greater penetrating power.'
  },
  {
    id: 'as-41',
    text: 'In spontaneous emission, the direction of the emitted photon is:',
    options: ['Fixed', 'Random', 'Same as the incident photon', 'Parallel to the electric field'],
    correctAnswer: 'Random',
    explanation: 'Spontaneous emission occurs naturally and randomly in all directions.'
  },
  {
    id: 'as-42',
    text: 'In a laser, "Optical Pumping" is a method used to achieve:',
    options: ['Spontaneous emission', 'Population inversion', 'Thermal cooling', 'Atomic collision'],
    correctAnswer: 'Population inversion',
    explanation: 'Optical pumping uses light to excite a large number of atoms to higher energy levels.'
  },
  {
    id: 'as-43',
    text: 'The three essential components of a laser are the gaining medium, a pumping source, and:',
    options: ['A lens', 'An optical resonator (mirrors)', 'A vacuum tube', 'A prism'],
    correctAnswer: 'An optical resonator (mirrors)',
    explanation: 'The resonator provides feedback to amplify the light via stimulated emission.'
  },
  {
    id: 'as-44',
    text: 'Which wavelength is emitted by a Helium-Neon laser?',
    options: ['632.8 nm', '400 nm', '10.6 μm', '1064 nm'],
    correctAnswer: '632.8 nm',
    explanation: 'The He-Ne laser is famous for its bright red beam at 632.8 nm.'
  },
  {
    id: 'as-45',
    text: 'The process of removing an electron from an atom is called:',
    options: ['Excitation', 'Ionization', 'Polarization', 'Transmutation'],
    correctAnswer: 'Ionization',
    explanation: 'Ionization is the transition of an electron to n = ∞.'
  },
  {
    id: 'as-46',
    text: 'What is the frequency of the first line (longest wavelength) of the Lyman series?',
    options: ['3Rhc / 4', 'Rhc', 'Rhc/4', '5Rhc/36'],
    correctAnswer: '3Rhc / 4',
    explanation: 'f = Rc(1/1² - 1/2²) = 3Rc/4.'
  },
  {
    id: 'as-47',
    text: 'If the accelerating voltage in an X-ray tube is doubled, the minimum wavelength will:',
    options: ['Double', 'Halve', 'Remain same', 'Increase by √2'],
    correctAnswer: 'Halve',
    explanation: 'λmin = hc / (eV). So λmin ∝ 1/V.'
  },
  {
    id: 'as-48',
    text: 'The maximum frequency of X-rays produced in a tube depends on:',
    options: ['Target material', 'Filament current', 'Accelerating potential', 'Pressure in tube'],
    correctAnswer: 'Accelerating potential',
    explanation: 'hf_max = eV. The maximum energy is limited by the potential difference.'
  },
  {
    id: 'as-49',
    text: 'Holography is a technique to produce which type of images?',
    options: ['Black and white', 'Magnified', 'Three-dimensional', 'Thermal'],
    correctAnswer: 'Three-dimensional',
    explanation: 'Lasers are used in holography to record phase information for 3D reconstruction.'
  },
  {
    id: 'as-50',
    text: 'In the Bohr model, the angular momentum of an electron is quantized in units of:',
    options: ['h', 'h / 2π', 'h / π', '2πh'],
    correctAnswer: 'h / 2π',
    explanation: 'L = n(h/2π).'
  },
  {
    id: 'as-51',
    text: 'The Pfund series of the hydrogen spectrum lies in which region?',
    options: ['Ultraviolet', 'Visible', 'Near Infrared', 'Far Infrared'],
    correctAnswer: 'Far Infrared',
    explanation: 'Transitions to n=5 result in very low energy photons in the far IR region.'
  },
  {
    id: 'as-52',
    text: 'Which electronic transition produces the "Second line" of the Balmer series?',
    options: ['n=3 to n=2', 'n=4 to n=2', 'n=2 to n=1', 'n=5 to n=2'],
    correctAnswer: 'n=4 to n=2',
    explanation: '1st line: 3->2. 2nd line: 4->2. 3rd line: 5->2.'
  },
  {
    id: 'as-53',
    text: 'The energy Required to excite an electron from n=1 to n=3 in Hydrogen is:',
    options: ['13.6 eV', '10.2 eV', '12.09 eV', '1.51 eV'],
    correctAnswer: '12.09 eV',
    explanation: 'ΔE = E3 - E1 = -1.51 - (-13.6) = 12.09 eV.'
  },
  {
    id: 'as-54',
    text: 'The characteristic X-ray spectrum consists of:',
    options: ['Broad bands', 'Sharp peaks over a continuous background', 'Only a continuous curve', 'Dark lines'],
    correctAnswer: 'Sharp peaks over a continuous background',
    explanation: 'It is a combination of Continuous (Bremsstrahlung) and Characteristic (line) X-rays.'
  },
  {
    id: 'as-55',
    text: 'The wavelength of K-alpha radiation for a target with Z=40 is approximately proportional to:',
    options: ['1 / Z', '1 / Z²', 'Z', 'Z²'],
    correctAnswer: '1 / Z²',
    explanation: 'Moseley\'s law f ∝ (Z-b)². Since λ = c/f, λ ∝ 1/(Z-b)².'
  },
  {
    id: 'as-56',
    text: 'Why does an ordinary gas (like Air) not produce a line spectrum under normal conditions?',
    options: [
      'Atoms are not excited',
      'It produces continuous spectrum instead',
      'It is transparent',
      'It is too cold'
    ],
    correctAnswer: 'Atoms are not excited',
    explanation: 'Atoms must be in a low-pressure gaseous state and excited (e.g., by electric discharge) to emit light.'
  },
  {
    id: 'as-57',
    text: 'In X-ray production, the efficiency of conversion of electron energy to X-ray energy is typically:',
    options: ['100%', '50%', 'Less than 1%', '90%'],
    correctAnswer: 'Less than 1%',
    explanation: 'Most of the kinetic energy of the electrons is converted into heat in the target.'
  },
  {
    id: 'as-58',
    text: 'Which metal is often used as a target in X-ray tubes due to its high melting point?',
    options: ['Copper', 'Aluminum', 'Tungsten', 'Lead'],
    correctAnswer: 'Tungsten',
    explanation: 'Tungsten (W) has a very high melting point (~3400°C), allowing it to withstand high heat.'
  },
  {
    id: 'as-59',
    text: 'What is the relation between the Bohr radius of the nth orbit (rn) and the first orbit (r1)?',
    options: ['rn = r1 / n', 'rn = n * r1', 'rn = n² * r1', 'rn = r1 / n²'],
    correctAnswer: 'rn = n² * r1',
    explanation: 'rn ∝ n².'
  },
  {
    id: 'as-60',
    text: 'The ratio of the radius of the 2nd orbit to the 1st orbit in Hydrogen is:',
    options: ['2:1', '4:1', '1:2', '1:4'],
    correctAnswer: '4:1',
    explanation: 'r2 / r1 = (2)² / (1)² = 4.'
  },
  {
    id: 'as-61',
    text: 'Laser light travels in long distances without spreading much because it is:',
    options: ['Fast', 'Visible', 'Highly directional', 'Red'],
    correctAnswer: 'Highly directional',
    explanation: 'Low divergence is a key property of laser beams.'
  },
  {
    id: 'as-62',
    text: 'The life time of an atom in a metastable state is about how many times that of an ordinary excited state?',
    options: ['10 times', '100 times', '100,000 times', 'Same'],
    correctAnswer: '100,000 times',
    explanation: 'Metastable state: ~10⁻³ s. Ordinary excited state: ~10⁻⁸ s.'
  },
  {
    id: 'as-63',
    text: 'The energy emitted when a hydrogen atom transitions from n=∞ to n=1 is:',
    options: ['13.6 eV', '10.2 eV', '0 eV', '13.6 J'],
    correctAnswer: '13.6 eV',
    explanation: 'E = E∞ - E1 = 0 - (-13.6) = 13.6 eV.'
  },
  {
    id: 'as-64',
    text: 'The Lyman series lines occur in which region?',
    options: ['Infrared', 'Visible', 'Ultraviolet', 'None'],
    correctAnswer: 'Ultraviolet',
    explanation: 'These transitions involve the largest energy gaps in Hydrogen.'
  },
  {
    id: 'as-65',
    text: 'Continuous X-rays are also known as:',
    options: ['Hard X-rays', 'Soft X-rays', 'Braking radiation', 'Gamma rays'],
    correctAnswer: 'Braking radiation',
    explanation: 'Bremsstrahlung is German for "braking radiation".'
  },
  {
    id: 'as-66',
    text: 'The "K-beta" line results from transition between:',
    options: ['L to K', 'M to K', 'N to K', 'M to L'],
    correctAnswer: 'M to K',
    explanation: 'K-alpha is L->K; K-beta is M->K.'
  },
  {
    id: 'as-67',
    text: 'Which part of the Bohr model was criticized by classical physics?',
    options: [
      'Stable non-radiating orbits',
      'Quantization of angular momentum',
      'Electron jumping between states',
      'All of these'
    ],
    correctAnswer: 'All of these',
    explanation: 'Classical theory predicted that orbiting electrons should radiate energy continuously and spiral into the nucleus.'
  },
  {
    id: 'as-68',
    text: 'The wavelength of laser light is precisely defined. This property is known as:',
    options: ['Coherence', 'Monochromaticity', 'Directionality', 'Intensity'],
    correctAnswer: 'Monochromaticity',
    explanation: 'Monochromatic means "one color" or one specific wavelength.'
  },
  {
    id: 'as-69',
    text: 'The "Excitation Potential" is the potential required to:',
    options: [
      'Remove an electron',
      'Raise an electron to a higher orbit',
      'Stop an electron',
      'Create an X-ray'
    ],
    correctAnswer: 'Raise an electron to a higher orbit',
    explanation: 'To move an electron from n=1 to n=2, an excitation potential of 10.2V is needed.'
  },
  {
    id: 'as-70',
    text: 'The Rydberg constant (Rh) for hydrogen is relate to the fine structure constant? (Advanced)',
    options: ['Yes', 'No', 'Only at high temperatures', 'Only for X-rays'],
    correctAnswer: 'Yes',
    explanation: 'It is a combination of fundamental constants including the fine structure constant.'
  },
  {
    id: 'as-71',
    text: 'Which shell transition in a multi-electron atom requires the most energy?',
    options: ['M to L', 'L to K', 'N to M', 'O to N'],
    correctAnswer: 'L to K',
    explanation: 'The gap between n=2 and n=1 is always the largest.'
  },
  {
    id: 'as-72',
    text: 'The "Balmer Series" ending at n=2 was the first to be discovered because:',
    options: [
      'It is the most energetic',
      'It lies in the visible region',
      'It has only two lines',
      'It only occurs in Helium'
    ],
    correctAnswer: 'It lies in the visible region',
    explanation: 'Visible light is easy to observe with the naked eye using early spectroscopes.'
  },
  {
    id: 'as-73',
    text: 'The wavelength of the 3rd line of Balmer series transition is:',
    options: ['n=5 to n=2', 'n=3 to n=2', 'n=4 to n=2', 'n=∞ to n=2'],
    correctAnswer: 'n=5 to n=2',
    explanation: 'Lines go 3->2, 4->2, 5->2, ...'
  },
  {
    id: 'as-74',
    text: 'A "Continuous Spectrum" is produced by:',
    options: ['Incandescent solids', 'Monatomic gases', 'Metastable states', 'Lasers'],
    correctAnswer: 'Incandescent solids',
    explanation: 'Hot solids (like a lightbulb filament) emit a continuous range of wavelengths.'
  },
  {
    id: 'as-75',
    text: 'The Bohr model cannot successfully explain the spectra of which atom?',
    options: ['Hydrogen', 'Deuterium', 'Helium', 'Li++'],
    correctAnswer: 'Helium',
    explanation: 'Bohr model works only for single-electron atoms/ions.'
  },
  {
    id: 'as-76',
    text: 'What happens to the energy difference between orbits as n increases?',
    options: ['Increases', 'Decreases', 'Remains same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Orbits get closer together in energy as n increases (E ∝ 1/n²).'
  },
  {
    id: 'as-77',
    text: 'The ratio of energies E2 / E1 for Hydrogen is:',
    options: ['2', '4', '1/4', '1/2'],
    correctAnswer: '1/4',
    explanation: 'E2 = -13.6/4, E1 = -13.6. Ratio is 1/4.'
  },
  {
    id: 'as-78',
    text: 'Which device uses lasers to "weld" a detached retina?',
    options: ['MRI', 'CAT-scanner', 'Laser photocoagulator', 'X-ray machine'],
    correctAnswer: 'Laser photocoagulator',
    explanation: 'The pinpoint accuracy and thermal effect of lasers are used in eye surgery.'
  },
  {
    id: 'as-79',
    text: 'Stimulated emission is the process used to _____ light.',
    options: ['Absorb', 'Amplify', 'Refract', 'Polarize'],
    correctAnswer: 'Amplify',
    explanation: 'One incident photon triggers the emission of another, doubling the signal.'
  },
  {
    id: 'as-80',
    text: 'The "Ground State" corresponds to which quantum number?',
    options: ['n = 0', 'n = 1', 'n = ∞', 'n = -1'],
    correctAnswer: 'n = 1',
    explanation: 'It is the lowest possible energy state for an electron in an atom.'
  },
  {
    id: 'as-81',
    text: 'If an atom has 3 energy levels, how many emission lines are possible?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
    explanation: 'Transitions: 3->1, 3->2, 2->1.'
  },
  {
    id: 'as-82',
    text: 'Which series of Hydrogen spectrum is completely in the Infrared region?',
    options: ['Lyman', 'Balmer', 'Paschen', 'All of these'],
    correctAnswer: 'Paschen',
    explanation: 'Paschen, Brackett, and Pfund are all IR series.'
  },
  {
    id: 'as-83',
    text: 'The energy of a photon emitted during an n=2 to n=1 transition in hydrogen is approx:',
    options: ['13.6 eV', '12.1 eV', '10.2 eV', '3.4 eV'],
    correctAnswer: '10.2 eV',
    explanation: '-3.4 - (-13.6) = 10.2 eV.'
  },
  {
    id: 'as-84',
    text: 'The ratio of wavelengths of the first lines of Lyman and Balmer series is approx:',
    options: ['5 : 27', '27 : 5', '1 : 4', '4 : 1'],
    correctAnswer: '5 : 27',
    explanation: '1/λL = R(1-1/4) = 3R/4. 1/λB = R(1/4-1/9) = 5R/36. λL/λB = (5/36) / (3/4) = 5/27.'
  },
  {
    id: 'as-85',
    text: 'Which X-ray has the highest frequency?',
    options: ['K-alpha', 'K-beta', 'L-alpha', 'M-alpha'],
    correctAnswer: 'K-beta',
    explanation: 'K-series has higher energy than L or M. Beta (n=3 to 1) is higher energy than Alpha (n=2 to 1).'
  },
  {
    id: 'as-86',
    text: 'Is it possible to have a Population Inversion in a two-level system?',
    options: ['Yes', 'No', 'Only at 0K', 'Only for metals'],
    correctAnswer: 'No',
    explanation: 'In a two-level system, you can at most achieve 50/50 distribution. Three or more levels are needed for inversion.'
  },
  {
    id: 'as-87',
    text: 'Helium-Neon laser requires which gas in greater proportion?',
    options: ['Helium', 'Neon', 'Equal 50/50', 'Nitrogen'],
    correctAnswer: 'Helium',
    explanation: 'Typically 80-90% Helium is used to effectively pump the Neon atoms.'
  },
  {
    id: 'as-88',
    text: 'What part of the electromagnetic spectrum do X-rays occupy?',
    options: [
      'Wavelengths longer than UV',
      'Wavelengths shorter than UV but longer than Gamma',
      'Same as visible light',
      'Microwave region'
    ],
    correctAnswer: 'Wavelengths shorter than UV but longer than Gamma',
    explanation: 'X-rays are high frequency, high energy radiations between UV and Gamma rays.'
  },
  {
    id: 'as-89',
    text: 'The work of which scientist on the hydrogen spectrum led to Bohr\'s theory?',
    options: ['Einstein', 'Balmer', 'Newton', 'Lyman only'],
    correctAnswer: 'Balmer',
    explanation: 'Balmer\'s empirical formula for visible lines provided the clues for Bohr.'
  },
  {
    id: 'as-90',
    text: 'In the Bohr model, the kinetic energy of an electron is _____ its total energy.',
    options: ['Equal to', 'Opposite to', 'Twice', 'Half'],
    correctAnswer: 'Opposite to',
    explanation: 'KE = -Total Energy. Since Total Energy is negative, KE is positive and equal in magnitude.'
  },
  {
    id: 'as-91',
    text: 'X-rays travel in a vacuum with the speed of:',
    options: ['Sound', 'Light', 'Fast electrons', 'Slow neutrons'],
    correctAnswer: 'Light',
    explanation: 'X-rays are electromagnetic waves and travel at speed "c".'
  },
  {
    id: 'as-92',
    text: 'What property of X-rays makes them useful for studying crystal structures?',
    options: ['High speed', 'Charge', 'Wavelength comparable to atomic spacing', 'Small mass'],
    correctAnswer: 'Wavelength comparable to atomic spacing',
    explanation: 'This allows for diffraction (Bragg\'s Law) to occur.'
  },
  {
    id: 'as-93',
    text: 'A "Hard" X-ray has _____ penetrating power compared to a "Soft" X-ray.',
    options: ['More', 'Less', 'Same', 'Zero'],
    correctAnswer: 'More',
    explanation: 'Hard X-rays have higher frequency and energy.'
  },
  {
    id: 'as-94',
    text: 'The laser beam used in distance measurement is focused. This is due to its high:',
    options: ['Intensity', 'Coherence', 'Directionality', 'Red color'],
    correctAnswer: 'Directionality',
    explanation: 'Highly parallel rays allow for precise targeting over long distances.'
  },
  {
    id: 'as-95',
    text: 'The "Bremsstrahlung" spectrum is:',
    options: ['Continuous', 'Discrete', 'Only one wavelength', 'Absorptive'],
    correctAnswer: 'Continuous',
    explanation: 'It is produced by arbitrary deceleration amounts, giving a continuous range of energies.'
  },
  {
    id: 'as-96',
    text: 'When a hydrogen atom is ionized, its final energy level is:',
    options: ['n = 1', 'n = 100', 'n = 0', 'n = ∞'],
    correctAnswer: 'n = ∞',
    explanation: 'Ionization means the electron is no longer bound to the nucleus.'
  },
  {
    id: 'as-97',
    text: 'The Bohr Model is a _____ model.',
    options: ['Purely classical', 'Purely quantum', 'Semi-classical', 'Non-mathematical'],
    correctAnswer: 'Semi-classical',
    explanation: 'It uses classical circular orbits but introduces quantum postulates (quantization).'
  },
  {
    id: 'as-98',
    text: 'Which series transitions have the longest wavelengths in Hydrogen?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Pfund'],
    correctAnswer: 'Pfund',
    explanation: 'Energy is lowest for Pfund (n=5), so wavelength is longest (E = hc/λ).'
  },
  {
    id: 'as-99',
    text: 'X-rays can be deflected by which field?',
    options: ['Electric field', 'Magnetic field', 'Both', 'Neither'],
    correctAnswer: 'Neither',
    explanation: 'X-rays are uncharged photons and are not deflected by electromagnetic fields.'
  },
  {
    id: 'as-100',
    text: 'The main difference between X-rays and Gamma rays is their:',
    options: ['Speed', 'Frequency range only', 'Origin', 'Charge'],
    correctAnswer: 'Origin',
    explanation: 'X-rays originate from electronic transitions; Gamma rays originate from nuclear transitions.'
  }
];
