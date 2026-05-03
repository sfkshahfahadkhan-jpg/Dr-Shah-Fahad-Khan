import { Question } from '../types';

export const PHYSICS_ELECTRICITY_QUIZ: Question[] = [
  {
    id: 'ph-ce-1',
    text: 'The rate of flow of electric charge is called:',
    options: ['Voltage', 'Resistance', 'Electric current', 'Power'],
    correctAnswer: 'Electric current',
    explanation: 'I = Q / t.'
  },
  {
    id: 'ph-ce-2',
    text: 'The SI unit of electric current is:',
    options: ['Volt', 'Ohm', 'Ampere (A)', 'Coulomb'],
    correctAnswer: 'Ampere (A)',
    explanation: '1 A = 1 C/s.'
  },
  {
    id: 'ph-ce-3',
    text: 'A current of 1 A corresponds to a flow of _____ electrons per second.',
    options: ['1', '6.25 x 10^18', '1.6 x 10^-19', 'None'],
    correctAnswer: '6.25 x 10^18',
    explanation: 'Q = ne -> 1 = n * 1.6e-19 -> n = 6.25e18.'
  },
  {
    id: 'ph-ce-4',
    text: 'Conventionally, the direction of current is taken as the direction of flow of:',
    options: ['Negative charges', 'Positive charges', 'Neutrons', 'None'],
    correctAnswer: 'Positive charges',
    explanation: 'From high potential to low potential.'
  },
  {
    id: 'ph-ce-5',
    text: 'In electrolytes, the current is carried by:',
    options: ['Electrons', 'Protons', 'Positive and negative ions', 'None'],
    correctAnswer: 'Positive and negative ions',
    explanation: 'Mobile ions in solution.'
  },
  {
    id: 'ph-ce-6',
    text: 'Ohm\'s Law states that current is _____ proportional to potential difference, provided physical conditions are constant.',
    options: ['Inversely', 'Directly', 'Not', 'None'],
    correctAnswer: 'Directly',
    explanation: 'V = IR.'
  },
  {
    id: 'ph-ce-7',
    text: 'The SI unit of resistance is:',
    options: ['Volt', 'Ohm (Ω)', 'Ampere', 'Siemens'],
    correctAnswer: 'Ohm (Ω)',
    explanation: '1 Ω = 1 V/A.'
  },
  {
    id: 'ph-ce-8',
    text: 'Resistance (R) of a wire is directly proportional to its _____ and inversely to its _____.',
    options: ['Area, Length', 'Length, Area', 'Volume, Mass', 'None'],
    correctAnswer: 'Length, Area',
    explanation: 'R = ρL / A.'
  },
  {
    id: 'ph-ce-9',
    text: 'The resistivity (ρ) of a material depends on:',
    options: ['Length', 'Area', 'Nature of material and temperature', 'None'],
    correctAnswer: 'Nature of material and temperature',
    explanation: 'Intrinsic property.'
  },
  {
    id: 'ph-ce-10',
    text: 'The SI unit of resistivity is:',
    options: ['Ohm', 'Ohm-meter (Ω.m)', 'Ohm/meter', 'None'],
    correctAnswer: 'Ohm-meter (Ω.m)',
    explanation: 'From ρ = RA/L.'
  },
  {
    id: 'ph-ce-11',
    text: 'The reciprocal of resistance is called:',
    options: ['Conductivity', 'Conductance (G)', 'Resistivity', 'None'],
    correctAnswer: 'Conductance (G)',
    explanation: 'G = 1/R; unit is Siemens (S) or mho.'
  },
  {
    id: 'ph-ce-12',
    text: 'The reciprocal of resistivity is called:',
    options: ['Conductance', 'Conductivity (σ)', 'Resistance', 'None'],
    correctAnswer: 'Conductivity (σ)',
    explanation: 'σ = 1/ρ; unit is S/m.'
  },
  {
    id: 'ph-ce-13',
    text: 'Resistance of metals _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to more frequent collisions of electrons with lattice ions.'
  },
  {
    id: 'ph-ce-14',
    text: 'Resistance of semiconductors like Silicon and Germanium _____ with increase in temperature.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'More charge carriers are freed at higher temperatures (negative temperature coefficient).'
  },
  {
    id: 'ph-ce-15',
    text: 'The fractional change in resistance per Kelvin rise in temperature is:',
    options: ['Resistivity', 'Conductivity', 'Temperature coefficient of resistance (α)', 'None'],
    correctAnswer: 'Temperature coefficient of resistance (α)',
    explanation: 'α = (Rt - R0) / (R0 * t).'
  },
  {
    id: 'ph-ce-16',
    text: 'For metals, the temperature coefficient of resistance is:',
    options: ['Positive', 'Negative', 'Zero', 'None'],
    correctAnswer: 'Positive',
    explanation: 'Resistance increases with temperature.'
  },
  {
    id: 'ph-ce-17',
    text: 'Color Code for Carbon Resistors: Black, Brown, Red, Orange corresponds to digits:',
    options: ['1, 2, 3, 4', '0, 1, 2, 3', '4, 3, 2, 1', 'None'],
    correctAnswer: '0, 1, 2, 3',
    explanation: 'B B R O Y G B V G W.'
  },
  {
    id: 'ph-ce-18',
    text: 'In the color code, the third band represents the:',
    options: ['First digit', 'Second digit', 'Multiplier (number of zeros)', 'Tolerance'],
    correctAnswer: 'Multiplier (number of zeros)',
    explanation: '10^n.'
  },
  {
    id: 'ph-ce-19',
    text: 'A resistor with Gold fourth band has a tolerance of:',
    options: ['1%', '5%', '10%', '20%'],
    correctAnswer: '5%',
    explanation: 'Silver is 10%, no band is 20%.'
  },
  {
    id: 'ph-ce-20',
    text: 'Electrical power dissipated in a resistor is given by P =:',
    options: ['VI', 'I^2 R', 'V^2 / R', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'P = VI and substituting Ohm\'s Law.'
  },
  {
    id: 'ph-ce-21',
    text: 'The unit of electrical energy commonly used in electricity bills is:',
    options: ['Joule', 'Watt', 'Kilowatt-hour (kWh)', 'None'],
    correctAnswer: 'Kilowatt-hour (kWh)',
    explanation: '1 kWh = 3.6 x 10^6 Joules.'
  },
  {
    id: 'ph-ce-22',
    text: 'Electromotive Force (EMF) is the energy supplied by a source per unit _____:',
    options: ['Time', 'Charge', 'Mass', 'None'],
    correctAnswer: 'Charge',
    explanation: 'E = W / Q.'
  },
  {
    id: 'ph-ce-23',
    text: 'The relation between EMF (E), Terminal Voltage (V), and Internal Resistance (r) is:',
    options: ['E = V + Ir', 'V = E + Ir', 'E = V - Ir', 'None'],
    correctAnswer: 'E = V + Ir',
    explanation: 'Terminal voltage is less than EMF when current is drawn.'
  },
  {
    id: 'ph-ce-24',
    text: 'Kirchhoff\'s First Law (Point Rule) states that the algebraic sum of currents at a junction is:',
    options: ['Maximum', 'Minimum', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Based on conservation of charge.'
  },
  {
    id: 'ph-ce-25',
    text: 'Kirchhoff\'s Second Law (Loop Rule) states that the algebraic sum of potential changes in a closed loop is:',
    options: ['Maximum', 'Zero', 'Negative', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Based on conservation of energy.'
  },
  {
    id: 'ph-ce-26',
    text: 'Wheatstone Bridge is used to measure unknown _____ very accurately.',
    options: ['Voltage', 'Current', 'Resistance', 'Power'],
    correctAnswer: 'Resistance',
    explanation: 'Balanced condition: P/Q = R/S.'
  },
  {
    id: 'ph-ce-27',
    text: 'When a Wheatstone bridge is balanced, the current through the galvanometer is:',
    options: ['Maximum', 'Minimum', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Null deflection method.'
  },
  {
    id: 'ph-ce-28',
    text: 'A potentiometer is a device used to measure _____ without drawing any current.',
    options: ['Resistance', 'Potential difference / EMF', 'Power', 'None'],
    correctAnswer: 'Potential difference / EMF',
    explanation: 'Works on null deflection, unlike a voltmeter.'
  },
  {
    id: 'ph-ce-29',
    text: 'The sensitivity of a potentiometer can be increased by _____ the length of its wire.',
    options: ['Decreasing', 'Increasing', 'Keeping same', 'None'],
    correctAnswer: 'Increasing',
    explanation: 'Reduces the potential gradient (V/L).'
  },
  {
    id: 'ph-ce-30',
    text: 'In a series combination of resistors, the total resistance is _____ than the largest resistor.',
    options: ['Smaller', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'Req = R1 + R2 + ...'
  },
  {
    id: 'ph-ce-31',
    text: 'In a parallel combination of resistors, the total resistance is _____ than the smallest resistor.',
    options: ['Smaller', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Smaller',
    explanation: '1/Req = 1/R1 + 1/R2 + ...'
  },
  {
    id: 'ph-ce-32',
    text: 'The drift velocity of electrons in a metal is typically very _____ (of the order of mm/s).',
    options: ['High', 'Small', 'Zero', 'Variable'],
    correctAnswer: 'Small',
    explanation: 'Slow net movement despite high thermal speeds.'
  },
  {
    id: 'ph-ce-33',
    text: 'The power dissipated in a resistor is halved if the current is reduced by a factor of:',
    options: ['2', '4', '√2', 'None'],
    correctAnswer: '√2',
    explanation: 'P = I^2 R.'
  },
  {
    id: 'ph-ce-34',
    text: 'Materials which have very high conductivity and zero resistance below a critical temperature are:',
    options: ['Insulators', 'Semiconductors', 'Superconductors', 'None'],
    correctAnswer: 'Superconductors',
    explanation: 'Discovered by Onnes in 1911 (Mercury at 4.2 K).'
  },
  {
    id: 'ph-ce-35',
    text: 'Thermistor is a heat-sensitive resistor usually made from:',
    options: ['Pure metals', 'Semiconductors (oxides of nickel, cobalt)', 'Insulators', 'None'],
    correctAnswer: 'Semiconductors (oxides of nickel, cobalt)',
    explanation: 'Used for temperature measurement.'
  },
  {
    id: 'ph-ce-36',
    text: 'Thimble of a micrometer or screw gauge works on the principle of:',
    options: ['Screw', 'Lever', 'Gears', 'None'],
    correctAnswer: 'Screw',
    explanation: 'Mechanical instrument basics.'
  },
  {
    id: 'ph-ce-37',
    text: 'A Rheostat is a _____ resistor used to control current.',
    options: ['Fixed', 'Variable', 'High power', 'None'],
    correctAnswer: 'Variable',
    explanation: 'Used as a potential divider or current controller.'
  },
  {
    id: 'ph-ce-38',
    text: 'In the equation R = ρL/A, if the wire is stretched to double its length, its new resistance (assuming density constant) becomes:',
    options: ['2R', '4R', 'R/2', 'None'],
    correctAnswer: '4R',
    explanation: 'Length doubles and area is halved (Volume AL is constant).'
  },
  {
    id: 'ph-ce-39',
    text: 'The slope of a V-I graph for an Ohmic conductor gives:',
    options: ['Resistivity', 'Resistance', 'Conductance', 'None'],
    correctAnswer: 'Resistance',
    explanation: 'R = V/I.'
  },
  {
    id: 'ph-ce-40',
    text: 'The V-I graph for a non-ohmic conductor (like a filament bulb or diode) is:',
    options: ['Straight line', 'Curve', 'Point', 'None'],
    correctAnswer: 'Curve',
    explanation: 'Resistance changes with current/voltage.'
  },
  {
    id: 'ph-ce-41',
    text: 'Potentiometer can be used to compare _____ of two cells.',
    options: ['EMFs', 'Internal resistances', 'Capacitances', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Common laboratory applications.'
  },
  {
    id: 'ph-ce-42',
    text: 'The potential gradient along the potentiometer wire is k =:',
    options: ['V/L', 'VL', 'L/V', 'None'],
    correctAnswer: 'V/L',
    explanation: 'Potential drop per unit length.'
  },
  {
    id: 'ph-ce-43',
    text: 'Maximum power is delivered by a battery to an external load R when R =:',
    options: ['r (internal resistance)', '2r', '0', 'None'],
    correctAnswer: 'r (internal resistance)',
    explanation: 'Maximum Power Transfer Theorem.'
  },
  {
    id: 'ph-ce-44',
    text: 'The maximum power delivered is P_max =:',
    options: ['E^2 / (4r)', 'E^2 / r', 'V^2 / R', 'None'],
    correctAnswer: 'E^2 / (4r)',
    explanation: 'Derived by setting R = r.'
  },
  {
    id: 'ph-ce-45',
    text: 'Kilowatt-hour is a unit of:',
    options: ['Force', 'Power', 'Energy', 'Charge'],
    correctAnswer: 'Energy',
    explanation: 'Energy = Power * Time.'
  },
  {
    id: 'ph-ce-46',
    text: 'If three 10 ohm resistors are in parallel, the total resistance is:',
    options: ['30 ohm', '10/3 ohm', '3.33 ohm', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: '1/Req = 1/10 + 1/10 + 1/10 = 3/10.'
  },
  {
    id: 'ph-ce-47',
    text: 'In a series circuit, _____ is the same through all components.',
    options: ['Voltage', 'Current', 'Power', 'None'],
    correctAnswer: 'Current',
    explanation: 'Only one path for flow.'
  },
  {
    id: 'ph-ce-48',
    text: 'In a parallel circuit, _____ is the same across all components.',
    options: ['Voltage', 'Current', 'Resistance', 'None'],
    correctAnswer: 'Voltage',
    explanation: 'All branches connected to same nodes.'
  },
  {
    id: 'ph-ce-49',
    text: 'A "Shunt" is a _____ resistance connected in _____ with a galvanometer.',
    options: ['High, Parallel', 'Low, Parallel', 'Low, Series', 'None'],
    correctAnswer: 'Low, Parallel',
    explanation: 'Used to convert galvanometer into ammeter.'
  },
  {
    id: 'ph-ce-50',
    text: 'A "Multiplier" is a _____ resistance connected in _____ with a galvanometer.',
    options: ['High, Series', 'Low, Series', 'High, Parallel', 'None'],
    correctAnswer: 'High, Series',
    explanation: 'Used to convert galvanometer into voltmeter.'
  },
  {
    id: 'ph-ce-51',
    text: 'The potential of a neutral junction in a thermocouple is called:',
    options: ['Inversion temperature', 'Neutral temperature', 'Absolute zero', 'None'],
    correctAnswer: 'Neutral temperature',
    explanation: 'Thermo-EMF is maximum here.'
  },
  {
    id: 'ph-ce-52',
    text: 'The temperature at which thermo-EMF becomes zero and reverses is:',
    options: ['Neutral temperature', 'Temperature of inversion', 'Curie point', 'None'],
    correctAnswer: 'Temperature of inversion',
    explanation: 'Higher than neutral temperature.'
  },
  {
    id: 'ph-ce-53',
    text: 'The heating effect of current is given by H =:',
    options: ['I^2 Rt', 'VIt', 'V^2t/R', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Joule\'s Law of heating.'
  },
  {
    id: 'ph-ce-54',
    text: 'One Horsepower (hp) is equal to _____ Watts.',
    options: ['500', '746', '1000', 'None'],
    correctAnswer: '746',
    explanation: 'Imperial unit of power.'
  },
  {
    id: 'ph-ce-55',
    text: 'Kirchhoff\'s laws are more general and applicable to _____ circuits where Ohm\'s law fails.',
    options: ['Simple', 'Complex / Multi-loop', 'Linear', 'None'],
    correctAnswer: 'Complex / Multi-loop',
    explanation: 'Used for circuit analysis.'
  },
  {
    id: 'ph-ce-56',
    text: 'The terminal voltage of a cell is zero if it is _____:',
    options: ['Short-circuited', 'Open-circuited', 'Fully charged', 'None'],
    correctAnswer: 'Short-circuited',
    explanation: 'External resistance R = 0.'
  },
  {
    id: 'ph-ce-57',
    text: 'The terminal voltage of a cell is equal to its EMF if it is _____:',
    options: ['Short-circuited', 'Open-circuited', 'Under load', 'None'],
    correctAnswer: 'Open-circuited',
    explanation: 'No current is flowing (I = 0).'
  },
  {
    id: 'ph-ce-58',
    text: 'Electrolytic cells convert _____ energy into _____ energy.',
    options: ['Chemical, Electrical', 'Electrical, Chemical', 'Heat, Light', 'None'],
    correctAnswer: 'Electrical, Chemical',
    explanation: 'e.g. during charging of a battery.'
  },
  {
    id: 'ph-ce-59',
    text: 'Galvanic / Voltaic cells convert _____ energy into _____ energy.',
    options: ['Electrical, Chemical', 'Chemical, Electrical', 'Solar, Electrical', 'None'],
    correctAnswer: 'Chemical, Electrical',
    explanation: 'Spontaneous reaction produces current.'
  },
  {
    id: 'ph-ce-60',
    text: 'Which is a "Primary Cell"?',
    options: ['Lead accumulator', 'Dry cell (Zinc-Carbon)', 'Fuel cell', 'None'],
    correctAnswer: 'Dry cell (Zinc-Carbon)',
    explanation: 'Cannot be recharged.'
  },
  {
    id: 'ph-ce-61',
    text: 'Which is a "Secondary Cell"?',
    options: ['Zinc-Carbon cell', 'Lead-acid battery', 'Voltaic pile', 'None'],
    correctAnswer: 'Lead-acid battery',
    explanation: 'Rechargeable.'
  },
  {
    id: 'ph-ce-62',
    text: 'A fuse is a safety device that works on the _____ effect of current.',
    options: ['Magnetic', 'Heating', 'Chemical', 'None'],
    correctAnswer: 'Heating',
    explanation: 'Melts when current exceeds a certain limit.'
  },
  {
    id: 'ph-ce-63',
    text: 'Current through a human body is dangerous because it interferes with _____ signals.',
    options: ['Digestive', 'Nervous', 'Thermal', 'None'],
    correctAnswer: 'Nervous',
    explanation: 'Specifically, it can cause heart fibrillations.'
  },
  {
    id: 'ph-ce-64',
    text: 'Potentiometer wire should have _____ resistance and _____ temperature coefficient.',
    options: ['Low, High', 'High, Low', 'Zero, Zero', 'None'],
    correctAnswer: 'High, Low',
    explanation: 'Standard material is Manganin or Constantan.'
  },
  {
    id: 'ph-ce-65',
    text: 'The sensitivity of a galvanometer refers to the _____ produced per unit current.',
    options: ['Heat', 'Deflection', 'Voltage', 'None'],
    correctAnswer: 'Deflection',
    explanation: 'Measured in radians/ampere.'
  },
  {
    id: 'ph-ce-66',
    text: 'The "Meter Bridge" is a practical form of _____:',
    options: ['Potentiometer', 'Wheatstone Bridge', 'Voltmeter', 'None'],
    correctAnswer: 'Wheatstone Bridge',
    explanation: 'Uses a 1-meter long wire.'
  },
  {
    id: 'ph-ce-67',
    text: 'A resistor of 4 ohms is connected to 12 V battery. The current is:',
    options: ['48 A', '3 A', '0.33 A', 'None'],
    correctAnswer: '3 A',
    explanation: 'I = V / R = 12 / 4 = 3 A.'
  },
  {
    id: 'ph-ce-68',
    text: 'The resistance of a perfect insulator is:',
    options: ['Zero', 'Infinite', '1 megohm', 'None'],
    correctAnswer: 'Infinite',
    explanation: 'No charge can flow.'
  },
  {
    id: 'ph-ce-69',
    text: 'The resistance of a perfect conductor is:',
    options: ['Zero', 'Infinite', 'Small', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Charge flows without any loss.'
  },
  {
    id: 'ph-ce-70',
    text: 'If a 100 W bulb and 60 W bulb are connected in series, which will glow brighter?',
    options: ['100 W', '60 W', 'Both same', 'None'],
    correctAnswer: '60 W',
    explanation: '60 W bulb has higher resistance (R = V^2/P), so in series (P=I^2R) it dissipates more power.'
  },
  {
    id: 'ph-ce-71',
    text: 'If a 100 W bulb and 60 W bulb are connected in parallel, which will glow brighter?',
    options: ['100 W', '60 W', 'Both same', 'None'],
    correctAnswer: '100 W',
    explanation: 'In parallel (P=V^2/R), the one with lower resistance (100W) dissipates more power.'
  },
  {
    id: 'ph-ce-72',
    text: 'Internal resistance of a cell is due to the resistance of _____:',
    options: ['Terminals', 'Electrolyte and electrodes', 'Container', 'None'],
    correctAnswer: 'Electrolyte and electrodes',
    explanation: 'Opposition to ion flow inside.'
  },
  {
    id: 'ph-ce-73',
    text: 'The maximum current that can be drawn from a cell is I_max =:',
    options: ['E / r', 'E / (R+r)', 'V / R', 'None'],
    correctAnswer: 'E / r',
    explanation: 'When external resistance R = 0.'
  },
  {
    id: 'ph-ce-74',
    text: 'Thermistors with negative temperature coefficient (NTC) are widely used for:',
    options: ['Heating', 'Temperature sensing', 'Lighting', 'None'],
    correctAnswer: 'Temperature sensing',
    explanation: 'Resistance drops as they get hot.'
  },
  {
    id: 'ph-ce-75',
    text: 'A "Short Circuit" occurs when a _____ path is created between terminals.',
    options: ['High resistance', 'Zero or low resistance', 'Open', 'None'],
    correctAnswer: 'Zero or low resistance',
    explanation: 'Causes high current flow.'
  },
  {
    id: 'ph-ce-76',
    text: 'The total energy consumed by an appliance of power P used for time t is:',
    options: ['P / t', 'P * t', 'V * I', 'None'],
    correctAnswer: 'P * t',
    explanation: 'Measured in Joules or kWh.'
  },
  {
    id: 'ph-ce-77',
    text: 'The color band corresponding to 5% tolerance is:',
    options: ['Silver', 'Gold', 'Red', 'None'],
    correctAnswer: 'Gold',
    explanation: 'Silver is 10%.'
  },
  {
    id: 'ph-ce-78',
    text: 'A potentiometer can be used to measure the internal resistance of a cell using the formula r =:',
    options: ['R (L1/L2 - 1)', 'R (1 - L2/L1)', 'R (L1/L2)', 'None'],
    correctAnswer: 'R (L1/L2 - 1)',
    explanation: 'L1 is balance length on open circuit, L2 on closed circuit.'
  },
  {
    id: 'ph-ce-79',
    text: 'Electrical energy is sold in units of kWh. How many Joules in 0.5 kWh?',
    options: ['1.8 x 10^6', '3.6 x 10^6', '0.5 x 10^3', 'None'],
    correctAnswer: '1.8 x 10^6',
    explanation: '0.5 * 3.6e6 = 1.8e6 J.'
  },
  {
    id: 'ph-ce-80',
    text: 'Kirchhoff\'s loop rule is a consequence of conservation of:',
    options: ['Charge', 'Mass', 'Energy', 'Momentum'],
    correctAnswer: 'Energy',
    explanation: 'Potential is energy per unit charge.'
  },
  {
    id: 'ph-ce-81',
    text: 'Kirchhoff\'s junction rule is a consequence of conservation of:',
    options: ['Charge', 'Mass', 'Energy', 'None'],
    correctAnswer: 'Charge',
    explanation: 'Total current in = Total current out.'
  },
  {
    id: 'ph-ce-82',
    text: 'Specific resistance (resistivity) of a wire _____ if its diameter is doubled.',
    options: ['Doubles', 'Halves', 'Remains same', 'None'],
    correctAnswer: 'Remains same',
    explanation: 'Resistivity is an intensive property; it doesn\'t change with dimensions.'
  },
  {
    id: 'ph-ce-83',
    text: 'The resistance of a wire is R. It is melted and cast into a wire of half its radius. The new resistance is:',
    options: ['2R', '4R', '16R', 'None'],
    correctAnswer: '16R',
    explanation: 'Radius 1/2 means Area 1/4. Since volume is constant, Length becomes 4 times. R_new = ρ(4L)/(A/4) = 16R.'
  },
  {
    id: 'ph-ce-84',
    text: 'Superconductors are used in:',
    options: ['MRI machines', 'Maglev trains', 'Particle accelerators', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Applications of zero resistance and strong magnetic fields.'
  },
  {
    id: 'ph-ce-85',
    text: 'Temperature of a superconductor at which it shows zero resistance is called:',
    options: ['Critical temperature (Tc)', 'Curie temperature', 'Boiling point', 'None'],
    correctAnswer: 'Critical temperature (Tc)',
    explanation: 'Phase transition point.'
  },
  {
    id: 'ph-ce-86',
    text: 'The drift velocity (vd) is related to current (I) by I =:',
    options: ['n A e vd', 'n e vd / A', 'A e vd / n', 'None'],
    correctAnswer: 'n A e vd',
    explanation: 'where n is electron density.'
  },
  {
    id: 'ph-ce-87',
    text: 'The SI unit of conductance is:',
    options: ['Ohm', 'Siemens (S)', 'Farad', 'None'],
    correctAnswer: 'Siemens (S)',
    explanation: 'Also called mho (inverse ohm).'
  },
  {
    id: 'ph-ce-88',
    text: 'Potentiometer balance point doesn\'t depend on _____ of the wire.',
    options: ['Length', 'Material', 'Area of cross-section (if uniform)', 'None'],
    correctAnswer: 'Area of cross-section (if uniform)',
    explanation: 'Potential gradient is V/L.'
  },
  {
    id: 'ph-ce-89',
    text: 'A wire has resistance 10 Ω. It is cut into two equal pieces and connected in parallel. The total resistance is:',
    options: ['10 Ω', '5 Ω', '2.5 Ω', 'None'],
    correctAnswer: '2.5 Ω',
    explanation: 'Each piece is 5 Ω. Parallel: 1/Req = 1/5 + 1/5 = 2/5 -> Req = 2.5 Ω.'
  },
  {
    id: 'ph-ce-90',
    text: 'Heating element of an electric heater is usually made of:',
    options: ['Copper', 'Iron', 'Nichrome', 'Silver'],
    correctAnswer: 'Nichrome',
    explanation: 'High resistivity and high melting point.'
  },
  {
    id: 'ph-ce-91',
    text: 'Ohm\'s law is NOT applicable to:',
    options: ['Vacuum tubes', 'Semiconductors', 'Arc lamps', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Non-ohmic devices.'
  },
  {
    id: 'ph-ce-92',
    text: 'The resistance of an ideal ammeter should be:',
    options: ['Infinite', 'Zero', '100 ohm', 'None'],
    correctAnswer: 'Zero',
    explanation: 'So it doesn\'t affect the current in the branch.'
  },
  {
    id: 'ph-ce-93',
    text: 'The resistance of an ideal voltmeter should be:',
    options: ['Infinite', 'Zero', '1 ohm', 'None'],
    correctAnswer: 'Infinite',
    explanation: 'So it doesn\'t draw any current from the circuit.'
  },
  {
    id: 'ph-ce-94',
    text: 'An ammeter is always connected in _____ and a voltmeter in _____ with the load.',
    options: ['Series, Parallel', 'Parallel, Series', 'Both Series', 'None'],
    correctAnswer: 'Series, Parallel',
    explanation: 'Standard connection rules.'
  },
  {
    id: 'ph-ce-95',
    text: 'Wheatstone bridge is most sensitive when all four resistances are:',
    options: ['Very large', 'Very small', 'Of same order of magnitude', 'None'],
    correctAnswer: 'Of same order of magnitude',
    explanation: 'Gives better null point precision.'
  },
  {
    id: 'ph-ce-96',
    text: 'Electrolytic refining of copper is based on _____ effect of current.',
    options: ['Magnetic', 'Chemical', 'Thermal', 'None'],
    correctAnswer: 'Chemical',
    explanation: 'Faraday\'s laws of electrolysis.'
  },
  {
    id: 'ph-ce-97',
    text: 'Which has a negative temperature coefficient of resistance?',
    options: ['Iron', 'Copper', 'Carbon', 'Silver'],
    correctAnswer: 'Carbon',
    explanation: 'Non-metal/Semimetal behavior.'
  },
  {
    id: 'ph-ce-98',
    text: 'The "Joule effect" refers to:',
    options: ['Heating of conductor by current', 'Cooling of conductor', 'Movement of ions', 'None'],
    correctAnswer: 'Heating of conductor by current',
    explanation: 'Work done by field converted to heat.'
  },
  {
    id: 'ph-ce-99',
    text: 'A wire of resistance R is coiled into a circle. The resistance between any two diametrically opposite points is:',
    options: ['R', 'R/2', 'R/4', 'None'],
    correctAnswer: 'R/4',
    explanation: 'Two halves of R/2 in parallel.'
  },
  {
    id: 'ph-ce-100',
    text: 'Current electricity is the basis of all modern _____:',
    options: ['Electronics', 'Power systems', 'Communication', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Central to modern technology.'
  }
];
