import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
export function ThisSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"El contexto de ejecución: `this`"}
      </h2>
      <p className="my-4">
        {
          "`this` es una palabra clave que apunta al contexto de ejecución de una función — no es un argumento ni una variable que declares. Su valor depende de cómo se invoca la función, no solo de dónde está escrita."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Método de objeto frente a llamada suelta"}</h3>
      <p className="my-4">
        {
          "Método de objeto: función almacenada como propiedad (`obj.mostrar`). Al llamar `obj.mostrar()`, `this` suele ser `obj` — puedes acceder a otras propiedades con `this.propiedad`."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const caja = {
  valor: 10,
  mostrar() {
    console.log(this.valor);
  },
};

caja.mostrar(); // 10 — this es caja`}
      />
      <p className="my-4">
        {
          "Llamada suelta: al extraer el método y llamarlo sin el objeto delante, `this` puede ser `undefined` (modo estricto) o el objeto global `window` (legacy). Es la causa clásica del bug \"`this` es undefined\"."
        }
      </p>
      <p className="my-4">
        {
          "Modo estricto (`\"use strict\"`): en funciones normales, `this` en llamada suelta es `undefined`; evita contaminar el global por accidente."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`"use strict";

const cuenta = {
  total: 0,
  incrementar() {
    this.total++;
  },
};

cuenta.incrementar(); // OK — this es cuenta

const fn = cuenta.incrementar;
// fn(); // TypeError o this undefined — perdió el contexto`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"`this` en funciones flecha y callbacks"}
      </h3>
      <p className="my-4">
        {
          "`this` en funciones flecha: no tiene su propio `this`; lo hereda léxicamente del ámbito donde se definió la flecha. Ideal para callbacks que deben conservar el `this` del objeto que los creó."
        }
      </p>
      <p className="my-4">
        {"Elige la forma según si necesitas `this` dinámico del llamador o léxico del exterior:"}
      </p>
      <CompareTable
        headers={["Aspecto", "function método", "Flecha =>"]}
        rows={[
          ["this en obj.metodo()", "Suele ser obj", "Léxico (del scope exterior)"],
          ["Callback suelta", "undefined (strict) o global", "Igual que donde se definió"],
          ["Uso típico PBPEW", "Métodos de objeto/clase", "Callbacks dentro de métodos"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`"use strict";

const objeto = {
  etiqueta: "demo",
  metodoNormal() {
    console.log(this.etiqueta);
  },
  metodoFlecha: () => {
    console.log(this.etiqueta); // this léxico — NO es objeto
  },
};

objeto.metodoNormal(); // "demo"
objeto.metodoFlecha(); // undefined (this exterior, p. ej. undefined en módulo)`}
      />
      <p className="my-4">
        {
          "Pérdida de `this` en callbacks: pasar un método directamente a `addEventListener` hace que, al hacer clic, `this` ya no sea el objeto original."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph bien [Correcto]
    B1["() => cuenta.incrementar()"]
    B2["incrementar con this = cuenta"]
    B1 --> B2
  end
  subgraph mal [Incorrecto]
    M1["addEventListener('click', cuenta.incrementar)"]
    M2["this sin cuenta al hacer clic"]
    M1 --> M2
  end`}
      />
      <Callout title="Caso real: contador de clics — el badge no se actualiza">
        {
          "Un panel define const panel = { total: 0, registrar() { this.total++; } } y registra boton.addEventListener(\"click\", panel.registrar). Cada clic incrementa this.total del contexto equivocado (undefined o window), no de panel. El badge ligado a panel.total no cambia. Decisión clave: panel.registrar.bind(panel), () => panel.registrar(), o diseño con flecha que cierre sobre panel."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const cuenta = {
  total: 0,
  incrementar() {
    this.total++;
  },
};

// ❌ Pierde contexto
// boton.addEventListener("click", cuenta.incrementar);

// ✅ Wrapper flecha conserva cuenta del closure; incrementar usa this = cuenta
boton.addEventListener("click", () => cuenta.incrementar());`}
      />
    </section>
  );
}
