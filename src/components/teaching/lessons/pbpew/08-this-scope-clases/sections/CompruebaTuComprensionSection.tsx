import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Dibuja o describe tres cajas anidadas: global → función demo → bloque if, y coloca dónde viven global, enFuncion y enBloque."
          hints={["Global envuelve todo", "enFuncion solo en demo", "enBloque solo en el if"]}
          expectedKeywords={["global", "función", "bloque", "if"]}
          successMessage="Correcto. global en el nivel superior; enFuncion dentro de demo; enBloque solo dentro del if."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Define class Circulo con constructor(radio), propiedad this.radio y método diametro() que devuelva this.radio * 2. Instancia con new Circulo(5) y comprueba el resultado."
          hints={["constructor asigna this.radio", "diametro devuelve radio * 2"]}
          expectedKeywords={["Circulo", "10", "diametro", "new"]}
          successMessage="Correcto. new Circulo(5) y c.diametro() debe devolver 10."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué class Foo { incrementar = () => this.n++ } funciona distinto de incrementar() { this.n++ } respecto a this? ¿Cuál es el patrón habitual en PBPEW?"
          hints={["Flecha hereda this léxico", "Método normal enlaza this al llamador"]}
          expectedKeywords={["léxico", "método", "instancia", "flecha"]}
          successMessage="Correcto. La flecha como campo hereda this del constructor; el método normal() es el patrón habitual y enlaza this dinámicamente a la instancia que llama."
        />
      </div>
    </section>
  );
}
