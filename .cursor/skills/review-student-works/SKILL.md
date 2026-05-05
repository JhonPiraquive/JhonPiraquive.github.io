---
name: review-student-works
description: Reviews each student PDF or Word file in works/ (student name in the filename), writes one concise Markdown report per student under works/results/ with a 1–5 note, **direct feedback in Spanish** (third person, professional teacher voice, specific bullets). Optionally uses qualifications/activity.md for scope and criteria. Use when batch-reviewing class entregas, grading everything in works, or when the user asks to review student documents and save per-student results.
disable-model-invocation: true
---

# Review student works (per-file entregas)

## Paths (this repo)

- **Submissions:** `qualifications/works/` at the repository root. Place **one or more** `.pdf`, `.doc`, or `.docx` files here. The **student name** must appear in each file’s name (e.g. `Juan_Perez_informe.pdf`, `maria-gomez.docx`).
- **Output:** `qualifications/works/results/` — **create this folder** if it does not exist. Write **one `.md` file per student** here, not inside nested team folders unless the user says otherwise. **Language:** every report must be written **in Spanish** (titles, note, feedback, optional sections).
- **Activity (optional):** `qualifications/activity.md` — when present, use it for **scope** and **evaluation criteria**. If the user points elsewhere, use their path.

If the user changes any of these paths, follow theirs.

## Before reviewing

1. If `qualifications/activity.md` exists, read it and use it as scope and rubric. If the activity references an annex in the repo, read the annex and fold it into scope. If the annex is missing, note that under **Limitaciones de la revisión** in the student file (in Spanish).
2. List submission files: `qualifications/works/*.{pdf,doc,docx}` — **exclude** `qualifications/works/results/**` and any other subfolders unless the user asks to include them.
3. For each file, derive a **student label** from the filename: use the stem (name without extension), normalizing to a short **safe filename** for the report (e.g. ASCII, hyphens: `juan-perez-informe` → or use the clearest name segment; avoid collisions — if two files map to the same stem, disambiguate with a suffix).
4. **Extract text** from PDFs and Word files (e.g. `pdfplumber` / `pypdf` for PDF, `python-docx` for `.docx`; for legacy `.doc` use whatever is available in the environment, or report that the format could not be read). If extraction fails or the PDF is image-only, state that **in Spanish** in the report and grade only what is available.

## Reviewer

Use the **student-work-reviewer** subagent (see `.cursor/agents/student-work-reviewer.md`) for a **strict, criteria-based** 1–5 note and evidence when `activity.md` (or user-provided criteria) exists. **Pass through the skill requirement:** final written reports must follow **voz docente** below and be **in Spanish**, even if internal reasoning is in another language.

If there is **no** activity file, still assign a **1–5 note** from the same scale in the agent definition, using general **university-level** expectations (clarity, structure, argument or technical depth, alignment with the task implied by the document, citations/sources if relevant).

## Voz y estilo (obligatorio)

- **Rol:** el texto es **retroalimentación escrita por un docente** universitario; tono **profesional**, **respetuoso** y **claro**.
- **Persona:** redactar en **tercera persona** (p. ej. *se observa*, *la entrega*, *el trabajo*, *se recomienda*, *conviene*). Evitar tutear (*tú*, *debes*) salvo que el usuario pida lo contrario.
- **Concisión:** priorizar **listas con viñetas** breves; cada punto debe ser **concreto** (qué falla o qué acertar, no generalidades).
- **Directo al estudiante:** el informe va dirigido a quien entregó; los puntos deben traducirse en **acciones o focos** comprensibles de un vistazo.
- **Sin puntos de mejora:** si el desempeño es satisfactorio y no caben observaciones sustantivas, **no rellenar** con recomendaciones genéricas; basta un cierre breve, p. ej. *Buen trabajo.* o *Se reconoce una entrega acorde a lo solicitado; no se formulan observaciones adicionales.*

## Output: one Markdown file per student

For each submission file, write **`qualifications/works/results/<student-slug>.md`**. **Do not** append duplicate reports for the same student in one run; one file per student per review pass.

Use this structure in every file (all prose **in Spanish**):

```markdown
# Revisión — <Nombre del estudiante según el archivo o el documento>

**Nota (1–5):** <entero 1–5>

## Retroalimentación

- <punto específico 1; tercera persona; tono docente>
- <punto específico 2; solo si aplica>
- …

<Si no hay puntos de mejora: una sola línea breve, p. ej. **Buen trabajo.** o la frase equivalente arriba. No inventar viñetas vacías.>

## Opcional (solo si aporta)

- **Fortalezas** — máximo 2–3 viñetas breves
- **Limitaciones de esta revisión** — p. ej. actividad ausente, binario ilegible, alcance asumido
```

- **Nota** y **Retroalimentación** son **obligatorias**. La sección **Retroalimentación** debe ser **breve** (salvo que el usuario pida más detalle).
- Traslada la salida del revisor a este formato; elimina redundancia y párrafos largos en favor de viñetas concretas.

## Invoking the reviewer

For each submission (or batches if context allows):

1. Build a **document bundle**: extracted text + filename + optional `activity.md` criteria.
2. Run a **Task** with `subagent_type: student-work-reviewer` and pass document, scope, evaluation criteria, and **explicit instruction:** informe final en español, **tercera persona**, **docente**, **viñetas concretas**, y regla de **buen trabajo** si no hay mejoras.
3. From the Task result, **write** the corresponding `qualifications/works/results/<slug>.md` using the template above, **in Spanish**.

Use parallel Tasks only when submissions are independent and context size allows; otherwise run sequentially.

## After all reviews

1. Tell the user what was in `qualifications/works/`, what was written under `qualifications/works/results/`, and list the created paths.
2. Mention any file that could not be read or any name collision you resolved.

## Empty or missing inputs

- If `qualifications/works/` is missing or has no matching files, report that; do not invent reviews.
- If `qualifications/works/results/` is missing, **create** it before writing.
