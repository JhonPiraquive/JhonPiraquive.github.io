import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ResponsabilidadesBackendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Responsabilidades del backend"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Persistencia: modelo de datos, consultas, transacciones."}</li>
        <li>{"Autenticación y autorización: JWT, OAuth, permisos por rol."}</li>
        <li>
          {
            "Lógica de negocio: reglas del dominio (precios, validaciones, flujos de estado)."
          }
        </li>
        <li>{"Exposición de APIs: endpoints REST/GraphQL/gRPC."}</li>
        <li>
          {"Procesamiento en background: colas, emails, reportes, imágenes."}
        </li>
        <li>{"Integraciones externas: pagos, email, SMS, mapas, IA."}</li>
      </ul>
      <MermaidDiagram
        title="Capas y flujo de una petición backend"
        description="Recorrido del request desde el controlador hasta datos e integraciones."
        chart={`flowchart LR
  C[Cliente] -->|Request HTTP| CT[Controlador]
  CT --> S[Servicio y reglas]
  S --> R[Repositorio]
  R --> DB[(Base de datos)]
  S --> I[Integraciones externas]
  S --> W[Colas y workers]
  DB --> R --> S --> CT -->|Response JSON| C`}
      />

      <CompareTable
        headers={["Responsabilidad", "Qué hace", "Capa típica", "Ejemplo"]}
        rows={[
          [
            "Persistencia",
            "Guardar y recuperar datos",
            "Modelo / Repositorio",
            "SELECT habitaciones disponibles",
          ],
          [
            "Auth",
            "Verificar identidad y permisos",
            "Middleware + Servicio",
            "Validar JWT en cada request",
          ],
          [
            "Lógica de negocio",
            "Reglas del dominio",
            "Servicio",
            "Calcular precio con descuento por temporada",
          ],
          [
            "Exposición de APIs",
            "Contrato HTTP para clientes",
            "Rutas + Controlador",
            "GET /api/v1/cursos",
          ],
          [
            "Background",
            "Tareas asíncronas",
            "Worker / Cola",
            "Enviar email de confirmación",
          ],
          [
            "Integraciones",
            "Servicios de terceros",
            "Servicio / Adaptador",
            "Stripe, SendGrid, Google Maps",
          ],
        ]}
      />
      <Callout title="Caso real: banco con lógica en el controlador">
        {
          "Un banco mezcla validación de montos y límites diarios en el controlador REST. Un cambio de regla rompe tres endpoints. Decisión: extraer lógica a TransferenciaService; controladores solo orquestan HTTP; tests unitarios en la capa de servicio."
        }
      </Callout>
    </section>
  );
}
