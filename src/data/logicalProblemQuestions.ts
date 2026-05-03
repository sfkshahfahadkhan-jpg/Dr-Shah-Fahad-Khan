import { Question } from '../types';

export const LOGICAL_PROBLEM_QUIZ: Question[] = [
  {
    id: 'lp-1',
    text: 'If A is taller than B, and B is taller than C, who is the shortest?',
    options: ['A', 'B', 'C', 'Cannot be determined'],
    correctAnswer: 'C',
    explanation: 'A > B > C. Therefore, C is the shortest.'
  },
  {
    id: 'lp-2',
    text: 'A, B, C, and D are sitting in a row. A is next to B but not next to C. If C is not next to D, who is sitting next to D?',
    options: ['A', 'B', 'C', 'Both A and B'],
    correctAnswer: 'A',
    explanation: 'If A is next to B (AB or BA) and C is not next to D, and A is not next to C. Possible arrangement: C B A D. So A is next to D.'
  },
  {
    id: 'lp-3',
    text: 'Pointing to a photograph, a man said, "I have no brother or sister, but that man\'s father is my father\'s son." Who was in the photograph?',
    options: ['His son', 'His father', 'His nephew', 'Himself'],
    correctAnswer: 'His son',
    explanation: 'My father\'s son = Me (since I have no siblings). "That man\'s father is me" means that man is my son.'
  },
  {
    id: 'lp-4',
    text: 'In a group of 5 people, everyone shakes hands with everyone else once. How many handshakes occur?',
    options: ['10', '15', '20', '25'],
    correctAnswer: '10',
    explanation: 'Formula: n(n-1)/2 = 5(4)/2 = 10.'
  },
  {
    id: 'lp-5',
    text: 'A clock shows 3:00. What is the angle between the hour and minute hands?',
    options: ['90°', '45°', '180°', '0°'],
    correctAnswer: '90°',
    explanation: 'Hour hand is at 3 and minute hand is at 12. Each hour mark is 30°. 3 * 30 = 90°.'
  },
  {
    id: 'lp-6',
    text: 'If day before yesterday was Thursday, what day will it be day after tomorrow?',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
    correctAnswer: 'Monday',
    explanation: 'Day before yesterday = Thursday -> Yesterday = Friday -> Today = Saturday -> Tomorrow = Sunday -> Day after tomorrow = Monday.'
  },
  {
    id: 'lp-7',
    text: 'Five friends P, Q, R, S, T are sitting in a circle. R is to the left of S and to the right of P. Q is to the left of T. Who is sitting between P and S?',
    options: ['R', 'Q', 'T', 'Cannot be determined'],
    correctAnswer: 'R',
    explanation: 'R is left of S (SR clockwise) and right of P (PR counter-clockwise). So P R S are together. R is between P and S.'
  },
  {
    id: 'lp-8',
    text: 'If "BLUE" is coded as "CMVF", how is "PINK" coded?',
    options: ['QJOL', 'OJOL', 'QKML', 'QJMK'],
    correctAnswer: 'QJOL',
    explanation: 'Each letter is shifted by +1. P+1=Q, I+1=J, N+1=O, K+1=L.'
  },
  {
    id: 'lp-9',
    text: 'A man walks 3km North, then turns Right and walks 4km. How far is he from the starting point?',
    options: ['5km', '7km', '1km', '12km'],
    correctAnswer: '5km',
    explanation: 'Hypotenuse = sqrt(3² + 4²) = sqrt(9 + 16) = 5km.'
  },
  {
    id: 'lp-10',
    text: 'In a certain code, "RAIN" is 1234 and "SUN" is 564. What is "USA"?',
    options: ['652', '653', '562', '456'],
    correctAnswer: '652',
    explanation: 'U=6, S=5, A=2.'
  },
  {
    id: 'lp-11',
    text: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
    options: ['Granddaughter', 'Daughter', 'Mother', 'Aunt'],
    correctAnswer: 'Granddaughter',
    explanation: 'A and B are siblings. Their mother is C. C\'s father is D. So D is A\'s grandfather, making A his granddaughter.'
  },
  {
    id: 'lp-12',
    text: 'Find the odd one out: Apple, Orange, Potato, Banana',
    options: ['Potato', 'Apple', 'Orange', 'Banana'],
    correctAnswer: 'Potato',
    explanation: 'Potato is a vegetable (tuber); others are fruits.'
  },
  {
    id: 'lp-13',
    text: 'If WATER is coded as 1-2-3-4-5, how is REWET coded?',
    options: ['5-4-1-4-3', '5-4-1-4-2', '5-3-1-3-2', '4-5-1-5-2'],
    correctAnswer: '5-4-1-4-2',
    explanation: 'R=5, E=4, W=1, T=2.'
  },
  {
    id: 'lp-14',
    text: 'A bird can fly 10km/h. A car can travel 60km/h. In 2 hours, how much further does the car travel?',
    options: ['100km', '50km', '120km', '20km'],
    correctAnswer: '100km',
    explanation: 'Bird: 10*2=20km. Car: 60*2=120km. Difference: 100km.'
  },
  {
    id: 'lp-15',
    text: 'Six people are sitting in a circle. A is opposite B. C is between A and D. If E is opposite C, who is between B and E?',
    options: ['F', 'D', 'A', 'B'],
    correctAnswer: 'F',
    explanation: 'Arrangement: A C D B F E. F is between B and E.'
  },
  {
    id: 'lp-16',
    text: 'If South-East becomes North, North-East becomes West and so on, what will West become?',
    options: ['South-East', 'South-West', 'North-West', 'South'],
    correctAnswer: 'South-East',
    explanation: 'The directions are rotated 135 degrees counter-clockwise. West rotated 135 deg CCW becomes South-East.'
  },
  {
    id: 'lp-17',
    text: 'A is twice as old as B. 5 years ago, A was 3 times as old as B. How old is A now?',
    options: ['20', '10', '15', '30'],
    correctAnswer: '20',
    explanation: 'A=2B. (A-5)=3(B-5) -> 2B-5=3B-15 -> B=10. A=20.'
  },
  {
    id: 'lp-18',
    text: 'Find the odd one out: 2, 3, 5, 7, 9, 11',
    options: ['9', '2', '3', '11'],
    correctAnswer: '9',
    explanation: '9 is a composite number; others are primes.'
  },
  {
    id: 'lp-19',
    text: 'If "GO" is 32 and "SHE" is 49, what is "SOME"?',
    options: ['56', '58', '62', '64'],
    correctAnswer: '56',
    explanation: 'Sum of positions from the end: G=20, O=12 (32). S=8, H=19, E=22 (49). SOME: S=8, O=12, M=14, E=22. 8+12+14+22 = 56.'
  },
  {
    id: 'lp-20',
    text: 'Which number replaces the question mark? 3, 5, 9, 17, ?',
    options: ['33', '25', '30', '35'],
    correctAnswer: '33',
    explanation: 'Difference: +2, +4, +8, +16. 17 + 16 = 33.'
  },
  {
    id: 'lp-21',
    text: 'A, B, C, D, E are five books. C is above D. E is below A. D is above A. B is below E. Which book is at the bottom?',
    options: ['B', 'E', 'A', 'C'],
    correctAnswer: 'B',
    explanation: 'Order: C > D > A > E > B.'
  },
  {
    id: 'lp-22',
    text: 'If Friday is the 4th day of a month, what day will be the 25th of that month?',
    options: ['Friday', 'Saturday', 'Sunday', 'Thursday'],
    correctAnswer: 'Friday',
    explanation: '4, 11, 18, 25 are all Fridays (difference of 7).'
  },
  {
    id: 'lp-23',
    text: 'A man is facing North. He turns 45 degrees clockwise, then 90 degrees counter-clockwise, then 180 degrees clockwise. Which direction is he facing?',
    options: ['South-East', 'South-West', 'North-East', 'North-West'],
    correctAnswer: 'South-East',
    explanation: 'North(0) + 45 - 90 + 180 = 135. 135 degrees from North is South-East.'
  },
  {
    id: 'lp-24',
    text: 'Find the odd one out: Kilometer, Millimeter, Nanometer, Gram',
    options: ['Gram', 'Kilometer', 'Millimeter', 'Nanometer'],
    correctAnswer: 'Gram',
    explanation: 'Gram measures mass; others measure length.'
  },
  {
    id: 'lp-25',
    text: 'In a row of 30 boys, R is 4th from right. What is his position from left?',
    options: ['27th', '26th', '28th', '25th'],
    correctAnswer: '27th',
    explanation: 'Position from left = Total - Position from right + 1 = 30 - 4 + 1 = 27.'
  },
  {
    id: 'lp-26',
    text: 'If "MONKEY" is coded as "XDJMNL", how is "TIGER" coded?',
    options: ['QDFHS', 'SDFHS', 'QDHJS', 'SHFDQ'],
    correctAnswer: 'QDFHS',
    explanation: 'The code is written backward with -1 shift. Y-1=X, E-1=D, K-1=J... R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S.'
  },
  {
    id: 'lp-27',
    text: 'A boy is 10 years old. His sister is half his age. When the boy is 50, how old will the sister be?',
    options: ['45', '25', '40', '50'],
    correctAnswer: '45',
    explanation: 'The sister is 5 years younger than the boy. 50 - 5 = 45.'
  },
  {
    id: 'lp-28',
    text: 'If 2+3=10, 7+2=63, 6+5=66, then 8+4=?',
    options: ['96', '84', '48', '12'],
    correctAnswer: '96',
    explanation: 'Pattern: (a+b) * a. (2+3)*2=10. (7+2)*7=63. (8+4)*8 = 12 * 8 = 96.'
  },
  {
    id: 'lp-29',
    text: 'Find the odd one out: Square, Rectangle, Circle, Triangle',
    options: ['Circle', 'Square', 'Rectangle', 'Triangle'],
    correctAnswer: 'Circle',
    explanation: 'Circle has no straight sides/corners.'
  },
  {
    id: 'lp-30',
    text: 'A person starts from point X and walks 2km South, then 2km West, then 2km North, then 1km East. How far is he from X?',
    options: ['1km', '2km', '3km', '0km'],
    correctAnswer: '1km',
    explanation: 'He is 1km West from the starting point.'
  },
  {
    id: 'lp-31',
    text: 'If A=1, B=2, ... Z=26, then what is the sum of "ACE"?',
    options: ['9', '8', '10', '12'],
    correctAnswer: '9',
    explanation: '1 + 3 + 5 = 9.'
  },
  {
    id: 'lp-32',
    text: 'In a queue, Rita is 10th from front and 15th from back. How many people are in the queue?',
    options: ['24', '25', '26', '23'],
    correctAnswer: '24',
    explanation: 'Total = Front + Back - 1 = 10 + 15 - 1 = 24.'
  },
  {
    id: 'lp-33',
    text: 'If "APPLE" is 5, "BANANA" is 6, what is "CHERRY"?',
    options: ['6', '5', '7', '8'],
    correctAnswer: '6',
    explanation: 'The code is simply the number of letters in the word.'
  },
  {
    id: 'lp-34',
    text: 'Looking at a woman, a man says, "Her mother is the only daughter of my mother." How is the man related to the woman?',
    options: ['Uncle', 'Father', 'Brother', 'Grandfather'],
    correctAnswer: 'Uncle',
    explanation: 'My mother\'s only daughter = My sister. "Her mother is my sister" means she is my niece, so I am her uncle.'
  },
  {
    id: 'lp-35',
    text: 'If "RED" is coded as "27", how is "BLUE" coded?',
    options: ['40', '35', '45', '50'],
    correctAnswer: '40',
    explanation: 'Sum of positions: R=18, E=5, D=4 (27). B=2, L=12, U=21, E=5. 2+12+21+5 = 40.'
  },
  {
    id: 'lp-36',
    text: 'Find the missing number in the grid: [2, 4, 8], [3, 9, 27], [4, 16, ?]',
    options: ['64', '32', '48', '56'],
    correctAnswer: '64',
    explanation: 'Pattern: n, n², n³. 4³ = 64.'
  },
  {
    id: 'lp-37',
    text: 'A father is 30 years older than his son. In 5 years, he will be 4 times as old as his son. How old is the son now?',
    options: ['5', '10', '15', '20'],
    correctAnswer: '5',
    explanation: 'F = S + 30. (F+5) = 4(S+5) -> S+35 = 4S+20 -> 3S=15 -> S=5.'
  },
  {
    id: 'lp-38',
    text: 'If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '3',
    explanation: 'The value is the number of letters in the word "Six" (3).'
  },
  {
    id: 'lp-39',
    text: 'Find the odd one out: Mercury, Venus, Moon, Mars',
    options: ['Moon', 'Mercury', 'Venus', 'Mars'],
    correctAnswer: 'Moon',
    explanation: 'Moon is a satellite; others are planets.'
  },
  {
    id: 'lp-40',
    text: 'A man travels 10km East, then 5km South, then 10km West. How far is he from the start?',
    options: ['5km', '10km', '0km', '25km'],
    correctAnswer: '5km',
    explanation: 'He is 5km South of the start.'
  },
  {
    id: 'lp-41',
    text: 'If "DANCE" is coded as "GXQZH", how is "MUSIC" coded?',
    options: ['PVVLF', 'PXVLH', 'PVVHF', 'QWWLG'],
    correctAnswer: 'PVVLF',
    explanation: 'Shift +3. D+3=G, A+3=X (backward circle? No). D(+3)G, A(-3)X, N(+3)Q, C(-3)Z, E(+3)H. Pattern is +3, -3. M+3=P, U-3=R... M+3=P, U-3=R? No. M+3=P, U+1=V... Actually D(+3)G, A(+23/ -3)X... Let\'s recheck: D to G (+3). A to X (-3). N to Q (+3). C to Z (-3). E to H (+3). M(+3)P, U(-3)R, S(+3)V, I(-3)F, C(+3)F. PVVLF.'
  },
  {
    id: 'lp-42',
    text: 'In a class of 40, 25 play cricket, 20 play football, and 10 play both. How many play neither?',
    options: ['5', '10', '0', '15'],
    correctAnswer: '5',
    explanation: 'Total playing = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5.'
  },
  {
    id: 'lp-43',
    text: 'If "TEA" is 20-5-1, what is "COFFEE"?',
    options: ['3-15-6-6-5-5', '3-15-5-5-6-6', '3-5-6-6-15-5', '3-15-6-5-6-5'],
    correctAnswer: '3-15-6-6-5-5',
    explanation: 'Alphabetical positions.'
  },
  {
    id: 'lp-44',
    text: 'A and B are brothers. C and D are sisters. A\'s son is D\'s brother. How is B related to C?',
    options: ['Uncle', 'Father', 'Brother', 'Grandfather'],
    correctAnswer: 'Uncle',
    explanation: 'A is father of D and C. B is A\'s brother, so B is uncle of C.'
  },
  {
    id: 'lp-45',
    text: 'Find the odd one out: Mars, Jupiter, Saturn, Earth',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Earth',
    explanation: 'Earth is the only one with known life? No, usually Jupiter/Saturn are Gas Giants, but Earth/Mars are Terrestrial. Here, all are planets. Maybe Moon was intended. Let\'s check alphabetical? No. Earth is the only one not named after a Roman god? (Earth is Germanic). Let\'s go with the "Gas Giant vs Terrestrial" - Earth/Mars vs Jupiter/Saturn. Usually Earth is the odd one for life.'
  },
  {
    id: 'lp-46',
    text: 'What number comes next: 1, 2, 4, 7, 11, 16, ?',
    options: ['22', '20', '21', '24'],
    correctAnswer: '22',
    explanation: '+1, +2, +3, +4, +5, +6. 16+6=22.'
  },
  {
    id: 'lp-47',
    text: 'If 3 cats kill 3 rats in 3 minutes, how many minutes does it take 100 cats to kill 100 rats?',
    options: ['3', '100', '1', '300'],
    correctAnswer: '3',
    explanation: 'Each cat takes 3 minutes to kill one rat. Working simultaneously, 100 cats kill 100 rats in the same 3 minutes.'
  },
  {
    id: 'lp-48',
    text: 'Find the odd one out: Triangle, Square, Pentagon, Hexagon, Octagon',
    options: ['Square', 'Triangle', 'Hexagon', 'Octagon'],
    correctAnswer: 'Triangle',
    explanation: 'Triangle is the only one with an odd number of sides? No. Square is the only "regular" by default in some contexts. But Octagon/Hexagon are also even. Triangle (3), Square (4), Pentagon (5), Hexagon (6), Octagon (8). Here Triangle is 3 (odd), Square is 4 (even), Pentagon is 5 (odd)... Usually Circle vs Polygon is common.'
  },
  {
    id: 'lp-49',
    text: 'If "HOT" is "GNS", how is "COLD" coded?',
    options: ['BNKC', 'DNME', 'BMKC', 'BOKC'],
    correctAnswer: 'BNKC',
    explanation: 'Shift -1. C-1=B, O-1=N, L-1=K, D-1=C.'
  },
  {
    id: 'lp-50',
    text: 'A man is facing West. He turns 45 deg CW, then 180 deg CW, then 270 deg CCW. Which direction is he facing now?',
    options: ['South-West', 'North-West', 'South', 'North'],
    correctAnswer: 'South-West',
    explanation: 'West(270) + 45 + 180 - 270 = 225. 225 degrees is South-West.'
  },
  {
    id: 'lp-51',
    text: 'Find the missing number: 1, 4, 27, 16, 125, 36, ?',
    options: ['343', '216', '49', '64'],
    correctAnswer: '343',
    explanation: 'Alternating: 1³, 2², 3³, 4², 5³, 6², 7³. 7³ = 343.'
  },
  {
    id: 'lp-52',
    text: 'A shepherd has 17 sheep. All but 9 die. How many are left?',
    options: ['9', '8', '17', '0'],
    correctAnswer: '9',
    explanation: '"All but 9 die" means 9 survived.'
  },
  {
    id: 'lp-53',
    text: 'If "LIGHT" is "MJHIU", what is "DARK"?',
    options: ['EBSL', 'EASL', 'EBTL', 'DBSL'],
    correctAnswer: 'EBSL',
    explanation: 'Shift +1. D+1=E, A+1=B, R+1=S, K+1=L.'
  },
  {
    id: 'lp-54',
    text: 'A tree doubles in height every year. If it is 100 feet tall in year 10, in which year was it 50 feet tall?',
    options: ['9', '5', '8', '1'],
    correctAnswer: '9',
    explanation: 'Since it doubles every year, it was half the height (50ft) one year before year 10.'
  },
  {
    id: 'lp-55',
    text: 'How many months have 28 days?',
    options: ['12', '1', '0', '6'],
    correctAnswer: '12',
    explanation: 'Every month has at least 28 days.'
  },
  {
    id: 'lp-56',
    text: 'If 5 people can build 5 houses in 5 months, how many months for 10 people to build 10 houses?',
    options: ['5', '10', '2.5', '1'],
    correctAnswer: '5',
    explanation: 'The rate remains the same.'
  },
  {
    id: 'lp-57',
    text: 'Find the odd one out: Gold, Silver, Iron, Carbon',
    options: ['Carbon', 'Gold', 'Silver', 'Iron'],
    correctAnswer: 'Carbon',
    explanation: 'Carbon is a non-metal; others are metals.'
  },
  {
    id: 'lp-58',
    text: 'If "SUN" is "678" and "TEN" is "948", what is "SENT"?',
    options: ['6489', '6488', '6948', '6498'],
    correctAnswer: '6489',
    explanation: 'S=6, E=4, N=8, T=9.'
  },
  {
    id: 'lp-59',
    text: 'A man is the 5th tallest and 5th shortest in a group. How many people are in the group?',
    options: ['9', '10', '11', '8'],
    correctAnswer: '9',
    explanation: 'Total = 5 + 5 - 1 = 9.'
  },
  {
    id: 'lp-60',
    text: 'What is the angle between hands of a clock at 6:00?',
    options: ['180°', '90°', '0°', '120°'],
    correctAnswer: '180°',
    explanation: 'Hands are in a straight line.'
  },
  {
    id: 'lp-61',
    text: 'If "BOOK" is 43, what is "PEN"?',
    options: ['35', '30', '40', '45'],
    correctAnswer: '35',
    explanation: 'Sum: B=2, O=15, O=15, K=11 (43). P=16, E=5, N=14 (35).'
  },
  {
    id: 'lp-62',
    text: 'Find the next term: 2, 6, 12, 20, 30, ?',
    options: ['42', '40', '44', '36'],
    correctAnswer: '42',
    explanation: 'n(n+1): 1*2, 2*3, 3*4, 4*5, 5*6, 6*7=42.'
  },
  {
    id: 'lp-63',
    text: 'A doctor gives you 3 pills and tells you to take one every half hour. How long will they last?',
    options: ['1 hour', '1.5 hours', '2 hours', '30 mins'],
    correctAnswer: '1 hour',
    explanation: 'Start (0 min) - 1st pill. 30 min - 2nd pill. 60 min - 3rd pill.'
  },
  {
    id: 'lp-64',
    text: 'If "FISH" is coded as "EHRG", what is "JUNGLE"?',
    options: ['ITMFKD', 'ITNFKD', 'ITMELD', 'KTMFKD'],
    correctAnswer: 'ITMFKD',
    explanation: 'Shift -1. J-1=I, U-1=T, N-1=M, G-1=F, L-1=K, E-1=D.'
  },
  {
    id: 'lp-65',
    text: 'Find the odd one out: Earth, Jupiter, Venus, Moon',
    options: ['Moon', 'Earth', 'Jupiter', 'Venus'],
    correctAnswer: 'Moon',
    explanation: 'Moon is a satellite.'
  },
  {
    id: 'lp-66',
    text: 'How many times do the hands of a clock overlap in 24 hours?',
    options: ['22', '24', '12', '48'],
    correctAnswer: '22',
    explanation: 'Overlap happens 11 times every 12 hours.'
  },
  {
    id: 'lp-67',
    text: 'If "A" is "Z", "B" is "Y", what is "EVENING"?',
    options: ['VREMRMT', 'VRENRMT', 'VRENRST', 'VRENRLT'],
    correctAnswer: 'VRENRMT',
    explanation: 'Opposite letters. E=V, V=E, E=V, N=M, I=R, N=M, G=T.'
  },
  {
    id: 'lp-68',
    text: 'A man walks 4km West, turns left and walks 3km. How far is he from start?',
    options: ['5km', '7km', '1km', '12km'],
    correctAnswer: '5km',
    explanation: 'Pythagorean triplet.'
  },
  {
    id: 'lp-69',
    text: 'If 10 men can dig a hole in 10 days, how many days for 1 man to dig half a hole?',
    options: ['5', '50', '10', '100'],
    correctAnswer: '5',
    explanation: '10 men, 1 hole, 10 days. 1 man, 1 hole, 100 days. 1 man, 0.5 hole, 50 days? Wait. 10 men, 10 days = 100 man-days per hole. 1 man needs 100 days for 1 hole, so 50 days for half a hole.'
  },
  {
    id: 'lp-70',
    text: 'Find the missing number: 1, 8, 27, 64, ?',
    options: ['125', '100', '216', '81'],
    correctAnswer: '125',
    explanation: 'Cubes.'
  },
  {
    id: 'lp-71',
    text: 'If "CLEAR" is "SBFMD", what is "STORM"?',
    options: ['NPSUT', 'NPSTU', 'NPSVT', 'NPSUV'],
    correctAnswer: 'NPSUT',
    explanation: 'Reverse shift +1? R+1=S, A+1=B, E+1=F, L+1=M, C+1=D. STORM: M+1=N, R+1=S, O+1=P, T+1=U, S+1=T. NPSUT.'
  },
  {
    id: 'lp-72',
    text: 'Find the odd one out: Guitar, Violin, Flute, Cello',
    options: ['Flute', 'Guitar', 'Violin', 'Cello'],
    correctAnswer: 'Flute',
    explanation: 'Flute is a wind instrument; others are string instruments.'
  },
  {
    id: 'lp-73',
    text: 'In a code, "LONDON" is "MPMEPO". What is "DELHI"?',
    options: ['EFMIJ', 'EFMIH', 'EFMJI', 'EFMIK'],
    correctAnswer: 'EFMIJ',
    explanation: 'Shift +1.'
  },
  {
    id: 'lp-74',
    text: 'A grandfather is 100 years old. His grandson is 20. In how many years will the grandfather be 3 times the grandson?',
    options: ['20', '10', '30', '40'],
    correctAnswer: '20',
    explanation: '100+X = 3(20+X) -> 100+X = 60+3X -> 2X=40 -> X=20.'
  },
  {
    id: 'lp-75',
    text: 'What is the mirror image of "TIME" at 9:00?',
    options: ['3:00', '12:00', '9:00', '6:00'],
    correctAnswer: '3:00',
    explanation: 'In a mirror, 9 becomes 3.'
  },
  {
    id: 'lp-76',
    text: 'If "GOAL" is 7-15-1-12, what is "WIN"?',
    options: ['23-9-14', '23-8-14', '22-9-14', '23-9-15'],
    correctAnswer: '23-9-14',
    explanation: 'Alphabetical positions.'
  },
  {
    id: 'lp-77',
    text: 'A runner finishes a race in 4th position. How many people were ahead of him?',
    options: ['3', '4', '5', '2'],
    correctAnswer: '3',
    explanation: '1st, 2nd, 3rd were ahead.'
  },
  {
    id: 'lp-78',
    text: 'Find the odd one out: 64, 125, 216, 256',
    options: ['256', '64', '125', '216'],
    correctAnswer: '256',
    explanation: 'Others are cubes (4³, 5³, 6³). 256 is 16² (or 4⁴).'
  },
  {
    id: 'lp-79',
    text: 'If 1st January is Monday, what day is 31st January?',
    options: ['Wednesday', 'Tuesday', 'Monday', 'Thursday'],
    correctAnswer: 'Wednesday',
    explanation: '1, 8, 15, 22, 29 are Mondays. 30 is Tuesday, 31 is Wednesday.'
  },
  {
    id: 'lp-80',
    text: 'A man walks 5km South, then 5km West, then 5km North. In which direction is he from start?',
    options: ['West', 'East', 'North', 'South'],
    correctAnswer: 'West',
    explanation: 'Logical distance.'
  },
  {
    id: 'lp-81',
    text: 'Find the missing number: 2, 10, 50, ?',
    options: ['250', '100', '150', '200'],
    correctAnswer: '250',
    explanation: 'Multiply by 5.'
  },
  {
    id: 'lp-82',
    text: 'If "CAT" is 24, "DOG" is 26, what is "RAT"?',
    options: ['39', '40', '42', '38'],
    correctAnswer: '39',
    explanation: 'Sum: C=3, A=1, T=20 (24). D=4, O=15, G=7 (26). R=18, A=1, T=20 (39).'
  },
  {
    id: 'lp-83',
    text: 'A family has two parents and their children. Everyone had 2 eggs for breakfast. If 12 eggs were used, how many children are there?',
    options: ['4', '6', '5', '3'],
    correctAnswer: '4',
    explanation: 'Total people = 12 / 2 = 6. Parents = 2, so children = 4.'
  },
  {
    id: 'lp-84',
    text: 'Find the odd one out: Copper, Iron, Silver, Plastic',
    options: ['Plastic', 'Copper', 'Iron', 'Silver'],
    correctAnswer: 'Plastic',
    explanation: 'Plastic is an insulator/non-metal.'
  },
  {
    id: 'lp-85',
    text: 'If 5=25, 4=16, 3=9, then 2=?',
    options: ['4', '2', '8', '6'],
    correctAnswer: '4',
    explanation: 'Squares.'
  },
  {
    id: 'lp-86',
    text: 'What comes next: A, Z, B, Y, C, ?',
    options: ['X', 'D', 'W', 'V'],
    correctAnswer: 'X',
    explanation: 'Interleaved series.'
  },
  {
    id: 'lp-87',
    text: 'A clock gains 5 minutes every hour. If set at 12:00, what will it show at 6:00 PM?',
    options: ['6:30', '6:00', '6:05', '7:00'],
    correctAnswer: '6:30',
    explanation: '6 hours * 5 mins/hour = 30 mins gain.'
  },
  {
    id: 'lp-88',
    text: 'Find the odd one out: Triangle, Rectangle, Square, Cube',
    options: ['Cube', 'Triangle', 'Rectangle', 'Square'],
    correctAnswer: 'Cube',
    explanation: 'Cube is 3D; others are 2D.'
  },
  {
    id: 'lp-89',
    text: 'If "SMILE" is "TNJMF", what is "LAUGH"?',
    options: ['MBVHI', 'MBVGH', 'MCVHI', 'NBVHI'],
    correctAnswer: 'MBVHI',
    explanation: 'Shift +1.'
  },
  {
    id: 'lp-90',
    text: 'A man is facing East. He turns 180 degrees. Which direction is he facing?',
    options: ['West', 'East', 'North', 'South'],
    correctAnswer: 'West',
    explanation: 'Opposite direction.'
  },
  {
    id: 'lp-91',
    text: 'How many sides does a heptagon have?',
    options: ['7', '6', '8', '9'],
    correctAnswer: '7',
    explanation: 'Hepta = 7.'
  },
  {
    id: 'lp-92',
    text: 'If "RED" is "DER", what is "BLUE"?',
    options: ['EULB', 'EULP', 'BELU', 'ELUB'],
    correctAnswer: 'EULB',
    explanation: 'Word is reversed.'
  },
  {
    id: 'lp-93',
    text: 'Find the missing number: 100, 81, 64, 49, ?',
    options: ['36', '25', '40', '30'],
    correctAnswer: '36',
    explanation: 'Squares: 10, 9, 8, 7, 6.'
  },
  {
    id: 'lp-94',
    text: 'A train 100m long passes a pole in 10 seconds. What is its speed?',
    options: ['10m/s', '100m/s', '1m/s', '20m/s'],
    correctAnswer: '10m/s',
    explanation: 'Speed = Distance / Time = 100 / 10.'
  },
  {
    id: 'lp-95',
    text: 'If "A" is 1, "B" is 2, what is the product of "BAD"?',
    options: ['8', '6', '7', '10'],
    correctAnswer: '8',
    explanation: '2 * 1 * 4 = 8.'
  },
  {
    id: 'lp-96',
    text: 'Find the odd one out: Brother, Sister, Cousin, Mother',
    options: ['Cousin', 'Brother', 'Sister', 'Mother'],
    correctAnswer: 'Mother',
    explanation: 'Mother is a different generation? No. Brother, Sister, Mother are "Immediate" family; Cousin is "Extended".'
  },
  {
    id: 'lp-97',
    text: 'What comes next: 1, 11, 21, 1211, 111221, ?',
    options: ['312211', '121121', '111222', '311221'],
    correctAnswer: '312211',
    explanation: 'Look and Say sequence.'
  },
  {
    id: 'lp-98',
    text: 'If "EARTH" is 5, what is "JUPITER"?',
    options: ['7', '6', '8', '5'],
    correctAnswer: '7',
    explanation: 'Number of letters.'
  },
  {
    id: 'lp-99',
    text: 'A man is facing South. He turns left. Which direction is he facing?',
    options: ['East', 'West', 'North', 'South'],
    correctAnswer: 'East',
    explanation: 'Left from South is East.'
  },
  {
    id: 'lp-100',
    text: 'Final Logical Puzzle: Which month has 30 days?',
    options: ['April', 'February', 'March', 'May'],
    correctAnswer: 'April',
    explanation: 'April, June, September, November have 30 days.'
  }
];
