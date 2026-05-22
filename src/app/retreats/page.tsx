import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { RetreatInquiryForm } from "@/components/RetreatInquiryForm";
import { retreats } from "@/data/site-data";
import { MapPin, Users, Sparkles, Heart, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Journeys & Retreats",
  description:
    "Join Masami on transformative pilgrimages to sacred sites. Experience deep meditation, energy healing, and spiritual connection in breathtaking locations.",
};

export default function RetreatsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-charcoal">
          <Image
            src={retreats.heroImage}
            alt={retreats.title}
            fill
            className="object-contain object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Sacred Journeys
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-xl text-white mb-6">
                {retreats.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/80 text-body max-w-lg mb-8">
                {retreats.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a href="#inquiry" className="btn-primary">
                Register Your Interest
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Retreats */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                  About Our Retreats
                </p>
                <h2 className="heading-lg text-charcoal mb-6">
                  A Journey Within
                </h2>
                <p className="text-text text-body mb-4">
                  {retreats.description}
                </p>
                <p className="text-text-light mb-6">
                  {retreats.longDescription}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={retreats.galleryImages[1].src}
                  alt={retreats.galleryImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                What Awaits You
              </p>
              <h2 className="heading-lg text-charcoal">
                Retreat Highlights
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Energy Healing",
                description:
                  "Experience Masami's unique blend of energy healing practices in powerful, sacred settings.",
              },
              {
                icon: MapPin,
                title: "Sacred Locations",
                description:
                  "Journey to ancient sites charged with spiritual significance and natural beauty.",
              },
              {
                icon: Users,
                title: "Intimate Groups",
                description:
                  "Small groups ensure a deeply personal and transformative experience for every participant.",
              },
              {
                icon: Heart,
                title: "Holistic Wellness",
                description:
                  "Nourish body, mind, and spirit through guided meditation, movement, and healing practices.",
              },
              {
                icon: Compass,
                title: "Inner Exploration",
                description:
                  "Gain new perspectives and deepen your connection to your authentic self and life purpose.",
              },
              {
                icon: Sparkles,
                title: "Community",
                description:
                  "Connect with like-minded souls on a shared journey of growth and self-discovery.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                Join the Journey
              </p>
              <h2 className="heading-lg text-charcoal">
                Register Your Interest
              </h2>
              <p className="text-text-light max-w-lg mx-auto mt-4">
                {retreats.inquiryNote}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <RetreatInquiryForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
