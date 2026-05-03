import { Question } from '../types';

export const LOGICAL_SYMBOL_QUIZ: Question[] = [
  {
    id: 'lsy-1',
    text: 'Pattern: ↑, →, ↓, ←, ... What comes next?',
    options: ['↑', '→', '↓', '↔'],
    correctAnswer: '↑',
    explanation: 'The arrow rotates 90 degrees clockwise. After left (←), it returns to up (↑).'
  },
  {
    id: 'lsy-2',
    text: 'Pattern: ○, ○○, ○○○, ... What comes next?',
    options: ['○○○○', '●', '□', '○○'],
    correctAnswer: '○○○○',
    explanation: 'The number of circles increases by one each time.'
  },
  {
    id: 'lsy-3',
    text: 'Pattern: □, ▱, ▭, ... (Square, Rhombus, Rectangle) What logically follows?',
    options: ['△', '⬔', '⬓', '⬒'],
    correctAnswer: '⬔',
    explanation: 'The pattern involves four-sided shapes.'
  },
  {
    id: 'lsy-4',
    text: 'Pattern: ◣, ◤, ◥, ... What comes next?',
    options: ['◢', '◣', '■', '▲'],
    correctAnswer: '◢',
    explanation: 'The shaded triangle rotates clockwise.'
  },
  {
    id: 'lsy-5',
    text: 'Pattern: +, x, +, x, ... What comes next?',
    options: ['+', 'x', '-', '='],
    correctAnswer: '+',
    explanation: 'Alternating plus and multiplication signs.'
  },
  {
    id: 'lsy-6',
    text: 'Pattern: 1st: One line, 2nd: Two lines crossing (X), 3rd: Three lines forming triangle. What is 4th?',
    options: ['Square (4 lines)', 'Circle', 'Point', 'Star'],
    correctAnswer: 'Square (4 lines)',
    explanation: 'The number of lines/sides increases.'
  },
  {
    id: 'lsy-7',
    text: 'Pattern: ( ), (( )), ((( ))), ... What is next?',
    options: ['(((( ))))', '(( ))', '( )', '((((( )))))'],
    correctAnswer: '(((( ))))',
    explanation: 'Adding one set of parentheses each time.'
  },
  {
    id: 'lsy-8',
    text: 'Pattern: ●○, ○●, ●○, ... What is next?',
    options: ['○●', '●○', '●●', '○○'],
    correctAnswer: '○●',
    explanation: 'The shaded and unshaded circles swap positions.'
  },
  {
    id: 'lsy-9',
    text: 'Pattern: A, ∀, A, ... What is next?',
    options: ['∀', 'A', 'B', 'M'],
    correctAnswer: '∀',
    explanation: 'Alternating upright and inverted letter A.'
  },
  {
    id: 'lsy-10',
    text: 'Pattern: 🕐, 🕑, 🕒, ... What is next?',
    options: ['🕓', '🕔', '🕕', '🕛'],
    correctAnswer: '🕓',
    explanation: 'The clock shows hours in sequence.'
  },
  {
    id: 'lsy-11',
    text: 'Pattern: ♠, ♣, ♥, ♦, ♠, ... What is next?',
    options: ['♣', '♥', '♦', '♠'],
    correctAnswer: '♣',
    explanation: 'Cycle of playing card suits.'
  },
  {
    id: 'lsy-12',
    text: 'Pattern: 1, 11, 111, ... What is next?',
    options: ['1111', '222', '111', '000'],
    correctAnswer: '1111',
    explanation: 'Increasing the count of the digit 1.'
  },
  {
    id: 'lsy-13',
    text: 'Pattern: [ ], [ | ], [ || ], ... What is next?',
    options: ['[ ||| ]', '[ | ]', '[ ]', '[ - ]'],
    correctAnswer: '[ ||| ]',
    explanation: 'Adding a vertical bar inside the brackets.'
  },
  {
    id: 'lsy-14',
    text: 'Pattern: 🌑, 🌒, 🌓, 🌔, ... What is next?',
    options: ['🌕', '🌑', '🌗', '🌘'],
    correctAnswer: '🌕',
    explanation: 'Phases of the moon sequence.'
  },
  {
    id: 'lsy-15',
    text: 'Pattern: !, !!, !!!, ... What is next?',
    options: ['!!!!', '?', '.', '!!'],
    correctAnswer: '!!!!',
    explanation: 'Incremental symbols.'
  },
  {
    id: 'lsy-16',
    text: 'Pattern: ↗, ↘, ↙, ... What is next?',
    options: ['↖', '↗', '↘', '↔'],
    correctAnswer: '↖',
    explanation: 'Rotating clockwise 90 degrees (diagonal directions).'
  },
  {
    id: 'lsy-17',
    text: 'Pattern: (•), (••), (•••), ... What is next?',
    options: ['(••••)', '(•)', '(••)', '(•••••)'],
    correctAnswer: '(••••)',
    explanation: 'Adding dots inside parentheses.'
  },
  {
    id: 'lsy-18',
    text: 'Pattern: L, ⅃, ⸮, ... What is next?',
    options: ['Γ', 'L', 'F', 'T'],
    correctAnswer: 'Γ',
    explanation: 'The letter L is being mirrored and rotated.'
  },
  {
    id: 'lsy-19',
    text: 'Pattern: 0, 00, 000, ... What is next?',
    options: ['0000', '1111', '00', '0'],
    correctAnswer: '0000',
    explanation: 'Simple incremental pattern.'
  },
  {
    id: 'lsy-20',
    text: 'Pattern: ★, ☆, ★, ☆, ... What is next?',
    options: ['★', '☆', '✦', '✧'],
    correctAnswer: '★',
    explanation: 'Alternating solid and hollow stars.'
  },
  {
    id: 'lsy-21',
    text: 'Pattern: | , || , ||| , ... What is next?',
    options: ['||||', 'V', 'X', '|'],
    correctAnswer: '||||',
    explanation: 'Adding one bar.'
  },
  {
    id: 'lsy-22',
    text: 'Pattern: <, <<, <<<, ... What is next?',
    options: ['<<<<', '>', '>>', '<<<'],
    correctAnswer: '<<<<',
    explanation: 'Incremental symbols.'
  },
  {
    id: 'lsy-23',
    text: 'Pattern: [ ], [[ ]], [[[ ]]], ... What is next?',
    options: ['[[[[ ]]]]', '[ ]', '[[ ]]', '(( ))'],
    correctAnswer: '[[[[ ]]]]',
    explanation: 'Nesting brackets.'
  },
  {
    id: 'lsy-24',
    text: 'Pattern: 1st: dot, 2nd: line, 3rd: angle, 4th: ?',
    options: ['Triangle', 'Square', 'Circle', 'Pentagon'],
    correctAnswer: 'Triangle',
    explanation: 'Representing number of vertices/dimensions.'
  },
  {
    id: 'lsy-25',
    text: 'Pattern: ☀️, ☁️, 🌧️, ❄️, ... What is next?',
    options: ['☀️', '⚡', '🌈', '🌫️'],
    correctAnswer: '☀️',
    explanation: 'Seasonal/Weather cycle.'
  },
  {
    id: 'lsy-26',
    text: 'Pattern: ➡️, ↘️, ⬇️, ↙️, ... What is next?',
    options: ['⬅️', '↖️', '⬆️', '↗️'],
    correctAnswer: '⬅️',
    explanation: 'Rotating 45 degrees clockwise.'
  },
  {
    id: 'lsy-27',
    text: 'Pattern: { }, {*}, {**}, ... What is next?',
    options: ['{***}', '{*}', '{ }', '[***]'],
    correctAnswer: '{***}',
    explanation: 'Adding stars inside braces.'
  },
  {
    id: 'lsy-28',
    text: 'Pattern: 1st: Circle, 2nd: Circle in square, 3rd: Square in circle, 4th: ?',
    options: ['Circle in square', 'Triangle', 'Square', 'Circle'],
    correctAnswer: 'Circle in square',
    explanation: 'Alternating nesting.'
  },
  {
    id: 'lsy-29',
    text: 'Pattern: ⚊, ⚋, ☰, ☱, ... (I Ching symbols) What logically follows?',
    options: ['☲', '☰', '⚊', '⚋'],
    correctAnswer: '☲',
    explanation: 'Sequence of trigrams.'
  },
  {
    id: 'lsy-30',
    text: 'Pattern: I, II, III, IV, ... What is next?',
    options: ['V', 'VI', 'X', 'I'],
    correctAnswer: 'V',
    explanation: 'Roman numerals sequence.'
  },
  {
    id: 'lsy-31',
    text: 'Pattern: ▢, ▣, ▢, ▣, ... What is next?',
    options: ['▢', '▣', '▤', '▥'],
    correctAnswer: '▢',
    explanation: 'Alternating empty and dotted squares.'
  },
  {
    id: 'lsy-32',
    text: 'Pattern: 1st: Horizontal line, 2nd: Vertical line, 3rd: Cross. What is 4th?',
    options: ['Diagonal line', 'Circle', 'Square', 'Star'],
    correctAnswer: 'Diagonal line',
    explanation: 'Adding new orientations.'
  },
  {
    id: 'lsy-33',
    text: 'Pattern: ☺, ☻, ☺, ☻, ... What is next?',
    options: ['☺', '☻', '☹', '♡'],
    correctAnswer: '☺',
    explanation: 'Alternating smileys.'
  },
  {
    id: 'lsy-34',
    text: 'Pattern: /, //, ///, ... What is next?',
    options: ['////', '\\', 'X', '//'],
    correctAnswer: '////',
    explanation: 'Incremental slashes.'
  },
  {
    id: 'lsy-35',
    text: 'Pattern: 1, 2, 4, 8, ... (Number of sides) What shape comes next?',
    options: ['Hexadecagon (16 sides)', 'Octagon', 'Square', 'Circle'],
    correctAnswer: 'Hexadecagon (16 sides)',
    explanation: 'Sides doubling: 1(point), 2(line segment), 4(square), 8(octagon), 16.'
  },
  {
    id: 'lsy-36',
    text: 'Pattern: 🍎, 🍏, 🍎, 🍏, ... What is next?',
    options: ['🍎', '🍏', '🍌', '🍇'],
    correctAnswer: '🍎',
    explanation: 'Alternating colors.'
  },
  {
    id: 'lsy-37',
    text: 'Pattern: 1st: One dot top-left, 2nd: One dot top-right, 3rd: One dot bottom-right, 4th: ?',
    options: ['One dot bottom-left', 'One dot top-left', 'Two dots', 'Center dot'],
    correctAnswer: 'One dot bottom-left',
    explanation: 'Moving clockwise around corners.'
  },
  {
    id: 'lsy-38',
    text: 'Pattern: A, B, C, D, ... What is next?',
    options: ['E', 'F', 'Z', '1'],
    correctAnswer: 'E',
    explanation: 'Alphabet sequence.'
  },
  {
    id: 'lsy-39',
    text: 'Pattern: 1st: Triangle (3), 2nd: Square (4), 3rd: Pentagon (5), 4th: ?',
    options: ['Hexagon (6)', 'Circle', 'Heptagon (7)', 'Octagon (8)'],
    correctAnswer: 'Hexagon (6)',
    explanation: 'Increasing number of sides.'
  },
  {
    id: 'lsy-40',
    text: 'Pattern: ↔, ↕, ↔, ↕, ... What is next?',
    options: ['↔', '↕', '↖', '↘'],
    correctAnswer: '↔',
    explanation: 'Alternating horizontal and vertical double arrows.'
  },
  {
    id: 'lsy-41',
    text: 'Pattern: . , .. , ... , ... What is next?',
    options: ['....', '.', '..', '.....'],
    correctAnswer: '....',
    explanation: 'Incremental dots.'
  },
  {
    id: 'lsy-42',
    text: 'Pattern: ◓, ◑, ◒, ◐, ... What is next?',
    options: ['◓', '◑', '●', '○'],
    correctAnswer: '◓',
    explanation: 'Rotating shaded semicircle 90 degrees clockwise.'
  },
  {
    id: 'lsy-43',
    text: 'Pattern: (1), (2), (3), ... What is next?',
    options: ['(4)', '(5)', '(1)', '(0)'],
    correctAnswer: '(4)',
    explanation: 'Sequencing numbers in brackets.'
  },
  {
    id: 'lsy-44',
    text: 'Pattern: ⚀, ⚁, ⚂, ⚃, ... What is next?',
    options: ['⚄', '⚅', '⚀', '⚁'],
    correctAnswer: '⚄',
    explanation: 'Dice faces sequence.'
  },
  {
    id: 'lsy-45',
    text: 'Pattern: [A], [B], [C], ... What is next?',
    options: ['[D]', '[E]', '[Z]', 'D'],
    correctAnswer: '[D]',
    explanation: 'Alphabet in brackets.'
  },
  {
    id: 'lsy-46',
    text: 'Pattern: 1st: Single arrow, 2nd: Double arrow (opposite), 3rd: Triple arrow. What is 4th?',
    options: ['Quadruple arrow', 'Single arrow', 'No arrow', 'Circle'],
    correctAnswer: 'Quadruple arrow',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-47',
    text: 'Pattern: ◀, ◀◀, ◀◀◀, ... What is next?',
    options: ['◀◀◀◀', '▶', '◀', '◀◀'],
    correctAnswer: '◀◀◀◀',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-48',
    text: 'Pattern: {1}, {2}, {3}, ... What is next?',
    options: ['{4}', '{5}', '{6}', '{0}'],
    correctAnswer: '{4}',
    explanation: 'Sequencing.'
  },
  {
    id: 'lsy-49',
    text: 'Pattern: 1st: Star, 2nd: Star in circle, 3rd: Star in circle in square, 4th: ?',
    options: ['Star in circle in square in triangle', 'Circle', 'Square', 'Star'],
    correctAnswer: 'Star in circle in square in triangle',
    explanation: 'Incremental nesting with new shapes.'
  },
  {
    id: 'lsy-50',
    text: 'Pattern: α, β, γ, δ, ... What is next?',
    options: ['ε', 'ζ', 'η', 'θ'],
    correctAnswer: 'ε',
    explanation: 'Greek alphabet sequence.'
  },
  {
    id: 'lsy-51',
    text: 'Pattern: 1st: Line at 0°, 2nd: Line at 45°, 3rd: Line at 90°, 4th: ?',
    options: ['Line at 135°', 'Line at 180°', 'Line at 0°', 'Circle'],
    correctAnswer: 'Line at 135°',
    explanation: 'Rotating 45 degrees.'
  },
  {
    id: 'lsy-52',
    text: 'Pattern: ▨, ▩, ▨, ▩, ... What is next?',
    options: ['▨', '▩', '□', '■'],
    correctAnswer: '▨',
    explanation: 'Alternating patterns.'
  },
  {
    id: 'lsy-53',
    text: 'Pattern: 1st: One dot, 2nd: Two dots (horizontal), 3rd: Three dots (triangle). What is 4th?',
    options: ['Four dots (square)', 'Four dots (line)', 'Five dots', 'Circle'],
    correctAnswer: 'Four dots (square)',
    explanation: 'Forming regular geometric dot patterns.'
  },
  {
    id: 'lsy-54',
    text: 'Pattern: 1st: Empty, 2nd: Half full, 3rd: Full, 4th: ?',
    options: ['Empty', 'Over-full', 'Half full', 'Full'],
    correctAnswer: 'Empty',
    explanation: 'Resetting the cycle.'
  },
  {
    id: 'lsy-55',
    text: 'Pattern: ☝️, 👉, 👇, 👈, ... What is next?',
    options: ['☝️', '👉', '👋', '👊'],
    correctAnswer: '☝️',
    explanation: 'Rotating 90 degrees clockwise.'
  },
  {
    id: 'lsy-56',
    text: 'Pattern: [1], [2], [4], [8], ... What is next?',
    options: ['[16]', '[10]', '[12]', '[20]'],
    correctAnswer: '[16]',
    explanation: 'Powers of 2 in brackets.'
  },
  {
    id: 'lsy-57',
    text: 'Pattern: 1st: Small circle, 2nd: Medium circle, 3rd: Large circle, 4th: ?',
    options: ['Extra large circle', 'Small circle', 'Square', 'Dot'],
    correctAnswer: 'Extra large circle',
    explanation: 'Increasing size.'
  },
  {
    id: 'lsy-58',
    text: 'Pattern: 1st: Vertical bar, 2nd: Horizontal bar, 3rd: Both (plus). What is 4th?',
    options: ['Square', 'Circle', 'Triangle', 'Star'],
    correctAnswer: 'Square',
    explanation: 'Joining components to form a closed shape.'
  },
  {
    id: 'lsy-59',
    text: 'Pattern: <, >, <, >, ... What is next?',
    options: ['<', '>', '^', 'v'],
    correctAnswer: '<',
    explanation: 'Alternating.'
  },
  {
    id: 'lsy-60',
    text: 'Pattern: [ ], [ | ], [ + ], ... What is next?',
    options: ['[ * ]', '[ - ]', '[ | ]', '[ x ]'],
    correctAnswer: '[ * ]',
    explanation: 'Adding more strokes to the center.'
  },
  {
    id: 'lsy-61',
    text: 'Pattern: 1st: Square, 2nd: Square with one diagonal, 3rd: Square with two diagonals. What is 4th?',
    options: ['Square with four parts', 'Circle', 'Pentagon', 'Triangle'],
    correctAnswer: 'Square with four parts',
    explanation: 'Internal divisions increasing.'
  },
  {
    id: 'lsy-62',
    text: 'Pattern: 1st: Triangle up, 2nd: Triangle down, 3rd: Triangle up. What is 4th?',
    options: ['Triangle down', 'Triangle up', 'Square', 'Circle'],
    correctAnswer: 'Triangle down',
    explanation: 'Alternating orientation.'
  },
  {
    id: 'lsy-63',
    text: 'Pattern: [1,2], [2,3], [3,4], ... What is next?',
    options: ['[4,5]', '[5,6]', '[4,4]', '[1,1]'],
    correctAnswer: '[4,5]',
    explanation: 'Consecutive pairs.'
  },
  {
    id: 'lsy-64',
    text: 'Pattern: 1st: Dot in center, 2nd: Dot off-center, 3rd: Dot at edge. What is 4th?',
    options: ['Dot outside', 'Dot in center', 'Two dots', 'No dot'],
    correctAnswer: 'Dot outside',
    explanation: 'Moving outward from center.'
  },
  {
    id: 'lsy-65',
    text: 'Pattern: ★, ★★, ★★★, ... What is next?',
    options: ['★★★★', '★', '☆', '★★'],
    correctAnswer: '★★★★',
    explanation: 'Incremental stars.'
  },
  {
    id: 'lsy-66',
    text: 'Pattern: 1st: Solid line, 2nd: Dashed line, 3rd: Dotted line. What is 4th?',
    options: ['Mixed line', 'Solid line', 'No line', 'Thick line'],
    correctAnswer: 'Mixed line',
    explanation: 'Evolution of line style.'
  },
  {
    id: 'lsy-67',
    text: 'Pattern: 1st: One-fourth shaded, 2nd: Half shaded, 3rd: Three-fourths shaded. What is 4th?',
    options: ['Fully shaded', 'Empty', 'Half shaded', 'One-fourth shaded'],
    correctAnswer: 'Fully shaded',
    explanation: 'Incremental shading.'
  },
  {
    id: 'lsy-68',
    text: 'Pattern: A, C, E, G, ... What is next?',
    options: ['I', 'H', 'J', 'K'],
    correctAnswer: 'I',
    explanation: 'Alphabet skipping one.'
  },
  {
    id: 'lsy-69',
    text: 'Pattern: 1st: Point, 2nd: Line, 3rd: Plane, 4th: ?',
    options: ['Volume (3D)', 'Time', 'Hypervolume', 'Nothing'],
    correctAnswer: 'Volume (3D)',
    explanation: 'Increasing dimensions.'
  },
  {
    id: 'lsy-70',
    text: 'Pattern: 1st: Clockwise rotation, 2nd: Counter-clockwise, 3rd: Clockwise. What is 4th?',
    options: ['Counter-clockwise', 'Clockwise', 'Static', 'Random'],
    correctAnswer: 'Counter-clockwise',
    explanation: 'Alternating behavior.'
  },
  {
    id: 'lsy-71',
    text: 'Pattern: (A), (B), (C), ... What is next?',
    options: ['(D)', '(E)', '(F)', '(G)'],
    correctAnswer: '(D)',
    explanation: 'Sequencing.'
  },
  {
    id: 'lsy-72',
    text: 'Pattern: [•], [••], [•••], ... What is next?',
    options: ['[••••]', '[•]', '[••]', '[•••••]'],
    correctAnswer: '[••••]',
    explanation: 'Incremental dots.'
  },
  {
    id: 'lsy-73',
    text: 'Pattern: 1st: Open box, 2nd: Half closed, 3rd: Closed. What is 4th?',
    options: ['Locked box', 'Open box', 'Empty box', 'Broken box'],
    correctAnswer: 'Locked box',
    explanation: 'Logical progression of state.'
  },
  {
    id: 'lsy-74',
    text: 'Pattern: 1st: Left-leaning line, 2nd: Right-leaning, 3rd: Left-leaning. What is 4th?',
    options: ['Right-leaning', 'Left-leaning', 'Vertical', 'Horizontal'],
    correctAnswer: 'Right-leaning',
    explanation: 'Alternating.'
  },
  {
    id: 'lsy-75',
    text: 'Pattern: 1st: Top half shaded, 2nd: Bottom half shaded, 3rd: Top half shaded. What is 4th?',
    options: ['Bottom half shaded', 'Top half shaded', 'Left half shaded', 'Right half shaded'],
    correctAnswer: 'Bottom half shaded',
    explanation: 'Alternating shading.'
  },
  {
    id: 'lsy-76',
    text: 'Pattern: 1st: Circle, 2nd: Two circles touching, 3rd: Three circles in a line. What is 4th?',
    options: ['Four circles in a line', 'One circle', 'Square', 'Three circles in a triangle'],
    correctAnswer: 'Four circles in a line',
    explanation: 'Incremental count in linear arrangement.'
  },
  {
    id: 'lsy-77',
    text: 'Pattern: 1st: Small square, 2nd: Square with dot, 3rd: Square with cross. What is 4th?',
    options: ['Square with star', 'Empty square', 'Circle', 'Triangle'],
    correctAnswer: 'Square with star',
    explanation: 'Adding complexity to a base shape.'
  },
  {
    id: 'lsy-78',
    text: 'Pattern: 1st: Arrow up, 2nd: Arrow right, 3rd: Arrow down. What is 4th?',
    options: ['Arrow left', 'Arrow up', 'Arrow right', 'Double arrow'],
    correctAnswer: 'Arrow left',
    explanation: 'Clockwise rotation.'
  },
  {
    id: 'lsy-79',
    text: 'Pattern: [ ], [ . ], [ : ], [ .: ], ... What is next?',
    options: [ '[ :: ]', '[ . ]', '[ : ]', '[ ... ]'],
    correctAnswer: '[ :: ]',
    explanation: 'Incremental dots in a grid.'
  },
  {
    id: 'lsy-80',
    text: 'Pattern: 1st: Solid circle, 2nd: Dotted circle, 3rd: Dashed circle. What is 4th?',
    options: ['Mixed circle', 'Solid circle', 'No circle', 'Thick circle'],
    correctAnswer: 'Mixed circle',
    explanation: 'Pattern evolution.'
  },
  {
    id: 'lsy-81',
    text: 'Pattern: A1, B2, C3, ... What is next?',
    options: ['D4', 'E5', 'D3', 'C4'],
    correctAnswer: 'D4',
    explanation: 'Letter and its position.'
  },
  {
    id: 'lsy-82',
    text: 'Pattern: 1st: Single line, 2nd: Parallel lines, 3rd: Three parallel lines. What is 4th?',
    options: ['Four parallel lines', 'Two lines crossing', 'Circle', 'Square'],
    correctAnswer: 'Four parallel lines',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-83',
    text: 'Pattern: 1st: Star in top-left, 2nd: Star in center, 3rd: Star in bottom-right. What is 4th?',
    options: ['Star outside', 'Star in top-left', 'Two stars', 'No star'],
    correctAnswer: 'Star outside',
    explanation: 'Moving diagonally across and out.'
  },
  {
    id: 'lsy-84',
    text: 'Pattern: [A], [B], [C], ... What is next?',
    options: ['[D]', '[E]', '[Z]', 'D'],
    correctAnswer: '[D]',
    explanation: 'Sequencing.'
  },
  {
    id: 'lsy-85',
    text: 'Pattern: 1st: Open circle, 2nd: Circle with one dot, 3rd: Circle with two dots. What is 4th?',
    options: ['Circle with three dots', 'Empty circle', 'Square', 'Triangle'],
    correctAnswer: 'Circle with three dots',
    explanation: 'Incremental detail.'
  },
  {
    id: 'lsy-86',
    text: 'Pattern: 1st: Horizontal bar, 2nd: Vertical bar, 3rd: Horizontal bar. What is 4th?',
    options: ['Vertical bar', 'Horizontal bar', 'Diagonal bar', 'Cross'],
    correctAnswer: 'Vertical bar',
    explanation: 'Alternating.'
  },
  {
    id: 'lsy-87',
    text: 'Pattern: 1st: Small square, 2nd: Medium square, 3rd: Large square. What is 4th?',
    options: ['Extra large square', 'Small square', 'Circle', 'Dot'],
    correctAnswer: 'Extra large square',
    explanation: 'Increasing size.'
  },
  {
    id: 'lsy-88',
    text: 'Pattern: 1st: Left arrow, 2nd: Up arrow, 3rd: Right arrow. What is 4th?',
    options: ['Down arrow', 'Left arrow', 'Double arrow', 'No arrow'],
    correctAnswer: 'Down arrow',
    explanation: 'Clockwise rotation.'
  },
  {
    id: 'lsy-89',
    text: 'Pattern: [ ], [ x ], [ xx ], ... What is next?',
    options: ['[ xxx ]', '[ x ]', '[ ]', '[ - ]'],
    correctAnswer: '[ xxx ]',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-90',
    text: 'Pattern: 1st: Solid triangle, 2nd: Hollow triangle, 3rd: Solid triangle. What is 4th?',
    options: ['Hollow triangle', 'Solid triangle', 'Square', 'Circle'],
    correctAnswer: 'Hollow triangle',
    explanation: 'Alternating.'
  },
  {
    id: 'lsy-91',
    text: 'Pattern: (A1), (B2), (C3), ... What is next?',
    options: ['(D4)', '(E5)', '(D3)', '(C4)'],
    correctAnswer: '(D4)',
    explanation: 'Sequencing.'
  },
  {
    id: 'lsy-92',
    text: 'Pattern: 1st: One dot, 2nd: Two dots, 3rd: Three dots. What is 4th?',
    options: ['Four dots', 'One dot', 'No dots', 'Circle'],
    correctAnswer: 'Four dots',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-93',
    text: 'Pattern: 1st: Vertical line, 2nd: Two vertical lines, 3rd: Three vertical lines. What is 4th?',
    options: ['Four vertical lines', 'One horizontal line', 'Cross', 'Square'],
    correctAnswer: 'Four vertical lines',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-94',
    text: 'Pattern: [ ], [ | ], [ || ], ... What is next?',
    options: ['[ ||| ]', '[ | ]', '[ ]', '[ - ]'],
    correctAnswer: '[ ||| ]',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-95',
    text: 'Pattern: 1st: Small circle, 2nd: Large circle, 3rd: Small circle. What is 4th?',
    options: ['Large circle', 'Small circle', 'Square', 'Dot'],
    correctAnswer: 'Large circle',
    explanation: 'Alternating size.'
  },
  {
    id: 'lsy-96',
    text: 'Pattern: 1st: Arrow pointing up-left, 2nd: Up-right, 3rd: Down-right. What is 4th?',
    options: ['Down-left', 'Up-left', 'Straight up', 'Straight down'],
    correctAnswer: 'Down-left',
    explanation: 'Clockwise rotation by 90 degrees.'
  },
  {
    id: 'lsy-97',
    text: 'Pattern: [A], [AA], [AAA], ... What is next?',
    options: ['[AAAA]', '[A]', '[B]', '[AB]'],
    correctAnswer: '[AAAA]',
    explanation: 'Incremental letters.'
  },
  {
    id: 'lsy-98',
    text: 'Pattern: 1st: Single dot, 2nd: Double dot, 3rd: Triple dot. What is 4th?',
    options: ['Quadruple dot', 'Single dot', 'No dot', 'Circle'],
    correctAnswer: 'Quadruple dot',
    explanation: 'Incremental count.'
  },
  {
    id: 'lsy-99',
    text: 'Pattern: 1st: Open bracket, 2nd: Half closed, 3rd: Closed. What is 4th?',
    options: ['Locked bracket', 'Open bracket', 'No bracket', 'Broken bracket'],
    correctAnswer: 'Locked bracket',
    explanation: 'Progression of state.'
  },
  {
    id: 'lsy-100',
    text: 'Final Symbol Check: 1st: Cross, 2nd: Cross in circle, 3rd: Cross in circle in square. What is 4th?',
    options: ['Cross in circle in square in triangle', 'Circle', 'Square', 'Cross'],
    correctAnswer: 'Cross in circle in square in triangle',
    explanation: 'Incremental nesting.'
  }
];
