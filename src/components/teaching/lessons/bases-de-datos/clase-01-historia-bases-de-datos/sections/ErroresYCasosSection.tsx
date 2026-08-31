import { Callout } from "@/components/teaching/Callout";

export function ErroresYCasosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Errores del relato y casos LATAM"}
      </h2>

      <p className="my-4">
        {
          "Antes de los casos, cinco confusiones típicas al contar la historia — no una lista de anti-patrones por etapa:"
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Creer que Codd “inventó SQL”: inventó el modelo; SQL nace en System R / SEQUEL y se populariza con productos comerciales."
          }
        </li>
        <li>
          {"Pensar que IMS/CODASYL “ya no existen”: persisten en cores bancarios."}
        </li>
        <li>
          {
            "Contar la historia como “NoSQL mató a SQL” en lugar de convergencia: aparecieron opciones según el problema."
          }
        </li>
        <li>
          {
            "No conectar Excel compartido con el problema pre-BD (duplicidad e inconsistencia)."
          }
        </li>
        <li>
          {
            "Confundir la línea de tiempo: poner NoSQL antes de Codd, u Oracle antes del modelo relacional."
          }
        </li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso 1 — Ferretería “El Tornillo” (Bogotá)'}
      </h3>
      <p className="my-4">
        {
          "Tres Excel (mostrador, bodega, contador). Precios y stock divergen; pedidos se pierden. Lectura histórica: es el patrón de archivos planos con otra herramienta. Migrar a un SGBD con una fuente de verdad cierra el arco del relato — el mismo dolor que en los años 50, la misma respuesta conceptual."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso 2 — Startup “RutaAndina” (Medellín)'}
      </h3>
      <p className="my-4">
        {
          "Eligen MongoDB para todo (incluidos pagos y facturación). Al crecer, reportes contables fallan y aparecen estados imposibles. Lectura histórica: usaron la respuesta web-scale donde el relato de Codd —datos compartidos consistentes— era el que importaba. Hoy la convergencia favorece políglota con responsabilidad clara: pedidos/pagos en SQL, tracking en clave-valor, catálogo flexible donde aporte."
        }
      </p>

      <Callout variant="callout-info" title="El hilo que une ambos casos">
        {
          "El Tornillo revive la etapa 1; RutaAndina malubica la etapa 6 sobre la 3. En ambos, la historia no es museo: es criterio para elegir garantías según el problema."
        }
      </Callout>
    </section>
  );
}
