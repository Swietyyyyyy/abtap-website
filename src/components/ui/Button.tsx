import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline-dark" | "outline-light" | "whatsapp";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft shadow-[0_8px_24px_-8px_rgba(236,193,122,0.55)]",
  "outline-dark":
    "border border-white/15 text-onDark hover:bg-white/5 bg-transparent",
  "outline-light":
    "border border-ink/15 text-onLight hover:bg-ink/5 bg-transparent",
  whatsapp:
    "border border-gold/40 text-gold hover:bg-gold/10 bg-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("https://wa.me");

  const content = (
    <span
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
      {icon}
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
