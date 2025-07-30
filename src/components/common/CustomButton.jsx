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
      "transition-all duration-200 flex items-center justify-center font-body text-lg  px-8 py-4 rounded-full ";

    const variantStyles = {
      default: " bg-gray-900 text-white hover:bg-gray-800",
      outline:
        "border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white",
      solidPrimary: "bg-[#319BCB] hover:bg-[#2a87b5] text-white text-lg font-medium rounded-full shadow hover:shadow transition-all duration-300 group",
      outlinePrimary:
        "border-2 border-gray-800 hover:border-[#319bcb] hover:text-primary  hover:bg-gray-50 font-semibold rounded-full bg-transparent text-black shadow",
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
