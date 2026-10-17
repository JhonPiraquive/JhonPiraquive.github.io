import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function OperadoresModernosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Operadores frecuentes en React</h2>
      <p className="my-4">
        Al leer código de React aparecen símbolos como <code>?</code>, <code>&&</code>, <code>??</code> y{" "}
        <code>?.</code>. No son difíciles: cada uno responde una pregunta distinta. Aprenderlos desde ahora evita
        confusiones cuando se muestran u ocultan elementos en pantalla.
      </p>
      <CompareTable
        headers={["Operador", "Nombre", "Pregunta que responde", "Ejemplo"]}
        rows={[
          ["condición ? a : b", "Ternario", "Si se cumple la condición, se usa a; si no, se usa b", "agotado ? \"Agotado\" : \"Disponible\""],
          ["a && b", "Y lógico", "Si a es verdadero, entonces se evalúa b", "tieneDescuento && <Etiqueta />"],
          ["a || b", "O lógico", "Se usa a; si es falso o vacío, se usa b", "nombre || \"Sin nombre\""],
          ["a ?? b", "Fusión nula", "Se usa a; solo si es null o undefined, se usa b", "descuento ?? 0"],
          ["obj?.prop", "Encadenamiento opcional", "Se accede a prop solo si obj existe", "producto?.imagen?.url"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ternario: elegir entre dos opciones</h3>
      <CodeFiddle
        language="javascript"
        title="Operador ternario"
        code={`const stock = 0;
const mensaje = stock === 0 ? "Agotado" : "Disponible";
console.log(mensaje);  // "Agotado"`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">|| frente a ??: una diferencia que importa</h3>
      <p className="my-4">
        En JavaScript hay valores que cuentan como «falsos» al compararlos: <code>false</code>, <code>0</code>,{" "}
        <code>&quot;&quot;</code> (texto vacío), <code>null</code>, <code>undefined</code> y <code>NaN</code>. El operador{" "}
        <code>||</code> reemplaza cualquiera de ellos. El operador <code>??</code> solo reemplaza
        <code> null</code> y <code>undefined</code>. Esa diferencia es la que evita errores con el número cero.
      </p>
      <CodeFiddle
        language="javascript"
        title="Cuidado con el cero"
        code={`const descuentoGuardado = 0;   // el producto realmente tiene 0% de descuento

console.log(descuentoGuardado || 10);  // 10  <- error: ignoró el 0
console.log(descuentoGuardado ?? 10);  // 0   <- correcto: el 0 es un dato válido`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Encadenamiento opcional: evitar errores por un dato que falta</h3>
      <p className="my-4">
        Si se intenta leer una propiedad de algo que no existe, JavaScript lanza un error y la pantalla se rompe. Con{" "}
        <code>?.</code> la lectura se detiene sin error y devuelve <code>undefined</code>.
      </p>
      <CodeFiddle
        language="javascript"
        title="Evitar errores con ?."
        code={`const producto = { nombre: "Té" };   // no tiene la propiedad imagen

// console.log(producto.imagen.url);  // Error: no se puede leer "url" de undefined
console.log(producto.imagen?.url);    // undefined, sin errores
console.log(producto.imagen?.url ?? "sin-imagen.png");  // "sin-imagen.png"`}
      />

      <Callout title="La trampa del cero en React" variant="callout-warning">
        <p className="mb-0">
          Más adelante se usará <code>{"{cantidad && <Etiqueta />}"}</code> para mostrar algo solo si hay cantidad. Si{" "}
          <code>cantidad</code> vale <code>0</code>, el resultado del <code>&&</code> es el propio 0, y React escribe un
          «0» en pantalla. Para evitarlo, se compara de forma explícita: <code>{"{cantidad > 0 && <Etiqueta />}"}</code>.
        </p>
      </Callout>
    </section>
  );
}
