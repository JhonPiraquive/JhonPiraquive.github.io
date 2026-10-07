export function ElementosSistemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Elementos que intervienen</h2>
      <p className="my-4">
        Además de entrada, proceso y salida, un sistema de información depende de piezas de distinta naturaleza.
        Si analizas solo el software e ignoras a las personas o la red, el diseño se queda corto.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Elemento</th>
            <th className="py-2 text-left font-semibold">Qué mira el analista</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Equipo de cómputo</td>
            <td className="py-2">Hardware con el que el sistema va a operar: equipos, servidor, capacidad.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Recurso humano</td>
            <td className="py-2">Quienes alimentan el sistema y usan los resultados. Sin ellos no hay datos ni decisiones.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Información o data</td>
            <td className="py-2">Los datos que el sistema debe guardar para entregar lo esperado.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Programas auxiliares</td>
            <td className="py-2">Aplicaciones externas de las que el sistema se alimenta para completar un proceso.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Telecomunicaciones</td>
            <td className="py-2">Infraestructura de hardware y software que transmite datos, texto, imagen o voz.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        En Logística SAS el hardware es reciente, no hay servidor propio y el personal tiene niveles muy
        distintos de manejo de computadores. Esos tres datos ya condicionan el diseño: herramientas libres,
        interfaz simple y, más adelante, decidir dónde se aloja el sistema.
      </p>
    </section>
  );
}
