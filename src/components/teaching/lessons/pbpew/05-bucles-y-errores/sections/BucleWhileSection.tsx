import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
export function BucleWhileSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"El bucle while: repetir mientras se cumpla la condición"}
      </h2>
      <p className="my-4">
        {
          "El bucle while repite mientras la condición sea verdadera. La condición se comprueba antes de cada iteración: si es falsa desde el inicio, el cuerpo no se ejecuta nunca."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`let n = 0;
while (n < 3) {
  console.log(n);
  n++; // crítico: avanzar hacia la salida
}`}
      />
      <p className="my-4">
        {
          "Úsalo cuando la condición es más abierta: “seguir hasta que…”, leer input, esperar un dato o reintentar hasta un límite."
        }
      </p>
      <Callout title="Error frecuente">
        {
          "let n = 0; while (n < 5) { console.log(n); } — olvidaste n++ y n nunca cambia. En el navegador puede congelar la pestaña. Siempre debe haber una salida: condición que cambie, break o límite de seguridad."
        }
      </Callout>
    </section>
  );
}
