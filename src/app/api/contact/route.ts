import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const companyName = typeof body.companyName === "string" ? body.companyName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !companyName || !phone) {
    return NextResponse.json(
      { error: "Uzupełnij imię i nazwisko, nazwę firmy oraz telefon." },
      { status: 422 },
    );
  }

  if (name.length > 200 || companyName.length > 200 || phone.length > 60 || message.length > 4000) {
    return NextResponse.json({ error: "Jedno z pól przekracza dozwoloną długość." }, { status: 422 });
  }

  try {
    const result = await sendContactNotification({ name, companyName, phone, message });
    return NextResponse.json({ ok: true, delivered: result.delivered });
  } catch (error) {
    console.error("[api/contact] Nie udało się wysłać wiadomości:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd serwera. Spróbuj ponownie za chwilę." },
      { status: 500 },
    );
  }
}
