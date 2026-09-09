import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MapPin, Users, Calendar, ArrowLeft, BedDouble, Check, X, Mountain, Thermometer, Luggage } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walking the Path of Mary Magdalene — Day by Day",
  description:
    "Day-by-day itinerary for the Sacred Feminine Pilgrimage through Provence & Cathar Country, 10–18 October 2026.",
};

const days = [
  {
    number: "01",
    date: "Sat · October 10",
    title: "Marseille — Welcome Dinner",
    hotel: {
      name: "Hotel Marsiho by Happyculture",
      website: "www.hotel-marsiho.com",
      phone: "+33 491190485",
    },
    description:
      "Arrival: Land and settle in the hotel at your own pace.\n\nExplore: Enjoy free time exploring France's oldest city (600 BC). Walk the historic Vieux Port (Old Port) or wander the ancient Panier District.\n\nSacred Sites: Marseille is the historic gateway to early Christianity. Consider visiting the hilltop Basilica Notre-Dame de la Garde or the 5th-century Abbey of Saint Victor to see the crypt and altar dedicated to Mary Magdalene.\n\n18:00: Meet the group for our welcome dinner.",
    location: "Marseille",
  },
  {
    number: "02",
    date: "Sun · October 11",
    title: "Massif of la Sainte Baume: Mary Magdalene Grotto & Egg Cave",
    hotel: {
      name: "Hotel de France",
      website: "www.hotelsaintmaximin.com",
      phone: "+33 494370130",
    },
    description:
      "Morning Pilgrimage: Ascend through an ancient druidic woodland to the mystical Grotte de la Sainte-Baume. Revered since pre-Christian times, this sacred mountain is where Mary Magdalene is said to have spent her final years in deep contemplation.\n\nSacred Energies: This site is also deeply tied to the goddess Isis; its natural water courses are believed to hold potent healing powers.\n\nAfternoon Ritual: Embark on a 40-minute walk to La Grotte aux Oeufs (The Egg Cave). This sacred \"womb cave\" is an ancient site of Divine Feminine worship, representing rebirth from darkness to light.",
    location: "Massif de la Sainte Baume",
  },
  {
    number: "03",
    date: "Mon · October 12",
    title: "St Maximin Basilica & drive through Provence to Aigues Mortes",
    hotel: {
      name: "Hotel le Medieval",
      website: "www.le-medieval.com",
      phone: "+33 466537648",
    },
    description:
      "Morning Pilgrimage: Visit the Basilica of Sainte-Marie-Madeleine, a Gothic masterpiece housing Mary Magdalene's skull and relics. We will hold a quiet meditation connecting with the energies anchored within this ancient crypt.\n\nDrive through Provence: We will leave St Maximin mid morning and head towards Provence, driving through the beautiful towns of Roussillon & Gordes with a visit to the Abbey Notre Dame de Senanque and natural ochre pigment shops.",
    location: "Aigues Mortes",
  },
  {
    number: "04",
    date: "Tues · October 13",
    title: "Saintes Maries de la Mer & drive to Les Labadous in Rennes le Chateau",
    hotel: {
      name: "Les Labadous",
      website: "www.leslabadous.fr",
      phone: "+33 4 68 74 25 16",
    },
    description:
      "Morning by the Sea: Visit Saintes-Maries-de-la-Mer, a sunlit Mediterranean fishing town that once inspired Vincent van Gogh.\n\nThe Legend of the Marys: Discover the lore of Mary Magdalene, Mary Salome, and Mary Jacobe — the first witnesses to Christ's resurrection. Legend says they fled Alexandria by sea alongside Joseph of Arimathea and Sarah, an Egyptian woman. Visit the local church to see the relics of the Marys and the shrine of Saint Sarah (the Black Madonna), deeply revered by the Romani people.\n\nDrive to our retreat centre in Cathar country: 3 hour drive to our retreat centre Les Labadous near Rennes le Chateau.",
    location: "Rennes le Chateau",
  },
  {
    number: "05",
    date: "Wed · October 14",
    title: "Rennes-les-Bains, Rennes le Chateau & Healing Harmonies",
    hotel: {
      name: "Les Labadous",
      website: "www.leslabadous.fr",
      phone: "+33 4 68 74 25 16",
    },
    description:
      "Forest walk around Rennes-les-Bains and the Sal River where we will connect with the energies at the Seat of Isis, the Madeleine Spring, and the Lovers' Fountain. We will then head to Rennes-le-Château to explore the Mary Magdalene Church and Villa Béthanie.\n\nEvening Concert: Experience an exclusive, private harp concert in the heart of Rennes-le-Château. Musician Ani will channel the ancient musical codes of Mary Magdalene and the Cathars.",
    location: "Rennes-les-Bains",
  },
  {
    number: "06",
    date: "Thur · October 15",
    title: "Gorges of Galamus & Mont Bugarach",
    hotel: {
      name: "Les Labadous",
      website: "www.leslabadous.fr",
      phone: "+33 4 68 74 25 16",
    },
    description:
      "Morning Pilgrimage: Gorges de Galamus — A dramatic sacred canyon carved by water and time, home to the hidden Hermitage of Saint-Antoine, where devotion, silence, and the raw forces of nature invite deep surrender and reverence.\n\nAfternoon Pilgrimage: Journey to Mount Bugarach to begin our climb. Known as the \"upside-down mountain,\" this massive energy vortex sits on a major network of ley lines and is revered as a stargate to other dimensions. Believed by some sources to be the planet's Sacral chakra, its transformative energy is frequently compared to Mount Shasta.\n\nSacred History: If time permits, we will pause at a historic former Essene community village near the peak, a location whispered in local lore to be the true burial place of Jesus and Mary Magdalene.",
    location: "Mont Bugarach",
  },
  {
    number: "07",
    date: "Fri · October 16",
    title: "Castle of Montségur & Bethlehem Grotto",
    hotel: {
      name: "Les Labadous",
      website: "www.leslabadous.fr",
      phone: "+33 4 68 74 25 16",
    },
    description:
      "Morning Pilgrimage: Drive one hour through the scenic Languedoc countryside to Montségur, the legendary final stronghold of the Cathars. The mountain is an energetic powerhouse, situated at the intersection of two major ley lines and acting as a cosmic portal aligned with the star Sirius.\n\nThe Stronghold's Legacy: Embark on a 45-minute rocky climb to the summit. Here, over 200 Cathars endured a 10-month siege by the Roman Catholic army, ultimately choosing to walk into a burning pyre rather than renounce their faith. Legend holds that right before the surrender, four Cathars scaled down a sheer cliffside to smuggle out their sacred treasure — believed by many to be the \"Book of Love,\" the true, esoteric teachings of Jesus practiced by Mary Magdalene.\n\nAfternoon Ritual: Journey to the Bethlehem Grotto, a cave vibrating with high-frequency energy. This was a sacred initiation site where Cathar parfaits (the perfected ones) underwent advanced spiritual ceremonies within a unique pentagonal carved recess to align with their highest selves.",
    location: "Montségur",
  },
  {
    number: "08",
    date: "Sat · October 17",
    title: "Back to Marseille — Drop off at Montpellier train station",
    description:
      "Early morning departure back to Marseille with a drop-off option at Montpellier train station.\n\nA final morning of integration and reflection before transfers for your journey home. Carry the blessings of Mary Magdalene with you as you return.",
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
                <span>10–18 October 2026</span>
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
                embodied the divine feminine. From the sacred grottos of
                Provence to the cosmic portals of Cathar Country, each day
                unfolds a new chapter of transformation, connection, and deep
                spiritual initiation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-center text-text-light text-sm italic">
              Schedule details may change depending on weather, our needs and
              energy levels.
            </p>
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
                      {day.hotel && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center gap-1.5 text-text-light text-xs mb-1">
                            <BedDouble size={12} className="text-gold" />
                            <span className="font-medium">{day.hotel.name}</span>
                          </div>
                          <p className="text-text-muted text-[11px] ml-[18px]">
                            <a
                              href={`https://${day.hotel.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gold transition-colors"
                            >
                              {day.hotel.website}
                            </a>
                          </p>
                          <p className="text-text-muted text-[11px] ml-[18px]">
                            {day.hotel.phone}
                          </p>
                        </div>
                      )}
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

      {/* Inclusions */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                What's Covered
              </p>
              <h2 className="heading-lg text-charcoal mb-6">
                Inclusions & Exclusions
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-6 flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "All meals including welcome dinner on Saturday 10th and breakfast on Saturday 17th",
                    "All accommodation",
                    "Private coach",
                    "Entry tickets to sites",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-body"
                    >
                      <Check
                        size={16}
                        className="text-green-600 mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-6 flex items-center gap-2">
                  <X size={20} className="text-red-500" />
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Transport — flights and individual transfers to the arrival hotel",
                    "Drop-off transfers outside of the designated Marseille/Montpellier locations",
                    "Visas and airport taxes",
                    "Mandatory travel insurance",
                    "Personal expenses, beverages and meals on the arrival and departure day",
                    "Gratuities/tips",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-body"
                    >
                      <X size={16} className="text-red-500 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Packing, Terrain & Weather Guide */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Prepare for the Journey
              </p>
              <h2 className="heading-lg text-charcoal mb-6">
                Packing, Terrain & Weather Guide
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {/* Luggage Constraint */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-4 flex items-center gap-2">
                  <Luggage size={20} className="text-gold" />
                  Luggage Constraint
                </h3>
                <p className="text-text text-body">
                  Because we travel by minibus and change hotels frequently,
                  please pack mindfully and bring compact, space-conscious
                  luggage.
                </p>
              </div>
            </FadeIn>

            {/* Climate */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-4 flex items-center gap-2">
                  <Thermometer size={20} className="text-gold" />
                  October Climate
                </h3>
                <p className="text-text text-body">
                  Autumn in Provence and Occitania is typically mild. Expect
                  daytime averages of 20°C (68°F) and cooler nights around 10°C
                  (50°F).
                </p>
              </div>
            </FadeIn>

            {/* Terrain */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-4 flex items-center gap-2">
                  <Mountain size={20} className="text-gold" />
                  Terrain & Trails
                </h3>
                <p className="text-text text-body">
                  Our itinerary features immersive nature walks with uphill
                  climbs, particularly at La Sainte-Baume, Montségur, and Mount
                  Bugarach.
                </p>
              </div>
            </FadeIn>

            {/* Packing List */}
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="heading-md text-charcoal mb-6">
                  Recommended Packing Items
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Proper light trail runner type shoes (broken-in)",
                    "Hiking pants",
                    "Telescopic trekking poles",
                    "Merino type socks that prevent blisters and regulate temperature",
                    "Comfortable backpack (thinking of all those crystals)",
                    "Mid layer fleece (think layering)",
                    "Lightweight rain jacket",
                    "Sun protection",
                    "Sandals or flip flops",
                    "Hydration bottle",
                    "Swimsuit, quick dry towel for Rennes les Bains",
                    "Personal prescribed medication, electrolyte sachets, wet wipes, mosquito repellent",
                    "Power adapter, phone power bank",
                    "Ear plugs & eye mask",
                    "Journal & pen",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-text text-sm"
                    >
                      <Check
                        size={14}
                        className="text-gold mt-0.5 shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
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
