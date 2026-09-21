import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce la herencia como mecanismo de especialización y reutilización con sentido, y la composición como alternativa cuando el “es un” no es válido."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir herencia en C# como relación “es un” entre clase derivada y clase base, y distinguirla de composición (“tiene un”)."
          }
        </li>
        <li>
          {
            "Implementar una jerarquía mínima (Vehiculo → Carro / Moto) con constructor base(...), método virtual y override."
          }
        </li>
        <li>
          {
            "Explicar polimorfismo básico: variable de tipo base que apunta a instancia derivada y dispatch en tiempo de ejecución."
          }
        </li>
        <li>
          {
            "Identificar señales de mal uso de herencia y proponer composición + interfaz como alternativa."
          }
        </li>
        <li>
          {
            "Aplicar el patrón Alarma + INotificador para extender canales sin modificar la clase cliente."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección encapsulamiento: campos privados, propiedades e invariantes."}</li>
        <li>{"Conocimiento básico de clases, constructores y métodos en C# (lección fundamentos)."}</li>
        <li>{"Capacidad para crear y ejecutar un proyecto de consola .NET (dotnet run)."}</li>
      </ul>
      <Callout title="Regla de diseño">
        {
          "Heredar solo cuando la relación “es un” es clara, estable y sustituible. Si solo buscas reutilizar código, composición o interfaces suelen ser mejor opción."
        }
      </Callout>
    </section>
  );
}
