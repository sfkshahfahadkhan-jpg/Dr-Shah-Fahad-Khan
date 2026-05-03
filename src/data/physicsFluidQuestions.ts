import { Question } from '../types';

export const PHYSICS_FLUID_QUIZ: Question[] = [
  {
    id: 'ph-fd-1',
    text: 'The internal friction of a fluid that resists the flow is called:',
    options: ['Friction', 'Viscosity', 'Surface tension', 'Density'],
    correctAnswer: 'Viscosity',
    explanation: 'Symbolized by η (eta).'
  },
  {
    id: 'ph-fd-2',
    text: 'The unit of viscosity η is:',
    options: ['N.s/m^2 (Pascal-second)', 'N/m^2', 'kg.m/s', 'None'],
    correctAnswer: 'N.s/m^2 (Pascal-second)',
    explanation: 'Also called poiseuille.'
  },
  {
    id: 'ph-fd-3',
    text: 'The force experienced by an object moving through a fluid is called:',
    options: ['Normal force', 'Drag force', 'Upthrust', 'None'],
    correctAnswer: 'Drag force',
    explanation: 'Depends on speed, shape, and viscosity.'
  },
  {
    id: 'ph-fd-4',
    text: 'Stokes\' Law states that the drag force F on a sphere of radius r moving with speed v through a fluid of viscosity η is:',
    options: ['F = 6πηrv', 'F = ηAv/L', 'F = 1/2 ρv^2', 'None'],
    correctAnswer: 'F = 6πηrv',
    explanation: 'Applicable for small spheres at low speeds.'
  },
  {
    id: 'ph-fd-5',
    text: 'The constant maximum velocity of an object falling through a fluid is:',
    options: ['Average velocity', 'Terminal velocity', 'Escape velocity', 'None'],
    correctAnswer: 'Terminal velocity',
    explanation: 'Occurs when drag force + upthrust = weight.'
  },
  {
    id: 'ph-fd-6',
    text: 'Terminal velocity (vt) is _____ proportional to the square of the radius of the sphere.',
    options: ['Inversely', 'Directly', 'Not', 'None'],
    correctAnswer: 'Directly',
    explanation: 'vt = (2gr^2/9η) * (ρ - σ).'
  },
  {
    id: 'ph-fd-7',
    text: 'If the radius of a falling droplet is doubled, its terminal velocity becomes:',
    options: ['Double', 'Four times', 'Half', 'None'],
    correctAnswer: 'Four times',
    explanation: 'v ∝ r^2.'
  },
  {
    id: 'ph-fd-8',
    text: 'A flow in which every particle that passes a point moves along the same path as followed by previous particles is:',
    options: ['Turbulent flow', 'Streamline / Laminar flow', 'Mixed flow', 'None'],
    correctAnswer: 'Streamline / Laminar flow',
    explanation: 'Smooth and orderly flow.'
  },
  {
    id: 'ph-fd-9',
    text: 'An unsteady flow characterized by sharp changes in velocity and pressure is:',
    options: ['Laminar flow', 'Turbulent flow', 'Ideal flow', 'None'],
    correctAnswer: 'Turbulent flow',
    explanation: 'Disordered and chaotic.'
  },
  {
    id: 'ph-fd-10',
    text: 'An ideal fluid is _____, _____, and its flow is _____.',
    options: ['Incompressible, Non-viscous, Irrotational', 'Compressible, Viscous, Turbulent', 'Heavy, Slow, Steady', 'None'],
    correctAnswer: 'Incompressible, Non-viscous, Irrotational',
    explanation: 'Simplifying assumptions for fluid dynamics.'
  },
  {
    id: 'ph-fd-11',
    text: 'Equation of Continuity: For an incompressible fluid, the product of cross-sectional area and speed is:',
    options: ['Increasing', 'Decreasing', 'Constant', 'None'],
    correctAnswer: 'Constant',
    explanation: 'A1v1 = A2v2.'
  },
  {
    id: 'ph-fd-12',
    text: 'The product Av represents the:',
    options: ['Mass flow rate', 'Volume flow rate (Flow rate)', 'Pressure', 'None'],
    correctAnswer: 'Volume flow rate (Flow rate)',
    explanation: 'Units are m^3/s.'
  },
  {
    id: 'ph-fd-13',
    text: 'Where the streamlines are close together, the fluid speed is _____ and the pressure is _____.',
    options: ['High, Low', 'Low, High', 'High, High', 'Low, Low'],
    correctAnswer: 'High, Low',
    explanation: 'According to Bernoulli\'s principle.'
  },
  {
    id: 'ph-fd-14',
    text: 'Bernoulli\'s Equation is based on the law of conservation of:',
    options: ['Mass', 'Momentum', 'Energy', 'Charge'],
    correctAnswer: 'Energy',
    explanation: 'P + 1/2 ρv^2 + ρgh = Constant.'
  },
  {
    id: 'ph-fd-15',
    text: 'Torricelli\'s Theorem: The speed of efflux of a liquid from an orifice is equal to the speed gained by a body falling through a height h, given by v =:',
    options: ['√(gh)', '√(2gh)', 'gh', 'None'],
    correctAnswer: '√(2gh)',
    explanation: 'Derived from Bernoulli\'s equation.'
  },
  {
    id: 'ph-fd-16',
    text: 'The lift on an airplane wing (airfoil) is due to the pressure difference created by:',
    options: ['Gravity', 'Higher speed of air above the wing', 'Lower speed of air above the wing', 'None'],
    correctAnswer: 'Higher speed of air above the wing',
    explanation: 'Produces lower pressure above, creating upward lift.'
  },
  {
    id: 'ph-fd-17',
    text: 'Venturi effect states that as fluid speed increases through a constriction, its pressure:',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Application of Bernoulli\'s principle.'
  },
  {
    id: 'ph-fd-18',
    text: 'A Venturimeter is a device used to measure:',
    options: ['Density', 'Fluid speed', 'Temperature', 'None'],
    correctAnswer: 'Fluid speed',
    explanation: 'Uses the pressure difference in a constricted pipe.'
  },
  {
    id: 'ph-fd-19',
    text: 'Blood pressure is measured using a:',
    options: ['Thermometer', 'Sphygmomanometer', 'Barometer', 'None'],
    correctAnswer: 'Sphygmomanometer',
    explanation: 'Measures systolic and diastolic pressure.'
  },
  {
    id: 'ph-fd-20',
    text: 'The units of blood pressure are usually:',
    options: ['Pascal', 'Torr / mm of Hg', 'Atm', 'None'],
    correctAnswer: 'Torr / mm of Hg',
    explanation: 'Standard medical unit.'
  },
  {
    id: 'ph-fd-21',
    text: 'When the heart contracts, the pressure is called _____ and when it relaxes, it is _____.',
    options: ['Diastolic, Systolic', 'Systolic, Diastolic', 'High, Low', 'None'],
    correctAnswer: 'Systolic, Diastolic',
    explanation: 'Systolic is the maximum pressure (~120 torr).'
  },
  {
    id: 'ph-fd-22',
    text: 'Normal blood pressure for a healthy human is about:',
    options: ['120/80 torr', '80/120 torr', '100/60 torr', 'None'],
    correctAnswer: '120/80 torr',
    explanation: 'Systolic/Diastolic.'
  },
  {
    id: 'ph-fd-23',
    text: 'The viscosity of a fluid _____ with increase in temperature for liquids.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Liquids become thinner/runnier when hot.'
  },
  {
    id: 'ph-fd-24',
    text: 'The viscosity of a fluid _____ with increase in temperature for gases.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to more molecular collisions.'
  },
  {
    id: 'ph-fd-25',
    text: 'Water is more viscous than:',
    options: ['Honey', 'Glycerine', 'Air', 'None'],
    correctAnswer: 'Air',
    explanation: 'Air has very low viscosity.'
  },
  {
    id: 'ph-fd-26',
    text: 'An object is falling through air with terminal velocity. Its acceleration is:',
    options: ['9.8 m/s^2', 'Zero', 'Variable', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Velocity is constant.'
  },
  {
    id: 'ph-fd-27',
    text: 'In the equation of continuity, if the area of the pipe is halved, the velocity of fluid becomes:',
    options: ['Half', 'Double', 'Four times', 'None'],
    correctAnswer: 'Double',
    explanation: 'A1v1 = A2v2.'
  },
  {
    id: 'ph-fd-28',
    text: 'Bernoulli\'s principle explains why a spinning ball:',
    options: ['Falls faster', 'Curves in flight (Swing/Magnus effect)', 'Stops', 'None'],
    correctAnswer: 'Curves in flight (Swing/Magnus effect)',
    explanation: 'Spinning creates pressure difference on opposite sides.'
  },
  {
    id: 'ph-fd-29',
    text: 'The pressure inside a bubble is _____ than the pressure outside.',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Due to surface tension.'
  },
  {
    id: 'ph-fd-30',
    text: 'A chimney works best when there is a _____ outside.',
    options: ['Strong wind', 'No wind', 'Rain', 'None'],
    correctAnswer: 'Strong wind',
    explanation: 'Wind reduces pressure at the top, helping smoke rise faster.'
  },
  {
    id: 'ph-fd-31',
    text: 'Viscosity is a measure of the _____ of a fluid.',
    options: ['Heaviness', 'Stickiness / resistance to flow', 'Purity', 'None'],
    correctAnswer: 'Stickiness / resistance to flow',
    explanation: 'Related to intermolecular forces.'
  },
  {
    id: 'ph-fd-32',
    text: 'The dimension of coefficient of viscosity η is:',
    options: ['[ML^-1T^-1]', '[ML^2T^-1]', '[MLT^-2]', 'None'],
    correctAnswer: '[ML^-1T^-1]',
    explanation: 'Derived from F = 6πηrv.'
  },
  {
    id: 'ph-fd-33',
    text: 'Glycerine is _____ viscous than water.',
    options: ['Less', 'More', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Water flows much more easily.'
  },
  {
    id: 'ph-fd-34',
    text: 'For a fluid flow to be steady, the velocity at each point must _____ with time.',
    options: ['Increase', 'Decrease', 'Remain constant', 'None'],
    correctAnswer: 'Remain constant',
    explanation: 'Definition of steady/streamline flow.'
  },
  {
    id: 'ph-fd-35',
    text: 'Streamlines _____ cross each other.',
    options: ['Often', 'Never', 'Always', 'None'],
    correctAnswer: 'Never',
    explanation: 'Otherwise, velocity at the intersection point would not be unique.'
  },
  {
    id: 'ph-fd-36',
    text: 'A narrowing of the artery leads to a _____ in blood flow speed and a _____ in blood pressure.',
    options: ['Increase, Decrease', 'Decrease, Increase', 'Increase, Increase', 'Decrease, Decrease'],
    correctAnswer: 'Increase, Decrease',
    explanation: 'Can lead to collapse of the artery if pressure drops too low.'
  },
  {
    id: 'ph-fd-37',
    text: 'Bunsen burner works on the principle of:',
    options: ['Torricelli', 'Venturi / Bernoulli', 'Pascal', 'None'],
    correctAnswer: 'Venturi / Bernoulli',
    explanation: 'Gas jet creates low pressure to draw in air.'
  },
  {
    id: 'ph-fd-38',
    text: 'Atomizers and paint sprayers use _____ to draw up liquid.',
    options: ['Pumps', 'High speed air stream', 'Heating', 'None'],
    correctAnswer: 'High speed air stream',
    explanation: 'Reduces pressure above the tube.'
  },
  {
    id: 'ph-fd-39',
    text: 'The fog produced by an atomizer is a suspension of _____ in _____.',
    options: ['Liquid, Gas', 'Gas, Liquid', 'Solid, Liquid', 'None'],
    correctAnswer: 'Liquid, Gas',
    explanation: 'Fine droplets.'
  },
  {
    id: 'ph-fd-40',
    text: 'A person standing near a fast-moving train feels a pull _____ the train.',
    options: ['Away from', 'Towards', 'Upward from', 'None'],
    correctAnswer: 'Towards',
    explanation: 'Higher speed air between person and train has lower pressure.'
  },
  {
    id: 'ph-fd-41',
    text: 'The density of water is _____ kg/m^3.',
    options: ['1', '100', '1000', '10000'],
    correctAnswer: '1000',
    explanation: 'Standard value at 4°C.'
  },
  {
    id: 'ph-fd-42',
    text: 'Blood is _____ than water.',
    options: ['Denser', 'Lighter', 'Equally dense', 'None'],
    correctAnswer: 'Denser',
    explanation: 'About 1.05 times.'
  },
  {
    id: 'ph-fd-43',
    text: 'High concentration of red blood cells _____ the viscosity of blood.',
    options: ['Decreases', 'Increases', 'Does not affect', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Makes it harder to pump.'
  },
  {
    id: 'ph-fd-44',
    text: 'In the absence of air resistance, all bodies fall with _____ acceleration.',
    options: ['Different', 'Zero', 'Same (g)', 'None'],
    correctAnswer: 'Same (g)',
    explanation: 'Galileo\'s principle.'
  },
  {
    id: 'ph-fd-45',
    text: 'Fog droplets appear to hang in the air because their terminal velocity is:',
    options: ['Very high', 'Very small', 'Zero', 'None'],
    correctAnswer: 'Very small',
    explanation: 'Due to very small radius.'
  },
  {
    id: 'ph-fd-46',
    text: 'Parachutists use the _____ force to descend safely.',
    options: ['Gravitational', 'Drag', 'Centripetal', 'None'],
    correctAnswer: 'Drag',
    explanation: 'Large area increases drag to reach a safe terminal velocity.'
  },
  {
    id: 'ph-fd-47',
    text: 'Upthrust (Buoyancy) is given by _____\'s principle.',
    options: ['Bernoulli', 'Archimedes', 'Stokes', 'None'],
    correctAnswer: 'Archimedes',
    explanation: 'Equal to the weight of fluid displaced.'
  },
  {
    id: 'ph-fd-48',
    text: 'If density of body = density of fluid, the body will:',
    options: ['Sink', 'Float on top', 'Float anywhere inside (Neutral buoyancy)', 'None'],
    correctAnswer: 'Float anywhere inside (Neutral buoyancy)',
    explanation: 'Net force is zero.'
  },
  {
    id: 'ph-fd-49',
    text: 'Equation of continuity is a statement of conservation of:',
    options: ['Energy', 'Momentum', 'Mass', 'None'],
    correctAnswer: 'Mass',
    explanation: 'What goes in must come out (for incompressible fluids).'
  },
  {
    id: 'ph-fd-50',
    text: 'The "Static pressure" in Bernoulli\'s equation is denoted by:',
    options: ['P', '1/2 ρv^2', 'ρgh', 'None'],
    correctAnswer: 'P',
    explanation: 'Pressure of the fluid itself.'
  },
  {
    id: 'ph-fd-51',
    text: 'The term 1/2 ρv^2 represents _____ per unit volume.',
    options: ['Potential Energy', 'Kinetic Energy', 'Force', 'None'],
    correctAnswer: 'Kinetic Energy',
    explanation: 'Dynamic pressure.'
  },
  {
    id: 'ph-fd-52',
    text: 'The term ρgh represents _____ per unit volume.',
    options: ['Kinetic Energy', 'Potential Energy', 'Density', 'None'],
    correctAnswer: 'Potential Energy',
    explanation: 'Related to height.'
  },
  {
    id: 'ph-fd-53',
    text: 'The sum of static and dynamic pressure is called _____ pressure.',
    options: ['Total', 'Stagnation', 'Gauge', 'None'],
    correctAnswer: 'Stagnation',
    explanation: 'Measured at a point where fluid is brought to rest.'
  },
  {
    id: 'ph-fd-54',
    text: 'A pitot tube is used to measure the _____ of a fluid.',
    options: ['Viscosity', 'Velocity', 'Mass', 'None'],
    correctAnswer: 'Velocity',
    explanation: 'Used in aircraft speedometers.'
  },
  {
    id: 'ph-fd-55',
    text: 'The flow becomes turbulent when the fluid speed exceeds a _____ value.',
    options: ['Minimum', 'Critical', 'Zero', 'None'],
    correctAnswer: 'Critical',
    explanation: 'Related to Reynolds number.'
  },
  {
    id: 'ph-fd-56',
    text: 'Which is NOT an ideal fluid?',
    options: ['Water', 'Honey', 'Air', 'None of these are perfectly ideal'],
    correctAnswer: 'None of these are perfectly ideal',
    explanation: 'Real fluids always have some viscosity and compressibility.'
  },
  {
    id: 'ph-fd-57',
    text: 'The unit "Poise" is equal to _____ N.s/m^2.',
    options: ['1', '0.1', '10', 'None'],
    correctAnswer: '0.1',
    explanation: 'CGS unit of viscosity.'
  },
  {
    id: 'ph-fd-58',
    text: 'Blood flow in most of the body is _____, but becomes _____ near heart valves.',
    options: ['Turbulent, Laminar', 'Laminar, Turbulent', 'Mixed, Constant', 'None'],
    correctAnswer: 'Laminar, Turbulent',
    explanation: 'Turbulence causes heart murmurs.'
  },
  {
    id: 'ph-fd-59',
    text: 'If the area of cross-section is increased by 4 times, the velocity decreases by:',
    options: ['2 times', '4 times', '16 times', 'None'],
    correctAnswer: '4 times',
    explanation: 'Inversely proportional.'
  },
  {
    id: 'ph-fd-60',
    text: 'The swing of a cricket ball is enhanced when one side is _____ and the other is _____.',
    options: ['Shiny, Rough', 'Shiny, Shiny', 'Rough, Rough', 'None'],
    correctAnswer: 'Shiny, Rough',
    explanation: 'Creates asymmetric air flow and pressure difference.'
  },
  {
    id: 'ph-fd-61',
    text: 'Viscosity of blood is about _____ to _____ times that of water.',
    options: ['2, 3', '3, 5', '10, 20', 'None'],
    correctAnswer: '3, 5',
    explanation: 'Due to proteins and cells.'
  },
  {
    id: 'ph-fd-62',
    text: 'Bernoulli\'s equation for a horizontal pipe (h1 = h2) is:',
    options: ['P1 + 1/2 ρv1^2 = P2 + 1/2 ρv2^2', 'P1 + ρgh1 = P2 + ρgh2', 'v1 = v2', 'None'],
    correctAnswer: 'P1 + 1/2 ρv1^2 = P2 + 1/2 ρv2^2',
    explanation: 'Height term cancels out.'
  },
  {
    id: 'ph-fd-63',
    text: 'The pressure difference P1 - P2 in a Venturimeter is given by:',
    options: ['ρgh', '1/2 ρ(v2^2 - v1^2)', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Relates pressure to height in manometer and velocity.'
  },
  {
    id: 'ph-fd-64',
    text: 'A hydrofoil works on the same principle as _____ to lift a boat out of water.',
    options: ['Stokes\' law', 'Airfoil / Bernoulli', 'Archimedes', 'None'],
    correctAnswer: 'Airfoil / Bernoulli',
    explanation: 'Uses water flow instead of air flow.'
  },
  {
    id: 'ph-fd-65',
    text: 'The "Terminal speed" of an object is reached when net force is:',
    options: ['Maximum', 'Minimum', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Balanced forces.'
  },
  {
    id: 'ph-fd-66',
    text: 'When a fluid is at rest, the speed v = 0, and Bernoulli\'s equation reduces to:',
    options: ['P1 - P2 = ρg(h2 - h1)', 'P1 = P2', 'ρgh = 0', 'None'],
    correctAnswer: 'P1 - P2 = ρg(h2 - h1)',
    explanation: 'Standard hydrostatic pressure law.'
  },
  {
    id: 'ph-fd-67',
    text: 'The heart has to do more work if the blood viscosity _____:',
    options: ['Decreases', 'Increases', 'Remains constant', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Higher resistance to flow.'
  },
  {
    id: 'ph-fd-68',
    text: 'Surface tension is _____ for smaller bubbles.',
    options: ['Less significant', 'More significant', 'Same', 'None'],
    correctAnswer: 'More significant',
    explanation: 'Higher pressure needed to maintain small radius.'
  },
  {
    id: 'ph-fd-69',
    text: 'In laminar flow, the velocity of the fluid layer in contact with the walls is:',
    options: ['Maximum', 'Zero', 'Average', 'None'],
    correctAnswer: 'Zero',
    explanation: 'No-slip condition.'
  },
  {
    id: 'ph-fd-70',
    text: 'In laminar flow, the velocity of the fluid is _____ at the center of the pipe.',
    options: ['Zero', 'Maximum', 'Average', 'None'],
    correctAnswer: 'Maximum',
    explanation: 'Parabolic velocity profile.'
  },
  {
    id: 'ph-fd-71',
    text: 'Viscosity of a gas is directly proportional to the square root of _____:',
    options: ['Pressure', 'Absolute temperature (√T)', 'Volume', 'None'],
    correctAnswer: 'Absolute temperature (√T)',
    explanation: 'Kinetic theory of gases.'
  },
  {
    id: 'ph-fd-72',
    text: 'Stokes\' law is derived for _____ flow.',
    options: ['Streamline', 'Turbulent', 'Mixed', 'None'],
    correctAnswer: 'Streamline',
    explanation: 'Low Reynolds number.'
  },
  {
    id: 'ph-fd-73',
    text: 'The "Reynolds number" is a dimensionless quantity used to predict _____:',
    options: ['Flow pattern (Laminar/Turbulent)', 'Density', 'Viscosity', 'None'],
    correctAnswer: 'Flow pattern (Laminar/Turbulent)',
    explanation: 'Re = ρvD/η.'
  },
  {
    id: 'ph-fd-74',
    text: 'For flow in a pipe to be laminar, Reynolds number should be less than about:',
    options: ['2000', '10000', '100', 'None'],
    correctAnswer: '2000',
    explanation: 'Empirical value.'
  },
  {
    id: 'ph-fd-75',
    text: 'In the equation vt = 2gr^2(ρ-σ)/9η, if ρ = σ, the terminal velocity is:',
    options: ['Maximum', 'Zero', 'Infinity', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Neutral buoyancy.'
  },
  {
    id: 'ph-fd-76',
    text: 'If a fluid is compressible, its density _____ with pressure.',
    options: ['Does not change', 'Changes', 'Decreases', 'None'],
    correctAnswer: 'Changes',
    explanation: 'Gases are highly compressible.'
  },
  {
    id: 'ph-fd-77',
    text: 'The "Upthrust" is also called _____ force.',
    options: ['Buoyant', 'Drag', 'Viscous', 'None'],
    correctAnswer: 'Buoyant',
    explanation: 'Acts in opposite direction to weight.'
  },
  {
    id: 'ph-fd-78',
    text: 'A boat floats because it displaces a weight of water _____ to its own weight.',
    options: ['Less than', 'Equal to', 'More than', 'None'],
    correctAnswer: 'Equal to',
    explanation: 'Archimedes\' principle for floating.'
  },
  {
    id: 'ph-fd-79',
    text: 'The Bernoulli\'s equation relates _____ to _____ and _____.',
    options: ['Force, Mass, Acceleration', 'Pressure, Speed, Height', 'Work, Time, Power', 'None'],
    correctAnswer: 'Pressure, Speed, Height',
    explanation: 'Summary of the equation.'
  },
  {
    id: 'ph-fd-80',
    text: 'A "Perfume spray" works because fast air creates _____ pressure near the tube.',
    options: ['High', 'Low', 'Atmospheric', 'None'],
    correctAnswer: 'Low',
    explanation: 'Draws liquid up.'
  },
  {
    id: 'ph-fd-81',
    text: 'The "Magnus effect" is another name for the swing of a spinning _____:',
    options: ['Wheel', 'Ball', 'Cylinder', 'None'],
    correctAnswer: 'Ball',
    explanation: 'Used in sports like tennis, soccer, cricket.'
  },
  {
    id: 'ph-fd-82',
    text: 'When we squeeze a garden hose, the water speed _____ because area _____.',
    options: ['Decreases, Increases', 'Increases, Decreases', 'Both Increase', 'None'],
    correctAnswer: 'Increases, Decreases',
    explanation: 'Equation of continuity.'
  },
  {
    id: 'ph-fd-83',
    text: 'The pressure in a fluid _____ as we go deeper.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'P = P_atm + ρgh.'
  },
  {
    id: 'ph-fd-84',
    text: 'The SI unit of pressure is:',
    options: ['Newton', 'Joule', 'Pascal (Pa)', 'Watt'],
    correctAnswer: 'Pascal (Pa)',
    explanation: '1 Pa = 1 N/m^2.'
  },
  {
    id: 'ph-fd-85',
    text: 'One atmosphere is approximately _____ Pascals.',
    options: ['100', '10^5', '10^6', 'None'],
    correctAnswer: '10^5',
    explanation: '1.013 x 10^5 Pa.'
  },
  {
    id: 'ph-fd-86',
    text: 'Viscosity is also known as _____ friction.',
    options: ['External', 'Internal', 'Static', 'None'],
    correctAnswer: 'Internal',
    explanation: 'Resistance between adjacent layers.'
  },
  {
    id: 'ph-fd-87',
    text: 'For large objects moving at high speeds, drag force is proportional to _____:',
    options: ['v', 'v^2', 'v^3', 'None'],
    correctAnswer: 'v^2',
    explanation: 'Turbulent drag.'
  },
  {
    id: 'ph-fd-88',
    text: 'A "Fluid" is a substance that can _____:',
    options: ['Burn', 'Flow', 'Melt', 'None'],
    correctAnswer: 'Flow',
    explanation: 'Includes both liquids and gases.'
  },
  {
    id: 'ph-fd-89',
    text: 'Which is NOT a property of an ideal fluid?',
    options: ['Incompressible', 'Non-viscous', 'Turbulent', 'Steady flow'],
    correctAnswer: 'Turbulent',
    explanation: 'Ideal flow must be steady.'
  },
  {
    id: 'ph-fd-90',
    text: 'Fluid dynamics is the study of fluids in _____:',
    options: ['Rest', 'Motion', 'Vacuum', 'None'],
    correctAnswer: 'Motion',
    explanation: 'Branch of mechanics.'
  },
  {
    id: 'ph-fd-91',
    text: 'The terminal velocity of a dust particle is _____ than that of a stone.',
    options: ['Higher', 'Lower', 'Same', 'None'],
    correctAnswer: 'Lower',
    explanation: 'Due to much smaller radius and mass.'
  },
  {
    id: 'ph-fd-92',
    text: 'Lubrication _____ the viscosity of moving parts in some applications.',
    options: ['Increases', 'Replaces friction with lower viscous resistance', 'Eliminates', 'None'],
    correctAnswer: 'Replaces friction with lower viscous resistance',
    explanation: 'Uses oils or grease.'
  },
  {
    id: 'ph-fd-93',
    text: 'Which has the highest viscosity at room temperature?',
    options: ['Water', 'Air', 'Honey', 'Mercury'],
    correctAnswer: 'Honey',
    explanation: 'Very thick and slow-moving.'
  },
  {
    id: 'ph-fd-94',
    text: 'Viscosity of a liquid _____ as it is cooled.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Intermolecular forces become more effective.'
  },
  {
    id: 'ph-fd-95',
    text: 'The speed of blood in a large artery is about _____ m/s.',
    options: ['0.01', '0.3', '10', '100'],
    correctAnswer: '0.3',
    explanation: 'Relatively slow flow.'
  },
  {
    id: 'ph-fd-96',
    text: 'The "Systolic" pressure is measured during _____ of the heart.',
    options: ['Expansion', 'Contraction', 'Resting', 'None'],
    correctAnswer: 'Contraction',
    explanation: 'Pumping phase.'
  },
  {
    id: 'ph-fd-97',
    text: 'High blood pressure is also known as _____:',
    options: ['Hypotension', 'Hypertension', 'Tachycardia', 'None'],
    correctAnswer: 'Hypertension',
    explanation: 'Can lead to cardiovascular diseases.'
  },
  {
    id: 'ph-fd-98',
    text: 'A "Stethoscope" is used by doctors to hear _____ flow of blood.',
    options: ['Laminar', 'Turbulent', 'Steady', 'None'],
    correctAnswer: 'Turbulent',
    explanation: 'Heard as specific sounds during BP measurement.'
  },
  {
    id: 'ph-fd-99',
    text: 'Fluid flow is easier through a _____ pipe.',
    options: ['Narrow', 'Wide', 'Long', 'Rough'],
    correctAnswer: 'Wide',
    explanation: 'Lower resistance (Poiseuille\'s law).'
  },
  {
    id: 'ph-fd-100',
    text: 'Bernoulli\'s equation is a restatement of _____ for fluids.',
    options: ['Newton\'s second law', 'Work-Energy Theorem', 'Conservation of momentum', 'None'],
    correctAnswer: 'Work-Energy Theorem',
    explanation: 'Work done by pressure difference = change in kinetic and potential energy.'
  }
];
