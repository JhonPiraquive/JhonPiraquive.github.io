import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const JSON_PROGRAMA_FLEXIBLE = `{
  "_id": "prog-001",
  "Nombre_Programa": "Técnica Profesional en Configuración de Servicios Web",
  "cupos": 30,
  "atributos_flexibles": {
    "modalidad": "presencial",
    "jornada": "nocturna"
  }
}`;

export function NosqlTiposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos — NoSQL (Not Only SQL)"}
      </h2>

      <p className="my-4">
        {
          "NoSQL (Not Only SQL — “no solo SQL”) agrupa sistemas que no se limitan al modelo tabular clásico. Familias principales: documentos (MongoDB), clave-valor, columnas anchas y grafos. Esquema más flexible; la consistencia depende del producto."
        }
      </p>
      <p className="my-4">
        {
          "En esta clase el foco práctico de motor NoSQL es MongoDB (documentos), contrastado con MySQL/MariaDB. El módulo sigue centrado en el relacional."
        }
      </p>

      <CompareTable
        title="Escenario → mejor encaje"
        headers={["Escenario", "Mejor encaje"]}
        rows={[
          ["Inventario / stock / facturación", "Relacional (MySQL/MariaDB)"],
          [
            "Catálogo con atributos distintos por categoría",
            "Documentos (MongoDB) o híbrido",
          ],
          ["Sesiones / caché", "Clave-valor"],
          ["Red de referidos / fraude", "Grafo"],
        ]}
      />

      <p className="my-4">
        {
          "Documento ilustrativo (comparación pedagógica; no reemplaza el foco relacional):"
        }
      </p>
      <CodeFiddle language="json" title="Documento programa flexible" code={JSON_PROGRAMA_FLEXIBLE} />
    </section>
  );
}
