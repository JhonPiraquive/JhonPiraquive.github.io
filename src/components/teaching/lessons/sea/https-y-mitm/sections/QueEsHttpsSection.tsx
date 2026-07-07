export function QueEsHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es HTTPS"}</h2>
      <p className="my-4">{"HTTPS es HTTP sobre una conexión cifrada y autenticada (TLS). En práctica: evita que terceros lean o modifiquen el tráfico en tránsito, y ayuda a comprobar que hablas con el servidor correcto (según certificados)."}</p>
    </section>
  );
}
