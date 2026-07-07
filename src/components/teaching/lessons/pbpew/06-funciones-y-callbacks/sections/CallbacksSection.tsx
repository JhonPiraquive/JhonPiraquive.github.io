import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CallbacksSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Callbacks en JavaScript"}</h2>
      <p className="my-4">
        {
          "Un callback es una función que pasas como argumento para que otra función la ejecute más tarde o en un momento concreto (cada iteración de un bucle, tras un clic, tras un temporizador)."
        }
      </p>
      <p className="my-4">
        {
          "Una función de orden superior (HOF, básico) recibe otra función como argumento o devuelve una función. Ejemplo: `repetir(n, fn)` ejecuta `fn` varias veces."
        }
      </p>
      <p className="my-4">
        {
          "Preview lección 7: métodos de array como `.forEach`, `.map` y `.filter` reciben callbacks; esta lección prepara ese patrón."
        }
      </p>
      <p className="my-4">{"La función de orden superior decide cuándo invocar el callback:"}</p>
      <MermaidDiagram
        chart={`flowchart TB
  R["repetir(3, fn)"]
  R --> L["bucle i = 0..2"]
  L --> C1["fn(0)"]
  L --> C2["fn(1)"]
  L --> C3["fn(2)"]
  C1 --> O["salida: paso 0..."]
  C2 --> O
  C3 --> O`}
      />
      <CodeFiddle
        language="javascript"
        code={`function repetir(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

repetir(3, (i) => console.log("paso", i));
// paso 0
// paso 1
// paso 2`}
      />
      <CodeChallenge
        title="Completa el código — función repetir"
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
      <p className="my-4">
        {
          "Callbacks en el navegador: `addEventListener(\"click\", miCallback)`, `setTimeout(fn, 1000)` — el motor o la API “llaman de vuelta” tu función cuando ocurre el evento o expira el tiempo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Registrar callback vs ejecutarlo al instante"}
      </h3>
      <StepReveal
        title="Registrar callback vs ejecutarlo al instante"
        steps={[
          {
            title: "Correcto — pasar referencia",
            content:
              "boton.addEventListener('click', alClic) — se registra la función. El navegador la ejecutará cuando el usuario haga clic.",
          },
          {
            title: "Usuario hace clic",
            content: "Ocurre el evento click en el botón.",
          },
          {
            title: "Se ejecuta alClic",
            content:
              "El motor invoca la función registrada; tu lógica corre en respuesta al evento.",
          },
          {
            title: "Incorrecto — ejecutar al registrar",
            content:
              "boton.addEventListener('click', alClic()) — los paréntesis invocan alClic al cargar la página. Se pasa el retorno (a menudo undefined), no la función.",
          },
          {
            title: "Consecuencia del error",
            content:
              "La acción corre al cargar (guardado no deseado) y el clic posterior no funciona porque onclick quedó con undefined.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  subgraph bien [Correcto: pasar referencia]
    B1["addEventListener('click', alClic)"]
    B2["Usuario hace clic"]
    B3["Se ejecuta alClic"]
    B1 --> B2 --> B3
  end
  subgraph mal [Incorrecto: ejecutar al registrar]
    M1["addEventListener('click', alClic())"]
    M2["alClic corre al cargar"]
    M3["onclick queda undefined"]
    M1 --> M2 --> M3
  end`}
      />
      <Callout title="Caso real: botón Guardar al cargar la página">
        {
          "En un panel admin registran boton.onclick = guardarCambios();. Al cargar se dispara un guardado no deseado y el clic posterior no funciona porque onclick recibió undefined. Lección: pasar referencia (guardarCambios o () => guardarCambios()) cuando quieres ejecutar después, en respuesta a un evento."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const boton = document.querySelector("#enviar");
boton.addEventListener("click", function () {
  console.log("Clic registrado — callback ejecutado");
});
// Se pasa la función; el navegador la llama cuando hay clic`}
      />
      <CodeFiddle
        language="javascript"
        code={`function alClic() {
  console.log("Guardado");
}

// ❌ Mal — ejecuta al instante
// boton.onclick = alClic();

// ✅ Bien — referencia para más tarde
// boton.onclick = alClic;`}
      />
      <PracticeExercise
        prompt="¿Por qué addEventListener('click', manejarClick()) suele ser incorrecto frente a addEventListener('click', manejarClick)? Explica qué ocurre con los paréntesis."
        hints={["() invoca la función de inmediato", "addEventListener espera una referencia de función"]}
        expectedKeywords={["paréntesis", "referencia", "undefined", "inmediato"]}
        successMessage="Correcto. manejarClick() ejecuta al registrar y pasa el retorno (undefined); manejarClick pasa la función para que el navegador la llame en el clic."
      />
    </section>
  );
}
