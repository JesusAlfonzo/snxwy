// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // 1. El output va aquí (nivel raíz)
  output: 'static',

  // 2. El adaptador de Vercel va aquí con sus opciones
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  vite: {
    // 3. Solo el plugin de Tailwind va aquí
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },
});