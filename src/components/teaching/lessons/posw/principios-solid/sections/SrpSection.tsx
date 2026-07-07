import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const VIOLACION_SRP = `// ❌ Violación SRP
class Usuario {
  constructor(public nombre: string, public email: string) {}
  validarEmail(): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(this.email);
  }
  guardarEnBaseDeDatos(): void {
    console.log("INSERT INTO usuarios...");
  }
  enviarEmailBienvenida(): void {
    console.log("SMTP.send...");
  }
}`;

const SRP_APLICADO = `// ✅ SRP aplicado
class Usuario {
  constructor(public readonly nombre: string, public readonly email: string) {}
  validarEmail(): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(this.email);
  }
}

class UsuarioRepository {
  guardar(usuario: Usuario): void {
    console.log(\`Guardando \${usuario.nombre}\`);
  }
}

class EmailService {
  enviarBienvenida(usuario: Usuario): void {
    console.log(\`Email a \${usuario.email}\`);
  }
}`;

export function SrpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SRP: una clase, una razón para cambiar"}
      </h2>
      <p className="my-4">
        {
          "Una clase debe tener una sola razón para cambiar. El criterio no es \"una función por archivo\", sino cohesión por motivo de cambio."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Violación vs corrección"}</h3>
      <CodeFiddle language="typescript" title="Violación SRP" code={VIOLACION_SRP} />
      <CodeFiddle language="typescript" title="SRP aplicado" code={SRP_APLICADO} />
      <Callout title="Usuario que hace de todo">
        {
          "Una clase Usuario que valida, guarda en BD y envía email es imposible de testear sin BD ni SMTP. Separar entidad, repositorio y servicio de notificaciones permite mocks en tests unitarios."
        }
      </Callout>
      <PracticeExercise
        prompt="Enumera tres razones para cambiar en un PedidoService que calcula totales, envía emails y escribe en PostgreSQL. ¿Cómo aplicarías SRP?"
        hints={["Cambio de reglas de descuento", "Cambio de proveedor SMTP", "Cambio de motor de BD"]}
        expectedKeywords={["SRP", "repositorio", "EmailService", "razón"]}
        successMessage="Correcto. Cada motivo de cambio va en su propia clase: entidad/servicio de negocio, repositorio, notificador."
      />
    </section>
  );
}
