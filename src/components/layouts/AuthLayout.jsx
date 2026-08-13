import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ArrowLeftFromLineIcon } from "lucide-react";
const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header with back button */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeftFromLineIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="text-sm text-gray-500">
          <span className="hidden sm:inline">Welcome back</span>
        </div>
      </header>

      {/* Main content - centered vertically and horizontally */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;
