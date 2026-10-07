/**
 * ============================================================================
 *  SITE CONFIG — edit everything about "you" from this one file.
 * ============================================================================
 *  Anything left as a "YOUR_..." placeholder is detected automatically and
 *  rendered as a disabled/hidden link, so the site never ships a broken URL.
 */

export const siteConfig = {
  name: "Uweoma Adewale",
  role: "Backend Developer",
  location: "Lagos, Nigeria",

  /** Short hero line shown under the name. */
  description:
    "Building secure, scalable, and efficient backend systems with Node.js, databases, and modern web technologies.",

  /** Longer description used for SEO / social sharing. */
  seoDescription:
    "Portfolio of Uweoma Adewale, a backend developer building secure, scalable APIs and database-driven applications with Node.js, PostgreSQL, MongoDB, and modern backend technologies.",

  /** Small availability badge in the hero (set to "" to hide it). */
  availability: "Open to backend roles & freelance",

  /**
   * Canonical site URL — used for Open Graph / canonical metadata only.
   * Change this to your real domain, or set NEXT_PUBLIC_SITE_URL in the
   * environment (e.g. on Vercel) to override it without editing code.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uweoma.vercel.app",
} as const;

/**
 * Contact details. Replace the placeholders with your real email and
 * LinkedIn URL whenever you're ready — nothing else needs to change.
 */
export const contact = {
  email: "uweomaadewale@gmail.com", // e.g. "uweoma@example.com"
  linkedin: "https://www.linkedin.com/in/uweoma-okpor-417878305?utm_source=share_via&utm_content=profile&utm_medium=member_android", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "https://github.com/uweoma",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** "What I Focus On" chips in the About section. */
export const focusAreas: string[] = [
  "Backend Development",
  "REST API Development",
  "Database Design",
  "Authentication & Authorization",
  "Application Security",
  "API Performance",
  "Docker & Deployment",
];

/** Areas highlighted in the Development Journey section. */
export const journeyAreas: string[] = [
  "API architecture",
  "Databases",
  "Authentication",
  "Security",
  "Docker",
  "Backend architecture",
  "Cloud deployment",
];

/** Technologies currently being explored (not claimed as expertise). */
export const currentlyExploring: string[] = [
  "TypeScript",
  "Next.js",
  "NestJS",
  "Docker & Docker Compose",
  "Cloud Deployment",
  "CI/CD",
  "Microservices",
  "Redis & Caching",
  "Queues & Background Jobs",
  "Observability",
];
