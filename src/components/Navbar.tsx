"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Subtle background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // When the mobile menu is open: lock scroll, close on Escape / resize.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} — back to top`}
          className="flex items-center gap-2.5"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-accent"
          >
            {">_"}
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    isActive ? "text-accent" : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="ml-1">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile (opens in a new tab)"
              className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-surface md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 -z-10 bg-background/60 backdrop-blur-sm"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div id="mobile-menu" className="border-t border-border bg-background px-5 pb-5 pt-2">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base transition-colors",
                        isActive
                          ? "bg-surface text-accent"
                          : "text-muted hover:bg-surface hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-md px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
