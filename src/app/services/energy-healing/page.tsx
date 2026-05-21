import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "energy-healing")!;

export const metadata: Metadata = {
  title: "Energy Healing (Remote)",
  description: service.description,
};

export default function EnergyHealingPage() {
  return <ServicePageTemplate {...service} bookingType={service.bookingType as "book" | "request"} />;
}
