"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Loader2, MessageCircle, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactContent, siteConfig } from "@/lib/site-config";

type Status = "idle" | "loading" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-onDark placeholder:text-onDark-muted/60 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.07]";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real visitors never fill this hidden field.
    if (data.company_website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Nie udało się wysłać wiadomości.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Nie udało się wysłać wiadomości.",
      );
    }
  }

  return (
    <section id="kontakt" className="bg-ink py-20 md:py-28">
      <div className="container-xl">
        <div className="grid gap-10 rounded-[1.75rem] border border-white/10 bg-ink-soft/60 p-8 md:grid-cols-2 md:gap-16 md:p-14">
          <Reveal>
            <p className="eyebrow">{contactContent.eyebrow}</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-onDark md:text-4xl">
              {contactContent.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-onDark-muted">
              {contactContent.description}
            </p>
            <div className="mt-8">
              <Button
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                variant="whatsapp"
                icon={<MessageCircle size={16} />}
              >
                {contactContent.whatsappCta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field — hidden from real users via CSS, not display:none, to fool basic bots. */}
              <div className="absolute -left-[9999px] opacity-0" aria-hidden>
                <label htmlFor="company_website">Nie wypełniaj tego pola</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-onDark">
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jan Kowalski"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-onDark">
                  Nazwa firmy
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  required
                  placeholder="Nazwa restauracji, salonu lub hotelu"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-onDark">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+48 600 000 000"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-onDark">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Napisz, jaki produkt Cię interesuje i gdzie będzie używany."
                  className={fieldClasses}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-[0_8px_24px_-8px_rgba(236,193,122,0.55)] transition-all duration-200 hover:bg-gold-soft active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "loading" ? "Wysyłanie…" : contactContent.submitCta}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CircleCheck size={16} />
                  Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <TriangleAlert size={16} />
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
