import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]"
        aria-hidden
      />
      <div className="container-xl relative grid items-center gap-14 md:grid-cols-2 md:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-onDark-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {heroContent.badge}
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-onDark sm:text-5xl lg:text-[3.4rem]">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-onDark-muted md:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#kontakt" variant="primary">
              {heroContent.primaryCta}
            </Button>
            <Button href="#jak-dziala" variant="outline-dark">
              {heroContent.secondaryCta}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {heroContent.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-2 text-sm text-onDark-muted"
              >
                <Check size={15} className="text-gold" />
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/hero.jpg"
              alt="Tabliczka NFC ABtap na blacie baru, gotowa do zbierania opinii Google"
              fill
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
