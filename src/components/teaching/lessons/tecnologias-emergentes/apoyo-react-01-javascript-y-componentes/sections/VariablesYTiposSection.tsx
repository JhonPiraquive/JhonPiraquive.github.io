import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function VariablesYTiposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Variables y tipos de datos</h2>
      <Callout title="Cómo probar el código de esta página" variant="callout-tip">
        <p className="mb-0">
          Basta abrir el navegador, presionar F12 y entrar a la pestaña <strong>Consola</strong>: allí se puede pegar
          cualquier ejemplo y verlo funcionar. También se puede guardar en un archivo <code>prueba.js</code> y ejecutar
          en la terminal con <code>node prueba.js</code>.
        </p>
      </Callout>
      <p className="my-4">
        Una variable es una cajita con una etiqueta. Se guarda un dato dentro y, cuando hace falta, se lo llama por el
        nombre de la etiqueta. En JavaScript moderno hay dos formas de crear cajitas:
      </p>
      <CodeFiddle
        language="javascript"
        title="const y let"
        code={`// const: la etiqueta queda pegada a ese valor y no se puede reasignar
const nombreCafeteria = "Café del Parque";

// let: el valor se puede cambiar más adelante
let pedidosDelDia = 0;
pedidosDelDia = pedidosDelDia + 1;   // ahora vale 1
pedidosDelDia++;                      // forma corta, ahora vale 2

// nombreCafeteria = "Otro nombre";  // Error: no se puede reasignar una const`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué usar y qué evitar</h3>
      <CompareTable
        headers={["Palabra", "¿Se puede reasignar?", "Recomendación"]}
        rows={[
          ["const", "No", "Es la opción por defecto, siempre que sea posible"],
          ["let", "Sí", "Se usa solo cuando el valor realmente tiene que cambiar"],
          ["var", "Sí, con comportamientos confusos", "Se evita: es la forma antigua y causa errores difíciles de ver"],
        ]}
      />
      <Callout title="Un detalle importante sobre const" variant="callout-warning">
        <p className="mb-0">
          <code>const</code> impide reasignar la etiqueta, pero no congela el contenido. Si un objeto o un arreglo se
          guarda en una const, su contenido todavía puede cambiar. Esto es clave para entender, más adelante, cómo React
          detecta los cambios.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los tipos de datos</h3>
      <p className="my-4">
        Cada dato tiene un tipo, que define qué operaciones admite. JavaScript lo descubre solo; no es necesario
        declararlo.
      </p>
      <CompareTable
        headers={["Tipo", "Ejemplo", "Para qué se usa"]}
        rows={[
          ["string (texto)", '"Capuchino"', "Nombres, mensajes, direcciones"],
          ["number (número)", "8500, 3.14", "Precios, cantidades, edades"],
          ["boolean (verdadero o falso)", "true, false", "Decisiones: ¿está agotado? ¿tiene descuento?"],
          ["undefined", "undefined", "Una variable creada que aún no recibe valor"],
          ["null", "null", "Ausencia intencional de valor"],
          ["object (objeto)", "{ nombre: 'Té' }", "Agrupar datos relacionados"],
          ["array (arreglo)", "['Té', 'Café']", "Listas ordenadas de datos"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="Revisar el tipo de un dato"
        code={`console.log(typeof "Capuchino");   // "string"
console.log(typeof 8500);          // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof { a: 1 });      // "object"
console.log(typeof [1, 2]);        // "object"  (un arreglo también es un objeto)
console.log(Array.isArray([1, 2])); // true       (así se distingue un arreglo)`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Texto con valores adentro: template literals</h3>
      <p className="my-4">
        Para mezclar texto y variables se usan comillas invertidas (el acento grave) y la variable se escribe dentro de{" "}
        <code>{"${ }"}</code>. Es mucho más claro que unir pedazos con el signo más.
      </p>
      <CodeFiddle
        language="javascript"
        title="Template literals"
        code={`const producto = "Capuchino";
const precio = 8500;

// Forma antigua, fácil de equivocarse
console.log("El " + producto + " cuesta $" + precio);

// Forma moderna
console.log(\`El \${producto} cuesta $\${precio}\`);

// Dentro de \${} cabe cualquier expresión
console.log(\`Con IVA del 19%: $\${precio * 1.19}\`);`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Comparar bien: === en lugar de ==</h3>
      <p className="my-4">
        Para preguntar «¿son iguales?» se usan siempre tres signos de igual. Con dos, JavaScript intenta convertir los tipos y
        da resultados sorprendentes.
      </p>
      <CodeFiddle
        language="javascript"
        title="Igualdad estricta"
        code={`console.log(5 == "5");    // true  (convierte el texto a número: confuso)
console.log(5 === "5");   // false (un número y un texto son cosas distintas)
console.log(5 !== "5");   // true`}
      />

    </section>
  );
}
