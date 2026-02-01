import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "w-full mx-auto px-[var(--container-padding-x)]",
          
          // Size variants
          {
            "max-w-[var(--container-sm)]": size === "sm",
            "max-w-[var(--container-md)]": size === "md",
            "max-w-[var(--container-lg)]": size === "lg",
            "max-w-[var(--container-xl)]": size === "xl",
            "max-w-[var(--container-2xl)]": size === "2xl",
            "max-w-none": size === "full",
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

Container.displayName = "Container";

export { Container };
