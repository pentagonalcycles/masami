import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Cancellation and rescheduling policy for Luminous Rebirth services.",
};

export default function CancellationPolicyPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <FadeIn>
          <h1 className="heading-lg text-charcoal mb-8">Cancellation Policy</h1>
          <div className="prose max-w-none text-text space-y-6">
            <p className="text-text-light text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="heading-sm text-charcoal">1. Rescheduling &amp; Cancellation</h2>
            <p>If you need to adjust our appointment, please follow these guidelines:</p>

            <h3 className="font-heading text-lg text-charcoal">Rescheduling:</h3>
            <p>
              You are welcome to reschedule your session up to 12 hours before our start time. Please
              email me at{" "}
              <a href="mailto:masami@luminousrebirth.com" className="text-gold hover:underline">
                masami@luminousrebirth.com
              </a>{" "}
              to find a new space.
            </p>

            <h3 className="font-heading text-lg text-charcoal">Late Changes:</h3>
            <p>
              Requests made with less than 12 hours&apos; notice will result in the session being
              forfeited and the full rate applied. This allows me to honour my commitment to all
              seeking treatment.
            </p>

            <h3 className="font-heading text-lg text-charcoal">Cancellations:</h3>
            <p>
              Choosing to cancel without rescheduling is considered a no-show and is charged at the
              full rate.
            </p>

            <h2 className="heading-sm text-charcoal">2. Missed Appointments &amp; Late Arrivals</h2>

            <h3 className="font-heading text-lg text-charcoal">No-Shows:</h3>
            <p>
              If you cannot keep our appointment, please let me know. Sessions missed without prior
              notice will be charged at the full rate.
            </p>

            <h3 className="font-heading text-lg text-charcoal">Late Arrivals:</h3>
            <p>
              To protect the flow of my practice, if you arrive up to 15 minutes late, we will use
              the remaining time for your session. Arrivals more than 15 minutes past the start time
              will be deemed a no-show.
            </p>

            <h2 className="heading-sm text-charcoal">3. Refund Policy</h2>
            <p>All sales for sessions and packages are final. I am unable to offer cash refunds.</p>

            <h2 className="heading-sm text-charcoal">4. Service &amp; Offerings</h2>
            <p>
              Your payment supports the time, presence, and expertise I dedicate to your journey,
              rather than a specific guaranteed outcome. I reserve the right to decline or conclude a
              session if I feel it is not in the highest interest of either party.
            </p>

            <h2 className="heading-sm text-charcoal">5. Medical Disclaimer</h2>
            <p>
              Insights shared on this site or during sessions are for general informational purposes
              and are not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              CranioSacral Therapy (CST) is a complementary path that works in harmony with primary
              healthcare; it does not replace the care of your GP. I do not provide medical or
              psychological diagnoses.
            </p>
            <p>
              By embarking on this journey, you accept full responsibility for your own perceptions
              and actions stemming from our work. Masami Noro and Luminous Rebirth assume no liability
              for your personal choices or health outcomes.
            </p>

            <h2 className="heading-sm text-charcoal">Contact Details</h2>
            <p>
              <a href="mailto:masami@luminousrebirth.com" className="text-gold hover:underline">
                masami@luminousrebirth.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
