import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  marker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "light" | "dark";
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, marker, title, subtitle, align = "left", variant = "light", ...props }, ref) => {
    const isDark = variant === "dark";
    
    return (
      <div
        ref={ref}
        className={cn(
          "mb-10",
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
          },
          className
        )}
        {...props}
      >
        {/* Section Marker */}
        {marker && (
          <span className="inline-block text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary)] mb-3">
            {marker}
          </span>
        )}
        
        {/* Title */}
        <h2 className={cn(
          "text-4xl font-bold leading-tight tracking-tight",
          isDark ? "text-white" : "text-[var(--color-navy)]"
        )}>
          {title}
        </h2>
        
        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            isDark ? "text-white/70" : "text-[var(--color-slate)]"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
