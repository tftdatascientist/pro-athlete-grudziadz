interface Env {
  RESEND_API_KEY: string;
  KLUB_EMAIL: string;
}

interface Zgloszenie {
  imie_dziecka: string;
  wiek_dziecka: number;
  telefon_rodzica: string;
  email: string;
  wiadomosc?: string;
  skad_o_nas: string;
  zgoda_rodo: boolean;
  website?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    console.log('RESEND_API_KEY present:', !!env.RESEND_API_KEY);
    console.log('KLUB_EMAIL present:', !!env.KLUB_EMAIL);

    const body = (await request.json()) as Zgloszenie;

    if (body.website && body.website.trim().length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    if (!body.imie_dziecka || body.imie_dziecka.trim().length < 2) {
      return new Response(JSON.stringify({ ok: false, error: 'Nieprawidłowe imię' }), { status: 400 });
    }
    const wiek = Number(body.wiek_dziecka);
    if (!wiek || wiek < 5 || wiek > 25) {
      return new Response(JSON.stringify({ ok: false, error: 'Nieprawidłowy wiek (5–25)' }), { status: 400 });
    }
    const telClean = body.telefon_rodzica?.replace(/\s/g, '').replace(/^(\+48|0048)/, '');
    if (!telClean || !/^\d{9}$/.test(telClean)) {
      return new Response(JSON.stringify({ ok: false, error: 'Nieprawidłowy numer telefonu' }), { status: 400 });
    }
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Nieprawidłowy adres e-mail' }), { status: 400 });
    }
    if (!body.zgoda_rodo) {
      return new Response(JSON.stringify({ ok: false, error: 'Wymagana zgoda RODO' }), { status: 400 });
    }

    const emailText = `
Nowe zgłoszenie z formularza zapisów — proathlete.pl

Imię dziecka:    ${body.imie_dziecka.trim()}
Wiek:            ${wiek} lat
Telefon rodzica: ${body.telefon_rodzica}
E-mail:          ${body.email}
Skąd o nas:      ${body.skad_o_nas || '—'}
Wiadomość:       ${body.wiadomosc?.trim() || '(brak)'}

Data zgłoszenia: ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}
`;

    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pro Athlete Strona <strona@proathlete.pl>',
        to: env.KLUB_EMAIL,
        reply_to: body.email,
        subject: `Nowe zgłoszenie: ${body.imie_dziecka.trim()} (${wiek} lat)`,
        text: emailText,
      }),
    });

    if (!resendResp.ok) {
      const errText = await resendResp.text();
      console.error('Resend error:', errText);
      return new Response(JSON.stringify({ ok: false, error: 'Błąd wysyłki e-mail' }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error('Handler error:', e);
    return new Response(JSON.stringify({ ok: false, error: 'Błąd serwera' }), { status: 500 });
  }
};
