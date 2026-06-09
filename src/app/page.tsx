import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ContactForm } from "@/components/ContactForm";
import { services, testimonials, retreats, featuredRetreats } from "@/data/site-data";
import { MapPin, Clock, Award, Heart } from "lucide-react";
import { SacredJourneysBanner } from "@/components/SacredJourneysBanner";
import { RetreatFeatureCard } from "@/components/RetreatFeatureCard";

export default function Home() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/c1e158_b325459c93c3416eb9aab720e8f9a439~mv2.jpg"
            alt="Masami Noro, Craniosacral and Energy Healing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Craniosacral Therapy & Energy Healing
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-xl text-white mb-6">
                Embark on Your
                <br />
                <span className="text-gold">Healing Path</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/80 text-body max-w-lg mb-8">
                Experience the transformative power of craniosacral therapy and
                energy healing with Masami Noro. Sessions available in
                Glastonbury, London, and remotely worldwide.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn-primary">
                  Book a Session
                </Link>
                <Link href="/about" className="btn-secondary border-white/40 text-white hover:bg-white/10 hover:border-white">
                  Meet Masami
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal py-6">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-gold" />
              <span>CSTA Member</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gold" />
              <span>7+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gold" />
              <span>Glastonbury & London</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-gold" />
              <span>In-Person & Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Healing Modalities
              </p>
              <h2 className="heading-lg text-charcoal">
                Services
              </h2>
              <p className="text-text-light max-w-2xl mx-auto mt-4 text-body">
                Each session is tailored to your unique needs, drawing on
                craniosacral therapy and energy healing to support your body,
                mind, and spirit.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <ServiceCard
                  slug={service.slug}
                  name={service.name}
                  location={service.location}
                  tagline={service.tagline}
                  duration={service.duration}
                  price={service.price}
                  image={service.image}
                  bookingType={service.bookingType as "book" | "request"}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/c1e158_84a6d3440fbc4b858e6136a4de75515e~mv2.jpg"
                  alt="Masami Noro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                  About Masami
                </p>
                <h2 className="heading-lg text-charcoal mb-6">
                  Awaken Your True Self
                </h2>
                <p className="text-text text-body mb-4">
                  Masami possesses a unique ability to connect with the subtle
                  energies that flow within each individual. Her approach is
                  deeply intuitive, honouring the unique journey of each soul.
                </p>
                <p className="text-text-light mb-6">
                  Though raised in France, Masami grew up immersed in her
                  Japanese legacy centred on energy and the unmanifest. Her path
                  has been shaped by yoga, ultra-running, meditation, and a
                  decade of exploration in energy healing and craniosacral
                  therapy.
                </p>
                <p className="text-text-light mb-8">
                  Today, she offers transformative sessions that address physical
                  and emotional pain, chronic illness, trauma, and the stresses
                  of daily life, facilitating the body&apos;s innate healing
                  capacity.
                </p>
                <Link href="/about" className="btn-secondary">
                  Read Masami&apos;s Story
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mother & Baby Clinic */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Heart className="text-gold" size={28} />
                </div>
                <div>
                  <p className="text-gold tracking-[0.2em] uppercase text-xs mb-1">
                    New Collaboration
                  </p>
                  <h3 className="heading-md text-charcoal">
                    Mother & Baby Low-Cost Clinic
                  </h3>
                </div>
              </div>
              <p className="text-text mb-4">
                In collaboration with the Sacred Birth Center in Glastonbury,
                specialist treatments for mothers and babies are offered every
                other Tuesday from 12:30 to 3:30 PM.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-text-light">Exchange</p>
                  <p className="text-gold font-semibold">£25 / 45 min</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-text-light">Booking</p>
                  <p className="text-charcoal font-medium text-sm">
                    masami@luminousrebirth.com
                  </p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-text-light">Note</p>
                  <p className="text-charcoal text-sm">
                    Drop-ins welcome, booking recommended
                  </p>
                </div>
              </div>
              <Link href="/services/mother-baby" className="btn-primary text-sm">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Retreat */}
      {featuredRetreats.length > 0 && (
        <section className="section-padding bg-cream-dark">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                  Upcoming Retreat
                </p>
                <h2 className="heading-lg text-charcoal">
                  Sacred Journeys
                </h2>
                <p className="text-text-light max-w-2xl mx-auto mt-4 text-body">
                  Join Masami on transformative pilgrimages to sacred sites.
                  Walk ancient lands, connect with spiritual lineages, and
                  return home transformed.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRetreats.map((retreat, i) => (
                <FadeIn key={retreat.slug} delay={i * 0.1}>
                  <RetreatFeatureCard
                    badge={retreat.badge}
                    title={retreat.title}
                    subtitle={retreat.subtitle}
                    location={retreat.location}
                    dates={retreat.dates}
                    image={retreat.image}
                    shortDescription={retreat.shortDescription}
                    slug={retreat.slug}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sacred Journeys */}
      <SacredJourneysBanner heroImage={retreats.heroImage} />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Real-Life Changes
              </p>
              <h2 className="heading-lg text-charcoal">
                What Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/testimonials" className="btn-secondary">
                Read All Testimonials
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <NewsletterSignup />
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Get in Touch
              </p>
              <h2 className="heading-lg text-charcoal">Let&apos;s Connect</h2>
              <p className="text-text-light max-w-lg mx-auto mt-4">
                Have a question about sessions or want to discuss how
                craniosacral therapy can help you? Send a message and Masami
                will respond within 24-48 hours.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
