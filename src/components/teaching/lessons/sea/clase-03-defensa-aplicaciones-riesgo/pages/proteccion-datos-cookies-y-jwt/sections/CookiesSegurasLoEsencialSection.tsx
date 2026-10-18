export function CookiesSegurasLoEsencialSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cookies seguras (lo esencial)"}</h2>
      <p className="my-4">{"Una cookie puede guardar un identificador de sesión. Las banderas no son “decoración”: definen si viaja solo por HTTPS (Secure), si JavaScript puede leerla (HttpOnly) y cómo se envía en contextos de terceros (SameSite). La expiración y el cierre de sesión reducen el tiempo útil para un atacante."}</p>
    </section>
  );
}
