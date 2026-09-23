import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Verifica en código o por escrito antes del miniquiz."}</p>
      <PracticeExercise
        prompt="Añade PasarelaNequi y un checkout extra al foreach. ¿Cuántas líneas cambiaron dentro de la clase Checkout?"
        hints={[
          "PasarelaNequi implementa Nombre y Cobrar",
          "Checkout ya depende de IPasarelaPago",
          "Cero edits en Checkout si el diseño es estable",
        ]}
        expectedKeywords={["PasarelaNequi", "Checkout", "cero"]}
        successMessage="Correcto. Extensión en implementación y composición, no en el cliente."
      />
      <PracticeExercise
        prompt="Predice CalcularDescuento para Libro(20000) y Gadget(20000). Luego ejecuta el foreach del catálogo."
        hints={["10% vs 5%", "2000 y 1000", "override en cada derivada"]}
        expectedKeywords={["2000", "1000", "CalcularDescuento"]}
        successMessage="Correcto. Dispatch polimórfico en herencia."
      />
      <PracticeExercise
        prompt="Nombra dos anti-patrones que matan el polimorfismo y una señal de que sí lo estás usando bien."
        hints={[
          "switch/is en Checkout",
          "new en lugar de override",
          "Lista del tipo contrato + inyección",
        ]}
        expectedKeywords={["switch", "override", "contrato"]}
        successMessage="Correcto. Contrato estable + override, no ramas por tipo."
      />
    </section>
  );
}
