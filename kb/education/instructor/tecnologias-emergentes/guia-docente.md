# Guía docente — Tecnologías emergentes

Uso interno. No se publica en el portal (ADR 011). Ruta pública: `/es/teaching/tecnologias-emergentes`.

## Enfoque (reorganización del 28-oct-2026)

El módulo se centra en tecnologías emergentes: identificarlas, entender la IA moderna como caso principal y decidir si adoptarlas y cómo. React deja de ser el eje y pasa a una **guía de apoyo** en tres partes que acompaña a las actividades (todas siguen siendo proyectos Vite + React). Las URL anteriores (`clase-01-fundamentos/*`, `clase-02-interfaces-con-react-y-mui/*`, `clase-03-datos-reales-y-crud/*`) redirigen con alias (`_aliases/legacy-aliases.ts`).

## Escala 0 a 100 y tiempos

| Clase | Nivel | Duración | Apoyo técnico para la actividad |
|-------|-------|----------|---------------------------------|
| 1. Identificar una tecnología emergente | 0–35 | 2 a 3 h | Guía React parte 1 → Actividad 1 (clon de productos) |
| 2. IA moderna, de modelos a agentes | 35–70 | 2 a 3 h | Guía React parte 2 → Actividad 2 (módulo docente) |
| 3. Decidir si adoptar y cómo hacerlo | 70–100 | 2 a 3 h | Guía React parte 3 → Actividad 3 (CRUD HTTP) |

| Clase | Qué aprende el estudiante | Qué puede mostrar al final |
|-------|---------------------------|----------------------------|
| 1 | Definición, 5 atributos (Rotolo, Hicks y Martin), moda vs tendencia, curva S, hype cycle, difusión y abismo, TRL, señales, vigilancia, radar, panorama actual y candidatas futuras (3 horizontes) | Ficha de identificación de una tecnología con evidencia y fuentes |
| 2 | LLM, tokens, entrenamiento/inferencia, tipos y límites; roles, sesiones sin memoria, ventana de contexto, compactación, memoria persistente, RAG; tool use, ciclo del agente, harness, subagentes, autonomía; AGENTS.md, comandos, skills, MCP, hooks, plugins; seguridad, verificación, ética y regulación | Un agente configurado para un proyecto (instrucciones, skill, hook) y explicado pieza por pieza |
| 3 | Criterios técnicos/negocio/personas, matriz ponderada con eliminatorios, nuevo ≠ mejor, PoC, piloto, métricas, radar del equipo, ADR, riesgos, reversibilidad, gestión del cambio, casos, método para aprender, IA como tutora, vigilancia personal | Informe de decisión completo (ficha + matriz + PoC + riesgos + ADR) |

## Cómo repartir cada clase (en vivo)

**Clase 1**: p1 definición y atributos (25 min, ejemplos que traiga el grupo) · p2 modelos de evolución (35 min; ubicar entre todos 3 tecnologías en el ciclo) · p3 señales y radar (25 min; ejecutar en vivo el script de descargas npm) · p4 panorama (20 min) · p5 futuro (15 min, debate sobre los casos fallidos) · práctica: ficha de drones agrícolas en grupo; la ficha libre queda de tarea.

**Clase 2**: p1 modelos (30 min; correr la simulación de temperatura) · p2 sesiones y contexto (30 min; la simulación de sesión es clave para desmontar la idea de que «el modelo recuerda») · p3 agentes y harness (35 min; correr el agente en consola) · p4 extensiones (35 min; si es posible, demostrar en vivo con un agente real: AGENTS.md, una skill, un hook) · p5 riesgos (20 min) · práctica guiada en clase o como tarea.

**Clase 3**: p1 criterios y matriz (35 min; cambiar pesos en vivo para mostrar sensibilidad) · p2 PoC y piloto (25 min) · p3 ADR y riesgos (25 min) · p4 casos (30 min, discusión) · p5 aprender (15 min) · práctica: informe de decisión (tarea final).

## Decisiones de contenido

- La IA se trata como caso de estudio de tecnología emergente y con conceptos neutrales al proveedor (modelo, harness, sesión, MCP, skills, hooks, plugins). Claude Code aparece como ejemplo concreto de harness porque su documentación cubre todas las piezas; se mencionan Codex, Gemini CLI, Copilot y Cursor.
- El código de llamada a un modelo usa el SDK oficial de Anthropic con `model: process.env.MODELO_IA` para no fijar nombres de modelo en el contenido del estudiante.
- Los ejemplos de prompts del sistema usan segunda persona («Eres…») porque así se redactan los prompts reales; es texto citado, no voz del material.

## Verificado en fuentes (28-oct-2026; no se publica en páginas del estudiante)

- MCP: arquitectura host/cliente/servidor, primitivas tools/resources/prompts, elicitation; sampling marcado como obsoleto en la versión de protocolo 2026-07-28; transportes stdio y Streamable HTTP (modelcontextprotocol.io/docs/learn/architecture).
- Agentic AI Foundation (Linux Foundation, dic-2025) aloja MCP, goose y AGENTS.md; Anthropic donó Agent Skills a la AAIF el 22-oct-2026.
- Plugins de Claude Code: manifiesto `.claude-plugin/plugin.json`; componentes skills, agents, hooks, MCP servers; marketplaces (code.claude.com/docs/en/plugins).
- WEF Top 10 Emerging Technologies 2026 (23-jun-2026): everything-to-grid, extracción directa de litio, enfriamiento radiativo pasivo, destrucción de PFAS, fermentación de precisión, exosomas, vacunas ARNm personalizadas, simulación cuántica para fármacos, modelos del mundo, criptografía basada en retículos.
- Gartner Hype Cycle for Emerging Technologies 2026 (23-jul-2026): 30 tecnologías, informe de pago; no se cita su contenido.
- CONPES 4144 (14-feb-2025): Política Nacional de IA de Colombia, 6 objetivos, horizonte 2030.

## Versiones de referencia de la guía React (verificadas el 16-oct-2026)

Node 22.22+ · Vite 8.x · React 19.3 · MUI 9.x · React Router 8.x · json-server 0.17.4 (1.x en beta) · React Compiler 1.0.

| Material del curso | Hoy | Qué decir |
|--------------------|-----|-----------|
| `react-router-dom` (v6) y `npm start` (CRA) | `react-router` 8, Vite | Mismo concepto; cambia el import y el comando |
| `<Grid item xs={..}>` | MUI 9: `<Grid size={{...}}>` | Si el código copiado no se ve bien, revisar Grid |
| `PropTypes` / `defaultProps` | React 19 los ignora | Parámetros por defecto, JSDoc o TypeScript |
| Videos Midudev (2021) y Bluuweb (2020) sobre MUI | MUI 9 | Sirven para el concepto; copiar código de mui.com |
| API del proyecto con `_id` (Mongo) | json-server usa `id` | Revisar el nombre del id en la pestaña Red |

## Pendiente

- Los resultados de aprendizaje oficiales de la asignatura siguen centrados en JavaScript/React/Vite; se publican textuales. Si la asignatura los actualiza hacia el nuevo enfoque, reemplazarlos en `index/sections/ResultadosAprendizajeSection.tsx`.
- Entorno local: `node_modules` tiene Next 15.5.19 aunque `package.json` pide ^16.3.0 (lock en 16.4.2); conviene `npm install`. El build falla de forma intermitente con `Cannot read properties of null (reading 'hash')` si queda un `.next` previo; `rm -rf .next` lo resuelve.
