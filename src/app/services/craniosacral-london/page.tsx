import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "craniosacral-london")!;

export const metadata: Metadata = {
  title: "Craniosacral Session | London",
  description: service.description,
};

export default function CraniosacralLondonPage() {
  return <ServicePageTemplate {...service} bookingType={service.bookingType as "book" | "request"} />;
}
