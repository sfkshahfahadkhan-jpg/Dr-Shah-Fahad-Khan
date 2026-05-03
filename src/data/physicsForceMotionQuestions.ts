import { Question } from '../types';

export const PHYSICS_FORCE_MOTION_QUIZ: Question[] = [
  {
    id: 'phy-fm-1',
    text: 'The rate of change of displacement is called:',
    options: ['Speed', 'Velocity', 'Acceleration', 'Force'],
    correctAnswer: 'Velocity',
    explanation: 'v = d / t, where d is displacement.'
  },
  {
    id: 'phy-fm-2',
    text: 'Acceleration is defined as the rate of change of:',
    options: ['Distance', 'Displacement', 'Velocity', 'Momentum'],
    correctAnswer: 'Velocity',
    explanation: 'a = (v_f - v_i) / t.'
  },
  {
    id: 'phy-fm-3',
    text: 'A body moving with constant velocity has _____ acceleration.',
    options: ['Constant', 'Increasing', 'Zero', 'Negative'],
    correctAnswer: 'Zero',
    explanation: 'If velocity doesn\'t change, acceleration is zero.'
  },
  {
    id: 'phy-fm-4',
    text: 'The slope of a displacement-time graph represents:',
    options: ['Acceleration', 'Velocity', 'Distance', 'Force'],
    correctAnswer: 'Velocity',
    explanation: 'Slope = Change in displacement / Change in time.'
  },
  {
    id: 'phy-fm-5',
    text: 'The slope of a velocity-time graph represents:',
    options: ['Displacement', 'Acceleration', 'Momentum', 'Work'],
    correctAnswer: 'Acceleration',
    explanation: 'Slope = Change in velocity / Change in time.'
  },
  {
    id: 'phy-fm-6',
    text: 'The area under a velocity-time graph represents:',
    options: ['Acceleration', 'Distance/Displacement', 'Force', 'Velocity'],
    correctAnswer: 'Distance/Displacement',
    explanation: 'Area = Velocity * Time.'
  },
  {
    id: 'phy-fm-7',
    text: 'Newton\'s First Law of Motion is also known as the Law of:',
    options: ['Gravity', 'Inertia', 'Momentum', 'Action-Reaction'],
    correctAnswer: 'Inertia',
    explanation: 'Objects resist changes in their state of motion.'
  },
  {
    id: 'phy-fm-8',
    text: 'The quantitative measure of inertia is:',
    options: ['Velocity', 'Mass', 'Weight', 'Force'],
    correctAnswer: 'Mass',
    explanation: 'Greater mass means greater inertia.'
  },
  {
    id: 'phy-fm-9',
    text: 'Newton\'s Second Law of Motion is given by:',
    options: ['F = ma', 'F = mv', 'F = m/a', 'F = dP/dt'],
    correctAnswer: 'F = ma',
    explanation: 'Force is proportional to the rate of change of momentum.'
  },
  {
    id: 'phy-fm-10',
    text: 'The SI unit of force is:',
    options: ['Watt', 'Joule', 'Newton (N)', 'Pascal'],
    correctAnswer: 'Newton (N)',
    explanation: '1 N = 1 kg.m/s².'
  },
  {
    id: 'phy-fm-11',
    text: 'One Newton is equal to:',
    options: ['1 kg.m/s', '1 kg.m/s²', '1 g.cm/s²', '1 kg/m.s²'],
    correctAnswer: '1 kg.m/s²',
    explanation: 'From F = ma.'
  },
  {
    id: 'phy-fm-12',
    text: 'Weight is the _____ with which the Earth attracts a body.',
    options: ['Mass', 'Force', 'Acceleration', 'Pressure'],
    correctAnswer: 'Force',
    explanation: 'W = mg.'
  },
  {
    id: 'phy-fm-13',
    text: 'Newton\'s Third Law states that for every action, there is an _____ and _____ reaction.',
    options: ['Equal, Direct', 'Equal, Opposite', 'Unequal, Opposite', 'Small, Fast'],
    correctAnswer: 'Equal, Opposite',
    explanation: 'Forces always occur in pairs.'
  },
  {
    id: 'phy-fm-14',
    text: 'Linear momentum is defined as the product of _____ and _____.',
    options: ['Mass, Acceleration', 'Mass, Velocity', 'Force, Time', 'Weight, Height'],
    correctAnswer: 'Mass, Velocity',
    explanation: 'P = mv.'
  },
  {
    id: 'phy-fm-15',
    text: 'The SI unit of momentum is:',
    options: ['kg.m/s', 'kg.m/s²', 'N.m', 'J/s'],
    correctAnswer: 'kg.m/s',
    explanation: 'Also equivalent to N.s.'
  },
  {
    id: 'phy-fm-16',
    text: 'Impulse is equal to the change in:',
    options: ['Velocity', 'Momentum', 'Acceleration', 'Kinetic energy'],
    correctAnswer: 'Momentum',
    explanation: 'Impulse J = F * Δt = ΔP.'
  },
  {
    id: 'phy-fm-17',
    text: 'The Law of Conservation of Momentum states that the total momentum of an isolated system remains:',
    options: ['Zero', 'Constant', 'Increasing', 'Decreasing'],
    correctAnswer: 'Constant',
    explanation: 'Initial Momentum = Final Momentum.'
  },
  {
    id: 'phy-fm-18',
    text: 'In an elastic collision, which of the following is conserved?',
    options: ['Momentum only', 'Kinetic energy only', 'Both Momentum and Kinetic energy', 'Neither'],
    correctAnswer: 'Both Momentum and Kinetic energy',
    explanation: 'Energy is not lost as heat or sound.'
  },
  {
    id: 'phy-fm-19',
    text: 'In an inelastic collision, which of the following is NOT conserved?',
    options: ['Momentum', 'Kinetic energy', 'Total energy', 'Mass'],
    correctAnswer: 'Kinetic energy',
    explanation: 'Some energy is converted to other forms.'
  },
  {
    id: 'phy-fm-20',
    text: 'A collision where two objects stick together after impact is:',
    options: ['Elastic', 'Perfectly inelastic', 'Partially elastic', 'Explosive'],
    correctAnswer: 'Perfectly inelastic',
    explanation: 'Maximum loss of kinetic energy occurs.'
  },
  {
    id: 'phy-fm-21',
    text: 'Projectile motion is a _____ dimensional motion under gravity.',
    options: ['One', 'Two', 'Three', 'Zero'],
    correctAnswer: 'Two',
    explanation: 'Involves both horizontal and vertical components.'
  },
  {
    id: 'phy-fm-22',
    text: 'The path of a projectile is called its:',
    options: ['Range', 'Trajectory', 'Orbits', 'Parabola'],
    correctAnswer: 'Trajectory',
    explanation: 'It is parabolic in shape (ignoring air resistance).'
  },
  {
    id: 'phy-fm-23',
    text: 'The horizontal component of velocity in a projectile remains _____ throughout the flight.',
    options: ['Zero', 'Constant', 'Increasing', 'Decreasing'],
    correctAnswer: 'Constant',
    explanation: 'Assuming no air resistance (a_x = 0).'
  },
  {
    id: 'phy-fm-24',
    text: 'At the highest point of a projectile\'s flight, its vertical velocity is:',
    options: ['Maximum', 'Zero', 'Equal to horizontal velocity', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'The vertical velocity changes direction at the peak.'
  },
  {
    id: 'phy-fm-25',
    text: 'The maximum horizontal distance covered by a projectile is its:',
    options: ['Height', 'Range', 'Displacement', 'Time of flight'],
    correctAnswer: 'Range',
    explanation: 'R = (v² sin 2θ) / g.'
  },
  {
    id: 'phy-fm-26',
    text: 'For a given initial velocity, the range of a projectile is maximum at an angle of:',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: '45°',
    explanation: 'sin(2 * 45) = sin(90) = 1 (max value).'
  },
  {
    id: 'phy-fm-27',
    text: 'Which angle of projection will give the same range as 30°?',
    options: ['45°', '60°', '75°', '15°'],
    correctAnswer: '60°',
    explanation: 'Ranges are same for complementary angles (θ and 90-θ).'
  },
  {
    id: 'phy-fm-28',
    text: 'The force of friction always acts _____ to the direction of motion.',
    options: ['Parallel', 'Opposite', 'Perpendicular', 'At 45°'],
    correctAnswer: 'Opposite',
    explanation: 'Friction opposes relative motion.'
  },
  {
    id: 'phy-fm-29',
    text: 'Static friction is generally _____ than kinetic friction.',
    options: ['Less', 'Greater', 'Equal', 'Zero'],
    correctAnswer: 'Greater',
    explanation: 'It takes more force to start an object moving than to keep it moving.'
  },
  {
    id: 'phy-fm-30',
    text: 'The coefficient of friction depends on the:',
    options: ['Area of contact', 'Nature of surfaces', 'Velocity', 'Weight only'],
    correctAnswer: 'Nature of surfaces',
    explanation: 'It is a property of the materials in contact.'
  },
  {
    id: 'phy-fm-31',
    text: 'Stokes\' Law describes the viscous force on a _____ moving through a fluid.',
    options: ['Cube', 'Sphere', 'Cylinder', 'Plate'],
    correctAnswer: 'Sphere',
    explanation: 'F = 6πηrv.'
  },
  {
    id: 'phy-fm-32',
    text: 'Terminal velocity is reached when the weight of a falling body is balanced by _____ and _____.',
    options: ['Buoyant force, Viscous drag', 'Inertia, Friction', 'Air pressure, Mass', 'None'],
    correctAnswer: 'Buoyant force, Viscous drag',
    explanation: 'Net force becomes zero, so acceleration becomes zero.'
  },
  {
    id: 'phy-fm-33',
    text: 'The acceleration of a body falling freely in vacuum is:',
    options: ['9.8 m/s²', 'Variable', 'Zero', 'Depends on mass'],
    correctAnswer: '9.8 m/s²',
    explanation: 'Near Earth\'s surface (g).'
  },
  {
    id: 'phy-fm-34',
    text: 'If a body is thrown vertically upwards, its acceleration at the top is:',
    options: ['Zero', '9.8 m/s² downwards', '9.8 m/s² upwards', 'Infinite'],
    correctAnswer: '9.8 m/s² downwards',
    explanation: 'Gravity acts on the body throughout its flight.'
  },
  {
    id: 'phy-fm-35',
    text: 'Momentum of a 10 kg body moving at 5 m/s is:',
    options: ['2 kg.m/s', '50 kg.m/s', '0.5 kg.m/s', '500 kg.m/s'],
    correctAnswer: '50 kg.m/s',
    explanation: 'P = 10 * 5 = 50.'
  },
  {
    id: 'phy-fm-36',
    text: 'If the velocity of a body is doubled, its momentum becomes:',
    options: ['Half', 'Double', 'Four times', 'Remains same'],
    correctAnswer: 'Double',
    explanation: 'P ∝ v.'
  },
  {
    id: 'phy-fm-37',
    text: 'If the mass of a body is doubled while velocity is halved, the momentum:',
    options: ['Doubles', 'Halves', 'Stays same', 'Quadruples'],
    correctAnswer: 'Stays same',
    explanation: 'P = (2m) * (v/2) = mv.'
  },
  {
    id: 'phy-fm-38',
    text: 'A force of 10 N acts on a 2 kg mass for 3 seconds. The change in momentum is:',
    options: ['5 N.s', '30 N.s', '15 N.s', '6 N.s'],
    correctAnswer: '30 N.s',
    explanation: 'ΔP = F * t = 10 * 3 = 30.'
  },
  {
    id: 'phy-fm-39',
    text: 'The tension in a string holding a stationary 5 kg mass is:',
    options: ['5 N', '49 N', '9.8 N', 'Zero'],
    correctAnswer: '49 N',
    explanation: 'T = mg = 5 * 9.8 = 49.'
  },
  {
    id: 'phy-fm-40',
    text: 'Rockets work on the principle of conservation of:',
    options: ['Mass', 'Energy', 'Linear Momentum', 'Angular Momentum'],
    correctAnswer: 'Linear Momentum',
    explanation: 'Exhaust gases move back, rocket moves forward.'
  },
  {
    id: 'phy-fm-41',
    text: 'Which of the following is a scalar quantity?',
    options: ['Displacement', 'Velocity', 'Speed', 'Acceleration'],
    correctAnswer: 'Speed',
    explanation: 'Speed has magnitude but no direction.'
  },
  {
    id: 'phy-fm-42',
    text: 'A car covers 100 km in 2 hours. Its average speed is:',
    options: ['50 km/h', '200 km/h', '25 km/h', '100 km/h'],
    correctAnswer: '50 km/h',
    explanation: 'Speed = 100 / 2 = 50.'
  },
  {
    id: 'phy-fm-43',
    text: 'If a car travels 30 m east and then 40 m north, its displacement is:',
    options: ['70 m', '10 m', '50 m', '1200 m'],
    correctAnswer: '50 m',
    explanation: '√(30² + 40²) = √(900 + 1600) = 50.'
  },
  {
    id: 'phy-fm-44',
    text: 'The velocity of a body moving in a circle with constant speed is:',
    options: ['Constant', 'Variable', 'Zero', 'Infinite'],
    correctAnswer: 'Variable',
    explanation: 'The direction of velocity changes continuously.'
  },
  {
    id: 'phy-fm-45',
    text: 'Acceleration produced in a body is _____ to the force applied.',
    options: ['Inversely proportional', 'Directly proportional', 'Square of', 'Independent of'],
    correctAnswer: 'Directly proportional',
    explanation: 'a = F / m.'
  },
  {
    id: 'phy-fm-46',
    text: 'If the net force on a body is zero, its velocity must be:',
    options: ['Zero', 'Constant', 'Increasing', 'Decreasing'],
    correctAnswer: 'Constant',
    explanation: 'Includes the case of v = 0.'
  },
  {
    id: 'phy-fm-47',
    text: 'Action and reaction forces act on:',
    options: ['Same body', 'Different bodies', 'The center of mass', 'Vacuum'],
    correctAnswer: 'Different bodies',
    explanation: 'They do not cancel each other out because they act on different objects.'
  },
  {
    id: 'phy-fm-48',
    text: 'The "Apparent Weight" of a person in a lift moving upwards with acceleration "a" is:',
    options: ['m(g-a)', 'm(g+a)', 'mg', 'ma'],
    correctAnswer: 'm(g+a)',
    explanation: 'Person feels heavier.'
  },
  {
    id: 'phy-fm-49',
    text: 'The "Apparent Weight" of a person in a lift moving downwards with acceleration "a" is:',
    options: ['m(g+a)', 'm(g-a)', 'mg', 'Zero'],
    correctAnswer: 'm(g-a)',
    explanation: 'Person feels lighter.'
  },
  {
    id: 'phy-fm-50',
    text: 'The "Apparent Weight" of a person in a freely falling lift (a=g) is:',
    options: ['mg', '2mg', 'Zero', 'ma'],
    correctAnswer: 'Zero',
    explanation: 'Weightlessness condition.'
  },
  {
    id: 'phy-fm-51',
    text: 'Momentum of a photon is given by:',
    options: ['mv', 'h/λ', 'mc²', 'hf'],
    correctAnswer: 'h/λ',
    explanation: 'De Broglie relationship.'
  },
  {
    id: 'phy-fm-52',
    text: 'The unit N.s is equivalent to:',
    options: ['Joule', 'kg.m/s', 'Watt', 'Pascal'],
    correctAnswer: 'kg.m/s',
    explanation: 'Unit of impulse and momentum.'
  },
  {
    id: 'phy-fm-53',
    text: 'A body is moving with uniform acceleration. In 5s its velocity changes from 10 m/s to 20 m/s. Acceleration is:',
    options: ['5 m/s²', '2 m/s²', '30 m/s²', '10 m/s²'],
    correctAnswer: '2 m/s²',
    explanation: '(20 - 10) / 5 = 2.'
  },
  {
    id: 'phy-fm-54',
    text: 'Force of 5 N acts on 2 kg mass. Distance covered in 2s from rest is:',
    options: ['2.5 m', '5 m', '10 m', '20 m'],
    correctAnswer: '5 m',
    explanation: 'a = 5/2 = 2.5; S = 0.5 * 2.5 * 2² = 5.'
  },
  {
    id: 'phy-fm-55',
    text: 'The relative velocity of two bodies moving in same direction with v1 and v2 is:',
    options: ['v1 + v2', 'v1 - v2', 'v1 * v2', '√(v1² + v2²)'],
    correctAnswer: 'v1 - v2',
    explanation: 'Difference of velocities.'
  },
  {
    id: 'phy-fm-56',
    text: 'The relative velocity of two bodies moving in opposite directions with v1 and v2 is:',
    options: ['v1 - v2', 'v1 + v2', 'v1/v2', '0'],
    correctAnswer: 'v1 + v2',
    explanation: 'Sum of velocities.'
  },
  {
    id: 'phy-fm-57',
    text: 'Which is a non-contact force?',
    options: ['Tension', 'Friction', 'Magnetic force', 'Normal force'],
    correctAnswer: 'Magnetic force',
    explanation: 'Acts at a distance.'
  },
  {
    id: 'phy-fm-58',
    text: 'Viscosity of liquids _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stay same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'Liquids become "thinner" when heated.'
  },
  {
    id: 'phy-fm-59',
    text: 'Viscosity of gases _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stay same', 'Zeroes'],
    correctAnswer: 'Increases',
    explanation: 'Due to more frequent molecular collisions.'
  },
  {
    id: 'phy-fm-60',
    text: 'Unit of coefficient of viscosity (η) is:',
    options: ['kg/m.s', 'N.m/s', 'kg.m/s', 'Watt'],
    correctAnswer: 'kg/m.s',
    explanation: 'Also called Poiseuille.'
  },
  {
    id: 'phy-fm-61',
    text: 'A body of mass "m" is projected with velocity "v" at angle θ. Vertical component is:',
    options: ['v cos θ', 'v sin θ', 'v tan θ', 'v'],
    correctAnswer: 'v sin θ',
    explanation: 'Opposite to the angle.'
  },
  {
    id: 'phy-fm-62',
    text: 'Horizontal component of velocity for above body is:',
    options: ['v sin θ', 'v cos θ', 'v cot θ', '0'],
    correctAnswer: 'v cos θ',
    explanation: 'Adjacent to the angle.'
  },
  {
    id: 'phy-fm-63',
    text: 'Maximum height of a projectile is:',
    options: ['(v² sin² θ) / 2g', '(v² sin 2θ) / g', '(v sin θ) / g', 'v²/g'],
    correctAnswer: '(v² sin² θ) / 2g',
    explanation: 'From equation of motion.'
  },
  {
    id: 'phy-fm-64',
    text: 'Time of flight of a projectile is:',
    options: ['(v sin θ) / g', '(2v sin θ) / g', '(v² sin² θ) / g', 'v/g'],
    correctAnswer: '(2v sin θ) / g',
    explanation: 'Total time in air.'
  },
  {
    id: 'phy-fm-65',
    text: 'Range of projectile at 15° is 50 m. What is range at 45°?',
    options: ['50 m', '100 m', '200 m', '150 m'],
    correctAnswer: '100 m',
    explanation: 'R ∝ sin 2θ. R1/R2 = sin 30 / sin 90 = 0.5 / 1; R2 = 2 * R1 = 100.'
  },
  {
    id: 'phy-fm-66',
    text: 'If mass of projectile is doubled, its range:',
    options: ['Doubles', 'Halves', 'Stays same', 'Quadruples'],
    correctAnswer: 'Stays same',
    explanation: 'Range is independent of mass (ignoring air resistance).'
  },
  {
    id: 'phy-fm-67',
    text: 'A bullet fired horizontally from a gun and a stone dropped from same height will hit the ground:',
    options: ['Simultaneously', 'Bullet first', 'Stone first', 'Depends on mass'],
    correctAnswer: 'Simultaneously',
    explanation: 'Vertical motion is identical for both (v_iy = 0, a = g).'
  },
  {
    id: 'phy-fm-68',
    text: 'The velocity of a projectile is minimum at:',
    options: ['Point of projection', 'Highest point', 'Point of impact', 'Middle of ascent'],
    correctAnswer: 'Highest point',
    explanation: 'Only horizontal component exists there.'
  },
  {
    id: 'phy-fm-69',
    text: 'Which is a conservative force?',
    options: ['Friction', 'Air resistance', 'Gravitational force', 'Viscous force'],
    correctAnswer: 'Gravitational force',
    explanation: 'Work done depends only on initial and final positions.'
  },
  {
    id: 'phy-fm-70',
    text: 'Work done by a centripetal force is always:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctAnswer: 'Zero',
    explanation: 'Force is perpendicular to displacement.'
  },
  {
    id: 'phy-fm-71',
    text: 'The rate of doing work is:',
    options: ['Energy', 'Power', 'Force', 'Momentum'],
    correctAnswer: 'Power',
    explanation: 'P = W / t.'
  },
  {
    id: 'phy-fm-72',
    text: 'One horsepower is equal to:',
    options: ['1000 W', '746 W', '500 W', '3600 W'],
    correctAnswer: '746 W',
    explanation: 'Standard unit of power.'
  },
  {
    id: 'phy-fm-73',
    text: 'Kinetic energy is given by:',
    options: ['mgh', '1/2 mv²', 'mv', '1/2 kx²'],
    correctAnswer: '1/2 mv²',
    explanation: 'Energy of motion.'
  },
  {
    id: 'phy-fm-74',
    text: 'If momentum of a body is doubled, its K.E. becomes:',
    options: ['Double', 'Four times', 'Half', 'Same'],
    correctAnswer: 'Four times',
    explanation: 'K.E. = P² / 2m.'
  },
  {
    id: 'phy-fm-75',
    text: 'Elastic limit is the maximum stress that can be applied _____ permanent deformation.',
    options: ['With', 'Without', 'Equal to', 'Regardless of'],
    correctAnswer: 'Without',
    explanation: 'Object returns to original shape if stress is removed.'
  },
  {
    id: 'phy-fm-76',
    text: 'Young\'s Modulus is the ratio of _____ stress to _____ strain.',
    options: ['Volume, Volume', 'Shear, Shear', 'Tensile, Tensile', 'None'],
    correctAnswer: 'Tensile, Tensile',
    explanation: 'Relates to length changes.'
  },
  {
    id: 'phy-fm-77',
    text: 'Which is more elastic?',
    options: ['Rubber', 'Steel', 'Glass', 'Copper'],
    correctAnswer: 'Steel',
    explanation: 'Steel has a higher Young\'s modulus and recovers from strain better.'
  },
  {
    id: 'phy-fm-78',
    text: 'The value of g is maximum at:',
    options: ['Equator', 'Poles', 'Center of Earth', 'Mount Everest'],
    correctAnswer: 'Poles',
    explanation: 'Earth is flattened at the poles, so distance to center is less.'
  },
  {
    id: 'phy-fm-79',
    text: 'The value of g at the center of Earth is:',
    options: ['9.8 m/s²', 'Infinity', 'Zero', 'Negative'],
    correctAnswer: 'Zero',
    explanation: 'Mass attracts from all sides, canceling out.'
  },
  {
    id: 'phy-fm-80',
    text: 'The escape velocity from Earth\'s surface is approximately:',
    options: ['11.2 km/s', '8 km/s', '9.8 m/s', '3 x 10⁸ m/s'],
    correctAnswer: '11.2 km/s',
    explanation: 'v_e = √(2gR).'
  },
  {
    id: 'phy-fm-81',
    text: 'Force of 100 N acts on 10 kg mass. Acceleration is:',
    options: ['1000 m/s²', '10 m/s²', '0.1 m/s²', '100 m/s²'],
    correctAnswer: '10 m/s²',
    explanation: '100 / 10 = 10.'
  },
  {
    id: 'phy-fm-82',
    text: 'Dimension of Force is:',
    options: ['[MLT⁻¹]', '[MLT⁻²]', '[ML²T⁻²]', '[M²LT⁻²]'],
    correctAnswer: '[MLT⁻²]',
    explanation: 'Mass * Acceleration.'
  },
  {
    id: 'phy-fm-83',
    text: 'Dimension of Momentum is:',
    options: ['[MLT⁻²]', '[MLT⁻¹]', '[ML²T⁻¹]', '[MLT]'],
    correctAnswer: '[MLT⁻¹]',
    explanation: 'Mass * Velocity.'
  },
  {
    id: 'phy-fm-84',
    text: 'Dimension of Work is:',
    options: ['[MLT⁻²]', '[ML²T⁻²]', '[ML²T⁻¹]', '[MLT⁻¹]'],
    correctAnswer: '[ML²T⁻²]',
    explanation: 'Force * Distance.'
  },
  {
    id: 'phy-fm-85',
    text: 'When a bus suddenly starts, passengers fall backwards due to:',
    options: ['Inertia of rest', 'Inertia of motion', 'Inertia of direction', 'Friction'],
    correctAnswer: 'Inertia of rest',
    explanation: 'The upper body wants to stay at rest.'
  },
  {
    id: 'phy-fm-86',
    text: 'A bullet of 20g is fired from a 2kg gun at 100 m/s. Recoil velocity is:',
    options: ['1 m/s', '2 m/s', '10 m/s', '0.5 m/s'],
    correctAnswer: '1 m/s',
    explanation: 'm1v1 + m2v2 = 0; 0.02 * 100 + 2 * v = 0; 2 + 2v = 0; v = -1.'
  },
  {
    id: 'phy-fm-87',
    text: 'In a tug-of-war, the winning team is the one that:',
    options: ['Pulls harder on the rope', 'Pushes harder against the ground', 'Has more mass', 'Is taller'],
    correctAnswer: 'Pushes harder against the ground',
    explanation: 'Provides more external horizontal force.'
  },
  {
    id: 'phy-fm-88',
    text: 'Ball bearings are used to:',
    options: ['Increase friction', 'Convert sliding friction to rolling friction', 'Reduce weight', 'Add color'],
    correctAnswer: 'Convert sliding friction to rolling friction',
    explanation: 'Rolling friction is much smaller than sliding friction.'
  },
  {
    id: 'phy-fm-89',
    text: 'Banking of roads is done to provide:',
    options: ['Centripetal force', 'Centrifugal force', 'Friction only', 'Style'],
    correctAnswer: 'Centripetal force',
    explanation: 'Prevents skidding at high speeds on curves.'
  },
  {
    id: 'phy-fm-90',
    text: 'The period of a simple pendulum depends on its _____ and _____.',
    options: ['Mass, Length', 'Length, Gravity', 'Mass, Amplitude', 'Gravity, Amplitude'],
    correctAnswer: 'Length, Gravity',
    explanation: 'T = 2π√(L/g).'
  },
  {
    id: 'phy-fm-91',
    text: 'Which is a vector?',
    options: ['Mass', 'Weight', 'Temperature', 'Time'],
    correctAnswer: 'Weight',
    explanation: 'Weight is a force (vector).'
  },
  {
    id: 'phy-fm-92',
    text: 'The center of mass of a uniform ring is:',
    options: ['On the ring', 'At the center of the ring', 'At the edge', 'None'],
    correctAnswer: 'At the center of the ring',
    explanation: 'Even though there is no mass at that point.'
  },
  {
    id: 'phy-fm-93',
    text: 'A body is in stable equilibrium if its center of gravity is at the _____ possible position.',
    options: ['Highest', 'Lowest', 'Middle', 'Right'],
    correctAnswer: 'Lowest',
    explanation: 'Resists being tilted.'
  },
  {
    id: 'phy-fm-94',
    text: 'Archimedes\' Principle is used to find:',
    options: ['Force', 'Density', 'Volume', 'Upthrust/Buoyancy'],
    correctAnswer: 'Upthrust/Buoyancy',
    explanation: 'Buoyant force equals weight of fluid displaced.'
  },
  {
    id: 'phy-fm-95',
    text: 'Pressure in a fluid depends on:',
    options: ['Depth', 'Density', 'Gravity', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'P = ρgh.'
  },
  {
    id: 'phy-fm-96',
    text: 'Bernoulli\'s Equation is a statement of conservation of:',
    options: ['Mass', 'Momentum', 'Energy', 'Charge'],
    correctAnswer: 'Energy',
    explanation: 'For a flowing fluid.'
  },
  {
    id: 'phy-fm-97',
    text: 'The speed of efflux from an opening at depth "h" is:',
    options: ['gh', '√(gh)', '√(2gh)', '2gh'],
    correctAnswer: '√(2gh)',
    explanation: 'Torricelli\'s Theorem.'
  },
  {
    id: 'phy-fm-98',
    text: 'A body moves 3m North, then 4m East. Distance is:',
    options: ['5m', '7m', '1m', '12m'],
    correctAnswer: '7m',
    explanation: '3 + 4 = 7.'
  },
  {
    id: 'phy-fm-99',
    text: 'If earth stopped rotating, the value of "g" at the equator would:',
    options: ['Increase', 'Decrease', 'Stay same', 'Become zero'],
    correctAnswer: 'Increase',
    explanation: 'Centrifugal force currently reduces effective g at equator.'
  },
  {
    id: 'phy-fm-100',
    text: 'Physics is the study of _____ and _____.',
    options: ['Plants, Animals', 'Matter, Energy', 'Rocks, Minerals', 'Chemicals, Reactions'],
    correctAnswer: 'Matter, Energy',
    explanation: 'The fundamental science of the universe.'
  }
];
