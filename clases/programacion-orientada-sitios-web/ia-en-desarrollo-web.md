# Instrucciones para frontend-developer: ia-en-desarrollo-web.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/ia-en-desarrollo-web.html`

---

1. Crear `clases/programacion-orientada-sitios-web/ia-en-desarrollo-web.html`. `<html lang="es">`. Título: "IA en el Desarrollo Web | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "Usos", "Riesgos", "Verificación", "Estructura con IA", "Flujo de trabajo".
4. Hero: badge "Tema 22", `<h1>` "IA en el Desarrollo Web", subtítulo "Cómo usar herramientas de IA para programar de forma responsable, eficiente y verificable." Botón scroll a `#usos`.
5. Crear `<section id="usos">` padding 80px 0. Contiene:
   - `<h2>` "Usos de la IA en Desarrollo".
   - Párrafo: "Las herramientas de IA generativa (GitHub Copilot, Claude, ChatGPT, Gemini, Cursor) han cambiado la forma en que los desarrolladores trabajan. No reemplazan el pensamiento crítico; amplifican la productividad cuando se usan correctamente."
   - Grid de tarjetas de usos (3 cols desktop):
     - `bi-lightning-charge` "Generación de código boilerplate": crear estructuras repetitivas (CRUD, DTOs, tests unitarios) en segundos.
     - `bi-search` "Depuración": explicar errores, proponer soluciones, analizar stack traces.
     - `bi-translate` "Traducción entre lenguajes": convertir código de JavaScript a TypeScript, de Python a Go, etc.
     - `bi-book` "Documentación": generar JSDoc, README, comentarios de código.
     - `bi-lightbulb` "Refactoring": sugerir mejoras de estructura, aplicar patrones de diseño.
     - `bi-question-circle` "Aprendizaje acelerado": explicar conceptos, generar ejemplos, resolver dudas en contexto.
     - `bi-shield-check` "Revisión de seguridad": identificar vulnerabilidades comunes (SQL injection, XSS, CORS mal configurado).
     - `bi-diagram-3` "Diseño de arquitectura": proponer estructuras de proyectos, diagramas de flujo.
     - `bi-file-earmark-text` "Generación de tests": crear casos de prueba unitarios e integración.
   - Herramientas en tabla: Herramienta | Tipo | Integración | Fortaleza principal. Datos:
     - GitHub Copilot | Autocompletado IDE | VS Code, JetBrains, Neovim | Código inline, sugerencias en contexto
     - Claude (Anthropic) | Chat + Agente | Web, API, Claude Code | Razonamiento, arquitectura, código largo
     - ChatGPT (OpenAI) | Chat | Web, API, plugins | Versatilidad, explicaciones
     - Cursor | IDE con IA | Propio (fork VS Code) | Chat + edición directa del codebase
     - Gemini | Chat + IDE | Google Cloud, VS Code | Integración Google, proyectos GCP
6. Crear `<section id="riesgos">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Riesgos y Limitaciones".
   - Tarjetas de riesgo (borde rojo `#ff4757`):
     - `bi-exclamation-triangle` "Alucinaciones (Hallucinations)": "La IA puede generar código plausible pero incorrecto, inventar APIs que no existen, o citar documentación ficticia. Todo output debe verificarse."
     - `bi-eye-slash` "Código sin comprensión": "Copiar código generado sin entenderlo es la forma más rápida de acumular deuda técnica y bugs imposibles de depurar."
     - `bi-lock` "Privacidad de datos": "Enviar código propietario, credenciales o datos de usuarios a APIs de IA puede violar acuerdos de confidencialidad y regulaciones (GDPR, Habeas Data)."
     - `bi-cpu` "Dependencia excesiva": "Desarrolladores que no practican sin IA pierden la capacidad de razonar independientemente sobre problemas."
     - `bi-calendar-x` "Conocimiento desactualizado": "Los modelos tienen una fecha de corte de conocimiento. Librerías, APIs y mejores prácticas cambian rápido."
     - `bi-bug" "Vulnerabilidades de seguridad": "El código generado puede incluir patrones inseguros si el prompt no especifica requisitos de seguridad."
   - Nota: "La IA es como un desarrollador junior muy rápido: produce mucho en poco tiempo, pero necesita revisión de un senior antes de llegar a producción."
7. Crear `<section id="verificacion">` padding 80px 0. Contiene:
   - `<h2>` "Cómo Verificar el Código Generado".
   - Lista de buenas prácticas con íconos verdes:
     - Leerlo línea por línea: si no puedes explicar qué hace cada línea, no lo uses.
     - Correrlo en local: probarlo con casos normales, casos borde y casos de error.
     - Escribir tests: si el código pasa los tests que describes, tienes mayor confianza.
     - Revisar con herramientas: ESLint, TypeScript compiler, SonarQube, OWASP ZAP.
     - Buscar las dependencias: verificar que las librerías mencionadas existen y están activas en npm/PyPI.
     - Contrastar con documentación oficial: MDN, docs.angular.io, react.dev, etc.
     - Code review con el equipo: otro par de ojos humanos antes de mergear.
   - Flujo de verificación en diagrama:
     ```
     Prompt a la IA
           │
           ▼
     Código generado
           │
           ▼
     ¿Lo entiendes completamente?
       ├── No → Pedir explicación a la IA / buscar en docs
       └── Sí
              │
              ▼
         Ejecutar tests locales
              │
              ├── Fallan → Corregir (no aceptar el output ciegamente)
              └── Pasan
                       │
                       ▼
                 Lint + Type check
                       │
                       ▼
                 Code Review humano
                       │
                       ▼
                   Merge/Deploy
     ```
8. Crear `<section id="estructura">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Estructura de Proyecto con IA: `.claude/` y `CLAUDE.md`".
   - Párrafo: "Claude Code (y otros agentes de IA) pueden operar sobre un codebase de forma más efectiva cuando el proyecto incluye documentación explícita de contexto, reglas y agentes especializados. La convención es crear una carpeta `.claude/` en la raíz del proyecto."
   - Estructura de directorios en bloque código:
     ```
     mi-proyecto/
     ├── .claude/
     │   ├── agents/              ← Agentes especializados (sub-agentes)
     │   │   ├── frontend-developer.md
     │   │   ├── backend-developer.md
     │   │   ├── code-reviewer.md
     │   │   └── test-writer.md
     │   ├── rules/               ← Reglas y restricciones del proyecto
     │   │   ├── typescript.md    (reglas de TS del equipo)
     │   │   └── security.md      (checklist de seguridad)
     │   └── kb/                  ← Knowledge Base
     │       ├── arquitectura.md  (decisiones de arquitectura)
     │       ├── api-contratos.md (formato esperado de APIs)
     │       └── glosario.md      (términos del dominio)
     ├── CLAUDE.md                ← Instrucciones principales para el agente
     ├── src/
     └── package.json
     ```
   - Qué va en `CLAUDE.md`: "Este archivo le dice al agente qué es el proyecto, cómo está organizado, qué tecnologías usa, convenciones de código, comandos importantes y qué NO debe hacer."
   - Ejemplo de `CLAUDE.md` mínimo en bloque código:
     ```markdown
     # Mi Proyecto

     ## Stack
     - Frontend: React + TypeScript + Vite
     - Backend: NestJS + PostgreSQL
     - Deploy: Docker + GitHub Actions

     ## Convenciones
     - Naming: camelCase para variables, PascalCase para clases/componentes
     - Archivos: kebab-case (tarjeta-producto.tsx)
     - Tests: Jest, un archivo .spec.ts por cada servicio
     - Commits: Conventional Commits (feat:, fix:, docs:, etc.)

     ## Comandos importantes
     - `npm run dev` — servidor de desarrollo
     - `npm run test` — correr tests
     - `npm run build` — build de producción
     - `docker compose up` — levantar entorno completo

     ## NO hacer
     - No modificar archivos en `dist/`
     - No hardcodear secrets (usar variables de entorno)
     - No hacer push directo a main
     ```
   - Agentes especializados: "Cada archivo en `.claude/agents/` define un sub-agente con un rol específico, su propio system prompt y sus herramientas disponibles. El agente principal puede delegar tareas a estos sub-agentes."
   - Ejemplo de agente en `.claude/agents/code-reviewer.md`:
     ```markdown
     ---
     name: code-reviewer
     description: Revisa PRs para detectar bugs, vulnerabilidades y violaciones de convenciones.
     ---

     Eres un revisor de código experto. Para cada PR:
     1. Verificar que no hay secrets hardcodeados.
     2. Confirmar que hay tests para el nuevo código.
     3. Detectar posibles vulnerabilidades (inyección, XSS, CSRF).
     4. Verificar que se siguen las convenciones del CLAUDE.md.
     5. Proponer mejoras de rendimiento si aplica.
     ```
9. Crear `<section id="flujo">` padding 80px 0. Contiene:
   - `<h2>` "Flujo de Trabajo Recomendado con IA".
   - Diagrama de flujo como lista numerada visual (tarjetas conectadas con flechas CSS):
     1. "Define el problema claramente tú mismo antes de preguntarle a la IA."
     2. "Escribe un prompt específico con contexto: lenguaje, framework, restricciones, lo que ya intentaste."
     3. "La IA genera una propuesta de solución."
     4. "Leerla, entenderla, adaptarla al contexto real del proyecto."
     5. "Correr tests y verificación estática (lint, typecheck)."
     6. "Si hay errores, iterar con la IA: pegar el error exacto y pedir análisis."
     7. "Code review humano antes de integrar."
     8. "Documenta la decisión tomada (en comentarios o CLAUDE.md) para que el equipo entienda el porqué."
   - Prompt de ejemplo efectivo en bloque código:
     ```
     Contexto: proyecto NestJS + TypeScript + PostgreSQL.
     Convención: inyección de dependencias mediante interfaces (DIP de SOLID).

     Tarea: crear un servicio ProductosService que:
     - Inyecte IProductoRepository (no MySQLProductoRepository directamente)
     - Tenga métodos: findAll(), findById(id), create(dto), update(id, dto), delete(id)
     - Use async/await
     - Lance NotFoundException si el producto no existe en findById, update y delete
     - Sea completamente tipado en TypeScript

     Restricciones:
     - No usar any
     - No importar directamente clases de infraestructura
     - Incluir JSDoc en cada método público
     ```
   - Contraste con prompt inefectivo: "hazme un servicio para productos en nest" — sin contexto, sin restricciones, genera código genérico que no encaja en el proyecto.
10. Sección recursos: `naming-conventions.html`, `principios-solid.html`, `herramientas-desarrollo.html`, `typescript.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
