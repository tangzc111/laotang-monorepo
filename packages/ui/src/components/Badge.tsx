import React from "react";
import { cn } from "../utils/cn";
import type { HTMLAttributes } from "react";

type Variant = "default" | "success" | "warning";

const variantClass: Record<Variant, string> = {
  default: "bg-gray-100 text-gray-700 border border-border",
  success: "bg-green-100 text-green-700 border border-green-200",
  warning: "bg-yellow-100 text-yellow-800 border border-yellow-200"
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export const Badge = ({ variant = "default", className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variantClass[variant],
        className
      )}
      {...props}
    />
  );
};
