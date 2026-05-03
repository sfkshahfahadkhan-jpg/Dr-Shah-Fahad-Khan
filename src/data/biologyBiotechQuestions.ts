import { Question } from '../types';

export const BIOLOGY_BIOTECH_QUIZ: Question[] = [
  {
    id: 'bio-bt-1',
    text: 'Biotechnology is the use of _____ or their systems to make products for human benefit.',
    options: ['Rocks', 'Living organisms', 'Computers only', 'Chemicals only'],
    correctAnswer: 'Living organisms',
    explanation: 'Includes techniques like genetic engineering and cell culture.'
  },
  {
    id: 'bio-bt-2',
    text: 'Recombinant DNA (rDNA) technology is also known as:',
    options: ['Metabolism', 'Genetic Engineering', 'Transcription', 'Translation'],
    correctAnswer: 'Genetic Engineering',
    explanation: 'Involves manipulating DNA to combine genes from different sources.'
  },
  {
    id: 'bio-bt-3',
    text: 'Enzymes that cut DNA at specific sequences are:',
    options: ['Ligases', 'Restriction Endonucleases', 'Polymerases', 'Helicases'],
    correctAnswer: 'Restriction Endonucleases',
    explanation: 'Often called "molecular scissors".'
  },
  {
    id: 'bio-bt-4',
    text: 'The DNA sequence where a restriction enzyme cuts is the:',
    options: ['Promoter', 'Recognition site (Palindromic)', 'Start codon', 'Telomere'],
    correctAnswer: 'Recognition site (Palindromic)',
    explanation: 'Reads the same 5\' to 3\' on both strands.'
  },
  {
    id: 'bio-bt-5',
    text: 'The enzyme used to join DNA fragments together is:',
    options: ['DNA Ligase', 'DNA Polymerase', 'Amylase', 'Pepsin'],
    correctAnswer: 'DNA Ligase',
    explanation: 'Molecular glue.'
  },
  {
    id: 'bio-bt-6',
    text: 'A DNA molecule used as a carrier to transfer foreign DNA into a host cell is a:',
    options: ['Vector', 'Virus only', 'Protein', 'Carbohydrate'],
    correctAnswer: 'Vector',
    explanation: 'Examples: Plasmids, Bacteriophages.'
  },
  {
    id: 'bio-bt-7',
    text: 'Plasmids are extrachromosomal, circular DNA found in:',
    options: ['Humans', 'Bacteria', 'Plants', 'Viruses'],
    correctAnswer: 'Bacteria',
    explanation: 'Commonly used as vectors in biotechnology.'
  },
  {
    id: 'bio-bt-8',
    text: 'PCR stands for:',
    options: ['Protein Chain Reaction', 'Polymerase Chain Reaction', 'Primary Cell Response', 'None'],
    correctAnswer: 'Polymerase Chain Reaction',
    explanation: 'Used to amplify small amounts of DNA into millions of copies.'
  },
  {
    id: 'bio-bt-9',
    text: 'The heat-stable enzyme used in PCR is:',
    options: ['DNA Polymerase III', 'Taq Polymerase', 'Reverse Transcriptase', 'RNA Polymerase'],
    correctAnswer: 'Taq Polymerase',
    explanation: 'Isolated from Thermus aquaticus, a bacterium living in hot springs.'
  },
  {
    id: 'bio-bt-10',
    text: 'The three steps of a PCR cycle are Denaturation, _____, and Extension.',
    options: ['Transcription', 'Annealing', 'Translation', 'Ligation'],
    correctAnswer: 'Annealing',
    explanation: 'Denaturation (heat), Annealing (primers bind), Extension (synthesis).'
  },
  {
    id: 'bio-bt-11',
    text: 'A "Genomic Library" is a collection of:',
    options: ['Books about biology', 'Bacterial clones containing the entire genome of an organism', 'Purified proteins', 'DNA sequences on a computer only'],
    correctAnswer: 'Bacterial clones containing the entire genome of an organism',
    explanation: 'Used to find and study specific genes.'
  },
  {
    id: 'bio-bt-12',
    text: 'The technique used to separate DNA fragments based on size is:',
    options: ['PCR', 'Gel Electrophoresis', 'Cloning', 'Sequencing'],
    correctAnswer: 'Gel Electrophoresis',
    explanation: 'DNA moves toward the positive electrode.'
  },
  {
    id: 'bio-bt-13',
    text: 'DNA fingerprinting (profiling) is based on variations in _____ sequences.',
    options: ['Coding', 'Non-coding (e.g. STRs/VNTRs)', 'Exon', 'Hormone'],
    correctAnswer: 'Non-coding (e.g. STRs/VNTRs)',
    explanation: 'Unique to every individual (except identical twins).'
  },
  {
    id: 'bio-bt-14',
    text: 'Gene therapy involves inserting _____ genes into cells to treat a disease.',
    options: ['Mutant', 'Normal/Functional', 'Bacterial', 'Plant'],
    correctAnswer: 'Normal/Functional',
    explanation: 'Aim is to replace or supplement defective genes.'
  },
  {
    id: 'bio-bt-15',
    text: 'An organism that contains a gene from another species is:',
    options: ['Mutant', 'Transgenic', 'Hybrid', 'Clone'],
    correctAnswer: 'Transgenic',
    explanation: 'Also called Genetically Modified Organism (GMO).'
  },
  {
    id: 'bio-bt-16',
    text: '"Golden Rice" is genetically engineered to contain more:',
    options: ['Protein', 'Vitamin A (Beta-carotene)', 'Iron', 'Sugar'],
    correctAnswer: 'Vitamin A (Beta-carotene)',
    explanation: 'Designed to combat vitamin A deficiency in developing countries.'
  },
  {
    id: 'bio-bt-17',
    text: 'The first mammal to be cloned from an adult cell was:',
    options: ['Mickey the Mouse', 'Dolly the Sheep', 'Bessie the Cow', 'Coco the Cat'],
    correctAnswer: 'Dolly the Sheep',
    explanation: 'Cloned in 1996 using somatic cell nuclear transfer.'
  },
  {
    id: 'bio-bt-18',
    text: 'The Human Genome Project (HGP) aimed to map the entire human:',
    options: ['Brain', 'Body', 'DNA sequence', 'Social network'],
    correctAnswer: 'DNA sequence',
    explanation: 'Completed in 2003; identified about 20,000-25,000 genes.'
  },
  {
    id: 'bio-bt-19',
    text: 'Which is a product of biotechnology?',
    options: ['Insulin', 'Growth Hormone', 'Vaccines', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Produced using recombinant microorganisms.'
  },
  {
    id: 'bio-bt-20',
    text: 'Human insulin produced by bacteria is called:',
    options: ['Bovulin', 'Humulin', 'Glucagon', 'Thyroxine'],
    correctAnswer: 'Humulin',
    explanation: 'Marketed by Eli Lilly since 1982.'
  },
  {
    id: 'bio-bt-21',
    text: 'Restriction enzymes were first discovered in:',
    options: ['Plants', 'Humans', 'Bacteria', 'Fungi'],
    correctAnswer: 'Bacteria',
    explanation: 'Part of their defense mechanism against viruses (bacteriophages).'
  },
  {
    id: 'bio-bt-22',
    text: 'Which vector is most commonly used to transform plant cells?',
    options: ['pBR322', 'Ti plasmid (from Agrobacterium)', 'Lambda phage', 'YAC'],
    correctAnswer: 'Ti plasmid (from Agrobacterium)',
    explanation: 'Naturally transfers DNA into plant genomes.'
  },
  {
    id: 'bio-bt-23',
    text: 'A "cDNA library" contains only the _____ sequences of an organism.',
    options: ['Intron', 'Coding (Exon)', 'Promoter', 'Centromere'],
    correctAnswer: 'Coding (Exon)',
    explanation: 'Synthesized from mRNA using reverse transcriptase.'
  },
  {
    id: 'bio-bt-24',
    text: 'Reverse transcriptase is an enzyme that synthesizes _____ from _____.',
    options: ['RNA, DNA', 'DNA, RNA', 'Protein, RNA', 'None'],
    correctAnswer: 'DNA, RNA',
    explanation: 'Found in retroviruses.'
  },
  {
    id: 'bio-bt-25',
    text: 'The technique used to transfer DNA from a gel to a nitrocellulose membrane is:',
    options: ['Northern blotting', 'Southern blotting', 'Western blotting', 'Eastern blotting'],
    correctAnswer: 'Southern blotting',
    explanation: 'Used to identify specific DNA fragments with a probe.'
  },
  {
    id: 'bio-bt-26',
    text: 'Northern blotting is used for the detection of:',
    options: ['DNA', 'RNA', 'Proteins', 'Lipids'],
    correctAnswer: 'RNA',
    explanation: 'Named as a play on "Southern" blotting.'
  },
  {
    id: 'bio-bt-27',
    text: 'Western blotting is used for the detection of:',
    options: ['DNA', 'RNA', 'Proteins', 'Carbohydrates'],
    correctAnswer: 'Proteins',
    explanation: 'Uses antibodies for detection.'
  },
  {
    id: 'bio-bt-28',
    text: 'The first gene therapy trial (1990) was for which disease?',
    options: ['Cancer', 'AIDS', 'ADA deficiency (SCID)', 'Cystic fibrosis'],
    correctAnswer: 'ADA deficiency (SCID)',
    explanation: 'Performed on Ashanti DeSilva.'
  },
  {
    id: 'bio-bt-29',
    text: 'Ex vivo gene therapy involves treating cells _____ the body.',
    options: ['Inside', 'Outside', 'In the brain', 'In the womb'],
    correctAnswer: 'Outside',
    explanation: 'Cells are removed, treated, and then returned to the patient.'
  },
  {
    id: 'bio-bt-30',
    text: 'In vivo gene therapy involves delivering the gene _____ the patient\'s body.',
    options: ['Inside', 'Outside', 'By surgery only', 'By pills'],
    correctAnswer: 'Inside',
    explanation: 'e.g. Using a nasal spray for cystic fibrosis.'
  },
  {
    id: 'bio-bt-31',
    text: 'Restriction enzymes produce fragments with "sticky ends" or "_____ ends".',
    options: ['Smooth', 'Blunt', 'Sharp', 'Coiled'],
    correctAnswer: 'Blunt',
    explanation: 'Sticky ends have overhangs; blunt ends are straight cuts.'
  },
  {
    id: 'bio-bt-32',
    text: 'The most commonly used restriction enzyme in labs is:',
    options: ['EcoRI', 'HindIII', 'BamHI', 'PstI'],
    correctAnswer: 'EcoRI',
    explanation: 'Isolated from E. coli.'
  },
  {
    id: 'bio-bt-33',
    text: 'Transformation is the process by which a cell takes up _____ from its surroundings.',
    options: ['Protein', 'Foreign DNA', 'Oxygen', 'Sugar'],
    correctAnswer: 'Foreign DNA',
    explanation: 'Cells can be made "competent" using heat shock or chemicals.'
  },
  {
    id: 'bio-bt-34',
    text: 'Selectable markers (like antibiotic resistance genes) are used to identify:',
    options: ['Large bacteria', 'Transformed cells', 'Dead cells', 'Mutant viruses'],
    correctAnswer: 'Transformed cells',
    explanation: 'Only cells with the vector survive on antibiotic media.'
  },
  {
    id: 'bio-bt-35',
    text: 'Which is a "Molecular Probe"?',
    options: ['A short, labeled DNA or RNA sequence', 'A tiny robot', 'A powerful microscope', 'A chemical dye'],
    correctAnswer: 'A short, labeled DNA or RNA sequence',
    explanation: 'Used to find complementary sequences.'
  },
  {
    id: 'bio-bt-36',
    text: 'Sanger\'s method is used for:',
    options: ['DNA amplification', 'DNA sequencing', 'Protein folding', 'Gene silencing'],
    correctAnswer: 'DNA sequencing',
    explanation: 'Based on chain termination using dideoxynucleotides (ddNTPs).'
  },
  {
    id: 'bio-bt-37',
    text: 'The "Dideoxy" nucleotides lack the _____ group at both 2\' and 3\' positions.',
    options: ['Phosphate', 'Hydroxyl (-OH)', 'Base', 'Hydrogen'],
    correctAnswer: 'Hydroxyl (-OH)',
    explanation: 'Prevents further addition of nucleotides.'
  },
  {
    id: 'bio-bt-38',
    text: 'The complete set of proteins expressed by a genome is the:',
    options: ['Genome', 'Proteome', 'Metabolome', 'Transcriptome'],
    correctAnswer: 'Proteome',
    explanation: 'Studied in proteomics.'
  },
  {
    id: 'bio-bt-39',
    text: 'DNA microarrays (Gene chips) are used to study _____ of thousands of genes at once.',
    options: ['Sequence', 'Expression levels', 'Weight', 'Color'],
    correctAnswer: 'Expression levels',
    explanation: 'Useful for comparing healthy vs diseased tissue.'
  },
  {
    id: 'bio-bt-40',
    text: 'Transgenic bacteria are used in "Bioremediation" to:',
    options: ['Produce medicine', 'Clean up environmental pollution (e.g. oil spills)', 'Kill pests', 'Make yogurt'],
    correctAnswer: 'Clean up environmental pollution (e.g. oil spills)',
    explanation: 'Breaking down toxic substances.'
  },
  {
    id: 'bio-bt-41',
    text: 'Transgenic animals that produce medicines in their milk are called:',
    options: ['Molecular farms', 'Pharming', 'Cows', 'Hybridoma'],
    correctAnswer: 'Pharming',
    explanation: 'Combining "pharmaceutical" and "farming".'
  },
  {
    id: 'bio-bt-42',
    text: 'The first transgenic animal was a:',
    options: ['Sheep', 'Mouse', 'Fish', 'Rabbit'],
    correctAnswer: 'Mouse',
    explanation: 'Produced in the early 1980s.'
  },
  {
    id: 'bio-bt-43',
    text: 'Bt-corn contains a gene from the bacterium _____ that kills certain insects.',
    options: ['E. coli', 'Bacillus thuringiensis', 'Rhizobium', 'Staphylococcus'],
    correctAnswer: 'Bacillus thuringiensis',
    explanation: 'Reduces the need for chemical pesticides.'
  },
  {
    id: 'bio-bt-44',
    text: 'Stem cells have the ability to _____ and _____ into various cell types.',
    options: ['Die, Reappear', 'Self-renew, Differentiate', 'Mutate, Spread', 'Grow, Shrink'],
    correctAnswer: 'Self-renew, Differentiate',
    explanation: 'Found in embryos and some adult tissues.'
  },
  {
    id: 'bio-bt-45',
    text: 'Totipotent stem cells can give rise to:',
    options: ['Only one cell type', 'Only a few cell types', 'An entire organism (including placenta)', 'Blood cells only'],
    correctAnswer: 'An entire organism (including placenta)',
    explanation: 'Example: Zygote.'
  },
  {
    id: 'bio-bt-46',
    text: 'Pluripotent stem cells can give rise to:',
    options: ['All body cell types except placenta', 'Only skin cells', 'Only nerve cells', 'All cell types including placenta'],
    correctAnswer: 'All body cell types except placenta',
    explanation: 'Example: Embryonic stem cells.'
  },
  {
    id: 'bio-bt-47',
    text: 'Which is a risk associated with GMOs?',
    options: ['Allergic reactions', 'Transfer of genes to wild relatives (Gene flow)', 'Loss of biodiversity', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Ethical and environmental concerns exist.'
  },
  {
    id: 'bio-bt-48',
    text: 'The use of computer science and statistics to analyze biological data is:',
    options: ['Biotechnology', 'Bioinformatics', 'Biometry', 'Biophysics'],
    correctAnswer: 'Bioinformatics',
    explanation: 'Essential for processing HGP data.'
  },
  {
    id: 'bio-bt-49',
    text: 'Restriction Fragment Length Polymorphism (RFLP) is used in:',
    options: ['Genetic mapping', 'Forensics', 'Diagnosis of genetic diseases', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Detects variations in DNA sequence.'
  },
  {
    id: 'bio-bt-50',
    text: 'Interferons produced by biotechnology are used to treat:',
    options: ['Bacterial infections', 'Viral infections and some cancers', 'Broken bones', 'Headaches'],
    correctAnswer: 'Viral infections and some cancers',
    explanation: 'Proteins that interfere with viral replication.'
  },
  {
    id: 'bio-bt-51',
    text: 'DNA synthesis for PCR happens in the _____ to _____ direction.',
    options: ['3\' to 5\'', '5\' to 3\'', 'Middle to ends', 'None'],
    correctAnswer: '5\' to 3\'',
    explanation: 'Same as in natural DNA replication.'
  },
  {
    id: 'bio-bt-52',
    text: 'The "Annealing" temperature in PCR is usually between:',
    options: ['95°C', '50-65°C', '72°C', '4°C'],
    correctAnswer: '50-65°C',
    explanation: 'Allows primers to hydrogen bond to target DNA.'
  },
  {
    id: 'bio-bt-53',
    text: 'The "Denaturation" temperature in PCR is usually about:',
    options: ['37°C', '72°C', '95°C', '100°C'],
    correctAnswer: '95°C',
    explanation: 'Separates the two DNA strands.'
  },
  {
    id: 'bio-bt-54',
    text: 'Which type of vector can carry the largest amount of foreign DNA?',
    options: ['Plasmid', 'Cosmid', 'Bacteriophage', 'YAC (Yeast Artificial Chromosome)'],
    correctAnswer: 'YAC (Yeast Artificial Chromosome)',
    explanation: 'Can carry up to 1000 kb.'
  },
  {
    id: 'bio-bt-55',
    text: 'Monoclonal antibodies are produced by _____ cells.',
    options: ['T-cells', 'B-cells', 'Hybridoma', 'Stem cells'],
    correctAnswer: 'Hybridoma',
    explanation: 'Fusion of a B-cell and a myeloma (cancer) cell.'
  },
  {
    id: 'bio-bt-56',
    text: 'Hybridoma technology was developed by:',
    options: ['Watson and Crick', 'Kohler and Milstein', 'Banting and Best', 'Fleming'],
    correctAnswer: 'Kohler and Milstein',
    explanation: 'Received Nobel Prize in 1984.'
  },
  {
    id: 'bio-bt-57',
    text: 'DNA vaccines involve injecting the _____ for an antigen into the body.',
    options: ['Protein', 'Gene', 'Virus', 'Antibody'],
    correctAnswer: 'Gene',
    explanation: 'The body then produces the antigen to trigger an immune response.'
  },
  {
    id: 'bio-bt-58',
    text: 'Genetically engineered "Bollgard" cotton is resistant to:',
    options: ['Drought', 'Bollworms', 'Weeds', 'Heat'],
    correctAnswer: 'Bollworms',
    explanation: 'Contains Bt genes.'
  },
  {
    id: 'bio-bt-59',
    text: 'Human protein Alpha-1-antitrypsin, used to treat emphysema, is produced in transgenic:',
    options: ['Pigs', 'Sheep (milk)', 'Bacteria', 'Yeast'],
    correctAnswer: 'Sheep (milk)',
    explanation: 'e.g. Tracy the sheep.'
  },
  {
    id: 'bio-bt-60',
    text: 'Xenotransplantation is the transplantation of organs from _____ to _____.',
    options: ['Human, Human', 'Animal, Human', 'Human, Animal', 'Plant, Animal'],
    correctAnswer: 'Animal, Human',
    explanation: 'Pigs are often considered as potential donors.'
  },
  {
    id: 'bio-bt-61',
    text: 'Palindromic sequences in DNA read the same in _____ direction.',
    options: ['Left to right', 'Right to left', 'Opposite (5\' to 3\')', 'None'],
    correctAnswer: 'Opposite (5\' to 3\')',
    explanation: 'e.g. GAATTC / CTTAAG.'
  },
  {
    id: 'bio-bt-62',
    text: 'The study of the ethical, legal, and social implications of biotechnology is:',
    options: ['Bioethics', 'Biopolitics', 'Biolaw', 'None'],
    correctAnswer: 'Bioethics',
    explanation: 'Vital for responsible scientific progress.'
  },
  {
    id: 'bio-bt-63',
    text: 'Which enzyme is used to "amplify" DNA in a thermal cycler?',
    options: ['Helicase', 'Ligase', 'Taq Polymerase', 'Endonuclease'],
    correctAnswer: 'Taq Polymerase',
    explanation: 'PCR happens in a thermal cycler.'
  },
  {
    id: 'bio-bt-64',
    text: 'A "Probe" is typically labeled with a _____ or _____ marker.',
    options: ['Sugar, salt', 'Radioactive, fluorescent', 'Acidic, basic', 'Large, small'],
    correctAnswer: 'Radioactive, fluorescent',
    explanation: 'Allows visualization of the target DNA.'
  },
  {
    id: 'bio-bt-65',
    text: '"Gene Gun" is a method of _____ into cells.',
    options: ['Injecting protein', 'Firing DNA-coated microparticles', 'Taking pictures', 'Killing'],
    correctAnswer: 'Firing DNA-coated microparticles',
    explanation: 'Used for plant transformation.'
  },
  {
    id: 'bio-bt-66',
    text: 'Electroporation uses _____ to create temporary holes in cell membranes for DNA entry.',
    options: ['Heat', 'Light', 'Electrical pulses', 'Sound'],
    correctAnswer: 'Electrical pulses',
    explanation: 'Increases membrane permeability.'
  },
  {
    id: 'bio-bt-67',
    text: 'The total number of base pairs in the human haploid genome is about:',
    options: ['3 million', '3 billion', '30 billion', '300 million'],
    correctAnswer: '3 billion',
    explanation: '3 x 10^9 bp.'
  },
  {
    id: 'bio-bt-68',
    text: 'Which was the first organism to have its genome sequenced (1995)?',
    options: ['E. coli', 'Haemophilus influenzae', 'Human', 'Yeast'],
    correctAnswer: 'Haemophilus influenzae',
    explanation: 'A bacterium.'
  },
  {
    id: 'bio-bt-69',
    text: 'The bacterium used for "Natural Genetic Engineering" of plants is:',
    options: ['E. coli', 'Agrobacterium tumefaciens', 'Salmonella', 'Lactobacillus'],
    correctAnswer: 'Agrobacterium tumefaciens',
    explanation: 'Causes crown gall disease by transferring T-DNA.'
  },
  {
    id: 'bio-bt-70',
    text: 'Tissue culture is the growth of _____ in an artificial medium.',
    options: ['Whole animals', 'Cells/Tissues/Organs', 'Rocks', 'Viruses only'],
    correctAnswer: 'Cells/Tissues/Organs',
    explanation: 'Requires sterile conditions and nutrients.'
  },
  {
    id: 'bio-bt-71',
    text: 'Plant tissue culture takes advantage of cell _____, the ability to regenerate a whole plant.',
    options: ['Pluripotency', 'Totipotency', 'Multipotency', 'Unipotency'],
    correctAnswer: 'Totipotency',
    explanation: 'A single cell can become a whole new individual.'
  },
  {
    id: 'bio-bt-72',
    text: 'The "Explant" in tissue culture is the _____ used to start the culture.',
    options: ['Machine', 'Initial piece of tissue', 'Waste product', 'Growth medium'],
    correctAnswer: 'Initial piece of tissue',
    explanation: 'Can be leaf, root, stem, or pollen.'
  },
  {
    id: 'bio-bt-73',
    text: 'Micropropagation allows for the production of large numbers of _____ plants.',
    options: ['Mutant', 'Genetically identical', 'Different', 'Large'],
    correctAnswer: 'Genetically identical',
    explanation: 'Cloning of plants.'
  },
  {
    id: 'bio-bt-74',
    text: 'Which is an application of plant biotechnology?',
    options: ['Herbicide resistance', 'Enhanced nutritional value', 'Cold tolerance', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Aiming for better and more resilient crops.'
  },
  {
    id: 'bio-bt-75',
    text: 'Herbicide-resistant crops (e.g. Roundup Ready) allow farmers to kill weeds without _____ the crop.',
    options: ['Touching', 'Killing', 'Watering', 'Seeing'],
    correctAnswer: 'Killing',
    explanation: 'The crop survives the spray.'
  },
  {
    id: 'bio-bt-76',
    text: 'Bioplastic is produced from renewable resources like _____ instead of petroleum.',
    options: ['Corn starch', 'Sugar cane', 'Microorganisms', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'More environmentally friendly.'
  },
  {
    id: 'bio-bt-77',
    text: 'Bioreactors are large vessels used for _____ of microorganisms or cells.',
    options: ['Storage', 'Mass cultivation', 'Killing', 'Observation'],
    correctAnswer: 'Mass cultivation',
    explanation: 'Used to produce proteins, enzymes, or antibiotics.'
  },
  {
    id: 'bio-bt-78',
    text: 'DNA Ligase forms which type of bond?',
    options: ['Hydrogen', 'Phosphodiester', 'Ionic', 'Peptide'],
    correctAnswer: 'Phosphodiester',
    explanation: 'Restores the sugar-phosphate backbone.'
  },
  {
    id: 'bio-bt-79',
    text: 'EcoRI cuts DNA at the sequence:',
    options: ['AAGCTT', 'GAATTC', 'GGATCC', 'GATATC'],
    correctAnswer: 'GAATTC',
    explanation: 'Produces 5\' overhangs (sticky ends).'
  },
  {
    id: 'bio-bt-80',
    text: 'Which is a common vector for yeast cells?',
    options: ['pBR322', 'YEp (Yeast Episomal Plasmid)', 'Bacteriophage', 'None'],
    correctAnswer: 'YEp (Yeast Episomal Plasmid)',
    explanation: 'Used for cloning in eukaryotes.'
  },
  {
    id: 'bio-bt-81',
    text: 'Genetic engineering in animals is _____ difficult than in bacteria.',
    options: ['Less', 'More', 'Equally', 'Not'],
    correctAnswer: 'More',
    explanation: 'Requires complex techniques like microinjection.'
  },
  {
    id: 'bio-bt-82',
    text: 'The "Knockout Mouse" is one where a specific gene has been:',
    options: ['Duplicated', 'Inactivated/Removed', 'Changed to human', 'None'],
    correctAnswer: 'Inactivated/Removed',
    explanation: 'Used to study the function of that gene.'
  },
  {
    id: 'bio-bt-83',
    text: 'Transgenic salmon has been engineered to:',
    options: ['Glow in the dark', 'Grow faster and larger', 'Breathe on land', 'Change color'],
    correctAnswer: 'Grow faster and larger',
    explanation: 'Contains a growth hormone gene.'
  },
  {
    id: 'bio-bt-84',
    text: 'DNA profiling in forensics often uses _____ repeats.',
    options: ['Long', 'Short Tandem (STRs)', 'Circular', 'None'],
    correctAnswer: 'Short Tandem (STRs)',
    explanation: 'Easily amplified by PCR.'
  },
  {
    id: 'bio-bt-85',
    text: 'A "DNA ladder" is used in gel electrophoresis as a:',
    options: ['Staircase for DNA', 'Size marker (reference)', 'Power source', 'Dye'],
    correctAnswer: 'Size marker (reference)',
    explanation: 'Contains fragments of known lengths.'
  },
  {
    id: 'bio-bt-86',
    text: 'The study of the complete set of small molecules in a cell is:',
    options: ['Genomics', 'Proteomics', 'Metabolomics', 'Lipidomics'],
    correctAnswer: 'Metabolomics',
    explanation: 'Shows the metabolic state of the cell.'
  },
  {
    id: 'bio-bt-87',
    text: 'Gene silencing using RNA interference (RNAi) involves _____ RNA.',
    options: ['Single-stranded', 'Double-stranded (dsRNA)', 'Mutated', 'None'],
    correctAnswer: 'Double-stranded (dsRNA)',
    explanation: 'Inhibits gene expression by destroying specific mRNA.'
  },
  {
    id: 'bio-bt-88',
    text: 'CRISPR-Cas9 is a powerful tool for:',
    options: ['DNA sequencing', 'Precise genome editing', 'Protein synthesis', 'Cell death'],
    correctAnswer: 'Precise genome editing',
    explanation: 'Discovered in bacteria as an immune system.'
  },
  {
    id: 'bio-bt-89',
    text: 'The "Cas9" in CRISPR-Cas9 is an enzyme that _____ DNA.',
    options: ['Joins', 'Cuts', 'Copies', 'Transcribes'],
    correctAnswer: 'Cuts',
    explanation: 'Guided by a small RNA molecule.'
  },
  {
    id: 'bio-bt-90',
    text: 'Which is a major goal of the Human Genome Project?',
    options: ['Identify all human genes', 'Store info in databases', 'Address ethical issues', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Comprehensive massive project.'
  },
  {
    id: 'bio-bt-91',
    text: 'Bio-ethics committees exist to review experiments involving _____ and _____.',
    options: ['Rocks, Air', 'Humans, Animals', 'Water, Fire', 'None'],
    correctAnswer: 'Humans, Animals',
    explanation: 'Ensure safety and morality.'
  },
  {
    id: 'bio-bt-92',
    text: 'In Southern blotting, the probe binds to the target DNA via:',
    options: ['Ionic bonds', 'Complementary base pairing (Hydrogen bonds)', 'Covalent bonds', 'None'],
    correctAnswer: 'Complementary base pairing (Hydrogen bonds)',
    explanation: 'Process is called hybridization.'
  },
  {
    id: 'bio-bt-93',
    text: 'A "Vector" must have an "Origin of Replication" (ori) to _____ in the host cell.',
    options: ['Die', 'Reproduce/Replicate', 'Change color', 'Exit'],
    correctAnswer: 'Reproduce/Replicate',
    explanation: 'Necessary for cloning.'
  },
  {
    id: 'bio-bt-94',
    text: 'Restriction enzymes recognize sequences that are usually _____ to _____ base pairs long.',
    options: ['1-2', '4-8', '20-30', '100+'],
    correctAnswer: '4-8',
    explanation: 'Higher specificity with longer sequences.'
  },
  {
    id: 'bio-bt-95',
    text: 'Which is an example of an "In vivo" gene therapy application?',
    options: ['Treating blood cells for SCID', 'Aerosol spray for cystic fibrosis', 'Cloning Dolly', 'None'],
    correctAnswer: 'Aerosol spray for cystic fibrosis',
    explanation: 'Vector is delivered directly to the lungs.'
  },
  {
    id: 'bio-bt-96',
    text: 'Genetically modified bacteria can be used to produce _____ to dissolve blood clots.',
    options: ['Aspirin', 'Tissue Plasminogen Activator (TPA)', 'Insulin', 'Sugar'],
    correctAnswer: 'Tissue Plasminogen Activator (TPA)',
    explanation: 'Used in treating heart attacks and strokes.'
  },
  {
    id: 'bio-bt-97',
    text: 'The use of living organisms for industrial processes is often called _____ biotechnology.',
    options: ['Red', 'Green', 'White', 'Blue'],
    correctAnswer: 'White',
    explanation: 'Green is agricultural, red is medical.'
  },
  {
    id: 'bio-bt-98',
    text: 'Blue biotechnology refers to the study of _____ organisms.',
    options: ['Deep sea/Marine', 'Plant', 'Human', 'Bacterial only'],
    correctAnswer: 'Deep sea/Marine',
    explanation: 'Exploring ocean biodiversity.'
  },
  {
    id: 'bio-bt-99',
    text: 'The "Father of PCR" is:',
    options: ['James Watson', 'Kary Mullis', 'Francis Crick', 'Gregor Mendel'],
    correctAnswer: 'Kary Mullis',
    explanation: 'Awarded Nobel Prize in 1993.'
  },
  {
    id: 'bio-bt-100',
    text: 'Biotechnology holds the potential to solve global issues like _____ and _____.',
    options: ['Food shortage, Diseases', 'Internet speed, Traffic', 'Fashion, Gaming', 'None'],
    correctAnswer: 'Food shortage, Diseases',
    explanation: 'Main drivers of research.'
  }
];
