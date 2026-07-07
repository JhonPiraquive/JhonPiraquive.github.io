import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: depurar el módulo de perfil"}
      </h2>
      <p className="my-4 font-semibold">{"“Depurar el módulo de perfil”"}</p>
      <p className="my-4">
        {
          "Te pasan este fragmento de un script vinculado al final del `<body>` (lección 02). El QA reporta: contador de visitas siempre `0`, nombre de usuario no actualiza y a veces aparece `undefined` en pantalla."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Script con bugs — módulo de perfil"
        code={`var visitas = 0;
const perfil = { nombre: "Invitado", nivel: 1 };

function registrarVisita() {
  visitas = visitas + 1;
  if (visitas > 5) {
    let visitas = visitas; // intención: “guardar copia” — bug
    console.log("Visitas en bloque:", visitas);
  }
  return visitas;
}

function cambiarNombre(nuevoNombre) {
  perfil = { nombre: nuevoNombre, nivel: perfil.nivel };
}

let usuarioActivo = null;
function obtenerSaludo() {
  if (usuarioActivo) {
    return "Hola, " + usuarioActivo.nombre;
  }
  return "Hola, " + perfil.nombre;
}

// Simulación desde consola
registrarVisita();
registrarVisita();
cambiarNombre("Laura");
console.log(obtenerSaludo());
console.log(typeof usuarioActivo, typeof perfil.nivel);`}
      />
      <p className="my-4 font-semibold">{"Tareas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Identifica al menos tres errores o malas prácticas (hoisting/`var`, sombreado con `let`, reasignación de `const`, `null` vs objeto, coerción, etc.)."
          }
        </li>
        <li>
          {
            "Propón correcciones concretas usando `let`/`const` adecuados y mutación de `perfil` en lugar de reasignar."
          }
        </li>
        <li>
          {
            "Escribe qué imprimiría `typeof` para `usuarioActivo` y `perfil.nivel` y qué valor debería mostrar `registrarVisita()` tras dos llamadas."
          }
        </li>
        <li>{"Añade una validación: si `nuevoNombre` es string vacío, no mutar y usar `console.warn`."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: distingue referencia vs reasignación, corrige sombreado en el `if`, explica TDZ/hoisting donde aplique, usa `typeof`/`=== null` correctamente, y el contador global llega a `2` tras dos llamadas."
        }
      </p>
      <PracticeExercise
        prompt="Redacta tu diagnóstico y correcciones para el módulo de perfil. Incluye: (1) al menos tres bugs o malas prácticas, (2) código corregido para cambiarNombre con mutación, (3) typeof esperado para usuarioActivo y perfil.nivel, (4) validación de string vacío."
        hints={[
          "let visitas dentro del if sombrea la variable global — el contador no incrementa como esperas",
          "perfil = {} intenta reasignar const — usa perfil.nombre = nuevoNombre",
          "var visitas → preferir let visitas = 0",
          'typeof null es "object"; typeof perfil.nivel es "number"',
          'if (nuevoNombre === "") { console.warn(...); return; }',
        ]}
        expectedKeywords={["sombreado", "const", "mutar", "typeof", "let"]}
        successMessage="Excelente. Has integrado variables, alcance, const vs mutación y typeof en un caso real de depuración."
        rows={6}
      />
    </section>
  );
}
