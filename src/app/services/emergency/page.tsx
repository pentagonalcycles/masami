import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "emergency")!;

export const metadata: Metadata = {
  title: "Emergency Assistance (Remote)",
  description: service.description,
};

export default function EmergencyPage() {
  return <ServicePageTemplate {...service} bookingType={service.bookingType as "book" | "request"} />;
}
