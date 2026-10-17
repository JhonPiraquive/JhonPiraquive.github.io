---
name: crear-modulo-ensenanza
description: Crea un módulo de enseñanza nuevo (o reorganiza uno existente) en el portal docente, con contenido de 0 a 100 repartido en 3 clases, investigado en internet y escrito en lenguaje muy claro. Úsala cuando el usuario pida "crear un módulo", "nuevo track", "organizar/reorganizar un módulo" o entregue presentación, resultados de aprendizaje, contenido de apoyo y actividades de una asignatura.
argument-hint: <nombre del módulo> [ruta a orientaciones, PDF, enlaces o textos de apoyo]
---

# Crear u organizar un módulo de enseñanza

Convierte la ficha de una asignatura (presentación, resultados de aprendizaje, contenido de apoyo, actividades) en un track del portal: 3 clases de 2 a 3 horas que el docente puede explicar en vivo y que el estudiante puede recorrer solo. El resultado debe leerse como una enseñanza del tema, igual que si el usuario pidiera «enséñame sobre X»: primero el concepto general del tema, luego la herramienta concreta con la que se practica.

## Principios (no negociables)

1. **Escala de 0 a 100.** El 0 es un estudiante que no sabe nada del tema; el 100, uno que lo domina. Reparte los tramos entre las 3 clases (por ejemplo 0–35, 35–70, 70–100) y, dentro de cada clase, ordena: concepto → ejemplo → práctica real. Cada clase termina con algo que se pueda ejecutar o mostrar.
2. **El tema general manda; la herramienta es el vehículo.** Si el módulo se llama «Tecnologías emergentes» y se practica con React, el contenido enseña primero qué es una tecnología emergente (definición, características, ciclo de adopción, ejemplos de varias áreas, criterios para evaluarlas) y usa React como la tecnología con la que se practica, sin reducir el módulo a un curso de la herramienta. Cada clase conecta lo que se aprende con el concepto general.
3. **Voz: tercera persona, tono profesional y didáctico.** Nada de primera persona del plural («vamos a ver», «construimos», «nuestro») ni de segunda persona («tú», «imagina», «crea tu proyecto»). Se redacta en tercera persona o en forma impersonal: «el estudiante crea…», «se instala…», «el componente recibe…», «una variable es…». Define cada término la primera vez que aparece, usa analogías cotidianas y frases cortas. Nada que suene a texto generado por IA: sin muletillas, sin «en el vertiginoso mundo de…», sin listas de adjetivos.
4. **Estructura propia.** No copies la estructura de otros módulos del repo; el contenido lo dicta el tema. Los módulos existentes solo sirven para ver el **cableado técnico** (registry, navegación, componentes).
5. **Actualizado no es lo mismo que mejor.** Investiga siempre las versiones y prácticas vigentes y decide con criterio: madurez (estable, no beta), comunidad, documentación, mantenimiento, costo de cambiar y necesidad real. Esa investigación es insumo de trabajo: **el contenido para el estudiante no lleva números de versión, fechas de publicación, tablas de «versiones de referencia» ni notas de cambios**. Solo se escribe lo que sigue siendo cierto con cualquier versión reciente; si hay una diferencia importante entre lo antiguo y lo actual (por ejemplo, una API reemplazada), se explica la equivalencia sin citar versiones. Las versiones solo se anotan en la guía docente de `kb/`.
6. **Primero se enseña, al final se evalúa.** Las páginas de contenido solo explican: concepto, analogía, ejemplo y código para probar. Ningún ejercicio con solución, mini-quiz, reto, autoevaluación ni bloque de «respuesta» va en medio del contenido. Todo eso se concentra al final de cada clase, en la última página («Práctica y cierre»), en este orden: práctica guiada → ejercicios con pista y solución → mini-quiz → autoevaluación → enlaces oficiales.
7. **Solo visuales que enseñan.** Un diagrama, tabla o ejemplo ejecutable entra únicamente si aclara un concepto que el texto solo no resuelve (flujo, ciclo, comparación, línea de tiempo). Prohibido el relleno decorativo y el contenido que sirve para planear pero no para aprender: **no se incluye el «mapa del módulo»**, la tabla de clases por nivel, ni cuadros de «cómo usar este material». Esos planos viven en la guía docente de `kb/`.
8. **Debe poder explorarse solo.** Ejemplos copiables y enlaces oficiales; la práctica y la evaluación, al final de cada clase.
9. **Las actividades del módulo guían la práctica.** Lee las orientaciones (`trabajos/orientaciones/<módulo>/`) y asegura que cada habilidad que piden se enseñe antes, con un caso **paralelo** (otro dominio) para que el estudiante transfiera y no copie la solución. Las páginas públicas no llevan instrucciones de entrega ni criterios de evaluación (ADR 011).

## Flujo

### 1. Reunir insumos
- Lee todo lo que entregue el usuario: presentación, resultados de aprendizaje, contenido de apoyo, bibliografía, actividades (`.md` y `.docx`; extrae el texto de los `.docx` con `python3 -I` y `zipfile`), PDF y enlaces.
- Los videos de YouTube no se pueden ver: obtén título y autor con `https://www.youtube.com/oembed?url=<url>&format=json` y úsalos como recursos de apoyo. Si un archivo indicado no existe, dilo y sigue.
- Si el insumo trae material antiguo (videos de 2020, plantillas congeladas), anótalo: irá marcado en los recursos del final de la clase, sin fechas ni versiones.

### 2. Investigar versiones y prácticas (siempre, con fuentes primarias)
- Para cada tecnología del módulo: versión estable actual, requisitos (Node, React…), cambios que rompen compatibilidad, qué recomienda hoy la documentación oficial. Usa WebSearch y confirma en WebFetch contra la fuente oficial (blogs de release, guías de migración, docs).
- Verifica contra la documentación oficial cada API que vayas a escribir en el código (imports, props, hooks). No escribas código de memoria.
- Para cada decisión «nuevo vs mejor», anota la evidencia (versión, fecha, fuente) en la guía docente de `kb/`, no en las páginas del estudiante.

### 3. Diseñar el plan
- Tabla de 3 clases × 5–6 páginas (~15–25 min de lectura c/u), con nivel 0–100, qué se construye y qué actividad prepara. Es una herramienta de planeación: no se publica.
- Cada clase: hub (solo objetivos) + páginas temáticas de 2–4 secciones que solo enseñan + una última página «Práctica y cierre» que concentra práctica guiada, ejercicios con solución, mini-quiz, autoevaluación y recursos.
- La primera clase abre con el concepto general del tema (qué es, por qué importa, cómo se evalúa), no con la herramienta.
- El índice del módulo lleva: Presentación, Objetivos de aprendizaje y Resultados de aprendizaje (textuales, tal como los da la asignatura).
- Presenta el plan al usuario si hay ambigüedades reales; si no, avanza.

### 4. Cablear el track (checklist)
Sigue el patrón de `analisis-diseno-sistemas` para el cableado:
- `src/lib/teaching.ts`: entrada nueva en `TRACKS` (id, icono, títulos y descripciones ES/EN).
- `src/components/teaching/lessons/<track>/class-navigation.ts`: `ClassNavConfig` por clase y cadena prev/next.
- Por clase: `<clase>/Clase0NXxxHubLesson.tsx`, `lesson-meta.ts`, `sections/*.tsx` (una sección = un archivo = un componente) y `pages/<pagina>/<Pagina>PageLesson.tsx` + `lesson-meta.ts` (`showInTrackIndex: false`, shell `ClassPageLayout`).
- `index/`: `<Modulo>Lesson.tsx` + `lesson-meta.ts` + secciones.
- `src/lib/teaching-lessons-registry.ts`: una entrada por index, hub y página (`"<track>/<slug>"`).
- `src/lib/teaching-quizzes/<track>.ts`: una clave por **clase** (la del hub) y registrar el track en `QUIZ_MAP` de `components/teaching/lessons/shared/QuizSection.tsx`.
- Un script de Node en el scratchpad que genere el esqueleto (nav, metas, hubs, páginas, entradas del registry) ahorra errores; las secciones se escriben a mano.
- Actualiza `README.md` (tabla de tracks) y `kb/content/teaching-tracks.md`; la guía docente (tiempos por clase, qué explicar y qué dejar de lectura) va en `kb/education/instructor/<track>/`, nunca en páginas públicas.

### 5. Escribir las secciones
- Componentes disponibles: `Callout`, `CodeFiddle`, `CompareTable`, `MermaidDiagram` para enseñar en las páginas de contenido; `CodeChallenge`, `PracticeExercise`, `StepReveal` y `Quiz` solo en la página final de la clase. Se importan desde `@/components/teaching/...`.
- Cada clase mezcla al menos: un visual Mermaid donde aclare un concepto (ADR 013: mapa mental, flujo, ciclo, línea de tiempo → visual real, sin entidades HTML en `chart`/`code`), una tabla comparativa útil y código ejecutable; el ejercicio va al final.
- Dentro de `CodeFiddle`/`CodeChallenge` (template literals de TSX) escapa `\${` y las comillas invertidas; las barras invertidas de regex y comandos se duplican (`\\`).
- En texto JSX no uses comillas rectas ni apóstrofos sueltos: usa «», `&quot;` o `{"..."}`.
- Código de los ejemplos: práctica actual, sin APIs removidas, con manejo de errores y accesibilidad cuando aplique. Si el material del curso usa algo antiguo, se muestra la equivalencia sin citar versiones.
- Antes de entregar, busca en el texto del estudiante: «vamos», «veamos», «-mos» en verbos, «nuestro», «tú/tu/tus», imperativos dirigidos al lector («imagina», «crea», «piensa»), números de versión y años. No debe quedar ninguno.
- Ejemplo guía en un dominio distinto al de la actividad evaluable.

### 6. Verificar
1. `npx tsc --noEmit -p .` sin errores.
2. `npx next build` termina y genera las páginas nuevas (el lint de Next está roto por una dependencia circular previa; no lo uses como señal).
3. Sirve `out/` (`python3 -m http.server`) y renderiza cada página nueva con `google-chrome --headless=new --no-sandbox --virtual-time-budget=20000 --dump-dom`; ninguna debe contener «Error al dibujar el diagrama» y los `aria-busy="false"` deben coincidir con el número de diagramas. Haz al menos una captura (`--screenshot`) y mírala.
4. Revisa que no queden `TODO`, directivas de autoría, números de versión en el contenido del estudiante, voz plural o de segunda persona, ni ejercicios, quizzes o respuestas fuera de la última página de cada clase.
5. Apaga el servidor y deja limpio (`out/` y `.next/` ya están ignorados).

### 7. Cierre
Resume al usuario: estructura (clases, páginas, nivel por tramo), decisiones «nuevo vs mejor» con su evidencia, insumos que faltaron o estaban desfasados, y cómo verlo (`npm run dev`, ruta `/es/teaching/<track>`). No hagas commit salvo que lo pida. Guarda en memoria las decisiones y convenciones nuevas.

## Modo reorganizar un módulo existente

Cuando el usuario pida «organizar» un módulo que ya existe:
1. Inventario: lista clases, páginas, secciones, quizzes y registry del track; mide lectura por página.
2. Diagnóstico contra los principios: ¿hay escalera 0→100?, ¿3 clases?, ¿el tema general manda sobre la herramienta?, ¿voz en tercera persona?, ¿versiones o mapa del módulo en páginas públicas?, ¿evaluación mezclada con el contenido?, ¿código desactualizado?, ¿visuales sin función?, ¿actividades cubiertas?
3. Plan de cambios (qué se parte, mueve, reescribe o elimina) y confirmación del usuario antes de borrar o mover contenido.
4. Si cambian slugs, actualiza `legacy-redirects.json` y `class-navigation.ts`; nunca dejes entradas huérfanas en el registry ni en `QUIZ_MAP`.
5. Reescribe solo lo que no cumpla; conserva lo que ya está bien. Verifica con el paso 6.
