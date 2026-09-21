import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const PEDIDO_CODE = `using System;

public class Pedido
{
    public string Id { get; }
    public string Estado { get; private set; }

    public Pedido(string id)
    {
        if (string.IsNullOrWhiteSpace(id)) throw new ArgumentException("Id requerido");
        Id = id;
        Estado = "Creado";
    }

    public void Pagar()
    {
        if (Estado != "Creado") throw new InvalidOperationException("Solo se paga un pedido creado");
        Estado = "Pagado";
    }
}`;

export function QueEsUnConstructorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es un Constructor y para qué se usa?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Se ejecuta al crear el objeto (new)."}</li>
        <li>{"Deja el objeto en un estado válido."}</li>
        <li>{"Puede validar y asignar valores iniciales."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un constructor es un método especial con el mismo nombre de la clase, sin tipo de retorno, que se ejecuta cuando creas una instancia con new."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Asegurar invariantes (“un pedido nace con estado Creado”)."}</li>
        <li>{"Validar entradas (“precio no negativo”, “id no vacío”)."}</li>
        <li>{"Preparar el objeto para usarse de inmediato, sin “arreglos” posteriores."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bien: constructor valida lo esencial y deja el objeto listo."}</li>
        <li>{"Mal: constructor con I/O pesada (HTTP, base de datos, archivos) que vuelve lenta y frágil la creación."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de vida real"}</h3>
      <p className="my-4">
        {"“Encender” un dispositivo: al encender, se inicializa a un estado listo, no “a medias”."}
      </p>
      <CodeFiddle language="csharp" code={PEDIDO_CODE} />
      <MermaidDiagram
        chart={`flowchart TD
  New["new Pedido(id)"] --> Ctor["Constructor valida + inicializa"]
  Ctor --> Ready["Objeto listo (Estado=Creado)"]`}
      />
      <Callout title="Caso real: constructor vacío y estados inválidos">
        {
          "Un microservicio crea Pedido con constructor por defecto y luego llama setters desde otro servicio. A veces el pedido queda sin Id, con Estado null o ya Pagado sin pasar por el flujo. Decisión clave: constructor que exija id válido y deje Estado = Creado. Un objeto debe nacer listo para usar."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Convenciones C# en esta lección"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proyecto consola: dotnet new console"}</li>
        <li>{"PascalCase para clases y métodos públicos"}</li>
        <li>{"camelCase para variables locales y parámetros"}</li>
        <li>{"new para instanciar"}</li>
        <li>{"Propiedades con { get; private set; } para proteger estado"}</li>
      </ul>
      <p className="my-4">
        {
          "Crea var p = new Pedido(\"\"); y mejora el mensaje de validación. Crea var p2 = new Pedido(\"P-1\");, llama Pagar() dos veces; la segunda debe fallar con excepción clara."
        }
      </p>
      <PracticeExercise
        prompt="¿Cuándo POO no sería la mejor opción? Da un ejemplo de problema de transformación de datos donde un enfoque funcional simple bastaría."
        hints={["Piensa en pipelines sin identidad de entidades", "¿Hay reglas de negocio o solo mapeo de datos?"]}
        expectedKeywords={["pipeline", "transform", "funcional", "datos"]}
        successMessage="Correcto. Si solo transformas datos sin identidad ni reglas complejas (por ejemplo, filtrar y mapear una lista), un enfoque funcional puede ser más simple que modelar objetos."
      />
    </section>
  );
}
