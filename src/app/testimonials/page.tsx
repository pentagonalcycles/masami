"use client";

import { FadeIn } from "@/components/FadeIn";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/data/site-data";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Client Experiences
            </p>
            <h1 className="heading-xl text-text mb-4">Testimonials</h1>
            <p className="text-text-light max-w-xl text-body">
              Real stories from those who have experienced the transformative
              power of craniosacral therapy and energy healing with Masami.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <TestimonialCarousel testimonials={testimonials} showFilter />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
