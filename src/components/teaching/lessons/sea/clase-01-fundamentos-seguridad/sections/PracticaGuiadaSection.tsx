import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada ejercicio corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <PracticeExercise
        title="Historia: seguridad por diseño"
        prompt="Una plataforma de reservas creció de 200 a 50.000 usuarios con contraseñas simples, un panel de administración sin segundo factor y sin registros de auditoría. ¿Qué enfoque de seguridad se omitió desde el inicio?"
        hints={["La seguridad no se agrega al final como un producto.", "Es lo opuesto a la «seguridad por oscuridad»."]}
        expectedKeywords={["por diseño", "por capas", "proceso"]}
      />
      <PracticeExercise
        title="Hackers: vector y vulnerabilidad"
        prompt="¿En qué se diferencia una vulnerabilidad de un vector de ataque?"
        hints={["Una es la debilidad; el otro es la forma de llegar a ella.", "Analogía: una puerta sin cerradura frente al camino que lleva hasta esa puerta."]}
        expectedKeywords={["camino", "medio", "canal", "ruta", "vía"]}
      />
      <PracticeExercise
        title="CIA: principio roto"
        prompt="El correo de un cliente se modifica en tránsito para cambiar la cuenta bancaria de pago. ¿Qué principio se rompió principalmente?"
        hints={["Los datos cambiaron sin autorización.", "Es el principio que protege contra la modificación."]}
        expectedKeywords={["integridad"]}
      />
      <PracticeExercise
        title="Phishing: señales y verificación"
        prompt="Un mensaje pide «verificar la cuenta en 30 minutos» con un enlace. Nombrar una señal de alerta y una forma segura de verificar la solicitud."
        hints={["Mirar el tono del mensaje y el dominio del remitente.", "La verificación se hace por un canal oficial, sin usar el enlace recibido."]}
        expectedKeywords={["urgencia", "dominio", "remitente", "canal oficial", "sin hacer clic", "llamar"]}
      />
    </section>
  );
}
