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
