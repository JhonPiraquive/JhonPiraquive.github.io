import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: motor de tarifas del gimnasio"}
      </h2>
      <p className="my-4 font-semibold">{"“Motor de tarifas del gimnasio”"}</p>
      <p className="my-4">
        {
          "Un script en la página de inscripción recibe (simulados en consola):"
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Variables de entrada simuladas"
        code={`const edad = Number(prompt("Edad:"));
const plan = prompt("Plan (basico/premium/familiar):");
const esEstudiante = prompt("¿Estudiante? (si/no)") === "si";`}
      />
      <p className="my-4 font-semibold">{"Requisitos:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Si `edad` no es un número válido (`Number.isNaN`), mostrar error y no calcular precio."
          }
        </li>
        <li>
          {
            "Con `if/else if/else`, asignar precio base: menor de 12 → no permitido (mensaje y salir); 12–17 → 25; 18–59 → 40; 60 o más → 30."
          }
        </li>
        <li>
          {
            "Con `switch (plan)`, aplicar multiplicador al precio base: `basico` ×1, `premium` ×1.5, `familiar` ×2.2; plan desconocido → mensaje de error."
          }
        </li>
        <li>
          {
            "Si `esEstudiante` es verdadero y `edad` está entre 18 y 25 inclusive, restar 5 al precio final (mínimo 0) usando operadores lógicos y aritméticos."
          }
        </li>
        <li>
          {"Mostrar un resumen: `\"Plan X, edad Y, total Z\"` con `console.log`."}
        </li>
      </ol>
      <p className="my-4">
        <strong>{"Bonus:"}</strong>
        {" reescribe la parte del `plan` con `if` y explica en una línea cuándo preferirías `switch`."}
      </p>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa `===` en comparaciones de strings, valida `NaN`, combina `if` para rangos y `switch` para valores discretos, aplica descuento solo cuando ambas condiciones (`&&`) se cumplen, y el precio nunca es negativo."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Solución de referencia — motor de tarifas"
        code={`const edad = Number(prompt("Edad:"));
const plan = prompt("Plan (basico/premium/familiar):");
const esEstudiante = prompt("¿Estudiante? (si/no)") === "si";

if (Number.isNaN(edad)) {
  console.log("Error: edad no válida");
} else if (edad < 12) {
  console.log("No permitido: edad mínima 12 años");
} else {
  let precioBase;

  if (edad <= 17) {
    precioBase = 25;
  } else if (edad <= 59) {
    precioBase = 40;
  } else {
    precioBase = 30;
  }

  let multiplicador;
  switch (plan) {
    case "basico":
      multiplicador = 1;
      break;
    case "premium":
      multiplicador = 1.5;
      break;
    case "familiar":
      multiplicador = 2.2;
      break;
    default:
      console.log("Error: plan desconocido");
      multiplicador = null;
  }

  if (multiplicador !== null) {
    let total = precioBase * multiplicador;

    if (esEstudiante && edad >= 18 && edad <= 25) {
      total = total - 5;
      if (total < 0) total = 0;
    }

    console.log(\`Plan \${plan}, edad \${edad}, total \${total}\`);
  }
}`}
      />
      <PracticeExercise
        prompt="Implementa o adapta el motor de tarifas del gimnasio. Verifica con: edad 20, plan premium, estudiante si → total esperado 55 (40×1.5−5). Explica qué operadores usaste en cada paso."
        hints={[
          "Number.isNaN(edad) antes de rangos",
          "switch (plan) con break en cada case",
          "Descuento: esEstudiante && edad >= 18 && edad <= 25",
          "Math.max(0, total) o if (total < 0) total = 0",
        ]}
        expectedKeywords={["switch", "===", "&&", "Number.isNaN", "break"]}
        successMessage="Excelente. Has integrado validación, rangos con if, valores discretos con switch y descuento condicional con &&."
        rows={6}
      />
    </section>
  );
}
