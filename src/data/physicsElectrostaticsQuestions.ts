import { Question } from '../types';

export const PHYSICS_ELECTROSTATICS_QUIZ: Question[] = [
  {
    id: 'ph-es-1',
    text: 'Coulomb\'s Law states that the force between two point charges is _____ proportional to the product of charges and _____ proportional to the square of distance.',
    options: ['Directly, Inversely', 'Inversely, Directly', 'Directly, Directly', 'None'],
    correctAnswer: 'Directly, Inversely',
    explanation: 'F = k q1 q2 / r^2.'
  },
  {
    id: 'ph-es-2',
    text: 'The value of Coulomb\'s constant k in vacuum is approximately:',
    options: ['8.85 x 10^-12 N.m^2/C^2', '9 x 10^9 N.m^2/C^2', '1.6 x 10^-19 N.m^2/C^2', 'None'],
    correctAnswer: '9 x 10^9 N.m^2/C^2',
    explanation: 'k = 1 / (4πε0).'
  },
  {
    id: 'ph-es-3',
    text: 'The permittivity of free space ε0 has the unit:',
    options: ['C^2 / (N.m^2)', 'N.m^2 / C^2', 'Farad', 'None'],
    correctAnswer: 'C^2 / (N.m^2)',
    explanation: 'Reciprocal of unit of k.'
  },
  {
    id: 'ph-es-4',
    text: 'When a dielectric medium is placed between two charges, the Coulomb force:',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'F_med = F_vac / εr.'
  },
  {
    id: 'ph-es-5',
    text: 'Electric field intensity (E) at a point is defined as _____ per unit _____:',
    options: ['Work, Charge', 'Force, Charge', 'Energy, Area', 'None'],
    correctAnswer: 'Force, Charge',
    explanation: 'E = F / q.'
  },
  {
    id: 'ph-es-6',
    text: 'The SI unit of electric field intensity is:',
    options: ['Volt', 'N/C', 'V/m', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'N/C is force per charge; V/m is potential gradient.'
  },
  {
    id: 'ph-es-7',
    text: 'Electric field lines always originate from _____ charges and end on _____ charges.',
    options: ['Negative, Positive', 'Positive, Negative', 'Neutral, Positive', 'None'],
    correctAnswer: 'Positive, Negative',
    explanation: 'Standard convention for direction of E.'
  },
  {
    id: 'ph-es-8',
    text: 'The number of electric field lines passing through a certain area is called:',
    options: ['Electric Potential', 'Electric Flux (Φ)', 'Capacitance', 'None'],
    correctAnswer: 'Electric Flux (Φ)',
    explanation: 'Φ = E . A = EA cosθ.'
  },
  {
    id: 'ph-es-9',
    text: 'Gauss\'s Law states that the total flux through any closed surface is equal to _____ times the total charge enclosed.',
    options: ['ε0', '1/ε0', '4πε0', 'None'],
    correctAnswer: '1/ε0',
    explanation: 'Φ = Q / ε0.'
  },
  {
    id: 'ph-es-10',
    text: 'The electric field intensity inside a hollow charged sphere is:',
    options: ['Maximum', 'Minimum', 'Zero', 'Depends on radius'],
    correctAnswer: 'Zero',
    explanation: 'No charge is enclosed by a surface inside the hollow sphere.'
  },
  {
    id: 'ph-es-11',
    text: 'The electric field due to an infinite sheet of charge with surface density σ is E =:',
    options: ['σ / ε0', 'σ / 2ε0', '2σ / ε0', 'None'],
    correctAnswer: 'σ / 2ε0',
    explanation: 'Derived using Gauss\'s Law.'
  },
  {
    id: 'ph-es-12',
    text: 'Electric potential (V) at a point is the _____ done in bringing a unit positive charge from infinity to that point.',
    options: ['Force', 'Work', 'Pressure', 'None'],
    correctAnswer: 'Work',
    explanation: 'V = W / q.'
  },
  {
    id: 'ph-es-13',
    text: 'The SI unit of electric potential is:',
    options: ['Joule', 'Coulomb', 'Volt', 'Ampere'],
    correctAnswer: 'Volt',
    explanation: '1 V = 1 J/C.'
  },
  {
    id: 'ph-es-14',
    text: 'The change in potential per unit distance is called:',
    options: ['Potential energy', 'Potential gradient', 'Electric flux', 'None'],
    correctAnswer: 'Potential gradient',
    explanation: 'E = - ΔV / Δr.'
  },
  {
    id: 'ph-es-15',
    text: 'An electron volt (eV) is a unit of:',
    options: ['Potential', 'Charge', 'Energy', 'Power'],
    correctAnswer: 'Energy',
    explanation: '1 eV = 1.6 x 10^-19 J.'
  },
  {
    id: 'ph-es-16',
    text: 'A device used to store electric charge is a:',
    options: ['Resistor', 'Inductor', 'Capacitor / Condenser', 'Battery'],
    correctAnswer: 'Capacitor / Condenser',
    explanation: 'Consists of two conductors separated by an insulator.'
  },
  {
    id: 'ph-es-17',
    text: 'Capacitance (C) is defined as C =:',
    options: ['Q * V', 'Q / V', 'V / Q', 'None'],
    correctAnswer: 'Q / V',
    explanation: 'Charge stored per unit potential difference.'
  },
  {
    id: 'ph-es-18',
    text: 'The SI unit of capacitance is:',
    options: ['Coulomb', 'Volt', 'Farad (F)', 'Ohm'],
    correctAnswer: 'Farad (F)',
    explanation: '1 F = 1 C/V.'
  },
  {
    id: 'ph-es-19',
    text: 'The capacitance of a parallel plate capacitor is C =:',
    options: ['Aε0 / d', 'dε0 / A', 'Ad / ε0', 'None'],
    correctAnswer: 'Aε0 / d',
    explanation: 'Depends on area A and separation d.'
  },
  {
    id: 'ph-es-20',
    text: 'Placing a dielectric between the plates of a capacitor _____ its capacitance.',
    options: ['Decreases', 'Increases', 'Does not change', 'None'],
    correctAnswer: 'Increases',
    explanation: 'C_med = εr * C_vac.'
  },
  {
    id: 'ph-es-21',
    text: 'The energy stored in a capacitor is given by E =:',
    options: ['1/2 CV^2', '1/2 Q^2 / C', '1/2 QV', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Equivalent expressions.'
  },
  {
    id: 'ph-es-22',
    text: 'Electric field energy is stored in the _____ between the plates.',
    options: ['Plates', 'Dielectric / Space', 'Wires', 'None'],
    correctAnswer: 'Dielectric / Space',
    explanation: 'Energy is associated with the electric field itself.'
  },
  {
    id: 'ph-es-23',
    text: 'Electric field lines _____ cross each other.',
    options: ['Often', 'Never', 'Always', 'None'],
    correctAnswer: 'Never',
    explanation: 'Because at the intersection, there would be two directions of E, which is impossible.'
  },
  {
    id: 'ph-es-24',
    text: 'The torque on an electric dipole in a uniform electric field is τ =:',
    options: ['p . E', 'p × E', 'p / E', 'None'],
    correctAnswer: 'p × E',
    explanation: 'p is the dipole moment.'
  },
  {
    id: 'ph-es-25',
    text: 'Millikan\'s Oil Drop experiment was used to measure the _____ of an electron.',
    options: ['Mass', 'Charge', 'Radius', 'None'],
    correctAnswer: 'Charge',
    explanation: 'Found to be 1.6 x 10^-19 C.'
  },
  {
    id: 'ph-es-26',
    text: 'In Millikan\'s experiment, the electric force is balanced by:',
    options: ['Magnetic force', 'Gravitational force / Weight', 'Buoyant force', 'None'],
    correctAnswer: 'Gravitational force / Weight',
    explanation: 'qE = mg.'
  },
  {
    id: 'ph-es-27',
    text: 'Xerography (Photocopying) uses the property of _____ of a selenium drum.',
    options: ['Reflectivity', 'Photoconductivity', 'Radioactivity', 'None'],
    correctAnswer: 'Photoconductivity',
    explanation: 'Becomes a conductor when light falls on it.'
  },
  {
    id: 'ph-es-28',
    text: 'In an inkjet printer, the charging electrodes decide which drops _____ reach the paper.',
    options: ['Should', 'Should not', 'Are colored', 'None'],
    correctAnswer: 'Should not',
    explanation: 'Charged drops are deflected away by deflection plates.'
  },
  {
    id: 'ph-es-29',
    text: 'The electric potential at a distance r from a point charge q is V =:',
    options: ['kq/r', 'kq/r^2', 'kq r', 'None'],
    correctAnswer: 'kq/r',
    explanation: 'Scalar quantity.'
  },
  {
    id: 'ph-es-30',
    text: 'A surface on which the electric potential is the same everywhere is called:',
    options: ['Equipotential surface', 'Isobaric surface', 'Gaussian surface', 'None'],
    correctAnswer: 'Equipotential surface',
    explanation: 'No work is done in moving a charge along it.'
  },
  {
    id: 'ph-es-31',
    text: 'Electric field lines are always _____ to equipotential surfaces.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Perpendicular',
    explanation: 'Because work W = q ΔV = F . d; if ΔV = 0, F must be perpendicular to d.'
  },
  {
    id: 'ph-es-32',
    text: 'The ratio of the permittivity of a medium to the permittivity of free space is:',
    options: ['Absolute permittivity', 'Relative permittivity / Dielectric constant (εr)', 'Conductivity', 'None'],
    correctAnswer: 'Relative permittivity / Dielectric constant (εr)',
    explanation: 'εr = ε / ε0.'
  },
  {
    id: 'ph-es-33',
    text: 'Relative permittivity of air is approximately:',
    options: ['1.0006', '80', '2', 'None'],
    correctAnswer: '1.0006',
    explanation: 'Very close to vacuum (1).'
  },
  {
    id: 'ph-es-34',
    text: 'Relative permittivity of water is about:',
    options: ['1', '10', '80', 'None'],
    correctAnswer: '80',
    explanation: 'High value due to polar nature.'
  },
  {
    id: 'ph-es-35',
    text: 'Polarization of a dielectric involves the creation of tiny _____ within the material.',
    options: ['Monopoles', 'Dipoles', 'Electrons', 'None'],
    correctAnswer: 'Dipoles',
    explanation: 'Alignment of charges in response to E-field.'
  },
  {
    id: 'ph-es-36',
    text: 'Polarization _____ the net electric field between capacitor plates.',
    options: ['Increases', 'Reduces', 'Stops', 'None'],
    correctAnswer: 'Reduces',
    explanation: 'Induced charges produce an opposing field.'
  },
  {
    id: 'ph-es-37',
    text: 'The unit of electric flux Φ is:',
    options: ['N.m/C', 'N.m^2/C', 'Volt.m', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Derived from EA.'
  },
  {
    id: 'ph-es-38',
    text: 'If the charge on a capacitor is doubled, its capacitance:',
    options: ['Doubles', 'Is halved', 'Remains same', 'None'],
    correctAnswer: 'Remains same',
    explanation: 'C depends only on geometry and dielectric.'
  },
  {
    id: 'ph-es-39',
    text: 'Charge is quantized, meaning it exists only in integral multiples of _____:',
    options: ['1 C', '1.6 x 10^-19 C', '0.5 C', 'None'],
    correctAnswer: '1.6 x 10^-19 C',
    explanation: 'Elementary charge e.'
  },
  {
    id: 'ph-es-40',
    text: 'Which is a vector quantity?',
    options: ['Electric potential', 'Electric flux', 'Electric field intensity', 'Capacitance'],
    correctAnswer: 'Electric field intensity',
    explanation: 'Has both magnitude and direction.'
  },
  {
    id: 'ph-es-41',
    text: 'Two positive point charges are placed near each other. The electric field at the midpoint is:',
    options: ['Maximum', 'Zero', 'Sum of fields', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Fields cancel out if charges are equal.'
  },
  {
    id: 'ph-es-42',
    text: 'The electric potential energy of a system of two charges q1, q2 is U =:',
    options: ['k q1 q2 / r', 'k q1 q2 / r^2', '1/2 k x^2', 'None'],
    correctAnswer: 'k q1 q2 / r',
    explanation: 'Scalar energy.'
  },
  {
    id: 'ph-es-43',
    text: 'Which is a unit of energy?',
    options: ['Volt.Coulomb', 'Watt.second', 'eV', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Units related to work/energy.'
  },
  {
    id: 'ph-es-44',
    text: 'The electric field between two parallel oppositely charged plates is:',
    options: ['Zero', 'Uniform', 'Non-uniform', 'None'],
    correctAnswer: 'Uniform',
    explanation: 'Except near the edges.'
  },
  {
    id: 'ph-es-45',
    text: 'Intensity of field between two plates is E = _____:',
    options: ['V / d', 'V * d', 'Q / A', 'None'],
    correctAnswer: 'V / d',
    explanation: 'Relation between E and V.'
  },
  {
    id: 'ph-es-46',
    text: 'If an electron is accelerated through a potential difference of 100 V, its energy is:',
    options: ['100 J', '100 eV', '1.6 x 10^-17 J', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Conversion between eV and J.'
  },
  {
    id: 'ph-es-47',
    text: 'The "Time constant" of an RC circuit is τ =:',
    options: ['R + C', 'R / C', 'RC', 'None'],
    correctAnswer: 'RC',
    explanation: 'Time to charge to ~63% of maximum.'
  },
  {
    id: 'ph-es-48',
    text: 'During charging, a capacitor reaches maximum charge at t =:',
    options: ['RC', 'Zero', 'Infinity (theoretical)', 'None'],
    correctAnswer: 'Infinity (theoretical)',
    explanation: 'Exponential approach.'
  },
  {
    id: 'ph-es-49',
    text: 'The charge on 1 microfarad capacitor at 10 V is:',
    options: ['10 C', '10 microcoulombs', '0.1 C', 'None'],
    correctAnswer: '10 microcoulombs',
    explanation: 'Q = CV = 1e-6 * 10 = 10e-6 C.'
  },
  {
    id: 'ph-es-50',
    text: 'A "Farad" is a very _____ unit of capacitance.',
    options: ['Small', 'Large', 'Common', 'None'],
    correctAnswer: 'Large',
    explanation: 'Most practical capacitors are in micro, nano, or picofarad range.'
  },
  {
    id: 'ph-es-51',
    text: 'Coulomb force is _____ in nature.',
    options: ['Only attractive', 'Only repulsive', 'Both attractive and repulsive', 'None'],
    correctAnswer: 'Both attractive and repulsive',
    explanation: 'Depends on the signs of charges.'
  },
  {
    id: 'ph-es-52',
    text: 'Gravitational force is _____ in nature.',
    options: ['Only attractive', 'Only repulsive', 'Both', 'None'],
    correctAnswer: 'Only attractive',
    explanation: 'Masses always attract.'
  },
  {
    id: 'ph-es-53',
    text: 'Coulomb force is much _____ than gravitational force for atomic particles.',
    options: ['Weaker', 'Stronger', 'Same', 'None'],
    correctAnswer: 'Stronger',
    explanation: 'Ratio Fe/Fg for two electrons is ~10^42.'
  },
  {
    id: 'ph-es-54',
    text: 'Both Coulomb and Gravitational forces follow the _____ law.',
    options: ['Inverse square', 'Direct square', 'Linear', 'None'],
    correctAnswer: 'Inverse square',
    explanation: 'F ∝ 1/r^2.'
  },
  {
    id: 'ph-es-55',
    text: 'Coulomb force is medium dependent, while Gravitational force is _____:',
    options: ['Also dependent', 'Independent', 'Stronger in water', 'None'],
    correctAnswer: 'Independent',
    explanation: 'Gravity is not affected by materials between masses.'
  },
  {
    id: 'ph-es-56',
    text: 'Which is NOT a unit of electric field?',
    options: ['N/C', 'V/m', 'J/C.m', 'J/C'],
    correctAnswer: 'J/C',
    explanation: 'J/C is Volt, which is unit of potential.'
  },
  {
    id: 'ph-es-57',
    text: 'The energy density of an electric field in a vacuum is u =:',
    options: ['1/2 ε0 E^2', 'ε0 E^2', '1/2 CV^2', 'None'],
    correctAnswer: '1/2 ε0 E^2',
    explanation: 'Energy per unit volume.'
  },
  {
    id: 'ph-es-58',
    text: 'A point charge is moved around a circular path centered at another point charge. Work done is:',
    options: ['Maximum', 'Minimum', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Potential is same everywhere on the path (equipotential).'
  },
  {
    id: 'ph-es-59',
    text: 'Electric potential _____ in the direction of electric field lines.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Field points from high to low potential.'
  },
  {
    id: 'ph-es-60',
    text: 'If q is negative, the potential V = kq/r is _____:',
    options: ['Positive', 'Negative', 'Zero', 'None'],
    correctAnswer: 'Negative',
    explanation: 'Potential near a negative charge is negative.'
  },
  {
    id: 'ph-es-61',
    text: 'The electric field of a dipole at large distances drops as:',
    options: ['1/r', '1/r^2', '1/r^3', 'None'],
    correctAnswer: '1/r^3',
    explanation: 'Faster than a point charge (1/r^2).'
  },
  {
    id: 'ph-es-62',
    text: 'The potential of a dipole at large distances drops as:',
    options: ['1/r', '1/r^2', '1/r^3', 'None'],
    correctAnswer: '1/r^2',
    explanation: 'Point charge potential is 1/r.'
  },
  {
    id: 'ph-es-63',
    text: 'Charging by _____ involves physical contact between a charged and neutral body.',
    options: ['Induction', 'Conduction', 'Radiation', 'None'],
    correctAnswer: 'Conduction',
    explanation: 'Charges transfer directly.'
  },
  {
    id: 'ph-es-64',
    text: 'Charging by _____ occurs without contact, by redistribution of charges.',
    options: ['Conduction', 'Induction', 'Friction', 'None'],
    correctAnswer: 'Induction',
    explanation: 'Requires a ground connection to make it permanent.'
  },
  {
    id: 'ph-es-65',
    text: 'In a region of constant potential, the electric field is:',
    options: ['Maximum', 'Zero', 'Minimum', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'E = -dV/dr; if V is constant, derivative is zero.'
  },
  {
    id: 'ph-es-66',
    text: 'The capacitance of a sphere of radius R is C =:',
    options: ['4πε0 R', 'R / 4πε0', '4πε0 R^2', 'None'],
    correctAnswer: '4πε0 R',
    explanation: 'Derived from V = kQ/R.'
  },
  {
    id: 'ph-es-67',
    text: 'If capacitors are connected in parallel, the total capacitance is _____ of individual capacitances.',
    options: ['Sum', 'Reciprocal sum', 'Average', 'None'],
    correctAnswer: 'Sum',
    explanation: 'Ceq = C1 + C2 + ...'
  },
  {
    id: 'ph-es-68',
    text: 'If capacitors are connected in series, the _____ is the same for all.',
    options: ['Potential', 'Charge', 'Energy', 'None'],
    correctAnswer: 'Charge',
    explanation: 'Q1 = Q2 = ... = Qeq.'
  },
  {
    id: 'ph-es-69',
    text: 'The total capacitance in series is _____ than the smallest individual capacitance.',
    options: ['Larger', 'Smaller', 'Equal', 'None'],
    correctAnswer: 'Smaller',
    explanation: '1/Ceq = 1/C1 + 1/C2 + ...'
  },
  {
    id: 'ph-es-70',
    text: 'Dielectric strength is the maximum _____ a material can withstand without breakdown.',
    options: ['Charge', 'Potential', 'Electric field', 'Current'],
    correctAnswer: 'Electric field',
    explanation: 'Unit is V/m.'
  },
  {
    id: 'ph-es-71',
    text: 'Metals are good conductors because they have many _____ electrons.',
    options: ['Valence', 'Free', 'Inner', 'None'],
    correctAnswer: 'Free',
    explanation: 'Not bound to any single atom.'
  },
  {
    id: 'ph-es-72',
    text: 'A "Point Charge" is an idealization where charge is concentrated at a:',
    options: ['Large sphere', 'Geometric point', 'Line', 'None'],
    correctAnswer: 'Geometric point',
    explanation: 'Size is negligible compared to distance.'
  },
  {
    id: 'ph-es-73',
    text: 'Coulomb force is a _____ force.',
    options: ['Conservative', 'Non-conservative', 'Frictional', 'None'],
    correctAnswer: 'Conservative',
    explanation: 'Work done in a closed path is zero.'
  },
  {
    id: 'ph-es-74',
    text: 'The work done by an external agent to move q from A to B is ΔU =:',
    options: ['q(VB - VA)', 'q(VA - VB)', 'qV', 'None'],
    correctAnswer: 'q(VB - VA)',
    explanation: 'Change in potential energy.'
  },
  {
    id: 'ph-es-75',
    text: 'Electric dipole moment p = q * d. Its unit is:',
    options: ['C.m', 'C/m', 'N.C', 'None'],
    correctAnswer: 'C.m',
    explanation: 'Charge times distance.'
  },
  {
    id: 'ph-es-76',
    text: 'Electric potential of the Earth is taken as:',
    options: ['Zero', 'Maximum', '100 V', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Standard reference (ground).'
  },
  {
    id: 'ph-es-77',
    text: 'Which is an application of Gauss\'s Law?',
    options: ['Field of a point charge', 'Field of a charged sphere', 'Field of a charged wire', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Simplifies field calculations for symmetric charge distributions.'
  },
  {
    id: 'ph-es-78',
    text: 'A "Farad" is equivalent to:',
    options: ['J / V', 'C / V', 'V / C', 'None'],
    correctAnswer: 'C / V',
    explanation: 'From Q = CV.'
  },
  {
    id: 'ph-es-79',
    text: 'Energy stored in a capacitor with a dielectric (εr) is _____ times the energy without it (for constant charge).',
    options: ['εr', '1 / εr', 'εr^2', 'None'],
    correctAnswer: '1 / εr',
    explanation: 'U = Q^2 / 2C; C increases, so U decreases.'
  },
  {
    id: 'ph-es-80',
    text: 'Energy stored in a capacitor with a dielectric (εr) is _____ times the energy without it (for constant potential).',
    options: ['εr', '1 / εr', 'εr^2', 'None'],
    correctAnswer: 'εr',
    explanation: 'U = 1/2 CV^2; C increases, so U increases.'
  },
  {
    id: 'ph-es-81',
    text: 'One microfarad is _____ Farads.',
    options: ['10^-3', '10^-6', '10^-9', '10^-12'],
    correctAnswer: '10^-6',
    explanation: 'Prefix micro- means one millionth.'
  },
  {
    id: 'ph-es-82',
    text: 'One picofarad is _____ Farads.',
    options: ['10^-6', '10^-9', '10^-12', '10^-15'],
    correctAnswer: '10^-12',
    explanation: 'Prefix pico-.'
  },
  {
    id: 'ph-es-83',
    text: 'Which of the following cannot be used as a dielectric?',
    options: ['Mica', 'Glass', 'Copper', 'Rubber'],
    correctAnswer: 'Copper',
    explanation: 'Dielectric must be an insulator.'
  },
  {
    id: 'ph-es-84',
    text: 'Electric lines of force are _____ in a uniform field.',
    options: ['Curved', 'Parallel and equally spaced', 'Diverging', 'None'],
    correctAnswer: 'Parallel and equally spaced',
    explanation: 'Represents constant E.'
  },
  {
    id: 'ph-es-85',
    text: 'A proton and an electron are placed in the same electric field. The _____ will experience a larger acceleration.',
    options: ['Proton', 'Electron', 'Both same', 'None'],
    correctAnswer: 'Electron',
    explanation: 'Forces are equal (qE), but electron has much smaller mass (a = F/m).'
  },
  {
    id: 'ph-es-86',
    text: 'Which is a "Polar" dielectric?',
    options: ['Water', 'Oxygen', 'Nitrogen', 'None'],
    correctAnswer: 'Water',
    explanation: 'Molecules have permanent dipole moments.'
  },
  {
    id: 'ph-es-87',
    text: 'Which is a "Non-polar" dielectric?',
    options: ['Water', 'Ammonia', 'Carbon dioxide', 'None'],
    correctAnswer: 'Carbon dioxide',
    explanation: 'Molecules have zero net dipole moment in absence of field.'
  },
  {
    id: 'ph-es-88',
    text: 'The electric flux through a surface parallel to electric field lines is:',
    options: ['Maximum', 'Zero', 'Half', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Angle between E and Normal vector A is 90°; cos 90° = 0.'
  },
  {
    id: 'ph-es-89',
    text: 'The electric flux through a surface perpendicular to electric field lines is:',
    options: ['Maximum', 'Zero', 'Minimum', 'None'],
    correctAnswer: 'Maximum',
    explanation: 'Angle is 0°; cos 0° = 1.'
  },
  {
    id: 'ph-es-90',
    text: 'If a charge is placed outside a closed surface, the net flux through the surface is:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on charge'],
    correctAnswer: 'Zero',
    explanation: 'Lines entering the surface must also exit it.'
  },
  {
    id: 'ph-es-91',
    text: 'Potential at a point infinitely far from a positive charge is:',
    options: ['Maximum', 'Positive', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'V = kq/r; as r -> ∞, V -> 0.'
  },
  {
    id: 'ph-es-92',
    text: 'The work done in moving a charge of 2 C through a potential difference of 5 V is:',
    options: ['2.5 J', '7 J', '10 J', 'None'],
    correctAnswer: '10 J',
    explanation: 'W = qV = 2 * 5 = 10 J.'
  },
  {
    id: 'ph-es-93',
    text: 'A "Thunderstorm" involves massive build-up of _____ in clouds.',
    options: ['Water', 'Static charge', 'Pressure', 'None'],
    correctAnswer: 'Static charge',
    explanation: 'Leads to lightning discharge.'
  },
  {
    id: 'ph-es-94',
    text: 'A lightning conductor is a _____ rod with _____ ends.',
    options: ['Insulating, Round', 'Conducting, Sharp', 'Heavy, Flat', 'None'],
    correctAnswer: 'Conducting, Sharp',
    explanation: 'Sharp ends facilitate discharge and prevent damage.'
  },
  {
    id: 'ph-es-95',
    text: 'Which law is used to find the electric field near a charged conductor?',
    options: ['Coulomb\'s Law', 'Gauss\'s Law', 'Ohm\'s Law', 'None'],
    correctAnswer: 'Gauss\'s Law',
    explanation: 'Most efficient method for symmetric systems.'
  },
  {
    id: 'ph-es-96',
    text: 'The dimension of charge is:',
    options: ['[AT]', '[MLT]', '[IT^2]', 'None'],
    correctAnswer: '[AT]',
    explanation: 'Current * Time.'
  },
  {
    id: 'ph-es-97',
    text: 'Potential energy of a charge q in potential V is:',
    options: ['q/V', 'V/q', 'qV', 'None'],
    correctAnswer: 'qV',
    explanation: 'Definition of potential.'
  },
  {
    id: 'ph-es-98',
    text: 'If d is doubled for a parallel plate capacitor, its capacitance:',
    options: ['Doubles', 'Is halved', 'Four times', 'None'],
    correctAnswer: 'Is halved',
    explanation: 'C ∝ 1/d.'
  },
  {
    id: 'ph-es-99',
    text: 'Which is a vector quantity?',
    options: ['Dipole moment', 'Electric field', 'Force', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'All have magnitude and direction.'
  },
  {
    id: 'ph-es-100',
    text: 'Electrostatics is the study of charges at:',
    options: ['Rest', 'Motion', 'Vacuum', 'High speed'],
    correctAnswer: 'Rest',
    explanation: 'Branch of electromagnetism.'
  }
];
