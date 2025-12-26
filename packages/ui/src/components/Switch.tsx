import React, { forwardRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, ...props }, ref) => {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-700">
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-gray-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[state=checked]:bg-blue-600",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className="block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition data-[state=checked]:translate-x-5"
        />
      </SwitchPrimitive.Root>
      {label ? <span>{label}</span> : null}
    </label>
  );
});

Switch.displayName = "Switch";
