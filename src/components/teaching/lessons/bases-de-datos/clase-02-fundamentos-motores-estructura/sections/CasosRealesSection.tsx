export function CasosRealesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Casos reales"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso 1 — “Andes Tech” (Medellín)'}
      </h3>
      <p className="my-4">
        {
          "Excel por sede con nombres oficiales divergentes. Solución: MariaDB + Programas con Nombre_Programa UTF-8; GUI solo para admin; la app lee por SQL."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso 2 — “Catálogo Libre” (Lima)'}
      </h3>
      <p className="my-4">
        {
          "60 columnas nullable en MySQL para atributos variables → ALTER constantes. Mejor: pedidos/stock relacional; atributos flexibles en documentos (o diseño por tipo)."
        }
      </p>
    </section>
  );
}
