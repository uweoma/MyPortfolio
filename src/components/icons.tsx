import type { SVGProps } from "react";

/**
 * Brand icons (GitHub, LinkedIn) as inline SVGs.
 * lucide-react v1 removed brand/logo icons, so we ship our own here.
 * They size with `h-*`/`w-*` utility classes just like lucide icons.
 */

export function GithubIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2.01-3.34.72-4.04-1.59-4.04-1.59-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.8 1.28 3.49.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.35 1.23-3.18-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.21.96-.26 1.98-.39 3-.4 1.02.01 2.05.14 3.01.4 2.29-1.53 3.29-1.21 3.29-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.89 1.23 3.18 0 4.54-2.81 5.54-5.49 5.83.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.69.83.57C20.57 21.88 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
