import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="¿Por qué Moto puede usar Arrancar() de la base sin override, pero Carro define el suyo? ¿Qué decide el programador?"
        hints={[
          "override solo cuando el comportamiento debe ser distinto",
          "Moto acepta el mensaje genérico de Vehiculo",
          "Carro necesita un mensaje específico del dominio",
        ]}
        expectedKeywords={["override", "especializ", "comportamiento"]}
        successMessage="Correcto. Override es opcional: se usa cuando la derivada necesita comportamiento distinto; si la implementación base sirve, se hereda tal cual."
      />
      <PracticeExercise
        prompt="Nombra dos señales de mal uso de herencia y dos de buen uso según la lección."
        hints={[
          "Mal: heredar solo para copiar código",
          "Mal: jerarquías profundas o romper expectativas",
          "Bien: relación es un estable",
          "Bien: sustituibilidad sin romper contratos",
        ]}
        expectedKeywords={["composición", "es un", "acoplamiento", "sustituibilidad"]}
        successMessage="Correcto. Buen uso = es un claro y sustituible; mal uso = copiar código, jerarquías forzadas o contratos rotos."
      />
      <PracticeExercise
        prompt='Ordena mentalmente el flujo al construir new Carro("ABC-123"): (a) constructor Carro, (b) base("ABC-123"), (c) asignación de Placa en Vehiculo, (d) objeto listo. ¿Cuál es el orden correcto?'
        hints={[
          "Primero entra el constructor de la derivada",
          "base delega al constructor de la base",
          "La base valida y asigna antes de terminar la derivada",
        ]}
        expectedKeywords={["base", "constructor", "placa"]}
        successMessage="Correcto. Orden: (a) → (b) → (c) → (d). El constructor de Carro delega en base; Vehiculo fija Placa; luego el objeto está listo."
      />
    </section>
  );
}
