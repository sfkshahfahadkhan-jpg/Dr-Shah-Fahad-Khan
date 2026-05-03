import { Question } from '../types';

export const BIOLOGY_ECOSYSTEM_QUIZ: Question[] = [
  {
    id: 'bio-eco-1',
    text: 'An ecosystem consists of _____ and _____ components interacting with each other.',
    options: ['Plants, Animals', 'Biotic (Living), Abiotic (Non-living)', 'Land, Water', 'Sun, Moon'],
    correctAnswer: 'Biotic (Living), Abiotic (Non-living)',
    explanation: 'Fundamental unit of ecology.'
  },
  {
    id: 'bio-eco-2',
    text: 'Which is an abiotic component of an ecosystem?',
    options: ['Bacteria', 'Fungi', 'Temperature', 'Insects'],
    correctAnswer: 'Temperature',
    explanation: 'Others are biotic components.'
  },
  {
    id: 'bio-eco-3',
    text: 'Organisms that produce their own food using sunlight or chemicals are:',
    options: ['Consumers', 'Producers (Autotrophs)', 'Decomposers', 'Parasites'],
    correctAnswer: 'Producers (Autotrophs)',
    explanation: 'Basis of any food chain.'
  },
  {
    id: 'bio-eco-4',
    text: 'Primary consumers are also known as:',
    options: ['Carnivores', 'Herbivores', 'Omnivores', 'Decomposers'],
    correctAnswer: 'Herbivores',
    explanation: 'They eat producers (plants).'
  },
  {
    id: 'bio-eco-5',
    text: 'Organisms that break down dead organic matter and recycle nutrients are:',
    options: ['Producers', 'Secondary consumers', 'Decomposers (Saprotrophs)', 'Apex predators'],
    correctAnswer: 'Decomposers (Saprotrophs)',
    explanation: 'e.g. Bacteria and Fungi.'
  },
  {
    id: 'bio-eco-6',
    text: 'The linear sequence of who eats whom in an ecosystem is a:',
    options: ['Food web', 'Food chain', 'Pyramid', 'Niche'],
    correctAnswer: 'Food chain',
    explanation: 'Shows the flow of energy.'
  },
  {
    id: 'bio-eco-7',
    text: 'A complex network of interconnected food chains is a:',
    options: ['Food cycle', 'Food web', 'Ecosystem map', 'Trophic level'],
    correctAnswer: 'Food web',
    explanation: 'More realistic representation of nature.'
  },
  {
    id: 'bio-eco-8',
    text: 'Each step or level in a food chain is called a:',
    options: ['Floor', 'Trophic level', 'Niche', 'Habitat'],
    correctAnswer: 'Trophic level',
    explanation: 'Represents the feeding position of an organism.'
  },
  {
    id: 'bio-eco-9',
    text: 'Approximately how much energy is transferred from one trophic level to the next?',
    options: ['100%', '50%', '10%', '1%'],
    correctAnswer: '10%',
    explanation: 'The 10% law; most energy is lost as heat or used for metabolism.'
  },
  {
    id: 'bio-eco-10',
    text: 'The total amount of living organic matter in a trophic level is:',
    options: ['Biomass', 'Bio-energy', 'Population', 'Mass'],
    correctAnswer: 'Biomass',
    explanation: 'Can be measured as dry weight.'
  },
  {
    id: 'bio-eco-11',
    text: 'Which pyramid is ALWAYS upright in a stable ecosystem?',
    options: ['Pyramid of Numbers', 'Pyramid of Biomass', 'Pyramid of Energy', 'None'],
    correctAnswer: 'Pyramid of Energy',
    explanation: 'Energy is always lost as it moves up; it can never increase.'
  },
  {
    id: 'bio-eco-12',
    text: 'The process of movement of chemical elements through biotic and abiotic components is:',
    options: ['Metabolism', 'Biogeochemical cycles', 'Weathering', 'Succession'],
    correctAnswer: 'Biogeochemical cycles',
    explanation: 'e.g. Nitrogen, Carbon, Phosphorus cycles.'
  },
  {
    id: 'bio-eco-13',
    text: 'The main reservoir of Carbon for terrestrial plants is:',
    options: ['Rocks', 'Ocean', 'Atmosphere (CO2)', 'Fossil fuels'],
    correctAnswer: 'Atmosphere (CO2)',
    explanation: 'Plants fix CO2 via photosynthesis.'
  },
  {
    id: 'bio-eco-14',
    text: 'Atmospheric Nitrogen (N2) cannot be used directly by most organisms; it must be _____ first.',
    options: ['Released', 'Fixed', 'Heated', 'Condensed'],
    correctAnswer: 'Fixed',
    explanation: 'Process of nitrogen fixation.'
  },
  {
    id: 'bio-eco-15',
    text: 'Which bacteria are responsible for fixing atmospheric nitrogen in legume root nodules?',
    options: ['Nitrosomonas', 'Rhizobium', 'Azotobacter', 'E. coli'],
    correctAnswer: 'Rhizobium',
    explanation: 'Symbiotic relationship.'
  },
  {
    id: 'bio-eco-16',
    text: 'Nitrification is the conversion of _____ to _____ and then to _____.',
    options: ['N2, Ammonia, Nitrates', 'Ammonia, Nitrites, Nitrates', 'Nitrates, Ammonia, N2', 'None'],
    correctAnswer: 'Ammonia, Nitrites, Nitrates',
    explanation: 'Carried out by nitrifying bacteria.'
  },
  {
    id: 'bio-eco-17',
    text: 'Denitrification is the conversion of _____ back into _____.',
    options: ['Ammonia, Nitrates', 'Nitrates, Nitrogen gas (N2)', 'Nitrites, Ammonia', 'Protein, Urea'],
    correctAnswer: 'Nitrates, Nitrogen gas (N2)',
    explanation: 'Carried out by denitrifying bacteria in anaerobic conditions.'
  },
  {
    id: 'bio-eco-18',
    text: 'The gradual and predictable change in species composition of an area over time is:',
    options: ['Evolution', 'Ecological Succession', 'Extinction', 'Migration'],
    correctAnswer: 'Ecological Succession',
    explanation: 'Starts with pioneer species.'
  },
  {
    id: 'bio-eco-19',
    text: 'Succession that occurs in an area where no life has ever existed (e.g. bare rock) is:',
    options: ['Primary succession', 'Secondary succession', 'Quick succession', 'None'],
    correctAnswer: 'Primary succession',
    explanation: 'Takes a very long time to develop soil.'
  },
  {
    id: 'bio-eco-20',
    text: 'Succession that occurs in an area where life was destroyed (e.g. after forest fire) is:',
    options: ['Primary succession', 'Secondary succession', 'Tertiary succession', 'None'],
    correctAnswer: 'Secondary succession',
    explanation: 'Faster than primary because soil is already present.'
  },
  {
    id: 'bio-eco-21',
    text: 'The final, stable community in ecological succession is the:',
    options: ['Pioneer community', 'Seral stage', 'Climax community', 'End community'],
    correctAnswer: 'Climax community',
    explanation: 'Remains relatively unchanged until a major disturbance.'
  },
  {
    id: 'bio-eco-22',
    text: 'An interaction where both species benefit is:',
    options: ['Commensalism', 'Parasitism', 'Mutualism', 'Competition'],
    correctAnswer: 'Mutualism',
    explanation: 'e.g. Lichens (Algae + Fungi).'
  },
  {
    id: 'bio-eco-23',
    text: 'An interaction where one species benefits and the other is harmed is:',
    options: ['Mutualism', 'Parasitism', 'Commensalism', 'Symbiosis only'],
    correctAnswer: 'Parasitism',
    explanation: 'e.g. Ticks on a dog.'
  },
  {
    id: 'bio-eco-24',
    text: 'An interaction where one species benefits and the other is unaffected is:',
    options: ['Commensalism', 'Mutualism', 'Predation', 'None'],
    correctAnswer: 'Commensalism',
    explanation: 'e.g. Epiphytes on trees.'
  },
  {
    id: 'bio-eco-25',
    text: 'The specific role or "address" of a species in its ecosystem is its:',
    options: ['Habitat', 'Ecological niche', 'Home', 'Trophic level'],
    correctAnswer: 'Ecological niche',
    explanation: 'Includes its habitat and how it uses resources.'
  },
  {
    id: 'bio-eco-26',
    text: 'The place where an organism lives is its:',
    options: ['Niche', 'Habitat', 'Ecosystem', 'Biome'],
    correctAnswer: 'Habitat',
    explanation: 'The physical environment.'
  },
  {
    id: 'bio-eco-27',
    text: 'Competition between members of the SAME species is:',
    options: ['Interspecific', 'Intraspecific', 'External', 'None'],
    correctAnswer: 'Intraspecific',
    explanation: 'Usually more intense due to identical requirements.'
  },
  {
    id: 'bio-eco-28',
    text: 'Competition between members of DIFFERENT species is:',
    options: ['Intraspecific', 'Interspecific', 'Internal', 'Social'],
    correctAnswer: 'Interspecific',
    explanation: 'Occurs when niches overlap.'
  },
  {
    id: 'bio-eco-29',
    text: 'Predation is an interaction where one organism _____ and _____ another.',
    options: ['Helps, feeds', 'Kills, eats', 'Follows, guides', 'None'],
    correctAnswer: 'Kills, eats',
    explanation: 'Predator and Prey relationship.'
  },
  {
    id: 'bio-eco-30',
    text: 'The accumulation of toxic substances in organisms at higher trophic levels is:',
    options: ['Biodegradation', 'Biological Magnification', 'Eutrophication', 'Fixation'],
    correctAnswer: 'Biological Magnification',
    explanation: 'Concentration increases up the food chain (e.g. DDT, Mercury).'
  },
  {
    id: 'bio-eco-31',
    text: 'Xerosere is ecological succession in _____ conditions.',
    options: ['Water (Wet)', 'Dry (Desert/Rock)', 'Saline', 'Cold'],
    correctAnswer: 'Dry (Desert/Rock)',
    explanation: 'Pioneer species are usually lichens.'
  },
  {
    id: 'bio-eco-32',
    text: 'Hydrosere is ecological succession in _____ conditions.',
    options: ['Dry', 'Water/Aquatic', 'Forest', 'None'],
    correctAnswer: 'Water/Aquatic',
    explanation: 'Starts in a pond or lake.'
  },
  {
    id: 'bio-eco-33',
    text: 'What is the "Greenhouse Effect"?',
    options: ['Painting houses green', 'Trapping of heat by atmospheric gases (CO2, Methane)', 'Growth of many plants', 'None'],
    correctAnswer: 'Trapping of heat by atmospheric gases (CO2, Methane)',
    explanation: 'Leads to global warming.'
  },
  {
    id: 'bio-eco-34',
    text: 'Excessive nutrient enrichment of a water body leading to algal bloom is:',
    options: ['Biological magnification', 'Eutrophication', 'Nitrification', 'Acid rain'],
    correctAnswer: 'Eutrophication',
    explanation: 'Often due to fertilizer runoff.'
  },
  {
    id: 'bio-eco-35',
    text: 'Which is a greenhouse gas?',
    options: ['Nitrogen', 'Oxygen', 'Carbon dioxide (CO2)', 'Argon'],
    correctAnswer: 'Carbon dioxide (CO2)',
    explanation: 'Methane and Nitrous oxide are also major ones.'
  },
  {
    id: 'bio-eco-36',
    text: 'Ozone layer depletion is primarily caused by:',
    options: ['CO2', 'CFCs (Chlorofluorocarbons)', 'Sulfur dioxide', 'Oxygen'],
    correctAnswer: 'CFCs (Chlorofluorocarbons)',
    explanation: 'Allows harmful UV radiation to reach Earth.'
  },
  {
    id: 'bio-eco-37',
    text: 'Acid rain is caused by emissions of _____ and _____ in the atmosphere.',
    options: ['CO2, CO', 'SO2, Nitrogen oxides', 'O2, N2', 'Methane, Helium'],
    correctAnswer: 'SO2, Nitrogen oxides',
    explanation: 'Form sulfuric and nitric acids with water vapor.'
  },
  {
    id: 'bio-eco-38',
    text: 'The concept of "Trophic Level" was introduced by:',
    options: ['Darwin', 'Lindeman', 'Mendel', 'Wallace'],
    correctAnswer: 'Lindeman',
    explanation: 'He proposed the 10% energy transfer rule.'
  },
  {
    id: 'bio-eco-39',
    text: 'In a pyramid of numbers, a single large tree can support thousands of insects. This pyramid is:',
    options: ['Upright', 'Inverted', 'Horizontal', 'None'],
    correctAnswer: 'Inverted',
    explanation: 'One producer at the base, many consumers above.'
  },
  {
    id: 'bio-eco-40',
    text: 'Lichens are a pioneer species on bare rock because they can secret _____ to dissolve rock.',
    options: ['Sugar', 'Acids', 'Water', 'Salt'],
    correctAnswer: 'Acids',
    explanation: 'Helps in soil formation (weathering).'
  },
  {
    id: 'bio-eco-41',
    text: 'Primary productivity is the rate at which _____ capture solar energy.',
    options: ['Animals', 'Producers (Plants)', 'Decomposers', 'None'],
    correctAnswer: 'Producers (Plants)',
    explanation: 'Measured as GPP (Gross) or NPP (Net).'
  },
  {
    id: 'bio-eco-42',
    text: 'NPP (Net Primary Productivity) = GPP minus _____ used by plants.',
    options: ['Water', 'Respiration', 'Light', 'Heat'],
    correctAnswer: 'Respiration',
    explanation: 'The energy available to consumers.'
  },
  {
    id: 'bio-eco-43',
    text: 'The biosphere is the _____ part of the Earth where life exists.',
    options: ['Inner', 'Global', 'Thin outer', 'Deepest'],
    correctAnswer: 'Thin outer',
    explanation: 'Sum of all ecosystems.'
  },
  {
    id: 'bio-eco-44',
    text: 'An organism that eats both plants and animals is an:',
    options: ['Herbivore', 'Carnivore', 'Omnivore', 'Decomposer'],
    correctAnswer: 'Omnivore',
    explanation: 'e.g. Humans, Bears.'
  },
  {
    id: 'bio-eco-45',
    text: 'Scavengers are organisms that feed on:',
    options: ['Living prey', 'Dead and decaying animals', 'Only plants', 'Insects only'],
    correctAnswer: 'Dead and decaying animals',
    explanation: 'e.g. Vultures, Hyenas.'
  },
  {
    id: 'bio-eco-46',
    text: 'Phosphorus cycle is different from Nitrogen/Carbon because it lacks a _____ phase.',
    options: ['Solid', 'Liquid', 'Gaseous', 'Organic'],
    correctAnswer: 'Gaseous',
    explanation: 'Phosphorus mostly circulates through rock, soil, and water.'
  },
  {
    id: 'bio-eco-47',
    text: 'Ammonification is the conversion of _____ into _____.',
    options: ['N2, Nitrates', 'Organic nitrogen (proteins), Ammonia', 'Ammonia, N2', 'None'],
    correctAnswer: 'Organic nitrogen (proteins), Ammonia',
    explanation: 'Carried out by decomposers.'
  },
  {
    id: 'bio-eco-48',
    text: 'The maximum population size an environment can support is its:',
    options: ['Niche', 'Carrying capacity', 'Biomass', 'Threshold'],
    correctAnswer: 'Carrying capacity',
    explanation: 'Represented by "K" in population models.'
  },
  {
    id: 'bio-eco-49',
    text: 'Logarithmic (Exponential) growth of a population occurs when resources are:',
    options: ['Limited', 'Unlimited', 'Absent', 'Decreasing'],
    correctAnswer: 'Unlimited',
    explanation: 'J-shaped curve.'
  },
  {
    id: 'bio-eco-50',
    text: 'Logistic growth occurs when resources become _____ and population reaches carrying capacity.',
    options: ['Unlimited', 'Limited', 'Frozen', 'None'],
    correctAnswer: 'Limited',
    explanation: 'S-shaped (Sigmoid) curve.'
  },
  {
    id: 'bio-eco-51',
    text: 'The primary source of energy for almost all ecosystems is:',
    options: ['Moonlight', 'Geothermal heat', 'Sunlight', 'Tides'],
    correctAnswer: 'Sunlight',
    explanation: 'Converted to chemical energy via photosynthesis.'
  },
  {
    id: 'bio-eco-52',
    text: 'Energy flows through an ecosystem in _____ direction(s).',
    options: ['One', 'Two (Circular)', 'Multiple', 'None'],
    correctAnswer: 'One',
    explanation: 'Energy is not recycled like nutrients; it flows from sun to producers to consumers.'
  },
  {
    id: 'bio-eco-53',
    text: 'The "10% Law" means that 90% of energy is lost as _____ at each level.',
    options: ['Mass', 'Heat', 'DNA', 'Water'],
    correctAnswer: 'Heat',
    explanation: 'Result of entropy and metabolic processes.'
  },
  {
    id: 'bio-eco-54',
    text: 'The most productive ecosystems per unit area are:',
    options: ['Deserts', 'Open ocean', 'Tropical rainforests and Coral reefs', 'Tundra'],
    correctAnswer: 'Tropical rainforests and Coral reefs',
    explanation: 'High biodiversity and constant energy input.'
  },
  {
    id: 'bio-eco-55',
    text: 'Which biogeochemical cycle involves the processes of evaporation and transpiration?',
    options: ['Carbon cycle', 'Nitrogen cycle', 'Water (Hydrological) cycle', 'Rock cycle'],
    correctAnswer: 'Water (Hydrological) cycle',
    explanation: 'Essential for transporting other nutrients.'
  },
  {
    id: 'bio-eco-56',
    text: 'Detritus food chain starts from _____ organic matter.',
    options: ['Living', 'Dead', 'Inorganic', 'Gaseous'],
    correctAnswer: 'Dead',
    explanation: 'Eaten by detritivores like earthworms.'
  },
  {
    id: 'bio-eco-57',
    text: 'Ecological pyramids were first proposed by:',
    options: ['Charles Elton', 'Charles Darwin', 'Gregor Mendel', 'Rachel Carson'],
    correctAnswer: 'Charles Elton',
    explanation: 'Also called Eltonian pyramids.'
  },
  {
    id: 'bio-eco-58',
    text: 'Succession starting in a dry area is _____; in a wet area is _____.',
    options: ['Hydrosere, Xerosere', 'Xerosere, Hydrosere', 'Primary, Secondary', 'None'],
    correctAnswer: 'Xerosere, Hydrosere',
    explanation: 'Based on moisture levels.'
  },
  {
    id: 'bio-eco-59',
    text: 'A "Sere" is a whole _____ of communities in succession.',
    options: ['Single', 'Sequence', 'Final', 'Pioneer'],
    correctAnswer: 'Sequence',
    explanation: 'From pioneer to climax.'
  },
  {
    id: 'bio-eco-60',
    text: 'In the Nitrogen cycle, Nitrosomonas converts Ammonia to:',
    options: ['Nitrates', 'Nitrogen gas', 'Nitrites', 'Proteins'],
    correctAnswer: 'Nitrites',
    explanation: 'First step of nitrification.'
  },
  {
    id: 'bio-eco-61',
    text: 'In the Nitrogen cycle, Nitrobacter converts Nitrites to:',
    options: ['Nitrogen gas', 'Nitrates', 'Ammonia', 'Amino acids'],
    correctAnswer: 'Nitrates',
    explanation: 'Second step of nitrification; nitrates are easily absorbed by plants.'
  },
  {
    id: 'bio-eco-62',
    text: 'Mycorrhiza is a mutualistic relationship between _____ and _____.',
    options: ['Algae, Fungi', 'Fungi, Plant roots', 'Bacteria, Legumes', 'Insects, Flowers'],
    correctAnswer: 'Fungi, Plant roots',
    explanation: 'Fungus helps in nutrient absorption, plant provides sugar.'
  },
  {
    id: 'bio-eco-63',
    text: 'Which is a "Density-dependent" factor limiting population growth?',
    options: ['Flood', 'Disease', 'Forest fire', 'Volcano'],
    correctAnswer: 'Disease',
    explanation: 'Spreads faster in crowded populations.'
  },
  {
    id: 'bio-eco-64',
    text: 'Which is a "Density-independent" factor?',
    options: ['Competition', 'Predation', 'Extreme weather (Storms)', 'Resource shortage'],
    correctAnswer: 'Extreme weather (Storms)',
    explanation: 'Affects the population regardless of its size.'
  },
  {
    id: 'bio-eco-65',
    text: 'A group of individuals of the same species in a specific area is a:',
    options: ['Community', 'Population', 'Ecosystem', 'Guild'],
    correctAnswer: 'Population',
    explanation: 'Basic unit of population ecology.'
  },
  {
    id: 'bio-eco-66',
    text: 'All the different populations in an area interacting together form a:',
    options: ['Species', 'Community', 'Biome', 'Habitat'],
    correctAnswer: 'Community',
    explanation: 'Includes all biotic interactions.'
  },
  {
    id: 'bio-eco-67',
    text: 'Species that have a disproportionately large effect on their environment are:',
    options: ['Invasive species', 'Keystone species', 'Indicator species', 'Pioneer species'],
    correctAnswer: 'Keystone species',
    explanation: 'e.g. Sea otters, Beavers.'
  },
  {
    id: 'bio-eco-68',
    text: 'Non-native species that cause harm to an ecosystem are:',
    options: ['Endangered species', 'Invasive species', 'Pioneer species', 'Endemic species'],
    correctAnswer: 'Invasive species',
    explanation: 'e.g. Parthenium, Eucalyptus in some areas.'
  },
  {
    id: 'bio-eco-69',
    text: 'Biological magnification of _____ led to the thinning of bird eggshells.',
    options: ['Mercury', 'DDT', 'Plastic', 'CO2'],
    correctAnswer: 'DDT',
    explanation: 'A persistent pesticide.'
  },
  {
    id: 'bio-eco-70',
    text: 'Burning of fossil fuels primarily impacts which cycle?',
    options: ['Nitrogen', 'Carbon', 'Phosphorus', 'Water'],
    correctAnswer: 'Carbon',
    explanation: 'Releases stored carbon as CO2.'
  },
  {
    id: 'bio-eco-71',
    text: 'An ecological pyramid with a wide base of producers is:',
    options: ['Upright', 'Inverted', 'Spindle-shaped', 'None'],
    correctAnswer: 'Upright',
    explanation: 'Standard for most terrestrial ecosystems.'
  },
  {
    id: 'bio-eco-72',
    text: 'Grazing food chain starts from _____ plants.',
    options: ['Dead', 'Green/Living', 'Inorganic', 'Aquatic only'],
    correctAnswer: 'Green/Living',
    explanation: 'Standard food chain: Grass -> Zebra -> Lion.'
  },
  {
    id: 'bio-eco-73',
    text: 'A predator that kills and eats its prey is a:',
    options: ['Parasite', 'True predator', 'Herbivore', 'Decomposer'],
    correctAnswer: 'True predator',
    explanation: 'Does not live on or in the host like a parasite.'
  },
  {
    id: 'bio-eco-74',
    text: 'Allelopathy is when a plant releases _____ that inhibit the growth of nearby plants.',
    options: ['Sugars', 'Chemicals (Allelochemicals)', 'Water', 'Pollen'],
    correctAnswer: 'Chemicals (Allelochemicals)',
    explanation: 'Form of competition.'
  },
  {
    id: 'bio-eco-75',
    text: 'The relationship between a sea anemone and a hermit crab is:',
    options: ['Parasitism', 'Commensalism/Mutualism', 'Predation', 'None'],
    correctAnswer: 'Commensalism/Mutualism',
    explanation: 'Anemone gets transport, crab gets protection.'
  },
  {
    id: 'bio-eco-76',
    text: 'Lichen is an association between _____ and _____.',
    options: ['Fungus, Moss', 'Fungus, Algae/Cyanobacteria', 'Bacteria, Root', 'Virus, Cell'],
    correctAnswer: 'Fungus, Algae/Cyanobacteria',
    explanation: 'Classic mutualism.'
  },
  {
    id: 'bio-eco-77',
    text: 'Endoparasites live _____ the host body.',
    options: ['Outside', 'Inside', 'Near', 'None'],
    correctAnswer: 'Inside',
    explanation: 'e.g. Tapeworm, Malaria parasite.'
  },
  {
    id: 'bio-eco-78',
    text: 'Ectoparasites live _____ the host body.',
    options: ['Inside', 'Outside', 'Only in blood', 'None'],
    correctAnswer: 'Outside',
    explanation: 'e.g. Mosquitoes, Lice.'
  },
  {
    id: 'bio-eco-79',
    text: 'Which is a "Carbon Sink" (stores more carbon than it releases)?',
    options: ['Volcanoes', 'Oceans and Forests', 'Cities', 'Deserts'],
    correctAnswer: 'Oceans and Forests',
    explanation: 'Crucial for climate regulation.'
  },
  {
    id: 'bio-eco-80',
    text: 'Global warming leads to _____ sea levels due to melting glaciers.',
    options: ['Falling', 'Rising', 'Constant', 'None'],
    correctAnswer: 'Rising',
    explanation: 'Threatens coastal communities.'
  },
  {
    id: 'bio-eco-81',
    text: 'A "Decomposer" is different from a "Scavenger" because it _____ nutrients.',
    options: ['Destroys', 'Recycles', 'Ignores', 'Creates'],
    correctAnswer: 'Recycles',
    explanation: 'Converts organic matter back to inorganic minerals.'
  },
  {
    id: 'bio-eco-82',
    text: 'Which group contains the most energy in an ecosystem?',
    options: ['Tertiary consumers', 'Primary consumers', 'Producers', 'Decomposers'],
    correctAnswer: 'Producers',
    explanation: 'Energy is lost at each subsequent level.'
  },
  {
    id: 'bio-eco-83',
    text: 'The "Ozone Hole" is most prominent over which continent?',
    options: ['Africa', 'Antarctica', 'Australia', 'North America'],
    correctAnswer: 'Antarctica',
    explanation: 'Due to unique atmospheric conditions.'
  },
  {
    id: 'bio-eco-84',
    text: 'The main cause of current high extinction rates is:',
    options: ['Volcanoes', 'Habitat destruction by humans', 'Disease', 'Asteroids'],
    correctAnswer: 'Habitat destruction by humans',
    explanation: 'Leading to the "Sixth Mass Extinction".'
  },
  {
    id: 'bio-eco-85',
    text: 'Deforestation leads to _____ in atmospheric CO2 levels.',
    options: ['Decrease', 'Increase', 'No change', 'None'],
    correctAnswer: 'Increase',
    explanation: 'Fewer trees to absorb CO2.'
  },
  {
    id: 'bio-eco-86',
    text: 'Soil erosion is often a consequence of:',
    options: ['Planting trees', 'Deforestation', 'Rainfall only', 'None'],
    correctAnswer: 'Deforestation',
    explanation: 'Roots hold soil in place.'
  },
  {
    id: 'bio-eco-87',
    text: 'The term "Ecosystem" was coined by:',
    options: ['Ernst Haeckel', 'Arthur Tansley', 'Charles Darwin', 'Eugene Odum'],
    correctAnswer: 'Arthur Tansley',
    explanation: 'In 1935.'
  },
  {
    id: 'bio-eco-88',
    text: 'The term "Ecology" was coined by:',
    options: ['Tansley', 'Ernst Haeckel', 'Aristotle', 'Linnaeus'],
    correctAnswer: 'Ernst Haeckel',
    explanation: 'In 1866.'
  },
  {
    id: 'bio-eco-89',
    text: 'A "Limiting Factor" is one that _____ the growth of a population.',
    options: ['Speeds up', 'Restricts/Controls', 'Ignores', 'None'],
    correctAnswer: 'Restricts/Controls',
    explanation: 'e.g. food, space, water.'
  },
  {
    id: 'bio-eco-90',
    text: 'Human population growth is currently following an _____ curve.',
    options: ['S-shaped', 'Exponential (J-shaped)', 'Decreasing', 'None'],
    correctAnswer: 'Exponential (J-shaped)',
    explanation: 'Though the rate is starting to slow down in some regions.'
  },
  {
    id: 'bio-eco-91',
    text: 'Sustainable development aims to meet current needs _____ compromising future generations.',
    options: ['By', 'Without', 'While', 'None'],
    correctAnswer: 'Without',
    explanation: 'Balancing economic and environmental needs.'
  },
  {
    id: 'bio-eco-92',
    text: 'Which type of pyramid can NEVER be inverted?',
    options: ['Pyramid of Numbers', 'Pyramid of Biomass', 'Pyramid of Energy', 'All can be inverted'],
    correctAnswer: 'Pyramid of Energy',
    explanation: 'Fundamental law of thermodynamics.'
  },
  {
    id: 'bio-eco-93',
    text: 'Bio-indicators are species used to monitor the _____ of an environment.',
    options: ['Speed', 'Health/Pollution levels', 'Color', 'None'],
    correctAnswer: 'Health/Pollution levels',
    explanation: 'e.g. Lichens are sensitive to air pollution (SO2).'
  },
  {
    id: 'bio-eco-94',
    text: 'Biological control uses _____ to manage pests instead of chemicals.',
    options: ['Traps', 'Natural predators/Parasites', 'Music', 'None'],
    correctAnswer: 'Natural predators/Parasites',
    explanation: 'e.g. Ladybugs to kill aphids.'
  },
  {
    id: 'bio-eco-95',
    text: 'The largest reservoir of Nitrogen on Earth is:',
    options: ['Oceans', 'Soil', 'Atmosphere (78%)', 'Living things'],
    correctAnswer: 'Atmosphere (78%)',
    explanation: 'Exists as N2 gas.'
  },
  {
    id: 'bio-eco-96',
    text: 'Succession that starts after a volcanic eruption on fresh lava is:',
    options: ['Primary', 'Secondary', 'Human-led', 'None'],
    correctAnswer: 'Primary',
    explanation: 'No prior life existed there.'
  },
  {
    id: 'bio-eco-97',
    text: 'Competitive exclusion principle states that two species cannot occupy the _____ niche indefinitely.',
    options: ['Same', 'Different', 'Large', 'Cold'],
    correctAnswer: 'Same',
    explanation: 'One will always outcompete the other.'
  },
  {
    id: 'bio-eco-98',
    text: 'Resource partitioning allows species to avoid _____ by using different parts of a resource.',
    options: ['Mating', 'Competition', 'Predation', 'None'],
    correctAnswer: 'Competition',
    explanation: 'e.g. different birds feeding at different heights in the same tree.'
  },
  {
    id: 'bio-eco-99',
    text: 'Tundra is an ecosystem characterized by:',
    options: ['High heat', 'Permafrost (permanently frozen soil)', 'High rainfall', 'Large trees'],
    correctAnswer: 'Permafrost (permanently frozen soil)',
    explanation: 'Found in Arctic and Alpine regions.'
  },
  {
    id: 'bio-eco-100',
    text: 'Ecology is the study of interactions between organisms and their _____ environment.',
    options: ['Social', 'Physical and Biological', 'Hidden', 'None'],
    correctAnswer: 'Physical and Biological',
    explanation: 'Comprehensive study of life in context.'
  }
];
