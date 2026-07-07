---
track: pbpew
slug: 05-bucles-y-errores
title: "Bucles y manejo de errores en JavaScript: for, while, do-while y try/catch"
order: 5
prev: "04-operadores-y-decisiones"
next: "06-funciones-y-callbacks"
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y orientado a aplicación en entornos web reales.
- **Persona:** segunda persona (*tú*) en instrucciones prácticas y ejercicios; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *un bucle repite…*).
- **Voz:** profesional, clara, confiable; conecta estructuras de control con incidentes de producción (pestaña congelada, checkout bloqueado) sin dramatizar.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal.
- **Preferir:** verbos de acción concretos (*escribir*, *reconocer*, *aplicar*, *combinar*, *proponer*, *atrapar*, *recuperar*).

### Título de lección refinado

**ES:** `Bucles y manejo de errores en JavaScript: for, while, do-while y try/catch`

- Sustituye el separador `·` por subtítulo académico con dos puntos.
- Agrupa las dos grandes ideas del borrador: **bucles** (repetición controlada) y **manejo de errores** (resiliencia en runtime).
- Mantiene las estructuras clave en el subtítulo para escaneo y SEO natural.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable; no repetir el título de la lección |
| Bucle `for` | El bucle for: repetición con contador conocido | Nominal académico; el cuerpo explica sintaxis |
| ↳ Partes del `for` | Partes del bucle for | H3 enumerativo; evitar repetir «anatomía» en H2 y StepReveal |
| Bucle `while` | El bucle while: repetir mientras se cumpla la condición | Énfasis en condición abierta y evaluación previa |
| Bucle `do...while` | El bucle do...while: garantizar al menos una ejecución | Contraste explícito con `while` |
| `break` y `continue` | break y continue: control de flujo dentro del bucle | Sin backticks en H2 publicado; reservar código para cuerpo |
| Bucles infinitos | Bucles infinitos: reconocerlos y evitarlos | Tono preventivo; incidente real, no solo teoría |
| `try / catch / finally` y `throw` | Manejo de errores con try, catch, finally y throw | Agrupa runtime, bloques y lanzamiento explícito |
| ↳ Tipos habituales | Errores en tiempo de ejecución | H3 bajo manejo de errores; tabla de `SyntaxError`, `ReferenceError`, etc. |
| Resumen | Resumen | Cierre conceptual; viñetas con sustantivos o infinitivos |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; autoevaluación formativa |
| Reto integrador | Reto integrador: validador de PIN con reintentos | Subtítulo en minúsculas tras dos puntos; escenario profesional |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 06 |

**Reglas transversales para headings:**

- H2: tema nominal o estructura + propósito; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; incluir nombre de estructura (`for`, `while`) solo si es el foco del párrafo.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — dashboard con pestaña congelada

- **Título:** `Caso real: dashboard con pestaña congelada`
- **Tono:** narrativa breve de incidente profesional; conecta síntoma → causa → decisión técnica.
- **Copy refinado:** `Un panel interno ejecutaba while (true) { refrescarDatos(); } para mantener métricas siempre actualizadas. Tras el despliegue, los navegadores de los analistas quedaron al 100 % de CPU y el equipo revirtió el commit. Moraleja: todo bucle necesita condición de salida, break o delegar la repetición a APIs asíncronas (setInterval, eventos — lecciones posteriores).`
- **Variante Clay (referencia):** `callout-info`.

#### 2. Error frecuente — off-by-one

- **Título:** `Error frecuente`
- **Tono:** preventivo, didáctico; señala confusión típica sin culpar al estudiante.
- **Copy refinado:** `Al indexar arrays usa i < array.length, no i <= array.length. El último índice válido es length - 1; un índice extra devuelve undefined (preview lección 7).`
- **Variante Clay:** `callout-warning`.

#### 3. Error frecuente — bucle infinito

- **Título:** `Error frecuente`
- **Tono:** preventivo; vincula olvido de actualización con impacto en el navegador.
- **Copy refinado:** `let n = 0; while (n < 5) { console.log(n); } — olvidaste n++ y n nunca cambia. En el navegador puede congelar la pestaña. Siempre debe haber una salida: condición que cambie, break o límite de seguridad.`
- **Variante Clay:** `callout-warning`.

#### 4. Error frecuente — break vs continue

- **Título:** `Error frecuente`
- **Tono:** clarificador; distingue dos palabras clave que suelen intercambiarse.
- **Copy refinado:** `break y continue solo son válidos dentro de for, while, do...while o switch. Fuera de un bucle provocan SyntaxError. No confundas break (salir del bucle) con continue (saltar a la siguiente vuelta).`
- **Variante Clay:** `callout-warning`.

#### 5. Caso real — checkout bloqueado

- **Título:** `Caso real: checkout bloqueado`
- **Tono:** incidente de negocio; validación preventiva + recuperación.
- **Copy refinado:** `Un script calculaba precioFinal = total / cantidadCupones. Con cantidadCupones = 0 el motor falla o devuelve Infinity y el botón Pagar nunca se habilita. Solución: validar con if antes de dividir y/o try/catch para mostrar feedback al usuario.`
- **Variante Clay:** `callout-info`.

#### 6. Buenas prácticas en catch

- **Título:** `Buenas prácticas en catch`
- **Tono:** normativo suave; orienta a depuración y experiencia de usuario.
- **Copy refinado:** `Evita catch (e) {} vacío: oculta fallos y dificulta depuración. Al menos console.error(e.message) o un mensaje claro al usuario. Usa throw new Error(...) en lugar de throw "texto" para conservar stack trace.`
- **Variante Clay:** `callout-info` o `callout-warning` (accent si se enfatiza anti-patrón).

### Bloques interactivos — títulos y tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Título | `Anatomía del bucle for` — pasos en presente: inicialización, evaluar condición, ejecutar cuerpo, actualización |
| CompareTable | Tres bucles | Encabezados del draft; filas sin abreviar términos técnicos |
| MermaidDiagram | Decisión de bucle | Sin título visible obligatorio; leyenda en cuerpo si hace falta |
| CompareTable | break vs continue | Tabla paralela; tono neutral en celdas |
| PracticeExercise | for vs while | Prompt del draft; éxito: `Correcto. for encaja cuando el número de repeticiones o el rango están definidos (p. ej. imprimir pares del 0 al 8, sumar del 1 al 5).` |
| PracticeExercise | cuenta regresiva while | Éxito: `Correcto. Ejemplo: let n = 10; while (n >= 1) { console.log(n); n--; }` — afirmación breve, sin exclamaciones |
| PracticeExercise | do...while garantía | Éxito: `Correcto. do...while ejecuta el cuerpo mínimo una vez antes de comprobar la condición; while puede no ejecutarse nunca si la condición es falsa al inicio.` |
| PracticeExercise | continue 3 y 5 | Éxito: `Correcto. continue ignora el resto del cuerpo en esas iteraciones; el bucle sigue con 4 y 6.` |
| CodeChallenge | Completa el bucle for | Título: `Completa el bucle for` |
| PracticeExercise | dividir + try/catch | Éxito: `Correcto. throw interrumpe el flujo; catch recupera el control y permite loguear o informar sin tumbar toda la UI.` |
| CodeChallenge | Completa try/catch | Título: `Completa try/catch` |
| PracticeExercise | catch vacío | Éxito: `Correcto. Un catch vacío traga el error; mejor loguear err.message y mostrar feedback recuperable al usuario.` |
| PracticeExercise | comprensión while x=5 | Éxito: `Correcto. Cero veces: x < 5 es falsa desde el inicio (x es 5). A diferencia de do...while, while no garantiza ninguna ejecución.` |
| PracticeExercise | predicción break | Éxito: `Correcto. Solo imprime 0. En i === 1, break sale antes del console.log; nunca se imprime 1 ni 2.` |
| PracticeExercise | orden try/catch | Éxito: `Correcto. Orden: (b) try → (a) catch solo si hay error, o (d) se omite catch → (c) finally siempre.` |
| PracticeExercise | reto PIN | Éxito: `Excelente. Has integrado bucles, control de flujo y manejo de errores en un flujo con reintentos limitados — patrón habitual en formularios y APIs.` |
| Quiz | Feedback general | Explicar el *por qué* de la respuesta correcta en una oración; mencionar condición inicial, break/continue o finally cuando aplique |
| Cierre | Ideas clave | Viñetas paralelas del draft; mantener contraste for / while / do...while y break / continue |
| Cierre | Siguiente paso | `Siguiente lección: funciones y callbacks — funciones llamadas desde bucles y el patrón repetir(n, fn).` — tono de itinerario académico |

### Reto integrador — copy de marca

- **Título H2:** `Reto integrador: validador de PIN con reintentos`
- **Enunciado (lead):** `Un cajero simulado en JavaScript debe validar un PIN correcto (const PIN_CORRECTO = "1234") aplicando bucles, control de flujo y manejo de errores.`
- **Tono:** escenario profesional (cajero, tarjeta bloqueada); reglas numeradas claras; sin gamificación.
- **Mensajes de éxito esperados en consola:** `Acceso concedido`, `Tarjeta bloqueada`, `Error de lectura, reintente`, `Entrada inválida, reintente` — mayúscula inicial, sin punto final obligatorio en logs.

### Notas EN (fase i18n)

- Título EN sugerido: `Loops and error handling in JavaScript: for, while, do-while, and try/catch`
- Mantener equivalencia terminológica: *break*, *continue*, *try/catch*, *finally*, *throw*, *runtime*.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- Casos reales: traducir narrativa; conservar nombres técnicos (`while (true)`, `setInterval`).
