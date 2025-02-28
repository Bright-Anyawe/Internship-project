import React from "react";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    const baseClasses =
      "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    const baseClasses = "border-b border-gray-200 p-4";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    const baseClasses =
      "text-lg font-semibold leading-none tracking-tight";

    return (
      <h3
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = "CardTitle";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    const baseClasses = "p-4";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";
