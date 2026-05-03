import { Question } from '../types';

export const PHYSICS_SOLID_QUIZ: Question[] = [
  {
    id: 'ph-ps-1',
    text: 'Solids in which atoms or molecules are arranged in a regular, repeating pattern are:',
    options: ['Amorphous', 'Crystalline', 'Polymeric', 'None'],
    correctAnswer: 'Crystalline',
    explanation: 'Examples include metals, ionic salts, etc.'
  },
  {
    id: 'ph-ps-2',
    text: 'Solids that lack a regular internal arrangement are:',
    options: ['Crystalline', 'Amorphous / Glassy', 'Metals', 'None'],
    correctAnswer: 'Amorphous / Glassy',
    explanation: 'Glass is a classic example.'
  },
  {
    id: 'ph-ps-3',
    text: 'Polymeric solids consist of very long _____ molecules.',
    options: ['Chain', 'Circular', 'Square', 'None'],
    correctAnswer: 'Chain',
    explanation: 'e.g. rubber, plastics, proteins.'
  },
  {
    id: 'ph-ps-4',
    text: 'The force per unit area acting on a solid is called:',
    options: ['Strain', 'Stress (σ)', 'Elasticity', 'None'],
    correctAnswer: 'Stress (σ)',
    explanation: 'σ = F / A.'
  },
  {
    id: 'ph-ps-5',
    text: 'The fractional change in dimensions produced by stress is:',
    options: ['Stress', 'Strain (ε)', 'Modulus', 'None'],
    correctAnswer: 'Strain (ε)',
    explanation: 'Dimensionless quantity.'
  },
  {
    id: 'ph-ps-6',
    text: 'The ratio of tensile stress to tensile strain is:',
    options: ['Bulk Modulus', 'Young\'s Modulus (Y)', 'Shear Modulus', 'None'],
    correctAnswer: 'Young\'s Modulus (Y)',
    explanation: 'Y = (F/A) / (ΔL/L).'
  },
  {
    id: 'ph-ps-7',
    text: 'The ratio of volumetric stress to volumetric strain is:',
    options: ['Young\'s Modulus', 'Bulk Modulus (K)', 'Shear Modulus', 'None'],
    correctAnswer: 'Bulk Modulus (K)',
    explanation: 'K = - ΔP / (ΔV/V).'
  },
  {
    id: 'ph-ps-8',
    text: 'The ratio of shear stress to shear strain is:',
    options: ['Young\'s Modulus', 'Bulk Modulus', 'Shear / Rigidity Modulus (G)', 'None'],
    correctAnswer: 'Shear / Rigidity Modulus (G)',
    explanation: 'G = (F/A) / tanγ.'
  },
  {
    id: 'ph-ps-9',
    text: 'The maximum stress a material can withstand and still return to its original shape is the:',
    options: ['Breaking point', 'Elastic limit', 'Yield point', 'None'],
    correctAnswer: 'Elastic limit',
    explanation: 'Beyond this, permanent deformation occurs.'
  },
  {
    id: 'ph-ps-10',
    text: 'Materials that undergo significant plastic deformation before breaking are:',
    options: ['Brittle', 'Ductile', 'Elastic', 'None'],
    correctAnswer: 'Ductile',
    explanation: 'e.g. Copper, Gold.'
  },
  {
    id: 'ph-ps-11',
    text: 'Materials that break immediately after the elastic limit are:',
    options: ['Ductile', 'Brittle', 'Polymeric', 'None'],
    correctAnswer: 'Brittle',
    explanation: 'e.g. Glass, High-carbon steel.'
  },
  {
    id: 'ph-ps-12',
    text: 'Energy band theory: The range of energy levels occupied by valence electrons is the:',
    options: ['Conduction band', 'Valence band', 'Forbidden band', 'None'],
    correctAnswer: 'Valence band',
    explanation: 'Lower energy band.'
  },
  {
    id: 'ph-ps-13',
    text: 'The band above the valence band is the:',
    options: ['Ground band', 'Conduction band', 'Atomic band', 'None'],
    correctAnswer: 'Conduction band',
    explanation: 'Electrons here are free to move and conduct electricity.'
  },
  {
    id: 'ph-ps-14',
    text: 'In insulators, the forbidden energy gap between valence and conduction bands is:',
    options: ['Zero', 'Very small', 'Very large', 'None'],
    correctAnswer: 'Very large',
    explanation: 'Several electron volts (eV).'
  },
  {
    id: 'ph-ps-15',
    text: 'In conductors (metals), the valence and conduction bands:',
    options: ['Are far apart', 'Overlap', 'Are separated by 1 eV', 'None'],
    correctAnswer: 'Overlap',
    explanation: 'Plenty of free electrons even at 0 K.'
  },
  {
    id: 'ph-ps-16',
    text: 'In semiconductors, the forbidden energy gap is:',
    options: ['Large', 'Small (~1 eV)', 'Zero', 'None'],
    correctAnswer: 'Small (~1 eV)',
    explanation: 'e.g. Silicon (1.1 eV) and Germanium (0.7 eV).'
  },
  {
    id: 'ph-ps-17',
    text: 'Substances that are weakly repelled by a magnetic field are:',
    options: ['Paramagnetic', 'Diamagnetic', 'Ferromagnetic', 'None'],
    correctAnswer: 'Diamagnetic',
    explanation: 'Examples include Copper, Water, Bismuth.'
  },
  {
    id: 'ph-ps-18',
    text: 'Substances that are weakly attracted by a magnetic field are:',
    options: ['Paramagnetic', 'Diamagnetic', 'Ferromagnetic', 'None'],
    correctAnswer: 'Paramagnetic',
    explanation: 'Examples include Aluminum, Platinum.'
  },
  {
    id: 'ph-ps-19',
    text: 'Substances that show strong magnetic effects are:',
    options: ['Paramagnetic', 'Diamagnetic', 'Ferromagnetic', 'None'],
    correctAnswer: 'Ferromagnetic',
    explanation: 'Examples include Iron, Nickel, Cobalt.'
  },
  {
    id: 'ph-ps-20',
    text: 'Small regions in ferromagnetic materials where magnetic moments are aligned are:',
    options: ['Atoms', 'Domains', 'Crystals', 'None'],
    correctAnswer: 'Domains',
    explanation: 'Typically 10^-4 to 10^-6 m in size.'
  },
  {
    id: 'ph-ps-21',
    text: 'The temperature above which a ferromagnetic material becomes paramagnetic is the:',
    options: ['Melting point', 'Curie temperature (Tc)', 'Absolute zero', 'None'],
    correctAnswer: 'Curie temperature (Tc)',
    explanation: 'For Iron, Tc is about 770°C.'
  },
  {
    id: 'ph-ps-22',
    text: 'The lag of magnetization (B) behind the magnetizing field (H) is:',
    options: ['Magnetism', 'Hysteresis', 'Retentivity', 'None'],
    correctAnswer: 'Hysteresis',
    explanation: 'Seen in ferromagnetic materials.'
  },
  {
    id: 'ph-ps-23',
    text: 'The value of B when H is reduced to zero is called:',
    options: ['Coercivity', 'Retentivity / Remanence', 'Saturation', 'None'],
    correctAnswer: 'Retentivity / Remanence',
    explanation: 'Residual magnetism.'
  },
  {
    id: 'ph-ps-24',
    text: 'The value of reverse H needed to make B zero is called:',
    options: ['Retentivity', 'Coercivity', 'Hysteresis', 'None'],
    correctAnswer: 'Coercivity',
    explanation: 'Measure of how hard it is to demagnetize.'
  },
  {
    id: 'ph-ps-25',
    text: 'The area of the hysteresis loop represents the _____ loss per cycle.',
    options: ['Magnetic', 'Energy / Heat', 'Mass', 'None'],
    correctAnswer: 'Energy / Heat',
    explanation: 'Energy used to realign domains.'
  },
  {
    id: 'ph-ps-26',
    text: 'Soft magnetic materials (like soft iron) have _____ hysteresis loops.',
    options: ['Large', 'Thin / Narrow', 'Square', 'None'],
    correctAnswer: 'Thin / Narrow',
    explanation: 'Low energy loss, easy to magnetize/demagnetize.'
  },
  {
    id: 'ph-ps-27',
    text: 'Hard magnetic materials (like steel) have _____ hysteresis loops.',
    options: ['Large / Wide', 'Narrow', 'Circular', 'None'],
    correctAnswer: 'Large / Wide',
    explanation: 'Used for making permanent magnets.'
  },
  {
    id: 'ph-ps-28',
    text: 'Superconductors show zero resistance and _____ (Meissner effect).',
    options: ['Perfect attraction', 'Perfect diamagnetism', 'Radioactivity', 'None'],
    correctAnswer: 'Perfect diamagnetism',
    explanation: 'Expel magnetic field from their interior.'
  },
  {
    id: 'ph-ps-29',
    text: 'Which is a "High Temperature Superconductor" (relative to others)?',
    options: ['Mercury (4.2 K)', 'YBa2Cu3O7 (92 K)', 'Lead (7.2 K)', 'None'],
    correctAnswer: 'YBa2Cu3O7 (92 K)',
    explanation: 'Discovered in 1987; can work with liquid nitrogen.'
  },
  {
    id: 'ph-ps-30',
    text: 'Strain is a unitless quantity because it is a ratio of _____ quantities.',
    options: ['Different', 'Similar', 'Inverse', 'None'],
    correctAnswer: 'Similar',
    explanation: 'e.g. Length / Length.'
  },
  {
    id: 'ph-ps-31',
    text: 'Unit of Modulus of Elasticity (Y, K, G) is:',
    options: ['N.m', 'N/m^2 (Pascal)', 'Dimensionless', 'None'],
    correctAnswer: 'N/m^2 (Pascal)',
    explanation: 'Same as stress unit.'
  },
  {
    id: 'ph-ps-32',
    text: 'Energy stored in a strained wire is U =:',
    options: ['1/2 F ΔL', 'F ΔL', '1/2 k x^2', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'Area under the force-extension graph.'
  },
  {
    id: 'ph-ps-33',
    text: 'Modulus of elasticity _____ as temperature increases.',
    options: ['Increases', 'Decreases', 'Remains constant', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Materials become more soft/malleable.'
  },
  {
    id: 'ph-ps-34',
    text: 'The ultimate tensile strength (UTS) is the _____ stress a material can handle.',
    options: ['Minimum', 'Average', 'Maximum', 'Initial'],
    correctAnswer: 'Maximum',
    explanation: 'Just before necking and fracture.'
  },
  {
    id: 'ph-ps-35',
    text: 'Crystalline solids have _____ melting points.',
    options: ['Sharp', 'Range of', 'Undefined', 'None'],
    correctAnswer: 'Sharp',
    explanation: 'Due to uniform arrangement.'
  },
  {
    id: 'ph-ps-36',
    text: 'Amorphous solids have _____ melting points.',
    options: ['Sharp', 'Range of', 'Lower', 'None'],
    correctAnswer: 'Range of',
    explanation: 'They soften gradually.'
  },
  {
    id: 'ph-ps-37',
    text: 'Which is NOT a crystalline solid?',
    options: ['Salt', 'Diamond', 'Plastic', 'Quartz'],
    correctAnswer: 'Plastic',
    explanation: 'Plastics are usually polymeric/amorphous.'
  },
  {
    id: 'ph-ps-38',
    text: 'Glass is often called a _____ liquid.',
    options: ['Saturated', 'Supercooled', 'Viscous', 'None'],
    correctAnswer: 'Supercooled',
    explanation: 'Due to its disordered structure.'
  },
  {
    id: 'ph-ps-39',
    text: 'Strain energy density is energy per unit _____:',
    options: ['Mass', 'Volume', 'Area', 'None'],
    correctAnswer: 'Volume',
    explanation: 'u = 1/2 Stress * Strain.'
  },
  {
    id: 'ph-ps-40',
    text: 'A "Perfectly Elastic" body returns _____ to its original shape.',
    options: ['Partially', 'Completely', 'Slowly', 'None'],
    correctAnswer: 'Completely',
    explanation: 'Ideal behavior.'
  },
  {
    id: 'ph-ps-41',
    text: 'Copper is more _____ than glass.',
    options: ['Brittle', 'Ductile', 'Transparent', 'None'],
    correctAnswer: 'Ductile',
    explanation: 'Can be drawn into wires.'
  },
  {
    id: 'ph-ps-42',
    text: 'Electrical conductivity of semiconductors _____ with temperature.',
    options: ['Decreases', 'Increases', 'Remains same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Thermal energy excites more electrons to conduction band.'
  },
  {
    id: 'ph-ps-43',
    text: 'At 0 K, a pure semiconductor acts as a _____:',
    options: ['Conductor', 'Insulator', 'Superconductor', 'None'],
    correctAnswer: 'Insulator',
    explanation: 'No electrons in conduction band.'
  },
  {
    id: 'ph-ps-44',
    text: 'Doping is the addition of small amount of _____ to a semiconductor.',
    options: ['Heat', 'Impurity', 'Water', 'None'],
    correctAnswer: 'Impurity',
    explanation: 'To increase conductivity.'
  },
  {
    id: 'ph-ps-45',
    text: 'Pentavalent impurity (e.g. Phosphorus) creates _____ semiconductor.',
    options: ['n-type', 'p-type', 'Positive', 'None'],
    correctAnswer: 'n-type',
    explanation: 'Excess electrons.'
  },
  {
    id: 'ph-ps-46',
    text: 'Trivalent impurity (e.g. Boron) creates _____ semiconductor.',
    options: ['n-type', 'p-type', 'Negative', 'None'],
    correctAnswer: 'p-type',
    explanation: 'Excess holes (deficiency of electrons).'
  },
  {
    id: 'ph-ps-47',
    text: 'The majority charge carriers in p-type semiconductors are:',
    options: ['Electrons', 'Holes', 'Ions', 'None'],
    correctAnswer: 'Holes',
    explanation: 'Majority carriers in p-type.'
  },
  {
    id: 'ph-ps-48',
    text: 'The majority charge carriers in n-type semiconductors are:',
    options: ['Electrons', 'Holes', 'Protons', 'None'],
    correctAnswer: 'Electrons',
    explanation: 'Majority carriers in n-type.'
  },
  {
    id: 'ph-ps-49',
    text: 'Semiconductors are _____ elements.',
    options: ['Group II', 'Group IV', 'Group VI', 'None'],
    correctAnswer: 'Group IV',
    explanation: '4 valence electrons.'
  },
  {
    id: 'ph-ps-50',
    text: 'Magnetic resonance imaging (MRI) uses _____ magnets.',
    options: ['Natural', 'Superconducting', 'Weak', 'None'],
    correctAnswer: 'Superconducting',
    explanation: 'To produce very strong, stable fields.'
  },
  {
    id: 'ph-ps-51',
    text: 'The crystal lattice is the _____ arrangement of points.',
    options: ['1D', '2D', '3D', 'None'],
    correctAnswer: '3D',
    explanation: 'Geometric structure.'
  },
  {
    id: 'ph-ps-52',
    text: 'The smallest portion of a crystal that shows the complete pattern is a:',
    options: ['Atom', 'Molecule', 'Unit cell', 'Domain'],
    correctAnswer: 'Unit cell',
    explanation: 'Building block of the lattice.'
  },
  {
    id: 'ph-ps-53',
    text: 'There are _____ basic crystal systems.',
    options: ['3', '5', '7', '14'],
    correctAnswer: '7',
    explanation: 'Cubic, Tetragonal, Orthorhombic, etc.'
  },
  {
    id: 'ph-ps-54',
    text: 'Sodium chloride (NaCl) has a _____ crystal structure.',
    options: ['Hexagonal', 'Face-centered cubic', 'Monoclinic', 'None'],
    correctAnswer: 'Face-centered cubic',
    explanation: 'Common cubic system.'
  },
  {
    id: 'ph-ps-55',
    text: 'Diamond is an example of _____ crystalline solid.',
    options: ['Covalent', 'Ionic', 'Metallic', 'None'],
    correctAnswer: 'Covalent',
    explanation: 'Atoms shared electrons in a network.'
  },
  {
    id: 'ph-ps-56',
    text: 'Yield strength is the stress at which _____ starts.',
    options: ['Elastic deformation', 'Plastic deformation / Flow', 'Breaking', 'None'],
    correctAnswer: 'Plastic deformation / Flow',
    explanation: 'Marked by a "Yield point".'
  },
  {
    id: 'ph-ps-57',
    text: 'Steel is more _____ than rubber.',
    options: ['Elastic', 'Plastic', 'Heavy', 'None'],
    correctAnswer: 'Elastic',
    explanation: 'Physics definition: resists deformation more and recovers more force.'
  },
  {
    id: 'ph-ps-58',
    text: 'Young\'s Modulus is applicable only to _____:',
    options: ['Liquids', 'Gases', 'Solids (Wires/Rods)', 'All of above'],
    correctAnswer: 'Solids (Wires/Rods)',
    explanation: 'Relates to length change.'
  },
  {
    id: 'ph-ps-59',
    text: 'Bulk Modulus is applicable to _____:',
    options: ['Solids', 'Liquids', 'Gases', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'All states of matter can be compressed.'
  },
  {
    id: 'ph-ps-60',
    text: 'A "Shear" deformation changes the _____ of the body but not its _____:',
    options: ['Volume, Shape', 'Shape, Volume', 'Mass, Size', 'None'],
    correctAnswer: 'Shape, Volume',
    explanation: 'Angular deformation.'
  },
  {
    id: 'ph-ps-61',
    text: 'Which has the highest Young\'s Modulus?',
    options: ['Aluminum', 'Steel', 'Lead', 'Rubber'],
    correctAnswer: 'Steel',
    explanation: 'Requires most stress for same strain.'
  },
  {
    id: 'ph-ps-62',
    text: 'Superconductors are _____ below Tc.',
    options: ['Resistive', 'Ohmic', 'Non-Ohmic (Zero R)', 'None'],
    correctAnswer: 'Non-Ohmic (Zero R)',
    explanation: 'Ohm\'s law does not apply.'
  },
  {
    id: 'ph-ps-63',
    text: 'The "Critical Field" is the magnetic field strength above which superconductivity _____:',
    options: ['Starts', 'Disappears', 'Increases', 'None'],
    correctAnswer: 'Disappears',
    explanation: 'Magnetism can destroy the superconducting state.'
  },
  {
    id: 'ph-ps-64',
    text: 'Materials which can be used to store energy in the form of magnetic flux are _____ magnetic materials.',
    options: ['Soft', 'Hard', 'Semi', 'None'],
    correctAnswer: 'Hard',
    explanation: 'Due to high retentivity.'
  },
  {
    id: 'ph-ps-65',
    text: 'Materials used for electromagnet cores and transformers should be _____:',
    options: ['Hard magnetic', 'Soft magnetic', 'Non-magnetic', 'None'],
    correctAnswer: 'Soft magnetic',
    explanation: 'Minimize hysteresis loss.'
  },
  {
    id: 'ph-ps-66',
    text: 'One Bohr magneton is the magnetic moment of an orbiting _____:',
    options: ['Proton', 'Electron', 'Neutron', 'None'],
    correctAnswer: 'Electron',
    explanation: 'Fundamental unit of atomic magnetism.'
  },
  {
    id: 'ph-ps-67',
    text: 'Which is a "Ferrite"?',
    options: ['Iron oxide with other metals', 'Pure silver', 'Graphite', 'None'],
    correctAnswer: 'Iron oxide with other metals',
    explanation: 'Ceramic magnetic materials with high resistivity.'
  },
  {
    id: 'ph-ps-68',
    text: 'Ferrites are useful in high-frequency applications because they have very low _____ loss.',
    options: ['Hysteresis', 'Eddy current', 'Heat', 'None'],
    correctAnswer: 'Eddy current',
    explanation: 'Due to their high electrical resistance.'
  },
  {
    id: 'ph-ps-69',
    text: 'Stress σ = F / A. Its unit is N/m^2. What are its dimensions?',
    options: ['[ML^-1 T^-2]', '[MLT^-2]', '[L^2]', 'None'],
    correctAnswer: '[ML^-1 T^-2]',
    explanation: '[MLT^-2] / [L^2] = [ML^-1 T^-2].'
  },
  {
    id: 'ph-ps-70',
    text: 'Strain ε has dimensions:',
    options: ['[L]', '[MLT]', '[M0 L0 T0]', 'None'],
    correctAnswer: '[M0 L0 T0]',
    explanation: 'Dimensionless.'
  },
  {
    id: 'ph-ps-71',
    text: 'Breaking stress _____ on the area of cross-section.',
    options: ['Depends', 'Does not depend', 'Is inversely proportional to', 'None'],
    correctAnswer: 'Does not depend',
    explanation: 'It is a property of the material.'
  },
  {
    id: 'ph-ps-72',
    text: 'Breaking force _____ on the area of cross-section.',
    options: ['Depends', 'Does not depend', 'Is zero', 'None'],
    correctAnswer: 'Depends',
    explanation: 'F_breaking = Stress_breaking * Area.'
  },
  {
    id: 'ph-ps-73',
    text: 'A wire of 1 m is stretched to 1.01 m. The strain is:',
    options: ['0.01', '0.1', '1.01', 'None'],
    correctAnswer: '0.01',
    explanation: 'ΔL / L = 0.01 / 1 = 0.01.'
  },
  {
    id: 'ph-ps-74',
    text: 'The property of a solid to resist any change in its shape or size is:',
    options: ['Plasticity', 'Elasticity', 'Malleability', 'None'],
    correctAnswer: 'Elasticity',
    explanation: 'Tendency to restore original state.'
  },
  {
    id: 'ph-ps-75',
    text: 'Intrinsic semiconductors are:',
    options: ['Highly doped', 'Pure', 'Heated', 'None'],
    correctAnswer: 'Pure',
    explanation: 'No intentional impurities.'
  },
  {
    id: 'ph-ps-76',
    text: 'Extrinsic semiconductors are:',
    options: ['Pure', 'Doped', 'Transparent', 'None'],
    correctAnswer: 'Doped',
    explanation: 'Intentional impurities added.'
  },
  {
    id: 'ph-ps-77',
    text: 'In an intrinsic semiconductor, number of electrons (ne) is _____ number of holes (nh).',
    options: ['Greater than', 'Less than', 'Equal to', 'None'],
    correctAnswer: 'Equal to',
    explanation: 'Every freed electron leaves a hole.'
  },
  {
    id: 'ph-ps-78',
    text: 'The Fermi level represents the highest occupied energy state at _____:',
    options: ['Room temperature', '0 K', 'Melting point', 'None'],
    correctAnswer: '0 K',
    explanation: 'Important concept in band theory.'
  },
  {
    id: 'ph-ps-79',
    text: 'In n-type semiconductors, the Fermi level is _____ the conduction band.',
    options: ['Close to', 'Far from', 'Below the valence band', 'None'],
    correctAnswer: 'Close to',
    explanation: 'Donors contribute electrons near conduction band.'
  },
  {
    id: 'ph-ps-80',
    text: 'Paramagnetism is due to the _____ of unpaired electrons.',
    options: ['Charge', 'Spin', 'Mass', 'None'],
    correctAnswer: 'Spin',
    explanation: 'Resultant magnetic moment is non-zero.'
  },
  {
    id: 'ph-ps-81',
    text: 'Diamagnetism is a _____ property of all materials but usually masked by others.',
    options: ['Rare', 'Universal', 'Artificial', 'None'],
    correctAnswer: 'Universal',
    explanation: 'Lenz-like response of orbiting electrons.'
  },
  {
    id: 'ph-ps-82',
    text: 'Superconductors are used in _____ trains.',
    options: ['Steam', 'Maglev', 'Diesel', 'None'],
    correctAnswer: 'Maglev',
    explanation: 'Magnetic Levitation.'
  },
  {
    id: 'ph-ps-83',
    text: 'A material that can be hammered into thin sheets is:',
    options: ['Ductile', 'Malleable', 'Brittle', 'None'],
    correctAnswer: 'Malleable',
    explanation: 'Property shown by many metals.'
  },
  {
    id: 'ph-ps-84',
    text: 'The inverse of Bulk Modulus is called:',
    options: ['Elasticity', 'Compressibility', 'Rigidity', 'None'],
    correctAnswer: 'Compressibility',
    explanation: 'Ease of compression.'
  },
  {
    id: 'ph-ps-85',
    text: 'The stress required to double the length of a wire is equal to its _____:',
    options: ['Bulk Modulus', 'Young\'s Modulus', 'Breaking Stress', 'None'],
    correctAnswer: 'Young\'s Modulus',
    explanation: 'If ΔL = L, then Strain = 1, so Y = Stress / 1.'
  },
  {
    id: 'ph-ps-86',
    text: 'In a crystal, the number of nearest neighbors of an atom is its:',
    options: ['Valence', 'Coordination number', 'Atomic number', 'None'],
    correctAnswer: 'Coordination number',
    explanation: 'Defines local symmetry.'
  },
  {
    id: 'ph-ps-87',
    text: 'Quartz is a _____ solid.',
    options: ['Amorphous', 'Crystalline', 'Liquid', 'None'],
    correctAnswer: 'Crystalline',
    explanation: 'Crystalline form of SiO2.'
  },
  {
    id: 'ph-ps-88',
    text: 'Crystalline solids show _____ (properties depend on direction).',
    options: ['Isotropy', 'Anisotropy', 'Radioactivity', 'None'],
    correctAnswer: 'Anisotropy',
    explanation: 'Amorphous solids are isotropic.'
  },
  {
    id: 'ph-ps-89',
    text: 'Which is a "Smart material"?',
    options: ['Wood', 'Shape Memory Alloys', 'Sand', 'None'],
    correctAnswer: 'Shape Memory Alloys',
    explanation: 'Can return to original shape when heated (Nitinol).'
  },
  {
    id: 'ph-ps-90',
    text: 'The work done per unit volume in deforming a solid is:',
    options: ['Stress', 'Strain', 'Energy density', 'None'],
    correctAnswer: 'Energy density',
    explanation: 'Area under stress-strain curve.'
  },
  {
    id: 'ph-ps-91',
    text: 'Which has no unit?',
    options: ['Stress', 'Strain', 'Modulus', 'Force'],
    correctAnswer: 'Strain',
    explanation: 'Ratio of like quantities.'
  },
  {
    id: 'ph-ps-92',
    text: 'A wire is stretched to twice its length. The strain is:',
    options: ['0.5', '1', '2', 'None'],
    correctAnswer: '1',
    explanation: '(2L - L) / L = 1.'
  },
  {
    id: 'ph-ps-93',
    text: 'Most polymers are _____ conductors of heat and electricity.',
    options: ['Good', 'Poor / Insulators', 'Super', 'None'],
    correctAnswer: 'Poor / Insulators',
    explanation: 'Used as insulation.'
  },
  {
    id: 'ph-ps-94',
    text: 'Which type of solid is rubber?',
    options: ['Crystalline', 'Amorphous', 'Polymeric', 'None'],
    correctAnswer: 'Polymeric',
    explanation: 'Natural or synthetic polymer.'
  },
  {
    id: 'ph-ps-95',
    text: 'Electrical resistivity of semiconductors _____ as temperature decreases.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Opposition to current increases.'
  },
  {
    id: 'ph-ps-96',
    text: 'Permanent magnets are made from _____ materials.',
    options: ['Soft ferromagnetic', 'Hard ferromagnetic', 'Diamagnetic', 'None'],
    correctAnswer: 'Hard ferromagnetic',
    explanation: 'High retentivity and high coercivity.'
  },
  {
    id: 'ph-ps-97',
    text: 'A "Hole" behaves like a _____ charge carrier.',
    options: ['Negative', 'Positive', 'Neutral', 'None'],
    correctAnswer: 'Positive',
    explanation: 'Effective charge is +e.'
  },
  {
    id: 'ph-ps-98',
    text: 'Which material is used to make solar cells?',
    options: ['Metals', 'Semiconductors (Silicon)', 'Insulators', 'None'],
    correctAnswer: 'Semiconductors (Silicon)',
    explanation: 'Photovoltaic effect.'
  },
  {
    id: 'ph-ps-99',
    text: 'The "Fatigue" of a material refers to its _____ after repeated stress cycles.',
    options: ['Strengthening', 'Weakening / Failure', 'Melting', 'None'],
    correctAnswer: 'Weakening / Failure',
    explanation: 'Important in engineering design.'
  },
  {
    id: 'ph-ps-100',
    text: 'The study of the structure and properties of solids is called _____ Physics.',
    options: ['Nuclear', 'Solid State', 'Plasma', 'None'],
    correctAnswer: 'Solid State',
    explanation: 'Branch of condensed matter physics.'
  }
];
