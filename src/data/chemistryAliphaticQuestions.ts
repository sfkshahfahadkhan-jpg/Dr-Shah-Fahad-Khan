import { Question } from '../types';

export const CHEMISTRY_ALIPHATIC_QUIZ: Question[] = [
  {
    id: 'ch-al-1',
    text: 'Hydrocarbons with open chains of carbon atoms are called:',
    options: ['Aromatic', 'Aliphatic', 'Alicyclic', 'None'],
    correctAnswer: 'Aliphatic',
    explanation: 'They can be straight or branched chains.'
  },
  {
    id: 'ch-al-2',
    text: 'Alkanes are _____ hydrocarbons because they contain only single bonds.',
    options: ['Unsaturated', 'Saturated', 'Aromatic', 'None'],
    correctAnswer: 'Saturated',
    explanation: 'Every carbon is bonded to four other atoms.'
  },
  {
    id: 'ch-al-3',
    text: 'Which is the simplest alkane?',
    options: ['Ethane', 'Methane', 'Propane', 'Butane'],
    correctAnswer: 'Methane',
    explanation: 'Formula CH4.'
  },
  {
    id: 'ch-al-4',
    text: 'Sabatier-Senderens reaction involves the _____ of alkenes/alkynes.',
    options: ['Oxidation', 'Hydrogenation', 'Halogenation', 'None'],
    correctAnswer: 'Hydrogenation',
    explanation: 'Uses Ni, Pt, or Pd as a catalyst.'
  },
  {
    id: 'ch-al-5',
    text: 'The Wurtz reaction is used for the preparation of symmetrical alkanes from:',
    options: ['Alcohols', 'Alkyl halides', 'Acids', 'None'],
    correctAnswer: 'Alkyl halides',
    explanation: 'Reaction with Sodium in dry ether.'
  },
  {
    id: 'ch-al-6',
    text: 'Kolbe\'s electrolytic method produces _____ at the anode.',
    options: ['Alkane and CO2', 'Alkane and H2', 'Alcohol', 'None'],
    correctAnswer: 'Alkane and CO2',
    explanation: 'Electrolysis of salts of carboxylic acids.'
  },
  {
    id: 'ch-al-7',
    text: 'Alkanes undergo _____ reactions with halogens in the presence of light.',
    options: ['Addition', 'Substitution (Free radical)', 'Elimination', 'None'],
    correctAnswer: 'Substitution (Free radical)',
    explanation: 'H atoms are replaced by halogen atoms.'
  },
  {
    id: 'ch-al-8',
    text: 'The order of reactivity of halogens towards alkanes is:',
    options: ['F2 > Cl2 > Br2 > I2', 'I2 > Br2 > Cl2 > F2', 'Cl2 > F2 > Br2 > I2', 'None'],
    correctAnswer: 'F2 > Cl2 > Br2 > I2',
    explanation: 'Fluorination is explosive; Iodination is reversible.'
  },
  {
    id: 'ch-al-9',
    text: 'Nitration of alkanes is carried out in the _____ phase at high temperature.',
    options: ['Liquid', 'Vapor', 'Solid', 'None'],
    correctAnswer: 'Vapor',
    explanation: 'Produces nitroalkanes.'
  },
  {
    id: 'ch-al-10',
    text: 'The process of conversion of n-alkanes to branched alkanes using AlCl3/HCl is:',
    options: ['Cracking', 'Isomerization', 'Reforming', 'None'],
    correctAnswer: 'Isomerization',
    explanation: 'Important for fuel quality.'
  },
  {
    id: 'ch-al-11',
    text: 'Alkenes contain at least one _____ bond.',
    options: ['Single', 'Double', 'Triple', 'None'],
    correctAnswer: 'Double',
    explanation: 'Unsaturated hydrocarbons.'
  },
  {
    id: 'ch-al-12',
    text: 'The simplest alkene is:',
    options: ['Methane', 'Ethene (Ethylene)', 'Propene', 'Butene'],
    correctAnswer: 'Ethene (Ethylene)',
    explanation: 'Formula C2H4.'
  },
  {
    id: 'ch-al-13',
    text: 'Dehydration of alcohols to form alkenes is catalyzed by:',
    options: ['NaOH', 'Conc. H2SO4 or H3PO4', 'Nickel', 'None'],
    correctAnswer: 'Conc. H2SO4 or H3PO4',
    explanation: 'Removal of water.'
  },
  {
    id: 'ch-al-14',
    text: 'Dehydrohalogenation of alkyl halides is carried out using _____ KOH.',
    options: ['Aqueous', 'Alcoholic', 'Dilute', 'None'],
    correctAnswer: 'Alcoholic',
    explanation: 'Aqueous KOH would give alcohols (substitution).'
  },
  {
    id: 'ch-al-15',
    text: 'Vicinal dihalides react with _____ to form alkenes.',
    options: ['Sodium', 'Zinc dust', 'Magnesium', 'None'],
    correctAnswer: 'Zinc dust',
    explanation: 'Dehalogenation reaction.'
  },
  {
    id: 'ch-al-16',
    text: 'Raney nickel is an alloy of Nickel and _____ treated with NaOH.',
    options: ['Copper', 'Aluminum', 'Iron', 'None'],
    correctAnswer: 'Aluminum',
    explanation: 'Very active form of Ni catalyst.'
  },
  {
    id: 'ch-al-17',
    text: 'Hydrogenation of alkenes is an _____ process.',
    options: ['Endothermic', 'Exothermic', 'Isothermal', 'None'],
    correctAnswer: 'Exothermic',
    explanation: 'Heat of hydrogenation is released.'
  },
  {
    id: 'ch-al-18',
    text: 'The addition of HX to an unsymmetrical alkene follows _____ rule.',
    options: ['Hund\'s', 'Markownikoff\'s', 'Pauli\'s', 'None'],
    correctAnswer: 'Markownikoff\'s',
    explanation: 'Negative part goes to carbon with fewer H atoms.'
  },
  {
    id: 'ch-al-19',
    text: 'Addition of HBr to alkenes in the presence of peroxides follows _____ rule.',
    options: ['Markownikoff\'s', 'Anti-Markownikoff\'s/Kharasch effect', 'Saytzeff\'s', 'None'],
    correctAnswer: 'Anti-Markownikoff\'s/Kharasch effect',
    explanation: 'Only applies to HBr, not HCl or HI.'
  },
  {
    id: 'ch-al-20',
    text: 'Which test is used to detect unsaturation in organic compounds?',
    options: ['Lucas test', 'Bromine water test / Baeyer\'s test', 'Tollen\'s test', 'None'],
    correctAnswer: 'Bromine water test / Baeyer\'s test',
    explanation: 'Decolorization of Br2 (brown) or KMnO4 (purple).'
  },
  {
    id: 'ch-al-21',
    text: 'Baeyer\'s reagent is cold, dilute, alkaline solution of:',
    options: ['K2Cr2O7', 'KMnO4', 'NaOH', 'None'],
    correctAnswer: 'KMnO4',
    explanation: 'Used to form vicinal glycols from alkenes.'
  },
  {
    id: 'ch-al-22',
    text: 'Ozonolysis of alkenes followed by hydrolysis gives _____ or _____.',
    options: ['Alcohols', 'Aldehydes, Ketones', 'Acids', 'None'],
    correctAnswer: 'Aldehydes, Ketones',
    explanation: 'Used to locate the position of the double bond.'
  },
  {
    id: 'ch-al-23',
    text: 'Polymerization of ethene at high pressure gives:',
    options: ['PVC', 'Polyethylene (Polythene)', 'Polystyrene', 'None'],
    correctAnswer: 'Polyethylene (Polythene)',
    explanation: 'Common plastic.'
  },
  {
    id: 'ch-al-24',
    text: 'Alkynes contain at least one _____ bond.',
    options: ['Single', 'Double', 'Triple', 'None'],
    correctAnswer: 'Triple',
    explanation: 'General formula CnH2n-2.'
  },
  {
    id: 'ch-al-25',
    text: 'The simplest alkyne is _____ also known as _____.',
    options: ['Ethene, Ethylene', 'Ethyne, Acetylene', 'Propyne', 'None'],
    correctAnswer: 'Ethyne, Acetylene',
    explanation: 'Formula C2H2.'
  },
  {
    id: 'ch-al-26',
    text: 'Calcium carbide (CaC2) reacts with water to produce _____ gas.',
    options: ['Methane', 'Ethylene', 'Acetylene', 'None'],
    correctAnswer: 'Acetylene',
    explanation: 'Industrial method for C2H2.'
  },
  {
    id: 'ch-al-27',
    text: 'Dehydrohalogenation of vicinal dihalides gives:',
    options: ['Alkanes', 'Alkenes', 'Alkynes', 'None'],
    correctAnswer: 'Alkynes',
    explanation: 'Requires strong base like NaNH2 or alcoholic KOH.'
  },
  {
    id: 'ch-al-28',
    text: 'Acetylene is used in _____ for cutting and welding metals.',
    options: ['Medicine', 'Oxy-acetylene torch', 'Fuel only', 'None'],
    correctAnswer: 'Oxy-acetylene torch',
    explanation: 'Produces very high temperature (3000°C).'
  },
  {
    id: 'ch-al-29',
    text: 'Terminal alkynes are _____ in nature because the sp-hybridized carbon is highly electronegative.',
    options: ['Basic', 'Acidic', 'Neutral', 'None'],
    correctAnswer: 'Acidic',
    explanation: 'Can react with strong bases or metals.'
  },
  {
    id: 'ch-al-30',
    text: 'Acetylene reacts with ammoniacal silver nitrate to give a _____ precipitate.',
    options: ['Red', 'White (Silver acetylide)', 'Yellow', 'None'],
    correctAnswer: 'White (Silver acetylide)',
    explanation: 'Used to distinguish terminal alkynes.'
  },
  {
    id: 'ch-al-31',
    text: 'Acetylene reacts with ammoniacal cuprous chloride to give a _____ precipitate.',
    options: ['White', 'Red (Copper acetylide)', 'Blue', 'None'],
    correctAnswer: 'Red (Copper acetylide)',
    explanation: 'Specific test for terminal triple bond.'
  },
  {
    id: 'ch-al-32',
    text: 'Hydration of ethyne in the presence of HgSO4/H2SO4 gives:',
    options: ['Ethanol', 'Acetaldehyde (Ethanal)', 'Acetic acid', 'None'],
    correctAnswer: 'Acetaldehyde (Ethanal)',
    explanation: 'Via unstable vinyl alcohol intermediate.'
  },
  {
    id: 'ch-al-33',
    text: 'Linear polymerization of acetylene in the presence of CuCl/NH4Cl gives:',
    options: ['Benzene', 'Vinyl acetylene', 'Divinyl acetylene', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Used in synthetic rubber manufacture.'
  },
  {
    id: 'ch-al-34',
    text: 'Cyclic polymerization (trimerization) of acetylene at high temperature gives:',
    options: ['Cyclohexane', 'Benzene', 'Toluene', 'None'],
    correctAnswer: 'Benzene',
    explanation: '3 C2H2 -> C66H6.'
  },
  {
    id: 'ch-al-35',
    text: 'Which hydrocarbon is used for the artificial ripening of fruits?',
    options: ['Methane', 'Ethylene', 'Acetylene', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Both act as ripening agents.'
  },
  {
    id: 'ch-al-36',
    text: 'Mustard gas is a toxic oily liquid prepared from:',
    options: ['Methane', 'Ethylene + S2Cl2', 'Acetylene', 'None'],
    correctAnswer: 'Ethylene + S2Cl2',
    explanation: 'Used as a chemical weapon.'
  },
  {
    id: 'ch-al-37',
    text: 'Ethylene glycol is used as an _____ in automobile radiators.',
    options: ['Oxidizer', 'Anti-freeze', 'Fuel', 'None'],
    correctAnswer: 'Anti-freeze',
    explanation: 'Lowers the freezing point of water.'
  },
  {
    id: 'ch-al-38',
    text: 'Alkanes are chemically _____ because they contain only strong sigma bonds.',
    options: ['Reactive', 'Unreactive/Inert', 'Acidic', 'None'],
    correctAnswer: 'Unreactive/Inert',
    explanation: 'Reason for the name "paraffins".'
  },
  {
    id: 'ch-al-39',
    text: 'Which alkane is a constituent of "Natural Gas"?',
    options: ['Methane', 'Ethane', 'Propane', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Mostly methane, with some ethane, propane, butane.'
  },
  {
    id: 'ch-al-40',
    text: 'The C-C bond length in alkanes is:',
    options: ['1.34 Å', '1.54 Å', '1.20 Å', 'None'],
    correctAnswer: '1.54 Å',
    explanation: 'Longest carbon-carbon bond.'
  },
  {
    id: 'ch-al-41',
    text: 'The C=C bond length in alkenes is:',
    options: ['1.54 Å', '1.34 Å', '1.20 Å', 'None'],
    correctAnswer: '1.34 Å',
    explanation: 'Shorter than single bond.'
  },
  {
    id: 'ch-al-42',
    text: 'The C≡C bond length in alkynes is:',
    options: ['1.54 Å', '1.34 Å', '1.20 Å', 'None'],
    correctAnswer: '1.20 Å',
    explanation: 'Shortest carbon-carbon bond.'
  },
  {
    id: 'ch-al-43',
    text: 'Marsh gas is mainly:',
    options: ['Ethane', 'Methane', 'Propane', 'None'],
    correctAnswer: 'Methane',
    explanation: 'Formed by decomposition of organic matter in swamps.'
  },
  {
    id: 'ch-al-44',
    text: 'Chlorination of methane in excess chlorine gives _____ as the final product.',
    options: ['Methyl chloride', 'Chloroform', 'Carbon tetrachloride (CCl4)', 'None'],
    correctAnswer: 'Carbon tetrachloride (CCl4)',
    explanation: 'Complete substitution.'
  },
  {
    id: 'ch-al-45',
    text: 'The mechanism of halogenation of alkanes involves:',
    options: ['Ions', 'Free radicals', 'Carbenes', 'None'],
    correctAnswer: 'Free radicals',
    explanation: 'Steps: Initiation, Propagation, Termination.'
  },
  {
    id: 'ch-al-46',
    text: 'Which step of free radical halogenation is initiated by light?',
    options: ['Initiation', 'Propagation', 'Termination', 'None'],
    correctAnswer: 'Initiation',
    explanation: 'Homolysis of X2 bond.'
  },
  {
    id: 'ch-al-47',
    text: 'Partial oxidation of methane in the presence of a Cu catalyst at high P and T gives:',
    options: ['Methanol', 'Formaldehyde', 'Formic acid', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Sequential oxidation products.'
  },
  {
    id: 'ch-al-48',
    text: 'Combustion of alkanes in limited supply of air produces _____ instead of CO2.',
    options: ['Oxygen', 'Carbon monoxide (CO)', 'Carbon black', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Incomplete combustion.'
  },
  {
    id: 'ch-al-49',
    text: 'Alkenes react with ozone to form _____ which are unstable and explosive.',
    options: ['Ozonides', 'Epoxides', 'Oxides', 'None'],
    correctAnswer: 'Ozonides',
    explanation: 'Then hydrolyzed to carbonyl compounds.'
  },
  {
    id: 'ch-al-50',
    text: 'Hydrogenation of vegetable oils into banaspati ghee uses _____ as a catalyst.',
    options: ['Iron', 'Nickel', 'Copper', 'None'],
    correctAnswer: 'Nickel',
    explanation: 'Industrial application of hydrogenation.'
  },
  {
    id: 'ch-al-51',
    text: 'Which hydrocarbon is used for the production of synthetic rubber (Neoprene)?',
    options: ['Ethane', 'Vinyl acetylene', 'Butane', 'None'],
    correctAnswer: 'Vinyl acetylene',
    explanation: 'Reacts with HCl to give chloroprene.'
  },
  {
    id: 'ch-al-52',
    text: 'Which is a "Vicinal" dihalide?',
    options: ['1,1-Dichloroethane', '1,2-Dichloroethane', 'Ethyl chloride', 'None'],
    correctAnswer: '1,2-Dichloroethane',
    explanation: 'Halogens on adjacent carbons.'
  },
  {
    id: 'ch-al-53',
    text: 'Which is a "Geminal" dihalide?',
    options: ['1,2-Dibromoethane', '1,1-Dibromoethane', 'Propyl bromide', 'None'],
    correctAnswer: '1,1-Dibromoethane',
    explanation: 'Halogens on the same carbon.'
  },
  {
    id: 'ch-al-54',
    text: 'Hydroboration-Oxidation of alkenes gives _____ alcohols.',
    options: ['Markownikoff', 'Anti-Markownikoff', 'Tertiary only', 'None'],
    correctAnswer: 'Anti-Markownikoff',
    explanation: 'Important synthetic route.'
  },
  {
    id: 'ch-al-55',
    text: 'Lindlar\'s catalyst (Pd/BaSO4 poisoned with quinoline) is used to reduce alkynes to _____ alkenes.',
    options: ['Trans', 'Cis', 'Alkanes', 'None'],
    correctAnswer: 'Cis',
    explanation: 'Selective partial hydrogenation.'
  },
  {
    id: 'ch-al-56',
    text: 'Sodium in liquid ammonia reduces alkynes to _____ alkenes.',
    options: ['Cis', 'Trans', 'Alkanes', 'None'],
    correctAnswer: 'Trans',
    explanation: 'Birch reduction mechanism.'
  },
  {
    id: 'ch-al-57',
    text: 'Acidity of terminal alkynes is due to the high _____ character of sp hybridized carbon.',
    options: ['s (50%)', 'p (50%)', 'd', 'None'],
    correctAnswer: 's (50%)',
    explanation: 'Increases electronegativity and stabilizes the conjugate base.'
  },
  {
    id: 'ch-al-58',
    text: 'Which hydrocarbon does NOT react with ammoniacal cuprous chloride?',
    options: ['Ethyne', '1-Butyne', '2-Butyne', 'Propyne'],
    correctAnswer: '2-Butyne',
    explanation: 'It is a non-terminal alkyne (no acidic H).'
  },
  {
    id: 'ch-al-59',
    text: 'The major component of CNG used in vehicles is:',
    options: ['Ethane', 'Methane', 'Butane', 'None'],
    correctAnswer: 'Methane',
    explanation: 'Compressed Natural Gas.'
  },
  {
    id: 'ch-al-60',
    text: 'Combustion of Alkanes is highly _____ and used for domestic/industrial heating.',
    options: ['Endothermic', 'Exothermic', 'Slow', 'None'],
    correctAnswer: 'Exothermic',
    explanation: 'Releases large amount of heat.'
  },
  {
    id: 'ch-al-61',
    text: 'The boiling point of n-Butane is _____ than Iso-butane.',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Straight chains have greater surface area and stronger Van der Waals forces.'
  },
  {
    id: 'ch-al-62',
    text: 'Which is a "Terminal" alkyne?',
    options: ['2-Pentyne', '3-Hexyne', '1-Butyne', 'None'],
    correctAnswer: '1-Butyne',
    explanation: 'Triple bond is at the end of the chain.'
  },
  {
    id: 'ch-al-63',
    text: 'Ethylene oxide (Epoxide) is formed by the reaction of ethylene with _____ in the presence of silver catalyst.',
    options: ['Water', 'Air/Oxygen', 'Ozone', 'None'],
    correctAnswer: 'Air/Oxygen',
    explanation: 'Industrial production.'
  },
  {
    id: 'ch-al-64',
    text: 'Reaction of alkenes with cold dil. KMnO4 produces:',
    options: ['Acids', 'Diols/Glycols', 'Aldehydes', 'None'],
    correctAnswer: 'Diols/Glycols',
    explanation: 'Hydroxylation reaction.'
  },
  {
    id: 'ch-al-65',
    text: 'Markownikoff\'s rule: The negative part of the reagent adds to the carbon having _____ hydrogen atoms.',
    options: ['More', 'Fewer', 'Equal', 'None'],
    correctAnswer: 'Fewer',
    explanation: 'Standard rule for polar addition.'
  },
  {
    id: 'ch-al-66',
    text: 'Carbon black is used in the manufacture of _____ and _____.',
    options: ['Soap, Glass', 'Rubber tires, Inks', 'Cement, Steel', 'None'],
    correctAnswer: 'Rubber tires, Inks',
    explanation: 'Obtained by incomplete combustion of methane.'
  },
  {
    id: 'ch-al-67',
    text: 'The stability of carbocations follows the order:',
    options: ['1° > 2° > 3°', '3° > 2° > 1°', 'All same', 'None'],
    correctAnswer: '3° > 2° > 1°',
    explanation: 'Tertiary is most stable due to inductive effect and hyperconjugation.'
  },
  {
    id: 'ch-al-68',
    text: 'The bond angle in sp3 hybridization is _____ while in sp2 it is _____.',
    options: ['120, 109.5', '109.5, 120', '180, 120', 'None'],
    correctAnswer: '109.5, 120',
    explanation: 'Geometric consequence of hybridization.'
  },
  {
    id: 'ch-al-69',
    text: 'Which gas was used as an anesthetic in the past?',
    options: ['Ethane', 'Ethylene', 'Acetylene', 'None'],
    correctAnswer: 'Ethylene',
    explanation: 'Used as an inhalational anesthetic.'
  },
  {
    id: 'ch-al-70',
    text: 'Addition of HOCl to ethene gives:',
    options: ['Ethyl chloride', 'Ethylene chlorohydrin', 'Ethylene glycol', 'None'],
    correctAnswer: 'Ethylene chlorohydrin',
    explanation: 'HOCl adds as OH- and Cl+.'
  },
  {
    id: 'ch-al-71',
    text: 'Halogenation of Alkanes is a _____ chain reaction.',
    options: ['Ionic', 'Free radical', 'Nucleophilic', 'None'],
    correctAnswer: 'Free radical',
    explanation: 'Driven by UV light or heat.'
  },
  {
    id: 'ch-al-72',
    text: 'The presence of a lone pair on a nucleophile allows it to _____ a pair of electrons.',
    options: ['Accept', 'Donate', 'Lose', 'None'],
    correctAnswer: 'Donate',
    explanation: 'Definition of a nucleophile.'
  },
  {
    id: 'ch-al-73',
    text: 'Acidic nature of terminal alkynes can be used to _____ them from other hydrocarbons.',
    options: ['Oxidize', 'Identify/Separate', 'Reduce', 'None'],
    correctAnswer: 'Identify/Separate',
    explanation: 'Formation of solid acetylides.'
  },
  {
    id: 'ch-al-74',
    text: 'Regeneration of acetylene from silver acetylide is done by adding:',
    options: ['NaOH', 'Dilute HNO3', 'Water', 'None'],
    correctAnswer: 'Dilute HNO3',
    explanation: 'Restores the alkyne.'
  },
  {
    id: 'ch-al-75',
    text: 'The hybridization of central carbon in an allene (C=C=C) is:',
    options: ['sp3', 'sp2', 'sp', 'None'],
    correctAnswer: 'sp',
    explanation: 'Bonded to two other carbons with double bonds.'
  },
  {
    id: 'ch-al-76',
    text: 'Number of σ and π bonds in Ethyne molecule:',
    options: ['3 σ, 2 π', '2 σ, 3 π', '5 σ, 0 π', 'None'],
    correctAnswer: '3 σ, 2 π',
    explanation: 'H-C≡C-H.'
  },
  {
    id: 'ch-al-77',
    text: 'Number of σ and π bonds in Ethene molecule:',
    options: ['4 σ, 1 π', '5 σ, 1 π', '6 σ, 0 π', 'None'],
    correctAnswer: '5 σ, 1 π',
    explanation: 'C2H4 structure.'
  },
  {
    id: 'ch-al-78',
    text: 'Which is used as a propellant in aerosol sprays?',
    options: ['Methane', 'Propane and Butane (LPG)', 'Ethane', 'None'],
    correctAnswer: 'Propane and Butane (LPG)',
    explanation: 'Clean and easily liquefied.'
  },
  {
    id: 'ch-al-79',
    text: 'Alkanes are _____ in water.',
    options: ['Highly soluble', 'Insoluble', 'Sparingly soluble', 'None'],
    correctAnswer: 'Insoluble',
    explanation: 'Non-polar nature.'
  },
  {
    id: 'ch-al-80',
    text: 'Alkanes are _____ than water.',
    options: ['Denser', 'Less dense', 'Equally dense', 'None'],
    correctAnswer: 'Less dense',
    explanation: 'They float on water.'
  },
  {
    id: 'ch-al-81',
    text: 'Substitution reaction: R-H + X2 -> ?',
    options: ['R-X + HX', 'R-X2', 'R-R + H2', 'None'],
    correctAnswer: 'R-X + HX',
    explanation: 'General halogenation of alkanes.'
  },
  {
    id: 'ch-al-82',
    text: 'The functional group of Alkynes is _____ bond.',
    options: ['Single', 'Double', 'Triple', 'None'],
    correctAnswer: 'Triple',
    explanation: 'sp hybridized carbons.'
  },
  {
    id: 'ch-al-83',
    text: 'Alkynes react with _____ to form higher alkanes.',
    options: ['O2', 'H2 with catalyst', 'Cl2', 'None'],
    correctAnswer: 'H2 with catalyst',
    explanation: 'Complete hydrogenation.'
  },
  {
    id: 'ch-al-84',
    text: 'Ozonolysis of Acetylene followed by hydrolysis gives:',
    options: ['Formic acid', 'Glyoxal', 'Glyoxalic acid', 'All of above'],
    correctAnswer: 'Glyoxal',
    explanation: 'Final product after decomposition of ozonide.'
  },
  {
    id: 'ch-al-85',
    text: 'Which hydrocarbon is more acidic?',
    options: ['Ethane', 'Ethene', 'Ethyne', 'Propane'],
    correctAnswer: 'Ethyne',
    explanation: 'Order: Alkyne > Alkene > Alkane.'
  },
  {
    id: 'ch-al-86',
    text: 'Acidity of terminal alkyne is _____ than water.',
    options: ['More', 'Less', 'Same', 'None'],
    correctAnswer: 'Less',
    explanation: 'Water is a stronger acid than acetylene.'
  },
  {
    id: 'ch-al-87',
    text: 'Acidity of terminal alkyne is _____ than ammonia.',
    options: ['More', 'Less', 'Same', 'None'],
    correctAnswer: 'More',
    explanation: 'Order: H2O > C2H2 > NH3.'
  },
  {
    id: 'ch-al-88',
    text: 'Alkanes are found in _____ and _____ of insects.',
    options: ['Wings, Legs', 'Waxy coatings, Pheromones', 'Stomach, Blood', 'None'],
    correctAnswer: 'Waxy coatings, Pheromones',
    explanation: 'Biological role.'
  },
  {
    id: 'ch-al-89',
    text: 'Which alkane is known as "Gasoline" or "Petrol" component?',
    options: ['Methane', 'Iso-octane', 'Hexane', 'None'],
    correctAnswer: 'Iso-octane',
    explanation: 'High octane fuel.'
  },
  {
    id: 'ch-al-90',
    text: 'The C-H bond in Alkanes is non-polar because the electronegativity of C and H is:',
    options: ['Very different', 'Nearly same (2.5 vs 2.1)', 'Equal', 'None'],
    correctAnswer: 'Nearly same (2.5 vs 2.1)',
    explanation: 'Reason for low reactivity towards polar reagents.'
  },
  {
    id: 'ch-al-91',
    text: 'Which reaction is used to lengthen the carbon chain?',
    options: ['Cracking', 'Wurtz reaction', 'Substitution', 'None'],
    correctAnswer: 'Wurtz reaction',
    explanation: 'Combines two alkyl groups.'
  },
  {
    id: 'ch-al-92',
    text: 'Halogenation of Alkanes is _____.',
    options: ['Exothermic', 'Endothermic', 'Neutral', 'None'],
    correctAnswer: 'Exothermic',
    explanation: 'Energy is released.'
  },
  {
    id: 'ch-al-93',
    text: 'The reaction of Ethylene with cold alkaline KMnO4 is also called _____ test.',
    options: ['Lucas', 'Baeyer\'s', 'Fehling\'s', 'None'],
    correctAnswer: 'Baeyer\'s',
    explanation: 'Used for detection of double bond.'
  },
  {
    id: 'ch-al-94',
    text: 'Which is a "Polymer"?',
    options: ['Methane', 'Ethene', 'Polyethylene', 'Acetylene'],
    correctAnswer: 'Polyethylene',
    explanation: 'Formed from many ethene units.'
  },
  {
    id: 'ch-al-95',
    text: 'Acetylene on passing through hot copper tube at 300°C gives:',
    options: ['Cyclohexane', 'Benzene', 'Naphthalene', 'None'],
    correctAnswer: 'Benzene',
    explanation: 'Cyclic trimerization.'
  },
  {
    id: 'ch-al-96',
    text: 'The reaction CH≡CH + H2O -> CH3CHO requires catalyst:',
    options: ['H2SO4', 'HgSO4/H2SO4', 'Ni', 'None'],
    correctAnswer: 'HgSO4/H2SO4',
    explanation: 'Specific for alkyne hydration.'
  },
  {
    id: 'ch-al-97',
    text: 'Vinyl group is:',
    options: ['CH2=CH-', 'CH3-CH2-', 'CH≡C-', 'None'],
    correctAnswer: 'CH2=CH-',
    explanation: 'Unsaturated substituent.'
  },
  {
    id: 'ch-al-98',
    text: 'Allyl group is:',
    options: ['CH2=CH-', 'CH2=CH-CH2-', 'CH3-CH=CH-', 'None'],
    correctAnswer: 'CH2=CH-CH2-',
    explanation: 'Important in organic nomenclature.'
  },
  {
    id: 'ch-al-99',
    text: 'Which hydrocarbon is most dense?',
    options: ['Methane', 'Ethane', 'Propane', 'Butane'],
    correctAnswer: 'Butane',
    explanation: 'Density increases with molecular mass in a homologous series.'
  },
  {
    id: 'ch-al-100',
    text: 'Aliphatic hydrocarbons are generally _____ compounds.',
    options: ['Ionic', 'Non-polar covalent', 'Metallic', 'None'],
    correctAnswer: 'Non-polar covalent',
    explanation: 'Basis for their solubility and reactivity properties.'
  }
];
