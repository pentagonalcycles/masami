"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  location: string;
  category: string[];
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="text-gold text-4xl font-heading leading-none mb-4">&ldquo;</div>
      <p className="text-text leading-relaxed flex-1 italic font-heading text-lg">
        {testimonial.quote}
      </p>
      <div className="mt-6 pt-4 border-t border-cream-dark">
        <p className="font-semibold text-charcoal">{testimonial.name}</p>
        {testimonial.title && (
          <p className="text-sm text-text-light">{testimonial.title}</p>
        )}
        <p className="text-sm text-gold">{testimonial.location}</p>
      </div>
    </div>
  );
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const [filter, setFilter] = useState("all");

  const categories = [
    { value: "all", label: "All" },
    { value: "craniosacral", label: "Craniosacral" },
    { value: "energy-healing", label: "Energy Healing" },
  ];

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category.includes(filter));

  return (
    <div>
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === cat.value
                ? "bg-gold text-white"
                : "bg-cream-dark text-text-light hover:bg-gold/10 hover:text-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
