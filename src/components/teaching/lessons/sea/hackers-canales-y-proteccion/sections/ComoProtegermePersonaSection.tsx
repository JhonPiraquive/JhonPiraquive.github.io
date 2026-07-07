export function ComoProtegermePersonaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cómo protegerme (persona)"}</h2>
      <p className="my-4">{"Tu objetivo es reducir probabilidad de caer y reducir impacto si caes. No existe “invulnerable”; existe “difícil de explotar y fácil de recuperar”."}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usa contraseñas únicas con gestor; no repitas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Activa segundo factor cuando sea posible."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Desconfía de la urgencia: pausa y verifica por un canal alterno."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No compartas códigos de verificación; nadie legítimo los pide."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Actualiza navegador y sistema; los parches sí importan."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Evita iniciar sesión en Wi‑Fi público sin protección; prioriza datos móviles o red confiable."}</li>
      </ul>
    </section>
  );
}
