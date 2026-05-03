import { Question } from '../types';

export const PHYSICS_WORK_ENERGY_QUIZ: Question[] = [
  {
    id: 'phy-we-1',
    text: 'Work is defined as the dot product of _____ and _____.',
    options: ['Mass, Acceleration', 'Force, Displacement', 'Force, Velocity', 'Mass, Velocity'],
    correctAnswer: 'Force, Displacement',
    explanation: 'W = F.d = Fd cos θ.'
  },
  {
    id: 'phy-we-2',
    text: 'The SI unit of work is:',
    options: ['Watt', 'Newton', 'Joule (J)', 'Pascal'],
    correctAnswer: 'Joule (J)',
    explanation: '1 J = 1 N.m.'
  },
  {
    id: 'phy-we-3',
    text: 'Work done is maximum when the angle between force and displacement is:',
    options: ['0°', '45°', '90°', '180°'],
    correctAnswer: '0°',
    explanation: 'cos 0° = 1.'
  },
  {
    id: 'phy-we-4',
    text: 'Work done is zero when the angle between force and displacement is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '90°',
    explanation: 'cos 90° = 0.'
  },
  {
    id: 'phy-we-5',
    text: 'Work done is negative when the angle between force and displacement is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '180°',
    explanation: 'cos 180° = -1.'
  },
  {
    id: 'phy-we-6',
    text: 'The area under a Force-Displacement graph represents:',
    options: ['Power', 'Work done', 'Acceleration', 'Momentum'],
    correctAnswer: 'Work done',
    explanation: 'Area = Force * Displacement.'
  },
  {
    id: 'phy-we-7',
    text: 'Kinetic energy is the energy possessed by a body due to its:',
    options: ['Position', 'Motion', 'Configuration', 'Temperature'],
    correctAnswer: 'Motion',
    explanation: 'K.E. = 1/2 mv².'
  },
  {
    id: 'phy-we-8',
    text: 'Potential energy is the energy possessed by a body due to its:',
    options: ['Motion', 'Position or configuration', 'Velocity', 'Acceleration'],
    correctAnswer: 'Position or configuration',
    explanation: 'Includes gravitational and elastic potential energy.'
  },
  {
    id: 'phy-we-9',
    text: 'Gravitational Potential Energy (GPE) is given by:',
    options: ['1/2 mv²', 'mgh', '1/2 kx²', 'F.d'],
    correctAnswer: 'mgh',
    explanation: 'Depends on mass, gravity, and height.'
  },
  {
    id: 'phy-we-10',
    text: 'The work-energy theorem states that work done on a body is equal to its change in:',
    options: ['Potential energy', 'Kinetic energy', 'Momentum', 'Power'],
    correctAnswer: 'Kinetic energy',
    explanation: 'W_net = ΔK.E.'
  },
  {
    id: 'phy-we-11',
    text: 'Power is the rate of:',
    options: ['Doing work', 'Changing momentum', 'Increasing force', 'Applying pressure'],
    correctAnswer: 'Doing work',
    explanation: 'P = W / t.'
  },
  {
    id: 'phy-we-12',
    text: 'The SI unit of power is:',
    options: ['Joule', 'Watt (W)', 'Newton', 'Horsepower'],
    correctAnswer: 'Watt (W)',
    explanation: '1 W = 1 J/s.'
  },
  {
    id: 'phy-we-13',
    text: 'One kilowatt-hour (kWh) is a unit of:',
    options: ['Power', 'Energy', 'Time', 'Force'],
    correctAnswer: 'Energy',
    explanation: 'Used for electrical energy consumption.'
  },
  {
    id: 'phy-we-14',
    text: 'How many Joules are in 1 kWh?',
    options: ['1000 J', '3.6 x 10⁶ J', '3600 J', '1 J'],
    correctAnswer: '3.6 x 10⁶ J',
    explanation: '1000 W * 3600 s = 3,600,000 J.'
  },
  {
    id: 'phy-we-15',
    text: 'The Law of Conservation of Energy states that energy can neither be _____ nor _____.',
    options: ['Created, Destroyed', 'Transformed, Used', 'Measured, Seen', 'Changed, Moved'],
    correctAnswer: 'Created, Destroyed',
    explanation: 'Total energy of an isolated system remains constant.'
  },
  {
    id: 'phy-we-16',
    text: 'A conservative force is one where work done depends only on:',
    options: ['Path followed', 'Initial and final positions', 'Time taken', 'Velocity'],
    correctAnswer: 'Initial and final positions',
    explanation: 'Example: Gravity, Spring force.'
  },
  {
    id: 'phy-we-17',
    text: 'Which of the following is a non-conservative force?',
    options: ['Gravitational force', 'Elastic spring force', 'Friction', 'Electric force'],
    correctAnswer: 'Friction',
    explanation: 'Work done depends on the path taken.'
  },
  {
    id: 'phy-we-18',
    text: 'Elastic Potential Energy of a stretched spring is:',
    options: ['mgh', '1/2 kx²', 'Fd', '1/2 mv²'],
    correctAnswer: '1/2 kx²',
    explanation: 'k is the spring constant and x is the displacement.'
  },
  {
    id: 'phy-we-19',
    text: 'Efficiency is the ratio of _____ to _____.',
    options: ['Output work, Input energy', 'Input, Output', 'Power, Work', 'Force, Area'],
    correctAnswer: 'Output work, Input energy',
    explanation: 'Often expressed as a percentage.'
  },
  {
    id: 'phy-we-20',
    text: 'No machine can be 100% efficient due to loss of energy as:',
    options: ['Mass', 'Heat and Sound', 'Light', 'Electricity'],
    correctAnswer: 'Heat and Sound',
    explanation: 'Usually caused by friction.'
  },
  {
    id: 'phy-we-21',
    text: 'If a body of mass 2 kg is raised to a height of 5 m, its GPE is (g=10):',
    options: ['10 J', '100 J', '25 J', '50 J'],
    correctAnswer: '100 J',
    explanation: '2 * 10 * 5 = 100.'
  },
  {
    id: 'phy-we-22',
    text: 'A body of 10 kg moves at 4 m/s. Its K.E. is:',
    options: ['40 J', '80 J', '160 J', '20 J'],
    correctAnswer: '80 J',
    explanation: '1/2 * 10 * 4² = 5 * 16 = 80.'
  },
  {
    id: 'phy-we-23',
    text: 'If the speed of a car is tripled, its K.E. becomes:',
    options: ['3 times', '6 times', '9 times', 'Stay same'],
    correctAnswer: '9 times',
    explanation: 'K.E. ∝ v².'
  },
  {
    id: 'phy-we-24',
    text: 'Escape velocity is the minimum velocity needed to leave the _____ of a planet.',
    options: ['Surface', 'Atmosphere', 'Gravitational field', 'Orbit'],
    correctAnswer: 'Gravitational field',
    explanation: 'For Earth, it is ~11.2 km/s.'
  },
  {
    id: 'phy-we-25',
    text: 'Power can also be expressed as the dot product of _____ and _____.',
    options: ['Force, Velocity', 'Force, Acceleration', 'Mass, Velocity', 'Work, Distance'],
    correctAnswer: 'Force, Velocity',
    explanation: 'P = W / t = (F.d) / t = F.v.'
  },
  {
    id: 'phy-we-26',
    text: 'A weightlifter holds a 100 kg barbell above his head for 10 seconds. Work done is:',
    options: ['1000 J', '9800 J', 'Zero', '100 J'],
    correctAnswer: 'Zero',
    explanation: 'There is no displacement while holding it.'
  },
  {
    id: 'phy-we-27',
    text: 'Renewable sources of energy include:',
    options: ['Coal', 'Solar and Wind', 'Natural gas', 'Nuclear fission'],
    correctAnswer: 'Solar and Wind',
    explanation: 'They are replenished naturally.'
  },
  {
    id: 'phy-we-28',
    text: 'Non-renewable sources of energy include:',
    options: ['Hydroelectric', 'Fossil fuels (Coal, Oil)', 'Geothermal', 'Biomass'],
    correctAnswer: 'Fossil fuels (Coal, Oil)',
    explanation: 'They take millions of years to form.'
  },
  {
    id: 'phy-we-29',
    text: 'Solar cells convert light energy directly into:',
    options: ['Heat', 'Electricity', 'Chemical energy', 'Sound'],
    correctAnswer: 'Electricity',
    explanation: 'Using the photovoltaic effect.'
  },
  {
    id: 'phy-we-30',
    text: 'Geothermal energy is obtained from:',
    options: ['Sun', 'Wind', 'Internal heat of the Earth', 'Tides'],
    correctAnswer: 'Internal heat of the Earth',
    explanation: 'Hot springs and volcanoes are examples.'
  },
  {
    id: 'phy-we-31',
    text: 'Dimension of Work is:',
    options: ['[MLT⁻²]', '[ML²T⁻²]', '[ML²T⁻¹]', '[MLT⁻¹]'],
    correctAnswer: '[ML²T⁻²]',
    explanation: 'Force [MLT⁻²] * Length [L].'
  },
  {
    id: 'phy-we-32',
    text: 'Dimension of Power is:',
    options: ['[ML²T⁻²]', '[ML²T⁻³]', '[MLT⁻³]', '[M²LT⁻²]'],
    correctAnswer: '[ML²T⁻³]',
    explanation: 'Work [ML²T⁻²] / Time [T].'
  },
  {
    id: 'phy-we-33',
    text: 'A girl of mass 40 kg climbs a ladder 3 m high in 10 s. Her power is (g=10):',
    options: ['12 W', '120 W', '1200 W', '400 W'],
    correctAnswer: '120 W',
    explanation: 'Work = 40 * 10 * 3 = 1200 J; Power = 1200 / 10 = 120 W.'
  },
  {
    id: 'phy-we-34',
    text: 'Spring constant "k" has units of:',
    options: ['N.m', 'N/m', 'J/m', 'kg/s'],
    correctAnswer: 'N/m',
    explanation: 'From Hooke\'s Law: F = kx.'
  },
  {
    id: 'phy-we-35',
    text: 'Total energy of a falling body (ignoring friction) at any point is:',
    options: ['Maximum at top', 'Maximum at bottom', 'Constant', 'Zero'],
    correctAnswer: 'Constant',
    explanation: 'Sum of K.E. and P.E. remains the same.'
  },
  {
    id: 'phy-we-36',
    text: 'When a body falls, its P.E. _____ and K.E. _____.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Stays same, Stays same', 'Increases, Increases'],
    correctAnswer: 'Decreases, Increases',
    explanation: 'Height decreases, speed increases.'
  },
  {
    id: 'phy-we-37',
    text: 'Biomass energy is derived from:',
    options: ['Uranium', 'Organic matter (plants/waste)', 'Tides', 'Fossil fuels'],
    correctAnswer: 'Organic matter (plants/waste)',
    explanation: 'Wood, crops, and manure.'
  },
  {
    id: 'phy-we-38',
    text: 'Tidal energy is produced by the gravitational pull of the:',
    options: ['Sun', 'Moon', 'Earth', 'Mars'],
    correctAnswer: 'Moon',
    explanation: 'Causes rise and fall of sea levels.'
  },
  {
    id: 'phy-we-39',
    text: 'Nuclear energy is released during:',
    options: ['Fission', 'Fusion', 'Both A and B', 'Combustion'],
    correctAnswer: 'Both A and B',
    explanation: 'Changes in the nucleus of atoms.'
  },
  {
    id: 'phy-we-40',
    text: 'Work done by friction is usually:',
    options: ['Positive', 'Negative', 'Zero', 'Always 100 J'],
    correctAnswer: 'Negative',
    explanation: 'Force and displacement are in opposite directions.'
  },
  {
    id: 'phy-we-41',
    text: 'If a 10 N force moves a body 5 m at an angle of 60°, work done is:',
    options: ['50 J', '25 J', '43.3 J', '0 J'],
    correctAnswer: '25 J',
    explanation: '10 * 5 * cos 60° = 50 * 0.5 = 25.'
  },
  {
    id: 'phy-we-42',
    text: 'Kinetic energy of a body of mass "m" and momentum "P" is:',
    options: ['P²/2m', 'P/m', 'Pm/2', 'P²m'],
    correctAnswer: 'P²/2m',
    explanation: 'Substituting v = P/m into 1/2 mv².'
  },
  {
    id: 'phy-we-43',
    text: 'Potential energy stored in a compressed spring is _____ than in a stretched one (same x).',
    options: ['More', 'Less', 'Same', 'Zero'],
    correctAnswer: 'Same',
    explanation: '1/2 kx²; squaring x makes it positive regardless of direction.'
  },
  {
    id: 'phy-we-44',
    text: 'Energy from the sun is due to nuclear:',
    options: ['Fission', 'Fusion', 'Decay', 'Combustion'],
    correctAnswer: 'Fusion',
    explanation: 'Hydrogen atoms fuse to form Helium.'
  },
  {
    id: 'phy-we-45',
    text: 'Which is a unit of Energy?',
    options: ['Electron Volt (eV)', 'Erg', 'Calorie', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Different systems of units.'
  },
  {
    id: 'phy-we-46',
    text: '1 Joule is equal to _____ ergs.',
    options: ['10³', '10⁵', '10⁷', '10⁻⁷'],
    correctAnswer: '10⁷',
    explanation: 'CGS unit of energy.'
  },
  {
    id: 'phy-we-47',
    text: 'A person walking on a horizontal road with a suitcase in hand does _____ work on the suitcase.',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'Force (upward) is perpendicular to displacement (horizontal).'
  },
  {
    id: 'phy-we-48',
    text: 'Work done by a centripetal force is zero because _____ and _____ are perpendicular.',
    options: ['Force, Velocity', 'Mass, Speed', 'Force, Time', 'Acceleration, Mass'],
    correctAnswer: 'Force, Velocity',
    explanation: 'Direction of motion is tangent to the circle.'
  },
  {
    id: 'phy-we-49',
    text: 'An ideal machine has an efficiency of:',
    options: ['0%', '50%', '100%', 'Infinity'],
    correctAnswer: '100%',
    explanation: 'In reality, efficiency is always < 100%.'
  },
  {
    id: 'phy-we-50',
    text: 'Power of a pump which can lift 100 kg water to 10 m in 5 s is (g=10):',
    options: ['2000 W', '200 W', '500 W', '1000 W'],
    correctAnswer: '2000 W',
    explanation: 'Work = 100 * 10 * 10 = 10000 J; Power = 10000 / 5 = 2000 W.'
  },
  {
    id: 'phy-we-51',
    text: 'Elasticity is the property of a body to _____ its original shape.',
    options: ['Change', 'Regain', 'Lose', 'Double'],
    correctAnswer: 'Regain',
    explanation: 'After removal of deforming force.'
  },
  {
    id: 'phy-we-52',
    text: 'Modulus of elasticity is the ratio of _____ to _____.',
    options: ['Strain, Stress', 'Stress, Strain', 'Force, Area', 'Work, Time'],
    correctAnswer: 'Stress, Strain',
    explanation: 'Hooke\'s Law within elastic limit.'
  },
  {
    id: 'phy-we-53',
    text: 'The units of Stress are same as those of:',
    options: ['Force', 'Pressure', 'Strain', 'Work'],
    correctAnswer: 'Pressure',
    explanation: 'Force per unit area (N/m²).'
  },
  {
    id: 'phy-we-54',
    text: 'Strain is a _____ quantity.',
    options: ['Vector', 'Scalar', 'Dimensionless', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Ratio of similar quantities (e.g. ΔL/L).'
  },
  {
    id: 'phy-we-55',
    text: 'Potential energy of a body on Earth\'s surface is _____ by convention.',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'Often used as reference point.'
  },
  {
    id: 'phy-we-56',
    text: 'Absolute Gravitational Potential Energy is always _____ relative to infinity.',
    options: ['Positive', 'Negative', 'Zero', 'Constant'],
    correctAnswer: 'Negative',
    explanation: 'Work must be done to move an object to infinity.'
  },
  {
    id: 'phy-we-57',
    text: 'Work done in moving a body around a closed path in a conservative field is:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctAnswer: 'Zero',
    explanation: 'Net displacement is zero.'
  },
  {
    id: 'phy-we-58',
    text: 'The maximum power an average human can exert for a short burst is about:',
    options: ['1 W', '10 W', '100 W', '1000 W'],
    correctAnswer: '1000 W',
    explanation: 'Roughly 1 horsepower.'
  },
  {
    id: 'phy-we-59',
    text: 'Interconversion of K.E. and P.E. in a simple pendulum is an example of _____ of energy.',
    options: ['Loss', 'Conservation', 'Gain', 'Destruction'],
    correctAnswer: 'Conservation',
    explanation: 'Energy alternates between the two forms.'
  },
  {
    id: 'phy-we-60',
    text: 'Work done by gravity on a satellite in a circular orbit is:',
    options: ['Positive', 'Negative', 'Zero', 'Variable'],
    correctAnswer: 'Zero',
    explanation: 'Force is perpendicular to motion.'
  },
  {
    id: 'phy-we-61',
    text: 'If K.E. is increased by 300%, momentum increases by:',
    options: ['100%', '200%', '300%', '50%'],
    correctAnswer: '100%',
    explanation: 'K2 = 4K1 -> P2 = 2P1; Increase = (2-1)*100 = 100%.'
  },
  {
    id: 'phy-we-62',
    text: 'A bullet is fired into a wooden block. Its K.E. is converted into:',
    options: ['Heat energy', 'Sound energy', 'Potential energy', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Inelastic process.'
  },
  {
    id: 'phy-we-63',
    text: 'Work done is a _____ quantity.',
    options: ['Vector', 'Scalar', 'Dimensionless', 'Tensor'],
    correctAnswer: 'Scalar',
    explanation: 'Dot product of two vectors is a scalar.'
  },
  {
    id: 'phy-we-64',
    text: 'Which is a better way to store energy?',
    options: ['Batteries', 'Flywheels', 'Capacitors', 'All have different uses'],
    correctAnswer: 'All have different uses',
    explanation: 'Based on energy density and discharge rate.'
  },
  {
    id: 'phy-we-65',
    text: 'One Electron Volt (eV) is equal to:',
    options: ['1.6 x 10⁻¹⁹ J', '9.1 x 10⁻³¹ J', '1 J', '3.6 x 10⁶ J'],
    correctAnswer: '1.6 x 10⁻¹⁹ J',
    explanation: 'Energy gained by an electron moving through 1 Volt.'
  },
  {
    id: 'phy-we-66',
    text: 'What happens to the total mechanical energy of a system if non-conservative forces do work?',
    options: ['Increases', 'Decreases', 'Stay same', 'Fluctuates'],
    correctAnswer: 'Decreases',
    explanation: 'Mechanical energy is converted to heat/sound.'
  },
  {
    id: 'phy-we-67',
    text: 'Potential energy of a spring increases as it is _____ or _____.',
    options: ['Stretched, Compressed', 'Moved, Rotated', 'Heated, Cooled', 'None'],
    correctAnswer: 'Stretched, Compressed',
    explanation: 'Work is done against the restoring force.'
  },
  {
    id: 'phy-we-68',
    text: 'Force of attraction between two masses is:',
    options: ['Contact force', 'Conservative force', 'Variable force', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Gravity follows inverse square law and is path-independent.'
  },
  {
    id: 'phy-we-69',
    text: 'Solar energy reaching Earth is approximately _____ kW/m².',
    options: ['1.4', '14', '0.14', '140'],
    correctAnswer: '1.4',
    explanation: 'Called the Solar Constant.'
  },
  {
    id: 'phy-we-70',
    text: 'Wind energy depends on the _____ of the wind speed.',
    options: ['Square', 'Cube', 'Square root', 'Logarithm'],
    correctAnswer: 'Cube',
    explanation: 'Power ∝ v³.'
  },
  {
    id: 'phy-we-71',
    text: 'What is the work done in pulling a 10 kg box for 10 m with 20 N force at 0°?',
    options: ['100 J', '200 J', '50 J', '2000 J'],
    correctAnswer: '200 J',
    explanation: '20 * 10 = 200.'
  },
  {
    id: 'phy-we-72',
    text: 'A 60 kg man runs up 10 m stairs in 12 s. Power is (g=10):',
    options: ['500 W', '600 W', '50 W', '720 W'],
    correctAnswer: '500 W',
    explanation: 'Work = 60 * 10 * 10 = 6000 J; Power = 6000 / 12 = 500 W.'
  },
  {
    id: 'phy-we-73',
    text: 'Kinetic energy of a body is _____ negative.',
    options: ['Always', 'Never', 'Sometimes', 'Only if v < 0'],
    correctAnswer: 'Never',
    explanation: 'Mass is positive and v² is always positive.'
  },
  {
    id: 'phy-we-74',
    text: 'If a body is moving at constant velocity, net work done on it is:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'ΔK.E. = 0.'
  },
  {
    id: 'phy-we-75',
    text: 'Spring constant of a stiff spring is _____ than a soft spring.',
    options: ['Greater', 'Smaller', 'Equal', 'Zero'],
    correctAnswer: 'Greater',
    explanation: 'Requires more force for same displacement.'
  },
  {
    id: 'phy-we-76',
    text: 'Elasticity is a property of:',
    options: ['Solids only', 'Liquids only', 'Gases only', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Gases have bulk modulus.'
  },
  {
    id: 'phy-we-77',
    text: 'Poisson\'s ratio is the ratio of _____ strain to _____ strain.',
    options: ['Lateral, Longitudinal', 'Longitudinal, Lateral', 'Shear, Tensile', 'None'],
    correctAnswer: 'Lateral, Longitudinal',
    explanation: 'Measures the thinning of a wire as it stretches.'
  },
  {
    id: 'phy-we-78',
    text: 'Breaking stress depends on:',
    options: ['Area of cross section', 'Nature of material', 'Length', 'Mass'],
    correctAnswer: 'Nature of material',
    explanation: 'It is a property of the material.'
  },
  {
    id: 'phy-we-79',
    text: 'Work done by buoyant force on a submerged object rising up is:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctAnswer: 'Positive',
    explanation: 'Force and displacement are in same direction.'
  },
  {
    id: 'phy-we-80',
    text: 'Escape velocity from Moon is _____ than from Earth.',
    options: ['More', 'Less', 'Same', 'Zero'],
    correctAnswer: 'Less',
    explanation: 'Moon has smaller mass and radius.'
  },
  {
    id: 'phy-we-81',
    text: 'Weight of a body at infinite distance from Earth is:',
    options: ['9.8 N', 'Zero', 'Infinity', 'Positive'],
    correctAnswer: 'Zero',
    explanation: 'Gravity follows inverse square law.'
  },
  {
    id: 'phy-we-82',
    text: 'Unit of Energy in CGS system is:',
    options: ['Joule', 'Erg', 'Calorie', 'Watt'],
    correctAnswer: 'Erg',
    explanation: '1 erg = 1 dyne.cm.'
  },
  {
    id: 'phy-we-83',
    text: '1 Calorie is equal to how many Joules?',
    options: ['1 J', '4.184 J', '1000 J', '3.6 J'],
    correctAnswer: '4.184 J',
    explanation: 'Conversion factor between thermal and mechanical energy.'
  },
  {
    id: 'phy-we-84',
    text: 'Power is a _____ quantity.',
    options: ['Vector', 'Scalar', 'Tensor', 'None'],
    correctAnswer: 'Scalar',
    explanation: 'Ratio of two scalars (Work and Time).'
  },
  {
    id: 'phy-we-85',
    text: 'The slope of a Work-Time graph represents:',
    options: ['Power', 'Force', 'Acceleration', 'Velocity'],
    correctAnswer: 'Power',
    explanation: 'P = dW / dt.'
  },
  {
    id: 'phy-we-86',
    text: 'Potential energy of a dipole in an electric field is _____ when parallel to the field.',
    options: ['Maximum', 'Minimum', 'Zero', 'Infinite'],
    correctAnswer: 'Minimum',
    explanation: 'Stable equilibrium.'
  },
  {
    id: 'phy-we-87',
    text: 'Work done in stretching a wire is stored as:',
    options: ['K.E.', 'Thermal energy', 'Elastic Potential Energy', 'Chemical energy'],
    correctAnswer: 'Elastic Potential Energy',
    explanation: 'Within the atomic lattice.'
  },
  {
    id: 'phy-we-88',
    text: 'A force of 5 N is applied to a 2 kg body for 10 s. Work done is:',
    options: ['625 J', '125 J', '500 J', '250 J'],
    correctAnswer: '625 J',
    explanation: 'a = 2.5; d = 1/2 * 2.5 * 100 = 125; W = 5 * 125 = 625.'
  },
  {
    id: 'phy-we-89',
    text: 'Which has more K.E.? 1 kg body at 10 m/s or 2 kg body at 5 m/s?',
    options: ['1 kg body', '2 kg body', 'Both same', 'None'],
    correctAnswer: '1 kg body',
    explanation: 'K1 = 0.5 * 1 * 100 = 50 J; K2 = 0.5 * 2 * 25 = 25 J.'
  },
  {
    id: 'phy-we-90',
    text: 'Conservation of energy is a _____ law of nature.',
    options: ['Approximate', 'Fundamental', 'Optional', 'New'],
    correctAnswer: 'Fundamental',
    explanation: 'Applies across all scales of the universe.'
  },
  {
    id: 'phy-we-91',
    text: 'Hydroelectric energy uses the _____ energy of stored water.',
    options: ['Kinetic', 'Potential', 'Thermal', 'Nuclear'],
    correctAnswer: 'Potential',
    explanation: 'Water in dams has high P.E.'
  },
  {
    id: 'phy-we-92',
    text: 'Photovoltaic effect is the production of _____ from light.',
    options: ['Heat', 'Current/Voltage', 'Sound', 'Magnetism'],
    correctAnswer: 'Current/Voltage',
    explanation: 'Used in solar panels.'
  },
  {
    id: 'phy-we-93',
    text: 'Internal energy of a gas depends on its:',
    options: ['Pressure', 'Volume', 'Temperature', 'Container shape'],
    correctAnswer: 'Temperature',
    explanation: 'For an ideal gas, it is purely kinetic energy.'
  },
  {
    id: 'phy-we-94',
    text: 'A system does 100 J of work and absorbs 200 J of heat. Change in internal energy is:',
    options: ['300 J', '100 J', '0 J', '-100 J'],
    correctAnswer: '100 J',
    explanation: 'ΔU = Q - W = 200 - 100 = 100.'
  },
  {
    id: 'phy-we-95',
    text: 'Work done by an gas during expansion is:',
    options: ['Positive', 'Negative', 'Zero', 'Constant'],
    correctAnswer: 'Positive',
    explanation: 'Force (pressure) and displacement (volume increase) are in same direction.'
  },
  {
    id: 'phy-we-96',
    text: 'What is the power of a heart that pumps 5 L of blood per minute at a pressure of 100 mmHg?',
    options: ['~1 W', '~10 W', '~100 W', '~0.1 W'],
    correctAnswer: '~1 W',
    explanation: 'Calculation involving P * (dV/dt).'
  },
  {
    id: 'phy-we-97',
    text: 'If a stone is dropped from a cliff, when is its K.E. equal to its P.E.?',
    options: ['At top', 'At bottom', 'At half-height', 'Never'],
    correctAnswer: 'At half-height',
    explanation: 'Half the P.E. has converted to K.E.'
  },
  {
    id: 'phy-we-98',
    text: 'Work done in an adiabatic process is at the expense of:',
    options: ['Heat', 'Internal energy', 'Surroundings', 'Gravity'],
    correctAnswer: 'Internal energy',
    explanation: 'No heat enters or leaves the system.'
  },
  {
    id: 'phy-we-99',
    text: 'The area under a P-V graph represents:',
    options: ['Heat', 'Internal energy', 'Work done', 'Entropy'],
    correctAnswer: 'Work done',
    explanation: 'Integration of P dV.'
  },
  {
    id: 'phy-we-100',
    text: 'Total energy of the universe is _____ according to conservation law.',
    options: ['Increasing', 'Decreasing', 'Constant', 'Zero'],
    correctAnswer: 'Constant',
    explanation: 'First Law of Thermodynamics.'
  }
];
