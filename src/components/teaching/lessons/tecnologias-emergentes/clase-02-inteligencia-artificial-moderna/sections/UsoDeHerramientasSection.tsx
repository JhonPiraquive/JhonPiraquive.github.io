import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function UsoDeHerramientasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Uso de herramientas: cuando el modelo pide ayuda</h2>
      <p className="my-4">
        Un modelo solo produce texto. No puede, por sí mismo, consultar el clima, leer un archivo ni guardar un registro
        en una base de datos. El <strong>uso de herramientas</strong> (en inglés, <em>tool use</em> o
        <em> function calling</em>) resuelve ese límite: el programa le describe al modelo qué herramientas existen y el
        modelo, en lugar de responder, puede contestar «necesito usar esta herramienta con estos datos».
      </p>
      <p className="my-4">
        Lo esencial es quién hace qué: <strong>el modelo decide, el programa ejecuta</strong>. El modelo nunca ejecuta
        nada directamente; solo pide. Es como un jefe de cocina que dicta las órdenes y un ayudante que las cumple y le
        cuenta el resultado.
      </p>
      <MermaidDiagram
        title="Un turno con uso de herramientas"
        description="Diagrama de secuencia: el programa envía la pregunta y la lista de herramientas, el modelo pide usar una herramienta, el programa la ejecuta y devuelve el resultado, y el modelo responde con ese dato."
        chart={`sequenceDiagram
  participant P as Programa
  participant M as Modelo
  participant H as Herramienta
  P->>M: Pregunta + lista de herramientas disponibles
  M-->>P: Quiero usar consultar_inventario con producto = "café"
  P->>H: Ejecuta consultar_inventario("café")
  H-->>P: 42 unidades
  P->>M: Resultado de la herramienta: 42 unidades
  M-->>P: Hay 42 unidades de café disponibles.`}
      />
      <p className="my-4">
        Cada herramienta se describe con un nombre, una explicación de para qué sirve y un esquema de los datos que recibe
        (normalmente en formato JSON Schema). La descripción es muy importante: el modelo decide si usar una herramienta
        leyendo esa explicación.
      </p>
      <CodeFiddle
        language="json"
        title="Descripción de una herramienta"
        code={`{
  "name": "consultar_inventario",
  "description": "Devuelve cuántas unidades hay de un producto en la bodega. Usar cuando el usuario pregunte por existencias o disponibilidad.",
  "input_schema": {
    "type": "object",
    "properties": {
      "producto": { "type": "string", "description": "Nombre del producto, por ejemplo café o panela" }
    },
    "required": ["producto"]
  }
}`}
      />
      <Callout title="El poder y el riesgo están en las herramientas" variant="callout-warning">
        <p className="mb-0">
          Con herramientas de solo lectura (buscar, consultar) un error del modelo produce una respuesta equivocada. Con
          herramientas que modifican cosas (borrar archivos, enviar correos, pagar) un error produce un daño real. Por eso
          las herramientas que modifican suelen pedir confirmación a una persona antes de ejecutarse.
        </p>
      </Callout>
    </section>
  );
}
