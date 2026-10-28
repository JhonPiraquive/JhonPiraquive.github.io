import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function AtributosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Los cinco atributos de una tecnología emergente</h2>
      <p className="my-4">
        Investigadores que revisaron decenas de definiciones (Rotolo, Hicks y Martin) encontraron que casi todas
        coinciden en cinco atributos. Sirven como lista de verificación: cuantos más atributos cumple una tecnología, más
        razones hay para llamarla emergente.
      </p>
      <CompareTable
        title="Atributos y cómo reconocerlos"
        headers={["Atributo", "Qué significa", "Pregunta para reconocerlo", "Ejemplo"]}
        rows={[
          [
            "Novedad radical",
            "Hace algo de una forma distinta, no solo un poco mejor.",
            "¿Cambia la manera de resolver el problema o solo lo acelera?",
            "Un asistente que escribe código a partir de una descripción, frente a un editor que solo autocompleta palabras.",
          ],
          [
            "Crecimiento relativamente rápido",
            "Aumentan rápido la inversión, las publicaciones, los usuarios o los productos.",
            "¿Cuántos proyectos, artículos o empresas aparecieron en el último año?",
            "La cantidad de herramientas que conectan modelos de IA con otras aplicaciones.",
          ],
          [
            "Coherencia",
            "Ya tiene una identidad propia: un nombre, una comunidad y una forma reconocible.",
            "¿Existe un nombre aceptado, conferencias, comunidades o estándares?",
            "La realidad aumentada tiene dispositivos, kits de desarrollo y eventos propios.",
          ],
          [
            "Impacto prominente",
            "Puede transformar una industria o varias a la vez.",
            "¿Qué cambiaría en un sector si se adoptara por completo?",
            "Los sensores conectados que transforman la agricultura, la logística y la salud.",
          ],
          [
            "Incertidumbre y ambigüedad",
            "Todavía no se sabe con certeza qué usos tendrá, cuánto costará ni qué riesgos traerá.",
            "¿Cambian sus reglas, precios o versiones con frecuencia? ¿Hay discusión sobre sus riesgos?",
            "La computación cuántica: se sabe que es poderosa, pero no cuándo será práctica.",
          ],
        ]}
      />
      <p className="my-4">
        El quinto atributo merece atención especial. La incertidumbre no es un defecto que deba esperar a desaparecer:
        es justamente lo que hace emergente a una tecnología. Cuando la incertidumbre se acaba, la tecnología ya es
        madura y la ventaja de adoptarla primero también se acaba.
      </p>
      <Callout title="Una idea para recordar" variant="callout-info">
        <p className="mb-0">
          Emergente es una etapa, no una categoría fija. La misma tecnología puede ser emergente en un país o sector y
          cotidiana en otro. Los pagos con código QR, por ejemplo, se volvieron cotidianos en algunos países mucho antes
          que en otros.
        </p>
      </Callout>
    </section>
  );
}
