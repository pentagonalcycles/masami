"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  location: string;
  category: string[];
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  showFilter?: boolean;
}

function useItemsPerView() {
  return 1;
}

export function TestimonialCarousel({
  testimonials,
  showFilter = false,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const itemsPerView = useItemsPerView();

  const categories = [
    { value: "all", label: "All" },
    { value: "craniosacral", label: "Craniosacral" },
    { value: "energy-healing", label: "Energy Healing" },
  ];

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category.includes(filter));

  const maxIndex = Math.max(0, filtered.length - itemsPerView);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div>
      {showFilter && (
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setCurrentIndex(0);
              }}
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
      )}

      <div className="relative">
        {/* Navigation Arrows - Desktop (beside cards) */}
        {filtered.length > itemsPerView && (
          <>
            <button
              onClick={goToPrevious}
              disabled={!canGoPrevious}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hidden md:flex ${
                canGoPrevious
                  ? "hover:bg-gold hover:text-white text-charcoal cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-text-light"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hidden md:flex ${
                canGoNext
                  ? "hover:bg-gold hover:text-white text-charcoal cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-text-light"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {filtered.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows (below cards) */}
        {filtered.length > itemsPerView && (
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={goToPrevious}
              disabled={!canGoPrevious}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                canGoPrevious
                  ? "hover:bg-gold hover:text-white text-charcoal cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-text-light"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                canGoNext
                  ? "hover:bg-gold hover:text-white text-charcoal cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-text-light"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Dot Indicators */}
        {filtered.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-gold w-8"
                    : "bg-gold/30 hover:bg-gold/50 w-2.5"
                }`}
                aria-label={`Go to testimonial group ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
