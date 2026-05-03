import { Question } from '../types';

export const PHYSICS_CIRCULAR_QUIZ: Question[] = [
  {
    id: 'ph-ci-1',
    text: 'The angle subtended at the center of a circle by an arc equal in length to the radius of the circle is:',
    options: ['1 degree', '1 radian', '1 revolution', '90 degrees'],
    correctAnswer: '1 radian',
    explanation: 'Definition of a radian.'
  },
  {
    id: 'ph-ci-2',
    text: 'One radian is equal to approximately _____ degrees.',
    options: ['45', '57.3', '60', '90'],
    correctAnswer: '57.3',
    explanation: '180/π ≈ 57.3°.'
  },
  {
    id: 'ph-ci-3',
    text: 'The relation between linear displacement (s) and angular displacement (θ) is:',
    options: ['s = rθ', 's = r/θ', 'θ = rs', 'None'],
    correctAnswer: 's = rθ',
    explanation: 'θ must be in radians.'
  },
  {
    id: 'ph-ci-4',
    text: 'The rate of change of angular displacement is called:',
    options: ['Angular velocity', 'Angular acceleration', 'Centripetal velocity', 'None'],
    correctAnswer: 'Angular velocity',
    explanation: 'ω = Δθ / Δt.'
  },
  {
    id: 'ph-ci-5',
    text: 'The direction of angular velocity is given by:',
    options: ['Left hand rule', 'Right hand rule', 'Fleming\'s rule', 'None'],
    correctAnswer: 'Right hand rule',
    explanation: 'Curl fingers in direction of rotation; thumb points in direction of ω.'
  },
  {
    id: 'ph-ci-6',
    text: 'The relation between linear velocity (v) and angular velocity (ω) is:',
    options: ['v = rω', 'ω = rv', 'v = r/ω', 'None'],
    correctAnswer: 'v = rω',
    explanation: 'v is the tangential velocity.'
  },
  {
    id: 'ph-ci-7',
    text: 'In vector form, the relation between v, ω, and r is:',
    options: ['v = ω × r', 'v = r × ω', 'v = ω . r', 'None'],
    correctAnswer: 'v = ω × r',
    explanation: 'Cross product order is important.'
  },
  {
    id: 'ph-ci-8',
    text: 'The rate of change of angular velocity is called:',
    options: ['Angular momentum', 'Angular acceleration', 'Torque', 'None'],
    correctAnswer: 'Angular acceleration',
    explanation: 'α = Δω / Δt.'
  },
  {
    id: 'ph-ci-9',
    text: 'The SI unit of angular acceleration is:',
    options: ['rad/s', 'rad/s^2', 'm/s^2', 'rev/s'],
    correctAnswer: 'rad/s^2',
    explanation: 'Standard unit.'
  },
  {
    id: 'ph-ci-10',
    text: 'The relation between tangential acceleration (at) and angular acceleration (α) is:',
    options: ['at = rα', 'α = r at', 'at = vα', 'None'],
    correctAnswer: 'at = rα',
    explanation: 'at is the component of acceleration along the tangent.'
  },
  {
    id: 'ph-ci-11',
    text: 'In uniform circular motion, the _____ acceleration is zero.',
    options: ['Centripetal', 'Tangential', 'Total', 'None'],
    correctAnswer: 'Tangential',
    explanation: 'Speed is constant, so tangential acceleration is zero.'
  },
  {
    id: 'ph-ci-12',
    text: 'The force needed to keep a body moving in a circle is called:',
    options: ['Centrifugal force', 'Centripetal force', 'Gravitational force', 'None'],
    correctAnswer: 'Centripetal force',
    explanation: 'Always directed towards the center.'
  },
  {
    id: 'ph-ci-13',
    text: 'The formula for centripetal force is:',
    options: ['mv/r', 'mv^2/r', 'mrω', 'None'],
    correctAnswer: 'mv^2/r',
    explanation: 'Also expressed as mrω^2.'
  },
  {
    id: 'ph-ci-14',
    text: 'The work done by the centripetal force is always:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on radius'],
    correctAnswer: 'Zero',
    explanation: 'Force is perpendicular to the displacement at every point.'
  },
  {
    id: 'ph-ci-15',
    text: 'Centripetal acceleration (ac) is given by:',
    options: ['v/r', 'v^2/r', 'rω', 'None'],
    correctAnswer: 'v^2/r',
    explanation: 'Also equal to rω^2.'
  },
  {
    id: 'ph-ci-16',
    text: 'An object of mass 2 kg moves in a circle of radius 1 m with a speed of 2 m/s. The centripetal force is:',
    options: ['2 N', '4 N', '8 N', '16 N'],
    correctAnswer: '8 N',
    explanation: 'F = mv^2/r = (2 * 2^2) / 1 = 8 N.'
  },
  {
    id: 'ph-ci-17',
    text: 'The property of a body to resist any change in its state of rest or uniform rotation is:',
    options: ['Momentum', 'Inertia', 'Moment of Inertia', 'Torque'],
    correctAnswer: 'Moment of Inertia',
    explanation: 'Also called rotational inertia.'
  },
  {
    id: 'ph-ci-18',
    text: 'The moment of inertia (I) of a point mass m at distance r from axis is:',
    options: ['mr', 'mr^2', 'm/r', 'None'],
    correctAnswer: 'mr^2',
    explanation: 'Basic formula.'
  },
  {
    id: 'ph-ci-19',
    text: 'The SI unit of moment of inertia is:',
    options: ['kg.m', 'kg.m^2', 'kg/m^2', 'N.m'],
    correctAnswer: 'kg.m^2',
    explanation: 'Derived from mr^2.'
  },
  {
    id: 'ph-ci-20',
    text: 'The moment of inertia depends on _____ and _____ from the axis.',
    options: ['Mass, Velocity', 'Mass, Distribution of mass', 'Force, Time', 'None'],
    correctAnswer: 'Mass, Distribution of mass',
    explanation: 'Farther the mass, greater the I.'
  },
  {
    id: 'ph-ci-21',
    text: 'The moment of inertia of a thin hoop or cylinder about its central axis is:',
    options: ['1/2 mr^2', 'mr^2', '2/5 mr^2', 'None'],
    correctAnswer: 'mr^2',
    explanation: 'All mass is at distance r.'
  },
  {
    id: 'ph-ci-22',
    text: 'The moment of inertia of a solid disc or cylinder about its central axis is:',
    options: ['mr^2', '1/2 mr^2', '2/3 mr^2', 'None'],
    correctAnswer: '1/2 mr^2',
    explanation: 'Mass is distributed from 0 to r.'
  },
  {
    id: 'ph-ci-23',
    text: 'The moment of inertia of a solid sphere about its diameter is:',
    options: ['2/5 mr^2', '2/3 mr^2', 'mr^2', 'None'],
    correctAnswer: '2/5 mr^2',
    explanation: 'Standard formula.'
  },
  {
    id: 'ph-ci-24',
    text: 'Torque (τ) is related to angular acceleration (α) by the formula:',
    options: ['τ = Iα', 'τ = mv', 'τ = Fd', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'τ = Iα is the rotational analogue of F = ma.'
  },
  {
    id: 'ph-ci-25',
    text: 'The cross product of radius vector and linear momentum is called:',
    options: ['Force', 'Torque', 'Angular momentum', 'None'],
    correctAnswer: 'Angular momentum',
    explanation: 'L = r × p.'
  },
  {
    id: 'ph-ci-26',
    text: 'The magnitude of angular momentum is given by L = _____ or L = _____.',
    options: ['mvr, Iω', 'mv, Iα', 'Fr, mv', 'None'],
    correctAnswer: 'mvr, Iω',
    explanation: 'L = Iω is similar to p = mv.'
  },
  {
    id: 'ph-ci-27',
    text: 'The SI unit of angular momentum is:',
    options: ['kg.m/s', 'kg.m^2/s', 'J.s', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Units are equivalent.'
  },
  {
    id: 'ph-ci-28',
    text: 'The dimension of angular momentum is the same as that of:',
    options: ['Energy', 'Planck\'s constant', 'Force', 'None'],
    correctAnswer: 'Planck\'s constant',
    explanation: '[ML^2T^-1].'
  },
  {
    id: 'ph-ci-29',
    text: 'Law of Conservation of Angular Momentum: If no external _____ acts on a system, its total angular momentum remains constant.',
    options: ['Force', 'Torque', 'Work', 'None'],
    correctAnswer: 'Torque',
    explanation: 'dL/dt = τ_ext.'
  },
  {
    id: 'ph-ci-30',
    text: 'When a diver pulls in their hands and legs during a dive, their moment of inertia _____ and angular velocity _____.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Decreases, Stays same', 'None'],
    correctAnswer: 'Decreases, Increases',
    explanation: 'To conserve angular momentum (Iω = constant).'
  },
  {
    id: 'ph-ci-31',
    text: 'Rotational Kinetic Energy (K.E_rot) is given by:',
    options: ['1/2 mv^2', '1/2 Iω^2', 'mgh', 'None'],
    correctAnswer: '1/2 Iω^2',
    explanation: 'Analogue of 1/2 mv^2.'
  },
  {
    id: 'ph-ci-32',
    text: 'A body rolling down an inclined plane has _____ and _____ kinetic energy.',
    options: ['Only Translational', 'Only Rotational', 'Both Translational and Rotational', 'None'],
    correctAnswer: 'Both Translational and Rotational',
    explanation: 'Total K.E = 1/2 mv^2 + 1/2 Iω^2.'
  },
  {
    id: 'ph-ci-33',
    text: 'For a body rolling without slipping, v = _____ and ω = _____.',
    options: ['rω, v/r', 'v/r, rω', 'Both v', 'None'],
    correctAnswer: 'rω, v/r',
    explanation: 'Condition for rolling.'
  },
  {
    id: 'ph-ci-34',
    text: 'Which will reach the bottom of an inclined plane first (starting from same height): a solid disc or a hoop of same mass and radius?',
    options: ['Hoop', 'Solid Disc', 'Both same time', 'None'],
    correctAnswer: 'Solid Disc',
    explanation: 'Disc has smaller I, so more K.E is translational, hence higher velocity.'
  },
  {
    id: 'ph-ci-35',
    text: 'The speed of a solid disc at the bottom of an inclined plane of height h is:',
    options: ['√(2gh)', '√(4gh/3)', '√(gh)', 'None'],
    correctAnswer: '√(4gh/3)',
    explanation: 'Derived from conservation of energy mgh = 1/2 mv^2 + 1/2 (1/2 mr^2)(v/r)^2.'
  },
  {
    id: 'ph-ci-36',
    text: 'The speed of a solid sphere at the bottom of an inclined plane of height h is:',
    options: ['√(10gh/7)', '√(gh)', '√(2gh)', 'None'],
    correctAnswer: '√(10gh/7)',
    explanation: 'Highest speed among common shapes.'
  },
  {
    id: 'ph-ci-37',
    text: 'The real weight of a body is the _____ force on it.',
    options: ['Centripetal', 'Gravitational', 'Elastic', 'None'],
    correctAnswer: 'Gravitational',
    explanation: 'w = mg.'
  },
  {
    id: 'ph-ci-38',
    text: 'Apparent weight of a body is the _____ force exerted by the support.',
    options: ['Gravitational', 'Normal/Reaction', 'Centrifugal', 'None'],
    correctAnswer: 'Normal/Reaction',
    explanation: 'Measured by a weighing scale.'
  },
  {
    id: 'ph-ci-39',
    text: 'In a lift moving up with acceleration "a", the apparent weight is:',
    options: ['m(g-a)', 'm(g+a)', 'mg', '0'],
    correctAnswer: 'm(g+a)',
    explanation: 'Feels heavier.'
  },
  {
    id: 'ph-ci-40',
    text: 'In a lift moving down with acceleration "a", the apparent weight is:',
    options: ['m(g+a)', 'm(g-a)', 'mg', 'None'],
    correctAnswer: 'm(g-a)',
    explanation: 'Feels lighter.'
  },
  {
    id: 'ph-ci-41',
    text: 'If a lift falls freely (a = g), the apparent weight is:',
    options: ['mg', '2mg', 'Zero (Weightlessness)', 'None'],
    correctAnswer: 'Zero (Weightlessness)',
    explanation: 'Body and lift fall together.'
  },
  {
    id: 'ph-ci-42',
    text: 'An astronaut in a satellite feels weightless because:',
    options: ['There is no gravity', 'Satellite is in free fall', 'Satellite is very far', 'None'],
    correctAnswer: 'Satellite is in free fall',
    explanation: 'Gravity is present but acting as centripetal force.'
  },
  {
    id: 'ph-ci-43',
    text: 'Artificial gravity in a spaceship can be produced by:',
    options: ['Adding more mass', 'Rotation about its own axis', 'Magnetic fields', 'None'],
    correctAnswer: 'Rotation about its own axis',
    explanation: 'Centripetal acceleration acts like g.'
  },
  {
    id: 'ph-ci-44',
    text: 'For artificial gravity equal to g, the frequency of rotation f is:',
    options: ['1/(2π) √(g/R)', '2π √(R/g)', '√(gR)', 'None'],
    correctAnswer: '1/(2π) √(g/R)',
    explanation: 'Derived from g = Rω^2 and ω = 2πf.'
  },
  {
    id: 'ph-ci-45',
    text: 'A satellite whose orbital period is 24 hours is called a:',
    options: ['Polar satellite', 'Geostationary satellite', 'Low earth satellite', 'None'],
    correctAnswer: 'Geostationary satellite',
    explanation: 'Appears stationary relative to Earth.'
  },
  {
    id: 'ph-ci-46',
    text: 'The orbital radius of a geostationary satellite from the center of Earth is about:',
    options: ['6400 km', '36000 km', '42300 km', 'None'],
    correctAnswer: '42300 km',
    explanation: 'From the center; height from surface is ~36000 km.'
  },
  {
    id: 'ph-ci-47',
    text: 'The orbital speed (v) of a satellite near the Earth surface is approximately:',
    options: ['4.2 km/s', '7.9 km/s', '11.2 km/s', 'None'],
    correctAnswer: '7.9 km/s',
    explanation: 'v = √(gR).'
  },
  {
    id: 'ph-ci-48',
    text: 'Global Positioning System (GPS) consists of _____ satellites.',
    options: ['12', '24', '36', 'None'],
    correctAnswer: '24',
    explanation: 'Arranged in 6 orbital planes.'
  },
  {
    id: 'ph-ci-49',
    text: 'According to Newton, gravity is a _____ between masses.',
    options: ['Curvature', 'Force', 'Field', 'None'],
    correctAnswer: 'Force',
    explanation: 'F = GMm/r^2.'
  },
  {
    id: 'ph-ci-50',
    text: 'According to Einstein (General Relativity), gravity is the _____ of space-time.',
    options: ['Force', 'Field', 'Curvature', 'None'],
    correctAnswer: 'Curvature',
    explanation: 'Mass tells space how to curve; space tells mass how to move.'
  },
  {
    id: 'ph-ci-51',
    text: 'Angular displacement is a vector quantity for _____ values.',
    options: ['Very large', 'Infinitesimally small', 'Constant', 'None'],
    correctAnswer: 'Infinitesimally small',
    explanation: 'Finite rotations do not follow commutative law of addition.'
  },
  {
    id: 'ph-ci-52',
    text: '1 revolution is equal to _____ radians.',
    options: ['π', '2π', '360', 'None'],
    correctAnswer: '2π',
    explanation: 'Full circle.'
  },
  {
    id: 'ph-ci-53',
    text: 'A wheel rotates at 300 rpm. Its angular velocity in rad/s is:',
    options: ['10π', '20π', '300π', 'None'],
    correctAnswer: '10π',
    explanation: 'ω = 2π(300/60) = 10π rad/s.'
  },
  {
    id: 'ph-ci-54',
    text: 'In rotational motion, mass is replaced by _____ in formulas.',
    options: ['Momentum', 'Moment of inertia', 'Torque', 'None'],
    correctAnswer: 'Moment of inertia',
    explanation: 'I is the rotational analogue of m.'
  },
  {
    id: 'ph-ci-55',
    text: 'Torque is the rotational analogue of _____ and Angular momentum is of _____.',
    options: ['Force, Linear momentum', 'Momentum, Force', 'Work, Energy', 'None'],
    correctAnswer: 'Force, Linear momentum',
    explanation: 'Correct analogies.'
  },
  {
    id: 'ph-ci-56',
    text: 'The direction of angular acceleration is same as ω if ω is _____ and opposite if ω is _____.',
    options: ['Increasing, Decreasing', 'Decreasing, Increasing', 'Zero, Non-zero', 'None'],
    correctAnswer: 'Increasing, Decreasing',
    explanation: 'Similar to linear acceleration and velocity.'
  },
  {
    id: 'ph-ci-57',
    text: 'A point on the rim of a wheel of radius 0.5 m has a tangential speed of 2 m/s. Its angular speed is:',
    options: ['1 rad/s', '4 rad/s', '2.5 rad/s', 'None'],
    correctAnswer: '4 rad/s',
    explanation: 'ω = v/r = 2 / 0.5 = 4 rad/s.'
  },
  {
    id: 'ph-ci-58',
    text: 'Which shape has the largest moment of inertia for same m and r?',
    options: ['Solid sphere', 'Solid disc', 'Thin hoop/ring', 'Rod about center'],
    correctAnswer: 'Thin hoop/ring',
    explanation: 'I = mr^2; mass is farthest from axis.'
  },
  {
    id: 'ph-ci-59',
    text: 'Which shape has the smallest moment of inertia for same m and r?',
    options: ['Thin hoop', 'Solid sphere', 'Solid disc', 'Hollow sphere'],
    correctAnswer: 'Solid sphere',
    explanation: 'I = 0.4 mr^2; mass is concentrated near the axis.'
  },
  {
    id: 'ph-ci-60',
    text: 'The rotational K.E of a hoop (I=mr^2) rolling with velocity v is:',
    options: ['1/2 mv^2', 'mv^2', '1/4 mv^2', 'None'],
    correctAnswer: '1/2 mv^2',
    explanation: '1/2 (mr^2)(v/r)^2 = 1/2 mv^2.'
  },
  {
    id: 'ph-ci-61',
    text: 'The total K.E of a solid disc (I=1/2 mr^2) rolling with velocity v is:',
    options: ['1/2 mv^2', '3/4 mv^2', 'mv^2', 'None'],
    correctAnswer: '3/4 mv^2',
    explanation: '1/2 mv^2 + 1/4 mv^2 = 3/4 mv^2.'
  },
  {
    id: 'ph-ci-62',
    text: 'Banking of roads is done to provide necessary _____ to vehicles taking a turn.',
    options: ['Friction', 'Centripetal force', 'Support', 'None'],
    correctAnswer: 'Centripetal force',
    explanation: 'Component of normal force provides it.'
  },
  {
    id: 'ph-ci-63',
    text: 'When a stone tied to a string is whirled in a circle, and the string breaks, the stone moves along the:',
    options: ['Radius', 'Tangent', 'Diameter', 'None'],
    correctAnswer: 'Tangent',
    explanation: 'Due to inertia of direction.'
  },
  {
    id: 'ph-ci-64',
    text: 'The centrifugal force is a _____ force.',
    options: ['Real', 'Pseudo/Fictitious', 'Gravitational', 'None'],
    correctAnswer: 'Pseudo/Fictitious',
    explanation: 'Observed in a non-inertial (rotating) frame.'
  },
  {
    id: 'ph-ci-65',
    text: 'A car is moving on a convex bridge. Its apparent weight at the top is _____ than its real weight.',
    options: ['More', 'Less', 'Equal', 'None'],
    correctAnswer: 'Less',
    explanation: 'Normal force = mg - mv^2/R.'
  },
  {
    id: 'ph-ci-66',
    text: 'Minimum velocity required at the top of a vertical circle of radius r to complete the loop is:',
    options: ['√(2gr)', '√(gr)', '√(5gr)', 'None'],
    correctAnswer: '√(gr)',
    explanation: 'Critical velocity.'
  },
  {
    id: 'ph-ci-67',
    text: 'Minimum velocity required at the bottom of a vertical circle to complete the loop is:',
    options: ['√(gr)', '√(3gr)', '√(5gr)', 'None'],
    correctAnswer: '√(5gr)',
    explanation: 'Derived from energy conservation.'
  },
  {
    id: 'ph-ci-68',
    text: 'A satellite orbiting at a height h has orbital velocity v = _____ (where R is Earth radius).',
    options: ['√[GM/(R+h)]', '√[GM/R]', '√[g(R+h)]', 'None'],
    correctAnswer: '√[GM/(R+h)]',
    explanation: 'Standard formula.'
  },
  {
    id: 'ph-ci-69',
    text: 'The time period of a satellite near the Earth surface is about:',
    options: ['24 hours', '84 minutes', '1.5 hours', 'None'],
    correctAnswer: '84 minutes',
    explanation: 'T = 2π √(R/g) ≈ 5060 s.'
  },
  {
    id: 'ph-ci-70',
    text: 'How many geostationary satellites are needed to cover the whole Earth for communication?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
    explanation: 'Each covers 120° of longitude.'
  },
  {
    id: 'ph-ci-71',
    text: 'INTELSAT satellites are _____ satellites.',
    options: ['Polar', 'Geostationary', 'Weather', 'None'],
    correctAnswer: 'Geostationary',
    explanation: 'International Telecommunications Satellite Organization.'
  },
  {
    id: 'ph-ci-72',
    text: 'The "Flywheel" is used in engines to _____ the rotation.',
    options: ['Speed up', 'Smooth out/Store energy', 'Stop', 'None'],
    correctAnswer: 'Smooth out/Store energy',
    explanation: 'Has large moment of inertia.'
  },
  {
    id: 'ph-ci-73',
    text: 'When a planet moves closer to the Sun in its elliptical orbit, its speed _____ to conserve angular momentum.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Kepler\'s second law.'
  },
  {
    id: 'ph-ci-74',
    text: 'Moment of inertia of a thin rod of length L about an axis through its center and perpendicular to length is:',
    options: ['1/12 mL^2', '1/3 mL^2', 'mL^2', 'None'],
    correctAnswer: '1/12 mL^2',
    explanation: 'Standard formula.'
  },
  {
    id: 'ph-ci-75',
    text: 'Angular momentum is a _____ vector.',
    options: ['Polar', 'Axial', 'Scalar', 'None'],
    correctAnswer: 'Axial',
    explanation: 'Acts along the axis of rotation.'
  },
  {
    id: 'ph-ci-76',
    text: 'The kinetic energy of a body of mass m and moment of inertia I moving with velocity v and angular velocity ω is:',
    options: ['1/2 mv^2', '1/2 Iω^2', '1/2 mv^2 + 1/2 Iω^2', 'None'],
    correctAnswer: '1/2 mv^2 + 1/2 Iω^2',
    explanation: 'Total K.E.'
  },
  {
    id: 'ph-ci-77',
    text: 'For a solid sphere rolling without slipping, the ratio of rotational K.E to total K.E is:',
    options: ['2/5', '2/7', '5/7', 'None'],
    correctAnswer: '2/7',
    explanation: 'KE_rot = 1/5 mv^2; KE_total = 1/2 mv^2 + 1/5 mv^2 = 7/10 mv^2. Ratio = (1/5)/(7/10) = 2/7.'
  },
  {
    id: 'ph-ci-78',
    text: 'Angular displacement is measured in:',
    options: ['Metres', 'Kilograms', 'Degrees or Radians', 'None'],
    correctAnswer: 'Degrees or Radians',
    explanation: 'Units of angle.'
  },
  {
    id: 'ph-ci-79',
    text: 'In the equation τ = Iα, if α = 1 rad/s^2, then:',
    options: ['τ = I', 'τ = 0', 'τ = 1', 'None'],
    correctAnswer: 'τ = I',
    explanation: 'Definition of I.'
  },
  {
    id: 'ph-ci-80',
    text: 'A helicopter has two rotors to _____ the angular momentum of the body.',
    options: ['Increase', 'Double', 'Cancel/Neutralize', 'None'],
    correctAnswer: 'Cancel/Neutralize',
    explanation: 'To prevent the body from spinning in opposite direction.'
  },
  {
    id: 'ph-ci-81',
    text: 'The centripetal force is always _____ to the velocity.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Perpendicular',
    explanation: 'Changes direction, not speed.'
  },
  {
    id: 'ph-ci-82',
    text: 'Earth rotates from _____ to _____ which is why the Sun rises in the East.',
    options: ['East, West', 'West, East', 'North, South', 'None'],
    correctAnswer: 'West, East',
    explanation: 'Anticlockwise when viewed from North Pole.'
  },
  {
    id: 'ph-ci-83',
    text: 'A disc and a hoop of same mass and radius are released from top of incline. Hoop will have _____ velocity at bottom.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'More energy goes into rotation for the hoop.'
  },
  {
    id: 'ph-ci-84',
    text: 'Weightlessness in satellites is an example of _____ frame of reference.',
    options: ['Inertial', 'Non-inertial', 'Stationary', 'None'],
    correctAnswer: 'Non-inertial',
    explanation: 'Accelerating frame.'
  },
  {
    id: 'ph-ci-85',
    text: 'The value of g _____ as we move away from the Earth\'s surface.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Follows inverse square law.'
  },
  {
    id: 'ph-ci-86',
    text: 'Angular velocity of the minute hand of a clock is:',
    options: ['2π rad/s', 'π/1800 rad/s', 'π/30 rad/s', 'None'],
    correctAnswer: 'π/1800 rad/s',
    explanation: 'ω = 2π / (60 * 60) = 2π / 3600 = π/1800 rad/s.'
  },
  {
    id: 'ph-ci-87',
    text: 'Angular velocity of the hour hand of a clock is:',
    options: ['2π/12 rad/h', 'π/21600 rad/s', 'Both', 'None'],
    correctAnswer: 'Both',
    explanation: 'Conversion between h and s.'
  },
  {
    id: 'ph-ci-88',
    text: 'Angular momentum is conserved for a satellite in elliptical orbit because gravitational force acts along the:',
    options: ['Tangent', 'Radial line (No torque)', 'Axis', 'None'],
    correctAnswer: 'Radial line (No torque)',
    explanation: 'r and F are parallel/anti-parallel, so τ = 0.'
  },
  {
    id: 'ph-ci-89',
    text: 'Moment of inertia of a solid cylinder of radius R and length L about its own axis is:',
    options: ['1/2 mR^2', 'mR^2', '1/4 mR^2', 'None'],
    correctAnswer: '1/2 mR^2',
    explanation: 'Length does not matter if axis is central.'
  },
  {
    id: 'ph-ci-90',
    text: 'Which is a "Vector" quantity?',
    options: ['Angular displacement (finite)', 'Angular velocity', 'Moment of inertia', 'Kinetic energy'],
    correctAnswer: 'Angular velocity',
    explanation: 'Direction given by right hand rule.'
  },
  {
    id: 'ph-ci-91',
    text: 'Angular acceleration is zero in _____ circular motion.',
    options: ['Uniform', 'Non-uniform', 'Vertical', 'None'],
    correctAnswer: 'Uniform',
    explanation: 'ω is constant.'
  },
  {
    id: 'ph-ci-92',
    text: 'The centripetal force is provided by _____ for a planet orbiting the Sun.',
    options: ['Friction', 'Tension', 'Gravitational force', 'None'],
    correctAnswer: 'Gravitational force',
    explanation: 'Source of the force.'
  },
  {
    id: 'ph-ci-93',
    text: 'The centripetal force is provided by _____ for an electron orbiting the nucleus.',
    options: ['Gravity', 'Electrostatic force', 'Magnetic force', 'None'],
    correctAnswer: 'Electrostatic force',
    explanation: 'Coulombic attraction.'
  },
  {
    id: 'ph-ci-94',
    text: 'The area of a sector of a circle is given by:',
    options: ['1/2 r^2 θ', 'rθ', 'πr^2', 'None'],
    correctAnswer: '1/2 r^2 θ',
    explanation: 'θ must be in radians.'
  },
  {
    id: 'ph-ci-95',
    text: 'In rotational motion, work done is given by W = _____:',
    options: ['F.d', 'τ.θ', 'P.t', 'None'],
    correctAnswer: 'τ.θ',
    explanation: 'Rotational analogue of F.d.'
  },
  {
    id: 'ph-ci-96',
    text: 'In rotational motion, power is given by P = _____:',
    options: ['F.v', 'τ.ω', 'Iα', 'None'],
    correctAnswer: 'τ.ω',
    explanation: 'Rotational analogue of F.v.'
  },
  {
    id: 'ph-ci-97',
    text: 'The angular momentum of the Earth about its own axis is called _____ angular momentum.',
    options: ['Orbital', 'Spin', 'Total', 'None'],
    correctAnswer: 'Spin',
    explanation: 'Rotation about own axis.'
  },
  {
    id: 'ph-ci-98',
    text: 'Geostationary satellites are used for _____ and _____.',
    options: ['Communication, Weather monitoring', 'GPS', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Primary uses.'
  },
  {
    id: 'ph-ci-99',
    text: 'A point at distance r from axis has centripetal acceleration ac. If r is doubled at constant ω, ac becomes:',
    options: ['Half', 'Double', 'Four times', 'None'],
    correctAnswer: 'Double',
    explanation: 'ac = rω^2.'
  },
  {
    id: 'ph-ci-100',
    text: 'Rotational motion is as fundamental to physics as _____ motion.',
    options: ['Linear', 'Vibratory', 'Projectile', 'None'],
    correctAnswer: 'Linear',
    explanation: 'Part of everyday dynamics.'
  }
];
