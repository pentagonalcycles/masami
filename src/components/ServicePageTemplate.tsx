import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { WixBookingLink } from "@/components/WixBookingsEmbed";
import { testimonials } from "@/data/site-data";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Clock, MapPin, PoundSterling, Check } from "lucide-react";

interface ServicePageProps {
  slug: string;
  name: string;
  fullName: string;
  location: string;
  tagline: string;
  duration: string;
  price: string;
  description: string;
  whatToExpect: string[];
  benefits: string[];
  image: string;
  bookingType: "book" | "request";
  bookingUrl?: string;
  afterBenefits?: React.ReactNode;
}

export function ServicePageTemplate({
  name,
  fullName,
  location,
  tagline,
  duration,
  price,
  description,
  whatToExpect,
  benefits,
  image,
  bookingType,
  bookingUrl,
  afterBenefits,
}: ServicePageProps) {
  const relatedTestimonials = testimonials
    .filter((t) =>
      name.toLowerCase().includes("energy")
        ? t.category.includes("energy-healing")
        : t.category.includes("craniosacral")
    )
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <Link
              href="/services"
              className="text-white/50 text-sm hover:text-gold transition-colors mb-4 inline-block"
            >
              &larr; All Services
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold/20 text-gold text-xs tracking-wider uppercase rounded-full">
                {location}
              </span>
              <span className="text-white/50 text-sm">
                {duration} | {price}
              </span>
            </div>
            <h1 className="heading-xl text-white mb-4">{fullName}</h1>
            <p className="text-gold font-heading text-xl italic">{tagline}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-cream-dark">
                  <Image
                    src={image}
                    alt={fullName}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="heading-md text-charcoal mb-4">
                  About This Session
                </h2>
                <p className="text-text text-body mb-8">{description}</p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h3 className="heading-sm text-charcoal mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 mb-8">
                  {whatToExpect.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h3 className="heading-sm text-charcoal mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              {afterBenefits && (
                <FadeIn delay={0.25}>
                  <div className="mt-8 text-text text-body">{afterBenefits}</div>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-28">
                  <h3 className="heading-sm text-charcoal mb-6">
                    Book This Session
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-gold" />
                      <span className="text-text">{duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-gold" />
                      <span className="text-text">{location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PoundSterling size={18} className="text-gold" />
                      <span className="text-text">{price}</span>
                    </div>
                  </div>
                  {bookingUrl ? (
                    <WixBookingLink bookingUrl={bookingUrl} className="btn-primary w-full text-center block">
                      {bookingType === "book" ? "Book Now" : "Request Session"}
                    </WixBookingLink>
                  ) : (
                    <Link href="/contact" className="btn-primary w-full text-center block">
                      {bookingType === "book" ? "Book Now" : "Request Session"}
                    </Link>
                  )}
                  <p className="text-xs text-text-muted text-center mt-3">
                    {bookingUrl ? "Opens Wix booking calendar" : "Contact us to book"}
                  </p>
                  <div className="mt-4 pt-4 border-t border-cream-dark text-center">
                    <Link href="/cancellation-policy" className="text-xs text-text-light hover:text-gold transition-colors">
                      Cancellation Policy
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related Testimonials */}
      {relatedTestimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                  Client Experiences
                </p>
                <h2 className="heading-md text-charcoal">
                  What Clients Say
                </h2>
              </div>
            </FadeIn>
            <TestimonialCarousel testimonials={relatedTestimonials} />
          </div>
        </section>
      )}
    </>
  );
}
