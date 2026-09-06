import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={clsx(
          "mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl",
          tone === "dark" ? "text-onDark" : "text-onLight",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-onDark-muted" : "text-onLight-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
