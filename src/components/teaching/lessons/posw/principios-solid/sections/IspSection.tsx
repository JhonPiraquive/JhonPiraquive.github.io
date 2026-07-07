import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const ISP_EJEMPLO = `interface Trabajable {
  trabajar(): void;
}

interface Humano extends Trabajable {
  comer(): void;
  dormir(): void;
}

class Robot implements Trabajable {
  trabajar(): void { console.log("Procesando..."); }
  // No obligado a comer() ni dormir()
}`;

export function IspSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"ISP: interfaces pequeñas y específicas"}
      </h2>
      <p className="my-4">
        {"El cliente no debe depender de métodos que no usa. Interfaces pequeñas y específicas."}
      </p>
      <CodeFiddle language="typescript" title="Trabajable vs Humano" code={ISP_EJEMPLO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Fat interface"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Trabajador con comer() y dormir() obliga al Robot a métodos vacíos o excepciones."}
        </li>
        <li>{"ISP divide por capacidad: Trabajable vs Humano."}</li>
      </ul>
    </section>
  );
}
