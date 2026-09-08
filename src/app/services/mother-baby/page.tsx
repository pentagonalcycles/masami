import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "mother-baby")!;

export const metadata: Metadata = {
  title: "Craniosacral Mother & Baby | Glastonbury",
  description: service.description,
};

export default function MotherBabyPage() {
  return (
    <ServicePageTemplate
      {...service}
      bookingType={service.bookingType as "book" | "request" | "whatsapp"}
      afterBenefits={
        <div className="mt-8 p-6 bg-cream rounded-xl">
          <h4 className="font-heading text-lg text-charcoal mb-2">Location</h4>
          <p className="text-text mb-3">
            No 10 High Street, Glastonbury BA6 9DU and home visits
          </p>
          <p className="text-text-light text-sm">
            Member of the Craniosacral Therapy Association UK and fully insured
          </p>
        </div>
      }
    />
  );
}
