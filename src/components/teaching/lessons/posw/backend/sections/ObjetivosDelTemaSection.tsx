import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre qué es el backend, sus responsabilidades, frameworks disponibles, cómo elegir stack y ejemplos de código en capas."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir backend (server-side) como la capa que ejecuta en el servidor, gestiona lógica de negocio, persistencia, autenticación e integraciones, y expone APIs al frontend."
          }
        </li>
        <li>
          {
            "Enumerar las seis responsabilidades del backend: persistencia, auth, lógica de negocio, exposición de APIs, procesamiento en background e integraciones externas."
          }
        </li>
        <li>
          {
            "Describir la arquitectura en capas (rutas → controladores → servicios → modelos) y su relación con DB, caché y servicios externos."
          }
        </li>
        <li>
          {
            "Comparar frameworks populares (Express, NestJS, FastAPI, Django, Spring Boot, Laravel, ASP.NET Core) por lenguaje, curva de aprendizaje y uso típico."
          }
        </li>
        <li>
          {
            "Aplicar el árbol de decisión para elegir stack backend según experiencia del equipo, tipo de proyecto y criterios de rendimiento, ecosistema y mercado laboral."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección frontend: capa cliente, SPA y consumo de APIs."}</li>
        <li>{"Lección apis: contrato API, endpoints y diseño REST básico."}</li>
        <li>{"Familiaridad con HTTP y JSON."}</li>
      </ul>
      <Callout title="Backend ≠ solo API">
        {
          "La API es la interfaz expuesta; el backend incluye lógica interna, base de datos, colas y procesos que el cliente nunca ve. Diseñar solo endpoints sin capas lleva a código frágil."
        }
      </Callout>
    </section>
  );
}
