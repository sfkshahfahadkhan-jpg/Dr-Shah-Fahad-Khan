import { Question } from '../types';

export const PHYSICS_THERMO_QUIZ: Question[] = [
  {
    id: 'ph-th-1',
    text: 'According to Kinetic Theory of Gases, the molecules of an ideal gas are:',
    options: ['Point masses', 'Elastic spheres', 'Non-interacting', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Basic postulates of kinetic theory.'
  },
  {
    id: 'ph-th-2',
    text: 'The pressure exerted by an ideal gas is P =:',
    options: ['1/3 ρ <v^2>', '1/2 ρ <v^2>', 'ρgh', 'None'],
    correctAnswer: '1/3 ρ <v^2>',
    explanation: 'Derived from change in momentum of molecules hitting walls.'
  },
  {
    id: 'ph-th-3',
    text: 'The average kinetic energy of gas molecules is directly proportional to the _____ of the gas.',
    options: ['Pressure', 'Volume', 'Absolute temperature (K)', 'None'],
    correctAnswer: 'Absolute temperature (K)',
    explanation: 'Fundamental interpretation of temperature.'
  },
  {
    id: 'ph-th-4',
    text: 'Boyle\'s Law: For a fixed mass of gas at constant temperature, the product of pressure and volume is:',
    options: ['Increasing', 'Decreasing', 'Constant', 'None'],
    correctAnswer: 'Constant',
    explanation: 'PV = constant.'
  },
  {
    id: 'ph-th-5',
    text: 'Charles\'s Law: For a fixed mass of gas at constant pressure, the volume is directly proportional to:',
    options: ['Temperature in Celsius', 'Absolute temperature (K)', 'Density', 'None'],
    correctAnswer: 'Absolute temperature (K)',
    explanation: 'V ∝ T.'
  },
  {
    id: 'ph-th-6',
    text: 'The Ideal Gas Law is expressed as:',
    options: ['PV = nRT', 'PV = mRT', 'P/V = nRT', 'None'],
    correctAnswer: 'PV = nRT',
    explanation: 'Combines Boyle\'s, Charles\'s, and Avogadro\'s laws.'
  },
  {
    id: 'ph-th-7',
    text: 'The value of the universal gas constant R in SI units is:',
    options: ['0.0821 L.atm/mol.K', '8.314 J/mol.K', '1.98 cal/mol.K', 'None'],
    correctAnswer: '8.314 J/mol.K',
    explanation: 'Standard SI value.'
  },
  {
    id: 'ph-th-8',
    text: 'Internal energy of an ideal gas depends only on its:',
    options: ['Pressure', 'Volume', 'Temperature', 'None'],
    correctAnswer: 'Temperature',
    explanation: 'For ideal gas, there are no intermolecular forces, so no potential energy.'
  },
  {
    id: 'ph-th-9',
    text: 'Work done by a gas during expansion at constant pressure is W =:',
    options: ['P ΔV', 'V ΔP', 'Δ(PV)', 'None'],
    correctAnswer: 'P ΔV',
    explanation: 'Area under the PV curve.'
  },
  {
    id: 'ph-th-10',
    text: 'The First Law of Thermodynamics is a statement of the law of conservation of:',
    options: ['Mass', 'Momentum', 'Energy', 'Entropy'],
    correctAnswer: 'Energy',
    explanation: 'ΔQ = ΔU + ΔW.'
  },
  {
    id: 'ph-th-11',
    text: 'In an isothermal process, the _____ of the system remains constant.',
    options: ['Pressure', 'Volume', 'Temperature', 'Internal Energy'],
    correctAnswer: 'Temperature',
    explanation: 'ΔT = 0, so ΔU = 0 for an ideal gas.'
  },
  {
    id: 'ph-th-12',
    text: 'For an isothermal process, the first law becomes:',
    options: ['ΔQ = ΔU', 'ΔQ = ΔW', 'ΔW = -ΔU', 'None'],
    correctAnswer: 'ΔQ = ΔW',
    explanation: 'Heat added is entirely converted into work.'
  },
  {
    id: 'ph-th-13',
    text: 'In an adiabatic process, _____ enters or leaves the system.',
    options: ['No work', 'No heat (ΔQ = 0)', 'No mass', 'None'],
    correctAnswer: 'No heat (ΔQ = 0)',
    explanation: 'Occurs very rapidly or in insulated containers.'
  },
  {
    id: 'ph-th-14',
    text: 'For an adiabatic expansion, the temperature of the gas:',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Work is done at the expense of internal energy (ΔW = -ΔU).'
  },
  {
    id: 'ph-th-15',
    text: 'The equation for an adiabatic process is:',
    options: ['PV = constant', 'PV^γ = constant', 'P/V = constant', 'None'],
    correctAnswer: 'PV^γ = constant',
    explanation: 'where γ = Cp/Cv.'
  },
  {
    id: 'ph-th-16',
    text: 'The molar specific heat at constant pressure (Cp) is always _____ than that at constant volume (Cv).',
    options: ['Smaller', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'At constant pressure, some heat is used for doing work of expansion.'
  },
  {
    id: 'ph-th-17',
    text: 'The relation between Cp and Cv for an ideal gas is:',
    options: ['Cp + Cv = R', 'Cp - Cv = R', 'Cp/Cv = R', 'None'],
    correctAnswer: 'Cp - Cv = R',
    explanation: 'Mayer\'s relation.'
  },
  {
    id: 'ph-th-18',
    text: 'For a monatomic gas, the value of γ (Cp/Cv) is approximately:',
    options: ['1.40', '1.67', '1.33', 'None'],
    correctAnswer: '1.67',
    explanation: 'Cv = 3/2 R, Cp = 5/2 R.'
  },
  {
    id: 'ph-th-19',
    text: 'For a diatomic gas, the value of γ (Cp/Cv) is approximately:',
    options: ['1.67', '1.40', '1.33', 'None'],
    correctAnswer: '1.40',
    explanation: 'Cv = 5/2 R, Cp = 7/2 R.'
  },
  {
    id: 'ph-th-20',
    text: 'A heat engine is a device that converts _____ into _____.',
    options: ['Work, Heat', 'Heat, Work', 'Potential, Kinetic', 'None'],
    correctAnswer: 'Heat, Work',
    explanation: 'Operates in a cycle.'
  },
  {
    id: 'ph-th-21',
    text: 'The efficiency (η) of a heat engine is defined as:',
    options: ['W / Q1', 'Q1 / W', 'Q2 / Q1', 'None'],
    correctAnswer: 'W / Q1',
    explanation: 'Work output / Heat input.'
  },
  {
    id: 'ph-th-22',
    text: 'Carnot engine is an ideal heat engine that uses only _____ and _____ processes.',
    options: ['Isobaric, Isochoric', 'Isothermal, Adiabatic', 'Steady, Unsteady', 'None'],
    correctAnswer: 'Isothermal, Adiabatic',
    explanation: 'Most efficient cycle possible.'
  },
  {
    id: 'ph-th-23',
    text: 'The efficiency of a Carnot engine depends only on the _____ of the hot and cold reservoirs.',
    options: ['Working substance', 'Absolute temperatures (T1, T2)', 'Mass', 'None'],
    correctAnswer: 'Absolute temperatures (T1, T2)',
    explanation: 'η = 1 - T2/T1.'
  },
  {
    id: 'ph-th-24',
    text: 'No heat engine can be 100% efficient because T2 (sink temperature) cannot be:',
    options: ['Zero Celsius', 'Absolute Zero (0 K)', 'Very high', 'None'],
    correctAnswer: 'Absolute Zero (0 K)',
    explanation: 'According to the third law of thermodynamics.'
  },
  {
    id: 'ph-th-25',
    text: 'Second Law of Thermodynamics (Lord Kelvin statement): It is impossible to derive a continuous supply of work by cooling a body to a temperature _____ than that of the coldest surrounding.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'Refers to heat engines.'
  },
  {
    id: 'ph-th-26',
    text: 'Second Law (Clausius statement): Heat cannot flow from a _____ body to a _____ body without external work.',
    options: ['Hot, Cold', 'Cold, Hot', 'Large, Small', 'None'],
    correctAnswer: 'Cold, Hot',
    explanation: 'Refers to refrigerators/heat pumps.'
  },
  {
    id: 'ph-th-27',
    text: 'The thermodynamic quantity that measures the degree of disorder of a system is:',
    options: ['Enthalpy', 'Entropy (S)', 'Gibbs free energy', 'None'],
    correctAnswer: 'Entropy (S)',
    explanation: 'Increasing for all spontaneous processes.'
  },
  {
    id: 'ph-th-28',
    text: 'The change in entropy is defined as ΔS =:',
    options: ['ΔQ / T', 'ΔW / T', 'ΔU / T', 'None'],
    correctAnswer: 'ΔQ / T',
    explanation: 'Valid for reversible processes.'
  },
  {
    id: 'ph-th-29',
    text: 'In all natural/irreversible processes, the total entropy of the universe:',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'The entropy of the universe tends toward a maximum.'
  },
  {
    id: 'ph-th-30',
    text: 'Absolute zero (0 K) is equal to _____ degrees Celsius.',
    options: ['-100', '-273.15', '0', 'None'],
    correctAnswer: '-273.15',
    explanation: 'Lowest possible temperature.'
  },
  {
    id: 'ph-th-31',
    text: 'Which is a "State Function"?',
    options: ['Work (W)', 'Heat (Q)', 'Internal Energy (U)', 'None'],
    correctAnswer: 'Internal Energy (U)',
    explanation: 'Value depends only on initial and final states, not path.'
  },
  {
    id: 'ph-th-32',
    text: 'Root mean square (rms) speed of gas molecules is v_rms =:',
    options: ['√(3RT/M)', '√(2RT/M)', '√(RT/M)', 'None'],
    correctAnswer: '√(3RT/M)',
    explanation: 'M is the molar mass.'
  },
  {
    id: 'ph-th-33',
    text: 'If the absolute temperature of a gas is doubled, the rms speed of its molecules increases by a factor of:',
    options: ['2', '4', '√2', 'None'],
    correctAnswer: '√2',
    explanation: 'v ∝ √T.'
  },
  {
    id: 'ph-th-34',
    text: 'A process occurring at constant volume is:',
    options: ['Isobaric', 'Isochoric', 'Isothermal', 'Adiabatic'],
    correctAnswer: 'Isochoric',
    explanation: 'ΔV = 0, so work W = 0.'
  },
  {
    id: 'ph-th-35',
    text: 'A process occurring at constant pressure is:',
    options: ['Isobaric', 'Isochoric', 'Isothermal', 'None'],
    correctAnswer: 'Isobaric',
    explanation: 'ΔP = 0.'
  },
  {
    id: 'ph-th-36',
    text: 'Boltzmann constant k is related to R and Avogadro number NA by:',
    options: ['k = R * NA', 'k = R / NA', 'k = NA / R', 'None'],
    correctAnswer: 'k = R / NA',
    explanation: 'Gas constant per molecule.'
  },
  {
    id: 'ph-th-37',
    text: 'The value of Boltzmann constant k is:',
    options: ['1.38 x 10^-23 J/K', '6.02 x 10^23 J/K', '8.314 J/K', 'None'],
    correctAnswer: '1.38 x 10^-23 J/K',
    explanation: 'Small value for individual molecules.'
  },
  {
    id: 'ph-th-38',
    text: 'Pressure of a gas depends on _____ and _____ of collisions with walls.',
    options: ['Color, Size', 'Momentum change, Frequency', 'Sound, Heat', 'None'],
    correctAnswer: 'Momentum change, Frequency',
    explanation: 'Based on Newton\'s second law.'
  },
  {
    id: 'ph-th-39',
    text: 'For an ideal gas, the graph of P vs V at constant temperature is a:',
    options: ['Straight line', 'Parabola', 'Hyperbola', 'Circle'],
    correctAnswer: 'Hyperbola',
    explanation: 'Isotherm.'
  },
  {
    id: 'ph-th-40',
    text: 'In adiabatic compression, the temperature of the gas:',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Work is done on the gas, increasing its internal energy.'
  },
  {
    id: 'ph-th-41',
    text: 'Cloud formation is primarily an _____ process.',
    options: ['Isothermal', 'Adiabatic cooling', 'Isobaric', 'None'],
    correctAnswer: 'Adiabatic cooling',
    explanation: 'Rising air expands and cools without significant heat exchange.'
  },
  {
    id: 'ph-th-42',
    text: 'Diesel engine ignition occurs due to _____ of air.',
    options: ['Heating with spark', 'Adiabatic compression', 'Chemicals', 'None'],
    correctAnswer: 'Adiabatic compression',
    explanation: 'High pressure increases temperature enough to ignite fuel.'
  },
  {
    id: 'ph-th-43',
    text: 'Internal energy of a real gas depends on both _____ and _____.',
    options: ['Mass, Color', 'Temperature, Volume (Pressure)', 'Light, Sound', 'None'],
    correctAnswer: 'Temperature, Volume (Pressure)',
    explanation: 'Due to intermolecular potential energy.'
  },
  {
    id: 'ph-th-44',
    text: 'The ratio γ = Cp/Cv for air is approximately:',
    options: ['1.33', '1.40', '1.67', 'None'],
    correctAnswer: '1.40',
    explanation: 'Air is mostly diatomic (N2, O2).'
  },
  {
    id: 'ph-th-45',
    text: 'Heat capacity of a substance is the amount of heat needed to raise its temperature by:',
    options: ['10 K', '1 K', '100 K', 'None'],
    correctAnswer: '1 K',
    explanation: 'C = ΔQ / ΔT.'
  },
  {
    id: 'ph-th-46',
    text: 'Molar heat capacity is for _____ of the substance.',
    options: ['1 gram', '1 mole', '1 kg', 'None'],
    correctAnswer: '1 mole',
    explanation: 'Cm = C / n.'
  },
  {
    id: 'ph-th-47',
    text: 'In an isochoric process, the first law becomes:',
    options: ['ΔQ = ΔW', 'ΔQ = ΔU', 'ΔU = -ΔW', 'None'],
    correctAnswer: 'ΔQ = ΔU',
    explanation: 'No work is done (W = 0).'
  },
  {
    id: 'ph-th-48',
    text: 'Carnot cycle consists of how many steps?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation: 'Isothermal expansion, Adiabatic expansion, Isothermal compression, Adiabatic compression.'
  },
  {
    id: 'ph-th-49',
    text: 'Refrigerator is basically a _____ heat engine.',
    options: ['Parallel', 'Reverse', 'Combined', 'None'],
    correctAnswer: 'Reverse',
    explanation: 'Work is done to move heat from cold to hot.'
  },
  {
    id: 'ph-th-50',
    text: 'COP (Coefficient of Performance) of a refrigerator is Q2 / W. A higher COP means:',
    options: ['More efficient', 'Less efficient', 'Consumes more power', 'None'],
    correctAnswer: 'More efficient',
    explanation: 'More cooling for less work.'
  },
  {
    id: 'ph-th-51',
    text: 'The "Heat Death" of the universe is a theoretical state of _____ entropy.',
    options: ['Zero', 'Minimum', 'Maximum', 'Negative'],
    correctAnswer: 'Maximum',
    explanation: 'Where no energy is available for work.'
  },
  {
    id: 'ph-th-52',
    text: 'Thermodynamics does NOT deal with the _____ of a process.',
    options: ['Energy change', 'Final state', 'Rate (Time taken)', 'Initial state'],
    correctAnswer: 'Rate (Time taken)',
    explanation: 'That is the field of kinetics.'
  },
  {
    id: 'ph-th-53',
    text: 'In the formula PV = nRT, T must be in:',
    options: ['Celsius', 'Kelvin', 'Fahrenheit', 'None'],
    correctAnswer: 'Kelvin',
    explanation: 'Absolute temperature scale.'
  },
  {
    id: 'ph-th-54',
    text: '0°C is equal to how many Kelvin?',
    options: ['0', '273', '373', 'None'],
    correctAnswer: '273',
    explanation: 'T(K) = T(°C) + 273.'
  },
  {
    id: 'ph-th-55',
    text: 'A "System" in thermodynamics is the part of universe:',
    options: ['Under observation', 'Outside the box', 'Far away', 'None'],
    correctAnswer: 'Under observation',
    explanation: 'Separated by boundaries.'
  },
  {
    id: 'ph-th-56',
    text: 'A process in which the system returns to its original state is a:',
    options: ['Linear process', 'Cyclic process', 'Irreversible process', 'None'],
    correctAnswer: 'Cyclic process',
    explanation: 'Net change in internal energy is zero (ΔU_cycle = 0).'
  },
  {
    id: 'ph-th-57',
    text: 'The slope of an adiabatic curve on PV diagram is _____ than an isothermal curve.',
    options: ['Flatter', 'Steeper', 'Same', 'None'],
    correctAnswer: 'Steeper',
    explanation: 'Because γ > 1.'
  },
  {
    id: 'ph-th-58',
    text: 'If a gas expands into a vacuum (free expansion), the work done is:',
    options: ['Maximum', 'Zero', 'Minimum', 'None'],
    correctAnswer: 'Zero',
    explanation: 'There is no opposing force (P_ext = 0).'
  },
  {
    id: 'ph-th-59',
    text: 'Work done is a _____ quantity (depends on path).',
    options: ['State function', 'Path function', 'Universal constant', 'None'],
    correctAnswer: 'Path function',
    explanation: 'Different paths between states result in different work.'
  },
  {
    id: 'ph-th-60',
    text: 'Heat (Q) added to a system is taken as _____ and work (W) done by the system as _____.',
    options: ['Positive, Positive', 'Positive, Negative', 'Negative, Positive', 'None'],
    correctAnswer: 'Positive, Positive',
    explanation: 'Standard sign convention (IUPAC may differ, but this is physics standard).'
  },
  {
    id: 'ph-th-61',
    text: 'The internal energy of 1 mole of a monatomic ideal gas is U =:',
    options: ['3/2 RT', '5/2 RT', 'RT', 'None'],
    correctAnswer: '3/2 RT',
    explanation: 'All energy is translational K.E.'
  },
  {
    id: 'ph-th-62',
    text: 'At constant volume, ΔQ = n Cv ΔT. This heat is used only to change _____ energy.',
    options: ['Potential', 'Kinetic (Internal)', 'Chemical', 'None'],
    correctAnswer: 'Kinetic (Internal)',
    explanation: 'Since no work is done.'
  },
  {
    id: 'ph-th-63',
    text: 'The "Triple Point" of water is the temperature and pressure where all three phases coexist, at _____ K.',
    options: ['273.16', '373.15', '0', 'None'],
    correctAnswer: '273.16',
    explanation: 'Reference point for Kelvin scale.'
  },
  {
    id: 'ph-th-64',
    text: 'The increase in disorder corresponds to an increase in:',
    options: ['Order', 'Entropy', 'Pressure', 'None'],
    correctAnswer: 'Entropy',
    explanation: 'Statistical interpretation.'
  },
  {
    id: 'ph-th-65',
    text: 'When ice melts at 0°C, its entropy _____:',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Liquid state is more disordered than solid.'
  },
  {
    id: 'ph-th-66',
    text: 'A "Reversible" process must be carried out very _____ and without _____:',
    options: ['Fast, Heat', 'Slowly, Friction/Dissipative forces', 'Loudly, Light', 'None'],
    correctAnswer: 'Slowly, Friction/Dissipative forces',
    explanation: 'Idealized process.'
  },
  {
    id: 'ph-th-67',
    text: 'All natural processes are:',
    options: ['Reversible', 'Irreversible', 'Isothermal', 'None'],
    correctAnswer: 'Irreversible',
    explanation: 'Proceed in one direction only (increasing entropy).'
  },
  {
    id: 'ph-th-68',
    text: 'The efficiency of an engine is 40%. If it receives 1000 J of heat, the work output is:',
    options: ['40 J', '400 J', '600 J', 'None'],
    correctAnswer: '400 J',
    explanation: '0.40 * 1000 = 400 J.'
  },
  {
    id: 'ph-th-69',
    text: 'The work done in a cyclic process is equal to the _____ of the PV diagram loop.',
    options: ['Perimeter', 'Area', 'Slope', 'None'],
    correctAnswer: 'Area',
    explanation: 'Net work done in the cycle.'
  },
  {
    id: 'ph-th-70',
    text: 'If ΔU is positive, it means the temperature of the gas _____:',
    options: ['Increased', 'Decreased', 'Stays same', 'None'],
    correctAnswer: 'Increased',
    explanation: 'Internal energy ∝ Temperature.'
  },
  {
    id: 'ph-th-71',
    text: 'A gas does 100 J of work while 300 J of heat is added. The change in internal energy is:',
    options: ['400 J', '200 J', '100 J', 'None'],
    correctAnswer: '200 J',
    explanation: 'ΔU = ΔQ - ΔW = 300 - 100 = 200 J.'
  },
  {
    id: 'ph-th-72',
    text: 'A tyre bursts suddenly. This is an _____ expansion.',
    options: ['Isothermal', 'Adiabatic', 'Isochoric', 'None'],
    correctAnswer: 'Adiabatic',
    explanation: 'Rapid process, air cools down.'
  },
  {
    id: 'ph-th-73',
    text: 'For an ideal gas, the product PV has the same unit as:',
    options: ['Force', 'Energy/Work', 'Power', 'None'],
    correctAnswer: 'Energy/Work',
    explanation: '(N/m^2) * m^3 = N.m = Joule.'
  },
  {
    id: 'ph-th-74',
    text: 'The "Heat Capacity" of a system is an _____ property (depends on size).',
    options: ['Intensive', 'Extensive', 'Chemical', 'None'],
    correctAnswer: 'Extensive',
    explanation: 'More mass requires more heat.'
  },
  {
    id: 'ph-th-75',
    text: 'Specific heat capacity is an _____ property (independent of size).',
    options: ['Extensive', 'Intensive', 'Physical', 'None'],
    correctAnswer: 'Intensive',
    explanation: 'Characteristic of the material.'
  },
  {
    id: 'ph-th-76',
    text: 'The molar specific heat Cv of a monatomic gas is:',
    options: ['1/2 R', '3/2 R', '5/2 R', 'None'],
    correctAnswer: '3/2 R',
    explanation: 'Standard result from equipartition of energy.'
  },
  {
    id: 'ph-th-77',
    text: 'The molar specific heat Cp of a monatomic gas is:',
    options: ['3/2 R', '5/2 R', '7/2 R', 'None'],
    correctAnswer: '5/2 R',
    explanation: 'Cp = Cv + R = 3/2 R + R = 5/2 R.'
  },
  {
    id: 'ph-th-78',
    text: 'A "Heat Sink" is a reservoir at _____ temperature.',
    options: ['High', 'Low', 'Absolute zero', 'None'],
    correctAnswer: 'Low',
    explanation: 'Accepts rejected heat from the engine.'
  },
  {
    id: 'ph-th-79',
    text: 'A "Heat Source" is a reservoir at _____ temperature.',
    options: ['High', 'Low', 'Room', 'None'],
    correctAnswer: 'High',
    explanation: 'Supplies heat to the engine.'
  },
  {
    id: 'ph-th-80',
    text: 'In the Carnot cycle, during isothermal expansion, the heat absorbed is Q1 =:',
    options: ['W1', 'ΔU', '0', 'None'],
    correctAnswer: 'W1',
    explanation: 'Since ΔU = 0 for isothermal.'
  },
  {
    id: 'ph-th-81',
    text: 'The "Global Warming" is largely due to increased _____ in the atmosphere.',
    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'None'],
    correctAnswer: 'Carbon dioxide',
    explanation: 'Greenhouse gas effect.'
  },
  {
    id: 'ph-th-82',
    text: 'The kinetic energy of 1 kg-mole of an ideal gas is 3/2 RT. The K.E of 1 gram-molecule is:',
    options: ['3/2 kT', '3/2 RT', '1/2 kT', 'None'],
    correctAnswer: '3/2 RT',
    explanation: '1 gram-molecule = 1 mole.'
  },
  {
    id: 'ph-th-83',
    text: 'Pressure of gas molecules is due to _____ with the walls.',
    options: ['Elastic collisions', 'Inelastic collisions', 'Sticking', 'None'],
    correctAnswer: 'Elastic collisions',
    explanation: 'Momentum is transferred.'
  },
  {
    id: 'ph-th-84',
    text: 'If we double the density of a gas at constant <v^2>, the pressure:',
    options: ['Is halved', 'Is doubled', 'Four times', 'None'],
    correctAnswer: 'Is doubled',
    explanation: 'P = 1/3 ρ <v^2>.'
  },
  {
    id: 'ph-th-85',
    text: 'The units of R (8.314) are J/(mol.K). In terms of calories, it is about:',
    options: ['1', '2', '4', 'None'],
    correctAnswer: '2',
    explanation: '1.987 cal/(mol.K).'
  },
  {
    id: 'ph-th-86',
    text: 'Specific heat of water is about _____ J/kg.K.',
    options: ['1000', '4184', '2000', 'None'],
    correctAnswer: '4184',
    explanation: 'Very high value, making water a good coolant.'
  },
  {
    id: 'ph-th-87',
    text: 'Specific heat of ice is _____ that of liquid water.',
    options: ['Higher than', 'About half of', 'Equal to', 'None'],
    correctAnswer: 'About half of',
    explanation: 'Approximately 2100 J/kg.K.'
  },
  {
    id: 'ph-th-88',
    text: 'The internal energy of a system _____ during an adiabatic compression.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Work is done on the system.'
  },
  {
    id: 'ph-th-89',
    text: 'A "Perpetual motion machine of the first kind" violates the _____ law of thermodynamics.',
    options: ['First', 'Second', 'Third', 'None'],
    correctAnswer: 'First',
    explanation: 'Claims to produce work without energy input.'
  },
  {
    id: 'ph-th-90',
    text: 'A "Perpetual motion machine of the second kind" violates the _____ law of thermodynamics.',
    options: ['First', 'Second', 'Third', 'None'],
    correctAnswer: 'Second',
    explanation: 'Claims to convert all heat from a single reservoir into work.'
  },
  {
    id: 'ph-th-91',
    text: 'The value of γ for a polyatomic gas (like CO2) is roughly:',
    options: ['1.67', '1.40', '1.30', 'None'],
    correctAnswer: '1.30',
    explanation: 'More degrees of freedom (rotation, vibration).'
  },
  {
    id: 'ph-th-92',
    text: 'The efficiency of an engine between 400K and 300K is:',
    options: ['25%', '75%', '33%', 'None'],
    correctAnswer: '25%',
    explanation: 'η = 1 - 300/400 = 1 - 0.75 = 0.25.'
  },
  {
    id: 'ph-th-93',
    text: 'Entropy _____ when two different gases mix.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Mixing increases disorder.'
  },
  {
    id: 'ph-th-94',
    text: 'If heat is removed from a system at constant temperature, entropy _____:',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'ΔS = ΔQ / T; ΔQ is negative.'
  },
  {
    id: 'ph-th-95',
    text: 'A perfectly insulated container is a _____ system.',
    options: ['Open', 'Closed', 'Isolated', 'None'],
    correctAnswer: 'Isolated',
    explanation: 'No mass or heat exchange.'
  },
  {
    id: 'ph-th-96',
    text: 'A "Closed" system can exchange _____ but not _____ with surroundings.',
    options: ['Energy, Mass', 'Mass, Energy', 'Nothing', 'None'],
    correctAnswer: 'Energy, Mass',
    explanation: 'Standard definition.'
  },
  {
    id: 'ph-th-97',
    text: 'The "Heat of vaporization" of water is very _____ due to hydrogen bonding.',
    options: ['Low', 'High', 'Zero', 'None'],
    correctAnswer: 'High',
    explanation: 'Requires a lot of energy to separate molecules.'
  },
  {
    id: 'ph-th-98',
    text: 'A "Heat Pump" uses work to move heat from _____ to _____ environment.',
    options: ['Hot, Cold', 'Cold, Hot', 'Large, Small', 'None'],
    correctAnswer: 'Cold, Hot',
    explanation: 'Used for heating buildings in winter.'
  },
  {
    id: 'ph-th-99',
    text: 'Thermal equilibrium means two bodies have the same:',
    options: ['Heat content', 'Mass', 'Temperature', 'Internal energy'],
    correctAnswer: 'Temperature',
    explanation: 'No net heat flow between them.'
  },
  {
    id: 'ph-th-100',
    text: 'Thermodynamics is the study of the relation between _____ and other forms of _____.',
    options: ['Matter, Motion', 'Heat, Energy', 'Time, Space', 'None'],
    correctAnswer: 'Heat, Energy',
    explanation: 'Foundational for physics and engineering.'
  }
];
