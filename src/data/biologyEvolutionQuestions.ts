import { Question } from '../types';

export const BIOLOGY_EVOLUTION_QUIZ: Question[] = [
  {
    id: 'bio-evo-1',
    text: 'Biological evolution is the process of _____ in the inherited traits of a population over generations.',
    options: ['Stagnation', 'Change', 'Reversal', 'None'],
    correctAnswer: 'Change',
    explanation: 'Leads to diversity of life.'
  },
  {
    id: 'bio-evo-2',
    text: 'Who proposed the theory of "Inheritance of Acquired Characteristics"?',
    options: ['Charles Darwin', 'Jean-Baptiste Lamarck', 'Alfred Wallace', 'Gregor Mendel'],
    correctAnswer: 'Jean-Baptiste Lamarck',
    explanation: 'He believed that traits acquired during an organism\'s life are passed to offspring (e.g. giraffe\'s neck).'
  },
  {
    id: 'bio-evo-3',
    text: 'Which is a main postulate of Lamarckism?',
    options: ['Use and Disuse of organs', 'Natural Selection', 'Survival of the fittest', 'Genetic drift'],
    correctAnswer: 'Use and Disuse of organs',
    explanation: 'Organs used extensively become stronger, while those not used deteriorate.'
  },
  {
    id: 'bio-evo-4',
    text: 'Charles Darwin sailed on the ship named _____ to study nature.',
    options: ['Titanic', 'HMS Beagle', 'Mayflower', 'Discovery'],
    correctAnswer: 'HMS Beagle',
    explanation: 'The voyage lasted five years (1831-1836).'
  },
  {
    id: 'bio-evo-5',
    text: 'Darwin was particularly influenced by the flora and fauna of the _____ Islands.',
    options: ['Caribbean', 'Galapagos', 'Hawaiian', 'Falkland'],
    correctAnswer: 'Galapagos',
    explanation: 'Observed different species of finches and tortoises.'
  },
  {
    id: 'bio-evo-6',
    text: 'Darwin\'s main theory of evolution is called:',
    options: ['Lamarckism', 'Natural Selection', 'Mutation Theory', 'Orthogenesis'],
    correctAnswer: 'Natural Selection',
    explanation: 'Published in his book "On the Origin of Species" in 1859.'
  },
  {
    id: 'bio-evo-7',
    text: 'The mechanism where individuals with favorable traits survive and reproduce more successfully is:',
    options: ['Natural Selection', 'Artificial Selection', 'Random Selection', 'Extinction'],
    correctAnswer: 'Natural Selection',
    explanation: 'Driving force of adaptive evolution.'
  },
  {
    id: 'bio-evo-8',
    text: 'The phrase "Survival of the Fittest" was coined by _____ but used by Darwin.',
    options: ['Herbert Spencer', 'Thomas Malthus', 'Alfred Wallace', 'Isaac Newton'],
    correctAnswer: 'Herbert Spencer',
    explanation: 'Fitness refers to reproductive success.'
  },
  {
    id: 'bio-evo-9',
    text: 'Who independently arrived at a theory of evolution similar to Darwin\'s?',
    options: ['Lamarck', 'Alfred Russel Wallace', 'Huxley', 'Lyell'],
    correctAnswer: 'Alfred Russel Wallace',
    explanation: 'Sent his essay to Darwin, prompting Darwin to publish his work.'
  },
  {
    id: 'bio-evo-10',
    text: 'Remnants or traces of organisms from the past are called:',
    options: ['Artifacts', 'Fossils', 'Ruins', 'None'],
    correctAnswer: 'Fossils',
    explanation: 'Found in sedimentary rocks.'
  },
  {
    id: 'bio-evo-11',
    text: 'The study of fossils is:',
    options: ['Archaeology', 'Paleontology', 'Geology', 'Anthropology'],
    correctAnswer: 'Paleontology',
    explanation: 'Provides a timeline of life on Earth.'
  },
  {
    id: 'bio-evo-12',
    text: 'Homologous structures are those that have a _____ origin but may have _____ functions.',
    options: ['Different, Same', 'Same (Common ancestor), Different', 'Random, Fixed', 'None'],
    correctAnswer: 'Same (Common ancestor), Different',
    explanation: 'e.g. Forelimbs of humans, cats, whales, and bats.'
  },
  {
    id: 'bio-evo-13',
    text: 'Analogous structures have _____ functions but _____ evolutionary origins.',
    options: ['Similar, Different', 'Different, Similar', 'Same, Same', 'None'],
    correctAnswer: 'Similar, Different',
    explanation: 'e.g. Wings of birds and wings of insects; result of convergent evolution.'
  },
  {
    id: 'bio-evo-14',
    text: 'Convergent evolution leads to the development of _____ structures.',
    options: ['Homologous', 'Analogous', 'Vestigial', 'Redundant'],
    correctAnswer: 'Analogous',
    explanation: 'Different species evolve similar solutions to similar environmental challenges.'
  },
  {
    id: 'bio-evo-15',
    text: 'Divergent evolution leads to the development of _____ structures.',
    options: ['Homologous', 'Analogous', 'Mimicry', 'None'],
    correctAnswer: 'Homologous',
    explanation: 'Related species evolve different traits.'
  },
  {
    id: 'bio-evo-16',
    text: 'Structures that are reduced and non-functional remnants of organs that were functional in ancestors are:',
    options: ['Vital organs', 'Vestigial organs', 'Accessory organs', 'None'],
    correctAnswer: 'Vestigial organs',
    explanation: 'e.g. Human appendix, pelvic bone in whales.'
  },
  {
    id: 'bio-evo-17',
    text: 'Comparative embryology shows that related organisms go through _____ stages of development.',
    options: ['Completely different', 'Similar early', 'Exactly same', 'None'],
    correctAnswer: 'Similar early',
    explanation: 'e.g. All vertebrate embryos have gill slits at some point.'
  },
  {
    id: 'bio-evo-18',
    text: 'Molecular evidence for evolution includes similarities in:',
    options: ['DNA sequences', 'Amino acid sequences of proteins (e.g. Cytochrome c)', 'ATP metabolism', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'The genetic code is universal.'
  },
  {
    id: 'bio-evo-19',
    text: 'The "Hardy-Weinberg Principle" states that allele frequencies in a population stay constant unless _____ are acting.',
    options: ['Enzymes', 'Evolutionary forces', 'Chemicals', 'Social laws'],
    correctAnswer: 'Evolutionary forces',
    explanation: 'Forces include mutation, selection, drift, migration.'
  },
  {
    id: 'bio-evo-20',
    text: 'Which is a requirement for Hardy-Weinberg equilibrium?',
    options: ['Large population size', 'No mutations', 'Random mating', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'An ideal, non-evolving population.'
  },
  {
    id: 'bio-evo-21',
    text: 'Random changes in allele frequencies due to chance, especially in small populations, is:',
    options: ['Natural Selection', 'Genetic Drift', 'Gene Flow', 'Mutation'],
    correctAnswer: 'Genetic Drift',
    explanation: 'Can lead to loss of alleles.'
  },
  {
    id: 'bio-evo-22',
    text: 'The "Founder Effect" occurs when a _____ group of individuals starts a _____ population.',
    options: ['Large, small', 'Small, new/isolated', 'Sick, healthy', 'Random, uniform'],
    correctAnswer: 'Small, new/isolated',
    explanation: 'The new population has different allele frequencies than the original.'
  },
  {
    id: 'bio-evo-23',
    text: 'The "Bottleneck Effect" is a sharp reduction in population size due to a:',
    options: ['Disaster/Environmental event', 'Migration', 'Holiday', 'Mutation'],
    correctAnswer: 'Disaster/Environmental event',
    explanation: 'Remaining population may have very different genetics.'
  },
  {
    id: 'bio-evo-24',
    text: 'Migration of individuals between populations leads to:',
    options: ['Genetic drift', 'Gene flow', 'Speciation', 'Mutation'],
    correctAnswer: 'Gene flow',
    explanation: 'Reduces differences between populations.'
  },
  {
    id: 'bio-evo-25',
    text: 'The ultimate source of new genetic variation is:',
    options: ['Crossing over', 'Mutation', 'Natural selection', 'Fertilization'],
    correctAnswer: 'Mutation',
    explanation: 'Provides the raw material for evolution.'
  },
  {
    id: 'bio-evo-26',
    text: 'Natural selection acts on the _____ but the unit of evolution is the _____.',
    options: ['Population, Individual', 'Individual, Population', 'Gene, Cell', 'Species, Ecosystem'],
    correctAnswer: 'Individual, Population',
    explanation: 'Individuals are selected, but populations evolve.'
  },
  {
    id: 'bio-evo-27',
    text: 'The formation of new species is called:',
    options: ['Extinction', 'Speciation', 'Adaptation', 'Gradualism'],
    correctAnswer: 'Speciation',
    explanation: 'Occurs when populations become reproductively isolated.'
  },
  {
    id: 'bio-evo-28',
    text: 'Speciation that occurs due to geographical isolation is:',
    options: ['Sympatric', 'Allopatric', 'Parapatric', 'None'],
    correctAnswer: 'Allopatric',
    explanation: 'Separated by physical barriers like mountains or rivers.'
  },
  {
    id: 'bio-evo-29',
    text: 'Speciation that occurs within the same geographical area is:',
    options: ['Allopatric', 'Sympatric', 'Regional', 'Zero'],
    correctAnswer: 'Sympatric',
    explanation: 'Often due to polyploidy or sexual selection.'
  },
  {
    id: 'bio-evo-30',
    text: 'The rapid evolution of many species from a single ancestor to fill different ecological niches is:',
    options: ['Convergent evolution', 'Adaptive radiation', 'Stabilizing selection', 'None'],
    correctAnswer: 'Adaptive radiation',
    explanation: 'e.g. Darwin\'s finches.'
  },
  {
    id: 'bio-evo-31',
    text: 'According to Darwin, evolution is a _____ and _____ process.',
    options: ['Sudden, fast', 'Slow, gradual', 'Static, unchanging', 'None'],
    correctAnswer: 'Slow, gradual',
    explanation: 'This is known as Gradualism.'
  },
  {
    id: 'bio-evo-32',
    text: 'The theory that evolution happens in bursts of rapid change followed by long periods of stability is:',
    options: ['Gradualism', 'Punctuated Equilibrium', 'Darwinism', 'Lamarckism'],
    correctAnswer: 'Punctuated Equilibrium',
    explanation: 'Proposed by Gould and Eldredge.'
  },
  {
    id: 'bio-evo-33',
    text: 'Artificial selection is used by humans for:',
    options: ['Dog breeding', 'Crop improvement', 'Livestock production', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Humans choose which traits are desirable.'
  },
  {
    id: 'bio-evo-34',
    text: 'Modern synthesis of evolution combines Darwin\'s theory with _____ and _____.',
    options: ['Genetics, Population biology', 'Physics, Chemistry', 'History, Social science', 'None'],
    correctAnswer: 'Genetics, Population biology',
    explanation: 'Also called Neo-Darwinism.'
  },
  {
    id: 'bio-evo-35',
    text: 'What did Darwin lack an understanding of during his time?',
    options: ['Natural selection', 'The mechanism of inheritance (Genetics)', 'Fossils', 'Islands'],
    correctAnswer: 'The mechanism of inheritance (Genetics)',
    explanation: 'Mendel\'s work was not yet widely known.'
  },
  {
    id: 'bio-evo-36',
    text: 'Industrial Melanism in peppered moths is a classic example of:',
    options: ['Artificial selection', 'Natural selection (Directional)', 'Genetic drift', 'Lamarckism'],
    correctAnswer: 'Natural selection (Directional)',
    explanation: 'Dark moths survived better in polluted areas.'
  },
  {
    id: 'bio-evo-37',
    text: 'Which selection type favors average individuals and removes extremes?',
    options: ['Directional', 'Stabilizing', 'Disruptive', 'None'],
    correctAnswer: 'Stabilizing',
    explanation: 'e.g. Human birth weight.'
  },
  {
    id: 'bio-evo-38',
    text: 'Which selection type favors one extreme phenotype over the other?',
    options: ['Stabilizing', 'Directional', 'Disruptive', 'Random'],
    correctAnswer: 'Directional',
    explanation: 'Shifts the average of the population.'
  },
  {
    id: 'bio-evo-39',
    text: 'Which selection type favors both extremes and can lead to speciation?',
    options: ['Stabilizing', 'Directional', 'Disruptive (Diversifying)', 'None'],
    correctAnswer: 'Disruptive (Diversifying)',
    explanation: 'Results in two distinct groups.'
  },
  {
    id: 'bio-evo-40',
    text: 'The development of antibiotic resistance in bacteria is an example of:',
    options: ['Natural selection', 'Genetic drift', 'Artificial selection', 'Lamarckism'],
    correctAnswer: 'Natural selection',
    explanation: 'Resistant individuals survive and multiply.'
  },
  {
    id: 'bio-evo-41',
    text: 'Phylogeny is the study of the _____ of a group of organisms.',
    options: ['Anatomy', 'Evolutionary history', 'Development', 'Speed'],
    correctAnswer: 'Evolutionary history',
    explanation: 'Represented by phylogenetic trees.'
  },
  {
    id: 'bio-evo-42',
    text: 'The most recent common ancestor of all living things is called:',
    options: ['Adam', 'LUCA (Last Universal Common Ancestor)', 'Mitochondrial Eve', 'None'],
    correctAnswer: 'LUCA (Last Universal Common Ancestor)',
    explanation: 'Likely lived billions of years ago.'
  },
  {
    id: 'bio-evo-43',
    text: 'Geographical distribution of species is studied in:',
    options: ['Geology', 'Biogeography', 'Ecology', 'Meteorology'],
    correctAnswer: 'Biogeography',
    explanation: 'Supports the idea that species evolve from local ancestors.'
  },
  {
    id: 'bio-evo-44',
    text: 'Marsupials are found almost exclusively in Australia because of:',
    options: ['Better weather', 'Geographical isolation', 'Mutation', 'No predators'],
    correctAnswer: 'Geographical isolation',
    explanation: 'Isolated when Australia split from other continents.'
  },
  {
    id: 'bio-evo-45',
    text: 'Biological species concept defines a species based on the ability to _____ and produce _____ offspring.',
    options: ['Fly, large', 'Interbreed, fertile', 'Eat, many', 'Swim, small'],
    correctAnswer: 'Interbreed, fertile',
    explanation: 'Proposed by Ernst Mayr.'
  },
  {
    id: 'bio-evo-46',
    text: 'A mule is the sterile offspring of a horse and a donkey, showing that they are _____ species.',
    options: ['Same', 'Different', 'Closely related but distinct', 'None'],
    correctAnswer: 'Different',
    explanation: 'Reproductive isolation exists.'
  },
  {
    id: 'bio-evo-47',
    text: 'Pre-zygotic isolation mechanisms prevent:',
    options: ['Zygote development', 'Fertilization', 'Egg production', 'None'],
    correctAnswer: 'Fertilization',
    explanation: 'e.g. Temporal, Behavioral, Mechanical isolation.'
  },
  {
    id: 'bio-evo-48',
    text: 'Post-zygotic isolation mechanisms occur _____ fertilization.',
    options: ['Before', 'After', 'During', 'Instead of'],
    correctAnswer: 'After',
    explanation: 'e.g. Hybrid inviability, hybrid sterility.'
  },
  {
    id: 'bio-evo-49',
    text: 'A change in allele frequency due to migration is:',
    options: ['Mutation', 'Gene flow', 'Natural selection', 'Drift'],
    correctAnswer: 'Gene flow',
    explanation: 'Brings new alleles into a population.'
  },
  {
    id: 'bio-evo-50',
    text: 'Hardy-Weinberg equation for two alleles is:',
    options: ['a + b = 1', 'p^2 + 2pq + q^2 = 1', 'p + q = 2', 'None'],
    correctAnswer: 'p^2 + 2pq + q^2 = 1',
    explanation: 'p is frequency of dominant allele, q is frequency of recessive allele.'
  },
  {
    id: 'bio-evo-51',
    text: 'The oldest known fossils are of:',
    options: ['Dinosaurs', 'Cyanobacteria/Stromatolites', 'Humans', 'Ferns'],
    correctAnswer: 'Cyanobacteria/Stromatolites',
    explanation: 'Dating back about 3.5 billion years.'
  },
  {
    id: 'bio-evo-52',
    text: 'The "Endosymbiotic Theory" explains the origin of _____ and _____.',
    options: ['Nucleus, Cell wall', 'Mitochondria, Chloroplasts', 'Lysosomes, Vacuoles', 'None'],
    correctAnswer: 'Mitochondria, Chloroplasts',
    explanation: 'They were once free-living prokaryotes.'
  },
  {
    id: 'bio-evo-53',
    text: 'Whose book "Principles of Geology" influenced Darwin?',
    options: ['Charles Lyell', 'Isaac Newton', 'Robert Hooke', 'Alfred Wallace'],
    correctAnswer: 'Charles Lyell',
    explanation: 'Argued that Earth is very old and shaped by slow processes.'
  },
  {
    id: 'bio-evo-54',
    text: 'Darwin\'s theory of "Descent with Modification" implies:',
    options: ['All species are independent', 'All life is related through a common ancestor', 'Species never change', 'None'],
    correctAnswer: 'All life is related through a common ancestor',
    explanation: 'Basic premise of evolution.'
  },
  {
    id: 'bio-evo-55',
    text: 'The human tailbone (coccyx) is an example of a _____ structure.',
    options: ['Vital', 'Vestigial', 'Analogous', 'Large'],
    correctAnswer: 'Vestigial',
    explanation: 'Evidence of ancestors with tails.'
  },
  {
    id: 'bio-evo-56',
    text: 'Mimicry is an adaptation where one species _____ another for protection.',
    options: ['Kills', 'Resembles', 'Eats', 'Ignores'],
    correctAnswer: 'Resembles',
    explanation: 'e.g. Viceroy butterfly mimicking the Monarch.'
  },
  {
    id: 'bio-evo-57',
    text: 'Camouflage is an adaptation that allows an organism to _____ with its environment.',
    options: ['Stand out', 'Blend in', 'Fly', 'Sleep'],
    correctAnswer: 'Blend in',
    explanation: 'Helps in avoiding predators or catching prey.'
  },
  {
    id: 'bio-evo-58',
    text: 'Selection that occurs between members of the same sex for mating is:',
    options: ['Intrasexual selection', 'Intersexual selection', 'Natural selection', 'None'],
    correctAnswer: 'Intrasexual selection',
    explanation: 'e.g. Two male lions fighting.'
  },
  {
    id: 'bio-evo-59',
    text: 'Selection where one sex (usually females) chooses a mate is:',
    options: ['Intrasexual', 'Intersexual (Mate choice)', 'Directional', 'None'],
    correctAnswer: 'Intersexual (Mate choice)',
    explanation: 'e.g. Peahens choosing peacocks with better tails.'
  },
  {
    id: 'bio-evo-60',
    text: 'Sexual dimorphism refers to differences in appearance between:',
    options: ['Species', 'Males and Females', 'Young and Old', 'None'],
    correctAnswer: 'Males and Females',
    explanation: 'Result of sexual selection.'
  },
  {
    id: 'bio-evo-61',
    text: 'Which is NOT an evolutionary force?',
    options: ['Mutation', 'Gene flow', 'Random mating', 'Genetic drift'],
    correctAnswer: 'Random mating',
    explanation: 'Random mating maintains equilibrium; non-random mating can cause evolution.'
  },
  {
    id: 'bio-evo-62',
    text: 'Small scale changes in gene frequency within a population is:',
    options: ['Macroevolution', 'Microevolution', 'Extinction', 'Cloning'],
    correctAnswer: 'Microevolution',
    explanation: 'Can happen over a few generations.'
  },
  {
    id: 'bio-evo-63',
    text: 'Major evolutionary changes over long periods leading to new species/taxa is:',
    options: ['Microevolution', 'Macroevolution', 'Mutation', 'None'],
    correctAnswer: 'Macroevolution',
    explanation: 'e.g. Origin of mammals from reptiles.'
  },
  {
    id: 'bio-evo-64',
    text: 'The "Out of Africa" theory suggests that modern humans originated in:',
    options: ['Europe', 'Asia', 'Africa', 'Americas'],
    correctAnswer: 'Africa',
    explanation: 'Supported by fossil and genetic evidence.'
  },
  {
    id: 'bio-evo-65',
    text: 'Carbon-14 dating is used to determine the age of _____ fossils.',
    options: ['Very old (billions of years)', 'Relatively recent (up to 50,000 years)', 'Rocks', 'Metal'],
    correctAnswer: 'Relatively recent (up to 50,000 years)',
    explanation: 'Based on radioactive decay of C-14.'
  },
  {
    id: 'bio-evo-66',
    text: 'Potassium-Argon dating is used for _____ fossils.',
    options: ['Recent', 'Very old/Ancient', 'Water', 'None'],
    correctAnswer: 'Very old/Ancient',
    explanation: 'Used to date volcanic rock layers around fossils.'
  },
  {
    id: 'bio-evo-67',
    text: 'Comparative anatomy of vertebrate hearts shows evolution from _____ to _____ chambers.',
    options: ['4 to 2', '2 to 4', '3 to 5', 'None'],
    correctAnswer: '2 to 4',
    explanation: 'Fish(2) -> Amphibian(3) -> Reptile(3.5) -> Bird/Mammal(4).'
  },
  {
    id: 'bio-evo-68',
    text: 'The wing of a bat and the wing of a bird are _____ as wings but _____ as forelimbs.',
    options: ['Homologous, Analogous', 'Analogous, Homologous', 'Both Analogous', 'Both Homologous'],
    correctAnswer: 'Analogous, Homologous',
    explanation: 'Complex relationship showing both divergence and convergence.'
  },
  {
    id: 'bio-evo-69',
    text: 'Coevolution is when two species evolve in _____ to each other.',
    options: ['Opposition', 'Response', 'Isolation', 'None'],
    correctAnswer: 'Response',
    explanation: 'e.g. Flowering plants and their pollinators.'
  },
  {
    id: 'bio-evo-70',
    text: 'The struggle for existence is most intense between members of _____ species.',
    options: ['Different', 'Same', 'Distant', 'None'],
    correctAnswer: 'Same',
    explanation: 'Because they compete for the exact same resources.'
  },
  {
    id: 'bio-evo-71',
    text: 'According to the H-W principle, p + q = ?',
    options: ['0', '1', '2', '100'],
    correctAnswer: '1',
    explanation: 'The sum of all allele frequencies must be 1.'
  },
  {
    id: 'bio-evo-72',
    text: 'If the frequency of a recessive allele (q) is 0.3, what is p?',
    options: ['0.3', '0.7', '1.0', '0.09'],
    correctAnswer: '0.7',
    explanation: 'p = 1 - q = 1 - 0.3 = 0.7.'
  },
  {
    id: 'bio-evo-73',
    text: 'What was the major weakness of Darwin\'s theory when it was first published?',
    options: ['No evidence for natural selection', 'No explanation for the source of variation', 'No fossils found', 'None'],
    correctAnswer: 'No explanation for the source of variation',
    explanation: 'Source is now known to be mutations and recombination.'
  },
  {
    id: 'bio-evo-74',
    text: 'Who published "The Descent of Man"?',
    options: ['Darwin', 'Wallace', 'Lamarck', 'Mendel'],
    correctAnswer: 'Darwin',
    explanation: 'Applied his theory specifically to human evolution.'
  },
  {
    id: 'bio-evo-75',
    text: 'The development of many varieties of dogs from wolves is an example of:',
    options: ['Natural selection', 'Artificial selection', 'Mutation only', 'None'],
    correctAnswer: 'Artificial selection',
    explanation: 'Driven by human choice.'
  },
  {
    id: 'bio-evo-76',
    text: 'A "Polymorphic" population has _____ distinct forms.',
    options: ['One', 'Two or more', 'No', 'Hidden'],
    correctAnswer: 'Two or more',
    explanation: 'e.g. ABO blood types.'
  },
  {
    id: 'bio-evo-77',
    text: 'Which is a "Pre-zygotic" barrier?',
    options: ['Hybrid sterility', 'Behavioral isolation (different songs)', 'Hybrid inviability', 'None'],
    correctAnswer: 'Behavioral isolation (different songs)',
    explanation: 'Prevents mating from even occurring.'
  },
  {
    id: 'bio-evo-78',
    text: 'Temporal isolation is when species reproduce at different:',
    options: ['Places', 'Times (Seasons/Time of day)', 'Speeds', 'Heights'],
    correctAnswer: 'Times (Seasons/Time of day)',
    explanation: 'e.g. one flowers in spring, another in fall.'
  },
  {
    id: 'bio-evo-79',
    text: 'Mechanical isolation is when _____ do not fit together.',
    options: ['Cells', 'Reproductive organs', 'Genes', 'Molecules'],
    correctAnswer: 'Reproductive organs',
    explanation: 'Common in insects.'
  },
  {
    id: 'bio-evo-80',
    text: 'Genetic drift has a significant effect only on _____ populations.',
    options: ['Small', 'Large', 'Isolated', 'Infected'],
    correctAnswer: 'Small',
    explanation: 'Chance events have a bigger impact.'
  },
  {
    id: 'bio-evo-81',
    text: 'In stabilizing selection, the bell curve becomes:',
    options: ['Wider', 'Narrower/Taller in the middle', 'Shifted to the left', 'Flat'],
    correctAnswer: 'Narrower/Taller in the middle',
    explanation: 'Favors the intermediate.'
  },
  {
    id: 'bio-evo-82',
    text: 'Which is NOT a vestigial structure in humans?',
    options: ['Appendix', 'Wisdom teeth', 'Heart', 'Ear muscles'],
    correctAnswer: 'Heart',
    explanation: 'Vital and fully functional.'
  },
  {
    id: 'bio-evo-83',
    text: 'The pelvic girdle in snakes is evidence that their ancestors had:',
    options: ['Wings', 'Legs', 'Fins', 'None'],
    correctAnswer: 'Legs',
    explanation: 'Shows evolution from tetrapods.'
  },
  {
    id: 'bio-evo-84',
    text: 'Lamarck\'s theory was eventually rejected because _____ traits are not inherited.',
    options: ['Genetic', 'Acquired', 'Dominant', 'Recessive'],
    correctAnswer: 'Acquired',
    explanation: 'Only changes in the DNA of germ cells are passed on.'
  },
  {
    id: 'bio-evo-85',
    text: 'Darwin\'s finches showed different _____ shapes adapted to different food sources.',
    options: ['Wing', 'Beak', 'Leg', 'Eye'],
    correctAnswer: 'Beak',
    explanation: 'Classic example of adaptive radiation.'
  },
  {
    id: 'bio-evo-86',
    text: 'The study of the similarities in DNA and proteins to determine evolutionary relationships is:',
    options: ['Molecular phylogeny', 'Morphology', 'Geology', 'Ecology'],
    correctAnswer: 'Molecular phylogeny',
    explanation: 'Modern way to build "Trees of Life".'
  },
  {
    id: 'bio-evo-87',
    text: 'Which gas was likely MISSING from the early Earth\'s atmosphere?',
    options: ['Methane', 'Water vapor', 'Free Oxygen (O2)', 'Ammonia'],
    correctAnswer: 'Free Oxygen (O2)',
    explanation: 'Early atmosphere was reducing.'
  },
  {
    id: 'bio-evo-88',
    text: 'The "Miller-Urey" experiment showed that _____ could be synthesized from inorganic gases.',
    options: ['Cells', 'Amino acids', 'Viruses', 'Humans'],
    correctAnswer: 'Amino acids',
    explanation: 'Simulated early Earth conditions.'
  },
  {
    id: 'bio-evo-89',
    text: 'The first hereditary molecule was likely _____ rather than DNA.',
    options: ['Protein', 'RNA', 'Carbohydrate', 'Lipid'],
    correctAnswer: 'RNA',
    explanation: 'RNA can both store info and catalyze reactions (Ribozymes).'
  },
  {
    id: 'bio-evo-90',
    text: 'Cyanobacteria revolutionized Earth by producing _____ through photosynthesis.',
    options: ['CO2', 'Oxygen (O2)', 'Nitrogen', 'Heat'],
    correctAnswer: 'Oxygen (O2)',
    explanation: 'Led to the "Great Oxygenation Event".'
  },
  {
    id: 'bio-evo-91',
    text: 'A "Missing Link" is a transitional _____ between two major groups.',
    options: ['Gene', 'Fossil', 'Individual', 'Environment'],
    correctAnswer: 'Fossil',
    explanation: 'e.g. Archaeopteryx (between reptiles and birds).'
  },
  {
    id: 'bio-evo-92',
    text: 'Archaeopteryx has feathers like a bird but _____ like a reptile.',
    options: ['Gills', 'Teeth and a long bony tail', 'Fins', 'None'],
    correctAnswer: 'Teeth and a long bony tail',
    explanation: 'Shows characteristics of both groups.'
  },
  {
    id: 'bio-evo-93',
    text: 'The horse lineage is a well-documented example of _____ evolution.',
    options: ['Convergent', 'Gradual', 'Macro', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Shows increase in size and reduction in toe number over 50 million years.'
  },
  {
    id: 'bio-evo-94',
    text: 'Natural selection requires:',
    options: ['Variation', 'Inheritance', 'Differential reproduction', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Key conditions for evolution.'
  },
  {
    id: 'bio-evo-95',
    text: 'Adaptation is a trait that increases an organism\'s _____ in its environment.',
    options: ['Speed', 'Fitness/Survival', 'Weight', 'Color'],
    correctAnswer: 'Fitness/Survival',
    explanation: 'Result of natural selection.'
  },
  {
    id: 'bio-evo-96',
    text: 'The appendix in humans is considered a vestigial remnant of the _____ in herbivores.',
    options: ['Stomach', 'Caecum', 'Liver', 'Gallbladder'],
    correctAnswer: 'Caecum',
    explanation: 'Used for digesting cellulose.'
  },
  {
    id: 'bio-evo-97',
    text: 'If non-random mating occurs based on specific phenotypes, it is called:',
    options: ['Assortative mating', 'Genetic drift', 'Migration', 'Lamarckism'],
    correctAnswer: 'Assortative mating',
    explanation: 'Can change genotype frequencies.'
  },
  {
    id: 'bio-evo-98',
    text: 'The "Biological Species Concept" does NOT work for _____ organisms.',
    options: ['Flying', 'Asexually reproducing', 'Large', 'Ocean-dwelling'],
    correctAnswer: 'Asexually reproducing',
    explanation: 'Because they don\'t interbreed.'
  },
  {
    id: 'bio-evo-99',
    text: 'Mass extinctions are followed by periods of rapid:',
    options: ['Stagnation', 'Speciation/Adaptive radiation', 'Death', 'Zero growth'],
    correctAnswer: 'Speciation/Adaptive radiation',
    explanation: 'New niches become available.'
  },
  {
    id: 'bio-evo-100',
    text: 'Evolution is a fundamental _____ of biology.',
    options: ['Fact/Theory', 'Myth', 'Guess', 'None'],
    correctAnswer: 'Fact/Theory',
    explanation: 'Supported by overwhelming evidence from multiple fields.'
  }
];
