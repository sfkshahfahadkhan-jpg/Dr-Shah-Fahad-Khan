import { Question } from '../types';

export const LOGICAL_CRITICAL_QUIZ: Question[] = [
  {
    id: 'lc-1',
    text: 'Statement: Most people who use the new software find it efficient. Ritesh uses the new software. Conclusion: Ritesh likely finds the software efficient.',
    options: ['Strongly Valid', 'Invalid', 'Insufficient Data', 'Weakly Valid'],
    correctAnswer: 'Strongly Valid',
    explanation: 'Since "most" (a majority) find it efficient and Ritesh is one of those users, it is logically probable (strongly valid) that he does too.'
  },
  {
    id: 'lc-2',
    text: 'Argument: All students who study hard pass the exam. Ali did not pass the exam. Therefore, Ali did not study hard.',
    options: ['Valid Deductive Reasoning', 'Invalid Reasoning', 'Circular Reasoning', 'Inductive Leap'],
    correctAnswer: 'Valid Deductive Reasoning',
    explanation: 'This follows the Modus Tollens form: If P then Q. Not Q, therefore Not P.'
  },
  {
    id: 'lc-3',
    text: 'Which of the following best describes a "Syllogism"?',
    options: [
      'A logical argument where a conclusion is drawn from two or more premises',
      'A statement that is always true',
      'A fallacy where the conclusion is assumed in the premise',
      'An emotional appeal in an argument'
    ],
    correctAnswer: 'A logical argument where a conclusion is drawn from two or more premises',
    explanation: 'A syllogism typically consists of a major premise, a minor premise, and a conclusion.'
  },
  {
    id: 'lc-4',
    text: 'Identify the fallacy: "We should not listen to his advice on health because he is a smoker."',
    options: ['Ad Hominem', 'Straw Man', 'Slippery Slope', 'False Dilemma'],
    correctAnswer: 'Ad Hominem',
    explanation: 'Ad Hominem attacks the person rather than the argument itself.'
  },
  {
    id: 'lc-5',
    text: 'Statement: Only those who have a valid ticket can enter the hall. Sarah entered the hall. What can be concluded?',
    options: ['Sarah has a valid ticket', 'Sarah might have a valid ticket', 'Sarah is a staff member', 'The ticket checker was absent'],
    correctAnswer: 'Sarah has a valid ticket',
    explanation: 'Since entry is "only" for ticket holders, her entry implies she must have one.'
  },
  {
    id: 'lc-6',
    text: 'If it rains, the ground gets wet. The ground is wet. Does this prove it rained?',
    options: ['Yes', 'No (Affirming the Consequent)', 'Maybe', 'Only in summer'],
    correctAnswer: 'No (Affirming the Consequent)',
    explanation: 'The ground could be wet for other reasons (e.g., a pipe burst). This is a formal fallacy.'
  },
  {
    id: 'lc-7',
    text: 'In an argument, a "Premise" is:',
    options: [
      'The final conclusion',
      'A statement used as evidence to support a conclusion',
      'An irrelevant piece of information',
      'The opposing view'
    ],
    correctAnswer: 'A statement used as evidence to support a conclusion',
    explanation: 'Premises are the foundations upon which logical conclusions are built.'
  },
  {
    id: 'lc-8',
    text: 'Identify the fallacy: "If we allow students to use calculators, they will eventually forget basic arithmetic, leading to a complete collapse of our education system."',
    options: ['Slippery Slope', 'Red Herring', 'Hasty Generalization', 'Post Hoc'],
    correctAnswer: 'Slippery Slope',
    explanation: 'It assumes a small first step will inevitably lead to a chain of related (and typically negative) events.'
  },
  {
    id: 'lc-9',
    text: 'A "Tautology" is a statement that is:',
    options: ['Always false', 'Always true by its own structure', 'Highly controversial', 'Logically impossible'],
    correctAnswer: 'Always true by its own structure',
    explanation: 'Example: "Either it will rain today or it will not rain today."'
  },
  {
    id: 'lc-10',
    text: 'Statement: All mammals breathe air. A whale is a mammal. Conclusion: A whale breathes air.',
    options: ['Valid', 'Invalid', 'Uncertain', 'Partially valid'],
    correctAnswer: 'Valid',
    explanation: 'This is a standard categorical syllogism (Barbara).'
  },
  {
    id: 'lc-11',
    text: 'In logic, what is an "Assumption"?',
    options: [
      'A proven fact',
      'An unstated premise that is taken for granted',
      'The final result of an experiment',
      'A direct observation'
    ],
    correctAnswer: 'An unstated premise that is taken for granted',
    explanation: 'Assumptions are the "missing links" that connect premises to conclusions.'
  },
  {
    id: 'lc-12',
    text: 'If A > B and B > C, then A > C. This is an example of:',
    options: ['Transitive Property', 'Reflexive Property', 'Symmetric Property', 'Associative Property'],
    correctAnswer: 'Transitive Property',
    explanation: 'Logic and math both use the transitive property for ordering.'
  },
  {
    id: 'lc-13',
    text: 'What is a "Red Herring" fallacy?',
    options: [
      'Attacking the character of an opponent',
      'Introducing irrelevant information to distract from the main issue',
      'Drawing a conclusion based on a small sample',
      'Appealing to popular opinion'
    ],
    correctAnswer: 'Introducing irrelevant information to distract from the main issue',
    explanation: 'It is a common tactic used to divert attention from a weak point in an argument.'
  },
  {
    id: 'lc-14',
    text: 'Determine the validity: "Some doctors are surgeons. Some surgeons are rich. Therefore, some doctors are rich."',
    options: ['Invalid', 'Valid', 'Depends on the country', 'Logically certain'],
    correctAnswer: 'Invalid',
    explanation: 'The group of "doctors who are surgeons" might not overlap with the group of "surgeons who are rich".'
  },
  {
    id: 'lc-15',
    text: 'What is the "Straw Man" fallacy?',
    options: [
      'Exaggerating or misrepresenting an opponent\'s position to make it easier to attack',
      'Saying something is true because many people believe it',
      'Using a famous person to endorse an idea',
      'Changing the subject'
    ],
    correctAnswer: 'Exaggerating or misrepresenting an opponent\'s position to make it easier to attack',
    explanation: 'It creates a "man of straw" that is easily knocked down instead of addressing the real argument.'
  },
  {
    id: 'lc-16',
    text: 'If a statement is "Inductive", it moves from:',
    options: [
      'General to specific',
      'Specific to general',
      'Known to unknown directly',
      'Theory to observation'
    ],
    correctAnswer: 'Specific to general',
    explanation: 'Induction looks at patterns in specific instances to form a general rule.'
  },
  {
    id: 'lc-17',
    text: 'Identify the fallacy: "Every time I wash my car, it rains. Therefore, washing my car causes rain."',
    options: ['Post Hoc Ergo Propter Hoc', 'Circular Reasoning', 'Bandwagon', 'Non-sequitur'],
    correctAnswer: 'Post Hoc Ergo Propter Hoc',
    explanation: 'Latin for "after this, therefore because of this" - assuming correlation implies causation.'
  },
  {
    id: 'lc-18',
    text: 'Which of the following is a "Binary Choice" or "False Dilemma" fallacy?',
    options: [
      'Assuming there are only two options when more exist',
      'Choosing the middle path',
      'Always picking the third option',
      'Refusing to make a choice'
    ],
    correctAnswer: 'Assuming there are only two options when more exist',
    explanation: 'Example: "You are either with us or against us."'
  },
  {
    id: 'lc-19',
    text: 'A statement like "I always tell lies" is an example of:',
    options: ['A Paradox', 'A Syllogism', 'A Fact', 'A Generalization'],
    correctAnswer: 'A Paradox',
    explanation: 'If it is true, it is false. If it is false, it is true (The Liar Paradox).'
  },
  {
    id: 'lc-20',
    text: 'In logic, what is "Validity"?',
    options: [
      'The conclusion must be true if the premises are true',
      'The premises are actually true in the real world',
      'The argument is persuasive',
      'The speaker is an expert'
    ],
    correctAnswer: 'The conclusion must be true if the premises are true',
    explanation: 'Validity refers to the structure of the argument, not the truth of the content.'
  },
  {
    id: 'lc-21',
    text: 'Statement: No politician is honest. Mr. X is a politician. Conclusion: Mr. X is not honest.',
    options: ['Logically Valid', 'Logically Invalid', 'Biased', 'Incomplete'],
    correctAnswer: 'Logically Valid',
    explanation: 'If the premise "No P is H" is accepted, then any individual P must not be H.'
  },
  {
    id: 'lc-22',
    text: 'What is a "Non-sequitur"?',
    options: [
      'A conclusion that does not follow from the premises',
      'A very long argument',
      'A repeated statement',
      'A question that has no answer'
    ],
    correctAnswer: 'A conclusion that does not follow from the premises',
    explanation: 'Latin for "it does not follow".'
  },
  {
    id: 'lc-23',
    text: 'Identify the fallacy: "This new law must be good because 70% of the population supports it."',
    options: ['Ad Populum (Bandwagon)', 'Ad Hominem', 'Circular Reasoning', 'Hasty Generalization'],
    correctAnswer: 'Ad Populum (Bandwagon)',
    explanation: 'Appealing to the popularity of an idea as proof of its validity.'
  },
  {
    id: 'lc-24',
    text: 'What is "Deductive" reasoning?',
    options: [
      'Moving from general premises to a specific certain conclusion',
      'Guessing the outcome',
      'Observing nature',
      'Making a broad generalization'
    ],
    correctAnswer: 'Moving from general premises to a specific certain conclusion',
    explanation: 'If the premises are true and the logic is valid, the conclusion *must* be true.'
  },
  {
    id: 'lc-25',
    text: 'Statement: To be a pilot, one must have perfect eyesight. John is a pilot. Therefore, John has perfect eyesight.',
    options: ['Valid', 'Invalid', 'False', 'Circular'],
    correctAnswer: 'Valid',
    explanation: 'The requirement (premise) applies to the individual (conclusion).'
  },
  {
    id: 'lc-26',
    text: 'A "Hasty Generalization" occurs when:',
    options: [
      'One draws a conclusion from too small a sample size',
      'One thinks too fast',
      'One speaks without thinking',
      'One ignores the facts'
    ],
    correctAnswer: 'One draws a conclusion from too small a sample size',
    explanation: 'Example: "I met two rude people in Paris; therefore, all Parisians are rude."'
  },
  {
    id: 'lc-27',
    text: 'What is "Begging the Question"?',
    options: [
      'Circular reasoning where the conclusion is hidden in the premise',
      'Asking a difficult question',
      'Ignoring a question',
      'Asking for more evidence'
    ],
    correctAnswer: 'Circular reasoning where the conclusion is hidden in the premise',
    explanation: 'Example: "Freedom of speech is important because people should be able to speak freely."'
  },
  {
    id: 'lc-28',
    text: 'Statement: If the price of gold rises, the stock market falls. The price of gold did not rise. Conclusion: The stock market did not fall.',
    options: ['Invalid (Denying the Antecedent)', 'Valid', 'Probably true', 'Impossible to say'],
    correctAnswer: 'Invalid (Denying the Antecedent)',
    explanation: 'The stock market could fall for other reasons even if gold doesn\'t rise.'
  },
  {
    id: 'lc-29',
    text: 'In logic, what is a "Contradiction"?',
    options: [
      'A set of statements that cannot all be true at the same time',
      'A long debate',
      'An agreement',
      'A simple lie'
    ],
    correctAnswer: 'A set of statements that cannot all be true at the same time',
    explanation: 'Example: "It is raining" and "It is not raining" (in the same spot and time).'
  },
  {
    id: 'lc-30',
    text: 'What does "Inference" mean?',
    options: [
      'Drawing a conclusion based on evidence and reasoning',
      'A direct observation',
      'A wild guess',
      'Asking for help'
    ],
    correctAnswer: 'Drawing a conclusion based on evidence and reasoning',
    explanation: 'Inferences are the steps in reasoning, moving from premises to logical consequences.'
  },
  {
    id: 'lc-31',
    text: 'Identify the fallacy: "God exists because the Bible says so, and the Bible is the word of God."',
    options: ['Circular Reasoning', 'False Analogy', 'Red Herring', 'Ad Hominem'],
    correctAnswer: 'Circular Reasoning',
    explanation: 'The argument assumes what it is trying to prove.'
  },
  {
    id: 'lc-32',
    text: 'What is an "Enthymeme"?',
    options: [
      'A syllogism with one premise unstated (assumed)',
      'A very complex math problem',
      'A type of logical fallacy',
      'A formal debate'
    ],
    correctAnswer: 'A syllogism with one premise unstated (assumed)',
    explanation: 'Most everyday arguments are enthymemes because we don\'t state every obvious fact.'
  },
  {
    id: 'lc-33',
    text: 'Statement: All squares are rectangles. Some rectangles are red. Conclusion: Some squares are red.',
    options: ['Invalid', 'Valid', 'Always true', 'Uncertain'],
    correctAnswer: 'Invalid',
    explanation: 'The red rectangles might not be the squares.'
  },
  {
    id: 'lc-34',
    text: 'Which is an example of an "Analogy"?',
    options: [
      'Comparing two things to explain an idea',
      'Listing facts',
      'Counting numbers',
      'Drawing a map'
    ],
    correctAnswer: 'Comparing two things to explain an idea',
    explanation: 'Analogies help understand complex concepts by comparing them to simpler ones.'
  },
  {
    id: 'lc-35',
    text: 'Identify the fallacy: "A feather is light. What is light cannot be dark. Therefore, a feather cannot be dark."',
    options: ['Equivocation', 'Amphiboly', 'Composition', 'Division'],
    correctAnswer: 'Equivocation',
    explanation: 'Using the same word (light) with two different meanings (weight vs. brightness).'
  },
  {
    id: 'lc-36',
    text: 'In logic, what is a "Counterexample"?',
    options: [
      'An example that disproves a general rule',
      'A similar example',
      'A very long example',
      'A fake example'
    ],
    correctAnswer: 'An example that disproves a general rule',
    explanation: 'If I say "All swans are white," seeing one black swan is a counterexample.'
  },
  {
    id: 'lc-37',
    text: 'What is the "Fallacy of Composition"?',
    options: [
      'Assuming what is true for the parts is true for the whole',
      'Assuming what is true for the whole is true for the parts',
      'Writing a bad essay',
      'Ignoring the parts'
    ],
    correctAnswer: 'Assuming what is true for the parts is true for the whole',
    explanation: 'Example: "Every player on the team is good, so the team must be good."'
  },
  {
    id: 'lc-38',
    text: 'What is the "Fallacy of Division"?',
    options: [
      'Assuming what is true for the whole is true for the parts',
      'Assuming what is true for the parts is true for the whole',
      'Dividing numbers wrong',
      'Breaking things'
    ],
    correctAnswer: 'Assuming what is true for the whole is true for the parts',
    explanation: 'Example: "The company is wealthy, so every employee must be wealthy."'
  },
  {
    id: 'lc-39',
    text: 'Statement: If I am in Lahore, I am in Pakistan. I am in Pakistan. Conclusion: I am in Lahore.',
    options: ['Invalid', 'Valid', 'True', 'Possibly true but not logically certain'],
    correctAnswer: 'Possibly true but not logically certain',
    explanation: 'I could be in Karachi or Islamabad.'
  },
  {
    id: 'lc-40',
    text: 'In an argument, "Coherence" refers to:',
    options: [
      'How well the parts fit together logically',
      'How loud the speaker is',
      'How many people agree',
      'The length of the text'
    ],
    correctAnswer: 'How well the parts fit together logically',
    explanation: 'Coherent arguments are clear, consistent, and easy to follow.'
  },
  {
    id: 'lc-41',
    text: 'Which is a "Categorical" statement?',
    options: ['All A are B', 'If A then B', 'Either A or B', 'A and B'],
    correctAnswer: 'All A are B',
    explanation: 'It places items into a category unconditionally.'
  },
  {
    id: 'lc-42',
    text: 'What is "Abductive" reasoning?',
    options: [
      'Reasoning to the best explanation',
      'Moving from general to specific',
      'Testing a hypothesis',
      'Making a mistake'
    ],
    correctAnswer: 'Reasoning to the best explanation',
    explanation: 'It starts with an observation and seeks the most likely explanation (often used by detectives).'
  },
  {
    id: 'lc-43',
    text: 'Identify the fallacy: "You should vote for this candidate; after all, he is a war hero."',
    options: ['Genetic Fallacy / Appeal to inappropriate authority', 'Straw Man', 'Red Herring', 'Circular Reasoning'],
    correctAnswer: 'Genetic Fallacy / Appeal to inappropriate authority',
    explanation: 'Being a hero doesn\'t necessarily mean he is a good politician (irrelevant quality).'
  },
  {
    id: 'lc-44',
    text: 'A "Logical Fallacy" is:',
    options: [
      'An error in reasoning that makes an argument invalid',
      'A difficult truth',
      'A complex fact',
      'A type of math'
    ],
    correctAnswer: 'An error in reasoning that makes an argument invalid',
    explanation: 'Fallacies can be formal (structure) or informal (content).'
  },
  {
    id: 'lc-45',
    text: 'Statement: No even number is prime, except 2. 7 is a prime number. Conclusion: 7 is not an even number.',
    options: ['Valid', 'Invalid', 'False', 'Tautology'],
    correctAnswer: 'Valid',
    explanation: 'Since 7 is prime and not 2, it cannot be even based on the premise.'
  },
  {
    id: 'lc-46',
    text: 'What is an "Analogy"?',
    options: [
      'A comparison between two things for the purpose of explanation',
      'A direct lie',
      'A scientific law',
      'A mathematical proof'
    ],
    correctAnswer: 'A comparison between two things for the purpose of explanation',
    explanation: 'Analogy: "Life is like a box of chocolates."'
  },
  {
    id: 'lc-47',
    text: 'Which of the following is a "Causal" argument?',
    options: [
      'A leads to B',
      'A is like B',
      'A is a part of B',
      'A is different from B'
    ],
    correctAnswer: 'A leads to B',
    explanation: 'It claims that one event (cause) produces another (effect).'
  },
  {
    id: 'lc-48',
    text: 'Identify the fallacy: "No one has proven that aliens don\'t exist, so they must exist."',
    options: ['Appeal to Ignorance', 'Bandwagon', 'Hasty Generalization', 'Post Hoc'],
    correctAnswer: 'Appeal to Ignorance',
    explanation: 'Arguing that a lack of evidence for "not P" is proof of "P".'
  },
  {
    id: 'lc-49',
    text: 'In logic, what is a "Conditional" statement?',
    options: ['If P, then Q', 'P and Q', 'P or Q', 'Not P'],
    correctAnswer: 'If P, then Q',
    explanation: 'It expresses a dependency: Q happens only if P is true.'
  },
  {
    id: 'lc-50',
    text: 'A "Strong" inductive argument is one where:',
    options: [
      'The conclusion is highly likely if the premises are true',
      'The conclusion must be true',
      'The speaker is very loud',
      'The argument is very long'
    ],
    correctAnswer: 'The conclusion is highly likely if the premises are true',
    explanation: 'Induction deals with probability, not absolute certainty.'
  },
  {
    id: 'lc-51',
    text: 'Statement: Some politicians are corrupt. Mr. A is a politician. Conclusion: Mr. A is corrupt.',
    options: ['Invalid', 'Valid', 'Partially valid', 'Strongly possible'],
    correctAnswer: 'Invalid',
    explanation: 'Just because "some" are corrupt doesn\'t mean "all" are, or that Mr. A specifically is.'
  },
  {
    id: 'lc-52',
    text: 'What is "Skepticism"?',
    options: [
      'A questioning attitude toward knowledge claims',
      'Believing everything you hear',
      'Always being angry',
      'A type of science'
    ],
    correctAnswer: 'A questioning attitude toward knowledge claims',
    explanation: 'Critical thinkers use skepticism to evaluate evidence before accepting conclusions.'
  },
  {
    id: 'lc-53',
    text: 'Identify the fallacy: "My physics teacher says that this economic policy is bad, so it must be bad."',
    options: ['Appeal to Unreliable Authority', 'Red Herring', 'Circular Reasoning', 'Straw Man'],
    correctAnswer: 'Appeal to Unreliable Authority',
    explanation: 'A physics teacher is not necessarily an expert in economics.'
  },
  {
    id: 'lc-54',
    text: 'What is "Occam\'s Razor"?',
    options: [
      'The simplest explanation is usually the correct one',
      'Always use a sharp logic',
      'The longest argument is best',
      'The first person to speak wins'
    ],
    correctAnswer: 'The simplest explanation is usually the correct one',
    explanation: 'In logic and science, avoid making unnecessary assumptions.'
  },
  {
    id: 'lc-55',
    text: 'Statement: If you study, you will pass. You passed. Conclusion: You studied.',
    options: ['Invalid (Affirming the Consequent)', 'Valid', 'True', 'Probably true'],
    correctAnswer: 'Invalid (Affirming the Consequent)',
    explanation: 'Passing doesn\'t prove you studied (you could have cheated or the test was easy).'
  },
  {
    id: 'lc-56',
    text: 'What is "Cognitive Bias"?',
    options: [
      'A systematic error in thinking that affects judgments',
      'A type of brain injury',
      'A very smart thought',
      'A learning method'
    ],
    correctAnswer: 'A systematic error in thinking that affects judgments',
    explanation: 'Biases like Confirmation Bias can lead to illogical conclusions.'
  },
  {
    id: 'lc-57',
    text: 'Identify the fallacy: "Smoking is not bad for you; my grandfather smoked every day and lived to be 90."',
    options: ['Anecdotal Evidence', 'Hasty Generalization', 'Appeal to Emotion', 'Bandwagon'],
    correctAnswer: 'Anecdotal Evidence',
    explanation: 'Using a single personal story instead of statistical data.'
  },
  {
    id: 'lc-58',
    text: 'A "Necessary Condition" is one that:',
    options: [
      'Must be present for an event to occur',
      'Guarantees an event will occur',
      'Is optional',
      'Is irrelevant'
    ],
    correctAnswer: 'Must be present for an event to occur',
    explanation: 'Example: Having air is necessary for human life (but not sufficient on its own).'
  },
  {
    id: 'lc-59',
    text: 'A "Sufficient Condition" is one that:',
    options: [
      'Guarantees an event will occur',
      'Must be present but doesn\'t guarantee',
      'Is not needed',
      'Is too much'
    ],
    correctAnswer: 'Guarantees an event will occur',
    explanation: 'Example: Being a mother is sufficient to prove you are female.'
  },
  {
    id: 'lc-60',
    text: 'In logic, what is a "Dilemma"?',
    options: [
      'A situation where one must choose between two undesirable options',
      'A simple problem',
      'A happy choice',
      'A type of math formula'
    ],
    correctAnswer: 'A situation where one must choose between two undesirable options',
    explanation: 'Often called "being between a rock and a hard place."'
  },
  {
    id: 'lc-61',
    text: 'Statement: All firemen wear helmets. John is wearing a helmet. Conclusion: John is a fireman.',
    options: ['Invalid', 'Valid', 'True', 'Strongly possible'],
    correctAnswer: 'Invalid',
    explanation: 'Others (like cyclists) also wear helmets.'
  },
  {
    id: 'lc-62',
    text: 'What is "Confirmation Bias"?',
    options: [
      'The tendency to search for information that supports our existing beliefs',
      'Confirming a flight',
      'Believing everyone',
      'A type of science experiment'
    ],
    correctAnswer: 'The tendency to search for information that supports our existing beliefs',
    explanation: 'It prevents us from looking at the full picture objectively.'
  },
  {
    id: 'lc-63',
    text: 'Identify the fallacy: "Either you support this tax increase or you hate children."',
    options: ['False Dilemma / Black-and-White', 'Red Herring', 'Straw Man', 'Ad Hominem'],
    correctAnswer: 'False Dilemma / Black-and-White',
    explanation: 'Reducing a complex issue to only two extreme options.'
  },
  {
    id: 'lc-64',
    text: 'What is a "Counter-argument"?',
    options: [
      'An argument put forward to oppose another argument',
      'A loud argument',
      'An argument about counting',
      'The end of a debate'
    ],
    correctAnswer: 'An argument put forward to oppose another argument',
    explanation: 'Critical thinkers anticipate and address counter-arguments.'
  },
  {
    id: 'lc-65',
    text: 'Statement: If it is a bird, it can fly. An ostrich is a bird. Conclusion: An ostrich can fly.',
    options: ['Invalid (False Premise)', 'Valid but unsound', 'Completely true', 'Invalid logic'],
    correctAnswer: 'Valid but unsound',
    explanation: 'The logic is valid (All B can F, O is B, so O can F), but the first premise is factually false.'
  },
  {
    id: 'lc-66',
    text: 'In logic, "Consistency" means:',
    options: [
      'A set of statements that do not contradict each other',
      'Doing the same thing every day',
      'Writing with the same pen',
      'Always being right'
    ],
    correctAnswer: 'A set of statements that do not contradict each other',
    explanation: 'If a system is inconsistent, it can prove anything (The Principle of Explosion).'
  },
  {
    id: 'lc-67',
    text: 'Identify the fallacy: "Our current CEO is great; under him, profits rose 20%."',
    options: ['Post Hoc (assuming cause)', 'Circular Reasoning', 'Hasty Generalization', 'Red Herring'],
    correctAnswer: 'Post Hoc (assuming cause)',
    explanation: 'The profit rise might be due to market trends, not the CEO specifically (unless proven).'
  },
  {
    id: 'lc-68',
    text: 'What is an "Axion"?',
    options: [
      'A statement accepted as true without proof as a starting point',
      'A type of chemical',
      'A conclusion',
      'A mistake'
    ],
    correctAnswer: 'A statement accepted as true without proof as a starting point',
    explanation: 'Axioms are the foundation of mathematical and logical systems.'
  },
  {
    id: 'lc-69',
    text: 'A "Categorical Syllogism" consists of:',
    options: [
      'Two premises and one conclusion',
      'One premise and two conclusions',
      'Many random statements',
      'A question and an answer'
    ],
    correctAnswer: 'Two premises and one conclusion',
    explanation: 'Example: All M are P, All S are M, therefore All S are P.'
  },
  {
    id: 'lc-70',
    text: 'Which is an example of "Rhetoric"?',
    options: [
      'The art of effective or persuasive speaking/writing',
      'A type of math',
      'A scientific method',
      'Counting numbers'
    ],
    correctAnswer: 'The art of effective or persuasive speaking/writing',
    explanation: 'Rhetoric uses logic, emotion, and character to persuade.'
  },
  {
    id: 'lc-71',
    text: 'Identify the fallacy: "I don\'t see how evolution is possible, so it must be false."',
    options: ['Personal Incredulity', 'Bandwagon', 'Circular Reasoning', 'Slippery Slope'],
    correctAnswer: 'Personal Incredulity',
    explanation: 'Because something is difficult to understand, you assume it isn\'t true.'
  },
  {
    id: 'lc-72',
    text: 'In logic, "Negation" of "All A are B" is:',
    options: [
      'Some A are not B',
      'No A are B',
      'All A are not B',
      'Some B are A'
    ],
    correctAnswer: 'Some A are not B',
    explanation: 'To disprove "all," you only need to find one exception.'
  },
  {
    id: 'lc-73',
    text: 'What is a "Self-contradictory" statement?',
    options: [
      'A statement that is both true and false at once',
      'A statement that is very long',
      'A statement that is loud',
      'A statement that is right'
    ],
    correctAnswer: 'A statement that is both true and false at once',
    explanation: 'Example: "I am dead."'
  },
  {
    id: 'lc-74',
    text: 'A "Valid" argument with "True" premises is called:',
    options: ['A Sound Argument', 'A Strong Argument', 'A Tautology', 'A Fact'],
    correctAnswer: 'A Sound Argument',
    explanation: 'Soundness = Validity + Truth.'
  },
  {
    id: 'lc-75',
    text: 'Statement: If I eat, I am happy. I am not happy. Conclusion: I did not eat.',
    options: ['Valid (Modus Tollens)', 'Invalid', 'False', 'Circular'],
    correctAnswer: 'Valid (Modus Tollens)',
    explanation: 'If P then Q. Not Q, therefore Not P.'
  },
  {
    id: 'lc-76',
    text: 'Identify the fallacy: "The sun has risen every day so far, so it will rise tomorrow."',
    options: ['Inductive Leap (Problem of Induction)', 'Post Hoc', 'Red Herring', 'None (Valid induction)'],
    correctAnswer: 'None (Valid induction)',
    explanation: 'While technically an "inductive leap," it is considered a strong and reliable inductive argument.'
  },
  {
    id: 'lc-77',
    text: 'What is "Critical Thinking"?',
    options: [
      'The objective analysis and evaluation of an issue',
      'Criticizing everyone',
      'Thinking about bad things',
      'Ignoring the facts'
    ],
    correctAnswer: 'The objective analysis and evaluation of an issue',
    explanation: 'It involves logic, evidence, and self-correction.'
  },
  {
    id: 'lc-78',
    text: 'Identify the fallacy: "Why are you complaining about the heat? Think of the starving children!"',
    options: ['Red Herring / Relative Privation', 'Ad Hominem', 'Circular Reasoning', 'False Dilemma'],
    correctAnswer: 'Red Herring / Relative Privation',
    explanation: 'Using a more serious (but irrelevant) problem to dismiss a smaller one.'
  },
  {
    id: 'lc-79',
    text: 'In logic, what is "Equivalence"?',
    options: [
      'Two statements that have the same truth value',
      'Two things that are the same size',
      'Two people who agree',
      'Two numbers that are equal'
    ],
    correctAnswer: 'Two statements that have the same truth value',
    explanation: 'Example: "Not (P and Q)" is equivalent to "(Not P) or (Not Q)".'
  },
  {
    id: 'lc-80',
    text: 'What is a "Venn Diagram" used for in logic?',
    options: [
      'To visualize the relationships between sets/categories',
      'To count numbers',
      'To draw pictures',
      'To record time'
    ],
    correctAnswer: 'To visualize the relationships between sets/categories',
    explanation: 'It helps check the validity of categorical syllogisms.'
  },
  {
    id: 'lc-81',
    text: 'Statement: Only geniuses pass this test. Rahul passed the test. Conclusion: Rahul is a genius.',
    options: ['Valid', 'Invalid', 'Possibly true', 'Biased'],
    correctAnswer: 'Valid',
    explanation: 'Since "only" geniuses pass, passing *guarantees* being a genius.'
  },
  {
    id: 'lc-82',
    text: 'What is "Heuristic" thinking?',
    options: [
      'Mental shortcuts that allow fast decision making',
      'Very slow and deep thinking',
      'Thinking in circles',
      'A type of computer program'
    ],
    correctAnswer: 'Mental shortcuts that allow fast decision making',
    explanation: 'Heuristics are often helpful but can lead to cognitive biases.'
  },
  {
    id: 'lc-83',
    text: 'Identify the fallacy: "This doctor is wearing a messy coat, so he must be a bad doctor."',
    options: ['Halo Effect / Hasty Generalization', 'Ad Hominem', 'Straw Man', 'Circular Reasoning'],
    correctAnswer: 'Halo Effect / Hasty Generalization',
    explanation: 'Judging professional ability based on unrelated appearance.'
  },
  {
    id: 'lc-84',
    text: 'What is a "Factual" claim?',
    options: [
      'A claim that can be proven or disproven with evidence',
      'A personal opinion',
      'A loud statement',
      'A lucky guess'
    ],
    correctAnswer: 'A claim that can be proven or disproven with evidence',
    explanation: 'Facts are objective; opinions are subjective.'
  },
  {
    id: 'lc-85',
    text: 'Statement: If P then Q. P is false. Therefore, Q is false.',
    options: ['Invalid (Denying the Antecedent)', 'Valid', 'True', 'False'],
    correctAnswer: 'Invalid (Denying the Antecedent)',
    explanation: 'Q could still be true due to some other cause (not P).'
  },
  {
    id: 'lc-86',
    text: 'In logic, what is "Parsimony"?',
    options: [
      'Choosing the simplest theory with the fewest assumptions',
      'Being very angry',
      'A type of flower',
      'A mathematical sequence'
    ],
    correctAnswer: 'Choosing the simplest theory with the fewest assumptions',
    explanation: 'Relates to Occam\'s Razor.'
  },
  {
    id: 'lc-87',
    text: 'Identify the fallacy: "Everyone is buying the new iPhone, so it must be the best phone."',
    options: ['Bandwagon / Ad Populum', 'Hasty Generalization', 'Circular Reasoning', 'Red Herring'],
    correctAnswer: 'Bandwagon / Ad Populum',
    explanation: 'Popularity is not proof of quality.'
  },
  {
    id: 'lc-88',
    text: 'What is a "Formal" fallacy?',
    options: [
      'An error in the structure of the argument',
      'An error in the facts',
      'A polite mistake',
      'A very long error'
    ],
    correctAnswer: 'An error in the structure of the argument',
    explanation: 'Formal fallacies make the argument invalid regardless of the content.'
  },
  {
    id: 'lc-89',
    text: 'What is an "Informal" fallacy?',
    options: [
      'An error in the content or context of the argument',
      'A casual mistake',
      'A small error',
      'A funny mistake'
    ],
    correctAnswer: 'An error in the content or context of the argument',
    explanation: 'Examples: Ad Hominem, Straw Man, Red Herring.'
  },
  {
    id: 'lc-90',
    text: 'Statement: All poets are dreamers. No dreamers are realistic. Conclusion: No poets are realistic.',
    options: ['Valid', 'Invalid', 'False', 'Uncertain'],
    correctAnswer: 'Valid',
    explanation: 'If P is in D, and D is outside R, then P must be outside R.'
  },
  {
    id: 'lc-91',
    text: 'What is "Syllogistic" logic?',
    options: [
      'Logic based on two premises and a conclusion',
      'Logic using numbers',
      'Logic about symbols',
      'A type of ancient language'
    ],
    correctAnswer: 'Logic based on two premises and a conclusion',
    explanation: 'Developed by Aristotle.'
  },
  {
    id: 'lc-92',
    text: 'Identify the fallacy: "I used this crystal and my headache went away; therefore, the crystal healed me."',
    options: ['Post Hoc / Anecdotal', 'Circular Reasoning', 'Bandwagon', 'False Dilemma'],
    correctAnswer: 'Post Hoc / Anecdotal',
    explanation: 'Assuming the crystal was the cause just because it happened before the relief.'
  },
  {
    id: 'lc-93',
    text: 'What is "Dialectical" reasoning?',
    options: [
      'A method of argument for resolving disagreement via dialogue',
      'Thinking about dialects',
      'A type of math',
      'A quick guess'
    ],
    correctAnswer: 'A method of argument for resolving disagreement via dialogue',
    explanation: 'It involves thesis, antithesis, and synthesis.'
  },
  {
    id: 'lc-94',
    text: 'In logic, what is "Clarity"?',
    options: [
      'Expressing ideas in a way that is easy to understand',
      'A type of stone',
      'Being very loud',
      'Using big words'
    ],
    correctAnswer: 'Expressing ideas in a way that is easy to understand',
    explanation: 'Clear thinking is essential for logical analysis.'
  },
  {
    id: 'lc-95',
    text: 'Statement: If it is Sunday, the shop is closed. It is not Sunday. Conclusion: The shop is open.',
    options: ['Invalid (Denying the Antecedent)', 'Valid', 'True', 'Probably true'],
    correctAnswer: 'Invalid (Denying the Antecedent)',
    explanation: 'The shop could be closed for other reasons (e.g., a holiday or repair).'
  },
  {
    id: 'lc-96',
    text: 'What is "Intellectual Humility"?',
    options: [
      'Recognizing that your beliefs might be wrong',
      'Being very quiet',
      'Not studying',
      'Accepting everything'
    ],
    correctAnswer: 'Recognizing that your beliefs might be wrong',
    explanation: 'It is a key virtue for critical thinking.'
  },
  {
    id: 'lc-97',
    text: 'Identify the fallacy: "You can\'t trust his math; he doesn\'t even know how to cook!"',
    options: ['Ad Hominem / Non-sequitur', 'Straw Man', 'Circular Reasoning', 'Red Herring'],
    correctAnswer: 'Ad Hominem / Non-sequitur',
    explanation: 'Cooking skill has nothing to do with mathematical ability.'
  },
  {
    id: 'lc-98',
    text: 'In logic, what is a "Trope"?',
    options: [
      'A common or overused theme or device',
      'A type of argument',
      'A mistake',
      'A fact'
    ],
    correctAnswer: 'A common or overused theme or device',
    explanation: 'Often used in literature and rhetoric.'
  },
  {
    id: 'lc-99',
    text: 'What is "Empirical" evidence?',
    options: [
      'Evidence gained by means of observation or experimentation',
      'Evidence from a book',
      'A personal feeling',
      'A loud statement'
    ],
    correctAnswer: 'Evidence gained by means of observation or experimentation',
    explanation: 'Empirical data is used to test logical theories.'
  },
  {
    id: 'lc-100',
    text: 'Final Logic Check: Is it possible for an argument to be Valid but not Sound?',
    options: ['Yes', 'No', 'Only in math', 'Only in philosophy'],
    correctAnswer: 'Yes',
    explanation: 'Yes, if the structure is correct but the premises are false.'
  }
];
