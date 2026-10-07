import { ArrowRight, MapPin } from "lucide-react";
import { contact, siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      {/* Decorative background: faint grid + accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_30%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[460px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-28">
        <div>
          {siteConfig.availability && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {siteConfig.availability}
            </p>
          )}

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">{siteConfig.name}</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">{siteConfig.role}</p>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View My Projects <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={contact.github} external variant="ghost" aria-label="GitHub profile (opens in a new tab)">
              <GithubIcon className="h-4 w-4" /> GitHub
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-sm text-faint">
            <MapPin className="h-4 w-4" aria-hidden /> {siteConfig.location}
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
