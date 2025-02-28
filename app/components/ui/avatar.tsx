import React from "react";
import Image from "next/image";
import { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

export function Avatar({ children, className = "", ...props }: AvatarProps) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function AvatarImage({ src, alt = "", className = "", ...props }: AvatarImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      {...props}
      layout="fill"
    />
  );
}

interface AvatarFallbackProps {
  children: ReactNode;
  className?: string;
}

export function AvatarFallback({ children, className = "", ...props }: AvatarFallbackProps) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gray-300 text-gray-700 text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
