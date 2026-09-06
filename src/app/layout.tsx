import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: `${siteConfig.brand} — ${siteConfig.tagline}`,
  description:
    "Eleganckie tabliczki i stojaki NFC / QR, które kierują klientów prosto do wystawienia opinii Google. Bez aplikacji, gotowe do użycia, dopasowane do marki.",
  openGraph: {
    title: `${siteConfig.brand} — ${siteConfig.tagline}`,
    description:
      "Zamień zadowolonych klientów w nowe opinie Google dzięki tabliczkom i stojakom NFC/QR.",
    siteName: siteConfig.brand,
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ink text-onDark">
        {children}
      </body>
    </html>
  );
}
