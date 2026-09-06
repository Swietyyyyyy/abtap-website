import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent, siteConfig } from "@/lib/site-config";
import { generateQrSvg } from "@/lib/qr";

export async function Hero() {
  // Demo QR code: in production this points at the client's real Google
  // review link. Generated server-side so the hero visual and the /qr
  // generator tool share one code path.
  const demoQrSvg = await generateQrSvg(`https://${siteConfig.domain}/demo-opinia`, {
    colorDark: "#f6f4ee",
    colorLight: "#00000000",
  });

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
          <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-card-dark to-ink-soft p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-onDark-muted">
                Podziel się swoją opinią
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-1.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-sm font-bold text-ink">
                {siteConfig.brand.charAt(0)}
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-onDark">
                {siteConfig.brand}
              </span>
            </div>

            <div
              className="mx-auto mt-6 flex h-36 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-3"
              dangerouslySetInnerHTML={{ __html: demoQrSvg }}
            />

            <p className="mt-4 text-center text-[11px] text-onDark-muted">
              Zeskanuj QR lub zbliż telefon
            </p>
          </div>

          {/* Stand mock-up */}
          <div className="mx-auto -mt-2 h-6 w-40 rounded-b-xl bg-gradient-to-b from-[#8a5a2f] to-[#5c3b1e] shadow-[0_18px_30px_-14px_rgba(0,0,0,0.6)]" />
        </Reveal>
      </div>
    </section>
  );
}
