# Clase 4: Virtualización, contenedores y diagnóstico integrador

**Duración:** 2 horas  
**Syllabus:** 3.1, 3.2, bloque 4

## Objetivos medibles

1. Comparar contenedor Docker vs máquina virtual; usar Docker Compose para staging.
2. Crear VM en VirtualBox/Hyper-V con snapshots para laboratorio.
3. Diagnosticar fallos: DNS, TLS, MX, SSH, contenedores, caché navegador.
4. Completar reto integrador: dominio → DNS → hosting HTTPS → SSH → Docker staging.

## Bloques de tiempo (docente)

| Min | Bloque |
|-----|--------|
| 0–20 | Contenedores: Docker, imágenes, Compose |
| 20–45 | VMs: VirtualBox, Hyper-V, snapshots |
| 45–70 | Troubleshooting por capa (tabla) |
| 70–110 | Reto integrador en grupos |
| 110–120 | Quiz final y cierre del curso |

## 3.1 Contenedores

Ventajas: aislamiento, portabilidad, arranque rápido. VM vs contenedor (kernel compartido). Docker Desktop Windows. `docker run`, `docker compose up`. Kubernetes mención.

## 3.2 Máquinas virtuales

VirtualBox, VMware, Hyper-V, KVM. Laboratorio: Ubuntu Server en VM, snapshots antes de cambios.

## 4. Diagnóstico

| Síntoma | Causa probable | Acción |
|---------|----------------|--------|
| Dominio no resuelve | DNS/TTL | dig, propagación |
| Certificado inválido | TLS vencido | certbot renew |
| Correo rebota | MX/SPF | revisar zona DNS |
| SSH rechazado | clave/firewall | ssh -v, ufw |
| Contenedor caído | puerto/logs | docker logs |
| Sitio viejo en navegador | caché | hard refresh |

## Reto integrador

Stack completo: registrar subdominio staging → A record → VPS con Nginx HTTPS → deploy por SSH → `docker compose` con app de prueba. Documentar cada paso y un fallo simulado.

## Ejercicios

1. CompareTable: VM vs contenedor
2. Diagnóstico: dominio resuelve pero certificado expirado
3. Reto integrador (grupal)
