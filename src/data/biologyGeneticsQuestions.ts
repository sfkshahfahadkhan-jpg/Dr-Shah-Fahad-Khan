import { Question } from '../types';

export const BIOLOGY_GENETICS_QUIZ: Question[] = [
  {
    id: 'bio-gen-1',
    text: 'Who is known as the "Father of Genetics"?',
    options: ['Charles Darwin', 'Gregor Mendel', 'James Watson', 'Thomas Hunt Morgan'],
    correctAnswer: 'Gregor Mendel',
    explanation: 'Conducted experiments on pea plants (Pisum sativum).'
  },
  {
    id: 'bio-gen-2',
    text: 'A specific version of a gene is called a(n):',
    options: ['Trait', 'Allele', 'Locus', 'Phenotype'],
    correctAnswer: 'Allele',
    explanation: 'Genes can have multiple alleles (e.g. height: tall vs short).'
  },
  {
    id: 'bio-gen-3',
    text: 'The physical appearance of an organism is its _____ and its genetic makeup is its _____.',
    options: ['Genotype, Phenotype', 'Phenotype, Genotype', 'Allele, Trait', 'None'],
    correctAnswer: 'Phenotype, Genotype',
    explanation: 'Phenotype results from genotype and environment.'
  },
  {
    id: 'bio-gen-4',
    text: 'An organism with two identical alleles for a trait is:',
    options: ['Heterozygous', 'Homozygous', 'Hemizygous', 'Polyploid'],
    correctAnswer: 'Homozygous',
    explanation: 'e.g. TT or tt.'
  },
  {
    id: 'bio-gen-5',
    text: 'An organism with two different alleles for a trait is:',
    options: ['Homozygous', 'Heterozygous', 'Dominant', 'Recessive'],
    correctAnswer: 'Heterozygous',
    explanation: 'e.g. Tt.'
  },
  {
    id: 'bio-gen-6',
    text: 'Mendel\'s Law of Segregation states that alleles separate during _____ formation.',
    options: ['Mitosis', 'Gamete (Meiosis)', 'Fertilization', 'Growth'],
    correctAnswer: 'Gamete (Meiosis)',
    explanation: 'Each gamete receives only one allele of a pair.'
  },
  {
    id: 'bio-gen-7',
    text: 'Mendel\'s Law of Independent Assortment applies to traits located on _____ chromosomes.',
    options: ['Same', 'Different (Non-homologous)', 'Sex', 'None'],
    correctAnswer: 'Different (Non-homologous)',
    explanation: 'Alleles of different genes distribute independently into gametes.'
  },
  {
    id: 'bio-gen-8',
    text: 'A cross between two individuals for a single trait is a _____ cross.',
    options: ['Monohybrid', 'Dihybrid', 'Test', 'Back'],
    correctAnswer: 'Monohybrid',
    explanation: 'F2 phenotypic ratio is 3:1.'
  },
  {
    id: 'bio-gen-9',
    text: 'A cross between two individuals for two traits is a _____ cross.',
    options: ['Monohybrid', 'Dihybrid', 'Test', 'Back'],
    correctAnswer: 'Dihybrid',
    explanation: 'F2 phenotypic ratio is 9:3:3:1.'
  },
  {
    id: 'bio-gen-10',
    text: 'The cross of an F1 individual with a homozygous recessive parent is a:',
    options: ['Back cross', 'Test cross', 'Self cross', 'None'],
    correctAnswer: 'Test cross',
    explanation: 'Used to determine the genotype of an unknown individual.'
  },
  {
    id: 'bio-gen-11',
    text: 'In incomplete dominance, the heterozygous phenotype is:',
    options: ['Same as dominant', 'Same as recessive', 'An intermediate blend', 'Both expressed fully'],
    correctAnswer: 'An intermediate blend',
    explanation: 'e.g. Pink flowers in 4 o\'clock plant (Red x White).'
  },
  {
    id: 'bio-gen-12',
    text: 'In co-dominance, both alleles are _____ in the heterozygote.',
    options: ['Blended', 'Expressed equally and distinctly', 'Hidden', 'Mutated'],
    correctAnswer: 'Expressed equally and distinctly',
    explanation: 'e.g. AB blood group.'
  },
  {
    id: 'bio-gen-13',
    text: 'How many alleles control the ABO blood group system in humans?',
    options: ['2', '3', '4', 'Multiple (more than 3)'],
    correctAnswer: '3',
    explanation: 'Alleles I^A, I^B, and i.'
  },
  {
    id: 'bio-gen-14',
    text: 'Which blood type is the "Universal Donor"?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 'O',
    explanation: 'Lacks A and B antigens on RBC surface.'
  },
  {
    id: 'bio-gen-15',
    text: 'Which blood type is the "Universal Recipient"?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 'AB',
    explanation: 'Lacks anti-A and anti-B antibodies in plasma.'
  },
  {
    id: 'bio-gen-16',
    text: 'The Rh factor is named after the _____ monkey.',
    options: ['Rhesus', 'Spider', 'Baboon', 'Chimpanzee'],
    correctAnswer: 'Rhesus',
    explanation: 'An antigen found on the surface of RBCs.'
  },
  {
    id: 'bio-gen-17',
    text: 'Erythroblastosis fetalis occurs when an _____ mother carries an _____ fetus.',
    options: ['Rh+, Rh-', 'Rh-, Rh+', 'Rh+, Rh+', 'Rh-, Rh-'],
    correctAnswer: 'Rh-, Rh+',
    explanation: 'Maternal antibodies attack fetal RBCs.'
  },
  {
    id: 'bio-gen-18',
    text: 'Genes located on the same chromosome that tend to be inherited together are:',
    options: ['Linked', 'Unlinked', 'Independent', 'Mutated'],
    correctAnswer: 'Linked',
    explanation: 'This is called gene linkage.'
  },
  {
    id: 'bio-gen-19',
    text: 'The unit of distance between linked genes is the:',
    options: ['Centimeter', 'Map unit (Centimorgan)', 'Micron', 'Nanometer'],
    correctAnswer: 'Map unit (Centimorgan)',
    explanation: 'Based on recombination frequency.'
  },
  {
    id: 'bio-gen-20',
    text: 'In humans, sex is determined by which pair of chromosomes?',
    options: ['1st', '22nd', '23rd', 'None'],
    correctAnswer: '23rd',
    explanation: 'XX for females, XY for males.'
  },
  {
    id: 'bio-gen-21',
    text: 'Which parent determines the sex of the child in humans?',
    options: ['Mother', 'Father', 'Both equally', 'Randomly'],
    correctAnswer: 'Father',
    explanation: 'Father can contribute X or Y; mother only X.'
  },
  {
    id: 'bio-gen-22',
    text: 'Sex-linked traits are mostly located on the _____ chromosome.',
    options: ['X', 'Y', '1st', 'Autosome'],
    correctAnswer: 'X',
    explanation: 'Because it is much larger than the Y chromosome.'
  },
  {
    id: 'bio-gen-23',
    text: 'Which is an X-linked recessive disorder?',
    options: ['Hemophilia', 'Color blindness', 'Muscular dystrophy', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'More common in males because they have only one X chromosome.'
  },
  {
    id: 'bio-gen-24',
    text: 'A "Carrier" of an X-linked recessive trait is always:',
    options: ['Male', 'Female', 'Either', 'Neither'],
    correctAnswer: 'Female',
    explanation: 'She has one normal allele and one mutant allele.'
  },
  {
    id: 'bio-gen-25',
    text: 'Y-linked traits are also called _____ traits.',
    options: ['X-linked', 'Holandric', 'Autosomal', 'Silent'],
    correctAnswer: 'Holandric',
    explanation: 'Passed only from father to son.'
  },
  {
    id: 'bio-gen-26',
    text: 'The tendency of genes to be inherited together is _____ while their separation during meiosis is _____.',
    options: ['Linkage, Crossing over', 'Crossing over, Linkage', 'Mitosis, Meiosis', 'None'],
    correctAnswer: 'Linkage, Crossing over',
    explanation: 'Crossing over breaks linkage.'
  },
  {
    id: 'bio-gen-27',
    text: 'Epistasis is when one gene _____ the expression of another gene.',
    options: ['Enhances', 'Masks or interferes with', 'Does not affect', 'Copies'],
    correctAnswer: 'Masks or interferes with',
    explanation: 'e.g. Coat color in Labrador retrievers.'
  },
  {
    id: 'bio-gen-28',
    text: 'Pleiotropy is when a single gene affects _____ trait(s).',
    options: ['One', 'Multiple', 'No', 'Hidden'],
    correctAnswer: 'Multiple',
    explanation: 'e.g. Sickle cell anemia affects hemoglobin, RBC shape, and blood flow.'
  },
  {
    id: 'bio-gen-29',
    text: 'Polygenic inheritance is when one trait is controlled by _____ gene(s).',
    options: ['One', 'Two or more', 'No', 'Lethal'],
    correctAnswer: 'Two or more',
    explanation: 'e.g. Human skin color, height.'
  },
  {
    id: 'bio-gen-30',
    text: 'The sum of all alleles in a population is the:',
    options: ['Genotype', 'Phenotype', 'Gene pool', 'Genome'],
    correctAnswer: 'Gene pool',
    explanation: 'Changes in the gene pool reflect evolution.'
  },
  {
    id: 'bio-gen-31',
    text: 'Mendel used "Factors" for what we now call:',
    options: ['Proteins', 'Genes', 'Chromosomes', 'Cells'],
    correctAnswer: 'Genes',
    explanation: 'Discrete units of inheritance.'
  },
  {
    id: 'bio-gen-32',
    text: 'Why did Mendel choose pea plants?',
    options: ['Easy to grow', 'Short life cycle', 'Contrasting traits', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Ideal model organism.'
  },
  {
    id: 'bio-gen-33',
    text: 'A "True-breeding" plant is one that is:',
    options: ['Heterozygous', 'Homozygous', 'Mutated', 'Sterile'],
    correctAnswer: 'Homozygous',
    explanation: 'Produces identical offspring for generations when selfed.'
  },
  {
    id: 'bio-gen-34',
    text: 'The Punnett Square is used to predict the _____ of a cross.',
    options: ['Outcome/Probability', 'Color', 'Speed', 'Age'],
    correctAnswer: 'Outcome/Probability',
    explanation: 'Named after Reginald Punnett.'
  },
  {
    id: 'bio-gen-35',
    text: 'A 1:2:1 phenotypic ratio in F2 of a monohybrid cross suggests:',
    options: ['Complete dominance', 'Incomplete dominance/Co-dominance', 'Epistasis', 'Linkage'],
    correctAnswer: 'Incomplete dominance/Co-dominance',
    explanation: 'Phenotype matches the genotype.'
  },
  {
    id: 'bio-gen-36',
    text: 'Multiple alleles result from _____ of a single gene.',
    options: ['Deletion', 'Mutation', 'Duplication', 'None'],
    correctAnswer: 'Mutation',
    explanation: 'Creating different variations over time.'
  },
  {
    id: 'bio-gen-37',
    text: 'The genotype of a person with blood type O is:',
    options: ['I^A I^A', 'I^B i', 'ii', 'I^A I^B'],
    correctAnswer: 'ii',
    explanation: 'O is recessive.'
  },
  {
    id: 'bio-gen-38',
    text: 'Can a type A parent and a type B parent have a type O child?',
    options: ['Yes', 'No', 'Only if they are twins', 'Never'],
    correctAnswer: 'Yes',
    explanation: 'If both parents are heterozygous (I^A i and I^B i).'
  },
  {
    id: 'bio-gen-39',
    text: 'Anti-Rh antibodies are produced only after an Rh- person is _____ to Rh+ blood.',
    options: ['Born', 'Exposed', 'Healed', 'Fed'],
    correctAnswer: 'Exposed',
    explanation: 'Unlike ABO antibodies which are innate.'
  },
  {
    id: 'bio-gen-40',
    text: 'Morgan used _____ as his model organism for genetics.',
    options: ['Pea plant', 'Fruit fly (Drosophila melanogaster)', 'Mouse', 'Corn'],
    correctAnswer: 'Fruit fly (Drosophila melanogaster)',
    explanation: 'Discovered sex-linkage.'
  },
  {
    id: 'bio-gen-41',
    text: 'In the XO sex-determination system (grasshoppers), males have _____ chromosome(s).',
    options: ['XX', 'XY', 'X (one)', 'YY'],
    correctAnswer: 'X (one)',
    explanation: 'Females are XX.'
  },
  {
    id: 'bio-gen-42',
    text: 'In the ZW sex-determination system (birds), females are _____ and males are _____.',
    options: ['ZW, ZZ', 'ZZ, ZW', 'XY, XX', 'XX, XY'],
    correctAnswer: 'ZW, ZZ',
    explanation: 'Female is the heterogametic sex.'
  },
  {
    id: 'bio-gen-43',
    text: 'Color blindness is more common in males because they are _____ for the X chromosome.',
    options: ['Homozygous', 'Heterozygous', 'Hemizygous', 'Diploid'],
    correctAnswer: 'Hemizygous',
    explanation: 'They only have one copy of X.'
  },
  {
    id: 'bio-gen-44',
    text: 'A hemophilic man marries a normal woman (not a carrier). What % of sons will be hemophilic?',
    options: ['0%', '50%', '100%', '25%'],
    correctAnswer: '0%',
    explanation: 'Sons get Y from father and X from mother. All daughters will be carriers.'
  },
  {
    id: 'bio-gen-45',
    text: 'Over-dominance is when the heterozygote is _____ the homozygous dominant.',
    options: ['Same as', 'Less than', 'More extreme/Superior to', 'None'],
    correctAnswer: 'More extreme/Superior to',
    explanation: 'e.g. Heterozygote advantage in sickle cell trait (malaria resistance).'
  },
  {
    id: 'bio-gen-46',
    text: 'Gene interactions like epistasis often _____ the Mendelian 9:3:3:1 ratio.',
    options: ['Confirm', 'Modify', 'Ignore', 'Reverse'],
    correctAnswer: 'Modify',
    explanation: 'e.g. 9:7, 12:3:1, etc.'
  },
  {
    id: 'bio-gen-47',
    text: 'Environmental factors like _____ can affect the phenotype.',
    options: ['Temperature', 'Nutrition', 'Light', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'e.g. Himalayan rabbit fur color (temperature sensitive).'
  },
  {
    id: 'bio-gen-48',
    text: 'Continuous variation (like height) is typical of _____ traits.',
    options: ['Monogenic', 'Polygenic', 'Lethal', 'Mutant'],
    correctAnswer: 'Polygenic',
    explanation: 'Produces a bell-shaped curve.'
  },
  {
    id: 'bio-gen-49',
    text: 'Crossing over takes place in which stage of meiosis?',
    options: ['Prophase I', 'Prophase II', 'Anaphase I', 'Telophase I'],
    correctAnswer: 'Prophase I',
    explanation: 'Specifically Pachytene.'
  },
  {
    id: 'bio-gen-50',
    text: 'The closer two genes are on a chromosome, the _____ likely they are to cross over.',
    options: ['More', 'Less', 'Equally', 'None'],
    correctAnswer: 'Less',
    explanation: 'Recombination frequency is proportional to distance.'
  },
  {
    id: 'bio-gen-51',
    text: 'A cross between F1 and the dominant parent is a _____ cross.',
    options: ['Test', 'Back', 'Out', 'None'],
    correctAnswer: 'Back',
    explanation: 'General term for crossing with a parental genotype.'
  },
  {
    id: 'bio-gen-52',
    text: 'In Mendel\'s peas, Tall (T) was _____ over Short (t).',
    options: ['Recessive', 'Dominant', 'Co-dominant', 'Incomplete'],
    correctAnswer: 'Dominant',
    explanation: 'Tt is tall.'
  },
  {
    id: 'bio-gen-53',
    text: 'What is the genotypic ratio of a monohybrid F2?',
    options: ['3:1', '1:2:1', '9:3:3:1', '1:1'],
    correctAnswer: '1:2:1',
    explanation: '1 TT : 2 Tt : 1 tt.'
  },
  {
    id: 'bio-gen-54',
    text: 'Probability of an event occurring is calculated as _____ divided by _____.',
    options: ['Total outcomes, Favorable outcomes', 'Favorable outcomes, Total outcomes', '1, 2', 'None'],
    correctAnswer: 'Favorable outcomes, Total outcomes',
    explanation: 'Basic math in genetics.'
  },
  {
    id: 'bio-gen-55',
    text: 'If two events are independent, the probability of both occurring is the _____ of their individual probabilities.',
    options: ['Sum', 'Difference', 'Product', 'Ratio'],
    correctAnswer: 'Product',
    explanation: 'Product Rule (e.g. chance of 2 boys in a row is 1/2 * 1/2 = 1/4).'
  },
  {
    id: 'bio-gen-56',
    text: 'If two events are mutually exclusive, the probability of either occurring is the _____ of their individual probabilities.',
    options: ['Sum', 'Product', 'Difference', 'Power'],
    correctAnswer: 'Sum',
    explanation: 'Sum Rule.'
  },
  {
    id: 'bio-gen-57',
    text: 'Lethal alleles cause _____ of the organism, usually in the embryonic stage.',
    options: ['Growth', 'Death', 'Fast movement', 'Color change'],
    correctAnswer: 'Death',
    explanation: 'Often seen in 2:1 ratios in survivors.'
  },
  {
    id: 'bio-gen-58',
    text: 'In the Bombay phenotype, a person with B genes may appear as type O because they lack the _____ substance.',
    options: ['H', 'A', 'Rh', 'Sugar'],
    correctAnswer: 'H',
    explanation: 'Classic example of recessive epistasis.'
  },
  {
    id: 'bio-gen-59',
    text: 'ABO blood groups are an example of _____ in human population.',
    options: ['Monogeny', 'Polymorphism', 'Mutation', 'Extinction'],
    correctAnswer: 'Polymorphism',
    explanation: 'Multiple forms existing in a population.'
  },
  {
    id: 'bio-gen-60',
    text: 'Secretors (80% of humans) have blood group antigens in their:',
    options: ['Bones', 'Saliva and body fluids', 'Hair', 'Nails'],
    correctAnswer: 'Saliva and body fluids',
    explanation: 'Controlled by the Se gene.'
  },
  {
    id: 'bio-gen-61',
    text: 'Haplo-diploidy is a sex-determination system in:',
    options: ['Humans', 'Honeybees', 'Birds', 'Snakes'],
    correctAnswer: 'Honeybees',
    explanation: 'Males are haploid (unfertilized egg), females are diploid.'
  },
  {
    id: 'bio-gen-62',
    text: 'The "SRY" gene on the Y chromosome is responsible for _____ development.',
    options: ['Ovary', 'Testis', 'Brain', 'Skin'],
    correctAnswer: 'Testis',
    explanation: 'Sex-determining Region Y.'
  },
  {
    id: 'bio-gen-63',
    text: 'Barr Body is an inactivated _____ chromosome found in female somatic cells.',
    options: ['Y', 'X', '1st', '21st'],
    correctAnswer: 'X',
    explanation: 'Ensures dosage compensation.'
  },
  {
    id: 'bio-gen-64',
    text: 'Genetic counseling helps people understand the risk of _____ in their families.',
    options: ['Inherited disorders', 'Infections', 'Accidents', 'Old age'],
    correctAnswer: 'Inherited disorders',
    explanation: 'Based on pedigree analysis.'
  },
  {
    id: 'bio-gen-65',
    text: 'A "Pedigree" chart shows the inheritance of a trait through _____ of a family.',
    options: ['Generations', 'Friends', 'Countries', 'None'],
    correctAnswer: 'Generations',
    explanation: 'Used to track genetic history.'
  },
  {
    id: 'bio-gen-66',
    text: 'In a pedigree, a square represents a _____ and a circle a _____.',
    options: ['Female, Male', 'Male, Female', 'Child, Parent', 'None'],
    correctAnswer: 'Male, Female',
    explanation: 'Standard symbols.'
  },
  {
    id: 'bio-gen-67',
    text: 'Which is an autosomal dominant disorder?',
    options: ['Cystic fibrosis', 'Huntington\'s disease', 'Sickle cell anemia', 'Hemophilia'],
    correctAnswer: 'Huntington\'s disease',
    explanation: 'Symptoms appear later in life.'
  },
  {
    id: 'bio-gen-68',
    text: 'Which is an autosomal recessive disorder?',
    options: ['Polydactyly', 'Cystic fibrosis', 'Hypercholesterolemia', 'None'],
    correctAnswer: 'Cystic fibrosis',
    explanation: 'Affects mucus production in lungs and pancreas.'
  },
  {
    id: 'bio-gen-69',
    text: 'Eugenics is the study of improving the human species by _____ breeding.',
    options: ['Random', 'Selective', 'External', 'None'],
    correctAnswer: 'Selective',
    explanation: 'Highly controversial and ethically complex.'
  },
  {
    id: 'bio-gen-70',
    text: 'Genetic drift is a _____ change in allele frequencies, especially in small populations.',
    options: ['Directed', 'Random', 'Slow', 'Zero'],
    correctAnswer: 'Random',
    explanation: 'e.g. Bottleneck effect, Founder effect.'
  },
  {
    id: 'bio-gen-71',
    text: 'Self-fertilization in a heterozygote (Tt) results in _____ ratio.',
    options: ['3:1', '1:1', '9:3:3:1', 'All tall'],
    correctAnswer: '3:1',
    explanation: 'Mendelian monohybrid ratio.'
  },
  {
    id: 'bio-gen-72',
    text: 'If a man with type O marries a woman with type AB, can they have an O child?',
    options: ['Yes', 'No', 'Maybe', 'Always'],
    correctAnswer: 'No',
    explanation: 'Children will be type A (I^A i) or type B (I^B i).'
  },
  {
    id: 'bio-gen-73',
    text: 'Antigens A and B are _____ attached to RBC membranes.',
    options: ['Proteins', 'Carbohydrates (Sugars)', 'Lipids', 'Acids'],
    correctAnswer: 'Carbohydrates (Sugars)',
    explanation: 'Determined by enzymatic activity of alleles.'
  },
  {
    id: 'bio-gen-74',
    text: 'Drosophila has _____ pairs of chromosomes.',
    options: ['4', '23', '8', '2'],
    correctAnswer: '4',
    explanation: 'Makes it easy to map genes.'
  },
  {
    id: 'bio-gen-75',
    text: 'Criss-cross inheritance is typical of _____ traits.',
    options: ['Autosomal', 'X-linked recessive', 'Cytoplasmic', 'Lethal'],
    correctAnswer: 'X-linked recessive',
    explanation: 'Father to daughter to grandson.'
  },
  {
    id: 'bio-gen-76',
    text: 'Baldness is an example of a sex-_____ trait.',
    options: ['Linked', 'Influenced', 'Limited', 'Zero'],
    correctAnswer: 'Influenced',
    explanation: 'Expressed differently in males and females due to hormones.'
  },
  {
    id: 'bio-gen-77',
    text: 'Beard growth is an example of a sex-_____ trait.',
    options: ['Linked', 'Influenced', 'Limited', 'None'],
    correctAnswer: 'Limited',
    explanation: 'Expressed only in one sex.'
  },
  {
    id: 'bio-gen-78',
    text: 'The chromosome theory of inheritance was proposed by:',
    options: ['Mendel', 'Sutton and Boveri', 'Watson and Crick', 'Morgan'],
    correctAnswer: 'Sutton and Boveri',
    explanation: 'Linked chromosomes to Mendel\'s factors.'
  },
  {
    id: 'bio-gen-79',
    text: 'Non-disjunction of autosomes is most common with chromosome:',
    options: ['1', '13', '18', '21'],
    correctAnswer: '21',
    explanation: 'Causes Down Syndrome.'
  },
  {
    id: 'bio-gen-80',
    text: 'A "Nullisomic" cell is:',
    options: ['2n', '2n-1', '2n-2', '2n+2'],
    correctAnswer: '2n-2',
    explanation: 'Missing both chromosomes of a pair.'
  },
  {
    id: 'bio-gen-81',
    text: 'Albinism is caused by deficiency of which enzyme?',
    options: ['Amylase', 'Tyrosinase', 'Pepsin', 'Ligase'],
    correctAnswer: 'Tyrosinase',
    explanation: 'Cannot produce melanin pigment.'
  },
  {
    id: 'bio-gen-82',
    text: 'Incomplete dominance in Mirabilis jalapa results in _____ flowers in the F1 generation.',
    options: ['Red', 'White', 'Pink', 'Red-white spotted'],
    correctAnswer: 'Pink',
    explanation: 'Neither allele is completely dominant.'
  },
  {
    id: 'bio-gen-83',
    text: 'Which is an example of co-dominance in animals?',
    options: ['MN blood group', 'Roan coat color in cattle', 'AB blood group', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Both alleles contribute to the phenotype.'
  },
  {
    id: 'bio-gen-84',
    text: 'Pseudoautosomal regions (PARs) are found on _____ and _____ chromosomes.',
    options: ['1, 2', 'X, Y', 'X, X', 'Y, Y'],
    correctAnswer: 'X, Y',
    explanation: 'Allow them to pair during meiosis.'
  },
  {
    id: 'bio-gen-85',
    text: 'A test cross with a dihybrid (AaBb x aabb) gives a _____ ratio if unlinked.',
    options: ['9:3:3:1', '1:1:1:1', '3:1', '1:1'],
    correctAnswer: '1:1:1:1',
    explanation: 'All four combinations equally likely.'
  },
  {
    id: 'bio-gen-86',
    text: 'If recombination frequency is 50%, the genes are _____ unlinked.',
    options: ['Physically', 'Functionally', 'Not', 'Always'],
    correctAnswer: 'Functionally',
    explanation: 'They assort independently.'
  },
  {
    id: 'bio-gen-87',
    text: 'Mitochondrial inheritance is also called _____ inheritance.',
    options: ['Paternal', 'Maternal (Cytoplasmic)', 'X-linked', 'None'],
    correctAnswer: 'Maternal (Cytoplasmic)',
    explanation: 'Passed from mother to all children.'
  },
  {
    id: 'bio-gen-88',
    text: 'Genomic imprinting is when the expression of a gene depends on:',
    options: ['Temperature', 'Which parent it came from', 'Age', 'Diet'],
    correctAnswer: 'Which parent it came from',
    explanation: 'Epigenetic phenomenon.'
  },
  {
    id: 'bio-gen-89',
    text: 'Hardy-Weinberg equilibrium describes a population that is:',
    options: ['Evolving fast', 'Not evolving', 'Extinct', 'Migrating'],
    correctAnswer: 'Not evolving',
    explanation: 'Frequencies stay constant if conditions met.'
  },
  {
    id: 'bio-gen-90',
    text: 'In the H-W equation (p^2 + 2pq + q^2 = 1), "2pq" represents:',
    options: ['Homozygous dominant', 'Homozygous recessive', 'Heterozygotes', 'Mutation rate'],
    correctAnswer: 'Heterozygotes',
    explanation: 'Carrier frequency.'
  },
  {
    id: 'bio-gen-91',
    text: 'A "Point Mutation" that changes a codon to code for a different amino acid is:',
    options: ['Silent', 'Missense', 'Nonsense', 'Frameshift'],
    correctAnswer: 'Missense',
    explanation: 'Changes the "sense" of the message.'
  },
  {
    id: 'bio-gen-92',
    text: 'How many different types of gametes are produced by an AaBbCc individual?',
    options: ['3', '6', '8', '2'],
    correctAnswer: '8',
    explanation: '2^n where n is the number of heterozygous pairs (2^3 = 8).'
  },
  {
    id: 'bio-gen-93',
    text: 'Polymerase Chain Reaction (PCR) is used to _____ DNA.',
    options: ['Cut', 'Join', 'Amplify (Copy)', 'Sequencing'],
    correctAnswer: 'Amplify (Copy)',
    explanation: 'Essential for genetic testing.'
  },
  {
    id: 'bio-gen-94',
    text: 'The total genetic information of an individual is its _____ while its physical appearance is its _____.',
    options: ['Phenotype, Genotype', 'Genotype, Phenotype', 'DNA, Protein', 'None'],
    correctAnswer: 'Genotype, Phenotype',
    explanation: 'Genotype + Environment = Phenotype.'
  },
  {
    id: 'bio-gen-95',
    text: 'A gene that suppresses the effect of another non-allelic gene is:',
    options: ['Dominant', 'Epistatic', 'Hypostatic', 'Recessive'],
    correctAnswer: 'Epistatic',
    explanation: 'The suppressed gene is hypostatic.'
  },
  {
    id: 'bio-gen-96',
    text: 'A pure tall plant was crossed with a pure short plant. F1 was all tall. F1 was then selfed. What % of F2 is tall?',
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: '75%',
    explanation: '3:1 ratio (TT, Tt, Tt are tall; tt is short).'
  },
  {
    id: 'bio-gen-97',
    text: 'The "Ghost of Mendel" is often used to refer to which concept?',
    options: ['Mutation', 'Linkage', 'Death', 'None'],
    correctAnswer: 'Linkage',
    explanation: 'Because it was an exception to his independent assortment law.'
  },
  {
    id: 'bio-gen-98',
    text: 'The most common blood type in the world is:',
    options: ['A+', 'O+', 'B+', 'AB-'],
    correctAnswer: 'O+',
    explanation: 'Followed by A+.'
  },
  {
    id: 'bio-gen-99',
    text: 'Which is a lethal recessive disorder in humans?',
    options: ['Tay-Sachs disease', 'Rickets', 'Flu', 'Acne'],
    correctAnswer: 'Tay-Sachs disease',
    explanation: 'Leads to death in early childhood.'
  },
  {
    id: 'bio-gen-100',
    text: 'Genetics is critical for modern medicine and _____.',
    options: ['Agriculture', 'Forensics', 'Anthropology', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Universal application.'
  }
];
