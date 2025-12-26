import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, className, id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="space-y-1">
        {label ? (
          <LabelPrimitive.Root className="text-sm font-medium text-gray-700" htmlFor={inputId}>
            {label}
          </LabelPrimitive.Root>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "block w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100",
            className
          )}
          {...props}
        />
        {hint ? <p className="text-xs text-gray-500">{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
