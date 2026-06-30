import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Luminous Rebirth services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <FadeIn>
          <h1 className="heading-lg text-charcoal mb-8">Terms & Conditions</h1>
          <div className="prose max-w-none text-text space-y-6">
            <p className="text-text-light text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="heading-sm text-charcoal">1. Services</h2>
            <p>
              Luminous Rebirth provides craniosacral therapy and energy healing
              sessions. These services are complementary therapies and are not
              intended to replace medical treatment. Please consult your GP for
              medical concerns.
            </p>

            <h2 className="heading-sm text-charcoal">2. Bookings</h2>
            <p>
              Sessions are confirmed upon booking. You will receive a
              confirmation email with session details. Please arrive on time or
              connect remotely at the scheduled time.
            </p>

            <h2 className="heading-sm text-charcoal">3. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>More than 24 hours notice:</strong> Reschedule only and not refunded
              </li>
              <li>
                <strong>Less than 24 hours notice and missed appointments</strong> are charged in full
              </li>
              <li>
                <strong>Late arrival:</strong> To protect the flow of my practice, if you arrive up to 15 minutes late, we will use the remaining time for your session. Arrivals more than 15 minutes past the start time will be deemed a no-show.
              </li>
            </ul>

            <h2 className="heading-sm text-charcoal">4. Health Disclaimer</h2>
            <p>
              Energy healing and craniosacral therapy are complementary
              approaches. They are not a substitute for professional medical
              advice, diagnosis, or treatment. Always seek the advice of your
              physician with any questions regarding a medical condition.
            </p>

            <h2 className="heading-sm text-charcoal">5. Limitation of Liability</h2>
            <p>
              Luminous Rebirth and Masami Noro shall not be liable for any
              indirect, incidental, or consequential damages arising from the
              use of our services.
            </p>

            <h2 className="heading-sm text-charcoal">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
