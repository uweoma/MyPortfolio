/**
 * Decorative terminal / code window used in the hero.
 * Purely visual — marked aria-hidden so screen readers skip the ASCII art
 * (the same information is available as real text elsewhere on the page).
 */
export function Terminal() {
  const stack = ["Node.js", "PostgreSQL", "MongoDB", "Docker"];

  return (
    <div aria-hidden className="relative w-full">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate font-mono text-xs text-faint">
            uweoma@developer: ~/portfolio
          </span>
        </div>

        {/* Body */}
        <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed">
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-foreground">whoami</span>
          </p>
          <p className="text-muted">uweoma@developer</p>

          <p className="pt-3">
            <span className="text-accent">$</span>{" "}
            <span className="text-foreground">cat stack.txt</span>
          </p>
          <p className="text-foreground">Backend Developer</p>
          <ul className="text-muted">
            {stack.map((item) => (
              <li key={item}>
                <span className="text-accent">{"▸"}</span> {item}
              </li>
            ))}
          </ul>

          <p className="pt-3">
            <span className="text-accent">$</span>{" "}
            <span className="inline-block h-4 w-[9px] translate-y-[2px] bg-accent align-middle animate-blink" />
          </p>
        </div>
      </div>
    </div>
  );
}
