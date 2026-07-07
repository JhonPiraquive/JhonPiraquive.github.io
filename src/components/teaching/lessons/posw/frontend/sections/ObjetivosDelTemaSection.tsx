import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección presenta el frontend como capa de presentación e interacción: qué ejecuta en el navegador, con qué tecnologías base, qué frameworks existen y cómo elegir uno según criterios reales del proyecto."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir frontend (client-side) como la capa que el usuario ve e interactúa en el navegador, ejecutada en su dispositivo y separada del backend."
          }
        </li>
        <li>
          {
            "Enumerar las responsabilidades del frontend moderno: renderizar UI, consumir APIs, manejar estado, routing SPA y optimizar UX (rendimiento, accesibilidad, SEO)."
          }
        </li>
        <li>
          {
            "Comparar React, Angular, Vue y Svelte en enfoque (librería vs framework), curva de aprendizaje, ecosistema y casos de uso típicos."
          }
        </li>
        <li>
          {
            "Aplicar el árbol de decisión para elegir framework según tamaño de equipo, experiencia en TypeScript y necesidad de SSR/SEO."
          }
        </li>
        <li>
          {
            "Leer e interpretar un componente de UI equivalente en React (JSX), Angular y Vue que consume props y dispara eventos."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección apis: consumo de APIs REST con fetch y manejo de respuestas JSON."}</li>
        <li>{"Lección servicios-web: modelo cliente-servidor y comunicación HTTP."}</li>
        <li>{"Familiaridad básica con HTML y CSS."}</li>
      </ul>
      <Callout title="Frontend no es el backend">
        {
          "El frontend renderiza UI y consume APIs; el backend persiste datos y aplica reglas de negocio críticas. La validación en cliente mejora UX, pero el servidor debe ser la fuente de verdad."
        }
      </Callout>
    </section>
  );
}
