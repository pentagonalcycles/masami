"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function RetreatInquiryForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission -- replace with actual API route
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-sm text-center">
        <div className="text-gold text-5xl mb-4">&#10003;</div>
        <h3 className="font-heading text-2xl text-charcoal mb-2">
          Interest Registered
        </h3>
        <p className="text-text-light">
          Thank you for your interest in our sacred journeys. Masami will be in
          touch as soon as retreat details are confirmed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 md:p-10 shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-text-light mb-1.5">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-text-light mb-1.5">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-text-light mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-text-light mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-text-light mb-1.5">
          What interests you most?
        </label>
        <select
          name="interests"
          value={form.interests}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text focus:outline-none focus:border-gold transition-colors"
        >
          <option value="">Select an option</option>
          <option value="pilgrimage">Sacred Site Pilgrimage</option>
          <option value="healing-retreat">Healing Retreat</option>
          <option value="meditation">Meditation & Energy Work</option>
          <option value="all">All of the above</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-text-light mb-1.5">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Preferred dates, locations, dietary needs, or any questions..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary flex items-center gap-2"
      >
        <Send size={16} />
        {status === "loading" ? "Submitting..." : "Register Interest"}
      </button>
    </form>
  );
}
