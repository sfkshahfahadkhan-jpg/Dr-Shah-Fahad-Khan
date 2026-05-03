import { Question } from '../types';

export const PHYSICS_VECTORS_QUIZ: Question[] = [
  {
    id: 'phy-vec-1',
    text: 'A physical quantity that has both magnitude and direction is called:',
    options: ['Scalar', 'Vector', 'Tensor', 'Constant'],
    correctAnswer: 'Vector',
    explanation: 'Vectors require direction for a complete description.'
  },
  {
    id: 'phy-vec-2',
    text: 'Which of the following is a scalar quantity?',
    options: ['Velocity', 'Force', 'Work', 'Acceleration'],
    correctAnswer: 'Work',
    explanation: 'Work is the dot product of force and displacement, which is a scalar.'
  },
  {
    id: 'phy-vec-3',
    text: 'The resultant of two vectors is maximum when the angle between them is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '0°',
    explanation: 'Vectors in the same direction add up directly.'
  },
  {
    id: 'phy-vec-4',
    text: 'The resultant of two vectors is minimum when the angle between them is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '180°',
    explanation: 'Vectors in opposite directions subtract from each other.'
  },
  {
    id: 'phy-vec-5',
    text: 'The rectangular components of a vector are _____ to each other.',
    options: ['Parallel', 'Perpendicular', 'Anti-parallel', 'At 45°'],
    correctAnswer: 'Perpendicular',
    explanation: 'Rectangular components (Ax, Ay) are at 90°.'
  },
  {
    id: 'phy-vec-6',
    text: 'The dot product of two perpendicular vectors is:',
    options: ['Maximum', 'Zero', '1', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'A · B = AB cos(90°) = 0.'
  },
  {
    id: 'phy-vec-7',
    text: 'The cross product of two parallel vectors is:',
    options: ['Maximum', 'Zero', 'AB', 'Unit vector'],
    correctAnswer: 'Zero',
    explanation: '|A x B| = AB sin(0°) = 0.'
  },
  {
    id: 'phy-vec-8',
    text: 'The magnitude of the cross product A x B represents the _____ of a parallelogram formed by A and B.',
    options: ['Perimeter', 'Diagonal', 'Area', 'Volume'],
    correctAnswer: 'Area',
    explanation: 'Area = |A x B| = AB sinθ.'
  },
  {
    id: 'phy-vec-9',
    text: 'A vector whose magnitude is one is called a:',
    options: ['Null vector', 'Unit vector', 'Position vector', 'Equal vector'],
    correctAnswer: 'Unit vector',
    explanation: 'Unit vectors (i, j, k) specify direction.'
  },
  {
    id: 'phy-vec-10',
    text: 'The direction of the cross product is given by:',
    options: ['Head-to-tail rule', 'Right-hand rule', 'Left-hand rule', 'Screw rule'],
    correctAnswer: 'Right-hand rule',
    explanation: 'Curl fingers from A to B; thumb points in the direction of A x B.'
  },
  {
    id: 'phy-vec-11',
    text: 'Torque is the _____ of force and moment arm.',
    options: ['Dot product', 'Cross product', 'Sum', 'Ratio'],
    correctAnswer: 'Cross product',
    explanation: 'τ = r x F.'
  },
  {
    id: 'phy-vec-12',
    text: 'A body is in translational equilibrium if the net _____ acting on it is zero.',
    options: ['Torque', 'Force', 'Velocity', 'Momentum'],
    correctAnswer: 'Force',
    explanation: 'ΣF = 0 is the first condition of equilibrium.'
  },
  {
    id: 'phy-vec-13',
    text: 'A body is in rotational equilibrium if the net _____ acting on it is zero.',
    options: ['Force', 'Torque', 'Mass', 'Energy'],
    correctAnswer: 'Torque',
    explanation: 'Στ = 0 is the second condition of equilibrium.'
  },
  {
    id: 'phy-vec-14',
    text: 'The unit of torque in SI is:',
    options: ['N', 'N m', 'J', 'N m⁻¹'],
    correctAnswer: 'N m',
    explanation: 'Newton-meter (not to be confused with Joule for work).'
  },
  {
    id: 'phy-vec-15',
    text: 'If A · B = 0 and A x B = 0, then:',
    options: ['A is parallel to B', 'A is perpendicular to B', 'At least one is a null vector', 'None'],
    correctAnswer: 'At least one is a null vector',
    explanation: 'Dot product and cross product cannot both be zero for non-zero vectors unless they are null.'
  },
  {
    id: 'phy-vec-16',
    text: 'The position vector of a point P(x, y, z) is:',
    options: ['xi + yj + zk', 'x + y + z', 'xyz', 'i + j + k'],
    correctAnswer: 'xi + yj + zk',
    explanation: 'r = xi + yj + zk.'
  },
  {
    id: 'phy-vec-17',
    text: 'Two vectors are equal if they have the same:',
    options: ['Magnitude', 'Direction', 'Both A and B', 'Starting point'],
    correctAnswer: 'Both A and B',
    explanation: 'Magnitude and direction must both match.'
  },
  {
    id: 'phy-vec-18',
    text: 'A null vector is a vector whose magnitude is:',
    options: ['1', 'Infinite', 'Zero', 'Negative'],
    correctAnswer: 'Zero',
    explanation: 'Its direction is arbitrary.'
  },
  {
    id: 'phy-vec-19',
    text: 'The process of splitting a vector into its components is called:',
    options: ['Addition', 'Subtraction', 'Resolution', 'Composition'],
    correctAnswer: 'Resolution',
    explanation: 'Breaking a vector into Ax and Ay.'
  },
  {
    id: 'phy-vec-20',
    text: 'The component of a vector A along the x-axis is:',
    options: ['A sinθ', 'A cosθ', 'A tanθ', 'A'],
    correctAnswer: 'A cosθ',
    explanation: 'Ax = A cosθ.'
  },
  {
    id: 'phy-vec-21',
    text: 'The dot product is also called:',
    options: ['Scalar product', 'Vector product', 'Inner product', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'Result is a scalar.'
  },
  {
    id: 'phy-vec-22',
    text: 'The cross product is also called:',
    options: ['Scalar product', 'Vector product', 'Outer product', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Result is a vector.'
  },
  {
    id: 'phy-vec-23',
    text: 'i · i = j · j = k · k =',
    options: ['0', '1', 'i', 'k'],
    correctAnswer: '1',
    explanation: 'Dot product of a unit vector with itself is 1.'
  },
  {
    id: 'phy-vec-24',
    text: 'i x i = j x j = k x k =',
    options: ['0', '1', 'i', 'k'],
    correctAnswer: '0',
    explanation: 'Cross product of a vector with itself is 0.'
  },
  {
    id: 'phy-vec-25',
    text: 'i x j =',
    options: ['k', '-k', '0', '1'],
    correctAnswer: 'k',
    explanation: 'Cyclic order: i -> j -> k.'
  },
  {
    id: 'phy-vec-26',
    text: 'j x i =',
    options: ['k', '-k', '0', '1'],
    correctAnswer: '-k',
    explanation: 'Cross product is anti-commutative.'
  },
  {
    id: 'phy-vec-27',
    text: 'The angle between i + j and the x-axis is:',
    options: ['0°', '45°', '90°', '60°'],
    correctAnswer: '45°',
    explanation: 'tanθ = Ay/Ax = 1/1 = 1. θ = 45°.'
  },
  {
    id: 'phy-vec-28',
    text: 'A couple is formed by two _____ forces acting along different lines.',
    options: ['Equal and parallel', 'Equal and opposite', 'Unequal', 'Perpendicular'],
    correctAnswer: 'Equal and opposite',
    explanation: 'A couple produces pure rotation.'
  },
  {
    id: 'phy-vec-29',
    text: 'The center of gravity of a uniform rod is at its:',
    options: ['One end', 'Middle point', 'Surface', 'Not defined'],
    correctAnswer: 'Middle point',
    explanation: 'For a symmetric body, CG is at the geometric center.'
  },
  {
    id: 'phy-vec-30',
    text: 'A body is in complete equilibrium if:',
    options: ['ΣF = 0', 'Στ = 0', 'Both ΣF = 0 and Στ = 0', 'v = constant'],
    correctAnswer: 'Both ΣF = 0 and Στ = 0',
    explanation: 'Both translational and rotational equilibrium are required.'
  },
  {
    id: 'phy-vec-31',
    text: 'If A = 2i + 3j and B = 3i - 2j, their dot product A · B is:',
    options: ['0', '6', '12', '1'],
    correctAnswer: '0',
    explanation: '2*3 + 3*(-2) = 6 - 6 = 0.'
  },
  {
    id: 'phy-vec-32',
    text: 'Vectors A and B are perpendicular if:',
    options: ['A · B = 0', 'A x B = 0', 'A = B', 'A = -B'],
    correctAnswer: 'A · B = 0',
    explanation: 'cos(90°) = 0.'
  },
  {
    id: 'phy-vec-33',
    text: 'If the resultant of two forces of 3N and 4N is 5N, the angle between them is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '90°',
    explanation: '√(3² + 4²) = √25 = 5. (Pythagoras theorem).'
  },
  {
    id: 'phy-vec-34',
    text: 'Momentum is a _____ quantity.',
    options: ['Scalar', 'Vector', 'Dimensionless', 'Base'],
    correctAnswer: 'Vector',
    explanation: 'p = mv. Since velocity is a vector, momentum is also a vector.'
  },
  {
    id: 'phy-vec-35',
    text: 'The magnitude of vector A = 3i + 4j is:',
    options: ['7', '5', '1', '25'],
    correctAnswer: '5',
    explanation: '√(3² + 4²) = 5.'
  },
  {
    id: 'phy-vec-36',
    text: 'Clockwise torque is usually taken as:',
    options: ['Positive', 'Negative', 'Zero', 'Constant'],
    correctAnswer: 'Negative',
    explanation: 'By convention, anti-clockwise is positive.'
  },
  {
    id: 'phy-vec-37',
    text: 'A point where the whole weight of the body appears to act is:',
    options: ['Center of mass', 'Center of gravity', 'Centroid', 'Origin'],
    correctAnswer: 'Center of gravity',
    explanation: 'Weight acts through the CG.'
  },
  {
    id: 'phy-vec-38',
    text: 'If a body is rotating with constant angular velocity, it is in:',
    options: ['Translational equilibrium', 'Rotational equilibrium', 'Static equilibrium', 'Unstable equilibrium'],
    correctAnswer: 'Rotational equilibrium',
    explanation: 'Constant angular velocity means angular acceleration is zero, so Στ = 0.'
  },
  {
    id: 'phy-vec-39',
    text: 'The sum of three vectors forming a closed triangle is:',
    options: ['Maximum', 'A unit vector', 'A null vector', 'A scalar'],
    correctAnswer: 'A null vector',
    explanation: 'The head of the last vector meets the tail of the first.'
  },
  {
    id: 'phy-vec-40',
    text: 'Vector addition obeys _____ law.',
    options: ['Commutative', 'Associative', 'Both A and B', 'Distributive'],
    correctAnswer: 'Both A and B',
    explanation: 'A + B = B + A and (A+B)+C = A+(B+C).'
  },
  {
    id: 'phy-vec-41',
    text: 'Which of the following cannot be the resultant of 5N and 10N forces?',
    options: ['5N', '10N', '15N', '4N'],
    correctAnswer: '4N',
    explanation: 'Resultant must be between (10-5)=5N and (10+5)=15N.'
  },
  {
    id: 'phy-vec-42',
    text: 'The angle between i + j and i - j is:',
    options: ['0°', '45°', '90°', '180°'],
    correctAnswer: '90°',
    explanation: 'Dot product = (1*1) + (1*-1) = 1 - 1 = 0.'
  },
  {
    id: 'phy-vec-43',
    text: 'Moment arm is the _____ distance from the axis of rotation to the line of action of force.',
    options: ['Parallel', 'Perpendicular', 'Angular', 'Shortest'],
    correctAnswer: 'Perpendicular',
    explanation: 'Moment arm l = r sinθ.'
  },
  {
    id: 'phy-vec-44',
    text: 'Two equal and opposite vectors have a resultant of:',
    options: ['Twice magnitude', 'Null vector', 'Unity', 'Cannot be determined'],
    correctAnswer: 'Null vector',
    explanation: 'A + (-A) = 0.'
  },
  {
    id: 'phy-vec-45',
    text: 'If |A + B| = |A - B|, the angle between A and B is:',
    options: ['0°', '90°', '180°', '60°'],
    correctAnswer: '90°',
    explanation: 'This occurs when the vectors are perpendicular.'
  },
  {
    id: 'phy-vec-46',
    text: 'The scalar product of a vector with itself is:',
    options: ['0', '1', 'Square of its magnitude', 'Its magnitude'],
    correctAnswer: 'Square of its magnitude',
    explanation: 'A · A = A² cos(0°) = A².'
  },
  {
    id: 'phy-vec-47',
    text: 'The direction of a null vector is:',
    options: ['Along x-axis', 'Along z-axis', 'Indeterminate', 'Zero'],
    correctAnswer: 'Indeterminate',
    explanation: 'A null vector has no specific direction.'
  },
  {
    id: 'phy-vec-48',
    text: 'Torque depends on:',
    options: ['Magnitude of force', 'Moment arm', 'Angle', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'τ = r F sinθ.'
  },
  {
    id: 'phy-vec-49',
    text: 'Which is NOT a property of dot product?',
    options: ['Commutative', 'Distributive', 'Associative with scalar', 'Anti-commutative'],
    correctAnswer: 'Anti-commutative',
    explanation: 'Dot product is commutative (A·B = B·A).'
  },
  {
    id: 'phy-vec-50',
    text: 'Which is a property of cross product?',
    options: ['A x B = B x A', 'A x B = - (B x A)', 'A x B = 0 for perpendicular', 'A x B = Scalar'],
    correctAnswer: 'A x B = - (B x A)',
    explanation: 'Cross product is anti-commutative.'
  },
  {
    id: 'phy-vec-51',
    text: 'A unit vector in the direction of A is:',
    options: ['A / |A|', '|A| / A', 'A * |A|', '1'],
    correctAnswer: 'A / |A|',
    explanation: 'Vector divided by its magnitude.'
  },
  {
    id: 'phy-vec-52',
    text: 'For a body to be in equilibrium, its linear acceleration must be:',
    options: ['Zero', 'Constant', 'Maximum', 'Negative'],
    correctAnswer: 'Zero',
    explanation: 'ΣF = ma = 0 => a = 0.'
  },
  {
    id: 'phy-vec-53',
    text: 'The point of the body which moves as if all the mass is concentrated there is:',
    options: ['Center of Gravity', 'Center of Mass', 'Pivot', 'Focus'],
    correctAnswer: 'Center of Mass',
    explanation: 'CoM is where the total mass is theoretically concentrated.'
  },
  {
    id: 'phy-vec-54',
    text: 'In a uniform gravitational field, the center of mass and center of gravity:',
    options: ['Coincide', 'Are far apart', 'Do not exist', 'Depend on volume'],
    correctAnswer: 'Coincide',
    explanation: 'This is true for small bodies near Earth.'
  },
  {
    id: 'phy-vec-55',
    text: 'The magnitude of i · (j x k) is:',
    options: ['0', '1', 'i', 'k'],
    correctAnswer: '1',
    explanation: 'j x k = i. i · i = 1.'
  },
  {
    id: 'phy-vec-56',
    text: 'If torque is zero, the body is in _____ equilibrium.',
    options: ['Translational', 'Rotational', 'Static', 'Dynamic'],
    correctAnswer: 'Rotational',
    explanation: 'Second condition of equilibrium.'
  },
  {
    id: 'phy-vec-57',
    text: 'If A · B = |A x B|, the angle between A and B is:',
    options: ['0°', '45°', '90°', '180°'],
    correctAnswer: '45°',
    explanation: 'cosθ = sinθ occurs at 45°.'
  },
  {
    id: 'phy-vec-58',
    text: 'Projection of A on B is given by:',
    options: ['A cosθ', 'A · (unit vector of B)', 'Both A and B', 'A sinθ'],
    correctAnswer: 'Both A and B',
    explanation: 'They represent the same scalar quantity.'
  },
  {
    id: 'phy-vec-59',
    text: 'Which is a vector?',
    options: ['Electric flux', 'Electric field intensity', 'Electric potential', 'Capacitance'],
    correctAnswer: 'Electric field intensity',
    explanation: 'E is a force per unit charge (vector).'
  },
  {
    id: 'phy-vec-60',
    text: 'To open a door easily, the handle should be at the _____ from the hinges.',
    options: ['Minimum distance', 'Maximum distance', 'Middle', 'Hinges themselves'],
    correctAnswer: 'Maximum distance',
    explanation: 'Larger r gives larger torque for the same force.'
  },
  {
    id: 'phy-vec-61',
    text: 'If a vector A makes an angle θ with y-axis, its x-component is:',
    options: ['A cosθ', 'A sinθ', 'A tanθ', 'A cotθ'],
    correctAnswer: 'A sinθ',
    explanation: 'The angle with x-axis is (90-θ). Ax = A cos(90-θ) = A sinθ.'
  },
  {
    id: 'phy-vec-62',
    text: 'Resultant of three equal vectors of magnitude 2 units making 120° with each other is:',
    options: ['6', '2', '0', '4'],
    correctAnswer: '0',
    explanation: 'They form a closed equilateral triangle.'
  },
  {
    id: 'phy-vec-63',
    text: 'A vector is not changed if it is:',
    options: ['Rotated', 'Multiplied by -1', 'Displaced parallel to itself', 'Squared'],
    correctAnswer: 'Displaced parallel to itself',
    explanation: 'Free vectors can be moved as long as magnitude and direction are preserved.'
  },
  {
    id: 'phy-vec-64',
    text: 'The area of a triangle with sides A and B is:',
    options: ['|A x B|', '1/2 |A x B|', 'A · B', '1/2 A · B'],
    correctAnswer: '1/2 |A x B|',
    explanation: 'Area of triangle is half the area of the parallelogram.'
  },
  {
    id: 'phy-vec-65',
    text: 'Torque is also called:',
    options: ['Turning effect of force', 'Moment of force', 'Both A and B', 'Angular momentum'],
    correctAnswer: 'Both A and B',
    explanation: 'Common synonymous terms.'
  },
  {
    id: 'phy-vec-66',
    text: 'A body in equilibrium can be:',
    options: ['At rest', 'Moving with constant velocity', 'Both A and B', 'Accelerating'],
    correctAnswer: 'Both A and B',
    explanation: 'Rest is static; constant velocity is dynamic equilibrium.'
  },
  {
    id: 'phy-vec-67',
    text: 'Stable equilibrium is when the body _____ after a slight tilt.',
    options: ['Falls over', 'Returns to its original position', 'Stays in new position', 'Rotates'],
    correctAnswer: 'Returns to its original position',
    explanation: 'Center of gravity is raised during the tilt.'
  },
  {
    id: 'phy-vec-68',
    text: 'Unstable equilibrium is when the body _____ after a slight tilt.',
    options: ['Falls over', 'Returns', 'Stays', 'Vibrates'],
    correctAnswer: 'Falls over',
    explanation: 'Center of gravity is lowered during the tilt.'
  },
  {
    id: 'phy-vec-69',
    text: 'In neutral equilibrium, the center of gravity height:',
    options: ['Increases', 'Decreases', 'Remains same', 'Zero'],
    correctAnswer: 'Remains same',
    explanation: 'Example: A ball rolling on a flat floor.'
  },
  {
    id: 'phy-vec-70',
    text: 'Vector multiplication by a negative scalar _____ its direction.',
    options: ['Reverses', 'Keeps same', 'Does not affect', 'Makes it zero'],
    correctAnswer: 'Reverses',
    explanation: 'It becomes 180° to the original.'
  },
  {
    id: 'phy-vec-71',
    text: 'The cross product of a vector with itself is a:',
    options: ['Scalar', 'Unit vector', 'Null vector', 'Positive value'],
    correctAnswer: 'Null vector',
    explanation: 'sin(0°) = 0.'
  },
  {
    id: 'phy-vec-72',
    text: 'Which is a vector?',
    options: ['Pressure', 'Surface tension', 'Stress', 'Impulse'],
    correctAnswer: 'Impulse',
    explanation: 'Impulse = Force * time (vector).'
  },
  {
    id: 'phy-vec-73',
    text: 'Moment of a couple is:',
    options: ['Force * arm of couple', 'Zero', 'Depends on pivot', 'Variable'],
    correctAnswer: 'Force * arm of couple',
    explanation: 'It is independent of the location of the axis.'
  },
  {
    id: 'phy-vec-74',
    text: 'The dimension of torque is:',
    options: ['[MLT⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[ML²T⁻¹]'],
    correctAnswer: '[ML²T⁻²]',
    explanation: 'Same as Energy.'
  },
  {
    id: 'phy-vec-75',
    text: 'Minimum number of unequal coplanar vectors whose sum can be zero is:',
    options: ['2', '3', '4', 'Many'],
    correctAnswer: '3',
    explanation: 'Two unequal vectors can never cancel out.'
  },
  {
    id: 'phy-vec-76',
    text: 'If A is along x-axis and B is along y-axis, A x B is along:',
    options: ['x-axis', 'y-axis', 'z-axis', 'Origin'],
    correctAnswer: 'z-axis',
    explanation: 'i x j = k.'
  },
  {
    id: 'phy-vec-77',
    text: 'A person is climbing a ladder. The torque is produced by:',
    options: ['Weight of person', 'Weight of ladder', 'Reaction of wall', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'All forces contributing to rotation about the base.'
  },
  {
    id: 'phy-vec-78',
    text: 'Angle between -i and j is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '90°',
    explanation: 'Negative x-axis and positive y-axis are perpendicular.'
  },
  {
    id: 'phy-vec-79',
    text: 'If A = i + j, the unit vector is:',
    options: ['(i+j)/2', '(i+j)/√2', 'i+j', '1'],
    correctAnswer: '(i+j)/√2',
    explanation: 'Magnitude is √2.'
  },
  {
    id: 'phy-vec-80',
    text: 'Which quantity is conserved in rotational equilibrium?',
    options: ['Linear momentum', 'Angular momentum', 'Kinetic energy', 'Potential energy'],
    correctAnswer: 'Angular momentum',
    explanation: 'If Στ = 0, L is constant.'
  },
  {
    id: 'phy-vec-81',
    text: 'Resolution of a vector is the _____ of vector addition.',
    options: ['Reverse', 'Same', 'Product', 'None'],
    correctAnswer: 'Reverse',
    explanation: 'Addition: components to resultant. Resolution: resultant to components.'
  },
  {
    id: 'phy-vec-82',
    text: 'Vector product is zero when vectors are:',
    options: ['Parallel', 'Anti-parallel', 'Both A and B', 'Perpendicular'],
    correctAnswer: 'Both A and B',
    explanation: 'sin(0°) = 0 and sin(180°) = 0.'
  },
  {
    id: 'phy-vec-83',
    text: 'A force of 10N acts at 30° to x-axis. Its y-component is:',
    options: ['5N', '8.66N', '10N', '3N'],
    correctAnswer: '5N',
    explanation: '10 sin(30°) = 10 * 0.5 = 5N.'
  },
  {
    id: 'phy-vec-84',
    text: 'Work is maximum when angle between F and d is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '0°',
    explanation: 'cos(0°) = 1.'
  },
  {
    id: 'phy-vec-85',
    text: 'Work is negative when angle between F and d is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '180°',
    explanation: 'cos(180°) = -1.'
  },
  {
    id: 'phy-vec-86',
    text: 'Power is the dot product of:',
    options: ['Force and Velocity', 'Force and Time', 'Work and Time', 'Mass and Acceleration'],
    correctAnswer: 'Force and Velocity',
    explanation: 'P = F · v.'
  },
  {
    id: 'phy-vec-87',
    text: 'The magnitude of i + j + k is:',
    options: ['1', '√2', '√3', '3'],
    correctAnswer: '√3',
    explanation: '√(1² + 1² + 1²) = √3.'
  },
  {
    id: 'phy-vec-88',
    text: 'Scalar product of two vectors is negative if the angle is:',
    options: ['Acute', 'Obtuse', 'Right', 'Zero'],
    correctAnswer: 'Obtuse',
    explanation: 'cosθ is negative in second quadrant (90° to 180°).'
  },
  {
    id: 'phy-vec-89',
    text: 'A car moving at constant speed on a straight road is in:',
    options: ['Translational equilibrium', 'Rotational equilibrium', 'Complete equilibrium', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'a = 0 and α = 0.'
  },
  {
    id: 'phy-vec-90',
    text: 'The ratio of the magnitudes of |A x B| to A · B is:',
    options: ['sinθ', 'cosθ', 'tanθ', '1'],
    correctAnswer: 'tanθ',
    explanation: 'AB sinθ / AB cosθ = tanθ.'
  },
  {
    id: 'phy-vec-91',
    text: 'Which is a vector?',
    options: ['Temperature gradient', 'Magnetic flux', 'Electric potential', 'Specific heat'],
    correctAnswer: 'Temperature gradient',
    explanation: 'Gradient points in direction of max change (vector).'
  },
  {
    id: 'phy-vec-92',
    text: 'Torque is zero if the line of action of force passes through the:',
    options: ['Pivot', 'Axis of rotation', 'Both A and B', 'End of body'],
    correctAnswer: 'Both A and B',
    explanation: 'Moment arm r becomes zero.'
  },
  {
    id: 'phy-vec-93',
    text: 'The dot product of i and j is:',
    options: ['0', '1', 'k', '-k'],
    correctAnswer: '0',
    explanation: 'i and j are perpendicular.'
  },
  {
    id: 'phy-vec-94',
    text: 'Vector addition is _____ to the head-to-tail rule.',
    options: ['Equivalent', 'Opposite', 'Irrelevant', 'Slower than'],
    correctAnswer: 'Equivalent',
    explanation: 'Geometric way of adding vectors.'
  },
  {
    id: 'phy-vec-95',
    text: 'If the angle between two vectors is increased from 0 to 180, their resultant magnitude:',
    options: ['Increases', 'Decreases', 'Stay same', 'Doubles'],
    correctAnswer: 'Decreases',
    explanation: 'From A+B to |A-B|.'
  },
  {
    id: 'phy-vec-96',
    text: 'Force is a _____ quantity.',
    options: ['Scalar', 'Vector', 'Fundamental', 'Dimensionless'],
    correctAnswer: 'Vector',
    explanation: 'Force has both magnitude and direction.'
  },
  {
    id: 'phy-vec-97',
    text: 'If A · B = A B, the angle is:',
    options: ['0°', '90°', '180°', '45°'],
    correctAnswer: '0°',
    explanation: 'cos(0°) = 1.'
  },
  {
    id: 'phy-vec-98',
    text: 'Moment arm of a force is zero if the force is _____ to the axis.',
    options: ['Parallel', 'Perpendicular', 'At 45°', 'Acting on'],
    correctAnswer: 'Acting on',
    explanation: 'Or passing through the axis.'
  },
  {
    id: 'phy-vec-99',
    text: 'Which coordinate system is used to represent vectors?',
    options: ['Cartesian', 'Spherical', 'Cylindrical', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Cartesian is most common in basic physics.'
  },
  {
    id: 'phy-vec-100',
    text: 'The study of vectors is essential for understanding:',
    options: ['Mechanics', 'Electromagnetism', 'Fluid dynamics', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Most physical laws are vector-based.'
  }
];
