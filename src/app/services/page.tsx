import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore craniosacral therapy sessions in Glastonbury and London, energy healing, mother & baby sessions, and emergency assistance.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Healing Modalities
            </p>
            <h1 className="heading-xl text-white mb-4">Services</h1>
            <p className="text-white/70 max-w-xl text-body">
              Each session is uniquely tailored to support your body&apos;s
              natural healing capacity. Choose from in-person sessions in
              Glastonbury and London, or remote healing from anywhere in the
              world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
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

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                What to Expect
              </p>
              <h2 className="heading-lg text-charcoal">How Sessions Work</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Session",
                desc: "Select the session type that resonates with you -- in-person or remote, individual or mother & baby.",
              },
              {
                step: "02",
                title: "Book Your Time",
                desc: "Pick a date and time that works for you. You'll receive a confirmation with all the details you need.",
              },
              {
                step: "03",
                title: "Experience Healing",
                desc: "Arrive (or connect remotely) and allow Masami to guide you through a deeply restorative experience.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div className="text-center">
                  <span className="text-gold/30 font-heading text-5xl font-medium">
                    {item.step}
                  </span>
                  <h3 className="heading-sm text-charcoal mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
