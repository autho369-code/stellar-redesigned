/**
 * Decorative workspace image used on /about and /contact. It is a general
 * office photo supplied by the owner, so there is deliberately no caption,
 * no "our office" wording and no structured data attached to it.
 * Width and height are the intrinsic size of the largest file and the box has
 * a fixed height per breakpoint, so the image can never shift the layout.
 */
export default function OfficeHallwayImage({ className = '' }: { className?: string }) {
  return (
    <img
      src="/images/modern-office-hallway-1200.webp"
      srcSet="/images/modern-office-hallway-640.webp 640w, /images/modern-office-hallway-1200.webp 1200w, /images/modern-office-hallway-1600.webp 1600w"
      sizes="(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
      alt="Modern office hallway with glass-walled meeting rooms"
      width={1600}
      height={1068}
      loading="lazy"
      decoding="async"
      className={`block w-full h-56 sm:h-72 lg:h-96 object-cover ${className}`}
    />
  );
}
