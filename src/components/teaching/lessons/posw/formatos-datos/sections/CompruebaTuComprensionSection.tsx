import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el mismo pedido ocupa ~520 bytes en XML y ~320 en JSON? Menciona al menos dos causas."
          hints={["Etiquetas de cierre", "Atributos vs objetos anidados"]}
          expectedKeywords={["etiquetas", "cierre", "verbos", "atributo"]}
          successMessage="Correcto. Las etiquetas de apertura/cierre y la sintaxis más verbosa de XML aumentan el tamaño frente a JSON."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena partes de un documento XML válido: (a) elemento raíz, (b) declaración <?xml?>, (c) elementos hijos anidados, (d) atributos en apertura. ¿Cuál va primero?"
          hints={["La declaración precede al contenido", "Un solo raíz envuelve hijos"]}
          expectedKeywords={["b", "a", "c", "d"]}
          successMessage="Correcto. Orden: (b) declaración → (a) raíz → (c) hijos anidados; (d) atributos van en la etiqueta de apertura del elemento."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Nombra dos casos de uso reales donde XML sigue siendo la opción correcta aunque JSON sea más popular."
          hints={["Piensa en SOAP bancario", "Regulación o facturación"]}
          expectedKeywords={["SOAP", "facturación", "WSDL", "legado"]}
          successMessage="Correcto. SOAP bancario, facturación DIAN, WSDL y configs Maven/Spring son casos donde XML sigue siendo obligatorio o convencional."
        />
      </div>
    </section>
  );
}
