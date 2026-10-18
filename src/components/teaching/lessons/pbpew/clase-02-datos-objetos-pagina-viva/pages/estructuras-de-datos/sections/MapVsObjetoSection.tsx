import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MapVsObjetoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"`Map` frente a objeto literal"}
      </h2>
      <p className="my-4">
        {"Ambos guardan pares clave-valor; la diferencia está en tipos de clave, tamaño e iteración."}
      </p>
      <CompareTable
        headers={["Criterio", "Objeto {}", "Map"]}
        rows={[
          ["Tipo de clave", "String/Symbol (otros se convierten)", "Cualquier tipo"],
          ["Tamaño", "Object.keys(obj).length", ".size"],
          ["Orden al iterar", "Orden parcial / reglas ES", "Orden de inserción"],
          ["JSON", "Nativo con JSON.stringify", "Requiere conversión"],
          ["Caso PBPEW", "Config, DTO, respuesta API", "Caché dinámica, claves no string"],
        ]}
      />
      <p className="my-4">
        <strong>{"Cuándo preferir objeto:"}</strong>{" JSON estático, contratos de API, configuración con pocas propiedades fijas, serialización directa."}
      </p>
      <p className="my-4">
        <strong>{"Cuándo preferir Map:"}</strong>{" claves dinámicas de tipos variados, muchas altas/bajas de entradas, `.size` fiable, iterar en orden de inserción sin sorpresas del prototipo."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const configObj = { tema: "oscuro", idioma: "es" };
console.log(configObj.tema); // acceso directo — ideal JSON

const contadorMap = new Map();
contadorMap.set("clics", 0);
contadorMap.set("clics", contadorMap.get("clics") + 1);
console.log(contadorMap.get("clics")); // 1 — ideal claves dinámicas`}
      />
      <Callout title="Serialización: Map y JSON">
        {
          'JSON.stringify(new Map([[1, 2]])) devuelve "{}". Para persistir un Map hay que convertirlo — por ejemplo a array de pares con [...mapa]. Los objetos literales serializan de forma natural con JSON.stringify.'
        }
      </Callout>
    </section>
  );
}
