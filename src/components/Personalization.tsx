import { clsx } from "clsx";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { personalization } from "@/lib/site-config";

const cardTone: Record<(typeof personalization)[number]["variant"], string> = {
  dark: "bg-ink-soft",
  light: "bg-cream-soft",
  gold: "bg-gold-soft/25",
};

const personalizationImages: Record<string, string> = {
  Czarny: "/images/personalizacja-czarny.jpg",
  Biały: "/images/personalizacja-bialy.jpg",
  Przezroczysty: "/images/personalizacja-przezroczysty.jpg",
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={personalizationImages[item.title]}
                    alt={`Wariant kolorystyczny: ${item.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
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
