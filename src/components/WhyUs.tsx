import { Package, Palette, ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whyUs } from "@/lib/site-config";

const icons = [Star, ShieldCheck, Package, Palette];

export function WhyUs() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            eyebrow="Zaufanie i wygoda"
            title={`Dlaczego firmy wybierają ${siteConfig.brand}`}
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-card border border-card-dark-border bg-card-dark p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gold">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-semibold text-onDark">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-onDark-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
