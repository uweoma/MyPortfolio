import { skillCategories } from "@/data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title="Skills & Technologies"
      description="The tools and technologies I use to design, build, and ship backend systems."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-strong"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
