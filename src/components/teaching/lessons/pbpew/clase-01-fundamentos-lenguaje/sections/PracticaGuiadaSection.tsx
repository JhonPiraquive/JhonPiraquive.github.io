import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque completa un fragmento de código de las páginas de la clase. Los huecos se rellenan con la palabra o la expresión que falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Introducción a JavaScript y al DOM"}</h3>
      <CodeChallenge
        title="Completar el código — entrada al DOM"
        template={'console.{{blank1}}("El tag raíz es:", document.documentElement.{{blank2}});'}
        blanks={[
          { id: "blank1", answer: "log", placeholder: "método de consola" },
          { id: "blank2", answer: "tagName", placeholder: "propiedad del elemento" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"JavaScript en HTML y consola"}</h3>
      <CodeChallenge
        title="Completar el HTML — script externo con defer"
        template={'<script {{blank1}}="js/main.js" {{blank2}}></script>'}
        blanks={[
          { id: "blank1", answer: "src", placeholder: "atributo de ruta" },
          { id: "blank2", answer: "defer", placeholder: "atributo de carga" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Variables, hoisting y tipos de datos"}</h3>
      <CodeChallenge
        title="Completar el código — contador con let y const"
        template={`{{blank1}} intentos = 0;
intentos = intentos + 1;
intentos = intentos + 1;
console.log(intentos); // debe imprimir 2

{{blank2}} MAX_INTENTOS = 3;
// MAX_INTENTOS = 5; // ¿qué error esperarías?`}
        blanks={[
          { id: "blank1", answer: "let", placeholder: "palabra clave reasignable" },
          { id: "blank2", answer: "const", placeholder: "palabra clave para constante" },
        ]}
      />
      <CodeChallenge
        title="Completar el código — inspeccionar tipos"
        template={`const mensaje = "Hola";
const activo = true;
let sinValor;

console.log(typeof {{blank1}}, typeof {{blank2}}, typeof {{blank3}});`}
        blanks={[
          { id: "blank1", answer: "mensaje", placeholder: "variable string" },
          { id: "blank2", answer: "activo", placeholder: "variable boolean" },
          { id: "blank3", answer: "sinValor", placeholder: "variable sin asignar" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Operadores y decisiones"}</h3>
      <CodeChallenge
        title="Completar el código: acceso condicional"
        template={`const edad = 20;
const tieneLicencia = true;

if (edad >= 18 {{blank1}} tieneLicencia) {
  console.log("Puede conducir");
} else if (edad >= 18 {{blank2}} !tieneLicencia) {
  console.log("Necesita licencia");
} else {
  console.log("Menor de edad");
}`}
        blanks={[
          { id: "blank1", answer: "&&", placeholder: "operador AND" },
          { id: "blank2", answer: "&&", placeholder: "operador AND" },
        ]}
      />
      <CodeChallenge
        title="Completar el código: validar usuario activo"
        template={`const usuario = { activo: true };

if (usuario {{blank1}} null {{blank2}} usuario.activo === {{blank3}}) {
  console.log("Bienvenido");
}`}
        blanks={[
          { id: "blank1", answer: "!==", placeholder: "comparación estricta" },
          { id: "blank2", answer: "&&", placeholder: "operador lógico" },
          { id: "blank3", answer: "true", placeholder: "boolean" },
        ]}
      />
      <CodeChallenge
        title="Completar el código: switch de fin de semana"
        template={`const dia = "sabado";

switch (dia) {
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    {{blank1}}
  default:
    console.log("Día laboral");
}`}
        blanks={[{ id: "blank1", answer: "break", placeholder: "salir del switch" }]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Bucles y manejo de errores"}</h3>
      <CodeChallenge
        title="Completar el bucle for"
        template={"for (let i = 0; i {{blank1}} 5; i{{blank2}}) {\n  console.log(i);\n}"}
        blanks={[
          { id: "blank1", answer: "<", placeholder: "operador" },
          { id: "blank2", answer: "++", placeholder: "actualización" },
        ]}
      />
      <CodeChallenge
        title="Completar try/catch"
        template={"{{blank1}} {\n  risky();\n} catch (e) {\n  console.error(e.{{blank2}});\n}"}
        blanks={[
          { id: "blank1", answer: "try", placeholder: "bloque que puede fallar" },
          { id: "blank2", answer: "message", placeholder: "propiedad del error" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Funciones y callbacks"}</h3>
      <CodeChallenge
        title="Completar el código — área de rectángulo"
        template={`function areaRectangulo(base, altura) {
  return {{blank1}} * {{blank2}};
}
console.log(areaRectangulo(5, 4)); // debe imprimir 20`}
        blanks={[
          { id: "blank1", answer: "base", placeholder: "parámetro ancho" },
          { id: "blank2", answer: "altura", placeholder: "parámetro alto" },
        ]}
      />
      <CodeChallenge
        title="Completar el código — arrow con retorno implícito"
        template={`const mitad = (x) => {{blank1}};
console.log(mitad(10)); // debe imprimir 5`}
        blanks={[{ id: "blank1", answer: "x / 2", placeholder: "expresión que devuelve la mitad" }]}
      />
      <CodeChallenge
        title="Completar el código — función repetir"
        template={`function repetir(n, fn) {
  for (let i = 0; i < {{blank1}}; i++) {
    {{blank2}}(i);
  }
}`}
        blanks={[
          { id: "blank1", answer: "n", placeholder: "condición del bucle" },
          { id: "blank2", answer: "fn", placeholder: "callback a invocar" },
        ]}
      />
    </section>
  );
}
