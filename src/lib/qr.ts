import QRCode from "qrcode";

/**
 * Renders a QR code as an inline SVG string for the given target URL.
 * Used both by the hero product mock-up (a demo code) and by the
 * /qr generator tool, so the visual style stays identical everywhere.
 */
export async function generateQrSvg(
  targetUrl: string,
  options?: { colorDark?: string; colorLight?: string; margin?: number },
): Promise<string> {
  return QRCode.toString(targetUrl, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: options?.margin ?? 1,
    color: {
      dark: options?.colorDark ?? "#101012",
      light: options?.colorLight ?? "#00000000",
    },
  });
}

/** Basic client+server side URL validation shared by the QR tool and API route. */
export function isValidHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
