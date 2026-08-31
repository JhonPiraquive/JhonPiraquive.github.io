import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const JSON_DOCUMENTO = `{
  "clienteId": "c-100",
  "nombre": "Ana Ruiz",
  "pedidos": [{ "id": 101, "total": 150000 }]
}`;

export function NosqlWebScaleSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 6 — NoSQL y web-scale (años 2000)"}
      </h2>

      <p className="my-4">
        {
          "Internet a escala impulsó sistemas no (solo) relacionales: BigTable, Dynamo, MongoDB (documentos), Cassandra (columnas), almacenes clave-valor y grafos. Priorizan particionado horizontal y esquemas flexibles; a menudo relajan consistencia fuerte. Nacen familias distintas —clave-valor, documentos, columnas anchas, grafos— según el patrón de acceso."
        }
      </p>

      <p className="my-4">
        {
          "La causa→efecto del relato: volúmenes y patrones (sesiones, catálogos enormes, timelines) que el SQL monolítico clásico sufría. El relato no dice “NoSQL reemplazó a SQL”; dice “aparecieron opciones según el problema”. Un marketplace puede poner catálogo flexible en documentos y dejar facturación en SQL — políglota con ownership claro, no una guerra de tribus."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Contraste pedagógico: un documento"}</h3>
      <p className="my-4">
        {
          "En documentos, pedidos pueden ir embebidos en el cliente: un GET trae todo. En el modelo relacional, esos pedidos vivirían en otra tabla con FK. La consulta “dame el cliente con sus pedidos” es simple; el reporte “todos los que compraron tornillos” puede ser más costoso. Ese trade-off es parte de la historia, no un veredicto universal."
        }
      </p>
      <CodeFiddle language="json" title="Documento cliente con pedidos embebidos" code={JSON_DOCUMENTO} />

      <Callout variant="callout-info" title="Lectura correcta del arco">
        {
          "NoSQL responde a escala y flexibilidad cuando el patrón lo pide. Usar la respuesta web-scale donde el relato de Codd (datos compartidos consistentes) era el que importaba —pagos, nómina, facturación— es un desvío del hilo histórico, no “modernidad”."
        }
      </Callout>
    </section>
  );
}
