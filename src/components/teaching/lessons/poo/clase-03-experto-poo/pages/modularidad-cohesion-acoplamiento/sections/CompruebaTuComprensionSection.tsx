import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Crea RepositorioPedidosSql (simulado) y úsalo con ServicioPedidos sin cambiar esa clase."
        hints={[
          "RepositorioPedidosSql implementa IRepositorioPedidos",
          "ServicioPedidos recibe contrato por constructor",
          "Solo Main cambia la instancia concreta",
        ]}
        expectedKeywords={["RepositorioPedidosSql", "ServicioPedidos", "IRepositorioPedidos"]}
        successMessage="Correcto. Modularidad + DIP: infra intercambiable en el borde."
      />
      <PracticeExercise
        prompt="Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen."
        hints={[
          "Una responsabilidad por clase de dominio",
          "Nombres que describen el rol",
          "Sin mezclar formateo con impuestos",
        ]}
        expectedKeywords={["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail", "cohesión"]}
        successMessage="Correcto. Alta cohesión: cada clase un objetivo."
      />
      <PracticeExercise
        prompt="Recorre el checklist en un fragmento con new PdfGenerator() dentro de ReporteService. ¿Qué ítems fallan y cómo los corriges?"
        hints={[
          "DIP y acoplamiento — depende de concreto",
          "Introducir IReporteRenderer",
          "Inyectar por constructor; elegir renderer en Main",
        ]}
        expectedKeywords={["DIP", "acoplamiento", "IReporteRenderer", "inyección"]}
        successMessage="Correcto. El checklist detecta acoplamiento alto y guía el refactor."
      />
    </section>
  );
}
