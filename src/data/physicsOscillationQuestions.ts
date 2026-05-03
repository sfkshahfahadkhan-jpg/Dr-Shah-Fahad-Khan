import { Question } from '../types';

export const PHYSICS_OSCILLATION_QUIZ: Question[] = [
  {
    id: 'ph-os-1',
    text: 'A motion that repeats itself in equal intervals of time is called:',
    options: ['Random motion', 'Periodic motion', 'Linear motion', 'None'],
    correctAnswer: 'Periodic motion',
    explanation: 'Example: motion of planets, clock hands.'
  },
  {
    id: 'ph-os-2',
    text: 'The back and forth motion of a body about a fixed point is called _____ or _____ motion.',
    options: ['Translatory, Linear', 'Oscillatory, Vibratory', 'Rotational, Circular', 'None'],
    correctAnswer: 'Oscillatory, Vibratory',
    explanation: 'A type of periodic motion.'
  },
  {
    id: 'ph-os-3',
    text: 'One complete round trip of a vibrating body is called:',
    options: ['Frequency', 'Vibration', 'Time period', 'None'],
    correctAnswer: 'Vibration',
    explanation: 'Also called a cycle.'
  },
  {
    id: 'ph-os-4',
    text: 'The time required to complete one vibration is called:',
    options: ['Frequency', 'Time period (T)', 'Phase', 'None'],
    correctAnswer: 'Time period (T)',
    explanation: 'Unit is seconds.'
  },
  {
    id: 'ph-os-5',
    text: 'The number of vibrations completed in one second is called:',
    options: ['Time period', 'Frequency (f)', 'Angular velocity', 'None'],
    correctAnswer: 'Frequency (f)',
    explanation: 'Unit is Hertz (Hz). 1 Hz = 1 vibration/s.'
  },
  {
    id: 'ph-os-6',
    text: 'The relation between time period (T) and frequency (f) is:',
    options: ['f = T', 'f = 1/T', 'f = T^2', 'None'],
    correctAnswer: 'f = 1/T',
    explanation: 'Inversely proportional.'
  },
  {
    id: 'ph-os-7',
    text: 'The distance of a vibrating body from its mean position at any instant is called:',
    options: ['Amplitude', 'Displacement (x)', 'Wavelength', 'None'],
    correctAnswer: 'Displacement (x)',
    explanation: 'Varies from 0 to x0.'
  },
  {
    id: 'ph-os-8',
    text: 'The maximum displacement of a vibrating body from its mean position is called:',
    options: ['Displacement', 'Amplitude (x0)', 'Frequency', 'None'],
    correctAnswer: 'Amplitude (x0)',
    explanation: 'Distance from mean to extreme position.'
  },
  {
    id: 'ph-os-9',
    text: 'A type of oscillatory motion in which acceleration is directly proportional to displacement and directed towards mean position is:',
    options: ['Simple Harmonic Motion (SHM)', 'Projectile motion', 'Circular motion', 'None'],
    correctAnswer: 'Simple Harmonic Motion (SHM)',
    explanation: 'Formula: a ∝ -x.'
  },
  {
    id: 'ph-os-10',
    text: 'In SHM, the acceleration "a" is given by:',
    options: ['a = -ω^2 x', 'a = -ω x', 'a = ω^2 x', 'None'],
    correctAnswer: 'a = -ω^2 x',
    explanation: 'where ω is the angular frequency.'
  },
  {
    id: 'ph-os-11',
    text: 'In SHM, the velocity is _____ at the mean position and _____ at the extreme positions.',
    options: ['Zero, Maximum', 'Maximum, Zero', 'Maximum, Maximum', 'Zero, Zero'],
    correctAnswer: 'Maximum, Zero',
    explanation: 'All energy is kinetic at mean; all is potential at extreme.'
  },
  {
    id: 'ph-os-12',
    text: 'In SHM, the acceleration is _____ at the mean position and _____ at the extreme positions.',
    options: ['Maximum, Zero', 'Zero, Maximum', 'Zero, Zero', 'Maximum, Maximum'],
    correctAnswer: 'Zero, Maximum',
    explanation: 'a ∝ -x; when x=0, a=0; when x is max, a is max.'
  },
  {
    id: 'ph-os-13',
    text: 'Hooke\'s Law states that the restoring force F is:',
    options: ['F = kx', 'F = -kx', 'F = k/x', 'None'],
    correctAnswer: 'F = -kx',
    explanation: 'where k is the spring constant.'
  },
  {
    id: 'ph-os-14',
    text: 'The time period of a mass-spring system is given by:',
    options: ['T = 2π √(m/k)', 'T = 2π √(k/m)', 'T = 2π √(L/g)', 'None'],
    correctAnswer: 'T = 2π √(m/k)',
    explanation: 'Depends on mass and stiffness of spring.'
  },
  {
    id: 'ph-os-15',
    text: 'If the mass attached to a spring is quadrupled, the time period becomes:',
    options: ['Double', 'Four times', 'Half', 'None'],
    correctAnswer: 'Double',
    explanation: 'T ∝ √m.'
  },
  {
    id: 'ph-os-16',
    text: 'The time period of a simple pendulum is given by:',
    options: ['T = 2π √(L/g)', 'T = 2π √(g/L)', 'T = 2π √(m/k)', 'None'],
    correctAnswer: 'T = 2π √(L/g)',
    explanation: 'For small angles.'
  },
  {
    id: 'ph-os-17',
    text: 'The time period of a simple pendulum depends on _____ and _____ at the location.',
    options: ['Mass, Length', 'Length, Gravity (g)', 'Mass, Gravity', 'None'],
    correctAnswer: 'Length, Gravity (g)',
    explanation: 'Independent of mass and amplitude (for small angles).'
  },
  {
    id: 'ph-os-18',
    text: 'A pendulum that completes one vibration in 2 seconds (half-vibration in 1s) is called a:',
    options: ['Seconds pendulum', 'First pendulum', 'Grandfather clock', 'None'],
    correctAnswer: 'Seconds pendulum',
    explanation: 'Time period T = 2 s; frequency f = 0.5 Hz.'
  },
  {
    id: 'ph-os-19',
    text: 'The length of a seconds pendulum on Earth (g = 9.8 m/s^2) is approximately:',
    options: ['0.5 m', '1.0 m', '2.0 m', 'None'],
    correctAnswer: '1.0 m',
    explanation: 'T = 2π √(L/g) -> 2 = 2π √(L/9.8) -> L ≈ 0.99 m.'
  },
  {
    id: 'ph-os-20',
    text: 'If a simple pendulum is taken to the Moon (g = 1.6 m/s^2), its time period will:',
    options: ['Increase', 'Decrease', 'Stay same', 'None'],
    correctAnswer: 'Increase',
    explanation: 'T ∝ 1/√g; smaller g means larger T.'
  },
  {
    id: 'ph-os-21',
    text: 'The physical quantity which specifies the state of motion (displacement and direction) of a vibrating body is:',
    options: ['Frequency', 'Phase (φ)', 'Amplitude', 'None'],
    correctAnswer: 'Phase (φ)',
    explanation: 'φ = ωt + θ.'
  },
  {
    id: 'ph-os-22',
    text: 'Two vibrations are "In phase" if their phase difference is:',
    options: ['90 degrees', '180 degrees', '0 or 360 degrees (multiples of 2π)', 'None'],
    correctAnswer: '0 or 360 degrees (multiples of 2π)',
    explanation: 'They reach their peaks at the same time.'
  },
  {
    id: 'ph-os-23',
    text: 'Potential Energy (P.E) of a mass-spring system in SHM is:',
    options: ['1/2 kx^2', '1/2 mv^2', 'mgh', 'None'],
    correctAnswer: '1/2 kx^2',
    explanation: 'Elastic potential energy.'
  },
  {
    id: 'ph-os-24',
    text: 'Kinetic Energy (K.E) of a mass-spring system in SHM is:',
    options: ['1/2 kx^2', '1/2 k (x0^2 - x^2)', '1/2 mv^2', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'K.E = 1/2 mv^2; substitute v = ω √(x0^2 - x^2) and k = mω^2.'
  },
  {
    id: 'ph-os-25',
    text: 'Total energy of a system in SHM is _____ throughout the motion.',
    options: ['Variable', 'Constant', 'Zero', 'None'],
    correctAnswer: 'Constant',
    explanation: 'E_total = 1/2 k x0^2 (ignoring damping).'
  },
  {
    id: 'ph-os-26',
    text: 'When a system vibrates with its natural frequency without any external force, it is called:',
    options: ['Forced oscillation', 'Free oscillation', 'Resonance', 'None'],
    correctAnswer: 'Free oscillation',
    explanation: 'Examples: tuning fork, pendulum after initial push.'
  },
  {
    id: 'ph-os-27',
    text: 'When a system is made to vibrate by an external periodic force, it is called:',
    options: ['Free oscillation', 'Forced oscillation', 'Damping', 'None'],
    correctAnswer: 'Forced oscillation',
    explanation: 'The frequency is determined by the external force.'
  },
  {
    id: 'ph-os-28',
    text: 'A phenomenon in which the amplitude of vibration increases significantly when the frequency of external force matches the natural frequency is:',
    options: ['Damping', 'Resonance', 'Interference', 'None'],
    correctAnswer: 'Resonance',
    explanation: 'Energy transfer is maximum.'
  },
  {
    id: 'ph-os-29',
    text: 'Which is an application of resonance?',
    options: ['Radio tuning', 'Microwave oven', 'MRI', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Fundamental concept in many technologies.'
  },
  {
    id: 'ph-os-30',
    text: 'The process in which energy of a vibrating system is dissipated is called:',
    options: ['Resonance', 'Damping', 'Diffraction', 'None'],
    correctAnswer: 'Damping',
    explanation: 'Due to friction, air resistance, etc.'
  },
  {
    id: 'ph-os-31',
    text: 'In damped oscillations, the amplitude _____ with time.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Usually follows exponential decay.'
  },
  {
    id: 'ph-os-32',
    text: 'A system in which damping is so high that the body returns to mean position without oscillating is:',
    options: ['Critically damped / Overdamped', 'Underdamped', 'Resonant', 'None'],
    correctAnswer: 'Critically damped / Overdamped',
    explanation: 'Used in shock absorbers.'
  },
  {
    id: 'ph-os-33',
    text: 'Shock absorbers in cars are examples of _____ oscillations.',
    options: ['Undamped', 'Damped', 'Free', 'None'],
    correctAnswer: 'Damped',
    explanation: 'To quickly stop the bouncing of the car.'
  },
  {
    id: 'ph-os-34',
    text: 'The projection of uniform circular motion on the diameter of the circle is:',
    options: ['SHM', 'Uniform motion', 'Parabolic', 'None'],
    correctAnswer: 'SHM',
    explanation: 'Proves the mathematical equivalence.'
  },
  {
    id: 'ph-os-35',
    text: 'Angular frequency ω is related to frequency f by:',
    options: ['ω = 2πf', 'ω = f/2π', 'ω = 2π/f', 'None'],
    correctAnswer: 'ω = 2πf',
    explanation: 'Also ω = 2π/T.'
  },
  {
    id: 'ph-os-36',
    text: 'If a simple pendulum is placed in a lift moving up with acceleration "a", its effective gravity is:',
    options: ['g', 'g+a', 'g-a', 'Zero'],
    correctAnswer: 'g+a',
    explanation: 'Time period will decrease.'
  },
  {
    id: 'ph-os-37',
    text: 'The velocity of a particle performing SHM is maximum when displacement x is:',
    options: ['Maximum (x0)', 'Zero', 'x0/2', 'None'],
    correctAnswer: 'Zero',
    explanation: 'At the mean position.'
  },
  {
    id: 'ph-os-38',
    text: 'The maximum velocity (v0) of a particle in SHM is:',
    options: ['ωx0', 'ω^2 x0', 'x0/ω', 'None'],
    correctAnswer: 'ωx0',
    explanation: 'v = ω √(x0^2 - x^2); at x=0, v = ωx0.'
  },
  {
    id: 'ph-os-39',
    text: 'The maximum acceleration (a0) of a particle in SHM is:',
    options: ['ωx0', 'ω^2 x0', '2πfx0', 'None'],
    correctAnswer: 'ω^2 x0',
    explanation: 'a = -ω^2 x; at x=x0, magnitude is ω^2 x0.'
  },
  {
    id: 'ph-os-40',
    text: 'In SHM, the graph between acceleration and displacement is a:',
    options: ['Parabola', 'Circle', 'Straight line with negative slope', 'None'],
    correctAnswer: 'Straight line with negative slope',
    explanation: 'a = - (constant) x.'
  },
  {
    id: 'ph-os-41',
    text: 'The restoration force in a simple pendulum is provided by _____ component of weight.',
    options: ['mg cosθ', 'mg sinθ', 'mg', 'None'],
    correctAnswer: 'mg sinθ',
    explanation: 'Component perpendicular to string.'
  },
  {
    id: 'ph-os-42',
    text: 'The tension in the string of a simple pendulum is maximum at the:',
    options: ['Mean position', 'Extreme position', 'Middle point', 'None'],
    correctAnswer: 'Mean position',
    explanation: 'T = mg + mv^2/L.'
  },
  {
    id: 'ph-os-43',
    text: 'The tension in the string of a simple pendulum is minimum at the:',
    options: ['Mean position', 'Extreme position', 'Middle point', 'None'],
    correctAnswer: 'Extreme position',
    explanation: 'T = mg cosθ; velocity is zero.'
  },
  {
    id: 'ph-os-44',
    text: 'A "Simple" pendulum consists of a point mass suspended by a _____ and _____ string.',
    options: ['Heavy, Elastic', 'Weightless, Inextensible', 'Thin, Conductive', 'None'],
    correctAnswer: 'Weightless, Inextensible',
    explanation: 'Ideal definition.'
  },
  {
    id: 'ph-os-45',
    text: 'If the length of a simple pendulum is increased by 4 times, its time period is:',
    options: ['Doubled', 'Quadrupled', 'Halved', 'None'],
    correctAnswer: 'Doubled',
    explanation: 'T ∝ √L.'
  },
  {
    id: 'ph-os-46',
    text: 'Phase of 90 degrees corresponds to _____ position.',
    options: ['Mean', 'Extreme', 'Half-amplitude', 'None'],
    correctAnswer: 'Extreme',
    explanation: 'sin(90°) = 1 (max displacement).'
  },
  {
    id: 'ph-os-47',
    text: 'Phase of 180 degrees corresponds to _____ position.',
    options: ['Positive extreme', 'Mean', 'Negative extreme', 'None'],
    correctAnswer: 'Mean',
    explanation: 'sin(180°) = 0; displacement is zero.'
  },
  {
    id: 'ph-os-48',
    text: 'The energy in SHM oscillates between _____ and _____.',
    options: ['Heat, Light', 'Potential, Kinetic', 'Linear, Angular', 'None'],
    correctAnswer: 'Potential, Kinetic',
    explanation: 'Total energy remains constant.'
  },
  {
    id: 'ph-os-49',
    text: 'In microwave ovens, _____ frequency of water molecules is matched by microwaves.',
    options: ['Rotational', 'Natural vibrational', 'Translational', 'None'],
    correctAnswer: 'Natural vibrational',
    explanation: 'Causes water to heat up via resonance.'
  },
  {
    id: 'ph-os-50',
    text: 'Soldiers are ordered to "break step" while crossing a bridge to avoid:',
    options: ['Slipping', 'Resonance', 'Crowding', 'None'],
    correctAnswer: 'Resonance',
    explanation: 'If their marching frequency matches bridge frequency, amplitude could collapse the bridge.'
  },
  {
    id: 'ph-os-51',
    text: 'The restoring force in mass-spring system is _____ at extreme and _____ at mean.',
    options: ['Max, Zero', 'Zero, Max', 'Constant', 'None'],
    correctAnswer: 'Max, Zero',
    explanation: 'F = -kx.'
  },
  {
    id: 'ph-os-52',
    text: 'For a simple pendulum, the period is independent of amplitude only if the angle θ is _____ (less than 10-15°).',
    options: ['Large', 'Small', 'Zero', 'None'],
    correctAnswer: 'Small',
    explanation: 'Sinθ ≈ θ approximation.'
  },
  {
    id: 'ph-os-53',
    text: 'The SI unit of spring constant k is:',
    options: ['N.m', 'N/m', 'kg/s', 'None'],
    correctAnswer: 'N/m',
    explanation: 'F/x.'
  },
  {
    id: 'ph-os-54',
    text: 'Sharpness of resonance depends on the amount of _____ in the system.',
    options: ['Mass', 'Damping', 'Energy', 'None'],
    correctAnswer: 'Damping',
    explanation: 'Less damping = sharper/higher peak.'
  },
  {
    id: 'ph-os-55',
    text: 'If a mass m is suspended from two springs of constant k in parallel, the effective constant is:',
    options: ['k', '2k', 'k/2', 'None'],
    correctAnswer: '2k',
    explanation: 'Springs support the mass together.'
  },
  {
    id: 'ph-os-56',
    text: 'If a mass m is suspended from two springs of constant k in series, the effective constant is:',
    options: ['k', '2k', 'k/2', 'None'],
    correctAnswer: 'k/2',
    explanation: 'System becomes more flexible.'
  },
  {
    id: 'ph-os-57',
    text: 'Frequency of a simple pendulum is f =:',
    options: ['1/(2π) √(g/L)', '2π √(L/g)', '√(gL)', 'None'],
    correctAnswer: '1/(2π) √(g/L)',
    explanation: 'Inverse of T.'
  },
  {
    id: 'ph-os-58',
    text: 'At what displacement from mean position is P.E equal to K.E in SHM?',
    options: ['x = x0', 'x = x0 / √2', 'x = x0 / 2', 'None'],
    correctAnswer: 'x = x0 / √2',
    explanation: '1/2 kx^2 = 1/2 k(x0^2 - x^2) -> 2x^2 = x0^2 -> x = x0/√2.'
  },
  {
    id: 'ph-os-59',
    text: 'The total energy of a mass-spring system is 1/2 k x0^2. At x = x0/2, its K.E is:',
    options: ['1/4 of total', '1/2 of total', '3/4 of total', 'None'],
    correctAnswer: '3/4 of total',
    explanation: 'P.E = 1/2 k (x0/2)^2 = 1/4 (1/2 kx0^2). K.E = Total - P.E = 3/4 Total.'
  },
  {
    id: 'ph-os-60',
    text: 'Simple pendulum motion is SHM because its acceleration is proportional to _____ for small angles.',
    options: ['sinθ', 'θ', 'tanθ', 'None'],
    correctAnswer: 'θ',
    explanation: 'a = -g sinθ; for small θ, sinθ ≈ θ.'
  },
  {
    id: 'ph-os-61',
    text: 'The angle between velocity and acceleration in SHM at the extreme position is:',
    options: ['0', '90 degrees', '180 degrees', 'Undefined'],
    correctAnswer: 'Undefined',
    explanation: 'Velocity is zero at extreme positions.'
  },
  {
    id: 'ph-os-62',
    text: 'The angle between velocity and acceleration in SHM as it passes mean position is:',
    options: ['0', '90 degrees', '180 degrees', 'Undefined'],
    correctAnswer: 'Undefined',
    explanation: 'Acceleration is zero at mean position.'
  },
  {
    id: 'ph-os-63',
    text: 'Displacement in SHM can be written as x = x0 sin(ωt). If the motion starts from extreme, it is x =:',
    options: ['x0 cos(ωt)', 'x0 tan(ωt)', '-x0 sin(ωt)', 'None'],
    correctAnswer: 'x0 cos(ωt)',
    explanation: 'Phase shift of π/2.'
  },
  {
    id: 'ph-os-64',
    text: 'If the period of SHM is 4s, the time taken to move from mean to extreme is:',
    options: ['4s', '2s', '1s', 'None'],
    correctAnswer: '1s',
    explanation: 'T/4 = 4/4 = 1s.'
  },
  {
    id: 'ph-os-65',
    text: 'A bridge may collapse if the frequency of wind matches its _____ frequency.',
    options: ['Average', 'Natural', 'Maximum', 'None'],
    correctAnswer: 'Natural',
    explanation: 'Tacomma Narrows Bridge disaster.'
  },
  {
    id: 'ph-os-66',
    text: 'Which is NOT an example of SHM?',
    options: ['Simple pendulum', 'Mass-spring system', 'Motion of planet around Sun', 'Vibration of tuning fork'],
    correctAnswer: 'Motion of planet around Sun',
    explanation: 'It is periodic but not SHM (acceleration not directed to mean point in a line).'
  },
  {
    id: 'ph-os-67',
    text: 'The phase difference between velocity and displacement in SHM is:',
    options: ['0', 'π/2 (90°)', 'π (180°)', 'None'],
    correctAnswer: 'π/2 (90°)',
    explanation: 'Velocity leads displacement by 90°.'
  },
  {
    id: 'ph-os-68',
    text: 'The phase difference between acceleration and displacement in SHM is:',
    options: ['0', 'π/2', 'π (180°)', 'None'],
    correctAnswer: 'π (180°)',
    explanation: 'Acceleration is opposite to displacement.'
  },
  {
    id: 'ph-os-69',
    text: 'The phase difference between acceleration and velocity in SHM is:',
    options: ['0', 'π/2 (90°)', 'π', 'None'],
    correctAnswer: 'π/2 (90°)',
    explanation: 'Acceleration leads velocity by 90°.'
  },
  {
    id: 'ph-os-70',
    text: 'In damped oscillations, the _____ remains constant but _____ decreases.',
    options: ['Amplitude, Frequency', 'Frequency, Amplitude', 'Both change', 'None'],
    correctAnswer: 'Frequency, Amplitude',
    explanation: 'Idealized damped system; frequency is roughly natural.'
  },
  {
    id: 'ph-os-71',
    text: 'The damping force is usually proportional to _____ of the body.',
    options: ['Displacement', 'Velocity', 'Acceleration', 'None'],
    correctAnswer: 'Velocity',
    explanation: 'F_damping = -bv.'
  },
  {
    id: 'ph-os-72',
    text: 'The "Q-factor" (Quality factor) measures the _____ of resonance.',
    options: ['Strength', 'Sharpness', 'Duration', 'None'],
    correctAnswer: 'Sharpness',
    explanation: 'Inversely proportional to damping.'
  },
  {
    id: 'ph-os-73',
    text: 'At resonance, the phase difference between external force and displacement is:',
    options: ['0', 'π/2 (90°)', 'π', 'None'],
    correctAnswer: 'π/2 (90°)',
    explanation: 'Force is in phase with velocity.'
  },
  {
    id: 'ph-os-74',
    text: 'A tuning fork marked 256 Hz vibrates _____ times in 2 seconds.',
    options: ['128', '256', '512', 'None'],
    correctAnswer: '512',
    explanation: '256 cycles/s * 2s = 512.'
  },
  {
    id: 'ph-os-75',
    text: 'The period of a simple pendulum on a freely falling lift is:',
    options: ['Zero', 'Infinity', 'Same', 'None'],
    correctAnswer: 'Infinity',
    explanation: 'Effective g = 0. T = 2π √(L/0) -> ∞. Pendulum won\'t swing.'
  },
  {
    id: 'ph-os-76',
    text: 'Which quantity stays constant in an undamped SHM?',
    options: ['Velocity', 'Acceleration', 'Total Energy', 'None'],
    correctAnswer: 'Total Energy',
    explanation: 'Law of conservation of energy.'
  },
  {
    id: 'ph-os-77',
    text: 'In the formula x = x0 sin(ωt + φ), φ is the:',
    options: ['Initial phase / Phase constant', 'Final phase', 'Angular velocity', 'None'],
    correctAnswer: 'Initial phase / Phase constant',
    explanation: 'Determines the position at t = 0.'
  },
  {
    id: 'ph-os-78',
    text: 'The graph between K.E and displacement in SHM is a:',
    options: ['Straight line', 'Circle', 'Inverted parabola', 'None'],
    correctAnswer: 'Inverted parabola',
    explanation: 'K.E = 1/2 k(x0^2 - x^2).'
  },
  {
    id: 'ph-os-79',
    text: 'The graph between P.E and displacement in SHM is a:',
    options: ['Straight line', 'Circle', 'Parabola', 'None'],
    correctAnswer: 'Parabola',
    explanation: 'P.E = 1/2 kx^2.'
  },
  {
    id: 'ph-os-80',
    text: 'Maximum K.E = Maximum P.E = _____ in SHM.',
    options: ['1/2 kx0^2', '1/2 mv0^2', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Interchangeable max values.'
  },
  {
    id: 'ph-os-81',
    text: 'The restoring force in a spring is an example of _____ force.',
    options: ['Constant', 'Variable', 'External', 'None'],
    correctAnswer: 'Variable',
    explanation: 'Depends on displacement x.'
  },
  {
    id: 'ph-os-82',
    text: 'When a spring is cut into two equal halves, the spring constant k of each half is:',
    options: ['k', 'k/2', '2k', 'None'],
    correctAnswer: '2k',
    explanation: 'Shorter spring is stiffer.'
  },
  {
    id: 'ph-os-83',
    text: 'If a pendulum is taken to the center of Earth, its time period will be:',
    options: ['Zero', 'Infinite', 'Same', 'None'],
    correctAnswer: 'Infinite',
    explanation: 'g = 0 at the center.'
  },
  {
    id: 'ph-os-84',
    text: 'If the length of a simple pendulum is doubled and mass is halved, the time period:',
    options: ['Remains same', 'Becomes √2 times', 'Becomes 2 times', 'None'],
    correctAnswer: 'Becomes √2 times',
    explanation: 'T only depends on length; mass has no effect.'
  },
  {
    id: 'ph-os-85',
    text: 'The angular velocity of a particle in SHM is _____ proportional to its time period.',
    options: ['Directly', 'Inversely', 'Not', 'None'],
    correctAnswer: 'Inversely',
    explanation: 'ω = 2π / T.'
  },
  {
    id: 'ph-os-86',
    text: 'A ball is dropped into a hole through the center of Earth. It will perform:',
    options: ['Linear motion to center', 'SHM between poles', 'Rotational motion', 'None'],
    correctAnswer: 'SHM between poles',
    explanation: 'Restoring force is gravity (g ∝ r inside Earth).'
  },
  {
    id: 'ph-os-87',
    text: 'Work done by the restoring force in a full cycle of SHM is:',
    options: ['Positive', 'Negative', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Force is conservative.'
  },
  {
    id: 'ph-os-88',
    text: 'What is the amplitude of a seconds pendulum?',
    options: ['1m', '9.8m', 'Variable', 'None'],
    correctAnswer: 'Variable',
    explanation: 'Amplitude depends on the initial push, not frequency/T.'
  },
  {
    id: 'ph-os-89',
    text: 'Energy of a pendulum is lost mainly due to:',
    options: ['Internal friction', 'Air resistance / Friction at support', 'Gravity', 'None'],
    correctAnswer: 'Air resistance / Friction at support',
    explanation: 'External damping factors.'
  },
  {
    id: 'ph-os-90',
    text: 'Which is a "Natural" frequency of a system?',
    options: ['Frequency of external force', 'Frequency at which it vibrates on its own', '256 Hz always', 'None'],
    correctAnswer: 'Frequency at which it vibrates on its own',
    explanation: 'Depends on system parameters (m, k, L, g).'
  },
  {
    id: 'ph-os-91',
    text: 'In Barton\'s pendulums experiment, the pendulum of _____ length as driver resonates.',
    options: ['Greater', 'Smaller', 'Equal', 'None'],
    correctAnswer: 'Equal',
    explanation: 'Because natural frequency depends on length.'
  },
  {
    id: 'ph-os-92',
    text: 'Loudness of sound increases during resonance due to increase in:',
    options: ['Speed', 'Amplitude', 'Pitch', 'None'],
    correctAnswer: 'Amplitude',
    explanation: 'More energy in the wave.'
  },
  {
    id: 'ph-os-93',
    text: 'Resonance can be _____ or _____ depending on the situation.',
    options: ['Fast, Slow', 'Useful, Harmful', 'Hot, Cold', 'None'],
    correctAnswer: 'Useful, Harmful',
    explanation: 'Useful in radio; harmful in bridges/machinery.'
  },
  {
    id: 'ph-os-94',
    text: 'Cooking in microwave oven is an application of _____ resonance.',
    options: ['Acoustic', 'Electrical', 'Molecular', 'None'],
    correctAnswer: 'Molecular',
    explanation: 'Water molecules resonate.'
  },
  {
    id: 'ph-os-95',
    text: 'In SHM, the maximum acceleration is at the extreme positions. What is the direction?',
    options: ['Towards mean', 'Away from mean', 'Tangent', 'None'],
    correctAnswer: 'Towards mean',
    explanation: 'By definition of restoring force.'
  },
  {
    id: 'ph-os-96',
    text: 'SHM is a _____ dimension motion.',
    options: ['One', 'Two', 'Three', 'None'],
    correctAnswer: 'One',
    explanation: 'Motion along a straight line.'
  },
  {
    id: 'ph-os-97',
    text: 'The frequency of a simple pendulum of infinite length is:',
    options: ['Infinity', 'Zero', '1 / (2π√(R/g))', 'None'],
    correctAnswer: '1 / (2π√(R/g))',
    explanation: 'Limited by Earth\'s radius; T ≈ 84 min.'
  },
  {
    id: 'ph-os-98',
    text: 'If gravity becomes zero, the frequency of a pendulum becomes:',
    options: ['Infinity', 'Zero', 'Maximum', 'None'],
    correctAnswer: 'Zero',
    explanation: 'T = ∞, so f = 0. No oscillations.'
  },
  {
    id: 'ph-os-99',
    text: 'If k is spring constant, then k/m is equal to:',
    options: ['ω', 'ω^2', 'T', 'None'],
    correctAnswer: 'ω^2',
    explanation: 'k = mω^2.'
  },
  {
    id: 'ph-os-100',
    text: 'The phase difference between two points on a wave separated by distance λ is:',
    options: ['π', '2π', 'π/2', 'None'],
    correctAnswer: '2π',
    explanation: 'One full wavelength = 360° phase shift.'
  }
];
