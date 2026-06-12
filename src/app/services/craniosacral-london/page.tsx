import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "craniosacral-london")!;

export const metadata: Metadata = {
  title: "Craniosacral Session | Kensington, London",
  description: service.description,
};

export default function CraniosacralLondonPage() {
  return (
    <ServicePageTemplate
      {...service}
      bookingType={service.bookingType as "book" | "request"}
      afterBenefits={
        <div className="mt-8 p-6 bg-cream rounded-xl">
          <h4 className="font-heading text-lg text-charcoal mb-2">Location</h4>
          <p className="text-text mb-3">
            Holland Park Road, W14 8NA, right across from Leighton House and a short walk from
            Kensington High Street station.
          </p>
          <p className="text-text-light text-sm">
            Member of the Craniosacral Therapy Association UK and fully insured
          </p>
        </div>
      }
    />
  );
}
