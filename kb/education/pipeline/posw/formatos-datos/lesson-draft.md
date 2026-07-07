---
track: posw
slug: formatos-datos
title: "Formatos de Datos: XML y JSON"
order: 2
prerequisites:
  - servicios-web
related:
  - protocolos-seguridad
  - http-metodos-status
  - tipos-servicios-web
source_brief: kb/education/pipeline/posw/formatos-datos/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - XmlSection
  - JsonSection
  - ComparativaXmlJsonSection
  - CasosDeUsoSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** XML y JSON como formatos de intercambio de datos y **ubicarlos** históricamente (W3C 1996 vs formalización JSON ~2001).
- **Leer** un documento XML con declaración, elemento raíz, anidación y atributos; y un objeto JSON con tipos nativos (string, number, boolean, null, array, object).
- **Comparar** al menos cinco características entre XML y JSON (verbosidad, tipos, atributos, comentarios, validación, parsing en JS).
- **Elegir** el formato adecuado en un caso dado: API REST nueva (JSON) vs integración SOAP/legado o facturación con estándar XML.
- **Estimar** ventaja de tamaño aproximada JSON vs XML para el mismo pedido y **parsear** JSON con `JSON.parse()` en JavaScript.

## Prerrequisitos

- **Lección `servicios-web`:** concepto de servicio web, cliente-servidor y peticiones HTTP.
- Conocimientos básicos de JavaScript en el navegador (variables, consola).
- No se requiere experiencia previa con SOAP ni con esquemas XSD.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre los dos formatos de intercambio más usados en servicios web: XML (legado y estándares empresariales) y JSON (predeterminado en APIs REST modernas). Los objetivos medibles se listan arriba.

<!-- interactive: Callout -->
{
  "title": "Regla práctica",
  "children": "JSON por defecto en nuevas APIs REST; XML si integras SOAP/legado, necesitas atributos con metadatos o el estándar del dominio lo exige (p. ej. facturación electrónica DIAN en Colombia)."
}

---

### 1) XML: eXtensible Markup Language

**Sección TSX:** `XmlSection`

#### Mapa mental

- Lenguaje de marcado W3C (1996).
- **Un elemento raíz**, jerarquía en árbol, **atributos** en etiquetas.
- Verbose pero validable (DTD, XSD); namespaces.
- Dominó el intercambio antes de JSON; sigue en SOAP, Maven, Spring, facturación.

#### Qué es

**XML** almacena y transporta datos legibles por humanos y máquinas. Todo es texto; la estructura es estrictamente jerárquica. Un documento bien formado tiene exactamente **un elemento raíz**.

#### Estructura de un documento

1. Declaración: `<?xml version="1.0" encoding="UTF-8"?>`
2. Elemento raíz único (p. ej. `<pedido>`)
3. Elementos hijos anidados
4. Atributos en la etiqueta de apertura (`moneda="COP"`)

#### Ejemplo: pedido en XML

<!-- code: xml -->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<pedido id="1042">
  <cliente>
    <nombre>Ana García</nombre>
    <email>ana@ejemplo.com</email>
  </cliente>
  <items>
    <item>
      <producto>Laptop Pro 15</producto>
      <cantidad>1</cantidad>
      <precio moneda="COP">4500000</precio>
    </item>
    <item>
      <producto>Mouse inalámbrico</producto>
      <cantidad>2</cantidad>
      <precio moneda="COP">85000</precio>
    </item>
  </items>
  <total moneda="COP">4670000</total>
</pedido>
```

#### Árbol jerárquico del pedido

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  P[pedido id=1042] --> C[cliente]\n  P --> I[items]\n  P --> T[total]\n  C --> CN[nombre]\n  C --> CE[email]\n  I --> I1[item]\n  I --> I2[item]"
}

#### Parsear XML en el navegador

<!-- code: javascript -->
```javascript
const xml = `<?xml version="1.0"?><pedido id="1042"><total>4670000</total></pedido>`;
const doc = new DOMParser().parseFromString(xml, "application/xml");
console.log(doc.documentElement.getAttribute("id")); // "1042"
console.log(doc.querySelector("total").textContent); // "4670000"
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Olvidar el elemento raíz único: documentos con múltiples raíces son inválidos. No escapar <, & o comillas en contenido puede romper el documento."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Parsea un XML mínimo con DOMParser y lee un atributo del elemento raíz. ¿Qué método usas para obtener el valor del atributo id?",
  "hints": ["DOMParser con application/xml", "getAttribute en documentElement"],
  "expectedKeywords": ["DOMParser", "getAttribute", "documentElement"],
  "successMessage": "Correcto. DOMParser construye el árbol; getAttribute lee atributos de un elemento."
}

---

### 2) JSON: JavaScript Object Notation

**Sección TSX:** `JsonSection`

#### Mapa mental

- Formato ligero basado en sintaxis de objetos JS (~2001, Douglas Crockford).
- Tipos nativos: string, number, boolean, null, array, object.
- **Sin comentarios** en la spec estándar; sin atributos ni namespaces.
- Predeterminado en APIs REST modernas.

#### Qué es

**JSON** representa datos estructurados de forma compacta. Los metadatos que en XML van como atributos (`moneda="COP"`) en JSON son **campos anidados** dentro de objetos.

#### Mismo pedido en JSON

<!-- code: json -->
```json
{
  "pedido": {
    "id": 1042,
    "cliente": {
      "nombre": "Ana García",
      "email": "ana@ejemplo.com"
    },
    "items": [
      {
        "producto": "Laptop Pro 15",
        "cantidad": 1,
        "precio": { "valor": 4500000, "moneda": "COP" }
      },
      {
        "producto": "Mouse inalámbrico",
        "cantidad": 2,
        "precio": { "valor": 85000, "moneda": "COP" }
      }
    ],
    "total": { "valor": 4670000, "moneda": "COP" }
  }
}
```

#### Parsear JSON en JavaScript

<!-- code: javascript -->
```javascript
const raw = '{"id":1042,"activo":true,"items":[]}';
const pedido = JSON.parse(raw);
console.log(pedido.id);      // 1042
console.log(pedido.activo);  // true (boolean, no string)
console.log(typeof pedido.id);     // "number"
console.log(typeof pedido.activo); // "boolean"
```

#### Anti-ejemplo: JSON inválido

<!-- code: json -->
```json
{
  "id": 1042,
  "nota": // esto rompe JSON.parse en la spec estándar
}
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Asumir que JSON admite comentarios con // o /* */. La especificación estándar no los permite; parsers estrictos fallan. Usa campos como \"_comentario\" si necesitas metadatos."
}

#### Práctica guiada

<!-- interactive: CodeChallenge -->
{
  "title": "Completa los tipos nativos de JSON",
  "template": "JSON soporta tipos nativos como ___, ___, ___ y ___ (además de array y object).",
  "blanks": [
    { "id": "blank1", "answer": "string", "placeholder": "texto" },
    { "id": "blank2", "answer": "number", "placeholder": "numérico" },
    { "id": "blank3", "answer": "boolean", "placeholder": "true/false" },
    { "id": "blank4", "answer": "null", "placeholder": "ausencia de valor" }
  ]
}

---

### 3) Comparativa XML vs JSON

**Sección TSX:** `ComparativaXmlJsonSection`

#### Tabla comparativa

<!-- interactive: CompareTable -->
{
  "headers": ["Característica", "XML", "JSON"],
  "rows": [
    ["Origen", "W3C 1996", "Douglas Crockford ~2001"],
    ["Tipos", "Todo es texto", "string, number, boolean, null, array, object"],
    ["Atributos", "Sí (en etiquetas)", "No; metadatos como campos"],
    ["Comentarios", "Sí <!-- -->", "No en spec estándar"],
    ["Validación", "DTD, XML Schema (XSD)", "JSON Schema (opcional)"],
    ["Parsing en JS", "DOMParser", "JSON.parse() nativo"],
    ["Tamaño típico", "Más verboso (~520 bytes pedido ejemplo)", "Más compacto (~320 bytes, ~38% menos)"],
    ["Uso principal", "SOAP, legado, facturación, configs", "APIs REST, package.json, MongoDB"]
  ]
}

#### ¿Por qué JSON es más compacto?

- Etiquetas de cierre repetidas en XML (`</producto>`, `</item>`).
- Atributos vs objetos anidados (`moneda="COP"` vs `"moneda": "COP"`).
- En móvil o alta frecuencia, menos bytes = menos latencia y costo.

#### Decisión de formato

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  START[Nueva integración] --> Q{¿Estándar legado SOAP/XML o regulación?}\n  Q -->|Sí| XML[Usar XML]\n  Q -->|No| Q2{¿API REST moderna?}\n  Q2 -->|Sí| JSON[Usar JSON por defecto]\n  Q2 -->|No| EVAL[Evaluar contrato del partner]"
}

<!-- interactive: StepReveal -->
{
  "title": "Regla práctica: cuándo cada formato",
  "steps": [
    {
      "title": "1. API REST nueva",
      "content": "JSON por defecto: compacto, nativo en ecosistemas web y fácil de parsear con JSON.parse()."
    },
    {
      "title": "2. Integración SOAP o bancaria legada",
      "content": "XML obligatorio: el contrato WSDL y los envelopes SOAP exigen XML bien formado."
    },
    {
      "title": "3. Regulación o estándar de dominio",
      "content": "Facturación electrónica (DIAN), RSS/Atom u OOXML: el estándar define XML."
    },
    {
      "title": "4. Configuraciones empresariales",
      "content": "Maven pom.xml, Spring XML legacy: ecosistemas que aún usan XML por convención."
    }
  ]
}

---

### 4) Casos de uso reales

**Sección TSX:** `CasosDeUsoSection`

#### Cuándo XML sigue siendo la opción correcta

| Caso | Por qué XML |
|------|-------------|
| Core bancario SOAP | Contrato WSDL + envelopes XML; enviar JSON rompe el esquema |
| Facturación electrónica DIAN | Estándar regulatorio exige XML |
| Maven `pom.xml`, Spring config | Ecosistema Java empresarial |
| RSS/Atom, WSDL | Formatos definidos sobre XML |

#### Cuándo JSON es la opción correcta

| Caso | Por qué JSON |
|------|--------------|
| API REST pública (GitHub, Stripe) | Compacto, tipos nativos, parsing trivial en JS |
| `package.json`, `settings.json` | Herramientas Node y editores |
| MongoDB, WebSockets | Documentos y mensajes JSON nativos |
| App móvil + web nuevas | Menor payload, menor latencia |

<!-- interactive: Callout -->
{
  "title": "Caso real: integración bancaria",
  "children": "Un equipo envía cuerpos JSON a un endpoint SOAP del banco. El banco rechaza todas las transacciones con error de esquema. Decisión clave: respetar el contrato del dominio (XML + WSDL); JSON queda para APIs internas REST."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Tu API nueva expone catálogo de productos para app móvil y web. ¿XML o JSON? Justifica con interoperabilidad y tamaño.",
  "hints": ["API REST moderna", "Ecosistema web y parsing nativo"],
  "expectedKeywords": ["JSON", "compacto", "REST", "parse"],
  "successMessage": "Correcto. JSON es el predeterminado en APIs REST nuevas: compacto, tipos nativos y parsing trivial en clientes web y móviles."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **XML:** marcado jerárquico W3C, un raíz, atributos, validable con XSD; verboso pero indispensable en SOAP, legado y regulación.
- **JSON:** compacto, tipos nativos, sin comentarios estándar; predeterminado en REST moderno.
- **Metadatos:** atributos XML → campos anidados en JSON (`"moneda": "COP"`).
- **Parsing JS:** `DOMParser` para XML; `JSON.parse()` para JSON.
- **Regla práctica:** JSON por defecto; XML cuando el contrato, partner o regulación lo exijan.
- **Siguiente lección:** `protocolos-seguridad` — HTTP, HTTPS y TLS.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué el mismo pedido ocupa ~520 bytes en XML y ~320 en JSON? Menciona al menos dos causas.",
  "hints": ["Etiquetas de cierre", "Atributos vs objetos anidados"],
  "expectedKeywords": ["etiquetas", "cierre", "verbos", "atributo"],
  "successMessage": "Correcto. Las etiquetas de apertura/cierre y la sintaxis más verbosa de XML aumentan el tamaño frente a JSON."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena partes de un documento XML válido: (a) elemento raíz, (b) declaración <?xml?>, (c) elementos hijos anidados, (d) atributos en apertura. ¿Cuál va primero?",
  "hints": ["La declaración precede al contenido", "Un solo raíz envuelve hijos"],
  "expectedKeywords": ["b", "a", "c", "d"],
  "successMessage": "Correcto. Orden: (b) declaración → (a) raíz → (c) hijos anidados; (d) atributos van en la etiqueta de apertura del elemento."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Nombra dos casos de uso reales donde XML sigue siendo la opción correcta aunque JSON sea más popular.",
  "hints": ["Piensa en SOAP bancario", "Regulación o facturación"],
  "expectedKeywords": ["SOAP", "facturación", "WSDL", "legado"],
  "successMessage": "Correcto. SOAP bancario, facturación DIAN, WSDL y configs Maven/Spring son casos donde XML sigue siendo obligatorio o convencional."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Elige y modela el formato del contrato"**

Un marketplace colombiano debe:

1. Exponer API REST pública de productos (clientes web y móvil).
2. Integrar facturación electrónica con proveedor que exige XML según estándar DIAN.
3. Publicar feed de novedades para agregadores (RSS/Atom).

**Tareas:**

1. Asigna JSON o XML a cada integración y justifica.
2. Escribe el JSON mínimo de un producto (`id`, `nombre`, `precio`, `moneda`).
3. Escribe un fragmento XML válido del mismo producto con atributo `moneda` en precio.
4. Calcula mentalmente cuál payload sería más grande y por qué.
5. Indica cómo validarías cada formato (JSON Schema vs XSD).

**Criterio de éxito:** decisiones alineadas con regla práctica, ambos ejemplos sintácticamente válidos, justificación de casos legados/regulatorios, mención de herramientas de validación.

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": { "valor": 4500000, "moneda": "COP" }
}
```

<!-- code: xml -->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<producto id="42">
  <nombre>Laptop Pro 15</nombre>
  <precio moneda="COP">4500000</precio>
</producto>
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Asigna formato a las tres integraciones del marketplace (API REST, facturación DIAN, RSS) y escribe los ejemplos JSON y XML del producto. ¿Cómo validarías cada uno?",
  "hints": [
    "API REST → JSON",
    "Facturación DIAN → XML",
    "RSS → XML",
    "JSON Schema vs XSD"
  ],
  "expectedKeywords": ["JSON", "XML", "DIAN", "Schema"],
  "successMessage": "Excelente. Has aplicado la regla práctica y modelado ambos formatos con validación adecuada."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de XML y JSON como formatos de intercambio. Elegir el formato correcto no es moda: depende del contrato, el ecosistema y la regulación.

**Ideas clave para retener:**

- **XML** = árbol, un raíz, atributos, XSD; legado y estándares empresariales.
- **JSON** = compacto, tipos nativos, `JSON.parse()`; predeterminado en REST.
- **No forzar JSON** donde el partner o la ley exigen XML.
- **Tamaño importa** en móvil y alta frecuencia (~30–40% menos bytes en JSON).

**Siguiente paso:** lección `protocolos-seguridad` — HTTP, HTTPS, SSL/TLS y el handshake.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué elemento es obligatorio en un documento XML bien formado?",
      "options": [
        "Múltiples elementos raíz",
        "Un único elemento raíz",
        "Comentarios en cada línea",
        "Namespace obligatorio siempre"
      ],
      "correctIndex": 1,
      "feedback": "XML exige exactamente un elemento raíz que contiene el resto de la jerarquía."
    },
    {
      "question": "¿Cuál afirmación sobre JSON es correcta según la especificación estándar?",
      "options": [
        "Admite comentarios con //",
        "Soporta tipos nativos como number y boolean",
        "Usa atributos en etiquetas",
        "Reemplazó a HTTP"
      ],
      "correctIndex": 1,
      "feedback": "JSON distingue números y booleanos; no admite comentarios ni atributos al estilo XML."
    },
    {
      "question": "Para una API REST nueva en 2025, la regla práctica recomienda…",
      "options": [
        "XML siempre",
        "JSON por defecto",
        "Solo CSV",
        "Sin cuerpo en las respuestas"
      ],
      "correctIndex": 1,
      "feedback": "JSON es compacto y nativo en ecosistemas web modernos; XML queda para legado o estándares que lo exijan."
    },
    {
      "question": "¿Cómo se representa en JSON la moneda que en XML iba como atributo moneda=\"COP\"?",
      "options": [
        "Como comentario <!-- COP -->",
        "Como campo dentro de un objeto, p. ej. \"moneda\": \"COP\"",
        "No se puede representar",
        "Solo con namespaces"
      ],
      "correctIndex": 1,
      "feedback": "JSON no tiene atributos; los metadatos son propiedades del objeto."
    },
    {
      "question": "¿Qué herramienta nativa del navegador parsea una cadena JSON?",
      "options": [
        "DOMParser",
        "JSON.parse()",
        "XMLHttpRequest solo",
        "document.querySelector"
      ],
      "correctIndex": 1,
      "feedback": "JSON.parse() convierte texto JSON a objetos JS; DOMParser es para XML/HTML."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** XML vs JSON: formatos de datos en servicios web | POSW
- **seoDescription:** Compara XML y JSON con ejemplos de pedidos, parsing en JavaScript, regla práctica REST vs SOAP y casos DIAN. Segunda lección del track POSW.
