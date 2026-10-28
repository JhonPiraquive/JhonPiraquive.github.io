import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MatrizPonderadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La matriz de decisión ponderada</h2>
      <p className="my-4">
        Una <strong>matriz de decisión ponderada</strong> compara varias alternativas con los mismos criterios. Funciona
        en cuatro pasos:
      </p>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>Elegir los criterios que importan para el caso (cinco a ocho suelen bastar).</li>
        <li>Asignar a cada criterio un peso según su importancia; los pesos suman 100 %.</li>
        <li>Calificar cada alternativa en cada criterio, por ejemplo de 1 a 5, con una justificación breve.</li>
        <li>Multiplicar cada calificación por el peso y sumar. La alternativa con mayor puntaje es la candidata.</li>
      </ol>
      <p className="my-4">
        Ejemplo: una cooperativa cafetera quiere un sistema para que sus asociados reporten la cosecha desde el celular.
        Compara tres alternativas.
      </p>
      <CompareTable
        headers={["Criterio", "Peso", "Formularios en hoja de cálculo", "Aplicación web propia", "Plataforma de bajo código"]}
        rows={[
          ["Necesidad real (funciona sin señal en la finca)", "30 %", "2", "4", "3"],
          ["Costo total", "25 %", "5", "2", "3"],
          ["Conocimiento del equipo", "20 %", "5", "2", "4"],
          ["Dependencia del proveedor", "15 %", "3", "5", "2"],
          ["Madurez", "10 %", "5", "4", "4"],
          ["Total ponderado", "100 %", "3.80", "3.25", "3.15"],
        ]}
      />
      <p className="my-4">
        El resultado sugiere empezar con la opción más simple, aunque sea la menos novedosa. La matriz también muestra su
        debilidad: si el trabajo sin señal es indispensable, la hoja de cálculo no sirve, por buena que sea en lo demás.
        Por eso, además del total, se definen <strong>criterios eliminatorios</strong>: condiciones que, si no se cumplen,
        descartan una alternativa sin importar su puntaje. El código siguiente aplica ese filtro: sin la hoja de cálculo,
        la aplicación web y la plataforma de bajo código quedan casi empatadas.
      </p>
      <CodeFiddle
        language="javascript"
        title="Calcular una matriz ponderada (consola del navegador)"
        code={`const pesos = { necesidad: 0.3, costo: 0.25, equipo: 0.2, proveedor: 0.15, madurez: 0.1 };

const alternativas = [
  { nombre: "Hoja de cálculo",  necesidad: 2, costo: 5, equipo: 5, proveedor: 3, madurez: 5, funcionaSinSenal: false },
  { nombre: "Aplicación web",   necesidad: 4, costo: 2, equipo: 2, proveedor: 5, madurez: 4, funcionaSinSenal: true },
  { nombre: "Bajo código",      necesidad: 3, costo: 3, equipo: 4, proveedor: 2, madurez: 4, funcionaSinSenal: true },
];

const resultado = alternativas
  .filter((alt) => alt.funcionaSinSenal) // criterio eliminatorio
  .map((alt) => ({
    nombre: alt.nombre,
    total: Object.entries(pesos).reduce((suma, [criterio, peso]) => suma + alt[criterio] * peso, 0).toFixed(2),
  }))
  .sort((a, b) => b.total - a.total);

console.table(resultado);`}
      />
      <Callout title="La matriz ayuda a pensar, no decide sola" variant="callout-warning">
        <p className="mb-0">
          Cambiar un poco los pesos puede cambiar el ganador. Eso no invalida la herramienta: muestra qué tan sensible es la
          decisión. Si un pequeño cambio de peso cambia el resultado, las alternativas están empatadas y conviene una prueba
          práctica antes de decidir.
        </p>
      </Callout>
    </section>
  );
}
