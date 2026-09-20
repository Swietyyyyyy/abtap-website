import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { inPractice } from "@/lib/site-config";

const practiceImages = [
  "/images/practice-restauracje.jpg",
  "/images/practice-salony.jpg",
  "/images/practice-dotkniecie.jpg",
];

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
          {inPractice.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src={practiceImages[index]}
                  alt={`${item.title} — ${item.caption}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
