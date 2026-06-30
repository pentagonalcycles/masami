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
          <div className="prose max-w-none text-text space-y-4">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
