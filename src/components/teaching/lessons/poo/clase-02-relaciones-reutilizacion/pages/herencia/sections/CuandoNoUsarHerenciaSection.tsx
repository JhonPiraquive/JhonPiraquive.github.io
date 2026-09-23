import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CuandoNoUsarHerenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cuando herencia no es la respuesta"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Avisos de pedido: el atajo que duplica código"}</h3>
      <p className="my-4">
        {
          "Tienda Andes quiere avisar por correo, SMS o WhatsApp cuando un pedido está listo. Un diseño rápido crea AvisoEmail : AvisoBase, AvisoSms : AvisoBase… Cada canal es distinto, pero ninguno «es un» aviso genérico en el sentido del negocio: son formas de entregar el mismo mensaje. Añadir un canal obliga a tocar una jerarquía entera."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Composición: el pedido «tiene» un canal"}</h3>
      <p className="my-4">
        {
          "Composición (o agregación, según el caso) significa que un objeto usa otro como parte: ConfirmacionPedido tiene un canal de notificación, no hereda de él."
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`using System;

public interface ICanalAviso
{
    void Enviar(string mensaje);
}

public class AvisoEmail : ICanalAviso
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"Email al cliente: {mensaje}");
}

public class AvisoSms : ICanalAviso
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"SMS: {mensaje}");
}

public class ConfirmacionPedido
{
    private readonly ICanalAviso _canal;

    public ConfirmacionPedido(ICanalAviso canal)
    {
        _canal = canal ?? throw new ArgumentNullException(nameof(canal));
    }

    public void PedidoListo(string idPedido) =>
        _canal.Enviar($"Tu pedido {idPedido} está listo para recoger.");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nuevo canal sin reescribir ConfirmacionPedido"}</h3>
      <CodeFiddle
        language="csharp"
        code={`public class AvisoWhatsApp : ICanalAviso
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"WhatsApp: {mensaje}");
}

var confirmacion = new ConfirmacionPedido(new AvisoWhatsApp());
confirmacion.PedidoListo("ANDES-42");`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Herencia frente a composición"}</h3>
      <CompareTable
        headers={["Criterio", "Herencia (: Producto)", "Composición (tiene un)"]}
        rows={[
          ["Relación", '"Libro es un Producto"', '"Pedido tiene líneas"'],
          ["Reutilización", "Comportamiento común en la base", "Delegar en objeto o interfaz"],
          ["Extensión", "Nuevas subclases", "Nuevas implementaciones de ICanalAviso"],
          ["Riesgo", "Jerarquía frágil si el «es un» es falso", "Más piezas pequeñas que conectar"],
        ]}
      />
      <MermaidDiagram
        chart={`classDiagram
  class ConfirmacionPedido {
    -ICanalAviso _canal
    +ConfirmacionPedido(ICanalAviso canal)
    +PedidoListo(string idPedido)
  }
  class ICanalAviso {
    <<interface>>
    +Enviar(string mensaje)
  }
  ConfirmacionPedido --> ICanalAviso : usa
  ICanalAviso <|.. AvisoEmail
  ICanalAviso <|.. AvisoSms
  ICanalAviso <|.. AvisoWhatsApp`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pregunta rápida de diseño"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  A[¿Specializas un tipo del catálogo?] --> B{¿Es un claro y estable?}
  B -->|Sí| C[Herencia + virtual/override]
  B -->|No| D[¿Solo cambias cómo se hace algo?]
  D -->|Sí| E[Interfaz + composición]
  D -->|No| F[Revisa el modelo del dominio]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Heredar para copiar utilidades (class Reporte : StringHelper)."}</li>
        <li>{"class Carrito : Producto porque «el carrito tiene productos» — eso es agregación, no herencia."}</li>
        <li>{"Cuadrado : Rectángulo solo para reutilizar ancho/alto — rompe reglas al redimensionar."}</li>
      </ul>
      <PracticeExercise
        prompt='En Tienda Andes, da un ejemplo de «es un» y uno de «tiene un» con nombres de clase concretos.'
        hints={[
          "Libro es un Producto encaja en herencia",
          "Pedido tiene LineaPedido encaja en composición",
          "¿Podrías usar la derivada donde usas la base sin sorpresas?",
        ]}
        expectedKeywords={["Producto", "Pedido", "es un", "tiene un"]}
        successMessage='Correcto. Herencia para especialización estable; composición para partes y colaboradores.'
      />
    </section>
  );
}
