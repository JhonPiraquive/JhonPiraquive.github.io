export function NavegacionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 2 — Jerárquico (IMS) y red / CODASYL (años 60 – principios 70)"}
      </h2>

      <p className="my-4">
        {
          "Nace la era navegacional. Los datos se organizan como árboles —jerárquico, por ejemplo IBM IMS— o como grafos —red CODASYL, IDS, IDMS—. El programa ya no lee una cinta entera a ciegas: sigue punteros de registro en registro (GET NEXT, FIND OWNER…). No escribe una consulta declarativa; conoce la ruta."
        }
      </p>

      <p className="my-4">
        {
          "En el jerárquico, un padre tiene muchos hijos (empresa → cliente → pedido → línea). En la red, un registro puede tener varios padres: producto y pedido pueden ser ambos “dueños” de una línea. Eso resolvió acceso eficiente en mainframes y relaciones entre datos sin reescribir cintas enteras."
        }
      </p>

      <p className="my-4">
        {
          "Pero el costo fue otra forma de rigidez. El programador debía conocer las rutas de punteros; cambiar la estructura de enlaces obligaba a reescribir código. Un reporte “al revés” —clientes de un producto cuando el diseño solo previó productos de un cliente— podía ser costoso o imposible sin un camino indexado. Esa dependencia de rutas prepara el terreno para el salto de Codd."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"No es solo museo"}</h3>
      <p className="my-4">
        {
          "IMS sigue vivo en cores bancarios. Contar la historia como “eso ya no existe” es un error del relato. Lo que sí cambió para el resto de la industria fue la idea de que el programador debía navegar a mano: la siguiente etapa propone preguntar qué se quiere, no cómo recorrer el grafo."
        }
      </p>
    </section>
  );
}
