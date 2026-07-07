---
track: posw
slug: ia-en-desarrollo-web
title: "IA en el Desarrollo Web"
order: 21
prerequisites:
  - naming-conventions
related:
  - herramientas-desarrollo
  - principios-solid
  - naming-conventions
  - typescript
source_brief: kb/education/pipeline/posw/ia-en-desarrollo-web/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - UsosIaSection
  - RiesgosSection
  - VerificacionSection
  - EstructuraClaudeSection
  - AgentesSection
  - FlujoTrabajoSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Enumerar** usos productivos de IA en desarrollo web (boilerplate, debug, refactor, tests, documentación).
- **Identificar** riesgos (alucinaciones, código sin comprensión, privacidad, dependencia, desactualización).
- **Aplicar** un flujo de verificación antes de mergear código generado por IA.
- **Estructurar** contexto de proyecto con `.claude/`, reglas y `CLAUDE.md` para agentes.
- **Redactar** prompts efectivos con stack, convenciones y restricciones (ej. DIP, sin `any`).

## Prerrequisitos

- **Lección `naming-conventions`:** convenciones de código y APIs.
- **Lección `principios-solid`:** DIP, interfaces y capas de servicio.
- Familiaridad con Git, tests y herramientas de desarrollo (Cursor, VS Code).

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Copilot, Claude, ChatGPT, Cursor y Gemini amplifican productividad, pero **no sustituyen** criterio técnico. La IA es un junior muy rápido; el senior humano revisa antes de producción.

<!-- interactive: Callout -->
{
  "title": "Fecha de corte del modelo",
  "children": "Los modelos desconocen librerías o APIs muy recientes. Siempre contrasta con documentación oficial y registros npm/PyPI."
}

---

### 1) Usos productivos de IA en desarrollo web

**Sección TSX:** `UsosIaSection`

#### Usos válidos

- CRUD, DTOs y boilerplate repetitivo.
- Explicar stack traces y errores de compilación.
- Traducir entre lenguajes o frameworks.
- JSDoc, refactor SOLID, revisión de seguridad.
- Diseño de arquitectura y generación de tests.

#### Comparativa de herramientas

<!-- interactive: CompareTable -->
{
  "headers": ["Herramienta", "Tipo", "Integración", "Fortaleza"],
  "rows": [
    ["GitHub Copilot", "Autocompletado", "IDE", "Snippets en tiempo real"],
    ["ChatGPT / Claude", "Chat", "Web / API", "Explicaciones y refactor largos"],
    ["Cursor", "Agente IDE", "Editor completo", "Contexto de repo + agentes"],
    ["Gemini", "Chat + IDE", "Google Cloud", "Integración con ecosistema GCP"]
  ]
}

---

### 2) Riesgos y errores comunes

**Sección TSX:** `RiesgosSection`

#### Mapa de riesgos

- **Alucinaciones:** APIs inventadas, paquetes inexistentes, docs ficticias.
- **Código sin comprensión:** copiar-pegar acumula deuda técnica imposible de depurar.
- **Privacidad:** no enviar secrets, PII ni código propietario sin acuerdo (GDPR, Habeas Data).
- **Dependencia excesiva:** perder capacidad de razonar sin IA debilita entrevistas e incidentes.

#### Caso real: librería inventada

<!-- interactive: Callout -->
{
  "title": "express-rate-limiter-pro no existe",
  "children": "Un dev pidió middleware de rate limiting; la IA importó un paquete inexistente. CI pasó lint local sin npm install limpio; producción falló en deploy. Decisión: verificar en npm, npm ci en pipeline, rechazar PR sin package-lock actualizado."
}

#### Caso real: fuga de código propietario

<!-- interactive: Callout -->
{
  "title": "Core de pagos en chat público",
  "children": "Un consultor pegó fragmentos del core de pagos para refactorizar. Auditoría detectó fuga de lógica propietaria. Decisión: política de datos, IA enterprise con DPA, anonimizar snippets, agentes locales sin telemetría sensible."
}

#### Errores comunes

- Aceptar código sin leer línea por línea.
- Prompt vago sin stack ni restricciones.
- Pegar API keys y `.env` en el chat.
- Saltar tests porque "la IA ya lo probó".
- Omitir code review humano en PRs 100% generados por IA.

---

### 3) Flujo de verificación

**Sección TSX:** `VerificacionSection`

#### Diagrama del flujo

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  P[Prompt con contexto] --> G[Código generado]\n  G --> E{¿Lo entiendes?}\n  E -->|No| X[Pedir explicación / docs oficiales]\n  X --> G\n  E -->|Sí| T[Tests locales]\n  T -->|Fallan| F[Corregir con error exacto]\n  F --> G\n  T -->|Pasan| L[Lint + typecheck]\n  L --> R[Code review humano]\n  R --> M[Merge / Deploy]"
}

#### Checklist antes del merge

1. Entender cada línea del código generado.
2. Ejecutar tests locales (`npm test`).
3. Correr lint y typecheck.
4. Verificar dependencias en registro oficial.
5. Code review humano obligatorio.

#### Verificación con curl

<!-- code: bash -->
```bash
# Tras generar un endpoint, probar localmente
curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $TOKEN" \
  http://localhost:3000/api/v1/productos/42
# Esperado: 200 o 404 según caso — no asumir sin ejecutar
```

<!-- code: http -->
```http
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "statusCode": 404,
  "message": "Producto 42 no encontrado",
  "error": "Not Found"
}
```

#### StepReveal: los 8 pasos

<!-- interactive: StepReveal -->
{
  "title": "De prompt a merge seguro",
  "steps": [
    { "title": "1. Prompt con contexto", "content": "Stack, convenciones, restricciones (DIP, sin any)." },
    { "title": "2. Código generado", "content": "Recibes el output; no lo integres aún." },
    { "title": "3. Entender", "content": "Lee línea por línea; pide explicación si algo no queda claro." },
    { "title": "4. Tests", "content": "Escribe o ejecuta tests; incluye caso de error." },
    { "title": "5. Lint + typecheck", "content": "npm run lint y tsc sin errores." },
    { "title": "6. Verificar deps", "content": "Paquetes en npm/PyPI; no confiar en nombres inventados." },
    { "title": "7. Review humano", "content": "Otro dev revisa seguridad y convenciones." },
    { "title": "8. Merge", "content": "Solo cuando todo lo anterior pasa." }
  ]
}

---

### 4) Estructura `.claude/` y CLAUDE.md

**Sección TSX:** `EstructuraClaudeSection`

#### Árbol de contexto para agentes

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  ROOT[mi-proyecto/]\n  ROOT --> CL[CLAUDE.md]\n  ROOT --> DOT[.claude/]\n  DOT --> AG[agents/]\n  DOT --> RU[rules/]\n  DOT --> KB[kb/]\n  AG --> FE[frontend-developer.md]\n  RU --> SEC[security.md]\n  KB --> ARC[arquitectura.md]"
}

#### CLAUDE.md mínimo

<!-- code: markdown -->
```markdown
# Mi Proyecto

## Stack
- Frontend: React + TypeScript + Vite
- Backend: NestJS + PostgreSQL

## Convenciones
- camelCase variables; PascalCase clases/componentes
- Archivos kebab-case (tarjeta-producto.tsx)
- Commits: Conventional Commits

## Comandos
- npm run dev | test | build

## NO hacer
- No hardcodear secrets
- No push directo a main
```

---

### 5) Agentes y prompts efectivos

**Sección TSX:** `AgentesSection` / `FlujoTrabajoSection`

#### Agente code-reviewer

<!-- code: markdown -->
```markdown
---
name: code-reviewer
description: Revisa PRs por bugs, seguridad y convenciones.
---

1. Sin secrets hardcodeados
2. Tests para código nuevo
3. Vulnerabilidades: inyección, XSS
4. Cumple CLAUDE.md
```

#### Prompt inefectivo vs efectivo

<!-- code: bash -->
```bash
# ❌ Inefectivo
# "hazme un servicio para productos en nest"

# ✅ Efectivo (pegar como prompt al agente)
# Contexto: NestJS + TypeScript + PostgreSQL
# Convención: DIP — inyectar IProductoRepository
# Métodos: findAll, findById, create, update, delete
# Restricciones: sin any, NotFoundException si no existe,
# JSDoc en métodos públicos, no importar infraestructura directa
```

#### Servicio generado (verificar y adaptar)

<!-- code: typescript -->
```typescript
export interface IProductoRepository {
  findAll(): Promise<Producto[]>;
  findById(id: number): Promise<Producto | null>;
  create(dto: CreateProductoDto): Promise<Producto>;
  update(id: number, dto: UpdateProductoDto): Promise<Producto>;
  delete(id: number): Promise<void>;
}

export class ProductosService {
  constructor(private readonly repo: IProductoRepository) {}

  async findById(id: number): Promise<Producto> {
    const producto = await this.repo.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    return producto;
  }
}
```

#### Test que valida código IA

<!-- code: typescript -->
```typescript
import { ProductosService } from "./productos.service";

describe("ProductosService", () => {
  it("lanza NotFoundException si findById no encuentra", async () => {
    const repo = { findById: jest.fn().mockResolvedValue(null) };
    const service = new ProductosService(repo as never);
    await expect(service.findById(99)).rejects.toThrow(/no encontrado/);
  });
});
```

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué 'no entiendo el código pero compila' es deuda técnica? Da un ejemplo de bug oculto en código generado por IA.",
  "hints": ["Condición de borde", "Null sin validar", "API inventada"],
  "expectedKeywords": ["deuda", "bug", "entender", "test"],
  "successMessage": "Correcto. Sin comprensión no puedes depurar ni extender; los tests y la lectura línea por línea son obligatorios."
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena mentalmente el flujo: prompt → código → entender → tests → lint → review → merge. ¿Qué paso saltarías NUNCA?",
  "hints": ["Entender antes de integrar", "Review humano"],
  "expectedKeywords": ["entender", "review", "tests"],
  "successMessage": "Correcto. Nunca saltar entender el código ni el code review humano."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Integra IA en el flujo de un feature real"**

Tarea: endpoint `POST /api/v1/productos` en NestJS + PostgreSQL.

1. Redacta un prompt completo (stack, DIP, validación, códigos HTTP, sin `any`).
2. Simula revisión: lista 3 cosas que verificarías en el código generado.
3. Escribe un test unitario mínimo que debe pasar antes del merge.
4. Crea esqueleto de `CLAUDE.md` (10 líneas) para tu repo ficticio.
5. Describe qué datos **nunca** pegarías en un chat público.

**Criterio de éxito:** prompt accionable, checklist de verificación concreta, test con caso de error, política de privacidad clara.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto: escribe las 3 verificaciones obligatorias y 2 datos que nunca enviarías a IA pública.",
  "hints": [
    "Verificar paquetes en npm",
    "Test de caso 404 o validación",
    "No API keys ni PII"
  ],
  "expectedKeywords": ["DIP", "test", "secrets", "PII"],
  "successMessage": "Excelente. Has integrado IA con verificación y política de privacidad."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has aprendido a usar IA en desarrollo web de forma productiva y responsable.

**Ideas clave para retener:**

- La IA **amplifica** productividad; no reemplaza criterio técnico.
- **Alucinaciones** son reales: verifica paquetes, APIs y docs oficiales.
- **Entender** el código antes de mergear; si no puedes explicarlo, no lo integres.
- **CLAUDE.md** y `.claude/` dan contexto al agente (stack, convenciones, prohibiciones).
- **Prompts efectivos** incluyen stack, restricciones y criterios de calidad.
- **Privacidad:** nunca secrets, PII ni código propietario en chats públicos sin acuerdo.

**Siguiente paso:** lección `arquitectura-api` — capas internas, SOAP, GraphQL, gRPC y patrones arquitectónicos.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué es una alucinación de IA en desarrollo?",
      "options": [
        "Error de sintaxis TypeScript",
        "Código plausible con APIs o librerías que no existen",
        "Timeout de red",
        "Fallo de ESLint"
      ],
      "correctIndex": 1,
      "feedback": "La IA puede inventar paquetes y métodos; siempre verificar en docs y registros oficiales."
    },
    {
      "question": "¿Cuál es el primer paso después de recibir código generado?",
      "options": [
        "Merge inmediato a main",
        "Leerlo y entenderlo línea por línea",
        "Publicar en npm",
        "Eliminar tests existentes"
      ],
      "correctIndex": 1,
      "feedback": "Si no puedes explicarlo, no debes integrarlo."
    },
    {
      "question": "¿Qué NO debe incluirse en un prompt a IA pública?",
      "options": [
        "Framework usado",
        "Convenciones de naming",
        "API keys y datos reales de usuarios",
        "Restricción sin any"
      ],
      "correctIndex": 2,
      "feedback": "Secrets y PII violan compliance y seguridad."
    },
    {
      "question": "¿Para qué sirve CLAUDE.md en un proyecto?",
      "options": [
        "Reemplazar Git",
        "Dar contexto, stack y reglas al agente de IA",
        "Compilar TypeScript",
        "Almacenar node_modules"
      ],
      "correctIndex": 1,
      "feedback": "Documenta convenciones y límites para que el agente actúe alineado al equipo."
    },
    {
      "question": "¿Qué hace un prompt efectivo frente a uno vago?",
      "options": [
        "Es más corto",
        "Incluye contexto, restricciones y criterios de calidad",
        "Solo dice hazlo en React",
        "Evita mencionar el lenguaje"
      ],
      "correctIndex": 1,
      "feedback": "Contexto específico reduce código genérico e inútil."
    }
  ]
}
