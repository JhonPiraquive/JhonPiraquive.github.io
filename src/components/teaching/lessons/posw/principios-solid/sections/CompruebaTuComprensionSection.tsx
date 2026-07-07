import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un AuthService hace new JwtTokenGenerator() hardcodeado. ¿Qué principio viola y cómo lo corregirías?"
          hints={["Abstracción", "Inyección en constructor", "DIP"]}
          expectedKeywords={["DIP", "ITokenGenerator", "inyectar"]}
          successMessage="Correcto. Define ITokenGenerator, inyéctalo en AuthService y elige la implementación al componer la app."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un Notificador tiene if (canal === 'email' | 'sms' | 'push'). ¿Qué principio aplicas al añadir WhatsApp sin editar el if central?"
          hints={["Interface por canal", "Nueva clase implementa contrato", "OCP"]}
          expectedKeywords={["OCP", "interface", "CanalNotificacion"]}
          successMessage="Correcto. OCP extiende con nuevas clases; el procesador central solo delega."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Una clase Usuario valida email, ejecuta INSERT y envía SMTP. Nombra al menos dos clases del refactor SRP."
          hints={["Entidad vs persistencia", "Servicio de notificaciones", "Repositorio"]}
          expectedKeywords={["SRP", "UsuarioRepository", "EmailService"]}
          successMessage="Correcto. SRP separa entidad, repositorio y servicio de notificaciones por motivo de cambio."
        />
      </div>
    </section>
  );
}
