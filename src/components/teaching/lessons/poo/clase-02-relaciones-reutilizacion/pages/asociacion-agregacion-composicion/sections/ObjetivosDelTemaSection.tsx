import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección matiza las relaciones “tiene un” y “usa un” que no son herencia. El dominio técnico proviene del brief del topic-expert; no se inventan conceptos fuera de ese alcance."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Distinguir asociación, agregación y composición usando ciclo de vida y propiedad como criterios principales."
          }
        </li>
        <li>
          {
            "Implementar los tres patrones en C# con colecciones privadas, parámetros de método o creación interna de partes."
          }
        </li>
        <li>
          {
            "Justificar la elección de relación en un caso de dominio (equipo–jugador, pedido–línea, doctor–paciente) sin recurrir a herencia incorrecta."
          }
        </li>
        <li>
          {
            "Identificar anti-patrones: herencia forzada, listas públicas mutables y composición donde las partes deberían ser independientes."
          }
        </li>
        <li>
          {
            "Formalizar una asociación temporal mediante una clase de enlace (Cita) cuando el contexto lo requiere."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección herencia: distinguir “es un” de “tiene un”; preview de composición con INotificador."
          }
        </li>
        <li>{"Lección encapsulamiento: colecciones privadas, validación en métodos mutadores."}</li>
        <li>{"Proyecto consola .NET funcional (dotnet run)."}</li>
      </ul>
      <Callout title="Relacionar ≠ heredar">
        {
          "Muchos diseños de Programación Orientada a Objetos (POO) no son “es un” sino cómo dos objetos colaboran: uso puntual, pertenencia débil o parte indisoluble. La herencia no sustituye estas relaciones."
        }
      </Callout>
    </section>
  );
}
