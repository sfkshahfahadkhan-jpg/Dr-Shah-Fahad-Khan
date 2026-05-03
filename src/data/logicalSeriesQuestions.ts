import { Question } from '../types';

export const LOGICAL_SERIES_QUIZ: Question[] = [
  {
    id: 'ls-1',
    text: 'What comes next in the series: 2, 4, 8, 16, 32, ...?',
    options: ['48', '64', '56', '72'],
    correctAnswer: '64',
    explanation: 'Each number is multiplied by 2. 32 * 2 = 64.'
  },
  {
    id: 'ls-2',
    text: 'What is the missing number: 1, 4, 9, 16, ?, 36',
    options: ['20', '25', '24', '30'],
    correctAnswer: '25',
    explanation: 'The series represents squares of natural numbers: 1², 2², 3², 4², 5², 6². 5² = 25.'
  },
  {
    id: 'ls-3',
    text: 'Complete the series: 10, 15, 21, 28, 36, ...?',
    options: ['44', '45', '46', '48'],
    correctAnswer: '45',
    explanation: 'The difference increases by 1 each time: +5, +6, +7, +8, +9. 36 + 9 = 45.'
  },
  {
    id: 'ls-4',
    text: 'What comes next in the letter series: A, C, E, G, ...?',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 'I',
    explanation: 'Skip one letter each time: A (B) C (D) E (F) G (H) I.'
  },
  {
    id: 'ls-5',
    text: 'Find the missing term: Z, X, V, T, ?, P',
    options: ['S', 'R', 'Q', 'U'],
    correctAnswer: 'R',
    explanation: 'The series moves backward skipping one letter: Z (Y) X (W) V (U) T (S) R (Q) P.'
  },
  {
    id: 'ls-6',
    text: 'What is the next number: 5, 11, 23, 47, ...?',
    options: ['94', '95', '96', '97'],
    correctAnswer: '95',
    explanation: 'Pattern: (previous number * 2) + 1. (47 * 2) + 1 = 94 + 1 = 95.'
  },
  {
    id: 'ls-7',
    text: 'Complete the series: 2, 3, 5, 8, 13, 21, ...?',
    options: ['28', '30', '34', '36'],
    correctAnswer: '34',
    explanation: 'This is a Fibonacci-type series where each term is the sum of the previous two: 13 + 21 = 34.'
  },
  {
    id: 'ls-8',
    text: 'Find the missing letters: BCD, FGH, JKL, ?, RST',
    options: ['MNO', 'NOP', 'PQR', 'OPQ'],
    correctAnswer: 'NOP',
    explanation: 'Skip two letters between groups: BCD (EF) FGH (IJ) JKL (MN) NOP (QR) RST.'
  },
  {
    id: 'ls-9',
    text: 'What is the next number: 100, 90, 81, 73, ...?',
    options: ['65', '66', '67', '64'],
    correctAnswer: '66',
    explanation: 'The difference decreases: -10, -9, -8, -7. 73 - 7 = 66.'
  },
  {
    id: 'ls-10',
    text: 'Complete the series: AZ, BY, CX, DW, ...?',
    options: ['EV', 'FU', 'ET', 'ES'],
    correctAnswer: 'EV',
    explanation: 'First letter moves forward (A, B, C, D, E), second letter moves backward (Z, Y, X, W, V).'
  },
  {
    id: 'ls-11',
    text: 'What comes next: 1, 2, 6, 24, 120, ...?',
    options: ['600', '720', '840', '1000'],
    correctAnswer: '720',
    explanation: 'Factorial series: 1!, 2!, 3!, 4!, 5!, 6!. 6! = 720.'
  },
  {
    id: 'ls-12',
    text: 'Find the missing number: 7, 10, 8, 11, 9, 12, ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '10',
    explanation: 'Two alternating series: (7, 8, 9, 10) and (10, 11, 12).'
  },
  {
    id: 'ls-13',
    text: 'Complete the series: C4X, F9U, I16R, ...?',
    options: ['L25O', 'K25P', 'L20O', 'M25N'],
    correctAnswer: 'L25O',
    explanation: 'First letter: +3 (C, F, I, L). Middle number: 2², 3², 4², 5². Last letter: -3 backward (X, U, R, O).'
  },
  {
    id: 'ls-14',
    text: 'What is the next term: 8, 24, 12, 36, 18, 54, ?',
    options: ['27', '28', '30', '32'],
    correctAnswer: '27',
    explanation: 'Pattern: *3, /2, *3, /2, *3, /2. 54 / 2 = 27.'
  },
  {
    id: 'ls-15',
    text: 'Find the missing term: KM5, IP8, GS11, EV14, ?',
    options: ['CY17', 'DY17', 'CX17', 'BZ17'],
    correctAnswer: 'CY17',
    explanation: 'First letter: -2 (K, I, G, E, C). Second letter: +3 (M, P, S, V, Y). Number: +3 (5, 8, 11, 14, 17).'
  },
  {
    id: 'ls-16',
    text: 'What is the next number in the series: 3, 6, 11, 18, 27, ...?',
    options: ['36', '37', '38', '39'],
    correctAnswer: '38',
    explanation: 'Differences are odd numbers: +3, +5, +7, +9, +11. 27 + 11 = 38.'
  },
  {
    id: 'ls-17',
    text: 'Complete the series: 1, 3, 7, 15, 31, 63, ...?',
    options: ['125', '126', '127', '128'],
    correctAnswer: '127',
    explanation: 'Pattern: 2ⁿ - 1. 2⁷ - 1 = 128 - 1 = 127.'
  },
  {
    id: 'ls-18',
    text: 'Find the next letters: AD, EH, IL, MP, ?',
    options: ['QT', 'QS', 'RS', 'RT'],
    correctAnswer: 'QT',
    explanation: 'First letters: A(+4)E(+4)I(+4)M(+4)Q. Second letters: D(+4)H(+4)L(+4)P(+4)T.'
  },
  {
    id: 'ls-19',
    text: 'What is the next number: 1, 8, 27, 64, 125, ...?',
    options: ['216', '196', '225', '250'],
    correctAnswer: '216',
    explanation: 'Cubes of natural numbers: 1³, 2³, 3³, 4³, 5³, 6³. 6³ = 216.'
  },
  {
    id: 'ls-20',
    text: 'Complete: 4, 9, 20, 43, 90, ...?',
    options: ['180', '185', '187', '190'],
    correctAnswer: '185',
    explanation: 'Pattern: (n * 2) + 1, (n * 2) + 2, (n * 2) + 3, (n * 2) + 4, (n * 2) + 5. (90 * 2) + 5 = 185.'
  },
  {
    id: 'ls-21',
    text: 'What comes next: ZA, YB, XC, WD, ...?',
    options: ['VE', 'UF', 'TE', 'UE'],
    correctAnswer: 'VE',
    explanation: 'First letter moves back, second forward.'
  },
  {
    id: 'ls-22',
    text: 'Find the missing number: 2, 5, 9, ?, 20, 27',
    options: ['14', '15', '16', '17'],
    correctAnswer: '14',
    explanation: 'Difference increases: +3, +4, +5, +6, +7. 9 + 5 = 14.'
  },
  {
    id: 'ls-23',
    text: 'Complete the series: GH, JL, NQ, SW, ...?',
    options: ['YD', 'YC', 'YB', 'YA'],
    correctAnswer: 'YD',
    explanation: 'First letter: +3, +4, +5, +6 (G to J is 3, J to N is 4, N to S is 5, S to Y is 6). Second letter: +4, +5, +6, +7 (H to L is 4, L to Q is 5, Q to W is 6, W to D is 7).'
  },
  {
    id: 'ls-24',
    text: 'What is the next number: 120, 99, 80, 63, 48, ...?',
    options: ['35', '36', '38', '40'],
    correctAnswer: '35',
    explanation: 'Series is (n² - 1): 11²-1, 10²-1, 9²-1, 8²-1, 7²-1, 6²-1. 36 - 1 = 35.'
  },
  {
    id: 'ls-25',
    text: 'Find the next term: JAF, KBE, LCD, MDB, ...?',
    options: ['NEA', 'OEA', 'NEC', 'NFA'],
    correctAnswer: 'NEA',
    explanation: 'First letter: +1 (J,K,L,M,N). Second letter: +1 (A,B,C,D,E). Third letter: -1 (F,E,D,B,A).'
  },
  {
    id: 'ls-26',
    text: 'What comes next: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '46'],
    correctAnswer: '42',
    explanation: 'Pattern: n(n+1). 1*2, 2*3, 3*4, 4*5, 5*6, 6*7. 6 * 7 = 42.'
  },
  {
    id: 'ls-27',
    text: 'Complete: 5, 2, 7, 9, 16, 25, ...?',
    options: ['41', '45', '48', '50'],
    correctAnswer: '41',
    explanation: 'Sum of previous two: 16 + 25 = 41.'
  },
  {
    id: 'ls-28',
    text: 'What is the missing number: 1, 2, 3, 6, 9, 18, ?, 54',
    options: ['27', '36', '45', '50'],
    correctAnswer: '27',
    explanation: 'Pattern: *2, *1.5, *2, *1.5, *2, *1.5. 18 * 1.5 = 27.'
  },
  {
    id: 'ls-29',
    text: 'Find the next term: P3C, R5F, T8I, V12L, ?',
    options: ['X17O', 'Y17O', 'X15O', 'X17N'],
    correctAnswer: 'X17O',
    explanation: 'P(+2)R(+2)T(+2)V(+2)X. 3(+2)5(+3)8(+4)12(+5)17. C(+3)F(+3)I(+3)L(+3)O.'
  },
  {
    id: 'ls-30',
    text: 'What comes next: 0, 7, 26, 63, ...?',
    options: ['124', '125', '126', '127'],
    correctAnswer: '124',
    explanation: 'Pattern: n³ - 1. 1³-1, 2³-1, 3³-1, 4³-1, 5³-1. 125 - 1 = 124.'
  },
  {
    id: 'ls-31',
    text: 'Complete the series: B, D, G, K, P, ...?',
    options: ['V', 'W', 'U', 'S'],
    correctAnswer: 'V',
    explanation: 'Gap increases by 1: B(1)D(2)G(3)K(4)P(5)V.'
  },
  {
    id: 'ls-32',
    text: 'What is the missing number: 10, 14, 26, 42, 70, ?',
    options: ['100', '102', '114', '112'],
    correctAnswer: '112',
    explanation: 'Sum of previous two + constant? No. 10+14=24(+2)=26. 14+26=40(+2)=42. 26+42=68(+2)=70. 42+70=112.'
  },
  {
    id: 'ls-33',
    text: 'Find the next letters: CAT, FDW, IGZ, ...?',
    options: ['LJC', 'KJC', 'LKC', 'LJB'],
    correctAnswer: 'LJC',
    explanation: 'C(+3)F(+3)I(+3)L. A(+3)D(+3)G(+3)J. T(+3)W(+3)Z(+3)C.'
  },
  {
    id: 'ls-34',
    text: 'What comes next: 3, 12, 27, 48, 75, ...?',
    options: ['100', '108', '120', '125'],
    correctAnswer: '108',
    explanation: 'Pattern: 3 * n². 3*1, 3*4, 3*9, 3*16, 3*25, 3*36. 3 * 36 = 108.'
  },
  {
    id: 'ls-35',
    text: 'Complete: ACE, BDF, CEG, ...?',
    options: ['DFH', 'DEF', 'DGH', 'EGH'],
    correctAnswer: 'DFH',
    explanation: 'Each group is consecutive letters skipping one, starting with A, B, C, D.'
  },
  {
    id: 'ls-36',
    text: 'What is the next number: 1, 6, 13, 22, 33, ...?',
    options: ['44', '45', '46', '47'],
    correctAnswer: '46',
    explanation: 'Differences: +5, +7, +9, +11, +13. 33 + 13 = 46.'
  },
  {
    id: 'ls-37',
    text: 'Find the next term: 2, 10, 30, 68, ...?',
    options: ['120', '130', '140', '150'],
    correctAnswer: '130',
    explanation: 'Pattern: n³ + n. 1³+1, 2³+2, 3³+3, 4³+4, 5³+5. 125 + 5 = 130.'
  },
  {
    id: 'ls-38',
    text: 'What comes next: ABC, PQR, DEF, STU, ...?',
    options: ['GHI', 'VWX', 'JKL', 'MNO'],
    correctAnswer: 'GHI',
    explanation: 'Two interleaved series: (ABC, DEF, GHI) and (PQR, STU).'
  },
  {
    id: 'ls-39',
    text: 'Complete: 2, 5, 10, 17, 26, ...?',
    options: ['35', '36', '37', '38'],
    correctAnswer: '37',
    explanation: 'Pattern: n² + 1. 1²+1, 2²+1, 3²+1, 4²+1, 5²+1, 6²+1. 36 + 1 = 37.'
  },
  {
    id: 'ls-40',
    text: 'What is the next term: A, D, I, P, ?',
    options: ['Y', 'X', 'W', 'Z'],
    correctAnswer: 'Y',
    explanation: 'Positions: 1, 4, 9, 16, 25. 25th letter is Y.'
  },
  {
    id: 'ls-41',
    text: 'Complete: 7, 26, 63, 124, 215, ...?',
    options: ['342', '343', '344', '345'],
    correctAnswer: '342',
    explanation: 'Pattern: n³ - 1. 2³-1, 3³-1, 4³-1, 5³-1, 6³-1, 7³-1. 343 - 1 = 342.'
  },
  {
    id: 'ls-42',
    text: 'What comes next: 4, 6, 9, 13.5, ...?',
    options: ['18.25', '20.25', '21', '19'],
    correctAnswer: '20.25',
    explanation: 'Multiply by 1.5 each time. 13.5 * 1.5 = 20.25.'
  },
  {
    id: 'ls-43',
    text: 'Find the missing letters: QPO, NML, KJI, ?, EDC',
    options: ['HGF', 'GHI', 'IJK', 'FGH'],
    correctAnswer: 'HGF',
    explanation: 'Groups of 3 backward alphabet letters.'
  },
  {
    id: 'ls-44',
    text: 'What is the next number: 1, 2, 5, 26, ...?',
    options: ['677', '625', '526', '650'],
    correctAnswer: '677',
    explanation: 'Pattern: (previous number)² + 1. 26² + 1 = 676 + 1 = 677.'
  },
  {
    id: 'ls-45',
    text: 'Complete: 20, 19, 17, ... , 10, 5',
    options: ['14', '15', '16', '13'],
    correctAnswer: '14',
    explanation: 'Difference increases: -1, -2, -3, -4, -5. 17 - 3 = 14.'
  },
  {
    id: 'ls-46',
    text: 'What comes next: 2, 3, 10, 15, 26, ...?',
    options: ['34', '35', '36', '37'],
    correctAnswer: '35',
    explanation: 'Pattern: n² + 1, n² - 1 alternating? 1²+1, 2²-1, 3²+1, 4²-1, 5²+1, 6²-1. 36 - 1 = 35.'
  },
  {
    id: 'ls-47',
    text: 'Find the next term: JAK, KBL, LCM, MDN, ...?',
    options: ['NEO', 'OEP', 'MEN', 'PFQ'],
    correctAnswer: 'NEO',
    explanation: 'All letters move forward: J(K)L(M)N, A(B)C(D)E, K(L)M(N)O.'
  },
  {
    id: 'ls-48',
    text: 'What comes next: 1, 4, 27, 256, ...?',
    options: ['3125', '625', '1024', '2048'],
    correctAnswer: '3125',
    explanation: 'Pattern: nⁿ. 1¹, 2², 3³, 4⁴, 5⁵. 5⁵ = 3125.'
  },
  {
    id: 'ls-49',
    text: 'Complete the series: 3, 7, 15, 31, 63, ...?',
    options: ['127', '128', '125', '126'],
    correctAnswer: '127',
    explanation: 'Pattern: (2 * previous) + 1. (63 * 2) + 1 = 127.'
  },
  {
    id: 'ls-50',
    text: 'What is the next number: 5, 6, 9, 14, 21, ...?',
    options: ['28', '30', '32', '34'],
    correctAnswer: '30',
    explanation: 'Differences are odd numbers: +1, +3, +5, +7, +9. 21 + 9 = 30.'
  },
  {
    id: 'ls-51',
    text: 'Find the missing number: 8, 24, 12, 36, 18, 54, ?',
    options: ['27', '28', '30', '32'],
    correctAnswer: '27',
    explanation: 'Pattern: *3, /2, *3, /2, *3, /2.'
  },
  {
    id: 'ls-52',
    text: 'Complete the series: PERPENDICULAR, ERPENDICULA, RPENDICUL, ...?',
    options: ['PENDICU', 'PENDIC', 'ENDICU', 'PEND'],
    correctAnswer: 'PENDICU',
    explanation: 'Remove the first and last letters at each step.'
  },
  {
    id: 'ls-53',
    text: 'What comes next: 1, 3, 4, 8, 15, 27, ...?',
    options: ['50', '52', '55', '60'],
    correctAnswer: '50',
    explanation: 'Sum of previous three: 8 + 15 + 27 = 50.'
  },
  {
    id: 'ls-54',
    text: 'Find the missing number: 4, 12, 36, 108, ?',
    options: ['324', '300', '216', '432'],
    correctAnswer: '324',
    explanation: 'Each term is multiplied by 3.'
  },
  {
    id: 'ls-55',
    text: 'What comes next in the letter series: AB, DE, HI, MN, ...?',
    options: ['ST', 'RS', 'TU', 'SU'],
    correctAnswer: 'ST',
    explanation: 'Gaps between pairs: (C) 1 letter, (FG) 2 letters, (JKL) 3 letters, (OPQR) 4 letters. MN (+4) ST.'
  },
  {
    id: 'ls-56',
    text: 'Complete: 1, 2, 4, 7, 11, 16, ...?',
    options: ['20', '21', '22', '23'],
    correctAnswer: '22',
    explanation: 'Difference increases by 1: +1, +2, +3, +4, +5, +6. 16 + 6 = 22.'
  },
  {
    id: 'ls-57',
    text: 'What is the next number: 10, 18, 34, 66, 130, ...?',
    options: ['250', '258', '260', '266'],
    correctAnswer: '258',
    explanation: 'Pattern: (previous * 2) - 2. (130 * 2) - 2 = 258.'
  },
  {
    id: 'ls-58',
    text: 'Find the missing term: B2CD, BCD4, B5CD, BC6D, ...?',
    options: ['B7CD', 'BC7D', 'BCD7', 'B8CD'],
    correctAnswer: 'B7CD',
    explanation: 'The number increment and cycles through positions.'
  },
  {
    id: 'ls-59',
    text: 'Complete the series: 3, 4, 7, 11, 18, 29, ...?',
    options: ['31', '38', '47', '50'],
    correctAnswer: '47',
    explanation: 'Lucas series: sum of previous two. 18 + 29 = 47.'
  },
  {
    id: 'ls-60',
    text: 'What comes next: 1, 0.5, 0.25, 0.125, ...?',
    options: ['0.0625', '0.05', '0.075', '0.0125'],
    correctAnswer: '0.0625',
    explanation: 'Divide by 2 each time.'
  },
  {
    id: 'ls-61',
    text: 'What is the next number in the series: 10, 20, 31, 43, 56, ...?',
    options: ['68', '70', '71', '72'],
    correctAnswer: '70',
    explanation: 'Differences: +10, +11, +12, +13, +14. 56 + 14 = 70.'
  },
  {
    id: 'ls-62',
    text: 'Complete: SCD, TEF, UGH, ...?',
    options: ['VIJ', 'WKL', 'UJI', 'IJK'],
    correctAnswer: 'VIJ',
    explanation: 'S(+1)T(+1)U(+1)V. CD(+2)EF(+2)GH(+2)IJ.'
  },
  {
    id: 'ls-63',
    text: 'What comes next: 2, 5, 11, 23, 47, ...?',
    options: ['90', '94', '95', '96'],
    correctAnswer: '95',
    explanation: 'Pattern: (n * 2) + 1.'
  },
  {
    id: 'ls-64',
    text: 'Find the next letters: WX, UV, ST, QR, ...?',
    options: ['OP', 'MN', 'KL', 'PO'],
    correctAnswer: 'OP',
    explanation: 'Moving backward through alphabet in pairs.'
  },
  {
    id: 'ls-65',
    text: 'What is the next number: 1, 4, 10, 22, 46, ...?',
    options: ['90', '92', '94', '96'],
    correctAnswer: '94',
    explanation: 'Pattern: (previous * 2) + 2. (46 * 2) + 2 = 94.'
  },
  {
    id: 'ls-66',
    text: 'Complete: FAG, GAF, HAI, IAH, ...?',
    options: ['JAK', 'HAL', 'HAK', 'JAI'],
    correctAnswer: 'JAK',
    explanation: 'Alternating patterns. First letters: F, G, H, I, J. Last letters: G, F, I, H, K. Middle is always A.'
  },
  {
    id: 'ls-67',
    text: 'What comes next: 1, 9, 25, 49, 81, ...?',
    options: ['100', '121', '144', '169'],
    correctAnswer: '121',
    explanation: 'Squares of odd numbers: 1², 3², 5², 7², 9², 11². 11² = 121.'
  },
  {
    id: 'ls-68',
    text: 'Find the next term: 80, 10, 70, 15, 60, ...?',
    options: ['20', '25', '30', '50'],
    correctAnswer: '20',
    explanation: 'Interleaved: (80, 70, 60, 50) and (10, 15, 20).'
  },
  {
    id: 'ls-69',
    text: 'Complete: ELFA, GLHA, ILJA, ...?',
    options: ['KLMA', 'KLLA', 'QLMA', 'JKLA'],
    correctAnswer: 'KLLA',
    explanation: 'First letters: E, G, I, K (+2). Second letters: always L. Third letters: F, H, J, L (+2). Fourth: always A.'
  },
  {
    id: 'ls-70',
    text: 'What is the next number: 3, 8, 15, 24, 35, ...?',
    options: ['44', '46', '48', '50'],
    correctAnswer: '48',
    explanation: 'Pattern: n² - 1 starting from n=2. 2²-1, 3²-1, 4²-1, 5²-1, 6²-1, 7²-1. 49 - 1 = 48.'
  },
  {
    id: 'ls-71',
    text: 'Find the missing number: 3, 5, 35, 10, 12, 35, ...',
    options: ['17', '18', '19', '20'],
    correctAnswer: '17',
    explanation: 'Pairs of increasing numbers separated by 35.'
  },
  {
    id: 'ls-72',
    text: 'What comes next: 1, 3, 6, 10, 15, ...?',
    options: ['20', '21', '22', '23'],
    correctAnswer: '21',
    explanation: 'Triangular numbers: n(n+1)/2. 6*7/2 = 21.'
  },
  {
    id: 'ls-73',
    text: 'Complete: BCB, DED, FGF, HIH, ...?',
    options: ['JKJ', 'KLK', 'IJI', 'LML'],
    correctAnswer: 'JKJ',
    explanation: 'B(C)B, D(E)D, F(G)F, H(I)H, J(K)J.'
  },
  {
    id: 'ls-74',
    text: 'What is the next number: 1, 1, 2, 6, 24, 120, ...?',
    options: ['600', '720', '840', '1000'],
    correctAnswer: '720',
    explanation: 'Multiplying by increasing integers: *1, *2, *3, *4, *5, *6.'
  },
  {
    id: 'ls-75',
    text: 'Find the next term: 544, 509, 474, 439, ...?',
    options: ['404', '414', '424', '390'],
    correctAnswer: '404',
    explanation: 'Subtract 35 each time.'
  },
  {
    id: 'ls-76',
    text: 'Complete: QAR, RAS, SAT, TAU, ...?',
    options: ['UAV', 'UAT', 'VAS', 'VAV'],
    correctAnswer: 'UAV',
    explanation: 'First and third letters move forward alphabetically; middle is always A.'
  },
  {
    id: 'ls-77',
    text: 'What comes next: 2, 4, 12, 48, 240, ...?',
    options: ['1440', '1200', '1000', '1400'],
    correctAnswer: '1440',
    explanation: 'Pattern: *2, *3, *4, *5, *6. 240 * 6 = 1440.'
  },
  {
    id: 'ls-78',
    text: 'Find the missing number: 2, 6, ?, 54, 162',
    options: ['18', '20', '24', '30'],
    correctAnswer: '18',
    explanation: 'Multiply by 3 each time.'
  },
  {
    id: 'ls-79',
    text: 'Complete: DEF, HIJ, MNO, ...?',
    options: ['STU', 'RST', 'PQR', 'TUV'],
    correctAnswer: 'STU',
    explanation: 'Skip 1 letter, then 2 letters, then 3 letters... DEF (G) HIJ (KL) MNO (PQ R) STU.'
  },
  {
    id: 'ls-80',
    text: 'What is the next number: 1, 2, 4, 8, 16, 32, ...?',
    options: ['64', '48', '56', '72'],
    correctAnswer: '64',
    explanation: 'Power of 2.'
  },
  {
    id: 'ls-81',
    text: 'Find the next term: OOO, OOX, OXX, XXX, ...?',
    options: ['XXX', 'XOX', 'OOO', 'None'],
    correctAnswer: 'None',
    explanation: 'The pattern ends when all letters are X.'
  },
  {
    id: 'ls-82',
    text: 'What comes next: 3, 5, 9, 17, 33, ...?',
    options: ['65', '60', '70', '64'],
    correctAnswer: '65',
    explanation: 'Pattern: (previous * 2) - 1.'
  },
  {
    id: 'ls-83',
    text: 'Complete: VUS, TRQ, PON, ...?',
    options: ['NML', 'MLK', 'LJK', 'KJI'],
    correctAnswer: 'NML',
    explanation: 'Backward groups of 3 starting from V, skipping 1 between groups.'
  },
  {
    id: 'ls-84',
    text: 'What is the next number: 1, 3, 9, 27, 81, ...?',
    options: ['243', '100', '162', '200'],
    correctAnswer: '243',
    explanation: 'Powers of 3.'
  },
  {
    id: 'ls-85',
    text: 'Find the next term: 6, 12, 21, 33, ...?',
    options: ['48', '45', '50', '52'],
    correctAnswer: '48',
    explanation: 'Differences: +6, +9, +12, +15. 33 + 15 = 48.'
  },
  {
    id: 'ls-86',
    text: 'Complete: CX, FU, IR, ...?',
    options: ['LO', 'MN', 'KP', 'JQ'],
    correctAnswer: 'LO',
    explanation: 'First letters +3. Last letters -3 (opposite positions in alphabet).'
  },
  {
    id: 'ls-87',
    text: 'What comes next: 1, 1.1, 1.21, 1.331, ...?',
    options: ['1.4641', '1.4', '1.5', '1.6'],
    correctAnswer: '1.4641',
    explanation: 'Powers of 1.1.'
  },
  {
    id: 'ls-88',
    text: 'Find the next letters: B, E, H, K, N, ...?',
    options: ['Q', 'P', 'R', 'S'],
    correctAnswer: 'Q',
    explanation: 'Skip 2 letters: B (CD) E (FG) H (IJ) K (LM) N (OP) Q.'
  },
  {
    id: 'ls-89',
    text: 'Complete: 100, 50, 25, 12.5, ...?',
    options: ['6.25', '6', '5', '7.5'],
    correctAnswer: '6.25',
    explanation: 'Halve each time.'
  },
  {
    id: 'ls-90',
    text: 'What is the next number: 2, 4, 7, 12, 21, ...?',
    options: ['38', '35', '40', '42'],
    correctAnswer: '38',
    explanation: 'Pattern: (previous * 2) - 0, 1, 2, 3, 4? 2*2-0=4. 4*2-1=7. 7*2-2=12. 12*2-3=21. 21*2-4=38.'
  },
  {
    id: 'ls-91',
    text: 'Find the next letters: ZA, XC, VE, TG, ...?',
    options: ['RI', 'SH', 'QI', 'RJ'],
    correctAnswer: 'RI',
    explanation: 'First letters: -2. Last letters: +2.'
  },
  {
    id: 'ls-92',
    text: 'Complete: 0, 6, 24, 60, 120, ...?',
    options: ['210', '216', '220', '240'],
    correctAnswer: '210',
    explanation: 'Pattern: n³ - n. 1³-1, 2³-2, 3³-3, 4³-4, 5³-5, 6³-6. 216 - 6 = 210.'
  },
  {
    id: 'ls-93',
    text: 'What is the next number: 1, 2, 3, 5, 8, 13, ...?',
    options: ['21', '20', '22', '24'],
    correctAnswer: '21',
    explanation: 'Fibonacci series.'
  },
  {
    id: 'ls-94',
    text: 'Find the next term: A1, C3, E5, G7, ...?',
    options: ['I9', 'H8', 'J10', 'I11'],
    correctAnswer: 'I9',
    explanation: 'Letter is in its alphabetical position.'
  },
  {
    id: 'ls-95',
    text: 'Complete: 9, 12, 11, 14, 13, 16, ...?',
    options: ['15', '17', '18', '14'],
    correctAnswer: '15',
    explanation: 'Pattern: +3, -1, +3, -1...'
  },
  {
    id: 'ls-96',
    text: 'What comes next: 1, 4, 10, 19, 31, ...?',
    options: ['46', '45', '48', '50'],
    correctAnswer: '46',
    explanation: 'Differences: +3, +6, +9, +12, +15. 31 + 15 = 46.'
  },
  {
    id: 'ls-97',
    text: 'Find the missing letters: D-4, F-6, H-8, J-10, ...?',
    options: ['L-12', 'K-11', 'M-13', 'I-9'],
    correctAnswer: 'L-12',
    explanation: 'Letter and its position.'
  },
  {
    id: 'ls-98',
    text: 'Complete: 5.2, 4.8, 4.4, 4.0, ...?',
    options: ['3.6', '3.8', '3.4', '3.5'],
    correctAnswer: '3.6',
    explanation: 'Subtract 0.4 each time.'
  },
  {
    id: 'ls-99',
    text: 'What is the next number: 1, 10, 100, 1000, ...?',
    options: ['10000', '1100', '100000', '2000'],
    correctAnswer: '10000',
    explanation: 'Powers of 10.'
  },
  {
    id: 'ls-100',
    text: 'Final Series Check: What comes next: 2, 3, 5, 7, 11, ...?',
    options: ['13', '15', '17', '19'],
    correctAnswer: '13',
    explanation: 'Prime numbers series.'
  }
];
