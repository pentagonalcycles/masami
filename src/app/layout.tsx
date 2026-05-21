import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Masami Noro | Craniosacral Therapy & Energy Healing",
    template: "%s | Luminous Rebirth",
  },
  description:
    "Craniosacral Therapy and Energy Healing in Glastonbury, London and remotely. Masami Noro offers transformative healing sessions for physical and emotional wellbeing.",
  keywords: [
    "craniosacral therapy",
    "energy healing",
    "Glastonbury",
    "London",
    "holistic healing",
    "Masami Noro",
    "Luminous Rebirth",
    "remote healing",
    "mother and baby craniosacral",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Luminous Rebirth",
    title: "Masami Noro | Craniosacral Therapy & Energy Healing",
    description:
      "Craniosacral Therapy and Energy Healing in Glastonbury, London and remotely.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Luminous Rebirth",
              description:
                "Craniosacral Therapy and Energy Healing in Glastonbury, London and remotely.",
              founder: {
                "@type": "Person",
                name: "Masami Noro",
              },
              areaServed: ["Glastonbury, Somerset, UK", "London, UK"],
              serviceType: [
                "Craniosacral Therapy",
                "Energy Healing",
                "Remote Healing",
              ],
              url: "https://www.luminousrebirth.com",
              sameAs: ["https://www.instagram.com/masami.noro"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
