import { Question } from '../types';

export const BIOLOGY_DNA_QUIZ: Question[] = [
  {
    id: 'bio-dna-1',
    text: 'Chromosomes are made of _____ and _____.',
    options: ['DNA, RNA', 'DNA, Proteins (Histones)', 'RNA, Lipids', 'Proteins, Carbohydrates'],
    correctAnswer: 'DNA, Proteins (Histones)',
    explanation: 'Histones help in packaging the long DNA molecules.'
  },
  {
    id: 'bio-dna-2',
    text: 'The fundamental unit of chromosome packaging is the:',
    options: ['Gene', 'Nucleosome', 'Centromere', 'Telomere'],
    correctAnswer: 'Nucleosome',
    explanation: 'Consists of DNA wrapped around a histone octamer.'
  },
  {
    id: 'bio-dna-3',
    text: 'Highly condensed, transcriptionally inactive chromatin is called:',
    options: ['Euchromatin', 'Heterochromatin', 'Prochromatin', 'None'],
    correctAnswer: 'Heterochromatin',
    explanation: 'Stains deeply and is tightly packed.'
  },
  {
    id: 'bio-dna-4',
    text: 'Less condensed, transcriptionally active chromatin is called:',
    options: ['Euchromatin', 'Heterochromatin', 'Nucleoplasm', 'Cytoplasm'],
    correctAnswer: 'Euchromatin',
    explanation: 'Available for transcription.'
  },
  {
    id: 'bio-dna-5',
    text: 'DNA was identified as the hereditary material by experiments of:',
    options: ['Griffith', 'Avery, MacLeod, and McCarty', 'Hershey and Chase', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'A series of discoveries led to this conclusion.'
  },
  {
    id: 'bio-dna-6',
    text: 'The Watson-Crick model of DNA is a:',
    options: ['Single strand', 'Double helix', 'Triple helix', 'Circle'],
    correctAnswer: 'Double helix',
    explanation: 'Two antiparallel strands held by hydrogen bonds.'
  },
  {
    id: 'bio-dna-7',
    text: 'In DNA, Adenine (A) always pairs with _____ and Guanine (G) with _____.',
    options: ['Cytosine, Thymine', 'Thymine, Cytosine', 'Uracil, Cytosine', 'Thymine, Uracil'],
    correctAnswer: 'Thymine, Cytosine',
    explanation: 'A-T (2 hydrogen bonds), G-C (3 hydrogen bonds).'
  },
  {
    id: 'bio-dna-8',
    text: 'The backbone of the DNA molecule is made of _____ and _____.',
    options: ['Bases, Sugars', 'Sugar (Deoxyribose), Phosphate', 'Phosphate, Bases', 'Sugars, Proteins'],
    correctAnswer: 'Sugar (Deoxyribose), Phosphate',
    explanation: 'Connected by phosphodiester bonds.'
  },
  {
    id: 'bio-dna-9',
    text: 'DNA replication is _____ in nature.',
    options: ['Conservative', 'Semiconservative', 'Dispersive', 'Random'],
    correctAnswer: 'Semiconservative',
    explanation: 'Each new DNA molecule consists of one old and one new strand.'
  },
  {
    id: 'bio-dna-10',
    text: 'The enzyme that unwinds the DNA double helix during replication is:',
    options: ['DNA Polymerase', 'Helicase', 'Ligase', 'Primase'],
    correctAnswer: 'Helicase',
    explanation: 'Breaks hydrogen bonds between bases.'
  },
  {
    id: 'bio-dna-11',
    text: 'The enzyme that adds new nucleotides to the growing DNA strand is:',
    options: ['DNA Polymerase', 'RNA Polymerase', 'Helicase', 'Topoisomerase'],
    correctAnswer: 'DNA Polymerase',
    explanation: 'Only works in the 5\' to 3\' direction.'
  },
  {
    id: 'bio-dna-12',
    text: 'Okazaki fragments are formed on the _____ during DNA replication.',
    options: ['Leading strand', 'Lagging strand', 'Both strands', 'Neither'],
    correctAnswer: 'Lagging strand',
    explanation: 'Synthesized discontinuously in small pieces.'
  },
  {
    id: 'bio-dna-13',
    text: 'The enzyme that joins Okazaki fragments together is:',
    options: ['Polymerase', 'Ligase', 'Helicase', 'Nuclease'],
    correctAnswer: 'Ligase',
    explanation: 'Seals the sugar-phosphate backbone.'
  },
  {
    id: 'bio-dna-14',
    text: 'The "Central Dogma" of molecular biology is:',
    options: ['DNA -> Protein -> RNA', 'DNA -> RNA -> Protein', 'RNA -> DNA -> Protein', 'Protein -> DNA -> RNA'],
    correctAnswer: 'DNA -> RNA -> Protein',
    explanation: 'Flow of genetic information.'
  },
  {
    id: 'bio-dna-15',
    text: 'The process of synthesizing RNA from a DNA template is:',
    options: ['Translation', 'Transcription', 'Replication', 'Mutation'],
    correctAnswer: 'Transcription',
    explanation: 'Occurs in the nucleus in eukaryotes.'
  },
  {
    id: 'bio-dna-16',
    text: 'The process of synthesizing protein from an mRNA template is:',
    options: ['Transcription', 'Translation', 'Translocation', 'Induction'],
    correctAnswer: 'Translation',
    explanation: 'Occurs on ribosomes in the cytoplasm.'
  },
  {
    id: 'bio-dna-17',
    text: 'The three-base sequence on mRNA that codes for an amino acid is a:',
    options: ['Anticodon', 'Codon', 'Intron', 'Exon'],
    correctAnswer: 'Codon',
    explanation: 'Part of the genetic code.'
  },
  {
    id: 'bio-dna-18',
    text: 'The three-base sequence on tRNA that pairs with the mRNA codon is the:',
    options: ['Codon', 'Anticodon', 'Promoter', 'Terminator'],
    correctAnswer: 'Anticodon',
    explanation: 'Ensures the correct amino acid is added.'
  },
  {
    id: 'bio-dna-19',
    text: 'Which nitrogenous base is found in RNA but NOT in DNA?',
    options: ['Adenine', 'Thymine', 'Uracil', 'Guanine'],
    correctAnswer: 'Uracil',
    explanation: 'Uracil pairs with Adenine in RNA.'
  },
  {
    id: 'bio-dna-20',
    text: 'The non-coding sequences of a gene that are removed during RNA splicing are:',
    options: ['Exons', 'Introns', 'Codons', 'Promoters'],
    correctAnswer: 'Introns',
    explanation: 'Exons are the coding sequences that are joined together.'
  },
  {
    id: 'bio-dna-21',
    text: 'The start codon for translation is usually:',
    options: ['UAA', 'UAG', 'AUG', 'UGA'],
    correctAnswer: 'AUG',
    explanation: 'Codes for the amino acid Methionine.'
  },
  {
    id: 'bio-dna-22',
    text: 'How many stop codons are there in the genetic code?',
    options: ['1', '3', '20', '64'],
    correctAnswer: '3',
    explanation: 'UAA, UAG, and UGA.'
  },
  {
    id: 'bio-dna-23',
    text: 'A permanent change in the DNA sequence is a:',
    options: ['Transcription', 'Mutation', 'Replication', 'Splicing'],
    correctAnswer: 'Mutation',
    explanation: 'Can be beneficial, neutral, or harmful.'
  },
  {
    id: 'bio-dna-24',
    text: 'Point mutation involves a change in _____ base pair(s).',
    options: ['One', 'Dozens', 'Hundreds', 'Whole chromosome'],
    correctAnswer: 'One',
    explanation: 'Example: Sickle cell anemia.'
  },
  {
    id: 'bio-dna-25',
    text: 'Chromosomal aberrations involve changes in _____ or _____ of chromosomes.',
    options: ['Color, Shape', 'Number, Structure', 'Length, Mass', 'None'],
    correctAnswer: 'Number, Structure',
    explanation: 'Includes deletions, duplications, inversions, and translocations.'
  },
  {
    id: 'bio-dna-26',
    text: 'Down syndrome (Trisomy 21) is an example of _____ mutation.',
    options: ['Gene', 'Chromosomal (Numerical)', 'Cytoplasmic', 'Silent'],
    correctAnswer: 'Chromosomal (Numerical)',
    explanation: 'Presence of an extra 21st chromosome.'
  },
  {
    id: 'bio-dna-27',
    text: 'The enzyme that prevents DNA from over-twisting during replication is:',
    options: ['Helicase', 'Topoisomerase (Gyrase)', 'Ligase', 'Polymerase'],
    correctAnswer: 'Topoisomerase (Gyrase)',
    explanation: 'Relieves torsional strain.'
  },
  {
    id: 'bio-dna-28',
    text: 'Telomeres are the protective caps at the ends of:',
    options: ['Genes', 'Chromosomes', 'Ribosomes', 'Mitochondria'],
    correctAnswer: 'Chromosomes',
    explanation: 'Prevent DNA from fraying or sticking to other chromosomes.'
  },
  {
    id: 'bio-dna-29',
    text: 'RNA Polymerase binds to a specific DNA sequence called the _____ to start transcription.',
    options: ['Promoter', 'Terminator', 'Operator', 'Enhancer'],
    correctAnswer: 'Promoter',
    explanation: 'Signals the start of a gene.'
  },
  {
    id: 'bio-dna-30',
    text: 'The "One Gene-One Enzyme" hypothesis was proposed by:',
    options: ['Mendel', 'Watson and Crick', 'Beadle and Tatum', 'Franklin'],
    correctAnswer: 'Beadle and Tatum',
    explanation: 'Later updated to "One gene-one polypeptide".'
  },
  {
    id: 'bio-dna-31',
    text: 'DNA strands are antiparallel, meaning one runs _____ and the other _____.',
    options: ['Up, Down', '5\' to 3\', 3\' to 5\'', 'Left, Right', 'Slow, Fast'],
    correctAnswer: '5\' to 3\', 3\' to 5\'',
    explanation: 'Refers to the carbon numbering of the sugar.'
  },
  {
    id: 'bio-dna-32',
    text: 'Which is a purine base?',
    options: ['Thymine', 'Cytosine', 'Adenine', 'Uracil'],
    correctAnswer: 'Adenine',
    explanation: 'Purines have double-ring structure (A and G).'
  },
  {
    id: 'bio-dna-33',
    text: 'Which is a pyrimidine base?',
    options: ['Adenine', 'Guanine', 'Cytosine', 'Uric acid'],
    correctAnswer: 'Cytosine',
    explanation: 'Pyrimidines have single-ring structure (C, T, and U).'
  },
  {
    id: 'bio-dna-34',
    text: 'The total amount of purines equals the total amount of pyrimidines in DNA. This is _____ rule.',
    options: ['Mendel\'s', 'Chargaff\'s', 'Darwin\'s', 'Hooke\'s'],
    correctAnswer: 'Chargaff\'s',
    explanation: 'A=T and G=C.'
  },
  {
    id: 'bio-dna-35',
    text: 'Rosalind Franklin\'s _____ data was crucial for determining DNA structure.',
    options: ['NMR', 'X-ray diffraction', 'Electron microscopy', 'Centrifugation'],
    correctAnswer: 'X-ray diffraction',
    explanation: 'Photo 51 showed the helical nature of DNA.'
  },
  {
    id: 'bio-dna-36',
    text: 'The Meselson-Stahl experiment proved that DNA replication is:',
    options: ['Conservative', 'Semiconservative', 'Non-conservative', 'Random'],
    correctAnswer: 'Semiconservative',
    explanation: 'Used heavy nitrogen isotopes (N15 and N14).'
  },
  {
    id: 'bio-dna-37',
    text: 'DNA Polymerase III has _____ activity to correct errors during replication.',
    options: ['Photolyase', 'Proofreading (Exonuclease)', 'Endonuclease', 'Ligase'],
    correctAnswer: 'Proofreading (Exonuclease)',
    explanation: 'Ensures high fidelity of replication.'
  },
  {
    id: 'bio-dna-38',
    text: 'RNA primer is synthesized by _____ and removed by _____.',
    options: ['Primase, DNA Polymerase I', 'Helicase, Ligase', 'Gyrase, Primase', 'None'],
    correctAnswer: 'Primase, DNA Polymerase I',
    explanation: 'DNA polymerase I replaces RNA with DNA.'
  },
  {
    id: 'bio-dna-39',
    text: 'In eukaryotes, transcription occurs in the _____ and translation in the _____.',
    options: ['Cytoplasm, Nucleus', 'Nucleus, Cytoplasm', 'Mitochondria, Nucleus', 'Ribosome, Golgi'],
    correctAnswer: 'Nucleus, Cytoplasm',
    explanation: 'Spatial separation allows for RNA processing.'
  },
  {
    id: 'bio-dna-40',
    text: 'mRNA stands for:',
    options: ['Middle RNA', 'Messenger RNA', 'Mass RNA', 'Mutated RNA'],
    correctAnswer: 'Messenger RNA',
    explanation: 'Carries the genetic message from DNA to ribosomes.'
  },
  {
    id: 'bio-dna-41',
    text: 'tRNA stands for:',
    options: ['Template RNA', 'Transfer RNA', 'Total RNA', 'Tiny RNA'],
    correctAnswer: 'Transfer RNA',
    explanation: 'Transfers amino acids to the ribosome.'
  },
  {
    id: 'bio-dna-42',
    text: 'rRNA is found in:',
    options: ['Nucleus only', 'Ribosomes', 'Lysosomes', 'Mitochondria only'],
    correctAnswer: 'Ribosomes',
    explanation: 'Plays a structural and catalytic role.'
  },
  {
    id: 'bio-dna-43',
    text: 'The "Wobble Hypothesis" explains why _____ can pair with more than one codon.',
    options: ['mRNA', 'tRNA', 'DNA', 'Ribosomes'],
    correctAnswer: 'tRNA',
    explanation: 'The third base of the anticodon is flexible.'
  },
  {
    id: 'bio-dna-44',
    text: 'Peptide bonds are formed between amino acids at the _____ site of the ribosome.',
    options: ['A', 'P', 'E', 'Z'],
    correctAnswer: 'P',
    explanation: 'Peptidyl site.'
  },
  {
    id: 'bio-dna-45',
    text: 'Polyribosome (Polysome) is a group of ribosomes translating the _____ mRNA simultaneously.',
    options: ['Different', 'Same', 'Circular', 'Mutated'],
    correctAnswer: 'Same',
    explanation: 'Increases protein production efficiency.'
  },
  {
    id: 'bio-dna-46',
    text: 'Mutagens are physical or chemical agents that cause:',
    options: ['Growth', 'Mutations', 'Cancer', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'UV light and tobacco smoke are examples.'
  },
  {
    id: 'bio-dna-47',
    text: 'A "Silent Mutation" is one that _____ change the amino acid sequence.',
    options: ['Does', 'Does not', 'Completely', 'Partially'],
    correctAnswer: 'Does not',
    explanation: 'Due to redundancy of the genetic code.'
  },
  {
    id: 'bio-dna-48',
    text: 'A "Missense Mutation" results in:',
    options: ['No change', 'One different amino acid', 'Stop codon', 'Frameshift'],
    correctAnswer: 'One different amino acid',
    explanation: 'Can change protein function.'
  },
  {
    id: 'bio-dna-49',
    text: 'A "Nonsense Mutation" results in a premature:',
    options: ['Start codon', 'Stop codon', 'Amino acid', 'Exon'],
    correctAnswer: 'Stop codon',
    explanation: 'Usually results in a non-functional protein.'
  },
  {
    id: 'bio-dna-50',
    text: 'A "Frameshift Mutation" is caused by _____ or _____ of nucleotides.',
    options: ['Substitution', 'Inversion', 'Insertion, Deletion', 'Translocation'],
    correctAnswer: 'Insertion, Deletion',
    explanation: 'Changes the reading frame of the genetic code.'
  },
  {
    id: 'bio-dna-51',
    text: 'DNA strands are held together by _____ bonds between nitrogenous bases.',
    options: ['Covalent', 'Ionic', 'Hydrogen', 'Metallic'],
    correctAnswer: 'Hydrogen',
    explanation: 'Weak enough to be separated for replication and transcription.'
  },
  {
    id: 'bio-dna-52',
    text: 'One full turn of the DNA double helix is about _____ nm long.',
    options: ['0.34', '3.4', '2.0', '10'],
    correctAnswer: '3.4',
    explanation: 'Contains 10 base pairs.'
  },
  {
    id: 'bio-dna-53',
    text: 'The width of the DNA double helix is:',
    options: ['3.4 nm', '2.0 nm', '0.34 nm', '1 nm'],
    correctAnswer: '2.0 nm',
    explanation: 'Constant due to purine-pyrimidine pairing.'
  },
  {
    id: 'bio-dna-54',
    text: 'Smallest functional unit of DNA that codes for a protein is a:',
    options: ['Chromosome', 'Nucleotide', 'Gene', 'Codon'],
    correctAnswer: 'Gene',
    explanation: 'Unit of heredity.'
  },
  {
    id: 'bio-dna-55',
    text: 'The specific location of a gene on a chromosome is its:',
    options: ['Address', 'Locus', 'Home', 'Center'],
    correctAnswer: 'Locus',
    explanation: 'Fixed position.'
  },
  {
    id: 'bio-dna-56',
    text: 'Total set of genes in an organism is its:',
    options: ['Genotype', 'Phenotype', 'Genome', 'Proteome'],
    correctAnswer: 'Genome',
    explanation: 'Includes coding and non-coding sequences.'
  },
  {
    id: 'bio-dna-57',
    text: 'Non-disjunction leads to:',
    options: ['Aneuploidy', 'Polyploidy', 'Mutations', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Failure of chromosomes to separate during meiosis.'
  },
  {
    id: 'bio-dna-58',
    text: 'Klinesfelter syndrome is represented as:',
    options: ['45, X', '47, XXY', '47, XYY', '47, Trisomy 21'],
    correctAnswer: '47, XXY',
    explanation: 'Male with extra X chromosome.'
  },
  {
    id: 'bio-dna-59',
    text: 'Turner syndrome is represented as:',
    options: ['47, XXY', '45, X (or XO)', '47, XXX', '47, Trisomy 18'],
    correctAnswer: '45, X (or XO)',
    explanation: 'Female with only one X chromosome.'
  },
  {
    id: 'bio-dna-60',
    text: 'Sickle cell anemia is due to a _____ mutation in the hemoglobin gene.',
    options: ['Deletion', 'Substitution (Point mutation)', 'Insertion', 'Translocation'],
    correctAnswer: 'Substitution (Point mutation)',
    explanation: 'Glutamic acid is replaced by Valine.'
  },
  {
    id: 'bio-dna-61',
    text: 'Transcription is catalyzed by the enzyme:',
    options: ['DNA Polymerase', 'RNA Polymerase', 'Reverse Transcriptase', 'Ribozyme'],
    correctAnswer: 'RNA Polymerase',
    explanation: 'Reads DNA 3\' to 5\' and builds RNA 5\' to 3\'.'
  },
  {
    id: 'bio-dna-62',
    text: 'Post-transcriptional modifications include adding a _____ and a _____.',
    options: ['Cap, Tail', 'Sugar, Phosphate', 'Base, Amino acid', 'None'],
    correctAnswer: 'Cap, Tail',
    explanation: '5\' cap and 3\' Poly-A tail.'
  },
  {
    id: 'bio-dna-63',
    text: 'The "Genetic Code" is _____ because multiple codons can code for the same amino acid.',
    options: ['Ambiguous', 'Degenerate', 'Universal', 'Punctured'],
    correctAnswer: 'Degenerate',
    explanation: '61 codons for 20 amino acids.'
  },
  {
    id: 'bio-dna-64',
    text: 'The genetic code is _____ because it is the same in almost all organisms.',
    options: ['Universal', 'Redundant', 'Specific', 'Mutating'],
    correctAnswer: 'Universal',
    explanation: 'Evidence for a common ancestor.'
  },
  {
    id: 'bio-dna-65',
    text: 'How many sense codons are there that code for amino acids?',
    options: ['64', '61', '20', '3'],
    correctAnswer: '61',
    explanation: '64 total minus 3 stop codons.'
  },
  {
    id: 'bio-dna-66',
    text: 'Translation begins when the small ribosomal subunit binds to the _____ of mRNA.',
    options: ['3\' end', 'Start codon (AUG)', 'Poly-A tail', 'Intron'],
    correctAnswer: 'Start codon (AUG)',
    explanation: 'Initiation stage.'
  },
  {
    id: 'bio-dna-67',
    text: 'The growing polypeptide chain is elongated during the _____ stage of translation.',
    options: ['Initiation', 'Elongation', 'Termination', 'Maturation'],
    correctAnswer: 'Elongation',
    explanation: 'Addition of amino acids one by one.'
  },
  {
    id: 'bio-dna-68',
    text: 'Termination of translation happens when a _____ reaches the A site.',
    options: ['Start codon', 'Stop codon', 'tRNA', 'Release factor'],
    correctAnswer: 'Stop codon',
    explanation: 'A release factor then binds to the stop codon.'
  },
  {
    id: 'bio-dna-69',
    text: 'In humans, how many chromosomes are in a somatic cell?',
    options: ['23', '46', '48', '92'],
    correctAnswer: '46',
    explanation: '23 pairs.'
  },
  {
    id: 'bio-dna-70',
    text: 'In humans, how many chromosomes are in a gamete cell?',
    options: ['46', '23', '22', '44'],
    correctAnswer: '23',
    explanation: 'Haploid number (n).'
  },
  {
    id: 'bio-dna-71',
    text: 'Which is a purine?',
    options: ['Guanine', 'Thymine', 'Cytosine', 'Uracil'],
    correctAnswer: 'Guanine',
    explanation: 'A and G are purines.'
  },
  {
    id: 'bio-dna-72',
    text: 'Bonds between sugars and phosphates are _____ bonds.',
    options: ['Hydrogen', 'Phosphodiester', 'Ionic', 'Peptide'],
    correctAnswer: 'Phosphodiester',
    explanation: 'Strong covalent bonds.'
  },
  {
    id: 'bio-dna-73',
    text: 'Which sugar is present in DNA?',
    options: ['Ribose', 'Deoxyribose', 'Glucose', 'Fructose'],
    correctAnswer: 'Deoxyribose',
    explanation: 'Lacks one oxygen atom compared to ribose.'
  },
  {
    id: 'bio-dna-74',
    text: 'Which sugar is present in RNA?',
    options: ['Deoxyribose', 'Ribose', 'Maltose', 'Galactose'],
    correctAnswer: 'Ribose',
    explanation: '5-carbon sugar.'
  },
  {
    id: 'bio-dna-75',
    text: 'Histone proteins are _____ charged and DNA is _____ charged.',
    options: ['Positively, Negatively', 'Negatively, Positively', 'Neutral, Positive', 'Positive, Neutral'],
    correctAnswer: 'Positively, Negatively',
    explanation: 'Opposite charges facilitate tight binding.'
  },
  {
    id: 'bio-dna-76',
    text: 'The "Beads on a string" appearance of chromatin is due to:',
    options: ['Genes', 'Nucleosomes', 'Centromeres', 'Ribosomes'],
    correctAnswer: 'Nucleosomes',
    explanation: 'Visible under electron microscope.'
  },
  {
    id: 'bio-dna-77',
    text: 'Mitochondrial DNA is inherited solely from the:',
    options: ['Father', 'Mother', 'Both', 'Environment'],
    correctAnswer: 'Mother',
    explanation: 'Mitochondria are present in the egg, but not in the sperm head.'
  },
  {
    id: 'bio-dna-78',
    text: 'The "L-shaped" molecule that brings amino acids to ribosomes is:',
    options: ['mRNA', 'rRNA', 'tRNA', 'snRNA'],
    correctAnswer: 'tRNA',
    explanation: 'Has a specific amino acid attachment site.'
  },
  {
    id: 'bio-dna-79',
    text: 'Splicing involves the removal of _____ and joining of _____.',
    options: ['Exons, Introns', 'Introns, Exons', 'Bases, Sugars', 'Phosphate, Bases'],
    correctAnswer: 'Introns, Exons',
    explanation: 'Produces a mature mRNA molecule.'
  },
  {
    id: 'bio-dna-80',
    text: 'A "Poly-A tail" protects mRNA from degradation by:',
    options: ['Water', 'Nucleases', 'Ribosomes', 'Ligases'],
    correctAnswer: 'Nucleases',
    explanation: 'Enzymes that break down nucleic acids.'
  },
  {
    id: 'bio-dna-81',
    text: 'In prokaryotes, transcription and translation are _____ because there is no nucleus.',
    options: ['Separated', 'Coupled', 'Opposite', 'Impossible'],
    correctAnswer: 'Coupled',
    explanation: 'Translation can begin while transcription is still in progress.'
  },
  {
    id: 'bio-dna-82',
    text: 'Which is NOT a chromosomal structural mutation?',
    options: ['Deletion', 'Duplication', 'Trisomy', 'Inversion'],
    correctAnswer: 'Trisomy',
    explanation: 'Trisomy is a numerical mutation (aneuploidy).'
  },
  {
    id: 'bio-dna-83',
    text: 'Cri-du-chat syndrome is caused by _____ of part of chromosome 5.',
    options: ['Deletion', 'Duplication', 'Inversion', 'Translocation'],
    correctAnswer: 'Deletion',
    explanation: 'Results in a high-pitched "cat-like" cry in infants.'
  },
  {
    id: 'bio-dna-84',
    text: 'Translocation is the exchange of segments between _____ chromosomes.',
    options: ['Homologous', 'Non-homologous', 'Identical', 'None'],
    correctAnswer: 'Non-homologous',
    explanation: 'Can lead to cancers like leukemia.'
  },
  {
    id: 'bio-dna-85',
    text: 'Which type of RNA is most abundant in a cell?',
    options: ['mRNA', 'tRNA', 'rRNA', 'snRNA'],
    correctAnswer: 'rRNA',
    explanation: 'Makes up about 80% of total RNA.'
  },
  {
    id: 'bio-dna-86',
    text: 'The bond between an amino acid and its tRNA is a _____ bond.',
    options: ['Hydrogen', 'Ionic', 'Ester (High energy)', 'Peptide'],
    correctAnswer: 'Ester (High energy)',
    explanation: 'Requires ATP for formation (aminoacyl-tRNA synthetase).'
  },
  {
    id: 'bio-dna-87',
    text: 'The P-site stands for _____ site.',
    options: ['Peptidyl', 'Protein', 'Passive', 'Primary'],
    correctAnswer: 'Peptidyl',
    explanation: 'Holds the tRNA carrying the growing polypeptide chain.'
  },
  {
    id: 'bio-dna-88',
    text: 'The A-site stands for _____ site.',
    options: ['Aminoacyl', 'Active', 'Attachment', 'Additional'],
    correctAnswer: 'Aminoacyl',
    explanation: 'Accepts the incoming tRNA with the next amino acid.'
  },
  {
    id: 'bio-dna-89',
    text: 'The E-site stands for _____ site.',
    options: ['Entry', 'Exit', 'End', 'Empty'],
    correctAnswer: 'Exit',
    explanation: 'Where discharged tRNAs leave the ribosome.'
  },
  {
    id: 'bio-dna-90',
    text: 'DNA Polymerase can only add nucleotides to the _____ end of a strand.',
    options: ['5\'', '3\'', 'Middle', 'Both'],
    correctAnswer: '3\'',
    explanation: 'Needs a free OH group.'
  },
  {
    id: 'bio-dna-91',
    text: 'UV light causes _____ dimers in DNA.',
    options: ['Adenine', 'Thymine', 'Guanine', 'Cytosine'],
    correctAnswer: 'Thymine',
    explanation: 'A common type of DNA damage.'
  },
  {
    id: 'bio-dna-92',
    text: 'A "Nonsense Mutation" results in a premature _____ of the protein.',
    options: ['Start', 'Truncation (Shortening)', 'Elongation', 'Folding'],
    correctAnswer: 'Truncation (Shortening)',
    explanation: 'Because translation stops too early.'
  },
  {
    id: 'bio-dna-93',
    text: 'Which is a "Chemical Mutagen"?',
    options: ['Nitrous acid', 'Base analogs', 'Ethidium bromide', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Substances that can react with or mimic DNA bases.'
  },
  {
    id: 'bio-dna-94',
    text: 'The process by which bacteria take up foreign DNA from their environment is:',
    options: ['Transcription', 'Transformation', 'Translation', 'Transduction'],
    correctAnswer: 'Transformation',
    explanation: 'First demonstrated by Griffith.'
  },
  {
    id: 'bio-dna-95',
    text: 'The "Hershey-Chase" experiment used _____ to prove DNA is the genetic material.',
    options: ['Bacteria only', 'Bacteriophages (Viruses)', 'Mice', 'Plants'],
    correctAnswer: 'Bacteriophages (Viruses)',
    explanation: 'Used radioactive phosphorus and sulfur.'
  },
  {
    id: 'bio-dna-96',
    text: 'Genetics is the study of _____ and _____.',
    options: ['Growth, Death', 'Heredity, Variation', 'Cells, Tissues', 'Environment, Social life'],
    correctAnswer: 'Heredity, Variation',
    explanation: 'How traits are passed on.'
  },
  {
    id: 'bio-dna-97',
    text: 'The nitrogenous bases in DNA are flat and _____ to each other.',
    options: ['Parallel', 'Perpendicular', 'Stacked', 'Random'],
    correctAnswer: 'Stacked',
    explanation: 'Provides stability through van der Waals interactions.'
  },
  {
    id: 'bio-dna-98',
    text: 'Eukaryotic chromosomes are _____ while most prokaryotic ones are _____.',
    options: ['Circular, Linear', 'Linear, Circular', 'Small, Large', 'Red, Blue'],
    correctAnswer: 'Linear, Circular',
    explanation: 'Structural difference.'
  },
  {
    id: 'bio-dna-99',
    text: 'Chromatin is found in the _____ during interphase.',
    options: ['Cytoplasm', 'Nucleus', 'Cell wall', 'Vacuole'],
    correctAnswer: 'Nucleus',
    explanation: 'Becomes condensed chromosomes during cell division.'
  },
  {
    id: 'bio-dna-100',
    text: 'Understanding DNA is the foundation of modern:',
    options: ['Medicine', 'Biotechnology', 'Forensics', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Revolutionized all fields of life science.'
  }
];
