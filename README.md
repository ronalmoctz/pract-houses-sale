# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
# Landing page - Proyecto de Portfolio: House Landing

>.[NOTE] Este proyecto está desplegado en Vercel y forma parte del portafolio personal. El foco principal es demostrar animaciones avanzadas con GSAP dentro de una web estática construida con Astro y Tailwind.

## Badges

![Astro](https://img.shields.io/badge/Astro-5.x-blue?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-teal?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.x-brightgreen)
![Sharp](https://img.shields.io/badge/sharp-image-processing-orange)

>.[NOTE] Versiones aproximadas basadas en `package.json`.

## Vista previa (deploy)

El sitio está desplegado en Vercel: https://house-landing-page-cyan.vercel.app/

## Resumen

Esta es una landing page para mostrar viviendas, creada como proyecto de portfolio para demostrar maquetado con Astro, utilidades de Tailwind y animaciones con GSAP. Está pensada para ser ligera, visual y con transiciones suaves.

## Tecnologías principales

- Astro — Generación estática y estructura de componentes.
- TailwindCSS — Utilidad de estilos, sistema de diseño.
- GSAP — Animaciones complejas y controladas por JavaScript (foco del proyecto).
- Sharp — Optimización y procesamiento de imágenes en build.
- Node / npm / pnpm — entorno de desarrollo (referencia en `package.json`).

## Cómo se construyó (diagrama)

```mermaid
flowchart TD
	A[Contenido / Markdown / Páginas] -->|Astro| B(Compilación / SSR estático)
	B --> C[Assets optimizados]
	C --> D[Sharp procesa imágenes]
	B --> E[Componentes (Hero, Gallery, Navbar, Modal, HousePlan)]
	E --> F[Animaciones GSAP en `src/scripts`]
	E --> G[Estilos con Tailwind]
	B --> H[Build estático]
	H --> I[Vercel - Deploy automático]
	style F fill:#f9f,stroke:#333,stroke-width:1px
	style G fill:#def,stroke:#333,stroke-width:1px
```

>.[NOTE] El diagrama muestra el flujo desde contenido y componentes hasta el deploy en Vercel y destaca la ubicación de las animaciones GSAP (carpeta `src/scripts`).

## Estructura relevante del proyecto

- `src/components/` — Componentes reutilizables (Hero, Navbar, Gallery, Modal, etc.)
- `src/pages/` — Páginas de la app (p. ej. `index.astro`).
- `src/scripts/` — Lógica de animaciones (GSAP) y scripts de interacción.
- `src/styles/` — Estilos globales (Tailwind + CSS personalizado).
- `src/assets/` — Imágenes y SVG usados por los componentes.

## Ideas clave y decisiones técnicas

- Separación clara entre markup (Astro), estilos (Tailwind) y comportamiento (GSAP). Esto facilita mantenimiento y pruebas individuales.
- Uso de Sharp para asegurar imágenes optimizadas durante el build y mejorar performance.
- Componentización para reutilizar patrones (botones, modal, galería).

## Contrato / Expectativas (pequeño)

- Entrada: Archivos fuente en `src/` (componentes, assets, scripts).
- Salida: Sitio estático optimizado servido desde Vercel.
- Errores: Fallos en build muestran mensajes durante la compilación de Astro / plugins (Sharp, Tailwind).

## Casos límite considerados

- Imágenes muy grandes: Sharp reduce tamaño y genera versiones optimizadas.
- Animaciones en dispositivos lentos: GSAP controles y `requestAnimationFrame` para suavizar; se pueden añadir medios condicionales para desactivar animaciones en móviles si es necesario.

## Notas finales

>.[NOTE] Este proyecto está pensado para exhibir habilidades en animación (GSAP) y en composición moderna con Astro y Tailwind; el resultado está en producción en Vercel. Para ver el comportamiento interactivo revisa `src/scripts/animations.js` y `src/scripts/gallery.js`.

---

Si quieres que agregue capturas, una sección de pruebas unitarias o un GIF corto demostrando las animaciones, lo preparo y lo incluyo en el README.
