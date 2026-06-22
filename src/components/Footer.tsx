import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <Image
                src="https://static.wixstatic.com/media/c1e158_c2d751644bb341b1ae942ea257fa7dc9~mv2.png"
                alt="Luminous Rebirth"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Craniosacral Therapy and Energy Healing in Glastonbury, London and
              remotely with Masami Noro.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/craniosacral-glastonbury"
                  className="hover:text-gold transition-colors"
                >
                  Craniosacral | Glastonbury
                </Link>
              </li>
              <li>
                <Link
                  href="/services/craniosacral-london"
                  className="hover:text-gold transition-colors"
                >
                  Craniosacral | London
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mother-baby"
                  className="hover:text-gold transition-colors"
                >
                  Mother & Baby
                </Link>
              </li>
              <li>
                <Link
                  href="/services/energy-healing"
                  className="hover:text-gold transition-colors"
                >
                  Energy Healing (Remote)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency"
                  className="hover:text-gold transition-colors"
                >
                  Emergency Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Masami
                </Link>
              </li>
              <li>
                <Link
                  href="/retreats"
                  className="hover:text-gold transition-colors"
                >
                  Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-gold transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="hover:text-gold transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-card"
                  className="hover:text-gold transition-colors"
                >
                  eGift Card
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/masami.noro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/services" className="btn-primary text-sm">
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {year} Luminous Rebirth. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gold transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-gold transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              href="/cancellation-policy"
              className="hover:text-gold transition-colors"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
