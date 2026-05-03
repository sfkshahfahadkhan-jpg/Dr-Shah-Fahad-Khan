import { Question } from '../types';

export const BIOLOGY_ENZYMES_QUIZ: Question[] = [
  {
    id: 'bio-enz-1',
    text: 'Enzymes are biologically active molecules made of:',
    options: ['Lipids', 'Carbohydrates', 'Proteins', 'Nucleic acids'],
    correctAnswer: 'Proteins',
    explanation: 'Almost all enzymes are globular proteins.'
  },
  {
    id: 'bio-enz-2',
    text: 'The non-protein part of an enzyme which is essential for its activity is called:',
    options: ['Apoenzyme', 'Cofactor', 'Holozyme', 'Substrate'],
    correctAnswer: 'Cofactor',
    explanation: 'Cofactors are non-protein helpers for catalytic activity.'
  },
  {
    id: 'bio-enz-3',
    text: 'A cofactor that is covalently or tightly bound to the enzyme is known as a:',
    options: ['Coenzyme', 'Prosthetic group', 'Activator', 'Apoenzyme'],
    correctAnswer: 'Prosthetic group',
    explanation: 'Prosthetic groups are permanently attached to the enzyme.'
  },
  {
    id: 'bio-enz-4',
    text: 'If the cofactor is a detachable organic molecule (like vitamins), it is called a:',
    options: ['Prosthetic group', 'Coenzyme', 'Activator', 'Apoenzyme'],
    correctAnswer: 'Coenzyme',
    explanation: 'Coenzymes are non-protein organic molecules that are loosely attached.'
  },
  {
    id: 'bio-enz-5',
    text: 'An enzyme without its cofactor is referred to as an:',
    options: ['Holoenzyme', 'Apoenzyme', 'Coenzyme', 'Proenzyme'],
    correctAnswer: 'Apoenzyme',
    explanation: 'Apoenzyme is the protein part only; Holoenzyme = Apoenzyme + Cofactor.'
  },
  {
    id: 'bio-enz-6',
    text: 'The specific region of an enzyme where the substrate binds is the:',
    options: ['Allosteric site', 'Active site', 'Binding site', 'Catalytic site'],
    correctAnswer: 'Active site',
    explanation: 'The active site is a 3D pocket that matches the substrate shape.'
  },
  {
    id: 'bio-enz-7',
    text: 'The "Lock and Key" model of enzyme action was proposed by:',
    options: ['Emil Fischer', 'Koshland', 'Pasteur', 'Watson'],
    correctAnswer: 'Emil Fischer',
    explanation: 'Emil Fischer proposed the rigid Lock and Key model in 1894.'
  },
  {
    id: 'bio-enz-8',
    text: 'The "Induced Fit" model suggests that the active site is:',
    options: ['Rigid', 'Flexible and changes shape slightly', 'Present only when needed', 'Made of lipids'],
    correctAnswer: 'Flexible and changes shape slightly',
    explanation: 'Koshland proposed that the substrate induces a conformational change in the enzyme.'
  },
  {
    id: 'bio-enz-9',
    text: 'Enzymes lower the _____ required for a reaction to proceed.',
    options: ['Kinetic energy', 'Activation energy', 'Potential energy', 'Thermal energy'],
    correctAnswer: 'Activation energy',
    explanation: 'Enzymes speed up reactions by lowering the energy barrier.'
  },
  {
    id: 'bio-enz-10',
    text: 'The temperature at which an enzyme works at its maximum rate is called its:',
    options: ['Critical temperature', 'Optimum temperature', 'Absolute temperature', 'Boiling point'],
    correctAnswer: 'Optimum temperature',
    explanation: 'For human enzymes, the optimum temperature is usually 37°C.'
  },
  {
    id: 'bio-enz-11',
    text: 'Increasing the temperature beyond the optimum leads to:',
    options: ['Faster reaction', 'Enzyme denaturation', 'Substrate inhibition', 'No change'],
    correctAnswer: 'Enzyme denaturation',
    explanation: 'Excessive heat breaks the hydrogen bonds that maintain the enzyme’s 3D shape.'
  },
  {
    id: 'bio-enz-12',
    text: 'Which enzyme works best at a very acidic pH (around 2.0)?',
    options: ['Trypsin', 'Pepsin', 'Amylase', 'Lipase'],
    correctAnswer: 'Pepsin',
    explanation: 'Pepsin is a stomach enzyme that requires an acidic environment.'
  },
  {
    id: 'bio-enz-13',
    text: 'At high substrate concentrations, the rate of reaction becomes constant because:',
    options: ['The enzyme is used up', 'All active sites are occupied (saturated)', 'The substrate is exhausted', 'The pH changes'],
    correctAnswer: 'All active sites are occupied (saturated)',
    explanation: 'This is called saturation; adding more substrate won’t speed up the reaction.'
  },
  {
    id: 'bio-enz-14',
    text: 'A substance that binds to an enzyme and decreases its activity is an:',
    options: ['Activator', 'Inhibitor', 'Cofactor', 'Substrate'],
    correctAnswer: 'Inhibitor',
    explanation: 'Inhibitors can be competitive or non-competitive.'
  },
  {
    id: 'bio-enz-15',
    text: 'Competitive inhibitors resemble the _____ in structure.',
    options: ['Enzyme', 'Substrate', 'Product', 'Cofactor'],
    correctAnswer: 'Substrate',
    explanation: 'They compete for the same active site because they "look like" the substrate.'
  },
  {
    id: 'bio-enz-16',
    text: 'Cyanide is an example of an irreversible inhibitor that blocks:',
    options: ['Cytochrome oxidase', 'Salivary amylase', 'DNA polymerase', 'Pepsin'],
    correctAnswer: 'Cytochrome oxidase',
    explanation: 'Cyanide binds to the iron in cytochrome oxidase, stopping cellular respiration.'
  },
  {
    id: 'bio-enz-17',
    text: 'Which type of inhibitor binds to a site other than the active site?',
    options: ['Competitive inhibitor', 'Non-competitive inhibitor', 'Reversible inhibitor', 'Substrate analog'],
    correctAnswer: 'Non-competitive inhibitor',
    explanation: 'Non-competitive inhibitors bind to an allosteric site, changing the enzyme shape.'
  },
  {
    id: 'bio-enz-18',
    text: 'Succinate dehydrogenase is inhibited by Malonate. This is an example of:',
    options: ['Competitive inhibition', 'Non-competitive inhibition', 'Irreversible inhibition', 'Feedback inhibition'],
    correctAnswer: 'Competitive inhibition',
    explanation: 'Malonate is structurally similar to succinate.'
  },
  {
    id: 'bio-enz-19',
    text: 'Most enzymes in the human body have an optimum pH around:',
    options: ['2-3', '7-8', '12-14', '1-2'],
    correctAnswer: '7-8',
    explanation: 'Most physiological processes occur near neutral pH.'
  },
  {
    id: 'bio-enz-20',
    text: 'The concentration of enzyme is _____ proportional to the rate of reaction (assuming substrate is unlimited).',
    options: ['Inversely', 'Directly', 'Not', 'Logarithmically'],
    correctAnswer: 'Directly',
    explanation: 'More enzyme means more active sites, thus a faster reaction.'
  },
  {
    id: 'bio-enz-21',
    text: 'Enzymes are highly specific. This means:',
    options: ['One enzyme can catalyze many different types of reactions', 'One enzyme only acts on a specific substrate', 'Enzymes only work in the dark', 'Enzymes are only found in animals'],
    correctAnswer: 'One enzyme only acts on a specific substrate',
    explanation: 'Specificity is due to the unique shape of the active site.'
  },
  {
    id: 'bio-enz-22',
    text: 'The term "Enzyme" was coined by:',
    options: ['Kuhne', 'Pasteur', 'Sumner', 'Buchner'],
    correctAnswer: 'Kuhne',
    explanation: 'Wilhelm Kuhne first used the term enzyme in 1878.'
  },
  {
    id: 'bio-enz-23',
    text: 'Which of the following is an inorganic cofactor (activator)?',
    options: ['NAD', 'FAD', 'Mg2+', 'ATP'],
    correctAnswer: 'Mg2+',
    explanation: 'Metal ions like Mg2+, Fe2+, Cu2+ often act as activators.'
  },
  {
    id: 'bio-enz-24',
    text: 'The small part of the active site that actually breaks the bonds of the substrate is the:',
    options: ['Binding site', 'Catalytic site', 'Allosteric site', 'Prosthetic site'],
    correctAnswer: 'Catalytic site',
    explanation: 'The binding site holds the substrate; the catalytic site performs the reaction.'
  },
  {
    id: 'bio-enz-25',
    text: 'Sulfa drugs act as competitive inhibitors for bacteria by mimicking:',
    options: ['PABA', 'Vitamin C', 'Glucose', 'Penicillin'],
    correctAnswer: 'PABA',
    explanation: 'Sulfa drugs compete with PABA for the enzyme involved in folic acid synthesis.'
  },
  {
    id: 'bio-enz-26',
    text: 'Which enzyme is used in the laundry industry to remove protein stains?',
    options: ['Lipase', 'Protease', 'Amylase', 'Cellulase'],
    correctAnswer: 'Protease',
    explanation: 'Proteases break down proteins into soluble peptides.'
  },
  {
    id: 'bio-enz-27',
    text: 'An enzyme that works inside the cell where it was produced is called an:',
    options: ['Exoenzyme', 'Endoenzyme', 'Apoenzyme', 'Holoenzyme'],
    correctAnswer: 'Endoenzyme',
    explanation: 'Example: Respiratory enzymes in mitochondria.'
  },
  {
    id: 'bio-enz-28',
    text: 'The optimum pH for Trypsin (found in the small intestine) is:',
    options: ['2.0', '7.0', '8.0 - 9.0', '5.5'],
    correctAnswer: '8.0 - 9.0',
    explanation: 'Trypsin requires an alkaline environment provided by bile and pancreatic juice.'
  },
  {
    id: 'bio-enz-29',
    text: 'A reaction that occurs without an enzyme requires _____ activation energy.',
    options: ['Less', 'More', 'Zero', 'The same'],
    correctAnswer: 'More',
    explanation: 'Enzymes provide an alternative pathway with lower activation energy.'
  },
  {
    id: 'bio-enz-30',
    text: 'Enzymes remain _____ at the end of the reaction.',
    options: ['Destroyed', 'Unchanged', 'Part of the product', 'Inactivated'],
    correctAnswer: 'Unchanged',
    explanation: 'As catalysts, enzymes are not consumed and can be reused.'
  }
];
