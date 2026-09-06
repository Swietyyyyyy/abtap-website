import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductThumb } from "@/components/ui/ProductThumb";
import { Reveal } from "@/components/ui/Reveal";
import { personalization } from "@/lib/site-config";

const cardTone: Record<(typeof personalization)[number]["variant"], string> = {
  dark: "bg-ink-soft",
  light: "bg-cream-soft",
  gold: "bg-gold-soft/25",
};

export function Personalization() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            eyebrow="Personalizacja"
            title="Każdy produkt wykonujemy indywidualnie"
            description="Projekt dopasowujemy do logo, kolorystyki i charakteru Twojej firmy, żeby tabliczka lub stojak wyglądały jak naturalna część marki."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {personalization.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className={clsx("h-full overflow-hidden rounded-card p-3", cardTone[item.variant])}>
                <ProductThumb tone={item.variant === "dark" ? "dark" : "light"} />
                <div className="px-2.5 pb-2 pt-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-onLight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-onLight-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
