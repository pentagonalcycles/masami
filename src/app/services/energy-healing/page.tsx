import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { services } from "@/data/site-data";
import type { Metadata } from "next";

const service = services.find((s) => s.slug === "energy-healing")!;

export const metadata: Metadata = {
  title: "Energy Healing (Remote)",
  description: service.description,
};

export default function EnergyHealingPage() {
  return (
    <ServicePageTemplate
      {...service}
      bookingType={service.bookingType as "book" | "request"}
      afterBenefits={
        <p>
          Feel free to contact me directly to book a session if you can&apos;t find any suitable
          time on the calendar. I do have greater flexibility for online sessions.
        </p>
      }
    />
  );
}
