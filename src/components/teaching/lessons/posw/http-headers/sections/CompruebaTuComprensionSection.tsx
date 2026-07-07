import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Dibuja o describe el flujo preflight CORS para PUT /api/perfil desde https://app.frontend.com hacia https://api.backend.com. Incluye headers clave en OPTIONS y en la respuesta."
          hints={[
            "OPTIONS primero",
            "Origin y Access-Control-Request-Method",
            "Allow-Origin, Allow-Methods, Allow-Headers",
          ]}
          expectedKeywords={["OPTIONS", "Origin", "Access-Control", "PUT"]}
          successMessage="Correcto. OPTIONS con Origin y Request-Method; servidor responde Allow-Origin, Allow-Methods y Allow-Headers; luego PUT real."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué una app móvil nativa no sufre bloqueo CORS pero sí necesita Authorization y Content-Type en POST?"
          hints={[
            "CORS es política del navegador",
            "El servidor sigue necesitando saber formato y credenciales",
          ]}
          expectedKeywords={["CORS", "navegador", "Content-Type", "Authorization"]}
          successMessage="Correcto. CORS no aplica fuera del navegador; pero el servidor requiere Content-Type para parsear JSON y Authorization para autenticar."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué header de respuesta mitiga clickjacking y qué valor recomendarías para una app que no debe embeberse en iframes externos?"
          hints={["Empieza con X-Frame", "Valores: DENY o SAMEORIGIN"]}
          expectedKeywords={["X-Frame-Options", "DENY"]}
          successMessage="Correcto. X-Frame-Options: DENY impide que otras páginas enmarquen tu aplicación."
        />
      </div>
    </section>
  );
}
