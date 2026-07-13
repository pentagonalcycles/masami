import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "craniosacral-glastonbury")!;

export const metadata: Metadata = {
  title: "Craniosacral Session | Glastonbury",
  description: service.description,
};

export default function CraniosacralGlastonburyPage() {
  return (
    <ServicePageTemplate
      {...service}
      bookingType={service.bookingType as "book" | "request"}
      afterBenefits={
        <div className="mt-8 p-6 bg-cream rounded-xl">
          <h4 className="font-heading text-lg text-charcoal mb-2">Location</h4>
          <p className="text-text mb-3">
            Sweet Track Fitness, above Studio 3, Unit 1 Beckery Road, Glastonbury, BA6 9QT
          </p>
          <p className="text-text-light text-sm">
            Member of the Craniosacral Therapy Association UK and fully insured
          </p>
        </div>
      }
    />
  );
}
