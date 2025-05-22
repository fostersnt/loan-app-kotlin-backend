// resources/js/Layouts/AppLayout.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AUTH DASHBOARD</h1>
          <nav>
            <Link href="/" className="mr-4 hover:text-gray-200">
              Home
            </Link>
            <Link href="/users" className="mr-4 hover:text-gray-200">
              View Users
            </Link>
            <Link href="/users/create" className="hover:text-gray-200">
              Add User
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children} {/* This will render the page content */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} My Inertia App. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
