import { Question } from '../types';

export const NUCLEAR_PHYSICS_QUIZ: Question[] = [
  {
    id: 'np-1',
    text: 'Who discovered the nucleus of an atom through alpha-particle scattering experiments?',
    options: ['J.J. Thomson', 'James Chadwick', 'Ernest Rutherford', 'Niels Bohr'],
    correctAnswer: 'Ernest Rutherford',
    explanation: 'Rutherford\'s 1911 experiment proved that the majority of an atom\'s mass is concentrated in a tiny, positive nucleus.'
  },
  {
    id: 'np-2',
    text: 'What is the number of protons and neutrons in a nucleus collectively called?',
    options: ['Nucleons', 'Positrons', 'Isotopes', 'Bosons'],
    correctAnswer: 'Nucleons',
    explanation: 'Protons and neutrons are the primary building blocks of the nucleus and are known as nucleons.'
  },
  {
    id: 'np-3',
    text: 'Isotopes are atoms of the same element having same atomic number (Z) but different:',
    options: ['Number of electrons', 'Mass number (A)', 'Chemical properties', 'Charge on protons'],
    correctAnswer: 'Mass number (A)',
    explanation: 'Isotopes have the same number of protons but different number of neutrons, hence different mass numbers.'
  },
  {
    id: 'np-4',
    text: 'The unified mass scale unit (1 u) is defined as exactly 1/12th the mass of which atom?',
    options: ['Hydrogen-1', 'Oxygen-16', 'Carbon-12', 'Uranium-238'],
    correctAnswer: 'Carbon-12',
    explanation: '1 u = (mass of C-12) / 12 ≈ 1.66 x 10⁻²⁷ kg.'
  },
  {
    id: 'np-5',
    text: 'The difference between the total mass of nucleons and the actual mass of the nucleus is called:',
    options: ['Nuclear defect', 'Mass defect', 'Binding energy', 'Stability factor'],
    correctAnswer: 'Mass defect',
    explanation: 'Mass defect (Δm) represents the mass converted into energy in the formation of the nucleus.'
  },
  {
    id: 'np-6',
    text: 'Which nucleus is considered the most stable because it has the highest binding energy per nucleon?',
    options: ['Hydrogen', 'Helium', 'Iron', 'Uranium'],
    correctAnswer: 'Iron',
    explanation: 'Iron (Fe-56) lies at the peak of the binding energy per nucleon curve, making it exceptionally stable.'
  },
  {
    id: 'np-7',
    text: 'When a nucleus emits an alpha (α) particle, its mass number (A) decreases by:',
    options: ['1', '2', '4', '0'],
    correctAnswer: '4',
    explanation: 'An alpha particle is a Helium nucleus (₂He⁴), so the parent nucleus loses 2 protons and 2 neutrons.'
  },
  {
    id: 'np-8',
    text: 'In beta (β⁻) decay, what happens to the atomic number (Z)?',
    options: ['Increases by 1', 'Decreases by 1', 'Remains same', 'Decreases by 2'],
    correctAnswer: 'Increases by 1',
    explanation: 'A neutron in the nucleus converts into a proton and an electron (β⁻ particle); hence Z becomes Z+1.'
  },
  {
    id: 'np-9',
    text: 'Which radiation consists of electromagnetic waves of very short wavelength and has the highest penetrating power?',
    options: ['Alpha rays', 'Beta rays', 'Gamma rays', 'X-rays'],
    correctAnswer: 'Gamma rays',
    explanation: 'Gamma rays are high-energy photons with no charge or mass, allowing them to penetrate deep into matter.'
  },
  {
    id: 'np-10',
    text: 'The time required for half of the radioactive nuclei in a sample to decay is called its:',
    options: ['Life span', 'Half-life', 'Mean life', 'Decay constant'],
    correctAnswer: 'Half-life',
    explanation: 'Half-life (T₁/₂) is a characteristic property of radioactive isotopes.'
  },
  {
    id: 'np-11',
    text: 'The decay constant (λ) is related to half-life (T₁/₂) by the following formula:',
    options: ['λ = 0.693 / T₁/₂', 'λ = T₁/₂ / 0.693', 'λ = 1 / T₁/₂', 'λ = 0.693 * T₁/₂'],
    correctAnswer: 'λ = 0.693 / T₁/₂',
    explanation: 'λ and T₁/₂ are inversely proportional.'
  },
  {
    id: 'np-12',
    text: 'Which device is used to detect the path of ionizing particles by creating condensation trails?',
    options: ['Geiger-Muller counter', 'Wilson cloud chamber', 'Solid state detector', 'Mass spectrograph'],
    correctAnswer: 'Wilson cloud chamber',
    explanation: 'Charged particles passing through supersaturated vapour leave trails of droplets.'
  },
  {
    id: 'np-13',
    text: 'The process in which a heavy nucleus splits into two lighter nuclei with the release of a large amount of energy is:',
    options: ['Nuclear fusion', 'Nuclear fission', 'Radioactive capture', 'Alpha decay'],
    correctAnswer: 'Nuclear fission',
    explanation: 'Example: Uranium-235 absorbs a neutron and splits into Barium and Krypton.'
  },
  {
    id: 'np-14',
    text: 'In a nuclear reactor, what material is commonly used as "control rods" to absorb excess neutrons?',
    options: ['Uranium', 'Graphite', 'Cadmium', 'Sodium'],
    correctAnswer: 'Cadmium',
    explanation: 'Cadmium has a high neutron absorption cross-section, allowing it to control the chain reaction.'
  },
  {
    id: 'np-15',
    text: 'The source of energy in the Sun and stars is primarily:',
    options: ['Nuclear fission', 'Nuclear fusion', 'Chemical combustion', 'Gravitational collapse'],
    correctAnswer: 'Nuclear fusion',
    explanation: 'Hydrogen nuclei fuse to form Helium under extreme temperature and pressure in stellar cores.'
  },
  {
    id: 'np-16',
    text: 'Which of the following describes "Radiation Sickness"?',
    options: [
      'Nausea, vomiting and diarrhea due to high doses',
      'Loss of hair',
      'Ulceration of lungs',
      'All of these'
    ],
    correctAnswer: 'All of these',
    explanation: 'High levels of radiation damage white blood cells and various organs, leading to these symptoms.'
  },
  {
    id: 'np-17',
    text: 'According to quark theory, a proton is made up of:',
    options: ['Two up quarks and one down quark', 'One up quark and two down quarks', 'Three up quarks', 'One quark and one antiquark'],
    correctAnswer: 'Two up quarks and one down quark',
    explanation: 'Proton (uud): charge = 2/3 + 2/3 - 1/3 = +1.'
  },
  {
    id: 'np-18',
    text: 'A neutron is made up of which quark combination?',
    options: ['uud', 'udd', 'uds', 'uus'],
    correctAnswer: 'udd',
    explanation: 'Neutron (udd): charge = 2/3 - 1/3 - 1/3 = 0.'
  },
  {
    id: 'np-19',
    text: 'The "Moderator" in a thermal reactor is used to:',
    options: [
      'Stop the reaction',
      'Slow down fast neutrons',
      'Absorb neutrons',
      'Cool the reactor core'
    ],
    correctAnswer: 'Slow down fast neutrons',
    explanation: 'Moderators like heavy water or graphite reduce neutron kinetic energy to thermal levels for better fission capture.'
  },
  {
    id: 'np-20',
    text: 'One curie (Ci) is defined as how many disintegrations per second?',
    options: ['3.7 x 10¹⁰', '1', '10⁶', '1000'],
    correctAnswer: '3.7 x 10¹⁰',
    explanation: 'Curie is an old unit of radioactivity; the SI unit is the Becquerel (1 Bq = 1 dps).'
  },
  {
    id: 'np-21',
    text: 'Which particle is least ionizing?',
    options: ['Alpha particle', 'Beta particle', 'Gamma radiation', 'Neutron'],
    correctAnswer: 'Gamma radiation',
    explanation: 'Gamma rays interact weakest with matter compared to charged alpha or beta particles.'
  },
  {
    id: 'np-22',
    text: 'The mass of a neutron is slightly greater than:',
    options: ['Alpha particle', 'Proton', 'Electron', 'Neutrino'],
    correctAnswer: 'Proton',
    explanation: 'm_neutron ≈ 1.008665 u, m_proton ≈ 1.007276 u.'
  },
  {
    id: 'np-23',
    text: 'In the notation ₈₈Ra²²⁶, the number 88 represents:',
    options: ['Mass number', 'Atomic number', 'Number of neutrons', 'Stability factor'],
    correctAnswer: 'Atomic number',
    explanation: 'The subscript is the atomic number Z (number of protons).'
  },
  {
    id: 'np-24',
    text: 'Radioactive Iodine-131 is used for the diagnosis and treatment of diseases of:',
    options: ['Heart', 'Lungs', 'Thyroid gland', 'Liver'],
    correctAnswer: 'Thyroid gland',
    explanation: 'I-131 concentrates in the thyroid, making it useful for treating goiter or hyperthyroidism.'
  },
  {
    id: 'np-25',
    text: 'The SI unit of radiation absorbed dose (D) is:',
    options: ['Curie', 'Sievert', 'Gray (Gy)', 'Rad'],
    correctAnswer: 'Gray (Gy)',
    explanation: '1 Gray = 1 Joule per kilogram (1 J/kg).'
  },
  {
    id: 'np-26',
    text: 'The equivalent dose (De) is measured in:',
    options: ['Gray', 'Sievert (Sv)', 'Becquerel', 'Rem'],
    correctAnswer: 'Sievert (Sv)',
    explanation: 'De = Absorbed Dose x RBE. Its SI unit is the Sievert.'
  },
  {
    id: 'np-27',
    text: 'Which interaction of photon with matter is dominant at energies greater than 1.02 MeV?',
    options: ['Photoelectric effect', 'Compton scattering', 'Pair production', 'Spontaneous emission'],
    correctAnswer: 'Pair production',
    explanation: 'Pair production requires at least double the rest mass energy of an electron (2 x 0.511 MeV).'
  },
  {
    id: 'np-28',
    text: 'A "dead time" of approximately 1 milliseconnd is associated with which detector?',
    options: ['Cloud chamber', 'Solid state detector', 'Geiger-Muller counter', 'Photoelectric cell'],
    correctAnswer: 'Geiger-Muller counter',
    explanation: 'During the positive ion sheath movement to cathode, GM counter cannot record new counts.'
  },
  {
    id: 'np-29',
    text: 'The splitting of Uranium-235 releases energy of approximately:',
    options: ['2 MeV', '20 MeV', '200 MeV', '2000 MeV'],
    correctAnswer: '200 MeV',
    explanation: 'Fission of one U-235 nucleus releases about 200 MeV energy.'
  },
  {
    id: 'np-30',
    text: 'The background radiation we are exposed to is typically around:',
    options: ['2 mSv per year', '2 Sv per year', '2 Gy per year', '200 mSv per year'],
    correctAnswer: '2 mSv per year',
    explanation: 'Natural sources like cosmic rays and rocks contribute about 2 mSv yearly exposure.'
  },
  {
    id: 'np-31',
    text: 'What is the approximate size of an atomic nucleus?',
    options: ['10⁻¹⁰ m', '10⁻¹² m', '10⁻¹⁴ m', '10⁻⁸ m'],
    correctAnswer: '10⁻¹⁴ m',
    explanation: 'Nuclei are roughly 10,000 to 100,000 times smaller than the atoms they reside in.'
  },
  {
    id: 'np-32',
    text: 'A proton consists of two up quarks and one down quark. What is the total charge?',
    options: ['0', '+1', '-1', '+2/3'],
    correctAnswer: '+1',
    explanation: '(2/3) + (2/3) + (-1/3) = +1.'
  },
  {
    id: 'np-33',
    text: 'A neutron consists of one up quark and two down quarks. What is the total charge?',
    options: ['0', '+1', '-1', '-1/3'],
    correctAnswer: '0',
    explanation: '(2/3) + (-1/3) + (-1/3) = 0.'
  },
  {
    id: 'np-34',
    text: 'Which isotope is used as a standard for atomic mass units?',
    options: ['H-1', 'He-4', 'C-12', 'O-16'],
    correctAnswer: 'C-12',
    explanation: 'Carbon-12 is defined to have a mass of exactly 12 u.'
  },
  {
    id: 'np-35',
    text: 'One atomic mass unit (1 u) is equivalent to what energy?',
    options: ['0.511 MeV', '1.02 MeV', '931 MeV', '200 MeV'],
    correctAnswer: '931 MeV',
    explanation: 'Using E=mc², 1 u ≈ 931.5 MeV.'
  },
  {
    id: 'np-36',
    text: 'The ratio of mass of a nucleus to its volume is known as:',
    options: ['Nuclear mass', 'Nuclear density', 'Mass defect', 'Stability ratio'],
    correctAnswer: 'Nuclear density',
    explanation: 'Nuclear density is extremely high and nearly constant for all nuclei (~10¹⁷ kg/m³).'
  },
  {
    id: 'np-37',
    text: 'Which force holds the protons and neutrons together in the nucleus?',
    options: ['Electrostatic force', 'Gravitational force', 'Strong nuclear force', 'Magnetic force'],
    correctAnswer: 'Strong nuclear force',
    explanation: 'The strong force overcomes the electrostatic repulsion between protons.'
  },
  {
    id: 'np-38',
    text: 'In the nucleus ₆C¹⁴, the number of neutrons is:',
    options: ['6', '14', '8', '20'],
    correctAnswer: '8',
    explanation: 'N = A - Z = 14 - 6 = 8.'
  },
  {
    id: 'np-39',
    text: 'Radioactivity is a _____ process.',
    options: ['Chemical', 'Spontaneous and random', 'Induced by heat', 'Reversible'],
    correctAnswer: 'Spontaneous and random',
    explanation: 'Nuclei decay without any external influence at random intervals.'
  },
  {
    id: 'np-40',
    text: 'A beta-minus (β⁻) particle is:',
    options: ['A proton', 'A positron', 'An electron', 'A helium nucleus'],
    correctAnswer: 'An electron',
    explanation: 'Beta-minus decay involves the emission of an electron from the nucleus.'
  },
  {
    id: 'np-41',
    text: 'A beta-plus (β⁺) particle is:',
    options: ['A proton', 'A positron', 'An electron', 'A neutron'],
    correctAnswer: 'A positron',
    explanation: 'Beta-plus decay involves the emission of a positron (anti-electron).'
  },
  {
    id: 'np-42',
    text: 'After an alpha decay, the atomic number of the nucleus:',
    options: ['Increases by 2', 'Decreases by 2', 'Increases by 4', 'Decreases by 4'],
    correctAnswer: 'Decreases by 2',
    explanation: 'The nucleus loses two protons during alpha emission.'
  },
  {
    id: 'np-43',
    text: 'Which radiation is not affected by electric or magnetic fields?',
    options: ['Alpha rays', 'Beta rays', 'Gamma rays', 'Cathode rays'],
    correctAnswer: 'Gamma rays',
    explanation: 'Gamma rays are neutral photons.'
  },
  {
    id: 'np-44',
    text: 'What is the SI unit of Activity of a radioactive source?',
    options: ['Curie', 'Becquerel (Bq)', 'Gray', 'Sievert'],
    correctAnswer: 'Becquerel (Bq)',
    explanation: '1 Bq = 1 disintegration per second.'
  },
  {
    id: 'np-45',
    text: 'The decay rate is proportional to the number of radioactive nuclei present. This is:',
    options: ['Bohr\'s Law', 'Radioactive Decay Law', 'Planck\'s Law', 'Newton\'s Law'],
    correctAnswer: 'Radioactive Decay Law',
    explanation: 'dN/dt = -λN.'
  },
  {
    id: 'np-46',
    text: 'Mean life (τ) of a radioactive substance is equal to:',
    options: ['1 / λ', '0.693 / λ', 'λ', '1.44 * Half-life'],
    correctAnswer: '1 / λ',
    explanation: 'Mean life is the reciprocal of the decay constant.'
  },
  {
    id: 'np-47',
    text: 'Which material can stop most beta particles?',
    options: ['A piece of paper', 'A thin sheet of Aluminum', 'A thick lead block', 'Nothing can stop them'],
    correctAnswer: 'A thin sheet of Aluminum',
    explanation: 'Aluminum (~few mm) is sufficient to stop beta particles, whereas alpha can be stopped by paper.'
  },
  {
    id: 'np-48',
    text: 'The cloud chamber tracks of beta particles are:',
    options: ['Thick and straight', 'Thin and erratic/wavy', 'Very dense', 'Circular'],
    correctAnswer: 'Thin and erratic/wavy',
    explanation: 'Beta particles are lighter and less ionizing, causing them to deviate easily upon collision.'
  },
  {
    id: 'np-49',
    text: 'A Geiger-Muller tube uses which gas for detection?',
    options: ['Oxygen', 'Hydrogen', 'Noble gas like Neon or Argon', 'Nitrogen'],
    correctAnswer: 'Noble gas like Neon or Argon',
    explanation: 'Inert gases are used as the primary ionizing medium in GM tubes.'
  },
  {
    id: 'np-50',
    text: 'What is "Quenching" in a GM counter?',
    options: ['Increasing the voltage', 'Stopping the discharge', 'Cleaning the window', 'Calibrating the scaler'],
    correctAnswer: 'Stopping the discharge',
    explanation: 'A quenching gas (like bromine or alcohol) is added to prevent successive secondary discharges.'
  },
  {
    id: 'np-51',
    text: 'Mass Spectrograph is used to measure:',
    options: ['Atomic size', 'Nuclear radius', 'Isotopic masses', 'Electron spin'],
    correctAnswer: 'Isotopic masses',
    explanation: 'It separates ions based on their mass-to-charge ratio.'
  },
  {
    id: 'np-52',
    text: 'Which nucleus has the highest binding energy per nucleon?',
    options: ['U-235', 'Fe-56', 'He-4', 'H-2'],
    correctAnswer: 'Fe-56',
    explanation: 'Iron-56 is the most tightly bound nucleus.'
  },
  {
    id: 'np-53',
    text: 'During nuclear fission, the total mass of the products is _____ the mass of the parent nucleus.',
    options: ['Greater than', 'Less than', 'Equal to', 'Zero'],
    correctAnswer: 'Less than',
    explanation: 'The lost mass is converted into energy (Q-value).'
  },
  {
    id: 'np-54',
    text: 'The typical energy released in one fission of Uranium-235 is:',
    options: ['2 MeV', '20 MeV', '200 MeV', '2000 MeV'],
    correctAnswer: '200 MeV',
    explanation: 'This includes kinetic energy of fragments, neutrons, and gamma rays.'
  },
  {
    id: 'np-55',
    text: 'The minimum mass of fissile material required to sustain a chain reaction is called:',
    options: ['Stable mass', 'Fission mass', 'Critical mass', 'Atomic mass'],
    correctAnswer: 'Critical mass',
    explanation: 'If mass is less than critical, too many neutrons escape for a chain reaction to persist.'
  },
  {
    id: 'np-56',
    text: 'In a nuclear reactor, the coolant is used to:',
    options: ['Sustained the reaction', 'Absorb neutrons', 'Transfer heat to produce steam', 'Stop the reactor'],
    correctAnswer: 'Transfer heat to produce steam',
    explanation: 'Water or liquid sodium carries heat away from the core.'
  },
  {
    id: 'np-57',
    text: 'Heavy water (D₂O) is often used as a _____ in thermal reactors.',
    options: ['Fuel', 'Moderator', 'Control rod', 'Shielding'],
    correctAnswer: 'Moderator',
    explanation: 'It slows down neutrons effectively without absorbing them.'
  },
  {
    id: 'np-58',
    text: 'Nuclear fusion requires:',
    options: ['High pressure only', 'High temperature only', 'Both high temperature and pressure', 'Low temperature'],
    correctAnswer: 'Both high temperature and pressure',
    explanation: 'Immense energy is needed to overcome the electrostatic repulsion between nuclei.'
  },
  {
    id: 'np-59',
    text: 'Which radioactive isotope is used to check the functioning of the thyroid gland?',
    options: ['C-14', 'Co-60', 'I-131', 'Na-24'],
    correctAnswer: 'I-131',
    explanation: 'Iodine concentrates in the thyroid.'
  },
  {
    id: 'np-60',
    text: 'The age of organic materials can be estimated using:',
    options: ['Uranium dating', 'Carbon-14 dating', 'Potassium-Argon dating', 'Lead dating'],
    correctAnswer: 'Carbon-14 dating',
    explanation: 'C-14 is continuously produced in the atmosphere and incorporated into living things.'
  },
  {
    id: 'np-61',
    text: 'Gamma rays are high energy _____ .',
    options: ['Electrons', 'Protons', 'Photons', 'Neutrons'],
    correctAnswer: 'Photons',
    explanation: 'They are part of the electromagnetic spectrum.'
  },
  {
    id: 'np-62',
    text: 'In the reaction ₇N¹⁴ + ₂He⁴ → ₈O¹⁷ + ₁H¹, what is emitted?',
    options: ['An alpha particle', 'A beta particle', 'A proton', 'A neutron'],
    correctAnswer: 'A proton',
    explanation: '₁H¹ is the symbol for a proton.'
  },
  {
    id: 'np-63',
    text: 'The "Moderator" in a KANUPP nuclear reactor (Pakistan) is:',
    options: ['Light water', 'Heavy water', 'Graphite', 'Beryllium'],
    correctAnswer: 'Heavy water',
    explanation: 'KANUPP is a CANDU-type reactor using heavy water.'
  },
  {
    id: 'np-64',
    text: 'One Gray (Gy) is equal to:',
    options: ['1 J/kg', '100 Rad', 'Both A and B', '1 rem'],
    correctAnswer: 'Both A and B',
    explanation: '1 Gy = 1 J/kg = 100 rad.'
  },
  {
    id: 'np-65',
    text: 'The RBE (Relative Biological Effectiveness) for alpha particles is approximately:',
    options: ['1', '2', '10', '20'],
    correctAnswer: '20',
    explanation: 'Alpha particles are much more damaging to tissue than gamma rays or electrons.'
  },
  {
    id: 'np-66',
    text: 'Radiation damage to which cells results in "Leukemia"?',
    options: ['Skin cells', 'Red blood cells', 'White blood cells (bone marrow)', 'Nerve cells'],
    correctAnswer: 'White blood cells (bone marrow)',
    explanation: 'Cancer of the blood/bone marrow is often associated with radiation exposure.'
  },
  {
    id: 'np-67',
    text: "According to Einstein's mass-energy equation, the energy equivalent of mass 'm' is:",
    options: ['1/2 mc²', 'mc', 'mc²', 'm²c'],
    correctAnswer: 'mc²',
    explanation: 'E = mc².'
  },
  {
    id: 'np-68',
    text: 'Which particles are known as "Hadrons"?',
    options: ['Electrons and Muons', 'Protons and Neutrons', 'Photons only', 'Neutrinos'],
    correctAnswer: 'Protons and Neutrons',
    explanation: 'Hadrons are particles made of quarks that experience the strong force.'
  },
  {
    id: 'np-69',
    text: 'How many types of quarks are currently known?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '6',
    explanation: 'Up, down, charm, strange, top, bottom.'
  },
  {
    id: 'np-70',
    text: 'Which device uses a thin mica window to detect alpha particles?',
    options: ['Cloud chamber', 'GM counter', 'Solid state detector', 'MRI'],
    correctAnswer: 'GM counter',
    explanation: 'A very thin window is needed since alpha particles have very low penetration.'
  },
  {
    id: 'np-71',
    text: 'The half-life of Carbon-14 is approximately:',
    options: ['5730 years', '1620 years', '24000 years', '12 days'],
    correctAnswer: '5730 years',
    explanation: 'This long half-life makes it suitable for dating archaeological artifacts.'
  },
  {
    id: 'np-72',
    text: 'During annihilation, electron + positron → ?',
    options: ['Neutron', 'Two Gamma photons', 'Alpha residue', 'Heat only'],
    correctAnswer: 'Two Gamma photons',
    explanation: 'Total mass disappears and appears as radiant energy.'
  },
  {
    id: 'np-73',
    text: 'The positron was discovered in cosmic radiation by:',
    options: ['Dirac', 'Chadwick', 'Carl Anderson', 'Fermi'],
    correctAnswer: 'Carl Anderson',
    explanation: 'He discovered it in 1932 using a cloud chamber.'
  },
  {
    id: 'np-74',
    text: 'In the nucleus, Z indicates the number of _____.',
    options: ['Neutrons', 'Protons', 'Nucleons', 'Positrons'],
    correctAnswer: 'Protons',
    explanation: 'Z is the atomic number.'
  },
  {
    id: 'np-75',
    text: 'If a sample has 1000 radioactive atoms, how many will remain after 2 half-lives?',
    options: ['500', '250', '125', 'Zero'],
    correctAnswer: '250',
    explanation: '1000 -> 500 -> 250.'
  },
  {
    id: 'np-76',
    text: 'Cobalt-60 is a widely used source of:',
    options: ['Alpha rays', 'Beta rays', 'Gamma rays', 'X-rays'],
    correctAnswer: 'Gamma rays',
    explanation: 'It is used for cancer therapy and industrial sterilization.'
  },
  {
    id: 'np-77',
    text: 'The process of splitting a heavy nucleus into roughly equal parts is:',
    options: ['Fusion', 'Fission', 'Evaporation', 'Beta decay'],
    correctAnswer: 'Fission',
    explanation: 'Induced typically by neutron capture.'
  },
  {
    id: 'np-78',
    text: 'Which is a "Fertile" material?',
    options: ['U-235', 'U-238', 'Pu-239', 'U-233'],
    correctAnswer: 'U-238',
    explanation: 'It can be converted into fissile Pu-239.'
  },
  {
    id: 'np-79',
    text: 'Sun is composed primarily of:',
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Iron'],
    correctAnswer: 'Hydrogen',
    explanation: 'Hydrogen is the fuel for stellar fusion.'
  },
  {
    id: 'np-80',
    text: 'Which interaction occurs between 0.5 MeV and 1.02 MeV photon energy?',
    options: ['Photoelectric', 'Compton', 'Pair production', 'All equally'],
    correctAnswer: 'Compton',
    explanation: 'Compton scattering is dominant at intermediate energies.'
  },
  {
    id: 'np-81',
    text: 'What is the charge of a Meson?',
    options: ['+1', '-1', '0', 'Can be any of these'],
    correctAnswer: 'Can be any of these',
    explanation: 'Mesons can be positive, negative, or neutral.'
  },
  {
    id: 'np-82',
    text: 'Which particles are NOT fundamental?',
    options: ['Quarks', 'Electrons', 'Protons', 'Photons'],
    correctAnswer: 'Protons',
    explanation: 'Protons are made of quarks.'
  },
  {
    id: 'np-83',
    text: 'A "Lepton" does not experience which force?',
    options: ['Gravitational', 'Weak nuclear', 'Strong nuclear', 'Electromagnetic'],
    correctAnswer: 'Strong nuclear',
    explanation: 'Leptons are outside the influence of the strong force.'
  },
  {
    id: 'np-84',
    text: 'The existence of "Neutrino" was hypothesized to explain:',
    options: ['Charge conservation', 'Apparent energy loss in beta decay', 'Alpha scattering', 'Nuclear size'],
    correctAnswer: 'Apparent energy loss in beta decay',
    explanation: 'The continuous spectrum of beta particles suggested an unseen particle carried away some energy.'
  },
  {
    id: 'np-85',
    text: 'Mass of neutron in unified units (u) is approximately:',
    options: ['1.007', '1.008', '0.0005', '4.002'],
    correctAnswer: '1.008',
    explanation: 'Exact value is ~1.008665 u.'
  },
  {
    id: 'np-86',
    text: 'Which emitted particle increases the Z of the nucleus by 1?',
    options: ['Alpha', 'Beta-minus', 'Beta-plus', 'Gamma'],
    correctAnswer: 'Beta-minus',
    explanation: 'A neutron changes to a proton, so Z increases.'
  },
  {
    id: 'np-87',
    text: 'The binding energy of a deuteron (H-2) is about:',
    options: ['2.2 MeV', '2.8 MeV', '7.7 MeV', '8.8 MeV'],
    correctAnswer: '2.2 MeV',
    explanation: 'It is the simplest bound nucleus.'
  },
  {
    id: 'np-88',
    text: 'What happens to a nucleus in an excited state?',
    options: ['It emits a gamma photon', 'It splits', 'It joins another nucleus', 'It disappears'],
    correctAnswer: 'It emits a gamma photon',
    explanation: 'Gamma emission returns the nucleus to its ground state.'
  },
  {
    id: 'np-89',
    text: 'The "Dead Time" of a detector limits its:',
    options: ['Sensitivity', 'Count rate', 'Resolution', 'Cost'],
    correctAnswer: 'Count rate',
    explanation: 'The detector is "blind" during dead time, so it cannot count very fast events.'
  },
  {
    id: 'np-90',
    text: 'Which radiation detector is based on the principle of p-n junction?',
    options: ['Cloud chamber', 'GM counter', 'Solid state detector', 'Bubble chamber'],
    correctAnswer: 'Solid state detector',
    explanation: 'It uses a reverse-biased junction where ionizing radiation creates hole-electron pairs.'
  },
  {
    id: 'np-91',
    text: 'The process in which a neutron is converted into a proton is:',
    options: ['Alpha decay', 'Beta-minus decay', 'Beta-plus decay', 'Fusion'],
    correctAnswer: 'Beta-minus decay',
    explanation: 'n → p + e⁻ + ν_bar.'
  },
  {
    id: 'np-92',
    text: 'A "Neutron" was discovered by:',
    options: ['Rutherford', 'Thomson', 'James Chadwick', 'Bohr'],
    correctAnswer: 'James Chadwick',
    explanation: 'He discovered it in 1932 by bombarding Beryllium with alpha particles.'
  },
  {
    id: 'np-93',
    text: 'What is the approximate density of nuclear matter?',
    options: ['10^3 kg/m^3', '10^10 kg/m^3', '10^17 kg/m^3', '10^24 kg/m^3'],
    correctAnswer: '10^17 kg/m^3',
    explanation: 'Nuclei are highly compact and incredibly dense.'
  },
  {
    id: 'np-94',
    text: 'The SI unit of equivalent dose is:',
    options: ['Gray', 'Sievert', 'Rem', 'Rad'],
    correctAnswer: 'Sievert',
    explanation: 'Named after Rolf Sievert.'
  },
  {
    id: 'np-95',
    text: 'Which radiation is most penetrating?',
    options: ['Alpha', 'Beta', 'Gamma', 'Neutrons in some cases'],
    correctAnswer: 'Gamma',
    explanation: 'Being uncharged and massless photons, they travel through most materials.'
  },
  {
    id: 'np-96',
    text: 'A "Baryon" is made of how many quarks?',
    options: ['2', '3', '1', '4'],
    correctAnswer: '3',
    explanation: 'Baryons (like protons/neutrons) have 3 quarks qqq.'
  },
  {
    id: 'np-97',
    text: 'A "Meson" is made of how many quarks?',
    options: ['One quark and one antiquark', '2 quarks', '3 quarks', '6 quarks'],
    correctAnswer: 'One quark and one antiquark',
    explanation: 'Mesons have q-q_bar structure.'
  },
  {
    id: 'np-98',
    text: 'Which force is the weakest of the four fundamental forces?',
    options: ['Gravitational', 'Weak nuclear', 'Electromagnetic', 'Strong nuclear'],
    correctAnswer: 'Gravitational',
    explanation: 'On the scale of subatomic particles, gravity is negligible.'
  },
  {
    id: 'np-99',
    text: 'The "Strong Nuclear Force" acts between:',
    options: ['Electrons and protons', 'Protons and protons', 'Neutrons and neutrons', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'It acts between any two nucleons.'
  },
  {
    id: 'np-100',
    text: 'Nuclear fission is used in:',
    options: ['Nuclear power plants', 'Sun', 'LEDs', 'LDRs'],
    correctAnswer: 'Nuclear power plants',
    explanation: 'Controlled fission provides heat for electricity generation.'
  }
];
