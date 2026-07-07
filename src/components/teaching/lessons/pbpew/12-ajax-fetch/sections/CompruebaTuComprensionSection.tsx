import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el flujo correcto de un GET con fetch: (a) await response.json(), (b) await fetch(url), (c) comprobar response.ok, (d) usar datos en la UI. Indica el orden b → ? → ? → ?."
          hints={["Primero la petición", "Luego validar", "Después parsear", "Al final pintar"]}
          expectedKeywords={["b", "c", "a", "d"]}
          successMessage="Correcto. Orden: (b) fetch → (c) comprobar ok → (a) response.json() → (d) usar en UI."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Con el mismo endpoint jsonplaceholder, muestra todo.title en console.log usando .then() encadenado (sin async/await). Describe los pasos o pega el código."
          hints={[
            "fetch(url).then(r => …)",
            "if (!r.ok) throw …",
            "return r.json()",
            ".then(todo => console.log(todo.title))",
          ]}
          expectedKeywords={["then", "json", "ok"]}
          successMessage="Correcto. Encadena: fetch → validar ok → return response.json() → then con console.log."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt='POST a https://jsonplaceholder.typicode.com/posts con title: "Hola", body: "Mundo", userId: 1. ¿Qué dos piezas faltan casi siempre si envías un objeto directo en body?'
          hints={["El cuerpo HTTP es texto", "El servidor necesita saber el tipo"]}
          expectedKeywords={["stringify", "Content-Type", "json"]}
          successMessage="Correcto. Faltan JSON.stringify en body y Content-Type: application/json en headers."
        />
      </div>
    </section>
  );
}
