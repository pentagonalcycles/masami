"use client";

import { useEffect, useRef } from "react";

interface CalEmbedProps {
  calLink: string;
  className?: string;
}

export function CalEmbed({ calLink, className }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<cal-inline 
          data-cal-link="${calLink}" 
          data-cal-config='{"layout":"month_view"}'
          style="width:100%;height:100%;overflow:scroll"
        ></cal-inline>`,
      }}
    />
  );
}

export function BookingButton({
  calLink,
  children,
  className,
}: {
  calLink: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`https://cal.com/${calLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "btn-primary"}
    >
      {children}
    </a>
  );
}
