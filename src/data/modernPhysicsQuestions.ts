import { Question } from '../types';

export const MODERN_PHYSICS_QUIZ: Question[] = [
  {
    id: 'mp-1',
    text: 'According to the Special Theory of Relativity, which of the following is an absolute invariant for all inertial observers?',
    options: ['Time interval', 'Length of an object', 'Speed of light', 'Mass of a particle'],
    correctAnswer: 'Speed of light',
    explanation: 'The speed of light in a vacuum is universal and constant for all observers regardless of their relative motion.'
  },
  {
    id: 'mp-2',
    text: 'If a photon of energy 5 eV strikes a metal surface with a work function of 2 eV, what is the maximum kinetic energy of the emitted photoelectrons?',
    options: ['7 eV', '3 eV', '5 eV', '2.5 eV'],
    correctAnswer: '3 eV',
    explanation: 'K.E max = hf - Φ = 5 eV - 2 eV = 3 eV.'
  },
  {
    id: 'mp-3',
    text: 'The Compton shift (Δλ) depends solely on which of the following parameters?',
    options: ['Incident wavelength', 'Intensity of light', 'Scattering angle', 'Target material'],
    correctAnswer: 'Scattering angle',
    explanation: 'Δλ = (h / mc)(1 - cosθ). The shift depends only on the angle θ and fundamental constants.'
  },
  {
    id: 'mp-4',
    text: 'An electron and a proton have the same De-Broglie wavelength. Which of the following is true about their momentum?',
    options: [
      'The electron has more momentum',
      'The proton has more momentum',
      'They have equal momentum',
      'It depends on their velocity'
    ],
    correctAnswer: 'They have equal momentum',
    explanation: 'λ = h / p. If λ is same, p (momentum) must be same.'
  },
  {
    id: 'mp-5',
    text: 'Pair production cannot occur in a vacuum because:',
    options: [
      'Energy cannot be conserved',
      'Momentum cannot be conserved',
      'Mass cannot be created',
      'Charge cannot be balanced'
    ],
    correctAnswer: 'Momentum cannot be conserved',
    explanation: 'A heavy nucleus is required to absorb the excess momentum of the incident photon for pair production to occur.'
  },
  {
    id: 'mp-6',
    text: 'The uncertainty principle forbids the simultaneous exact measurement of which pair of variables?',
    options: [
      'Energy and Time',
      'Position and Momentum',
      'Both A and B',
      'Charge and Voltage'
    ],
    correctAnswer: 'Both A and B',
    explanation: 'Heisenberg stated ΔxΔp ≥ h/2π and ΔEΔt ≥ h/2π.'
  },
  {
    id: 'mp-7',
    text: 'In Black Body radiation, as the temperature increases, the peak wavelength (λ_max) of the emitted radiation:',
    options: [
      'Shifts towards shorter wavelengths',
      'Shifts towards longer wavelengths',
      'Remains constant',
      'Becomes zero'
    ],
    correctAnswer: 'Shifts towards shorter wavelengths',
    explanation: 'Wien\'s displacement law states λ_max * T = constant; thus higher T means smaller λ_max.'
  },
  {
    id: 'mp-8',
    text: 'Which of the following processes confirms the materialization of energy?',
    options: ['Photoelectric effect', 'Compton effect', 'Pair production', 'Annihilation'],
    correctAnswer: 'Pair production',
    explanation: 'In pair production, a high-energy photon is converted into an electron-positron pair (matter).'
  },
  {
    id: 'mp-9',
    text: 'The rest mass of a photon is:',
    options: ['Zero', 'h/λ', 'hf/c²', '9.1 x 10⁻³¹ kg'],
    correctAnswer: 'Zero',
    explanation: 'Photons always travel at the speed of light and have zero rest mass.'
  },
  {
    id: 'mp-10',
    text: 'If an object moves at 0.6c, what is its relativistic mass compared to its rest mass m₀?',
    options: ['1.25 m₀', '1.66 m₀', '0.8 m₀', '2.0 m₀'],
    correctAnswer: '1.25 m₀',
    explanation: 'm = m₀ / sqrt(1 - v²/c²) = m₀ / sqrt(1 - 0.36) = m₀ / sqrt(0.64) = m₀ / 0.8 = 1.25 m₀.'
  },
  {
    id: 'mp-11',
    text: 'The photoelectric current is directly proportional to:',
    options: ['Frequency of incident light', 'Intensity of incident light', 'Work function', 'Stopping potential'],
    correctAnswer: 'Intensity of incident light',
    explanation: 'Intensity (number of photons per second) determines the number of electrons emitted (current).'
  },
  {
    id: 'mp-12',
    text: 'The magnitude of Compton shift is maximum when the scattering angle is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '180°',
    explanation: 'Δλ = (h/mc)(1 - cosθ). For 180°, cosθ = -1, thus (1 - cosθ) = 2 (maximum shift).'
  },
  {
    id: 'mp-13',
    text: 'X-rays are produced when high-speed electrons hit a target. This process is:',
    options: [
      'Inverse of photoelectric effect',
      'Similar to pair production',
      'Same as Compton effect',
      'Nuclear fission'
    ],
    correctAnswer: 'Inverse of photoelectric effect',
    explanation: 'In photoelectric effect, photons liberate electrons. In X-ray production, electrons liberate photons.'
  },
  {
    id: 'mp-14',
    text: 'The Davisson-Germer experiment proved which characteristic of electrons?',
    options: ['Particle nature', 'Wave nature', 'Massive nature', 'Spin nature'],
    correctAnswer: 'Wave nature',
    explanation: 'The experiment demonstrated electron diffraction, which is a wave phenomenon.'
  },
  {
    id: 'mp-15',
    text: 'Binding energy per nucleon is a measure of:',
    options: ['Size of nucleus', 'Charge of nucleus', 'Stability of nucleus', 'Density of nucleus'],
    correctAnswer: 'Stability of nucleus',
    explanation: 'Higher binding energy per nucleon indicates a more stable nucleus.'
  },
  {
    id: 'mp-16',
    text: 'If the wavelength of incident light is decreased in photoelectric effect, the stopping potential will:',
    options: ['Increase', 'Decrease', 'Remain same', 'Become zero'],
    correctAnswer: 'Increase',
    explanation: 'Smaller wavelength means higher energy. Higher energy photons create faster electrons, requiring more stopping potential.'
  },
  {
    id: 'mp-17',
    text: 'Which series of Hydrogen spectrum falls in the visible region?',
    options: ['Lyman series', 'Balmer series', 'Paschen series', 'Brackett series'],
    correctAnswer: 'Balmer series',
    explanation: 'Balmer series transitions to n=2 result in wavelengths within the visible spectrum.'
  },
  {
    id: 'mp-18',
    text: 'An α-particle is equivalent to:',
    options: ['Hydrogen nucleus', 'Helium nucleus', 'Electromagnetic wave', 'Fast electron'],
    correctAnswer: 'Helium nucleus',
    explanation: 'An alpha particle consists of 2 protons and 2 neutrons (He-4 nucleus).'
  },
  {
    id: 'mp-19',
    text: 'The half-life of a radioactive isotope is 2 days. After 6 days, what fraction of the original sample remains?',
    options: ['1/2', '1/4', '1/8', '1/16'],
    correctAnswer: '1/8',
    explanation: '6 days = 3 half-lives. Fraction remaining = (1/2)³ = 1/8.'
  },
  {
    id: 'mp-20',
    text: 'The phenomenon of Annihilation of matter refers to:',
    options: [
      'Conversion of mass into energy',
      'Conversion of energy into mass',
      'Radioactive decay',
      'Spontaneous fission'
    ],
    correctAnswer: 'Conversion of mass into energy',
    explanation: 'When a particle meets its antiparticle, they annihilate completely to produce photons (energy).'
  },
  {
    id: 'mp-21',
    text: 'Which ratio is constant for all galaxies according to Hubble\'s Law?',
    options: ['Velocity / Distance', 'Distance / Velocity', 'Mass / Radius', 'Time / Speed'],
    correctAnswer: 'Velocity / Distance',
    explanation: 'V = H₀ * d, where H₀ is the Hubble constant.'
  },
  {
    id: 'mp-22',
    text: 'Continuous X-ray spectrum is produced due to:',
    options: ['Energy transitions', 'Braking of electrons (Bremsstrahlung)', 'Pair production', 'Outer shell collisions'],
    correctAnswer: 'Braking of electrons (Bremsstrahlung)',
    explanation: 'Continuous X-rays are produced when electrons slow down near nuclei.'
  },
  {
    id: 'mp-23',
    text: 'The radius of the 1st Bohr orbit of Hydrogen is roughly:',
    options: ['0.053 nm', '0.53 nm', '5.3 nm', '0.0053 nm'],
    correctAnswer: '0.053 nm',
    explanation: 'r₁ = 0.529 Å = 0.0529 nm.'
  },
  {
    id: 'mp-24',
    text: 'Which nuclear radiation has the highest ionizing power?',
    options: ['Alpha rays', 'Beta rays', 'Gamma rays', 'X-rays'],
    correctAnswer: 'Alpha rays',
    explanation: 'Alpha particles are large and carry +2 charge, making them highly ionizing but least penetrating.'
  },
  {
    id: 'mp-25',
    text: 'Laser light is monochromatic and coherent. "Coherent" means the waves have:',
    options: [
      'Same frequency',
      'Constant phase relationship',
      'Same amplitude',
      'Same velocity'
    ],
    correctAnswer: 'Constant phase relationship',
    explanation: 'Coherence refers to the property of waves having a fixed or constant phase difference.'
  },
  {
    id: 'mp-26',
    text: 'The total energy of an electron in a Bohr orbit is:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Negative',
    explanation: 'The negative sign indicates the electron is bound to the nucleus.'
  },
  {
    id: 'mp-27',
    text: 'The work function depends on:',
    options: ['Intensity of light', 'Nature of the metal surface', 'Frequency of light', 'Shape of the metal'],
    correctAnswer: 'Nature of the metal surface',
    explanation: 'Work function is a characteristic property of the material.'
  },
  {
    id: 'mp-28',
    text: 'Neutrinos are emitted during which decay?',
    options: ['Alpha decay', 'Beta decay', 'Gamma decay', 'Fission'],
    correctAnswer: 'Beta decay',
    explanation: 'Beta decay involves the emission of an electron/positron and a neutrino/antineutrino.'
  },
  {
    id: 'mp-29',
    text: 'An inertial frame of reference is one where:',
    options: [
      'Acceleration is zero',
      'Velocity is constant',
      'Newton\'s laws hold true',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'Inertial frames move at constant velocity (zero acceleration) and follow Newton\'s laws.'
  },
  {
    id: 'mp-30',
    text: 'The solar energy is primarily due to:',
    options: ['Nuclear fission', 'Nuclear fusion', 'Chemical combustion', 'Gravitational collapse'],
    correctAnswer: 'Nuclear fusion',
    explanation: 'Hydrogen nuclei fuse to form Helium in the sun\'s core, releasing immense energy.'
  },
  {
    id: 'mp-31',
    text: 'According to Einstein\'s mass-energy relation, E=mc², the energy equivalent of 1 gram of matter is approximately:',
    options: ['9 x 10^13 J', '9 x 10^16 J', '3 x 10^8 J', '1 J'],
    correctAnswer: '9 x 10^13 J',
    explanation: 'E = m * c² = (10⁻³ kg) * (3 x 10⁸ m/s)² = 10⁻³ * 9 x 10¹⁶ = 9 x 10¹³ J.'
  },
  {
    id: 'mp-32',
    text: 'In the photoelectric effect, if the frequency of incident light is doubled (above threshold), the maximum kinetic energy of electrons will:',
    options: ['Double', 'Become more than double', 'Become less than double', 'Stay the same'],
    correctAnswer: 'Become more than double',
    explanation: 'KE = hf - Φ. If f doubles, KE_new = 2hf - Φ = 2(hf - Φ) + Φ = 2KE_old + Φ.'
  },
  {
    id: 'mp-33',
    text: 'The characteristic X-rays are produced when:',
    options: [
      'High-speed electrons hit the target nucleus',
      'Outer shell electrons jump to inner shell vacancies',
      'Nucleus is split',
      'Pair production occurs'
    ],
    correctAnswer: 'Outer shell electrons jump to inner shell vacancies',
    explanation: 'Characteristic X-rays result from specific electronic transitions between atomic energy levels.'
  },
  {
    id: 'mp-34',
    text: 'The De-Broglie wavelength of an electron accelerated through a potential difference of 100V is approximately:',
    options: ['1.23 Å', '12.3 Å', '123 Å', '0.123 Å'],
    correctAnswer: '1.23 Å',
    explanation: 'λ = 12.27 / sqrt(V) Å for electrons. λ = 12.27 / 10 = 1.227 Å.'
  },
  {
    id: 'mp-35',
    text: 'In radioactive decay, the Geiger-Nuttall law relates:',
    options: [
      'Decay constant and range of alpha particles',
      'Mass and energy',
      'Wavelength and frequency',
      'Half-life and temperature'
    ],
    correctAnswer: 'Decay constant and range of alpha particles',
    explanation: 'It states that isotopes with shorter half-lives emit higher energy alpha particles.'
  },
  {
    id: 'mp-36',
    text: 'What happens to the half-life of a radioactive substance if its initial mass is doubled?',
    options: ['Doubles', 'Halves', 'Stays the same', 'Becomes four times'],
    correctAnswer: 'Stays the same',
    explanation: 'Half-life is a characteristic property of the isotope and is independent of amount or external conditions.'
  },
  {
    id: 'mp-37',
    text: 'Which principle explains why an electron cannot exist inside the nucleus?',
    options: [
      'Pauli Exclusion Principle',
      'Heisenberg Uncertainty Principle',
      'Faraday\'s Law',
      'Coulomb\'s Law'
    ],
    correctAnswer: 'Heisenberg Uncertainty Principle',
    explanation: 'If an electron were confined to the nucleus (~10⁻¹⁴ m), its uncertainty in momentum would imply a kinetic energy far exceeding what is observed in beta decay.'
  },
  {
    id: 'mp-38',
    text: 'The mass of a nucleus is always _____ the sum of the masses of its constituent nucleons.',
    options: ['Greater than', 'Less than', 'Equal to', 'Twice'],
    correctAnswer: 'Less than',
    explanation: 'This difference is the mass defect, which is released as binding energy when the nucleus forms.'
  },
  {
    id: 'mp-39',
    text: 'In nuclear fission of U-235 by a thermal neutron, how many neutrons are typically released on average?',
    options: ['1', '2.5', '4', '0'],
    correctAnswer: '2.5',
    explanation: 'Fission of U-235 typically releases 2 to 3 neutrons, enabling a chain reaction.'
  },
  {
    id: 'mp-40',
    text: 'The Lorentz transformation equations reduce to Galilean transformations when:',
    options: ['v = c', 'v/c is very large', 'v/c is very small (v << c)', 'v = 0 only'],
    correctAnswer: 'v/c is very small (v << c)',
    explanation: 'At low speeds, relativistic effects are negligible and classical mechanics apply.'
  },
  {
    id: 'mp-41',
    text: 'Which photon has the highest energy?',
    options: ['Red light', 'Blue light', 'X-ray', 'Gamma ray'],
    correctAnswer: 'Gamma ray',
    explanation: 'Energy E = hf. Gamma rays have the highest frequency and thus the highest energy.'
  },
  {
    id: 'mp-42',
    text: 'In the Compton effect, the maximum kinetic energy is transferred to the electron when the photon is scattered at:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '180°',
    explanation: 'A 180° backscatter results in the largest wavelength shift and maximum energy loss for the photon.'
  },
  {
    id: 'mp-43',
    text: 'The biological effect of radiation is measured in:',
    options: ['Rad', 'Gray', 'Sievert', 'Becquerel'],
    correctAnswer: 'Sievert',
    explanation: 'Sievert (Sv) is the unit for dose equivalent, accounting for biological effectiveness.'
  },
  {
    id: 'mp-44',
    text: 'Which transition in Hydrogen atom emits a photon of highest frequency?',
    options: ['n=2 to n=1', 'n=3 to n=2', 'n=4 to n=3', 'n=5 to n=4'],
    correctAnswer: 'n=2 to n=1',
    explanation: 'The energy gap between n=2 and n=1 is the largest in the series.'
  },
  {
    id: 'mp-45',
    text: 'Nuclear force is:',
    options: [
      'Short range and charge independent',
      'Long range and charge dependent',
      'Short range and charge dependent',
      'Long range and charge independent'
    ],
    correctAnswer: 'Short range and charge independent',
    explanation: 'Nuclear forces act only over very small distances (~10⁻¹⁵ m) and are identical for protons and neutrons.'
  },
  {
    id: 'mp-46',
    text: 'A clock moving at a very high speed relative to an observer will appear to run:',
    options: ['Faster', 'Slower', 'The same', 'Backwards'],
    correctAnswer: 'Slower',
    explanation: 'This is time dilation; moving clocks are observed to tick slower.'
  },
  {
    id: 'mp-47',
    text: 'The threshold frequency of a metal is the minimum frequency required to:',
    options: [
      'Increase the temperature',
      'Eject photoelectrons',
      'Produce X-rays',
      'Conduct electricity'
    ],
    correctAnswer: 'Eject photoelectrons',
    explanation: 'Photons with frequency below threshold do not have enough energy to overcome the work function.'
  },
  {
    id: 'mp-48',
    text: 'In a Wilson Cloud Chamber, the path of an alpha particle is:',
    options: ['Thin and wavy', 'Thick and straight', 'Circular', 'Not visible'],
    correctAnswer: 'Thick and straight',
    explanation: 'Alpha particles are highly ionizing, leaving dense, straight tracks of ions.'
  },
  {
    id: 'mp-49',
    text: 'The mass of a positron is equal to the mass of:',
    options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
    correctAnswer: 'Electron',
    explanation: 'A positron is the antiparticle of an electron; they have identical mass but opposite charge.'
  },
  {
    id: 'mp-51',
    text: 'A proton and an alpha particle are accelerated through the same potential difference V. The ratio of their De-Broglie wavelengths (λp / λα) is:',
    options: ['1', '2', '2√2', '√8'],
    correctAnswer: '√8',
    explanation: 'λ = h/√(2mqV). Ratio = √(mα * qα / (mp * qp)) = √(4mp * 2qp / (mp * qp)) = √8 = 2√2.'
  },
  {
    id: 'mp-52',
    text: 'The "Redshift" observed in the spectra of distant galaxies is evidence for:',
    options: ['Contracting Universe', 'Expanding Universe', 'Static Universe', 'Supernova explosions'],
    correctAnswer: 'Expanding Universe',
    explanation: 'Hubble observed that light from distant objects is stretched to longer wavelengths, indicating they are moving away.'
  },
  {
    id: 'mp-53',
    text: 'Which elementary particle is responsible for the strong nuclear force that binds quarks together?',
    options: ['Photon', 'W Boson', 'Gluon', 'Graviton'],
    correctAnswer: 'Gluon',
    explanation: 'Gluons are the exchange particles (gauge bosons) for the strong force in quantum chromodynamics.'
  },
  {
    id: 'mp-54',
    text: 'In the Bohr model of the atom, the angular momentum of an electron in a stable orbit is quantized as:',
    options: ['n * h/2π', 'n * h/π', 'h / (n*2π)', 'n² * h/2π'],
    correctAnswer: 'n * h/2π',
    explanation: 'Bohr\'s second postulate states mvr = nh/2π.'
  },
  {
    id: 'mp-55',
    text: 'What is the energy of a photon whose wavelength is 400 nm? (hc ≈ 1240 eV.nm)',
    options: ['1.24 eV', '2.48 eV', '3.1 eV', '4.96 eV'],
    correctAnswer: '3.1 eV',
    explanation: 'E = hc / λ = 1240 / 400 = 3.1 eV.'
  },
  {
    id: 'mp-56',
    text: 'In a nuclear reactor, the "Moderator" is used to:',
    options: [
      'Stop the chain reaction',
      'Slow down fast neutrons',
      'Absorb alpha particles',
      'Control the temperature of the core'
    ],
    correctAnswer: 'Slow down fast neutrons',
    explanation: 'Moderators (like heavy water or graphite) reduce neutron speed to increase the probability of fission.'
  },
  {
    id: 'mp-57',
    text: 'A "Black Hole" is a region of space-time where gravity is so strong that:',
    options: [
      'Nothing, not even light, can escape',
      'Only X-rays can escape',
      'It creates new matter',
      'Time moves backwards'
    ],
    correctAnswer: 'Nothing, not even light, can escape',
    explanation: 'The escape velocity of a black hole exceeds the speed of light.'
  },
  {
    id: 'mp-58',
    text: 'The "Fine Structure Constant" (α) is a dimensionless quantity roughly equal to:',
    options: ['1/137', '1/100', '1/4π', '0.5'],
    correctAnswer: '1/137',
    explanation: 'It characterizes the strength of the electromagnetic interaction between elementary charged particles.'
  },
  {
    id: 'mp-59',
    text: 'According to the Standard Model, Quarks have fractional electric charges of:',
    options: ['+1 or -1', '+1/2 or -1/2', '+2/3 or -1/3', '0'],
    correctAnswer: '+2/3 or -1/3',
    explanation: 'Up, charm, top quarks have +2/3e; down, strange, bottom have -1/3e.'
  },
  {
    id: 'mp-60',
    text: 'An atom transitions from n=4 to n=2. If the wavelength emitted is λ, what is the wavelength for n=∞ to n=2?',
    options: ['3λ/4', '4λ/3', 'λ/2', '2λ'],
    correctAnswer: '3λ/4',
    explanation: '1/λ ∝ (1/n₁² - 1/n₂²). Use the ratio of (1/4 - 1/16) to (1/4 - 1/∞).'
  },
  {
    id: 'mp-61',
    text: 'The "Photoelectric Work Function" of a surface is 2.5 eV. If light of 200 nm is incident, the stopping potential is:',
    options: ['3.7 V', '6.2 V', '3.7 eV', '0 V'],
    correctAnswer: '3.7 V',
    explanation: 'E = 1240/200 = 6.2 eV. V_stopping = (6.2 - 2.5) = 3.7 V.'
  },
  {
    id: 'mp-62',
    text: 'Which series of hydrogen spectrum is produced when electrons drop to the n=3 level?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Pfund'],
    correctAnswer: 'Paschen',
    explanation: 'Transitions to n=3 result in the Paschen series (Infrared).'
  },
  {
    id: 'mp-63',
    text: 'An unstable nucleus of mass number A emits an alpha particle. The mass number of the daughter nucleus is:',
    options: ['A', 'A - 2', 'A - 4', 'A + 4'],
    correctAnswer: 'A - 4',
    explanation: 'Alpha decay removes 2 protons and 2 neutrons (total mass 4).'
  },
  {
    id: 'mp-64',
    text: 'The "Uncertainty Principle" is a fundamental consequence of:',
    options: [
      'The wave nature of matter',
      'The particle nature of light',
      'The speed of light constant',
      'Measurement errors'
    ],
    correctAnswer: 'The wave nature of matter',
    explanation: 'Waves cannot be localized in both position and frequency simultaneously.'
  },
  {
    id: 'mp-65',
    text: 'Moseley\'s Law relates the frequency of characteristic X-rays to the:',
    options: ['Atomic mass', 'Atomic number', 'Mass number', 'Isotope number'],
    correctAnswer: 'Atomic number',
    explanation: '√f ∝ (Z - b), which helped correctly order elements in the periodic table by Z.'
  },
  {
    id: 'mp-66',
    text: 'The energy required to remove an electron from the H-atom in its ground state is:',
    options: ['13.6 eV', '-13.6 eV', '3.4 eV', '0.53 eV'],
    correctAnswer: '13.6 eV',
    explanation: 'This is the ionization energy of Hydrogen.'
  },
  {
    id: 'mp-67',
    text: 'What property of a wave is changed in the Compton effect?',
    options: ['Speed', 'Frequency', 'Amplitude', 'Phase only'],
    correctAnswer: 'Frequency',
    explanation: 'The scattered photon has less energy and thus lower frequency (longer wavelength).'
  },
  {
    id: 'mp-68',
    text: 'A particle is moving at 0.8c. Its kinetic energy is:',
    options: ['(2/3) m₀c²', '0.32 m₀c²', '(1/2) m₀c²', 'm₀c²'],
    correctAnswer: '(2/3) m₀c²',
    explanation: 'γ = 1/√(1-0.64) = 1/0.6 = 5/3. KE = (γ-1)m₀c² = (5/3 - 1)m₀c² = (2/3)m₀c².'
  },
  {
    id: 'mp-69',
    text: 'Liquid drop model of nucleus was used to explain:',
    options: ['Radioactivity', 'Nuclear fission', 'Photoelectric effect', 'Alpha scattering'],
    correctAnswer: 'Nuclear fission',
    explanation: 'Bohr and Wheeler used this model to describe how a nucleus can deform and split.'
  },
  {
    id: 'mp-70',
    text: 'Who proposed the concept of "Matter Waves"?',
    options: ['Einstein', 'Planck', 'De-Broglie', 'Schrödinger'],
    correctAnswer: 'De-Broglie',
    explanation: 'Louis de Broglie suggested that all matter has associated wave properties.'
  },
  {
    id: 'mp-71',
    text: 'The temperature of a black body is doubled. The total power radiated increases by a factor of:',
    options: ['2', '4', '8', '16'],
    correctAnswer: '16',
    explanation: 'Stefan-Boltzmann law: Power ∝ T⁴. (2⁴ = 16).'
  },
  {
    id: 'mp-72',
    text: 'The "Half-value layer" (HVL) of a material refers to the thickness required to:',
    options: [
      'Stop half the particles',
      'Reduce radiation intensity by 50%',
      'Double the energy',
      'Shield 99% of rays'
    ],
    correctAnswer: 'Reduce radiation intensity by 50%',
    explanation: 'HVL characterizes the attenuating property of a material for a specific radiation.'
  },
  {
    id: 'mp-73',
    text: 'A "LASER" produces light through:',
    options: [
      'Spontaneous emission',
      'Stimulated emission',
      'Thermal excitation',
      'Radioactive decay'
    ],
    correctAnswer: 'Stimulated emission',
    explanation: 'Light Amplification by Stimulated Emission of Radiation.'
  },
  {
    id: 'mp-74',
    text: 'Which particle is categorized as a "Lepton"?',
    options: ['Proton', 'Neutron', 'Electron', 'Pion'],
    correctAnswer: 'Electron',
    explanation: 'Leptons are elementary particles that do not undergo strong interactions.'
  },
  {
    id: 'mp-75',
    text: 'An electron jumps from n=3 to n=2. The energy of the emitted photon is approximately:',
    options: ['1.89 eV', '13.6 eV', '10.2 eV', '12.1 eV'],
    correctAnswer: '1.89 eV',
    explanation: 'E = 13.6 * (1/4 - 1/9) = 13.6 * (5/36) ≈ 1.89 eV.'
  },
  {
    id: 'mp-76',
    text: 'The "Threshold Wavelength" for a metal is 300 nm. If light of 400 nm hits it:',
    options: [
      'Photoelectrons will be emitted with low speed',
      'No photoelectrons will be emitted',
      'Photoelectrons will be emitted with high speed',
      'Current will double'
    ],
    correctAnswer: 'No photoelectrons will be emitted',
    explanation: '400 nm has lower energy than the threshold (300 nm). Energy ∝ 1/λ.'
  },
  {
    id: 'mp-77',
    text: 'Which factor determines the "Hardness" of X-rays?',
    options: [
      'Filament current',
      'Target material atomic number',
      'Accelerating voltage',
      'Duration of exposure'
    ],
    correctAnswer: 'Accelerating voltage',
    explanation: 'Higher voltage increases electron speed, producing more penetrating (harder) X-rays.'
  },
  {
    id: 'mp-78',
    text: 'A "Neutron star" is held together by:',
    options: ['Nuclear force', 'Gravity', 'Magnetic force', 'Electrostatic force'],
    correctAnswer: 'Gravity',
    explanation: 'The extreme density is maintained by gravity, balanced by neutron degeneracy pressure.'
  },
  {
    id: 'mp-79',
    text: 'In pair annihilation, how many photons are typically produced to satisfy conservation laws?',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: 'Usually 2 photons are emitted in opposite directions to conserve momentum.'
  },
  {
    id: 'mp-80',
    text: 'The "Principal Quantum Number" (n) determines the _____ of an electronic orbit.',
    options: ['Shape', 'Orientation', 'Size and Energy', 'Spin'],
    correctAnswer: 'Size and Energy',
    explanation: 'Larger n means the electron is further from the nucleus and has more energy.'
  },
  {
    id: 'mp-81',
    text: 'Which type of reactor uses U-238 to produce Pu-239?',
    options: ['Thermal reactor', 'Research reactor', 'Breeder reactor', 'Fusion reactor'],
    correctAnswer: 'Breeder reactor',
    explanation: 'Breeder reactors "breed" new fissile material from fertile material like U-238.'
  },
  {
    id: 'mp-82',
    text: 'The "Wien Displacement Constant" has units of:',
    options: ['m.K', 'W/m²', 'Hz/K', 'm/K'],
    correctAnswer: 'm.K',
    explanation: 'λ_max * T = b. Units are meters * Kelvin.'
  },
  {
    id: 'mp-83',
    text: 'Binding energy of a nucleus is equal to:',
    options: [
      'Energy released during fission',
      'Energy equivalent of mass defect',
      'Kinetic energy of neutrons',
      'Work function of nucleons'
    ],
    correctAnswer: 'Energy equivalent of mass defect',
    explanation: 'ΔE = Δm * c².'
  },
  {
    id: 'mp-84',
    text: 'A radioactive isotope has a decay constant of 0.1 per day. Its half-life is approximately:',
    options: ['10 days', '0.693 days', '6.93 days', '1 day'],
    correctAnswer: '6.93 days',
    explanation: 'T_half = 0.693 / λ = 0.693 / 0.1 = 6.93.'
  },
  {
    id: 'mp-85',
    text: 'The "Bohr Magneton" is a unit of:',
    options: ['Magnetic field', 'Magnetic flux', 'Magnetic dipole moment', 'Electric charge'],
    correctAnswer: 'Magnetic dipole moment',
    explanation: 'It is the magnetic moment of an orbiting electron.'
  },
  {
    id: 'mp-86',
    text: 'Which particle is NOT a composite particle (is elementary)?',
    options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
    correctAnswer: 'Electron',
    explanation: 'Electrons are fundamental leptons; protons/neutrons are made of quarks.'
  },
  {
    id: 'mp-87',
    text: 'The "Cosmic Microwave Background Radiation" is a remnant of:',
    options: ['Solar flares', 'Big Bang', 'Supernova', 'Galaxy collisions'],
    correctAnswer: 'Big Bang',
    explanation: 'It is the cooled remnant of the first light in the early universe.'
  },
  {
    id: 'mp-88',
    text: 'In the equation λ = h/p, "p" stands for:',
    options: ['Power', 'Pressure', 'Momentum', 'Potential'],
    correctAnswer: 'Momentum',
    explanation: 'De-Broglie wavelength is inversely proportional to momentum.'
  },
  {
    id: 'mp-89',
    text: 'What kind of spectrum is produced by a hot hydrogen gas at low pressure?',
    options: ['Continuous', 'Line emission', 'Line absorption', 'Band spectrum'],
    correctAnswer: 'Line emission',
    explanation: 'Discrete electronic transitions in isolated atoms produce line emission spectra.'
  },
  {
    id: 'mp-90',
    text: 'The strong nuclear force is mediated by particles with mass. This implies its range is:',
    options: ['Infinite', 'Very short', 'Medium', 'Zero'],
    correctAnswer: 'Very short',
    explanation: 'The finite mass of the force-carrying p-mesons/gluons restricts the range.'
  },
  {
    id: 'mp-91',
    text: 'If the uncertainty in position of an electron is 10⁻¹⁰ m, what is the minimum uncertainty in its velocity? (h/2πm ≈ 10⁻⁴)',
    options: ['10^6 m/s', '10^3 m/s', '10 m/s', '0 m/s'],
    correctAnswer: '10^6 m/s',
    explanation: 'Δv ≈ (h/2πm) / Δx = 10⁻⁴ / 10⁻¹⁰ = 10⁶ m/s.'
  },
  {
    id: 'mp-92',
    text: 'A "Cerenkov radiation" occurs when a charged particle travels through a medium at a speed:',
    options: [
      'Greater than the speed of light in that medium',
      'Less than the speed of light in vacuum',
      'Equal to c',
      'Zero'
    ],
    correctAnswer: 'Greater than the speed of light in that medium',
    explanation: 'It is the optical equivalent of a sonic boom.'
  },
  {
    id: 'mp-93',
    text: 'Which law states that the "Energy density of black body radiation is proportional to T⁴"?',
    options: ['Newton\'s Law', 'Stefan\'s Law', 'Wien\'s Law', 'Kirchhoff\'s Law'],
    correctAnswer: 'Stefan\'s Law',
    explanation: 'Stefan-Boltzmann law describes the power radiated from a black body.'
  },
  {
    id: 'mp-94',
    text: 'The mass of a photon of wavelength λ is:',
    options: ['Zero', 'h / (λc)', 'hc / λ', 'h / λ'],
    correctAnswer: 'h / (λc)',
    explanation: 'E = mc² and E = hc/λ. mc² = hc/λ => m = h/(λc).'
  },
  {
    id: 'mp-95',
    text: 'How many quarks make up a Baryon (like a proton)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Baryons are hadrons made of three quarks.'
  },
  {
    id: 'mp-96',
    text: 'The "Threshold energy" for pair production is:',
    options: ['0.51 MeV', '1.02 MeV', '13.6 eV', '931 MeV'],
    correctAnswer: '1.02 MeV',
    explanation: 'The photon must have energy equal to at least twice the rest mass energy of an electron (2 * 0.51 = 1.02 MeV).'
  },
  {
    id: 'mp-97',
    text: 'In the Hydrogen atom, as the quantum number n increases, the difference in energy between adjacent levels:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Varies randomly'],
    correctAnswer: 'Decreases',
    explanation: 'Energy E_n = -13.6/n². The gaps -13.6(1/n² - 1/(n+1)²) get smaller as n grows.'
  },
  {
    id: 'mp-98',
    text: 'Which type of nuclear reaction powers a Hydrogen Bomb?',
    options: ['Controlled fission', 'Spontaneous decay', 'Nuclear fusion', 'Chemical explosion'],
    correctAnswer: 'Nuclear fusion',
    explanation: 'The fusion of light isotopes like deuterium and tritium releases massive energy.'
  },
  {
    id: 'mp-99',
    text: 'A "Quasar" is thought to be an extremely bright and distant:',
    options: ['Star', 'Nebula', 'Active Galactic Nucleus', 'Black hole alone'],
    correctAnswer: 'Active Galactic Nucleus',
    explanation: 'Quasars are powered by supermassive black holes at the centers of distant galaxies.'
  },
  {
    id: 'mp-100',
    text: 'What is the De-Broglie wavelength of a Macroscopic object (like a 1kg ball at 10 m/s)?',
    options: [
      'Extremely small (~10⁻³⁴ m)',
      'Large (~1 m)',
      'Visible range',
      'Infinite'
    ],
    correctAnswer: 'Extremely small (~10⁻³⁴ m)',
    explanation: 'λ = h/mv = 6.6x10⁻³⁴ / (1 * 10) = 6.6x10⁻³⁵ m. This is why we don\'t observe wave properties in large objects.'
  }
];
