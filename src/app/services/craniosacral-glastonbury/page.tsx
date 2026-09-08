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
      bookingType={service.bookingType as "book" | "request" | "whatsapp"}
      afterBenefits={
        <div className="mt-8 p-6 bg-cream rounded-xl">
          <h4 className="font-heading text-lg text-charcoal mb-2">Location</h4>
          <p className="text-text mb-3">
            No 10 High Street, Glastonbury BA6 9DU
          </p>
          <p className="text-text-light text-sm">
            Member of the Craniosacral Therapy Association UK and fully insured
          </p>
        </div>
      }
    />
  );
}
