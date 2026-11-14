import Image from "next/image";

/** Original brand artwork, displayed uncropped at every screen size. */
export default function HeroLogo() {
  return (
    <div className="hero-brand-artwork">
      <Image
        src="/brand/hero-background.jpg"
        alt="VRK Solutions logo framed by cream architectural curves and an orange ribbon"
        width={1448}
        height={1086}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 600px"
        preload
      />
    </div>
  );
}
