import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

const posts: Record<string, { title: string; date: string; category: string; content: string }> = {
  "what-is-craniosacral-therapy": {
    title: "What is Craniosacral Therapy?",
    date: "2025-01-15",
    category: "Craniosacral",
    content: `Craniosacral therapy (CST) is a gentle, hands-on technique that uses a light touch to examine membranes and movement of the fluids in and around the central nervous system. Relieving tension in the central nervous system promotes a feeling of well-being by eliminating pain and boosting health and immunity.

## How Does It Work?

The craniosacral system includes the membranes and cerebrospinal fluid that surround and protect the brain and spinal cord. The therapist uses a soft touch -- generally about the weight of a nickel -- to release restrictions in the craniosacral system to improve the functioning of the central nervous system.

## What Can It Help With?

- Chronic pain
- Migraines and headaches
- Stress and tension
- Post-traumatic stress disorder (PTSD)
- Sleep disorders
- Fibromyalgia
- Neck and back pain

## What to Expect in a Session

A typical CST session lasts about an hour. You remain fully clothed and lie on a comfortable treatment table. The therapist will gently touch various parts of your body to monitor the rhythm of the fluid pulsing around your brain and spinal cord. Soft manipulative techniques are then used to release restrictions.

Most people experience deep relaxation during the session. Some feel a sense of warmth, gentle pulsing, or subtle shifts in their body.

## Is It Safe?

Craniosacral therapy is very safe and non-invasive. It is suitable for people of all ages, from newborns to the elderly. However, it should not replace medical treatment for serious conditions.`,
  },
  "benefits-of-energy-healing": {
    title: "The Benefits of Energy Healing",
    date: "2024-12-01",
    category: "Energy Healing",
    content: `Energy healing is a holistic practice that activates the body's subtle energy systems to remove blocks. By breaking through these energetic blocks, the body's inherent ability to heal itself is stimulated.

## Understanding Energy Healing

Everything in the universe is made of energy, including our bodies. Energy healing works on the principle that when our body's energy is balanced and flowing freely, we experience health and vitality. When this energy becomes blocked or depleted, we may experience physical, emotional, or mental discomfort.

## Benefits of Remote Energy Healing

One of the most remarkable aspects of energy healing is that it works just as effectively remotely as it does in person. This means you can experience profound healing from the comfort of your own home, wherever you are in the world.

### Physical Benefits
- Pain relief and reduced inflammation
- Improved sleep quality
- Enhanced immune function
- Accelerated recovery from illness or surgery

### Emotional Benefits
- Reduced anxiety and stress
- Release of emotional blockages
- Greater sense of peace and calm
- Improved emotional resilience

### Spiritual Benefits
- Deeper connection to self
- Enhanced intuition and clarity
- Greater sense of purpose and direction
- Expanded consciousness

## What to Expect

During a remote energy healing session, you simply relax in a comfortable, quiet space. The practitioner works intuitively with your energy field to identify and clear blockages, restore balance, and facilitate healing at the deepest level.`,
  },
  "healing-journey": {
    title: "The Healing Journey: What to Expect",
    date: "2024-11-15",
    category: "General",
    content: `Embarking on a healing journey is a deeply personal and transformative experience. Whether you're seeking relief from physical pain, emotional support, or simply a deeper connection to yourself, understanding what to expect can help you get the most from your sessions.

## Before Your Session

### Preparing Yourself
- Set an intention for your session -- what would you like to address or release?
- Wear comfortable, loose-fitting clothing
- Avoid heavy meals and caffeine before your session
- Arrive a few minutes early to settle and ground yourself

### What to Bring
- An open mind and willingness to receive
- Any relevant health information
- Questions or concerns you'd like to discuss

## During Your Session

### The Environment
Sessions take place in a calm, nurturing space designed to help you relax completely. Soft lighting and a peaceful atmosphere support your healing experience.

### The Process
- The session begins with a brief consultation
- You will lie fully clothed on a treatment table
- The practitioner works with gentle touch or at a distance
- You may experience warmth, tingling, deep relaxation, or emotional release
- Each session is unique -- trust whatever unfolds

## After Your Session

### Integration
- Drink plenty of water
- Rest if you feel the need
- Pay attention to any shifts in your body, mind, or emotions
- Journaling can help process your experience

### Ongoing Healing
Healing is a journey, not a destination. Many clients experience cumulative benefits with regular sessions. Your practitioner will discuss a recommended plan based on your individual needs.

## Your Healing is Unique

Remember that everyone's healing journey is different. Trust the process, be patient with yourself, and know that each session builds upon the last.`,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <FadeIn>
          <Link
            href="/journal"
            className="text-gold text-sm hover:underline mb-6 inline-block"
          >
            &larr; Back to Journal
          </Link>
          <div className="flex items-center gap-3 mb-4">
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
          <h1 className="heading-lg text-charcoal mb-8">{post.title}</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="prose prose-lg max-w-none text-text">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="heading-sm text-charcoal mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-heading text-xl text-charcoal mt-8 mb-3">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mb-6">
                    {block.split("\n").map((li, j) => (
                      <li key={j}>{li.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mb-4 leading-relaxed">
                  {block}
                </p>
              );
            })}
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
