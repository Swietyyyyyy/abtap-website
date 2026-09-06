import { ArrowRight, CircleCheck, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/lib/site-config";

const icons = [CircleCheck, ArrowRight, MessageSquare];

export function HowItWorks() {
  return (
    <section id="jak-dziala" className="bg-cream py-20 md:py-28">
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            eyebrow="Prosty proces"
            title="Jak to działa?"
            description="Bez aplikacji, kodów QR i tłumaczenia klientom, gdzie mają kliknąć. Jedno dotknięcie prowadzi prosto do formularza opinii."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.step} delay={index * 0.1}>
                <div className="h-full rounded-card bg-cream-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-onLight">
                    <Icon size={20} />
                  </span>
                  <p className="mt-5 text-xs font-semibold tracking-widest text-onLight-muted">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-onLight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-onLight-muted">
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
