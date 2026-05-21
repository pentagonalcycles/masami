import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "craniosacral-glastonbury")!;

export const metadata: Metadata = {
  title: "Craniosacral Session | Glastonbury",
  description: service.description,
};

export default function CraniosacralGlastonburyPage() {
  return <ServicePageTemplate {...service} bookingType={service.bookingType as "book" | "request"} />;
}
