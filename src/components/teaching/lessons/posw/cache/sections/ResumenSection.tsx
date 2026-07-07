export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Caché reutiliza resultados costosos; objetivo Hit Rate > 90%."}</li>
        <li>{"Cuatro tipos: navegador, servidor (Redis), CDN, base de datos."}</li>
        <li>
          {
            "Cache-aside: buscar en Redis → HIT o MISS → BD → SET con TTL → invalidar al escribir."
          }
        </li>
        <li>
          {
            "Headers: Cache-Control es la directiva principal; no-store para datos sensibles; immutable para assets con hash."
          }
        </li>
        <li>{"Invalidación: TTL, event-based (del al actualizar), versioning (hash en nombre de archivo)."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"rest-principios"}</code>
          {" — Cacheable como constraint REST."}
        </li>
      </ul>
    </section>
  );
}
