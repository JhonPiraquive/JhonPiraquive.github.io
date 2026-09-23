export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta clase podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar qué es la Programación Orientada a Objetos (POO) y distinguir clase, objeto, instancia y constructor en C#."
          }
        </li>
        <li>
          {
            "Aplicar encapsulamiento e invariantes (estado privado, operaciones públicas que validan) en un Producto de Tienda Andes."
          }
        </li>
        <li>
          {
            "Leer y dibujar una caja UML simple (nombre, atributos, métodos) y mapearla a código C#."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {
          "Un Producto encapsulado con constructor que valida, más su caja UML. Eso alimenta herencia y relaciones en la Clase 2."
        }
      </p>
      <p className="my-4">
        <strong>{"Prerrequisitos:"}</strong>{" "}
        {
          "Proyecto consola .NET (dotnet new console / dotnet run), variables, if y métodos con parámetros."
        }
      </p>
    </section>
  );
}
