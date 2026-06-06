import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

interface PastRetreatCardProps {
  title: string;
  location: string;
  dates: string;
  image: string;
  shortDescription: string;
}

export function PastRetreatCard({
  title,
  location,
  dates,
  image,
  shortDescription,
}: PastRetreatCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-light mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gold" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            <span>{location}</span>
          </div>
        </div>
        <h3 className="heading-sm text-charcoal mb-2">{title}</h3>
        <p className="text-text-light text-sm leading-relaxed">
          {shortDescription}
        </p>
      </div>
    </div>
  );
}
