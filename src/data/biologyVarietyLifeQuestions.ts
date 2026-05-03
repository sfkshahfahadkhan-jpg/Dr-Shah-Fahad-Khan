import { Question } from '../types';

export const BIOLOGY_VARIETY_LIFE_QUIZ: Question[] = [
  {
    id: 'bio-var-1',
    text: 'Who first discovered viruses while studying tobacco mosaic disease in 1892?',
    options: ['Louis Pasteur', 'Dmitri Ivanowsky', 'Martinus Beijerinck', 'Wendell Stanley'],
    correctAnswer: 'Dmitri Ivanowsky',
    explanation: 'Ivanowsky showed that the causal agent of tobacco mosaic disease could pass through porcelain filters that trap bacteria.'
  },
  {
    id: 'bio-var-2',
    text: 'The term "Virus" is derived from a Latin word meaning:',
    options: ['Life', 'Poison', 'Small', 'Hidden'],
    correctAnswer: 'Poison',
    explanation: 'Virus literally means venom or poison.'
  },
  {
    id: 'bio-var-3',
    text: 'A complete, mature, and infectious virus particle is called a:',
    options: ['Capsid', 'Virion', 'Prion', 'Viroid'],
    correctAnswer: 'Virion',
    explanation: 'A virion consists of a nucleic acid core and a protein coat (capsid).'
  },
  {
    id: 'bio-var-4',
    text: 'Viruses are considered obligate intracellular parasites because they:',
    options: ['Can only live in water', 'Can only reproduce inside a living host cell', 'Only infect animals', 'Do not have DNA'],
    correctAnswer: 'Can only reproduce inside a living host cell',
    explanation: 'Viruses lack metabolic machinery and must hijack a host cell to replicate.'
  },
  {
    id: 'bio-var-5',
    text: 'The protein coat of a virus is called the:',
    options: ['Envelope', 'Capsid', 'Genome', 'Protomere'],
    correctAnswer: 'Capsid',
    explanation: 'The capsid is made of protein subunits called capsomeres.'
  },
  {
    id: 'bio-var-6',
    text: 'Bacteriophages are viruses that infect:',
    options: ['Plants', 'Animals', 'Bacteria', 'Fungi'],
    correctAnswer: 'Bacteria',
    explanation: 'Phages are highly specific to bacterial hosts.'
  },
  {
    id: 'bio-var-7',
    text: 'The lifecycle of a bacteriophage that ends in the death and lysis of the host cell is the:',
    options: ['Lysogenic cycle', 'Lytic cycle', 'Krebs cycle', 'Calvin cycle'],
    correctAnswer: 'Lytic cycle',
    explanation: 'In the lytic cycle, the phage replicates and bursts the host cell to release new virions.'
  },
  {
    id: 'bio-var-8',
    text: 'In the lysogenic cycle, the viral DNA integrates into the bacterial chromosome and is called a:',
    options: ['Virion', 'Prophage', 'Provirus', 'Capsid'],
    correctAnswer: 'Prophage',
    explanation: 'A prophage is the latent form of a phage genome within the host.'
  },
  {
    id: 'bio-var-9',
    text: 'Which of the following is caused by a virus?',
    options: ['Tuberculosis', 'Influenza', 'Cholera', 'Typhoid'],
    correctAnswer: 'Influenza',
    explanation: 'Flu is caused by the influenza virus; the others are bacterial diseases.'
  },
  {
    id: 'bio-var-10',
    text: 'HIV (Human Immunodeficiency Virus) causes AIDS by attacking:',
    options: ['Red blood cells', 'Helper T-lymphocytes', 'Nerve cells', 'Muscle cells'],
    correctAnswer: 'Helper T-lymphocytes',
    explanation: 'HIV specifically targets CD4+ T-cells, weakening the immune system.'
  },
  {
    id: 'bio-var-11',
    text: 'Hepatitis is the inflammation of the:',
    options: ['Heart', 'Lungs', 'Liver', 'Kidneys'],
    correctAnswer: 'Liver',
    explanation: 'Viral hepatitis (A, B, C, D, E) is a major cause of liver disease.'
  },
  {
    id: 'bio-var-12',
    text: 'Which type of hepatitis is transmitted through contaminated food or water?',
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D'],
    correctAnswer: 'Hepatitis A',
    explanation: 'Hepatitis A and E are primarily fecal-oral; B and C are blood-borne.'
  },
  {
    id: 'bio-var-13',
    text: 'Prions are infectious particles composed only of:',
    options: ['DNA', 'RNA', 'Protein', 'Lipids'],
    correctAnswer: 'Protein',
    explanation: 'Prions are misfolded proteins that cause neurodegenerative diseases like Mad Cow Disease.'
  },
  {
    id: 'bio-var-14',
    text: 'Viroids are infectious particles composed only of:',
    options: ['DNA', 'RNA', 'Protein', 'Carbohydrates'],
    correctAnswer: 'RNA',
    explanation: 'Viroids are small, circular RNA molecules that primarily infect plants.'
  },
  {
    id: 'bio-var-15',
    text: 'The system of naming organisms using two names (Genus and Species) is:',
    options: ['Trinomial nomenclature', 'Binomial nomenclature', 'Polynomial nomenclature', 'Mononomial nomenclature'],
    correctAnswer: 'Binomial nomenclature',
    explanation: 'Developed by Carolus Linnaeus.'
  },
  {
    id: 'bio-var-16',
    text: 'Which of the following is the correct scientific name for a frog?',
    options: ['Rana Tigrina', 'Rana tigrina', 'rana Tigrina', 'rana tigrina'],
    correctAnswer: 'Rana tigrina',
    explanation: 'Genus starts with capital; species starts with lowercase; both italicized or underlined.'
  },
  {
    id: 'bio-var-17',
    text: 'The highest (most inclusive) rank in the hierarchy of classification is:',
    options: ['Kingdom', 'Phylum', 'Class', 'Domain'],
    correctAnswer: 'Kingdom',
    explanation: 'In the 5-kingdom system, Kingdom is the highest level (though modern taxonomy uses Domains).'
  },
  {
    id: 'bio-var-18',
    text: 'The Five Kingdom Classification system was proposed by:',
    options: ['Robert Whittaker', 'Carl Woese', 'Carolus Linnaeus', 'Ernst Haeckel'],
    correctAnswer: 'Robert Whittaker',
    explanation: 'Whittaker proposed the 5 kingdoms in 1969.'
  },
  {
    id: 'bio-var-19',
    text: 'Which kingdom includes all prokaryotic organisms?',
    options: ['Monera', 'Protista', 'Fungi', 'Plantae'],
    correctAnswer: 'Monera',
    explanation: 'Kingdom Monera (or Prokaryotae) consists of bacteria and cyanobacteria.'
  },
  {
    id: 'bio-var-20',
    text: 'Organisms that obtain energy by decomposing organic matter are:',
    options: ['Autotrophs', 'Saprophyte/Decomposers', 'Parasites', 'Herbivores'],
    correctAnswer: 'Saprophyte/Decomposers',
    explanation: 'Fungi and many bacteria are saprophytes.'
  },
  {
    id: 'bio-var-21',
    text: 'Which kingdom was added by Lynn Margulis and Karlene Schwartz to include all eukaryotic organisms that are not plants, animals, or fungi?',
    options: ['Monera', 'Protista', 'Archaea', 'Bacteria'],
    correctAnswer: 'Protista',
    explanation: 'Margulis and Schwartz modified Whittaker’s system.'
  },
  {
    id: 'bio-var-22',
    text: 'Smallpox is caused by:',
    options: ['Variola virus', 'Varicella virus', 'Rhinovirus', 'Paramyxovirus'],
    correctAnswer: 'Variola virus',
    explanation: 'Smallpox was a devastating disease eradicated globally in 1980.'
  },
  {
    id: 'bio-var-23',
    text: 'Polio virus is transmitted primarily through:',
    options: ['Airborne droplets', 'Contaminated food and water (fecal-oral)', 'Sexual contact', 'Blood transfusion'],
    correctAnswer: 'Contaminated food and water (fecal-oral)',
    explanation: 'Polio is an enteric virus.'
  },
  {
    id: 'bio-var-24',
    text: 'The "tail" of a bacteriophage is used for:',
    options: ['Movement', 'Attachment to host cell', 'Energy production', 'Protein synthesis'],
    correctAnswer: 'Attachment to host cell',
    explanation: 'The tail fibers recognize and bind to specific receptors on the bacterial surface.'
  },
  {
    id: 'bio-var-25',
    text: 'The enzyme "Reverse Transcriptase" is found in:',
    options: ['Bacteriophages', 'Retroviruses', 'Plant viruses', 'Adenoviruses'],
    correctAnswer: 'Retroviruses',
    explanation: 'Retroviruses (like HIV) use this enzyme to copy their RNA genome into DNA.'
  },
  {
    id: 'bio-var-26',
    text: 'Which disease is characterized by painful swelling of the parotid glands?',
    options: ['Measles', 'Mumps', 'Influenza', 'Herpes'],
    correctAnswer: 'Mumps',
    explanation: 'Mumps is a viral infection primarily affecting the salivary glands.'
  },
  {
    id: 'bio-var-27',
    text: 'Herpes simplex virus causes:',
    options: ['Cold sores', 'Chickenpox', 'Shingles', 'Genital warts'],
    correctAnswer: 'Cold sores',
    explanation: 'HSV-1 typically causes oral herpes (cold sores).'
  },
  {
    id: 'bio-var-28',
    text: 'The nucleic acid core of a virus can be:',
    options: ['DNA only', 'RNA only', 'Either DNA or RNA', 'Both DNA and RNA'],
    correctAnswer: 'Either DNA or RNA',
    explanation: 'A virus contains either DNA or RNA, but never both.'
  },
  {
    id: 'bio-var-29',
    text: 'Classification based on evolutionary relationships is called:',
    options: ['Phenetics', 'Phylogeny', 'Morphology', 'Anatomy'],
    correctAnswer: 'Phylogeny',
    explanation: 'Phylogenetic classification reflects the evolutionary history of organisms.'
  },
  {
    id: 'bio-var-30',
    text: 'Which kingdom contains organisms that are multicellular, eukaryotic, and ingestive heterotrophs?',
    options: ['Plantae', 'Fungi', 'Animalia', 'Protista'],
    correctAnswer: 'Animalia',
    explanation: 'Animals are multicellular, lack cell walls, and eat other organisms.'
  }
];
