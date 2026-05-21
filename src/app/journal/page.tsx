import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Insights on craniosacral therapy, energy healing, and the journey of self-discovery.",
};

const posts = [
  {
    slug: "what-is-craniosacral-therapy",
    title: "What is Craniosacral Therapy?",
    excerpt:
      "An introduction to this gentle yet profound hands-on therapy that supports your body's natural healing processes.",
    date: "2025-01-15",
    category: "Craniosacral",
  },
  {
    slug: "benefits-of-energy-healing",
    title: "The Benefits of Energy Healing",
    excerpt:
      "Exploring how energy healing works across distance and the profound shifts it can facilitate.",
    date: "2024-12-01",
    category: "Energy Healing",
  },
  {
    slug: "healing-journey",
    title: "The Healing Journey: What to Expect",
    excerpt:
      "A guide to what happens before, during, and after a healing session with Masami.",
    date: "2024-11-15",
    category: "General",
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-wide">
          <FadeIn>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Insights & Reflections
            </p>
            <h1 className="heading-xl text-white mb-4">Journal</h1>
            <p className="text-white/70 max-w-xl text-body">
              Thoughts on craniosacral therapy, energy healing, and the ongoing
              journey of self-discovery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gold tracking-wider uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="heading-md text-charcoal group-hover:text-gold transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-text-light">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-gold text-sm font-medium">
                    Read More &rarr;
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
