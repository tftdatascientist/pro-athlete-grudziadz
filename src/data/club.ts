// src/data/club.ts
// Jedyne źródło prawdy dla danych klubu Pro Athlete Grudziądz.
// Każde pole `null` ukrywa odpowiedni element w UI (renderowanie warunkowe).

export const club = {
  // ─── Tożsamość ──────────────────────────────────────────────
  name: 'Klub Sportowy „Pro Athlete" Grudziądz',
  shortName: 'Pro Athlete Grudziądz',
  foundedDate: '2024-03-17',

  // ─── Kontakt ────────────────────────────────────────────────
  contact: {
    phone: '+48609048475',
    phoneDisplay: '+48 609 048 475',
    phoneOwner: 'Krzysztof Mira',
    phoneRole: 'Head Coach',
    email: 'proathletegrudziadz@gmail.com',
    whatsapp: '48609048475',
    messenger: 'https://m.me/Proathletegrudziadz',
  },

  // ─── Adres ──────────────────────────────────────────────────
  address: {
    street: 'ul. Kustronia 2/16',
    streetFormal: 'Generała Józefa Kustronia 2/16',
    postalCode: '86-300',
    city: 'Grudziądz',
    region: 'kujawsko-pomorskie',
    country: 'PL',
    geo: {
      lat: 53.4697953,
      lng: 18.7722158,
    },
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=53.4697953,18.7722158',
  },

  // ─── Social ─────────────────────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/Proathletegrudziadz',
    instagram: null as string | null,
    tiktok: null as string | null,
    youtube: null as string | null,
  },

  // ─── Wsparcie finansowe ─────────────────────────────────────
  fundraiser: {
    platform: 'zrzutka.pl',
    url: 'https://zrzutka.pl/n6mryy',
  },

  // ─── Rejestry zewnętrzne ────────────────────────────────────
  registry: {
    ssm: 'https://ssm.insp.waw.pl/klub/8004/ks-pro-athlete--grudziadz',
  },

  // ─── Dane formalne ──────────────────────────────────────────
  legal: {
    fullName: 'Klub Sportowy „Pro Athlete" Grudziądz',
    nip: '8762504157',
    regon: '524803294',
    krs: null as string | null,
  },

  // ─── Kategorie i dyscypliny ─────────────────────────────────
  ageCategories: ['U12', 'U16', 'U18', 'U20', 'Seniorzy'],
  disciplines: [
    'Biegi sprinterskie',
    'Biegi średniodystansowe',
    'Skoki',
    'Rzuty',
    'Wieloboje',
  ],
} as const;

export type Club = typeof club;
