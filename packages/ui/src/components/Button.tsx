import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

const variantClass: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-blue-600 focus-visible:ring-blue-500",
  secondary: "bg-white text-gray-900 border border-border hover:bg-gray-50 focus-visible:ring-gray-400",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300"
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = "primary", size = "md", className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ui-shadow",
          variantClass[variant],
          sizeClass[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
