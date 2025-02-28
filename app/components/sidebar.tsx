"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, Award, FileText } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: BarChart2,
    },
    {
      name: "Skill Test",
      href: "/skillTest",
      icon: Award,
    },
    {
      name: "Internship",
      href: "/internship",
      icon: FileText,
    },
  ];

  return (
    <div className="w-60 bg-white flex-shrink-0 border-gray-200">
      <div className="flex flex-col h-full">
        <nav className="space-y-2 p-0">
          {links.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;

            const linkClasses = isActive
              ? "text-blue-600 bg-blue-50 rounded-e-full"
              : "text-gray-700 hover:bg-gray-100 rounded-md";

            const iconColor = isActive ? "text-blue-600" : "text-gray-700";

            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 ${linkClasses}`}
              >
                <Icon size={20} className={iconColor} />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
