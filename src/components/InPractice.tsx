import { Coffee, Smartphone, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { inPractice } from "@/lib/site-config";

const icons = [Coffee, Sparkles, Smartphone];

export function InPractice() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            eyebrow="W praktyce"
            title="Wygląda premium, działa natychmiast"
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {inPractice.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-soft via-[#1f1a12] to-ink transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={38} strokeWidth={1.4} className="text-gold/70" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14">
                    <p className="text-sm font-semibold text-onDark">{item.title}</p>
                    <p className="mt-1 text-xs text-onDark-muted">{item.caption}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
