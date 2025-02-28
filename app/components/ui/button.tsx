import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-4 py-2 text-sm font-medium
        text-white bg-blue-600 hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        disabled:opacity-50 disabled:pointer-events-none
        rounded-md transition-colors
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
