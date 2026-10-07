import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Small monospace label above the title, e.g. "// about". */
  eyebrow?: string;
  /** Section heading (rendered as an <h2>). */
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Reusable section wrapper: consistent spacing, max-width container,
 * and an accessible heading linked via aria-labelledby.
 */
export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn("scroll-mt-20 py-20 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <header className="mb-10 sm:mb-14">
            {eyebrow && <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>}
            {title && (
              <h2
                id={headingId}
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
