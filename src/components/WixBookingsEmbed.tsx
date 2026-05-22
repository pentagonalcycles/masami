"use client";

import { useState } from "react";

interface WixBookingsEmbedProps {
  bookingUrl: string;
  className?: string;
}

export function WixBookingsEmbed({ bookingUrl, className }: WixBookingsEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className ?? ""}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream rounded-2xl">
          <div className="text-text-light text-sm">Loading calendar...</div>
        </div>
      )}
      <iframe
        src={bookingUrl}
        title="Book a Session"
        className="w-full h-full rounded-2xl border-0"
        onLoad={() => setLoaded(true)}
        allow="payment"
      />
    </div>
  );
}

interface WixBookingLinkProps {
  bookingUrl: string;
  children: React.ReactNode;
  className?: string;
}

export function WixBookingLink({
  bookingUrl,
  children,
  className,
}: WixBookingLinkProps) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "btn-primary"}
    >
      {children}
    </a>
  );
}
