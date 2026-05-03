import { Question } from '../types';

export const CHEMISTRY_ALKYL_HALIDE_QUIZ: Question[] = [
  {
    id: 'ch-ah-1',
    text: 'Alkyl halides are also known as:',
    options: ['Haloalkanes', 'Haloarenes', 'Alkyl hydrides', 'None'],
    correctAnswer: 'Haloalkanes',
    explanation: 'Derivatives of alkanes where H is replaced by halogen.'
  },
  {
    id: 'ch-ah-2',
    text: 'A primary (1°) alkyl halide has the halogen atom attached to a carbon which is further attached to _____ other carbon atom(s).',
    options: ['Zero', 'One', 'Two', 'Three'],
    correctAnswer: 'One',
    explanation: 'Or zero in the case of methyl halide.'
  },
  {
    id: 'ch-ah-3',
    text: 'A secondary (2°) alkyl halide has the halogen atom attached to a carbon attached to _____ other carbons.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 'Two',
    explanation: 'e.g. 2-chloropropane.'
  },
  {
    id: 'ch-ah-4',
    text: 'A tertiary (3°) alkyl halide has the halogen atom attached to a carbon attached to _____ other carbons.',
    options: ['Two', 'Three', 'Four', 'None'],
    correctAnswer: 'Three',
    explanation: 'e.g. 2-chloro-2-methylpropane.'
  },
  {
    id: 'ch-ah-5',
    text: 'The order of reactivity of alkyl halides towards nucleophilic substitution is:',
    options: ['R-I > R-Br > R-Cl > R-F', 'R-F > R-Cl > R-Br > R-I', 'R-Cl > R-I > R-Br', 'None'],
    correctAnswer: 'R-I > R-Br > R-Cl > R-F',
    explanation: 'Due to decreasing bond strength from C-F to C-I.'
  },
  {
    id: 'ch-ah-6',
    text: 'Nucleophilic substitution reaction in which the rate depends on both substrate and nucleophile is:',
    options: ['SN1', 'SN2', 'E1', 'E2'],
    correctAnswer: 'SN2',
    explanation: 'Substitution Nucleophilic Bimolecular.'
  },
  {
    id: 'ch-ah-7',
    text: 'SN2 reactions are _____ step processes.',
    options: ['One', 'Two', 'Three', 'None'],
    correctAnswer: 'One',
    explanation: 'Bonds break and form simultaneously via a transition state.'
  },
  {
    id: 'ch-ah-8',
    text: 'SN2 reaction involves _____ of configuration.',
    options: ['Retention', 'Inversion (Walden Inversion)', 'Racemization', 'None'],
    correctAnswer: 'Inversion (Walden Inversion)',
    explanation: 'Nucleophile attacks from the side opposite to the leaving group.'
  },
  {
    id: 'ch-ah-9',
    text: 'Primary alkyl halides usually undergo _____ mechanism.',
    options: ['SN1', 'SN2', 'E1', 'None'],
    correctAnswer: 'SN2',
    explanation: 'Due to less steric hindrance.'
  },
  {
    id: 'ch-ah-10',
    text: 'Nucleophilic substitution reaction that occurs in two steps is:',
    options: ['SN2', 'SN1', 'E2', 'None'],
    correctAnswer: 'SN1',
    explanation: 'Substitution Nucleophilic Unimolecular.'
  },
  {
    id: 'ch-ah-11',
    text: 'The first and rate-determining step of SN1 is the formation of a:',
    options: ['Free radical', 'Carbocation', 'Carbanion', 'None'],
    correctAnswer: 'Carbocation',
    explanation: 'Heterolytic cleavage of C-X bond.'
  },
  {
    id: 'ch-ah-12',
    text: 'SN1 reactions lead to _____ of configuration.',
    options: ['Complete inversion', 'Complete retention', 'Racemization (mixture of both)', 'None'],
    correctAnswer: 'Racemization (mixture of both)',
    explanation: 'Nucleophile can attack the planar carbocation from either side.'
  },
  {
    id: 'ch-ah-13',
    text: 'Tertiary alkyl halides usually undergo _____ mechanism.',
    options: ['SN1', 'SN2', 'E2', 'None'],
    correctAnswer: 'SN1',
    explanation: 'Due to high stability of tertiary carbocation.'
  },
  {
    id: 'ch-ah-14',
    text: 'A polar protic solvent (like water or alcohol) favors _____ mechanism.',
    options: ['SN1', 'SN2', 'E2', 'None'],
    correctAnswer: 'SN1',
    explanation: 'Helps in solvating and stabilizing the carbocation and leaving group.'
  },
  {
    id: 'ch-ah-15',
    text: 'Elimination reactions of alkyl halides involve the removal of HX to form:',
    options: ['Alkanes', 'Alkenes', 'Alkynes', 'Alcohols'],
    correctAnswer: 'Alkenes',
    explanation: 'Also called dehydrohalogenation.'
  },
  {
    id: 'ch-ah-16',
    text: 'E2 reactions are _____ processes.',
    options: ['Bimolecular one-step', 'Unimolecular two-step', 'Free radical', 'None'],
    correctAnswer: 'Bimolecular one-step',
    explanation: 'Rate depends on both base and substrate.'
  },
  {
    id: 'ch-ah-17',
    text: 'E1 reactions involve the formation of a _____ intermediate.',
    options: ['Carbanion', 'Carbocation', 'Radical', 'None'],
    correctAnswer: 'Carbocation',
    explanation: 'Similar to SN1 mechanism.'
  },
  {
    id: 'ch-ah-18',
    text: 'Grignard reagents have the general formula:',
    options: ['R-X', 'R-Mg-X', 'R-Li', 'None'],
    correctAnswer: 'R-Mg-X',
    explanation: 'Organomagnesium halides.'
  },
  {
    id: 'ch-ah-19',
    text: 'Grignard reagent is prepared by reacting alkyl halide with _____ in the presence of _____.',
    options: ['Na, Water', 'Mg, Dry ether', 'Mg, Ethanol', 'None'],
    correctAnswer: 'Mg, Dry ether',
    explanation: 'Ether stabilizes the reagent.'
  },
  {
    id: 'ch-ah-20',
    text: 'The carbon atom in a Grignard reagent is _____ charged.',
    options: ['Positively', 'Negatively (Nucleophilic)', 'Neutral', 'None'],
    correctAnswer: 'Negatively (Nucleophilic)',
    explanation: 'Due to the electropositive nature of Magnesium.'
  },
  {
    id: 'ch-ah-21',
    text: 'Grignard reagent reacts with water to produce:',
    options: ['Alcohol', 'Alkane', 'Acid', 'None'],
    correctAnswer: 'Alkane',
    explanation: 'R-MgX + H2O -> R-H + Mg(OH)X.'
  },
  {
    id: 'ch-ah-22',
    text: 'Reaction of Grignard reagent with Formaldehyde (Methanal) followed by hydrolysis gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Primary',
    explanation: 'e.g. Ethanol from Methylmagnesium bromide.'
  },
  {
    id: 'ch-ah-23',
    text: 'Reaction of Grignard reagent with any other Aldehyde (except formaldehyde) gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Secondary',
    explanation: 'Adding one alkyl group to the carbonyl carbon.'
  },
  {
    id: 'ch-ah-24',
    text: 'Reaction of Grignard reagent with Ketones gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Tertiary',
    explanation: 'Most hindered alcohol synthesis.'
  },
  {
    id: 'ch-ah-25',
    text: 'Grignard reagent reacts with CO2 to give:',
    options: ['Alcohol', 'Aldehyde', 'Carboxylic acid', 'None'],
    correctAnswer: 'Carboxylic acid',
    explanation: 'Useful for increasing chain length by one C.'
  },
  {
    id: 'ch-ah-26',
    text: 'Which alkyl halide is used as a local anesthetic in surgery?',
    options: ['Methyl chloride', 'Ethyl chloride', 'Chloroform', 'None'],
    correctAnswer: 'Ethyl chloride',
    explanation: 'Used as a spray (refrigerant effect).'
  },
  {
    id: 'ch-ah-27',
    text: 'Chloroform (CHCl3) on exposure to light and air forms a poisonous gas called:',
    options: ['Mustard gas', 'Phosgene (COCl2)', 'Tear gas', 'None'],
    correctAnswer: 'Phosgene (COCl2)',
    explanation: 'Stored in dark bottles with 1% ethanol.'
  },
  {
    id: 'ch-ah-28',
    text: 'Haloform reaction is shown by compounds having the _____ group.',
    options: ['Methyl ketone (CH3-CO-)', 'Alcohol', 'Acid', 'None'],
    correctAnswer: 'Methyl ketone (CH3-CO-)',
    explanation: 'Also by ethanol and 2-alcohols.'
  },
  {
    id: 'ch-ah-29',
    text: 'Iodoform test gives a _____ precipitate for positive identification.',
    options: ['White', 'Yellow (CHI3)', 'Red', 'None'],
    correctAnswer: 'Yellow (CHI3)',
    explanation: 'Characteristic smell and color.'
  },
  {
    id: 'ch-ah-30',
    text: 'Which alkyl halide has the highest boiling point?',
    options: ['Ethyl chloride', 'Ethyl bromide', 'Ethyl iodide', 'Ethyl fluoride'],
    correctAnswer: 'Ethyl iodide',
    explanation: 'Strength of Van der Waals forces increases with mass/size of halogen.'
  },
  {
    id: 'ch-ah-31',
    text: 'Alkyl halides are _____ in water.',
    options: ['Highly soluble', 'Insoluble', 'Sparingly soluble', 'None'],
    correctAnswer: 'Insoluble',
    explanation: 'Despite polarity, they cannot form H-bonds with water.'
  },
  {
    id: 'ch-ah-32',
    text: 'Substitution of halogen by -OH group gives:',
    options: ['Ether', 'Alcohol', 'Amine', 'Nitrate'],
    correctAnswer: 'Alcohol',
    explanation: 'Using aqueous NaOH or KOH.'
  },
  {
    id: 'ch-ah-33',
    text: 'Substitution of halogen by -OR group gives:',
    options: ['Alcohol', 'Ether (Williamson synthesis)', 'Ester', 'None'],
    correctAnswer: 'Ether (Williamson synthesis)',
    explanation: 'Using Sodium alkoxide (NaOR).'
  },
  {
    id: 'ch-ah-34',
    text: 'Substitution of halogen by -CN group gives:',
    options: ['Amine', 'Alkyl nitrile (Cyanide)', 'Nitro compound', 'None'],
    correctAnswer: 'Alkyl nitrile (Cyanide)',
    explanation: 'Useful to increase chain length.'
  },
  {
    id: 'ch-ah-35',
    text: 'Reaction of alkyl halide with silver nitrite (AgNO2) gives _____ as the major product.',
    options: ['Alkyl nitrite', 'Nitroalkane', 'Amine', 'None'],
    correctAnswer: 'Nitroalkane',
    explanation: 'Major product due to covalent nature of AgNO2.'
  },
  {
    id: 'ch-ah-36',
    text: 'Wurtz reaction: 2R-X + 2Na -> ?',
    options: ['R-H', 'R-R + 2NaX', 'R-OH', 'None'],
    correctAnswer: 'R-R + 2NaX',
    explanation: 'Preparation of higher alkanes.'
  },
  {
    id: 'ch-ah-37',
    text: 'Victor Meyer test is used to distinguish between:',
    options: ['Alkanes and Alkenes', '1°, 2°, 3° Alcohols', '1°, 2°, 3° Alkyl halides', 'None'],
    correctAnswer: '1°, 2°, 3° Alcohols',
    explanation: 'Involves converting them to nitroalkanes first.'
  },
  {
    id: 'ch-ah-38',
    text: 'The best method to prepare alkyl chlorides from alcohols is by using:',
    options: ['HCl', 'PCl5', 'Thionyl chloride (SOCl2)', 'NaCl'],
    correctAnswer: 'Thionyl chloride (SOCl2)',
    explanation: 'Byproducts SO2 and HCl are gases, leaving pure alkyl halide.'
  },
  {
    id: 'ch-ah-39',
    text: 'Which is a "Nucleophile"?',
    options: ['H+', 'AlCl3', 'OH-', 'BF3'],
    correctAnswer: 'OH-',
    explanation: 'Electron-rich species.'
  },
  {
    id: 'ch-ah-40',
    text: 'Which is an "Electrophile"?',
    options: ['NH3', 'H2O', 'NO2+', 'CN-'],
    correctAnswer: 'NO2+',
    explanation: 'Electron-deficient species.'
  },
  {
    id: 'ch-ah-41',
    text: 'Carbon tetrachloride (CCl4) is used as a _____ and as a _____ under the name Pyrene.',
    options: ['Solvent, Fire extinguisher', 'Fuel, Fertilizer', 'Medicine, Dye', 'None'],
    correctAnswer: 'Solvent, Fire extinguisher',
    explanation: 'Inert and heavy vapor.'
  },
  {
    id: 'ch-ah-42',
    text: 'Freons (CFCs) are derivatives of methane and ethane containing _____ and _____.',
    options: ['F, Cl', 'Cl, Br', 'F, Br', 'None'],
    correctAnswer: 'F, Cl',
    explanation: 'Used as refrigerants.'
  },
  {
    id: 'ch-ah-43',
    text: 'The process of preparation of alkyl fluorides by reacting alkyl chlorides/bromides with metal fluorides is:',
    options: ['Wurtz reaction', 'Swarts reaction', 'Finkelstein reaction', 'None'],
    correctAnswer: 'Swarts reaction',
    explanation: 'Uses AgF, Hg2F2, or SbF3.'
  },
  {
    id: 'ch-ah-44',
    text: 'The preparation of alkyl iodides from alkyl chlorides/bromides using NaI in acetone is:',
    options: ['Swarts reaction', 'Finkelstein reaction', 'Hunsdiecker reaction', 'None'],
    correctAnswer: 'Finkelstein reaction',
    explanation: 'Based on solubility differences of NaX.'
  },
  {
    id: 'ch-ah-45',
    text: 'A "Leaving group" is the part of the molecule that _____ during substitution.',
    options: ['Arrives', 'Departs with electron pair', 'Stays fixed', 'None'],
    correctAnswer: 'Departs with electron pair',
    explanation: 'Better leaving groups are weak bases (e.g. I-).'
  },
  {
    id: 'ch-ah-46',
    text: 'Which is a better leaving group?',
    options: ['F-', 'Cl-', 'Br-', 'I-'],
    correctAnswer: 'I-',
    explanation: 'Weakest base among halides.'
  },
  {
    id: 'ch-ah-47',
    text: 'The coordination of Magnesium in Grignard reagent with ether is through:',
    options: ['Ionic bond', 'Coordinate covalent bond', 'Hydrogen bond', 'None'],
    correctAnswer: 'Coordinate covalent bond',
    explanation: 'Oxygen of ether donates lone pairs to Mg.'
  },
  {
    id: 'ch-ah-48',
    text: 'The reaction of Grignard reagent with Ethylene oxide gives _____ alcohol.',
    options: ['Primary', 'Secondary', 'Tertiary', 'None'],
    correctAnswer: 'Primary',
    explanation: 'Increases chain by two carbons.'
  },
  {
    id: 'ch-ah-49',
    text: 'Elimination vs Substitution: Higher temperature favors _____ over _____.',
    options: ['Substitution, Elimination', 'Elimination, Substitution', 'Both same', 'None'],
    correctAnswer: 'Elimination, Substitution',
    explanation: 'Entropy factor favors elimination.'
  },
  {
    id: 'ch-ah-50',
    text: 'A bulky base (like Potassium tert-butoxide) favors _____ mechanism.',
    options: ['Substitution', 'Elimination', 'Addition', 'None'],
    correctAnswer: 'Elimination',
    explanation: 'Steric hindrance prevents substitution.'
  },
  {
    id: 'ch-ah-51',
    text: 'Optical activity in alkyl halides is possible if the molecule has a _____ carbon.',
    options: ['Primary', 'Chiral/Asymmetric', 'Tertiary', 'None'],
    correctAnswer: 'Chiral/Asymmetric',
    explanation: 'Carbon attached to four different groups.'
  },
  {
    id: 'ch-ah-52',
    text: 'Which is NOT an alkyl halide?',
    options: ['Methyl chloride', 'Vinyl chloride', 'Bromobenzene', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'They are alkenyl and aryl halides respectively.'
  },
  {
    id: 'ch-ah-53',
    text: 'Alkyl halides are _____ dense than water (except alkyl fluorides and chlorides).',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Bromides and Iodides are heavier.'
  },
  {
    id: 'ch-ah-54',
    text: 'The reactivity of alkyl halides is primarily due to the _____ C-X bond.',
    options: ['Non-polar', 'Polar', 'Double', 'None'],
    correctAnswer: 'Polar',
    explanation: 'Carbon has partial positive charge.'
  },
  {
    id: 'ch-ah-55',
    text: 'Reaction of alkyl halide with KCN gives _____ as major product.',
    options: ['Isocyanide', 'Nitrile (Cyanide)', 'Amine', 'None'],
    correctAnswer: 'Nitrile (Cyanide)',
    explanation: 'Ionic KCN attacks through Carbon.'
  },
  {
    id: 'ch-ah-56',
    text: 'Reaction of alkyl halide with AgCN gives _____ as major product.',
    options: ['Nitrile', 'Isocyanide (R-NC)', 'Nitro', 'None'],
    correctAnswer: 'Isocyanide (R-NC)',
    explanation: 'Covalent AgCN attacks through Nitrogen.'
  },
  {
    id: 'ch-ah-57',
    text: 'DDT is a famous _____ containing chlorine.',
    options: ['Fertilizer', 'Insecticide', 'Plastic', 'None'],
    correctAnswer: 'Insecticide',
    explanation: 'Dichloro-diphenyl-trichloroethane.'
  },
  {
    id: 'ch-ah-58',
    text: 'The IUPAC name of Isopropyl bromide is:',
    options: ['1-Bromopropane', '2-Bromopropane', 'Bromomethane', 'None'],
    correctAnswer: '2-Bromopropane',
    explanation: 'Halogen at 2nd position.'
  },
  {
    id: 'ch-ah-59',
    text: 'Which mechanism follows second-order kinetics?',
    options: ['SN1', 'SN2', 'E1', 'None'],
    correctAnswer: 'SN2',
    explanation: 'Rate = k[Substrate][Nucleophile].'
  },
  {
    id: 'ch-ah-60',
    text: 'Which mechanism follows first-order kinetics?',
    options: ['SN2', 'SN1', 'E2', 'None'],
    correctAnswer: 'SN1',
    explanation: 'Rate = k[Substrate].'
  },
  {
    id: 'ch-ah-61',
    text: 'An Ambident nucleophile can attack from _____ site(s).',
    options: ['One', 'Two different', 'Three', 'None'],
    correctAnswer: 'Two different',
    explanation: 'e.g. CN- (C or N), NO2- (N or O).'
  },
  {
    id: 'ch-ah-62',
    text: 'Halogenation of alkanes in the dark _____.',
    options: ['Occurs quickly', 'Does not occur', 'Explodes', 'None'],
    correctAnswer: 'Does not occur',
    explanation: 'Needs energy to initiate free radical formation.'
  },
  {
    id: 'ch-ah-63',
    text: 'Alkene + HX -> Alkyl Halide is an _____ reaction.',
    options: ['Substitution', 'Addition', 'Elimination', 'None'],
    correctAnswer: 'Addition',
    explanation: 'Electrophilic addition.'
  },
  {
    id: 'ch-ah-64',
    text: 'Reaction of alcohol with dry HCl gas in the presence of anhydrous ZnCl2 is called:',
    options: ['Darzen\'s process', 'Groves\' process', 'Hunsdiecker', 'None'],
    correctAnswer: 'Groves\' process',
    explanation: 'Standard method for 1° and 2° alcohols.'
  },
  {
    id: 'ch-ah-65',
    text: 'Tertiary alcohols react with HCl _____ at room temperature.',
    options: ['Slowly', 'Immediately', 'Not at all', 'None'],
    correctAnswer: 'Immediately',
    explanation: 'Form stable carbocations.'
  },
  {
    id: 'ch-ah-66',
    text: 'The solvent used for Grignard reagent must be _____ (water-free).',
    options: ['Acidic', 'Absolute/Dry', 'Basic', 'None'],
    correctAnswer: 'Absolute/Dry',
    explanation: 'Water destroys the reagent.'
  },
  {
    id: 'ch-ah-67',
    text: 'Grignard reagent reacts with Ethanol to give:',
    options: ['Methane (if R is methyl)', 'Ethane', 'Alcohol', 'None'],
    correctAnswer: 'Methane (if R is methyl)',
    explanation: 'Acidic H of alcohol reacts with R-.'
  },
  {
    id: 'ch-ah-68',
    text: 'Alkyl halides react with ammonia to give _____ as the final product in excess.',
    options: ['Primary amine', 'Secondary amine', 'Quaternary ammonium salt', 'None'],
    correctAnswer: 'Quaternary ammonium salt',
    explanation: 'Exhaustive alkylation.'
  },
  {
    id: 'ch-ah-69',
    text: 'Saytzeff\'s rule: In elimination, the more _____ alkene is the major product.',
    options: ['Symmetrical', 'Highly substituted', 'Unstable', 'None'],
    correctAnswer: 'Highly substituted',
    explanation: 'Standard regioselectivity rule.'
  },
  {
    id: 'ch-ah-70',
    text: 'Iodoform CHI3 is a _____ solid with a characteristic odor.',
    options: ['Colorless', 'Yellow', 'Black', 'None'],
    correctAnswer: 'Yellow',
    explanation: 'Used as an antiseptic.'
  },
  {
    id: 'ch-ah-71',
    text: 'Which is a "Chlorinating" agent?',
    options: ['PCl3', 'PCl5', 'SOCl2', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Convert -OH to -Cl.'
  },
  {
    id: 'ch-ah-72',
    text: 'Alkyl halides react with Magnesium to form _____ bond.',
    options: ['Ionic', 'Covalent (C-Mg)', 'Coordinate', 'None'],
    correctAnswer: 'Covalent (C-Mg)',
    explanation: 'Though highly polar.'
  },
  {
    id: 'ch-ah-73',
    text: 'Grignard reagent was discovered by Victor Grignard who received _____ in 1912.',
    options: ['Nobel Prize', 'Knighthood', 'Oscar', 'None'],
    correctAnswer: 'Nobel Prize',
    explanation: 'For its great synthetic utility.'
  },
  {
    id: 'ch-ah-74',
    text: 'Reaction of Grignard reagent with Nitriles followed by hydrolysis gives:',
    options: ['Alcohol', 'Aldehyde', 'Ketone', 'Acid'],
    correctAnswer: 'Ketone',
    explanation: 'Except for HCN which gives aldehyde.'
  },
  {
    id: 'ch-ah-75',
    text: 'Vinyl chloride is _____ reactive than Ethyl chloride towards substitution.',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'Less',
    explanation: 'Due to resonance/partial double bond character of C-Cl.'
  },
  {
    id: 'ch-ah-76',
    text: 'Allyl chloride is _____ reactive than Ethyl chloride towards substitution.',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'More',
    explanation: 'Due to stability of Allyl carbocation.'
  },
  {
    id: 'ch-ah-77',
    text: 'Which shows SN1 mechanism most readily?',
    options: ['Methyl chloride', 'Isopropyl chloride', 't-Butyl chloride', 'None'],
    correctAnswer: 't-Butyl chloride',
    explanation: 'Forms stable 3° carbocation.'
  },
  {
    id: 'ch-ah-78',
    text: 'Which shows SN2 mechanism most readily?',
    options: ['Methyl chloride', 'Isopropyl chloride', 't-Butyl chloride', 'None'],
    correctAnswer: 'Methyl chloride',
    explanation: 'Least steric hindrance.'
  },
  {
    id: 'ch-ah-79',
    text: 'Which alkyl halide will have the highest rate of reaction with OH-?',
    options: ['R-Cl', 'R-Br', 'R-I', 'R-F'],
    correctAnswer: 'R-I',
    explanation: 'Best leaving group.'
  },
  {
    id: 'ch-ah-80',
    text: 'Alcoholic KOH favors _____ whereas Aqueous KOH favors _____.',
    options: ['Substitution, Elimination', 'Elimination, Substitution', 'Both same', 'None'],
    correctAnswer: 'Elimination, Substitution',
    explanation: 'Standard reagent control.'
  },
  {
    id: 'ch-ah-81',
    text: 'Which is a "Secondary" alkyl halide?',
    options: ['n-Propyl bromide', 'Isopropyl bromide', 'Ethyl bromide', 'None'],
    correctAnswer: 'Isopropyl bromide',
    explanation: 'Br is on the middle carbon.'
  },
  {
    id: 'ch-ah-82',
    text: 'Grignard reagent reacts with HCN to give:',
    options: ['Ketone', 'Aldehyde', 'Alcohol', 'None'],
    correctAnswer: 'Aldehyde',
    explanation: 'Unique reaction among nitriles.'
  },
  {
    id: 'ch-ah-83',
    text: 'Reduction of alkyl halides with Zn/HCl gives:',
    options: ['Alkenes', 'Alkanes', 'Alcohols', 'None'],
    correctAnswer: 'Alkanes',
    explanation: 'R-X + 2[H] -> R-H + HX.'
  },
  {
    id: 'ch-ah-84',
    text: 'IUPAC name of Neopentyl bromide is:',
    options: ['1-Bromo-2,2-dimethylpropane', '2-Bromo-2-methylbutane', '1-Bromopentane', 'None'],
    correctAnswer: '1-Bromo-2,2-dimethylpropane',
    explanation: 'Bromine is on a primary carbon.'
  },
  {
    id: 'ch-ah-85',
    text: 'Steric hindrance _____ the rate of SN2 reaction.',
    options: ['Increases', 'Decreases', 'Does not affect', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Crowding makes it hard for nucleophile to approach.'
  },
  {
    id: 'ch-ah-86',
    text: 'In SN1, the arrangement of groups around the carbon changes from tetrahedral to _____ in the intermediate.',
    options: ['Pyramidal', 'Planar', 'Linear', 'None'],
    correctAnswer: 'Planar',
    explanation: 'Carbocation is sp2 hybridized.'
  },
  {
    id: 'ch-ah-87',
    text: 'Nucleophilicity depends on _____ and _____ of the species.',
    options: ['Color, Weight', 'Charge, Basic strength', 'Shape, Size', 'None'],
    correctAnswer: 'Charge, Basic strength',
    explanation: 'Stronger bases are usually better nucleophiles (in same row).'
  },
  {
    id: 'ch-ah-88',
    text: 'Carbon-Halogen bond polarity _____ down the group.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Decreases',
    explanation: 'Electronegativity difference decreases from F to I.'
  },
  {
    id: 'ch-ah-89',
    text: 'The bond energy of C-I is about _____ kJ/mol (weakest).',
    options: ['450', '230', '350', 'None'],
    correctAnswer: '230',
    explanation: 'Reason for high reactivity.'
  },
  {
    id: 'ch-ah-90',
    text: 'Which is a "Dehydrohalogenating" agent?',
    options: ['H2SO4', 'Alcoholic KOH', 'Zn dust', 'None'],
    correctAnswer: 'Alcoholic KOH',
    explanation: 'Standard base for elimination.'
  },
  {
    id: 'ch-ah-91',
    text: 'Which gas is released when Chloroform is treated with Ag powder?',
    options: ['Methane', 'Ethylene', 'Acetylene', 'None'],
    correctAnswer: 'Acetylene',
    explanation: '2CHCl3 + 6Ag -> C2H2 + 6AgCl.'
  },
  {
    id: 'ch-ah-92',
    text: 'Alkyl halides are used to prepare _____ in the Williamson synthesis.',
    options: ['Esters', 'Ethers', 'Amides', 'None'],
    correctAnswer: 'Ethers',
    explanation: 'SN2 reaction.'
  },
  {
    id: 'ch-ah-93',
    text: 'Grignard reagent reacts with Alcohols to produce _____ containing the alkyl group of the reagent.',
    options: ['Alcohols', 'Alkanes', 'Ethers', 'None'],
    correctAnswer: 'Alkanes',
    explanation: 'Protonation of R- group.'
  },
  {
    id: 'ch-ah-94',
    text: 'Grignard reagent is used in the synthesis of _____ by reacting with sulfur.',
    options: ['Thioalcohols (Thiols)', 'Sulfones', 'Sulfides', 'None'],
    correctAnswer: 'Thioalcohols (Thiols)',
    explanation: 'R-MgX + S -> R-S-MgX -> R-SH.'
  },
  {
    id: 'ch-ah-95',
    text: 'A "Strong" nucleophile is one which attacks _____ carbon.',
    options: ['Slowly', 'Quickly', 'Electron-rich', 'None'],
    correctAnswer: 'Quickly',
    explanation: 'Kinetic definition.'
  },
  {
    id: 'ch-ah-96',
    text: 'Solvolysis is a substitution reaction where the _____ acts as the nucleophile.',
    options: ['Substrate', 'Solvent', 'Catalyst', 'None'],
    correctAnswer: 'Solvent',
    explanation: 'e.g. Hydrolysis, Alcoholysis.'
  },
  {
    id: 'ch-ah-97',
    text: 'Which is a "Secondary" carbocation?',
    options: ['Methyl', 'Ethyl', 'Isopropyl', 't-Butyl'],
    correctAnswer: 'Isopropyl',
    explanation: 'Positive charge on 2nd carbon of propane.'
  },
  {
    id: 'ch-ah-98',
    text: 'Which alkyl halide does NOT undergo SN2 reaction?',
    options: ['Methyl chloride', 'Neopentyl chloride', 't-Butyl chloride', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Due to extreme steric hindrance.'
  },
  {
    id: 'ch-ah-99',
    text: 'The "Backside" attack is characteristic of:',
    options: ['SN1', 'SN2', 'E1', 'E2'],
    correctAnswer: 'SN2',
    explanation: 'Leads to Walden inversion.'
  },
  {
    id: 'ch-ah-100',
    text: 'Alkyl halides are generally used as _____ in organic synthesis.',
    options: ['Starting materials/Intermediates', 'Catalysts', 'Solvents only', 'None'],
    correctAnswer: 'Starting materials/Intermediates',
    explanation: 'Due to their versatile reactivity.'
  }
];
