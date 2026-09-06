"use client";

import { useState, type FormEvent } from "react";
import QRCode from "qrcode";
import { Download, QrCode as QrIcon, TriangleAlert } from "lucide-react";
import { isValidHttpUrl } from "@/lib/qr";

export function QrGenerator() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pngDataUrl, setPngDataUrl] = useState<string | null>(null);
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [generatedFor, setGeneratedFor] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const trimmed = url.trim();
    if (!isValidHttpUrl(trimmed)) {
      setError("Podaj pełny, prawidłowy adres URL, np. https://g.page/twoja-firma/review");
      setPngDataUrl(null);
      setSvgMarkup(null);
      return;
    }

    try {
      const [png, svg] = await Promise.all([
        QRCode.toDataURL(trimmed, { errorCorrectionLevel: "M", margin: 2, width: 480 }),
        QRCode.toString(trimmed, { type: "svg", errorCorrectionLevel: "M", margin: 2 }),
      ]);
      setPngDataUrl(png);
      setSvgMarkup(svg);
      setGeneratedFor(trimmed);
    } catch {
      setError("Nie udało się wygenerować kodu QR. Spróbuj ponownie.");
    }
  }

  function downloadSvg() {
    if (!svgMarkup) return;
    const blob = new Blob([svgMarkup], { type: "image/svg+xml" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "kod-qr.svg";
    link.click();
    URL.revokeObjectURL(blobUrl);
  }

  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="qr-url" className="mb-1.5 block text-sm font-medium text-onDark">
            Docelowy link
          </label>
          <input
            id="qr-url"
            type="url"
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://g.page/twoja-firma/review"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-onDark placeholder:text-onDark-muted/60 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.07]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:bg-gold-soft active:scale-[0.98]"
        >
          <QrIcon size={16} />
          Generuj kod QR
        </button>

        {error && (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <TriangleAlert size={16} />
            {error}
          </p>
        )}
      </form>

      <div className="flex flex-col items-center justify-center rounded-card border border-white/10 bg-white/[0.03] p-8">
        {pngDataUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- data: URL, no next/image optimisation needed */}
            <img
              src={pngDataUrl}
              alt={`Kod QR prowadzący do ${generatedFor}`}
              className="h-40 w-40 rounded-lg bg-white p-3"
            />
            <p className="mt-4 max-w-[220px] truncate text-center text-xs text-onDark-muted" title={generatedFor ?? undefined}>
              {generatedFor}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={pngDataUrl}
                download="kod-qr.png"
                className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 px-4 py-2 text-xs font-semibold text-onDark hover:bg-white/5"
              >
                <Download size={14} /> PNG
              </a>
              <button
                type="button"
                onClick={downloadSvg}
                className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 px-4 py-2 text-xs font-semibold text-onDark hover:bg-white/5"
              >
                <Download size={14} /> SVG
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-onDark-muted">
            <QrIcon size={32} className="mx-auto opacity-40" />
            <p className="mt-3 text-sm">Podgląd kodu QR pojawi się tutaj</p>
          </div>
        )}
      </div>
    </div>
  );
}
