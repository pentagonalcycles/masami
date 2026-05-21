import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Luminous Rebirth.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <FadeIn>
          <h1 className="heading-lg text-charcoal mb-8">Privacy Policy</h1>
          <div className="prose max-w-none text-text space-y-6">
            <p className="text-text-light text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="heading-sm text-charcoal">1. Introduction</h2>
            <p>
              Luminous Rebirth (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
              your personal information. This privacy policy explains how we
              collect, use, and safeguard your data when you visit our website or
              use our services.
            </p>

            <h2 className="heading-sm text-charcoal">2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number)</li>
              <li>Booking information and session history</li>
              <li>Messages sent through our contact form</li>
              <li>Newsletter subscription details</li>
              <li>Technical data (IP address, browser type) via analytics</li>
            </ul>

            <h2 className="heading-sm text-charcoal">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage your healing sessions</li>
              <li>To respond to your enquiries</li>
              <li>To send newsletter updates (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="heading-sm text-charcoal">4. Data Sharing</h2>
            <p>
              We do not sell or share your personal data with third parties,
              except where required by law or to provide our services (e.g.,
              booking platform, email service).
            </p>

            <h2 className="heading-sm text-charcoal">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the ICO</li>
            </ul>

            <h2 className="heading-sm text-charcoal">6. Contact</h2>
            <p>
              For any privacy-related enquiries, contact us at{" "}
              <a href="mailto:hello@luminousrebirth.com" className="text-gold hover:underline">
                hello@luminousrebirth.com
              </a>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
