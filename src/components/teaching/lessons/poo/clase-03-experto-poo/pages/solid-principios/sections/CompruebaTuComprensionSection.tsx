import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Relaciona cada ejercicio con la letra SOLID que corresponda."}</p>
      <PracticeExercise
        prompt="EnvioGratis : IEnvio sin editar CalculadoraEnvioPedido. ¿Qué letra SOLID demuestras?"
        hints={["Nueva clase bajo contrato", "Cliente estable", "Open/Closed"]}
        expectedKeywords={["OCP", "EnvioGratis", "extensión"]}
        successMessage="Correcto. OCP: extender sin modificar el orquestador."
      />
      <PracticeExercise
        prompt="Gadget que lanza en CalcularDescuento vs pingüino que lanza en Volar. ¿Mismo principio?"
        hints={["Sustituibilidad en foreach", "Liskov", "Contrato semántico"]}
        expectedKeywords={["LSP", "Liskov", "Producto"]}
        successMessage="Correcto. LSP es sobre significado, no solo sintaxis."
      />
      <PracticeExercise
        prompt="PedidoService monolítico: nombra violaciones SRP y DIP y dos clases del refactor."
        hints={["Mezcla crear y notificar", "Sin IRepositorio/INotificador", "CreadorPedido, OrquestadorPedido"]}
        expectedKeywords={["SRP", "DIP", "CreadorPedido"]}
        successMessage="Correcto. Monolito = muchos motivos de cambio + detalles acoplados."
      />
    </section>
  );
}
