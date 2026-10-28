import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function LimitesDeLosModelosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Lo que un modelo no hace bien</h2>
      <p className="my-4">
        Entender cómo funciona un modelo explica también sus límites. Un modelo genera el texto más plausible, no
        necesariamente el verdadero. Conocer estos límites es lo que separa un uso ingenuo de un uso profesional.
      </p>
      <CompareTable
        headers={["Límite", "Qué ocurre", "Ejemplo", "Cómo se mitiga"]}
        rows={[
          [
            "Alucinaciones",
            "El modelo inventa datos con total seguridad.",
            "Cita un artículo que no existe o una función de una librería que nunca existió.",
            "Verificar en fuentes primarias; darle documentos reales; pedirle que cite y comprobar las citas.",
          ],
          [
            "Conocimiento desactualizado",
            "No sabe lo que pasó después de su fecha de corte.",
            "Recomienda una forma antigua de usar una librería.",
            "Entregarle la documentación actual o darle una herramienta de búsqueda.",
          ],
          [
            "Respuestas variables",
            "La misma pregunta puede dar respuestas distintas.",
            "Dos ejecuciones del mismo pedido generan código diferente.",
            "Pedir formatos precisos, bajar la temperatura, validar la salida con código.",
          ],
          [
            "Sesgos",
            "Reproduce sesgos presentes en los datos de entrenamiento.",
            "Asocia ciertas profesiones con un género.",
            "Revisar con personas diversas, probar casos sensibles, no automatizar decisiones sobre personas sin supervisión.",
          ],
          [
            "Cálculo y conteo",
            "Al trabajar con tokens, falla en tareas que parecen simples.",
            "Contar letras de una palabra o sumar listas largas.",
            "Pedirle que use una herramienta (por ejemplo, ejecutar código) para calcular.",
          ],
        ]}
      />
      <Callout title="La regla de oro" variant="callout-danger">
        <p className="mb-0">
          La responsabilidad sobre lo que se entrega es siempre de la persona, no del modelo. Un texto, un análisis o un
          código generado con IA se revisa con el mismo rigor que si lo hubiera escrito un compañero nuevo: puede ser
          excelente, pero no se publica sin leerlo, entenderlo y probarlo.
        </p>
      </Callout>
    </section>
  );
}
