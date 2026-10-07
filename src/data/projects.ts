/**
 * ============================================================================
 *  PROJECTS — add, remove, or reorder projects here.
 * ============================================================================
 *  Link rules (handled automatically by the ProjectCard component):
 *    - A real URL (https://...)      -> button is shown and clickable
 *    - A "YOUR_..." placeholder       -> button is hidden until you fill it in
 *    - undefined / omitted            -> button is hidden
 *  This means you can paste a URL in later and the button appears on its own.
 */

export type Project = {
  name: string;
  /** Short category label, e.g. "Backend / REST API". */
  category?: string;
  description: string;
  technologies: string[];
  /** Public repo URL, or omit / leave undefined if there isn't one yet. */
  github?: string;
  /** Live deployment URL, or omit if there isn't one. */
  liveDemo?: string;
  /** Highlights a flagship project with a "Featured" badge. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Expense Tracker API",
    category: "Backend / REST API",
    description:
      "A backend expense management API for creating, managing, and tracking personal expenses using PostgreSQL and Sequelize.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "Docker", "JWT"],
    github: "https://github.com/uweoma/ExpenseTracker",
  },
  {
    name: "Todo Application API",
    category: "Backend / REST API",
    description:
      "A secure task management backend with user authentication, authorization, and CRUD operations for personal tasks.",
    technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/uweoma/TodoApp",
  },
  {
    name: "Subscription Tracker API",
    category: "Backend / REST API",
    description:
      "A subscription management API for tracking subscriptions, renewals, cancellations, and plan changes with security and validation features.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Arcjet"],
    github: "https://github.com/uweoma/subscription-tracker",
  },
  {
    name: "E-Wallet API",
    category: "Backend / REST API",
    description:
      "A backend wallet API supporting authentication, wallet funding, peer-to-peer transfers, balance management, and transaction history.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Docker", "JWT"],
    github: "https://github.com/uweoma/E-WALLET",
  },
  {
    name: "BufaHair",
    category: "Full-Stack / E-Commerce",
    description:
      "A modern e-commerce platform built for a real hair business — product catalog, variations, cart and wishlist, authentication, checkout with payment integration, coupons, and order management, plus an admin area for product management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "Payment Gateway",
    ],
    // Live URL hides itself until you add a real deployment link here.
    github: "https://github.com/uweoma/BufaHairs",
    liveDemo: "YOUR_BUFAHAIR_LIVE_URL",
    featured: true,
  },
];
