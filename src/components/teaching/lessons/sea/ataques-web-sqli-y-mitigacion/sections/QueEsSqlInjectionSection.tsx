export function QueEsSqlInjectionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es SQL Injection"}</h2>
      <p className="my-4">{"SQL Injection ocurre cuando una aplicación construye consultas SQL mezclando texto fijo con datos del usuario sin control adecuado. El atacante inyecta fragmentos de SQL para cambiar el significado de la consulta: leer datos ajenos, modificar registros o incluso afectar disponibilidad."}</p>
    </section>
  );
}
