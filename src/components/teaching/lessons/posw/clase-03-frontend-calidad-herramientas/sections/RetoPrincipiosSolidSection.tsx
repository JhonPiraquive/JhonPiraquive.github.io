import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoPrincipiosSolidSection() {
  return (
    <section>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">
        {"Reto integrador: refactor de módulo de usuarios"}
      </h3>
      <p className="my-4 font-semibold">{"Refactoriza el módulo de usuarios de una API REST"}</p>
      <p className="my-4">{"Código legacy recibido:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usuario con validación, INSERT SQL y envío SMTP."}</li>
        <li>{"AuthService con new JwtTokenGenerator() hardcodeado."}</li>
        <li>{"Notificador con if (canal === 'email' | 'sms' | 'push')."}</li>
      </ul>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Separa en entidad, repositorio, EmailService (SRP)."}</li>
        <li>{"Añade SmsNotificador sin tocar código existente (OCP)."}</li>
        <li>{"Define ITokenGenerator e inyéctalo en AuthService (DIP)."}</li>
        <li>{"Escribe un test unitario del servicio con mock del repositorio."}</li>
        <li>{"Documenta qué NO refactorizarías y por qué (evitar sobre-ingeniería)."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: responsabilidades separadas, extensión de canal sin editar if central, servicio testeable sin BD, justificación pragmática."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto: lista las clases/interfaces que crearías y qué parte del legacy dejarías sin tocar."
        hints={[
          "UsuarioRepository + EmailService",
          "interface CanalNotificacion para OCP",
          "Mock de IUsuarioRepository en test",
        ]}
        expectedKeywords={["SRP", "OCP", "DIP", "mock"]}
        successMessage="Excelente. Se ha aplicado SOLID de forma pragmática sin sobre-ingeniería."
        rows={6}
      />
    </section>
  );
}
