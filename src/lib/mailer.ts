import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

export interface ContactPayload {
  name: string;
  companyName: string;
  phone: string;
  message?: string;
}

/**
 * Builds an SMTP transporter from environment variables. Returns null when
 * SMTP is not configured yet, so the contact form can still be demoed
 * end-to-end (the API route falls back to logging the lead) before real
 * mailbox credentials are wired up for production.
 *
 * Required env vars for production sending:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
 * Optional:
 *   SMTP_SECURE ("true" for port 465), CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 */
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendContactNotification(payload: ContactPayload) {
  const transporter = getTransporter();
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || `no-reply@${siteConfig.domain}`;

  const subject = `Nowe zapytanie ze strony ${siteConfig.brand} — ${payload.companyName}`;
  const text = [
    `Imię i nazwisko: ${payload.name}`,
    `Nazwa firmy: ${payload.companyName}`,
    `Telefon: ${payload.phone}`,
    `Wiadomość: ${payload.message || "(brak)"}`,
  ].join("\n");

  if (!transporter) {
    // Demo/prototype mode: no SMTP configured yet. Log instead of throwing,
    // so the flow can be demonstrated before real credentials exist.
    console.warn(
      "[contact] SMTP nie jest skonfigurowany — zgłoszenie zalogowane zamiast wysłane e-mailem:",
      { to: toEmail, subject, text },
    );
    return { delivered: false as const };
  }

  await transporter.sendMail({
    from: `"${siteConfig.brand} — formularz kontaktowy" <${fromEmail}>`,
    to: toEmail,
    replyTo: fromEmail,
    subject,
    text,
  });

  return { delivered: true as const };
}
