import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { MapPin, Mail, Share2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Masami Noro for craniosacral therapy and energy healing sessions. Based in Glastonbury, available in London and remotely.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Get in Touch
            </p>
            <h1 className="heading-xl text-white mb-4">Contact</h1>
            <p className="text-white/80 max-w-xl text-body">
              Have a question about sessions or want to discuss how
              craniosacral therapy can help? Masami will respond within 24-48
              hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="heading-md text-charcoal mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="heading-sm text-charcoal mb-6">
                    Other Ways to Connect
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Location</p>
                        <p className="text-text-light text-sm">
                          Sweet Track Fitness, above Studio 3
                        </p>
                        <p className="text-text-light text-sm">
                          Unit 1 Beckery Road, Glastonbury, BA6 9QT
                        </p>
                        <p className="text-text-light text-sm">
                          London, UK (select dates)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail size={20} className="text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <a
                          href="mailto:masami@luminousrebirth.com"
                          className="text-text-light text-sm hover:text-gold transition-colors"
                        >
masami@luminousrebirth.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Share2 size={20} className="text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Instagram</p>
                        <a
                          href="https://www.instagram.com/masami.noro"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-light text-sm hover:text-gold transition-colors"
                        >
                          @masami.noro
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-cream-dark">
                    <p className="text-text-light text-sm mb-4">
                      Ready to book? Skip the wait and choose your session
                      directly.
                    </p>
                    <Link href="/services" className="btn-primary w-full text-center block">
                      Book a Session
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
