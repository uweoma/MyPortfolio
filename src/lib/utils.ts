/**
 * Tiny class-name joiner (keeps the bundle lean — no clsx dependency).
 * Falsy values are dropped so you can write `cn("a", cond && "b")`.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns true when a value is a real, filled-in setting rather than a
 * leftover "YOUR_..." placeholder. Used so the site never renders a broken
 * link — unconfigured links are hidden or shown disabled instead.
 */
export function isConfigured(value: string | undefined | null): value is string {
  return Boolean(value) && !value!.startsWith("YOUR_");
}
