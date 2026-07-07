import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SistemaTiposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Sistema de tipos"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Primitivos: string, number, boolean, null, undefined, symbol, bigint."}</li>
        <li>{"Compuestos: arrays (number[]), tuplas ([number, number]), uniones (string | number)."}</li>
        <li>{"Literales: \"norte\" | \"sur\" restringe valores permitidos."}</li>
        <li>{"any vs unknown: any desactiva el tipado; unknown exige narrowing."}</li>
        <li>{"never: funciones que nunca retornan (error o bucle infinito)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Jerarquía del sistema de tipos"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  P[Primitivos] --> C[Compuestos: array, tupla, union]
  C --> I[Interfaces y types]
  I --> G[Genéricos T]
  G --> API[ApiResponse T para REST]`}
      />
      <CodeFiddle
        language="typescript"
        title="Tipos primitivos y compuestos"
        code={`let nombre: string = "Ana";
let precios: number[] = [100, 200, 300];
let coordenada: [number, number] = [4.710, -74.072];
let id: string | number = 42;

type Direccion = "norte" | "sur" | "este" | "oeste";
let rumbo: Direccion = "norte";

let desconocido: unknown = obtenerDato();
if (typeof desconocido === "string") {
  console.log(desconocido.toUpperCase());
}`}
      />
      <CompareTable
        headers={["Tipo", "Comportamiento", "Cuándo usar", "Riesgo"]}
        rows={[
          ["any", "Desactiva verificación", "Migración gradual legacy", "Anula beneficios de TS"],
          [
            "unknown",
            "Exige narrowing antes de usar",
            "Datos de origen desconocido (JSON externo)",
            "Más seguro, requiere comprobación",
          ],
          ["never", "Valor imposible", "Funciones que lanzan o no retornan", "Útil en exhaustiveness checks"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usar any por comodidad en lugar de unknown + narrowing."}</li>
        <li>{"Ignorar errores con @ts-ignore en lugar de corregir el contrato."}</li>
        <li>{"Asumir que TypeScript valida respuestas JSON en runtime."}</li>
      </ul>
    </section>
  );
}
