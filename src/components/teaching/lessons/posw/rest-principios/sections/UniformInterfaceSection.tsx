import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function UniformInterfaceSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Uniform Interface (interfaz uniforme)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Constraint central de REST; cuatro sub-constraints:"}</li>
        <li>{"Identificación de recursos — URI única (/productos/42)."}</li>
        <li>{"Manipulación mediante representaciones — JSON/XML; el cliente envía la representación deseada."}</li>
        <li>{"Mensajes autodescriptivos — Content-Type, método HTTP, códigos de estado dan contexto."}</li>
        <li>{"HATEOAS — _links con acciones posibles desde el estado actual."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"HATEOAS en JSON"}</h3>
      <CodeFiddle
        language="json"
        title="HATEOAS en JSON"
        code={`{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "estado": "en_stock",
  "_links": {
    "self": { "href": "/api/v1/productos/42", "method": "GET" },
    "actualizar": { "href": "/api/v1/productos/42", "method": "PUT" },
    "eliminar": { "href": "/api/v1/productos/42", "method": "DELETE" },
    "categoria": { "href": "/api/v1/categorias/3", "method": "GET" },
    "agregar_al_carrito": {
      "href": "/api/v1/carrito/items",
      "method": "POST"
    }
  }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cliente navegando HATEOAS"}</h3>
      <CodeFiddle
        language="javascript"
        title="Cliente navegando HATEOAS"
        code={`async function agregarAlCarrito(producto) {
  const link = producto._links?.agregar_al_carrito;
  if (!link) throw new Error("Acción no disponible en este estado");

  const res = await fetch(link.href, {
    method: link.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${token}\`
    },
    body: JSON.stringify({ producto_id: producto.id, cantidad: 1 })
  });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}`}
      />
      <Callout title="15 URLs hardcodeadas en app móvil">
        {
          "Cada cambio de ruta en backend exige actualización forzada en App Store. Decisión: incluir _links en carrito y checkout; el cliente sigue agregar_al_carrito.href; objetivo Richardson nivel 3 en flujos críticos."
        }
      </Callout>
      <CodeChallenge
        title="Ordena los niveles de Richardson (menor a mayor RESTfulness)"
        template={`Nivel más bajo: {{blank1}}
Siguiente: {{blank2}}
Siguiente: {{blank3}}
Nivel más alto: {{blank4}}`}
        blanks={[
          { id: "blank1", answer: "un solo URI con POST para todo", placeholder: "nivel 0" },
          { id: "blank2", answer: "múltiples URIs por recurso", placeholder: "nivel 1" },
          { id: "blank3", answer: "verbos HTTP y códigos de estado correctos", placeholder: "nivel 2" },
          { id: "blank4", answer: "HATEOAS con _links", placeholder: "nivel 3" },
        ]}
      />
    </section>
  );
}
