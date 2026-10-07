import { Database, Server, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

/**
 * SKILLS — grouped into categories and rendered as clean badge cards.
 * Add or remove categories/skills freely.
 */
export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Sequelize"],
  },
  {
    title: "Security & APIs",
    icon: ShieldCheck,
    skills: ["REST APIs", "JWT", "OAuth", "bcrypt", "API validation", "Rate limiting"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Docker", "Git", "GitHub", "Postman/Insomnia", "Cloud deployment"],
  },
];
