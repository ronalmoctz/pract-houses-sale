# Houses Sale Landing

> [!NOTE]  
> Este proyecto está desplegado en Vercel y forma parte del portafolio personal.  
> El foco principal es demostrar animaciones avanzadas con **GSAP** dentro de una web estática construida con **Astro** y **Tailwind**.

---

## Badges

![Astro](https://img.shields.io/badge/Astro-5.x-blue?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-teal?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.x-brightgreen)

> [!NOTE]  
> Versiones aproximadas basadas en `package.json`.

---

## Vista previa (deploy)

El sitio está desplegado en **Vercel**:  
👉 https://house-landing-page-cyan.vercel.app/

---

## Resumen

Esta es una **landing page** para mostrar viviendas, creada como proyecto de portfolio para demostrar maquetado con Astro, utilidades de Tailwind y animaciones con GSAP.  
Está pensada para ser ligera, visual y con transiciones suaves.

---

## Tecnologías principales

- **Astro** — Generación estática y estructura de componentes.  
- **TailwindCSS** — Utilidad de estilos, sistema de diseño.  
- **GSAP** — Animaciones complejas y controladas por JavaScript (foco del proyecto).  
- **Sharp** — Optimización y procesamiento de imágenes en build.  
- **Node / npm / pnpm** — Entorno de desarrollo (referencia en `package.json`).  

---

## Cómo se construyó (diagrama)

```mermaid
flowchart TD
    A[Contenido / Markdown / Pages] -->|Astro| B(Compilación / SSR estático)
    B --> C[Assets optimizados]
    C --> D[Sharp procesa imágenes]
    B --> E[Componentes: Hero, Gallery, Navbar, Modal, HousePlan]
    E --> F[Animaciones GSAP en src/scripts]
    E --> G[Estilos con Tailwind]
    B --> H[Build estático]
    H --> I[Vercel - Deploy automático]

    style F fill:#f9f,stroke:#333,stroke-width:1px
    style G fill:#def,stroke:#333,stroke-width:1px
