import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  duration: string;
  price: string;
  image: string;
  bookingType: "book" | "request";
}

export function ServiceCard({
  slug,
  name,
  location,
  tagline,
  duration,
  price,
  image,
  bookingType,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={`${name} in ${location}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs tracking-wider uppercase rounded-full">
            {location}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl text-charcoal">{name}</h3>
        <p className="text-text-light text-sm mt-1">{tagline}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-dark">
          <div className="text-sm text-text-light">
            <span>{duration}</span>
            <span className="mx-2">|</span>
            <span className="text-gold font-semibold">{price}</span>
          </div>
          <Link
            href={`/services/${slug}`}
            className="text-gold text-sm font-medium hover:text-gold-dark transition-colors"
          >
            {bookingType === "book" ? "Book Now" : "Request"} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
