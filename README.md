# 🍕 Domus Pizzería — Sitio Web de Alta Conversión y SEO Local

[![Astro](https://img.shields.io/badge/Astro-6.3.7-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescript.org/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-success?style=for-the-badge&logo=google&logoColor=white)](#optimización-seo-y-conversión)

Este es el repositorio oficial de la plataforma web de **Domus Pizzería**, ubicada en **Requínoa, Región de O'Higgins, Chile**. El sitio ha sido diseñado y desarrollado con una arquitectura moderna y de alto rendimiento utilizando **Astro 6** y **Tailwind CSS 4**, enfocado en la conversión rápida de ventas mediante pedidos a través de WhatsApp y un posicionamiento óptimo en búsquedas de SEO local.

---

## 📖 Tabla de Contenidos
- [🍕 Sobre Domus Pizzería](#-sobre-domus-pizzería)
- [✨ Características Principales](#-características-principales)
- [🛠️ Arquitectura y Stack Tecnológico](#️-arquitectura-y-stack-tecnológico)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Configuración y Desarrollo Local](#-configuración-y-desarrollo-local)
- [🌍 Optimización SEO y Conversión](#-optimización-seo-y-conversión)
- [🍕 La Carta (Menú Inicial)](#-la-carta-menú-inicial)
- [📋 Licencia e Información de Contacto](#-licencia-e-información-de-contacto)

---

## 🍕 Sobre Domus Pizzería
Domus Pizzería es una propuesta gastronómica artesanal de primer nivel en Requínoa. Nos especializamos en pizzas de autor elaboradas con:
* **Masa madre y fermentación lenta**: Proceso de leudado controlado de **48 horas** para obtener una textura ligera, alveolada y de fácil digestión.
* **Horneado a la leña**: Cocción a alta temperatura en un horno de barro tradicional que le otorga ese inconfundible sabor ahumado y rústico.
* **Ingredientes Premium**: Selección minuciosa de materias primas nacionales e importadas de Italia (Pomodoro Mutti, Mozzarella Fior di Latte fresca).

---

## ✨ Características Principales
* 📱 **Diseño Responsive & Premium**: Estética visualmente atractiva con transiciones suaves, paleta de colores curada y micro-animaciones modernas.
* 🛍️ **Estrategia de Conversión WhatsApp**: Botón flotante móvil interactivo y llamadas a la acción (CTAs) contextuales que inician chats con mensajes pre-formateados.
* ⚡ **Performance Sobresaliente**: Generación estática nativa con Astro 6 para lograr tiempos de carga instantáneos e índices de velocidad perfectos (Core Web Vitals).
* 🗺️ **SEO Local Ultra-Optimizado**: Datos estructurados mediante **Schema.org (JSON-LD)** para posicionar a Domus Pizzería directamente en los resultados locales de Google y Google Maps.
* 📦 **Prácticas Modernas**: Estructura modular de componentes Astro reutilizables y estilos globales optimizados con Tailwind v4.

---

## 🛠️ Arquitectura y Stack Tecnológico
El proyecto utiliza un conjunto de herramientas modernas para garantizar velocidad, mantenibilidad y rendimiento óptimo:
* **Framework**: [Astro 6.3.7](https://astro.build/) — Estático por defecto, carga de JavaScript reducida al mínimo y carga de imágenes perezosa nativa.
* **Estilos**: [Tailwind CSS v4.3.0](https://tailwindcss.com/) — Integrado mediante el plugin nativo de Vite (`@tailwindcss/vite`), lo que asegura una compilación ultra-rápida y menor peso CSS.
* **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) — Para mayor seguridad y autocompletado en el desarrollo de la lógica del cliente y de los componentes.

---

## 📂 Estructura del Proyecto

La estructura del código sigue el patrón estándar de Astro, organizado de forma modular:

```text
domus-pizzeria/
├── public/                 # Recursos estáticos (Logos, imágenes optimizadas, manifiestos)
│   ├── images/             # Fotografías gastronómicas y og-image para redes
│   ├── favicon.ico
│   ├── manifest.json       # Configuración básica de PWA
│   └── robots.txt
├── src/
│   ├── components/         # Componentes modulares independientes
│   │   ├── BotonWhatsApp.astro   # Botón flotante móvil (CTA persistente)
│   │   ├── ComoPedir.astro       # Paso a paso interactivo del flujo de compra
│   │   ├── Footer.astro          # Sección inferior de contacto y redes
│   │   ├── Hero.astro            # Pantalla de bienvenida de alto impacto visual
│   │   ├── Menu.astro            # Carta digital interactiva con enlace a WhatsApp
│   │   ├── Proceso.astro         # Visualización del proceso de elaboración artesanal
│   │   ├── Testimonios.astro     # Reseñas reales de clientes
│   │   └── ValorPropuesto.astro  # Pilares de nuestra calidad
│   ├── layouts/
│   │   └── Layout.astro    # Plantilla base con metatags SEO y esquema JSON-LD
│   ├── styles/
│   │   └── global.css      # Sistema de diseño (Variables de color HSL, tipografías)
│   └── pages/
│       └── index.astro     # Página de inicio principal y única
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Scripts y dependencias del proyecto
```

---

## 🚀 Configuración y Desarrollo Local

### Requisitos Previos
* **Node.js**: Versión `>= 22.12.0` recomendada.
* **NPM**: Incluido con Node.js.

### Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/crizoz/domus-pizzeria.git
   cd domus-pizzeria
   ```

2. **Instalar las dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Duplica el archivo `.env.example` y renombralo a `.env`:
   ```bash
   cp .env.example .env
   ```
   Abre el archivo `.env` y define el número de WhatsApp oficial donde se recibirán los pedidos (sin el signo `+`):
   ```env
   PUBLIC_WHATSAPP_NUMBER=56912345678
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El sitio estará disponible localmente en `http://localhost:4321/`.

5. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Esto generará una build estática super optimizada en la carpeta `./dist/` lista para ser desplegada en Vercel, Netlify, Cloudflare Pages o cualquier servidor web.

---

## 🌍 Optimización SEO y Conversión

El sitio ha sido estructurado meticulosamente bajo estándares de optimización modernos:

### 1. SEO Técnico On-Page
* **Meta-tags Completos**: Títulos descriptivos, descripciones enriquecidas, meta keywords, etiquetas Open Graph para vistas previas hermosas en redes sociales (Facebook, Instagram, WhatsApp) y Twitter Cards.
* **Jerarquía Semántica**: Uso riguroso de elementos HTML5 (`<main>`, `<section>`, `<footer>`, y un único `<h1>` por página).
* **Preconectores de Fuentes**: Optimizaciones en la carga de fuentes tipográficas para reducir el First Contentful Paint (FCP).

### 2. Datos Estructurados JSON-LD
Incluye un bloque de metadatos semánticos en el `<head>` usando el formato JSON-LD de Google. Esto ayuda a que los motores de búsqueda identifiquen a Domus Pizzería como un negocio de restauración física:
* Tipo: `Restaurant` y `LocalBusiness`.
* Geolocalización exacta en Requínoa.
* Menú digital mapeado.
* Horarios de apertura y métodos de contacto integrados.

### 3. Embudo de Ventas WhatsApp
El flujo de compra está pensado para ser inmediato y amigable para el usuario:
* **Floating CTA (Móvil)**: Un botón flotante de WhatsApp siempre accesible en teléfonos móviles sin interrumpir la lectura.
* **Pre-mensajes**: Los enlaces envían al usuario a WhatsApp con un texto de saludo predefinido como *"Hola Domus! Quiero hacer un pedido 🍕"*, minimizando la fricción y acelerando el contacto inicial.

---

## 🍕 La Carta (Menú Inicial)

El sitio cuenta con las siguientes pizzas de autor en su menú inicial interactivo:

| Pizza | Ingredientes | Precio | Especialidad |
| :--- | :--- | :--- | :--- |
| **Margherita** | Pomodoro Mutti, Mozzarella Fior di Latte, Albahaca fresca | `$9.990` | 🇮🇹 La clásica |
| **Pepperoni** | Pomodoro Mutti, Mozzarella Fior di Latte, Pepperoni selecto | `$11.990` | ⭐ La más pedida |
| **Napolitana** | Pomodoro Mutti, Mozzarella Fior di Latte, Orégano, Tomate fresco, Jamón | `$10.990` | 🔥 Favorita del Chef |
| **Veggie** | Pomodoro Mutti, Mozzarella Fior di Latte, Champiñón, Pimentón verde, Cebolla | `$10.990` | 🌿 Favorita vegetariana |

---

## 📋 Licencia e Información de Contacto

* **Ubicación Física**: Oscar Castro 29, Requínoa, Región de O'Higgins, Chile.
* **Horarios de Atención**: Viernes a Domingo de 19:00 a 23:00 hrs.
* **Desarrollado para**: Domus Pizzería.

*Este proyecto es de código cerrado para el uso exclusivo del restaurante Domus Pizzería.*
