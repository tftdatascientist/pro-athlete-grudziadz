# Pro Athlete Grudziądz — Strona klubu lekkoatletycznego

Strona internetowa dla młodzieżowego Klubu Sportowego "Pro Athlete" Grudziądz, sekcja lekkiej atletyki. Projekt non-profit.

## Tech Stack

- **Framework**: Astro 5 (static site generator)
- **Styling**: Tailwind CSS 4
- **Interakcje**: Vanilla JS (minimalne)
- **Hosting**: Cloudflare Pages (darmowy)
- **Repo**: GitHub

## Polecenia

- `npm run dev` — lokalny serwer deweloperski
- `npm run build` — build produkcyjny do `dist/`
- `npm run preview` — podgląd builda produkcyjnego

## Architektura

```
src/
  layouts/Layout.astro    — główny layout HTML (head, nav, footer)
  pages/index.astro       — landing page (one-page na start)
  components/             — komponenty Astro (.astro)
  styles/global.css       — Tailwind + custom properties
public/
  images/                 — logo, zdjęcia zawodników, galeria
  favicon.svg
```

## Brand & Design

- **Kolory**: czarne tło (#0A0A0A), neonowy zielony (#6BF040) jako akcent, ciemne szarości (#111, #1A1A1A)
- **Typografia**: Oswald (nagłówki, uppercase) + DM Sans (body text) — oba z Google Fonts
- **Styl**: sportowy, energiczny, ciemny motyw z neonowymi akcentami. Inspiracja logotypem — tarcza z biegaczem
- **Logo**: plik `public/images/logo.jpg` — ZAWSZE używaj tego pliku, nigdy nie generuj logo od nowa
- **Ton**: profesjonalny ale przyjazny, skierowany do rodziców i młodzieży

## Kluczowe zasady

- Cała treść strony jest **po polsku** — nawigacja, nagłówki, opisy, alt-tagi
- Strona MUSI być w pełni **responsywna** (mobile-first)
- **Facebook Page Plugin** to główne źródło aktualności — embed iframe z fan-page'a: https://www.facebook.com/Proathletegrudziadz
- Używaj **semantycznego HTML** (header, main, section, footer, nav)
- Obrazy: format WebP z fallbackiem, lazy loading, sensowne alt-tagi po polsku
- Nie dodawaj żadnych trackerów ani cookies — to strona non-profit dla dzieci i młodzieży
- Nigdy nie modyfikuj plików w `public/images/` bez pytania

## Dane klubu (do użycia w treściach)

- **Pełna nazwa**: Klub Sportowy "Pro Athlete" Grudziądz
- **Data założenia**: 17 marca 2024
- **Prezes / główny trener**: Krzysztof Mira (nagrodzony działacz sportowy)
- **Sekcja**: lekka atletyka
- **Kategorie**: U12, U16, U18, U20, seniorzy (~20 zawodników)
- **Dyscypliny**: biegi sprinterskie, średniodystansowe, skoki, rzuty, wieloboje
- **Osiągnięcia**: medale mistrzostw wojewódzkich i międzywojewódzkich, czołowe lokaty MP w kat. U18. Andrzej Rogiewicz — 2. miejsce Mistrzostw Polski (stypendysta miasta)
- **Lokalizacja**: Grudziądz, woj. kujawsko-pomorskie
- **Facebook**: https://www.facebook.com/Proathletegrudziadz
- **Zrzutka**: https://zrzutka.pl/en/n2eu4f

## Git workflow

- Gałąź główna: `main` (produkcja, auto-deploy na Cloudflare Pages)
- Nowe funkcje: twórz branch `feat/nazwa-funkcji`, po zakończeniu merge do main
- Commity po polsku, krótkie: "dodano sekcję galerii", "poprawka responsywności nav"

## Rozwój (faza 2 — przyszłość)

Strona startuje jako landing page (one-page). Planowane rozszerzenia:
- Osobna podstrona z galerią zdjęć z zawodów
- Podstrona z pełną listą osiągnięć / medali
- Harmonogram treningów (edytowalny)
- Formularz kontaktowy (np. przez Formspree — bez backendu)
- Ewentualnie blog/aktualności w Astro Content Collections
