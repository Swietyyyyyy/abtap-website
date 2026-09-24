/**
 * Central content & configuration file for the EjBiTap marketing site.
 *
 * Keeping copy, contact details and product data here (instead of scattering
 * it across components) makes future edits low-risk: swapping the company
 * email, phone number or product list never requires touching JSX.
 */

export const siteConfig = {
  brand: "EjBiTap",
  tagline: "Premium rozwiązania NFC do zbierania opinii Google",
  // Nazwa marki na stronie: "EjBiTap" — zgodna z domeną ejbitap.pl
  // (zmiana z "ABtap" na prośbę użytkownika, 24.09.2026).
  domain: "ejbitap.pl", // potwierdzone przez użytkownika — zwykła .pl
  contactEmail: "ejbitap.biuro@wp.pl", // potwierdzone przez użytkownika (skrzynka na wp.pl)
  whatsappNumber: "48517896998", // potwierdzone przez użytkownika
  social: {
    instagram: "https://instagram.com/abtap",
    facebook: "https://facebook.com/abtap",
    linkedin: "https://linkedin.com/company/abtap",
  },
  nav: [
    { label: "Jak działa", href: "#jak-dziala" },
    { label: "Produkty", href: "#produkty" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export const heroContent = {
  badge: "Dla restauracji, salonów, klinik i hoteli",
  title: "Zamień zadowolonych klientów w nowe opinie Google.",
  description:
    "Projektujemy eleganckie tabliczki i stojaki NFC, które kierują klientów bezpośrednio do wystawienia opinii Google – bez aplikacji i bez wpisywania adresów.",
  primaryCta: "Poproś o bezpłatną wycenę",
  secondaryCta: "Zobacz jak to działa",
  bullets: ["Personalizacja pod markę", "Google Reviews", "Gotowe do użycia"],
};

export const howItWorks = [
  {
    step: "01",
    title: "Klient przykłada telefon do tabliczki NFC",
    description:
      "Tabliczka lub stojak leży przy kasie, recepcji albo stoliku — dokładnie tam, gdzie klient kończy wizytę.",
  },
  {
    step: "02",
    title: "Otwiera stronę wystawiania opinii Google",
    description:
      "Link prowadzi klienta bezpośrednio do miejsca, w którym może ocenić Twoją firmę w Google.",
  },
  {
    step: "03",
    title: "Klient zostawia opinię w kilka sekund",
    description:
      "Mniej tarcia oznacza więcej opinii — szczególnie od klientów, którzy są zadowoleni tu i teraz.",
  },
];

export const products = [
  {
    title: "Akrylowa tabliczka NFC",
    description:
      "Elegancka tabliczka z NFC, przygotowana pod Twoją markę i gotowa do ustawienia w widocznym miejscu.",
    variant: "dark" as const,
  },
  {
    title: "Stojak NFC na ladę",
    description:
      "Stabilny stojak do recepcji, baru lub punktu obsługi — gotowy do montażu i codziennego użycia.",
    variant: "light" as const,
  },
  {
    title: "Wkrótce",
    description:
      "Karty NFC dla handlowców — szybkie przekazywanie kontaktu, strony i materiałów sprzedażowych po jednym dotknięciu.",
    variant: "upcoming" as const,
  },
];

export const inPractice = [
  { title: "Restauracje i kawiarnie", caption: "Stojak przy rachunku lub ladzie." },
  { title: "Salony i recepcje", caption: "Elegancki akcent w punkcie obsługi." },
  { title: "Jedno dotknięcie", caption: "Bez szukania firmy w Google." },
];

export const whyUs = [
  {
    title: "Więcej opinii Google",
    description:
      "Ułatwiasz klientowi zostawienie oceny dokładnie wtedy, gdy kończy wizytę.",
  },
  {
    title: "Premium wygląd na ladzie",
    description:
      "Tabliczka lub stojak wygląda jak część profesjonalnej obsługi, nie jak przypadkowy gadżet.",
  },
  {
    title: "Gotowe do użycia",
    description:
      "Otrzymujesz produkt skonfigurowany pod Twoją firmę — bez aplikacji i bez technicznych ustawień.",
  },
  {
    title: "Dopasowanie do marki",
    description:
      "Projekt przygotowujemy pod logo, kolory i charakter miejsca, w którym produkt będzie używany.",
  },
];

export const personalization = [
  {
    title: "Czarny",
    description: "Najbardziej premium i kontrastowy wariant dla eleganckich lokali.",
    variant: "dark" as const,
  },
  {
    title: "Biały",
    description: "Czysty, uniwersalny wygląd do gabinetów, salonów i recepcji.",
    variant: "light" as const,
  },
  {
    title: "Przezroczysty",
    description:
      "Subtelny efekt akrylowy, który dobrze pasuje uniwersalnie do nowoczesnych wnętrz.",
    variant: "gold" as const,
  },
];

export const faq = [
  {
    question: "Czy działa z iPhone oraz Androidem?",
    answer:
      "Tak. Produkty NFC działają z nowszymi modelami iPhone bez instalowania dodatkowej aplikacji i tak samo w Androidach — wystarczy włączona funkcja NFC, która jest dostępna w większości współczesnych modeli.",
  },
  {
    question: "Co w przypadku jak telefon nie obsługuje NFC?",
    answer:
      "Wtedy wystarczy zeskanować kod QR, który również przekieruje klienta od razu do wystawienia opinii.",
  },
  {
    question: "Czy potrzebna jest aplikacja?",
    answer:
      "Nie. Klient przykłada telefon, a link otwiera się bezpośrednio w przeglądarce lub systemowym oknie NFC.",
  },
  {
    question: "Czy mogę zamówić jedną sztukę?",
    answer:
      "Tak. Możesz zacząć od jednej tabliczki lub jednego stojaka i domówić kolejne, gdy rozwiązanie sprawdzi się w praktyce.",
  },
  {
    question: "Ile trwa realizacja?",
    answer:
      "Termin zależy od wybranego wariantu i zakresu personalizacji. Po kontakcie potwierdzimy projekt oraz przewidywany czas realizacji.",
  },
];

export const contactContent = {
  eyebrow: "Bezpłatna wycena",
  title: "Zacznij zdobywać więcej opinii już dziś",
  description:
    "Napisz kilka zdań o swojej firmie. Przygotujemy prostą propozycję karty lub stojaka NFC dopasowanego do Twojego miejsca obsługi klienta.",
  whatsappCta: "Napisz na WhatsApp",
  submitCta: "Poproś o bezpłatną wycenę",
};
