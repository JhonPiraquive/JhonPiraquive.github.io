import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PanoramaPorAreasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Tecnologías emergentes por áreas</h2>
      <p className="my-4">
        Las tecnologías emergentes no están solo en la informática. Los informes de vigilancia más reconocidos incluyen
        energía, materiales, salud y biotecnología. Aun así, casi todas comparten algo: dependen del software para
        funcionar, medirse o controlarse.
      </p>
      <MermaidDiagram
        title="Mapa de áreas de tecnologías emergentes"
        description="Mapa mental con seis áreas: inteligencia artificial, computación espacial, internet de las cosas y computación en el borde, robótica, energía y materiales, y biotecnología y salud."
        chart={`mindmap
  root((Tecnologías emergentes))
    Inteligencia artificial
      Modelos de lenguaje
      Agentes
      Modelos del mundo
    Computación espacial
      Realidad aumentada
      Realidad virtual
    IoT y borde
      Sensores conectados
      Procesamiento local
    Robótica
      Robots colaborativos
      Robots humanoides
      Drones
    Energía y materiales
      Baterías nuevas
      Redes eléctricas bidireccionales
      Enfriamiento pasivo
    Biotecnología y salud
      Vacunas de ARNm personalizadas
      Fermentación de precisión`}
      />
      <CompareTable
        headers={["Área", "Qué hace", "Ejemplo de aplicación", "Dónde entra el software"]}
        rows={[
          [
            "Inteligencia artificial",
            "Sistemas que aprenden de datos para clasificar, predecir, generar contenido o ejecutar tareas.",
            "Asistentes que atienden clientes, revisan documentos o escriben código.",
            "Es software en sí misma; se integra a aplicaciones mediante APIs. Se estudia a fondo en la clase 2.",
          ],
          [
            "Computación espacial",
            "Mezcla información digital con el espacio físico o crea espacios simulados.",
            "Capacitación técnica con gafas de realidad mixta, visualización de obras de arquitectura.",
            "Motores 3D, aplicaciones para cascos y WebXR en el navegador.",
          ],
          [
            "Internet de las cosas y computación en el borde",
            "Objetos con sensores que envían datos; parte del procesamiento ocurre cerca del sensor (el borde) y no en la nube.",
            "Agricultura de precisión, control de cadenas de frío, edificios que ahorran energía.",
            "Paneles web que muestran los datos, APIs que los reciben, modelos que detectan anomalías.",
          ],
          [
            "Robótica",
            "Máquinas que perciben y actúan en el mundo físico, cada vez con más autonomía.",
            "Robots que trabajan junto a personas en bodegas, drones de inspección.",
            "Control, visión por computador y paneles de monitoreo.",
          ],
          [
            "Energía y materiales",
            "Nuevas formas de producir, almacenar y ahorrar energía.",
            "Vehículos eléctricos que devuelven energía a la red, materiales que enfrían sin electricidad.",
            "Sistemas que coordinan la red eléctrica y miden el consumo en tiempo real.",
          ],
          [
            "Biotecnología y salud",
            "Uso de organismos y procesos biológicos para producir medicinas, alimentos o materiales.",
            "Vacunas contra el cáncer diseñadas para cada paciente, ingredientes fabricados por microorganismos.",
            "Análisis de datos genéticos, simulación de moléculas y registros clínicos.",
          ],
        ]}
      />
    </section>
  );
}
