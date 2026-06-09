import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for Luminous Rebirth services.",
};

export default function RefundPolicyPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <FadeIn>
          <h1 className="heading-lg text-charcoal mb-8">Refund Policy</h1>
          <div className="prose max-w-none text-text space-y-6">
            <p className="text-text-light text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="heading-sm text-charcoal">1. Session Refunds</h2>
            <p>
              If you need to cancel a booked session, the following refund
              policy applies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>48+ hours before session:</strong> Full refund to
                original payment method, processed within 5-7 business days.
              </li>
              <li>
                <strong>24-48 hours before session:</strong> No refund, but you
                may reschedule at no extra cost.
              </li>
              <li>
                <strong>Less than 24 hours / No-show:</strong> No refund. Exceptions
                may be made for genuine emergencies at Masami&apos;s discretion.
              </li>
            </ul>

            <h2 className="heading-sm text-charcoal">2. eGift Cards</h2>
            <p>
              Gift cards are non-refundable but do not expire. They can be used
              for any service offered by Luminous Rebirth.
            </p>

            <h2 className="heading-sm text-charcoal">3. Dissatisfaction</h2>
            <p>
              If you are not satisfied with your session, please contact us
              within 48 hours. We will work with you to find a resolution, which
              may include a complimentary follow-up session.
            </p>

            <h2 className="heading-sm text-charcoal">4. How to Request a Refund</h2>
            <p>
              Contact us at{" "}
              <a href="mailto:masami@luminousrebirth.com" className="text-gold hover:underline">
masami@luminousrebirth.com
              </a>{" "}
              with your booking details and reason for the refund request.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
