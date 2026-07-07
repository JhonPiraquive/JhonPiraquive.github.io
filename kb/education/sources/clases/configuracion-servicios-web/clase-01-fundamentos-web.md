# Clase 1: Fundamentos web — Navegadores, IP, dominios y DNS

**Duración:** 2 horas  
**Syllabus:** 1.1, 1.2.1–1.2.6

## Objetivos medibles

1. Comparar navegadores y motores (Blink, Gecko, WebKit); configurar cookies, caché y privacidad.
2. Distinguir IP pública, privada, fija y dinámica; consultar IP en Windows y Linux.
3. Explicar estructura de dominio (SLD, TLD, subdominio); registrar dominio .co en LATAM.
4. Configurar registros DNS (A, AAAA, CNAME, MX, TXT) y explicar propagación.

## Bloques de tiempo (docente)

| Min | Bloque |
|-----|--------|
| 0–15 | Bienvenida, repaso cliente-servidor |
| 15–40 | Navegadores: motores, rendimiento, DevTools |
| 40–70 | Direcciones IP: tipos, comandos ipconfig/ip addr |
| 70–100 | Dominios y compra (.co NIC, registradores LATAM) |
| 100–115 | DNS: resolución, registros, subdominios |
| 115–120 | Quiz y cierre |

## 1.1 Navegadores web

Chrome, Firefox, Edge, Safari, Opera, Brave. Motores. Factores de velocidad. Configuración: cookies, caché, seguridad, privacidad, DevTools (Red, Consola, Almacenamiento).

### Errores comunes

- Culpar al servidor sin revisar caché del navegador
- Extensiones que bloquean scripts o ads rompen sitios

## 1.2 Dominios e IP

### 1.2.1 Tipos de IP

- Pública — enrutable en Internet (asignada por ISP al router)
- Privada — RFC 1918 (10.x, 172.16–31.x, 192.168.x)
- Fija — reserva DHCP o asignación manual
- Dinámica — DHCP del router/ISP

### 1.2.2 Consultar IP

Windows: `ipconfig`, `ipconfig /all`. Linux: `ip addr`, `hostname -I`, `curl ifconfig.me`.

### 1.2.3 Cambiar IP

Panel router, IP estática en SO, netplan/NetworkManager, IP fija empresarial con ISP.

### 1.2.4 Dominio

SLD + TLD. Registradores: NIC Colombia (.co), Namecheap, GoDaddy, Cloudflare Registrar.

### 1.2.5 Configurar dominio

Nameservers, A, AAAA, CNAME, MX, TXT. Propagación 24–48 h.

### 1.2.6 Subdominios

api., mail., blog., staging. — separar servicios sin nuevo dominio.

## Ejercicios

1. Reflexión: factores que ralentizan el navegador
2. Diagrama: flujo DNS usuario → navegador → resolver → servidor
3. Diagnóstico: «mi IP es 192.168.x.x y ya estoy en Internet»

## Casos LATAM

- Startup bogotana registra `empresa.co` en NIC y apunta nameservers a Cloudflare
- PyME migra de IP dinámica a fija para servidor de cámaras
