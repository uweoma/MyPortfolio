import { Compass } from "lucide-react";
import { currentlyExploring, journeyAreas } from "@/config/site";
import { Section } from "./Section";

export function Journey() {
  return (
    <Section id="experience" eyebrow="// journey" title="My Development Journey">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;ve been building practical backend applications and steadily strengthening my
            knowledge across the stack — from API design and databases to security and deployment.
          </p>
          <p>
            I enjoy turning ideas into working applications: modeling data, securing endpoints,
            containerizing services with Docker, and deploying them to the cloud.
          </p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {journeyAreas.map((area) => (
              <li
                key={area}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <Compass className="h-5 w-5 text-accent" aria-hidden />
            <h3 className="text-lg font-semibold text-foreground">Currently Exploring</h3>
          </div>
          <p className="mb-5 text-sm text-muted">
            Technologies and concepts I&apos;m actively learning right now.
          </p>
          <ul className="flex flex-wrap gap-2">
            {currentlyExploring.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
