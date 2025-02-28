import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="border-b border-gray-200 px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleSidebar}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black cursor-pointer"
            onClick={toggleSidebar}
          >
            <rect x="4" y="4" width="4" height="16" fill="black" />
            <rect x="10" y="4" width="4" height="16" fill="black" />
            <rect x="16" y="4" width="4" height="16" fill="black" />
          </svg>

          <span className="text-xl font-bold text-gray-900">WhatBytes</span>
        </div>

        <div className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-200 rounded-xl shadow-sm">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/asset/Anyawe Img.jpg" alt="Profile Picture" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <p className="text-sm font-semibold text-gray-800">Anyawe Bright</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
