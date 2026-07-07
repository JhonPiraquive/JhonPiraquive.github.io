# Clase 2: Hosting, correo corporativo y HTTPS

**Duración:** 2 horas  
**Syllabus:** 1.3, 1.4

## Objetivos medibles

1. Comparar tipos de hosting (compartido, VPS, dedicado, cloud) y elegir según caso.
2. Desplegar sitio en hosting: FTP/SFTP, panel, SSL, optimización (CDN, HTTP/2).
3. Configurar correo corporativo: MX, SPF, DKIM, IMAP/SMTP en cliente.
4. Instalar y renovar certificado HTTPS/TLS (Let's Encrypt, certbot).

## Bloques de tiempo (docente)

| Min | Bloque |
|-----|--------|
| 0–10 | Repaso DNS → hosting |
| 10–45 | Tipos de hosting y despliegue |
| 45–75 | Correo corporativo paso a paso |
| 75–105 | HTTPS: certificados, instalación, redirección |
| 105–115 | Errores comunes y troubleshooting |
| 115–120 | Quiz y cierre |

## 1.3 Hosting

### 1.3.1 Qué es hosting

Servicio 24/7 para archivos y BD del sitio.

### 1.3.2 Tipos

Compartido, VPS, dedicado, cloud IaaS/PaaS. Tabla comparativa costo/control/escala.

### 1.3.3 Configuración

Disco SSD, ancho de banda, SSL, backups, runtime (PHP/Node), panel cPanel/Plesk. Subir archivos, BD, activar HTTPS.

### 1.3.4 Optimización

CDN (Cloudflare), compresión Gzip/Brotli, HTTP/2–3, caché servidor, región datacenter (Bogotá/Miami para LATAM).

### 1.3.5 Correo corporativo

Google Workspace, M365, Zoho. MX, SPF (`v=spf1`), DKIM (TXT). Cliente IMAP/SMTP en Outlook/Gmail.

## 1.4 HTTPS

Certificado TLS, validación dominio (HTTP-01, DNS-01), instalación en Nginx/Apache/cPanel, redirect HTTP→HTTPS, `certbot renew`.

## Errores comunes

- MX duplicados al migrar correo
- Certificado vencido sin cron de renovación
- Hosting compartido sin backups

## Ejercicios

1. Ordenar pasos: configurar correo corporativo
2. Reflexión: ¿compartido o VPS para e-commerce pequeño?
3. Diagnóstico: sitio muestra «No seguro» tras migrar hosting

## Casos LATAM

- Tienda Medellín en hosting local + Cloudflare CDN
- ONG con Zoho Mail y dominio .org.co
