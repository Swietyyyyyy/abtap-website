import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductThumb } from "@/components/ui/ProductThumb";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/site-config";

export function Products() {
  return (
    <section id="produkty" className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <Reveal>
          <SectionHeading eyebrow="Oferta" title="Nasze produkty" tone="light" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => {
            if (product.variant === "upcoming") {
              return (
                <Reveal key={product.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col items-center justify-center rounded-card border border-dashed border-onLight/15 bg-cream-soft/60 p-8 text-center">
                    <span className="rounded-pill bg-onLight/5 px-3 py-1 text-xs font-medium text-onLight-muted">
                      &nbsp;
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-onLight">
                      {product.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-onLight-muted">
                      {product.description}
                    </p>
                  </div>
                </Reveal>
              );
            }

            const dark = product.variant === "dark";
            return (
              <Reveal key={product.title} delay={index * 0.1}>
                <div
                  className={clsx(
                    "h-full overflow-hidden rounded-card p-3",
                    dark ? "bg-ink-soft" : "bg-cream",
                  )}
                >
                  <ProductThumb tone={dark ? "dark" : "light"} />
                  <div className="px-2.5 pb-2 pt-4">
                    <h3
                      className={clsx(
                        "font-[family-name:var(--font-display)] text-lg font-semibold",
                        dark ? "text-onDark" : "text-onLight",
                      )}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={clsx(
                        "mt-2.5 text-sm leading-relaxed",
                        dark ? "text-onDark-muted" : "text-onLight-muted",
                      )}
                    >
                      {product.description}
                    </p>
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
