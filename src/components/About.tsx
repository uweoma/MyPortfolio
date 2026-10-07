import { Check } from "lucide-react";
import { focusAreas } from "@/config/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="// about" title="About Me">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:col-span-3">
          <p>
            I&apos;m a backend developer passionate about building APIs, authentication systems,
            database-driven applications, and reliable backend services. I care about writing
            secure, maintainable code and designing systems that hold up as they grow.
          </p>
          <p>
            I enjoy solving problems, learning new technologies, and building real-world
            applications — from modeling the database and securing endpoints to containerizing
            services and shipping them to the cloud.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 font-mono text-sm text-foreground">What I Focus On</h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground"
              >
                <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
