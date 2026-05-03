import { Question } from '../types';

export const PHYSICS_ELECTROMAGNETISM_QUIZ: Question[] = [
  {
    id: 'ph-em-1',
    text: 'A current-carrying conductor produces a _____ around it.',
    options: ['Electric field', 'Magnetic field', 'Gravitational field', 'None'],
    correctAnswer: 'Magnetic field',
    explanation: 'Discovered by Oersted.'
  },
  {
    id: 'ph-em-2',
    text: 'The direction of magnetic field lines around a straight current-carrying wire is given by:',
    options: ['Left hand rule', 'Right hand rule', 'Lenz\'s law', 'None'],
    correctAnswer: 'Right hand rule',
    explanation: 'Thumb points in current direction; fingers curl in field direction.'
  },
  {
    id: 'ph-em-3',
    text: 'The force F on a conductor of length L carrying current I in a magnetic field B is:',
    options: ['F = ILB sinθ', 'F = qvB sinθ', 'F = BIL cosθ', 'None'],
    correctAnswer: 'F = ILB sinθ',
    explanation: 'θ is the angle between L and B.'
  },
  {
    id: 'ph-em-4',
    text: 'The SI unit of magnetic flux density (B) is:',
    options: ['Weber', 'Tesla (T)', 'Ampere/m', 'None'],
    correctAnswer: 'Tesla (T)',
    explanation: '1 T = 1 N / (A.m).'
  },
  {
    id: 'ph-em-5',
    text: '1 Tesla is equal to _____ Gauss.',
    options: ['100', '1000', '10000', 'None'],
    correctAnswer: '10000',
    explanation: 'Gauss is the CGS unit.'
  },
  {
    id: 'ph-em-6',
    text: 'The total number of magnetic field lines passing through an area is called:',
    options: ['Magnetic intensity', 'Magnetic flux (Φ)', 'Magnetization', 'None'],
    correctAnswer: 'Magnetic flux (Φ)',
    explanation: 'Φ = B . A = BA cosθ.'
  },
  {
    id: 'ph-em-7',
    text: 'The SI unit of magnetic flux is:',
    options: ['Tesla', 'Weber (Wb)', 'Farad', 'None'],
    correctAnswer: 'Weber (Wb)',
    explanation: '1 Wb = 1 T.m^2.'
  },
  {
    id: 'ph-em-8',
    text: 'Ampere\'s Law states that the line integral of B around any closed path is equal to _____ times the total current enclosed.',
    options: ['ε0', 'μ0', '1/μ0', 'None'],
    correctAnswer: 'μ0',
    explanation: '∮ B . dl = μ0 I.'
  },
  {
    id: 'ph-em-9',
    text: 'The constant μ0 is called the permeability of free space, and its value is:',
    options: ['4π x 10^-7 T.m/A', '8.85 x 10^-12', '9 x 10^9', 'None'],
    correctAnswer: '4π x 10^-7 T.m/A',
    explanation: 'Standard SI constant.'
  },
  {
    id: 'ph-em-10',
    text: 'A long tightly wound cylindrical coil of wire is called a:',
    options: ['Capacitor', 'Solenoid', 'Inductor', 'None'],
    correctAnswer: 'Solenoid',
    explanation: 'Produces a uniform magnetic field inside.'
  },
  {
    id: 'ph-em-11',
    text: 'The magnetic field inside a long solenoid is B =:',
    options: ['μ0 I', 'μ0 n I', 'μ0 I / (2πr)', 'None'],
    correctAnswer: 'μ0 n I',
    explanation: 'where n is the number of turns per unit length.'
  },
  {
    id: 'ph-em-12',
    text: 'The force on a charge q moving with velocity v in a magnetic field B is:',
    options: ['F = qvB sinθ', 'F = qE', 'F = ILB', 'None'],
    correctAnswer: 'F = qvB sinθ',
    explanation: 'Magnetic Lorentz force.'
  },
  {
    id: 'ph-em-13',
    text: 'The direction of force on a positive charge moving in a magnetic field is given by:',
    options: ['Right hand rule', 'Left hand rule', 'Fleming\'s left hand rule', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'v × B direction for positive charge.'
  },
  {
    id: 'ph-em-14',
    text: 'If a charged particle enters a magnetic field perpendicular to the lines, its path will be:',
    options: ['Straight line', 'Parabola', 'Circle', 'Helix'],
    correctAnswer: 'Circle',
    explanation: 'Magnetic force acts as centripetal force.'
  },
  {
    id: 'ph-em-15',
    text: 'The radius of the circular path of a charged particle in a magnetic field is r =:',
    options: ['mv / (qB)', 'qB / (mv)', 'mv^2 / (qB)', 'None'],
    correctAnswer: 'mv / (qB)',
    explanation: 'Derived from qvB = mv^2/r.'
  },
  {
    id: 'ph-em-16',
    text: 'The period of revolution of a charged particle in a magnetic field is _____ of its speed and radius.',
    options: ['Directly proportional', 'Inversely proportional', 'Independent', 'None'],
    correctAnswer: 'Independent',
    explanation: 'T = 2πm / (qB).'
  },
  {
    id: 'ph-em-17',
    text: 'Determination of e/m (charge to mass ratio) of electron was first done by:',
    options: ['Millikan', 'J.J. Thomson', 'Newton', 'None'],
    correctAnswer: 'J.J. Thomson',
    explanation: 'In 1897.'
  },
  {
    id: 'ph-em-18',
    text: 'In J.J. Thomson\'s experiment, the magnetic force is balanced by:',
    options: ['Gravitational force', 'Electric force', 'Centrifugal force', 'None'],
    correctAnswer: 'Electric force',
    explanation: 'Used crossed E and B fields (velocity selector).'
  },
  {
    id: 'ph-em-19',
    text: 'A "Velocity Selector" allows particles of speed v = _____ to pass undeflected.',
    options: ['E/B', 'B/E', 'EB', 'None'],
    correctAnswer: 'E/B',
    explanation: 'qE = qvB -> v = E/B.'
  },
  {
    id: 'ph-em-20',
    text: 'CRO stands for:',
    options: ['Cathode Ray Oscillator', 'Cathode Ray Oscilloscope', 'Central Ray Output', 'None'],
    correctAnswer: 'Cathode Ray Oscilloscope',
    explanation: 'High-speed graph plotting device.'
  },
  {
    id: 'ph-em-21',
    text: 'The source of electrons in a CRO is the:',
    options: ['Anode', 'Grid', 'Cathode (Electron gun)', 'Screen'],
    correctAnswer: 'Cathode (Electron gun)',
    explanation: 'Thermionic emission.'
  },
  {
    id: 'ph-em-22',
    text: 'In a CRO, the "Grid" is used to control the _____ of the electron beam.',
    options: ['Speed', 'Direction', 'Brightness (Intensity)', 'None'],
    correctAnswer: 'Brightness (Intensity)',
    explanation: 'By controlling number of electrons.'
  },
  {
    id: 'ph-em-23',
    text: 'The "Sweep voltage" (sawtooth voltage) in a CRO is applied to _____ plates.',
    options: ['Vertical (Y)', 'Horizontal (X)', 'Both', 'None'],
    correctAnswer: 'Horizontal (X)',
    explanation: 'Moves the beam across the screen at constant speed.'
  },
  {
    id: 'ph-em-24',
    text: 'The "Torque" on a current-carrying coil in a magnetic field is τ =:',
    options: ['BINA cosα', 'BINA sinα', 'BIA', 'None'],
    correctAnswer: 'BINA cosα',
    explanation: 'α is angle between plane of coil and B; or NIAB sinθ where θ is angle between normal and B.'
  },
  {
    id: 'ph-em-25',
    text: 'A device used to detect and measure small electric currents is:',
    options: ['Voltmeter', 'Galvanometer', 'Ammeter', 'None'],
    correctAnswer: 'Galvanometer',
    explanation: 'Works on the principle of torque on a coil.'
  },
  {
    id: 'ph-em-26',
    text: 'In a moving coil galvanometer, the restoring torque is provided by:',
    options: ['Magnetic field', 'Suspension wire / Spring', 'Gravity', 'None'],
    correctAnswer: 'Suspension wire / Spring',
    explanation: 'τ = Cθ.'
  },
  {
    id: 'ph-em-27',
    text: 'A galvanometer is said to be "Dead beat" if it:',
    options: ['Oscillates forever', 'Comes to rest quickly without oscillations', 'Does not move', 'None'],
    correctAnswer: 'Comes to rest quickly without oscillations',
    explanation: 'Useful for taking quick readings.'
  },
  {
    id: 'ph-em-28',
    text: 'To convert a galvanometer into an ammeter, a _____ resistance (shunt) is connected in _____.',
    options: ['Low, Series', 'High, Parallel', 'Low, Parallel', 'None'],
    correctAnswer: 'Low, Parallel',
    explanation: 'Rs = Ig Rg / (I - Ig).'
  },
  {
    id: 'ph-em-29',
    text: 'To convert a galvanometer into a voltmeter, a _____ resistance (multiplier) is connected in _____.',
    options: ['High, Series', 'Low, Series', 'High, Parallel', 'None'],
    correctAnswer: 'High, Series',
    explanation: 'Rh = V / Ig - Rg.'
  },
  {
    id: 'ph-em-30',
    text: 'An ideal ammeter has _____ resistance and an ideal voltmeter has _____ resistance.',
    options: ['Infinite, Zero', 'Zero, Infinite', 'Medium, Medium', 'None'],
    correctAnswer: 'Zero, Infinite',
    explanation: 'To avoid affecting the circuit.'
  },
  {
    id: 'ph-em-31',
    text: 'Avometer is a multi-purpose instrument that can measure:',
    options: ['Amperes, Volts, Ohms', 'Acids, Velocities, Orbits', 'Angles, Volumes', 'None'],
    correctAnswer: 'Amperes, Volts, Ohms',
    explanation: 'A-V-O meter.'
  },
  {
    id: 'ph-em-32',
    text: 'Lorentz Force is the sum of _____ and _____ forces on a charge.',
    options: ['Gravitational, Electric', 'Electric, Magnetic', 'Magnetic, Centripetal', 'None'],
    correctAnswer: 'Electric, Magnetic',
    explanation: 'F = q(E + v × B).'
  },
  {
    id: 'ph-em-33',
    text: 'Magnetic field lines inside a bar magnet run from:',
    options: ['North to South', 'South to North', 'East to West', 'None'],
    correctAnswer: 'South to North',
    explanation: 'They form closed loops.'
  },
  {
    id: 'ph-em-34',
    text: 'Magnetic field lines outside a bar magnet run from:',
    options: ['South to North', 'North to South', 'Top to Bottom', 'None'],
    correctAnswer: 'North to South',
    explanation: 'Standard convention.'
  },
  {
    id: 'ph-em-35',
    text: 'The magnetic force on a charge moving parallel to magnetic field lines is:',
    options: ['Maximum', 'Zero', 'Half', 'None'],
    correctAnswer: 'Zero',
    explanation: 'sin(0) = 0.'
  },
  {
    id: 'ph-em-36',
    text: 'The magnetic force on a charge moving perpendicular to magnetic field lines is:',
    options: ['Zero', 'Maximum', 'Negative', 'None'],
    correctAnswer: 'Maximum',
    explanation: 'sin(90) = 1.'
  },
  {
    id: 'ph-em-37',
    text: 'A "Tesla" is equal to _____ N/(A.m).',
    options: ['1', '10', '0.1', 'None'],
    correctAnswer: '1',
    explanation: 'Unit definition.'
  },
  {
    id: 'ph-em-38',
    text: 'The "Right Hand Palm Rule" is used to find the direction of _____ on a conductor.',
    options: ['Current', 'Magnetic field', 'Magnetic force', 'None'],
    correctAnswer: 'Magnetic force',
    explanation: 'Fingers point in B, thumb in I, palm pushes in F.'
  },
  {
    id: 'ph-em-39',
    text: 'Two parallel wires carrying current in the same direction _____ each other.',
    options: ['Attract', 'Repel', 'Do not affect', 'None'],
    correctAnswer: 'Attract',
    explanation: 'Basic electromagnetic interaction.'
  },
  {
    id: 'ph-em-40',
    text: 'Two parallel wires carrying current in opposite directions _____ each other.',
    options: ['Attract', 'Repel', 'Rotate', 'None'],
    correctAnswer: 'Repel',
    explanation: 'Opposite to what one might expect from electrostatics.'
  },
  {
    id: 'ph-em-41',
    text: 'Magnetic flux Φ is a _____ quantity.',
    options: ['Vector', 'Scalar', 'Tensor', 'None'],
    correctAnswer: 'Scalar',
    explanation: 'Dot product of two vectors.'
  },
  {
    id: 'ph-em-42',
    text: 'Magnetic flux density B is a _____ quantity.',
    options: ['Scalar', 'Vector', 'Dimensionless', 'None'],
    correctAnswer: 'Vector',
    explanation: 'Has direction of field lines.'
  },
  {
    id: 'ph-em-43',
    text: 'Ampere\'s law is used to find _____ in cases of high symmetry.',
    options: ['Force', 'Flux', 'Magnetic field B', 'Charge'],
    correctAnswer: 'Magnetic field B',
    explanation: 'Analogue of Gauss\'s Law.'
  },
  {
    id: 'ph-em-44',
    text: 'A solenoid of length 0.5 m has 500 turns and carries 2 A current. B inside is:',
    options: ['μ0 * 2000', 'μ0 * 500', 'μ0 * 250', 'None'],
    correctAnswer: 'μ0 * 2000',
    explanation: 'n = 500 / 0.5 = 1000. B = μ0 * 1000 * 2 = 2000 μ0.'
  },
  {
    id: 'ph-em-45',
    text: 'The magnetic field of a solenoid depends on _____ and _____.',
    options: ['Radius, Length', 'Number of turns per unit length, Current', 'Material of wire, Color', 'None'],
    correctAnswer: 'Number of turns per unit length, Current',
    explanation: 'B = μ0 n I.'
  },
  {
    id: 'ph-em-46',
    text: 'A "Toroid" is a solenoid bent into a:',
    options: ['Square', 'Circle / Doughnut shape', 'Line', 'None'],
    correctAnswer: 'Circle / Doughnut shape',
    explanation: 'Magnetic field is confined inside.'
  },
  {
    id: 'ph-em-47',
    text: 'Work done by magnetic force on a moving charge is always:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on charge'],
    correctAnswer: 'Zero',
    explanation: 'Force is always perpendicular to velocity.'
  },
  {
    id: 'ph-em-48',
    text: 'Magnetic force can change the _____ of a moving charge but not its _____.',
    options: ['Speed, Direction', 'Direction, Speed', 'Mass, Charge', 'None'],
    correctAnswer: 'Direction, Speed',
    explanation: 'Because it does no work, kinetic energy remains constant.'
  },
  {
    id: 'ph-em-49',
    text: 'The "Cyclotron" frequency of a particle is given by f =:',
    options: ['qB / (2πm)', '2πm / (qB)', 'mv / (qB)', 'None'],
    correctAnswer: 'qB / (2πm)',
    explanation: 'Frequency of circular motion in B field.'
  },
  {
    id: 'ph-em-50',
    text: 'In e/m experiment, if potential difference V is used to accelerate electrons, then 1/2 mv^2 =:',
    options: ['Ve', 'V/e', 'e/V', 'None'],
    correctAnswer: 'Ve',
    explanation: 'Work done by electric field.'
  },
  {
    id: 'ph-em-51',
    text: 'The value of e/m for an electron is about:',
    options: ['1.6 x 10^-19 C/kg', '1.76 x 10^11 C/kg', '9.1 x 10^-31 C/kg', 'None'],
    correctAnswer: '1.76 x 10^11 C/kg',
    explanation: 'Very high value due to small mass.'
  },
  {
    id: 'ph-em-52',
    text: 'A cathode ray consists of a stream of fast moving:',
    options: ['Protons', 'Neutrons', 'Electrons', 'Photons'],
    correctAnswer: 'Electrons',
    explanation: 'Discovered in discharge tubes.'
  },
  {
    id: 'ph-em-53',
    text: 'Cathode rays are deflected by _____ and _____ fields.',
    options: ['Only Electric', 'Only Magnetic', 'Both Electric and Magnetic', 'None'],
    correctAnswer: 'Both Electric and Magnetic',
    explanation: 'Because they are charged particles.'
  },
  {
    id: 'ph-em-54',
    text: 'The "Deflecting plates" in a CRO are called _____ and _____ plates.',
    options: ['North, South', 'X, Y', 'A, B', 'None'],
    correctAnswer: 'X, Y',
    explanation: 'X for horizontal, Y for vertical deflection.'
  },
  {
    id: 'ph-em-55',
    text: 'The screen of a CRO is coated with _____ material.',
    options: ['Metallic', 'Fluorescent / Phosphorescent', 'Opaque', 'None'],
    correctAnswer: 'Fluorescent / Phosphorescent',
    explanation: 'Glows when hit by electrons.'
  },
  {
    id: 'ph-em-56',
    text: 'The torque on a coil is zero when the plane of the coil is _____ to the magnetic field.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Perpendicular',
    explanation: 'cos(90) = 0.'
  },
  {
    id: 'ph-em-57',
    text: 'The torque on a coil is maximum when the plane of the coil is _____ to the magnetic field.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Parallel',
    explanation: 'cos(0) = 1.'
  },
  {
    id: 'ph-em-58',
    text: 'Radial magnetic field in a galvanometer is produced by using _____ pole pieces.',
    options: ['Flat', 'Concave', 'Convex', 'None'],
    correctAnswer: 'Concave',
    explanation: 'Ensures torque is always maximum (plane of coil parallel to B).'
  },
  {
    id: 'ph-em-59',
    text: 'A "Soft iron core" inside the galvanometer coil _____ the magnetic field.',
    options: ['Weakens', 'Strengthens', 'Does not affect', 'None'],
    correctAnswer: 'Strengthens',
    explanation: 'High permeability concentrates field lines.'
  },
  {
    id: 'ph-em-60',
    text: 'In a galvanometer, the current I is proportional to the deflection θ if the field is _____:',
    options: ['Uniform', 'Radial', 'Variable', 'None'],
    correctAnswer: 'Radial',
    explanation: 'I = (C/BAN) * θ.'
  },
  {
    id: 'ph-em-61',
    text: 'Galvanometer sensitivity is increased by _____ BAN or _____ C.',
    options: ['Increasing, Decreasing', 'Decreasing, Increasing', 'Increasing, Increasing', 'None'],
    correctAnswer: 'Increasing, Decreasing',
    explanation: 'Smaller C (restoring constant) means more deflection for same I.'
  },
  {
    id: 'ph-em-62',
    text: 'Current sensitivity is measured as θ / I, and Voltage sensitivity as _____:',
    options: ['V / I', 'θ / V', 'V / θ', 'None'],
    correctAnswer: 'θ / V',
    explanation: 'Deflection per unit voltage.'
  },
  {
    id: 'ph-em-63',
    text: 'The shunt resistance Rs is usually much _____ than galvanometer resistance Rg.',
    options: ['Larger', 'Smaller', 'Equal', 'None'],
    correctAnswer: 'Smaller',
    explanation: 'To bypass most of the current.'
  },
  {
    id: 'ph-em-64',
    text: 'A voltmeter is connected in _____ with the component whose voltage is to be measured.',
    options: ['Series', 'Parallel', 'Both', 'None'],
    correctAnswer: 'Parallel',
    explanation: 'Standard rule.'
  },
  {
    id: 'ph-em-65',
    text: 'An ammeter is connected in _____ in the circuit.',
    options: ['Series', 'Parallel', 'Both', 'None'],
    correctAnswer: 'Series',
    explanation: 'To measure the actual current through the branch.'
  },
  {
    id: 'ph-em-66',
    text: 'The resistance of an ammeter is _____ than the galvanometer it was made from.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'Because of the parallel shunt.'
  },
  {
    id: 'ph-em-67',
    text: 'The resistance of a voltmeter is _____ than the galvanometer it was made from.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Because of the series multiplier.'
  },
  {
    id: 'ph-em-68',
    text: 'Digital Multimeter (DMM) displays readings in _____ form.',
    options: ['Analog', 'Digital (Digits)', 'Graphical', 'None'],
    correctAnswer: 'Digital (Digits)',
    explanation: 'Easier to read and more precise.'
  },
  {
    id: 'ph-em-69',
    text: 'In the expression F = q(v × B), the force is _____ to both v and B.',
    options: ['Parallel', 'Perpendicular', 'Opposite', 'None'],
    correctAnswer: 'Perpendicular',
    explanation: 'Property of cross product.'
  },
  {
    id: 'ph-em-70',
    text: 'An electron enters a magnetic field from North to South. If the field is directed upward, the force is toward:',
    options: ['East', 'West', 'Up', 'Down'],
    correctAnswer: 'East',
    explanation: 'v is South, B is Up. v × B is East. Since charge is negative, force is East (Correction: actually West for positive, so East for electron). v: (0,-1,0), B: (0,0,1). v×B = (-1,0,0) which is West. For negative charge, -(-1,0,0) = (1,0,0) which is East.'
  },
  {
    id: 'ph-em-71',
    text: 'The "Magnetic Dipole Moment" of a current loop is M =:',
    options: ['IA', 'I / A', 'BIA', 'None'],
    correctAnswer: 'IA',
    explanation: 'Area times current.'
  },
  {
    id: 'ph-em-72',
    text: 'Magnetic flux density B is also called:',
    options: ['Magnetic induction', 'Magnetic field strength', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Interchangeable terms.'
  },
  {
    id: 'ph-em-73',
    text: 'The force between two charges at rest is purely _____ but when in motion, _____ force also acts.',
    options: ['Electric, Magnetic', 'Magnetic, Electric', 'Gravity, Heat', 'None'],
    correctAnswer: 'Electric, Magnetic',
    explanation: 'Moving charges produce magnetic fields.'
  },
  {
    id: 'ph-em-74',
    text: 'A "Neutron" entering a magnetic field experiences a force of:',
    options: ['qvB', 'Zero', 'Maximum', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Neutrons are neutral (q = 0).'
  },
  {
    id: 'ph-em-75',
    text: 'The sensitivity of a CRO is expressed in terms of _____ per cm of deflection.',
    options: ['Amperes', 'Volts', 'Watts', 'None'],
    correctAnswer: 'Volts',
    explanation: 'Deflection factor.'
  },
  {
    id: 'ph-em-76',
    text: 'CRO can be used to measure:',
    options: ['Voltage', 'Frequency', 'Phase', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Extremely versatile instrument.'
  },
  {
    id: 'ph-em-77',
    text: 'When a current carrying conductor is placed in a magnetic field, the field on one side _____ and on the other _____:',
    options: ['Strengthens, Weakens', 'Weakens, Strengthens', 'Stays same', 'None'],
    correctAnswer: 'Strengthens, Weakens',
    explanation: 'Produces a net force toward the weaker side.'
  },
  {
    id: 'ph-em-78',
    text: 'If we increase the current in a solenoid, the magnetic field B:',
    options: ['Decreases', 'Increases', 'Remains same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'B ∝ I.'
  },
  {
    id: 'ph-em-79',
    text: 'Inside a solenoid, the magnetic field is _____ and directed along the _____.',
    options: ['Uniform, Axis', 'Non-uniform, Radius', 'Circular, Tangent', 'None'],
    correctAnswer: 'Uniform, Axis',
    explanation: 'Ideal solenoid behavior.'
  },
  {
    id: 'ph-em-80',
    text: 'An electron at rest in a strong magnetic field experiences a force of:',
    options: ['Maximum', 'Zero', 'Medium', 'None'],
    correctAnswer: 'Zero',
    explanation: 'F = qvB sinθ; if v = 0, F = 0.'
  },
  {
    id: 'ph-em-81',
    text: 'Magnetic field lines _____ each other.',
    options: ['Cross', 'Never cross', 'Are always straight', 'None'],
    correctAnswer: 'Never cross',
    explanation: 'Same reason as electric field lines.'
  },
  {
    id: 'ph-em-82',
    text: 'A "Magnetic Monopole":',
    options: ['Exists in nature', 'Does not exist in nature', 'Can be created in lab', 'None'],
    correctAnswer: 'Does not exist in nature',
    explanation: 'Magnets always have North and South poles.'
  },
  {
    id: 'ph-em-83',
    text: 'If you cut a magnet into two halves, each half will:',
    options: ['Be a single pole', 'Be a complete magnet with N and S', 'Lose magnetism', 'None'],
    correctAnswer: 'Be a complete magnet with N and S',
    explanation: 'Magnetic property is atomic.'
  },
  {
    id: 'ph-em-84',
    text: 'The force between two parallel wires is an example of _____ Law.',
    options: ['Gauss\'s', 'Ampere\'s', 'Newton\'s Third', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Consistent with action-reaction.'
  },
  {
    id: 'ph-em-85',
    text: '1 Gauss = _____ Tesla.',
    options: ['10^4', '10^-4', '10^2', 'None'],
    correctAnswer: '10^-4',
    explanation: 'CGS to SI conversion.'
  },
  {
    id: 'ph-em-86',
    text: 'Which has the largest magnetic field?',
    options: ['Earth', 'Sunspot', 'MRI machine', 'Fridge magnet'],
    correctAnswer: 'MRI machine',
    explanation: 'Typically 1.5 to 3.0 Tesla.'
  },
  {
    id: 'ph-em-87',
    text: 'Earth\'s magnetic field is roughly _____ Gauss.',
    options: ['0.5', '5', '50', '500'],
    correctAnswer: '0.5',
    explanation: 'Very weak but enough for compasses.'
  },
  {
    id: 'ph-em-88',
    text: 'Cathode rays originate from the _____ in a vacuum tube.',
    options: ['Negative terminal', 'Positive terminal', 'Neutral terminal', 'None'],
    correctAnswer: 'Negative terminal',
    explanation: 'Cathode is the negative electrode.'
  },
  {
    id: 'ph-em-89',
    text: 'Thomson\'s e/m experiment showed that cathode rays are _____ to the nature of gas used.',
    options: ['Dependent', 'Independent', 'Sometimes dependent', 'None'],
    correctAnswer: 'Independent',
    explanation: 'Proved electrons are universal constituents of matter.'
  },
  {
    id: 'ph-em-90',
    text: 'A "Sawtooth" voltage increases _____ with time and then drops _____ to zero.',
    options: ['Slowly, Suddenly', 'Suddenly, Slowly', 'Linearly, Linearly', 'None'],
    correctAnswer: 'Slowly, Suddenly',
    explanation: 'Used for horizontal sweep in CRO.'
  },
  {
    id: 'ph-em-91',
    text: 'To see a stationary pattern on CRO, the frequency of signal should be _____ to the sweep frequency.',
    options: ['Equal or multiple', 'Half', 'Double', 'None'],
    correctAnswer: 'Equal or multiple',
    explanation: 'Synchronization condition.'
  },
  {
    id: 'ph-em-92',
    text: 'Magnetic flux is maximum when the surface is _____ to field lines.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Perpendicular',
    explanation: 'θ = 0 between B and Normal.'
  },
  {
    id: 'ph-em-93',
    text: 'Magnetic flux is zero when the surface is _____ to field lines.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Parallel',
    explanation: 'θ = 90 between B and Normal.'
  },
  {
    id: 'ph-em-94',
    text: 'An ammeter has a resistance Ra =:',
    options: ['Rg + Rs', 'Rg Rs / (Rg + Rs)', 'Rg - Rs', 'None'],
    correctAnswer: 'Rg Rs / (Rg + Rs)',
    explanation: 'Parallel combination.'
  },
  {
    id: 'ph-em-95',
    text: 'A voltmeter has a resistance Rv =:',
    options: ['Rg + Rh', 'Rg Rh / (Rg + Rh)', 'Rh - Rg', 'None'],
    correctAnswer: 'Rg + Rh',
    explanation: 'Series combination.'
  },
  {
    id: 'ph-em-96',
    text: 'Which is a "Current sensitive" device?',
    options: ['Voltmeter', 'Galvanometer', 'Barometer', 'None'],
    correctAnswer: 'Galvanometer',
    explanation: 'Deflection is proportional to I.'
  },
  {
    id: 'ph-em-97',
    text: 'The magnetic force between two moving charges is due to _____ law.',
    options: ['Coulomb\'s', 'Biot-Savart / Ampere\'s', 'Newton\'s First', 'None'],
    correctAnswer: 'Biot-Savart / Ampere\'s',
    explanation: 'Describes magnetic fields from moving charges.'
  },
  {
    id: 'ph-em-98',
    text: 'If the current in a solenoid is reversed, the direction of magnetic field:',
    options: ['Stays same', 'Is reversed', 'Becomes circular', 'None'],
    correctAnswer: 'Is reversed',
    explanation: 'Based on right hand rule.'
  },
  {
    id: 'ph-em-99',
    text: 'The "Bright spot" on the CRO screen is caused by _____ of electrons.',
    options: ['Reflection', 'Impact', 'Diffraction', 'None'],
    correctAnswer: 'Impact',
    explanation: 'Converts kinetic energy to light.'
  },
  {
    id: 'ph-em-100',
    text: 'Electromagnetism is the unification of _____ and _____ phenomena.',
    options: ['Heat, Light', 'Electric, Magnetic', 'Mass, Energy', 'None'],
    correctAnswer: 'Electric, Magnetic',
    explanation: 'Formulated by Maxwell.'
  }
];
