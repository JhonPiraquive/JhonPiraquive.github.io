import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function GenericosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Genéricos"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Genéricos <T>: código reutilizable que conserva información de tipo."}</li>
        <li>{"Funciones genéricas: function primerElemento<T>(arr: T[]): T | undefined."}</li>
        <li>{"Clases genéricas: repositorios, cachés, wrappers de API."}</li>
        <li>{"Restricciones: T extends { id: number } limita el tipo aceptado."}</li>
      </ul>
      <CodeFiddle
        language="typescript"
        title="Repositorio genérico"
        code={`class Repositorio<T extends { id: number }> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  buscarPorId(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

const repoProductos = new Repositorio<Producto>();`}
      />
      <CodeFiddle
        language="typescript"
        title="Función genérica"
        code={`function primerElemento<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const primero = primerElemento([1, 2, 3]); // infiere number
const texto = primerElemento(["a", "b"]);   // infiere string`}
      />
      <CodeChallenge
        title="Completa la firma genérica"
        template="function primerElemento<T>(arr: T[]): {{blank1}}"
        blanks={[{ id: "blank1", answer: "T | undefined", placeholder: "tipo de retorno" }]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="¿Qué tipo infiere TypeScript en `primerElemento([1, 2, 3])`? ¿Por qué los genéricos son útiles frente a usar `any`?"
        hints={["Inferencia automática", "Conserva el tipo del array", "number"]}
        expectedKeywords={["number", "genérico", "inferencia", "tipo"]}
        successMessage="Correcto. Infiere `number` y mantiene type safety sin perder flexibilidad."
      />
    </section>
  );
}
