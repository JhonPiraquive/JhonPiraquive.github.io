import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un cliente recibe 401 en GET /api/perfil. ¿Debe reintentar la misma petición sin cambios? ¿Y si recibe 403? Justifica con la diferencia entre ambos códigos."
          hints={["401 = no autenticado", "403 = autenticado sin permiso", "¿Cambiar credenciales ayuda?"]}
          expectedKeywords={["401", "403", "token", "permiso"]}
          successMessage="Correcto. Con 401 debe autenticarse (token); con 403 ya está autenticado pero no tiene permiso — reintentar igual no sirve."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué es peligroso usar GET /api/usuarios/5/eliminar para borrar un usuario? Menciona Safe e idempotencia/caché."
          hints={["GET es Safe en teoría pero esta URL modifica", "Los proxies y navegadores pueden cachear GET"]}
          expectedKeywords={["GET", "DELETE", "cache", "Safe"]}
          successMessage="Correcto. GET no debe modificar estado; además puede cachearse y ejecutarse sin intención. Usa DELETE."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un POST crea un usuario y el servidor responde 200 OK sin header Location. ¿Qué código y header debería usar en su lugar?"
          hints={["Código para recurso creado", "Header que indica la URI del nuevo recurso"]}
          expectedKeywords={["201", "Location", "Created"]}
          successMessage="Correcto. 201 Created con header Location apunta al recurso recién creado."
        />
      </div>
    </section>
  );
}
