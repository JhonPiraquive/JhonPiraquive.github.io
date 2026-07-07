import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Añade PasarelaEfectivo : IPasarelaPago y new Checkout(new PasarelaEfectivo()) sin editar Checkout. Verifica que el foreach de checkouts incluye la nueva pasarela."
        hints={[
          "PasarelaEfectivo implementa Nombre y Cobrar",
          "Checkout ya depende solo de IPasarelaPago",
          "Añade la instancia a la List<Checkout> en Main",
        ]}
        expectedKeywords={["PasarelaEfectivo", "Checkout", "foreach"]}
        successMessage="Correcto. Extensión sin modificar el cliente — polimorfismo en acción."
      />
      <PracticeExercise
        prompt="Implementa ImpuestoFijo con monto constante. Predice salida de imp.Calcular(100) para Iva, ImpuestoCero e ImpuestoFijo(5) antes de ejecutar."
        hints={[
          "ImpuestoFijo devuelve _monto sin usar baseImponible",
          "Iva: 100 * 0.19 = 19",
          "ImpuestoCero: 0",
        ]}
        expectedKeywords={["19", "0", "5", "Calcular"]}
        successMessage="Correcto. Has validado dispatch polimórfico con predicción previa."
      />
      <PracticeExercise
        prompt="Nombra dos anti-patrones que anulan el polimorfismo y dos señales de diseño polimórfico correcto según la lección."
        hints={[
          "Anti: switch/is por tipo en cliente",
          "Anti: new en lugar de override",
          "Bien: contrato + inyección",
          "Bien: List del tipo base/interfaz",
        ]}
        expectedKeywords={["switch", "override", "contrato", "interfaz"]}
        successMessage="Correcto. Polimorfismo requiere contrato estable y dispatch en runtime, no ramas por tipo."
      />
    </section>
  );
}
