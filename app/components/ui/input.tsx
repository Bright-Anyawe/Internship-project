
import React from "react";


export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses =
      "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 " +
      "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 " +
      "disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <input
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
