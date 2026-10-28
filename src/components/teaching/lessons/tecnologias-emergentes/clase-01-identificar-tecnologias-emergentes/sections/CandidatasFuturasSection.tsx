import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CandidatasFuturasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Candidatas a ser las próximas emergentes</h2>
      <p className="my-4">
        Las siguientes tecnologías aparecen con frecuencia en los informes de vigilancia (Foro Económico Mundial, Gartner,
        MIT Technology Review) como candidatas a crecer en los próximos años. Ninguna tiene el éxito asegurado; por eso
        la última columna indica qué señal haría falta para tomarlas más en serio.
      </p>
      <CompareTable
        headers={["Tecnología", "Qué promete", "Horizonte", "Señal que confirmaría su avance"]}
        rows={[
          [
            "Computación cuántica",
            "Resolver problemas que los computadores actuales tardarían siglos en resolver, como simular moléculas para crear medicamentos.",
            "3",
            "Equipos que corrijan sus propios errores y resuelvan un problema útil mejor que un computador clásico.",
          ],
          [
            "Criptografía poscuántica",
            "Cifrado que resiste los ataques de futuros computadores cuánticos.",
            "2",
            "Navegadores, bancos y gobiernos usándola por defecto (ya hay estándares publicados).",
          ],
          [
            "Modelos del mundo e IA física",
            "IA que entiende cómo se comporta el mundo físico, útil para robots, vehículos y predicción del clima.",
            "2–3",
            "Robots que aprenden tareas nuevas sin programarlas una por una.",
          ],
          [
            "Interfaces cerebro-computadora",
            "Controlar dispositivos con la actividad cerebral; ayudar a personas con parálisis.",
            "3",
            "Ensayos clínicos con resultados repetibles y aprobación de autoridades de salud.",
          ],
          [
            "Computación neuromórfica",
            "Chips inspirados en el cerebro que consumen mucha menos energía al ejecutar IA.",
            "3",
            "Productos comerciales que usen estos chips fuera de los laboratorios.",
          ],
          [
            "6G y conexión satelital directa al celular",
            "Redes más rápidas y cobertura en zonas sin antenas.",
            "2–3",
            "Teléfonos comunes conectándose a satélites sin equipos especiales.",
          ],
          [
            "Fermentación de precisión",
            "Microorganismos programados para producir alimentos, medicinas o materiales.",
            "2",
            "Productos en supermercados a precio competitivo.",
          ],
          [
            "Fusión nuclear",
            "Energía abundante y limpia imitando lo que ocurre en el Sol.",
            "3",
            "Una planta que entregue a la red más energía de la que consume.",
          ],
        ]}
      />
      <Callout title="Cómo leer esta tabla" variant="callout-info">
        <p className="mb-0">
          La tabla no es una predicción sino una lista de vigilancia. Su valor está en la última columna: indica qué
          observar. Cuando aparece esa señal, la tecnología sube de horizonte y merece una ficha de identificación
          completa.
        </p>
      </Callout>
    </section>
  );
}
