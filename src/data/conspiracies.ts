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
  },
  {
    id: 'royal-museums-greenwich',
    title: 'Moon Landing Conspiracy Theories Debunked',
    url: 'https://www.rmg.co.uk/stories/topics/moon-landing-conspiracy-theories-debunked',
    organization: 'Royal Museums Greenwich',
    type: 'museum',
    credibilityScore: 9,
    summary: 'Comprehensive analysis debunking major moon landing conspiracy theories'
  },
  {
    id: 'clavius-kaysing',
    title: 'Bill Kaysing Bibliography and Analysis',
    url: 'https://www.clavius.org/kaysing.html',
    organization: 'Clavius Moon Base',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Detailed analysis of Bill Kaysing\'s background and technical claims'
  },
  {
    id: 'smithsonian-verification',
    title: 'Moon Landing Verification',
    url: 'https://www.smithsonianmag.com/smithsonian-institution/yes-united-states-certainly-did-land-humans-moon-180972161/',
    organization: 'Smithsonian Institution',
    type: 'museum',
    credibilityScore: 10,
    summary: 'Scientific verification of moon landing evidence by Smithsonian experts'
  },
  {
    id: 'scientific-american-hubble',
    title: 'Why Can\'t Hubble See Astronauts on the Moon?',
    url: 'https://www.scientificamerican.com/article/why-cant-the-hubble-space-telescope-see-astronauts-on-the-moon/',
    organization: 'Scientific American',
    type: 'scientific',
    credibilityScore: 10,
    summary: 'Technical analysis of telescope resolution limits and lunar observation'
  },
  {
    id: 'cgi-history-timeline',
    title: 'History of Computer Graphics and CGI Development',
    url: 'https://en.wikipedia.org/wiki/Timeline_of_computer_animation_in_film_and_television',
    organization: 'Computer Graphics Historical Documentation',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Comprehensive timeline showing CGI development from 1970s onwards, proving technology unavailable in 1960s'
  },
  {
    id: 'royal-museums-why-stopped',
    title: 'Why Did We Stop Going to the Moon?',
    url: 'https://www.rmg.co.uk/stories/topics/why-did-we-stop-going-moon',
    organization: 'Royal Museums Greenwich',
    type: 'museum',
    credibilityScore: 10,
    summary: 'Comprehensive analysis of economic and political reasons for ending Apollo program'
  },
  {
    id: 'outer-space-treaty',
    title: 'Outer Space Treaty - U.S. State Department',
    url: 'https://2009-2017.state.gov/t/isn/5181.htm',
    organization: 'U.S. State Department',
    type: 'government',
    credibilityScore: 10,
    summary: 'Official text and analysis of 1967 Outer Space Treaty prohibiting military bases on moon'
  },
  {
    id: 'nasa-apollo-camera',
    title: 'NASA Technical Reports - Apollo TV Camera System',
    url: 'https://ntrs.nasa.gov/citations/19730010465',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Official NASA technical documentation of Ground-Commanded Television Assembly (GCTA) system'
  },
  {
    id: 'clavius-photography',
    title: 'Clavius Photography Analysis',
    url: 'https://www.clavius.org/photoret.html',
    organization: 'Clavius Moon Base',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Technical analysis of Apollo photography anomalies and explanations'
  },
  {
    id: 'conversation-film-expert',
    title: 'Moon Landing Footage Would Have Been Impossible to Fake',
    url: 'https://theconversation.com/moon-landings-footage-would-have-been-impossible-to-fake-a-film-expert-explains-why-118426',
    organization: 'The Conversation',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Film expert analysis of why 1960s Apollo footage could not have been faked'
  },
  {
    id: 'encyclopedia-mdpi',
    title: 'Encyclopedia MDPI Apollo Analysis',
    url: 'https://encyclopedia.pub/entry/37827',
    organization: 'MDPI Encyclopedia',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Technical analysis of Apollo mission evidence and conspiracy theory debunking'
  },
  {
    id: 'nasa-lm-propulsion',
    title: 'NASA Technical Documentation - Lunar Module Propulsion',
    url: 'https://ntrs.nasa.gov/api/citations/20090016298/downloads/20090016298.pdf',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Official NASA technical documentation of Lunar Module descent propulsion system'
  },
  {
    id: 'lunar-dust-research',
    title: 'NASA Lunar Dust Research and Analysis',
    url: 'https://science.nasa.gov/science-research/science-enabling-technology/technology-highlights/new-moon-duster-will-help-clean-nasa-assets-in-space/',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Comprehensive research on lunar dust properties and effects on Apollo equipment'
  },
  {
    id: 'pbs-film-expert',
    title: 'PBS Film Expert Analysis - Apollo Footage Authentication',
    url: 'https://www.pbs.org/newshour/science/apollo-landing-footage-would-have-been-impossible-to-fake-a-film-expert-explains-why',
    organization: 'PBS NewsHour',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Film technology expert explains why Apollo footage could not have been faked with 1960s technology'
  },
  {
    id: 'nasa-lunar-dust-effects',
    title: 'NASA Technical Report - Effects of Lunar Dust on EVA Systems',
    url: 'https://ntrs.nasa.gov/citations/20070021819',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Comprehensive analysis of lunar dust properties and effects on Apollo EVA operations'
  },
  {
    id: 'sciencedirect-dust-electrostatic',
    title: 'ScienceDirect - Electrostatic Properties of Lunar Dust',
    url: 'https://www.sciencedirect.com/science/article/pii/S027311772200816X',
    organization: 'ScienceDirect',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Scientific study of lunar dust electrostatic charging and adhesion mechanisms'
  },
  {
    id: 'royal-society-dust-environment',
    title: 'Royal Society - Lunar Dust Environment Analysis',
    url: 'https://royalsocietypublishing.org/doi/10.1098/rsta.2023.0075',
    organization: 'Royal Society',
    type: 'academic',
    credibilityScore: 10,
    summary: 'Peer-reviewed analysis of lunar dust environmental effects and preservation mechanisms'
  },
  {
    id: 'nasa-lunar-atmosphere',
    title: 'NASA Lunar Atmosphere and Environment Report',
    url: 'https://ntrs.nasa.gov/api/citations/19980218941/downloads/19980218941.pdf',
    organization: 'NASA',
    type: 'nasa',
    credibilityScore: 10,
    summary: 'Official NASA documentation of lunar atmospheric conditions and scattering effects'
  },
  {
    id: 'apollo11space-thermal',
    title: 'Apollo11Space - Thermal Extremes and Material Science Solutions',
    url: 'https://apollo11space.com/conquering-thermal-extremes-material-science-solutions-in-the-apollo-program/',
    organization: 'Apollo11Space',
    type: 'academic',
    credibilityScore: 9,
    summary: 'Technical analysis of Apollo thermal protection systems and temperature management'
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
  },
  {
    id: 'area-51-studio',
    title: 'Area 51 Studio Location',
    claim: 'Moon landings were filmed at Area 51 or other desert locations in Nevada',
    category: 'photography',
    commonVariations: [
      'Filmed in Nevada desert',
      'Area 51 was the studio',
      'Desert looks like the moon',
      'Barren landscape perfect for filming'
    ],
    tags: ['area 51', 'nevada', 'desert', 'filming', 'studio', 'landscape']
  },
  {
    id: 'bill-kaysing-insider',
    title: 'Bill Kaysing Inside Knowledge',
    claim: 'Former Rocketdyne employee Bill Kaysing had inside knowledge proving the landings were faked',
    category: 'logical',
    commonVariations: [
      'Kaysing worked on the rockets',
      'He knew they weren\'t capable',
      'Inside knowledge from Rocketdyne',
      'Technical writer exposed the truth'
    ],
    tags: ['bill kaysing', 'rocketdyne', 'insider', 'technical writer', 'employee']
  },
  {
    id: 'hubble-jwst-resolution',
    title: 'Hubble/JWST Should See Landing Sites',
    claim: 'Advanced telescopes like Hubble or JWST should be able to photograph Apollo landing sites if they were real',
    category: 'physics',
    commonVariations: [
      'Why can\'t Hubble see the landing sites?',
      'JWST should show the equipment',
      'Modern telescopes would prove it',
      'No telescope photos of landing sites'
    ],
    tags: ['hubble', 'jwst', 'telescope', 'resolution', 'physics', 'distance']
  },
  {
    id: 'modern-cgi-better',
    title: 'Modern CGI Looks Better',
    claim: 'Modern CGI is so much better that 1960s footage would look obviously fake by comparison',
    category: 'photography',
    commonVariations: [
      'CGI today is way better than 1960s fakes',
      'The footage still looks convincing',
      'Modern computers would do it better',
      'Technology has advanced too much'
    ],
    tags: ['cgi', 'technology', 'special effects', '1960s', 'film', 'computers']
  },
  {
    id: 'no-live-hd-feed',
    title: 'No Live HD Feed from Modern Missions',
    claim: 'Modern lunar missions don\'t provide live HD video feeds like Apollo supposedly did, proving Apollo was faked',
    category: 'technology',
    commonVariations: [
      'Why no HD video from Chang\'e missions?',
      'Modern missions should have better footage',
      'Where are the live broadcasts from current missions?',
      'China/India missions don\'t show live video'
    ],
    tags: ['modern missions', 'hd video', 'live feed', 'chang\'e', 'chandrayaan', 'technology']
  },
  {
    id: 'international-agencies-confirmation',
    title: 'International Agencies Haven\'t Confirmed Sites',
    claim: 'China, India, and Japan haven\'t confirmed Apollo landing sites with their missions, proving they don\'t exist',
    category: 'historical',
    commonVariations: [
      'No international confirmation of landing sites',
      'China hasn\'t verified Apollo sites',
      'India\'s missions don\'t show Apollo equipment',
      'Japan hasn\'t confirmed the landings'
    ],
    tags: ['international', 'china', 'india', 'japan', 'confirmation', 'verification', 'space agencies']
  },
  {
    id: 'computing-power-insufficient',
    title: 'Computing Power Insufficient for Moon Mission',
    claim: '1960s computers were too primitive and underpowered to handle complex calculations needed for moon missions',
    category: 'technology',
    commonVariations: [
      '1960s computers were too weak',
      'Apollo Guidance Computer had less power than a calculator',
      'Computing technology wasn\'t advanced enough',
      'Primitive computers couldn\'t navigate to the moon'
    ],
    tags: ['apollo guidance computer', 'agc', 'computing power', 'technology', '1960s', 'navigation', 'calculations']
  },
  {
    id: 'margaret-hamilton-software',
    title: 'Margaret Hamilton Software Engineering Claims',
    claim: 'The software engineering concepts and innovations attributed to Margaret Hamilton didn\'t exist in the 1960s and couldn\'t handle Apollo missions',
    category: 'technology',
    commonVariations: [
      'Software engineering wasn\'t invented yet',
      'No real-time operating systems existed',
      'Priority scheduling was impossible in 1960s',
      'Error recovery systems didn\'t exist'
    ],
    tags: ['margaret hamilton', 'software engineering', 'real-time OS', 'priority scheduling', 'error recovery']
  },
  {
    id: 'computing-requirements-mismatch',
    title: 'Computing Requirements vs Capabilities Mismatch',
    claim: 'The computational requirements for lunar missions far exceeded what 1960s computers could actually deliver',
    category: 'technology', 
    commonVariations: [
      'Orbital mechanics too complex for 1960s computers',
      'Navigation calculations impossible with limited memory',
      'Trajectory planning required modern computing power',
      'Real-time calculations were beyond 1960s capability'
    ],
    tags: ['orbital mechanics', 'navigation', 'trajectory', 'real-time calculations', 'computational requirements']
  },
  {
    id: 'dedicated-vs-general-computing',
    title: 'Dedicated vs General Purpose Computing Argument',
    claim: 'General-purpose computers are always better than dedicated systems, so 1960s dedicated computers couldn\'t handle complex missions',
    category: 'technology',
    commonVariations: [
      'Dedicated computers are inferior to general-purpose',
      'Modern smartphones are more powerful than Apollo computers',
      'General computing is always superior',
      'Specialized systems can\'t handle complex tasks'
    ],
    tags: ['dedicated computing', 'general purpose', 'specialized systems', 'computing architecture', 'efficiency']
  },
  {
    id: 'modern-cgi-better',
    title: 'Modern CGI Looks Better Than 1960s Faked Footage',
    claim: 'Modern CGI is so much better than 1960s technology that if NASA could fake footage then, today\'s graphics would make it look obviously fake',
    category: 'technology',
    commonVariations: [
      'Modern CGI proves moon footage is real',
      '1960s special effects were too primitive to fake moon landing',
      'Computer graphics didn\'t exist in the 1960s',
      'Apollo footage still looks convincing compared to modern CGI'
    ],
    tags: ['cgi', 'special effects', 'film technology', '1960s technology', 'visual effects', 'physics simulation']
  },
  {
    id: 'why-havent-returned',
    title: 'Why Haven\'t We Returned to the Moon?',
    claim: 'If we really went to the moon, why haven\'t we gone back?',
    category: 'logical',
    commonVariations: [
      'If moon landing was real, why did we stop going?',
      'We would have built moon bases by now if we really went',
      'Other countries would have gone too if it was possible'
    ],
    tags: ['apollo program', 'economics', 'politics', 'space exploration', 'budget']
  },
  {
    id: 'military-base-argument',
    title: 'Missing Military Moon Base',
    claim: 'Where is our military base on the moon showing USA complete dominance? The reason there\'s no base is because we\'ve never been there',
    category: 'logical',
    commonVariations: [
      'America would have built military bases on the moon',
      'Why no permanent moon base if we went there?',
      'Military would have claimed the moon for strategic advantage'
    ],
    tags: ['military', 'moon base', 'geopolitics', 'outer space treaty', 'strategic dominance']
  },
  {
    id: 'camera-man-left-behind',
    title: 'Who Filmed the Lunar Module Takeoff?',
    claim: 'How did they film the takeoff if they left the moon? Did they leave a man behind?',
    category: 'technology',
    commonVariations: [
      'Someone had to operate the camera to film liftoff',
      'Camera followed the spacecraft perfectly - proves it was staged',
      'No way to remotely control camera from Earth'
    ],
    tags: ['apollo camera', 'lunar rover', 'remote control', 'gcta system', 'mission control']
  },
  {
    id: 'crosshairs-behind-objects',
    title: 'Crosshairs Appear Behind Objects',
    claim: 'Crosshairs appear to be behind objects in photos, proving they were painted on afterward',
    category: 'photography',
    commonVariations: [
      'Crosshairs should always be in front of everything',
      'Photo manipulation evidence in crosshair placement',
      'Proves photos were doctored in post-production'
    ],
    tags: ['hasselblad camera', 'reseau plate', 'photo saturation', 'film photography', 'crosshairs']
  },
  {
    id: 'letter-c-moon-rock',
    title: 'Letter C on Moon Rock',
    claim: 'Letter C visible on rock proves it\'s a movie prop',
    category: 'photography',
    commonVariations: [
      'Movie prop markers visible in Apollo photos',
      'Studio set piece labeling system exposed',
      'Clear evidence of Hollywood production'
    ],
    tags: ['apollo 16', 'moon rock', 'photo artifacts', 'film contamination', 'hoax evidence']
  },
  {
    id: 'armstrong-reflection-no-camera',
    title: 'Armstrong Reflection Shows No Camera',
    claim: 'Armstrong is reflected in Aldrin\'s visor but doesn\'t appear to be holding a camera',
    category: 'photography',
    commonVariations: [
      'Who took the famous Aldrin visor photo?',
      'Armstrong\'s hands are empty in the reflection',
      'No handheld camera visible in visor reflection'
    ],
    tags: ['visor reflection', 'chest mounted camera', 'hasselblad', 'apollo 11', 'photography equipment']
  },
  {
    id: 'multiple-light-sources',
    title: 'Multiple Light Sources in Photos',
    claim: 'Perfect lighting on objects proves multiple studio lights were used',
    category: 'photography',
    commonVariations: [
      'Lighting is too perfect for natural sunlight',
      'Multiple shadows prove studio lighting setup',
      'Professional photography lighting techniques used'
    ],
    tags: ['lunar surface', 'lighting', 'shadows', 'reflected light', 'earthshine', 'albedo']
  },
  {
    id: 'perfect-lighting-aldrin-ladder',
    title: 'Perfect Lighting on Aldrin in Shadow',
    claim: 'Aldrin is perfectly lit while in the shadow of the lunar module',
    category: 'photography',
    commonVariations: [
      'Shadows should be completely dark without atmosphere',
      'Fill lighting proves studio production',
      'Impossible lighting conditions on the moon'
    ],
    tags: ['lunar module shadow', 'surface reflection', 'natural lighting', 'lunar regolith', 'apollo 11']
  },
  {
    id: 'identical-backgrounds-miles-apart',
    title: 'Identical Backgrounds in Photos Taken Miles Apart',
    claim: 'Photos taken from different locations show identical background mountains, proving a painted backdrop was used',
    category: 'photography',
    commonVariations: [
      'Background mountains look the same from different locations',
      'Painted backdrop used for lunar surface photos',
      'No parallax shift proves fake background'
    ],
    tags: ['parallax', 'perspective', 'lunar mountains', 'background', 'atmospheric perspective', 'depth perception']
  },
  {
    id: 'no-engine-exhaust-visible',
    title: 'No Engine Exhaust Visible During Liftoff',
    claim: 'Lunar module liftoff should show visible exhaust flame like Earth rockets',
    category: 'physics',
    commonVariations: [
      'Missing rocket exhaust proves fake liftoff',
      'Should see flames like Earth rockets',
      'Vacuum exhaust would still be visible'
    ],
    tags: ['lunar module', 'rocket exhaust', 'vacuum', 'hypergolic propellants', 'propulsion system']
  },
  {
    id: 'rover-tracks-too-perfect',
    title: 'Rover Tracks Too Perfect',
    claim: 'Lunar rover tracks appear too pristine and perfect for the lunar environment',
    category: 'technology',
    commonVariations: [
      'Tracks should be disturbed by lunar conditions',
      'Too perfect preservation of wheel marks',
      'Tracks look artificially created'
    ],
    tags: ['lunar rover', 'tracks preservation', 'lunar dust', 'vacuum environment', 'lro images']
  },
  {
    id: 'equipment-too-clean-after-dust',
    title: 'Equipment Looks Too Clean After Moon Dust Exposure',
    claim: 'Apollo equipment should be completely covered in dust, proving the missions were faked',
    category: 'technology',
    commonVariations: [
      'Moon dust should cover everything',
      'Equipment appears too clean for lunar environment',
      'Dust exposure proves missions were fake'
    ],
    tags: ['lunar dust', 'equipment contamination', 'dust problems', 'spacesuit', 'lunar module']
  },
  {
    id: 'film-video-quality-inconsistencies',
    title: 'Film/Video Quality Inconsistencies Between Different Footage',
    claim: 'Apollo footage shows suspicious quality variations proving it was artificially created',
    category: 'technology',
    commonVariations: [
      'Video quality too good for 1960s technology',
      'Inconsistent footage quality proves fakery',
      'Missing tapes prove cover-up'
    ],
    tags: ['sstv camera', 'slow scan television', 'film quality', 'video technology', 'missing tapes']
  },
  {
    id: 'dust-behavior-wrong',
    title: 'Dust Behavior Wrong in Vacuum',
    claim: 'Lunar dust should stick to everything in vacuum, but Apollo footage shows dust falling normally',
    category: 'physics',
    commonVariations: [
      'Dust should cling to everything in vacuum',
      'Moon dust behavior proves fake footage',
      'Electrostatic dust should stick to spacesuits'
    ],
    tags: ['lunar dust', 'electrostatic charging', 'vacuum environment', 'dust adhesion', 'regolith properties']
  },
  {
    id: 'footprints-too-perfect-airless',
    title: 'Footprints Too Perfect in Airless Environment',
    claim: 'Perfect footprint preservation impossible without atmospheric moisture',
    category: 'physics',
    commonVariations: [
      'Footprints need moisture to hold shape',
      'Vacuum environment cannot preserve impressions',
      'Lunar soil too dry to maintain footprint details'
    ],
    tags: ['footprints', 'lunar regolith', 'vacuum preservation', 'cohesion', 'mechanical interlocking']
  },
  {
    id: 'no-atmospheric-scattering',
    title: 'No Atmospheric Scattering Effects Visible',
    claim: 'Photos should show atmospheric scattering effects like on Earth',
    category: 'physics',
    commonVariations: [
      'Sky should show some blue coloring',
      'Missing atmospheric haze effects',
      'Too sharp contrast proves studio lighting'
    ],
    tags: ['atmospheric scattering', 'rayleigh scattering', 'lunar exosphere', 'vacuum environment', 'black sky']
  },
  {
    id: 'temperature-extremes-lethal',
    title: 'Temperature Extremes Should Have Killed Astronauts',
    claim: 'Lunar temperature extremes of -250°F to +250°F should have been lethal',
    category: 'physics',
    commonVariations: [
      'Extreme temperatures would kill astronauts',
      'Equipment would fail in temperature extremes',
      'Spacesuits insufficient for lunar conditions'
    ],
    tags: ['temperature extremes', 'thermal protection', 'spacesuit technology', 'mission timing', 'cooling systems']
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
  },

  // No Blast Crater responses
  {
    id: 'no-blast-crater-short',
    conspiracyId: 'no-blast-crater',
    responseType: 'short',
    content: 'The lunar module didn\'t need to create a blast crater because it was designed for gentle landings! The engine throttled down to just 10% power for the final approach, and lunar gravity is 1/6th of Earth\'s. It\'s like expecting a leaf blower to carve a hole in concrete - the physics just don\'t work that way.',
    scientificSources: [sources[1]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-blast-crater-comprehensive',
    conspiracyId: 'no-blast-crater',
    responseType: 'comprehensive',
    content: 'The absence of a blast crater is actually evidence of precision engineering, not deception. The Lunar Module\'s descent engine was specifically designed for soft landings with variable thrust capability. During the final approach, the engine throttled down to approximately 10% of maximum thrust - about 1,000 pounds of force. This gentle thrust was distributed over the engine bell\'s area and further dispersed by the lunar surface. The moon\'s gravity (1/6th of Earth\'s) meant less force was needed to slow the descent. Additionally, the lunar surface consists of fine regolith (dust) over solid bedrock - the engine simply scattered the loose surface material rather than excavating solid rock. Apollo 11 landed with only 25 seconds of fuel remaining, indicating Neil Armstrong was carefully controlling descent power. The engine was shut off at approximately 3 feet above the surface, allowing the LM to drop gently onto its footpads. Post-mission analysis and later orbital photography confirmed surface disturbance patterns consistent with gentle rocket exhaust dispersal.',
    scientificSources: [sources[1], sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-blast-crater-educational',
    conspiracyId: 'no-blast-crater',
    responseType: 'educational',
    content: 'Rocket propulsion physics in low-gravity environments differs significantly from Earth-based expectations. The Lunar Module\'s Descent Propulsion System used hypergolic propellants (Aerozine 50 and nitrogen tetroxide) with variable thrust ranging from 1,050 to 10,500 pounds of force. The engine\'s expansion ratio was optimized for vacuum operation, creating a broader, less concentrated exhaust plume than Earth-based rockets. During the final landing phase, thrust was reduced to approximately 10% of maximum to prevent surface damage and ensure precise control. Lunar regolith has a density of about 1.5 g/cm³ and consists primarily of fine basaltic particles created by billions of years of micrometeorite impacts. The exhaust velocity was approximately 3,050 m/s, but the low thrust setting and brief contact time were insufficient to compact or excavate the underlying surface significantly. The moon\'s lack of atmosphere meant no additional pressure waves or acoustic effects that might enhance surface disturbance. Orbital imagery from subsequent missions shows subtle radial patterns around landing sites where loose regolith was displaced, exactly matching theoretical predictions for low-thrust rocket exhaust interaction with granular surfaces in vacuum conditions.',
    scientificSources: [sources[1], sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Lost Technology responses
  {
    id: 'lost-technology-short',
    conspiracyId: 'lost-technology',
    responseType: 'short',
    content: 'NASA didn\'t "lose" the technology - they stopped funding it! Building Saturn V rockets required 400,000 people and massive industrial infrastructure. When Apollo ended in 1972, Congress cut the budget and the factories closed. It\'s like saying we "lost" the ability to build Model T Fords - we could rebuild the production line, but why would we when we have better technology now?',
    scientificSources: [sources[1]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'lost-technology-comprehensive',
    conspiracyId: 'lost-technology',
    responseType: 'comprehensive',
    content: 'The "lost technology" claim fundamentally misunderstands how large-scale industrial production works. NASA didn\'t lose technical knowledge - they lost the industrial infrastructure and institutional knowledge required for Saturn V production. The Apollo program employed over 400,000 people across 20,000 companies. When Congress ended Apollo funding in 1972, these production lines shut down, suppliers moved to other projects, and specialized workers retired or changed careers. The blueprints, technical documentation, and design knowledge still exist in NASA archives. However, recreating 1960s production methods would be like Ford trying to restart Model T assembly lines - technically possible but economically pointless. Modern rockets use advanced materials, computer-controlled manufacturing, and updated safety standards that make Saturn V production obsolete. NASA\'s current Artemis program uses the Space Launch System (SLS), which incorporates 50+ years of technological advancement. The "lost technology" is more accurately described as "discontinued industrial capacity for obsolete technology," similar to how we no longer mass-produce telegraph equipment despite understanding how it works.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'lost-technology-educational',
    conspiracyId: 'lost-technology',
    responseType: 'educational',
    content: 'Industrial aerospace production requires sustained institutional knowledge, specialized manufacturing capabilities, and qualified workforce retention. The Saturn V program represented the largest peacetime technological mobilization in history, coordinating complex supply chains across multiple industries. Critical components required specialized facilities: the F-1 engines needed unique test stands, the fuel tanks required specialized welding techniques, and the guidance systems demanded precision manufacturing capabilities. When Apollo funding ended, these specialized facilities were converted or demolished, supply contracts terminated, and expert personnel reassigned. The phenomenon is called "industrial base atrophy" - the gradual loss of manufacturing capability when production ceases. Technical documentation exists in NASA\'s archives, but recreating production would require rebuilding supply chains, retraining workers, and updating 1960s technology to meet modern safety and environmental standards. This economic reality applies across industries: automobile manufacturers don\'t maintain production lines for decades-old models, and electronics companies don\'t preserve obsolete chip fabrication processes. NASA\'s current approach focuses on the Space Launch System, which leverages modern materials science, computer-aided design, and advanced manufacturing techniques that significantly exceed Apollo-era capabilities.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Area 51 Studio Location responses
  {
    id: 'area-51-studio-short',
    conspiracyId: 'area-51-studio',
    responseType: 'short',
    content: 'Earth\'s deserts look nothing like the moon! Nevada deserts are reddish-brown from iron oxide, while the lunar surface is dark charcoal gray. Plus, Earth has a blue sky and atmospheric haze that would be impossible to remove with 1960s technology. The visual differences are so obvious that any geologist could spot them immediately.',
    scientificSources: [sources[6], sources[7]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'area-51-studio-comprehensive',
    conspiracyId: 'area-51-studio',
    responseType: 'comprehensive',
    content: 'The Area 51 desert theory fails on multiple technical levels. First, the visual differences are irreconcilable: Earth\'s deserts are reddish-brown from iron oxide and reflect 15-40% of light, while the lunar surface is dark charcoal gray from basaltic rock and reflects only 8% of light. The geological features are completely different - Earth shows stratified rock layers and wind erosion, while the Moon displays impact craters with no atmospheric weathering. Second, Earth\'s atmosphere creates a blue sky and scattered lighting that would be impossible to remove with 1960s compositing technology. Third, Area 51 was actively conducting classified aircraft testing (U-2, SR-71, stealth programs) that would make a massive film production impossible to conceal. Finally, when astronauts kick lunar dust, it follows perfect parabolic trajectories in 1/6 gravity and vacuum - atmospheric drag on Earth would alter these trajectories in ways detectable to physics experts.',
    scientificSources: [sources[6], sources[7], sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'area-51-studio-educational',
    conspiracyId: 'area-51-studio',
    responseType: 'educational',
    content: 'Comparative planetary geology demonstrates fundamental differences between Earth\'s desert environments and lunar surface conditions. Lunar regolith consists of fine basaltic particles and impact glass created by billions of years of micrometeorite bombardment, resulting in extremely low albedo (8% reflectivity). Earth\'s desert surfaces contain iron oxide minerals and sedimentary materials with much higher reflectivity (15-40%). The Moon\'s lack of atmosphere creates stark lighting conditions with no atmospheric scattering, producing jet-black skies and crystal-clear distant features impossible to replicate on Earth. Atmospheric physics shows that Earth\'s atmosphere would scatter light into shadow areas, creating fill lighting patterns completely different from lunar conditions. Additionally, particle dynamics in vacuum environments produce ballistic trajectories that differ markedly from atmospheric conditions - a difference that would be immediately apparent to aerospace engineers analyzing footage. Modern orbital verification from multiple international space agencies (China\'s Chang\'e, India\'s Chandrayaan, Japan\'s SELENE) has photographed Apollo landing sites, confirming the presence of equipment on the lunar surface exactly where missions reported landing.',
    scientificSources: [sources[5], sources[6], sources[7], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Bill Kaysing Inside Knowledge responses
  {
    id: 'bill-kaysing-short',
    conspiracyId: 'bill-kaysing-insider',
    responseType: 'short',
    content: 'Bill Kaysing wasn\'t a rocket engineer - he was a technical writer who wrote user manuals! He left Rocketdyne in 1963, before Apollo development even began. The F-1 engines were developed from 1963-1968, after he was gone. It\'s like a former typewriter manual writer claiming modern computers can\'t work because he once worked at IBM in the 1950s.',
    scientificSources: [sources[8]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'bill-kaysing-comprehensive',
    conspiracyId: 'bill-kaysing-insider',
    responseType: 'comprehensive',
    content: 'Bill Kaysing\'s claims of insider knowledge collapse under timeline scrutiny. He worked as a technical writer and publications manager at Rocketdyne from 1956-1963, creating user manuals for existing systems, not participating in rocket design. He had a Bachelor of Arts in English, not engineering credentials. Critically, Kaysing left Rocketdyne in 1963, before intensive Apollo development began. The F-1 engines that powered Saturn V were primarily developed from 1963-1968, and the J-2 upper stage engines were also developed after his departure. His book "We Never Went to the Moon" (1974) contained numerous technical errors easily debunked by aerospace professionals. Actual rocket engineers who designed the F-1 and J-2 engines provided detailed technical rebuttals with extensive documentation, test footage, and performance data. Modern private space companies like SpaceX have validated the fundamental rocket science principles Kaysing claimed were impossible, which are now routine in commercial spaceflight.',
    scientificSources: [sources[8], sources[9], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'bill-kaysing-educational',
    conspiracyId: 'bill-kaysing-insider',
    responseType: 'educational',
    content: 'Aerospace engineering requires specialized technical knowledge and access to classified design data that Kaysing never possessed. His role as a technical writer involved creating documentation for completed systems, not participating in propulsion system design or having access to performance testing data. The Saturn V\'s five F-1 engines produced a combined 7.5 million pounds of thrust with well-documented thrust-to-weight ratios and delta-V calculations verified by independent aerospace companies worldwide. Kaysing\'s technical claims demonstrate fundamental misunderstandings of rocket performance calculations, orbital mechanics, and propulsion system capabilities. Professional aerospace engineers who actually designed Apollo systems provided detailed technical documentation including engine test data, structural analysis, and mission trajectory calculations that thoroughly contradicted Kaysing\'s assertions. The peer review process in aerospace engineering requires submission of technical analyses to professional journals - something Kaysing never attempted because his claims lacked supporting data and contained basic technical errors that would not survive professional scrutiny.',
    scientificSources: [sources[8], sources[9], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Hubble/JWST Resolution responses
  {
    id: 'hubble-jwst-short',
    conspiracyId: 'hubble-jwst-resolution',
    responseType: 'short',
    content: 'It\'s basic physics! Hubble\'s resolution is about 96 meters at lunar distance, but the largest Apollo equipment is only 4.2 meters wide. You\'d need the lunar module to be 23 times larger to see it as even a single pixel. To see details, you\'d need a telescope 1.2 miles wide - physically impossible to build!',
    scientificSources: [sources[10]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'hubble-jwst-comprehensive',
    conspiracyId: 'hubble-jwst-resolution',
    responseType: 'comprehensive',
    content: 'Telescope resolution isn\'t about magnification - it\'s about the fundamental physics of light diffraction that cannot be avoided. Hubble\'s 2.4-meter mirror has a resolution of 0.05 arcseconds in visible light, which equals about 96 meters at lunar distance. The Apollo Lunar Module descent stage measures only 4.2 meters wide, making it far too small to resolve. JWST\'s larger 6.5-meter mirror is designed for infrared wavelengths where its resolution is actually comparable to or worse than Hubble\'s visible-light capability. To see Apollo equipment as even a single pixel from Earth would require a 21-meter telescope, and to see actual details would need a telescope approaching 2 kilometers in diameter - physically impossible with any current or foreseeable technology. NASA\'s Lunar Reconnaissance Orbiter can photograph the sites clearly because it orbits only 31 miles above the surface - over 7,700 times closer than Earth-based telescopes.',
    scientificSources: [sources[10], sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'hubble-jwst-educational',
    conspiracyId: 'hubble-jwst-resolution',
    responseType: 'educational',
    content: 'Optical resolution is governed by the Rayleigh criterion, which defines the minimum angular separation at which two point sources can be distinguished. For a circular aperture, the angular resolution θ = 1.22λ/D, where λ is wavelength and D is aperture diameter. Hubble\'s 2.4-meter mirror operating at 550nm visible light achieves 0.05 arcseconds resolution. At lunar distance (384,400 km), this corresponds to linear resolution of 96 meters per pixel. Apollo equipment ranges from 1.5-4.2 meters in maximum dimension, requiring resolution improvements of 23-64 times to achieve single-pixel detection. The required telescope aperture scales linearly with resolution improvement, necessitating mirrors of 21-69 meters diameter - far exceeding engineering feasibility for space-based telescopes. Ground-based telescopes face additional atmospheric limitations that restrict resolution to ~1 arcsecond without adaptive optics. International lunar missions including India\'s Chandrayaan-1, Japan\'s SELENE, and China\'s Chang\'e have independently verified Apollo landing sites through close-proximity orbital observation, providing the definitive evidence that Earth-based telescopes cannot deliver due to fundamental physical constraints.',
    scientificSources: [sources[10], sources[5], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Modern CGI Better responses
  {
    id: 'modern-cgi-short',
    conspiracyId: 'modern-cgi-better',
    responseType: 'short',
    content: 'CGI didn\'t exist in the 1960s! The first computer-generated movie footage appeared in 1973, and the first CGI human wasn\'t until 1988 - twenty years after Apollo 11. NASA\'s entire computer had less power than a modern calculator. The physics in Apollo footage - like dust falling in perfect parabolas in 1/6 gravity - would have been impossible to simulate with any 1960s technology.',
    scientificSources: [sources[11]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'modern-cgi-comprehensive',
    conspiracyId: 'modern-cgi-better',
    responseType: 'comprehensive',
    content: 'This argument ironically proves the moon landings\' authenticity. Computer-generated imagery didn\'t exist in the 1960s - the first CGI movie footage appeared in 1973\'s "Westworld," and the first CGI human character wasn\'t until 1988\'s "Tin Toy." Apollo footage shows authentic physics that would have been impossible to simulate: lunar dust follows perfect parabolic trajectories in 1/6 gravity with no air resistance, astronauts move naturally in reduced gravity, and all objects behave according to precise mathematical models unavailable to 1960s filmmakers. Even today\'s most advanced CGI struggles with convincing human movement and realistic physics interactions. The special effects available in the 1960s were primitive - painted backdrops, miniatures, wire work, and optical compositing. "2001: A Space Odyssey," the most advanced space film of the era, took four years to complete using every cutting-edge technique available, yet still looks noticeably artificial compared to Apollo footage. Modern filmmakers attempting to recreate Apollo footage consistently produce imagery that looks obviously artificial when compared to the originals.',
    scientificSources: [sources[11], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'modern-cgi-educational',
    conspiracyId: 'modern-cgi-better',
    responseType: 'educational',
    content: 'Computer graphics technology evolution demonstrates the impossibility of 1960s CGI creation. Digital image processing required computational resources unavailable until the 1970s-80s, with early CGI limited to simple geometric shapes and wireframe models. Physics simulation engines capable of accurate gravitational and particle dynamics weren\'t developed until the 1990s gaming industry emergence. Apollo footage exhibits characteristics that would require: real-time physics calculation for dust particle trajectories under 1/6 gravity, accurate fabric behavior in vacuum conditions, natural human biomechanics in reduced gravity, and consistent lighting physics across continuous sequences. Modern motion capture technology, developed in the 1980s-90s, still struggles to convincingly replicate the natural movement patterns visible in Apollo footage. Film grain analysis, lighting consistency studies, and physics behavior examination consistently confirm that Apollo footage captures real physical phenomena rather than simulated events. The organic, unpredictable qualities of analog film photography create visual signatures difficult to replicate digitally, while the documentary-style unpolished nature of Apollo footage contrasts sharply with the controlled, cinematically perfect imagery typical of fictional productions.',
    scientificSources: [sources[11], sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // No Live HD Feed responses
  {
    id: 'no-live-hd-short',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'short',
    content: 'Apollo never had "HD" feeds - the 1969 footage was grainy, 10 frames per second, 320-line resolution! Modern robotic missions actually provide much better image quality, but they don\'t need live TV because there\'s nothing exciting happening - rovers move at 1 cm/second. Plus, Apollo was a human spectacle designed for TV, while today\'s missions focus on science, not entertainment.',
    scientificSources: [sources[1], sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-live-hd-comprehensive',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'comprehensive',
    content: 'This claim misunderstands both Apollo\'s actual capabilities and modern mission priorities. Apollo\'s "live broadcasts" were low-quality Slow-Scan Television at 10 fps with 320-line resolution - far below even standard definition. Modern missions like China\'s Chang\'e actually provide superior HD imagery and video, but distribute it through scientific channels rather than live TV. The key difference is mission type: Apollo carried humans performing historic firsts that commanded worldwide attention, while current robotic missions focus on scientific data collection. Live HD broadcasting requires enormous bandwidth and power that modern missions allocate to scientific instruments instead. Communication windows are also limited - unlike Apollo\'s dedicated worldwide tracking network, robotic missions often communicate only during specific orbital passes. The missions have different objectives: Apollo was a geopolitical demonstration requiring live coverage, while modern missions are scientific endeavors measured by data quality, not TV ratings.',
    scientificSources: [sources[1], sources[5], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-live-hd-educational',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'educational',
    content: 'Mission architecture and objectives fundamentally determine communication strategies and resource allocation. Apollo missions utilized Slow-Scan Television (SSTV) technology transmitting at 10 frames per second with 320-line resolution, converted in real-time to broadcast standards, resulting in significant quality degradation. Modern robotic missions employ high-resolution imaging systems capable of HD and even 4K photography, but prioritize scientific data transmission over live entertainment content. Power management constraints require careful allocation between scientific instruments, communication systems, and basic spacecraft functions - continuous video broadcasting would compromise primary mission objectives. Communication protocols depend on Deep Space Network availability and orbital mechanics, with many missions having limited communication windows rather than continuous connectivity. Bandwidth allocation prioritizes scientific data packets containing spectrometry, geology, and navigation information over video content. Mission success metrics focus on scientific objectives: mineral analysis, geological mapping, and technology demonstrations rather than public engagement metrics. Modern lunar missions have documented their activities extensively through high-quality imagery distributed via space agency websites and scientific publications, providing superior visual documentation compared to Apollo\'s broadcast television limitations.',
    scientificSources: [sources[1], sources[5], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // No Live HD Feed responses
  {
    id: 'no-live-hd-short',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'short',
    content: 'Apollo never had "HD" feeds - the 1969 footage was grainy, 10 frames per second, 320-line resolution! Modern robotic missions actually provide much better image quality, but they don\'t need live TV because there\'s nothing exciting happening - rovers move at 1 cm/second. Plus, Apollo was a human spectacle designed for TV, while today\'s missions focus on science, not entertainment.',
    scientificSources: [sources[1], sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-live-hd-comprehensive',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'comprehensive',
    content: 'This claim misunderstands both Apollo\'s actual capabilities and modern mission priorities. Apollo\'s "live broadcasts" were low-quality Slow-Scan Television at 10 fps with 320-line resolution - far below even standard definition. Modern missions like China\'s Chang\'e actually provide superior HD imagery and video, but distribute it through scientific channels rather than live TV. The key difference is mission type: Apollo carried humans performing historic firsts that commanded worldwide attention, while current robotic missions focus on scientific data collection. Live HD broadcasting requires enormous bandwidth and power that modern missions allocate to scientific instruments instead. Communication windows are also limited - unlike Apollo\'s dedicated worldwide tracking network, robotic missions often communicate only during specific orbital passes. The missions have different objectives: Apollo was a geopolitical demonstration requiring live coverage, while modern missions are scientific endeavors measured by data quality, not TV ratings.',
    scientificSources: [sources[1], sources[5], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-live-hd-educational',
    conspiracyId: 'no-live-hd-feed',
    responseType: 'educational',
    content: 'Mission architecture and objectives fundamentally determine communication strategies and resource allocation. Apollo missions utilized Slow-Scan Television (SSTV) technology transmitting at 10 frames per second with 320-line resolution, converted in real-time to broadcast standards, resulting in significant quality degradation. Modern robotic missions employ high-resolution imaging systems capable of HD and even 4K photography, but prioritize scientific data transmission over live entertainment content. Power management constraints require careful allocation between scientific instruments, communication systems, and basic spacecraft functions - continuous video broadcasting would compromise primary mission objectives. Communication protocols depend on Deep Space Network availability and orbital mechanics, with many missions having limited communication windows rather than continuous connectivity. Bandwidth allocation prioritizes scientific data packets containing spectrometry, geology, and navigation information over video content. Mission success metrics focus on scientific objectives: mineral analysis, geological mapping, and technology demonstrations rather than public engagement metrics. Modern lunar missions have documented their activities extensively through high-quality imagery distributed via space agency websites and scientific publications, providing superior visual documentation compared to Apollo\'s broadcast television limitations.',
    scientificSources: [sources[1], sources[5], sources[3]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // International Agencies Confirmation responses
  {
    id: 'international-confirmation-short',
    conspiracyId: 'international-agencies-confirmation',
    responseType: 'short',
    content: 'This is completely false! Japan\'s SELENE mission photographed Apollo 15\'s blast pattern in 2008. India\'s Chandrayaan-2 directly imaged Apollo 11\'s descent stage in 2021. China\'s Chang\'e missions have mapped Apollo sites. These competing nations had every reason to expose a hoax if it existed, but instead they confirmed the evidence exactly where NASA said it would be.',
    scientificSources: [sources[3], sources[5]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'international-confirmation-comprehensive',
    conspiracyId: 'international-agencies-confirmation',
    responseType: 'comprehensive',
    content: 'Multiple international space agencies have independently confirmed Apollo landing sites through their own missions. Japan\'s SELENE (2007) detected the distinctive blast pattern from Apollo 15\'s engine exhaust and captured 3D reconstructed images matching Apollo surface photographs. India\'s Chandrayaan-1 (2008) identified surface disturbances characteristic of spacecraft landings, and Chandrayaan-2 (2021) directly photographed Apollo 11\'s descent stage at Tranquility Base. China\'s Chang\'e missions have also photographed traces of Apollo landings with detailed surface mapping. The European Space Agency\'s SMART-1 and South Korea\'s Danuri have provided additional verification. This international confirmation is particularly powerful because these nations compete geopolitically with the United States and would benefit from exposing any American deception. Instead, their independent observations using their own technology consistently confirm Apollo hardware and surface disturbances exactly where NASA claimed to land.',
    scientificSources: [sources[3], sources[5], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'international-confirmation-educational',
    conspiracyId: 'international-agencies-confirmation',
    responseType: 'educational',
    content: 'Third-party verification through international space agencies provides crucial independent validation of Apollo missions. Japan\'s SELENE mission used terrain cameras and laser altimeters to detect surface features consistent with Apollo 15 landing activities, including engine blast effects and terrain correlation with original surface photography. India\'s space program conducted hyperspectral analysis identifying disturbed lunar soil with different optical properties than surrounding terrain, followed by direct imaging confirmation through Chandrayaan-2\'s high-resolution camera. China\'s Chang\'e program utilized advanced orbital imaging to create comprehensive lunar surface maps that include Apollo landing regions, corroborating American mission documentation. These confirmations involve specific technical measurements: surface reflectivity changes, blast pattern recognition, hardware identification, and geological correlation. The geopolitical significance cannot be understated - competing space agencies from nations with different political systems, languages, and technologies all independently reached identical conclusions about Apollo landing site authenticity. Such coordination would require a conspiracy far more complex than the original moon landings themselves.',
    scientificSources: [sources[3], sources[5], sources[6], sources[7]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Computing Power Insufficient responses
  {
    id: 'computing-power-short',
    conspiracyId: 'computing-power-insufficient',
    responseType: 'short',
    content: 'The Apollo Guidance Computer wasn\'t "primitive" - it was revolutionary! It was the first computer with integrated circuits, had a real-time operating system, and was fault-tolerant. It was specifically designed for navigation calculations, not general computing. It\'s like comparing a Formula 1 race car to a minivan - the F1 car is better at its specific job despite having fewer features.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'computing-power-comprehensive',
    conspiracyId: 'computing-power-insufficient',
    responseType: 'comprehensive',
    content: 'The Apollo Guidance Computer was revolutionary technology that pioneered computing innovations decades ahead of consumer computers. It featured the first integrated circuits, real-time multitasking operating system, and fault-tolerant design capable of recovering from errors mid-flight. While it had 4KB RAM and 72KB ROM, it was a dedicated flight computer optimized specifically for navigation and guidance calculations - exactly what Apollo needed. The famous "1202 alarm" during Apollo 11 landing proved the computer\'s sophisticated error-handling: when overloaded, it continued operating and successfully completed the landing. Apollo also used massive IBM mainframes at Mission Control for trajectory planning and mission monitoring. NASA spent $60 billion (in today\'s dollars) on computing technology, driving the development of integrated circuits and software engineering practices. Margaret Hamilton, who led AGC software development, literally coined the term "software engineering" because existing programming concepts weren\'t adequate for Apollo\'s requirements.',
    scientificSources: [sources[1], sources[4], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'computing-power-educational',
    conspiracyId: 'computing-power-insufficient',
    responseType: 'educational',
    content: 'Apollo\'s computing architecture represented the pinnacle of 1960s technology specifically engineered for space navigation requirements. The Apollo Guidance Computer utilized integrated circuits when they were cutting-edge technology, consuming 60% of all integrated circuits produced in the early 1960s and driving microchip development forward by decades. Its real-time operating system featured priority scheduling, multitasking capabilities, and error recovery mechanisms that wouldn\'t become common in consumer computers until the 1980s-90s. The computer\'s 4KB RAM and 72KB ROM were sufficient for its dedicated purpose: orbital mechanics calculations, navigation computations, guidance control algorithms, and rendezvous trajectory planning. Ground computing infrastructure included IBM System/360 mainframes providing real-time mission monitoring, trajectory planning, and global communication coordination through worldwide tracking stations. Software engineering innovations included modular programming, real-time debugging, and priority interrupt systems designed by Margaret Hamilton\'s team. The AGC\'s specialized design offered guaranteed response times for critical calculations, 99.9% reliability requirements, and space-hardened operation in radiation and thermal extremes - capabilities that modern general-purpose computers still struggle to match for mission-critical applications.',
    scientificSources: [sources[1], sources[4], sources[9], sources[11]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Margaret Hamilton Software Engineering responses
  {
    id: 'margaret-hamilton-short',
    conspiracyId: 'margaret-hamilton-software',
    responseType: 'short',
    content: 'Margaret Hamilton literally coined the term "software engineering" because existing programming concepts weren\'t adequate for Apollo! She pioneered priority scheduling, real-time multitasking, and error recovery systems. The famous "1202 alarm" during Apollo 11 landing proved her error-handling software worked perfectly - it continued operating and successfully landed despite being overloaded.',
    scientificSources: [sources[1], sources[11]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'margaret-hamilton-comprehensive',
    conspiracyId: 'margaret-hamilton-software',
    responseType: 'comprehensive',
    content: 'Margaret Hamilton\'s software engineering innovations were groundbreaking precisely because they didn\'t exist before Apollo - she invented them! Leading the AGC software development team, she created the first priority scheduling system that could interrupt less critical tasks for emergency calculations, real-time debugging capabilities for diagnosing problems during flight, modular programming with separate programs for different mission phases, and sophisticated error recovery that could restart and continue with highest priority tasks if overloaded. Her team developed real-time operating system concepts that wouldn\'t become common in consumer computers until decades later. The Apollo software featured multitasking capabilities, fault-tolerant design, and guaranteed response times for critical calculations - all revolutionary for the 1960s. Hamilton literally coined the term "software engineering" because traditional programming approaches were inadequate for Apollo\'s life-critical requirements.',
    scientificSources: [sources[1], sources[11], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'margaret-hamilton-educational',
    conspiracyId: 'margaret-hamilton-software',
    responseType: 'educational',
    content: 'Software engineering as a discipline emerged from Apollo program requirements, with Margaret Hamilton\'s team pioneering concepts that became fundamental to modern computing. Her innovations included priority interrupt systems allowing critical navigation calculations to override routine tasks, real-time multitasking operating systems capable of running multiple programs simultaneously with predictable timing, modular software architecture enabling separate programs for launch, transit, and landing phases, and fault-tolerant error recovery systems that could detect overload conditions and continue operating with essential functions. The AGC software incorporated real-time debugging tools for diagnosing issues during flight operations, priority scheduling algorithms ensuring critical calculations received immediate processor attention, and memory management techniques optimizing limited 4KB RAM for maximum efficiency. Hamilton\'s team developed software engineering methodologies including systematic testing procedures, documentation standards, and quality assurance processes that became industry standards. The 1202 program alarm during Apollo 11 landing demonstrated the software\'s sophisticated design: when overloaded by radar data, the system recognized the condition, restarted with essential functions, and successfully completed the landing sequence.',
    scientificSources: [sources[1], sources[11], sources[4], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Computing Requirements vs Capabilities responses
  {
    id: 'requirements-mismatch-short',
    conspiracyId: 'computing-requirements-mismatch',
    responseType: 'short',
    content: 'Apollo\'s computational needs perfectly matched AGC capabilities! Orbital mechanics uses well-understood math - trigonometry, vector calculations, and Newton\'s laws. The AGC could perform these calculations with sufficient precision for lunar missions. The limiting factor wasn\'t computational power but sensor accuracy and propulsion system precision.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'requirements-mismatch-comprehensive',
    conspiracyId: 'computing-requirements-mismatch',
    responseType: 'comprehensive',
    content: 'Apollo\'s computational requirements were precisely matched to AGC capabilities through careful engineering analysis. The mission needed orbital mechanics calculations using established mathematical principles, navigation computations involving trigonometry and vector mathematics, guidance control using proportional-integral-derivative (PID) algorithms, and trajectory planning through numerical integration of Newton\'s laws. The AGC performed these calculations with adequate precision for lunar missions - the limiting factors were sensor accuracy and propulsion system precision, not computational power. Ground-based IBM mainframes handled trajectory planning and mission monitoring with massive computational resources. The distributed computing network included worldwide tracking stations with dedicated computers, real-time mission control systems, and parallel simulation capabilities. NASA\'s computing budget of $60 billion (today\'s dollars) drove innovation in integrated circuits, software engineering, and real-time systems that exceeded mission requirements.',
    scientificSources: [sources[1], sources[4], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'requirements-mismatch-educational',
    conspiracyId: 'computing-requirements-mismatch',
    responseType: 'educational',
    content: 'Computational requirements analysis demonstrates that Apollo missions operated within well-defined mathematical boundaries achievable with 1960s technology. Orbital mechanics calculations require solving differential equations describing gravitational forces, achievable through numerical integration techniques available since the 1940s. Navigation computations involve coordinate transformations, trigonometric functions, and vector mathematics - standard mathematical operations easily handled by dedicated computing systems. Guidance control algorithms use proportional-integral-derivative (PID) control theory, well-established engineering principles requiring minimal computational resources. Trajectory planning involves iterative calculations of position and velocity vectors over time intervals, computationally intensive but mathematically straightforward. The AGC\'s 4KB RAM and 72KB ROM provided sufficient storage for essential algorithms, navigation tables, and mission parameters. Processing requirements operated well within the 1MHz clock speed capabilities, with most calculations completing in milliseconds rather than requiring continuous processing. Ground computing infrastructure provided backup capabilities for complex trajectory planning and mission analysis using IBM mainframes with substantial computational resources exceeding spacecraft requirements.',
    scientificSources: [sources[1], sources[4], sources[9], sources[11]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Dedicated vs General Purpose Computing responses
  {
    id: 'dedicated-computing-short',
    conspiracyId: 'dedicated-vs-general-computing',
    responseType: 'short',
    content: 'Dedicated systems are often superior for specific tasks! It\'s like comparing a Formula 1 race car to a minivan - the F1 car is better at racing despite fewer features. The AGC was optimized for navigation calculations with guaranteed response times, 99.9% reliability, and space-hardened operation that general-purpose computers still struggle to match.',
    scientificSources: [sources[1], sources[4]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'dedicated-computing-comprehensive',
    conspiracyId: 'dedicated-vs-general-computing',
    responseType: 'comprehensive',
    content: 'Dedicated computing systems excel at specific tasks through optimization that general-purpose computers cannot match. The AGC was engineered specifically for navigation and guidance calculations, providing guaranteed response times for critical operations, 99.9% reliability requirements during mission phases, minimal power consumption (55 watts vs. modern computers requiring hundreds), and space-hardened operation in radiation and thermal extremes. Modern smartphones are general-purpose devices optimized for multiple applications, resulting in unpredictable timing, susceptibility to crashes and interference, significant power consumption and heat generation, and vulnerability to software conflicts. The AGC\'s specialization enabled it to perform its mission-critical functions more reliably than any general-purpose computer of its era or even today. Dedicated systems provide deterministic behavior essential for life-critical applications, optimized resource utilization for specific tasks, and simplified architecture reducing failure modes.',
    scientificSources: [sources[1], sources[4], sources[11]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'dedicated-computing-educational',
    conspiracyId: 'dedicated-vs-general-computing',
    responseType: 'educational',
    content: 'Computer architecture principles demonstrate that dedicated systems often outperform general-purpose computers for specific applications through specialized optimization. Real-time embedded systems require deterministic timing guarantees impossible with general-purpose operating systems that prioritize multitasking flexibility over predictable response times. The AGC utilized dedicated instruction sets optimized for mathematical calculations, specialized memory architecture for fast access to navigation data, and minimal operating system overhead ensuring maximum computational resources for mission-critical functions. General-purpose computers sacrifice efficiency for versatility, incorporating complex operating systems with unpredictable scheduling, extensive hardware abstraction layers reducing performance, and compatibility requirements limiting optimization opportunities. Modern spacecraft continue using dedicated computing systems for life-critical functions while employing general-purpose computers for non-essential operations. The AGC\'s architecture provided fault tolerance through hardware redundancy, software error recovery, and simplified design reducing potential failure modes - characteristics that remain challenging for complex general-purpose systems.',
    scientificSources: [sources[1], sources[4], sources[11], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Modern CGI Better responses
  {
    id: 'modern-cgi-short',
    conspiracyId: 'modern-cgi-better',
    responseType: 'short',
    content: 'Exactly - this proves Apollo footage is real! CGI didn\'t exist in the 1960s. The first computer-generated movie footage appeared in 1973\'s \"Westworld.\" Apollo footage shows perfect lunar physics (1/6 gravity dust trajectories, no air resistance) that would have been impossible to simulate with 1960s technology or even today\'s computers.',
    scientificSources: [sources[11], sources[10]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'modern-cgi-comprehensive',
    conspiracyId: 'modern-cgi-better',
    responseType: 'comprehensive',
    content: 'This argument actually proves Apollo\'s authenticity! Computer-generated imagery simply didn\'t exist in the 1960s - the first CGI appeared in 1973\'s \"Westworld,\" and the first CGI human character wasn\'t until 1988\'s \"Tin Toy,\" twenty years after Apollo 11. Apollo footage contains unique real-world physics impossible to simulate with period technology: perfect parabolic dust trajectories in 1/6 gravity with no air resistance, mathematically precise gravitational effects on all objects, natural human movement in reduced gravity, and authentic fabric behavior. Even modern attempts to recreate Apollo footage using advanced CGI consistently look artificial compared to the originals. Films like \"Apollo 13\" deliberately avoided faking lunar surface activity because filmmakers knew it wouldn\'t look convincing even with 1990s technology. The raw, documentary nature of Apollo footage - with unplanned moments, technical difficulties, and boring scientific procedures - contrasts sharply with the polished, controlled environments of fictional films.',
    scientificSources: [sources[11], sources[10], sources[9]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'modern-cgi-educational',
    conspiracyId: 'modern-cgi-better',
    responseType: 'educational',
    content: 'Film technology analysis reveals why Apollo footage authenticity is confirmed by modern CGI comparisons. Computer graphics evolution shows 1960s impossibility: first primitive CGI in 1973 \"Westworld,\" basic geometric shapes requiring room-sized computers; 1980s wireframe graphics for simple objects; 1990s early realistic CGI still obviously artificial; 2000s+ advanced physics simulation becoming convincing. Apollo footage demonstrates authentic physics characteristics: dust particles following perfect parabolic trajectories under 1/6 gravity, no atmospheric interference affecting particle behavior, natural human movement adapted to reduced gravitational field, realistic fabric behavior and equipment interactions. Film versus digital technology differences show Apollo used analog Hasselblad cameras with Carl Zeiss lenses capturing continuous information through photochemical processes, creating organic visual signatures difficult to replicate digitally. Modern reconstruction attempts consistently fail to match Apollo\'s natural appearance because they rely on mathematical approximations rather than authentic physical phenomena. The \"uncanny valley\" problem affects even today\'s CGI, where computer-generated humans and physics look almost but not quite real, while Apollo footage appears natural because it captures actual events under real conditions.',
    scientificSources: [sources[11], sources[10], sources[9], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Why Haven't Returned responses
  {
    id: 'havent-returned-short',
    conspiracyId: 'why-havent-returned',
    responseType: 'short',
    content: 'We stopped because we achieved the goal (beat the Soviets) and it was incredibly expensive - consuming 4% of the federal budget ($280 billion in today\'s money). We DID go back six times total between 1969-1972. It\'s like asking "If D-Day really happened, why didn\'t we invade Normandy again?" Mission accomplished.',
    scientificSources: [sources[12], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'havent-returned-comprehensive',
    conspiracyId: 'why-havent-returned',
    responseType: 'comprehensive',
    content: 'Apollo was terminated due to economic and political realities, not technological impossibility. The program cost $25.8 billion in 1973 dollars ($194-280 billion adjusted), consuming 4-5% of the federal budget at peak. Each mission cost approximately $25 billion in today\'s dollars. Once the political objective of beating the USSR was achieved, public and congressional support evaporated. The Vietnam War was draining massive resources, domestic issues took priority, and there was no compelling reason for continued lunar missions after the initial scientific goals were met. Production lines were shut down, contractors moved to other projects, and infrastructure was dismantled. We accomplished six successful landings between 1969-1972, demonstrating repeated capability. NASA\'s current Artemis program proves we never "lost" the knowledge - just the political will and budget allocation.',
    scientificSources: [sources[12], sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'havent-returned-educational',
    conspiracyId: 'why-havent-returned',
    responseType: 'educational',
    content: 'Space program analysis reveals that Apollo\'s termination followed typical patterns for large government projects achieving their primary objectives. Economic factors included unsustainable budget allocation of 4-5% of total federal spending, individual mission costs of $25 billion (inflation-adjusted), and competing priorities from Vietnam War expenditures and domestic programs. Political dynamics showed initial strong support driven by Cold War competition, rapid decline in public interest after first successful landing, and congressional pressure to redirect funding to terrestrial concerns. Technical considerations demonstrated that six successful missions (Apollo 11, 12, 14, 15, 16, 17) proved repeated capability, scientific objectives were largely achieved through sample collection and geological surveys, and diminishing returns set in after initial exploration goals were met. Infrastructure challenges included specialized production lines that were expensive to maintain, contractor expertise that dispersed to other projects, and Saturn V manufacturing that required enormous industrial capacity. Modern Artemis program development shows that technological knowledge was preserved in documentation and institutional memory, proving that capability gaps result from budget priorities rather than lost technology.',
    scientificSources: [sources[12], sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Military Base Argument responses  
  {
    id: 'military-base-short',
    conspiracyId: 'military-base-argument',
    responseType: 'short',
    content: 'A moon base would be the WORST military investment - 240,000 miles away with 3-day travel time, not exactly rapid deployment! Plus, the 1967 Outer Space Treaty (signed by US, USSR, and 117 countries) explicitly prohibits military bases on the moon. Why spend trillions on a useless moon base when you can dominate with aircraft carriers and satellites that actually matter?',
    scientificSources: [sources[13], sources[12]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'military-base-comprehensive',
    conspiracyId: 'military-base-argument',
    responseType: 'comprehensive',
    content: 'Military moon bases are strategically nonsensical and legally prohibited. Strategic analysis shows 240,000-mile distance creates 3-day minimum response time, making rapid deployment impossible; massive cost (trillions of dollars) for minimal tactical advantage; vulnerable supply lines requiring constant resupply missions; and no meaningful projection of Earth-based power. Legal constraints include the 1967 Outer Space Treaty, signed by the US, USSR, and now 117 countries, with Article IV explicitly prohibiting military bases, installations, and fortifications on celestial bodies. Practical military considerations favor Earth-based assets: aircraft carriers provide mobile power projection, satellite networks offer global surveillance and communication, submarine-launched missiles ensure strategic deterrence, and air bases enable rapid response to actual conflicts. The absence of moon bases actually proves rational decision-making rather than inability to reach the moon - military strategists correctly prioritized effective Earth-based systems over expensive lunar installations with no tactical value.',
    scientificSources: [sources[13], sources[12], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'military-base-educational',
    conspiracyId: 'military-base-argument',
    responseType: 'educational',  
    content: 'Military strategic analysis demonstrates why lunar bases lack tactical value for Earth-based conflicts. Geographic factors include 384,400 km average Earth-Moon distance requiring minimum 3-day transit time, communication delays of 1.3-1.7 seconds each way, and extreme logistical challenges for personnel and equipment transport. Cost-benefit analysis shows estimated construction costs in the trillions of dollars, ongoing supply mission expenses, and maintenance requirements in hostile space environment, versus proven effectiveness of terrestrial military assets. International law considerations include the 1967 Outer Space Treaty ratified by 117 nations, Article IV specifically prohibiting military installations on celestial bodies, and diplomatic consequences of treaty violations. Alternative military investments provide superior strategic value: aircraft carrier groups offer global power projection, satellite constellations enable worldwide surveillance and communication, intercontinental ballistic missile systems ensure strategic deterrence, and forward operating bases provide rapid response capabilities. Historical context shows that major powers (US, USSR/Russia, China) have consistently prioritized practical military technologies over symbolic lunar installations, demonstrating rational strategic thinking rather than technological limitations.',
    scientificSources: [sources[13], sources[12], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Camera Man Left Behind responses
  {
    id: 'camera-man-short',
    conspiracyId: 'camera-man-left-behind',
    responseType: 'short',
    content: 'They used a Ground-Commanded Television Assembly (GCTA) remotely operated from Earth! The camera was mounted on the lunar rover, positioned before takeoff, and Mission Control operated it with a 3-second delay. Edward Fendell ("Captain Video") successfully captured Apollo 17\'s liftoff after missing Apollo 15 and 16 due to timing issues.',
    scientificSources: [sources[14], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'camera-man-comprehensive',
    conspiracyId: 'camera-man-left-behind',
    responseType: 'comprehensive',
    content: 'The lunar module liftoff was filmed using NASA\'s Ground-Commanded Television Assembly (GCTA) system, a sophisticated remote camera setup mounted on the lunar rover. The system consisted of a Color Television Camera (CTV) and Television Control Unit (TCU) that could be operated from Mission Control on Earth despite the 3-second radio signal delay. Operator Edward Fendell, nicknamed "Captain Video," had to predict the exact timing of liftoff and pre-position the camera accordingly. Mission success rates varied: Apollo 15\'s camera failed to tilt properly during liftoff, Apollo 16\'s timing was miscalculated and missed the sequence, but Apollo 17 successfully captured the complete takeoff. The evidence includes detailed mission transcripts showing Mission Control operators discussing camera positioning, NASA technical documentation of the GCTA specifications, and oral histories from Edward Fendell documenting the exact procedures used. The jerky, predictive camera movements visible in the footage actually prove remote Earth-based operation rather than smooth human tracking.',
    scientificSources: [sources[14], sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'camera-man-educational',
    conspiracyId: 'camera-man-left-behind',
    responseType: 'educational',
    content: 'Remote camera technology analysis reveals the sophisticated engineering behind Apollo liftoff filming. Technical specifications include Ground-Commanded Television Assembly (GCTA) consisting of Color Television Camera (CTV) with pan, tilt, and zoom capabilities, Television Control Unit (TCU) for signal processing and transmission, and lunar rover mounting system for stable platform positioning. Operational procedures required pre-mission camera positioning calculations, Mission Control timing predictions accounting for 3-second communication delay, and operator skill in predicting spacecraft trajectory and liftoff timing. Mission outcomes demonstrate technological capabilities: Apollo 15 (July 1971) experienced camera mechanism failure during tilt operation, Apollo 16 (April 1972) had timing miscalculation resulting in missed liftoff sequence, and Apollo 17 (December 1972) achieved successful complete liftoff documentation. Evidence verification includes NASA technical reports documenting system specifications, mission transcripts recording real-time operator communications, oral history interviews with Edward Fendell and other Mission Control personnel, and video analysis showing characteristic remote-operation camera movements with predictive rather than reactive tracking patterns. The footage itself provides authentication through dust behavior under 1/6 gravity, exhaust plume characteristics in vacuum, and jerky camera movements consistent with Earth-based remote control rather than smooth local operation.',
    scientificSources: [sources[14], sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Crosshairs Behind Objects responses
  {
    id: 'crosshairs-short',
    conspiracyId: 'crosshairs-behind-objects',
    responseType: 'short',
    content: 'The crosshairs are etched on glass in front of the film, so they should always be on top. When they appear "behind" objects, it\'s photo saturation - bright white areas overexpose the film and wash out the thin black crosshairs. This happens in copied/scanned versions, not originals. Ironically, this proves the photos are real!',
    scientificSources: [sources[15], sources[6]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'crosshairs-comprehensive',
    conspiracyId: 'crosshairs-behind-objects',
    responseType: 'comprehensive',
    content: 'Apollo cameras used Hasselblad 500 EL systems with reseau plates - glass plates with etched crosshairs positioned in front of the film for photogrammetric reference points. The crosshairs should theoretically always appear on top of photographed objects. However, when bright white objects (like astronaut suits or spacecraft surfaces) exceed the film\'s exposure threshold, they "bloom" and overpower the fine black crosshair lines through photographic saturation effects. This phenomenon is particularly visible in copied, scanned, or reproduced versions of the original photographs where the saturation effect is amplified. The effect proves authenticity because if crosshairs were painted on afterward (as conspiracy theorists claim), this saturation effect wouldn\'t occur - painted crosshairs would always remain visible regardless of underlying brightness levels. Original film archives show crosshairs more clearly, while later reproductions show the saturation effect more prominently.',
    scientificSources: [sources[15], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'crosshairs-educational',
    conspiracyId: 'crosshairs-behind-objects',
    responseType: 'educational',
    content: 'Photographic technology analysis explains crosshair visibility phenomena in Apollo imagery. Camera system specifications include Hasselblad 500 EL cameras modified for lunar use, Carl Zeiss Planar f/2.8 80mm lenses for optimal image quality, and reseau plates with precision-etched crosshairs providing photogrammetric reference points for scientific measurement. Film saturation physics demonstrate that photographic emulsion has limited dynamic range, bright objects reflecting intense sunlight exceed film\'s capture threshold, and overexposed areas "bloom" across surrounding film grain, overwhelming fine details like thin crosshair lines. Reproduction effects amplify this phenomenon: original film negatives show crosshairs more distinctly, printing and copying processes increase contrast and saturation, and digital scanning can further enhance saturation effects making crosshairs appear to disappear behind bright objects. Evidence authentication shows that painted-on crosshairs would maintain consistent visibility regardless of underlying image brightness, the saturation effect provides proof of authentic photographic processes, and analysis of original NASA film archives confirms crosshair presence in high-quality versions. This photographic artifact actually serves as evidence for authenticity rather than manipulation.',
    scientificSources: [sources[15], sources[6], sources[4], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Letter C on Moon Rock responses
  {
    id: 'letter-c-short',
    conspiracyId: 'letter-c-moon-rock',
    responseType: 'short',
    content: 'The "C" only appears in one specific print - not in the original Apollo 16 film! A conspiracy theorist (Steve Troy) investigated this in 2001 and found it was a hair or fiber that got stuck during copying. The original film shows no "C" whatsoever. The "second C" on the ground is just a shadow from a small surface bump.',
    scientificSources: [sources[15], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'letter-c-comprehensive',
    conspiracyId: 'letter-c-moon-rock',
    responseType: 'comprehensive',
    content: 'The infamous "C" on a moon rock in Apollo 16 photography has been thoroughly investigated and debunked. The letter appears only in specific reproduced prints and copies, not in the original film or high-quality NASA archives. Steve Troy, initially a moon landing skeptic, conducted a detailed investigation in 2001 and concluded that the "C" was a contamination artifact - likely a hair or fiber - that was introduced during the photographic reproduction process. Analysis of multiple versions of the same photograph shows the "C" is absent from original film sources and early prints but appears in later copies where the contamination occurred. The "second C" supposedly visible on the lunar surface is simply a natural shadow cast by a small bump or irregularity in the lunar regolith. This case actually demonstrates the thoroughness of conspiracy theory debunking - even skeptics who investigated the claim scientifically concluded it was a reproduction artifact rather than evidence of fakery.',
    scientificSources: [sources[15], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'letter-c-educational',
    conspiracyId: 'letter-c-moon-rock',
    responseType: 'educational',
    content: 'Photographic artifact investigation demonstrates how reproduction contamination can create false evidence. Original source analysis shows Apollo 16 mission film AS16-107-17446 contains no letter markings in NASA\'s original film archives, early generation prints from the 1970s show no anomalous markings, and high-resolution digital scans of original negatives confirm absence of letter "C". Contamination investigation conducted by Steve Troy (2001) involved systematic examination of multiple print generations, identification of reproduction artifacts introduced during copying processes, and documentation of hair or fiber contamination during printing procedures. Print generation analysis reveals that contamination occurs during photographic reproduction when foreign materials (hair, dust, fibers) contact the printing surface, create shadows or marks that appear as letters or symbols, and become permanently incorporated into that specific print run while remaining absent from original sources. Scientific methodology shows how proper investigation requires examination of original source materials, comparison across multiple reproduction generations, and documentation of contamination points in the reproduction chain. This case exemplifies how apparent "evidence" can result from mundane technical issues rather than deliberate manipulation.',
    scientificSources: [sources[15], sources[6], sources[4], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Armstrong Reflection No Camera responses
  {
    id: 'armstrong-reflection-short',
    conspiracyId: 'armstrong-reflection-no-camera',
    responseType: 'short',
    content: 'Armstrong couldn\'t hold a handheld camera in his bulky spacesuit! The Hasselblad camera was mounted on his chest - exactly where his hands are positioned in the reflection. The chest-mounted system was specifically designed for lunar photography. Recent digital analysis clearly shows Armstrong operating the chest-mounted camera.',
    scientificSources: [sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'armstrong-reflection-comprehensive',
    conspiracyId: 'armstrong-reflection-no-camera',
    responseType: 'comprehensive',
    content: 'The famous reflection of Neil Armstrong in Buzz Aldrin\'s visor shows Armstrong operating a chest-mounted camera system, not a handheld device. The Hasselblad 500 EL cameras were specifically modified for lunar use with a chest-mounted bracket system called the Lunar Hand Tool Carrier (LHTC). This mounting system was essential because astronauts couldn\'t effectively operate handheld cameras while wearing pressurized gloves and bulky spacesuits. The chest-mounted camera featured large, glove-friendly controls and a trigger mechanism accessible while wearing the suit. In the visor reflection, Armstrong\'s hands are positioned exactly where they would be to operate the chest-mounted camera controls. Recent digital enhancement and analysis of the visor reflection clearly shows the camera system mounted on Armstrong\'s chest. The reflection provides evidence of authentic lunar surface photography using period-appropriate NASA equipment designed specifically for the unique challenges of lunar environment photography.',
    scientificSources: [sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'armstrong-reflection-educational',
    conspiracyId: 'armstrong-reflection-no-camera',
    responseType: 'educational',
    content: 'Camera system engineering analysis reveals how Apollo photography equipment was adapted for lunar surface operations. Equipment specifications include Hasselblad 500 EL cameras modified with chest mounting brackets (Lunar Hand Tool Carrier), large-format controls operable with pressurized gloves, trigger mechanisms accessible through spacesuit mobility constraints, and film magazines designed for rapid changing during EVA operations. Operational requirements addressed spacesuit mobility limitations preventing normal camera handling, vacuum environment affecting mechanical camera functions, temperature extremes requiring specialized lubrication and materials, and need for reliable operation during critical mission phases. Visor reflection analysis shows Armstrong\'s hand positions consistent with chest-mounted camera operation, camera system visible in enhanced digital analysis of the reflection, and body posture appropriate for operating mounted equipment rather than handheld devices. Historical documentation includes NASA technical specifications for camera mounting systems, astronaut training records for camera operation procedures, and mission photography protocols showing systematic approach to lunar surface documentation. This evidence demonstrates that Apollo photography used purpose-built equipment designed for the unique challenges of lunar surface operations.',
    scientificSources: [sources[1], sources[6], sources[4], sources[14]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Multiple Light Sources responses
  {
    id: 'multiple-light-short',
    conspiracyId: 'multiple-light-sources',
    responseType: 'short',
    content: 'The lunar surface reflects sunlight in all directions, just like how the moon reflects light back to Earth! This creates natural fill lighting. Additionally, earthshine, spacecraft surfaces, and white spacesuits all reflect light around the scene. This "multiple light source" effect is exactly what you\'d expect on the lunar surface, not in a studio.',
    scientificSources: [sources[6], sources[4]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'multiple-light-comprehensive',
    conspiracyId: 'multiple-light-sources',
    responseType: 'comprehensive',
    content: 'Apollo photography shows natural lighting effects that actually prove lunar surface authenticity rather than studio production. The lunar surface has an albedo of approximately 8%, meaning it reflects sunlight in all directions, creating natural fill lighting that illuminates shadowed areas. Without atmospheric scattering to soften light, direct sunlight creates sharp primary shadows while reflected light from the lunar regolith provides secondary illumination. Additional light sources include earthshine (sunlight reflected from Earth back to the moon), highly reflective spacecraft surfaces made of polished aluminum and other metals, and white spacesuits that act as mobile reflectors. This combination creates complex but natural lighting that appears "professional" because it results from multiple reflective surfaces rather than artificial studio lights. In a studio, this lighting would require careful setup of multiple artificial sources, but on the moon it occurs naturally from environmental reflection. The lighting patterns in Apollo photos match exactly what photographers and lighting experts predict for the lunar environment.',
    scientificSources: [sources[6], sources[4], sources[12]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'multiple-light-educational',
    conspiracyId: 'multiple-light-sources',
    responseType: 'educational',
    content: 'Lunar lighting physics demonstrates how natural environmental factors create complex illumination patterns. Primary illumination sources include direct sunlight unfiltered by atmosphere, providing intense directional lighting and creating sharp shadow boundaries. Secondary illumination results from lunar surface reflection with 8% albedo bouncing sunlight in all directions, earthshine providing additional reflected light when Earth is visible from lunar surface, and spacecraft surfaces acting as large reflectors with polished aluminum and white paint creating bright reflected light sources. Environmental factors affecting lighting include absence of atmospheric scattering that would normally diffuse light on Earth, vacuum conditions preventing dust or vapor from affecting light transmission, and extreme contrast between direct sunlight and shadow areas typical of airless environments. Photography analysis shows that lighting patterns match predictions for lunar environmental conditions, shadow angles consistent with single primary light source (sun), and fill lighting effects consistent with calculated surface reflection coefficients. Studio lighting comparison reveals that artificial recreation would require multiple precisely positioned lights, complex diffusion systems to replicate surface reflection effects, and professional lighting expertise that exceeds 1960s capabilities for the volume of photography produced.',
    scientificSources: [sources[6], sources[4], sources[12], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Perfect Lighting Aldrin Ladder responses
  {
    id: 'aldrin-ladder-short',
    conspiracyId: 'perfect-lighting-aldrin-ladder',
    responseType: 'short',
    content: 'This actually proves authenticity! The lunar surface has 8% albedo - it reflects sunlight like a giant mirror. The bright lunar regolith bounces sunlight into shadowed areas, naturally illuminating Aldrin. White spacecraft surfaces and his spacesuit also reflect light. In a studio, this fill lighting would be much more artificial and uniform.',
    scientificSources: [sources[6], sources[15]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'aldrin-ladder-comprehensive',
    conspiracyId: 'perfect-lighting-aldrin-ladder',
    responseType: 'comprehensive',
    content: 'Buzz Aldrin\'s illumination while descending the lunar module ladder demonstrates authentic lunar lighting physics that would be difficult to replicate in a studio. The lunar surface\'s 8% albedo means it reflects sunlight in all directions, acting like a massive natural reflector that bounces light into shadowed areas. Without atmospheric scattering, this reflected light maintains significant intensity and provides natural fill lighting. Additional factors contributing to Aldrin\'s illumination include the bright white lunar module surfaces reflecting intense sunlight, Aldrin\'s white spacesuit acting as a reflector, and earthshine providing additional ambient light when Earth is visible. The lighting appears natural and graduated rather than artificial because it results from environmental reflection rather than positioned studio lights. In a 1960s studio, creating this type of natural-looking fill lighting would require sophisticated equipment and techniques that weren\'t available to filmmakers of that era. The lighting physics match exactly what lighting experts and physicists predict for lunar surface conditions.',
    scientificSources: [sources[6], sources[15], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'aldrin-ladder-educational',
    conspiracyId: 'perfect-lighting-aldrin-ladder',
    responseType: 'educational',
    content: 'Lunar surface lighting analysis demonstrates how environmental reflection creates natural fill illumination in shadow areas. Surface reflection physics show lunar regolith albedo of 8% reflecting sunlight omnidirectionally, absence of atmospheric scattering maintaining reflected light intensity, and large surface area creating extensive natural reflector effect. Environmental lighting factors include lunar module surfaces with high-reflectivity materials (polished aluminum, white paint) creating bright secondary light sources, astronaut spacesuits with white outer material acting as mobile reflectors, and earthshine contributing additional ambient illumination during specific lunar phases. Shadow illumination analysis reveals that objects in lunar shadows receive significant reflected light from surrounding surfaces, creating graduated lighting rather than absolute darkness typical of Earth shadows, and natural lighting distribution consistent with environmental reflection calculations. Studio lighting comparison shows that 1960s film technology lacked sophisticated fill lighting systems, recreating natural reflection effects would require advanced techniques unavailable at the time, and achieving consistent natural-looking results across hundreds of photographs would exceed contemporary filmmaking capabilities. This lighting authenticity serves as evidence for genuine lunar surface photography rather than artificial studio production.',
    scientificSources: [sources[6], sources[15], sources[4], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Identical Backgrounds Miles Apart responses
  {
    id: 'identical-backgrounds-short',
    conspiracyId: 'identical-backgrounds-miles-apart',
    responseType: 'short',
    content: 'This misunderstands lunar perspective! With no atmospheric haze, distant mountains 10-20 kilometers away appear much closer. When camera positions change by just a few yards, these extremely distant objects show virtually no parallax shift - exactly like seeing distant mountains from different highway points on Earth.',
    scientificSources: [sources[16], sources[6]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'identical-backgrounds-comprehensive',
    conspiracyId: 'identical-backgrounds-miles-apart',
    responseType: 'comprehensive',
    content: 'Apollo photography shows natural parallax effects that prove authentic lunar surface imaging from multiple locations. The Moon\'s lack of atmospheric haze eliminates depth perception cues, making distant mountains appear much closer than their actual distance of 10-20 kilometers. What appear as "nearby hills" are actually massive mountains several kilometers high. When camera positions change by only a few yards relative to these extremely distant geological features, the parallax shift is virtually imperceptible - identical to viewing distant mountains from different points along an Earth highway. Parallax analysis of foreground objects clearly demonstrates that images were taken from widely different locations around landing sites. The apparent similarity of distant backgrounds while foreground elements change dramatically is exactly what photography experts predict for the lunar visual environment without atmospheric scattering.',
    scientificSources: [sources[16], sources[6], sources[2]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'identical-backgrounds-educational',
    conspiracyId: 'identical-backgrounds-miles-apart',
    responseType: 'educational',
    content: 'Lunar photography analysis demonstrates how environmental factors create unique visual perspective effects. Atmospheric perspective differences show Earth\'s atmosphere provides depth cues through haze, color shifting, and contrast reduction with distance, while lunar vacuum maintains sharp focus and contrast regardless of distance, making distant objects appear deceptively close. Parallax physics calculations reveal that objects at 10-20 kilometer distances show minimal parallax shift when viewing positions change by mere meters, foreground objects demonstrate significant parallax effects proving camera movement, and angular displacement follows predictable mathematical relationships for genuine multi-location photography. Geological scale considerations include lunar mountains reaching several kilometers in height, landing site positions relative to major geological features, and sight lines across lunar terrain spanning vast distances. Photographic evidence authentication shows systematic parallax analysis of foreground elements confirming multiple distinct camera positions, background consistency matching predictions for distant geological features, and lighting angles consistent with solar illumination from different times and locations during surface operations.',
    scientificSources: [sources[16], sources[6], sources[2], sources[5]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // No Engine Exhaust Visible responses
  {
    id: 'no-exhaust-short',
    conspiracyId: 'no-engine-exhaust-visible',
    responseType: 'short',
    content: 'In space vacuum, rocket exhaust behaves completely differently! Without air pressure to constrain the plume, it spreads out rapidly and appears much fainter. The lunar module used hypergolic propellants (Aerozine 50 and nitrogen tetroxide) which burn essentially colorless and transparent in vacuum conditions.',
    scientificSources: [sources[17], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-exhaust-comprehensive',
    conspiracyId: 'no-engine-exhaust-visible',
    responseType: 'comprehensive',
    content: 'Lunar module propulsion system physics explain why exhaust appears invisible during vacuum operations. The descent propulsion system used hypergolic propellants (Aerozine 50 fuel and nitrogen tetroxide oxidizer) with a pintle injector design optimized for vacuum performance. In space vacuum, exhaust gases expand rapidly without atmospheric pressure constraints, creating a very diffuse, nearly invisible plume unlike the dramatic flames visible in Earth\'s atmosphere. Hypergolic propellants burn essentially colorless and transparent in vacuum conditions, producing combustion products that spread well beyond the landing site. The exhaust behavior matches exactly what propulsion engineers predict for vacuum rocket operations. Earth-based rocket launches show visible flames due to atmospheric interaction and combustion chemistry differences, while lunar operations demonstrate the authentic physics of vacuum propulsion systems.',
    scientificSources: [sources[17], sources[1], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-exhaust-educational',
    conspiracyId: 'no-engine-exhaust-visible',
    responseType: 'educational',
    content: 'Rocket propulsion physics analysis reveals fundamental differences between atmospheric and vacuum exhaust behavior. Propulsion system specifications include hypergolic propellant combination of Aerozine 50 (fuel) and nitrogen tetroxide (oxidizer) providing reliable ignition without external ignition systems, pintle injector design optimizing propellant mixing and combustion efficiency, and vacuum-optimized nozzle expansion ratios maximizing thrust in space environment. Vacuum exhaust dynamics show rapid gas expansion without atmospheric pressure constraints, diffuse plume dispersion over large areas, and minimal visual signature due to lack of atmospheric interaction effects. Combustion chemistry differences demonstrate that hypergolic propellants produce colorless combustion products in vacuum, atmospheric rocket fuels create visible flames through atmospheric interaction and different chemical compositions, and exhaust visibility depends on environmental pressure and chemical composition rather than thrust magnitude. Engineering documentation includes NASA technical specifications for Lunar Module descent propulsion system, test data from vacuum chamber propulsion testing, and mission footage analysis showing predicted exhaust behavior patterns.',
    scientificSources: [sources[17], sources[1], sources[4], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Rover Tracks Too Perfect responses
  {
    id: 'rover-tracks-short',
    conspiracyId: 'rover-tracks-too-perfect',
    responseType: 'short',
    content: 'The rover tracks are not only real but have been independently photographed by India\'s Chandrayaan-1, China\'s Chang\'e 2, and NASA\'s Lunar Reconnaissance Orbiter! Without wind, rain, or geological activity, tracks can persist for millions of years in lunar dust that has sharp edges and sticks together in vacuum.',
    scientificSources: [sources[5], sources[2]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'rover-tracks-comprehensive',
    conspiracyId: 'rover-tracks-too-perfect',
    responseType: 'comprehensive',
    content: 'Apollo lunar rover tracks demonstrate authentic lunar surface interaction and have been independently verified by multiple international space agencies. India\'s Chandrayaan-1 (2009), China\'s Chang\'e 2 (2010), and NASA\'s Lunar Reconnaissance Orbiter have all captured high-resolution images of rover tracks exactly where Apollo missions left them over 50 years ago. Lunar dust preservation science shows that regolith particles have sharp edges due to lack of weathering processes, allowing dust particles to interlock and maintain track impressions. The vacuum environment prevents erosion from wind or precipitation, while the absence of geological activity means tracks can persist for millions of years. Astronauts described the lunar dust as having properties similar to "talcum powder or wet sand" that held its shape well. The pristine appearance of tracks actually proves their authenticity - any artificial recreation would show different settling patterns and lack the precise physical characteristics of genuine lunar regolith interaction.',
    scientificSources: [sources[5], sources[2], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'rover-tracks-educational',
    conspiracyId: 'rover-tracks-too-perfect',
    responseType: 'educational',
    content: 'Lunar surface preservation analysis demonstrates exceptional track longevity in vacuum environments. Regolith characteristics include sharp-edged particles created by micrometeorite bombardment rather than water/wind erosion, electrostatic properties from solar radiation creating particle adhesion, and absence of organic decomposition or chemical weathering processes. Environmental preservation factors show vacuum conditions preventing atmospheric erosion, lack of precipitation eliminating water-based degradation, absence of seismic activity maintaining surface stability, and temperature cycling without moisture preventing freeze-thaw damage. International verification evidence includes Chandrayaan-1 orbital imagery confirming track locations and patterns, Chang\'e 2 high-resolution photography showing detailed track morphology, Lunar Reconnaissance Orbiter systematic documentation of all Apollo landing sites, and consistent track positioning matching historical mission documentation. Track morphology analysis reveals wheel impression patterns consistent with lunar rover specifications, depth profiles matching predicted regolith interaction under 1/6 gravity, and preservation quality demonstrating authentic vacuum environment exposure rather than terrestrial simulation attempts.',
    scientificSources: [sources[5], sources[2], sources[6], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Equipment Too Clean After Dust responses
  {
    id: 'equipment-clean-short',
    conspiracyId: 'equipment-too-clean-after-dust',
    responseType: 'short',
    content: 'This ignores the extensive documented dust problems Apollo astronauts actually had! Moon dust was extremely problematic - electrified by solar radiation, clung to everything, was abrasive to spacesuits, and caused eye and nose irritation. The lunar module\'s descent engine blew away fine surface dust during landing, as seen in mission footage.',
    scientificSources: [sources[18], sources[1]],
    effectiveness: 9,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'equipment-clean-comprehensive',
    conspiracyId: 'equipment-too-clean-after-dust',
    responseType: 'comprehensive',
    content: 'Apollo missions extensively documented serious lunar dust contamination problems that prove authentic lunar surface operations. Lunar dust was electrostatically charged by solar radiation, causing it to cling persistently to spacesuits, equipment, and surfaces. Apollo 12 crew reported that after orbital insertion, lunar dust filled the cabin atmosphere and caused eye and nose irritation. Apollo 16 experienced the most severe dust problems: Velcro surfaces were caked with dust, crew members\' hands, feet, and arms were covered with dust, and the cabin ventilation system couldn\'t effectively clear the atmosphere in zero gravity. The lunar module\'s descent engine did blow away fine surface dust during landing, as documented in 16mm film footage from each mission. Equipment inside the pressurized lunar module naturally stayed cleaner, while surface-exposed equipment shows clear dust accumulation in photographs. The dust problems were so significant that NASA continues researching dust mitigation strategies for future lunar missions.',
    scientificSources: [sources[18], sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'equipment-clean-educational',
    conspiracyId: 'equipment-too-clean-after-dust',
    responseType: 'educational',
    content: 'Lunar dust interaction analysis reveals complex contamination patterns affecting Apollo operations. Dust properties include sharp-edged particles created by micrometeorite impact, electrostatic charging from solar wind and UV radiation, and abrasive characteristics causing equipment wear and spacesuit degradation. Contamination mechanisms show electrostatic adhesion causing persistent dust attachment to surfaces, mechanical disturbance during surface operations spreading dust particles, and airlock transfer introducing dust into pressurized environments. Mission-specific dust problems include Apollo 12 cabin atmosphere contamination causing respiratory irritation, Apollo 16 severe dust accumulation on Velcro, crew surfaces, and equipment, and Apollo 17 extensive surface equipment dust coating documented in photographs. Environmental factors affecting dust distribution show descent engine exhaust clearing immediate landing area of fine particles, surface operations disturbing regolith and creating dust clouds, and vacuum conditions allowing dust particles to travel in ballistic trajectories without atmospheric interference. Documentation evidence includes mission debriefing reports detailing dust-related operational challenges, photographic evidence showing variable dust accumulation patterns, and ongoing NASA research programs addressing dust mitigation for future lunar exploration.',
    scientificSources: [sources[18], sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Film Video Quality Inconsistencies responses
  {
    id: 'film-quality-short',
    conspiracyId: 'film-video-quality-inconsistencies',
    responseType: 'short',
    content: 'Film experts prove Apollo footage was impossible to fake with 1960s technology! The footage used special Slow Scan Television at 10fps, not standard 30fps. Creating 143 minutes in slow motion would need storage technology 3,000 times more advanced than available. The "missing" tapes were backup telemetry recordings, not the actual broadcast footage.',
    scientificSources: [sources[19], sources[11]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'film-quality-comprehensive',
    conspiracyId: 'film-video-quality-inconsistencies',
    responseType: 'comprehensive',
    content: 'Film technology analysis proves that Apollo footage would have been impossible to fake using 1960s capabilities. The lunar surface footage was recorded using Slow Scan Television (SSTV) cameras operating at 10 frames per second rather than standard 30fps video. Creating convincing slow-motion footage of 143 minutes duration would have required recording 47 minutes of live action, but magnetic disk recorders of the era could only capture 30 seconds total for 90 seconds of playback - requiring storage technology almost 3,000 times more advanced than available. If shot on film and slowed down, thousands of feet of film would need splicing and transfer processes that would leave detectable artifacts - none of which are present in Apollo footage. The "missing" Apollo 11 tapes were backup telemetry recordings erased during NASA\'s Landsat program in the 1980s due to tape shortages, while the actual broadcast footage was recorded by TV stations worldwide and remains intact. Quality variations result from different camera systems, transmission methods, and recording equipment used throughout the missions.',
    scientificSources: [sources[19], sources[11], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'film-quality-educational',
    conspiracyId: 'film-video-quality-inconsistencies',
    responseType: 'educational',
    content: 'Television technology analysis demonstrates the impossibility of faking Apollo footage with 1960s capabilities. Camera system specifications include Slow Scan Television (SSTV) operating at 10 frames per second for bandwidth efficiency, specialized lunar surface cameras designed for vacuum and temperature extremes, and transmission systems optimized for 240,000-mile communication distances. Storage technology limitations show magnetic disk recorders limited to 30-second capacity with 90-second playback maximum, film-based systems requiring extensive splicing and transfer processes leaving detectable artifacts, and absence of digital storage or processing capabilities necessary for convincing manipulation. Quality variation factors include different camera systems used for various mission phases, signal transmission degradation over interplanetary distances, and recording equipment differences at multiple ground stations worldwide. Technical impossibilities for fakery include slow-motion recreation requiring 3,000x storage capacity improvement, seamless footage editing exceeding contemporary film technology capabilities, and simultaneous worldwide broadcast coordination impossible with 1960s communication systems. Historical documentation includes worldwide television station recordings preserving original broadcasts, NASA technical specifications for camera and transmission systems, and telemetry data backup systems explaining "missing tapes" controversy.',
    scientificSources: [sources[19], sources[11], sources[6], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Dust Behavior Wrong responses
  {
    id: 'dust-behavior-short',
    conspiracyId: 'dust-behavior-wrong',
    responseType: 'short',
    content: 'This claim has it backwards! Lunar dust DOES stick to everything precisely because of the vacuum environment. Apollo astronauts documented extensive dust adhesion problems throughout all missions - it was electrified by solar radiation and clung aggressively to spacesuits, equipment, and caused eye/respiratory irritation.',
    scientificSources: [sources[20], sources[21]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'dust-behavior-comprehensive',
    conspiracyId: 'dust-behavior-wrong',
    responseType: 'comprehensive',
    content: 'Apollo missions extensively documented serious lunar dust adhesion problems that prove authentic lunar surface operations. Lunar dust exhibits extraordinary adhesive properties due to electrostatic charging from solar radiation and absence of atmospheric moisture. In vacuum conditions, dust particles become electrostatically charged and cling aggressively to all surfaces. Apollo crews reported severe dust problems: Apollo 11 had dust contamination causing cabin atmosphere and respiratory issues, Apollo 12 experienced dust-filled atmosphere after orbital insertion, Apollo 16 had the most severe problems with Velcro floors caked in dust and crew members covered in dust, and Apollo 17\'s Harrison Schmitt described "lunar hay fever" from dust exposure. Over 95% of lunar dust particles are smaller than 2.5 μm with sharp, angular edges created by micrometeoroid impacts, creating strong interlocking and electrostatic forces that make removal extremely difficult.',
    scientificSources: [sources[20], sources[21], sources[18]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'dust-behavior-educational',
    conspiracyId: 'dust-behavior-wrong',
    responseType: 'educational',
    content: 'Lunar dust physics analysis reveals complex adhesion mechanisms that created significant operational challenges for Apollo missions. Electrostatic properties include photoelectric charging from solar radiation during lunar day, energetic electron charging from solar wind plasma during lunar night, and van der Waals forces between extremely fine particles creating strong attraction. Particle characteristics show over 95% of particles smaller than 2.5 micrometers, sharp angular edges from micrometeoroid impact fragmentation rather than weathering, and reentrant (locally concave) shapes that increase mechanical interlocking. Adhesion mechanisms include electrostatic attraction causing dust levitation above lunar surface and tenacious surface adherence, mechanical interlocking of jagged particles creating cohesive strength, and vacuum welding where clean metal surfaces bond directly in vacuum conditions. Mission documentation includes systematic dust problems across all Apollo surface missions, crew medical reports of respiratory and eye irritation from dust exposure, equipment contamination requiring extensive cleaning procedures, and ongoing NASA research programs for dust mitigation in future lunar exploration. The extensive dust adhesion problems actually provide strong evidence for authentic lunar surface operations.',
    scientificSources: [sources[20], sources[21], sources[18], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Footprints Too Perfect Airless responses
  {
    id: 'footprints-perfect-short',
    conspiracyId: 'footprints-too-perfect-airless',
    responseType: 'short',
    content: 'The absence of atmosphere is precisely WHY footprints preserve so perfectly! Lunar regolith has extremely fine, sharp-edged particles that interlock mechanically without needing moisture. With no wind, rain, or weathering, mathematical models show lunar footprints remain detectable for approximately 8 million years!',
    scientificSources: [sources[22], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'footprints-perfect-comprehensive',
    conspiracyId: 'footprints-too-perfect-airless',
    responseType: 'comprehensive',
    content: 'Lunar footprint preservation demonstrates authentic regolith properties that would be impossible to replicate artificially. Lunar regolith consists of extremely fine, angular particles created by billions of years of micrometeoroid impacts, with sharp-edged fragments that interlock mechanically without requiring atmospheric moisture. Cohesion mechanisms include mechanical interlocking of reentrant particle shapes that lock together like microscopic puzzle pieces, van der Waals molecular forces between extremely fine particles, electrostatic attraction from charged particles, and vacuum welding where clean surfaces create strong bonds in vacuum conditions. Apollo astronauts reported that undisturbed lunar soil formed natural clods and showed surprising cohesion when compressed, maintaining clear impressions with sharp edges and fine detail preservation. Mathematical models predict lunar footprints remain detectable for approximately 8 million years due to extremely slow erosion rates from micrometeoroid impacts, with conservative estimates suggesting hundreds of thousands of years preservation.',
    scientificSources: [sources[22], sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'footprints-perfect-educational',
    conspiracyId: 'footprints-too-perfect-airless',
    responseType: 'educational',
    content: 'Lunar regolith preservation analysis demonstrates superior footprint longevity compared to terrestrial environments. Particle formation processes include micrometeoroid bombardment creating angular, sharp-edged fragments, absence of water or wind weathering maintaining particle sharpness, and solar wind and cosmic ray exposure creating unique surface properties. Cohesion mechanisms show mechanical interlocking through reentrant particle shapes providing superior strength without moisture, van der Waals forces between fine particles creating molecular attraction, electrostatic bonding from charged particles, and vacuum welding effects where clean surfaces bond directly. Environmental preservation factors include complete absence of atmospheric weathering processes, lack of precipitation or wind erosion, minimal seismic activity maintaining surface stability, and temperature cycling without moisture preventing freeze-thaw degradation. Preservation timeline modeling indicates footprint detectability for millions of years based on micrometeoroid flux calculations, with deep impressions showing exceptional longevity due to regolith compaction effects. Comparative analysis reveals that Earth footprints require moisture for temporary cohesion but degrade rapidly through weathering, while lunar conditions achieve permanent preservation through entirely different physical mechanisms optimized for vacuum environments.',
    scientificSources: [sources[22], sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // No Atmospheric Scattering responses
  {
    id: 'no-scattering-short',
    conspiracyId: 'no-atmospheric-scattering',
    responseType: 'short',
    content: 'The Moon has essentially no atmosphere! Earth\'s atmosphere contains 10²⁵ molecules per cubic meter while the Moon\'s exosphere has fewer than 10⁶ particles - a 19 order-of-magnitude difference. No atmosphere means no scattering effects, which is exactly what Apollo photos show: black sky, sharp shadows, crystal-clear distant features.',
    scientificSources: [sources[23], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-scattering-comprehensive',
    conspiracyId: 'no-atmospheric-scattering',
    responseType: 'comprehensive',
    content: 'Apollo photography perfectly demonstrates the absence of atmospheric scattering effects that prove authentic lunar surface conditions. Earth\'s atmosphere contains approximately 10²⁵ molecules per cubic meter enabling Rayleigh scattering (blue sky), Mie scattering (haze), atmospheric perspective (distant objects appear bluer), and light diffusion creating ambient illumination. The Moon\'s exosphere contains fewer than 10⁶ particles per cubic meter - a difference of 19 orders of magnitude - making it effectively vacuum. This absence of atmosphere eliminates all scattering effects, resulting in: black sky with no scattered light, sharp shadows with no atmospheric fill lighting, stark contrast between sunlit and shadowed areas, crystal-clear distant features regardless of distance, and no atmospheric haze or perspective effects. Apollo photos show exactly these characteristics: brilliant sunlight adjacent to deep shadows, sharp horizon lines without atmospheric limiting, and clear distant mountains appearing at full contrast. The visual evidence perfectly matches predictions for vacuum environment photography.',
    scientificSources: [sources[23], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'no-scattering-educational',
    conspiracyId: 'no-atmospheric-scattering',
    responseType: 'educational',
    content: 'Atmospheric scattering physics analysis explains fundamental differences between terrestrial and lunar photographic conditions. Earth atmospheric effects include Rayleigh scattering where blue light wavelengths scatter more than red due to molecular interaction, Mie scattering from aerosols and particles affecting all wavelengths, atmospheric perspective causing distant objects to appear hazy and blue-shifted, and multiple scattering creating ambient illumination that fills shadows. Lunar exosphere characteristics show particle density of fewer than 10⁶ per cubic meter compared to Earth\'s 10²⁵, composition primarily of noble gases with no significant dust or aerosols, and surface-bounded exosphere with particles following ballistic trajectories rather than atmospheric circulation. Photographic evidence analysis reveals Apollo images showing black sky consistent with no atmospheric scattering, sharp shadow boundaries without atmospheric fill lighting, crystal-clear distant geological features at full contrast, and lighting patterns matching single-source illumination (sun) plus surface reflection. Visual proof includes stark contrast between illuminated and shadowed areas, absence of atmospheric haze limiting visibility, clear definition of distant lunar mountains regardless of range, and reflected light from lunar surface and equipment providing only secondary illumination source.',
    scientificSources: [sources[23], sources[6], sources[4], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },

  // Temperature Extremes Lethal responses
  {
    id: 'temperature-extremes-short',
    conspiracyId: 'temperature-extremes-lethal',
    responseType: 'short',
    content: 'Apollo missions were carefully timed for lunar dawn when temperatures were moderate (-9°F to +153°F), not the extreme -250°F to +250°F! Advanced 11-layer spacesuits with liquid cooling systems, reflective outer layers, and sublimator heat removal protected astronauts. The thermal protection worked perfectly for 2-4 days on the surface.',
    scientificSources: [sources[24], sources[1]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'temperature-extremes-comprehensive',
    conspiracyId: 'temperature-extremes-lethal',
    responseType: 'comprehensive',
    content: 'Apollo thermal protection systems successfully managed lunar temperature conditions through sophisticated engineering and careful mission timing. All Apollo landings occurred during lunar dawn (solar phase angles 4.7° to 14.7°) when surface temperatures ranged from -23°C to +67°C (-9°F to +153°F) rather than the extreme temperatures that occur during deep lunar night and peak noon. Advanced spacesuit technology included 11-layer construction with inner liner, pressure bladder, restraint layer, and Thermal Micrometeoroid Garment designed to protect from -156°C to +121°C, reflective white Ortho-Fabric and aluminized layers reflecting ~90% of solar radiation, and Kapton film insulation withstanding -269°C to +400°C temperature ranges. Active cooling systems featured Liquid Cooling and Ventilation Garment (LCVG) with water-cooled underwear throughout the suit, sublimator systems removing excess heat through water evaporation (~4 liters per astronaut per day), and Primary Life Support System (PLSS) backpacks managing comprehensive life support and thermal control. Apollo missions operated successfully for 2-4 days with minimal thermal problems, proving the effectiveness of thermal protection systems.',
    scientificSources: [sources[24], sources[1], sources[6]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  },
  {
    id: 'temperature-extremes-educational',
    conspiracyId: 'temperature-extremes-lethal',
    responseType: 'educational',
    content: 'Thermal protection engineering analysis demonstrates successful management of lunar temperature challenges through advanced materials science and mission planning. Mission timing strategy involved all landings during lunar dawn periods with solar elevation angles between 4.7° and 14.7°, avoiding extreme midday heat (+127°C) and midnight cold (-173°C), and operational periods limited to moderate temperature ranges. Spacesuit thermal technology included multi-layer insulation with 11 distinct layers providing thermal barriers, reflective outer surfaces using white Ortho-Fabric reflecting 90% of incident solar radiation, aluminized Mylar layers providing radiant heat barriers, and Kapton film withstanding extreme temperature cycling from -269°C to +400°C. Active thermal management systems featured Liquid Cooling and Ventilation Garment (LCVG) circulating water through flexible tubing network, sublimator heat exchangers removing metabolic and solar heat through controlled water sublimation, Primary Life Support System (PLSS) integrating thermal control with life support functions, and backup thermal control systems providing redundancy for critical operations. Equipment thermal design utilized multilayer insulation blankets protecting sensitive electronics, passive thermal control through spacecraft rotation ensuring even heat distribution, radiator systems for heat rejection, and conservative design philosophy with multiple safety margins. Operational success included 21 successful EVAs totaling over 80 hours on lunar surface, astronaut comfort maintenance throughout surface operations, equipment functionality across all missions, and thermal system performance exceeding design specifications.',
    scientificSources: [sources[24], sources[1], sources[6], sources[4]],
    effectiveness: 10,
    lastUpdated: new Date('2024-01-01')
  }
];