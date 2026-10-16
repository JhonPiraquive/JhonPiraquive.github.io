import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function VariablesYTiposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Variables y tipos de datos</h2>
      <Callout title="Cómo probar el código de esta página" variant="callout-tip">
        <p className="mb-0">
          Abre el navegador, presiona F12 y entra a la pestaña <strong>Consola</strong>: puedes pegar cualquier ejemplo y
          verlo funcionar. También puedes guardarlo en un archivo <code>prueba.js</code> y ejecutarlo en la terminal con{" "}
          <code>node prueba.js</code>.
        </p>
      </Callout>
      <p className="my-4">
        Una variable es una cajita con una etiqueta. Guardas un dato dentro y, cuando lo necesites, lo llamas por el
        nombre de la etiqueta. En JavaScript moderno hay dos formas de crear cajitas:
      </p>
      <CodeFiddle
        language="javascript"
        title="const y let"
        code={`// const: la etiqueta queda pegada a ese valor y no se puede reasignar
const nombreCafeteria = "Café del Parque";

// let: puedes cambiar el valor más adelante
let pedidosDelDia = 0;
pedidosDelDia = pedidosDelDia + 1;   // ahora vale 1
pedidosDelDia++;                      // forma corta, ahora vale 2

// nombreCafeteria = "Otro nombre";  // Error: no puedes reasignar una const`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué usar y qué evitar</h3>
      <CompareTable
        headers={["Palabra", "¿Se puede reasignar?", "Recomendación"]}
        rows={[
          ["const", "No", "Úsala por defecto, siempre que puedas"],
          ["let", "Sí", "Úsala solo cuando el valor realmente tenga que cambiar"],
          ["var", "Sí, con comportamientos confusos", "Evítala: es la forma antigua y causa errores difíciles de ver"],
        ]}
      />
      <Callout title="Un detalle importante sobre const" variant="callout-warning">
        <p className="mb-0">
          <code>const</code> impide reasignar la etiqueta, pero no congela el contenido. Si guardas un objeto o un
          arreglo en una const, aún puedes cambiar lo que tiene dentro. Esto es clave para entender, más adelante, cómo React
          detecta los cambios.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los tipos de datos</h3>
      <p className="my-4">
        Cada dato tiene un tipo, que define qué puedes hacer con él. JavaScript lo descubre solo, no tienes que
        declararlo.
      </p>
      <CompareTable
        headers={["Tipo", "Ejemplo", "Para qué lo usas"]}
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
        Para mezclar texto y variables usa comillas invertidas (el acento grave) y escribe la variable dentro de{" "}
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
        Para preguntar «¿son iguales?» usa siempre tres signos de igual. Con dos, JavaScript intenta convertir los tipos y da resultados
        sorprendentes.
      </p>
      <CodeFiddle
        language="javascript"
        title="Igualdad estricta"
        code={`console.log(5 == "5");    // true  (convierte el texto a número: confuso)
console.log(5 === "5");   // false (un número y un texto son cosas distintas)
console.log(5 !== "5");   // true`}
      />

      <CodeChallenge
        title="Completa el código"
        template={`{{a}} ciudad = "Manizales";
{{b}} visitas = 0;
visitas = visitas + 1;
console.log({{c}}Hola desde \${ciudad}, visitas: \${visitas}{{c}});`}
        blanks={[
          { id: "a", answer: "const", placeholder: "palabra" },
          { id: "b", answer: "let", placeholder: "palabra" },
          { id: "c", answer: "`", placeholder: "símbolo" },
        ]}
      />
    </section>
  );
}
