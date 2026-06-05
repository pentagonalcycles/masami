import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

interface RetreatFeatureCardProps {
  badge?: string;
  title: string;
  subtitle: string;
  location: string;
  dates: string;
  image: string;
  shortDescription: string;
  slug: string;
}

export function RetreatFeatureCard({
  badge,
  title,
  location,
  dates,
  image,
  shortDescription,
  slug,
}: RetreatFeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
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
        <p className="text-text-light text-sm leading-relaxed mb-6">
          {shortDescription}
        </p>
        <Link href={`/retreats#${slug}`} className="btn-secondary text-sm">
          Learn More
        </Link>
      </div>
    </div>
  );
}
