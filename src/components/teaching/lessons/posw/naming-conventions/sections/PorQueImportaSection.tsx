import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const MALO_VS_BUENO = `// ❌ Sin convención ni significado
let x = 4500000;
function fn1(a, b) { return a * b; }

// ✅ Expresivo
const precioProductoBase = 4500000;
function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}`;

export function PorQueImportaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Por qué importa el naming en equipos"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Legibilidad: malo vs bueno"}</h3>
      <CodeFiddle language="javascript" title="Nombres opacos vs expresivos" code={MALO_VS_BUENO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrones frecuentes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Abreviaciones opacas: usrMgr, getPr."}</li>
        <li>{"Nombres de un carácter fuera de loops (x, tmp en lógica de negocio)."}</li>
        <li>{"Nombres que mienten: obtenerUsuario() que también elimina el registro."}</li>
        <li>{"Nombres genéricos: Helper, Utils, Clase1 sin dominio."}</li>
      </ul>
      <Callout title="Caso real: user_id, userId y UserID en el mismo flujo">
        {
          "SQL usa user_id, JSON userId y DTOs C# UserID. Los juniors mapean mal campos; bugs de serialización cada sprint. Decisión: tabla de convenciones por capa en README; snake_case solo en BD, camelCase en JSON."
        }
      </Callout>
    </section>
  );
}
