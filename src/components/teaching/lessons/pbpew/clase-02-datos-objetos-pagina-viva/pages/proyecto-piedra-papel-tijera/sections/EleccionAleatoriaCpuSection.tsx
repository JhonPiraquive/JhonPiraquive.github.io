import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
export function EleccionAleatoriaCpuSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Elección aleatoria de la CPU
      </h2>
      <p className="my-4">
        <code>Math.random()</code> devuelve un número en <code>[0, 1)</code>. El patrón PBPEW para índice
        válido:
      </p>
      <CodeFiddle
        language="javascript"
        code={`function obtenerEleccionCpu(opciones) {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

// Prueba en consola:
// for (let i = 0; i < 10; i++) console.log(obtenerEleccionCpu(OPCIONES));`}
      />
      <Callout title="Error frecuente">
        <code>Math.random() * 3</code> sin <code>Math.floor</code>, o <code>Math.random() * 4</code> con
        array de 3 elementos, puede devolver <code>undefined</code> al acceder al array. Siempre{" "}
        <code>Math.floor(Math.random() * opciones.length)</code>.
      </Callout>
    </section>
  );
}
