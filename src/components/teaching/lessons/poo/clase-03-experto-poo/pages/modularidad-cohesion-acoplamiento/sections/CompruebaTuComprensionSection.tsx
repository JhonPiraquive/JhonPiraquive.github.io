import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Relaciona cada respuesta con modularidad, cohesión o acoplamiento."}</p>
      <PracticeExercise
        prompt="RepositorioPedidosSql con ServicioPedidos sin editar la clase servicio. ¿Qué dos ideas de diseño demuestras?"
        hints={["Contrato IRepositorioPedidos", "Main elige concreto", "Modularidad + DIP"]}
        expectedKeywords={["modularidad", "DIP", "Main"]}
        successMessage="Correcto. Infra intercambiable en el borde."
      />
      <PracticeExercise
        prompt="Divide UtilidadesTienda en tres clases. ¿Qué sube: cohesión, acoplamiento o ambos?"
        hints={["Cada clase un objetivo", "Menos mezcla interna", "Cohesión sube"]}
        expectedKeywords={["cohesión", "FormateoSku", "CalculadoraIva"]}
        successMessage="Correcto. Cohesión alta dentro de cada módulo/clase."
      />
      <PracticeExercise
        prompt="ReporteVentasDia con new GeneradorPdf() adentro: ¿qué ítems del checklist fallan y fix mínimo?"
        hints={["DIP y acoplamiento", "IReporteVentasRenderer", "Inyección + Main"]}
        expectedKeywords={["DIP", "acoplamiento", "IReporteVentasRenderer"]}
        successMessage="Correcto. El checklist guía el refactor mínimo."
      />
    </section>
  );
}
