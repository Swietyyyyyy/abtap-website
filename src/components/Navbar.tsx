"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <nav className="container-xl flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-sm font-bold text-ink">
            {siteConfig.brand.charAt(0)}
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-bold text-onDark">
            {siteConfig.brand}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-onDark-muted transition-colors hover:text-onDark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#kontakt" variant="primary">
            Poproś o bezpłatną wycenę
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-onDark md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-onDark-muted hover:text-onDark"
              >
                {item.label}
              </a>
            ))}
            <div onClick={() => setOpen(false)}>
              <Button href="#kontakt" variant="primary" className="mt-2 w-full">
                Poproś o bezpłatną wycenę
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
