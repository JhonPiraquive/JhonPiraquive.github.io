# Instrucciones para frontend-developer: servicios-web.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/servicios-web.html`

---

1. Crear un archivo HTML5 completo en `clases/programacion-orientada-sitios-web/servicios-web.html`.
2. Usar `<html lang="es">`. Título de pestaña: "Servicios Web | Programación Orientada a Sitios Web".
3. Vincular desde `<head>`: Bootstrap 5 CSS (CDN), Bootstrap Icons (CDN), Google Fonts Poppins + Raleway (CDN), y un bloque `<style>` interno con variables CSS para paleta oscura: `--bg: #0d0d0d`, `--surface: #141414`, `--accent: #00d4ff`, `--accent2: #7b5ea7`, `--text: #e0e0e0`, `--muted: #888`.
4. Vincular al final del `<body>`: Bootstrap 5 JS Bundle (CDN) y un bloque `<script>` interno para las interacciones de la página.
5. Crear un `<header>` fijo con `position: sticky; top: 0; z-index: 100; background: var(--surface); border-bottom: 1px solid var(--accent)`. Contiene: logo-texto "POSW" en color `--accent`, fuente Raleway bold 1.4rem; nombre de la clase "Programación Orientada a Sitios Web" en `--muted`; y un `<nav>` con anclas internas: "¿Qué es?", "Objetivos", "SOLID", "Recursos".
6. Crear una sección `<section id="hero">` con altura mínima 60vh, fondo degradado lineal de `--bg` a `--surface`, centrado vertical y horizontal. Contiene:
   - Etiqueta pequeña animada: `<span class="badge">Tema 1</span>` con fondo `--accent2` y texto blanco.
   - `<h1>` con texto "Servicios Web" en Raleway, 3.5rem, color `--accent`, con animación CSS de entrada (fade-in + translateY desde abajo, 0.6s ease).
   - `<p>` subtítulo: "Fundamentos de interoperabilidad, arquitectura distribuida y principios de diseño de software." Color `--muted`, max-width 600px.
   - Botón "Comenzar a aprender" con fondo `--accent`, texto `--bg`, border-radius 999px, scroll suave a `#que-es`.
7. Crear `<section id="que-es">` con padding 80px 0. Contiene:
   - `<h2>` "¿Qué es un Servicio Web?" con borde izquierdo de 4px `--accent`, padding-left 16px.
   - Párrafo de definición: "Un servicio web es un sistema de software diseñado para soportar interacción máquina-a-máquina a través de una red. Expone funcionalidades mediante interfaces estandarizadas (generalmente HTTP) que permiten que aplicaciones heterogéneas —desarrolladas en distintos lenguajes y plataformas— se comuniquen entre sí sin intervención humana directa."
   - Analogía en tarjeta destacada (`background: var(--surface); border-left: 4px solid var(--accent2); padding: 20px; border-radius: 8px`): texto "Analogia: Piensa en un servicio web como un cajero automatico (ATM). No importa si usas una tarjeta Visa o Mastercard, ni si el banco emisor usa Java o Python internamente. El ATM expone una interfaz estandarizada que cualquier tarjeta puede usar para retirar dinero."
   - Diagrama ASCII en bloque `<pre><code>` con fondo `#1a1a2e`, padding 20px, border-radius 8px, fuente monospace, color `--accent`:
     ```
     Cliente A (React)  ──┐
     Cliente B (Android)──┼──► [ Servicio Web ] ──► Base de Datos
     Cliente C (Python) ──┘         │
                                    └──► Otro Servicio
     ```
8. Crear `<section id="objetivos">` con padding 80px 0. Contiene:
   - `<h2>` "Objetivos de los Servicios Web".
   - Grid de 6 tarjetas (3 columnas en desktop, 2 en tablet, 1 en móvil) usando CSS Grid o Bootstrap row/col. Cada tarjeta tiene: ícono Bootstrap Icons grande (2rem) en color `--accent`, título, descripción. Datos:
     - Icono `bi-globe2`, Título "Interoperabilidad", Texto "Permite que sistemas desarrollados en distintos lenguajes (Java, Python, Go, C#) y plataformas (Windows, Linux, cloud) se comuniquen mediante estándares abiertos como HTTP y JSON."
     - Icono `bi-share`, Título "Compartir Datos", Texto "Expone datos y funcionalidades como recursos consumibles por múltiples clientes sin duplicar la lógica de negocio."
     - Icono `bi-arrows-fullscreen`, Título "Escalabilidad", Texto "Los servicios pueden escalar de forma independiente. Si el servicio de pagos recibe más carga, se escala solo ese componente sin tocar el resto del sistema."
     - Icono `bi-puzzle`, Título "Modularidad", Texto "Cada servicio encapsula una responsabilidad específica. El sistema completo se construye componiendo servicios independientes (microservicios)."
     - Icono `bi-file-earmark-check`, Título "Estandarización", Texto "Usa protocolos y formatos ampliamente adoptados: HTTP/HTTPS, JSON, XML, REST, SOAP. Esto reduce la curva de integración entre equipos."
     - Icono `bi-cloud-arrow-up`, Título "Acceso Remoto", Texto "Los servicios son accesibles desde cualquier lugar con conexión a internet, habilitando arquitecturas distribuidas y trabajo colaborativo entre organizaciones."
   - Cada tarjeta: `background: var(--surface); border: 1px solid #222; border-radius: 12px; padding: 28px; transition: transform 0.25s, border-color 0.25s`. Al hacer hover: `transform: translateY(-6px); border-color: var(--accent)`.
9. Crear `<section id="solid">` con padding 80px 0. Contiene:
   - `<h2>` "Introducción a SOLID".
   - Párrafo introductorio: "SOLID es un acrónimo que reúne cinco principios de diseño de software orientado a objetos. Fueron popularizados por Robert C. Martin ('Uncle Bob'). Aplicarlos produce código más mantenible, extensible y testeable. Son especialmente relevantes al diseñar servicios web porque determinan cómo se estructura, expone y evoluciona la lógica de negocio."
   - Tabla HTML con columnas: Letra | Principio | Idea central | Ejemplo en servicio web. Estilo: `border-collapse: collapse; width: 100%; background: var(--surface)`. Headers con `background: var(--accent2); color: white`. Filas alternas con `background: #1a1a1a`. Datos:
     - S | Single Responsibility Principle | Cada clase/módulo tiene una sola razón para cambiar | Un endpoint `/usuarios` solo gestiona usuarios; no mezcla lógica de pagos
     - O | Open/Closed Principle | Abierto para extensión, cerrado para modificación | Agregar nuevo tipo de autenticación sin modificar el controlador existente
     - L | Liskov Substitution Principle | Las subclases deben poder sustituir a sus clases base | Un `RepositorioSQL` y un `RepositorioMongo` son intercambiables si implementan la misma interfaz
     - I | Interface Segregation Principle | Muchas interfaces específicas son mejores que una general | Separar `ILector` de `IEscritor` en lugar de una interfaz `IRepositorio` con todo
     - D | Dependency Inversion Principle | Depender de abstracciones, no de concreciones | El servicio depende de `IRepositorio`, no de `MySQLRepositorio` directamente
   - Nota al pie de la tabla en `--muted`: "Ver la página completa de SOLID: principios-solid.html" con enlace relativo a `principios-solid.html`.
10. Crear `<section id="recursos">` con padding 60px 0. Contiene:
    - `<h2>` "Recursos y Temas Relacionados".
    - Lista de tarjetas de navegación horizontales (flexbox), cada una con ícono, nombre de tema y flecha. Tarjetas:
      - `bi-file-code` → "Formatos de Datos (XML y JSON)" → enlace `formatos-datos.html`
      - `bi-shield-lock` → "Protocolos de Seguridad (SSL/TLS/HTTPS)" → enlace `protocolos-seguridad.html`
      - `bi-diagram-3` → "Tipos de Servicios Web" → enlace `tipos-servicios-web.html`
      - `bi-layers` → "Principios SOLID (detalle completo)" → enlace `principios-solid.html`
    - Cada tarjeta: `background: var(--surface); border: 1px solid #333; border-radius: 8px; padding: 16px 24px; display: flex; align-items: center; gap: 16px; text-decoration: none; color: var(--text); transition: border-color 0.2s`. Hover: `border-color: var(--accent)`.
11. Crear un `<footer>` con `background: var(--surface); border-top: 1px solid #222; padding: 24px; text-align: center; color: var(--muted); font-size: 0.85rem`. Texto: "Programación Orientada a Sitios Web · Material académico · 2025".
12. Agregar en el bloque `<script>` interno: Intersection Observer que agrega la clase `visible` a cada `.card-objetivo` cuando entra en el viewport. La clase `visible` dispara una animación CSS `fadeInUp` (opacity 0→1, translateY 40px→0, 0.5s ease).
13. Hacer la página completamente responsiva con media queries: en móviles (<768px) el grid de objetivos pasa a 1 columna, el `<h1>` baja a 2.4rem, la tabla tiene scroll horizontal (`overflow-x: auto`).
