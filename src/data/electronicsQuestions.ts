import { Question } from '../types';

export const ELECTRONICS_QUIZ: Question[] = [
  {
    id: 'el-1',
    text: 'A junction diode is said to be forward biased when the p-region is connected to a higher potential than the n-region. During this state, the majority carriers:',
    options: [
      'Cross the junction and move towards the depletion layer',
      'Are pushed away from the junction',
      'Recombine with minority carriers in the depletion region only',
      'Stop moving towards the junction'
    ],
    correctAnswer: 'Cross the junction and move towards the depletion layer',
    explanation: 'In forward bias, the applied electric field opposes the built-in potential, allowing majority carriers to cross the junction and conduct current.'
  },
  {
    id: 'el-2',
    text: 'The potential barrier of a silicon p-n junction diode is roughly 0.7V. If a 1.5V battery is connected in series with a 100Ω resistor and the diode in forward bias, the current in the circuit is approximately:',
    options: ['15 mA', '8 mA', '7.5 mA', '22 mA'],
    correctAnswer: '8 mA',
    explanation: 'I = (V_battery - V_barrier) / R = (1.5 - 0.7) / 100 = 0.8 / 100 = 0.008 A = 8 mA.'
  },
  {
    id: 'el-3',
    text: 'In an operational amplifier used in non-inverting mode, the input signal is applied to the non-inverting terminal. What is the phase difference between the input and output signals?',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '0°',
    explanation: 'In non-inverting configuration, the output signal is in phase with the input signal.'
  },
  {
    id: 'el-4',
    text: 'For a transistor, the common emitter current gain β is 100. If the base current (IB) is 20 μA, what is the value of the collector current (IC)?',
    options: ['2 mA', '1 mA', '200 μA', '20 mA'],
    correctAnswer: '2 mA',
    explanation: 'IC = β * IB = 100 * 20 μA = 2000 μA = 2 mA.'
  },
  {
    id: 'el-5',
    text: 'Which of the following describes the relationship between the depletion width and the doping concentration?',
    options: [
      'Depletion width increases with higher doping concentration',
      'Depletion width decreases with higher doping concentration',
      'Depletion width is independent of doping concentration',
      'Depletion width increases with the square of doping concentration'
    ],
    correctAnswer: 'Depletion width decreases with higher doping concentration',
    explanation: 'Higher doping concentration leads to more available mobile carriers, which reduces the width of the depletion layer required to establish the potential barrier.'
  },
  {
    id: 'el-6',
    text: 'A full-wave rectifier uses two diodes and a center-tapped transformer. Compared to a half-wave rectifier, the efficiency is:',
    options: ['Exactly the same', 'Twice as high', 'Four times as high', 'Half as high'],
    correctAnswer: 'Twice as high',
    explanation: 'A full-wave rectifier utilizes both halves of the AC cycle, theoretically doubling the DC output efficiency.'
  },
  {
    id: 'el-7',
    text: 'The input resistance of an ideal operational amplifier is infinite. This implies that:',
    options: [
      'It draws a large current from the input source',
      'It draws zero current from the input source',
      'The output voltage is zero',
      'The gain is zero'
    ],
    correctAnswer: 'It draws zero current from the input source',
    explanation: 'Infinite input impedance prevents the amplifier from "loading" the preceding circuit stage by drawing no current.'
  },
  {
    id: 'el-8',
    text: 'In an n-p-n transistor, the base-emitter junction is forward biased and the collector-base junction is reverse biased. This operating region is known as:',
    options: ['Saturation region', 'Cut-off region', 'Active region', 'Breakdown region'],
    correctAnswer: 'Active region',
    explanation: 'The Active region is the standard configuration for amplification where the emitter-base is forward biased and collector-base is reverse biased.'
  },
  {
    id: 'el-9',
    text: 'A logic gate that outputs a HIGH signal only when all its inputs are LOW is called:',
    options: ['NOR gate', 'NAND gate', 'OR gate', 'AND gate'],
    correctAnswer: 'NOR gate',
    explanation: 'A NOR gate is derived from NOT(OR). It outputs 1 only when all inputs are 0.'
  },
  {
    id: 'el-10',
    text: 'In an Op-Amp, the "Virtual Ground" concept applies when:',
    options: [
      'The non-inverting terminal is grounded and there is negative feedback',
      'The inverting terminal is grounded and there is positive feedback',
      'Output is saturated',
      'Open-loop gain is small'
    ],
    correctAnswer: 'The non-inverting terminal is grounded and there is negative feedback',
    explanation: 'Because of negative feedback and infinite gain, the differential input must be zero; if non-inverting is grounded (0V), the inverting terminal is also at "virtual" 0V.'
  },
  {
    id: 'el-11',
    text: 'The leakage current in a diode is primarily caused by:',
    options: ['Majority carriers', 'Minority carriers', 'Fixed ions', 'Diffusion only'],
    correctAnswer: 'Minority carriers',
    explanation: 'Minority carriers (thermally generated) easily cross the junction in reverse bias, creating a small leakage current.'
  },
  {
    id: 'el-12',
    text: 'If the alpha (α) of a transistor is 0.99, its beta (β) will be:',
    options: ['9', '99', '100', '1'],
    correctAnswer: '99',
    explanation: 'β = α / (1 - α) = 0.99 / (1 - 0.99) = 0.99 / 0.01 = 99.'
  },
  {
    id: 'el-13',
    text: 'Photodiodes are always operated in which bias for better sensitivity to light?',
    options: ['Forward bias', 'Reverse bias', 'Unbiased', 'Zero bias'],
    correctAnswer: 'Reverse bias',
    explanation: 'In reverse bias, the dark current is very low, making it easier to detect the change in current when light-generated carriers are created.'
  },
  {
    id: 'el-14',
    text: 'A Bridge Rectifier requires how many diodes?',
    options: ['1', '2', '4', '8'],
    correctAnswer: '4',
    explanation: 'A bridge rectifier uses 4 diodes in a diamond configuration to provide full-wave rectification without a center-tap transformer.'
  },
  {
    id: 'el-15',
    text: 'Identify the Universal logic gates from the following list:',
    options: ['OR, AND', 'NOR, NAND', 'NOT, XOR', 'AND, NOT'],
    correctAnswer: 'NOR, NAND',
    explanation: 'NAND and NOR gates are called universal because any boolean function can be implemented using only one of these types.'
  },
  {
    id: 'el-16',
    text: 'What happens to the barrier potential of a p-n junction for every 1°C rise in temperature?',
    options: ['Increases by 2mV', 'Decreases by 2mV', 'Remains constant', 'Increases by 0.7V'],
    correctAnswer: 'Decreases by 2mV',
    explanation: 'As temperature increases, its barrier potential decreases (roughly 2-2.5 mV per degree Celsius).'
  },
  {
    id: 'el-17',
    text: 'In a transistor, which region is doped the most?',
    options: ['Emitter', 'Base', 'Collector', 'They are doped equally'],
    correctAnswer: 'Emitter',
    explanation: 'The emitter is heavily doped to provide a large number of charge carriers for conduction.'
  },
  {
    id: 'el-18',
    text: 'The ripple frequency of a half-wave rectifier with an input frequency of 50Hz is:',
    options: ['25 Hz', '50 Hz', '100 Hz', '200 Hz'],
    correctAnswer: '50 Hz',
    explanation: 'In half-wave rectification, the output ripple matches the input frequency.'
  },
  {
    id: 'el-19',
    text: 'For an operational amplifier used as an Inverting Amplifier, if R_in = 1kΩ and R_f = 10kΩ, the voltage gain G is:',
    options: ['10', '-10', '0.1', '-11'],
    correctAnswer: '-10',
    explanation: 'Gain G = -R_f / R_in = -10k / 1k = -10.'
  },
  {
    id: 'el-20',
    text: 'Which type of semiconductor is formed when Silicon is doped with Boron?',
    options: ['n-type', 'p-type', 'Intrinsic', 'Donor type'],
    correctAnswer: 'p-type',
    explanation: 'Boron (Trivalent) creates "holes" in Silicon, resulting in a p-type semiconductor.'
  },
  {
    id: 'el-21',
    text: 'The output resistance of an ideal operational amplifier is:',
    options: ['Infinity', 'Zero', '1M Ω', 'Variable'],
    correctAnswer: 'Zero',
    explanation: 'An ideal Op-Amp should be able to drive any load without loss of signal voltage.'
  },
  {
    id: 'el-22',
    text: 'In common emitter configuration, the output signal is:',
    options: [
      'In phase with input',
      '180° out of phase with input',
      '90° out of phase with input',
      'No phase relation'
    ],
    correctAnswer: '180° out of phase with input',
    explanation: 'The CE amplifier provides a phase reversal of 180° between input and output voltages.'
  },
  {
    id: 'el-23',
    text: 'Which device behaves like a voltage-controlled current source?',
    options: ['Diode', 'Resistor', 'Transistor', 'Transformer'],
    correctAnswer: 'Transistor',
    explanation: 'The collector current is controlled by the base-emitter voltage/base current.'
  },
  {
    id: 'el-24',
    text: 'LEDs (Light Emitting Diodes) emit light when they are:',
    options: ['Forward biased', 'Reverse biased', 'Unbiased', 'Heated above 100°C'],
    correctAnswer: 'Forward biased',
    explanation: 'Light is emitted when electrons recombine with holes at the junction during forward biasing.'
  },
  {
    id: 'el-25',
    text: 'The logic function Y = A + B represents which gate?',
    options: ['AND', 'OR', 'NOT', 'NAND'],
    correctAnswer: 'OR',
    explanation: 'A + B is the Boolean addition representing the OR function.'
  },
  {
    id: 'el-26',
    text: 'Rectification is the process of:',
    options: ['Converting AC to DC', 'Converting DC to AC', 'Increasing Voltage', 'Filtering noise'],
    correctAnswer: 'Converting AC to DC',
    explanation: 'Diodes are used to rectify alternating current into direct current.'
  },
  {
    id: 'el-27',
    text: 'The breakdown that occurs in a heavily doped p-n junction under high reverse bias is called:',
    options: ['Avalanche breakdown', 'Zener breakdown', 'Thermal breakdown', 'Forward breakdown'],
    correctAnswer: 'Zener breakdown',
    explanation: 'Zener breakdown occurs in thin depletion layers (high doping) due to field ionization.'
  },
  {
    id: 'el-28',
    text: 'What is the CMRR (Common Mode Rejection Ratio) of an ideal Op-Amp?',
    options: ['0', '1', '100', 'Infinity'],
    correctAnswer: 'Infinity',
    explanation: 'An ideal Op-Amp should completely reject common mode signals.'
  },
  {
    id: 'el-29',
    text: 'Doping is the process of adding impurities to:',
    options: [
      'Increase conductivity',
      'Decrease conductivity',
      'Create magnetic fields',
      'Store energy'
    ],
    correctAnswer: 'Increase conductivity',
    explanation: 'Impurities provide more charge carriers (electrons/holes), significantly increasing conductivity.'
  },
  {
    id: 'el-30',
    text: 'In a transistor, why is the base region kept very thin?',
    options: [
      'To increase recombination',
      'To decrease recombination',
      'To make it look small',
      'To save material'
    ],
    correctAnswer: 'To decrease recombination',
    explanation: 'A thin base ensures that most charge carriers traveling from emitter to collector do not recombine.'
  },
  {
    id: 'el-31',
    text: 'If the resistance of the load in a rectifier increases, what happens to the ripple factor?',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes zero'],
    correctAnswer: 'Decreases',
    explanation: 'Higher load resistance reduces the discharge rate of the filter capacitor, leading to a smoother output and lower ripple factor.'
  },
  {
    id: 'el-32',
    text: 'The diffusion current in a p-n junction is caused by:',
    options: [
      'Electric field across the junction',
      'Concentration gradient of charge carriers',
      'High temperature',
      'Reverse bias'
    ],
    correctAnswer: 'Concentration gradient of charge carriers',
    explanation: 'Diffusion is the movement of carriers from a region of high concentration to low concentration.'
  },
  {
    id: 'el-33',
    text: 'In an Op-Amp, the slew rate is defined as:',
    options: [
      'Maximum rate of change of output voltage per unit time',
      'Maximum input voltage frequency',
      'Minimum gain-bandwidth product',
      'Current gain in saturation'
    ],
    correctAnswer: 'Maximum rate of change of output voltage per unit time',
    explanation: 'Slew rate describes how fast the Op-Amp can respond to sudden changes in input voltage.'
  },
  {
    id: 'el-34',
    text: 'A transistor has α = 0.98. The collector current is 4.9 mA. What is the emitter current?',
    options: ['4.8 mA', '5.0 mA', '5.1 mA', '4.9 mA'],
    correctAnswer: '5.0 mA',
    explanation: 'IE = IC / α = 4.9 / 0.98 = 5.0 mA.'
  },
  {
    id: 'el-35',
    text: 'Which diode is used specifically as a voltage regulator?',
    options: ['Varactor diode', 'LED', 'Zener diode', 'Schottky diode'],
    correctAnswer: 'Zener diode',
    explanation: 'Zener diodes operate in the breakdown region to maintain a constant voltage across their terminals.'
  },
  {
    id: 'el-36',
    text: 'In a half-wave rectifier, if the peak input voltage is Vm, the Peak Inverse Voltage (PIV) across the diode is:',
    options: ['Vm', '2Vm', 'Vm/2', '0'],
    correctAnswer: 'Vm',
    explanation: 'In a half-wave rectifier, the diode must withstand the peak voltage in the reverse cycle.'
  },
  {
    id: 'el-37',
    text: 'For a silicon crystal at absolute zero temperature, it behaves as:',
    options: ['A conductor', 'An insulator', 'A superconductor', 'A p-type semiconductor'],
    correctAnswer: 'An insulator',
    explanation: 'At 0K, no electrons have enough thermal energy to jump to the conduction band.'
  },
  {
    id: 'el-38',
    text: 'The voltage gain of a common collector amplifier is typically:',
    options: ['Very high', 'Less than but close to unity', 'Exactly zero', 'Infinite'],
    correctAnswer: 'Less than but close to unity',
    explanation: 'Common collector (emitter follower) amplifiers have high current gain but voltage gain ≤ 1.'
  },
  {
    id: 'el-39',
    text: 'What is the boolean expression for the XOR gate?',
    options: ['A . B', 'A + B', 'A\'B + AB\'', 'A\'B\' + AB'],
    correctAnswer: 'A\'B + AB\'',
    explanation: 'XOR outputs HIGH only when inputs are different.'
  },
  {
    id: 'el-40',
    text: 'In an n-channel JFET, the conduction is due to:',
    options: ['Holes', 'Electrons', 'Both holes and electrons', 'Ions'],
    correctAnswer: 'Electrons',
    explanation: 'In an n-channel device, the majority carriers are electrons.'
  },
  {
    id: 'el-41',
    text: 'Which bias is applied to the collector-base junction of a transistor in normal amplification?',
    options: ['Forward bias', 'Reverse bias', 'No bias', 'Zero bias'],
    correctAnswer: 'Reverse bias',
    explanation: 'The collector-base junction must be reverse biased to collect carriers from the base.'
  },
  {
    id: 'el-42',
    text: 'A NAND gate is formed by connecting:',
    options: ['AND and NOT gates', 'OR and NOT gates', 'Two NOT gates', 'Two AND gates'],
    correctAnswer: 'AND and NOT gates',
    explanation: 'NAND stands for NOT-AND.'
  },
  {
    id: 'el-43',
    text: 'The width of the depletion layer in a p-n junction increases with:',
    options: ['Forward bias', 'Reverse bias', 'Increase in temperature', 'Decrease in doping'],
    correctAnswer: 'Reverse bias',
    explanation: 'Reverse bias pulls majority carriers away from the junction, widening the depletion region.'
  },
  {
    id: 'el-44',
    text: 'For an Op-Amp, the Open Loop Gain is roughly:',
    options: ['10', '100', '10^5 to 10^8', '0'],
    correctAnswer: '10^5 to 10^8',
    explanation: 'Ideal Op-Amps have infinite open loop gain; real ones are very high (100k+).'
  },
  {
    id: 'el-45',
    text: 'The majority carriers in p-type semiconductors are:',
    options: ['Electrons', 'Protons', 'Holes', 'Neutrons'],
    correctAnswer: 'Holes',
    explanation: 'P-type material has an abundance of "acceptor" levels which behave as positive holes.'
  },
  {
    id: 'el-46',
    text: 'In a full-wave bridge rectifier, if input frequency is 60Hz, output ripple frequency is:',
    options: ['30 Hz', '60 Hz', '120 Hz', '240 Hz'],
    correctAnswer: '120 Hz',
    explanation: 'Full-wave rectification doubles the ripple frequency.'
  },
  {
    id: 'el-47',
    text: 'What happens to a transistor if the collector-base junction is forward biased?',
    options: ['It enters saturation', 'It enters cut-off', 'It operates in active region', 'It burns out immediately'],
    correctAnswer: 'It enters saturation',
    explanation: 'In saturation, both junctions are forward biased, allowing maximum current flow.'
  },
  {
    id: 'el-48',
    text: 'A phototransistor is more sensitive than a photodiode because:',
    options: [
      'It has larger area',
      'It provides internal gain',
      'It is made of special metal',
      'It works in forward bias'
    ],
    correctAnswer: 'It provides internal gain',
    explanation: 'The photo-generated current is amplified by the transistor action (β factor).'
  },
  {
    id: 'el-49',
    text: 'The forbidden energy gap in Germanium is:',
    options: ['1.1 eV', '0.7 eV', '5 eV', '0.01 eV'],
    correctAnswer: '0.7 eV',
    explanation: 'Germanium has a smaller bandgap (~0.7eV) compared to Silicon (~1.1eV).'
  },
  {
    id: 'el-51',
    text: 'A transistor has a power dissipation rating of 500 mW. If the collector current is 20 mA, what is the maximum permissible collector-emitter voltage?',
    options: ['10 V', '25 V', '50 V', '100 V'],
    correctAnswer: '25 V',
    explanation: 'P = V * I. So V = P / I = 0.5W / 0.02A = 25 V.'
  },
  {
    id: 'el-52',
    text: 'In an operational amplifier, the "Unity Gain Bandwidth" (UGB) is the frequency at which:',
    options: ['Open loop gain is zero', 'Open loop gain is unity (1)', 'Closed loop gain is maximum', 'Phase shift is 180°'],
    correctAnswer: 'Open loop gain is unity (1)',
    explanation: 'UGB is a key product parameter for Op-Amps, indicating the maximum frequency for 1:1 voltage transfer.'
  },
  {
    id: 'el-53',
    text: 'A p-n junction diode is connected in series with a 10V DC source. If the diode is in reverse bias and an ideal voltmeter is connected across it, the reading will be:',
    options: ['0 V', '0.7 V', '10 V', '5 V'],
    correctAnswer: '10 V',
    explanation: 'In reverse bias, an ideal diode acts as an open circuit, so the full source voltage appears across it.'
  },
  {
    id: 'el-54',
    text: 'The input to a Full Wave Rectifier is 10 sin(314t). The average value of the output voltage is approximately:',
    options: ['3.18 V', '6.37 V', '7.07 V', '10 V'],
    correctAnswer: '6.37 V',
    explanation: 'V_avg = 2Vm / π = (2 * 10) / 3.14 ≈ 6.37 V.'
  },
  {
    id: 'el-55',
    text: 'In an inverting Op-Amp circuit, R1 = 2kΩ and Rf = 20kΩ. If the input is a 100mV DC signal, the output will be:',
    options: ['1 V', '-1 V', '2 V', '-2 V'],
    correctAnswer: '-1 V',
    explanation: 'Vout = -(Rf/R1) * Vin = -(20/2) * 100mV = -10 * 100mV = -1000mV = -1V.'
  },
  {
    id: 'el-56',
    text: 'Which of the following is true for an Intrinsic semiconductor at room temperature?',
    options: [
      'Number of electrons = Number of holes',
      'Number of electrons > Number of holes',
      'Number of holes > Number of electrons',
      'No charge carriers exist'
    ],
    correctAnswer: 'Number of electrons = Number of holes',
    explanation: 'In intrinsic semiconductors, every electron that jumps to the conduction band leaves a hole behind.'
  },
  {
    id: 'el-57',
    text: 'A transistor amplifier has a voltage gain of 50 and a current gain of 100. The power gain in dB is:',
    options: ['37 dB', '50 dB', '70 dB', '5000 dB'],
    correctAnswer: '37 dB',
    explanation: 'Power Gain = Av * Ai = 50 * 100 = 5000. Power Gain (dB) = 10 log(5000) ≈ 10 * 3.7 = 37 dB.'
  },
  {
    id: 'el-58',
    text: 'The logic expression A.(A+B) is equivalent to:',
    options: ['A', 'B', 'A+B', 'AB'],
    correctAnswer: 'A',
    explanation: 'Using absorption law: A.(A+B) = A.A + A.B = A + AB = A(1+B) = A.'
  },
  {
    id: 'el-59',
    text: 'What is the purpose of the coupling capacitor in a multi-stage amplifier?',
    options: [
      'To provide negative feedback',
      'To block DC and pass AC',
      'To increase voltage gain',
      'To reduce noise'
    ],
    correctAnswer: 'To block DC and pass AC',
    explanation: 'Coupling capacitors isolate the DC biasing levels of adjacent stages while allowing signal transfer.'
  },
  {
    id: 'el-60',
    text: 'In a JFET, the "Pinch-off voltage" (Vp) is the value of Vgs at which:',
    options: [
      'Drain current becomes zero',
      'Drain current becomes maximum',
      'Gate breaks down',
      'Source is grounded'
    ],
    correctAnswer: 'Drain current becomes zero',
    explanation: 'At Vp, the depletion regions meet and block the channel completely.'
  },
  {
    id: 'el-61',
    text: 'The binary equivalent of the decimal number 13 is:',
    options: ['1101', '1011', '1110', '1001'],
    correctAnswer: '1101',
    explanation: '8 + 4 + 0 + 1 = 13. (1*2^3 + 1*2^2 + 0*2^1 + 1*2^0).'
  },
  {
    id: 'el-62',
    text: 'If the base current is 50 μA and the collector current is 5.05 mA, what is the emitter current?',
    options: ['5.0 mA', '5.1 mA', '5.55 mA', '5.15 mA'],
    correctAnswer: '5.1 mA',
    explanation: 'IE = IB + IC = 0.05 mA + 5.05 mA = 5.1 mA.'
  },
  {
    id: 'el-63',
    text: 'The term "Dark Current" in a photodiode refers to current in:',
    options: [
      'Presence of bright light',
      'Absence of light',
      'Saturation region',
      'Breakdown region'
    ],
    correctAnswer: 'Absence of light',
    explanation: 'Dark current is the small reverse current that flows due to thermal generation when no light falls on the photodiode.'
  },
  {
    id: 'el-64',
    text: 'In an Op-Amp Summing Amplifier with three inputs (V1, V2, V3) and equal resistors, the output is:',
    options: [
      '-(V1 + V2 + V3)',
      'V1 + V2 + V3',
      '-(V1*V2*V3)',
      '3(V1+V2+V3)'
    ],
    correctAnswer: '-(V1 + V2 + V3)',
    explanation: 'Vout = -Rf * (V1/R1 + V2/R2 + V3/R3). If Rf=R1=R2=R3, then Vout = -(V1+V2+V3).'
  },
  {
    id: 'el-65',
    text: 'A digital system that can store one bit of data is called a:',
    options: ['Gate', 'Comparator', 'Flip-flop', 'Decoder'],
    correctAnswer: 'Flip-flop',
    explanation: 'A flip-flop is a bistable multivibrator used as a basic memory unit.'
  },
  {
    id: 'el-66',
    text: 'Which diode is known for its high-speed switching due to absence of minority carrier storage?',
    options: ['Zener', 'Tunnel', 'Schottky', 'Varactor'],
    correctAnswer: 'Schottky',
    explanation: 'Schottky diodes use a metal-semiconductor junction, eliminating recovery time issues typical of p-n junctions.'
  },
  {
    id: 'el-67',
    text: 'What happens to the resistance of an NTC Thermistor as temperature increases?',
    options: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'],
    correctAnswer: 'Decreases',
    explanation: 'NTC stands for Negative Temperature Coefficient; resistance drops with heat.'
  },
  {
    id: 'el-68',
    text: 'The collector efficiency of a Class A amplifier is approximately:',
    options: ['25% to 50%', '75%', '90%', '100%'],
    correctAnswer: '25% to 50%',
    explanation: 'Class A amplifiers are inefficient due to constant biasing current leading to high power waste.'
  },
  {
    id: 'el-69',
    text: 'If the input frequency to a Bridge Rectifier is f, the peak-to-peak voltage across the filter capacitor is decreased by:',
    options: [
      'Increasing C',
      'Increasing load resistance R',
      'Both A and B',
      'None'
    ],
    correctAnswer: 'Both A and B',
    explanation: 'Ripple voltage ΔV = I / (fC) = V / (fRC). Increasing R or C reduces ripple.'
  },
  {
    id: 'el-70',
    text: 'In an n-p-n transistor, the alpha (α) is defined as the ratio of:',
    options: ['IC / IB', 'IC / IE', 'IE / IB', 'IB / IC'],
    correctAnswer: 'IC / IE',
    explanation: 'Alpha is the common-base current gain, always slightly less than 1.'
  },
  {
    id: 'el-71',
    text: 'A "Cold junction" compensation is used in which electronic sensor application?',
    options: ['Thermistor', 'LDR', 'Thermocouple', 'Piezometer'],
    correctAnswer: 'Thermocouple',
    explanation: 'Thermocouples measure temperature difference; the reference junction must be compensated.'
  },
  {
    id: 'el-72',
    text: 'The input impedance of a Common Base amplifier is:',
    options: ['Very low', 'Very high', 'Infinite', 'Medium'],
    correctAnswer: 'Very low',
    explanation: 'The common-base configuration has the lowest input impedance among transistor modes.'
  },
  {
    id: 'el-73',
    text: 'What is the characteristic of an Operational Amplifier Integrator circuit?',
    options: [
      'Resistor in feedback, capacitor at input',
      'Capacitor in feedback, resistor at input',
      'Both resistors in feedback and input',
      'No feedback'
    ],
    correctAnswer: 'Capacitor in feedback, resistor at input',
    explanation: 'The feedback capacitor stores charge proportional to the integral of the input voltage.'
  },
  {
    id: 'el-74',
    text: 'A 4-bit binary counter can count up to a maximum decimal value of:',
    options: ['4', '15', '16', '32'],
    correctAnswer: '15',
    explanation: '2^4 - 1 = 16 - 1 = 15. (Binary 1111).'
  },
  {
    id: 'el-75',
    text: 'Identify the "Active" component from the following:',
    options: ['Resistor', 'Capacitor', 'Inductor', 'Transistor'],
    correctAnswer: 'Transistor',
    explanation: 'Active components (like transistors) can control current flow and provide gain, unlike passive ones.'
  },
  {
    id: 'el-76',
    text: 'In a heavily doped p-type semiconductor, the Fermi level moves:',
    options: [
      'Towards the conduction band',
      'Towards the valence band',
      'Stays at the center of the gap',
      'Moves out of the crystal'
    ],
    correctAnswer: 'Towards the valence band',
    explanation: 'P-type doping shifts the Fermi level closer to the valence band edge.'
  },
  {
    id: 'el-77',
    text: 'The "Beta" (β) value of a Darlington pair (two transistors T1 and T2 connected) is approximately:',
    options: ['β1 + β2', 'β1 * β2', 'β1 / β2', '1'],
    correctAnswer: 'β1 * β2',
    explanation: 'A Darlington pair provides a very high current gain equal to the product of individual gains.'
  },
  {
    id: 'el-78',
    text: 'Which logic gate is equivalent to a series circuit of two switches?',
    options: ['AND', 'OR', 'NOR', 'XOR'],
    correctAnswer: 'AND',
    explanation: 'Current flows only if both Switch A AND Switch B are closed.'
  },
  {
    id: 'el-79',
    text: 'The depletion region of a diode contains:',
    options: ['Only electrons', 'Only holes', 'No mobile charge carriers', 'Mobile electrons and holes'],
    correctAnswer: 'No mobile charge carriers',
    explanation: 'The depletion region is cleared of mobile carriers, leaving only fixed ionized atoms.'
  },
  {
    id: 'el-80',
    text: 'What is the voltage gain (Av) of a non-inverting amplifier with R1 = 1kΩ and Rf = 4kΩ?',
    options: ['4', '5', '-4', '3'],
    correctAnswer: '5',
    explanation: 'Av = 1 + (Rf / R1) = 1 + (4/1) = 5.'
  },
  {
    id: 'el-81',
    text: 'A transistor has β = 150. If the base current increases by 2 μA, the collector current increases by:',
    options: ['75 μA', '300 μA', '152 μA', '0.013 μA'],
    correctAnswer: '300 μA',
    explanation: 'ΔIC = β * ΔIB = 150 * 2 μA = 300 μA.'
  },
  {
    id: 'el-82',
    text: 'Which device is used to perform the reverse of rectification (converting DC to AC)?',
    options: ['Transformer', 'Inverter', 'Cycloconverter', 'Converter'],
    correctAnswer: 'Inverter',
    explanation: 'Inverters are power electronic devices that convert direct current to alternating current.'
  },
  {
    id: 'el-83',
    text: 'The "Knee Voltage" of a Silicon diode is approximately:',
    options: ['0.1 V', '0.3 V', '0.7 V', '1.1 V'],
    correctAnswer: '0.7 V',
    explanation: 'Silicon diodes start conducting significant current around 0.7V.'
  },
  {
    id: 'el-84',
    text: 'In an Op-Amp, the "Offset Null" pins are used to:',
    options: [
      'Increase the gain',
      'Zero out the output when inputs are zero',
      'Connect external power',
      'Control the frequency'
    ],
    correctAnswer: 'Zero out the output when inputs are zero',
    explanation: 'They allow for adjustment of internal imbalances to ensure 0V output for 0V input.'
  },
  {
    id: 'el-85',
    text: 'The most common material used for making integrated circuits (ICs) is:',
    options: ['Germanium', 'Gallium Arsenide', 'Silicon', 'Copper'],
    correctAnswer: 'Silicon',
    explanation: 'Silicon is abundant, easy to process, and forms a stable native oxide (SiO2).'
  },
  {
    id: 'el-86',
    text: 'A "Buffer" amplifier has:',
    options: [
      'High input impedance and low output impedance',
      'Low input impedance and high output impedance',
      'High gain',
      'Phase reversal of 90°'
    ],
    correctAnswer: 'High input impedance and low output impedance',
    explanation: 'Buffers isolate stages without changing signal voltage, requiring high Zin to avoid loading.'
  },
  {
    id: 'el-87',
    text: 'The Boolean expression (A+B)\' is equal to:',
    options: ['A\'.B\'', 'A\'+B\'', 'A.B', 'A\'+B'],
    correctAnswer: 'A\'.B\'',
    explanation: 'By De Morgan\'s Law: The complement of an OR is the AND of the complements.'
  },
  {
    id: 'el-88',
    text: 'Which mode of a transistor configuration is used for impedance matching?',
    options: ['Common Emitter', 'Common Base', 'Common Collector', 'None'],
    correctAnswer: 'Common Collector',
    explanation: 'Due to its high input and low output impedance, it is ideal for impedance matching.'
  },
  {
    id: 'el-89',
    text: 'What happens to the width of the depletion layer if forward bias is increased?',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes infinite'],
    correctAnswer: 'Decreases',
    explanation: 'Forward bias reduces the potential barrier and narrows the depletion region.'
  },
  {
    id: 'el-90',
    text: 'In Digital Electronics, logic "1" usually corresponds to:',
    options: ['0 V', '-5 V', 'High Voltage (e.g., +5V or +3.3V)', 'Floating state'],
    correctAnswer: 'High Voltage (e.g., +5V or +3.3V)',
    explanation: 'Standard TTL/CMOS logic levels use positive voltages for HIGH (1) state.'
  },
  {
    id: 'el-91',
    text: 'The operation of a Full-wave bridge rectifier is based on:',
    options: ['1 diode', '2 diodes', '4 diodes', 'Zener action'],
    correctAnswer: '4 diodes',
    explanation: 'A bridge rectifier uses 4 diodes to provide full-wave rectification.'
  },
  {
    id: 'el-92',
    text: 'An Operational Amplifier Differentiator circuit uses:',
    options: [
      'Capacitor as input component',
      'Capacitor as feedback component',
      'Inductor as input',
      'Dual power supplies only'
    ],
    correctAnswer: 'Capacitor as input component',
    explanation: 'Current through input capacitor C is C(dV/dt), which the Op-Amp converts to output voltage.'
  },
  {
    id: 'el-93',
    text: 'The common-base current gain (α) of a transistor is 0.9. If the emitter current is 10 mA, the base current is:',
    options: ['1 mA', '9 mA', '0.1 mA', '0.9 mA'],
    correctAnswer: '1 mA',
    explanation: 'IC = α * IE = 0.9 * 10 = 9 mA. IB = IE - IC = 10 - 9 = 1 mA.'
  },
  {
    id: 'el-94',
    text: 'Which component is used for filtering in a power supply?',
    options: ['Capacitor', 'Diode', 'Transformer', 'Switch'],
    correctAnswer: 'Capacitor',
    explanation: 'Capacitors store charge and discharge during the dips in ripple, smoothing the DC level.'
  },
  {
    id: 'el-95',
    text: 'The "Threshold" voltage of a digital logic gate is:',
    options: [
      'Voltage above which input is HIGH',
      'Breakdown voltage',
      'Maximum supply voltage',
      'Output voltage at maximum frequency'
    ],
    correctAnswer: 'Voltage above which input is HIGH',
    explanation: 'Inputs above the threshold are treated as logic 1.'
  },
  {
    id: 'el-96',
    text: 'A "Varactor" diode is used primarily for its:',
    options: ['Variable resistance', 'Variable capacitance', 'Variable inductance', 'High-speed switching'],
    correctAnswer: 'Variable capacitance',
    explanation: 'The junction capacitance of a varactor changes with reverse bias voltage.'
  },
  {
    id: 'el-97',
    text: 'In an OR gate with 3 inputs, how many input combinations result in a logic "0" output?',
    options: ['1', '3', '7', '8'],
    correctAnswer: '1',
    explanation: 'Only (0,0,0) results in 0. All other 7 combinations (at least one 1) result in 1.'
  },
  {
    id: 'el-98',
    text: 'The "Beta" (β) of a transistor is also called:',
    options: [
      'Common base current gain',
      'Common emitter current gain',
      'Voltage stability factor',
      'Input resistance'
    ],
    correctAnswer: 'Common emitter current gain',
    explanation: 'β = IC / IB represents the amplification factor in CE mode.'
  },
  {
    id: 'el-99',
    text: 'What is the main advantage of using an FET over a BJT?',
    options: [
      'Higher input impedance',
      'Higher speed',
      'Higher power handling',
      'Lower cost'
    ],
    correctAnswer: 'Higher input impedance',
    explanation: 'FETs (Field Effect Transistors) have extremely high input impedance, drawing negligible current.'
  },
  {
    id: 'el-100',
    text: 'A Bridge Rectifier has efficiency _____ that of a center-tapped full-wave rectifier.',
    options: ['Twice', 'Equal to', 'Half', 'Quarter'],
    correctAnswer: 'Equal to',
    explanation: 'Both types of full-wave rectifiers have the same theoretical maximum efficiency (~81%).'
  }
];
