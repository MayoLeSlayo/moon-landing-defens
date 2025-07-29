import { ConspiracyTheory, EvidenceResponse, Source } from '@/types';

export const sources: Source[] = [
  {
    id: 'apache-point',
    title: 'Apache Point Observatory Laser Ranging',
    url: 'https://spie.org/news/12-09-laser-ranging',
    organization: 'Apache Point Observatory',
    type: 'observatory',
    credibilityScore: 10,
    summary: 'Current laser ranging experiments using Apollo retroreflectors'
  },
  {
    id: 'nasa-lrr',
    title: 'NASA Lunar Laser Ranging Retroreflector',
    url: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-04',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Official NASA documentation of retroreflector experiments'
  },
  {
    id: 'soviet-tracking',
    title: 'Third-party Evidence for Apollo Moon Landings',
    url: 'https://en.wikipedia.org/wiki/Third-party_evidence_for_Apollo_Moon_landings',
    organization: 'Multiple International Sources',
    type: 'international',
    credibilityScore: 9,
    summary: 'Comprehensive documentation of international tracking and verification'
  },
  {
    id: 'jodrell-bank',
    title: 'Jodrell Bank Moon Landing Tracking',
    url: 'https://www.jodrellbank.net/explore/stories/the-moon-landing-and-jodrell-bank/',
    organization: 'Jodrell Bank Observatory',
    type: 'observatory',
    credibilityScore: 10,
    summary: 'UK observatory independently tracked Apollo 11 descent and landing'
  },
  {
    id: 'lunar-samples',
    title: 'NASA Lunar Sample Curator',
    url: 'https://curator.jsc.nasa.gov/lunar/',
    organization: 'NASA Johnson Space Center',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Official repository and analysis of 842 pounds of moon rocks'
  },
  {
    id: 'lro-images',
    title: 'LRO Camera Apollo Landing Sites',
    url: 'https://lroc.im-ldi.com/image_tags/Apollo',
    organization: 'NASA LRO Mission',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'High-resolution orbital photography of Apollo landing sites and equipment'
  }
];

export const conspiracyTheories: ConspiracyTheory[] = [
  {
    id: 'waving-flag',
    title: 'Waving Flag',
    claim: 'Flag appears to wave despite no atmosphere on moon',
    category: 'physics',
    commonVariations: [
      'The flag is waving in the wind',
      'There\'s no air on the moon so the flag can\'t move',
      'The flag looks like it\'s blowing in a breeze'
    ],
    tags: ['flag', 'atmosphere', 'wind', 'physics', 'vacuum']
  },
  {
    id: 'no-stars',
    title: 'No Stars in Photos',
    claim: 'Photos from moon should show stars in background',
    category: 'photography',
    commonVariations: [
      'Where are all the stars?',
      'The sky should be full of stars',
      'You can\'t see any stars in the photos'
    ],
    tags: ['stars', 'photography', 'exposure', 'brightness']
  },
  {
    id: 'van-allen-belt',
    title: 'Van Allen Radiation Belt',
    claim: 'Radiation would have killed the astronauts',
    category: 'physics',
    commonVariations: [
      'The radiation would have been deadly',
      'Van Allen belts are lethal to humans',
      'Astronauts couldn\'t survive the radiation'
    ],
    tags: ['radiation', 'van allen', 'deadly', 'physics', 'space travel']
  },
  {
    id: 'different-shadows',
    title: 'Different Shadow Directions',
    claim: 'Shadows in photos go different directions proving multiple light sources',
    category: 'photography',
    commonVariations: [
      'The shadows don\'t line up',
      'Multiple light sources in the studio',
      'Shadows going in different directions'
    ],
    tags: ['shadows', 'lighting', 'studio', 'photography', 'multiple sources']
  },
  {
    id: 'flimsy-lander',
    title: 'Flimsy Lunar Module',
    claim: 'Spacecraft looked too fragile to work in space',
    category: 'technology',
    commonVariations: [
      'The lunar module looks like it\'s made of foil',
      'Too fragile for space travel',
      'Built like a high school project'
    ],
    tags: ['lunar module', 'fragile', 'foil', 'construction', 'engineering']
  },
  {
    id: 'boot-print-mismatch',
    title: 'Boot Print Mismatch',
    claim: 'Boot prints in photos don\'t match spacesuit boots',
    category: 'technology',
    commonVariations: [
      'The treads don\'t match',
      'Wrong boot pattern in the photos',
      'Neil Armstrong\'s boots are different'
    ],
    tags: ['boots', 'treads', 'footprints', 'spacesuit', 'mismatch']
  },
  {
    id: 'no-blast-crater',
    title: 'No Blast Crater',
    claim: 'Lunar module should have created crater during landing',
    category: 'physics',
    commonVariations: [
      'Where\'s the blast crater?',
      'The engine should have made a hole',
      'No crater under the lander'
    ],
    tags: ['crater', 'blast', 'engine', 'landing', 'physics']
  },
  {
    id: 'lost-technology',
    title: 'Lost Technology',
    claim: 'NASA claims they lost the technology to return to the moon',
    category: 'logical',
    commonVariations: [
      'How do you lose the technology?',
      'Don Pettit said we lost the tech',
      'They destroyed the plans'
    ],
    tags: ['technology', 'lost', 'don pettit', 'saturn v', 'infrastructure']
  }
];

export const evidenceResponses: EvidenceResponse[] = [
  // Waving Flag responses
  {
    id: 'waving-flag-short',
    conspiracyId: 'waving-flag',
    responseType: 'short',
    content: 'There\'s no wind on the moon - that\'s exactly why the flag looks weird! It only moves when astronauts touch it, then stops completely. There\'s a horizontal rod holding it out, and wrinkles stay frozen because there\'s no air. If filmed on Earth, it would be drooping and moving from air currents constantly.',
    scientificSources: [sources[0], sources[3]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'waving-flag-comprehensive',
    conspiracyId: 'waving-flag',
    responseType: 'comprehensive',
    content: 'This is the classic "waving flag" conspiracy theory that completely misses the point. There is no wind on the moon - that\'s exactly why the flag looks the way it does. The flag only appears to "wave" when astronauts are physically moving it during setup, then it stops completely because there\'s no air to make it flutter. The flag has a horizontal rod at the top to keep it extended, and the wrinkles from being folded stay frozen in place because there\'s no atmosphere. If you watch the actual footage, whenever astronauts aren\'t touching the flag, it\'s perfectly motionless - exactly what you\'d expect in a vacuum. The flag\'s behavior actually proves the moon landing was real because it acts nothing like a flag would in a windy Earth studio.',
    scientificSources: [sources[0], sources[1], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'waving-flag-educational',
    conspiracyId: 'waving-flag',
    responseType: 'educational',
    content: 'The American flag on the moon demonstrates perfect physics for a vacuum environment. Understanding this requires knowledge of atmospheric science: Earth\'s atmosphere creates air currents that cause flags to flutter, but the moon has no atmosphere (less than 1 trillionth of Earth\'s atmospheric pressure). The flag assembly included a horizontal telescoping rod specifically designed to keep the flag extended for photographs. When astronauts inserted the flagpole and adjusted the horizontal rod, the flag moved due to their physical manipulation. Once they stopped touching it, the flag remained completely motionless - exactly what physics predicts in a vacuum. The wrinkles and folds visible in photographs are permanent creases from the flag being folded and stored during the journey. This behavior would be impossible to replicate in an Earth-based studio where atmospheric pressure and air currents would cause constant subtle movement.',
    scientificSources: [sources[0], sources[1], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // No Stars responses  
  {
    id: 'no-stars-short',
    conspiracyId: 'no-stars',
    responseType: 'short',
    content: 'Basic photography - the lunar surface is extremely bright (like snow on sunny day). To photograph bright subjects, cameras use fast shutter speeds that make dim stars invisible. Same reason you can\'t photograph stars with your phone under a streetlight. Apollo photos look exactly as they should.',
    scientificSources: [sources[5]],
    effectiveness: 8,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-stars-comprehensive',
    conspiracyId: 'no-stars',
    responseType: 'comprehensive',
    content: 'The "no stars" conspiracy theory misunderstands basic photography principles. The lunar surface is extremely bright - comparable to snow on a sunny day - because it\'s directly illuminated by unfiltered sunlight (no atmosphere to dim it). To photograph these bright subjects (astronauts and lunar surface), cameras must use fast shutter speeds and small apertures, which makes dim background stars invisible. This is identical to trying to photograph stars with your phone while standing under a bright streetlight - the bright foreground washes out the dim background. The "what it should look like" images showing stars are digitally manipulated composites combining two different exposures that 1960s cameras couldn\'t capture simultaneously. Modern space photography from the ISS and SpaceX missions shows the exact same phenomenon.',
    scientificSources: [sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-stars-educational',
    conspiracyId: 'no-stars',
    responseType: 'educational',
    content: 'This phenomenon demonstrates the inverse square law of light and camera exposure principles. Stars appear dim because they\'re incredibly distant light sources, while the lunar surface appears bright due to direct solar illumination at 1 AU (astronomical unit). Camera sensors can only capture a limited dynamic range - the ratio between the brightest and darkest areas in a single exposure. In lunar photography, the brightness difference between sunlit surfaces and background stars exceeds this dynamic range by several orders of magnitude. Professional photographers today use HDR (High Dynamic Range) techniques or composite multiple exposures to capture both bright and dim subjects simultaneously - technology unavailable in 1969. The Apollo cameras were optimized for documenting the mission, not astrophotography. This same principle explains why you can\'t see stars in daytime on Earth despite them being there - the bright blue sky (scattered sunlight) overwhelms the dim starlight.',
    scientificSources: [sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },

  // Van Allen Belt responses
  {
    id: 'van-allen-short',
    conspiracyId: 'van-allen-belt',
    responseType: 'short',
    content: 'Apollo spent ~1 hour passing through Van Allen belts, receiving 11.4 rems of radiation - equivalent to a few medical X-rays. The "deadly radiation" myth comes from not understanding dosage vs. time. Quick pass-through with proper shielding is manageable, like ISS crew deal with daily.',
    scientificSources: [sources[2]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'van-allen-comprehensive',
    conspiracyId: 'van-allen-belt',
    responseType: 'comprehensive',
    content: 'The Van Allen Belt radiation argument demonstrates a fundamental misunderstanding of radiation physics and dosage. The Apollo missions spent approximately 1 hour total passing through the belts and received roughly 11.4 rems of radiation - equivalent to several medical X-rays or a CT scan. The "deadly radiation" myth comes from conflating radiation intensity with total dosage over time. The Van Allen belts are dangerous for PROLONGED exposure (like if astronauts lived there for months), but a quick pass-through with proper trajectory planning and spacecraft shielding is entirely manageable. NASA carefully planned flight paths to minimize exposure and the Command Module\'s hull provided radiation shielding. This isn\'t speculation - radiation exposure is precisely measured on every space mission, and ISS astronauts deal with similar radiation levels during their 6-month stays.',
    scientificSources: [sources[2]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'van-allen-educational',  
    conspiracyId: 'van-allen-belt',
    responseType: 'educational',
    content: 'The Van Allen radiation belts are two doughnut-shaped regions of charged particles trapped by Earth\'s magnetic field, discovered by James Van Allen in 1958. Understanding radiation requires distinguishing between radiation flux (particles per second per area) and total absorbed dose (cumulative energy deposited in tissue over time). The inner belt (400-6,000 miles altitude) contains high-energy protons, while the outer belt (8,000-36,000 miles) contains mostly electrons. Apollo trajectories were carefully planned to pass through the thinner regions at higher latitudes, minimizing exposure time. The spacecraft\'s aluminum hull (approximately 6-12 cm thick) provided significant shielding against charged particles. Total radiation exposure for Apollo missions was measured at 0.18-1.14 rads (11.4 rems maximum) - well below the 25 rem annual limit for radiation workers. For comparison, a chest CT scan delivers about 7 rems. The biological effects of radiation follow well-established dose-response relationships, and the Apollo exposures were within acceptable limits for short-term missions.',
    scientificSources: [sources[2]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Different Shadows responses
  {
    id: 'different-shadows-short',
    conspiracyId: 'different-shadows',
    responseType: 'short',
    content: 'The sun isn\'t the only light source - the lunar surface reflects sunlight everywhere, just like how the moon reflects light back to Earth. Plus perspective makes parallel shadows look non-parallel. The natural scattered lighting from surface reflection is exactly what you\'d expect on the actual moon.',
    scientificSources: [sources[5]],
    effectiveness: 8,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'different-shadows-comprehensive',
    conspiracyId: 'different-shadows',
    responseType: 'comprehensive',
    content: 'The "different shadow directions" claim misunderstands lunar lighting conditions. While the sun is the primary light source, the lunar surface itself acts as a massive reflector, bouncing sunlight in all directions - this is why we can see the moon from Earth! This reflected light creates secondary illumination that fills in shadows and creates complex lighting scenarios. Additionally, perspective effects make parallel shadows appear to converge or diverge depending on camera angle and terrain slope. The lunar surface is not perfectly flat - it has gentle slopes, crater rims, and undulations that affect shadow directions. If this were filmed in a studio with artificial lighting, the illumination would actually be much more controlled and uniform. The natural, complex lighting patterns in Apollo photos are exactly what you\'d expect from the real lunar environment.',
    scientificSources: [sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'different-shadows-educational',
    conspiracyId: 'different-shadows',
    responseType: 'educational',
    content: 'Lunar lighting involves multiple photometric principles. The moon\'s albedo (reflectivity) averages 0.12, meaning it reflects 12% of incident sunlight - similar to charcoal, but sufficient to create significant secondary illumination when the entire visible surface is illuminated. This creates what photographers call "fill lighting" - reflected light that partially illuminates shadow areas. The lunar surface exhibits both specular (mirror-like) and diffuse (scattered) reflection depending on surface texture and mineral composition. Perspective foreshortening causes parallel lines to appear to converge toward vanishing points, which applies to shadows cast by parallel light rays. Additionally, the lunar surface has subtle topographical variations - gentle slopes of 1-2 degrees are enough to alter shadow directions noticeably. The absence of atmospheric scattering means shadows are sharper than on Earth, making these effects more pronounced. Studio lighting would require dozens of precisely positioned lights to replicate these natural lighting conditions, and the resulting setup would be far more complex than simply filming the actual lunar surface.',
    scientificSources: [sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Flimsy Lunar Module responses
  {
    id: 'flimsy-lander-short',
    conspiracyId: 'flimsy-lander',
    responseType: 'short',
    content: 'The lunar module looks "flimsy" because it was brilliantly engineered for space - not Earth! In the vacuum of space, there\'s no wind, weather, or atmospheric pressure to resist. The thin walls and foil-like thermal blankets were perfectly adequate for the moon\'s environment. It\'s like criticizing a race car for not being built like a tank - different environments require different engineering solutions.',
    scientificSources: [sources[1]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'flimsy-lander-comprehensive',
    conspiracyId: 'flimsy-lander',
    responseType: 'comprehensive',
    content: 'The Lunar Module\'s "flimsy" appearance is actually a masterpiece of aerospace engineering optimized for the lunar environment. Unlike Earth vehicles that must withstand atmospheric pressure, weather, and gravity, the LM was designed for space\'s vacuum environment. The thin aluminum walls (0.012 inches in the ascent stage) were sufficient because there\'s no atmospheric pressure to push against them. The gold and silver thermal blankets that look like "foil" are multi-layer insulation (MLI) designed to regulate temperature in the extreme thermal environment of space (+250°F in sunlight, -250°F in shadow). Every gram mattered due to fuel constraints, so engineers minimized weight while maintaining structural integrity. The LM underwent extensive testing including thermal-vacuum chambers, vibration tests, and structural load testing. It successfully completed multiple unmanned test flights before carrying astronauts. The "flimsy" appearance demonstrates superior engineering - building exactly what was needed for the mission, nothing more.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'flimsy-lander-educational',
    conspiracyId: 'flimsy-lander',
    responseType: 'educational',
    content: 'Aerospace engineering principles dictate that spacecraft design must be optimized for their operational environment. The Lunar Module represents advanced lightweight structural engineering where the strength-to-weight ratio was critical for mission success. The ascent stage\'s aluminum honeycomb construction provided structural rigidity while minimizing mass. The descent stage used a truss framework design that distributed loads efficiently while remaining lightweight. Multi-layer insulation (MLI) blankets used materials like Mylar, Kapton, and Teflon in precisely engineered layers to create thermal barriers in the vacuum of space. These materials appear fragile but were specifically chosen for their thermal properties, durability in space conditions, and minimal weight. Ground-based testing included pressurization tests, structural load testing to 1.5 times expected loads, thermal cycling between extreme temperatures, and vibration testing simulating launch conditions. The LM\'s design philosophy prioritized function over Earth-based aesthetics, resulting in a spacecraft that appeared unconventional but was perfectly suited for its lunar mission requirements.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Boot Print Mismatch responses
  {
    id: 'boot-print-short',
    conspiracyId: 'boot-print-mismatch',
    responseType: 'short',
    content: 'The "boot mismatch" confusion comes from mixing up different types of footwear! Astronauts wore regular boots inside the lunar module, but put on separate lunar overshoes when walking outside. The famous footprint is from Neil Armstrong\'s lunar overshoe, not his regular boot. It\'s like complaining that a photo of snow boots doesn\'t match someone\'s sneakers - they\'re different shoes for different purposes!',
    scientificSources: [sources[4]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'boot-print-comprehensive',
    conspiracyId: 'boot-print-mismatch',
    responseType: 'comprehensive',
    content: 'The boot print "mismatch" is actually evidence of proper spacewalk procedures. Astronauts wore two different types of footwear: their regular pressure suit boots inside the spacecraft, and separate lunar overshoes (officially called "Lunar Extravehicular Visor Assembly overshoes") when walking on the moon\'s surface. The famous footprint photograph shows the tread pattern from Neil Armstrong\'s lunar overshoe, not his pressure suit boot. These overshoes were designed specifically for lunar surface operations, with deep treads for traction in lunar dust and additional protection for the pressure suit boots. The different tread patterns served different purposes: the pressure suit boots were optimized for spacecraft operations, while the lunar overshoes were designed for surface mobility. This is standard aerospace protocol - using mission-specific equipment for different phases of the mission. The existence of multiple boot types actually demonstrates the thoroughness of mission planning, not evidence of deception.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'boot-print-educational',
    conspiracyId: 'boot-print-mismatch',
    responseType: 'educational',
    content: 'Apollo spacesuit design incorporated multiple layers of specialized equipment for different mission phases. The Extravehicular Mobility Unit (EMU) included integrated pressure boots designed for spacecraft operations, featuring soft soles suitable for interior surfaces and basic mobility. For lunar surface operations, astronauts donned additional Lunar Extravehicular Visor Assembly (LEVA) overshoes that featured aggressive tread patterns optimized for traction on lunar regolith. These overshoes used materials resistant to the abrasive properties of lunar dust and temperature extremes of the lunar surface. The tread pattern design incorporated deep grooves to provide maximum surface contact and prevent slipping on the fine-grained lunar surface. Mission protocols required astronauts to don these overshoes before exiting the lunar module and remove them before re-entering to prevent lunar dust contamination of the spacecraft interior. The famous bootprint photograph documents the LEVA overshoe tread pattern, not the pressure suit boot pattern, demonstrating proper adherence to extravehicular activity procedures.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  }
];