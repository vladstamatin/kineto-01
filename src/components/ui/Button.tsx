"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "phone";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-semibold transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          
          // Size variants
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-sm": size === "md",
            "h-13 px-8 text-base": size === "lg",
          },
          
          // Style variants
          {
            // Primary - Turquoise background
            "bg-[var(--color-primary)] text-white rounded-lg uppercase tracking-wide hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5":
              variant === "primary",
            
            // Secondary - Navy background
            "bg-[var(--color-navy)] text-white rounded-lg uppercase tracking-wide hover:bg-[var(--color-navy-light)]":
              variant === "secondary",
            
            // Ghost - Outline style
            "bg-white text-[var(--color-primary)] border-[1.5px] border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-opacity-10)]":
              variant === "ghost",
            
            // Phone CTA - Pill shape with turquoise border
            "bg-white text-[var(--color-navy)] border-[1.5px] border-[var(--color-primary)] rounded-full gap-2 hover:bg-[var(--color-primary-opacity-10)]":
              variant === "phone",
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
