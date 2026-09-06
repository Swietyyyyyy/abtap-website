# ABtap — strona internetowa

Nowoczesna strona typu landing page dla marki **ABtap** (tabliczki i stojaki NFC/QR
kierujące klientów do wystawienia opinii Google). Zbudowana w Next.js 16 (App Router)
+ TypeScript + Tailwind CSS 4.

## Zawartość

- Pełna strona główna: Hero, Jak to działa, Produkty, W praktyce, Dlaczego ABtap,
  Personalizacja, FAQ, formularz kontaktowy, stopka.
- Formularz kontaktowy wysyłający zgłoszenia e-mailem (`/api/contact`).
- Generator kodów QR (`/qr`) — wklej link, pobierz kod jako PNG lub SVG.
- Responsywny design (mobile / tablet / desktop), animacje przy scrollowaniu.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona domyślnie działa pod `http://localhost:3000`.

## Konfiguracja formularza kontaktowego (wysyłka e-mail)

Skopiuj `.env.example` do `.env.local` — jest już wypełniony pod docelową
skrzynkę `ejbitap.biuro@wp.pl`, wystarczy wpisać hasło:

```bash
cp .env.example .env.local
```

- **Skrzynka WP (ejbitap.biuro@wp.pl) — używana na tym projekcie**:
  `SMTP_HOST=smtp.wp.pl`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER` =
  pełny adres skrzynki. Jeśli na koncie WP włączona jest weryfikacja
  dwuetapowa, zamiast zwykłego hasła trzeba wygenerować osobne "hasło
  aplikacji" w ustawieniach bezpieczeństwa konta WP. `CONTACT_FROM_EMAIL`
  musi być tą samą skrzynką co `SMTP_USER` — WP odrzuca/oznacza jako spam
  wiadomości z innym nadawcą niż zalogowana skrzynka.
- **Gmail / Google Workspace** (gdyby skrzynka się zmieniła): `SMTP_HOST=smtp.gmail.com`,
  `SMTP_PORT=587`, `SMTP_USER` = Twój adres, `SMTP_PASSWORD` = hasło aplikacji
  (Google wymaga wygenerowania "hasła aplikacji" w ustawieniach bezpieczeństwa
  konta — zwykłe hasło do konta nie zadziała, jeśli włączona jest weryfikacja
  dwuetapowa).
- **Skrzynka z hostingu (home.pl, OVH, nazwa.pl itp.)**: dane SMTP znajdziesz
  w panelu hostingu przy koncie pocztowym (zwykle `SMTP_HOST=mail.twojadomena.pl`,
  port `587` lub `465`).

Bez skonfigurowanego SMTP formularz nadal działa (użytkownik widzi potwierdzenie
wysyłki), ale zgłoszenie trafia tylko do logów serwera — to wygodne do prezentacji,
niewystarczające do produkcji. `CONTACT_TO_EMAIL` ustawia adres odbiorcy zgłoszeń.

## Wdrożenie na domenę

### 1. Rejestracja domeny

Zarejestruj domenę u wybranego rejestratora (np. home.pl, OVH, nazwa.pl,
Hostido, Cyberfolks). Rekomendacja: wykup zarówno `.pl`, jak i `.com` i skieruj
jedną jako przekierowanie na drugą, żeby zabezpieczyć markę na obu rozszerzeniach.
Przy wyborze rejestratora patrz przede wszystkim na **cenę odnowienia** (2. rok
i kolejne), nie tylko na promocyjną cenę pierwszej rejestracji.

### 2. Hosting

Zalecany hosting: **Vercel** (twórcy Next.js — zero-config deploy, darmowy plan
wystarcza na start, automatyczne certyfikaty SSL).

```bash
npm install -g vercel
vercel login
vercel --prod
```

Po pierwszym `vercel --prod` projekt dostanie tymczasowy adres `*.vercel.app`.

### 3. Podpięcie własnej domeny

1. W panelu Vercel: **Project → Settings → Domains** → dodaj `twojadomena.pl`
   (i opcjonalnie `twojadomena.com`).
2. Vercel poda rekordy DNS do ustawienia (zwykle rekord `A` na adres Vercel
   lub `CNAME` na `cname.vercel-dns.com`).
3. Te rekordy wpisujesz w panelu rejestratora domeny (Strefa DNS / Zarządzanie DNS).
4. Propagacja DNS trwa zwykle od kilku minut do 24h. Vercel automatycznie
   wystawi certyfikat SSL (HTTPS) po wykryciu poprawnej konfiguracji.

### 4. Zmienne środowiskowe na produkcji

W panelu Vercel: **Project → Settings → Environment Variables** — dodaj te
same zmienne, co w `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`), a następnie
wykonaj redeploy.

## Struktura projektu

```
src/
  app/
    page.tsx           strona główna (składa sekcje)
    layout.tsx          layout + meta tagi, fonty
    api/contact/route.ts  endpoint formularza kontaktowego
    qr/page.tsx          generator kodów QR
  components/            sekcje strony (Hero, FAQ, ContactSection, ...)
    ui/                  wspólne elementy (Button, SectionHeading, Reveal, ...)
  lib/
    site-config.ts        WSZYSTKIE teksty, dane kontaktowe, treść sekcji
    mailer.ts             logika wysyłki e-mail (Nodemailer + SMTP)
    qr.ts                 generowanie kodów QR (serwer + walidacja URL)
```

Większość przyszłych zmian treści (nazwy, opisy, e-mail, numer WhatsApp,
linki social media) wystarczy wprowadzić w jednym pliku: `src/lib/site-config.ts`.

## Do zrobienia przed uruchomieniem produkcyjnym

- [x] Domena: `ejbitap.pl` — ustawiona w `site-config.ts`.
- [x] E-mail kontaktowy: `ejbitap.biuro@wp.pl` — ustawiony w `site-config.ts`.
- [ ] Kupić domenę `ejbitap.pl` (potwierdzona jako wolna) i wdrożyć projekt (patrz sekcja "Wdrożenie" wyżej).
- [ ] Wpisać prawdziwe hasło do skrzynki WP w `.env.local` / zmiennych środowiskowych Vercel (patrz sekcja wyżej).
- [ ] Zastąpić graficzne placeholdery produktów (`ProductThumb`) prawdziwymi
      zdjęciami tabliczek/stojaków NFC.
- [ ] Podać prawdziwy numer WhatsApp (obecnie placeholder w `site-config.ts`).
- [ ] Zaktualizować linki social media na prawdziwe profile.
- [ ] Podmienić demo-link w kodzie QR w sekcji Hero na docelowy link do
      wizytówki Google danej firmy.
