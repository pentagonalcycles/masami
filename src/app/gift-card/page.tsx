import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { Gift } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eGift Card",
  description:
    "Give the gift of healing. Purchase an eGift card for craniosacral therapy or energy healing sessions.",
};

export default function GiftCardPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Give the Gift
            </p>
            <h1 className="heading-xl text-white mb-4">eGift Card</h1>
            <p className="text-white/80 max-w-xl text-body">
              Share the gift of healing with someone you love. An eGift card can
              be used for any craniosacral therapy or energy healing session.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gift Card Content */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <FadeIn>
            <div className="bg-white rounded-2xl p-12 shadow-sm max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Gift className="text-gold" size={36} />
              </div>
              <h2 className="heading-md text-charcoal mb-4">
                Purchase an eGift Card
              </h2>
              <p className="text-text-light mb-8">
                Choose any amount and send a personalised gift card directly to
                your loved one&apos;s email. Valid for all services.
              </p>
              <div className="space-y-4 mb-8">
                {["£40", "£70", "£100", "£150", "Custom Amount"].map(
                  (amount) => (
                    <button
                      key={amount}
                      className="w-full py-3 border border-cream-dark rounded-xl text-charcoal hover:border-gold hover:text-gold transition-all duration-300"
                    >
                      {amount}
                    </button>
                  )
                )}
              </div>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Contact to Purchase
              </Link>
              <p className="text-xs text-text-muted mt-4">
                For now, gift cards are arranged directly. Contact Masami to
                arrange your gift.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
