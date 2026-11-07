# SNXWY — Espacio Personal de Creación

> Un proyecto personal de expresión artística y vulnerabilidad, donde la tecnología encuentra la psiquis humana.

---

## 🌌 Sobre el Proyecto

**SNXWY** es mi espacio personal de creación, un refugio digital donde por primera vez decido compartir aspectos muy profundos de mi identidad. Este proyecto nace de la necesidad de romper el silencio y crear un lenguaje donde la **música, la tecnología y lo visual** den peso y textura a mis sentimientos más internos.

### Inspiraciones Artísticas
- **Silent Hill** — Estética psicológica y exploración de la mente humana.
- **Música Lo-Fi** — Calma melancólica que acompaña la introspección.
- **$uicideboy$** — Honestidad cruda del rap underground y expresión sin filtros.

---

## 📜 Manifiesto de Identidad

Este proyecto se rige por principios fundamentales que guían mi proceso creativo:

- **I. Propósito: El Eco de la Psiquis** — Romper la barrera de lo indecible mediante un lenguaje híbrido entre tecnología y arte.
- **II. Intenciones: La Vulnerabilidad como Motor** — Desnudar la identidad ante quien decida observar, compartiendo luces y sombras.
- **III. Principios Fundamentales:**
  - *Creatividad y Libertad* — Herramientas de expansión.
  - *Aceptación y Perdón* — Para sanar el pasado.
  - *Constancia y Confianza* — Para construir el futuro.
  - *Intimidad y Paz* — El estado final de cada obra.
- **IV. Estética: La Belleza de lo Invisible** — Texturas de colores opacos y grises, retícula técnica blueprint, calma Lo-Fi y complejidad de la psiquis.

---

## 🛠 Arquitectura y Stack Tecnológico

Construido sobre las versiones más recientes del ecosistema web moderno:

- **[Astro 7](https://astro.build/)** — Framework web de alto rendimiento con renderizado estático y ClientRouter para transiciones fluidas.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Motor CSS utilitario integrado mediante `@tailwindcss/vite` con soporte de modo oscuro (`light` blueprint técnico / `dark` mate suave `#121316`).
- **[Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)** — Despliegue optimizado con `@astrojs/vercel` y analíticas activas.
- **TypeScript** — Tipado estricto para garantizar la integridad estructural y seguridad de datos.
- **Sharp** — Optimización automática de imágenes (`.webp`).

### Estructura del Código

```text
src/
├── assets/         # Fotografías, logos vectoriales e identidades
├── components/
│   ├── layout/     # Componentes estructurales (Navbar, Footer)
│   ├── sections/   # Secciones de página (Hero, Manifesto, Disclaimer)
│   └── ui/         # Elementos interactivos (ChapterCard, ThemeToggle)
├── layouts/        # Layout global con blueprint, noise y meta tags
├── pages/          # Rutas estáticas (/ y /mind)
├── styles/         # CSS global con tokens @theme y patrones de cuadrícula
└── types/          # Interfaces TypeScript compartidas (Chapter, NavItem, etc.)
```

---

## 🚀 Comandos de Desarrollo

| Comando | Acción |
|---|---|
| `pnpm install` | Instala las dependencias del proyecto |
| `pnpm dev` | Inicia el servidor de desarrollo local en `localhost:4321` |
| `pnpm build` | Construye el sitio estático optimizado para producción |
| `pnpm preview` | Previsualiza el build de producción localmente |
| `pnpm astro ...` | Ejecuta comandos utilitarios de Astro CLI |

---

> *"La verdadera libertad no es ausencia de cadenas, es la valentía de ser uno mismo ante el mundo."*
