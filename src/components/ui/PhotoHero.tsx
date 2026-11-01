import Image from "next/image";
import { ReactNode } from "react";

/**
 * Full-bleed photo hero with a left-to-right dark gradient overlay — darkest
 * where the text column sits, so white text stays WCAG AA (4.5:1+) regardless
 * of what's in the photo, while the photo still shows through on the right.
 */
export function PhotoHero({
  image,
  alt = "",
  children,
  py = "py-24 sm:py-32",
}: {
  image: string;
  alt?: string;
  children: ReactNode;
  py?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-950/40"
        aria-hidden="true"
      />
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${py}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * Shorter photo banner for non-hero sections (e.g. mid-page breaks) — same
 * overlay treatment, less vertical padding.
 */
export function PhotoBanner({
  image,
  alt = "",
  children,
}: {
  image: string;
  alt?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/70 to-brand-950/50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
