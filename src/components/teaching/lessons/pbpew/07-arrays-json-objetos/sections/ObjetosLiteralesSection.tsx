import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ObjetosLiteralesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetos literales y referencia"}
      </h2>
      <p className="my-4">
        {
          "Un objeto literal agrupa propiedades con nombre (`clave: valor`) en una sola variable."
        }
      </p>
      <p className="my-4">
        <strong>{"Acceso:"}</strong>{" notación de punto `alumno.nombre` o corchetes `alumno[\"nombre\"]` — útiles si la clave es variable o tiene caracteres especiales."}
      </p>
      <p className="my-4">
        <strong>{"Método en objeto:"}</strong>{" propiedad cuyo valor es una función. Preview de `this` en lección 8; aquí basta invocar `alumno.presentarse()`."}
      </p>
      <p className="my-4">
        <strong>{"Referencia vs valor:"}</strong>{" primitivos (número, string, boolean) se copian por valor. Arrays y objetos se asignan por referencia — dos variables pueden apuntar al mismo objeto; mutar por una afecta a la otra."}
      </p>
      <p className="my-4">
        <strong>{"Copia superficial:"}</strong>{" `const copia = { ...original }` o `const copiaArr = [...original]` crea un nuevo contenedor de primer nivel; objetos anidados pueden seguir compartiendo referencia (tema avanzado)."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Destructuración y spread"}</h3>
      <p className="my-4">{"Destructuración básica: extraer propiedades o elementos en una línea."}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Array: `const [primero, segundo] = lista;`"}</li>
        <li>{"Objeto: `const { nombre, id } = alumno;`"}</li>
        <li>{"Renombrar: `const { nombre: nombreAlumno } = alumno;`"}</li>
        <li>{"Valor por defecto: `const { rol = \"estudiante\" } = usuario;`"}</li>
      </ul>
      <p className="my-4">
        <strong>{"Spread en literales:"}</strong>{" `const nuevo = { ...viejo, activo: true };` — clonar y actualizar sin mutar el original directamente."}
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph ref [Misma referencia]
    V1["const a = { n: 1 }"]
    V2["const b = a"]
    V3["b.n = 9"]
    V1 --> V2 --> V3
    V3 --> R1["a.n y b.n valen 9"]
  end
  subgraph spread [Spread / nuevo objeto]
    S1["const c = { ...a }"]
    S2["c.n = 5"]
    S1 --> S2
    S2 --> R2["a.n sigue 9, c.n es 5"]
  end`}
      />
      <CompareTable
        headers={["Tipo", "Asignación b = a", "Si b cambia el contenido, ¿afecta a a?"]}
        rows={[
          ["número, string, boolean", "copia el valor", "No"],
          ["array, objeto", "copia la referencia", "Sí, si mutas el contenido"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`const alumno = {
  id: 42,
  nombre: "Sofía",
  presentarse() {
    return \`Soy \${this.nombre}\`;
  },
};

console.log(alumno.nombre);           // "Sofía"
console.log(alumno["nombre"]);        // "Sofía"
console.log(alumno.presentarse());    // "Soy Sofía"`}
      />
      <CodeFiddle
        language="javascript"
        code={`const original = { puntos: 10 };
const ref = original;      // misma referencia
ref.puntos = 99;
console.log(original.puntos); // 99 — mutación compartida

const copia = { ...original, puntos: 10 };
copia.puntos = 50;
console.log(original.puntos); // 99
console.log(copia.puntos);    // 50`}
      />
      <CodeFiddle
        language="javascript"
        code={`const lista = ["rojo", "verde", "azul"];
const [primero, , tercero] = lista;
console.log(primero, tercero); // "rojo" "azul"

const usuario = { id: 1, nombre: "Ana", rol: "admin" };
const { nombre, rol = "invitado" } = usuario;
console.log(nombre, rol); // "Ana" "admin"`}
      />
      <Callout title="Error frecuente — comparar objetos con ===">
        {
          "[1,2] === [1,2] es false — son referencias distintas aunque el contenido sea igual. Lo mismo con objetos literales distintos. Comparar contenido requiere lógica explícita o serialización."
        }
      </Callout>
      <PracticeExercise
        prompt="Dado const persona = { nombre: 'Luis', edad: 20 }, usa destructuración para extraer nombre y edad en constantes e imprímelas en consola."
        hints={["const { nombre, edad } = persona", "Desestructuración en el lado izquierdo del ="]}
        expectedKeywords={["{", "nombre", "edad", "persona"]}
        successMessage="Correcto. const { nombre, edad } = persona; console.log(nombre, edad); → Luis 20."
      />
      <PracticeExercise
        prompt="Dado const items = ['pan', 'leche'], añade 'huevos' al final con push (sin reasignar items). Luego crea const copia = [...items] y añade 'mantequilla' solo a copia. ¿Qué contiene cada array?"
        hints={["push muta items", "spread crea array nuevo", "push en copia no afecta items"]}
        expectedKeywords={["pan", "leche", "huevos", "mantequilla"]}
        successMessage="Correcto. items → ['pan','leche','huevos']; copia → ['pan','leche','huevos','mantequilla']."
      />
    </section>
  );
}
