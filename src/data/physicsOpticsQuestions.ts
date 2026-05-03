import { Question } from '../types';

export const PHYSICS_OPTICS_QUIZ: Question[] = [
  {
    id: 'ph-po-1',
    text: 'According to the wave theory of light, light is a/an:',
    options: ['Electromagnetic wave', 'Mechanical wave', 'Longitudinal wave', 'None'],
    correctAnswer: 'Electromagnetic wave',
    explanation: 'Proposed by Maxwell and confirmed by Hertz.'
  },
  {
    id: 'ph-po-2',
    text: 'The locus of all points in a medium having the same phase of vibration is called a:',
    options: ['Streamline', 'Wavefront', 'Ray', 'None'],
    correctAnswer: 'Wavefront',
    explanation: 'Can be spherical or plane depending on distance from source.'
  },
  {
    id: 'ph-po-3',
    text: 'A point source of light at a finite distance produces _____ wavefronts.',
    options: ['Plane', 'Spherical', 'Cylindrical', 'None'],
    correctAnswer: 'Spherical',
    explanation: 'Spreads out in all directions.'
  },
  {
    id: 'ph-po-4',
    text: 'Wavefronts from a source at infinite distance (like Sun) are approximately:',
    options: ['Spherical', 'Plane', 'Point-like', 'None'],
    correctAnswer: 'Plane',
    explanation: 'Curvature becomes negligible at large distances.'
  },
  {
    id: 'ph-po-5',
    text: 'Huygens\' Principle states that every point on a wavefront acts as a source of:',
    options: ['Primary waves', 'Secondary wavelets', 'Electrons', 'None'],
    correctAnswer: 'Secondary wavelets',
    explanation: 'Explains the propagation of light.'
  },
  {
    id: 'ph-po-6',
    text: 'The phenomenon of redistribution of light energy due to superposition of two coherent waves is:',
    options: ['Diffraction', 'Interference', 'Polarization', 'None'],
    correctAnswer: 'Interference',
    explanation: 'Produces maxima and minima.'
  },
  {
    id: 'ph-po-7',
    text: 'Two sources are said to be coherent if they emit light of same _____ and constant _____.',
    options: ['Intensity, Speed', 'Wavelength, Phase difference', 'Color, Intensity', 'None'],
    correctAnswer: 'Wavelength, Phase difference',
    explanation: 'Necessary condition for stable interference.'
  },
  {
    id: 'ph-po-8',
    text: 'Constructive interference occurs when the path difference between two waves is:',
    options: ['Odd multiple of λ/2', 'Integral multiple of λ (nλ)', 'Exactly λ/4', 'None'],
    correctAnswer: 'Integral multiple of λ (nλ)',
    explanation: 'Waves arrive in phase.'
  },
  {
    id: 'ph-po-9',
    text: 'Destructive interference occurs when the path difference between two waves is:',
    options: ['nλ', '(n + 1/2)λ', '2nλ', 'None'],
    correctAnswer: '(n + 1/2)λ',
    explanation: 'Waves arrive out of phase (180°).'
  },
  {
    id: 'ph-po-10',
    text: 'In Young\'s Double Slit Experiment (YDSE), the distance between adjacent bright or dark fringes is called:',
    options: ['Fringe width / Fringe spacing', 'Wavelength', 'Amplitude', 'None'],
    correctAnswer: 'Fringe width / Fringe spacing',
    explanation: 'Δy = λL/d.'
  },
  {
    id: 'ph-po-11',
    text: 'Fringe spacing in YDSE is directly proportional to:',
    options: ['Wavelength (λ)', 'Distance between slits (d)', 'Source intensity', 'None'],
    correctAnswer: 'Wavelength (λ)',
    explanation: 'Δy = λL/d; Red light has larger spacing than blue.'
  },
  {
    id: 'ph-po-12',
    text: 'Fringe spacing in YDSE is inversely proportional to:',
    options: ['Wavelength', 'Distance between slits (d)', 'Distance to screen (L)', 'None'],
    correctAnswer: 'Distance between slits (d)',
    explanation: 'Closing the slits increases the spacing.'
  },
  {
    id: 'ph-po-13',
    text: 'If the entire YDSE apparatus is immersed in water, the fringe width will:',
    options: ['Increase', 'Decrease', 'Stay same', 'None'],
    correctAnswer: 'Decrease',
    explanation: 'Wavelength decreases in a denser medium (λn = λ/n).'
  },
  {
    id: 'ph-po-14',
    text: 'The colors seen on a thin oil film on water or a soap bubble are due to:',
    options: ['Refraction', 'Dispersion', 'Interference in thin films', 'None'],
    correctAnswer: 'Interference in thin films',
    explanation: 'Light reflects from both upper and lower surfaces.'
  },
  {
    id: 'ph-po-15',
    text: 'Newton\'s Rings are formed due to interference of light in the air film between a _____ and a _____.',
    options: ['Lens, Prism', 'Plano-convex lens, Glass plate', 'Two mirrors', 'None'],
    correctAnswer: 'Plano-convex lens, Glass plate',
    explanation: 'Produce circular fringes.'
  },
  {
    id: 'ph-po-16',
    text: 'The central spot in Newton\'s rings observed by reflected light is always:',
    options: ['Bright', 'Dark', 'Colored', 'None'],
    correctAnswer: 'Dark',
    explanation: 'Due to phase change of π (180°) on reflection from the glass plate.'
  },
  {
    id: 'ph-po-17',
    text: 'Michelson Interferometer is used to measure _____ with very high precision.',
    options: ['Mass', 'Wavelength of light / Small distances', 'Time', 'None'],
    correctAnswer: 'Wavelength of light / Small distances',
    explanation: 'Uses a beam splitter and two mirrors.'
  },
  {
    id: 'ph-po-18',
    text: 'The bending of light around the corners of an obstacle or opening is called:',
    options: ['Refraction', 'Diffraction', 'Reflection', 'None'],
    correctAnswer: 'Diffraction',
    explanation: 'Significant when the size of obstacle is comparable to λ.'
  },
  {
    id: 'ph-po-19',
    text: 'Diffraction is a result of _____ of secondary wavelets.',
    options: ['Reflection', 'Interference', 'Refraction', 'None'],
    correctAnswer: 'Interference',
    explanation: 'Multiple wavelets from the same wavefront interfere.'
  },
  {
    id: 'ph-po-20',
    text: 'A glass plate with a large number of close, parallel, equally spaced rulings is a:',
    options: ['Prism', 'Diffraction Grating', 'Convex lens', 'None'],
    correctAnswer: 'Diffraction Grating',
    explanation: 'Used to study spectra.'
  },
  {
    id: 'ph-po-21',
    text: 'Grating element (d) is equal to:',
    options: ['Length of rulings', 'L / N (where N is number of lines)', 'λ', 'None'],
    correctAnswer: 'L / N (where N is number of lines)',
    explanation: 'Distance between two adjacent lines.'
  },
  {
    id: 'ph-po-22',
    text: 'The condition for maxima in a diffraction grating is:',
    options: ['d sinθ = nλ', 'd cosθ = nλ', 'd tanθ = nλ', 'None'],
    correctAnswer: 'd sinθ = nλ',
    explanation: 'Grating equation.'
  },
  {
    id: 'ph-po-23',
    text: 'X-rays can be diffracted by crystals because the _____ is comparable to X-ray wavelength.',
    options: ['Atomic size', 'Interplanar spacing (d)', 'Crystal mass', 'None'],
    correctAnswer: 'Interplanar spacing (d)',
    explanation: 'Crystal acts as a natural 3D grating.'
  },
  {
    id: 'ph-po-24',
    text: 'Bragg\'s Law for X-ray diffraction is:',
    options: ['d sinθ = nλ', '2d sinθ = nλ', 'd tanθ = λ', 'None'],
    correctAnswer: '2d sinθ = nλ',
    explanation: 'Essential for determining crystal structures.'
  },
  {
    id: 'ph-po-25',
    text: 'The process of confining the vibrations of light to a single plane is called:',
    options: ['Diffraction', 'Interference', 'Polarization', 'Refraction'],
    correctAnswer: 'Polarization',
    explanation: 'Proves that light is a transverse wave.'
  },
  {
    id: 'ph-po-26',
    text: 'Only _____ waves can be polarized.',
    options: ['Longitudinal', 'Transverse', 'Sound', 'None'],
    correctAnswer: 'Transverse',
    explanation: 'Longitudinal waves (like sound) vibrate along direction of propagation.'
  },
  {
    id: 'ph-po-27',
    text: 'A device that polarizes light is called a:',
    options: ['Polaroid / Polarizer', 'Diffractor', 'Refractor', 'None'],
    correctAnswer: 'Polaroid / Polarizer',
    explanation: 'Uses selective absorption.'
  },
  {
    id: 'ph-po-28',
    text: 'Sunlight reflected from a water surface is _____ polarized.',
    options: ['Fully', 'Partially', 'Not', 'None'],
    correctAnswer: 'Partially',
    explanation: 'Often horizontal polarization.'
  },
  {
    id: 'ph-po-29',
    text: 'Brewster\'s Law: Light is completely polarized when reflected at an angle θp such that tan θp =:',
    options: ['λ', 'n (refractive index)', '1/n', 'None'],
    correctAnswer: 'n (refractive index)',
    explanation: 'Called the Brewster angle.'
  },
  {
    id: 'ph-po-30',
    text: 'Optical active substances are those that can _____ the plane of polarized light.',
    options: ['Absorb', 'Rotate', 'Reflect', 'None'],
    correctAnswer: 'Rotate',
    explanation: 'e.g. Sugar solution, Tartaric acid.'
  },
  {
    id: 'ph-po-31',
    text: 'The dual nature of light refers to it acting as both _____ and _____.',
    options: ['Solid, Liquid', 'Wave, Particle', 'Mass, Energy', 'None'],
    correctAnswer: 'Wave, Particle',
    explanation: 'Interference/Diffraction prove wave nature; Photoelectric effect proves particle nature.'
  },
  {
    id: 'ph-po-32',
    text: 'Which phenomenon is NOT explained by the wave theory of light?',
    options: ['Interference', 'Diffraction', 'Photoelectric effect', 'Polarization'],
    correctAnswer: 'Photoelectric effect',
    explanation: 'Requires photon (particle) concept.'
  },
  {
    id: 'ph-po-33',
    text: 'Light from a sodium lamp is _____ light.',
    options: ['White', 'Monochromatic (one color)', 'Coherent', 'None'],
    correctAnswer: 'Monochromatic (one color)',
    explanation: 'Emits primarily two very close yellow wavelengths.'
  },
  {
    id: 'ph-po-34',
    text: 'Laser light is highly _____ and _____.',
    options: ['Monochromatic, Coherent', 'Polychromatic, Incoherent', 'Fast, Hot', 'None'],
    correctAnswer: 'Monochromatic, Coherent',
    explanation: 'Essential for holography and precision work.'
  },
  {
    id: 'ph-po-35',
    text: 'The speed of light in vacuum is approximately:',
    options: ['3 x 10^6 m/s', '3 x 10^8 m/s', '3 x 10^10 m/s', 'None'],
    correctAnswer: '3 x 10^8 m/s',
    explanation: 'Universal constant c.'
  },
  {
    id: 'ph-po-36',
    text: 'Which color has the longest wavelength in visible spectrum?',
    options: ['Violet', 'Green', 'Yellow', 'Red'],
    correctAnswer: 'Red',
    explanation: 'About 700 nm.'
  },
  {
    id: 'ph-po-37',
    text: 'Which color has the shortest wavelength in visible spectrum?',
    options: ['Red', 'Yellow', 'Blue', 'Violet'],
    correctAnswer: 'Violet',
    explanation: 'About 400 nm.'
  },
  {
    id: 'ph-po-38',
    text: 'Energy of a photon is given by E =:',
    options: ['mc^2', 'hf', '1/2 mv^2', 'None'],
    correctAnswer: 'hf',
    explanation: 'Proportional to frequency.'
  },
  {
    id: 'ph-po-39',
    text: 'The resolution of an optical instrument is its ability to _____ two close objects.',
    options: ['Magnify', 'Distinguish / Resolve', 'Color', 'None'],
    correctAnswer: 'Distinguish / Resolve',
    explanation: 'Limited by diffraction.'
  },
  {
    id: 'ph-po-40',
    text: 'Rayleigh Criterion: Two objects are just resolved if the central maximum of one falls on the _____ of the other.',
    options: ['Central maximum', 'First minimum', 'Secondary maximum', 'None'],
    correctAnswer: 'First minimum',
    explanation: 'Standard for resolving power.'
  },
  {
    id: 'ph-po-41',
    text: 'Light waves are transverse because they can be:',
    options: ['Refracted', 'Diffracted', 'Polarized', 'Reflected'],
    correctAnswer: 'Polarized',
    explanation: 'Longitudinal waves cannot be polarized.'
  },
  {
    id: 'ph-po-42',
    text: 'In YDSE, if white light is used, the central fringe is:',
    options: ['Red', 'Blue', 'White', 'Black'],
    correctAnswer: 'White',
    explanation: 'All wavelengths overlap at the center.'
  },
  {
    id: 'ph-po-43',
    text: 'In YDSE, the bright fringes are called _____ and dark ones are _____.',
    options: ['Maxima, Minima', 'Minima, Maxima', 'Nodes, Antinodes', 'None'],
    correctAnswer: 'Maxima, Minima',
    explanation: 'Points of constructive and destructive interference.'
  },
  {
    id: 'ph-po-44',
    text: 'Thin film interference depends on _____ and _____ of the film.',
    options: ['Color, Size', 'Thickness, Refractive index', 'Mass, Area', 'None'],
    correctAnswer: 'Thickness, Refractive index',
    explanation: 'Determines the path difference.'
  },
  {
    id: 'ph-po-45',
    text: 'Blue color of the sky is due to:',
    options: ['Reflection', 'Refraction', 'Scattering', 'Diffraction'],
    correctAnswer: 'Scattering',
    explanation: 'Rayleigh scattering; shorter wavelengths scatter more.'
  },
  {
    id: 'ph-po-46',
    text: 'Red color of the sunset is because most blue light has been:',
    options: ['Absorbed', 'Scattered away', 'Reflected', 'None'],
    correctAnswer: 'Scattered away',
    explanation: 'Light travels through more atmosphere.'
  },
  {
    id: 'ph-po-47',
    text: 'A prism produces a spectrum due to:',
    options: ['Interference', 'Diffraction', 'Dispersion / Refraction', 'Polarization'],
    correctAnswer: 'Dispersion / Refraction',
    explanation: 'Different colors bend at different angles.'
  },
  {
    id: 'ph-po-48',
    text: 'The wavelength of visible light is in the range of:',
    options: ['1-10 nm', '400-700 nm', '1-10 mm', 'None'],
    correctAnswer: '400-700 nm',
    explanation: 'Small part of the EM spectrum.'
  },
  {
    id: 'ph-po-49',
    text: 'Diffraction of sound waves is more common than light because sound has _____ wavelength.',
    options: ['Smaller', 'Larger', 'Same', 'None'],
    correctAnswer: 'Larger',
    explanation: 'λ of sound is comparable to doors/windows.'
  },
  {
    id: 'ph-po-50',
    text: 'Holography is a technique to record _____ images.',
    options: ['2D', '3D', 'Black and white', 'None'],
    correctAnswer: '3D',
    explanation: 'Uses interference of laser light.'
  },
  {
    id: 'ph-po-51',
    text: 'The path difference for constructive interference in thin films (for normal incidence) is:',
    options: ['2nt = nλ', '2nt = (n+1/2)λ', 'nt = λ', 'None'],
    correctAnswer: '2nt = (n+1/2)λ',
    explanation: 'Considering phase change on reflection (if applicable).'
  },
  {
    id: 'ph-po-52',
    text: 'In Michelson Interferometer, moving the mirror by λ/4 shifts the fringes by:',
    options: ['1 fringe', '1/2 fringe', '2 fringes', 'None'],
    correctAnswer: '1/2 fringe',
    explanation: 'Path difference changes by 2 * λ/4 = λ/2.'
  },
  {
    id: 'ph-po-53',
    text: 'Diffraction at a single slit produces a central bright fringe that is _____ as wide as other fringes.',
    options: ['Half', 'Twice', 'Same', 'None'],
    correctAnswer: 'Twice',
    explanation: 'Important feature of single slit pattern.'
  },
  {
    id: 'ph-po-54',
    text: 'Resolving power of a telescope increases with increase in _____ of the objective lens.',
    options: ['Focal length', 'Diameter / Aperture', 'Magnification', 'None'],
    correctAnswer: 'Diameter / Aperture',
    explanation: 'Reduces diffraction effects.'
  },
  {
    id: 'ph-po-55',
    text: 'Sugar solution rotates the plane of polarization. This is called:',
    options: ['Optical activity', 'Refraction', 'Diffraction', 'None'],
    correctAnswer: 'Optical activity',
    explanation: 'Used to measure sugar concentration (Saccharimetry).'
  },
  {
    id: 'ph-po-56',
    text: 'An unpolarized light beam passing through a polarizer loses _____% of its intensity.',
    options: ['10', '50', '90', '100'],
    correctAnswer: '50',
    explanation: 'Only vibrations in one plane pass through.'
  },
  {
    id: 'ph-po-57',
    text: 'Two polarizers are crossed (90°). The intensity of light passing through the second is:',
    options: ['Max', 'Half', 'Zero', 'None'],
    correctAnswer: 'Zero',
    explanation: 'Malus\' Law: I = I0 cos^2θ.'
  },
  {
    id: 'ph-po-58',
    text: 'Which is an "EM wave" but not visible light?',
    options: ['Radio waves', 'X-rays', 'Infrared', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'EM spectrum is vast.'
  },
  {
    id: 'ph-po-59',
    text: 'The refractive index (n) of a medium is defined as n =:',
    options: ['v/c', 'c/v', 'λ/v', 'None'],
    correctAnswer: 'c/v',
    explanation: 'Ratio of speed in vacuum to speed in medium.'
  },
  {
    id: 'ph-po-60',
    text: 'Light travels fastest in:',
    options: ['Glass', 'Water', 'Vacuum', 'Diamond'],
    correctAnswer: 'Vacuum',
    explanation: 'c is the universal speed limit.'
  },
  {
    id: 'ph-po-61',
    text: 'In Bragg\'s Law, θ is the angle between X-ray and the _____ of the crystal.',
    options: ['Normal', 'Plane / Surface', 'Corner', 'None'],
    correctAnswer: 'Plane / Surface',
    explanation: 'Glancing angle.'
  },
  {
    id: 'ph-po-62',
    text: 'Maximum number of orders possible with a diffraction grating is limited because:',
    options: ['Light is weak', 'sinθ cannot exceed 1', 'Grating breaks', 'None'],
    correctAnswer: 'sinθ cannot exceed 1',
    explanation: 'nλ/d must be ≤ 1.'
  },
  {
    id: 'ph-po-63',
    text: 'Which is used as a beam splitter in Michelson interferometer?',
    options: ['Full mirror', 'Semi-silvered glass plate', 'Prism', 'None'],
    correctAnswer: 'Semi-silvered glass plate',
    explanation: 'Reflects 50% and transmits 50%.'
  },
  {
    id: 'ph-po-64',
    text: 'Interference of light from two separate light bulbs is not seen because they are:',
    options: ['Too bright', 'Not coherent', 'Different colors', 'None'],
    correctAnswer: 'Not coherent',
    explanation: 'Phase difference changes randomly and rapidly.'
  },
  {
    id: 'ph-po-65',
    text: 'A "Wave Packet" is a localized wave formed by the superposition of many waves of slightly different:',
    options: ['Speeds', 'Wavelengths / Frequencies', 'Amplitudes', 'None'],
    correctAnswer: 'Wavelengths / Frequencies',
    explanation: 'Represents a particle in quantum mechanics.'
  },
  {
    id: 'ph-po-66',
    text: 'The spacing of fringes in YDSE can be increased by _____ the distance between slits.',
    options: ['Increasing', 'Decreasing', 'Doubling', 'None'],
    correctAnswer: 'Decreasing',
    explanation: 'Δy ∝ 1/d.'
  },
  {
    id: 'ph-po-67',
    text: 'The phenomenon of polarization proves that light waves are NOT:',
    options: ['Transverse', 'Longitudinal', 'EM waves', 'None'],
    correctAnswer: 'Longitudinal',
    explanation: 'Polarization is exclusive to transverse waves.'
  },
  {
    id: 'ph-po-68',
    text: 'LCD screens work on the principle of:',
    options: ['Diffraction', 'Polarization', 'Interference', 'None'],
    correctAnswer: 'Polarization',
    explanation: 'Liquid Crystal Display.'
  },
  {
    id: 'ph-po-69',
    text: 'Anti-glare sunglasses use _____ to block horizontally polarized light.',
    options: ['Mirrors', 'Polaroids', 'Prisms', 'None'],
    correctAnswer: 'Polaroids',
    explanation: 'Reduces reflections from roads and water.'
  },
  {
    id: 'ph-po-70',
    text: 'The grating element for a grating with 500 lines per mm is:',
    options: ['500 mm', '2 x 10^-3 mm', '1 mm', 'None'],
    correctAnswer: '2 x 10^-3 mm',
    explanation: 'd = 1/N = 1/500 mm.'
  },
  {
    id: 'ph-po-71',
    text: 'Diffraction patterns are more distinct when the wavelength is _____ and the aperture is _____.',
    options: ['Large, Small', 'Small, Large', 'Large, Large', 'None'],
    correctAnswer: 'Large, Small',
    explanation: 'Maximizes θ for a given order.'
  },
  {
    id: 'ph-po-72',
    text: 'Huygens\' principle can explain:',
    options: ['Reflection', 'Refraction', 'Diffraction', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Powerful tool for wave optics.'
  },
  {
    id: 'ph-po-73',
    text: 'The phase difference corresponding to a path difference of λ/2 is:',
    options: ['π/2', 'π (180°)', '2π', 'None'],
    correctAnswer: 'π (180°)',
    explanation: 'Opposite phase.'
  },
  {
    id: 'ph-po-74',
    text: 'When light reflects from a denser medium, it undergoes a phase change of:',
    options: ['0', 'π (180°)', 'π/2', 'None'],
    correctAnswer: 'π (180°)',
    explanation: 'Equivalent to path difference of λ/2.'
  },
  {
    id: 'ph-po-75',
    text: 'Blue light is scattered more than red because scattering is _____ proportional to λ^4.',
    options: ['Directly', 'Inversely', 'Not', 'None'],
    correctAnswer: 'Inversely',
    explanation: 'Rayleigh scattering law: I ∝ 1/λ^4.'
  },
  {
    id: 'ph-po-76',
    text: 'A "Polarizer" and an "Analyzer" are used to study:',
    options: ['Diffraction', 'Polarization', 'Color', 'None'],
    correctAnswer: 'Polarization',
    explanation: 'Analyzer determines if the light is polarized.'
  },
  {
    id: 'ph-po-77',
    text: 'Which is a "Coherent" source in YDSE?',
    options: ['Two candles', 'Two lamps', 'Images of the same source', 'None'],
    correctAnswer: 'Images of the same source',
    explanation: 'Ensures constant phase relation.'
  },
  {
    id: 'ph-po-78',
    text: 'The fringe pattern in YDSE consists of _____ and _____ fringes.',
    options: ['Circular, Colored', 'Straight, Equally spaced', 'Curved, Random', 'None'],
    correctAnswer: 'Straight, Equally spaced',
    explanation: 'Hyperbolic in 3D but appear straight on screen.'
  },
  {
    id: 'ph-po-79',
    text: 'Diffraction grating can produce _____ orders of spectra.',
    options: ['Only one', 'Multiple', 'Zero', 'None'],
    correctAnswer: 'Multiple',
    explanation: 'n = 0, 1, 2... maxima.'
  },
  {
    id: 'ph-po-80',
    text: 'X-rays were discovered by:',
    options: ['Einstein', 'Roentgen', 'Newton', 'None'],
    correctAnswer: 'Roentgen',
    explanation: 'In 1895.'
  },
  {
    id: 'ph-po-81',
    text: 'The wavelength of X-rays is about:',
    options: ['1 mm', '10^-10 m (1 Angstrom)', '100 nm', 'None'],
    correctAnswer: '10^-10 m (1 Angstrom)',
    explanation: 'Comparable to interatomic distances.'
  },
  {
    id: 'ph-po-82',
    text: 'A "Zone Plate" acts as a:',
    options: ['Lens', 'Mirror', 'Prism', 'None'],
    correctAnswer: 'Lens',
    explanation: 'Uses diffraction to focus light.'
  },
  {
    id: 'ph-po-83',
    text: 'In thin film interference, if the film thickness is λ/4, the path difference (2t) is:',
    options: ['λ', 'λ/2', '2λ', 'None'],
    correctAnswer: 'λ/2',
    explanation: '2 * λ/4 = λ/2.'
  },
  {
    id: 'ph-po-84',
    text: 'The "Grating Equation" relates _____ to _____ and _____.',
    options: ['d, θ, λ', 'm, v, r', 'P, V, T', 'None'],
    correctAnswer: 'd, θ, λ',
    explanation: 'd sinθ = nλ.'
  },
  {
    id: 'ph-po-85',
    text: 'Optical fibers work on the principle of:',
    options: ['Interference', 'Total Internal Reflection', 'Diffraction', 'None'],
    correctAnswer: 'Total Internal Reflection',
    explanation: 'Transmits light over long distances.'
  },
  {
    id: 'ph-po-86',
    text: 'The "Core" of an optical fiber has _____ refractive index than the "Cladding".',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Necessary for TIR.'
  },
  {
    id: 'ph-po-87',
    text: 'Which is a "Birefringent" crystal?',
    options: ['Quartz', 'Calcite', 'Salt', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Split light into two rays (ordinary and extraordinary).'
  },
  {
    id: 'ph-po-88',
    text: 'Sugar is _____ (rotates to right) while fruit sugar is _____ (rotates to left).',
    options: ['Dextrorotatory, Laevorotatory', 'Fast, Slow', 'Bright, Dark', 'None'],
    correctAnswer: 'Dextrorotatory, Laevorotatory',
    explanation: 'Classification based on direction of rotation.'
  },
  {
    id: 'ph-po-89',
    text: 'Which phenomenon shows that light is a wave?',
    options: ['Reflection', 'Refraction', 'Interference', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'But interference/diffraction are unique to waves.'
  },
  {
    id: 'ph-po-90',
    text: 'The energy of visible light is roughly _____ eV.',
    options: ['0.1', '2-3', '100', 'None'],
    correctAnswer: '2-3',
    explanation: 'Typical photon energy.'
  },
  {
    id: 'ph-po-91',
    text: 'The phase difference between the waves from two slits at the central fringe is:',
    options: ['0', 'π', '2π', 'None'],
    correctAnswer: '0',
    explanation: 'Path difference is zero.'
  },
  {
    id: 'ph-po-92',
    text: 'The shape of fringes in YDSE near the center is almost:',
    options: ['Circular', 'Straight', 'Parabolic', 'None'],
    correctAnswer: 'Straight',
    explanation: 'Small part of hyperbolic curves.'
  },
  {
    id: 'ph-po-93',
    text: 'The fringes in Newton\'s rings get _____ as we move away from the center.',
    options: ['Farther apart', 'Closer together', 'Same spacing', 'None'],
    correctAnswer: 'Closer together',
    explanation: 'Due to curvature of the lens.'
  },
  {
    id: 'ph-po-94',
    text: 'Diffraction of X-rays by crystals was first studied by:',
    options: ['Newton', 'Bragg (Father and Son)', 'Laue', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Laue suggested it; Braggs simplified it.'
  },
  {
    id: 'ph-po-95',
    text: 'Optical instruments are designed to minimize _____ to get sharper images.',
    options: ['Color', 'Diffraction and aberrations', 'Light', 'None'],
    correctAnswer: 'Diffraction and aberrations',
    explanation: 'Limits of resolution.'
  },
  {
    id: 'ph-po-96',
    text: 'Which is a "Polarizing angle" for glass (n=1.5)?',
    options: ['45°', '56.3°', '30°', 'None'],
    correctAnswer: '56.3°',
    explanation: 'tan θp = 1.5 -> θp ≈ 56.3°.'
  },
  {
    id: 'ph-po-97',
    text: 'Polarization by _____ occurs when unpolarized light is scattered by atoms/molecules.',
    options: ['Reflection', 'Refraction', 'Scattering', 'Absorption'],
    correctAnswer: 'Scattering',
    explanation: 'Produces polarized skylight.'
  },
  {
    id: 'ph-po-98',
    text: 'The plane containing the vibrations of polarized light is the _____ of polarization.',
    options: ['Axis', 'Plane', 'Point', 'None'],
    correctAnswer: 'Plane',
    explanation: 'Usually refers to the E-field plane.'
  },
  {
    id: 'ph-po-99',
    text: 'Wave optics is also known as _____ optics.',
    options: ['Ray', 'Physical', 'Geometrical', 'None'],
    correctAnswer: 'Physical',
    explanation: 'Deals with the wave nature of light.'
  },
  {
    id: 'ph-po-100',
    text: 'The study of light has led to the development of _____ theory.',
    options: ['Classical', 'Quantum', 'Relativity', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Light is central to modern physics.'
  }
];
