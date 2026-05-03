import { Question } from '../types';

export const BIOLOGY_CELL_CYCLE_QUIZ: Question[] = [
  {
    id: 'bio-cc-1',
    text: 'The cell cycle is the series of events from one _____ to the next.',
    options: ['Cell division', 'Metabolism', 'Mutation', 'Death'],
    correctAnswer: 'Cell division',
    explanation: 'Consists of Interphase and M-phase.'
  },
  {
    id: 'bio-cc-2',
    text: 'Most of the cell cycle is spent in:',
    options: ['Prophase', 'Interphase', 'Mitosis', 'Cytokinesis'],
    correctAnswer: 'Interphase',
    explanation: 'About 90% of the total time; period of growth and DNA replication.'
  },
  {
    id: 'bio-cc-3',
    text: 'During which phase of interphase does DNA replication occur?',
    options: ['G1 phase', 'S phase', 'G2 phase', 'G0 phase'],
    correctAnswer: 'S phase',
    explanation: 'S stands for Synthesis.'
  },
  {
    id: 'bio-cc-4',
    text: 'The G1 phase is characterized by:',
    options: ['DNA replication', 'Protein synthesis and growth', 'Chromosome condensation', 'Cell death'],
    correctAnswer: 'Protein synthesis and growth',
    explanation: 'Preparation for DNA synthesis.'
  },
  {
    id: 'bio-cc-5',
    text: 'Cells that have stopped dividing are in the _____ phase.',
    options: ['G1', 'G2', 'G0', 'M'],
    correctAnswer: 'G0',
    explanation: 'Quiescent state; some cells like neurons stay here permanently.'
  },
  {
    id: 'bio-cc-6',
    text: 'Mitosis results in _____ daughter cells with _____ number of chromosomes as the parent.',
    options: ['Two, Half', 'Two, Same', 'Four, Half', 'Four, Same'],
    correctAnswer: 'Two, Same',
    explanation: 'Equational division.'
  },
  {
    id: 'bio-cc-7',
    text: 'The stage of mitosis where chromosomes condense and become visible is:',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correctAnswer: 'Prophase',
    explanation: 'Nucleolus disappears and nuclear envelope breaks down.'
  },
  {
    id: 'bio-cc-8',
    text: 'The stage of mitosis where chromosomes align at the cell equator is:',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correctAnswer: 'Metaphase',
    explanation: 'Chromosomes are attached to spindle fibers at their kinetochores.'
  },
  {
    id: 'bio-cc-9',
    text: 'The stage of mitosis where sister chromatids separate and move to opposite poles is:',
    options: ['Metaphase', 'Anaphase', 'Telophase', 'Cytokinesis'],
    correctAnswer: 'Anaphase',
    explanation: 'The shortest phase of mitosis.'
  },
  {
    id: 'bio-cc-10',
    text: 'The final stage of mitosis where two new nuclei form is:',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correctAnswer: 'Telophase',
    explanation: 'Reverse of prophase.'
  },
  {
    id: 'bio-cc-11',
    text: 'The division of the cytoplasm is called:',
    options: ['Karyokinesis', 'Cytokinesis', 'Mitosis', 'Meiosis'],
    correctAnswer: 'Cytokinesis',
    explanation: 'Usually follows telophase.'
  },
  {
    id: 'bio-cc-12',
    text: 'In animal cells, cytokinesis occurs through the formation of a:',
    options: ['Cell plate', 'Cleavage furrow', 'Spindle', 'Nucleolus'],
    correctAnswer: 'Cleavage furrow',
    explanation: 'Contractile ring of actin and myosin filaments.'
  },
  {
    id: 'bio-cc-13',
    text: 'In plant cells, cytokinesis occurs through the formation of a:',
    options: ['Cleavage furrow', 'Cell plate (Phragmoplast)', 'Vacuole', 'Bud'],
    correctAnswer: 'Cell plate (Phragmoplast)',
    explanation: 'Due to the presence of a rigid cell wall.'
  },
  {
    id: 'bio-cc-14',
    text: 'Meiosis results in _____ daughter cells with _____ number of chromosomes as the parent.',
    options: ['Two, Same', 'Four, Same', 'Four, Half', 'Two, Half'],
    correctAnswer: 'Four, Half',
    explanation: 'Reductant division; essential for sexual reproduction.'
  },
  {
    id: 'bio-cc-15',
    text: 'Homologous chromosomes pair up during _____ of meiosis I.',
    options: ['Prophase I', 'Metaphase I', 'Anaphase I', 'Telophase I'],
    correctAnswer: 'Prophase I',
    explanation: 'This pairing is called synapsis.'
  },
  {
    id: 'bio-cc-16',
    text: 'Crossing over occurs during which sub-stage of Prophase I?',
    options: ['Leptotene', 'Zygotene', 'Pachytene', 'Diplotene'],
    correctAnswer: 'Pachytene',
    explanation: 'Exchange of genetic material between non-sister chromatids.'
  },
  {
    id: 'bio-cc-17',
    text: 'The X-shaped structures visible at sites of crossing over are:',
    options: ['Centromeres', 'Chiasmata', 'Tetrads', 'Spindles'],
    correctAnswer: 'Chiasmata',
    explanation: 'Visible during diplotene.'
  },
  {
    id: 'bio-cc-18',
    text: 'Independent assortment of chromosomes occurs during:',
    options: ['Prophase I', 'Metaphase I', 'Anaphase I', 'Telophase I'],
    correctAnswer: 'Metaphase I',
    explanation: 'Random orientation of homologous pairs at the equator.'
  },
  {
    id: 'bio-cc-19',
    text: 'Separation of homologous chromosomes occurs during:',
    options: ['Anaphase I', 'Anaphase II', 'Metaphase I', 'Telophase II'],
    correctAnswer: 'Anaphase I',
    explanation: 'Sister chromatids remain attached at this stage.'
  },
  {
    id: 'bio-cc-20',
    text: 'Meiosis II is similar to _____ because sister chromatids separate.',
    options: ['Mitosis', 'Meiosis I', 'Interphase', 'Fertilization'],
    correctAnswer: 'Mitosis',
    explanation: 'But starts with haploid cells.'
  },
  {
    id: 'bio-cc-21',
    text: 'A permanent error in cell cycle control that leads to uncontrolled division is:',
    options: ['Apoptosis', 'Cancer', 'Differentiation', 'Evolution'],
    correctAnswer: 'Cancer',
    explanation: 'Often due to mutations in tumor suppressor genes or proto-oncogenes.'
  },
  {
    id: 'bio-cc-22',
    text: 'A mass of abnormal cells is called a:',
    options: ['Organ', 'Tumor (Neoplasm)', 'Cyst', 'Nodule'],
    correctAnswer: 'Tumor (Neoplasm)',
    explanation: 'Can be benign or malignant.'
  },
  {
    id: 'bio-cc-23',
    text: 'Malignant tumors have the ability to spread to other parts of the body, a process called:',
    options: ['Mitosis', 'Metastasis', 'Metamorphosis', 'Mutation'],
    correctAnswer: 'Metastasis',
    explanation: 'They travel through blood or lymph.'
  },
  {
    id: 'bio-cc-24',
    text: 'Programmed cell death is:',
    options: ['Necrosis', 'Apoptosis', 'Lysis', 'Autophagy'],
    correctAnswer: 'Apoptosis',
    explanation: 'Crucial for development and removing damaged cells.'
  },
  {
    id: 'bio-cc-25',
    text: 'Accidental cell death due to injury or infection is:',
    options: ['Apoptosis', 'Necrosis', 'Mitosis', 'Meiosis'],
    correctAnswer: 'Necrosis',
    explanation: 'Often leads to inflammation.'
  },
  {
    id: 'bio-cc-26',
    text: 'The period of time between Meiosis I and Meiosis II is:',
    options: ['Interphase', 'Interkinesis', 'G3 phase', 'Rest phase'],
    correctAnswer: 'Interkinesis',
    explanation: 'No DNA replication occurs during this time.'
  },
  {
    id: 'bio-cc-27',
    text: 'Synapsis is the pairing of:',
    options: ['Sister chromatids', 'Homologous chromosomes', 'Non-homologous chromosomes', 'Gametes'],
    correctAnswer: 'Homologous chromosomes',
    explanation: 'Forms a bivalent or tetrad.'
  },
  {
    id: 'bio-cc-28',
    text: 'The total number of chromatids in a human cell at metaphase of mitosis is:',
    options: ['23', '46', '92', '184'],
    correctAnswer: '92',
    explanation: '46 chromosomes, each with 2 sister chromatids.'
  },
  {
    id: 'bio-cc-29',
    text: 'The point where two sister chromatids are attached is the:',
    options: ['Kinetochore', 'Centromere', 'Telomere', 'Centrosome'],
    correctAnswer: 'Centromere',
    explanation: 'Contains the kinetochore where spindle fibers attach.'
  },
  {
    id: 'bio-cc-30',
    text: 'Non-disjunction during meiosis leads to _____ in offspring.',
    options: ['Mutations', 'Aneuploidy (e.g. Down Syndrome)', 'Polyploidy', 'Healthy growth'],
    correctAnswer: 'Aneuploidy (e.g. Down Syndrome)',
    explanation: 'Failure of chromosomes to separate properly.'
  },
  {
    id: 'bio-cc-31',
    text: 'Interphase G2 phase is mainly for _____ synthesis required for spindle formation.',
    options: ['DNA', 'Tubulin (Protein)', 'RNA', 'Lipid'],
    correctAnswer: 'Tubulin (Protein)',
    explanation: 'Preparation for M-phase.'
  },
  {
    id: 'bio-cc-32',
    text: 'The spindle fibers are made of:',
    options: ['Microtubules', 'Microfilaments', 'Intermediate filaments', 'Cellulose'],
    correctAnswer: 'Microtubules',
    explanation: 'Formed from tubulin subunits.'
  },
  {
    id: 'bio-cc-33',
    text: 'Centrioles are present in _____ cells and help in spindle formation.',
    options: ['Plant', 'Animal', 'Bacterial', 'Fungal'],
    correctAnswer: 'Animal',
    explanation: 'Higher plants lack centrioles but still form spindles.'
  },
  {
    id: 'bio-cc-34',
    text: 'Chromosomes reach their maximum condensation during:',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correctAnswer: 'Metaphase',
    explanation: 'Best stage to study chromosome morphology (Karyotyping).'
  },
  {
    id: 'bio-cc-35',
    text: 'Cytokinesis in animal cells involves a "Contractile Ring" made of _____ and _____.',
    options: ['Tubulin, Dynein', 'Actin, Myosin', 'Keratin, Collagen', 'DNA, RNA'],
    correctAnswer: 'Actin, Myosin',
    explanation: 'Same proteins involved in muscle contraction.'
  },
  {
    id: 'bio-cc-36',
    text: 'Mitosis is important for:',
    options: ['Growth', 'Repair of tissues', 'Asexual reproduction', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Maintains genetic consistency.'
  },
  {
    id: 'bio-cc-37',
    text: 'Meiosis is important for:',
    options: ['Producing gametes', 'Maintaining chromosome number across generations', 'Creating genetic diversity', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Key to sexual reproduction.'
  },
  {
    id: 'bio-cc-38',
    text: 'Crossing over results in new combinations of genes, a process called:',
    options: ['Mutation', 'Recombination', 'Translation', 'Transduction'],
    correctAnswer: 'Recombination',
    explanation: 'Increases variation in offspring.'
  },
  {
    id: 'bio-cc-39',
    text: 'Which is the longest phase of Meiosis?',
    options: ['Prophase I', 'Metaphase I', 'Anaphase II', 'Telophase II'],
    correctAnswer: 'Prophase I',
    explanation: 'Highly complex and subdivided into 5 stages.'
  },
  {
    id: 'bio-cc-40',
    text: 'The number of chromosomes is halved during:',
    options: ['Mitosis', 'Meiosis I', 'Meiosis II', 'Cytokinesis'],
    correctAnswer: 'Meiosis I',
    explanation: 'Reductional division.'
  },
  {
    id: 'bio-cc-41',
    text: 'Cancer cells are characterized by lack of:',
    options: ['Metabolism', 'Contact inhibition', 'DNA', 'Nucleus'],
    correctAnswer: 'Contact inhibition',
    explanation: 'They continue to divide even when crowded.'
  },
  {
    id: 'bio-cc-42',
    text: 'Agents that cause cancer are called:',
    options: ['Mutagens', 'Carcinogens', 'Teratogens', 'Pathogens'],
    correctAnswer: 'Carcinogens',
    explanation: 'Example: Tar in tobacco, UV radiation.'
  },
  {
    id: 'bio-cc-43',
    text: 'Oncogenes are genes that can cause cells to become:',
    options: ['Dead', 'Cancerous', 'Muscle cells', 'Neurons'],
    correctAnswer: 'Cancerous',
    explanation: 'Usually mutated versions of proto-oncogenes.'
  },
  {
    id: 'bio-cc-44',
    text: 'Tumor suppressor genes normally _____ cell division.',
    options: ['Promote', 'Inhibit', 'Speed up', 'Ignore'],
    correctAnswer: 'Inhibit',
    explanation: 'Loss of function leads to cancer (e.g. p53 gene).'
  },
  {
    id: 'bio-cc-45',
    text: 'Which is a "Benign" tumor?',
    options: ['Spreads quickly', 'Does not spread (remains localized)', 'Always fatal', 'None'],
    correctAnswer: 'Does not spread (remains localized)',
    explanation: 'Usually less dangerous than malignant ones.'
  },
  {
    id: 'bio-cc-46',
    text: 'Apoptosis involves the activation of enzymes called:',
    options: ['Polymerases', 'Caspases', 'Lipases', 'Amylases'],
    correctAnswer: 'Caspases',
    explanation: 'A family of protease enzymes.'
  },
  {
    id: 'bio-cc-47',
    text: 'Necrosis often results in the release of _____ that damage neighboring cells.',
    options: ['Vitamins', 'Lysosomal enzymes', 'Hormones', 'ATP'],
    correctAnswer: 'Lysosomal enzymes',
    explanation: 'Leads to tissue death and inflammation.'
  },
  {
    id: 'bio-cc-48',
    text: 'The state where a cell has 3 sets of chromosomes (3n) is:',
    options: ['Trisomy', 'Triploidy', 'Aneuploidy', 'Haploidy'],
    correctAnswer: 'Triploidy',
    explanation: 'Common in plants, rare/lethal in humans.'
  },
  {
    id: 'bio-cc-49',
    text: 'Monosomy is represented as _____ and Trisomy as _____.',
    options: ['n, 2n', '2n-1, 2n+1', '3n, 4n', 'None'],
    correctAnswer: '2n-1, 2n+1',
    explanation: 'Aneuploidy conditions.'
  },
  {
    id: 'bio-cc-50',
    text: 'Which is a symptom of Down Syndrome?',
    options: ['Mental retardation', 'Flat facial profile', 'Short stature', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Caused by Trisomy 21.'
  },
  {
    id: 'bio-cc-51',
    text: 'Chromatids of the same chromosome are _____ and those of homologous chromosomes are _____.',
    options: ['Sisters, Non-sisters', 'Non-sisters, Sisters', 'Identical, Random', 'None'],
    correctAnswer: 'Sisters, Non-sisters',
    explanation: 'Essential distinction for understanding crossing over.'
  },
  {
    id: 'bio-cc-52',
    text: 'In which stage of meiosis does the actual reduction of chromosome number happen?',
    options: ['Meiosis I', 'Meiosis II', 'Interphase', 'Fertilization'],
    correctAnswer: 'Meiosis I',
    explanation: 'Homologous pairs separate.'
  },
  {
    id: 'bio-cc-53',
    text: 'What happens to the chromosome number during fertilization?',
    options: ['Halved', 'Doubled (Restored to 2n)', 'Stay same', 'Tripled'],
    correctAnswer: 'Doubled (Restored to 2n)',
    explanation: 'Combines two haploid gametes.'
  },
  {
    id: 'bio-cc-54',
    text: 'Karyokinesis is the division of the:',
    options: ['Cytoplasm', 'Nucleus', 'Cell wall', 'Mitochondria'],
    correctAnswer: 'Nucleus',
    explanation: 'Consists of the 4 main stages (PMAT).'
  },
  {
    id: 'bio-cc-55',
    text: 'The region of the cell from which spindle fibers originate is the:',
    options: ['Centromere', 'Centrosome/MTOC', 'Nucleolus', 'Ribosome'],
    correctAnswer: 'Centrosome/MTOC',
    explanation: 'Microtubule Organizing Center.'
  },
  {
    id: 'bio-cc-56',
    text: 'Colchicine is a drug that _____ and is used to study chromosomes.',
    options: ['Speeds up mitosis', 'Inhibits spindle formation', 'Replicates DNA', 'None'],
    correctAnswer: 'Inhibits spindle formation',
    explanation: 'Arrests cells at metaphase.'
  },
  {
    id: 'bio-cc-57',
    text: 'Which type of cell division produces genetic clones?',
    options: ['Mitosis', 'Meiosis', 'Fertilization', 'Mutation'],
    correctAnswer: 'Mitosis',
    explanation: 'Standard for growth and asexual reproduction.'
  },
  {
    id: 'bio-cc-58',
    text: 'Binary fission in bacteria is _____ than mitosis in eukaryotic cells.',
    options: ['Simpler and faster', 'More complex', 'Same', 'Slower'],
    correctAnswer: 'Simpler and faster',
    explanation: 'No nuclear envelope to break down.'
  },
  {
    id: 'bio-cc-59',
    text: 'Crossing over occurs between _____ chromatids of _____ chromosomes.',
    options: ['Sister, same', 'Non-sister, homologous', 'Sister, homologous', 'Non-sister, different'],
    correctAnswer: 'Non-sister, homologous',
    explanation: 'Basis of genetic recombination.'
  },
  {
    id: 'bio-cc-60',
    text: 'The "Interphase" is also known as the _____ phase.',
    options: ['Resting', 'Active/Preparatory', 'Death', 'Division'],
    correctAnswer: 'Active/Preparatory',
    explanation: 'Highly active metabolically.'
  },
  {
    id: 'bio-cc-61',
    text: 'Leptotene is characterized by _____ of chromatin.',
    options: ['Disappearance', 'Condensation into thin threads', 'Pairing', 'Duplication'],
    correctAnswer: 'Condensation into thin threads',
    explanation: 'First stage of Prophase I.'
  },
  {
    id: 'bio-cc-62',
    text: 'Synapsis occurs during which stage?',
    options: ['Leptotene', 'Zygotene', 'Pachytene', 'Diplotene'],
    correctAnswer: 'Zygotene',
    explanation: 'Pairing of homologous chromosomes.'
  },
  {
    id: 'bio-cc-63',
    text: 'The complex that holds homologous chromosomes together during synapsis is the:',
    options: ['Chiasma', 'Synaptonemal complex', 'Centromere', 'Kinetochore'],
    correctAnswer: 'Synaptonemal complex',
    explanation: 'Protein structure.'
  },
  {
    id: 'bio-cc-64',
    text: 'Terminalization of chiasmata occurs during:',
    options: ['Zygotene', 'Diplotene', 'Diakinesis', 'Pachytene'],
    correctAnswer: 'Diakinesis',
    explanation: 'Last stage of Prophase I; chiasmata move to the ends of chromatids.'
  },
  {
    id: 'bio-cc-65',
    text: 'A "Tetrad" consists of _____ chromatids.',
    options: ['2', '4', '8', '1'],
    correctAnswer: '4',
    explanation: 'Two homologous chromosomes paired together.'
  },
  {
    id: 'bio-cc-66',
    text: 'Meiosis is sometimes called _____ division.',
    options: ['Equational', 'Reductional', 'Circular', 'Binary'],
    correctAnswer: 'Reductional',
    explanation: 'Because it halves the chromosome number.'
  },
  {
    id: 'bio-cc-67',
    text: 'Which is NOT a phase of the cell cycle?',
    options: ['G1', 'S', 'G2', 'M', 'G4'],
    correctAnswer: 'G4',
    explanation: 'G4 does not exist.'
  },
  {
    id: 'bio-cc-68',
    text: 'Chemotherapy drugs often work by _____ cell division.',
    options: ['Promoting', 'Inhibiting', 'Starting', 'Ignoring'],
    correctAnswer: 'Inhibiting',
    explanation: 'Targeting rapidly dividing cancer cells.'
  },
  {
    id: 'bio-cc-69',
    text: 'Biopsy is a diagnostic technique for cancer involving the _____ of a tissue sample.',
    options: ['Injection', 'Removal and examination', 'Heating', 'None'],
    correctAnswer: 'Removal and examination',
    explanation: 'To look for malignant cells.'
  },
  {
    id: 'bio-cc-70',
    text: 'Radiotherapy uses _____ to kill cancer cells.',
    options: ['Sound waves', 'Ionizing radiation', 'Light', 'Heat'],
    correctAnswer: 'Ionizing radiation',
    explanation: 'Damages the DNA of cancer cells.'
  },
  {
    id: 'bio-cc-71',
    text: 'Apoptosis helps in _____ of a developing fetus.',
    options: ['Feeding', 'Shaping (e.g. digits)', 'Naming', 'Growing bones'],
    correctAnswer: 'Shaping (e.g. digits)',
    explanation: 'Removes cells between fingers and toes.'
  },
  {
    id: 'bio-cc-72',
    text: 'Autophagy is the process where a cell _____ its own components.',
    options: ['Produces', 'Digests/Recycles', 'Expels', 'Freezes'],
    correctAnswer: 'Digests/Recycles',
    explanation: 'Using lysosomes.'
  },
  {
    id: 'bio-cc-73',
    text: 'The human karyotype is the set of _____ of a person.',
    options: ['Genes', 'Chromosomes', 'Proteins', 'Organs'],
    correctAnswer: 'Chromosomes',
    explanation: 'Arranged in pairs by size and shape.'
  },
  {
    id: 'bio-cc-74',
    text: 'In which stage of cell cycle are organelles duplicated?',
    options: ['S phase', 'G1 phase', 'M phase', 'Anaphase'],
    correctAnswer: 'G1 phase',
    explanation: 'General metabolic growth.'
  },
  {
    id: 'bio-cc-75',
    text: 'The check-point that ensures DNA replication is complete is at:',
    options: ['G1/S', 'G2/M', 'Metaphase/Anaphase', 'None'],
    correctAnswer: 'G2/M',
    explanation: 'Prevents entry into mitosis if DNA is damaged or incomplete.'
  },
  {
    id: 'bio-cc-76',
    text: 'A bivalent has _____ chromosomes and _____ chromatids.',
    options: ['2, 2', '2, 4', '4, 2', '4, 8'],
    correctAnswer: '2, 4',
    explanation: 'A pair of homologous chromosomes.'
  },
  {
    id: 'bio-cc-77',
    text: 'In meiosis I, _____ separate; in meiosis II, _____ separate.',
    options: ['Sister chromatids, Homologous pairs', 'Homologous pairs, Sister chromatids', 'Both same', 'None'],
    correctAnswer: 'Homologous pairs, Sister chromatids',
    explanation: 'Key difference between the two divisions.'
  },
  {
    id: 'bio-cc-78',
    text: 'Human skin cells divide by:',
    options: ['Meiosis', 'Mitosis', 'Binary fission', 'Grafting'],
    correctAnswer: 'Mitosis',
    explanation: 'Somatic cells.'
  },
  {
    id: 'bio-cc-79',
    text: 'Which factor determines whether a cell enters G0 or G1?',
    options: ['Time of day', 'Availability of growth factors', 'Color of cell', 'None'],
    correctAnswer: 'Availability of growth factors',
    explanation: 'External signals regulate the cell cycle.'
  },
  {
    id: 'bio-cc-80',
    text: 'The "Resting stage" between the end of meiosis I and start of meiosis II is:',
    options: ['Interphase', 'Interkinesis', 'S-phase', 'Cytokinesis'],
    correctAnswer: 'Interkinesis',
    explanation: 'Short duration, no DNA replication.'
  },
  {
    id: 'bio-cc-81',
    text: 'Which is a "Malignant" characteristic?',
    options: ['Invasive growth', 'Metastasis', 'High mutation rate', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Properties of cancer.'
  },
  {
    id: 'bio-cc-82',
    text: 'p53 is a _____ protein often mutated in cancers.',
    options: ['Oncogenic', 'Tumor suppressor', 'Viral', 'Digestive'],
    correctAnswer: 'Tumor suppressor',
    explanation: 'Called the "Guardian of the Genome".'
  },
  {
    id: 'bio-cc-83',
    text: 'DNA condensation is achieved by wrapping around _____ proteins.',
    options: ['Non-histone', 'Histone', 'Enzymatic', 'Contractile'],
    correctAnswer: 'Histone',
    explanation: 'Octamer of histones.'
  },
  {
    id: 'bio-cc-84',
    text: 'The shortest phase of mitosis is:',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correctAnswer: 'Anaphase',
    explanation: 'Rapid separation of chromatids.'
  },
  {
    id: 'bio-cc-85',
    text: 'Sister chromatids are _____ copies of each other.',
    options: ['Different', 'Identical', 'Random', 'None'],
    correctAnswer: 'Identical',
    explanation: 'Produced during S-phase replication.'
  },
  {
    id: 'bio-cc-86',
    text: 'Non-disjunction of sex chromosomes can lead to:',
    options: ['Turner Syndrome', 'Klinefelter Syndrome', 'Both A and B', 'Down Syndrome only'],
    correctAnswer: 'Both A and B',
    explanation: 'Numerical abnormalities in X or Y chromosomes.'
  },
  {
    id: 'bio-cc-87',
    text: 'Cancer cells have _____ telomerase activity, making them immortal.',
    options: ['High', 'Low', 'Zero', 'Decreasing'],
    correctAnswer: 'High',
    explanation: 'Maintain telomere length allowing infinite divisions.'
  },
  {
    id: 'bio-cc-88',
    text: 'The nuclear envelope reforms during:',
    options: ['Prophase', 'Anaphase', 'Telophase', 'Interphase'],
    correctAnswer: 'Telophase',
    explanation: 'Marking the end of nuclear division.'
  },
  {
    id: 'bio-cc-89',
    text: 'What happens in G2 phase?',
    options: ['DNA replication', 'Cell growth and protein synthesis', 'Division', 'Death'],
    correctAnswer: 'Cell growth and protein synthesis',
    explanation: 'Final prep for mitosis.'
  },
  {
    id: 'bio-cc-90',
    text: 'Which is NOT a source of genetic variation in meiosis?',
    options: ['Crossing over', 'Independent assortment', 'Random fertilization', 'Mitotic cytokinesis'],
    correctAnswer: 'Mitotic cytokinesis',
    explanation: 'Mitosis produces identical cells.'
  },
  {
    id: 'bio-cc-91',
    text: 'A "Kinetochore" is a _____ structure on the centromere.',
    options: ['Lipid', 'Carbohydrate', 'Protein', 'RNA'],
    correctAnswer: 'Protein',
    explanation: 'Where spindles bind.'
  },
  {
    id: 'bio-cc-92',
    text: 'Polyploidy is more common in _____ than in _____.',
    options: ['Animals, Plants', 'Plants, Animals', 'Bacteria, Fungi', 'None'],
    correctAnswer: 'Plants, Animals',
    explanation: 'Can result in larger flowers and fruits.'
  },
  {
    id: 'bio-cc-93',
    text: 'The "Spindle Apparatus" disappears during:',
    options: ['Anaphase', 'Metaphase', 'Telophase', 'Prophase'],
    correctAnswer: 'Telophase',
    explanation: 'Microtubules depolymerize.'
  },
  {
    id: 'bio-cc-94',
    text: 'In which stage of meiosis I are homologous pairs pulled apart?',
    options: ['Anaphase I', 'Anaphase II', 'Metaphase I', 'Telophase I'],
    correctAnswer: 'Anaphase I',
    explanation: 'Reduces chromosome number by half.'
  },
  {
    id: 'bio-cc-95',
    text: 'Interphase G1 is also called _____ phase.',
    options: ['Synthesis', 'Post-mitotic gap', 'Pre-mitotic gap', 'M'],
    correctAnswer: 'Post-mitotic gap',
    explanation: 'Occurs after mitosis.'
  },
  {
    id: 'bio-cc-96',
    text: 'Interphase G2 is also called _____ phase.',
    options: ['Synthesis', 'Post-mitotic gap', 'Pre-mitotic gap', 'None'],
    correctAnswer: 'Pre-mitotic gap',
    explanation: 'Occurs before mitosis.'
  },
  {
    id: 'bio-cc-97',
    text: 'A cell with 2n = 8 chromosomes will have _____ chromatids in prophase of mitosis.',
    options: ['8', '16', '32', '4'],
    correctAnswer: '16',
    explanation: 'Each chromosome has 2 chromatids.'
  },
  {
    id: 'bio-cc-98',
    text: 'Which hormone can stimulate cell division in plants?',
    options: ['ABA', 'Cytokinin', 'Ethylene', 'All of above'],
    correctAnswer: 'Cytokinin',
    explanation: 'Promotes cytokinesis.'
  },
  {
    id: 'bio-cc-99',
    text: 'Cancer that originates in epithelial tissue is a:',
    options: ['Sarcoma', 'Carcinoma', 'Leukemia', 'Lymphoma'],
    correctAnswer: 'Carcinoma',
    explanation: 'Most common type of cancer.'
  },
  {
    id: 'bio-cc-100',
    text: 'Understanding the cell cycle is vital for curing _____ and _____.',
    options: ['Cancer, Developmental defects', 'Cold, Flu', 'Broken bones, Burns', 'None'],
    correctAnswer: 'Cancer, Developmental defects',
    explanation: 'Both are related to cell division errors.'
  }
];
