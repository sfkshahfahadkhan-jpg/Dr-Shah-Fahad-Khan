import { Question } from '../types';

export const PHYSICS_MEASUREMENTS_QUIZ: Question[] = [
  {
    id: 'phy-meas-1',
    text: 'A physical quantity is a quantity that can be:',
    options: ['Measured', 'Seen only', 'Imagined', 'Not touched'],
    correctAnswer: 'Measured',
    explanation: 'By definition, physical quantities are measurable properties.'
  },
  {
    id: 'phy-meas-2',
    text: 'Which of the following is NOT a base quantity in SI?',
    options: ['Length', 'Mass', 'Speed', 'Temperature'],
    correctAnswer: 'Speed',
    explanation: 'Speed is a derived quantity (Length/Time).'
  },
  {
    id: 'phy-meas-3',
    text: 'The SI unit of luminous intensity is:',
    options: ['Lux', 'Candela', 'Lumen', 'Watt'],
    correctAnswer: 'Candela',
    explanation: 'Candela (cd) is the base unit for light intensity.'
  },
  {
    id: 'phy-meas-4',
    text: 'One light year is a unit of:',
    options: ['Time', 'Intensity', 'Distance', 'Velocity'],
    correctAnswer: 'Distance',
    explanation: 'It is the distance light travels in one year.'
  },
  {
    id: 'phy-meas-5',
    text: 'The number of significant figures in 0.005080 is:',
    options: ['3', '4', '5', '7'],
    correctAnswer: '4',
    explanation: 'Zeros before the first non-zero digit are not significant. 5, 0, 8, and the trailing 0 are significant.'
  },
  {
    id: 'phy-meas-6',
    text: 'The dimension of Force is:',
    options: ['[MLT⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[ML²T⁻¹]'],
    correctAnswer: '[MLT⁻²]',
    explanation: 'Force = mass * acceleration = M * (L/T²) = [MLT⁻²].'
  },
  {
    id: 'phy-meas-7',
    text: 'Which of the following is a dimensionless quantity?',
    options: ['Strain', 'Refractive Index', 'Angle', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These are ratios of similar quantities.'
  },
  {
    id: 'phy-meas-8',
    text: 'The uncertainty in a measurement is also called:',
    options: ['Precision', 'Error', 'Accuracy', 'Tolerance'],
    correctAnswer: 'Error',
    explanation: 'Error is the difference between measured and true values.'
  },
  {
    id: 'phy-meas-9',
    text: 'Which error occurs due to improper calibration of an instrument?',
    options: ['Random error', 'Systematic error', 'Personal error', 'None'],
    correctAnswer: 'Systematic error',
    explanation: 'Systematic errors are consistent and repeatable due to equipment flaws.'
  },
  {
    id: 'phy-meas-10',
    text: 'Scientific notation for 0.000007 is:',
    options: ['7 x 10⁶', '7 x 10⁻⁶', '0.7 x 10⁻⁵', '70 x 10⁻⁷'],
    correctAnswer: '7 x 10⁻⁶',
    explanation: 'Move the decimal 6 places to the right.'
  },
  {
    id: 'phy-meas-11',
    text: 'The prefix "pico" represents:',
    options: ['10⁻⁹', '10⁻¹²', '10⁻¹⁵', '10⁻⁶'],
    correctAnswer: '10⁻¹²',
    explanation: 'pico (p) = 10⁻¹².'
  },
  {
    id: 'phy-meas-12',
    text: 'Supplementary units in SI are:',
    options: ['Radian and Steradian', 'Mole and Candela', 'Kelvin and Ampere', 'Joule and Watt'],
    correctAnswer: 'Radian and Steradian',
    explanation: 'These are units for plane and solid angles.'
  },
  {
    id: 'phy-meas-13',
    text: 'One radian is equal to approximately:',
    options: ['57.3°', '180°', '360°', '90°'],
    correctAnswer: '57.3°',
    explanation: '1 rad = 180/π degrees.'
  },
  {
    id: 'phy-meas-14',
    text: 'Which of the following is the most precise instrument?',
    options: ['Meter rod', 'Vernier calliper', 'Screw gauge', 'Measuring tape'],
    correctAnswer: 'Screw gauge',
    explanation: 'Screw gauge has the smallest least count (0.01 mm or 0.001 mm).'
  },
  {
    id: 'phy-meas-15',
    text: 'The dimension of work is the same as that of:',
    options: ['Power', 'Torque', 'Momentum', 'Force'],
    correctAnswer: 'Torque',
    explanation: 'Both Work and Torque have dimensions [ML²T⁻²].'
  },
  {
    id: 'phy-meas-16',
    text: 'Systematic errors can be reduced by:',
    options: ['Taking average of many readings', 'Comparing with a standard instrument', 'Improving personal technique', 'Changing the environment'],
    correctAnswer: 'Comparing with a standard instrument',
    explanation: 'Calibration removes constant biases.'
  },
  {
    id: 'phy-meas-17',
    text: 'The least count of a Vernier calliper is typically:',
    options: ['0.1 cm', '0.01 cm', '0.001 cm', '1.0 mm'],
    correctAnswer: '0.01 cm',
    explanation: '0.1 mm = 0.01 cm.'
  },
  {
    id: 'phy-meas-18',
    text: 'How many base units are there in the SI system?',
    options: ['3', '5', '7', '9'],
    correctAnswer: '7',
    explanation: 'm, kg, s, A, K, mol, cd.'
  },
  {
    id: 'phy-meas-19',
    text: 'Percentage uncertainty in a measurement is:',
    options: ['(Absolute uncertainty / Value) * 100', 'Absolute uncertainty + Value', 'Value / Absolute uncertainty', 'Error * 100'],
    correctAnswer: '(Absolute uncertainty / Value) * 100',
    explanation: 'It expresses the relative error as a percentage.'
  },
  {
    id: 'phy-meas-20',
    text: 'Dimensions are used to:',
    options: ['Check the homogeneity of a physical equation', 'Derive possible formulas', 'Convert units', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Dimensional analysis is a powerful tool for these tasks.'
  },
  {
    id: 'phy-meas-21',
    text: 'If A = 2.0 ± 0.1 and B = 1.0 ± 0.1, then A + B is:',
    options: ['3.0 ± 0.1', '3.0 ± 0.2', '3.0 ± 0.0', '2.0 ± 0.2'],
    correctAnswer: '3.0 ± 0.2',
    explanation: 'Absolute uncertainties are added in addition and subtraction.'
  },
  {
    id: 'phy-meas-22',
    text: 'The dimension of pressure is:',
    options: ['[ML⁻¹T⁻²]', '[MLT⁻²]', '[ML²T⁻³]', '[ML⁻²T⁻²]'],
    correctAnswer: '[ML⁻¹T⁻²]',
    explanation: 'P = F/A = [MLT⁻²] / [L²] = [ML⁻¹T⁻²].'
  },
  {
    id: 'phy-meas-23',
    text: 'Significant figures in 400.0 are:',
    options: ['1', '3', '4', '2'],
    correctAnswer: '4',
    explanation: 'Trailing zeros after a decimal point are significant.'
  },
  {
    id: 'phy-meas-24',
    text: 'Which of the following is NOT a unit of energy?',
    options: ['Joule', 'Calorie', 'Electron-volt', 'Watt'],
    correctAnswer: 'Watt',
    explanation: 'Watt is a unit of power (Energy/Time).'
  },
  {
    id: 'phy-meas-25',
    text: 'The number of seconds in a year is approximately:',
    options: ['3.15 x 10⁷', '3.15 x 10⁶', '8.64 x 10⁴', '3.6 x 10³'],
    correctAnswer: '3.15 x 10⁷',
    explanation: '365 * 24 * 3600 ≈ 3.15 x 10⁷.'
  },
  {
    id: 'phy-meas-26',
    text: 'The pitch of a screw gauge is 0.5 mm and it has 50 circular scale divisions. Its least count is:',
    options: ['0.01 mm', '0.001 mm', '0.02 mm', '0.1 mm'],
    correctAnswer: '0.01 mm',
    explanation: 'L.C. = Pitch / No. of divisions = 0.5 / 50 = 0.01 mm.'
  },
  {
    id: 'phy-meas-27',
    text: 'Which prefix is used for 10⁹?',
    options: ['Mega', 'Giga', 'Tera', 'Kilo'],
    correctAnswer: 'Giga',
    explanation: 'Giga (G) = 10⁹.'
  },
  {
    id: 'phy-meas-28',
    text: 'Random errors can be minimized by:',
    options: ['Precise instruments', 'Taking multiple observations and averaging', 'Better environment', 'Zero correction'],
    correctAnswer: 'Taking multiple observations and averaging',
    explanation: 'Averaging reduces the effect of statistical fluctuations.'
  },
  {
    id: 'phy-meas-29',
    text: 'The dimension of gravitational constant G is:',
    options: ['[M⁻¹L³T⁻²]', '[MLT⁻²]', '[M⁻²L²T⁻²]', '[L³T⁻²]'],
    correctAnswer: '[M⁻¹L³T⁻²]',
    explanation: 'G = Fr²/m² = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²].'
  },
  {
    id: 'phy-meas-30',
    text: '1 Femto is equal to:',
    options: ['10⁻⁹', '10⁻¹²', '10⁻¹⁵', '10⁻¹⁸'],
    correctAnswer: '10⁻¹⁵',
    explanation: 'Femto (f) = 10⁻¹⁵.'
  },
  {
    id: 'phy-meas-31',
    text: 'The dimension of power is:',
    options: ['[ML²T⁻²]', '[ML²T⁻³]', '[MLT⁻³]', '[M²L²T⁻³]'],
    correctAnswer: '[ML²T⁻³]',
    explanation: 'Power = Work/Time = [ML²T⁻²]/[T] = [ML²T⁻³].'
  },
  {
    id: 'phy-meas-32',
    text: 'Precision is determined by:',
    options: ['Least count of the instrument', 'Accuracy of the instrument', 'Number of readings', 'Total value'],
    correctAnswer: 'Least count of the instrument',
    explanation: 'Smaller least count means higher precision.'
  },
  {
    id: 'phy-meas-33',
    text: 'Accuracy depends on:',
    options: ['Least count', 'Fractional or percentage uncertainty', 'Number of decimal places', 'Random errors'],
    correctAnswer: 'Fractional or percentage uncertainty',
    explanation: 'Smaller percentage uncertainty means higher accuracy.'
  },
  {
    id: 'phy-meas-34',
    text: 'The dimension of angular momentum is same as:',
    options: ['Momentum', 'Planck’s constant', 'Energy', 'Power'],
    correctAnswer: 'Planck’s constant',
    explanation: 'Both have dimensions [ML²T⁻¹].'
  },
  {
    id: 'phy-meas-35',
    text: 'Which of the following is NOT a derived unit?',
    options: ['Newton', 'Joule', 'Ampere', 'Pascal'],
    correctAnswer: 'Ampere',
    explanation: 'Ampere is a base unit.'
  },
  {
    id: 'phy-meas-36',
    text: 'Zero error is a type of:',
    options: ['Random error', 'Personal error', 'Systematic error', 'Statistical error'],
    correctAnswer: 'Systematic error',
    explanation: 'It is a consistent bias in the instrument.'
  },
  {
    id: 'phy-meas-37',
    text: 'The dimension of density is:',
    options: ['[ML⁻³]', '[ML³]', '[ML⁻²]', '[M⁻¹L³]'],
    correctAnswer: '[ML⁻³]',
    explanation: 'Density = Mass/Volume = M/L³ = [ML⁻³].'
  },
  {
    id: 'phy-meas-38',
    text: 'The number of significant figures in 3.40 x 10³ is:',
    options: ['2', '3', '5', '1'],
    correctAnswer: '3',
    explanation: 'All digits in the coefficient of scientific notation are significant.'
  },
  {
    id: 'phy-meas-39',
    text: 'If the radius of a circle is r = 2.0 ± 0.1 cm, the percentage uncertainty in its area is:',
    options: ['5%', '10%', '2.5%', '20%'],
    correctAnswer: '10%',
    explanation: 'Area ∝ r². %Uncertainty in A = 2 * %Uncertainty in r = 2 * (0.1/2.0 * 100) = 10%.'
  },
  {
    id: 'phy-meas-40',
    text: 'The dimension of frequency is:',
    options: ['[T]', '[T⁻¹]', '[L/T]', '[L⁻¹]'],
    correctAnswer: '[T⁻¹]',
    explanation: 'Frequency = 1/Period = [T⁻¹].'
  },
  {
    id: 'phy-meas-41',
    text: 'The unit of solid angle is:',
    options: ['Radian', 'Steradian', 'Degree', 'Revolution'],
    correctAnswer: 'Steradian',
    explanation: 'Steradian (sr) is the SI supplementary unit for solid angle.'
  },
  {
    id: 'phy-meas-42',
    text: 'Which of the following is a unit of length?',
    options: ['Angstrom', 'Micron', 'Fermi', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Å = 10⁻¹⁰m, μm = 10⁻⁶m, fm = 10⁻¹⁵m.'
  },
  {
    id: 'phy-meas-43',
    text: 'The prefix "atto" stands for:',
    options: ['10⁻¹²', '10⁻¹⁵', '10⁻¹⁸', '10⁻²¹'],
    correctAnswer: '10⁻¹⁸',
    explanation: 'atto (a) = 10⁻¹⁸.'
  },
  {
    id: 'phy-meas-44',
    text: 'Significant figures in 0.0001 are:',
    options: ['1', '4', '5', '0'],
    correctAnswer: '1',
    explanation: 'Leading zeros are not significant.'
  },
  {
    id: 'phy-meas-45',
    text: 'The dimension of velocity is:',
    options: ['[LT⁻¹]', '[LT⁻²]', '[L²T⁻¹]', '[M⁰L¹T⁻¹]'],
    correctAnswer: '[LT⁻¹]',
    explanation: 'Velocity = Displacement/Time = [LT⁻¹].'
  },
  {
    id: 'phy-meas-46',
    text: 'In the equation F = ma, if mass has 1% uncertainty and acceleration has 2%, the uncertainty in force is:',
    options: ['1%', '2%', '3%', '1.5%'],
    correctAnswer: '3%',
    explanation: 'Percentage uncertainties are added in multiplication.'
  },
  {
    id: 'phy-meas-47',
    text: 'The dimension of viscosity η is:',
    options: ['[ML⁻¹T⁻¹]', '[MLT⁻¹]', '[ML⁻²T⁻¹]', '[ML⁻¹T]'],
    correctAnswer: '[ML⁻¹T⁻¹]',
    explanation: 'From Stokes Law F=6πηrv.'
  },
  {
    id: 'phy-meas-48',
    text: 'One astronomical unit (AU) is the average distance between:',
    options: ['Earth and Moon', 'Earth and Sun', 'Sun and Pluto', 'Galaxy centers'],
    correctAnswer: 'Earth and Sun',
    explanation: '1 AU ≈ 1.5 x 10⁸ km.'
  },
  {
    id: 'phy-meas-49',
    text: 'Which instrument has the least least-count?',
    options: ['Digital stop watch', 'Mechanical stop watch', 'Atomic clock', 'Sundial'],
    correctAnswer: 'Atomic clock',
    explanation: 'Atomic clocks are the most accurate timekeeping devices.'
  },
  {
    id: 'phy-meas-50',
    text: 'The dimension of specific heat capacity is:',
    options: ['[L²T⁻²K⁻¹]', '[ML²T⁻²K⁻¹]', '[MLT⁻²K⁻¹]', '[L²T⁻²]'],
    correctAnswer: '[L²T⁻²K⁻¹]',
    explanation: 'c = Q/(mΔT) = [ML²T⁻²]/[M][K] = [L²T⁻²K⁻¹].'
  },
  {
    id: 'phy-meas-51',
    text: 'The number of significant figures in 7.000 x 10⁻³ is:',
    options: ['1', '4', '3', '7'],
    correctAnswer: '4',
    explanation: 'Trailing zeros after decimal are significant.'
  },
  {
    id: 'phy-meas-52',
    text: 'The SI unit of plane angle is:',
    options: ['Degree', 'Radian', 'Steradian', 'Minute'],
    correctAnswer: 'Radian',
    explanation: 'Radian is the standard unit for angular measure.'
  },
  {
    id: 'phy-meas-53',
    text: 'Dimensional analysis cannot determine:',
    options: ['Proportionality constants', 'Unit conversion factors', 'Homogeneity', 'Dependencies'],
    correctAnswer: 'Proportionality constants',
    explanation: 'Dimensionless constants (like 2π or 1/2) cannot be derived.'
  },
  {
    id: 'phy-meas-54',
    text: 'Least count of a screw gauge is also called:',
    options: ['Pitch', 'Accuracy', 'Instrumental error', 'Sensitivity'],
    correctAnswer: 'Sensitivity',
    explanation: 'A more sensitive instrument can measure smaller changes.'
  },
  {
    id: 'phy-meas-55',
    text: 'Which prefix is 10⁻²?',
    options: ['Milli', 'Centi', 'Deci', 'Micro'],
    correctAnswer: 'Centi',
    explanation: 'centi (c) = 10⁻².'
  },
  {
    id: 'phy-meas-56',
    text: 'The dimension of surface tension is:',
    options: ['[MT⁻²]', '[MLT⁻²]', '[ML⁻¹T⁻²]', '[MT⁻¹]'],
    correctAnswer: '[MT⁻²]',
    explanation: 'Surface tension = Force/Length = [MLT⁻²]/[L] = [MT⁻²].'
  },
  {
    id: 'phy-meas-57',
    text: 'The error produced due to parallax is a:',
    options: ['Systematic error', 'Random error', 'Personal error', 'Environmental error'],
    correctAnswer: 'Personal error',
    explanation: 'It depends on the observer’s eye position.'
  },
  {
    id: 'phy-meas-58',
    text: 'If a result is 3.456 and we need only 3 significant figures, it becomes:',
    options: ['3.45', '3.46', '3.44', '3.50'],
    correctAnswer: '3.46',
    explanation: 'Round up since the 4th digit is > 5.'
  },
  {
    id: 'phy-meas-59',
    text: 'The dimension of electric current is:',
    options: ['[I]', '[A]', '[Q/T]', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'In some systems [I], in SI [A].'
  },
  {
    id: 'phy-meas-60',
    text: 'Dimensional formula for impulse is same as:',
    options: ['Force', 'Pressure', 'Linear Momentum', 'Energy'],
    correctAnswer: 'Linear Momentum',
    explanation: 'Impulse = Change in Momentum = [MLT⁻¹].'
  },
  {
    id: 'phy-meas-61',
    text: 'Standard unit of mass is kept at:',
    options: ['Washington', 'London', 'Paris (Sèvres)', 'Geneva'],
    correctAnswer: 'Paris (Sèvres)',
    explanation: 'The International Bureau of Weights and Measures is in France.'
  },
  {
    id: 'phy-meas-62',
    text: '1 Pico second is _____ micro seconds.',
    options: ['10⁻⁶', '10⁶', '10⁻³', '10³'],
    correctAnswer: '10⁻⁶',
    explanation: '10⁻¹² / 10⁻⁶ = 10⁻⁶.'
  },
  {
    id: 'phy-meas-63',
    text: 'The dimension of kinetic energy is:',
    options: ['[MLT⁻²]', '[ML²T⁻²]', '[ML²T⁻¹]', '[MLT⁻¹]'],
    correctAnswer: '[ML²T⁻²]',
    explanation: 'All energy forms have the same dimensions.'
  },
  {
    id: 'phy-meas-64',
    text: 'Which of the following is a physical quantity?',
    options: ['Happiness', 'Mass', 'Wisdom', 'Fear'],
    correctAnswer: 'Mass',
    explanation: 'Only mass can be quantified and measured with an instrument.'
  },
  {
    id: 'phy-meas-65',
    text: 'Scientific notation for 1,230,000 is:',
    options: ['1.23 x 10⁵', '1.23 x 10⁶', '12.3 x 10⁵', '1.23 x 10⁷'],
    correctAnswer: '1.23 x 10⁶',
    explanation: 'Move decimal 6 places left.'
  },
  {
    id: 'phy-meas-66',
    text: 'The dimension of universal gas constant R is:',
    options: ['[ML²T⁻²K⁻¹mol⁻¹]', '[MLT⁻²K⁻¹]', '[ML²T⁻¹]', '[M⁻¹L³T⁻²]'],
    correctAnswer: '[ML²T⁻²K⁻¹mol⁻¹]',
    explanation: 'From PV=nRT.'
  },
  {
    id: 'phy-meas-67',
    text: 'Total number of students is 45. The uncertainty is:',
    options: ['±1', '±0.5', 'Zero', '±4.5'],
    correctAnswer: 'Zero',
    explanation: 'Counting exact numbers has zero uncertainty.'
  },
  {
    id: 'phy-meas-68',
    text: 'The dimension of stress is same as:',
    options: ['Force', 'Strain', 'Pressure', 'Work'],
    correctAnswer: 'Pressure',
    explanation: 'Both are Force/Area.'
  },
  {
    id: 'phy-meas-69',
    text: '1 Mega is equal to:',
    options: ['10³', '10⁶', '10⁹', '10¹²'],
    correctAnswer: '10⁶',
    explanation: 'Mega (M) = 10⁶.'
  },
  {
    id: 'phy-meas-70',
    text: 'Number of base units for length is:',
    options: ['1', 'Many', 'Depends on system', 'None'],
    correctAnswer: '1',
    explanation: 'Meter (m) is the only base unit for length in SI.'
  },
  {
    id: 'phy-meas-71',
    text: 'Which error is also known as "Chance Error"?',
    options: ['Systematic', 'Random', 'Personal', 'Instrumental'],
    correctAnswer: 'Random',
    explanation: 'Random errors occur by chance.'
  },
  {
    id: 'phy-meas-72',
    text: 'Dimension of speed of light is:',
    options: ['[LT⁻¹]', '[L]', '[T⁻¹]', '[M]'],
    correctAnswer: '[LT⁻¹]',
    explanation: 'Light speed is still a velocity.'
  },
  {
    id: 'phy-meas-73',
    text: 'The value 18.4 rounded to one significant figure is:',
    options: ['18', '20', '10', '19'],
    correctAnswer: '20',
    explanation: 'The first significant digit is 1, next is 8, so round up.'
  },
  {
    id: 'phy-meas-74',
    text: 'How many steradians are in a complete sphere?',
    options: ['2π', '4π', 'π', '360'],
    correctAnswer: '4π',
    explanation: 'Surface area / r² = 4πr² / r² = 4π.'
  },
  {
    id: 'phy-meas-75',
    text: 'The dimension of torque is:',
    options: ['[ML²T⁻²]', '[MLT⁻²]', '[ML²T⁻¹]', '[ML⁻¹T⁻²]'],
    correctAnswer: '[ML²T⁻²]',
    explanation: 'Torque = r x F = [L][MLT⁻²] = [ML²T⁻²].'
  },
  {
    id: 'phy-meas-76',
    text: 'Which is a vector quantity?',
    options: ['Mass', 'Temperature', 'Velocity', 'Time'],
    correctAnswer: 'Velocity',
    explanation: 'Velocity has both magnitude and direction.'
  },
  {
    id: 'phy-meas-77',
    text: 'Dimensionless constants can be found by:',
    options: ['Experiments', 'Theories', 'Both A and B', 'Dimensional analysis'],
    correctAnswer: 'Both A and B',
    explanation: 'Physical experiments or derivations are needed.'
  },
  {
    id: 'phy-meas-78',
    text: '1 Micro meter is equal to:',
    options: ['10⁻⁶ m', '10⁻³ mm', '10³ nm', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Equivalent length units.'
  },
  {
    id: 'phy-meas-79',
    text: 'Which device is used to measure the diameter of a thin wire?',
    options: ['Meter rod', 'Vernier calliper', 'Screw gauge', 'Spherometer'],
    correctAnswer: 'Screw gauge',
    explanation: 'Screw gauge is most suitable for small diameters.'
  },
  {
    id: 'phy-meas-80',
    text: 'The dimension of power in terms of base units is:',
    options: ['kg m² s⁻³', 'kg m s⁻²', 'kg m² s⁻²', 'kg m s⁻³'],
    correctAnswer: 'kg m² s⁻³',
    explanation: '[ML²T⁻³] corresponds to kg m² / s³.'
  },
  {
    id: 'phy-meas-81',
    text: 'Error caused by the observer’s bias is:',
    options: ['Random', 'Systematic', 'Personal', 'Technique error'],
    correctAnswer: 'Personal',
    explanation: 'Personal error is due to individual habits.'
  },
  {
    id: 'phy-meas-82',
    text: 'If x = a - b, the absolute uncertainty in x is:',
    options: ['Δa - Δb', 'Δa + Δb', 'Δa / Δb', '√(Δa² + Δb²)'],
    correctAnswer: 'Δa + Δb',
    explanation: 'Errors always accumulate in sums and differences.'
  },
  {
    id: 'phy-meas-83',
    text: 'Dimensional formula for pressure is same as for:',
    options: ['Modulus of Elasticity', 'Energy density', 'Stress', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'All these have dimensions [ML⁻¹T⁻²].'
  },
  {
    id: 'phy-meas-84',
    text: 'The value 0.000000000001 is represented by prefix:',
    options: ['Nano', 'Pico', 'Femto', 'Atto'],
    correctAnswer: 'Pico',
    explanation: '10⁻¹² is Pico.'
  },
  {
    id: 'phy-meas-85',
    text: 'A measurement with high precision:',
    options: ['Must be accurate', 'Has small least count', 'Is always true', 'Has many significant figures'],
    correctAnswer: 'Has small least count',
    explanation: 'Precision refers to the resolution of the measurement.'
  },
  {
    id: 'phy-meas-86',
    text: 'An accurate measurement:',
    options: ['Has small relative error', 'Is close to the true value', 'Both A and B', 'Is very precise'],
    correctAnswer: 'Both A and B',
    explanation: 'Accuracy is about being close to the truth.'
  },
  {
    id: 'phy-meas-87',
    text: 'The dimension of time is:',
    options: ['[T]', '[S]', '[M⁰L⁰T¹]', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'Standard notation.'
  },
  {
    id: 'phy-meas-88',
    text: 'Significant figures in 0.0070 are:',
    options: ['2', '4', '1', '3'],
    correctAnswer: '2',
    explanation: '7 and the trailing 0.'
  },
  {
    id: 'phy-meas-89',
    text: 'The dimension of frequency multiplied by time is:',
    options: ['[T]', '[T⁻¹]', '[1]', '[T²]'],
    correctAnswer: '[1]',
    explanation: '[T⁻¹] * [T] = [T⁰] = dimensionless.'
  },
  {
    id: 'phy-meas-90',
    text: 'Which prefix is 10¹⁵?',
    options: ['Peta', 'Exa', 'Tera', 'Femto'],
    correctAnswer: 'Peta',
    explanation: 'Peta (P) = 10¹⁵.'
  },
  {
    id: 'phy-meas-91',
    text: 'The least count of a meter rod is:',
    options: ['1 cm', '1 mm', '0.1 mm', '0.01 mm'],
    correctAnswer: '1 mm',
    explanation: 'The smallest division on a standard meter rule is 1 mm.'
  },
  {
    id: 'phy-meas-92',
    text: 'What is the dimension of the constant "a" in v = at?',
    options: ['[L]', '[T]', '[LT⁻¹]', '[LT⁻²]'],
    correctAnswer: '[LT⁻²]',
    explanation: '[LT⁻¹] = [dim(a)] * [T] => [dim(a)] = [LT⁻²].'
  },
  {
    id: 'phy-meas-93',
    text: 'Total number of significant figures in (2.5 + 1.25) is:',
    options: ['2', '3', '1', '4'],
    correctAnswer: '2',
    explanation: 'Sum is 3.75. For addition, we keep decimal places of the least precise (2.5 has 1 decimal), so 3.8 (2 sig figs).'
  },
  {
    id: 'phy-meas-94',
    text: '1 Nano meter is _____ angstroms.',
    options: ['1', '10', '100', '0.1'],
    correctAnswer: '10',
    explanation: '10⁻⁹ / 10⁻¹⁰ = 10.'
  },
  {
    id: 'phy-meas-95',
    text: 'Dimension of Gravitational Potential is:',
    options: ['[L²T⁻²]', '[ML²T⁻²]', '[MLT⁻²]', '[L²T⁻¹]'],
    correctAnswer: '[L²T⁻²]',
    explanation: 'Potential = Work/Mass = [ML²T⁻²]/[M] = [L²T⁻²].'
  },
  {
    id: 'phy-meas-96',
    text: 'Which of the following is a supplementary unit?',
    options: ['Radian', 'Mole', 'Tesla', 'Henry'],
    correctAnswer: 'Radian',
    explanation: 'Radian and Steradian are supplementary.'
  },
  {
    id: 'phy-meas-97',
    text: 'The dimension of charge is:',
    options: ['[IT]', '[AT]', 'Both A and B', '[Q]'],
    correctAnswer: 'Both A and B',
    explanation: 'Charge = Current * Time.'
  },
  {
    id: 'phy-meas-98',
    text: 'The most accurate reading among 10.0, 10.00, 10.000 is:',
    options: ['10.0', '10.00', '10.000', 'All same'],
    correctAnswer: '10.000',
    explanation: 'More decimal places imply higher precision and lower percentage uncertainty.'
  },
  {
    id: 'phy-meas-99',
    text: 'What is the dimension of kinetic energy per unit volume?',
    options: ['[ML⁻¹T⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[L²T⁻²]'],
    correctAnswer: '[ML⁻¹T⁻²]',
    explanation: 'Energy/Volume = [ML²T⁻²]/[L³] = [ML⁻¹T⁻²] (same as pressure).'
  },
  {
    id: 'phy-meas-100',
    text: 'Physics is the most fundamental branch of science that deals with:',
    options: ['Life', 'Matter and Energy', 'Chemicals', 'Planets only'],
    correctAnswer: 'Matter and Energy',
    explanation: 'Physics studies the interaction between matter and energy.'
  }
];
