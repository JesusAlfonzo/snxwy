import type { ImageMetadata } from "astro";

/**
 * Representa un capítulo en la sección Mente
 */
export interface Chapter {
  title: string;
  subtitle: string;
  blocked: boolean;
  image: string | ImageMetadata;
  href?: string;
  bgColor?: string;
  width?: number;
  height?: number;
}

/**
 * Elemento de navegación para el Navbar
 */
export interface NavItem {
  label: string;
  href: string;
  id: string;
}

/**
 * Miga de pan calculada para la ruta actual
 */
export interface Breadcrumb {
  label: string;
  path: string;
  isLast: boolean;
}
