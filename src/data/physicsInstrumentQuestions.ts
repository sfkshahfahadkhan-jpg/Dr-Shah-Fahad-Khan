import { Question } from '../types';

export const PHYSICS_INSTRUMENT_QUIZ: Question[] = [
  {
    id: 'ph-oi-1',
    text: 'The minimum distance from the eye at which an object appears distinct is called:',
    options: ['Focal length', 'Least distance of distinct vision (d)', 'Aperture', 'None'],
    correctAnswer: 'Least distance of distinct vision (d)',
    explanation: 'About 25 cm for a normal eye.'
  },
  {
    id: 'ph-oi-2',
    text: 'The least distance of distinct vision _____ with age.',
    options: ['Decreases', 'Increases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Due to weakening of ciliary muscles and loss of lens flexibility.'
  },
  {
    id: 'ph-oi-3',
    text: 'The ratio of the size of the image to the size of the object is:',
    options: ['Magnifying power', 'Linear magnification (M)', 'Resolving power', 'None'],
    correctAnswer: 'Linear magnification (M)',
    explanation: 'M = hi/ho = q/p.'
  },
  {
    id: 'ph-oi-4',
    text: 'The ratio of the angle subtended by the image to the angle subtended by the object at the unaided eye is:',
    options: ['Linear magnification', 'Angular magnification / Magnifying power (M)', 'Resolution', 'None'],
    correctAnswer: 'Angular magnification / Magnifying power (M)',
    explanation: 'M = β/α.'
  },
  {
    id: 'ph-oi-5',
    text: 'A simple microscope consists of a single _____ lens.',
    options: ['Concave', 'Convex', 'Cylindrical', 'None'],
    correctAnswer: 'Convex',
    explanation: 'Also known as a magnifying glass.'
  },
  {
    id: 'ph-oi-6',
    text: 'The magnifying power of a simple microscope is given by M =:',
    options: ['d/f', '1 + d/f', 'f/d', 'None'],
    correctAnswer: '1 + d/f',
    explanation: 'When the image is formed at the least distance of distinct vision.'
  },
  {
    id: 'ph-oi-7',
    text: 'To get a larger magnification with a simple microscope, the focal length f should be:',
    options: ['Large', 'Small', 'Zero', 'None'],
    correctAnswer: 'Small',
    explanation: 'M is inversely proportional to f.'
  },
  {
    id: 'ph-oi-8',
    text: 'A compound microscope consists of two convex lenses called _____ and _____.',
    options: ['Primary, Secondary', 'Objective, Eyepiece', 'Concave, Convex', 'None'],
    correctAnswer: 'Objective, Eyepiece',
    explanation: 'Objective has small focal length; eyepiece has larger.'
  },
  {
    id: 'ph-oi-9',
    text: 'The final image formed by a compound microscope is _____ and _____ relative to the object.',
    options: ['Real, Erect', 'Virtual, Inverted', 'Virtual, Erect', 'None'],
    correctAnswer: 'Virtual, Inverted',
    explanation: 'Inverted with respect to original object.'
  },
  {
    id: 'ph-oi-10',
    text: 'The magnifying power of a compound microscope is approximately M =:',
    options: ['(L/f_o) * (d/f_e)', '(L/f_o) * (1 + d/f_e)', 'f_e/f_o', 'None'],
    correctAnswer: '(L/f_o) * (1 + d/f_e)',
    explanation: 'Product of linear magnification of objective and angular magnification of eyepiece.'
  },
  {
    id: 'ph-oi-11',
    text: 'An astronomical telescope is used to see _____ objects.',
    options: ['Small', 'Distant (heavenly bodies)', 'Microscopic', 'None'],
    correctAnswer: 'Distant (heavenly bodies)',
    explanation: 'Produces a virtual and inverted image.'
  },
  {
    id: 'ph-oi-12',
    text: 'An astronomical telescope in normal adjustment has its final image at:',
    options: ['Least distance (d)', 'Infinity', 'Focus', 'None'],
    correctAnswer: 'Infinity',
    explanation: 'Relaxes the eye.'
  },
  {
    id: 'ph-oi-13',
    text: 'The magnifying power of an astronomical telescope in normal adjustment is M =:',
    options: ['f_o / f_e', 'f_e / f_o', 'f_o * f_e', 'None'],
    correctAnswer: 'f_o / f_e',
    explanation: 'Objective should have large f_o; eyepiece should have small f_e.'
  },
  {
    id: 'ph-oi-14',
    text: 'The length of an astronomical telescope in normal adjustment is L =:',
    options: ['f_o - f_e', 'f_o + f_e', 'f_o * f_e', 'None'],
    correctAnswer: 'f_o + f_e',
    explanation: 'Distance between the two lenses.'
  },
  {
    id: 'ph-oi-15',
    text: 'A terrestrial telescope uses an extra _____ lens to make the final image erect.',
    options: ['Converging', 'Diverging', 'Inverting/Erecting', 'None'],
    correctAnswer: 'Inverting/Erecting',
    explanation: 'Makes it suitable for seeing objects on Earth.'
  },
  {
    id: 'ph-oi-16',
    text: 'The spectrometer is an instrument used to study _____ and measure _____.',
    options: ['Light intensity, Mass', 'Spectra, Refractive index / Angles', 'Stars, Distance', 'None'],
    correctAnswer: 'Spectra, Refractive index / Angles',
    explanation: 'Consists of collimator, turntable, and telescope.'
  },
  {
    id: 'ph-oi-17',
    text: 'Which part of the spectrometer makes the light rays parallel?',
    options: ['Telescope', 'Turntable', 'Collimator', 'Slit'],
    correctAnswer: 'Collimator',
    explanation: 'Has a slit at the focus of a convex lens.'
  },
  {
    id: 'ph-oi-18',
    text: 'Michelson measured the speed of light using a _____ mirror.',
    options: ['Flat', 'Eight-sided rotating', 'Concave', 'None'],
    correctAnswer: 'Eight-sided rotating',
    explanation: 'Timed the light reflecting over a long distance.'
  },
  {
    id: 'ph-oi-19',
    text: 'The current accepted value for the speed of light in vacuum (c) is:',
    options: ['2.9979 x 10^8 m/s', '3.0 x 10^8 m/s', 'Both are accepted', 'None'],
    correctAnswer: 'Both are accepted',
    explanation: '3.0 is a common approximation.'
  },
  {
    id: 'ph-oi-20',
    text: 'Optical fibers work on the principle of:',
    options: ['Total Internal Reflection (TIR)', 'Refraction', 'Diffraction', 'None'],
    correctAnswer: 'Total Internal Reflection (TIR)',
    explanation: 'Light is trapped inside the core.'
  },
  {
    id: 'ph-oi-21',
    text: 'The refractive index of the core of an optical fiber is _____ than that of the cladding.',
    options: ['Lower', 'Higher', 'Same', 'None'],
    correctAnswer: 'Higher',
    explanation: 'Condition for TIR (light traveling from denser to rarer medium).'
  },
  {
    id: 'ph-oi-22',
    text: 'Which type of optical fiber has a core diameter of 5-10 μm and only one path for light?',
    options: ['Single-mode step index', 'Multi-mode step index', 'Graded index', 'None'],
    correctAnswer: 'Single-mode step index',
    explanation: 'Used for long-distance communication.'
  },
  {
    id: 'ph-oi-23',
    text: 'Which type of optical fiber has a core refractive index that varies continuously?',
    options: ['Single-mode step index', 'Multi-mode step index', 'Multi-mode graded index', 'None'],
    correctAnswer: 'Multi-mode graded index',
    explanation: 'Reduces dispersion (spreading of signal).'
  },
  {
    id: 'ph-oi-24',
    text: 'Signal loss in optical fibers is primarily due to _____ and _____.',
    options: ['Reflection, Refraction', 'Scattering, Absorption', 'Heat, Sound', 'None'],
    correctAnswer: 'Scattering, Absorption',
    explanation: 'Limits the distance a signal can travel without amplification.'
  },
  {
    id: 'ph-oi-25',
    text: 'A "Light pipe" is a bundle of flexible _____ used to transmit images.',
    options: ['Copper wires', 'Optical fibers', 'Rubber tubes', 'None'],
    correctAnswer: 'Optical fibers',
    explanation: 'Used in medical endoscopes.'
  },
  {
    id: 'ph-oi-26',
    text: 'The power of a lens is measured in:',
    options: ['Watts', 'Dioptres (D)', 'Metres', 'None'],
    correctAnswer: 'Dioptres (D)',
    explanation: 'P = 1/f (f in metres).'
  },
  {
    id: 'ph-oi-27',
    text: 'A convex lens of focal length 10 cm has a power of:',
    options: ['0.1 D', '10 D', '100 D', 'None'],
    correctAnswer: '10 D',
    explanation: 'P = 1 / 0.1 = 10 D.'
  },
  {
    id: 'ph-oi-28',
    text: 'The ability of an optical instrument to distinguish between two close points is its:',
    options: ['Magnifying power', 'Resolving power', 'Resolution', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Determined by wavelength and aperture.'
  },
  {
    id: 'ph-oi-29',
    text: 'Resolving power of a telescope is R =:',
    options: ['D / (1.22 λ)', '1.22 λ / D', 'f / D', 'None'],
    correctAnswer: 'D / (1.22 λ)',
    explanation: 'D is diameter of objective.'
  },
  {
    id: 'ph-oi-30',
    text: 'For better resolution, we should use light of _____ wavelength.',
    options: ['Longer', 'Shorter', 'Any', 'None'],
    correctAnswer: 'Shorter',
    explanation: 'Blue light gives better resolution than red light.'
  },
  {
    id: 'ph-oi-31',
    text: 'The magnification of a simple microscope can be increased by using a lens of:',
    options: ['Large focal length', 'Small focal length', 'Large aperture', 'None'],
    correctAnswer: 'Small focal length',
    explanation: 'M = 1 + d/f.'
  },
  {
    id: 'ph-oi-32',
    text: 'If a compound microscope has objective magnification 10x and eyepiece magnification 20x, the total magnification is:',
    options: ['30x', '200x', '10x', 'None'],
    correctAnswer: '200x',
    explanation: 'M_total = M_o * M_e.'
  },
  {
    id: 'ph-oi-33',
    text: 'In an astronomical telescope, the _____ lens forms a real, diminished, inverted image of the distant object.',
    options: ['Objective', 'Eyepiece', 'Field', 'None'],
    correctAnswer: 'Objective',
    explanation: 'Intermediate image.'
  },
  {
    id: 'ph-oi-34',
    text: 'Galilean telescope uses a _____ lens as an eyepiece to get an erect image.',
    options: ['Convex', 'Concave', 'Planar', 'None'],
    correctAnswer: 'Concave',
    explanation: 'Shorter and simpler but smaller field of view.'
  },
  {
    id: 'ph-oi-35',
    text: 'The "Critical Angle" for glass-air interface is about:',
    options: ['30°', '42°', '49°', 'None'],
    correctAnswer: '42°',
    explanation: 'Determined by n = 1.5.'
  },
  {
    id: 'ph-oi-36',
    text: 'The phenomenon of "Dispersion" in optical fibers causes _____ of the light pulse.',
    options: ['Color change', 'Broadening / Spreading', 'Absorption', 'None'],
    correctAnswer: 'Broadening / Spreading',
    explanation: 'Limits data rate.'
  },
  {
    id: 'ph-oi-37',
    text: 'Which is NOT a reason for signal loss in fiber optics?',
    options: ['Impurity absorption', 'Rayleigh scattering', 'Refraction at core-cladding boundary', 'None'],
    correctAnswer: 'Refraction at core-cladding boundary',
    explanation: 'TIR prevents refraction out of the core.'
  },
  {
    id: 'ph-oi-38',
    text: 'A magnifying glass forms a _____ and _____ image when the object is within the focal length.',
    options: ['Real, Inverted', 'Virtual, Erect', 'Real, Erect', 'None'],
    correctAnswer: 'Virtual, Erect',
    explanation: 'Magnified image.'
  },
  {
    id: 'ph-oi-39',
    text: 'The eyepiece of a microscope acts like a:',
    options: ['Compound lens', 'Simple microscope (magnifying glass)', 'Prism', 'None'],
    correctAnswer: 'Simple microscope (magnifying glass)',
    explanation: 'Magnifies the real image formed by objective.'
  },
  {
    id: 'ph-oi-40',
    text: 'For a compound microscope, the object is placed _____ the focus of the objective lens.',
    options: ['Inside', 'Just outside', 'At infinity', 'None'],
    correctAnswer: 'Just outside',
    explanation: 'To form a real, magnified intermediate image.'
  },
  {
    id: 'ph-oi-41',
    text: 'If f_o = 100 cm and f_e = 5 cm for a telescope, its magnifying power in normal adjustment is:',
    options: ['20', '500', '105', 'None'],
    correctAnswer: '20',
    explanation: 'M = f_o / f_e = 100 / 5 = 20.'
  },
  {
    id: 'ph-oi-42',
    text: 'If f_o = 100 cm and f_e = 5 cm for a telescope, its length in normal adjustment is:',
    options: ['95 cm', '105 cm', '20 cm', 'None'],
    correctAnswer: '105 cm',
    explanation: 'L = f_o + f_e = 105 cm.'
  },
  {
    id: 'ph-oi-43',
    text: 'A terrestrial telescope has a length L = _____ (where f_i is focal length of inverting lens).',
    options: ['f_o + f_e', 'f_o + f_e + 4f_i', 'f_o + f_e + 2f_i', 'None'],
    correctAnswer: 'f_o + f_e + 4f_i',
    explanation: 'The inverting lens is placed at 2f_i from intermediate image.'
  },
  {
    id: 'ph-oi-44',
    text: 'Spectrometer: The Turntable is used to hold the _____ or _____.',
    options: ['Lens, Eyepiece', 'Prism, Diffraction grating', 'Source, Screen', 'None'],
    correctAnswer: 'Prism, Diffraction grating',
    explanation: 'Can be rotated to measure angles.'
  },
  {
    id: 'ph-oi-45',
    text: 'The angular scale of a spectrometer usually has a _____ for precise reading.',
    options: ['Magnifier', 'Vernier scale', 'Laser', 'None'],
    correctAnswer: 'Vernier scale',
    explanation: 'Enables measurement of small fractions of a degree.'
  },
  {
    id: 'ph-oi-46',
    text: 'The "Endoscope" used to see inside the human body is an application of:',
    options: ['Fiber optics', 'X-rays', 'MRI', 'None'],
    correctAnswer: 'Fiber optics',
    explanation: 'Flexible and non-invasive.'
  },
  {
    id: 'ph-oi-47',
    text: 'Optical fibers can carry _____ information than copper wires.',
    options: ['Less', 'More (wider bandwidth)', 'Equal', 'None'],
    correctAnswer: 'More (wider bandwidth)',
    explanation: 'Higher frequency of light allows for more data.'
  },
  {
    id: 'ph-oi-48',
    text: 'Multi-mode step index fibers have _____ dispersion than graded index fibers.',
    options: ['Less', 'More', 'Same', 'None'],
    correctAnswer: 'More',
    explanation: 'Different paths have different lengths.'
  },
  {
    id: 'ph-oi-49',
    text: 'A "Cladding" in optical fiber serves to:',
    options: ['Protect the fiber', 'Provide condition for TIR', 'Add weight', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Essential for guidance and protection.'
  },
  {
    id: 'ph-oi-50',
    text: 'The resolving power of a microscope depends on the _____ of the objective.',
    options: ['Numerical aperture', 'Wavelength', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'R.P ∝ 1/Δx = 2n sinθ / λ.'
  },
  {
    id: 'ph-oi-51',
    text: 'The focal length of a concave lens is _____ and for convex lens is _____.',
    options: ['Positive, Negative', 'Negative, Positive', 'Both positive', 'None'],
    correctAnswer: 'Negative, Positive',
    explanation: 'Standard sign convention.'
  },
  {
    id: 'ph-oi-52',
    text: 'A person with "Myopia" (Nearsightedness) cannot see _____ objects clearly and uses _____ lens.',
    options: ['Near, Convex', 'Distant, Concave', 'Near, Concave', 'Distant, Convex'],
    correctAnswer: 'Distant, Concave',
    explanation: 'Concave lens diverges rays to focus on retina.'
  },
  {
    id: 'ph-oi-53',
    text: 'A person with "Hyperopia" (Farsightedness) cannot see _____ objects clearly and uses _____ lens.',
    options: ['Distant, Concave', 'Near, Convex', 'Distant, Convex', 'None'],
    correctAnswer: 'Near, Convex',
    explanation: 'Convex lens provides extra convergence.'
  },
  {
    id: 'ph-oi-54',
    text: 'The "Eye" is similar to a camera, with the _____ acting as the film/sensor.',
    options: ['Lens', 'Cornea', 'Retina', 'Pupil'],
    correctAnswer: 'Retina',
    explanation: 'Contains light-sensitive cells.'
  },
  {
    id: 'ph-oi-55',
    text: 'The "Aperture" of the eye is adjusted by the _____ which controls the _____ size.',
    options: ['Retina, Lens', 'Iris, Pupil', 'Lens, Iris', 'None'],
    correctAnswer: 'Iris, Pupil',
    explanation: 'Regulates amount of light entering.'
  },
  {
    id: 'ph-oi-56',
    text: 'Chromatic aberration in lenses is caused by the _____ of different colors.',
    options: ['Absorption', 'Different focal lengths / Dispersion', 'Reflection', 'None'],
    correctAnswer: 'Different focal lengths / Dispersion',
    explanation: 'Lens acts like a prism.'
  },
  {
    id: 'ph-oi-57',
    text: 'Spherical aberration is caused by the _____ shape of the lens.',
    options: ['Circular', 'Non-ideal / Spherical', 'Flat', 'None'],
    correctAnswer: 'Non-ideal / Spherical',
    explanation: 'Paraxial and marginal rays focus at different points.'
  },
  {
    id: 'ph-oi-58',
    text: 'Chromatic aberration can be corrected using an _____ doublet (combination of two lenses).',
    options: ['Isostatic', 'Achromatic', 'Monochromatic', 'None'],
    correctAnswer: 'Achromatic',
    explanation: 'Uses crown and flint glass lenses.'
  },
  {
    id: 'ph-oi-59',
    text: 'Which lens is used by a watchmaker to see tiny parts?',
    options: ['Compound microscope', 'Simple microscope (Magnifying glass)', 'Telescope', 'None'],
    correctAnswer: 'Simple microscope (Magnifying glass)',
    explanation: 'Convenient for small magnification.'
  },
  {
    id: 'ph-oi-60',
    text: 'For a simple microscope, the magnifying power at normal adjustment (image at infinity) is:',
    options: ['d/f', '1 + d/f', 'f/d', 'None'],
    correctAnswer: 'd/f',
    explanation: 'Slightly less than the maximum magnification.'
  },
  {
    id: 'ph-oi-61',
    text: 'In Michelson\'s experiment, if the mirror rotates at frequency f, the time for 1/8 rotation is:',
    options: ['f/8', '1/(8f)', '8f', 'None'],
    correctAnswer: '1/(8f)',
    explanation: 'Time = Angle / Angular speed = (2π/8) / (2πf) = 1/8f.'
  },
  {
    id: 'ph-oi-62',
    text: 'The speed of light c was measured by Michelson as c = _____ (where D is distance between stations).',
    options: ['8Df', '16Df', 'Df', 'None'],
    correctAnswer: '16Df',
    explanation: 'Total path was 2D. c = 2D / (1/8f) = 16Df.'
  },
  {
    id: 'ph-oi-63',
    text: 'A "Digital" signal in optical fiber consists of pulses of light representing _____ and _____.',
    options: ['Colors', 'Binary 0 and 1', 'Waves', 'None'],
    correctAnswer: 'Binary 0 and 1',
    explanation: 'High immunity to noise.'
  },
  {
    id: 'ph-oi-64',
    text: 'The process of adding signals to a carrier wave is called _____ and extracting is _____.',
    options: ['Refraction, Reflection', 'Modulation, Demodulation', 'Adding, Subtracting', 'None'],
    correctAnswer: 'Modulation, Demodulation',
    explanation: 'Essential for data transmission.'
  },
  {
    id: 'ph-oi-65',
    text: 'Which wavelength is commonly used in fiber optic communication due to low absorption?',
    options: ['Visible blue', 'Ultraviolet', 'Infrared (e.g. 1.3 μm or 1.55 μm)', 'None'],
    correctAnswer: 'Infrared (e.g. 1.3 μm or 1.55 μm)',
    explanation: 'Silicon fibers have "windows" of low loss in IR.'
  },
  {
    id: 'ph-oi-66',
    text: 'The diameter of a multi-mode fiber core is typically _____ to _____ μm.',
    options: ['1, 2', '50, 100', '1000, 2000', 'None'],
    correctAnswer: '50, 100',
    explanation: 'Much larger than single mode.'
  },
  {
    id: 'ph-oi-67',
    text: 'Optical fibers are _____ and _____ compared to copper cables.',
    options: ['Heavier, Thicker', 'Lighter, Thinner', 'Conductive, Unsafe', 'None'],
    correctAnswer: 'Lighter, Thinner',
    explanation: 'Advantages in installation and space.'
  },
  {
    id: 'ph-oi-68',
    text: 'Which is a "Biconvex" lens?',
    options: ['Bulging outward on both sides', 'Bulging inward on both sides', 'One side flat', 'None'],
    correctAnswer: 'Bulging outward on both sides',
    explanation: 'Standard converging lens.'
  },
  {
    id: 'ph-oi-69',
    text: 'Magnifying power of a compound microscope decreases if the focal length of the objective _____:',
    options: ['Decreases', 'Increases', 'Remains constant', 'None'],
    correctAnswer: 'Increases',
    explanation: 'M ∝ 1/f_o.'
  },
  {
    id: 'ph-oi-70',
    text: 'When a microscope is adjusted for a real image on a screen, the magnifying power is M =:',
    options: ['q/p', '1 + d/f', 'f_o/f_e', 'None'],
    correctAnswer: 'q/p',
    explanation: 'Linear magnification.'
  },
  {
    id: 'ph-oi-71',
    text: 'Which lens has the greatest power?',
    options: ['f = 10 cm', 'f = 20 cm', 'f = 50 cm', 'None'],
    correctAnswer: 'f = 10 cm',
    explanation: 'Smallest f means largest P.'
  },
  {
    id: 'ph-oi-72',
    text: 'A "Camera" uses a _____ lens to form a _____ image on the film.',
    options: ['Concave, Virtual', 'Convex, Real', 'Cylindrical, Blurred', 'None'],
    correctAnswer: 'Convex, Real',
    explanation: 'Image is real, inverted, and diminished.'
  },
  {
    id: 'ph-oi-73',
    text: 'The "F-number" of a camera lens relates _____ to _____.',
    options: ['Aperture, Focal length', 'Color, Speed', 'Mass, Size', 'None'],
    correctAnswer: 'Aperture, Focal length',
    explanation: 'f-number = f / D.'
  },
  {
    id: 'ph-oi-74',
    text: 'A "Small" f-number (like f/1.8) means a _____ aperture and _____ depth of field.',
    options: ['Large, Small', 'Small, Large', 'Equal, Zero', 'None'],
    correctAnswer: 'Large, Small',
    explanation: 'Allows more light but focus range is narrow.'
  },
  {
    id: 'ph-oi-75',
    text: 'Refractive index n = c/v. Since c is constant, n depends only on _____ of light in the medium.',
    options: ['Speed', 'Color (Frequency)', 'Both A and B', 'None'],
    correctAnswer: 'Both A and B',
    explanation: 'Dispersion: different colors have different speeds.'
  },
  {
    id: 'ph-oi-76',
    text: 'Which part of the eye is responsible for "Accommodation" (changing focal length)?',
    options: ['Cornea', 'Ciliary muscles', 'Retina', 'Pupil'],
    correctAnswer: 'Ciliary muscles',
    explanation: 'They compress or stretch the lens.'
  },
  {
    id: 'ph-oi-77',
    text: 'A "Compound" microscope is so called because it uses _____ to magnify.',
    options: ['Two lenses', 'Chemicals', 'Mirrors', 'None'],
    correctAnswer: 'Two lenses',
    explanation: 'Successive magnifications.'
  },
  {
    id: 'ph-oi-78',
    text: 'In normal adjustment of a microscope, the distance between objective and eyepiece is _____ than f_o + f_e.',
    options: ['Less', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'Objective forms image beyond its own focal length.'
  },
  {
    id: 'ph-oi-79',
    text: 'Angular magnification M = β/α. β is angle of image at _____ and α is angle of object at _____.',
    options: ['Eye, Eye (unaided at d)', 'Focus, Lens', 'Retina, Pupil', 'None'],
    correctAnswer: 'Eye, Eye (unaided at d)',
    explanation: 'Correct definition.'
  },
  {
    id: 'ph-oi-80',
    text: 'A person cannot read a book clearly but can see distant stars. They have:',
    options: ['Myopia', 'Hyperopia', 'Astigmatism', 'None'],
    correctAnswer: 'Hyperopia',
    explanation: 'Farsightedness.'
  },
  {
    id: 'ph-oi-81',
    text: 'Total Internal Reflection occurs when the angle of incidence is _____ than the critical angle.',
    options: ['Less', 'Greater', 'Equal', 'None'],
    correctAnswer: 'Greater',
    explanation: 'All light is reflected back.'
  },
  {
    id: 'ph-oi-82',
    text: 'A "Step index" fiber has _____ refractive index in the core.',
    options: ['Variable', 'Uniform / Constant', 'Zero', 'None'],
    correctAnswer: 'Uniform / Constant',
    explanation: 'Changes abruptly at the cladding boundary.'
  },
  {
    id: 'ph-oi-83',
    text: 'The "Acceptance Angle" is the maximum angle at which light can _____ the fiber and be guided.',
    options: ['Exit', 'Enter', 'Reflect', 'None'],
    correctAnswer: 'Enter',
    explanation: 'Defines the light-gathering capability.'
  },
  {
    id: 'ph-oi-84',
    text: 'Numerical Aperture (NA) is related to the _____ of the fiber.',
    options: ['Length', 'Light gathering power', 'Weight', 'None'],
    correctAnswer: 'Light gathering power',
    explanation: 'NA = n1 sin θ_acc.'
  },
  {
    id: 'ph-oi-85',
    text: 'Optical fiber communication is immune to _____ interference.',
    options: ['Light', 'Electromagnetic (EMI)', 'Sound', 'None'],
    correctAnswer: 'Electromagnetic (EMI)',
    explanation: 'Glass is an insulator.'
  },
  {
    id: 'ph-oi-86',
    text: 'Which is used as a light source for fiber optics?',
    options: ['Bulb', 'Laser / LED', 'Sun', 'None'],
    correctAnswer: 'Laser / LED',
    explanation: 'Small size and high speed switching.'
  },
  {
    id: 'ph-oi-87',
    text: 'A "Photodiode" or "Phototransistor" is used at the _____ end of a fiber optic link.',
    options: ['Transmitting', 'Receiving', 'Middle', 'None'],
    correctAnswer: 'Receiving',
    explanation: 'Converts light back to electrical signal.'
  },
  {
    id: 'ph-oi-88',
    text: 'Attenuation in optical fiber is usually measured in:',
    options: ['Dioptres', 'Decibels per km (dB/km)', 'Watts', 'None'],
    correctAnswer: 'Decibels per km (dB/km)',
    explanation: 'Logarithmic scale of power loss.'
  },
  {
    id: 'ph-oi-89',
    text: 'The most abundant element used in making optical fibers is:',
    options: ['Carbon', 'Silicon (as SiO2)', 'Aluminum', 'None'],
    correctAnswer: 'Silicon (as SiO2)',
    explanation: 'Very pure glass (silica).'
  },
  {
    id: 'ph-oi-90',
    text: 'A "Virtual" image _____ be taken on a screen.',
    options: ['Can', 'Cannot', 'Sometimes can', 'None'],
    correctAnswer: 'Cannot',
    explanation: 'Rays appear to diverge from a point.'
  },
  {
    id: 'ph-oi-91',
    text: 'The focal length of a plane mirror is:',
    options: ['Zero', 'Infinite', '1 m', 'None'],
    correctAnswer: 'Infinite',
    explanation: 'It has no curvature.'
  },
  {
    id: 'ph-oi-92',
    text: 'Which mirror is used in cars as a "Rear-view" mirror to see a wide area?',
    options: ['Plane', 'Concave', 'Convex', 'None'],
    correctAnswer: 'Convex',
    explanation: 'Always forms diminished, erect, virtual images with wide field of view.'
  },
  {
    id: 'ph-oi-93',
    text: 'Which mirror is used by dentists to see enlarged images of teeth?',
    options: ['Plane', 'Concave', 'Convex', 'None'],
    correctAnswer: 'Concave',
    explanation: 'Object is placed within focal length.'
  },
  {
    id: 'ph-oi-94',
    text: 'In an astronomical telescope, the size of the intermediate image is _____ than the object.',
    options: ['Larger', 'Much smaller', 'Equal', 'None'],
    correctAnswer: 'Much smaller',
    explanation: 'Because objects are at huge distances.'
  },
  {
    id: 'ph-oi-95',
    text: 'The magnifying power of an astronomical telescope for a near object (not at infinity) is _____ than f_o/f_e.',
    options: ['More', 'Less', 'Equal', 'None'],
    correctAnswer: 'Less',
    explanation: 'Calculated using q_o and q_e.'
  },
  {
    id: 'ph-oi-96',
    text: 'The objective of an astronomical telescope has a _____ aperture to gather more light.',
    options: ['Small', 'Large', 'Zero', 'None'],
    correctAnswer: 'Large',
    explanation: 'Necessary for seeing faint stars.'
  },
  {
    id: 'ph-oi-97',
    text: 'Reflecting telescopes use a _____ instead of a lens as an objective.',
    options: ['Prism', 'Parabolic mirror', 'Flat glass', 'None'],
    correctAnswer: 'Parabolic mirror',
    explanation: 'Eliminates chromatic aberration and supports large sizes.'
  },
  {
    id: 'ph-oi-98',
    text: 'The "Newtonian" telescope is a type of _____ telescope.',
    options: ['Refracting', 'Reflecting', 'Terrestrial', 'None'],
    correctAnswer: 'Reflecting',
    explanation: 'Uses a flat secondary mirror.'
  },
  {
    id: 'ph-oi-99',
    text: 'Cassegrain telescope is a type of reflecting telescope that uses a _____ secondary mirror.',
    options: ['Concave', 'Convex', 'Plane', 'None'],
    correctAnswer: 'Convex',
    explanation: 'Very compact design.'
  },
  {
    id: 'ph-oi-100',
    text: 'Optical instruments have revolutionized our understanding of the _____ (microbiology) and the _____ (astronomy).',
    options: ['Small, Large', 'Hot, Cold', 'Near, Far', 'None'],
    correctAnswer: 'Small, Large',
    explanation: 'From atoms to galaxies.'
  }
];
