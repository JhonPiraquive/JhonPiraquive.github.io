import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué es un error de diseño que la app móvil se conecte directo a PostgreSQL en producción?"
          hints={["Credenciales", "Capa de API", "Seguridad"]}
          expectedKeywords={["credenciales", "expuesta", "API", "seguridad"]}
          successMessage="Correcto. Expone credenciales y la BD; la API centraliza lógica y protege los datos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Enumera en orden los primeros cuatro pasos al escribir https://ejemplo.com/productos en el navegador, desde DNS hasta la petición HTTP."
          hints={["DNS resuelve IP", "TCP puerto 443", "TLS cifra", "GET /productos"]}
          expectedKeywords={["DNS", "TCP", "TLS", "HTTP"]}
          successMessage="Correcto. Sin resolución DNS no hay IP; sin TCP/TLS no hay canal; el renderizado ocurre al final."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuál es la ventaja principal de 3 capas frente a 2 capas cuando el cliente accedía directo a MySQL?"
          hints={["BD detrás de API", "Pool de conexiones", "Credenciales"]}
          expectedKeywords={["API", "BD", "expuesta", "seguridad"]}
          successMessage="Correcto. La API intermedia protege la BD, centraliza lógica y evita exponer credenciales al cliente."
        />
      </div>
    </section>
  );
}
