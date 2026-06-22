"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Compass, X } from "lucide-react";

interface SacredJourneysBannerProps {
  heroImage: string;
}

export function SacredJourneysBanner({ heroImage }: SacredJourneysBannerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-charcoal">
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute inset-0 w-full h-full cursor-pointer"
            aria-label="View image full screen"
          >
            <Image
              src={heroImage}
              alt="Sacred Journeys & Retreats"
              fill
              className="object-contain object-center hover:opacity-90 transition-opacity"
              sizes="100vw"
            />
          </button>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent pointer-events-none" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <Compass size={20} className="text-gold" />
                <p className="text-gold tracking-[0.3em] uppercase text-sm">
                  Sacred Journeys
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-text mb-4">
                Experience Transformative Retreats
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text text-body mb-8">
                Join Masami on pilgrimages to sacred sites, where ancient wisdom
                meets deep healing. Immerse yourself in breathtaking landscapes,
                guided meditation, and transformative energy work.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/retreats" className="btn-primary">
                Explore Retreats
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={heroImage}
              alt="Sacred Journeys & Retreats"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
