import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MapPin, Users, Calendar, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walking the Path of Mary Magdalene — Day by Day",
  description:
    "Day-by-day itinerary for the Sacred Feminine Pilgrimage through Provence & Cathar Country, 10–17 October 2026.",
};

const days = [
  {
    number: "01",
    date: "Fri · October 10",
    title: "Arrival in Marseille",
    description:
      "Arrive in Marseille and transfer to our hotel in the heart of the city. Welcome dinner together as a group, setting intentions for the journey ahead. A gentle introduction to the energy of Provence as we settle in.",
    location: "Marseille",
  },
  {
    number: "02",
    date: "Sat · October 11",
    title: "Marseille → Aix-en-Provence",
    description:
      "Morning visit to Notre-Dame de la Garde, overlooking the Mediterranean. Journey to Aix-en-Provence, walking in the footsteps of Mary Magdalene. Explore the ancient streets and soak in the sacred feminine energy of this healing city.",
    location: "Aix-en-Provence",
  },
  {
    number: "03",
    date: "Sun · October 12",
    title: "La Sainte-Baume",
    description:
      "Pilgrimage to La Sainte-Baume — the 'womb of the Magdalene.' Hike through ancient forests to the cave where Mary Magdalene spent her final years in contemplation. A profound day of connection and inner stillness.",
    location: "La Sainte-Baume",
  },
  {
    number: "04",
    date: "Mon · October 13",
    title: "Les Baux-de-Provence → Arles",
    description:
      "Visit the mystical ruins of Les Baux-de-Provence, perched on a rocky outcrop. Continue to Arles, where Mary Magdalene is said to have preached. Explore the Roman amphitheatre and the ancient Alyscamps.",
    location: "Arles",
  },
  {
    number: "05",
    date: "Tue · October 14",
    title: "Saintes-Maries-de-la-Mer",
    description:
      "Journey to the coastal sanctuary of Saintes-Maries-de-la-Mer. Discover the mysteries of Sarah, the Black Madonna, and the Egyptian roots of Mary Magdalene. Evening ceremony by the sea.",
    location: "Saintes-Maries-de-la-Mer",
  },
  {
    number: "06",
    date: "Wed · October 15",
    title: "Montségur & Cathar Country",
    description:
      "Travel into Cathar Country to visit Montségur Castle — the final Cathar stronghold. Climb to the summit where the last Cathars made their stand. A day of courage, sacrifice, and spiritual warrior energy.",
    location: "Montségur",
  },
  {
    number: "07",
    date: "Thu · October 16",
    title: "Rennes-le-Château & Bugarach",
    description:
      "Explore the cosmic portal of Rennes-le-Château, where Templar history and sacred mysteries converge. Visit the 'upside-down mountain' of Bugarach — a powerful energy vortex and gateway to higher consciousness. Closing ceremony at sunset.",
    location: "Rennes-le-Château",
  },
  {
    number: "08",
    date: "Fri · October 17",
    title: "Departure",
    description:
      "A final morning of integration and reflection. Group sharing circle before transfers to Marseille airport for departure. Carry the blessings of Mary Magdalene with you as you return home.",
    location: "Marseille",
  },
];

export default function MaryMagdaleneRetreatPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/retreats/masami-walking.jpg"
            alt="Walking the Path of Mary Magdalene"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pt-20">
          <FadeIn>
            <Link
              href="/retreats"
              className="text-white/50 text-sm hover:text-gold transition-colors mb-6 inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Retreats
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Day by Day Itinerary
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-xl text-white mb-4">
              Walking the Path of Mary Magdalene
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/80 text-body max-w-xl mb-6">
              A Sacred Feminine Pilgrimage through Provence & Cathar Country
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gold" />
                <span>10–17 October 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Southern France</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gold" />
                <span>Limited to 7 participants</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                The Journey
              </p>
              <h2 className="heading-lg text-charcoal mb-6">
                Eight Days of Sacred Transformation
              </h2>
              <p className="text-text text-body max-w-2xl mx-auto">
                Walk the ancient lands where Mary Magdalene taught, healed, and
                embodied the divine feminine. Each day unfolds a new chapter of
                this sacred pilgrimage through the mystical landscapes of
                Provence and Cathar Country.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Day by Day */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="space-y-16">
            {days.map((day, i) => (
              <FadeIn key={day.number} delay={i * 0.05}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Day Number & Date */}
                  <div className="lg:col-span-3">
                    <div className="sticky top-28">
                      <p className="text-gold font-heading text-6xl font-light mb-2">
                        {day.number}
                      </p>
                      <p className="text-text-light text-sm">{day.date}</p>
                      <div className="flex items-center gap-1.5 mt-2 text-text-light text-xs">
                        <MapPin size={12} className="text-gold" />
                        <span>{day.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <div className="bg-cream rounded-2xl p-8">
                      <h3 className="heading-md text-charcoal mb-4">
                        {day.title}
                      </h3>
                      <p className="text-text text-body leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-4">
              Ready to Walk the Path?
            </h2>
            <p className="text-white/70 text-body max-w-lg mx-auto mb-8">
              Contact Masami to receive the full itinerary brochure or ask any
              questions about this sacred journey.
            </p>
            <a
              href="mailto:masami@luminousrebirth.com"
              className="btn-primary"
            >
              Contact Masami
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
