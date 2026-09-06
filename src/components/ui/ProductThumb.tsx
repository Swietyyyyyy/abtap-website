import { clsx } from "clsx";
import { Nfc } from "lucide-react";

/**
 * Stylised stand-in for real product photography. Keeps the layout looking
 * finished for the demo while making it obvious (via markup/alt text) that
 * actual photos should replace this before the site goes live.
 */
export function ProductThumb({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label="Wizualizacja poglądowa produktu NFC"
      className={clsx(
        "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl",
        tone === "dark"
          ? "bg-gradient-to-br from-[#26221a] via-ink-soft to-ink"
          : "bg-gradient-to-br from-cream via-cream-soft to-white",
        className,
      )}
    >
      <div
        className={clsx(
          "flex h-20 w-20 items-center justify-center rounded-2xl border",
          tone === "dark"
            ? "border-gold/25 bg-white/5 text-gold"
            : "border-onLight/10 bg-white/70 text-onLight",
        )}
      >
        <Nfc size={30} strokeWidth={1.5} />
      </div>
      <div
        className={clsx(
          "absolute inset-x-6 bottom-4 h-2 rounded-full blur-md",
          tone === "dark" ? "bg-black/40" : "bg-black/10",
        )}
      />
    </div>
  );
}
