import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: sistema de flota y alertas"}
      </h2>
      <p className="my-4">
        {
          "Un taller de POO pide un prototipo en consola (.NET) que combine herencia bien aplicada y composición donde corresponda."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Dominio vehículos"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Clase base Vehiculo con Placa, constructor validado, virtual void Arrancar() y void Parar()."
          }
        </li>
        <li>{"Derivadas Carro, Moto y Camion con override de Arrancar() (mensajes distintos y creíbles)."}</li>
        <li>{"Método que reciba List<Vehiculo> y ejecute Arrancar() y luego Parar() en cada elemento."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Alertas (sin herencia entre canales)"}</p>
      <ol className="my-4 list-decimal pl-6" start={4}>
        <li>{"Interfaz INotificador con Enviar(string)."}</li>
        <li>{"Implementaciones NotificadorEmail, NotificadorSms, NotificadorWhatsApp."}</li>
        <li>{"Clase Alarma con constructor que recibe INotificador y método Disparar()."}</li>
        <li>{"En Main, crea al menos dos alarmas con notificadores distintos y dispara ambas."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Criterio de diseño"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>
          {
            "En un comentario o párrafo breve, justifica por qué no hiciste AlarmaEmail : AlarmaBase y por qué Camion sí hereda de Vehiculo."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila en dotnet run; cada vehículo imprime su Arrancar(); Parar() funciona sin override; nuevos notificadores se añaden sin editar Alarma; la justificación distingue “es un” vs “tiene un”."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la justificación de diseño (Parte C): ¿por qué Camion hereda de Vehiculo pero los canales de alerta no heredan de AlarmaBase?"
        hints={[
          "Camion es un Vehiculo — relación es un estable",
          "Email/SMS/WhatsApp no son tipos de Alarma — son estrategias de envío",
          "INotificador permite extender sin modificar Alarma",
        ]}
        expectedKeywords={["es un", "tiene un", "composición", "interfaz"]}
        successMessage="Excelente. Has distinguido herencia (especialización) de composición (estrategia intercambiable)."
        rows={6}
      />
    </section>
  );
}
