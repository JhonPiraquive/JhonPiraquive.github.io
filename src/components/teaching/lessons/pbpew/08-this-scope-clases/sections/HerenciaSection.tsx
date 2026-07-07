import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function HerenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herencia con `extends` y `super`"}
      </h2>
      <p className="my-4">
        {
          "Herencia con `extends`: `class Cuadrado extends Rectangulo` — `Cuadrado` hereda métodos y comportamiento de `Rectangulo`."
        }
      </p>
      <p className="my-4">
        {
          "`super`: dentro de una subclase, llama al constructor o métodos de la clase padre. En el constructor hijo, `super(...)` debe ejecutarse antes de usar `this` en la subclase."
        }
      </p>
      <p className="my-4">
        {
          "Azúcar sintáctico sobre prototipos: `class` / `extends` / `super` son una capa legible sobre el modelo de prototipos de JavaScript; en PBPEW basta con la sintaxis moderna."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  class Rectangulo {
    +ancho
    +alto
    +constructor(ancho, alto)
    +area()
  }
  class Cuadrado {
    +constructor(lado)
  }
  Rectangulo <|-- Cuadrado
  note for Cuadrado "super(lado, lado) en constructor"`}
      />
      <CodeFiddle
        language="javascript"
        code={`class Cuadrado extends Rectangulo {
  constructor(lado) {
    super(lado, lado); // inicializa ancho y alto en el padre
  }
}

const c = new Cuadrado(3);
console.log(c.area()); // 9 — hereda area() del padre`}
      />
      <Callout title="Caso real: subclase sin super en CI">
        {
          "class ProductoDigital extends Producto con constructor que asigna this.sku sin llamar super(sku, precio). Los tests fallan con ReferenceError: Must call super constructor. En herencia ES6, el constructor hijo debe invocar super(...) antes de tocar this; los métodos del padre siguen disponibles en la instancia hija."
        }
      </Callout>
      <Callout title="Error frecuente">
        {
          "class B extends A { constructor() { this.x = 1; super(); } } lanza ReferenceError. Orden correcto: primero super(...), luego asignaciones a this en la subclase."
        }
      </Callout>
      <CodeChallenge
        title="Completa la subclase Cuadrado"
        template={`class Cuadrado extends {{blank1}} {
  constructor(lado) {
    {{blank2}}(lado, lado);
  }
}`}
        blanks={[
          { id: "blank1", answer: "Rectangulo", placeholder: "clase padre" },
          { id: "blank2", answer: "super", placeholder: "llamada al constructor padre" },
        ]}
      />
      <PracticeExercise
        prompt="Ordena los pasos de const r = new Rectangulo(2, 3): (a) se crea objeto vacío, (b) se ejecuta constructor con this enlazado, (c) se asignan this.ancho y this.alto, (d) se devuelve la instancia a r, (e) r.area() usa this = r. Indica el orden correcto."
        hints={["Primero new crea el objeto", "Luego constructor, luego asignación, luego devolución"]}
        expectedKeywords={["a", "b", "c", "d", "e"]}
        successMessage="Correcto. Orden: (a) crear objeto → (b) constructor con this → (c) asignar propiedades → (d) devolver a r → (e) r.area() con this = r."
      />
      <p className="my-4">
        {
          "Preview lección 9: estructuras de datos (pilas, colas) suelen modelarse con clases u objetos con métodos que usan `this` para el estado interno."
        }
      </p>
    </section>
  );
}
