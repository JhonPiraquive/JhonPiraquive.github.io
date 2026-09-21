import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const ESQUELETO_CODE = `// Esqueleto de partida — completa las clases y las pruebas en Main
using System;
using System.Collections.Generic;

public class Producto
{
    // Nombre, Precio, constructor con validación
}

public class Pedido
{
    // Id, Estado, constructor, Pagar()
}

public class Program
{
    public static void Main()
    {
        // 2+ productos, 1 pedido, pagar dos veces
    }
}`;

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: diseña tu primer dominio"}
      </h2>
      <blockquote className="my-4 border-l-4 border-[var(--color-secondary)] pl-4 italic">
        {"“Diseña tu primer dominio”"}
      </blockquote>
      <p className="my-4">{"Un restaurante necesita un sistema simple de pedidos en consola. Debes modelar:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Clase Producto con Nombre, Precio y constructor que rechace nombre vacío y precio negativo."}</li>
        <li>{"Clase Pedido con Id, Estado (inicia en \"Creado\") y constructor que exija id válido."}</li>
        <li>{"Método Pagar() en Pedido que solo permita pagar si Estado == \"Creado\" y luego cambie a \"Pagado\"."}</li>
        <li>{"En Main: crea al menos 2 Producto, 1 Pedido válido, págalo una vez con éxito e intenta pagarlo de nuevo (debe fallar)."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: distingue clase/instancia, constructor deja estado válido, métodos protegen reglas, excepciones con mensajes claros, código compila con dotnet run."
        }
      </p>
      <p className="my-4">
        {
          "Extensión opcional: lista List<Producto> con 3 ítems del menú e imprime el catálogo antes de crear el pedido."
        }
      </p>
      <CodeFiddle language="csharp" title="Esqueleto de partida" code={ESQUELETO_CODE} />
      <PracticeExercise
        prompt="Implementa el reto del restaurante: Producto, Pedido con Pagar(), y Main que demuestre pago exitoso y segundo pago fallido. Pega tu código o describe las validaciones del constructor."
        hints={[
          "Producto: valida nombre vacío y precio < 0",
          "Pedido: Estado = Creado en constructor",
          "Pagar(): solo si Estado == Creado, luego Pagado",
          "Segunda llamada a Pagar() debe lanzar InvalidOperationException",
        ]}
        expectedKeywords={["Producto", "Pedido", "Pagar", "Creado", "Pagado"]}
        successMessage="Excelente. Has integrado clase, instancia, constructor y métodos que protegen reglas de negocio."
        rows={8}
      />
    </section>
  );
}
