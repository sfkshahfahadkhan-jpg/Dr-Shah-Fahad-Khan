import { Question } from '../types';

export const PHYSICS_INDUCTION_QUIZ: Question[] = [
  {
    id: 'ph-ei-1',
    text: 'The production of EMF in a conductor due to change in magnetic flux is called:',
    options: ['Electromagnetic induction', 'Self induction', 'Mutual induction', 'None'],
    correctAnswer: 'Electromagnetic induction',
    explanation: 'Discovered independently by Faraday and Henry.'
  },
  {
    id: 'ph-ei-2',
    text: 'The EMF induced in a moving conductor of length L with velocity v in magnetic field B is:',
    options: ['ε = -vBL sinθ', 'ε = -vBL cosθ', 'ε = -BL/v', 'None'],
    correctAnswer: 'ε = -vBL sinθ',
    explanation: 'Motional EMF formula.'
  },
  {
    id: 'ph-ei-3',
    text: 'Faraday\'s Law states that induced EMF is equal to the negative rate of change of:',
    options: ['Current', 'Magnetic flux (Φ)', 'Magnetic field (B)', 'None'],
    correctAnswer: 'Magnetic flux (Φ)',
    explanation: 'ε = -N ΔΦ / Δt.'
  },
  {
    id: 'ph-ei-4',
    text: 'The negative sign in Faraday\'s law represents _____ Law.',
    options: ['Ampere\'s', 'Lenz\'s', 'Coulomb\'s', 'None'],
    correctAnswer: 'Lenz\'s',
    explanation: 'Indicates the direction of induced EMF.'
  },
  {
    id: 'ph-ei-5',
    text: 'Lenz\'s Law states that the direction of induced current is such that it _____ the change that produced it.',
    options: ['Supports', 'Opposes', 'Ignores', 'None'],
    correctAnswer: 'Opposes',
    explanation: 'Based on the law of conservation of energy.'
  },
  {
    id: 'ph-ei-6',
    text: 'If a magnet is moved toward a coil, the work done against the magnetic repulsion is converted into:',
    options: ['Heat', 'Light', 'Electrical energy (Induced current)', 'None'],
    correctAnswer: 'Electrical energy (Induced current)',
    explanation: 'Energy cannot be created without doing work.'
  },
  {
    id: 'ph-ei-7',
    text: 'The phenomenon in which a changing current in one coil induces an EMF in a neighboring coil is:',
    options: ['Self induction', 'Mutual induction', 'Eddy current', 'None'],
    correctAnswer: 'Mutual induction',
    explanation: 'ε_s = -M ΔI_p / Δt.'
  },
  {
    id: 'ph-ei-8',
    text: 'The SI unit of mutual inductance (M) is:',
    options: ['Weber', 'Tesla', 'Henry (H)', 'Ohm'],
    correctAnswer: 'Henry (H)',
    explanation: '1 H = 1 V.s / A.'
  },
  {
    id: 'ph-ei-9',
    text: 'The phenomenon in which a changing current in a coil induces an EMF in the same coil is:',
    options: ['Self induction', 'Mutual induction', 'Back EMF', 'None'],
    correctAnswer: 'Self induction',
    explanation: 'ε = -L ΔI / Δt.'
  },
  {
    id: 'ph-ei-10',
    text: 'The self-inductance L of a solenoid depends on its _____ and _____.',
    options: ['Current, Time', 'Geometry (N, A, l), Core material', 'Color, Weight', 'None'],
    correctAnswer: 'Geometry (N, A, l), Core material',
    explanation: 'L = μ0 n^2 A l.'
  },
  {
    id: 'ph-ei-11',
    text: 'Energy stored in an inductor carrying current I is U =:',
    options: ['1/2 LI^2', '1/2 CV^2', '1/2 QV', 'None'],
    correctAnswer: '1/2 LI^2',
    explanation: 'Stored in the magnetic field.'
  },
  {
    id: 'ph-ei-12',
    text: 'Magnetic energy density in an inductor is u =:',
    options: ['B^2 / (2μ0)', '1/2 μ0 B^2', '1/2 ε0 E^2', 'None'],
    correctAnswer: 'B^2 / (2μ0)',
    explanation: 'Energy per unit volume.'
  },
  {
    id: 'ph-ei-13',
    text: 'An A.C. Generator converts _____ energy into _____ energy.',
    options: ['Electrical, Mechanical', 'Mechanical, Electrical', 'Heat, Light', 'None'],
    correctAnswer: 'Mechanical, Electrical',
    explanation: 'Works on electromagnetic induction.'
  },
  {
    id: 'ph-ei-14',
    text: 'The EMF produced by an A.C. generator is ε =:',
    options: ['NABω sin(ωt)', 'NABω cos(ωt)', 'NABω', 'None'],
    correctAnswer: 'NABω sin(ωt)',
    explanation: 'where ω is angular velocity.'
  },
  {
    id: 'ph-ei-15',
    text: 'In an A.C. generator, _____ are used to connect the rotating coil to the external circuit.',
    options: ['Commutators', 'Slip rings', 'Springs', 'None'],
    correctAnswer: 'Slip rings',
    explanation: 'Maintain continuous connection as coil rotates.'
  },
  {
    id: 'ph-ei-16',
    text: 'A D.C. Generator uses _____ instead of slip rings to provide unidirectional current.',
    options: ['Brushes', 'Commutators (Split rings)', 'Bearings', 'None'],
    correctAnswer: 'Commutators (Split rings)',
    explanation: 'Reverses connections every half cycle.'
  },
  {
    id: 'ph-ei-17',
    text: 'An electric motor converts _____ energy into _____ energy.',
    options: ['Mechanical, Electrical', 'Electrical, Mechanical', 'Solar, Chemical', 'None'],
    correctAnswer: 'Electrical, Mechanical',
    explanation: 'Opposite of a generator.'
  },
  {
    id: 'ph-ei-18',
    text: 'The EMF induced in a rotating motor that opposes the applied voltage is called:',
    options: ['Forward EMF', 'Back EMF', 'Self EMF', 'None'],
    correctAnswer: 'Back EMF',
    explanation: 'V = ε + IR.'
  },
  {
    id: 'ph-ei-19',
    text: 'If a motor is overloaded, its speed decreases, back EMF decreases, and current _____:',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'May lead to burning of the motor windings.'
  },
  {
    id: 'ph-ei-20',
    text: 'A device used to increase or decrease A.C. voltage is a:',
    options: ['Capacitor', 'Inductor', 'Transformer', 'Resistor'],
    correctAnswer: 'Transformer',
    explanation: 'Works on mutual induction.'
  },
  {
    id: 'ph-ei-21',
    text: 'Transformers only work with _____ current.',
    options: ['Direct (D.C.)', 'Alternating (A.C.)', 'Steady', 'None'],
    correctAnswer: 'Alternating (A.C.)',
    explanation: 'Requires a changing magnetic flux.'
  },
  {
    id: 'ph-ei-22',
    text: 'In a "Step-up" transformer, the number of turns in secondary (Ns) is _____ than primary (Np).',
    options: ['Less', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'Vs / Vp = Ns / Np.'
  },
  {
    id: 'ph-ei-23',
    text: 'In an ideal transformer, the output power is _____ the input power.',
    options: ['Greater than', 'Less than', 'Equal to', 'None'],
    correctAnswer: 'Equal to',
    explanation: 'Vp Ip = Vs Is.'
  },
  {
    id: 'ph-ei-24',
    text: 'Energy loss in transformers due to heating of the core by induced currents is called:',
    options: ['Hysteresis loss', 'Eddy current loss', 'Copper loss', 'None'],
    correctAnswer: 'Eddy current loss',
    explanation: 'Reduced by using laminated cores.'
  },
  {
    id: 'ph-ei-25',
    text: 'Energy loss in transformers due to the resistance of the windings is:',
    options: ['Eddy current loss', 'Copper loss', 'Flux leakage', 'None'],
    correctAnswer: 'Copper loss',
    explanation: 'Minimized by using thick wires.'
  },
  {
    id: 'ph-ei-26',
    text: 'Induced EMF depends on the _____ of the magnetic field.',
    options: ['Strength', 'Rate of change', 'Color', 'None'],
    correctAnswer: 'Rate of change',
    explanation: 'ε ∝ ΔΦ / Δt.'
  },
  {
    id: 'ph-ei-27',
    text: 'Motional EMF is produced when a conductor moves _____ to magnetic field lines.',
    options: ['Parallel', 'Across (Cutting)', 'Along', 'None'],
    correctAnswer: 'Across (Cutting)',
    explanation: 'Maximum when perpendicular.'
  },
  {
    id: 'ph-ei-28',
    text: 'The unit "Henry" is equivalent to:',
    options: ['Wb / A', 'V.s / A', 'Ω.s', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Consistent unit conversions.'
  },
  {
    id: 'ph-ei-29',
    text: 'If the number of turns in a coil is doubled, its self-inductance L becomes:',
    options: ['2 times', '4 times', 'Half', 'None'],
    correctAnswer: '4 times',
    explanation: 'L ∝ N^2.'
  },
  {
    id: 'ph-ei-30',
    text: 'Self-induced EMF is also called _____ EMF because it opposes current change.',
    options: ['Forward', 'Back / Opposing', 'Neutral', 'None'],
    correctAnswer: 'Back / Opposing',
    explanation: 'Acts like "Electrical Inertia".'
  },
  {
    id: 'ph-ei-31',
    text: 'Induced current I = ε / R. If resistance R is doubled, the induced current is:',
    options: ['Doubled', 'Halved', 'Four times', 'None'],
    correctAnswer: 'Halved',
    explanation: 'Ohm\'s Law application.'
  },
  {
    id: 'ph-ei-32',
    text: 'Mutual inductance depends on the _____ of the two coils.',
    options: ['Separation', 'Orientation', 'Number of turns', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Determines flux linkage.'
  },
  {
    id: 'ph-ei-33',
    text: 'Which type of core increases the inductance of a coil?',
    options: ['Air', 'Plastic', 'Soft iron', 'None'],
    correctAnswer: 'Soft iron',
    explanation: 'High permeability concentrates flux.'
  },
  {
    id: 'ph-ei-34',
    text: 'The frequency of A.C. in Pakistan is:',
    options: ['50 Hz', '60 Hz', '100 Hz', 'None'],
    correctAnswer: '50 Hz',
    explanation: 'Standard for the region.'
  },
  {
    id: 'ph-ei-35',
    text: 'In an A.C. generator, the maximum EMF ε0 is reached when the coil plane is _____ to B.',
    options: ['Parallel', 'Perpendicular', 'At 45 degrees', 'None'],
    correctAnswer: 'Parallel',
    explanation: 'At this point, the sides of the coil are moving perpendicular to B (cutting flux fastest).'
  },
  {
    id: 'ph-ei-36',
    text: 'In an A.C. generator, the EMF is zero when the coil plane is _____ to B.',
    options: ['Parallel', 'Perpendicular', 'None', 'All time'],
    correctAnswer: 'Perpendicular',
    explanation: 'Sides are moving parallel to B (no flux cutting).'
  },
  {
    id: 'ph-ei-37',
    text: 'To get a smoother D.C. output from a generator, we use:',
    options: ['Fewer turns', 'Multiple coils and commutators', 'Larger magnets', 'None'],
    correctAnswer: 'Multiple coils and commutators',
    explanation: 'Reduces "Ripple".'
  },
  {
    id: 'ph-ei-38',
    text: 'Laminated core in transformers is used to reduce:',
    options: ['Copper loss', 'Eddy current loss', 'Hysteresis', 'None'],
    correctAnswer: 'Eddy current loss',
    explanation: 'Layers of insulation break up large current loops.'
  },
  {
    id: 'ph-ei-39',
    text: 'Hysteresis loss in a transformer core is due to _____ of the material.',
    options: ['Resistance', 'Repeated magnetization and demagnetization', 'Weight', 'None'],
    correctAnswer: 'Repeated magnetization and demagnetization',
    explanation: 'Molecular friction in aligning domains.'
  },
  {
    id: 'ph-ei-40',
    text: 'Efficiency of a transformer is η =:',
    options: ['Input / Output', 'Output power / Input power', 'Vp / Vs', 'None'],
    correctAnswer: 'Output power / Input power',
    explanation: 'P_out / P_in * 100%.'
  },
  {
    id: 'ph-ei-41',
    text: 'Electric power is transmitted over long distances at _____ voltage to reduce _____ loss.',
    options: ['Low, Copper', 'High, I^2R (Line)', 'Medium, Flux', 'None'],
    correctAnswer: 'High, I^2R (Line)',
    explanation: 'High V means low I for same power, thus lower heating losses.'
  },
  {
    id: 'ph-ei-42',
    text: 'Transformer core is made of _____ because of its low hysteresis loss.',
    options: ['Steel', 'Soft iron / Silicon steel', 'Copper', 'Aluminum'],
    correctAnswer: 'Soft iron / Silicon steel',
    explanation: 'Easily magnetized and demagnetized.'
  },
  {
    id: 'ph-ei-43',
    text: 'The quantity L/R has the dimension of:',
    options: ['Force', 'Time', 'Mass', 'Current'],
    correctAnswer: 'Time',
    explanation: 'Time constant of an RL circuit.'
  },
  {
    id: 'ph-ei-44',
    text: 'A "Choke" is an inductor with high _____ and low _____.',
    options: ['Resistance, Inductance', 'Inductance, Resistance', 'Capacitance, Inductance', 'None'],
    correctAnswer: 'Inductance, Resistance',
    explanation: 'Used to limit A.C. current without much energy loss.'
  },
  {
    id: 'ph-ei-45',
    text: 'When the primary of a transformer is connected to D.C., the secondary EMF is:',
    options: ['Infinite', 'Zero', 'Same as primary', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Constant current produces constant flux; no induction.'
  },
  {
    id: 'ph-ei-46',
    text: 'Induced EMF exists as long as there is _____ in magnetic flux.',
    options: ['Presence', 'Change', 'Zero', 'None'],
    correctAnswer: 'Change',
    explanation: 'Crucial for induction.'
  },
  {
    id: 'ph-ei-47',
    text: 'Lenz\'s law is consistent with the law of conservation of:',
    options: ['Momentum', 'Energy', 'Charge', 'Mass'],
    correctAnswer: 'Energy',
    explanation: 'Opposition ensures that work is done to produce energy.'
  },
  {
    id: 'ph-ei-48',
    text: 'The motional EMF of a conductor is independent of its:',
    options: ['Length', 'Speed', 'Resistance', 'Magnetic field'],
    correctAnswer: 'Resistance',
    explanation: 'ε = vBL. Induced current depends on R, but EMF does not.'
  },
  {
    id: 'ph-ei-49',
    text: 'A coil of area 0.1 m^2 is in a field of 1 T. If the field is removed in 0.1 s, the induced EMF is:',
    options: ['0.1 V', '1 V', '10 V', 'None'],
    correctAnswer: '1 V',
    explanation: 'ε = ΔΦ / Δt = (1 * 0.1) / 0.1 = 1 V.'
  },
  {
    id: 'ph-ei-50',
    text: 'A step-down transformer has Np = 100, Ns = 10. If Vp = 220 V, then Vs is:',
    options: ['2200 V', '22 V', '110 V', 'None'],
    correctAnswer: '22 V',
    explanation: 'Vs = Vp * (Ns / Np) = 220 * 0.1 = 22 V.'
  },
  {
    id: 'ph-ei-51',
    text: 'The coefficient of coupling K between two coils is maximum when they are:',
    options: ['Far apart', 'Perpendicular', 'Coaxial and close', 'None'],
    correctAnswer: 'Coaxial and close',
    explanation: 'Maximum flux linkage.'
  },
  {
    id: 'ph-ei-52',
    text: 'Eddy currents are produced in a _____ when it is placed in a changing magnetic field.',
    options: ['Insulator', 'Bulk conductor / Metal plate', 'Liquid', 'None'],
    correctAnswer: 'Bulk conductor / Metal plate',
    explanation: 'Localized loops of induced current.'
  },
  {
    id: 'ph-ei-53',
    text: 'Eddy currents are useful in:',
    options: ['Induction furnaces', 'Magnetic braking', 'Dead beat galvanometers', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Various practical applications.'
  },
  {
    id: 'ph-ei-54',
    text: 'The inductance of two coils in series is L = L1 + L2 (assuming no mutual linkage). If linked, it is L1 + L2 _____ 2M.',
    options: ['+', '-', '±', 'None'],
    correctAnswer: '±',
    explanation: 'Depends on whether fields support or oppose each other.'
  },
  {
    id: 'ph-ei-55',
    text: 'A "Back EMF" in a motor is _____ when the motor is starting.',
    options: ['Maximum', 'Zero', 'Negative', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Because speed v = 0.'
  },
  {
    id: 'ph-ei-56',
    text: 'The unit of flux linkage NΦ is:',
    options: ['Tesla', 'Weber-turn', 'Henry', 'None'],
    correctAnswer: 'Weber-turn',
    explanation: 'Total flux passing through N turns.'
  },
  {
    id: 'ph-ei-57',
    text: 'If a transformer is 100% efficient, Vs Is = Vp Ip. If it is 80%, then Vs Is =:',
    options: ['0.8 Vp Ip', '1.25 Vp Ip', 'Vp Ip', 'None'],
    correctAnswer: '0.8 Vp Ip',
    explanation: 'Standard efficiency calculation.'
  },
  {
    id: 'ph-ei-58',
    text: 'Step-up transformer _____ voltage and _____ current.',
    options: ['Increases, Decreases', 'Increases, Increases', 'Decreases, Increases', 'None'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Power remains constant (ideally).'
  },
  {
    id: 'ph-ei-59',
    text: 'Step-down transformer _____ voltage and _____ current.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Decreases, Decreases', 'None'],
    correctAnswer: 'Decreases, Increases',
    explanation: 'Used in phone chargers and welding.'
  },
  {
    id: 'ph-ei-60',
    text: 'The "Magnetic Flux Leakage" in a transformer is reduced by:',
    options: ['Using thicker wires', 'Winding secondary over the primary', 'Using more oil', 'None'],
    correctAnswer: 'Winding secondary over the primary',
    explanation: 'Better coupling.'
  },
  {
    id: 'ph-ei-61',
    text: 'Alternating current varies _____ with time.',
    options: ['Linearly', 'Sinusoidally', 'Exponentially', 'None'],
    correctAnswer: 'Sinusoidally',
    explanation: 'Due to circular motion of coil.'
  },
  {
    id: 'ph-ei-62',
    text: 'The time taken to complete one cycle is:',
    options: ['Frequency', 'Period (T)', 'Phase', 'None'],
    correctAnswer: 'Period (T)',
    explanation: 'T = 1 / f.'
  },
  {
    id: 'ph-ei-63',
    text: 'Number of cycles per second is:',
    options: ['Period', 'Frequency (f)', 'Angular speed', 'None'],
    correctAnswer: 'Frequency (f)',
    explanation: 'Measured in Hertz (Hz).'
  },
  {
    id: 'ph-ei-64',
    text: 'If ω = 314 rad/s, the frequency is about:',
    options: ['50 Hz', '60 Hz', '100 Hz', 'None'],
    correctAnswer: '50 Hz',
    explanation: 'ω = 2πf -> 314 / (2 * 3.14) = 50.'
  },
  {
    id: 'ph-ei-65',
    text: 'Motional EMF ε = -vBL sinθ. If conductor moves parallel to B, EMF is:',
    options: ['Maximum', 'Zero', 'Negative', 'None'],
    correctAnswer: 'Zero',
    explanation: 'θ = 0, sin 0 = 0.'
  },
  {
    id: 'ph-ei-66',
    text: 'Induced current flows as long as the circuit is:',
    options: ['Open', 'Closed', 'Broken', 'None'],
    correctAnswer: 'Closed',
    explanation: 'EMF exists in open circuit too, but no current.'
  },
  {
    id: 'ph-ei-67',
    text: 'Which is an application of induction?',
    options: ['Induction cooker', 'Dynamic microphone', 'Metal detector', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Versatile uses of EMF induction.'
  },
  {
    id: 'ph-ei-68',
    text: 'Inductance is the property of a circuit that opposes change in:',
    options: ['Voltage', 'Current', 'Magnetic flux', 'None'],
    correctAnswer: 'Current',
    explanation: 'Electrical equivalent of mass.'
  },
  {
    id: 'ph-ei-69',
    text: 'The core of a transformer provides a path for _____ flux.',
    options: ['Electric', 'Magnetic', 'Thermal', 'None'],
    correctAnswer: 'Magnetic',
    explanation: 'Links primary and secondary.'
  },
  {
    id: 'ph-ei-70',
    text: 'The "Turns Ratio" of a transformer is Ns / Np. If this is 50, it is a _____ transformer.',
    options: ['Step-up', 'Step-down', 'Isolation', 'None'],
    correctAnswer: 'Step-up',
    explanation: 'Vs > Vp.'
  },
  {
    id: 'ph-ei-71',
    text: 'A "Dead beat" galvanometer uses _____ to stop oscillations.',
    options: ['Air friction', 'Eddy current damping', 'Springs', 'None'],
    correctAnswer: 'Eddy current damping',
    explanation: 'Aluminum frame produces eddy currents.'
  },
  {
    id: 'ph-ei-72',
    text: 'The energy stored in an inductor is associated with its:',
    options: ['Electric field', 'Magnetic field', 'Gravitational field', 'None'],
    correctAnswer: 'Magnetic field',
    explanation: 'Field is created by moving charges.'
  },
  {
    id: 'ph-ei-73',
    text: 'One Weber is equivalent to one _____:',
    options: ['Tesla / m^2', 'Tesla . m^2', 'Volt . second', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Flux unit relations.'
  },
  {
    id: 'ph-ei-74',
    text: 'Self-inductance of a coil is 2 H. If current changes at 1 A/s, the induced EMF is:',
    options: ['0.5 V', '1 V', '2 V', 'None'],
    correctAnswer: '2 V',
    explanation: 'ε = L ΔI/Δt = 2 * 1 = 2 V.'
  },
  {
    id: 'ph-ei-75',
    text: 'The "Transformer" works on the principle of _____ induction.',
    options: ['Self', 'Mutual', 'Static', 'None'],
    correctAnswer: 'Mutual',
    explanation: 'Primary to secondary linkage.'
  },
  {
    id: 'ph-ei-76',
    text: 'In a motor, the power output is P =:',
    options: ['VI', 'εI (where ε is back EMF)', 'VI - I^2R', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Mechanical power produced.'
  },
  {
    id: 'ph-ei-77',
    text: 'Flux through a coil of N turns is Φ. Total linkage is NΦ. If Φ = BA, then linkage is:',
    options: ['NBA', 'BA/N', 'N/BA', 'None'],
    correctAnswer: 'NBA',
    explanation: 'Basic definition.'
  },
  {
    id: 'ph-ei-78',
    text: 'The commutator in a D.C. motor reverses the _____ every half cycle.',
    options: ['Magnetic field', 'Current in the coil', 'Position of magnets', 'None'],
    correctAnswer: 'Current in the coil',
    explanation: 'Ensures torque is always in same direction.'
  },
  {
    id: 'ph-ei-79',
    text: 'High voltage transmission is safer from a _____ perspective than high current.',
    options: ['Heat', 'Light', 'Sound', 'None'],
    correctAnswer: 'Heat',
    explanation: 'Line heating is minimal.'
  },
  {
    id: 'ph-ei-80',
    text: 'Mutual inductance M = K √(L1 L2). K is the _____ coefficient.',
    options: ['Induction', 'Coupling', 'Magnetization', 'None'],
    correctAnswer: 'Coupling',
    explanation: 'Varies from 0 to 1.'
  },
  {
    id: 'ph-ei-81',
    text: 'If a coil is wound on a ferromagnetic core, its inductance _____:',
    options: ['Decreases', 'Increases significantly', 'Remains same', 'None'],
    correctAnswer: 'Increases significantly',
    explanation: 'μ >> μ0.'
  },
  {
    id: 'ph-ei-82',
    text: 'The "Lenz Law" magnet-coil experiment is a demonstration of Newton\'s _____ Law.',
    options: ['First', 'Second', 'Third', 'None'],
    correctAnswer: 'Third',
    explanation: 'Action and reaction of magnetic fields.'
  },
  {
    id: 'ph-ei-83',
    text: 'Motional EMF is also known as _____ EMF.',
    options: ['Dynamic', 'Static', 'Variable', 'None'],
    correctAnswer: 'Dynamic',
    explanation: 'Produced by motion.'
  },
  {
    id: 'ph-ei-84',
    text: 'Transformer "Oil" is used for _____ and _____.',
    options: ['Lubrication, Color', 'Insulation, Cooling', 'Adding weight', 'None'],
    correctAnswer: 'Insulation, Cooling',
    explanation: 'Essential for high power units.'
  },
  {
    id: 'ph-ei-85',
    text: 'In a transformer, the frequency of secondary voltage is _____ that of primary.',
    options: ['Higher than', 'Lower than', 'Same as', 'None'],
    correctAnswer: 'Same as',
    explanation: 'Transformers do not change frequency.'
  },
  {
    id: 'ph-ei-86',
    text: 'Energy density in B-field is proportional to _____ of B.',
    options: ['Square', 'Cube', 'Square root', 'None'],
    correctAnswer: 'Square',
    explanation: 'u = B^2 / 2μ0.'
  },
  {
    id: 'ph-ei-87',
    text: 'Inductor opposes _____ current but allows _____ current to pass easily (after transient).',
    options: ['A.C., D.C.', 'D.C., A.C.', 'Steady, Variable', 'None'],
    correctAnswer: 'A.C., D.C.',
    explanation: 'Reactance X_L = 2πfL.'
  },
  {
    id: 'ph-ei-88',
    text: 'The polarity of induced EMF is always such as to maintain _____:',
    options: ['Constant current', 'Constant flux', 'Zero flux', 'None'],
    correctAnswer: 'Constant flux',
    explanation: 'By opposing the change in flux.'
  },
  {
    id: 'ph-ei-89',
    text: 'When a metallic rod falls through Earth\'s magnetic field, it develops an induced _____ between its ends.',
    options: ['Current', 'EMF', 'Mass', 'None'],
    correctAnswer: 'EMF',
    explanation: 'Motional EMF across the length of the rod.'
  },
  {
    id: 'ph-ei-90',
    text: 'A "Fluxmeter" is an instrument used to measure:',
    options: ['Current', 'Magnetic flux', 'Inductance', 'None'],
    correctAnswer: 'Magnetic flux',
    explanation: 'Based on ballistic galvanometer.'
  },
  {
    id: 'ph-ei-91',
    text: 'Self-inductance of a coil is also called _____ of the coil.',
    options: ['Conductivity', 'Electrical inertia', 'Capacitance', 'None'],
    correctAnswer: 'Electrical inertia',
    explanation: 'Resists change in state of current.'
  },
  {
    id: 'ph-ei-92',
    text: 'If a coil of N turns is pulled out of a field B, the charge flowing through it is q =:',
    options: ['N ΔΦ / R', 'ΔΦ / NR', 'N R / ΔΦ', 'None'],
    correctAnswer: 'N ΔΦ / R',
    explanation: 'Derived from I = ε/R and q = ∫ I dt.'
  },
  {
    id: 'ph-ei-93',
    text: 'Transformer "Core saturation" occurs when the core cannot link any more _____:',
    options: ['Current', 'Flux lines', 'Heat', 'None'],
    correctAnswer: 'Flux lines',
    explanation: 'Limits the maximum magnetic field.'
  },
  {
    id: 'ph-ei-94',
    text: 'The "Back EMF" in a motor is proportional to _____ of the motor.',
    options: ['Weight', 'Angular speed (ω)', 'Color', 'None'],
    correctAnswer: 'Angular speed (ω)',
    explanation: 'Like a generator, ε ∝ ω.'
  },
  {
    id: 'ph-ei-95',
    text: 'Step-up transformer is used in power plants to raise voltage to _____ kV or more.',
    options: ['1', '11', '132', 'None'],
    correctAnswer: '132',
    explanation: 'For long distance transmission.'
  },
  {
    id: 'ph-ei-96',
    text: 'Step-down transformers in local areas reduce voltage to _____ V for homes.',
    options: ['220', '11000', '132000', 'None'],
    correctAnswer: '220',
    explanation: 'Standard domestic voltage.'
  },
  {
    id: 'ph-ei-97',
    text: 'Magnetic flux linkage is measured in _____:',
    options: ['Henrys', 'Webers', 'Tesla', 'None'],
    correctAnswer: 'Webers',
    explanation: 'Units of flux.'
  },
  {
    id: 'ph-ei-98',
    text: 'Lenz\'s law is the consequence of _____ law of conservation.',
    options: ['Momentum', 'Energy', 'Charge', 'Mass'],
    correctAnswer: 'Energy',
    explanation: 'Must be energy-conserving.'
  },
  {
    id: 'ph-ei-99',
    text: 'If we move a coil rapidly in a magnetic field, the induced EMF is _____ than if moved slowly.',
    options: ['Smaller', 'Larger', 'Same', 'None'],
    correctAnswer: 'Larger',
    explanation: 'Higher rate of change of flux.'
  },
  {
    id: 'ph-ei-100',
    text: 'Induction phenomena have led to the development of the modern _____ grid.',
    options: ['Water', 'Power', 'Gas', 'Transport'],
    correctAnswer: 'Power',
    explanation: 'Basis of A.C. electricity generation and distribution.'
  }
];
