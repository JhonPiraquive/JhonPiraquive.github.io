---
track: configuracion-sistemas-operativos
slug: clase-03-sistemas-operativos
title: "Sistemas operativos, consola y respaldo"
order: 14
---

# Lesson draft — Clase 3

## Hub

Objetivos de la clase: SO, consola, usuarios y respaldo.

## Página tipos-sistemas-operativos

### Qué es un sistema operativo
Qué es / Para qué / Cómo funciona / Malas prácticas

### Planificador de procesos
Round-robin, colas, prioridades.

### Clasificación
Escritorio, móvil, servidor, tiempo real.

### Comparativa Windows, macOS, Linux, Android, iOS
<!-- interactive: CompareTable -->

## Página instalacion-configuracion

Requisitos hardware, BIOS/UEFI, particiones GPT/MBR, drivers.

<!-- interactive: StepReveal -->

## Página consola-comandos

### Linux
<!-- code: bash -->
```bash
ls -la
cd /var/log
mkdir proyecto
nano archivo.txt
rm archivo.txt
sudo apt update
```

### Windows
<!-- code: powershell -->
```powershell
dir
cd C:\Users
mkdir Proyecto
type archivo.txt
del archivo.txt
```

### Rutas absolutas y relativas
Ejemplos /home/user vs ../docs

## Página usuarios-permisos-rutas

useradd, passwd, grupos, chmod 754, rwx.

<!-- code: bash -->
```bash
sudo useradd -m estudiante
sudo passwd estudiante
chmod 640 informe.pdf
```

## Página respaldo-informacion

Niveles 1–4: espejo, NAS, cloud, geo-redundante.

## Página practica-y-cierre

<!-- interactive: PracticeExercise -->
<!-- interactive: Quiz slug=clase-03-sistemas-operativos -->
