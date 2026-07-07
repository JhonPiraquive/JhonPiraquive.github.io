import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿En qué se diferencia una API pública de una API privada? Da un ejemplo de cada una y un riesgo si se confunden."
          hints={["Pública = desarrolladores externos", "Privada = solo organización", "Riesgo = exposición accidental"]}
          expectedKeywords={["pública", "privada", "API key", "interna"]}
          successMessage="Correcto. Pública es accesible con registro/key (Stripe); privada solo interna (microservicios). Exponer una privada al público es un riesgo grave."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un partner reporta que su integración dejó de funcionar tras un cambio en el formato JSON de POST /api/pagos. ¿Qué buena práctica de diseño faltaba desde el inicio?"
          hints={["Cambios breaking sin aviso", "Prefijo en la ruta", "v1 vs v2"]}
          expectedKeywords={["versionado", "v1", "v2", "deprecación"]}
          successMessage="Correcto. Versionar desde el lanzamiento (/api/v1/pagos) permite publicar cambios breaking en /api/v2/ sin romper clientes existentes."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué herramienta usarías para probar un endpoint en un script de CI/CD y cuál para que un nuevo desarrollador explore la API visualmente?"
          hints={["CLI vs GUI", "Automatización vs exploración"]}
          expectedKeywords={["curl", "Postman", "Swagger"]}
          successMessage="Correcto. curl en CI/CD; Postman o Swagger UI para exploración manual y documentación interactiva."
        />
      </div>
    </section>
  );
}
