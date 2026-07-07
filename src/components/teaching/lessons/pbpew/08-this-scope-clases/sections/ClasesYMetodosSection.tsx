import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ClasesYMetodosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clases ES6: constructor y métodos de instancia"}
      </h2>
      <p className="my-4">
        {
          "En la lección 7 viste objetos literales `{ clave: valor, metodo() {} }`. Las clases ES6 (`class`) ofrecen sintaxis clara para plantillas de objetos con constructor y métodos compartidos en el prototipo."
        }
      </p>
      <p className="my-4">
        {
          "`class Nombre { }`: declaración de una \"molde\" para instancias. No es un objeto en sí: hay que usar `new` para crear instancias."
        }
      </p>
      <p className="my-4">
        {
          "`constructor`: método especial que se ejecuta al hacer `new Clase(args)`. Inicializa propiedades de instancia con `this.prop = valor`."
        }
      </p>
      <p className="my-4">
        {
          "`this` en clases: dentro del constructor y métodos de instancia, `this` es la instancia recién creada o la que recibe la llamada (`r.area()` → `this` es `r`)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Instanciar con `new`: flujo del constructor"}
      </h3>
      <StepReveal
        title="Flujo: new Rectangulo(4, 5)"
        steps={[
          {
            title: "1. new Rectangulo(4, 5)",
            content:
              "JavaScript crea un objeto vacío y lo prepara para ser instancia de Rectangulo.",
          },
          {
            title: "2. Enlazar this",
            content: "this apunta al objeto recién creado dentro del constructor.",
          },
          {
            title: "3. Ejecutar constructor",
            content: "constructor(ancho, alto) asigna this.ancho = ancho y this.alto = alto.",
          },
          {
            title: "4. Devolver instancia",
            content: "La instancia se asigna a const r = ...",
          },
          {
            title: "5. Llamar método",
            content: "r.area() — dentro de area(), this es r; devuelve this.ancho * this.alto.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  N["new Rectangulo(4, 5)"]
  N --> O["Crear objeto"]
  O --> C["constructor(ancho, alto)"]
  C --> T["this.ancho = ancho\\nthis.alto = alto"]
  T --> R["Instancia r"]
  R --> A["r.area() → this es r"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  area() {
    return this.ancho * this.alto;
  }
}

const r = new Rectangulo(4, 5);
console.log(r.area()); // 20`}
      />
      <Callout title="Error frecuente">
        {
          "const r = Rectangulo(4, 5) sin new falla o produce comportamiento inesperado. Con clases ES6 suele lanzar TypeError: Class constructor Rectangulo cannot be invoked without 'new'. Instancia siempre con new Rectangulo(...)."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flechas dentro de métodos de clase"}</h3>
      <p className="my-4">
        {"Flecha dentro de método de clase: útil en callbacks internos para conservar `this` de la instancia."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`class Lista {
  constructor() {
    this.items = [];
  }
  agregar(valor) {
    this.items.push(valor);
  }
  cadaUno(fn) {
    this.items.forEach((item) => fn(item, this)); // this de Lista disponible
  }
}`}
      />
      <p className="my-4">
        {
          "Cuándo usar flecha en métodos: evita flecha como método de instancia si necesitas `this` dinámico de la instancia — la flecha no enlaza `this` al objeto que llama. Úsala en callbacks dentro de métodos (`items.forEach((x) => this.procesar(x))`)."
        }
      </p>
      <CodeChallenge
        title="Completa el código: clase Circulo"
        template={`class Circulo {
  constructor(radio) {
    this.radio = {{blank1}};
  }
  diametro() {
    return this.radio * {{blank2}};
  }
}

const c = new Circulo(5);
console.log(c.diametro()); // 10`}
        blanks={[
          { id: "blank1", answer: "radio", placeholder: "parámetro del constructor" },
          { id: "blank2", answer: "2", placeholder: "factor del diámetro" },
        ]}
      />
      <PracticeExercise
        prompt="Crea un objeto contador con valor: 0 y método subir() que haga this.valor++. Llama contador.subir() dos veces y muestra contador.valor. Pega tu código o indica el resultado."
        hints={["Objeto literal con método abreviado", "this.valor++ dentro de subir"]}
        expectedKeywords={["valor", "2", "subir", "this"]}
        successMessage="Correcto. Tras dos llamadas a subir(), contador.valor debe ser 2."
      />
    </section>
  );
}
