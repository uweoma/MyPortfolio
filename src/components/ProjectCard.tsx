import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { isConfigured } from "@/lib/utils";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  // A button only renders for a real URL — placeholders/undefined stay hidden,
  // so a link appears automatically the moment you fill it in (no broken links).
  const hasGithub = isConfigured(project.github);
  const hasLive = isConfigured(project.liveDemo);

  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-black/30">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          {project.category && (
            <p className="mb-1 font-mono text-xs text-accent">{project.category}</p>
          )}
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        </div>
        {project.featured && (
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            Featured
          </span>
        )}
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(hasGithub || hasLive) && (
        <div className="mt-auto flex flex-wrap gap-3">
          {hasLive && (
            <Button href={project.liveDemo!} external size="sm">
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          )}
          {hasGithub && (
            <Button href={project.github!} external variant="secondary" size="sm">
              <GithubIcon className="h-4 w-4" /> GitHub
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
