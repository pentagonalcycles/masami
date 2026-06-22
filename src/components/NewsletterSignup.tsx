"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate submission -- replace with actual API integration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="bg-charcoal rounded-2xl p-8 md:p-12 text-center">
      <h3 className="font-heading text-2xl md:text-3xl text-gold mb-3">
        Join the Journey
      </h3>
      <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">
        Receive insights on craniosacral therapy, energy healing, and upcoming
        events. Delivered with care, never spam.
      </p>
      {status === "success" ? (
        <p className="text-gold font-medium">
          Thank you for subscribing. Welcome to the journey.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary flex items-center gap-2 text-sm whitespace-nowrap"
          >
            <Send size={14} />
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
