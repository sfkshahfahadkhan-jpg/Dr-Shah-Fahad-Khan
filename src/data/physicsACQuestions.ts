import { Question } from '../types';

export const PHYSICS_AC_QUIZ: Question[] = [
  {
    id: 'ph-ac-1',
    text: 'A current that changes its direction many times per second is:',
    options: ['Direct Current (D.C.)', 'Alternating Current (A.C.)', 'Eddy Current', 'None'],
    correctAnswer: 'Alternating Current (A.C.)',
    explanation: 'Produced by A.C. generators.'
  },
  {
    id: 'ph-ac-2',
    text: 'The value of A.C. at any instant of time t is called:',
    options: ['Peak value', 'Instantaneous value', 'RMS value', 'Average value'],
    correctAnswer: 'Instantaneous value',
    explanation: 'I = I0 sin(ωt).'
  },
  {
    id: 'ph-ac-3',
    text: 'The maximum value reached by A.C. in either direction is:',
    options: ['RMS value', 'Peak value (I0)', 'Average value', 'None'],
    correctAnswer: 'Peak value (I0)',
    explanation: 'Also called amplitude.'
  },
  {
    id: 'ph-ac-4',
    text: 'RMS value (Root Mean Square) is related to peak value I0 by:',
    options: ['Irms = I0 / √2', 'Irms = I0 * √2', 'Irms = 0.5 I0', 'None'],
    correctAnswer: 'Irms = I0 / √2',
    explanation: 'Approximately 0.707 * I0.'
  },
  {
    id: 'ph-ac-5',
    text: 'Most A.C. voltmeters and ammeters are calibrated to read _____ values.',
    options: ['Peak', 'Instantaneous', 'RMS', 'Peak-to-Peak'],
    correctAnswer: 'RMS',
    explanation: 'Represents the "Effective" value for power dissipation.'
  },
  {
    id: 'ph-ac-6',
    text: 'The "Effective" value of A.C. that produces the same heating effect as D.C. is:',
    options: ['Peak value', 'Average value', 'RMS value', 'None'],
    correctAnswer: 'RMS value',
    explanation: 'Definition of RMS.'
  },
  {
    id: 'ph-ac-7',
    text: 'The phase θ of A.C. is given by θ =:',
    options: ['ωt', '2πft', '360ft', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Determines the state of motion/value at time t.'
  },
  {
    id: 'ph-ac-8',
    text: 'If two A.C. signals reach their peaks at the same time, they are said to be:',
    options: ['In phase', 'Out of phase', 'At 90 degrees', 'None'],
    correctAnswer: 'In phase',
    explanation: 'Phase difference is zero.'
  },
  {
    id: 'ph-ac-9',
    text: 'A vector that represents a sinusoidally varying quantity is called a:',
    options: ['Tensor', 'Phasor', 'Scalar', 'None'],
    correctAnswer: 'Phasor',
    explanation: 'Its length is the peak value; it rotates at frequency f.'
  },
  {
    id: 'ph-ac-10',
    text: 'When A.C. flows through a pure resistor, the voltage and current are:',
    options: ['In phase', 'Voltage leads by 90°', 'Current leads by 90°', 'Out of phase by 180°'],
    correctAnswer: 'In phase',
    explanation: 'V = IR; both follow the same sine wave.'
  },
  {
    id: 'ph-ac-11',
    text: 'When A.C. flows through a pure inductor, the voltage _____ the current by 90°.',
    options: ['Lags', 'Leads', 'Is in phase with', 'None'],
    correctAnswer: 'Leads',
    explanation: 'Inductor opposes change in current.'
  },
  {
    id: 'ph-ac-12',
    text: 'When A.C. flows through a pure capacitor, the current _____ the voltage by 90°.',
    options: ['Lags', 'Leads', 'Is in phase with', 'None'],
    correctAnswer: 'Leads',
    explanation: 'Charging current is maximum when voltage is zero.'
  },
  {
    id: 'ph-ac-13',
    text: 'Inductive Reactance (XL) is given by XL =:',
    options: ['ωL', '2πfL', '1 / (ωL)', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Opposition of inductor to A.C.'
  },
  {
    id: 'ph-ac-14',
    text: 'Capacitive Reactance (XC) is given by XC =:',
    options: ['ωC', '1 / (ωC)', '1 / (2πfC)', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Opposition of capacitor to A.C.'
  },
  {
    id: 'ph-ac-15',
    text: 'As frequency f increases, inductive reactance XL _____ and capacitive reactance XC _____.',
    options: ['Increases, Decreases', 'Decreases, Increases', 'Increases, Increases', 'None'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Direct and inverse relations.'
  },
  {
    id: 'ph-ac-16',
    text: 'The total opposition of an A.C. circuit to the flow of current is called:',
    options: ['Resistance', 'Reactance', 'Impedance (Z)', 'Conductance'],
    correctAnswer: 'Impedance (Z)',
    explanation: 'Z = V_rms / I_rms.'
  },
  {
    id: 'ph-ac-17',
    text: 'The SI unit of Reactance and Impedance is:',
    options: ['Farad', 'Henry', 'Ohm (Ω)', 'None'],
    correctAnswer: 'Ohm (Ω)',
    explanation: 'Same as resistance.'
  },
  {
    id: 'ph-ac-18',
    text: 'The "Power Factor" of an A.C. circuit is cosφ, where φ is the phase difference between V and I. For a pure resistor, cosφ =:',
    options: ['0', '0.5', '1', 'None'],
    correctAnswer: '1',
    explanation: 'φ = 0, cos 0 = 1.'
  },
  {
    id: 'ph-ac-19',
    text: 'For a pure inductor or capacitor, the power dissipated is:',
    options: ['Maximum', 'Zero', 'Medium', 'None'],
    correctAnswer: 'Zero',
    explanation: 'φ = 90°, cos 90 = 0. No energy is lost (Wattless current).'
  },
  {
    id: 'ph-ac-20',
    text: 'The real power dissipated in an A.C. circuit is P =:',
    options: ['Vrms Irms', 'Vrms Irms cosφ', 'Vrms Irms sinφ', 'None'],
    correctAnswer: 'Vrms Irms cosφ',
    explanation: 'Product of RMS values and power factor.'
  },
  {
    id: 'ph-ac-21',
    text: 'An R-L-C series circuit is in "Resonance" when:',
    options: ['XL = XC', 'XL > XC', 'XL < XC', 'None'],
    correctAnswer: 'XL = XC',
    explanation: 'Reactances cancel out.'
  },
  {
    id: 'ph-ac-22',
    text: 'At resonance, the impedance Z of a series RLC circuit is:',
    options: ['Maximum', 'Minimum (equal to R)', 'Zero', 'Infinite'],
    correctAnswer: 'Minimum (equal to R)',
    explanation: 'Leads to maximum current.'
  },
  {
    id: 'ph-ac-23',
    text: 'The resonant frequency fr is given by fr =:',
    options: ['1 / (2π√(LC))', '√(LC) / 2π', '1 / (LC)', 'None'],
    correctAnswer: '1 / (2π√(LC))',
    explanation: 'Derived from XL = XC.'
  },
  {
    id: 'ph-ac-24',
    text: 'In a parallel resonance circuit (L-C tank circuit), the impedance at resonance is:',
    options: ['Zero', 'Minimum', 'Maximum (Infinite for ideal)', 'None'],
    correctAnswer: 'Maximum (Infinite for ideal)',
    explanation: 'Current from the source is minimum.'
  },
  {
    id: 'ph-ac-25',
    text: 'A "Three-phase" A.C. supply consists of three voltages phase-shifted by:',
    options: ['90°', '120°', '180°', 'None'],
    correctAnswer: '120°',
    explanation: 'Total power is smoother and more efficient.'
  },
  {
    id: 'ph-ac-26',
    text: 'Which is a "Passive" component?',
    options: ['Transistor', 'Operational amplifier', 'Inductor', 'None'],
    correctAnswer: 'Inductor',
    explanation: 'Does not require external power to operate.'
  },
  {
    id: 'ph-ac-27',
    text: 'Electromagnetic waves are produced by _____ charges.',
    options: ['Stationary', 'Uniformly moving', 'Accelerated', 'None'],
    correctAnswer: 'Accelerated',
    explanation: 'Oscillating charges emit E.M. waves.'
  },
  {
    id: 'ph-ac-28',
    text: 'In an E.M. wave, the electric field, magnetic field, and direction of propagation are all _____ to each other.',
    options: ['Parallel', 'Mutually perpendicular', 'Random', 'None'],
    correctAnswer: 'Mutually perpendicular',
    explanation: 'Transverse waves.'
  },
  {
    id: 'ph-ac-29',
    text: 'The speed of E.M. waves in vacuum is c =:',
    options: ['3 x 10^8 m/s', '1 / √(μ0ε0)', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Maxwell\'s prediction.'
  },
  {
    id: 'ph-ac-30',
    text: 'The "Skin Effect" describes the tendency of A.C. to flow:',
    options: ['In the center of wire', 'Near the surface (skin) of wire', 'In opposite direction', 'None'],
    correctAnswer: 'Near the surface (skin) of wire',
    explanation: 'More pronounced at high frequencies.'
  },
  {
    id: 'ph-ac-31',
    text: 'A "Choke" is used to limit _____ current in a circuit.',
    options: ['D.C.', 'A.C.', 'Both', 'None'],
    correctAnswer: 'A.C.',
    explanation: 'Uses inductance to provide reactance with minimal energy loss.'
  },
  {
    id: 'ph-ac-32',
    text: 'If Irms = 10 A, the peak value I0 is:',
    options: ['10 A', '14.14 A', '7.07 A', 'None'],
    correctAnswer: '14.14 A',
    explanation: 'I0 = Irms * √2 = 10 * 1.414 = 14.14 A.'
  },
  {
    id: 'ph-ac-33',
    text: 'A capacitor of 1 μF at 50 Hz has reactance XC ≈:',
    options: ['3183 Ω', '100 Ω', '318 Ω', 'None'],
    correctAnswer: '3183 Ω',
    explanation: 'XC = 1 / (2 * 3.14 * 50 * 1e-6) ≈ 3183 Ω.'
  },
  {
    id: 'ph-ac-34',
    text: 'Average value of A.C. over a full cycle is:',
    options: ['Peak value', 'RMS value', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Positive and negative halves cancel out.'
  },
  {
    id: 'ph-ac-35',
    text: 'Average value of A.C. over a half cycle (sinusoidal) is about:',
    options: ['0.637 * I0', '0.707 * I0', 'I0', 'None'],
    correctAnswer: '0.637 * I0',
    explanation: 'Calculated as 2 I0 / π.'
  },
  {
    id: 'ph-ac-36',
    text: 'If A.C. voltage V = 311 sin(314t), the RMS voltage is about:',
    options: ['311 V', '220 V', '110 V', 'None'],
    correctAnswer: '220 V',
    explanation: 'Vrms = 311 / √2 ≈ 220 V.'
  },
  {
    id: 'ph-ac-37',
    text: 'Phase difference of 180° is also called _____ phase.',
    options: ['Same', 'Opposite', 'In-quadrature', 'None'],
    correctAnswer: 'Opposite',
    explanation: 'One is at max positive, other at max negative.'
  },
  {
    id: 'ph-ac-38',
    text: 'Phase difference of 90° is also called _____ phase.',
    options: ['Opposite', 'In-quadrature', 'Parallel', 'None'],
    correctAnswer: 'In-quadrature',
    explanation: 'One is at zero, other at peak.'
  },
  {
    id: 'ph-ac-39',
    text: 'A pure inductor behaves as a short circuit for:',
    options: ['A.C.', 'D.C. (steady state)', 'Both', 'None'],
    correctAnswer: 'D.C. (steady state)',
    explanation: 'XL = 0 at f = 0.'
  },
  {
    id: 'ph-ac-40',
    text: 'A pure capacitor behaves as an open circuit for:',
    options: ['A.C.', 'D.C. (steady state)', 'Both', 'None'],
    correctAnswer: 'D.C. (steady state)',
    explanation: 'XC = ∞ at f = 0.'
  },
  {
    id: 'ph-ac-41',
    text: 'Impedance triangle: The base is R, the perpendicular is (XL - XC), and the hypotenuse is:',
    options: ['Reactance', 'Impedance Z', 'Phase', 'None'],
    correctAnswer: 'Impedance Z',
    explanation: 'Z = √(R^2 + (XL-XC)^2).'
  },
  {
    id: 'ph-ac-42',
    text: 'The angle φ of the impedance triangle is the _____ between V and I.',
    options: ['Frequency', 'Phase difference', 'Power factor', 'None'],
    correctAnswer: 'Phase difference',
    explanation: 'tanφ = (XL - XC) / R.'
  },
  {
    id: 'ph-ac-43',
    text: 'A circuit with XL > XC is _____ in nature.',
    options: ['Inductive', 'Capacitive', 'Resistive', 'None'],
    correctAnswer: 'Inductive',
    explanation: 'Voltage leads current.'
  },
  {
    id: 'ph-ac-44',
    text: 'A circuit with XC > XL is _____ in nature.',
    options: ['Inductive', 'Capacitive', 'Resistive', 'None'],
    correctAnswer: 'Capacitive',
    explanation: 'Current leads voltage.'
  },
  {
    id: 'ph-ac-45',
    text: 'The "Acceptor" circuit is another name for _____ resonance circuit.',
    options: ['Series', 'Parallel', 'Non', 'None'],
    correctAnswer: 'Series',
    explanation: 'Accepts maximum current at resonance.'
  },
  {
    id: 'ph-ac-46',
    text: 'The "Rejector" circuit is another name for _____ resonance circuit.',
    options: ['Series', 'Parallel', 'Feedback', 'None'],
    correctAnswer: 'Parallel',
    explanation: 'Rejects (blocks) current at resonance.'
  },
  {
    id: 'ph-ac-47',
    text: 'In three-phase supply, the potential between any two live wires (line voltage) is:',
    options: ['220 V', '400 V', 'Zero', 'None'],
    correctAnswer: '400 V',
    explanation: 'In Pakistan, it is √3 * 230 ≈ 400 V.'
  },
  {
    id: 'ph-ac-48',
    text: 'The potential between one live wire and the neutral wire is:',
    options: ['220 V / 230 V', '400 V', 'Zero', 'None'],
    correctAnswer: '220 V / 230 V',
    explanation: 'Standard single-phase voltage.'
  },
  {
    id: 'ph-ac-49',
    text: 'Modulation: The process of combining a low-frequency signal with a high-frequency carrier is:',
    options: ['Demodulation', 'Modulation', 'Rectification', 'None'],
    correctAnswer: 'Modulation',
    explanation: 'Allows long distance transmission.'
  },
  {
    id: 'ph-ac-50',
    text: 'AM stands for _____ and FM for _____:',
    options: ['Amplitude Modulation, Frequency Modulation', 'Actual Mode, Fast Mode', 'All Mode, Few Mode', 'None'],
    correctAnswer: 'Amplitude Modulation, Frequency Modulation',
    explanation: 'Different techniques of broadcasting.'
  },
  {
    id: 'ph-ac-51',
    text: 'Frequency of FM radio is _____ than AM radio.',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'FM uses VHF band (88-108 MHz).'
  },
  {
    id: 'ph-ac-52',
    text: 'In an RLC series circuit, if R is very small, the resonance curve is:',
    options: ['Flat', 'Sharp', 'Irrelevant', 'None'],
    correctAnswer: 'Sharp',
    explanation: 'High selectivity.'
  },
  {
    id: 'ph-ac-53',
    text: 'Which law relates the electric field to its source?',
    options: ['Gauss\'s Law', 'Ampere\'s Law', 'Faraday\'s Law', 'None'],
    correctAnswer: 'Gauss\'s Law',
    explanation: 'One of Maxwell\'s equations.'
  },
  {
    id: 'ph-ac-54',
    text: 'Maxwell predicted that E.M. waves travel at speed c = 1 / √(μ0ε0). This value matches the speed of _____:',
    options: ['Sound', 'Light', 'Electricity', 'None'],
    correctAnswer: 'Light',
    explanation: 'Confirmed light is an E.M. wave.'
  },
  {
    id: 'ph-ac-55',
    text: 'Energy of an E.M. wave is carried by _____ and _____ fields.',
    options: ['Gravitational, Electric', 'Electric, Magnetic', 'Heat, Light', 'None'],
    correctAnswer: 'Electric, Magnetic',
    explanation: 'Continuously oscillating.'
  },
  {
    id: 'ph-ac-56',
    text: 'Which is NOT an E.M. wave?',
    options: ['X-rays', 'Gamma rays', 'Sound waves', 'Radio waves'],
    correctAnswer: 'Sound waves',
    explanation: 'Sound is a mechanical wave.'
  },
  {
    id: 'ph-ac-57',
    text: 'The component of current that does not consume power is called:',
    options: ['Active current', 'Wattless current', 'Dead current', 'None'],
    correctAnswer: 'Wattless current',
    explanation: 'Component out of phase by 90° with voltage.'
  },
  {
    id: 'ph-ac-58',
    text: 'Quality Factor (Q) of a resonance circuit is a measure of its _____:',
    options: ['Power', 'Sharpness / Selectivity', 'Size', 'None'],
    correctAnswer: 'Sharpness / Selectivity',
    explanation: 'Q = 1/R √(L/C).'
  },
  {
    id: 'ph-ac-59',
    text: 'In a parallel resonance circuit, at resonance the line current is:',
    options: ['Maximum', 'Minimum', 'Infinite', 'None'],
    correctAnswer: 'Minimum',
    explanation: 'Used as a rejector.'
  },
  {
    id: 'ph-ac-60',
    text: 'A "Rectifier" converts _____ to _____:',
    options: ['D.C., A.C.', 'A.C., D.C.', 'Low V, High V', 'None'],
    correctAnswer: 'A.C., D.C.',
    explanation: 'Uses diodes.'
  },
  {
    id: 'ph-ac-61',
    text: 'RMS value of a square wave with peak V0 is:',
    options: ['V0 / √2', 'V0', '0.5 V0', 'None'],
    correctAnswer: 'V0',
    explanation: 'Since V is always ±V0, V^2 is always V0^2.'
  },
  {
    id: 'ph-ac-62',
    text: 'RMS value of a triangular wave with peak V0 is:',
    options: ['V0 / √2', 'V0 / √3', 'V0', 'None'],
    correctAnswer: 'V0 / √3',
    explanation: 'Standard result for linear ramps.'
  },
  {
    id: 'ph-ac-63',
    text: 'If an inductor is connected to D.C. source, its reactance is:',
    options: ['Zero', 'Infinite', 'R', 'None'],
    correctAnswer: 'Zero',
    explanation: 'XL = 2πfL; f = 0.'
  },
  {
    id: 'ph-ac-64',
    text: 'Reactance of a capacitor at very high frequency is:',
    options: ['Zero', 'Infinite', 'High', 'None'],
    correctAnswer: 'Zero',
    explanation: 'XC ∝ 1/f.'
  },
  {
    id: 'ph-ac-65',
    text: 'The phasor for current in a purely resistive circuit is _____ to the voltage phasor.',
    options: ['Parallel (same direction)', 'Perpendicular', 'Opposite', 'None'],
    correctAnswer: 'Parallel (same direction)',
    explanation: 'Zero phase difference.'
  },
  {
    id: 'ph-ac-66',
    text: 'Power dissipated in a pure inductor is zero because the energy taken in one quarter cycle is _____ in the next.',
    options: ['Wasted', 'Stored permanently', 'Returned to the source', 'None'],
    correctAnswer: 'Returned to the source',
    explanation: 'Cycle of storage in field and release.'
  },
  {
    id: 'ph-ac-67',
    text: 'Which device is used for tuning radio stations?',
    options: ['Variable resistor', 'Variable capacitor / inductor', 'Transformer', 'None'],
    correctAnswer: 'Variable capacitor / inductor',
    explanation: 'Changes fr to match station frequency.'
  },
  {
    id: 'ph-ac-68',
    text: 'In an RLC series circuit at resonance, the voltage across L and C can be _____ than the applied voltage.',
    options: ['Smaller', 'Much larger', 'Equal', 'None'],
    correctAnswer: 'Much larger',
    explanation: 'Voltage magnification.'
  },
  {
    id: 'ph-ac-69',
    text: 'An A.C. circuit has R = 3 Ω, XL = 4 Ω. The impedance Z is:',
    options: ['7 Ω', '1 Ω', '5 Ω', 'None'],
    correctAnswer: '5 Ω',
    explanation: 'Z = √(3^2 + 4^2) = 5 Ω.'
  },
  {
    id: 'ph-ac-70',
    text: 'An A.C. circuit has R = 10 Ω and Z = 20 Ω. The power factor is:',
    options: ['2', '0.5', '1', 'None'],
    correctAnswer: '0.5',
    explanation: 'cosφ = R / Z = 10 / 20 = 0.5.'
  },
  {
    id: 'ph-ac-71',
    text: 'The "Time constant" of a capacitive circuit RC has units of:',
    options: ['Farad', 'Ohm', 'Seconds', 'None'],
    correctAnswer: 'Seconds',
    explanation: 'Unit of time.'
  },
  {
    id: 'ph-ac-72',
    text: 'Which is a transverse wave?',
    options: ['Sound', 'E.M. waves', 'Ultrasound', 'None'],
    correctAnswer: 'E.M. waves',
    explanation: 'Oscillations perpendicular to propagation.'
  },
  {
    id: 'ph-ac-73',
    text: 'E.M. waves do not require any _____ for propagation.',
    options: ['Energy', 'Medium', 'Time', 'None'],
    correctAnswer: 'Medium',
    explanation: 'Can travel in vacuum.'
  },
  {
    id: 'ph-ac-74',
    text: 'Which range is used for "Cellular" communication?',
    options: ['Low frequency', 'Microwaves / UHF', 'Gamma rays', 'None'],
    correctAnswer: 'Microwaves / UHF',
    explanation: 'Allows high data rates and small antennas.'
  },
  {
    id: 'ph-ac-75',
    text: 'A step-up transformer _____ voltage but the _____ of A.C. remains unchanged.',
    options: ['Increases, Power', 'Increases, Frequency', 'Decreases, Heat', 'None'],
    correctAnswer: 'Increases, Frequency',
    explanation: 'Frequency is property of the source.'
  },
  {
    id: 'ph-ac-76',
    text: 'Peak-to-peak value of A.C. is _____ times the peak value.',
    options: ['1', '2', '0.5', 'None'],
    correctAnswer: '2',
    explanation: 'From +I0 to -I0.'
  },
  {
    id: 'ph-ac-77',
    text: 'If A.C. frequency is 50 Hz, the direction of current changes _____ times per second.',
    options: ['50', '100', '25', 'None'],
    correctAnswer: '100',
    explanation: 'Two reversals per cycle.'
  },
  {
    id: 'ph-ac-78',
    text: 'The "Phase angle" between current and voltage in a purely capacitive circuit is:',
    options: ['0', '90°', '180°', 'None'],
    correctAnswer: '90°',
    explanation: 'Current leads by 90°.'
  },
  {
    id: 'ph-ac-79',
    text: 'In an R-C series circuit, impedance Z =:',
    options: ['R + XC', '√(R^2 + XC^2)', 'R - XC', 'None'],
    correctAnswer: '√(R^2 + XC^2)',
    explanation: 'Vector sum.'
  },
  {
    id: 'ph-ac-80',
    text: 'Wattless current is the component _____ sinφ.',
    options: ['Irms', 'I0', 'Average', 'None'],
    correctAnswer: 'Irms',
    explanation: 'Reactive component.'
  },
  {
    id: 'ph-ac-81',
    text: 'Resonance curve is a plot between _____ and _____.',
    options: ['Voltage, Time', 'Current, Frequency', 'Power, Resistance', 'None'],
    correctAnswer: 'Current, Frequency',
    explanation: 'Shows peaking at fr.'
  },
  {
    id: 'ph-ac-82',
    text: 'If L is increased in a series RLC circuit, fr will _____:',
    options: ['Increase', 'Decrease', 'Stay same', 'None'],
    correctAnswer: 'Decrease',
    explanation: 'fr ∝ 1/√L.'
  },
  {
    id: 'ph-ac-83',
    text: 'The phase difference between voltage across L and voltage across C in series RLC is:',
    options: ['0', '90°', '180°', 'None'],
    correctAnswer: '180°',
    explanation: 'VL leads I by 90°, VC lags I by 90°.'
  },
  {
    id: 'ph-ac-84',
    text: 'In a three-phase system, the wires are labeled _____:',
    options: ['L1, L2, L3', 'A, B, C', 'Red, Yellow, Blue', 'All are used'],
    correctAnswer: 'All are used',
    explanation: 'Common naming conventions.'
  },
  {
    id: 'ph-ac-85',
    text: 'Which is a "Bypass" capacitor?',
    options: ['Blocks A.C.', 'Passes A.C. to ground', 'Blocks D.C.', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Low reactance at high frequencies.'
  },
  {
    id: 'ph-ac-86',
    text: 'The "Skin depth" _____ with increase in frequency.',
    options: ['Increases', 'Decreases', 'Remains same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Current forced more toward the surface.'
  },
  {
    id: 'ph-ac-87',
    text: 'An A.C. ammeter reads 5 A. The peak current is:',
    options: ['5 A', '3.53 A', '7.07 A', 'None'],
    correctAnswer: '7.07 A',
    explanation: '5 * √2 = 7.07 A.'
  },
  {
    id: 'ph-ac-88',
    text: 'Reactance of an inductor of 1 H at 50 Hz is about:',
    options: ['314 Ω', '50 Ω', '1 Ω', 'None'],
    correctAnswer: '314 Ω',
    explanation: 'XL = 2 * 3.14 * 50 * 1 = 314 Ω.'
  },
  {
    id: 'ph-ac-89',
    text: 'An RLC circuit has L = 10 mH, C = 10 μF. fr is about:',
    options: ['50 Hz', '500 Hz', '160 Hz', 'None'],
    correctAnswer: '500 Hz',
    explanation: 'fr = 1 / (2π√(1e-2 * 1e-5)) ≈ 503 Hz.'
  },
  {
    id: 'ph-ac-90',
    text: 'Which is used as an antenna to transmit E.M. waves?',
    options: ['Resistor', 'Hertzian Dipole / Wire', 'Mirror', 'None'],
    correctAnswer: 'Hertzian Dipole / Wire',
    explanation: 'Oscillating electrons emit radiation.'
  },
  {
    id: 'ph-ac-91',
    text: 'The energy density of E-field and B-field in an E.M. wave are _____:',
    options: ['Equal', 'E-field has more', 'B-field has more', 'None'],
    correctAnswer: 'Equal',
    explanation: 'Standard result from Maxwell\'s theory.'
  },
  {
    id: 'ph-ac-92',
    text: 'Visible light is in the frequency range of _____ Hz.',
    options: ['10^6', '10^12', '10^14 - 10^15', 'None'],
    correctAnswer: '10^14 - 10^15',
    explanation: 'Very high frequency.'
  },
  {
    id: 'ph-ac-93',
    text: 'Which E.M. wave has the shortest wavelength?',
    options: ['Radio', 'Microwave', 'X-rays', 'Gamma rays'],
    correctAnswer: 'Gamma rays',
    explanation: 'Highest frequency, shortest wavelength.'
  },
  {
    id: 'ph-ac-94',
    text: 'Which E.M. wave has the longest wavelength?',
    options: ['Radio', 'Infrared', 'Visible', 'Ultraviolet'],
    correctAnswer: 'Radio',
    explanation: 'Lowest frequency.'
  },
  {
    id: 'ph-ac-95',
    text: 'In a purely resistive A.C. circuit, the power factor is:',
    options: ['Zero', 'Unity (1)', '0.5', 'None'],
    correctAnswer: 'Unity (1)',
    explanation: 'V and I in phase.'
  },
  {
    id: 'ph-ac-96',
    text: 'A "Tank" circuit consists of _____ and _____ in parallel.',
    options: ['R, L', 'L, C', 'R, C', 'None'],
    correctAnswer: 'L, C',
    explanation: 'Stores energy by oscillating between L and C.'
  },
  {
    id: 'ph-ac-97',
    text: 'At very low frequencies, a capacitor acts like a _____ circuit.',
    options: ['Short', 'Open', 'Resistive', 'None'],
    correctAnswer: 'Open',
    explanation: 'XC is very high.'
  },
  {
    id: 'ph-ac-98',
    text: 'At very high frequencies, an inductor acts like a _____ circuit.',
    options: ['Short', 'Open', 'Resistive', 'None'],
    correctAnswer: 'Open',
    explanation: 'XL is very high.'
  },
  {
    id: 'ph-ac-99',
    text: 'Phase difference of π/2 is equivalent to a path difference of _____:',
    options: ['λ', 'λ/2', 'λ/4', 'None'],
    correctAnswer: 'λ/4',
    explanation: '90° is a quarter cycle.'
  },
  {
    id: 'ph-ac-100',
    text: 'The study of A.C. circuits is fundamental to understanding modern _____ and _____ systems.',
    options: ['Water, Heat', 'Electronic, Power', 'Nuclear, Solar', 'None'],
    correctAnswer: 'Electronic, Power',
    explanation: 'Basis of our electrical infrastructure.'
  }
];
