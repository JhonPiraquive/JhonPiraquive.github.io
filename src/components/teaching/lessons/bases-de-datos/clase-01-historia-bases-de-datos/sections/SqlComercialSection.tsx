import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

const SQL_JOIN_MEDELLIN = `-- Consulta al estilo relacional temprano (válida hoy)
SELECT c.nombre, p.fecha, p.total
FROM cliente AS c
JOIN pedido AS p ON p.cliente_id = c.id
WHERE c.ciudad = 'Medellín'
ORDER BY p.fecha DESC;`;

export function SqlComercialSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 4 — Prototipos y SQL comercial (años 70)"}
      </h2>

      <p className="my-4">
        {
          "La teoría se vuelve producto. System R (IBM) demuestra que el modelo es implementable: nace SEQUEL/SQL, aparecen transacciones y el optimizador. INGRES (UC Berkeley) abre otro linaje que décadas después influirá en PostgreSQL. Oracle (1977–79) es una de las primeras ofertas comerciales relacionales/SQL exitosas."
        }
      </p>

      <p className="my-4">
        {
          "El hilo claro para el estudiante: Codd inventó el modelo; SQL nace en el ecosistema de System R y se populariza con productos comerciales. El usuario escribe SQL declarativo; el optimizador elige índices y orden de joins. El arco típico de una consulta —texto SQL → parseo → plan del optimizador → filas— nace en esta etapa del relato."
        }
      </p>

      <p className="my-4">
        {
          "Sin esta etapa, el paper de Codd habría quedado en un museo académico. Con ella nace el mercado de SGBD y el lenguaje que aún usas: descendientes de System R, INGRES y Oracle (DB2, PostgreSQL, MySQL…)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ilustración: el QUÉ, no el CÓMO"}</h3>
      <CodeFiddle language="sql" title="Join clientes Medellín" code={SQL_JOIN_MEDELLIN} />

      <CompareTable
        title="Navegacional vs relacional + SQL"
        headers={["Aspecto", "Navegacional (IMS/CODASYL)", "Relacional + SQL"]}
        rows={[
          ["Acceso", "Punteros: GET NEXT, FIND OWNER", "Declarativo: SELECT / JOIN"],
          ["Pregunta del programador", "Cómo navegar la ruta", "Qué datos necesito"],
          ["Independencia de datos", "Baja (rutas acopladas)", "Alta (física y lógica)"],
          ["Cambiar esquema de enlaces", "Reescribir navegación", "Ajustar SQL / vistas"],
          ["Reportes ad hoc", "Difíciles si no hay camino", "Naturales con joins"],
        ]}
      />
    </section>
  );
}
