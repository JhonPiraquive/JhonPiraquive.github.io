import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const SERVICIO_REPOSITORIO_DIP = `public interface IRepositorioUsuarios
{
    void Guardar(string nombre);
}

public class RepositorioSql : IRepositorioUsuarios
{
    public void Guardar(string nombre) { /* SQL simulado */ }
}

public class RepositorioMemoria : IRepositorioUsuarios
{
    private readonly List<string> _usuarios = new();
    public void Guardar(string nombre) => _usuarios.Add(nombre);
}

public class ServicioUsuarios
{
    private readonly IRepositorioUsuarios _repo;

    public ServicioUsuarios(IRepositorioUsuarios repo) => _repo = repo;

    public void Crear(string nombre)
    {
        _repo.Guardar(nombre);
        Console.WriteLine("Usuario creado");
    }
}`;

export function DipSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"D — Inversión de dependencias (DIP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Módulos de alto nivel dependen de abstracciones."}</li>
        <li>{"Detalles (SQL, consola) implementan contratos en el borde."}</li>
        <li>{"Inyección por constructor es patrón habitual."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Servicio depende de abstracción"}</h3>
      <CodeFiddle language="csharp" code={SERVICIO_REPOSITORIO_DIP} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama DIP"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IRepositorioUsuarios {
    <<interface>>
    +Guardar(string nombre)
  }
  ServicioUsuarios --> IRepositorioUsuarios : depende_de
  IRepositorioUsuarios <|.. RepositorioSql
  IRepositorioUsuarios <|.. RepositorioMemoria`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"new RepositorioSql() dentro del servicio — acoplamiento a infraestructura."}</li>
        <li>{"DIP solo con interfaces vacías — abstracción sin semántica no ayuda."}</li>
        <li>{"Dominio que conoce strings de conexión SQL."}</li>
      </ul>
      <PracticeExercise
        prompt="Crea RepositorioMemoria : IRepositorioUsuarios y usa ServicioUsuarios con ella en Main (DIP)."
        hints={[
          "RepositorioMemoria implementa Guardar",
          "ServicioUsuarios recibe IRepositorioUsuarios por constructor",
          "Main elige RepositorioMemoria — servicio no cambia",
        ]}
        expectedKeywords={["RepositorioMemoria", "ServicioUsuarios", "Main"]}
        successMessage="Correcto. DIP: alto nivel depende del contrato; el concreto se elige en el borde."
      />
    </section>
  );
}
