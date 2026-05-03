import { Question } from '../types';

export const CHEMISTRY_LIQUIDS_SOLIDS_QUIZ: Question[] = [
  {
    id: 'chem-liq-1',
    text: 'Forces that exist between molecules are called:',
    options: ['Intramolecular forces', 'Intermolecular forces', 'Ionic bonds', 'Covalent bonds'],
    correctAnswer: 'Intermolecular forces',
    explanation: 'Intermolecular forces (like Van der Waals) are between molecules; intramolecular (like covalent) are within molecules.'
  },
  {
    id: 'chem-liq-2',
    text: 'Which is the strongest type of intermolecular force?',
    options: ['London dispersion forces', 'Dipole-dipole forces', 'Hydrogen bonding', 'Debye forces'],
    correctAnswer: 'Hydrogen bonding',
    explanation: 'Hydrogen bonding is a particularly strong dipole-dipole attraction involving H and N, O, or F.'
  },
  {
    id: 'chem-liq-3',
    text: 'London dispersion forces are the only intermolecular forces present in:',
    options: ['Polar molecules', 'Non-polar molecules and noble gases', 'Ionic compounds', 'Acids'],
    correctAnswer: 'Non-polar molecules and noble gases',
    explanation: 'Temporary dipoles occur in all molecules but are the only forces in non-polar ones like CH4 or He.'
  },
  {
    id: 'chem-liq-4',
    text: 'The boiling point of water is exceptionally high (100°C) due to:',
    options: ['Its low molar mass', 'Its linear shape', 'Strong hydrogen bonding', 'Its high density'],
    correctAnswer: 'Strong hydrogen bonding',
    explanation: 'Extensive hydrogen bonding in H2O requires high energy to break for vaporization.'
  },
  {
    id: 'chem-liq-5',
    text: 'Evaporation is a _____ process.',
    options: ['Warming', 'Cooling', 'Isothermal', 'Adiabatic'],
    correctAnswer: 'Cooling',
    explanation: 'High-energy molecules leave the liquid, lowering the average kinetic energy and temperature of the remainder.'
  },
  {
    id: 'chem-liq-6',
    text: 'The pressure exerted by the vapors of a liquid in equilibrium with the liquid at a given temperature is:',
    options: ['Atmospheric pressure', 'Vapor pressure', 'Critical pressure', 'Partial pressure'],
    correctAnswer: 'Vapor pressure',
    explanation: 'Vapor pressure increases with temperature.'
  },
  {
    id: 'chem-liq-7',
    text: 'The temperature at which the vapor pressure of a liquid becomes equal to the external atmospheric pressure is its:',
    options: ['Freezing point', 'Boiling point', 'Critical point', 'Melting point'],
    correctAnswer: 'Boiling point',
    explanation: 'When V.P. = P_ext, the liquid starts boiling.'
  },
  {
    id: 'chem-liq-8',
    text: 'At high altitudes (like Murree or Mount Everest), the boiling point of water:',
    options: ['Increases', 'Decreases', 'Remains 100°C', 'Becomes zero'],
    correctAnswer: 'Decreases',
    explanation: 'Lower atmospheric pressure means vapor pressure matches it at a lower temperature.'
  },
  {
    id: 'chem-liq-9',
    text: 'Solids that lack a regular, repeating internal arrangement of atoms are:',
    options: ['Crystalline solids', 'Amorphous solids', 'Polymers', 'Unit cells'],
    correctAnswer: 'Amorphous solids',
    explanation: 'Amorphous means "without shape" (e.g., glass, plastic).'
  },
  {
    id: 'chem-liq-10',
    text: 'The smallest part of a crystal lattice that shows the complete pattern of the crystal is the:',
    options: ['Atom', 'Molecule', 'Unit cell', 'Lattice point'],
    correctAnswer: 'Unit cell',
    explanation: 'A crystal is built by repeating unit cells in three dimensions.'
  },
  {
    id: 'chem-liqsol-30',
    text: 'The boiling point of a liquid is the temperature at which its vapor pressure equals:',
    options: ['Zero', 'Atmospheric pressure', 'Critical pressure', '1 torr'],
    correctAnswer: 'Atmospheric pressure',
    explanation: 'At this point, bubbles can form throughout the liquid.'
  },
  {
    id: 'chem-liqsol-31',
    text: 'Which of the following has the highest boiling point?',
    options: ['HF', 'HCl', 'HBr', 'HI'],
    correctAnswer: 'HF',
    explanation: 'HF has strong hydrogen bonding due to high electronegativity of Fluorine.'
  },
  {
    id: 'chem-liqsol-32',
    text: 'The properties of liquids that depend on intermolecular forces are:',
    options: ['Surface tension', 'Viscosity', 'Vapor pressure', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Stronger IMFs lead to higher ST and Viscosity, but lower VP.'
  },
  {
    id: 'chem-liqsol-33',
    text: 'Water has a high surface tension due to:',
    options: ['Ionic bonds', 'Hydrogen bonding', 'Metallic bonds', 'London forces'],
    correctAnswer: 'Hydrogen bonding',
    explanation: 'H-bonds pull surface molecules inward.'
  },
  {
    id: 'chem-liqsol-34',
    text: 'The resistance of a liquid to flow is:',
    options: ['Surface tension', 'Viscosity', 'Diffusion', 'Malleability'],
    correctAnswer: 'Viscosity',
    explanation: 'Viscosity measures internal friction.'
  },
  {
    id: 'chem-liqsol-35',
    text: 'As temperature increases, the viscosity of a liquid:',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes zero'],
    correctAnswer: 'Decreases',
    explanation: 'Increased kinetic energy overcomes intermolecular attractions.'
  },
  {
    id: 'chem-liqsol-36',
    text: 'Evaporation is a _____ process.',
    options: ['Cooling', 'Heating', 'Isothermal', 'Spontaneous'],
    correctAnswer: 'Cooling',
    explanation: 'Higher energy molecules leave, lowering the average K.E. of the remaining liquid.'
  },
  {
    id: 'chem-liqsol-37',
    text: 'Solids which lack a regular internal geometric arrangement are:',
    options: ['Crystalline', 'Amorphous', 'Ionic', 'Molecular'],
    correctAnswer: 'Amorphous',
    explanation: 'Examples include glass, plastics, and rubber.'
  },
  {
    id: 'chem-liqsol-38',
    text: 'Crystalline solids have _____ melting points.',
    options: ['Sharp', 'Range of', 'Low', 'Variable'],
    correctAnswer: 'Sharp',
    explanation: 'They have a uniform structure that breaks all at once.'
  },
  {
    id: 'chem-liqsol-39',
    text: 'Which of the following is an amorphous solid?',
    options: ['Diamond', 'NaCl', 'Glass', 'Ice'],
    correctAnswer: 'Glass',
    explanation: 'Glass is often called a "supercooled liquid".'
  },
  {
    id: 'chem-liqsol-40',
    text: 'The smallest repeating unit of a crystal lattice is:',
    options: ['Atom', 'Molecule', 'Unit cell', 'Lattice point'],
    correctAnswer: 'Unit cell',
    explanation: 'By repeating the unit cell in 3D, the entire crystal is formed.'
  },
  {
    id: 'chem-liqsol-41',
    text: 'There are _____ crystal systems.',
    options: ['3', '5', '7', '14'],
    correctAnswer: '7',
    explanation: 'Cubic, Tetragonal, Orthorhombic, Monoclinic, Triclinic, Hexagonal, Rhombohedral.'
  },
  {
    id: 'chem-liqsol-42',
    text: 'In a cubic system, the axes relationships are:',
    options: ['a=b=c', 'a=b≠c', 'a≠b≠c', 'a=b=c=0'],
    correctAnswer: 'a=b=c',
    explanation: 'All sides are equal and all angles are 90°.'
  },
  {
    id: 'chem-liqsol-43',
    text: 'The existence of a solid in more than one crystalline form is:',
    options: ['Isomorphism', 'Polymorphism', 'Allotropy', 'Anisotropy'],
    correctAnswer: 'Polymorphism',
    explanation: 'Examples: CaCO3 as Calcite and Aragonite.'
  },
  {
    id: 'chem-liqsol-44',
    text: 'Isomorphism is when different substances have the _____ crystal structure.',
    options: ['Same', 'Different', 'Opposite', 'Mirror'],
    correctAnswer: 'Same',
    explanation: 'Example: NaF and MgO both have cubic structure.'
  },
  {
    id: 'chem-liqsol-45',
    text: 'Anisotropy is the property where physical properties change with:',
    options: ['Temperature', 'Pressure', 'Direction', 'Volume'],
    correctAnswer: 'Direction',
    explanation: 'Properties like refractive index or conductivity vary in different directions in crystals.'
  },
  {
    id: 'chem-liqsol-46',
    text: 'Which type of solid is Diamond?',
    options: ['Ionic', 'Molecular', 'Covalent (Network)', 'Metallic'],
    correctAnswer: 'Covalent (Network)',
    explanation: 'Carbon atoms are linked by strong covalent bonds in a 3D lattice.'
  },
  {
    id: 'chem-liqsol-47',
    text: 'In ionic solids, the lattice points are occupied by:',
    options: ['Atoms', 'Molecules', 'Ions', 'Electrons'],
    correctAnswer: 'Ions',
    explanation: 'Example: Na+ and Cl- in table salt.'
  },
  {
    id: 'chem-liqsol-48',
    text: 'Ionic solids are good conductors of electricity in:',
    options: ['Solid state', 'Molten state', 'Aqueous solution', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Ions become free to move only when melted or dissolved.'
  },
  {
    id: 'chem-liqsol-49',
    text: 'Molecular solids are held together by:',
    options: ['Ionic bonds', 'Covalent bonds', 'Intermolecular forces (Van der Waals)', 'Metallic bonds'],
    correctAnswer: 'Intermolecular forces (Van der Waals)',
    explanation: 'Examples include Ice, Dry ice, and Iodine.'
  },
  {
    id: 'chem-liqsol-50',
    text: 'Metallic solids are held by the attraction between:',
    options: ['Positive ions and sea of electrons', 'Cations and Anions', 'Atoms', 'Dipoles'],
    correctAnswer: 'Positive ions and sea of electrons',
    explanation: 'The "electron sea" model explains conductivity and malleability.'
  },
  {
    id: 'chem-liqsol-51',
    text: 'Hydrogen bonding is a special type of:',
    options: ['Ionic bond', 'Dipole-dipole interaction', 'London force', 'Covalent bond'],
    correctAnswer: 'Dipole-dipole interaction',
    explanation: 'It occurs between H and N, O, or F.'
  },
  {
    id: 'chem-liqsol-52',
    text: 'Ice is less dense than water because of:',
    options: ['Metallic bonding', 'Covalent bonding', 'Open structure due to H-bonding', 'Small molecular size'],
    correctAnswer: 'Open structure due to H-bonding',
    explanation: 'Water molecules form a hexagonal cage-like structure in ice.'
  },
  {
    id: 'chem-liqsol-53',
    text: 'The vapor pressure of a liquid increases with:',
    options: ['Increasing surface area', 'Increasing temperature', 'Decreasing volume', 'Adding non-volatile solute'],
    correctAnswer: 'Increasing temperature',
    explanation: 'More molecules have enough energy to escape.'
  },
  {
    id: 'chem-liqsol-54',
    text: 'London dispersion forces exist in:',
    options: ['Polar molecules', 'Non-polar molecules', 'All molecules', 'Ions'],
    correctAnswer: 'All molecules',
    explanation: 'They are instantaneous dipole-induced dipole attractions.'
  },
  {
    id: 'chem-liqsol-55',
    text: 'Which has the highest polarizability?',
    options: ['He', 'Ne', 'Ar', 'Xe'],
    correctAnswer: 'Xe',
    explanation: 'Larger atoms have more electrons that are easily distorted.'
  },
  {
    id: 'chem-liqsol-56',
    text: 'The transition temperature is the temperature at which:',
    options: ['Solid melts', 'Liquid boils', 'Two allotropic forms coexist', 'Gas liquefies'],
    correctAnswer: 'Two allotropic forms coexist',
    explanation: 'Example: Gray tin and White tin coexist at 13.2°C.'
  },
  {
    id: 'chem-liqsol-57',
    text: 'The heat required to convert 1 mole of liquid to gas at its boiling point is:',
    options: ['Heat of fusion', 'Heat of vaporization', 'Heat of sublimation', 'Specific heat'],
    correctAnswer: 'Heat of vaporization',
    explanation: 'ΔHv.'
  },
  {
    id: 'chem-liqsol-58',
    text: 'Graphite is a good conductor of electricity because of:',
    options: ['Ionic bonds', 'Metallic bonds', 'Free electrons in layers', 'Molecular size'],
    correctAnswer: 'Free electrons in layers',
    explanation: 'One electron per carbon is delocalized in the sp2 layers.'
  },
  {
    id: 'chem-liqsol-59',
    text: 'Which crystal system has a≠b≠c and α=β=γ=90°?',
    options: ['Cubic', 'Tetragonal', 'Orthorhombic', 'Monoclinic'],
    correctAnswer: 'Orthorhombic',
    explanation: 'All angles are right, but sides are unequal.'
  },
  {
    id: 'chem-liqsol-60',
    text: 'The coordination number of Na+ in NaCl crystal is:',
    options: ['4', '6', '8', '12'],
    correctAnswer: '6',
    explanation: 'Each Na+ is surrounded by 6 Cl- ions.'
  },
  {
    id: 'chem-liqsol-61',
    text: 'Unit of viscosity in SI is:',
    options: ['Poise', 'N s m⁻²', 'Pascal', 'Joule'],
    correctAnswer: 'N s m⁻²',
    explanation: 'Newton-second per square meter.'
  },
  {
    id: 'chem-liqsol-62',
    text: 'Lattice energy is the energy _____ when 1 mole of ionic crystal is formed from gaseous ions.',
    options: ['Absorbed', 'Released', 'Stored', 'Not changed'],
    correctAnswer: 'Released',
    explanation: 'It measures the stability of the ionic crystal.'
  },
  {
    id: 'chem-liqsol-63',
    text: 'A liquid boils when its vapor pressure becomes _____ to the external pressure.',
    options: ['Greater', 'Less', 'Equal', 'Twice'],
    correctAnswer: 'Equal',
    explanation: 'This is the definition of boiling point.'
  },
  {
    id: 'chem-liqsol-64',
    text: 'Food cooks faster in a pressure cooker because:',
    options: ['Pressure increases boiling point', 'Pressure decreases boiling point', 'Steam is hot', 'Food is compressed'],
    correctAnswer: 'Pressure increases boiling point',
    explanation: 'Higher pressure allows water to reach a higher temperature before boiling.'
  },
  {
    id: 'chem-liqsol-65',
    text: 'At high altitudes, water boils at:',
    options: ['Above 100°C', 'Below 100°C', '100°C', '0°C'],
    correctAnswer: 'Below 100°C',
    explanation: 'Lower atmospheric pressure means lower boiling point.'
  },
  {
    id: 'chem-liqsol-66',
    text: 'The cleaning action of soap is due to its effect on:',
    options: ['Viscosity', 'Surface tension', 'Vapor pressure', 'Density'],
    correctAnswer: 'Surface tension',
    explanation: 'Soap lowers the surface tension of water, allowing it to "wet" surfaces better.'
  },
  {
    id: 'chem-liqsol-67',
    text: 'Molecules of a liquid move in _____ motion.',
    options: ['Vibrational only', 'Random', 'Fixed', 'Circular'],
    correctAnswer: 'Random',
    explanation: 'Liquids are fluids and their molecules slide over each other.'
  },
  {
    id: 'chem-liqsol-68',
    text: 'Unit cell of Diamond is:',
    options: ['BCC', 'FCC', 'HCP', 'Simple cubic'],
    correctAnswer: 'FCC',
    explanation: 'It has an FCC arrangement of carbon atoms with 4 extra carbons in voids.'
  },
  {
    id: 'chem-liqsol-69',
    text: 'Sublimation is used to purify solids that have _____ vapor pressures.',
    options: ['High', 'Low', 'Zero', 'Negative'],
    correctAnswer: 'High',
    explanation: 'They go directly from solid to gas.'
  },
  {
    id: 'chem-liqsol-70',
    text: 'Which bond is the strongest?',
    options: ['Ionic', 'Hydrogen', 'Dipole-dipole', 'London forces'],
    correctAnswer: 'Ionic',
    explanation: 'Intramolecular bonds (ionic/covalent) are much stronger than intermolecular forces.'
  },
  {
    id: 'chem-liqsol-71',
    text: 'Heat of sublimation is approximately equal to:',
    options: ['ΔHf + ΔHv', 'ΔHf - ΔHv', 'ΔHv / ΔHf', 'ΔHf * ΔHv'],
    correctAnswer: 'ΔHf + ΔHv',
    explanation: 'Sublimation is a one-step jump combining melting and boiling.'
  },
  {
    id: 'chem-liqsol-72',
    text: 'The color of iodine vapor is:',
    options: ['Blue', 'Violet', 'Red', 'Yellow'],
    correctAnswer: 'Violet',
    explanation: 'Solid iodine is gray; vapor is violet.'
  },
  {
    id: 'chem-liqsol-73',
    text: 'Which substance undergoes sublimation?',
    options: ['Dry ice (Solid CO2)', 'Naphthalene', 'Camphor', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These are common examples.'
  },
  {
    id: 'chem-liqsol-74',
    text: 'Glass is considered a:',
    options: ['Crystalline solid', 'Amorphous solid', 'Molecular solid', 'Metallic solid'],
    correctAnswer: 'Amorphous solid',
    explanation: 'It has short-range order but no long-range order.'
  },
  {
    id: 'chem-liqsol-75',
    text: 'Which is a property of covalent crystals?',
    options: ['High melting point', 'Poor conductors', 'Hardness', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Think of Diamond and Quartz.'
  },
  {
    id: 'chem-liqsol-76',
    text: 'Bragg’s equation for X-ray diffraction is:',
    options: ['nλ = 2d sinθ', 'λ = d sinθ', 'nλ = d cosθ', '2nλ = d sinθ'],
    correctAnswer: 'nλ = 2d sinθ',
    explanation: 'Used to determine crystal structures.'
  },
  {
    id: 'chem-liqsol-77',
    text: 'Cleavage is the breaking of a crystal along:',
    options: ['Definite planes', 'Random paths', 'Diagonal', 'Surface only'],
    correctAnswer: 'Definite planes',
    explanation: 'These planes correspond to the internal lattice planes.'
  },
  {
    id: 'chem-liqsol-78',
    text: 'Allotropy is the existence of an _____ in more than one crystalline form.',
    options: ['Compound', 'Element', 'Mixture', 'Ion'],
    correctAnswer: 'Element',
    explanation: 'Example: Diamond and Graphite are allotropes of Carbon.'
  },
  {
    id: 'chem-liqsol-79',
    text: 'Gray tin has _____ structure.',
    options: ['Cubic (Diamond)', 'Tetragonal', 'Hexagonal', 'Monoclinic'],
    correctAnswer: 'Cubic (Diamond)',
    explanation: 'It is the low-temperature stable form.'
  },
  {
    id: 'chem-liqsol-80',
    text: 'White tin has _____ structure.',
    options: ['Tetragonal', 'Cubic', 'Rhombohedral', 'Triclinic'],
    correctAnswer: 'Tetragonal',
    explanation: 'It is the high-temperature stable form.'
  },
  {
    id: 'chem-liqsol-81',
    text: 'Unit of surface tension is:',
    options: ['N m', 'N m⁻¹', 'J m⁻²', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Force per unit length or Energy per unit area.'
  },
  {
    id: 'chem-liqsol-82',
    text: 'Dynamic equilibrium in evaporation is when:',
    options: ['Evaporation stops', 'Rate of evaporation = Rate of condensation', 'All liquid is gone', 'Liquid boils'],
    correctAnswer: 'Rate of evaporation = Rate of condensation',
    explanation: 'The vapor pressure becomes constant.'
  },
  {
    id: 'chem-liqsol-83',
    text: 'Viscosity of honey is _____ than water.',
    options: ['Higher', 'Lower', 'Same', 'Zero'],
    correctAnswer: 'Higher',
    explanation: 'Honey has stronger internal friction and attractions.'
  },
  {
    id: 'chem-liqsol-84',
    text: 'Liquid crystals are found in:',
    options: ['TV screens (LCD)', 'Digital watches', 'Thermometers', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'They flow like liquids but have optical properties of crystals.'
  },
  {
    id: 'chem-liqsol-85',
    text: 'Cholesteric liquid crystals are used in:',
    options: ['Display screens', 'Temperature sensors', 'Medicine', 'Cooking'],
    correctAnswer: 'Temperature sensors',
    explanation: 'Their color changes with temperature.'
  },
  {
    id: 'chem-liqsol-86',
    text: 'Which crystal system is the most symmetric?',
    options: ['Cubic', 'Triclinic', 'Hexagonal', 'Monoclinic'],
    correctAnswer: 'Cubic',
    explanation: 'All sides and angles are equal.'
  },
  {
    id: 'chem-liqsol-87',
    text: 'Which crystal system is the least symmetric?',
    options: ['Cubic', 'Triclinic', 'Monoclinic', 'Orthorhombic'],
    correctAnswer: 'Triclinic',
    explanation: 'a≠b≠c and α≠β≠γ≠90°.'
  },
  {
    id: 'chem-liqsol-88',
    text: 'Surface tension decreases with _____ in temperature.',
    options: ['Increase', 'Decrease', 'No change', 'Rapid change'],
    correctAnswer: 'Increase',
    explanation: 'Heat increases kinetic energy, weakening attractions.'
  },
  {
    id: 'chem-liqsol-89',
    text: 'Which is a molecular solid?',
    options: ['Sugar', 'Ice', 'Iodine', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These consist of molecules held by IMFs.'
  },
  {
    id: 'chem-liqsol-90',
    text: 'Malleability is the property of being:',
    options: ['Drawn into wires', 'Beaten into sheets', 'Broken easily', 'Conductor'],
    correctAnswer: 'Beaten into sheets',
    explanation: 'Ductility is the property of being drawn into wires.'
  },
  {
    id: 'chem-liqsol-91',
    text: 'Which solid has the lowest melting point?',
    options: ['Ionic', 'Metallic', 'Molecular', 'Covalent'],
    correctAnswer: 'Molecular',
    explanation: 'IMFs are weaker than chemical bonds.'
  },
  {
    id: 'chem-liqsol-92',
    text: 'Ionic crystals are hard and _____',
    options: ['Ductile', 'Malleable', 'Brittle', 'Soft'],
    correctAnswer: 'Brittle',
    explanation: 'Repulsion between similar ions during stress leads to cleavage.'
  },
  {
    id: 'chem-liqsol-93',
    text: 'Vapor pressure of water at 100°C is:',
    options: ['760 torr', '1 atm', '101325 Pa', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'It equals normal atmospheric pressure.'
  },
  {
    id: 'chem-liqsol-94',
    text: 'Which substance is used to demonstrate anisotropy in conductivity?',
    options: ['NaCl', 'Graphite', 'Diamond', 'Copper'],
    correctAnswer: 'Graphite',
    explanation: 'Graphite conducts parallel to layers but not perpendicular to them.'
  },
  {
    id: 'chem-liqsol-95',
    text: 'The heat of fusion is usually _____ than the heat of vaporization.',
    options: ['Smaller', 'Larger', 'Same', 'Zero'],
    correctAnswer: 'Smaller',
    explanation: 'Less energy is needed to loosen molecules (melting) than to separate them completely (boiling).'
  },
  {
    id: 'chem-liqsol-96',
    text: 'Boiling point of Glycerin is high because of _____ -OH groups per molecule.',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Glycerin (Propane-1,2,3-triol) has extensive hydrogen bonding.'
  },
  {
    id: 'chem-liqsol-97',
    text: 'Water has maximum density at:',
    options: ['0°C', '4°C', '100°C', '-4°C'],
    correctAnswer: '4°C',
    explanation: 'At 4°C, the molecules are closest together before H-bonding creates an open structure.'
  },
  {
    id: 'chem-liqsol-98',
    text: 'Which is a unit of pressure?',
    options: ['Pascal', 'Bar', 'Torr', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Various units for pressure measurement.'
  },
  {
    id: 'chem-liqsol-99',
    text: 'The process of a gas turning into a liquid is:',
    options: ['Evaporation', 'Condensation', 'Sublimation', 'Freezing'],
    correctAnswer: 'Condensation',
    explanation: 'Molecules lose energy and come together.'
  },
  {
    id: 'chem-liqsol-100',
    text: 'Solids have a definite _____ and _____.',
    options: ['Shape and Volume', 'Color and Taste', 'Weight and Speed', 'Size and Solubility'],
    correctAnswer: 'Shape and Volume',
    explanation: 'Due to the fixed positions of their particles.'
  },
  {
    id: 'chem-liq-11',
    text: 'Diamond and Graphite are examples of _____ solids.',
    options: ['Ionic', 'Molecular', 'Covalent network', 'Metallic'],
    correctAnswer: 'Covalent network',
    explanation: 'Atoms are linked throughout the crystal by covalent bonds.'
  },
  {
    id: 'chem-liq-12',
    text: 'Ice is less dense than liquid water because:',
    options: ['Molecules move faster', 'It has more mass', 'Hydrogen bonding creates an open, cage-like structure', 'It contains air bubbles'],
    correctAnswer: 'Hydrogen bonding creates an open, cage-like structure',
    explanation: 'In ice, each H2O molecule is H-bonded to 4 others in a hexagonal lattice with empty spaces.'
  },
  {
    id: 'chem-liq-13',
    text: 'Which type of solid is usually a good conductor of electricity in both solid and liquid states?',
    options: ['Ionic solids', 'Molecular solids', 'Metallic solids', 'Covalent solids'],
    correctAnswer: 'Metallic solids',
    explanation: 'Metallic solids have a "sea of mobile electrons" that carry charge.'
  },
  {
    id: 'chem-liq-14',
    text: 'Ionic solids conduct electricity ONLY when:',
    options: ['Cold', 'Solid', 'Molten or in aqueous solution', 'High pressure is applied'],
    correctAnswer: 'Molten or in aqueous solution',
    explanation: 'In solid form, ions are fixed; in liquid/solution, ions are free to move.'
  },
  {
    id: 'chem-liq-15',
    text: 'The existence of an element in more than one crystalline form is called:',
    options: ['Isomorphism', 'Polymorphism', 'Allotropy', 'Anisotropy'],
    correctAnswer: 'Allotropy',
    explanation: 'Allotropy specifically refers to elements (e.g., S, C, P); Polymorphism refers to compounds.'
  },
  {
    id: 'chem-liq-16',
    text: 'Crystal systems are classified into how many categories based on their unit cell parameters?',
    options: ['3', '5', '7', '14'],
    correctAnswer: '7',
    explanation: 'There are 7 basic crystal systems (Cubic, Tetragonal, etc.).'
  },
  {
    id: 'chem-liq-17',
    text: 'The property of some crystals having different values of physical properties in different directions is:',
    options: ['Isotropy', 'Anisotropy', 'Isomorphism', 'Cleavage'],
    correctAnswer: 'Anisotropy',
    explanation: 'Properties like thermal conductivity or electrical conductivity vary with direction in anisotropic crystals.'
  },
  {
    id: 'chem-liq-18',
    text: 'A liquid boils at a higher temperature when:',
    options: ['External pressure is increased', 'External pressure is decreased', 'Container is open', 'Amount of liquid is less'],
    correctAnswer: 'External pressure is increased',
    explanation: 'This is the principle of a pressure cooker.'
  },
  {
    id: 'chem-liq-19',
    text: 'The molar heat of vaporization (ΔHv) is the energy required to vaporize _____ of a liquid at its boiling point.',
    options: ['1 gram', '1 mole', '1 cm³', 'All of it'],
    correctAnswer: '1 mole',
    explanation: 'Molar heat quantities are always per 1 mole.'
  },
  {
    id: 'chem-liq-20',
    text: 'Which of the following has the highest vapor pressure at room temperature?',
    options: ['Water', 'Ethanol', 'Diethyl ether', 'Glycerol'],
    correctAnswer: 'Diethyl ether',
    explanation: 'Ether has weak intermolecular forces, so it vaporizes easily (volatile).'
  },
  {
    id: 'chem-liq-21',
    text: 'Ionic crystals like NaCl have high melting points because of:',
    options: ['Hydrogen bonding', 'Strong electrostatic forces of attraction', 'Covalent bonding', 'London forces'],
    correctAnswer: 'Strong electrostatic forces of attraction',
    explanation: 'The lattice energy of ionic solids is very high.'
  },
  {
    id: 'chem-liq-22',
    text: 'Unit cell of NaCl is:',
    options: ['Simple cubic', 'Body centered cubic', 'Face centered cubic', 'Triclinic'],
    correctAnswer: 'Face centered cubic',
    explanation: 'NaCl has an FCC arrangement of Cl- ions with Na+ in octahedral voids.'
  },
  {
    id: 'chem-liq-23',
    text: 'The process in which a substance exists as a liquid above its boiling point is:',
    options: ['Superheating', 'Supercooling', 'Sublimation', 'Critical state'],
    correctAnswer: 'Superheating',
    explanation: 'Liquids can be heated above BP if they are very pure and undisturbed.'
  },
  {
    id: 'chem-liq-24',
    text: 'Lattice energy is the energy _____ when 1 mole of ionic crystal is formed from its gaseous ions.',
    options: ['Absorbed', 'Released', 'Not changed', 'Required'],
    correctAnswer: 'Released',
    explanation: 'Formation of bonds releases energy (exothermic).'
  },
  {
    id: 'chem-liq-25',
    text: 'Which of the following is a molecular solid?',
    options: ['NaCl', 'Ice', 'Diamond', 'Copper'],
    correctAnswer: 'Ice',
    explanation: 'Ice is made of individual H2O molecules held by hydrogen bonds.'
  },
  {
    id: 'chem-liq-26',
    text: 'Vapor pressure of a liquid is independent of its:',
    options: ['Temperature', 'Nature of liquid', 'Amount of liquid', 'Intermolecular forces'],
    correctAnswer: 'Amount of liquid',
    explanation: 'V.P. is an intensive property and does not depend on the volume of the sample.'
  },
  {
    id: 'chem-liq-27',
    text: 'Graphite is a conductor because of:',
    options: ['Ionic bonds', 'Delocalized pi-electrons between layers', 'Metallic bonds', 'Hydrogen bonds'],
    correctAnswer: 'Delocalized pi-electrons between layers',
    explanation: 'One electron per carbon is free to move within the layers.'
  },
  {
    id: 'chem-liq-28',
    text: 'The heat of sublimation is approximately equal to:',
    options: ['ΔHf + ΔHv', 'ΔHf - ΔHv', 'ΔHv / ΔHf', 'ΔHf * ΔHv'],
    correctAnswer: 'ΔHf + ΔHv',
    explanation: 'According to Hess’s Law, solid -> liquid -> gas.'
  },
  {
    id: 'chem-liq-29',
    text: 'Which type of forces are also called instantaneous dipole-induced dipole forces?',
    options: ['Dipole-dipole', 'London forces', 'Hydrogen bonds', 'Covalent bonds'],
    correctAnswer: 'London forces',
    explanation: 'This is the technical name for London dispersion forces.'
  },
  {
    id: 'chem-liq-30',
    text: 'A solid is said to be "isomorphous" with another if they have the same:',
    options: ['Molar mass', 'Chemical properties', 'Crystal structure and atomic ratio', 'Melting point'],
    correctAnswer: 'Crystal structure and atomic ratio',
    explanation: 'Isomorphous substances (like NaF and MgO) form crystals with the same shape.'
  }
];
