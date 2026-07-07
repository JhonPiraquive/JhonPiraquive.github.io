# Clase 3: Administración remota y computación en la nube

**Duración:** 2 horas  
**Syllabus:** 1.5, 2.1–2.3

## Objetivos medibles

1. Explicar IaaS, PaaS, SaaS con ejemplos (AWS, Azure, Google Cloud, Heroku, Vercel).
2. Instalar y usar SSH: claves, puerto 22, OpenSSH, PuTTY, WSL.
3. Transferir archivos con SFTP/FileZilla (nunca FTP plano en producción).
4. Comparar RDP, VNC y paneles (cPanel/Plesk) para administración remota.

## Bloques de tiempo (docente)

| Min | Bloque |
|-----|--------|
| 0–15 | Modelos de nube NIST |
| 15–50 | SSH: instalación, claves, hardening |
| 50–80 | SFTP y FileZilla |
| 80–105 | RDP, VNC, paneles web |
| 105–115 | Buenas prácticas y errores |
| 115–120 | Quiz y cierre |

## 1.5 Computación en la nube

Principios NIST: autoservicio, acceso red, elasticidad, medición. IaaS (EC2, VPS cloud), PaaS (Heroku, App Engine), SaaS (Workspace, M365).

## 2.1 SSH

OpenSSH server/client. `ssh-keygen`, `authorized_keys`, firewall ufw puerto 22. Acceso desde Windows: OpenSSH nativo, PuTTY, WSL.

## 2.2 FTP / FileZilla

Instalación FileZilla. Conexión SFTP (puerto 22). Comparar FTP vs SFTP vs FTPS.

## 2.3 Administración remota

RDP (Windows), VNC (multiplataforma), cPanel/Plesk. MFA, VPN, no exponer paneles sin restricción IP.

## Errores comunes

- FTP sin cifrar con credenciales en texto plano
- SSH con contraseña débil y root login habilitado
- Puerto 22 abierto a 0.0.0.0/0 sin fail2ban

## Ejercicios

1. CodeChallenge: completar comando SSH con clave
2. CompareTable: FTP vs SFTP vs SCP
3. Reflexión: ¿cuándo usar PaaS vs IaaS?

## Casos LATAM

- Dev remoto en Cali administra VPS en DigitalOcean vía SSH
- Agencia usa cPanel en hosting compartido colombiano
