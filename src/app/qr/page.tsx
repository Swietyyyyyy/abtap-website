import type { Metadata } from "next";
import { QrGenerator } from "@/components/QrGenerator";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Generator kodów QR — ${siteConfig.brand}`,
  robots: { index: false, follow: false },
};

export default function QrPage() {
  return (
    <main className="min-h-screen bg-ink py-16 md:py-24">
      <div className="container-xl max-w-2xl">
        <p className="eyebrow">Panel wewnętrzny</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-onDark md:text-4xl">
          Generator kodów QR
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-onDark-muted">
          Wklej dowolny link (np. do wizytówki Google, oferty lub promocji) i pobierz
          gotowy kod QR jako PNG lub SVG — do wydruku na tabliczkach, naklejkach lub
          materiałach marketingowych.
        </p>

        <QrGenerator />
      </div>
    </main>
  );
}
