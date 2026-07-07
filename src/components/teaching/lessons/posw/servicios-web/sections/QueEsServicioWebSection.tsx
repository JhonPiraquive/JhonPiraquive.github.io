import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function QueEsServicioWebSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es un servicio web?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Interacción máquina-a-máquina por red."}</li>
        <li>{"Interfaz estandarizada (HTTP, JSON, XML)."}</li>
        <li>{"Cliente consume; servicio publica y orquesta persistencia u otros servicios."}</li>
        <li>{"Distinto de una página HTML solo para humanos."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un servicio web es un sistema de software diseñado para que aplicaciones heterogéneas — distintos lenguajes y plataformas — se comuniquen sin intervención humana directa. Expone funcionalidades mediante interfaces estandarizadas (generalmente HTTP) como recursos consumibles por múltiples clientes."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Analogía ATM"}</h3>
      <p className="my-4">
        {
          "Como un cajero automático: no importa la marca de tarjeta ni el lenguaje interno del banco; la interfaz estandarizada permite retiro o consulta a cualquier cliente compatible. El cliente es quien inserta la tarjeta; la interfaz es el protocolo del cajero; el sistema interno del banco valida y ejecuta la operación."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Arquitectura cliente → servicio → recurso"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  C1[Cliente React] --> SW[Servicio Web]
  C2[Cliente Android] --> SW
  C3[Cliente Python] --> SW
  SW --> DB[(Base de Datos)]
  SW --> OTRO[Otro Servicio]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Sitio web vs servicio web"}</h3>
      <CompareTable
        headers={["Aspecto", "Sitio web estático", "Servicio web"]}
        rows={[
          ["Consumidor", "Humano en navegador", "Otra aplicación o script"],
          ["Interfaz", "HTML/CSS para lectura", "API HTTP con contrato (JSON/XML)"],
          ["Propósito", "Mostrar contenido", "Exponer datos y operaciones programáticas"],
          ['Ejemplo', 'Página "Acerca de"', "GET /api/productos/42 → JSON"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: petición y respuesta mínima"}</h3>
      <CodeFiddle
        language="http"
        title="Petición GET"
        code={`GET /api/productos/42 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta JSON"
        code={`{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": { "valor": 4500000, "moneda": "COP" },
  "stock": 12
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrón: lógica duplicada en cada cliente"}</h3>
      <CodeFiddle
        language="javascript"
        title="Anti-patrón: lógica duplicada"
        code={`// Evitar: cada cliente recalcula descuentos distinto
function totalCarrito(items) {
  let total = items.reduce((s, i) => s + i.precio * i.cantidad, 0);
  if (items.length > 3) total *= 0.9; // regla duplicada en web, móvil, etc.
  return total;
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Patrón: cliente delgado, servicio con la regla"}</h3>
      <CodeFiddle
        language="http"
        title="Patrón: cliente delgado"
        code={`POST /api/carrito/calcular-total HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"items":[{"productoId":42,"cantidad":2}]}`}
      />
      <Callout title="Caso real: fintech con tres apps">
        {
          "Una startup lanza web (React), móvil (Kotlin) y batch (Python). Cada equipo valida montos distinto; aparecen discrepancias. Decisión clave: extraer un servicio de pagos HTTP+JSON con reglas centralizadas y clientes delgados."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del ATM: ¿qué parte es el cliente, qué parte es la interfaz estandarizada y qué parte es el sistema interno del banco?"
        hints={[
          "Cliente = quien consume",
          "Interfaz = protocolo del cajero",
          "Interno = validación y persistencia",
        ]}
        expectedKeywords={["cliente", "interfaz", "banco", "ATM"]}
        successMessage="Correcto. El cliente consume la interfaz; el servicio interno ejecuta reglas y accede a datos."
      />
    </section>
  );
}
