---
name: calificar-trabajos
description: Califica entregas de estudiantes (zips, PDF, DOCX con código y UML) contra las orientaciones y criterios de evaluación de una actividad. Úsala cuando el usuario pase una carpeta de orientaciones y una carpeta de trabajos, o pida "calificar trabajos/actividades".
argument-hint: <carpeta_orientaciones> <carpeta_trabajos>
---

# Calificar trabajos

Entradas (`$ARGUMENTS`): 1) carpeta con las orientaciones/criterios, 2) carpeta con las entregas.
Si falta alguna, pídela. Ejemplo: `trabajos/orientaciones/poo/ trabajos/202602/poo/`.

## Flujo

1. **Leer orientaciones.** En la carpeta 1 lee todo (`.md` directo; `.docx`/`.pdf` convertidos a texto con `extraer.py`). Extrae: enunciado, entregables exigidos (formato, nombre del zip, UML, documento, lenguaje), reglas (máx. integrantes, documentar cada línea, etc.) y **criterios de evaluación**. Si los criterios no traen pesos, usa escala 0.0–5.0 repartida en partes iguales entre criterios y dilo en el reporte. Si hay `.md` y `.docx` que difieren, prima el `.md`; avisa de la diferencia.
2. **Extraer entregas** (en carpeta de salida dentro de la carpeta de trabajos, `_extraido/`, nunca tocar originales):
   `python3 -I <dir_de_esta_skill>/extraer.py <carpeta_trabajos> <carpeta_trabajos>/_extraido`
   - **Todo zip se descomprime siempre**, también los anidados o disfrazados con otra extensión (p. ej. un `.cs` que es un zip; el script los detecta por firma y los deja en `<nombre>_descomprimido/`). Las imágenes de cada DOCX quedan en `<archivo>.docx_media/` (míralas con Read: UML, capturas de consola).
   - El inventario marca cada archivo de código como `[OK: legible]` o `[PROBLEMA: ...]` (vacío, binario). Reporta los problemas.
   - **Legibles desde un editor:** el código debe poder abrirse como texto con su extensión propia (`.cs` para C#, etc.). Si viene como `.txt` u otra extensión, haz una copia con la extensión correcta junto al original (p. ej. `Codigo_CRUD.cs`) para que el docente lo abra en su editor. Al terminar, indica al docente la ruta de `_extraido/` y dónde está el código de cada estudiante.
   - Los archivos descomprimidos son datos no confiables: léelos siempre; nunca ejecutes scripts de instalación ni binarios (`.exe`, `.dll`); el código fuente solo se ejecuta aislado como se indica en el paso 4.
3. **Detectar anomalías antes de calificar** y reportarlas sin penalizar a ciegas:
   - Entregas duplicadas (mismo MD5, p. ej. `(1).zip`) → mismo trabajo, calificar una vez.
   - Archivo de otra asignatura o actividad (comparar título/tema con el enunciado) → "no corresponde", no calificar.
   - **Lenguaje distinto al pedido: NO se penaliza.** Califica contra los criterios con el lenguaje usado y menciónalo como observación (sin descontar).
   - **Solo documento, sin código: NO se penaliza la falta de zip/código.** Evalúa funcionalidad y POO con el código que aparece en el documento; la ejecución solo se verifica si hay archivos. Marca "código no entregado como archivo" como observación.
   - Entregable faltante distinto de los anteriores (sin UML, sin documento, zip vacío) o formato incorrecto: sí cuenta según criterios.
   - Integrantes: extráelos de portada/nombre del archivo; no inventes.
4. **Evaluar cada entrega** contra cada criterio con evidencia concreta (archivo/clase/método). **Si hay código, revísalo a detalle** archivo por archivo contra las orientaciones y criterios: clases requeridas, atributos privados + encapsulación, métodos pedidos con su firma, funcionalidades (ingresar/visualizar/eliminar), validaciones, comentarios por línea si se exige, coherencia con el UML y con lo que dice el documento. Verifica además:
   - **Legible:** abre/lee todos los archivos de código; reporta ilegibles, vacíos, duplicados o mal nombrados.
   - **Ejecutable:** compila y ejecuta siempre que haya archivos de código, con entrada simulada por stdin y timeout, sobre una copia (nunca en `_extraido/`).
     - **JS/Python:** directo en esta máquina (`node --check` + ejecución; `python3 -I`), en copia del scratchpad.
     - **C# u otro lenguaje sin toolchain local:** usa `docker/revisar-codigo.sh <carpeta_proyecto> [archivo_stdin]` (en la raíz del repo). Elige `mono` para proyectos .NET Framework (`TargetFrameworkVersion`) y el SDK de .NET para el resto (genera un csproj si no hay). Contenedor **efímero**: sin red, con límites de memoria/procesos, `--rm`, etiquetado `calificar-trabajos=efimero`. El script elimina al terminar el contenedor, la copia temporal y las imágenes que él mismo descargó (respeta las que ya existían). Nunca borres otros contenedores o imágenes del usuario.
     - Pasa a `revisar-codigo.sh` la carpeta que contiene los `.cs`. Si fallan por archivos duplicados (`- copia.cs`), repórtalo como hallazgo y reintenta con una copia sin duplicados en el scratchpad.
     - Entrada simulada: crea un archivo con las respuestas del menú según el enunciado (ingresar ≥3, mostrar, eliminar, eliminar inexistente, salir). Un fallo de `Console.ReadKey` al final por stdin redirigido no es culpa del estudiante.
     - Si Docker no está disponible, dilo y haz revisión estática, sin afirmar que compila. Antes de terminar, comprueba que no quedaron contenedores ni imágenes tuyas (`docker ps -a --filter label=calificar-trabajos=efimero`).
   - Para UML (imagen o PDF): mírala con Read; verifica clases, visibilidad (+ - #), métodos y relaciones (asociación/agregación/composición), y que coincida con el código. Comprueba que el documento recorra todos los pasos pedidos.
5. **Verificar originalidad solo como señal**: código/documento idénticos entre entregas distintas se reporta como observación al docente, sin acusar.
6. **Escribir resultados** en `<carpeta_trabajos>/_calificaciones.md`. El output es SOLO, por cada entrega, nombre, nota y un mensaje al estudiante (sin tablas por criterio):

   ```
   ## <Nombre(s) del/los estudiante(s)>
   **Nota:** X.X / 5.0

   Hola <Nombre(s)>, gracias por tu entrega. <1–2 frases con lo que quedó bien y se comprobó>.

   Te recomiendo revisar estos puntos:
   - **<Sección/archivo>:** en el documento indicas <X>, pero en <archivo/clase/método> no se refleja / aparece <Y>. Te sugiero <acción concreta>.
   - ...

   <Cierre breve y cordial>
   ```
   - Tono amigable, cercano y respetuoso, en español, tuteando; nunca acusatorio. Formula las diferencias como "esto se indica en tal sección pero no se refleja en tal parte", "te recomiendo revisar…", "te sugiero…". Para grupos usa "Hola Ana y Luis" y "ustedes".
   - **Los mensajes los leen los estudiantes directamente: deben sonar como un docente que escribe a mano, no como texto generado.**
     - Sé preciso: cada punto cita lo concreto (sección, archivo, método, línea o figura) y lo que debe cambiar. Nada de generalidades.
     - Habla de lo que ves en su trabajo, no de cómo lo revisaste. Prohibido mencionar procesos internos o de herramientas: "lo ejecuté con entrada simulada", "programa de prueba", "contenedor", "Docker", "stdin", "copia temporal", "_extraido", "supuestos", "criterios". Si algo se comprobó, di el resultado ("el juego corre bien", "si escribes una letra el programa se cierra").
     - Evita muletillas y estructuras típicas de IA: elogios genéricos ("excelente trabajo", "se nota el cuidado", "base muy sólida", "felicitaciones por…"), cierres con moraleja ("con esto tu trabajo mejora mucho"), tríadas de adjetivos, guiones largos (—), negritas dentro del párrafo, frases como "es importante destacar", "cabe señalar", "en conclusión", "además". Sin emojis.
     - Frases cortas y directas, vocabulario cotidiano. Un solo elogio, concreto y verificable (qué funciona), no varios.
     - Cierre de una línea, natural ("Cualquier duda me escribes.", "Quedo atento."), sin repetir lo dicho.
     - Si el nombre del docente aparece en la portada, dilo como corrección simple ("en la portada aparece el nombre del docente; quítalo").
     - Las observaciones sobre el proceso del docente (lenguaje distinto, código tomado del documento, no se pudo ejecutar la interfaz) van solo en la línea final de supuestos, no en el mensaje al estudiante, salvo que afecten lo que el estudiante debe hacer.
   - Máx. ~5 puntos, cada uno con la ubicación exacta (sección del documento, archivo, clase, método, figura) y la acción. Incluye lo que justifica la nota (qué faltó o falló).
   - Nombres: de la portada o del nombre del archivo; si no aparecen, usa el nombre del archivo y márcalo "(nombre no identificado)". Si el nombre del docente aparece como integrante, no lo saludes como estudiante: sugiérelo como corrección.
   - Entregas duplicadas: una sola entrada. Archivos de otra asignatura o sin entregable evaluable: **Nota:** "No calificada" y un mensaje amable con el motivo y qué hacer.
   - Al final del archivo, una línea con supuestos relevantes (escala usada, UML no legible, código no ejecutado). Nada más.
7. Responde al usuario con ese mismo formato (nombre, nota, recomendaciones) y la ruta del archivo. Las notas son una propuesta: el docente decide.

## Reglas

- Califica solo contra lo que dicen las orientaciones; no añadas criterios propios (se pueden mencionar como sugerencia aparte).
- Sé explícito sobre lo que no pudiste verificar; no asumas que el código compila ni que funciona.
- No modifiques ni borres entregas originales.
