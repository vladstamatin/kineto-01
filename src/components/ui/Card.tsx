import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "team" | "service";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "relative overflow-hidden",
          
          // Variant styles
          {
            // Default card
            "bg-white rounded-[var(--card-radius)] shadow-[var(--shadow-md)]":
              variant === "default",
            
            // Team member card with aspect ratio
            "rounded-[var(--card-radius)] aspect-[3/4]":
              variant === "team",
            
            // Service image card (sticky sidebar)
            "rounded-[var(--card-radius-lg)] h-[500px] sticky top-[calc(var(--nav-height)+var(--space-6))]":
              variant === "service",
          },
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
