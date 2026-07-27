import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet /> 
        {/* Children component/pages */}
      </main>
    </div>
  );
};

export default AuthLayout;
