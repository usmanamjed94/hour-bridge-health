"use client";

import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "white";
type ButtonSize = "lg" | "md" | "sm";

const sizeClasses: Record<ButtonSize, string> = {
  lg: "px-9 py-[18px] text-base",
  md: "px-7 py-3.5 text-[15px]",
  sm: "px-5 py-2.5 text-sm",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-hb-accent text-white shadow-[0_4px_15px_rgba(42,140,122,0.25)] hover:bg-hb-accent-hover hover:shadow-[0_8px_30px_rgba(42,140,122,0.4)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-hb-primary border-2 border-hb-border hover:border-hb-accent hover:text-hb-accent hover:-translate-y-0.5",
  white:
    "bg-white text-hb-primary shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:bg-hb-light hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "primary",
  size = "lg",
  icon,
  href,
  className,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  href?: string;
  className?: string;
}) {
  const cls = `inline-flex items-center gap-2.5 font-body font-semibold rounded-lg tracking-[0.01em] whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out ${sizeClasses[size]} ${variantClasses[variant]}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {icon && <span className="flex">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls}>
      {icon && <span className="flex">{icon}</span>}
      {children}
    </button>
  );
}
