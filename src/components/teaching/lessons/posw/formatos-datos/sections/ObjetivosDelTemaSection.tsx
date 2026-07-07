import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre los dos formatos de intercambio más usados en servicios web: XML (legado y estándares empresariales) y JSON (predeterminado en APIs REST modernas)."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir XML y JSON como formatos de intercambio de datos y ubicarlos históricamente (W3C 1996 vs formalización JSON ~2001)."
          }
        </li>
        <li>
          {
            "Leer un documento XML con declaración, elemento raíz, anidación y atributos; y un objeto JSON con tipos nativos (string, number, boolean, null, array, object)."
          }
        </li>
        <li>
          {
            "Comparar al menos cinco características entre XML y JSON (verbosidad, tipos, atributos, comentarios, validación, parsing en JS)."
          }
        </li>
        <li>
          {
            "Elegir el formato adecuado en un caso dado: API REST nueva (JSON) vs integración SOAP/legado o facturación con estándar XML."
          }
        </li>
        <li>
          {
            "Estimar ventaja de tamaño aproximada JSON vs XML para el mismo pedido y parsear JSON con JSON.parse() en JavaScript."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección servicios-web: concepto de servicio web, cliente-servidor y peticiones HTTP."
          }
        </li>
        <li>{"Conocimientos básicos de JavaScript en el navegador (variables, consola)."}</li>
        <li>{"No se requiere experiencia previa con SOAP ni con esquemas XSD."}</li>
      </ul>
      <Callout title="Regla práctica">
        {
          "JSON por defecto en nuevas APIs REST; XML si integras SOAP/legado, necesitas atributos con metadatos o el estándar del dominio lo exige (p. ej. facturación electrónica DIAN en Colombia)."
        }
      </Callout>
    </section>
  );
}
