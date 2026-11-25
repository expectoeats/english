import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="w-full">
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 52vw, 680px)" }}>
        <Image
          src="/hero-banner.jpg"
          alt="TSS Acharya — Best Coaching Institute in Prayagraj for CBSE & ICSE"
          fill
          className="lg:object-contain object-cover lg:object-center object-right w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
