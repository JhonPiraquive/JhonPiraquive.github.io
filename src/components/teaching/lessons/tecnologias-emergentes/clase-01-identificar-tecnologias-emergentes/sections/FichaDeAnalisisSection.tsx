import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function FichaDeAnalisisSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Una ficha para identificar una tecnología</h2>
      <p className="my-4">
        Todo lo anterior se resume en una ficha que puede llenarse para cualquier tecnología. Su propósito es pasar de la
        opinión («esto es el futuro») a una descripción con evidencia («esto cumple cuatro de cinco atributos, está en TRL
        7 y la usan sobre todo adoptantes tempranos»).
      </p>
      <CodeFiddle
        language="markdown"
        title="Plantilla de ficha de identificación"
        code={`# Ficha de identificación: <nombre de la tecnología>

## 1. Descripción
- Qué es, en una frase sin tecnicismos:
- Qué problema resuelve:
- Qué tecnología o práctica reemplaza o complementa:

## 2. Atributos de tecnología emergente (sí / parcial / no, con evidencia)
- Novedad radical:
- Crecimiento rápido:
- Coherencia (nombre, comunidad, estándares):
- Impacto prominente:
- Incertidumbre:

## 3. Ubicación en los modelos
- Curva S (inicio, crecimiento, madurez):
- Ciclo de sobreexpectación (etapa):
- Grupo que la adopta hoy:
- Nivel de madurez (TRL o etiqueta de versión):

## 4. Señales observadas (con fuente y fecha de consulta)
-
-

## 5. Conclusión
- ¿Es emergente? ¿Por qué?
- Anillo del radar sugerido (adoptar, probar, evaluar, resistir):`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ejemplo resumido: React</h3>
      <p className="my-4">
        La tecnología con la que se practican las actividades del módulo sirve como ejemplo de una emergente que ya maduró.
      </p>
      <CompareTable
        headers={["Punto de la ficha", "Respuesta resumida"]}
        rows={[
          ["Qué es", "Una librería de JavaScript para construir interfaces a partir de componentes."],
          ["Novedad radical (en su momento)", "Sí: describir cómo debe verse la pantalla según los datos, en lugar de modificarla paso a paso."],
          ["Crecimiento", "Muy alto durante años; hoy estable y entre las más usadas según encuestas de desarrolladores."],
          ["Coherencia", "Nombre, documentación oficial, conferencias y un ecosistema enorme de librerías."],
          ["Incertidumbre actual", "Baja en lo básico; todavía alta en las novedades más recientes de su ecosistema."],
          ["Curva S y ciclo", "Parte alta de la curva y meseta de productividad."],
          ["Conclusión", "Ya no es emergente: es una tecnología establecida. Algunas piezas nuevas de su ecosistema sí lo son. Anillo: adoptar."],
        ]}
      />
    </section>
  );
}
