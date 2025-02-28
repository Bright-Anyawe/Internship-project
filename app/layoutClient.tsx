
"use client";

import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr]">
        {}
        <div className="hidden lg:block border-r">
          <Sidebar />
        </div>

        {}
        <main className="p-6 bg-white">{children}</main>
      </div>

      {}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          {}
          <div className="relative w-60 bg-white border-r shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
