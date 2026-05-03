import { Question } from '../types';

export const CHEMISTRY_CARBONYL_QUIZ: Question[] = [
  {
    id: 'ch-ck-1',
    text: 'Aldehydes and Ketones are characterized by the presence of the _____ group.',
    options: ['Hydroxyl', 'Carbonyl (>C=O)', 'Carboxyl', 'Ether'],
    correctAnswer: 'Carbonyl (>C=O)',
    explanation: 'Fundamental functional group for both.'
  },
  {
    id: 'ch-ck-2',
    text: 'In Aldehydes, the carbonyl group is attached to at least one _____ atom.',
    options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'],
    correctAnswer: 'Hydrogen',
    explanation: 'General formula R-CHO.'
  },
  {
    id: 'ch-ck-3',
    text: 'In Ketones, the carbonyl group is bonded to two _____ atoms.',
    options: ['Hydrogen', 'Carbon', 'Oxygen', 'None'],
    correctAnswer: 'Carbon',
    explanation: 'General formula R-CO-R\'.'
  },
  {
    id: 'ch-ck-4',
    text: 'Formaldehyde (Methanal) is unique because its carbonyl carbon is bonded to _____ hydrogen(s).',
    options: ['Zero', 'One', 'Two', 'Three'],
    correctAnswer: 'Two',
    explanation: 'Formula HCHO.'
  },
  {
    id: 'ch-ck-5',
    text: 'The carbonyl carbon is _____ hybridized and the geometry is _____.',
    options: ['sp3, Tetrahedral', 'sp2, Trigonal planar', 'sp, Linear', 'None'],
    correctAnswer: 'sp2, Trigonal planar',
    explanation: 'Forms one sigma and one pi bond with oxygen.'
  },
  {
    id: 'ch-ck-6',
    text: 'The carbonyl group is highly _____ due to the difference in electronegativity between C and O.',
    options: ['Non-polar', 'Polar', 'Ionic', 'None'],
    correctAnswer: 'Polar',
    explanation: 'Carbon has partial positive charge (Cδ+) and Oxygen has partial negative charge (Oδ-).'
  },
  {
    id: 'ch-ck-7',
    text: 'Carbonyl compounds primarily undergo _____ reactions.',
    options: ['Electrophilic substitution', 'Nucleophilic addition', 'Free radical addition', 'None'],
    correctAnswer: 'Nucleophilic addition',
    explanation: 'Nucleophile attacks the electrophilic carbon.'
  },
  {
    id: 'ch-ck-8',
    text: 'Formaldehyde is a _____ at room temperature.',
    options: ['Solid', 'Liquid', 'Gas', 'None'],
    correctAnswer: 'Gas',
    explanation: 'Simplest aldehyde.'
  },
  {
    id: 'ch-ck-9',
    text: 'A 40% aqueous solution of formaldehyde is called:',
    options: ['Acetone', 'Formalin', 'Benzaldehyde', 'None'],
    correctAnswer: 'Formalin',
    explanation: 'Used as a preservative for biological specimens.'
  },
  {
    id: 'ch-ck-10',
    text: 'Acetone (Propanone) is a _____ at room temperature.',
    options: ['Gas', 'Colorless liquid', 'Solid', 'None'],
    correctAnswer: 'Colorless liquid',
    explanation: 'Used as a nail polish remover.'
  },
  {
    id: 'ch-ck-11',
    text: 'Which is a "Symmetrical" ketone?',
    options: ['Ethyl methyl ketone', 'Dimethyl ketone (Acetone)', 'Butanone', 'None'],
    correctAnswer: 'Dimethyl ketone (Acetone)',
    explanation: 'Both R groups are methyl.'
  },
  {
    id: 'ch-ck-12',
    text: 'Distillation of dry calcium formate gives:',
    options: ['Formaldehyde', 'Acetaldehyde', 'Acetone', 'Formic acid'],
    correctAnswer: 'Formaldehyde',
    explanation: '(HCOO)2Ca -> HCHO + CaCO3.'
  },
  {
    id: 'ch-ck-13',
    text: 'Distillation of dry calcium acetate gives:',
    options: ['Formaldehyde', 'Acetaldehyde', 'Acetone', 'None'],
    correctAnswer: 'Acetone',
    explanation: '(CH3COO)2Ca -> CH3COCH3 + CaCO3.'
  },
  {
    id: 'ch-ck-14',
    text: 'Reaction of aldehydes/ketones with HCN produces _____ which are useful for increasing chain length.',
    options: ['Oximes', 'Cyanohydrins', 'Nitrites', 'None'],
    correctAnswer: 'Cyanohydrins',
    explanation: 'Addition of -H and -CN across the C=O bond.'
  },
  {
    id: 'ch-ck-15',
    text: 'The addition of NaHSO3 (Sodium bisulfite) gives a _____ crystalline precipitate with aldehydes.',
    options: ['Yellow', 'White', 'Blue', 'None'],
    correctAnswer: 'White',
    explanation: 'Used for purification of aldehydes.'
  },
  {
    id: 'ch-ck-16',
    text: 'Condensation with Ammonia derivatives (like hydroxylamine) forms _____ colored solids.',
    options: ['Liquid', 'Crystalline', 'Gaseous', 'None'],
    correctAnswer: 'Crystalline',
    explanation: 'Used for characterization/identification.'
  },
  {
    id: 'ch-ck-17',
    text: 'Reaction of carbonyl compounds with 2,4-DNP (Brady\'s reagent) gives _____ or _____ precipitate.',
    options: ['White, Blue', 'Yellow, Orange/Red', 'Colorless', 'None'],
    correctAnswer: 'Yellow, Orange/Red',
    explanation: 'Specific test for carbonyl group.'
  },
  {
    id: 'ch-ck-18',
    text: 'Reduction of aldehydes with NaBH4 or LiAlH4 gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Primary',
    explanation: 'R-CHO -> R-CH2OH.'
  },
  {
    id: 'ch-ck-19',
    text: 'Reduction of ketones gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Secondary',
    explanation: 'R-CO-R -> R-CH(OH)-R.'
  },
  {
    id: 'ch-ck-20',
    text: 'Tollen\'s reagent is:',
    options: ['Ammoniacal Silver Nitrate', 'Alkaline CuSO4', 'Dilute KMnO4', 'None'],
    correctAnswer: 'Ammoniacal Silver Nitrate',
    explanation: 'Used for Silver Mirror test.'
  },
  {
    id: 'ch-ck-21',
    text: 'Silver Mirror test is positive for _____ but negative for _____.',
    options: ['Ketones, Aldehydes', 'Aldehydes, Ketones', 'Alcohols, Acids', 'None'],
    correctAnswer: 'Aldehydes, Ketones',
    explanation: 'Aldehydes are easily oxidized to acids; ketones are not.'
  },
  {
    id: 'ch-ck-22',
    text: 'Fehling\'s solution is a mixture of CuSO4, NaOH and:',
    options: ['Starch', 'Sodium Potassium Tartrate (Rochelle salt)', 'Glycerol', 'None'],
    correctAnswer: 'Sodium Potassium Tartrate (Rochelle salt)',
    explanation: 'Red precipitate of Cu2O indicates aldehyde.'
  },
  {
    id: 'ch-ck-23',
    text: 'Fehling\'s test is shown by _____ aldehydes but not by _____ aldehydes.',
    options: ['Aromatic, Aliphatic', 'Aliphatic, Aromatic', 'All, None', 'None'],
    correctAnswer: 'Aliphatic, Aromatic',
    explanation: 'Benzaldehyde does not give this test easily.'
  },
  {
    id: 'ch-ck-24',
    text: 'The reaction of an aldehyde/ketone having α-hydrogen with a dilute base to form a β-hydroxy carbonyl compound is:',
    options: ['Cannizzaro\'s', 'Aldol Condensation', 'Haloform', 'None'],
    correctAnswer: 'Aldol Condensation',
    explanation: 'Aldol = Aldehyde + Alcohol.'
  },
  {
    id: 'ch-ck-25',
    text: 'Which aldehyde does NOT undergo Aldol condensation due to lack of α-hydrogen?',
    options: ['Acetaldehyde', 'Formaldehyde', 'Propionaldehyde', 'None'],
    correctAnswer: 'Formaldehyde',
    explanation: 'Also Benzaldehyde and Trimethylacetaldehyde.'
  },
  {
    id: 'ch-ck-26',
    text: 'The disproportionation reaction of aldehydes with no α-hydrogen in the presence of strong alkali is:',
    options: ['Aldol', 'Cannizzaro\'s', 'Wurtz', 'None'],
    correctAnswer: 'Cannizzaro\'s',
    explanation: 'Produces an alcohol and a salt of carboxylic acid.'
  },
  {
    id: 'ch-ck-27',
    text: 'Haloform reaction (like Iodoform test) is characteristic of:',
    options: ['Methyl ketones', 'Formaldehyde', 'Acids', 'None'],
    correctAnswer: 'Methyl ketones',
    explanation: 'Compounds with CH3-CO- group.'
  },
  {
    id: 'ch-ck-28',
    text: 'Which is the IUPAC name for Acetone?',
    options: ['Ethanal', 'Propanal', 'Propanone', 'Butanone'],
    correctAnswer: 'Propanone',
    explanation: 'Standard nomenclature.'
  },
  {
    id: 'ch-ck-29',
    text: 'Which is the IUPAC name for Acetaldehyde?',
    options: ['Methanal', 'Ethanal', 'Propanal', 'None'],
    correctAnswer: 'Ethanal',
    explanation: 'Two carbons.'
  },
  {
    id: 'ch-ck-30',
    text: 'Aldehydes are _____ reactive than ketones towards nucleophilic addition.',
    options: ['Less', 'More', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Due to electronic (less +I) and steric factors.'
  },
  {
    id: 'ch-ck-31',
    text: 'Which gas is produced when CaH2 reacts with water?',
    options: ['O2', 'H2', 'CO2', 'None'],
    correctAnswer: 'H2',
    explanation: 'Hydride reaction.'
  },
  {
    id: 'ch-ck-32',
    text: 'Carbonyl compounds react with Hydrazine (NH2NH2) to form:',
    options: ['Oximes', 'Hydrazones', 'Semicarbazones', 'None'],
    correctAnswer: 'Hydrazones',
    explanation: 'Important derivative for identification.'
  },
  {
    id: 'ch-ck-33',
    text: 'Aldehydes react with Alcohols in the presence of dry HCl to give:',
    options: ['Acetals', 'Hemiacetals', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Protection of carbonyl group.'
  },
  {
    id: 'ch-ck-34',
    text: 'Ketones generally do not form _____ with simple alcohols under normal conditions.',
    options: ['Acetals', 'Ketals', 'Oximes', 'None'],
    correctAnswer: 'Ketals',
    explanation: 'Less reactive than aldehydes.'
  },
  {
    id: 'ch-ck-35',
    text: 'Which element is most electronegative in the carbonyl group?',
    options: ['Carbon', 'Oxygen', 'Hydrogen', 'None'],
    correctAnswer: 'Oxygen',
    explanation: 'Pulling electron density towards itself.'
  },
  {
    id: 'ch-ck-36',
    text: 'The conversion of >C=O to >CH2 using Zinc amalgam and conc. HCl is:',
    options: ['Wolf-Kishner reduction', 'Clemmensen reduction', 'Stephen\'s reduction', 'None'],
    correctAnswer: 'Clemmensen reduction',
    explanation: 'Used to convert ketones to alkanes.'
  },
  {
    id: 'ch-ck-37',
    text: 'The conversion of >C=O to >CH2 using Hydrazine and KOH is:',
    options: ['Clemmensen', 'Wolf-Kishner reduction', 'Haber', 'None'],
    correctAnswer: 'Wolf-Kishner reduction',
    explanation: 'Basic medium reduction.'
  },
  {
    id: 'ch-ck-38',
    text: 'Which acid is obtained by the oxidation of Acetaldehyde?',
    options: ['Formic acid', 'Acetic acid', 'Propionic acid', 'None'],
    correctAnswer: 'Acetic acid',
    explanation: 'C2 aldehyde to C2 acid.'
  },
  {
    id: 'ch-ck-39',
    text: 'Which ketone is commonly used as a solvent in the laboratory?',
    options: ['Acetone', 'Butanone', 'Acetophenone', 'None'],
    correctAnswer: 'Acetone',
    explanation: 'Miscible with both water and organic solvents.'
  },
  {
    id: 'ch-ck-40',
    text: 'Benedict\'s solution is similar to Fehling\'s but uses _____ instead of tartrate.',
    options: ['Acetate', 'Citrate', 'Oxalate', 'None'],
    correctAnswer: 'Citrate',
    explanation: 'More stable reagent.'
  },
  {
    id: 'ch-ck-41',
    text: 'Oxidation of Propanone with strong oxidizing agents gives _____ and _____.',
    options: ['Propanal', 'Acetic acid and CO2/H2O', 'Butanoic acid', 'None'],
    correctAnswer: 'Acetic acid and CO2/H2O',
    explanation: 'C-C bond cleavage occurs.'
  },
  {
    id: 'ch-ck-42',
    text: 'The "Popoff\'s rule" is used to predict the products of the oxidation of:',
    options: ['Symmetrical ketones', 'Unsymmetrical ketones', 'Aldehydes', 'None'],
    correctAnswer: 'Unsymmetrical ketones',
    explanation: 'Carbonyl group stays with the smaller alkyl group.'
  },
  {
    id: 'ch-ck-43',
    text: 'Which functional group is found in "Semicarbazide"?',
    options: ['-NH2', '-NHCONH2', '-NO2', 'None'],
    correctAnswer: '-NHCONH2',
    explanation: 'Reacts with C=O to form semicarbazones.'
  },
  {
    id: 'ch-ck-44',
    text: 'Reaction of Acetaldehyde with Fehling\'s solution gives a precipitate of:',
    options: ['Cu metal', 'CuO', 'Cu2O (Cuprous oxide)', 'None'],
    correctAnswer: 'Cu2O (Cuprous oxide)',
    explanation: 'Red/Brick-red color.'
  },
  {
    id: 'ch-ck-45',
    text: 'The polymerization of Formaldehyde gives a white solid called:',
    options: ['Paraldehyde', 'Metaformaldehyde/Paraformaldehyde', 'Starch', 'None'],
    correctAnswer: 'Metaformaldehyde/Paraformaldehyde',
    explanation: 'Used as a convenient source of HCHO gas.'
  },
  {
    id: 'ch-ck-46',
    text: 'Three molecules of acetaldehyde polymerize to form:',
    options: ['Paraldehyde', 'Metaldehyde', 'Formalin', 'None'],
    correctAnswer: 'Paraldehyde',
    explanation: 'A cyclic trimer; used as a hypnotic/sedative.'
  },
  {
    id: 'ch-ck-47',
    text: 'In the Aldol condensation of acetaldehyde, the product is:',
    options: ['3-Hydroxybutanal', '2-Hydroxypropanal', 'Butanal', 'None'],
    correctAnswer: '3-Hydroxybutanal',
    explanation: 'The "Aldol" itself.'
  },
  {
    id: 'ch-ck-48',
    text: 'Which catalyst is used in the Rosenmund reduction to prepare aldehydes?',
    options: ['Ni/H2', 'Pd/BaSO4', 'LiAlH4', 'None'],
    correctAnswer: 'Pd/BaSO4',
    explanation: 'Reduces acid chlorides to aldehydes.'
  },
  {
    id: 'ch-ck-49',
    text: 'Aldehydes and Ketones show _____ isomerism.',
    options: ['Chain', 'Functional group', 'Position', 'None'],
    correctAnswer: 'Functional group',
    explanation: 'e.g. Propanal and Propanone (C3H6O).'
  },
  {
    id: 'ch-ck-50',
    text: 'Which is a "Secondary" carbon in Acetone?',
    options: ['Terminal carbons', 'Carbonyl carbon', 'Both', 'None'],
    correctAnswer: 'Carbonyl carbon',
    explanation: 'It is attached to two other carbons.'
  },
  {
    id: 'ch-ck-51',
    text: 'Schiff\'s reagent is a dye (Rosaniline hydrochloride) decolorized by:',
    options: ['H2SO4', 'SO2', 'NaOH', 'None'],
    correctAnswer: 'SO2',
    explanation: 'Pink color is restored by aldehydes.'
  },
  {
    id: 'ch-ck-52',
    text: 'Which test is negative for benzaldehyde?',
    options: ['Tollen\'s test', 'Fehling\'s test', '2,4-DNP test', 'None'],
    correctAnswer: 'Fehling\'s test',
    explanation: 'Aromatic aldehydes fail this test.'
  },
  {
    id: 'ch-ck-53',
    text: 'Acetaldehyde reacts with PCl5 to give:',
    options: ['Ethyl chloride', 'Ethylidene chloride (1,1-dichloroethane)', 'Acetic acid', 'None'],
    correctAnswer: 'Ethylidene chloride (1,1-dichloroethane)',
    explanation: 'Oxygen is replaced by two chlorine atoms.'
  },
  {
    id: 'ch-ck-54',
    text: 'Reaction of acetone with PCl5 gives:',
    options: ['2,2-dichloropropane', '1,2-dichloropropane', 'Isopropyl chloride', 'None'],
    correctAnswer: '2,2-dichloropropane',
    explanation: 'Geminal dihalide formation.'
  },
  {
    id: 'ch-ck-55',
    text: 'Formaldehyde on treatment with ammonia gives _____ used as a urinary antiseptic.',
    options: ['Urotropine (Hexamethylenetetramine)', 'Urea', 'Acetamide', 'None'],
    correctAnswer: 'Urotropine (Hexamethylenetetramine)',
    explanation: 'Formula (CH2)6N4.'
  },
  {
    id: 'ch-ck-56',
    text: 'Acetaldehyde reacts with ammonia to give _____ (addition product).',
    options: ['Acetaldehyde ammonia', 'Urea', 'Ammonium acetate', 'None'],
    correctAnswer: 'Acetaldehyde ammonia',
    explanation: 'Unstable intermediate.'
  },
  {
    id: 'ch-ck-57',
    text: 'Ketones react with ammonia to form complex _____ compounds.',
    options: ['Alcohol', 'Amines/Ammonia-adducts', 'Ether', 'None'],
    correctAnswer: 'Amines/Ammonia-adducts',
    explanation: 'Different behavior from aldehydes.'
  },
  {
    id: 'ch-ck-58',
    text: 'Chloral is:',
    options: ['Trichloroacetaldehyde', 'Trichloroacetone', 'Chloroform', 'None'],
    correctAnswer: 'Trichloroacetaldehyde',
    explanation: 'CCl3CHO; used in making DDT.'
  },
  {
    id: 'ch-ck-59',
    text: 'Chloral hydrate is a _____ used as a sedative.',
    options: ['Liquid', 'Gas', 'Crystalline solid', 'None'],
    correctAnswer: 'Crystalline solid',
    explanation: 'Stable gem-diol (CCl3CH(OH)2).'
  },
  {
    id: 'ch-ck-60',
    text: 'Addition of Grignard reagent to aldehydes/ketones is followed by _____ to get alcohol.',
    options: ['Oxidation', 'Hydrolysis', 'Reduction', 'None'],
    correctAnswer: 'Hydrolysis',
    explanation: 'Standard step.'
  },
  {
    id: 'ch-ck-61',
    text: 'Aldehydes are _____ easily than ketones.',
    options: ['Reduced', 'Oxidized', 'Hydrated', 'None'],
    correctAnswer: 'Oxidized',
    explanation: 'Due to presence of H attached to carbonyl C.'
  },
  {
    id: 'ch-ck-62',
    text: 'Keto-Enol tautomerism is shown by compounds having _____ hydrogen.',
    options: ['Alpha', 'Beta', 'Gamma', 'None'],
    correctAnswer: 'Alpha',
    explanation: 'H on the carbon next to the carbonyl group.'
  },
  {
    id: 'ch-ck-63',
    text: 'In basic medium, the nucleophile in Aldol condensation is a/an:',
    options: ['Carbocation', 'Carbanion/Enolate ion', 'Radical', 'None'],
    correctAnswer: 'Carbanion/Enolate ion',
    explanation: 'Formed by removal of alpha-H.'
  },
  {
    id: 'ch-ck-64',
    text: 'Aldol product on heating with dilute acid undergoes _____ to form unsaturated aldehyde.',
    options: ['Hydration', 'Dehydration', 'Oxidation', 'None'],
    correctAnswer: 'Dehydration',
    explanation: 'e.g. Crotonaldehyde from aldol of acetaldehyde.'
  },
  {
    id: 'ch-ck-65',
    text: 'Formaldehyde + 50% NaOH -> Methanol + Sodium formate. This is:',
    options: ['Aldol', 'Cannizzaro', 'Stephen', 'None'],
    correctAnswer: 'Cannizzaro',
    explanation: 'Self-redox reaction.'
  },
  {
    id: 'ch-ck-66',
    text: 'Bakelite is formed by the condensation of _____ and _____.',
    options: ['Phenol, Formaldehyde', 'Urea, Formaldehyde', 'Melamine, Formaldehyde', 'None'],
    correctAnswer: 'Phenol, Formaldehyde',
    explanation: 'Requires acidic or basic catalyst.'
  },
  {
    id: 'ch-ck-67',
    text: 'Ketones are used as _____ in perfumes and soaps.',
    options: ['Dyes', 'Fragrance agents', 'Cleansers', 'None'],
    correctAnswer: 'Fragrance agents',
    explanation: 'Many have pleasant odors.'
  },
  {
    id: 'ch-ck-68',
    text: 'The test used to distinguish between aldehydes and ketones is:',
    options: ['Tollen\'s test', '2,4-DNP test', 'NaHSO3 test', 'None'],
    correctAnswer: 'Tollen\'s test',
    explanation: 'Aldehydes give mirror, ketones don\'t.'
  },
  {
    id: 'ch-ck-69',
    text: 'Carbonyl oxygen has two _____ of electrons.',
    options: ['Unpaired electrons', 'Lone pairs', 'Sigma bonds', 'None'],
    correctAnswer: 'Lone pairs',
    explanation: 'Makes it basic/nucleophilic.'
  },
  {
    id: 'ch-ck-70',
    text: 'Aldehydes act as _____ agents due to their easy oxidation.',
    options: ['Oxidizing', 'Reducing', 'Dehydrating', 'None'],
    correctAnswer: 'Reducing',
    explanation: 'They reduce Ag+ to Ag or Cu2+ to Cu+.'
  },
  {
    id: 'ch-ck-71',
    text: 'Fehling\'s test gives a _____ color precipitate.',
    options: ['Blue', 'Brick-red', 'White', 'Black'],
    correctAnswer: 'Brick-red',
    explanation: 'Due to Cu2O.'
  },
  {
    id: 'ch-ck-72',
    text: 'Aldol condensation is _____ in nature.',
    options: ['Irreversible', 'Reversible', 'Explosive', 'None'],
    correctAnswer: 'Reversible',
    explanation: 'Equilibrium process.'
  },
  {
    id: 'ch-ck-73',
    text: 'Acetone is miscible with water because it forms _____ with water molecules.',
    options: ['Ionic bonds', 'Hydrogen bonds', 'Covalent bonds', 'None'],
    correctAnswer: 'Hydrogen bonds',
    explanation: 'Between carbonyl oxygen and water hydrogen.'
  },
  {
    id: 'ch-ck-74',
    text: 'Higher aldehydes and ketones are _____ or _____ with pleasant odors.',
    options: ['Liquids, Solids', 'Gases, Liquids', 'Always Gases', 'None'],
    correctAnswer: 'Liquids, Solids',
    explanation: 'Increasing mass increases BP.'
  },
  {
    id: 'ch-ck-75',
    text: 'Preparation: Hydrolysis of Geminal dihalides gives:',
    options: ['Alcohols', 'Aldehydes/Ketones', 'Acids', 'None'],
    correctAnswer: 'Aldehydes/Ketones',
    explanation: 'Via unstable gem-diols.'
  },
  {
    id: 'ch-ck-76',
    text: 'Ozonolysis of 2-butene gives _____ molecules of acetaldehyde.',
    options: ['1', '2', '3', 'None'],
    correctAnswer: '2',
    explanation: 'Symmetrical cleavage.'
  },
  {
    id: 'ch-ck-77',
    text: 'Which is used as a fuel for small stoves under the name "Meta Fuel"?',
    options: ['Formaldehyde', 'Metaldehyde', 'Paraldehyde', 'None'],
    correctAnswer: 'Metaldehyde',
    explanation: 'Solid polymer of acetaldehyde.'
  },
  {
    id: 'ch-ck-78',
    text: 'The carbonyl carbon is an _____ center.',
    options: ['Nucleophilic', 'Electrophilic', 'Basic', 'None'],
    correctAnswer: 'Electrophilic',
    explanation: 'Attacked by nucleophiles.'
  },
  {
    id: 'ch-ck-79',
    text: 'Reduction of >C=O with H2/Ni gives alcohol. This is an _____ addition.',
    options: ['Electrophilic', 'Nucleophilic', 'Catalytic', 'None'],
    correctAnswer: 'Catalytic',
    explanation: 'Standard hydrogenation.'
  },
  {
    id: 'ch-ck-80',
    text: 'The common name of Methanal is:',
    options: ['Acetaldehyde', 'Formaldehyde', 'Propionaldehyde', 'None'],
    correctAnswer: 'Formaldehyde',
    explanation: 'Derived from formic acid.'
  },
  {
    id: 'ch-ck-81',
    text: 'The presence of an alkyl group in ketones _____ the electrophilicity of carbonyl carbon compared to aldehydes.',
    options: ['Increases', 'Decreases', 'Does not affect', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Due to +I effect of alkyl groups.'
  },
  {
    id: 'ch-ck-82',
    text: 'Aldehydes and Ketones do not form _____ with each other.',
    options: ['Hydrogen bonds', 'Ionic bonds', 'Dimers', 'None'],
    correctAnswer: 'Hydrogen bonds',
    explanation: 'No acidic hydrogen directly attached to oxygen.'
  },
  {
    id: 'ch-ck-83',
    text: 'Silver mirror test is also called _____ test.',
    options: ['Fehling\'s', 'Tollen\'s', 'Benedict\'s', 'None'],
    correctAnswer: 'Tollen\'s',
    explanation: 'Uses Ag(NH3)2+ ion.'
  },
  {
    id: 'ch-ck-84',
    text: 'The oxidation of ketones requires _____ conditions and results in C-C bond breaking.',
    options: ['Mild', 'Vigorous', 'Dry', 'None'],
    correctAnswer: 'Vigorous',
    explanation: 'e.g. hot conc. HNO3.'
  },
  {
    id: 'ch-ck-85',
    text: 'The addition of Grignard reagent to Acetone gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Tertiary',
    explanation: 'Standard for ketones.'
  },
  {
    id: 'ch-ck-86',
    text: 'Cannizzaro reaction is a "Mixed" reaction if it involves _____ and _____.',
    options: ['Formaldehyde, Benzaldehyde', 'Formaldehyde, Acetaldehyde', 'Two acetones', 'None'],
    correctAnswer: 'Formaldehyde, Benzaldehyde',
    explanation: 'Cross-Cannizzaro.'
  },
  {
    id: 'ch-ck-87',
    text: 'Which is used as a solvent for cellulose acetate (lacquers)?',
    options: ['Methanol', 'Acetone', 'Acetic acid', 'None'],
    correctAnswer: 'Acetone',
    explanation: 'Important industrial use.'
  },
  {
    id: 'ch-ck-88',
    text: 'Reaction with Phenylhydrazine gives:',
    options: ['Oxime', 'Phenylhydrazone', 'Hydrazine', 'None'],
    correctAnswer: 'Phenylhydrazone',
    explanation: 'Yellow/Orange solid.'
  },
  {
    id: 'ch-ck-89',
    text: 'Aldehydes and Ketones are _____ in water as the chain length increases.',
    options: ['More soluble', 'Less soluble', 'Equally soluble', 'None'],
    correctAnswer: 'Less soluble',
    explanation: 'Hydrophobic effect.'
  },
  {
    id: 'ch-ck-90',
    text: 'The carbonyl group has _____ hybridization.',
    options: ['sp', 'sp2', 'sp3', 'None'],
    correctAnswer: 'sp2',
    explanation: 'Carbon and Oxygen are sp2.'
  },
  {
    id: 'ch-ck-91',
    text: 'Aldol condensation is catalyzed by _____ or _____.',
    options: ['Dilute acid, Dilute base', 'Conc. Acid', 'Metals', 'None'],
    correctAnswer: 'Dilute acid, Dilute base',
    explanation: 'Base-catalyzed is more common.'
  },
  {
    id: 'ch-ck-92',
    text: 'Disproportionation means _____ and _____ occurring simultaneously.',
    options: ['Addition, Elimination', 'Oxidation, Reduction', 'Ionization, Neutralization', 'None'],
    correctAnswer: 'Oxidation, Reduction',
    explanation: 'As in Cannizzaro.'
  },
  {
    id: 'ch-ck-93',
    text: 'Which reagent is used to detect the >C=O group regardless of it being aldehyde or ketone?',
    options: ['Tollen\'s', '2,4-DNP', 'Fehling\'s', 'None'],
    correctAnswer: '2,4-DNP',
    explanation: 'Brady\'s reagent test.'
  },
  {
    id: 'ch-ck-94',
    text: 'Addition of HCN to carbonyl compounds is _____ catalyzed.',
    options: ['Acid', 'Base', 'Heat', 'None'],
    correctAnswer: 'Base',
    explanation: 'Base generates the CN- nucleophile.'
  },
  {
    id: 'ch-ck-95',
    text: 'Formaldehyde is used in making _____ (an explosive).',
    options: ['TNT', 'RDX/Cyclonite', 'Dynamite', 'None'],
    correctAnswer: 'RDX/Cyclonite',
    explanation: 'Nitrified urotropine derivative.'
  },
  {
    id: 'ch-ck-96',
    text: 'Schiff\'s test is used specifically for:',
    options: ['Ketones', 'Aldehydes', 'Alcohols', 'None'],
    correctAnswer: 'Aldehydes',
    explanation: 'Distinction test.'
  },
  {
    id: 'ch-ck-97',
    text: 'Reaction of acetone with chloroform in the presence of KOH gives _____ (a hypnotic).',
    options: ['Chlorotone', 'Chloroform', 'BHC', 'None'],
    correctAnswer: 'Chlorotone',
    explanation: '1,1,1-trichloro-2-methyl-2-propanol.'
  },
  {
    id: 'ch-ck-98',
    text: 'The pi bond in >C=O is formed by _____ overlap of p-orbitals.',
    options: ['Head-on', 'Lateral/Sideways', 'Linear', 'None'],
    correctAnswer: 'Lateral/Sideways',
    explanation: 'Standard pi bond.'
  },
  {
    id: 'ch-ck-99',
    text: 'Which is a "Gem-diol"?',
    options: ['Ethylene glycol', 'Chloral hydrate', 'Glycerol', 'None'],
    correctAnswer: 'Chloral hydrate',
    explanation: 'Two -OH groups on the same carbon.'
  },
  {
    id: 'ch-ck-100',
    text: 'Aldehydes and Ketones are vital in _____ and _____ industries.',
    options: ['Agriculture', 'Perfume, Medicine', 'Mining', 'None'],
    correctAnswer: 'Perfume, Medicine',
    explanation: 'Due to their odors and chemical versatility.'
  }
];
