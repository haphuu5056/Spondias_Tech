import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CustomButton = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "lg",
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "transition-all duration-200 flex items-center justify-center font-body";

    const variantStyles = {
      default: "bg-sky-600 text-white hover:bg-sky-700",
      outline:
        "border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white",
    };

    return (
      <Button
        className={cn(baseStyles, variantStyles[variant], className)}
        size={size}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
