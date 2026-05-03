import { Question } from '../types';

export const WAVES_QUIZ: Question[] = [
  {
    id: 'wv-1',
    text: 'Which of the following waves requires a material medium for its propagation?',
    options: ['Sound waves', 'Light waves', 'Radio waves', 'X-rays'],
    correctAnswer: 'Sound waves',
    explanation: 'Sound waves are mechanical waves and require a medium.'
  },
  {
    id: 'wv-2',
    text: 'What type of wave is generated when a stone is dropped into a pond of water?',
    options: ['Transverse waves', 'Longitudinal waves', 'Both transverse and longitudinal', 'Electromagnetic waves'],
    correctAnswer: 'Both transverse and longitudinal',
    explanation: 'Water surface waves have both transverse and longitudinal components (particles move in circles).'
  },
  {
    id: 'wv-3',
    text: 'Electromagnetic waves do not require a medium because they consist of oscillating:',
    options: ['Electric and magnetic fields', 'Air molecules', 'Photons only', 'Gravitational fields'],
    correctAnswer: 'Electric and magnetic fields',
    explanation: 'EM waves are self-propagating oscillations of electric and magnetic fields.'
  },
  {
    id: 'wv-4',
    text: 'A wave transports energy. If the amplitude of a wave is doubled, the energy it transports is:',
    options: ['Doubled', 'Halved', 'Quadrupled', 'Unchanged'],
    correctAnswer: 'Quadrupled',
    explanation: 'Energy of a wave is proportional to the square of its amplitude.'
  },
  {
    id: 'wv-5',
    text: 'Which property of a wave is entirely determined by the source and not by the medium?',
    options: ['Speed', 'Wavelength', 'Frequency', 'Amplitude'],
    correctAnswer: 'Frequency',
    explanation: 'Frequency depends only on the source. Speed and wavelength depend on the medium.'
  },
  {
    id: 'wv-6',
    text: 'In a transverse wave, the particles of the medium vibrate:',
    options: ['Parallel to wave propagation', 'Perpendicular to wave propagation', 'In circular paths', 'They do not vibrate'],
    correctAnswer: 'Perpendicular to wave propagation',
    explanation: 'Transverse implies perpendicular vibration.'
  },
  {
    id: 'wv-7',
    text: 'Which of the following is an example of a 3D wave?',
    options: ['Wave on a string', 'Ripple on water', 'Sound wave in air', 'Transverse wave on a spring'],
    correctAnswer: 'Sound wave in air',
    explanation: 'Sound propagates in all directions in 3D space.'
  },
  {
    id: 'wv-8',
    text: 'Why can sound not travel through a vacuum?',
    options: ['It is an electromagnetic wave', 'It requires particles to transmit energy', 'Its frequency is too low', 'Its wavelength is too long'],
    correctAnswer: 'It requires particles to transmit energy',
    explanation: 'Mechanical waves rely on particle interactions to propagate.'
  },
  {
    id: 'wv-9',
    text: 'The distance between two consecutive crests or troughs is called:',
    options: ['Amplitude', 'Frequency', 'Wavelength', 'Time period'],
    correctAnswer: 'Wavelength',
    explanation: 'This is the definition of wavelength for a transverse wave.'
  },
  {
    id: 'wv-10',
    text: 'A wave has a frequency of 50 Hz. How many waves pass a given point in 2 seconds?',
    options: ['25', '50', '100', '200'],
    correctAnswer: '100',
    explanation: '50 waves per second x 2 seconds = 100 waves.'
  },
  {
    id: 'wv-11',
    text: 'What is the speed of a wave with a frequency of 200 Hz and a wavelength of 1.5 m?',
    options: ['150 m/s', '300 m/s', '450 m/s', '600 m/s'],
    correctAnswer: '300 m/s',
    explanation: 'v = fλ = 200 * 1.5 = 300 m/s.'
  },
  {
    id: 'wv-12',
    text: 'If a wave travels from one medium to another and its speed increases, what happens to its wavelength?',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes zero'],
    correctAnswer: 'Increases',
    explanation: 'Frequency remains constant. Since v = fλ, if v increases, λ must increase.'
  },
  {
    id: 'wv-13',
    text: 'A sound wave travels at 340 m/s. If its wavelength is 1.7 m, its frequency is:',
    options: ['20 Hz', '200 Hz', '170 Hz', '340 Hz'],
    correctAnswer: '200 Hz',
    explanation: 'f = v/λ = 340 / 1.7 = 200 Hz.'
  },
  {
    id: 'wv-14',
    text: 'Phase difference between two particles vibrating in the same state is:',
    options: ['pi', 'pi/2', '2pi', '3pi/2'],
    correctAnswer: '2pi',
    explanation: 'Particles in the same state of vibration are in phase, separated by 2pi or multiples of 2pi.'
  },
  {
    id: 'wv-15',
    text: 'Two points on a wave are separated by a distance of λ/2. What is their phase difference?',
    options: ['pi/2 rad', 'pi rad', '3pi/2 rad', '2pi rad'],
    correctAnswer: 'pi rad',
    explanation: 'Phase difference = (2pi/λ) * path difference = (2pi/λ) * (λ/2) = pi.'
  },
  {
    id: 'wv-16',
    text: 'The equation of a wave is y = 5 sin(4πt - 2πx). The wave speed is:',
    options: ['2 m/s', '4 m/s', '0.5 m/s', '5 m/s'],
    correctAnswer: '2 m/s',
    explanation: 'Standard form y = A sin(ωt - kx). ω=4π, k=2π. v = ω/k = 4π/2π = 2 m/s.'
  },
  {
    id: 'wv-17',
    text: 'The time taken by a wave to travel a distance equal to its wavelength is:',
    options: ['1 second', 'Time period', 'Frequency', 'Wave speed'],
    correctAnswer: 'Time period',
    explanation: 'By definition, the wave travels one wavelength in one time period.'
  },
  {
    id: 'wv-18',
    text: 'As a wave spreads out uniformly from a point source in 3D, its amplitude A relates to distance r as:',
    options: ['A ∝ 1/r', 'A ∝ 1/r²', 'A ∝ r', 'A is constant'],
    correctAnswer: 'A ∝ 1/r',
    explanation: 'Intensity I ∝ 1/r². Since I ∝ A², A ∝ 1/r.'
  },
  {
    id: 'wv-19',
    text: 'If the time period of a wave is 0.02 s, its frequency is:',
    options: ['5 Hz', '20 Hz', '50 Hz', '100 Hz'],
    correctAnswer: '50 Hz',
    explanation: 'f = 1/T = 1/0.02 = 50 Hz.'
  },
  {
    id: 'wv-20',
    text: 'The maximum displacement of a particle from its mean position is called:',
    options: ['Phase', 'Wavelength', 'Amplitude', 'Crest'],
    correctAnswer: 'Amplitude',
    explanation: 'This is the definition of amplitude.'
  },
  {
    id: 'wv-21',
    text: 'Longitudinal waves consist of:',
    options: ['Crests and troughs', 'Compressions and rarefactions', 'Nodes and antinodes', 'Peaks and valleys'],
    correctAnswer: 'Compressions and rarefactions',
    explanation: 'Longitudinal waves propagate through compressions and rarefactions.'
  },
  {
    id: 'wv-22',
    text: 'Which of the following cannot be polarized?',
    options: ['Microwaves', 'Light waves', 'Sound waves in air', 'X-rays'],
    correctAnswer: 'Sound waves in air',
    explanation: 'Only transverse waves can be polarized. Sound in air is longitudinal.'
  },
  {
    id: 'wv-23',
    text: 'In a longitudinal wave, the distance between two consecutive compressions is 0.4 m. The wavelength is:',
    options: ['0.2 m', '0.4 m', '0.8 m', '1.6 m'],
    correctAnswer: '0.4 m',
    explanation: 'The distance between consecutive compressions is one full wavelength.'
  },
  {
    id: 'wv-24',
    text: 'Which type of wave can propagate through solids, liquids, and gases?',
    options: ['Only transverse waves', 'Only longitudinal waves', 'Both transverse and longitudinal', 'Electromagnetic waves only'],
    correctAnswer: 'Only longitudinal waves',
    explanation: 'Longitudinal waves can propagate in all states of matter. Transverse mechanical waves mainly propagate in solids.'
  },
  {
    id: 'wv-25',
    text: 'During the passage of a longitudinal wave, pressure is maximum at:',
    options: ['Rarefaction', 'Compression', 'Midway between them', 'It remains constant'],
    correctAnswer: 'Compression',
    explanation: 'Compressions are regions of high pressure and high density.'
  },
  {
    id: 'wv-26',
    text: 'The velocity of a transverse wave on a stretched string depends on:',
    options: ['Tension and length', 'Tension and linear mass density', 'Frequency and amplitude', 'Wavelength and time period'],
    correctAnswer: 'Tension and linear mass density',
    explanation: 'v = √(T/μ), where μ is linear mass density (m/L).'
  },
  {
    id: 'wv-27',
    text: 'A string has tension 100 N and linear mass density 0.01 kg/m. The wave speed is:',
    options: ['10 m/s', '100 m/s', '1000 m/s', '1 m/s'],
    correctAnswer: '100 m/s',
    explanation: 'v = √(100 / 0.01) = √10000 = 100 m/s.'
  },
  {
    id: 'wv-28',
    text: 'If the tension in a stretched string is made four times, the wave speed:',
    options: ['Remains same', 'Doubles', 'Halves', 'Quadruples'],
    correctAnswer: 'Doubles',
    explanation: 'v is proportional to √T. √4 = 2, so speed doubles.'
  },
  {
    id: 'wv-29',
    text: 'The distance between a compression and the adjacent rarefaction is 0.5 m. What is the wavelength?',
    options: ['0.25 m', '0.5 m', '1.0 m', '2.0 m'],
    correctAnswer: '1.0 m',
    explanation: 'Distance between C and R is λ/2. So λ = 2 * 0.5 = 1.0 m.'
  },
  {
    id: 'wv-30',
    text: 'Earthquake P-waves are:',
    options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Stationary'],
    correctAnswer: 'Longitudinal',
    explanation: 'Primary (P) waves are longitudinal, while Secondary (S) waves are transverse.'
  },
  {
    id: 'wv-31',
    text: 'According to Newton, the propagation of sound in air is an:',
    options: ['Isothermal process', 'Adiabatic process', 'Isochoric process', 'Isobaric process'],
    correctAnswer: 'Isothermal process',
    explanation: 'Newton assumed temperature remains constant (isothermal) during sound propagation.'
  },
  {
    id: 'wv-32',
    text: "Newton's formula for the speed of sound in a gas is v = √(P/ρ). For air at STP, this gives approximately:",
    options: ['332 m/s', '280 m/s', '340 m/s', '300 m/s'],
    correctAnswer: '280 m/s',
    explanation: "Newton's formula gives 280 m/s, which was lower than the experimental value."
  },
  {
    id: 'wv-33',
    text: "Laplace corrected Newton's formula by suggesting that sound propagation is:",
    options: ['Isothermal', 'Adiabatic', 'Isobaric', 'Isochoric'],
    correctAnswer: 'Adiabatic',
    explanation: 'Laplace argued the process is too fast for heat exchange, hence adiabatic.'
  },
  {
    id: 'wv-34',
    text: "In Laplace's formula v = √(γP/ρ), the factor γ is:",
    options: ['Ratio of specific heats (Cp/Cv)', 'Universal gas constant', 'Coefficient of viscosity', 'Density gradient'],
    correctAnswer: 'Ratio of specific heats (Cp/Cv)',
    explanation: 'γ is the adiabatic index, Cp/Cv.'
  },
  {
    id: 'wv-35',
    text: "For air, γ is approximately 1.4. By what factor did Laplace's correction multiply Newton's speed of sound?",
    options: ['1.4', '√1.4', '1/√1.4', '1.4²'],
    correctAnswer: '√1.4',
    explanation: 'The speed is multiplied by √γ, which is roughly √1.4 (about 1.18).'
  },
  {
    id: 'wv-36',
    text: 'Why does sound travel faster in solids than in gases?',
    options: ['Solids are less dense', "Solids have much higher elasticity (Young's modulus)", 'Solids have higher temperature', 'Sound is a transverse wave in solids'],
    correctAnswer: "Solids have much higher elasticity (Young's modulus)",
    explanation: "v = √(E/ρ). The elastic modulus E of solids is vastly greater than that of gases, overcoming the density difference."
  },
  {
    id: 'wv-37',
    text: 'The speed of sound is maximum in:',
    options: ['Air', 'Water', 'Vacuum', 'Steel'],
    correctAnswer: 'Steel',
    explanation: 'Sound travels fastest in dense, highly elastic media like steel.'
  },
  {
    id: 'wv-38',
    text: 'If the bulk modulus of water is 2.2 x 10^9 Pa and its density is 1000 kg/m³, the speed of sound in water is approximately:',
    options: ['1480 m/s', '330 m/s', '3000 m/s', '1000 m/s'],
    correctAnswer: '1480 m/s',
    explanation: 'v = √(B/ρ) = √(2.2e9 / 1000) = √2.2e6 ≈ 1483 m/s.'
  },
  {
    id: 'wv-39',
    text: 'In which state of matter is the propagation of sound purely longitudinal?',
    options: ['Solids', 'Gases', 'It is longitudinal in both', 'Neither'],
    correctAnswer: 'Gases',
    explanation: 'In fluids (gases and liquids), sound is purely longitudinal. Solids can support both longitudinal and transverse waves.'
  },
  {
    id: 'wv-40',
    text: 'Sound cannot travel through:',
    options: ['Vacuum', 'Diamond', 'Plasma', 'Water'],
    correctAnswer: 'Vacuum',
    explanation: 'Sound needs a material medium.'
  },
  {
    id: 'wv-41',
    text: 'How does an increase in pressure affect the speed of sound in a gas at constant temperature?',
    options: ['Increases it', 'Decreases it', 'No effect', 'Doubles it'],
    correctAnswer: 'No effect',
    explanation: 'At constant temperature, P/ρ is constant, so speed of sound is independent of pressure changes.'
  },
  {
    id: 'wv-42',
    text: 'The speed of sound in air at 0°C is 332 m/s. For every 1°C rise in temperature, the speed increases by approximately:',
    options: ['0.61 m/s', '1.0 m/s', '3.3 m/s', '10 m/s'],
    correctAnswer: '0.61 m/s',
    explanation: 'v_t = v_0 + 0.61t.'
  },
  {
    id: 'wv-43',
    text: 'What is the approximate speed of sound in air at 20°C?',
    options: ['332 m/s', '344 m/s', '350 m/s', '320 m/s'],
    correctAnswer: '344 m/s',
    explanation: '332 + (0.61 * 20) = 332 + 12.2 = 344.2 m/s.'
  },
  {
    id: 'wv-44',
    text: 'Which has a higher speed of sound at the same temperature and pressure: moist air or dry air?',
    options: ['Dry air', 'Moist air', 'Both have the same speed', 'Depends on altitude'],
    correctAnswer: 'Moist air',
    explanation: 'Moist air is less dense than dry air (water vapor is lighter than N2/O2), so speed is higher in moist air.'
  },
  {
    id: 'wv-45',
    text: 'The speed of sound in a gas is proportional to:',
    options: ['Absolute temperature T', 'Square root of absolute temperature (√T)', 'Square of absolute temperature (T²)', '1/T'],
    correctAnswer: 'Square root of absolute temperature (√T)',
    explanation: 'v = √(γRT/M), so v ∝ √T.'
  },
  {
    id: 'wv-46',
    text: 'At what temperature will the speed of sound in air be double its value at 273 K?',
    options: ['546 K', '1092 K', '273 K', '819 K'],
    correctAnswer: '1092 K',
    explanation: 'To double speed, T must quadruple. 273 * 4 = 1092 K.'
  },
  {
    id: 'wv-47',
    text: 'How does the wind blowing in the direction of sound propagation affect the sound wave?',
    options: ['Increases its speed relative to the ground', 'Decreases its speed', 'Changes its frequency', 'No effect on speed'],
    correctAnswer: 'Increases its speed relative to the ground',
    explanation: 'The velocity of wind adds vectorially to the velocity of sound.'
  },
  {
    id: 'wv-48',
    text: 'Which factor does NOT affect the speed of sound in air?',
    options: ['Temperature', 'Humidity', 'Wind direction', 'Frequency of sound'],
    correctAnswer: 'Frequency of sound',
    explanation: 'Speed of sound is independent of its frequency (non-dispersive medium).'
  },
  {
    id: 'wv-49',
    text: 'If the temperature of a gas is increased from 27°C to 327°C, the ratio of the new speed of sound to the old speed is:',
    options: ['1:1', '√2:1', '2:1', '4:1'],
    correctAnswer: '√2:1',
    explanation: 'T1 = 300 K, T2 = 600 K. Ratio of speeds = √(600/300) = √2:1.'
  },
  {
    id: 'wv-50',
    text: 'Why does sound travel faster on a hot summer day than on a cold winter day?',
    options: ['Air pressure is higher', 'Air density is higher', 'Air molecules have more kinetic energy', 'Humidity is lower'],
    correctAnswer: 'Air molecules have more kinetic energy',
    explanation: 'Higher temperature means greater kinetic energy, allowing vibrations to pass faster.'
  },
  {
    id: 'wv-51',
    text: 'When two waves overlap, the resultant displacement is the algebraic sum of their individual displacements. This is the principle of:',
    options: ['Superposition', 'Huygens', 'Diffraction', 'Refraction'],
    correctAnswer: 'Superposition',
    explanation: 'This defines the principle of superposition.'
  },
  {
    id: 'wv-52',
    text: 'For constructive interference between two waves of the same wavelength, their path difference must be:',
    options: ['An odd multiple of λ/2', 'An integral multiple of λ', 'An odd multiple of λ', 'Half of the wavelength'],
    correctAnswer: 'An integral multiple of λ',
    explanation: 'Constructive interference occurs when path difference is nλ.'
  },
  {
    id: 'wv-53',
    text: 'Two waves of amplitudes 3 cm and 4 cm interfere constructively. What is the maximum resultant amplitude?',
    options: ['1 cm', '5 cm', '7 cm', '12 cm'],
    correctAnswer: '7 cm',
    explanation: 'A_max = A1 + A2 = 3 + 4 = 7 cm.'
  },
  {
    id: 'wv-54',
    text: 'Destructive interference occurs when the phase difference between two coherent waves is:',
    options: ['0', 'pi, 3pi, 5pi...', '2pi, 4pi, 6pi...', 'pi/2, 3pi/2...'],
    correctAnswer: 'pi, 3pi, 5pi...',
    explanation: 'Destructive interference requires they are completely out of phase.'
  },
  {
    id: 'wv-55',
    text: 'Two waves of amplitudes 5 units and 2 units interfere destructively. The resultant amplitude is:',
    options: ['7 units', '3 units', '10 units', '2.5 units'],
    correctAnswer: '3 units',
    explanation: 'A_min = |A1 - A2| = 5 - 2 = 3 units.'
  },
  {
    id: 'wv-56',
    text: 'Two sound waves of the same frequency and amplitude traveling in opposite directions produce:',
    options: ['Beats', 'Stationary waves', 'Doppler effect', 'Mach waves'],
    correctAnswer: 'Stationary waves',
    explanation: 'This is the standard condition for forming stationary (standing) waves.'
  },
  {
    id: 'wv-57',
    text: 'To produce observable interference, the two sources must be:',
    options: ['Of high frequency', 'Coherent', 'Moving', 'Of different amplitudes'],
    correctAnswer: 'Coherent',
    explanation: 'Coherent sources maintain a constant phase difference, which is necessary for stable interference.'
  },
  {
    id: 'wv-58',
    text: 'Two sources emit waves of λ = 2 m. If they arrive at a point with a path difference of 3 m, what kind of interference occurs?',
    options: ['Constructive', 'Destructive', 'None', 'Partially constructive'],
    correctAnswer: 'Destructive',
    explanation: 'Path diff = 3 m = 1.5 λ = (3)λ/2. Odd multiple of λ/2 means destructive interference.'
  },
  {
    id: 'wv-59',
    text: 'In interference, the energy of the waves is:',
    options: ['Destroyed at minima', 'Created at maxima', 'Redistributed', 'Converted to heat'],
    correctAnswer: 'Redistributed',
    explanation: 'Energy is conserved; it is simply redistributed spatially.'
  },
  {
    id: 'wv-60',
    text: 'If two waves have different frequencies, can they produce a stable interference pattern?',
    options: ['Yes', 'No', 'Only if amplitudes are equal', 'Only in a vacuum'],
    correctAnswer: 'No',
    explanation: "Different frequencies mean varying phase difference, so the interference pattern won't be stable."
  },
  {
    id: 'wv-61',
    text: 'Beats are produced by the superposition of two waves traveling in the same direction with:',
    options: ['Same frequency', 'Slightly different frequencies', 'Different amplitudes', 'Different shapes'],
    correctAnswer: 'Slightly different frequencies',
    explanation: 'Beats require a slight difference in frequencies.'
  },
  {
    id: 'wv-62',
    text: 'Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. The beat frequency is:',
    options: ['4 Hz', '258 Hz', '516 Hz', '2 Hz'],
    correctAnswer: '4 Hz',
    explanation: 'Beat frequency = |f1 - f2| = 260 - 256 = 4 Hz.'
  },
  {
    id: 'wv-63',
    text: 'In the phenomenon of beats, what varies periodically?',
    options: ['Wavelength', 'Wave speed', 'Amplitude (intensity)', 'Phase'],
    correctAnswer: 'Amplitude (intensity)',
    explanation: 'The periodic rising and falling of sound intensity is called beats.'
  },
  {
    id: 'wv-64',
    text: 'A tuning fork X produces 3 beats/s with a standard fork of 300 Hz. If X is loaded with a little wax, it produces 1 beat/s. The original frequency of X is:',
    options: ['297 Hz', '303 Hz', '299 Hz', '301 Hz'],
    correctAnswer: '303 Hz',
    explanation: 'Original could be 297 or 303. Wax lowers frequency. If 303 lowers, beats decrease to 1 (e.g. 301). If 297 lowers, beats would increase. So original is 303 Hz.'
  },
  {
    id: 'wv-65',
    text: 'Why can humans usually not hear beats if the frequency difference is greater than 10 Hz?',
    options: ['The ear cannot resolve such fast variations in intensity', 'The sound becomes too loud', 'The waves stop interfering', 'Constructive interference ceases'],
    correctAnswer: 'The ear cannot resolve such fast variations in intensity',
    explanation: 'Human persistence of hearing limits distinguishing separate beats if they occur more than 10 times per second.'
  },
  {
    id: 'wv-66',
    text: 'Beats are an example of:',
    options: ['Interference in space', 'Interference in time', 'Diffraction', 'Polarization'],
    correctAnswer: 'Interference in time',
    explanation: 'Beats occur at a single point over time due to alternating constructive and destructive interference.'
  },
  {
    id: 'wv-67',
    text: 'Two strings of a piano sound 4 beats per second. If one is known to have a frequency of 440 Hz, the other could be:',
    options: ['436 Hz or 444 Hz', '440 Hz', '438 Hz or 442 Hz', '444 Hz only'],
    correctAnswer: '436 Hz or 444 Hz',
    explanation: 'f = 440 ± 4, so 436 Hz or 444 Hz.'
  },
  {
    id: 'wv-68',
    text: 'If you file the prongs of a tuning fork, its frequency:',
    options: ['Increases', 'Decreases', 'Remains unchanged', 'Becomes zero'],
    correctAnswer: 'Increases',
    explanation: 'Filing reduces mass, making the prongs lighter and increasing the frequency of vibration.'
  },
  {
    id: 'wv-69',
    text: 'Fork A produces 5 beats/s with fork B of frequency 512 Hz. Filing A increases the beat frequency to 7 beats/s. The original frequency of A was:',
    options: ['507 Hz', '517 Hz', '519 Hz', '505 Hz'],
    correctAnswer: '517 Hz',
    explanation: "A could be 507 or 517. Filing increases A's frequency. If 517 goes up, diff increases to 7. If 507 goes up, diff decreases. Original was 517 Hz."
  },
  {
    id: 'wv-70',
    text: 'An important application of beats is:',
    options: ['Determining the speed of sound', 'Tuning musical instruments', 'Medical ultrasound', 'Radar speed guns'],
    correctAnswer: 'Tuning musical instruments',
    explanation: 'Instruments are tuned by eliminating beats when played with a standard source.'
  },
  {
    id: 'wv-71',
    text: 'When a transverse wave reflects from a rigid boundary, its phase changes by:',
    options: ['0', 'pi/2', 'pi', '2pi'],
    correctAnswer: 'pi',
    explanation: 'Reflection from a denser/rigid boundary introduces a phase change of 180° (pi radians).'
  },
  {
    id: 'wv-72',
    text: 'A wave reflecting from a free end undergoes a phase change of:',
    options: ['0', 'pi/2', 'pi', '3pi/2'],
    correctAnswer: '0',
    explanation: 'Reflection from a less dense medium or free end involves no phase change.'
  },
  {
    id: 'wv-73',
    text: 'In a stationary wave, the points that remain permanently at rest are called:',
    options: ['Antinodes', 'Crests', 'Troughs', 'Nodes'],
    correctAnswer: 'Nodes',
    explanation: 'Nodes are points of zero amplitude due to destructive interference.'
  },
  {
    id: 'wv-74',
    text: 'The distance between two consecutive nodes in a stationary wave is:',
    options: ['λ', 'λ/2', 'λ/4', '2λ'],
    correctAnswer: 'λ/2',
    explanation: 'Nodes are separated by half a wavelength.'
  },
  {
    id: 'wv-75',
    text: 'A stationary wave has a distance of 1.5 m between a node and the adjacent antinode. The wavelength is:',
    options: ['1.5 m', '3.0 m', '6.0 m', '0.75 m'],
    correctAnswer: '6.0 m',
    explanation: 'Distance from N to A is λ/4. So λ = 4 * 1.5 = 6.0 m.'
  },
  {
    id: 'wv-76',
    text: 'In a stationary wave, energy is:',
    options: ['Transmitted rapidly', 'Reflected completely at antinodes', 'Not transported along the medium', 'Converted to mass'],
    correctAnswer: 'Not transported along the medium',
    explanation: 'Stationary waves confine energy between nodes; they do not transport it.'
  },
  {
    id: 'wv-77',
    text: 'A string fixed at both ends has length L. What is the wavelength of its fundamental mode?',
    options: ['L/2', 'L', '2L', '4L'],
    correctAnswer: '2L',
    explanation: 'Fundamental mode has nodes at ends, so L = λ/2, meaning λ = 2L.'
  },
  {
    id: 'wv-78',
    text: 'If the tension in a guitar string is increased, the fundamental frequency of the string:',
    options: ['Increases', 'Decreases', 'Remains the same', 'Becomes zero'],
    correctAnswer: 'Increases',
    explanation: 'v = √(T/μ) increases. Since f = v/2L, higher speed means higher frequency.'
  },
  {
    id: 'wv-79',
    text: 'A string of length 1 m vibrates in 3 loops. The wavelength is:',
    options: ['1 m', '0.67 m', '1.5 m', '3 m'],
    correctAnswer: '0.67 m',
    explanation: 'L = 3(λ/2) => 1 = 1.5 λ => λ = 2/3 m ≈ 0.67 m.'
  },
  {
    id: 'wv-80',
    text: 'The frequencies of the overtones in a stretched string fixed at both ends are:',
    options: ['Only odd harmonics', 'Only even harmonics', 'Both odd and even harmonics', 'Fractional harmonics'],
    correctAnswer: 'Both odd and even harmonics',
    explanation: 'A stretched string fixed at both ends produces all integer harmonics: f, 2f, 3f...'
  },
  {
    id: 'wv-81',
    text: 'An organ pipe closed at one end has a node at the closed end and a/an ___ at the open end.',
    options: ['Node', 'Antinode', 'Crest', 'Trough'],
    correctAnswer: 'Antinode',
    explanation: 'The open end allows maximum displacement, forming an antinode.'
  },
  {
    id: 'wv-82',
    text: 'For a closed pipe of length L, the fundamental wavelength is:',
    options: ['L', '2L', '4L', 'L/2'],
    correctAnswer: '4L',
    explanation: 'Fundamental in closed pipe is L = λ/4, so λ = 4L.'
  },
  {
    id: 'wv-83',
    text: 'Which harmonics are present in a closed organ pipe?',
    options: ['All integer harmonics', 'Only even harmonics', 'Only odd harmonics', 'None'],
    correctAnswer: 'Only odd harmonics',
    explanation: 'Closed pipes produce frequencies f, 3f, 5f... (only odd harmonics).'
  },
  {
    id: 'wv-84',
    text: 'A closed pipe is 0.5 m long. If the speed of sound is 340 m/s, its fundamental frequency is:',
    options: ['170 Hz', '340 Hz', '680 Hz', '85 Hz'],
    correctAnswer: '170 Hz',
    explanation: 'λ = 4L = 4 * 0.5 = 2 m. f = v/λ = 340 / 2 = 170 Hz.'
  },
  {
    id: 'wv-85',
    text: 'An organ pipe open at both ends produces a fundamental frequency f. If it is closed at one end, its new fundamental frequency will be:',
    options: ['2f', 'f/2', 'f', '4f'],
    correctAnswer: 'f/2',
    explanation: 'Open pipe f_open = v/2L. Closed pipe f_closed = v/4L. So it becomes half.'
  },
  {
    id: 'wv-86',
    text: 'Why does an open pipe produce a richer sound than a closed pipe of the same length?',
    options: ['It has higher pitch', 'It produces both odd and even harmonics', 'It is longer', 'It vibrates with higher amplitude'],
    correctAnswer: 'Both odd and even harmonics',
    explanation: 'The presence of all harmonics creates a richer, fuller sound.'
  },
  {
    id: 'wv-87',
    text: 'An open pipe has a fundamental frequency of 300 Hz. Its first overtone is:',
    options: ['450 Hz', '600 Hz', '900 Hz', '150 Hz'],
    correctAnswer: '600 Hz',
    explanation: 'First overtone of an open pipe is the second harmonic (2f) = 600 Hz.'
  },
  {
    id: 'wv-88',
    text: "In a Kundt's tube experiment, the powder collects in heaps at the:",
    options: ['Nodes', 'Antinodes', 'Open ends', 'Closed ends'],
    correctAnswer: 'Nodes',
    explanation: 'The powder is undisturbed at nodes where the air is completely still.'
  },
  {
    id: 'wv-89',
    text: 'A closed pipe has a fundamental frequency of 200 Hz. The frequency of its first overtone is:',
    options: ['400 Hz', '600 Hz', '800 Hz', '300 Hz'],
    correctAnswer: '600 Hz',
    explanation: 'First overtone of a closed pipe is the third harmonic (3f) = 600 Hz.'
  },
  {
    id: 'wv-90',
    text: 'End correction is applied to the length of an air column because the antinode forms:',
    options: ['Exactly at the open end', 'Slightly outside the open end', 'Slightly inside the pipe', 'At the closed end'],
    correctAnswer: 'Slightly outside the open end',
    explanation: 'Air slightly beyond the pipe is set into vibration, shifting the antinode outward.'
  },
  {
    id: 'wv-91',
    text: 'The apparent change in the frequency of sound due to relative motion between source and observer is called:',
    options: ['Interference', 'Diffraction', 'Doppler effect', 'Beats'],
    correctAnswer: 'Doppler effect',
    explanation: 'This is the standard definition of the Doppler effect.'
  },
  {
    id: 'wv-92',
    text: 'If a sound source moves towards a stationary observer, the apparent wavelength:',
    options: ['Increases', 'Decreases', 'Remains unchanged', 'Becomes zero'],
    correctAnswer: 'Decreases',
    explanation: 'The wave fronts are compressed in the direction of motion, decreasing the wavelength.'
  },
  {
    id: 'wv-93',
    text: 'A train approaches a platform at 34 m/s blowing a whistle of 300 Hz. If v = 340 m/s, the apparent frequency heard by an observer on the platform is:',
    options: ['300 Hz', '273 Hz', '333 Hz', '330 Hz'],
    correctAnswer: '333 Hz',
    explanation: "f' = f [v / (v - v_s)] = 300 [340 / (340 - 34)] = 300 (340 / 306) ≈ 333.3 Hz."
  },
  {
    id: 'wv-94',
    text: 'An observer moves away from a stationary sound source. The speed of sound relative to the observer:',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes negative'],
    correctAnswer: 'Decreases',
    explanation: 'Relative speed = v - v_o. It decreases.'
  },
  {
    id: 'wv-95',
    text: 'A car moving at 20 m/s sounds a horn of 400 Hz. It passes a stationary observer. The frequency drops as it moves away. (Use v = 340 m/s). The apparent frequency as it recedes is:',
    options: ['378 Hz', '425 Hz', '400 Hz', '350 Hz'],
    correctAnswer: '378 Hz',
    explanation: "f' = f [v / (v + v_s)] = 400 [340 / 360] = 400 * 0.944 ≈ 377.8 Hz."
  },
  {
    id: 'wv-96',
    text: 'Which of the following does NOT involve the Doppler effect?',
    options: ['Radar speed traps', 'Echocardiography', 'Measurement of stellar expansion (Redshift)', 'Measuring atmospheric pressure'],
    correctAnswer: 'Measuring atmospheric pressure',
    explanation: 'Atmospheric pressure is measured by a barometer, unrelated to the Doppler effect.'
  },
  {
    id: 'wv-97',
    text: 'If both source and observer move in the same direction with the same speed, the apparent frequency is:',
    options: ['Higher', 'Lower', 'Zero', 'Equal to the original frequency'],
    correctAnswer: 'Equal to the original frequency',
    explanation: 'Since there is no relative motion, there is no Doppler shift.'
  },
  {
    id: 'wv-98',
    text: 'A bat flies at 5 m/s toward a wall emitting a 40 kHz ultrasound. What is the approximate frequency of the echo it hears? (v=340 m/s)',
    options: ['41.2 kHz', '38.8 kHz', '40 kHz', '45 kHz'],
    correctAnswer: '41.2 kHz',
    explanation: "f' = f [(v + v_b) / (v - v_b)] = 40 [(340 + 5) / (340 - 5)] = 40 (345 / 335) ≈ 41.19 kHz."
  },
  {
    id: 'wv-99',
    text: 'In the relativistic Doppler effect for light, unlike sound, the shift depends only on:',
    options: ['Speed of the medium', 'Relative velocity between source and observer', 'Temperature', 'Gravity'],
    correctAnswer: 'Relative velocity between source and observer',
    explanation: 'Light needs no medium, so classical formulas tracking source vs. medium vs. observer merge into a relative velocity dependence.'
  },
  {
    id: 'wv-100',
    text: 'A red shift in the spectrum of distant galaxies indicates that they are:',
    options: ['Moving toward us', 'Moving away from us', 'Stationary', 'Exploding'],
    correctAnswer: 'Moving away from us',
    explanation: 'Redshift implies an increase in wavelength, corresponding to galaxies moving away (expansion of universe).'
  }
];
