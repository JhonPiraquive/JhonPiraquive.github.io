import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Describe un caso de over-fetching con REST y cómo GraphQL lo resolvería con una query de solo 3 campos concretos."
          hints={["GET devuelve más de lo necesario", "GraphQL pide solo nombre, email, avatar"]}
          expectedKeywords={["over-fetching", "GraphQL", "campos"]}
          successMessage="Correcto. REST devuelve forma fija; GraphQL permite pedir exactamente los campos requeridos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué anti-patrón ocurre si expones gRPC directamente a la app móvil sin gateway? ¿Qué alternativas existen?"
          hints={["Browsers y muchas apps no hablan gRPC nativo", "gRPC-Web, REST gateway"]}
          expectedKeywords={["gRPC", "gateway", "gRPC-Web", "REST"]}
          successMessage="Correcto. El cliente no consume gRPC nativo; usa gateway REST/GraphQL o gRPC-Web."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un sistema de trading necesita precios en tiempo real en el dashboard. ¿REST polling cada 5 s, GraphQL o WebSockets? Justifica."
          hints={["Latencia y carga del servidor", "Conexión persistente push"]}
          expectedKeywords={["WebSockets", "tiempo real", "polling"]}
          successMessage="Correcto. WebSockets evita polling repetitivo; el servidor empuja actualizaciones al instante."
        />
      </div>
    </section>
  );
}
