import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Apollo Photos That Prove the Moon Landings Were Real — Image Analysis',
  description: 'Real Apollo mission photos analyzed and explained. Sharp shadows, lit astronauts, non-parallel shadows — every "suspicious" detail has a simple scientific explanation rooted in lunar physics.',
  keywords: 'apollo photos prove moon landing, moon landing images real, apollo photography evidence, moon landing photos fake debunked, apollo lighting shadows explained',
  openGraph: {
    title: 'Apollo Photos That Prove the Moon Landings Were Real — Image Analysis',
    description: 'Every "suspicious" Apollo photo detail explained by lunar physics — no atmosphere, harsh sunlight, reflective surfaces.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do some Apollo photos look like they were taken in a studio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because the Moon looks nothing like Earth. There is no atmosphere to soften light or create haze, no clouds, no humidity. The result is an environment with extreme contrast — jet black sky, brilliantly lit surfaces, hard shadow edges. These conditions look 'staged' to eyes accustomed to Earth light, but they are exactly what physics predicts for an airless body in direct sunlight."
      }
    },
    {
      "@type": "Question",
      "name": "Why are shadows in Apollo photos so sharp and hard-edged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Earth, the atmosphere scatters sunlight in all directions, softening shadow edges. On the Moon there is no atmosphere — light travels in a straight line with no diffusion. The result is shadows with a crisp, abrupt edge. This is not evidence of artificial studio lighting. It is the direct consequence of sunlight in a vacuum, which is exactly what the Moon is."
      }
    },
    {
      "@type": "Question",
      "name": "Why can you see detail inside shadows in Apollo photos? Shouldn't they be completely black?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No environment — not even the Moon — has only one source of light. The lunar surface is highly reflective. Sunlight hits the ground and bounces back into shadowed areas, illuminating them. Astronaut suits are also extremely reflective and contribute bounce light. This is one light source (the Sun) interacting with reflective surfaces, not a second studio light. The same effect happens on Earth — open shade on a sunny day is lit by reflected sky and ground light."
      }
    },
    {
      "@type": "Question",
      "name": "Why do shadows in some Apollo photos appear to go in different directions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is a perspective effect, not evidence of multiple light sources. Parallel lines do not appear parallel in photographs — the same reason railroad tracks converge in the distance. When shadows fall across uneven terrain, small slopes and camera angles make them appear to fan out or diverge. To correctly determine whether shadows are parallel, you would need to account for the full 3D geometry of the terrain, which a flat 2D photograph does not show."
      }
    },
    {
      "@type": "Question",
      "name": "Why do astronauts appear well-lit even when not directly facing the Sun?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Astronaut suits are designed to be highly reflective to manage heat. The lunar surface reflects light back at the astronaut from below. Nearby objects — the lander, equipment, rocks — also contribute reflected light. All of this comes from a single source: the Sun. No studio fill light is needed to explain astronaut visibility in partial shadow. These are the same principles used by photographers on Earth who use reflectors to fill in shadows."
      }
    }
  ]
};

const faqItems = [
  {
    q: "Why do some Apollo photos look like they were taken in a studio?",
    a: "Because the Moon looks nothing like Earth. There is no atmosphere to soften light or create haze, no clouds, no humidity. The result is an environment with extreme contrast — jet black sky, brilliantly lit surfaces, hard shadow edges. These conditions look 'staged' to eyes accustomed to Earth light, but they are exactly what physics predicts for an airless body in direct sunlight."
  },
  {
    q: "Why are shadows in Apollo photos so sharp and hard-edged?",
    a: "On Earth, the atmosphere scatters sunlight in all directions, softening shadow edges. On the Moon there is no atmosphere — light travels in a straight line with no diffusion. The result is shadows with a crisp, abrupt edge. This is not evidence of artificial studio lighting. It is the direct consequence of sunlight in a vacuum, which is exactly what the Moon is."
  },
  {
    q: "Why can you see detail inside shadows in Apollo photos? Shouldn't they be completely black?",
    a: "No environment — not even the Moon — has only one source of light. The lunar surface is highly reflective. Sunlight hits the ground and bounces back into shadowed areas, illuminating them. Astronaut suits are also extremely reflective and contribute bounce light. This is one light source (the Sun) interacting with reflective surfaces, not a second studio light. The same effect happens on Earth — open shade on a sunny day is lit by reflected sky and ground light."
  },
  {
    q: "Why do shadows in some Apollo photos appear to go in different directions?",
    a: "This is a perspective effect, not evidence of multiple light sources. Parallel lines do not appear parallel in photographs — the same reason railroad tracks converge in the distance. When shadows fall across uneven terrain, small slopes and camera angles make them appear to fan out or diverge. To correctly determine whether shadows are parallel, you would need to account for the full 3D geometry of the terrain, which a flat 2D photograph does not show."
  },
  {
    q: "Why do astronauts appear well-lit even when not directly facing the Sun?",
    a: "Astronaut suits are designed to be highly reflective to manage heat. The lunar surface reflects light back at the astronaut from below. Nearby objects — the lander, equipment, rocks — also contribute reflected light. All of this comes from a single source: the Sun. No studio fill light is needed to explain astronaut visibility in partial shadow. These are the same principles used by photographers on Earth who use reflectors to fill in shadows."
  }
];

const galleryImages = [
  { file: 'AS11-40-5903.jpg', caption: 'Apollo 11 — Buzz Aldrin, Sea of Tranquility', mission: 'Apollo 11', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS11/AS11-40-5903.JPG' },
  { file: 'AS11-40-5927.jpg', caption: 'Apollo 11 — Shadow and surface detail', mission: 'Apollo 11', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS11/AS11-40-5927.JPG' },
  { file: 'AS12-47-7006.jpg', caption: 'Apollo 12 — Lunar surface operations', mission: 'Apollo 12', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS12/AS12-47-7006.JPG' },
  { file: 'AS14-66-9301.jpg', caption: 'Apollo 14 — Fra Mauro highlands', mission: 'Apollo 14', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS14/AS14-66-9301.JPG' },
  { file: 'AS15-86-11603.jpg', caption: 'Apollo 15 — Hadley-Apennine', mission: 'Apollo 15', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS15/AS15-86-11603.JPG' },
  { file: 'AS16-107-17446.jpg', caption: 'Apollo 16 — Descartes Highlands', mission: 'Apollo 16', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS16/AS16-107-17446.JPG' },
  { file: 'AS16-113-18339.jpg', caption: 'Apollo 16 — Astronaut and rover', mission: 'Apollo 16', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS16/AS16-113-18339.JPG' },
  { file: 'AS17-134-20384.jpg', caption: 'Apollo 17 — Taurus-Littrow valley', mission: 'Apollo 17', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS17/AS17-134-20384.JPG' },
  { file: 'AS17-147-22470.jpg', caption: 'Apollo 17 — Final lunar landing mission', mission: 'Apollo 17', url: 'https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS17/AS17-147-22470.JPG' },
];

export default function ApolloPhotosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1 bg-gray-50">
        <section className="page-hero text-white py-20 px-4 pt-28">
          <div className="page-hero-content max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 stellar-text">Apollo Photos and Videos That Prove the Moon Landings Were Real</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              Every &quot;suspicious&quot; detail in these images has a simple scientific explanation. The Moon is not Earth — and once you understand that, the photos make perfect sense.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Intro Block */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Apollo photos look strange because the Moon is strange — not because they&apos;re fake.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Apollo photographs are frequently questioned because they don&apos;t look like typical images taken on Earth. Viewers notice sharp shadows, bright subjects near dark areas, or shadow angles that seem slightly off — and from there conclude something must be wrong.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The issue is not that the images look unusual. Some of them do. The issue is that they are being judged using Earth-based expectations. On the Moon, there is no atmosphere to scatter light, soften shadows, or reduce contrast. Sunlight arrives harsh and direct. At the same time, the highly reflective lunar surface illuminates areas not directly facing the Sun. When these conditions combine, the results look unfamiliar — but unfamiliar is not the same as artificial.
            </p>
          </div>

          {/* Full Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Original Apollo Mission Photography</h2>
            <p className="text-gray-600 mb-8">All images sourced directly from NASA&apos;s Earth Observations database. Click any image reference to view the full-resolution original.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <div key={img.file} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
                    <Image
                      src={`/images/moon/${img.file}`}
                      alt={img.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 mb-1">{img.caption}</p>
                  <a
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline break-all"
                  >
                    {img.file.replace('.jpg', '')} — NASA Source ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* What People Think They're Seeing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Think They&apos;re Seeing</h2>
            <p className="text-gray-700 text-lg mb-6">Most lighting-based skepticism comes from three observations. These observations are real. The conclusions drawn from them are not.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Shadows appear too sharp</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Expected from artificial studio lighting. Actually caused by sunlight in a vacuum with zero atmospheric diffusion.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-emerald-500">
                <h3 className="font-bold text-gray-900 mb-2">Shadowed areas show visible detail</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Expected to be pure black if only one light source exists. Actually lit by sunlight reflected off the highly reflective lunar surface.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Shadows don&apos;t look perfectly parallel</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Taken as evidence of multiple light sources. Actually a standard perspective effect worsened by uneven terrain.</p>
              </div>
            </div>
          </div>

          {/* Image Analysis — 2 column sections */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Image-by-Image Analysis</h2>

          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src="/images/moon/AS11-40-5903.jpg"
                    alt="Apollo 11 — Buzz Aldrin and the Hard Edge of Lunar Shadow"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Apollo 11 — Buzz Aldrin, Sea of Tranquility</p>
                <a
                  href="https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS11/AS11-40-5903.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  AS11-40-5903 — NASA Earth Observations ↗
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hard Edge of Lunar Shadow</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This image is often cited because of how sharp the shadow appears. Many people associate that kind of crisp edge with artificial lighting — like a spotlight on a stage.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  But that expectation comes from Earth conditions. On Earth, sunlight is softened by the atmosphere. Light scatters through air, dust, and moisture, creating gradual transitions between light and shadow.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  On the Moon, none of that exists. There is no atmospheric diffusion, so the transition from light to shadow is abrupt. The result is a shadow that looks unusually sharp — not because it is artificial, but because it is unfiltered sunlight in a vacuum.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">Key physics: No atmosphere = no light diffusion = hard shadow edges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src="/images/moon/AS11-40-5927.jpg"
                    alt="Apollo 11 — Deep Shadow and Visible Detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Apollo 11 — Surface detail near shadow</p>
                <a
                  href="https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS11/AS11-40-5927.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  AS11-40-5927 — NASA Earth Observations ↗
                </a>
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Shadow With Visible Detail</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A common claim is that shadowed areas in Apollo images are &quot;too visible&quot; — as if they should be completely black. This assumes that anything not in direct sunlight receives no light at all, which is not how any real environment works.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The lunar surface reflects sunlight. When light hits the ground, some of it bounces back into the scene. That reflected light can illuminate areas not directly facing the Sun, revealing detail that would otherwise be missed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is not a second light source. It is the same sunlight, redistributed by the environment — the same phenomenon that makes the shaded side of a building visible on a sunny day.
                </p>
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 text-sm font-medium">Key physics: Lunar regolith has ~12% albedo — enough to fill shadows with bounce light.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src="/images/moon/AS17-134-20384.jpg"
                    alt="Apollo 17 — Long Shadows and Perspective Effects"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Apollo 17 — Taurus-Littrow valley, long shadow cast across terrain</p>
                <a
                  href="https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS17/AS17-134-20384.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  AS17-134-20384 — NASA Earth Observations ↗
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Long Shadows and Perspective Effects</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Claims about &quot;non-parallel shadows&quot; are used to argue for multiple light sources. The problem with this claim is that it ignores how perspective works in photography.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Parallel lines do not always appear parallel in an image. Camera angle, terrain, and lens perspective all affect how lines are perceived — the same reason railroad tracks appear to converge in the distance, or a road narrows toward the horizon.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In images like this, shadows stretch across uneven ground. Small changes in slope and camera position make them appear to diverge or shift direction. This requires no multiple light sources — only perspective and surface variation.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">Key physics: Perspective foreshortening on uneven terrain makes parallel lines appear to converge or diverge.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src="/images/moon/AS16-107-17446.jpg"
                    alt="Apollo 16 — Astronaut Visibility and Reflected Light"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Apollo 16 — Descartes Highlands, astronaut in partial shadow</p>
                <a
                  href="https://eol.jsc.nasa.gov/DatabaseImages/ISD/highres/AS16/AS16-107-17446.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  AS16-107-17446 — NASA Earth Observations ↗
                </a>
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Astronaut Visibility and Reflected Light</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Another common argument is that astronauts appear too well-lit — even when not directly facing the Sun. This again assumes only direct light matters.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In reality, light reflects off multiple surfaces simultaneously: the lunar ground, the astronaut&apos;s suit, and nearby objects. Spacesuits are highly reflective by design — they have to be to manage thermal loads in direct sunlight. The lunar surface contributes additional bounce light from below.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Together, these create a natural fill effect that keeps the astronaut visible even in partial shadow. This is the same principle photographers on Earth use reflector panels for — except here, the Moon itself is the reflector.
                </p>
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 text-sm font-medium">Key physics: White EVA suits reflect ~85% of incoming light — the astronaut is their own reflector.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What the images actually show */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What These Images Actually Show</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Taken together, these images are consistent with a single, distant light source: the Sun. They are inconsistent with what a film studio could produce — because no studio in 1969 could have lit a scene this consistently, across hundreds of photos, with lighting that precisely matches the physics of a vacuum environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Sharp shadows</h4>
                <p className="text-gray-700 text-sm">Direct, unfiltered sunlight in a vacuum. Exactly what physics predicts. No studio lighting produces this consistently across hundreds of varied shots.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Lit shadow detail</h4>
                <p className="text-gray-700 text-sm">Sunlight reflected off the lunar surface and suits. One source, multiple reflections. The same effect occurs in any outdoor environment.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Apparent shadow divergence</h4>
                <p className="text-gray-700 text-sm">Perspective and terrain. A standard photographic effect visible in any wide-angle shot over uneven ground.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </div>

          {/* Sources */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Authoritative Sources</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://eol.jsc.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA Earth Observations — Apollo Image Archive
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Original high-resolution Apollo mission photography. Every image on this page is sourced directly from this archive.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.hq.nasa.gov/alsj/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA Apollo Lunar Surface Journal
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Comprehensive record of Apollo surface operations including photography, crew commentary, and technical documentation.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.lpi.usra.edu/resources/apollo/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Lunar and Planetary Institute — Apollo Resources
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Scientific context and analysis of Apollo mission photography and surface documentation.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
