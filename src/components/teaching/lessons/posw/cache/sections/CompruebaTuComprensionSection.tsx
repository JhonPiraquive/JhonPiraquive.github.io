import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué header HTTP usarías para un token de sesión en GET /api/v1/usuario/me y por qué?"
          hints={["no-store", "Datos sensibles", "No compartir entre usuarios"]}
          expectedKeywords={["no-store", "private", "sensible", "token"]}
          successMessage="Correcto. no-store (y private) evita que proxies o navegador persistan datos de sesión."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Actualizas el precio de un producto en BD pero los usuarios siguen viendo el precio viejo. ¿Qué falló en la estrategia de caché y cómo lo corriges?"
          hints={["Clave Redis producto:42", "Invalidación event-based", "del al UPDATE"]}
          expectedKeywords={["invalidar", "Redis", "del", "TTL"]}
          successMessage="Correcto. Falta invalidar la clave al actualizar; await client.del(`producto:${id}`) tras el UPDATE."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo elegirías CDN vs Redis server-side para acelerar GET /api/v1/articulos con 50k req/hora?"
          hints={["CDN = assets estáticos cerca del usuario", "Redis = respuestas API dinámicas", "80% mismos artículos"]}
          expectedKeywords={["Redis", "servidor", "API", "CDN", "estático"]}
          successMessage="Correcto. Redis cache-aside para la API dinámica; CDN para imágenes/assets; navegador con headers para estáticos."
        />
      </div>
    </section>
  );
}
