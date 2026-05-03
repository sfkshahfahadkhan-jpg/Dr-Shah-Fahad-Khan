import { Question } from '../types';

export const LOGICAL_DEDUCTION_QUIZ: Question[] = [
  {
    id: 'ld-1',
    text: 'All men are mortal. Socrates is a man. Therefore, Socrates is mortal.',
    options: ['Valid Deduction', 'Invalid Deduction', 'Circular Logic', 'Inductive Leap'],
    correctAnswer: 'Valid Deduction',
    explanation: 'This is a classic categorical syllogism following the Barbara form (All A are B, C is A, so C is B).'
  },
  {
    id: 'ld-2',
    text: 'Some cars are red. All red things are bright. Therefore, some cars are bright.',
    options: ['Valid', 'Invalid', 'Insufficient Data', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Since "some cars" are in the "red" category, and "all red" are in the "bright" category, those specific cars must be bright.'
  },
  {
    id: 'ld-3',
    text: 'No dogs are cats. Some cats are pets. Therefore, no dogs are pets.',
    options: ['Invalid', 'Valid', 'Certain', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'While no dogs are cats, dogs can still be in the "pets" category. The premise doesn\'t exclude dogs from being pets.'
  },
  {
    id: 'ld-4',
    text: 'If it rains, the grass is wet. It did not rain. Therefore, the grass is not wet.',
    options: ['Invalid (Denying the Antecedent)', 'Valid', 'True', 'False'],
    correctAnswer: 'Invalid (Denying the Antecedent)',
    explanation: 'The grass could be wet for other reasons (e.g., a sprinkler).'
  },
  {
    id: 'ld-5',
    text: 'All apples are fruits. Some fruits are sweet. Therefore, some apples are sweet.',
    options: ['Invalid', 'Valid', 'Certain', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'The "sweet" fruits might not be the "apples". There is no guaranteed overlap.'
  },
  {
    id: 'ld-6',
    text: 'Only members can vote. John voted. Therefore, John is a member.',
    options: ['Valid', 'Invalid', 'Likely', 'Uncertain'],
    correctAnswer: 'Valid',
    explanation: 'Since voting is exclusive to members, the act of voting implies membership.'
  },
  {
    id: 'ld-7',
    text: 'All students are hardworking. No hardworking person is lazy. Therefore, no student is lazy.',
    options: ['Valid', 'Invalid', 'Probably', 'Sometimes'],
    correctAnswer: 'Valid',
    explanation: 'If all students belong to the hardworking group, and the hardworking group has zero overlap with the lazy group, students cannot be lazy.'
  },
  {
    id: 'ld-8',
    text: 'Some doctors are lawyers. Some lawyers are pilots. Therefore, some doctors are pilots.',
    options: ['Invalid', 'Valid', 'Possible', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'There is no middle term connecting doctors and pilots with certainty.'
  },
  {
    id: 'ld-9',
    text: 'If I am rich, I am happy. I am not happy. Therefore, I am not rich.',
    options: ['Valid (Modus Tollens)', 'Invalid', 'False', 'Circular'],
    correctAnswer: 'Valid (Modus Tollens)',
    explanation: 'If P then Q. Not Q, therefore Not P.'
  },
  {
    id: 'ld-10',
    text: 'All whales are mammals. All mammals have lungs. Therefore, all whales have lungs.',
    options: ['Valid', 'Invalid', 'Partially true', 'False'],
    correctAnswer: 'Valid',
    explanation: 'A transitive relationship between sets.'
  },
  {
    id: 'ld-11',
    text: 'Some actors are singers. All singers are famous. Therefore, some actors are famous.',
    options: ['Valid', 'Invalid', 'Possible', 'False'],
    correctAnswer: 'Valid',
    explanation: 'The singers who are actors are also part of the famous category.'
  },
  {
    id: 'ld-12',
    text: 'No students are teachers. Some teachers are experts. Therefore, no students are experts.',
    options: ['Invalid', 'Valid', 'Certain', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Students can still be experts, as the premise only separates them from teachers.'
  },
  {
    id: 'ld-13',
    text: 'If the battery is dead, the car won\'t start. The car starts. Therefore, the battery is not dead.',
    options: ['Valid', 'Invalid', 'Maybe', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens: Not Q implies Not P.'
  },
  {
    id: 'ld-14',
    text: 'Some pens are blue. Some blue things are expensive. Therefore, some pens are expensive.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'No guaranteed overlap between the specific pens and the specific expensive blue items.'
  },
  {
    id: 'ld-15',
    text: 'All poets are writers. Some writers are Nobel laureates. Therefore, some poets are Nobel laureates.',
    options: ['Invalid', 'Valid', 'Certain', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'The Nobel laureates could be among the writers who are not poets.'
  },
  {
    id: 'ld-16',
    text: 'Only a brave person can be a soldier. Alex is not brave. Therefore, Alex is not a soldier.',
    options: ['Valid', 'Invalid', 'Likely', 'Uncertain'],
    correctAnswer: 'Valid',
    explanation: 'Since bravery is a necessary condition, the absence of bravery excludes Alex.'
  },
  {
    id: 'ld-17',
    text: 'All birds have wings. An airplane has wings. Therefore, an airplane is a bird.',
    options: ['Invalid (Affirming the Consequent)', 'Valid', 'True', 'Nonsense'],
    correctAnswer: 'Invalid (Affirming the Consequent)',
    explanation: 'Having wings is a property of birds, but not exclusive to them.'
  },
  {
    id: 'ld-18',
    text: 'No squares are circles. All circles are round. Therefore, no squares are round.',
    options: ['Invalid', 'Valid', 'False', 'Possibly'],
    correctAnswer: 'Invalid',
    explanation: 'Squares can\'t be circles, but "round" isn\'t defined as "being a circle". (Though in geometry it works differently, in logic, the property isn\'t exclusive).'
  },
  {
    id: 'ld-19',
    text: 'If A is true, then B is true. B is false. Therefore, A is false.',
    options: ['Valid', 'Invalid', 'True', 'Inductive'],
    correctAnswer: 'Valid',
    explanation: 'Standard Modus Tollens.'
  },
  {
    id: 'ld-20',
    text: 'Some flowers are red. All roses are flowers. Therefore, some roses are red.',
    options: ['Invalid', 'Valid', 'Likely', 'Always True'],
    correctAnswer: 'Invalid',
    explanation: 'The red flowers might not be roses.'
  },
  {
    id: 'ld-21',
    text: 'All kings are rulers. No rulers are cowards. Therefore, no king is a coward.',
    options: ['Valid', 'Invalid', 'Possible', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Syllogistic deduction.'
  },
  {
    id: 'ld-22',
    text: 'Some chairs are tables. Some tables are beds. Therefore, some chairs are beds.',
    options: ['Invalid', 'Valid', 'Likely', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'No middle link connects chairs and beds.'
  },
  {
    id: 'ld-23',
    text: 'If you are a human, you are a mammal. You are a mammal. Therefore, you are a human.',
    options: ['Invalid (Affirming the Consequent)', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid (Affirming the Consequent)',
    explanation: 'You could be a cat or a dog (both are mammals).'
  },
  {
    id: 'ld-24',
    text: 'No politician is a saint. Some saints are poor. Therefore, some poor people are not politicians.',
    options: ['Valid', 'Invalid', 'Likely', 'Uncertain'],
    correctAnswer: 'Valid',
    explanation: 'Those specific saints who are poor cannot be politicians.'
  },
  {
    id: 'ld-25',
    text: 'All triangles have three sides. Shape X has three sides. Therefore, Shape X is a triangle.',
    options: ['Valid', 'Invalid', 'Certain', 'Always'],
    correctAnswer: 'Valid',
    explanation: 'In Euclidean geometry, this is a defining property (definition-based deduction).'
  },
  {
    id: 'ld-26',
    text: 'Some fruits are sour. All lemons are fruits. Therefore, all lemons are sour.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'The premise says "some fruits", not "all fruits". We can\'t conclude all lemons are in that specific "some" group based on these premises alone.'
  },
  {
    id: 'ld-27',
    text: 'Only citizens can vote. Maria is a citizen. Therefore, Maria can vote.',
    options: ['Invalid', 'Valid', 'Likely', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Being a citizen is necessary, but might not be sufficient (e.g., she must be of age).'
  },
  {
    id: 'ld-28',
    text: 'All metals are solid. Mercury is a metal. Therefore, mercury is solid.',
    options: ['Valid but false', 'Invalid', 'True', 'Nonsense'],
    correctAnswer: 'Valid but false',
    explanation: 'The logic is valid, but the first premise is factually false (Mercury is liquid).'
  },
  {
    id: 'ld-29',
    text: 'No A is B. All C is A. Therefore, no C is B.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Standard syllogism form (Celarent).'
  },
  {
    id: 'ld-30',
    text: 'Some teachers are strict. Mr. Khan is a teacher. Therefore, Mr. Khan is strict.',
    options: ['Invalid', 'Valid', 'Likely', 'Strongly Possible'],
    correctAnswer: 'Invalid',
    explanation: 'Mr. Khan might belong to the non-strict teachers group.'
  },
  {
    id: 'ld-31',
    text: 'If you win, you get a prize. You did not win. Therefore, you did not get a prize.',
    options: ['Invalid (Denying the Antecedent)', 'Valid', 'True', 'Fair'],
    correctAnswer: 'Invalid (Denying the Antecedent)',
    explanation: 'You could get a consolation prize.'
  },
  {
    id: 'ld-32',
    text: 'All cats have whiskers. My pet has whiskers. Therefore, my pet is a cat.',
    options: ['Invalid', 'Valid', 'Likely', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'Dogs or rabbits also have whiskers.'
  },
  {
    id: 'ld-33',
    text: 'Some books are novels. All novels are literature. Therefore, some books are literature.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'The novels are both books and literature.'
  },
  {
    id: 'ld-34',
    text: 'Only students can join the club. Peter joined the club. Therefore, Peter is a student.',
    options: ['Valid', 'Invalid', 'Likely', 'Uncertain'],
    correctAnswer: 'Valid',
    explanation: 'Exclusive condition.'
  },
  {
    id: 'ld-35',
    text: 'No honest person is a liar. John is a liar. Therefore, John is not an honest person.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Logical consistency.'
  },
  {
    id: 'ld-36',
    text: 'All students like holidays. Ahmed is a student. Therefore, Ahmed likes holidays.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Standard deduction.'
  },
  {
    id: 'ld-37',
    text: 'Some doctors are surgeons. All surgeons are brave. Therefore, some doctors are brave.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Intersection of sets.'
  },
  {
    id: 'ld-38',
    text: 'If A = B and B = C, then A = C.',
    options: ['Valid', 'Invalid', 'Mathematical', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Transitive property.'
  },
  {
    id: 'ld-39',
    text: 'No snake is a mammal. A cobra is a snake. Therefore, a cobra is not a mammal.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Set exclusion.'
  },
  {
    id: 'ld-40',
    text: 'Some diamonds are expensive. All expensive things are rare. Therefore, some diamonds are rare.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Intersection of sets.'
  },
  {
    id: 'ld-41',
    text: 'If it is cold, I wear a jacket. It is not cold. Therefore, I do not wear a jacket.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Denying the antecedent.'
  },
  {
    id: 'ld-42',
    text: 'All squares are rectangles. Shape Z is not a rectangle. Therefore, Shape Z is not a square.',
    options: ['Valid', 'Invalid', 'True', 'Likely'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens applied to set membership.'
  },
  {
    id: 'ld-43',
    text: 'Some people are tall. Some tall people are fast. Therefore, some people are fast.',
    options: ['Invalid', 'Valid', 'Likely', 'Possible'],
    correctAnswer: 'Invalid',
    explanation: 'No guaranteed connection between "people" and "fast" in these premises.'
  },
  {
    id: 'ld-44',
    text: 'No circle is a triangle. All triangles are polygons. Therefore, no circle is a polygon.',
    options: ['Invalid', 'Valid', 'False', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Circles can be excluded from triangles but still be part of the larger "polygons" group (though in geometry they aren\'t, in pure logic the group membership isn\'t defined).'
  },
  {
    id: 'ld-45',
    text: 'All mammals breathe. All whales are mammals. Therefore, all whales breathe.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Standard syllogism.'
  },
  {
    id: 'ld-46',
    text: 'Some musicians are talented. All talented people work hard. Therefore, some musicians work hard.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Intersection of sets.'
  },
  {
    id: 'ld-47',
    text: 'If A is B, then C is D. C is not D. Therefore, A is not B.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  },
  {
    id: 'ld-48',
    text: 'All cars have wheels. This bike has wheels. Therefore, this bike is a car.',
    options: ['Invalid', 'Valid', 'Nonsense', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-49',
    text: 'No child is an adult. Sarah is a child. Therefore, Sarah is not an adult.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Logical exclusion.'
  },
  {
    id: 'ld-50',
    text: 'Some apples are sweet. All sweet things are high in sugar. Therefore, some apples are high in sugar.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Deductive overlap.'
  },
  {
    id: 'ld-51',
    text: 'All humans are mortal. Mr. X is mortal. Therefore, Mr. X is human.',
    options: ['Invalid', 'Valid', 'Likely', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent (dogs are also mortal).'
  },
  {
    id: 'ld-52',
    text: 'Some teachers are poets. Some poets are rich. Therefore, some teachers are rich.',
    options: ['Invalid', 'Valid', 'Likely', 'Possible'],
    correctAnswer: 'Invalid',
    explanation: 'No middle term linkage.'
  },
  {
    id: 'ld-53',
    text: 'If you skip breakfast, you get hungry. You are hungry. Therefore, you skipped breakfast.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-54',
    text: 'Only high-achievers get scholarships. John got a scholarship. Therefore, John is a high-achiever.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'Necessary condition.'
  },
  {
    id: 'ld-55',
    text: 'No student is a criminal. No criminal is a judge. Therefore, no student is a judge.',
    options: ['Invalid', 'Valid', 'Likely', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'Two negative premises cannot lead to a valid conclusion about the relationship between students and judges.'
  },
  {
    id: 'ld-56',
    text: 'All mangoes are fruits. All fruits are healthy. Therefore, all mangoes are healthy.',
    options: ['Valid', 'Invalid', 'True', 'Likely'],
    correctAnswer: 'Valid',
    explanation: 'Transitive.'
  },
  {
    id: 'ld-57',
    text: 'Some athletes are runners. All runners are fast. Therefore, some athletes are fast.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Deductive overlap.'
  },
  {
    id: 'ld-58',
    text: 'If P then Q. Q then R. P is true. Therefore, R is true.',
    options: ['Valid', 'Invalid', 'Certain', 'Inductive'],
    correctAnswer: 'Valid',
    explanation: 'Hypothetical syllogism.'
  },
  {
    id: 'ld-59',
    text: 'All roses are flowers. This is a flower. Therefore, this is a rose.',
    options: ['Invalid', 'Valid', 'Likely', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-60',
    text: 'No smoker is healthy. Mr. Y is healthy. Therefore, Mr. Y is not a smoker.',
    options: ['Valid', 'Invalid', 'True', 'Likely'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  },
  {
    id: 'ld-61',
    text: 'Some people are scientists. All scientists are thinkers. Therefore, some thinkers are people.',
    options: ['Valid', 'Invalid', 'Certain', 'True'],
    correctAnswer: 'Valid',
    explanation: 'The scientists who are people are also thinkers.'
  },
  {
    id: 'ld-62',
    text: 'Only those who pay can enter. Kim did not pay. Therefore, Kim cannot enter.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'Exclusive condition.'
  },
  {
    id: 'ld-63',
    text: 'All triangles have 180 degrees. Shape B has 180 degrees. Therefore, Shape B is a triangle.',
    options: ['Invalid', 'Valid', 'Likely', 'Geometrically true'],
    correctAnswer: 'Invalid',
    explanation: 'Other shapes (like a straight line) could have 180 degrees in different contexts.'
  },
  {
    id: 'ld-64',
    text: 'Some planets have moons. Jupiter is a planet. Therefore, Jupiter has moons.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Jupiter might not be among the "some" planets mentioned (even though factually it has moons, logically it\'s not proven by these premises).'
  },
  {
    id: 'ld-65',
    text: 'No failure is easy. Exams are not easy. Therefore, exams are failures.',
    options: ['Invalid', 'Valid', 'Nonsense', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-66',
    text: 'If I exercise, I get tired. I did not exercise. Therefore, I am not tired.',
    options: ['Invalid', 'Valid', 'Likely', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'Denying the antecedent.'
  },
  {
    id: 'ld-67',
    text: 'All boys like sports. Ali likes sports. Therefore, Ali is a boy.',
    options: ['Invalid', 'Valid', 'Likely', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-68',
    text: 'Some pens are broken. All broken things are useless. Therefore, some pens are useless.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Overlap.'
  },
  {
    id: 'ld-69',
    text: 'No mammal is a fish. All dolphins are mammals. Therefore, no dolphin is a fish.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Exclusion.'
  },
  {
    id: 'ld-70',
    text: 'Only hard workers succeed. Sam succeeded. Therefore, Sam worked hard.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'Exclusive condition.'
  },
  {
    id: 'ld-71',
    text: 'All dogs bark. My cat does not bark. Therefore, my cat is not a dog.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  },
  {
    id: 'ld-72',
    text: 'Some teachers are kind. No kind person is mean. Therefore, some teachers are not mean.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'The kind teachers cannot be mean.'
  },
  {
    id: 'ld-73',
    text: 'If A then B. A is true. Therefore, B is true.',
    options: ['Valid (Modus Ponens)', 'Invalid', 'Inductive', 'True'],
    correctAnswer: 'Valid (Modus Ponens)',
    explanation: 'Fundamental logical rule.'
  },
  {
    id: 'ld-74',
    text: 'All squares are rectangles. All rectangles are polygons. Therefore, all squares are polygons.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Transitive.'
  },
  {
    id: 'ld-75',
    text: 'No star is a planet. No planet is a moon. Therefore, no star is a moon.',
    options: ['Invalid', 'Valid', 'Likely', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Two negative premises.'
  },
  {
    id: 'ld-76',
    text: 'Some animals are carnivores. Lions are animals. Therefore, lions are carnivores.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Premise says "some animals", not specifically lions.'
  },
  {
    id: 'ld-77',
    text: 'If you drink poison, you die. You died. Therefore, you drank poison.',
    options: ['Invalid', 'Valid', 'Nonsense', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-78',
    text: 'Only a pilot can fly a plane. Sarah is flying a plane. Therefore, Sarah is a pilot.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'Necessary condition.'
  },
  {
    id: 'ld-79',
    text: 'All metals conduct. Wood is not a metal. Therefore, wood does not conduct.',
    options: ['Invalid', 'Valid', 'True', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'Denying the antecedent.'
  },
  {
    id: 'ld-80',
    text: 'No student is lazy. Ahmed is a student. Therefore, Ahmed is not lazy.',
    options: ['Valid', 'Invalid', 'True', 'Likely'],
    correctAnswer: 'Valid',
    explanation: 'Exclusion.'
  },
  {
    id: 'ld-81',
    text: 'Some people are artists. Some artists are rich. Therefore, some people are rich.',
    options: ['Invalid', 'Valid', 'Likely', 'Possible'],
    correctAnswer: 'Invalid',
    explanation: 'No linkage.'
  },
  {
    id: 'ld-82',
    text: 'If it is a square, it is a rectangle. It is not a square. Therefore, it is not a rectangle.',
    options: ['Invalid', 'Valid', 'False', 'True'],
    correctAnswer: 'Invalid',
    explanation: 'Denying the antecedent.'
  },
  {
    id: 'ld-83',
    text: 'All birds fly. Penguin is a bird. Therefore, penguin flies.',
    options: ['Valid but false', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid but false',
    explanation: 'Valid logic, false premise (penguins don\'t fly).'
  },
  {
    id: 'ld-84',
    text: 'No person is a robot. X is a robot. Therefore, X is not a person.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Exclusion.'
  },
  {
    id: 'ld-85',
    text: 'Some clouds are white. No white thing is dark. Therefore, some clouds are not dark.',
    options: ['Valid', 'Invalid', 'Certain', 'Likely'],
    correctAnswer: 'Valid',
    explanation: 'The white clouds cannot be dark.'
  },
  {
    id: 'ld-86',
    text: 'If A then B. B is true. Therefore, A is true.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-87',
    text: 'All mammals are warm-blooded. All birds are warm-blooded. Therefore, all birds are mammals.',
    options: ['Invalid', 'Valid', 'False', 'Certain'],
    correctAnswer: 'Invalid',
    explanation: 'Affirming the consequent.'
  },
  {
    id: 'ld-88',
    text: 'Some students are athletes. All athletes are fit. Therefore, some students are fit.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Overlap.'
  },
  {
    id: 'ld-89',
    text: 'No snake has legs. This creature has legs. Therefore, this creature is not a snake.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  },
  {
    id: 'ld-90',
    text: 'Only expensive things are luxury. This watch is luxury. Therefore, it is expensive.',
    options: ['Valid', 'Invalid', 'Likely', 'Certain'],
    correctAnswer: 'Valid',
    explanation: 'Exclusive condition.'
  },
  {
    id: 'ld-91',
    text: 'All philosophers are thinkers. All thinkers are quiet. Therefore, all philosophers are quiet.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Transitive.'
  },
  {
    id: 'ld-92',
    text: 'Some cities are polluted. Karachi is a city. Therefore, Karachi is polluted.',
    options: ['Invalid', 'Valid', 'True', 'Likely'],
    correctAnswer: 'Invalid',
    explanation: 'Deduction from "some" doesn\'t apply to a specific member unless stated.'
  },
  {
    id: 'ld-93',
    text: 'If P then Q. Not P. Therefore, not Q.',
    options: ['Invalid', 'Valid', 'True', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'Denying the antecedent.'
  },
  {
    id: 'ld-94',
    text: 'No fish can walk. A goldfish is a fish. Therefore, a goldfish cannot walk.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Exclusion.'
  },
  {
    id: 'ld-95',
    text: 'All geniuses are eccentric. I am not eccentric. Therefore, I am not a genius.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  },
  {
    id: 'ld-96',
    text: 'Some books are textbooks. All textbooks are educational. Therefore, some educational things are books.',
    options: ['Valid', 'Invalid', 'Likely', 'True'],
    correctAnswer: 'Valid',
    explanation: 'Set overlap.'
  },
  {
    id: 'ld-97',
    text: 'If A is true, B is true. A is true. Therefore, B is true.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Modus Ponens.'
  },
  {
    id: 'ld-98',
    text: 'All men are animals. All animals are mortal. Therefore, all men are mortal.',
    options: ['Valid', 'Invalid', 'True', 'False'],
    correctAnswer: 'Valid',
    explanation: 'Transitive.'
  },
  {
    id: 'ld-99',
    text: 'No cat is a dog. No dog is a horse. Therefore, no cat is a horse.',
    options: ['Invalid', 'Valid', 'True', 'False'],
    correctAnswer: 'Invalid',
    explanation: 'Two negative premises.'
  },
  {
    id: 'ld-100',
    text: 'Final Deduction Check: If P then Q. Not Q. Therefore, Not P.',
    options: ['Valid', 'Invalid', 'Certain', 'Inductive'],
    correctAnswer: 'Valid',
    explanation: 'Modus Tollens.'
  }
];
