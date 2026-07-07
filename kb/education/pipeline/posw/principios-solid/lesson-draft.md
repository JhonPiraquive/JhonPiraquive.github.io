---
track: posw
slug: principios-solid
title: "Principios SOLID"
order: 19
prerequisites:
  - bases-de-datos
related:
  - servicios-web
  - typescript
  - backend
  - naming-conventions
source_brief: kb/education/pipeline/posw/principios-solid/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - IntroSolidSection
  - SrpSection
  - OcpSection
  - LspSection
  - IspSection
  - DipSection
  - ResumenSolidSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** el acrónimo SOLID y nombrar cada principio con su regla en una frase.
- **Detectar** violaciones de SRP cuando una clase mezcla negocio, persistencia y notificaciones.
- **Aplicar** OCP mediante interfaces o estrategias para extender sin modificar código existente.
- **Reconocer** violaciones de LSP, ISP y DIP (subtipos que rompen contratos, interfaces gordas, `new` de concreciones en servicios).
- **Decidir** cuándo aplicar SOLID en capas de API/backend sin caer en sobre-ingeniería dogmática.

## Prerrequisitos

- **Lección `bases-de-datos`:** repositorios y capa de datos separada del cliente.
- Familiaridad con clases, interfaces y herencia en TypeScript o C#.
- Noción de capas en backend: controlador → servicio → persistencia.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

SOLID son cinco principios de diseño orientado a objetos de Robert C. Martin ("Uncle Bob"). Reducen acoplamiento, aumentan cohesión y facilitan tests y mantenimiento en APIs y backends.

<!-- interactive: Callout -->
{
  "title": "SOLID no es ley rígida",
  "children": "Úsalo donde hay cambio frecuente, equipos grandes o tests unitarios críticos. Un CRUD de 3 campos que no cambiará en años no necesita 15 interfaces."
}

---

### 1) Introducción: el acrónimo SOLID

**Sección TSX:** `IntroSolidSection`

#### Mapa mental

- **S** — Single Responsibility: una clase, una razón para cambiar.
- **O** — Open/Closed: abierto a extensión, cerrado a modificación.
- **L** — Liskov Substitution: un subtipo sustituye al padre sin romper el programa.
- **I** — Interface Segregation: interfaces pequeñas y específicas.
- **D** — Dependency Inversion: capas altas dependen de abstracciones.

#### Relación entre principios

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  SRP[SRP: una responsabilidad] --> OCP[OCP: extender sin editar]\n  OCP --> LSP[LSP: subtipos sustituibles]\n  LSP --> ISP[ISP: interfaces pequeñas]\n  ISP --> DIP[DIP: depender de abstracciones]"
}

#### Señales de violación comunes

- Clase que cambia por múltiples motivos (validación + SQL + SMTP).
- Cadena de `if (tipo === …)` que crece cada trimestre.
- Subclase que lanza error en métodos heredados.
- `new MySQLRepository()` dentro del servicio.

---

### 2) SRP — Responsabilidad Única

**Sección TSX:** `SrpSection`

#### Regla

Una clase debe tener **una sola razón para cambiar**. El criterio no es "una función por archivo", sino cohesión por motivo de cambio.

#### Violación vs corrección

<!-- code: typescript -->
```typescript
// ❌ Violación SRP
class Usuario {
  constructor(public nombre: string, public email: string) {}
  validarEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
  guardarEnBaseDeDatos(): void {
    console.log("INSERT INTO usuarios...");
  }
  enviarEmailBienvenida(): void {
    console.log("SMTP.send...");
  }
}

// ✅ SRP aplicado
class Usuario {
  constructor(public readonly nombre: string, public readonly email: string) {}
  validarEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
}

class UsuarioRepository {
  guardar(usuario: Usuario): void {
    console.log(`Guardando ${usuario.nombre}`);
  }
}

class EmailService {
  enviarBienvenida(usuario: Usuario): void {
    console.log(`Email a ${usuario.email}`);
  }
}
```

#### Caso real: god class en e-commerce

<!-- interactive: Callout -->
{
  "title": "Usuario que hace de todo",
  "children": "Una clase Usuario que valida, guarda en BD y envía email es imposible de testear sin BD ni SMTP. Separar entidad, repositorio y servicio de notificaciones permite mocks en tests unitarios."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Enumera tres razones para cambiar en un PedidoService que calcula totales, envía emails y escribe en PostgreSQL. ¿Cómo aplicarías SRP?",
  "hints": ["Cambio de reglas de descuento", "Cambio de proveedor SMTP", "Cambio de motor de BD"],
  "expectedKeywords": ["SRP", "repositorio", "EmailService", "razón"],
  "successMessage": "Correcto. Cada motivo de cambio va en su propia clase: entidad/servicio de negocio, repositorio, notificador."
}

---

### 3) OCP — Abierto/Cerrado

**Sección TSX:** `OcpSection`

#### Regla

Abierto a **extensión** (nuevas clases), cerrado a **modificación** (no editar el procesador central).

#### Procesador de pagos extensible

<!-- code: typescript -->
```typescript
interface MetodoPago {
  procesar(monto: number): void;
}

class PagoTarjeta implements MetodoPago {
  procesar(monto: number): void {
    console.log(`Cobrar $${monto} con tarjeta`);
  }
}

class PagoNequi implements MetodoPago {
  procesar(monto: number): void {
    console.log(`Cobrar $${monto} con Nequi`);
  }
}

class ProcesadorPago {
  constructor(private metodo: MetodoPago) {}
  procesar(monto: number): void {
    this.metodo.procesar(monto);
  }
}
```

#### Caso real: if/else que crece cada trimestre

<!-- interactive: Callout -->
{
  "title": "ProcesadorPago monolítico",
  "children": "Un if (tipo === 'tarjeta' | 'paypal' | 'nequi') obliga a retestear todo cuando falla Nequi. Decisión: interface MetodoPago, una clase por proveedor; ProcesadorPago solo delega."
}

#### Completar extensión OCP

<!-- interactive: CodeChallenge -->
{
  "title": "Añade PagoPSE sin modificar ProcesadorPago",
  "template": "interface MetodoPago {\n  procesar(monto: number): void;\n}\n\nclass PagoPSE implements ___ {\n  procesar(monto: number): void {\n    console.log(`PSE: $${monto}`);\n  }\n}",
  "blanks": [
    { "id": "blank1", "answer": "MetodoPago", "placeholder": "interface a implementar" }
  ]
}

---

### 4) LSP — Sustitución de Liskov

**Sección TSX:** `LspSection`

#### Regla

Un subtipo debe poder sustituir al padre **sin romper** el contrato que el cliente espera.

#### Patos: volar solo quien puede

<!-- code: typescript -->
```typescript
interface Pato {
  graznar(): void;
}

interface PatoVolador extends Pato {
  volar(): void;
}

class PatoReal implements PatoVolador {
  graznar(): void { console.log("Cuac!"); }
  volar(): void { console.log("Volando..."); }
}

class PatoDeGoma implements Pato {
  graznar(): void { console.log("Cuac de goma!"); }
  // No implementa volar — no rompe contrato de Pato
}
```

#### Errores comunes

- `PatoDeGoma extends Pato` con `volar()` que lanza: el cliente espera volar cualquier `Pato`.
- Herencia forzada cuando composición o interfaces segregadas resuelven mejor.

#### StepReveal: LSP en acción

<!-- interactive: StepReveal -->
{
  "title": "LSP paso a paso",
  "steps": [
    { "title": "Contrato del padre", "content": "Pato define graznar(); el cliente asume que cualquier Pato puede graznar." },
    { "title": "Violación", "content": "PatoDeGoma extends Pato con volar() que lanza Error — el cliente que llama volar() se rompe." },
    { "title": "Corrección", "content": "PatoVolador extiende Pato; PatoDeGoma solo implementa Pato sin prometer volar." },
    { "title": "En APIs", "content": "Un MockRepository debe cumplir el mismo contrato que MySQLRepository para tests y producción." }
  ]
}

---

### 5) ISP — Segregación de interfaces

**Sección TSX:** `IspSection`

#### Regla

El cliente no debe depender de métodos que **no usa**. Interfaces pequeñas y específicas.

<!-- code: typescript -->
```typescript
interface Trabajable {
  trabajar(): void;
}

interface Humano extends Trabajable {
  comer(): void;
  dormir(): void;
}

class Robot implements Trabajable {
  trabajar(): void { console.log("Procesando..."); }
  // No obligado a comer() ni dormir()
}
```

#### Fat interface

- `Trabajador` con `comer()` y `dormir()` obliga al `Robot` a métodos vacíos o excepciones.
- ISP divide por capacidad: `Trabajable` vs `Humano`.

---

### 6) DIP — Inversión de dependencias

**Sección TSX:** `DipSection`

#### Regla

Las capas altas dependen de **abstracciones**; las concreciones se eligen al componer la app (inyección de dependencias).

<!-- code: csharp -->
```csharp
public interface IProductoRepository
{
    Task GuardarAsync(Producto producto);
    Task<Producto?> BuscarPorIdAsync(int id);
}

public class ProductoService
{
    private readonly IProductoRepository _repo;

    public ProductoService(IProductoRepository repo) => _repo = repo;

    public async Task CrearAsync(Producto datos)
    {
        await _repo.GuardarAsync(datos);
    }
}

// Composición en Program.cs / Startup
// services.AddScoped<IProductoRepository, MySqlProductoRepository>();
```

#### Capas con DIP

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  C[Controller HTTP] --> S[ProductoService]\n  S --> I[IProductoRepository]\n  I --> M[MySQLProductoRepository]\n  I --> G[MongoProductoRepository]\n  M --> DB[(PostgreSQL)]\n  G --> MG[(MongoDB)]"
}

#### Caso real: SaaS acoplado a MySQL

<!-- interactive: Callout -->
{
  "title": "new MySQLProductoRepository() en el servicio",
  "children": "Cuando el cliente enterprise exige MongoDB para catálogo flexible, el equipo duplica ProductoService. Con IProductoRepository inyectado, los tests de negocio usan mock y el cambio de motor solo afecta la composición raíz."
}

---

### 7) Resumen y guía práctica

**Sección TSX:** `ResumenSolidSection`

#### Tabla comparativa SOLID

<!-- interactive: CompareTable -->
{
  "headers": ["Principio", "Letra", "Regla", "Señal de violación"],
  "rows": [
    ["Single Responsibility", "S", "Una clase, una razón para cambiar", "God class: valida + guarda + envía email"],
    ["Open/Closed", "O", "Extender sin modificar código existente", "Cadena if/else por tipo de pago"],
    ["Liskov Substitution", "L", "Subtipo sustituye al padre sin romper", "Subclase lanza en método heredado"],
    ["Interface Segregation", "I", "Interfaces pequeñas y específicas", "Robot obligado a comer() y dormir()"],
    ["Dependency Inversion", "D", "Alto nivel depende de abstracciones", "new MySQLRepository() dentro del servicio"]
  ]
}

#### Aplicación en POSW

- Controladores delgados.
- Servicios con lógica de negocio.
- Repositorios detrás de interfaces.
- DTOs separados de entidades.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un AuthService hace new JwtTokenGenerator() hardcodeado. ¿Qué principio viola y cómo lo corregirías?",
  "hints": ["Abstracción", "Inyección en constructor", "DIP"],
  "expectedKeywords": ["DIP", "ITokenGenerator", "inyectar"],
  "successMessage": "Correcto. Define ITokenGenerator, inyéctalo en AuthService y elige la implementación al componer la app."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Refactoriza el módulo de usuarios de una API REST"**

Código legacy recibido:

- `Usuario` con validación, `INSERT` SQL y envío SMTP.
- `AuthService` con `new JwtTokenGenerator()` hardcodeado.
- `Notificador` con `if (canal === 'email' | 'sms' | 'push')`.

1. Separa en entidad, repositorio, `EmailService` (SRP).
2. Añade `SmsNotificador` sin tocar código existente (OCP).
3. Define `ITokenGenerator` e inyéctalo en `AuthService` (DIP).
4. Escribe un test unitario del servicio con mock del repositorio.
5. Documenta qué NO refactorizarías y por qué (evitar sobre-ingeniería).

**Criterio de éxito:** responsabilidades separadas, extensión de canal sin editar `if` central, servicio testeable sin BD, justificación pragmática.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto: lista las clases/interfaces que crearías y qué parte del legacy dejarías sin tocar.",
  "hints": [
    "UsuarioRepository + EmailService",
    "interface CanalNotificacion para OCP",
    "Mock de IUsuarioRepository en test"
  ],
  "expectedKeywords": ["SRP", "OCP", "DIP", "mock"],
  "successMessage": "Excelente. Has aplicado SOLID de forma pragmática sin sobre-ingeniería."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has recorrido los cinco principios SOLID y su aplicación en capas de API/backend.

**Ideas clave para retener:**

- **SRP** mide razón para cambiar, no cantidad de archivos.
- **OCP** extiende con nuevas clases, no con más `if/else`.
- **LSP** exige contratos sustituibles; no heredar comportamientos imposibles.
- **ISP** divide interfaces para que cada cliente use solo lo necesario.
- **DIP** inyecta abstracciones; la concreción vive en el punto de composición.
- SOLID es **guía práctica**, no dogma: evita 15 interfaces en un CRUD estable.

**Siguiente paso:** lección `naming-conventions` — convenciones de nomenclatura en frontend, backend, SQL y APIs.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué establece el principio de Responsabilidad Única (SRP)?",
      "options": [
        "Una clase por archivo",
        "Una clase, una razón para cambiar",
        "Una función por endpoint",
        "Un solo desarrollador por módulo"
      ],
      "correctIndex": 1,
      "feedback": "SRP mide cohesión por motivo de cambio, no por cantidad de archivos."
    },
    {
      "question": "¿Cuál es la forma correcta de añadir un nuevo método de pago según OCP?",
      "options": [
        "Agregar otro else if en ProcesadorPago",
        "Crear una clase que implemente MetodoPago",
        "Duplicar ProcesadorPago completo",
        "Cambiar la firma de procesar() en producción"
      ],
      "correctIndex": 1,
      "feedback": "OCP extiende con nuevas implementaciones sin modificar el procesador existente."
    },
    {
      "question": "¿Qué viola LSP en el ejemplo del pato de goma?",
      "options": [
        "El pato real no grazna",
        "La subclase lanza error en volar() heredado",
        "No hay interface",
        "Usar TypeScript en lugar de Java"
      ],
      "correctIndex": 1,
      "feedback": "Un subtipo no puede romper el contrato que el cliente espera del padre."
    },
    {
      "question": "¿Qué problema resuelve ISP?",
      "options": [
        "Interfaces demasiado grandes que obligan métodos inútiles",
        "Falta de herencia múltiple",
        "Lentitud de la base de datos",
        "Versionado de APIs REST"
      ],
      "correctIndex": 0,
      "feedback": "ISP divide interfaces para que cada cliente dependa solo de lo que usa."
    },
    {
      "question": "¿Cómo se aplica DIP en ProductoService?",
      "options": [
        "new MySQLProductoRepository() dentro del servicio",
        "Depender de IProductoRepository inyectada por constructor",
        "Importar SQL directo en el controlador",
        "Eliminar todas las interfaces"
      ],
      "correctIndex": 1,
      "feedback": "Alto nivel depende de abstracción; la concreción se elige al componer la app."
    }
  ]
}
