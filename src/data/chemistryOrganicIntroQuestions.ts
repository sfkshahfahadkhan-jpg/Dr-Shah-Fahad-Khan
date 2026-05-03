import { Question } from '../types';

export const CHEMISTRY_ORGANIC_INTRO_QUIZ: Question[] = [
  {
    id: 'ch-oi-1',
    text: 'The Vital Force Theory, which stated organic compounds could only be produced by living things, was proposed by:',
    options: ['Lavoisier', 'Berzelius', 'Wohler', 'Kolbe'],
    correctAnswer: 'Berzelius',
    explanation: 'He believed a "vital force" was necessary for organic synthesis.'
  },
  {
    id: 'ch-oi-2',
    text: 'Who synthesized the first organic compound (Urea) from an inorganic source?',
    options: ['Berzelius', 'Friedrich Wohler', 'Kolbe', 'Berthelot'],
    correctAnswer: 'Friedrich Wohler',
    explanation: 'He synthesized Urea from Ammonium Cyanate in 1828.'
  },
  {
    id: 'ch-oi-3',
    text: 'Urea is chemically:',
    options: ['(NH4)2CO3', 'NH2CONH2', 'NH2COONH4', 'None'],
    correctAnswer: 'NH2CONH2',
    explanation: 'First organic compound synthesized in the lab.'
  },
  {
    id: 'ch-oi-4',
    text: 'Modern organic chemistry is the study of compounds containing _____ and _____ as the essential elements.',
    options: ['Nitrogen, Oxygen', 'Carbon, Hydrogen', 'Carbon, Nitrogen', 'None'],
    correctAnswer: 'Carbon, Hydrogen',
    explanation: 'Definition of hydrocarbons and their derivatives.'
  },
  {
    id: 'ch-oi-5',
    text: 'Which is NOT a characteristic of organic compounds?',
    options: ['Non-ionic bonding', 'High melting points', 'Complexity of structure', 'Solubility in non-polar solvents'],
    correctAnswer: 'High melting points',
    explanation: 'Organic compounds generally have low MP/BP compared to inorganic ones.'
  },
  {
    id: 'ch-oi-6',
    text: 'The ability of carbon atoms to form long chains and rings is called:',
    options: ['Isomerism', 'Catenation', 'Polymerization', 'Hydrogenation'],
    correctAnswer: 'Catenation',
    explanation: 'Due to strong C-C bonds.'
  },
  {
    id: 'ch-oi-7',
    text: 'Coal is a rich source of _____ organic compounds.',
    options: ['Aliphatic', 'Aromatic', 'Inorganic', 'None'],
    correctAnswer: 'Aromatic',
    explanation: 'Obtained via destructive distillation.'
  },
  {
    id: 'ch-oi-8',
    text: 'Destructive distillation of coal gives:',
    options: ['Coal gas', 'Coal tar', 'Coke', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Main products of the process.'
  },
  {
    id: 'ch-oi-9',
    text: 'Natural gas mainly consists of:',
    options: ['Ethane', 'Methane (CH4)', 'Propane', 'Butane'],
    correctAnswer: 'Methane (CH4)',
    explanation: 'Usually 85-95% methane.'
  },
  {
    id: 'ch-oi-10',
    text: 'Petroleum is a complex mixture of many _____ hydrocarbons.',
    options: ['Solid', 'Gaseous', 'Liquid', 'None'],
    correctAnswer: 'Liquid',
    explanation: 'Refined by fractional distillation.'
  },
  {
    id: 'ch-oi-11',
    text: 'The process of breaking down high molecular weight hydrocarbons into lower ones is:',
    options: ['Polymerization', 'Cracking', 'Reforming', 'Isomerization'],
    correctAnswer: 'Cracking',
    explanation: 'Increases the yield of gasoline.'
  },
  {
    id: 'ch-oi-12',
    text: 'Thermal cracking is carried out at _____ temperature and _____ pressure.',
    options: ['Low, Low', 'High, High', 'High, Low', 'Low, High'],
    correctAnswer: 'High, High',
    explanation: 'Requires heat to break C-C bonds.'
  },
  {
    id: 'ch-oi-13',
    text: 'The process of converting straight-chain hydrocarbons into branched-chain ones to improve fuel quality is:',
    options: ['Cracking', 'Reforming', 'Fractionation', 'None'],
    correctAnswer: 'Reforming',
    explanation: 'Increases the octane number.'
  },
  {
    id: 'ch-oi-14',
    text: 'A fuel with high anti-knock property has a high:',
    options: ['Cetane number', 'Octane number', 'Mass number', 'None'],
    correctAnswer: 'Octane number',
    explanation: 'Measure of performance in internal combustion engines.'
  },
  {
    id: 'ch-oi-15',
    text: 'An atom or group of atoms that defines the chemical properties of a compound is a:',
    options: ['Isomer', 'Functional group', 'Homologue', 'None'],
    correctAnswer: 'Functional group',
    explanation: 'e.g. -OH for alcohols, -COOH for acids.'
  },
  {
    id: 'ch-oi-16',
    text: 'Compounds with the same molecular formula but different structural arrangements are:',
    options: ['Isomers', 'Homologues', 'Allotropes', 'None'],
    correctAnswer: 'Isomers',
    explanation: 'Phenomenon is isomerism.'
  },
  {
    id: 'ch-oi-17',
    text: 'Isomerism due to different arrangements of atoms within the molecule is _____ isomerism.',
    options: ['Structural', 'Geometric', 'Optical', 'None'],
    correctAnswer: 'Structural',
    explanation: 'Includes chain, position, and functional isomerism.'
  },
  {
    id: 'ch-oi-18',
    text: 'Cis-trans isomerism is a type of _____ isomerism.',
    options: ['Structural', 'Geometric/Stereo', 'Chain', 'None'],
    correctAnswer: 'Geometric/Stereo',
    explanation: 'Occurs due to restricted rotation around a double bond.'
  },
  {
    id: 'ch-oi-19',
    text: 'For geometric isomerism to occur, each carbon of the double bond must have:',
    options: ['Same groups', 'Two different groups', 'No groups', 'None'],
    correctAnswer: 'Two different groups',
    explanation: 'Necessary condition.'
  },
  {
    id: 'ch-oi-20',
    text: 'The hybridization of Carbon in Alkanes (single bonds) is:',
    options: ['sp', 'sp2', 'sp3', 'dsp2'],
    correctAnswer: 'sp3',
    explanation: 'Tetrahedral geometry with 109.5° angle.'
  },
  {
    id: 'ch-oi-21',
    text: 'The hybridization of Carbon in Alkenes (double bonds) is:',
    options: ['sp', 'sp2', 'sp3', 'None'],
    correctAnswer: 'sp2',
    explanation: 'Trigonal planar geometry with 120° angle.'
  },
  {
    id: 'ch-oi-22',
    text: 'The hybridization of Carbon in Alkynes (triple bonds) is:',
    options: ['sp', 'sp2', 'sp3', 'None'],
    correctAnswer: 'sp',
    explanation: 'Linear geometry with 180° angle.'
  },
  {
    id: 'ch-oi-23',
    text: 'A series of organic compounds where each member differs from the next by a -CH2- group is a:',
    options: ['Isomeric series', 'Homologous series', 'Functional series', 'None'],
    correctAnswer: 'Homologous series',
    explanation: 'Members show similar chemical properties.'
  },
  {
    id: 'ch-oi-24',
    text: 'Which is the functional group of Alcohols?',
    options: ['-CHO', '-OH', '-COOH', '-CO-'],
    correctAnswer: '-OH',
    explanation: 'Hydroxyl group.'
  },
  {
    id: 'ch-oi-25',
    text: 'Which is the functional group of Carboxylic acids?',
    options: ['-COO-', '-COOH', '-OH', '-CHO'],
    correctAnswer: '-COOH',
    explanation: 'Carboxyl group.'
  },
  {
    id: 'ch-oi-26',
    text: 'Which is the functional group of Aldehydes?',
    options: ['-CO-', '-CHO', '-OH', '-OR'],
    correctAnswer: '-CHO',
    explanation: 'Formyl group.'
  },
  {
    id: 'ch-oi-27',
    text: 'Which is the functional group of Ketones?',
    options: ['-CHO', '-CO-', '-COOH', '-NH2'],
    correctAnswer: '-CO-',
    explanation: 'Carbonyl group between two carbons.'
  },
  {
    id: 'ch-oi-28',
    text: 'Which is the functional group of Ethers?',
    options: ['-CO-', '-O-', '-OH', '-COO-'],
    correctAnswer: '-O-',
    explanation: 'Oxygen bridge between two alkyl groups (R-O-R).'
  },
  {
    id: 'ch-oi-29',
    text: 'Which is the functional group of Esters?',
    options: ['-COOH', '-COOR', '-CO-', '-CHO'],
    correctAnswer: '-COOR',
    explanation: 'R-COO-R structure; often fruity smells.'
  },
  {
    id: 'ch-oi-30',
    text: 'Amines contain the _____ functional group.',
    options: ['-NH2', '-NO2', '-CN', '-SH'],
    correctAnswer: '-NH2',
    explanation: 'Amino group.'
  },
  {
    id: 'ch-oi-31',
    text: 'Nitro compounds contain the _____ group.',
    options: ['-NH2', '-NO2', '-N2', 'None'],
    correctAnswer: '-NO2',
    explanation: 'Nitro group.'
  },
  {
    id: 'ch-oi-32',
    text: 'The general formula of Alkanes is:',
    options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'None'],
    correctAnswer: 'CnH2n+2',
    explanation: 'Saturated hydrocarbons.'
  },
  {
    id: 'ch-oi-33',
    text: 'The general formula of Alkenes is:',
    options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'None'],
    correctAnswer: 'CnH2n',
    explanation: 'Unsaturated with one double bond.'
  },
  {
    id: 'ch-oi-34',
    text: 'The general formula of Alkynes is:',
    options: ['CnH2n', 'CnH2n-2', 'CnH2n+2', 'None'],
    correctAnswer: 'CnH2n-2',
    explanation: 'Unsaturated with one triple bond.'
  },
  {
    id: 'ch-oi-35',
    text: 'Isomerism shown by Alcohols and Ethers is:',
    options: ['Chain', 'Functional group isomerism', 'Position', 'Metamerism'],
    correctAnswer: 'Functional group isomerism',
    explanation: 'Both can have the same molecular formula like C2H6O.'
  },
  {
    id: 'ch-oi-36',
    text: 'Metamerism is due to unequal distribution of carbon atoms on either side of a:',
    options: ['Single bond', 'Double bond', 'Polyvalent functional group (like -O- or -CO-)', 'None'],
    correctAnswer: 'Polyvalent functional group (like -O- or -CO-)',
    explanation: 'Common in ethers and ketones.'
  },
  {
    id: 'ch-oi-37',
    text: 'Tautomerism is a special type of functional isomerism where isomers exist in _____ equilibrium.',
    options: ['Static', 'Dynamic', 'Solid', 'None'],
    correctAnswer: 'Dynamic',
    explanation: 'Involves migration of a proton (e.g. Keto-Enol).'
  },
  {
    id: 'ch-oi-38',
    text: 'Which type of isomerism is NOT structural?',
    options: ['Chain', 'Metamerism', 'Geometric', 'Tautomerism'],
    correctAnswer: 'Geometric',
    explanation: 'It is a type of stereoisomerism.'
  },
  {
    id: 'ch-oi-39',
    text: 'In methane, the H-C-H bond angle is exactly:',
    options: ['90°', '109.5°', '120°', '180°'],
    correctAnswer: '109.5°',
    explanation: 'Standard tetrahedral angle.'
  },
  {
    id: 'ch-oi-40',
    text: 'In ethene, the H-C-H bond angle is approximately:',
    options: ['109.5°', '120°', '180°', 'None'],
    correctAnswer: '120°',
    explanation: 'Standard trigonal planar angle.'
  },
  {
    id: 'ch-oi-41',
    text: 'In ethyne, the H-C-C bond angle is exactly:',
    options: ['120°', '180°', '109.5°', 'None'],
    correctAnswer: '180°',
    explanation: 'Linear arrangement.'
  },
  {
    id: 'ch-oi-42',
    text: 'Sigma (σ) bonds are formed by _____ overlap of orbitals.',
    options: ['Sideways', 'Head-on/End-to-end', 'Cross', 'None'],
    correctAnswer: 'Head-on/End-to-end',
    explanation: 'Stronger than pi bonds.'
  },
  {
    id: 'ch-oi-43',
    text: 'Pi (π) bonds are formed by _____ overlap of p-orbitals.',
    options: ['Head-on', 'Sideways/Lateral', 'Direct', 'None'],
    correctAnswer: 'Sideways/Lateral',
    explanation: 'Electron density is above and below the nuclear axis.'
  },
  {
    id: 'ch-oi-44',
    text: 'A triple bond consists of:',
    options: ['3 σ bonds', '1 σ and 2 π bonds', '2 σ and 1 π bonds', '3 π bonds'],
    correctAnswer: '1 σ and 2 π bonds',
    explanation: 'Standard triple bond structure.'
  },
  {
    id: 'ch-oi-45',
    text: 'Electronegativity of Carbon increases as its s-character _____ in hybridization.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'sp (50% s) > sp2 (33% s) > sp3 (25% s).'
  },
  {
    id: 'ch-oi-46',
    text: 'Which element is always present in organic compounds?',
    options: ['Oxygen', 'Nitrogen', 'Carbon', 'Sulfur'],
    correctAnswer: 'Carbon',
    explanation: 'Fundamental element.'
  },
  {
    id: 'ch-oi-47',
    text: 'Which class of hydrocarbons are the most reactive?',
    options: ['Alkanes', 'Alkenes', 'Alkynes', 'Depends on reaction'],
    correctAnswer: 'Depends on reaction',
    explanation: 'Alkenes and Alkynes are generally more reactive than Alkanes due to unsaturation.'
  },
  {
    id: 'ch-oi-48',
    text: 'Alkanes are also known as _____ because they have little affinity/reactivity.',
    options: ['Olefins', 'Paraffins', 'Acetylenes', 'None'],
    correctAnswer: 'Paraffins',
    explanation: 'Latin: parum affinis (little affinity).'
  },
  {
    id: 'ch-oi-49',
    text: 'Alkenes are also known as _____ because they form oily products with halogens.',
    options: ['Paraffins', 'Olefins', 'Glycols', 'None'],
    correctAnswer: 'Olefins',
    explanation: 'Latin: oleum facians (oil forming).'
  },
  {
    id: 'ch-oi-50',
    text: 'Which compound was the first organic substance to be "legally" synthesized?',
    options: ['Methane', 'Acetic acid', 'Urea', 'Benzene'],
    correctAnswer: 'Urea',
    explanation: 'Synthesized by Wohler in 1828.'
  },
  {
    id: 'ch-oi-51',
    text: 'The IUPAC name of Isopentane is:',
    options: ['2-Methylbutane', '2,2-Dimethylpropane', 'n-Pentane', 'None'],
    correctAnswer: '2-Methylbutane',
    explanation: 'Standard nomenclature for branched alkanes.'
  },
  {
    id: 'ch-oi-52',
    text: 'The IUPAC name of Neopentane is:',
    options: ['2-Methylbutane', '2,2-Dimethylpropane', 'n-Pentane', 'None'],
    correctAnswer: '2,2-Dimethylpropane',
    explanation: 'Symmetrical isomer of C5H12.'
  },
  {
    id: 'ch-oi-53',
    text: 'Which type of cracking involves the use of a catalyst?',
    options: ['Thermal', 'Catalytic', 'Steam', 'None'],
    correctAnswer: 'Catalytic',
    explanation: 'Usually uses Silica-Alumina at lower temperature.'
  },
  {
    id: 'ch-oi-54',
    text: 'Hydrocarbons that contain benzene rings are called:',
    options: ['Aliphatic', 'Aromatic', 'Alicyclic', 'None'],
    correctAnswer: 'Aromatic',
    explanation: 'e.g. Benzene, Toluene.'
  },
  {
    id: 'ch-oi-55',
    text: 'Cycloalkanes are _____ hydrocarbons.',
    options: ['Aromatic', 'Aliphatic cyclic (Alicyclic)', 'Open chain', 'None'],
    correctAnswer: 'Aliphatic cyclic (Alicyclic)',
    explanation: 'Properties similar to open-chain alkanes.'
  },
  {
    id: 'ch-oi-56',
    text: 'The reaction of Alkanes with Oxygen is:',
    options: ['Substitution', 'Addition', 'Combustion', 'None'],
    correctAnswer: 'Combustion',
    explanation: 'Produces CO2, H2O, and energy.'
  },
  {
    id: 'ch-oi-57',
    text: 'Which is an "Unsaturated" hydrocarbon?',
    options: ['Ethane', 'Propane', 'Propene', 'Cyclobutane'],
    correctAnswer: 'Propene',
    explanation: 'Contains a double bond.'
  },
  {
    id: 'ch-oi-58',
    text: 'Geometric isomerism is also called _____ isomerism.',
    options: ['Position', 'Configurational', 'Linkage', 'None'],
    correctAnswer: 'Configurational',
    explanation: 'Refers to the spatial arrangement.'
  },
  {
    id: 'ch-oi-59',
    text: 'Which molecule cannot show geometric isomerism?',
    options: ['2-Butene', '1-Butene', '1,2-Dichloroethene', 'None'],
    correctAnswer: '1-Butene',
    explanation: 'Terminal carbon has two identical H atoms.'
  },
  {
    id: 'ch-oi-60',
    text: 'In "Cis" isomer, identical groups are on the _____ side of the double bond.',
    options: ['Opposite', 'Same', 'Across', 'None'],
    correctAnswer: 'Same',
    explanation: 'Cis means "on this side".'
  },
  {
    id: 'ch-oi-61',
    text: 'In "Trans" isomer, identical groups are on the _____ side.',
    options: ['Same', 'Opposite', 'Diagonally same', 'None'],
    correctAnswer: 'Opposite',
    explanation: 'Trans means "across".'
  },
  {
    id: 'ch-oi-62',
    text: 'Which isomer usually has a higher boiling point?',
    options: ['Cis', 'Trans', 'Both same', 'None'],
    correctAnswer: 'Cis',
    explanation: 'Cis-isomers are generally more polar.'
  },
  {
    id: 'ch-oi-63',
    text: 'Which isomer usually has a higher melting point?',
    options: ['Cis', 'Trans', 'Both same', 'None'],
    correctAnswer: 'Trans',
    explanation: 'Trans-isomers are more symmetrical and fit better in the lattice.'
  },
  {
    id: 'ch-oi-64',
    text: 'The energy required for the rotation of C=C bond is very _____ at room temperature.',
    options: ['Low', 'High', 'Zero', 'None'],
    correctAnswer: 'High',
    explanation: 'Prevents interconversion of geometric isomers.'
  },
  {
    id: 'ch-oi-65',
    text: 'A primary (1°) carbon is attached to _____ other carbon atom(s).',
    options: ['Zero', 'One', 'Two', 'Three'],
    correctAnswer: 'One',
    explanation: 'Or zero for methane.'
  },
  {
    id: 'ch-oi-66',
    text: 'A quaternary (4°) carbon is attached to _____ other carbon atoms.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 'Four',
    explanation: 'No H atoms attached to it.'
  },
  {
    id: 'ch-oi-67',
    text: 'The IUPAC name of Chloroform is:',
    options: ['Chloromethane', 'Dichloromethane', 'Trichloromethane', 'None'],
    correctAnswer: 'Trichloromethane',
    explanation: 'CHCl3.'
  },
  {
    id: 'ch-oi-68',
    text: 'The IUPAC name of Formic acid is:',
    options: ['Ethanoic acid', 'Methanoic acid', 'Propanoic acid', 'None'],
    correctAnswer: 'Methanoic acid',
    explanation: 'HCOOH.'
  },
  {
    id: 'ch-oi-69',
    text: 'The common name of Ethanoic acid is:',
    options: ['Formic acid', 'Acetic acid', 'Butyric acid', 'None'],
    correctAnswer: 'Acetic acid',
    explanation: 'Found in vinegar.'
  },
  {
    id: 'ch-oi-70',
    text: 'Which is a source of "Petrochemicals"?',
    options: ['Coal', 'Petroleum', 'Natural gas', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Used as feedstocks for industry.'
  },
  {
    id: 'ch-oi-71',
    text: 'Tautomers differ in the position of _____ and _____.',
    options: ['Carbon, Oxygen', 'Proton (H+), Double bond', 'Nitrogen, Carbon', 'None'],
    correctAnswer: 'Proton (H+), Double bond',
    explanation: 'e.g. H-C-C=O ⇌ C=C-O-H.'
  },
  {
    id: 'ch-oi-72',
    text: 'Metamerism is common in _____ and _____.',
    options: ['Alcohols, Acids', 'Ethers, Ketones', 'Aldehydes, Esters', 'None'],
    correctAnswer: 'Ethers, Ketones',
    explanation: 'Due to the presence of an internal polyvalent group.'
  },
  {
    id: 'ch-oi-73',
    text: 'Position isomerism is due to difference in position of _____ or _____.',
    options: ['Chain', 'Functional group, Multiple bond', 'Nucleus', 'None'],
    correctAnswer: 'Functional group, Multiple bond',
    explanation: 'e.g. 1-Butanol and 2-Butanol.'
  },
  {
    id: 'ch-oi-74',
    text: 'Hybridization explains the _____ of molecules.',
    options: ['Mass', 'Shape/Geometry', 'Color', 'None'],
    correctAnswer: 'Shape/Geometry',
    explanation: 'Mixing of atomic orbitals.'
  },
  {
    id: 'ch-oi-75',
    text: 'Electrophile is an electron _____ species.',
    options: ['Rich', 'Deficient (Loving)', 'Neutral', 'None'],
    correctAnswer: 'Deficient (Loving)',
    explanation: 'e.g. H+, NO2+, AlCl3.'
  },
  {
    id: 'ch-oi-76',
    text: 'Nucleophile is an electron _____ species.',
    options: ['Deficient', 'Rich (Loving nucleus)', 'Neutral', 'None'],
    correctAnswer: 'Rich (Loving nucleus)',
    explanation: 'e.g. OH-, CN-, NH3.'
  },
  {
    id: 'ch-oi-77',
    text: 'Homolytic fission of a covalent bond produces:',
    options: ['Ions', 'Free radicals', 'Carbocations', 'None'],
    correctAnswer: 'Free radicals',
    explanation: 'Each atom takes one electron from the shared pair.'
  },
  {
    id: 'ch-oi-78',
    text: 'Heterolytic fission of a covalent bond produces:',
    options: ['Free radicals', 'Ions (Cation and Anion)', 'Atoms', 'None'],
    correctAnswer: 'Ions (Cation and Anion)',
    explanation: 'One atom takes both electrons.'
  },
  {
    id: 'ch-oi-79',
    text: 'A positively charged carbon species is a:',
    options: ['Carbanion', 'Carbocation/Carbonium ion', 'Radical', 'None'],
    correctAnswer: 'Carbocation/Carbonium ion',
    explanation: 'Formed by heterolytic cleavage.'
  },
  {
    id: 'ch-oi-80',
    text: 'A negatively charged carbon species is a:',
    options: ['Carbocation', 'Carbanion', 'Radical', 'None'],
    correctAnswer: 'Carbanion',
    explanation: 'Acts as a strong nucleophile.'
  },
  {
    id: 'ch-oi-81',
    text: 'Organic reactions generally take place by _____ of bonds.',
    options: ['Making', 'Breaking and Making', 'Vibration', 'None'],
    correctAnswer: 'Breaking and Making',
    explanation: 'Involves mechanism steps.'
  },
  {
    id: 'ch-oi-82',
    text: 'Functional group for "Thiols" or "Mercaptans" is:',
    options: ['-OH', '-SH', '-NH2', '-CN'],
    correctAnswer: '-SH',
    explanation: 'Sulfur equivalent of alcohol.'
  },
  {
    id: 'ch-oi-83',
    text: 'Which is a "Polycyclic" aromatic hydrocarbon?',
    options: ['Benzene', 'Naphthalene', 'Cyclohexane', 'None'],
    correctAnswer: 'Naphthalene',
    explanation: 'Two fused benzene rings.'
  },
  {
    id: 'ch-oi-84',
    text: 'Which gas is known as "Marsh Gas"?',
    options: ['Ethane', 'Methane', 'Propane', 'None'],
    correctAnswer: 'Methane',
    explanation: 'Found in swampy areas.'
  },
  {
    id: 'ch-oi-85',
    text: 'Destructive distillation is carried out in the _____ of air.',
    options: ['Presence', 'Absence', 'Abundance', 'None'],
    correctAnswer: 'Absence',
    explanation: 'To prevent burning.'
  },
  {
    id: 'ch-oi-86',
    text: 'The octane number of n-Heptane is _____ and Iso-octane is _____.',
    options: ['100, 0', '0, 100', '50, 50', 'None'],
    correctAnswer: '0, 100',
    explanation: 'Standard points on the octane scale.'
  },
  {
    id: 'ch-oi-87',
    text: 'TEL (Tetraethyl lead) was used as an _____ agent.',
    options: ['Anti-freeze', 'Anti-knock', 'Oxidizing', 'None'],
    correctAnswer: 'Anti-knock',
    explanation: 'Phased out due to lead pollution.'
  },
  {
    id: 'ch-oi-88',
    text: 'The main component of LPG (Liquefied Petroleum Gas) is:',
    options: ['Methane', 'Propane and Butane', 'Ethane', 'None'],
    correctAnswer: 'Propane and Butane',
    explanation: 'Commonly used in domestic cylinders.'
  },
  {
    id: 'ch-oi-89',
    text: 'The main component of CNG is:',
    options: ['Propane', 'Methane', 'Butane', 'None'],
    correctAnswer: 'Methane',
    explanation: 'Compressed Natural Gas.'
  },
  {
    id: 'ch-oi-90',
    text: 'Which functional group is found in "Acyl halides"?',
    options: ['-COX', '-COOR', '-CONH2', 'None'],
    correctAnswer: '-COX',
    explanation: 'Acid derivatives.'
  },
  {
    id: 'ch-oi-91',
    text: 'Which functional group is found in "Amides"?',
    options: ['-NH2', '-CONH2', '-CN', 'None'],
    correctAnswer: '-CONH2',
    explanation: 'Acid amides.'
  },
  {
    id: 'ch-oi-92',
    text: 'Organic chemistry was once called the "Chemistry of _____" because all known compounds came from them.',
    options: ['Minerals', 'Organisms', 'Gases', 'None'],
    correctAnswer: 'Organisms',
    explanation: 'Basis of the original name.'
  },
  {
    id: 'ch-oi-93',
    text: 'The boiling point of hydrocarbons _____ as branching increases.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Branching reduces surface area and Van der Waals forces.'
  },
  {
    id: 'ch-oi-94',
    text: 'Which is a "Heterocyclic" compound?',
    options: ['Benzene', 'Pyridine (contains N in ring)', 'Toluene', 'None'],
    correctAnswer: 'Pyridine (contains N in ring)',
    explanation: 'Ring contains an atom other than Carbon.'
  },
  {
    id: 'ch-oi-95',
    text: 'Isomers have same _____ but different _____ properties.',
    options: ['Physical, Chemical', 'Chemical, Physical', 'Molecular formula, Physical/Chemical', 'None'],
    correctAnswer: 'Molecular formula, Physical/Chemical',
    explanation: 'Definition of isomerism.'
  },
  {
    id: 'ch-oi-96',
    text: 'How many structural isomers are possible for Butane (C4H10)?',
    options: ['2', '3', '4', 'None'],
    correctAnswer: '2',
    explanation: 'n-Butane and Isobutane.'
  },
  {
    id: 'ch-oi-97',
    text: 'How many structural isomers are possible for Pentane (C5H12)?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'n-Pentane, Isopentane, Neopentane.'
  },
  {
    id: 'ch-oi-98',
    text: 'Which element other than C, H, O, N is frequently found in organic compounds?',
    options: ['Sulfur', 'Halogens', 'Phosphorus', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Common heteroatoms.'
  },
  {
    id: 'ch-oi-99',
    text: 'The branch of chemistry dealing with isotopes of organic elements is _____ organic chemistry.',
    options: ['Isotopic', 'Synthetic', 'Bio', 'None'],
    correctAnswer: 'Isotopic',
    explanation: 'Used for tracing mechanisms.'
  },
  {
    id: 'ch-oi-100',
    text: 'Organic compounds are generally _____ in water and _____ in organic solvents.',
    options: ['Soluble, Insoluble', 'Insoluble, Soluble', 'Both Insoluble', 'None'],
    correctAnswer: 'Insoluble, Soluble',
    explanation: 'Like dissolves like principle.'
  }
];
