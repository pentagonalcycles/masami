import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { qualifications } from "@/data/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Masami",
  description:
    "Learn about Masami Noro's journey from finance to energy healing. Discover her approach to craniosacral therapy and her qualifications.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Meet Masami
            </p>
            <h1 className="heading-xl text-white mb-4">
              My Unfolding Journey to Self
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text text-body leading-relaxed mb-6">
                    Though raised in France, I have grown up immersed in my
                    Japanese legacy centred on energy and the unmanifest. Early
                    on, my path was shaped in mysterious ways by my father&apos;s own
                    journey in the arts of Aikido and Kinomichi, igniting my own
                    pursuit of a purposeful and heart-based life.
                  </p>
                  <p className="text-text text-body leading-relaxed mb-6">
                    And so, after years in finance and operations corporate roles
                    across the US, Europe, and Southeast Asia, a deep desire
                    emerged to align my life with my true self. This path began
                    with practices focused on physical awakening, including yoga,
                    including yoga, triathlon, and extreme endurance sports.
                  </p>
                  <p className="text-text text-body leading-relaxed mb-6">
                    A decade ago, this pursuit deepened, leading me to explore
                    meditation, energy healing, and other modalities that
                    supported inner exploration. This ongoing journey has been an
                    extraordinary adventure -- rich with lessons and encounters
                    with remarkable individuals who have become family, friends
                    and teachers worldwide.
                  </p>
                  <p className="text-text text-body leading-relaxed mb-6">
                    My path has also led me to pilgrimages and travels that have
                    enriched my life through deepening my connection to nature
                    and the love of this earth. These inner and outer
                    explorations have led me over and over again to significant
                    transitions in my personal, family, and professional spheres.
                  </p>
                  <p className="text-text text-body leading-relaxed mb-6">
                    These choices, though sometimes challenging, have been
                    essential for my personal and spiritual growth.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="https://static.wixstatic.com/media/c1e158_84a6d3440fbc4b858e6136a4de75515e~mv2.jpg"
                    alt="Masami Noro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Philosophy
              </p>
              <h2 className="heading-lg text-charcoal mb-8">
                That Early Call to Work with Energy
              </h2>
              <p className="text-text text-body leading-relaxed mb-6">
                Today, I offer Energy Healing and Craniosacral Therapy to
                support others on their own journeys of self-discovery. These
                profound modalities assist individuals in addressing physical
                and emotional pain, chronic illness, trauma, and the stresses of
                daily life.
              </p>
              <p className="text-text text-body leading-relaxed mb-6">
                By facilitating the body&apos;s innate healing capacity, these
                therapies foster increased expansion of harmony, joy, and
                freedom. They are powerful tools for enhancing overall health
                and well-being, whether used as a complement to other treatments
                or as a standalone practice.
              </p>
              <p className="text-text text-body leading-relaxed italic font-heading text-xl mt-8">
                I am profoundly grateful for the gifts of this life -- in its up
                and its down -- and it is my deepest joy to share and facilitate
                others to follow their calling.
              </p>
              <p className="text-gold font-heading text-lg mt-4">
                In love and light,
                <br />
                Masami
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Training & Qualifications
              </p>
              <h2 className="heading-lg text-charcoal">
                Recent Personal Explorations
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-6">
            {qualifications.map((q, i) => (
              <FadeIn key={q.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start gap-6">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={q.image}
                      alt={q.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="heading-sm text-charcoal mb-1">
                      {q.name}
                    </h3>
                    <p className="text-gold text-sm mb-2">{q.period}</p>
                    <p className="text-text-light">{q.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Experience the transformative power of craniosacral therapy and
              energy healing. Book your session today.
            </p>
            <Link href="/services" className="btn-primary">
              Choose Your Session
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
