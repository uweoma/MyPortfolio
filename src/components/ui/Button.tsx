import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "sm" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-strong",
  secondary:
    "border border-border bg-surface text-foreground hover:border-border-strong hover:bg-elevated",
  ghost: "text-muted hover:bg-surface hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-sm",
  icon: "h-10 w-10",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variantClasses[variant], sizeClasses[size], className);
}

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  title?: string;
  "aria-label"?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

type NativeButtonProps = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

/**
 * Polymorphic button: renders an <a> when `href` is provided, otherwise a
 * native <button>. Keeps all call sites consistent and accessible.
 */
export function Button(props: LinkButtonProps | NativeButtonProps) {
  const classes = buttonClasses(props.variant, props.size, props.className);
  const ariaLabel = props["aria-label"];

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        title={props.title}
        aria-label={ariaLabel}
        className={classes}
        {...(props.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
      aria-label={ariaLabel}
      className={classes}
    >
      {props.children}
    </button>
  );
}
