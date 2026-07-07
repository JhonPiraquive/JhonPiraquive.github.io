export function EvolucionEnEtapasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Evolución en 4 etapas (muy resumida)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Etapa 1 — Conectar para compartir"}</h3>
      <p className="my-4">{"El objetivo era disponibilidad: que el sistema “funcione” y que la información viaje. La seguridad era secundaria porque el entorno era pequeño y de confianza."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Etapa 2 — Curiosidad y primeras intrusiones"}</h3>
      <p className="my-4">{"Cuando más personas obtuvieron acceso, aparecieron intrusiones por exploración. Se hizo evidente que “tener acceso” no es lo mismo que “tener permiso”."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Etapa 3 — Industrialización del ataque"}</h3>
      <p className="my-4">{"El ataque se volvió negocio. Se automatizó: campañas masivas, explotación repetible, robo de credenciales y monetización. Aquí nace la necesidad de controles sistemáticos."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Etapa 4 — Seguridad por diseño y gobernanza"}</h3>
      <p className="my-4">{"Las organizaciones empezaron a definir procesos: políticas, gestión de riesgos, controles y auditoría. La pregunta cambió de “¿me hackearon?” a “¿qué tan preparado estoy y cómo lo demuestro?”."}</p>
    </section>
  );
}
