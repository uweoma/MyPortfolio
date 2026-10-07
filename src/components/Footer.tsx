import { Mail, type LucideIcon } from "lucide-react";
import { contact } from "@/config/site";
import { isConfigured, gmailComposeUrl } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./icons";

type IconType = LucideIcon | typeof GithubIcon;

function FooterLink({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: IconType;
  label: string;
  href?: string;
  external?: boolean;
}) {
  if (!href) {
    return (
      <li>
        <span
          className="grid h-10 w-10 place-items-center rounded-md text-faint opacity-60"
          title={`Add your ${label} in src/config/site.ts`}
          aria-label={`${label} not set yet`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </li>
    );
  }
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        aria-label={external ? `${label} (opens in a new tab)` : label}
        className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
      >
        <Icon className="h-5 w-5" aria-hidden />
      </a>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} Uweoma Adewale. All rights reserved.
        </p>
        <ul className="flex items-center gap-1">
          <FooterLink icon={GithubIcon} label="GitHub" href={contact.github} external />
          <FooterLink
            icon={LinkedinIcon}
            label="LinkedIn"
            href={isConfigured(contact.linkedin) ? contact.linkedin : undefined}
            external
          />
          <FooterLink
            icon={Mail}
            label="Email"
            href={isConfigured(contact.email) ? gmailComposeUrl(contact.email) : undefined}
            external
          />
        </ul>
      </div>
    </footer>
  );
}
