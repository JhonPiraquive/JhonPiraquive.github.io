import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CurvaSSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La curva S: cómo mejora el desempeño</h2>
      <p className="my-4">
        Casi ninguna tecnología mejora a ritmo constante. Al principio avanza despacio, porque se están entendiendo sus
        bases. Luego hay una etapa de mejoras rápidas, cuando muchos equipos trabajan en ella. Al final el avance se
        frena, porque la tecnología se acerca a sus límites físicos o prácticos. Si se dibuja el desempeño contra el
        tiempo o el esfuerzo invertido, la línea tiene forma de S.
      </p>
      <MermaidDiagram
        title="Curva S del desempeño de una tecnología"
        description="Gráfica de línea: el desempeño crece lento al inicio, se acelera en la mitad y se estabiliza al final."
        chart={`---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#6b4eff"
---
xychart-beta
  title "Rendimiento a lo largo del tiempo"
  x-axis [Inicio, Lento, Despegue, Crecimiento, Aceleracion, Frenado, Madurez]
  y-axis "Rendimiento" 0 --> 100
  line [3, 8, 20, 50, 80, 92, 96]`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué se aprende de la curva</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>En la parte baja</strong> la tecnología parece decepcionante: funciona peor que la alternativa
          establecida. Las primeras cámaras digitales tomaban fotos peores que las de rollo.
        </li>
        <li>
          <strong>En la parte media</strong> mejora tan rápido que lo que era imposible el año anterior se vuelve normal.
          Es la zona típica de una tecnología emergente.
        </li>
        <li>
          <strong>En la parte alta</strong> cada mejora cuesta mucho y aporta poco. Es la señal de que una nueva
          tecnología, con su propia curva S, puede reemplazarla.
        </li>
      </ul>
      <Callout title="Curvas que se encadenan" variant="callout-info">
        <p className="mb-0">
          Cuando una tecnología llega a su techo, suele aparecer otra que empieza abajo pero tiene un techo más alto. Las
          lámparas incandescentes dieron paso a las fluorescentes y estas a los LED. Reconocer en qué parte de la curva
          está una tecnología ayuda a saber si conviene invertir en ella o en la que viene.
        </p>
      </Callout>
    </section>
  );
}
