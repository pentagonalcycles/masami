import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "mother-baby")!;

export const metadata: Metadata = {
  title: "Craniosacral Mother & Baby | Glastonbury",
  description: service.description,
};

export default function MotherBabyPage() {
  return <ServicePageTemplate {...service} bookingType={service.bookingType as "book" | "request"} />;
}
