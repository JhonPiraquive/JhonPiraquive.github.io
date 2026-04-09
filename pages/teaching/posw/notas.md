# Formatos de Datos

## DTD vs XML Schema (XSD)

### 🧩 DTD (Document Type Definition)
Define la **estructura básica** de un XML.

- Qué etiquetas existen
- Orden de elementos
- Atributos permitidos

#### Ejemplo
```xml
<!DOCTYPE libro [
  <!ELEMENT libro (titulo, autor)>
  <!ELEMENT titulo (#PCDATA)>
  <!ELEMENT autor (#PCDATA)>
]>
```

❌ Limitaciones:

No tiene tipos de datos
Sintaxis diferente a XML
Poco flexible
🧠 XML Schema (XSD)

Es la versión moderna para validar XML.

Define estructura + tipos de datos
Permite validaciones (min, max, etc.)
Usa sintaxis XML

#### Ejemplo

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="libro">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="titulo" type="xs:string"/>
        <xs:element name="autor" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

⚔️ Diferencia rápida

### 📊 DTD vs XSD

| DTD            | XSD                  |
|----------------|----------------------|
| Antiguo        | Moderno              |
| Sin tipos      | Con tipos            |
| Menos potente  | Más flexible         |

---

### 🎯 Resumen

- **DTD** → básico y obsoleto  
- **XSD** → completo y recomendado ✅

<br><br><br>

## 🧩 ¿Qué es un Namespace?

Un **namespace (espacio de nombres)** es una forma de **evitar conflictos de nombres** en XML (y otros lenguajes) cuando diferentes elementos tienen el mismo nombre.

---

### 📌 ¿Por qué se usa?

Permite diferenciar elementos que se llaman igual pero pertenecen a contextos distintos.

---

### ✅ Ejemplo sin namespace (problema)

```xml
<id>123</id>
```

No sabes si es:

ID de usuario
ID de producto

### Ejemplo con namespace (solución)

```xml
<usuario:id xmlns:usuario="http://example.com/usuario">123</usuario:id>
<producto:id xmlns:producto="http://example.com/producto">456</producto:id>
```

<br><br><br><br>

# Protocolos de Seguridad Web

## 🌐 Modelo OSI (Open Systems Interconnection)

El **modelo OSI** es un estándar que describe cómo viajan los datos en una red, dividiéndolo en **7 capas**. Cada capa tiene una función específica.

---

### 📊 Las 7 capas del modelo OSI

| # | Capa           | Función principal                          |
|---|----------------|--------------------------------------------|
| 7 | Aplicación     | Interacción con el usuario (HTTP, FTP)     |
| 6 | Presentación   | Formato, cifrado, compresión               |
| 5 | Sesión         | Control de conexiones entre sistemas       |
| 4 | Transporte     | Entrega de datos (TCP/UDP)                 |
| 3 | Red            | Direccionamiento (IP)                      |
| 2 | Enlace de datos| Comunicación entre dispositivos (MAC)      |
| 1 | Física         | Transmisión de bits (cables, señales)      |

---

### 🧠 Explicación rápida por capas

#### 7️⃣ Aplicación
Interfaz directa con el usuario  
Ej: navegador web

#### 6️⃣ Presentación
Traduce datos (JSON, XML), cifra (SSL)

#### 5️⃣ Sesión
Mantiene y controla la conexión

#### 4️⃣ Transporte
Divide y asegura los datos  
Ej: TCP (seguro), UDP (rápido)

#### 3️⃣ Red
Define rutas y direcciones IP

#### 2️⃣ Enlace de datos
Usa direcciones MAC para comunicación local

#### 1️⃣ Física
Envía bits como señales eléctricas o inalámbricas

---

### 🎯 Forma fácil de recordarlo

**"Aplicación, Presentación, Sesión, Transporte, Red, Enlace, Física"**

👉 De arriba hacia abajo = cómo se envían los datos  
👉 De abajo hacia arriba = cómo se reciben

---

### 📦 Ejemplo práctico

Cuando abres una página web:

1. Aplicación → haces la solicitud HTTP  
2. Transporte → se divide en paquetes (TCP)  
3. Red → se envía por IP  
4. Física → viaja por cables o WiFi  

---

### 🎯 Resumen

- Son **7 capas**
- Cada capa tiene una función específica
- Ayuda a entender cómo funciona Internet