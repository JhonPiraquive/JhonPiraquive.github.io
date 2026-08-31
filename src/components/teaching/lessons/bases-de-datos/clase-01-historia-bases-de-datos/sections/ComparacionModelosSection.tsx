import { CompareTable } from "@/components/teaching/CompareTable";

export function ComparacionModelosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comparación de modelos"}</h2>
      <p className="my-4">
        {
          "Una mirada ligera al paisaje del relato: época, forma de acceso e idea central. No hay un modelo “ganador universal”; hay un hilo histórico de problemas y respuestas."
        }
      </p>
      <CompareTable
        title="Modelos del relato (plano → hoy)"
        headers={["Modelo", "Época clave", "Acceso", "Idea central"]}
        rows={[
          ["Archivos planos", "50s–60s", "Secuencial / batch", "Sin motor de integridad"],
          ["Jerárquico", "60s–70s", "Punteros árbol", "Rutas conocidas"],
          ["Red (CODASYL)", "60s–70s", "Punteros grafo", "Varios padres"],
          ["Relacional", "70s→hoy", "SQL declarativo", "Tablas + independencia"],
          [
            "Documentos / KV / columnas / grafos",
            "2000s→",
            "Según familia",
            "Flexibilidad / escala / caminos",
          ],
          ["NewSQL / cloud", "2010s→", "SQL distribuido / managed", "Convergencia"],
        ]}
      />
    </section>
  );
}
