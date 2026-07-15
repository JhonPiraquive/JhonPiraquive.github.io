---
track: sea
topic_expert: topic-expert-app-security
updated: 2026-07-15
build: passed
tsx_migration: complete
refactor: acronym-normalized, codefiddle, malas-practicas, profundidad
revision: visuales-adr-013
visuals_remediation: done
---

# Pipeline Seguridad en Aplicaciones (SEA) — estado

| slug | order | brief | draft | spec | layout | tsx | build |
|------|-------|-------|-------|------|--------|-----|-------|
| historia-redes-y-seguridad | 1 | done | done | done | done | done | done |
| hackers-canales-y-proteccion | 2 | done | done | done | done | done | done |
| iso-y-normas-27001-27002 | 3 | done | done | done | done | done | done |
| principios-cia-y-autenticidad | 4 | done | done | done | done | done | done |
| ingenieria-social-y-phishing | 5 | done | done | done | done | done | done |
| https-y-mitm | 6 | done | done | done | done | done | done |
| ataques-web-sqli-y-mitigacion | 7 | done | done | done | done | done | done |
| base64-y-diferencias-con-cifrado | 8 | done | done | done | done | done | done |
| criptografia-hash-sha256-y-buenas-practicas | 9 | done | done | done | done | done | done |
| proteccion-datos-cookies-y-jwt | 10 | done | done | done | done | done | done |
| programacion-segura-excepciones-logs-y-config-json | 11 | done | done | done | done | done | done |
| matriz-de-riesgos | 12 | done | done | done | done | done | done |

## Revisión visual ADR 013 (2026-07-15)

- Convertir «Mapa mental» basado solo en texto a `MermaidDiagram` (`mindmap` o `flowchart`).
- Corregir promesas de flujo, ciclo, árbol, jerarquía, topología o línea de tiempo que no tengan un diagrama contiguo.
- Representar matrices o heatmaps como tablas semánticas con contraste visual.
- Corregir entidades HTML, `CodeFiddle` vacíos y directivas de autoría.

### Deuda SEA (resuelta 2026-07-15)

- 12 instancias de `DiagramaMermaidSection` contienen `&quot;`; sustituir por comillas literales válidas para Mermaid.
- `matriz-de-riesgos`: reemplazar la matriz expresada como párrafos por una tabla heatmap semántica.
- `EjemploTecnico*`: eliminar directivas de autoría y completar o retirar los `CodeFiddle` vacíos.
- `MapaMentalVistaRapidaSection`: dos lecciones presentan mapas mentales solo textuales; convertirlos a `mindmap` o `flowchart`.
