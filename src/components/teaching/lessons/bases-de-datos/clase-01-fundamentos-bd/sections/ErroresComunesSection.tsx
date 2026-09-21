export function ErroresComunesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Errores comunes"}</h2>
      <ol className="my-4 list-decimal pl-6 space-y-2">
        <li>{"Confundir BD / SGBD / GUI."}</li>
        <li>{"Tratar Excel/Sheets como equivalente a un SGBD en producción."}</li>
        <li>{"Leer “NoSQL” como “nunca usar SQL”."}</li>
        <li>{"Campos con espacios; literales sin comillas simples."}</li>
        <li>{"Elegir Mongo por moda para cupos/inventario rígido."}</li>
      </ol>
    </section>
  );
}
