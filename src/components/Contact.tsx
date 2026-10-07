"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { Mail, Send } from "lucide-react";
import { contact } from "@/config/site";
import { cn, gmailComposeUrl, isConfigured } from "@/lib/utils";
import { Button } from "./ui/Button";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section } from "./Section";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wide text-faint">
          {label}
        </span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </>
  );
  const classes = "flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3";

  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className={cn(classes, "transition-colors hover:border-border-strong")}
        >
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li>
      <div className={cn(classes, "opacity-70")} title="Add this in src/config/site.ts">
        {inner}
      </div>
    </li>
  );
}

export function Contact() {
  const emailReady = isConfigured(contact.email);
  const linkedinReady = isConfigured(contact.linkedin);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailReady) return;
    const subject = `Portfolio enquiry from ${form.name || "someone"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    // Opens Gmail's compose window in a new tab, pre-addressed to you.
    window.open(
      gmailComposeUrl(contact.email, subject, body),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClasses =
    "w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint transition-colors focus-visible:border-accent focus-visible:outline-none";

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's Build Something"
      description="I'm open to backend development opportunities, internships, collaborations, and interesting projects."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <ul className="space-y-3">
            <ContactMethod
              icon={Mail}
              label="Email"
              value={emailReady ? contact.email : "Add your email in src/config/site.ts"}
              href={emailReady ? gmailComposeUrl(contact.email) : undefined}
              external
            />
            <ContactMethod
              icon={GithubIcon}
              label="GitHub"
              value="github.com/uweoma"
              href={contact.github}
              external
            />
            <ContactMethod
              icon={LinkedinIcon}
              label="LinkedIn"
              value={linkedinReady ? contact.linkedin : "Add your LinkedIn in src/config/site.ts"}
              href={linkedinReady ? contact.linkedin : undefined}
              external
            />
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or project…"
              className={cn(fieldClasses, "resize-y")}
            />
          </div>

          <Button type="submit" disabled={!emailReady} className="w-full sm:w-auto">
            Send Message <Send className="h-4 w-4" aria-hidden />
          </Button>

          <p className="text-xs text-faint">
            {emailReady
              ? "This opens Gmail in a new tab with your message pre-filled."
              : "Set your email in src/config/site.ts to enable the form."}
          </p>
        </form>
      </div>
    </Section>
  );
}
