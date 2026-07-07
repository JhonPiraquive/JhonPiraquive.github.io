import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: marketplace colombiano"}
      </h2>
      <p className="my-4 font-semibold">{"Elige y modela el formato del contrato"}</p>
      <p className="my-4">{"Un marketplace colombiano debe:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Exponer API REST pública de productos (clientes web y móvil)."}</li>
        <li>
          {
            "Integrar facturación electrónica con proveedor que exige XML según estándar DIAN."
          }
        </li>
        <li>{"Publicar feed de novedades para agregadores (RSS/Atom)."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Tareas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Asigna JSON o XML a cada integración y justifica."}</li>
        <li>{"Escribe el JSON mínimo de un producto (id, nombre, precio, moneda)."}</li>
        <li>
          {"Escribe un fragmento XML válido del mismo producto con atributo moneda en precio."}
        </li>
        <li>{"Calcula mentalmente cuál payload sería más grande y por qué."}</li>
        <li>{"Indica cómo validarías cada formato (JSON Schema vs XSD)."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: decisiones alineadas con regla práctica, ambos ejemplos sintácticamente válidos, justificación de casos legados/regulatorios, mención de herramientas de validación."
        }
      </p>
      <CodeFiddle
        language="json"
        title="Producto en JSON"
        code={`{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": { "valor": 4500000, "moneda": "COP" }
}`}
      />
      <CodeFiddle
        language="xml"
        title="Producto en XML"
        code={`<?xml version="1.0" encoding="UTF-8"?>
<producto id="42">
  <nombre>Laptop Pro 15</nombre>
  <precio moneda="COP">4500000</precio>
</producto>`}
      />
      <PracticeExercise
        prompt="Asigna formato a las tres integraciones del marketplace (API REST, facturación DIAN, RSS) y escribe los ejemplos JSON y XML del producto. ¿Cómo validarías cada uno?"
        hints={[
          "API REST → JSON",
          "Facturación DIAN → XML",
          "RSS → XML",
          "JSON Schema vs XSD",
        ]}
        expectedKeywords={["JSON", "XML", "DIAN", "Schema"]}
        successMessage="Excelente. Has aplicado la regla práctica y modelado ambos formatos con validación adecuada."
        rows={6}
      />
    </section>
  );
}
