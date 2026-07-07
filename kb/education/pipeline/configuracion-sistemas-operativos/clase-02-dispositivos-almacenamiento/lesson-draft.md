---
track: configuracion-sistemas-operativos
slug: clase-02-dispositivos-almacenamiento
title: "Clase 2: Dispositivos de almacenamiento y periféricos"
order: 8
prev: clase-01-arquitectura-computador
next: clase-03-sistemas-operativos
source_brief: kb/education/pipeline/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/brief.md
---

# Lesson draft — Clase 2

## Objetivos de la clase

Al finalizar, el estudiante podrá diferenciar HDD/SSD/SAS, describir periféricos y monitor, documentar hoja de vida del PC y clasificar licencias de software.

**Prerrequisitos:** clase-01-arquitectura-computador.

## Discos y almacenamiento

### HDD
- Qué es: platillos magnéticos, cabezales, RPM.
- Para qué: gran capacidad económica, NAS, archivos.
- Cómo funciona: seek + latencia rotacional.

### SSD
- Flash NAND, controlador, TRIM.
- SATA vs NVMe.

### SAS
- Entornos servidor, RAID, hot-swap.

<!-- code: powershell -->
```powershell
Get-PhysicalDisk | Select FriendlyName, MediaType, Size
```

## Disco óptico

CD/DVD/Blu-ray, láser, tendencia USB boot.

## Periféricos

Teclado, mouse, micrófono, cámara, altavoces/auriculares — entrada vs salida.

## Monitor

1920×1080, 2560×1440, PPI, ergonomía.

<!-- code: powershell -->
```powershell
[System.Windows.Forms.Screen]::PrimaryScreen.Bounds
```

## Hoja de vida del PC

Identificación, hardware, software, mantenimiento, responsable.

<!-- code: json -->
```json
{ "activo_id": "TI-001", "serial": "ABC123", "hardware": { "ram_gb": 16 } }
```

## Licencias

Libre, dominio público, freeware, shareware, propietario, comercial — Ley 23/1982 Colombia.

## Comprueba tu comprensión

5 PracticeExercise + 1 CodeChallenge (1920×1080).

## Reto integrador

Laboratorio 10 PCs Valledupar: inventario + upgrade disco + licencias.

## Cierre

Puente a clase-03-sistemas-operativos.

## Mini-quiz

6 preguntas: HDD, Full HD, SAS, software libre, serial activo, SSD arranque.
