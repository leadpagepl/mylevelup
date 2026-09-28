/**
 * FAQ — wyłącznie informacje potwierdzone w materiałach szkoły (ang1.png)
 * i w briefie klienta.
 *
 * Pytania operacyjne, na które NIE mamy odpowiedzi (terminy, odwoływanie
 * zajęć, częstotliwość, płatność za pierwszą lekcję, wolne miejsca w grupach)
 * są w `faqDoPotwierdzenia` i celowo NIE są renderowane na stronie.
 * Po uzupełnieniu odpowiedzi wystarczy przenieść je do tablicy `faq`.
 */

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Ile kosztują zajęcia?",
    a: "Lekcja indywidualna to 90 zł za 60 minut. W mini-grupie dwuosobowej — 70 zł od osoby, a w grupie 3–4 osobowej — 50 zł od osoby. Materiały do nauki są w cenie zajęć.",
  },
  {
    q: "Czy lekcje odbywają się online?",
    a: "Tak. Zajęcia prowadzone są online, więc uczysz się z domu i nie tracisz czasu na dojazdy. Godziny ustalamy indywidualnie.",
  },
  {
    q: "Czy mogę zacząć od zera?",
    a: "Tak. Marek pracuje na wszystkich poziomach — od A1 do C2. Na początku ustalamy, na czym stoisz i od czego zacząć, żeby materiał nie był ani za łatwy, ani za trudny.",
  },
  {
    q: "Czy przygotowujesz do matury i egzaminu ósmoklasisty?",
    a: "Tak. Szkoła prowadzi przygotowanie do matury oraz do egzaminu ósmoklasisty. Pracujemy na zadaniach egzaminacyjnych i na tym, co sprawia najwięcej trudności.",
  },
  {
    q: "Czy przygotowujesz do FCE i CAE?",
    a: "Tak. W ofercie jest przygotowanie do egzaminów Cambridge — FCE i CAE. Marek ma certyfikaty CAE oraz CPE na poziomie C2.",
  },
  {
    q: "Czy mogę uczyć się w parze albo w małej grupie?",
    a: "Tak. Poza zajęciami indywidualnymi są mini-grupy: dwuosobowe oraz 3–4 osobowe. To tańsza opcja, a grupa jest na tyle mała, że każdy mówi na każdych zajęciach.",
  },
  {
    q: "Czy materiały są w cenie?",
    a: "Tak. Zgodnie z ofertą szkoły materiały do nauki są bezpłatne — nie musisz kupować osobnego podręcznika.",
  },
  {
    q: "Kto prowadzi zajęcia?",
    a: "Wszystkie lekcje prowadzi Marek — absolwent filologii angielskiej, korporacyjny trener Business English, z certyfikatem LCCI oraz certyfikatami CAE i CPE (C2).",
  },
];

/**
 * DO UZUPEŁNIENIA PRZEZ SZKOŁĘ — nie publikujemy pytań bez odpowiedzi.
 */
export const faqDoPotwierdzenia: string[] = [
  "Jakie terminy zajęć są obecnie dostępne?",
  "Co się dzieje, jeśli muszę odwołać zajęcia?",
  "Jak często odbywają się zajęcia?",
  "Czy pierwsza lekcja jest płatna?",
  "Czy są wolne miejsca w mini-grupach?",
];
