// // resources/js/Layouts/AppLayout.jsx
import React, { useState } from 'react';
import '../../css/app.css';
import { Link, usePage } from '@inertiajs/react';
import ErrorBoundary from '../Pages/ErrorBoundary';

const AuthLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = usePage();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href) => {
    return url === href ? 'active' : '';
  };

  return (
    <div className={`layout-container`}>
      <ErrorBoundary>
        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? 'Close' : 'Open'} Sidebar
          </button>
          <ul className="sidebar-list">
            <li><Link className={`sidebar-item ${isActive('/dashboard')}`} href="/dashboard">Dashboard</Link></li>
            <li><Link className={`sidebar-item ${isActive('/dashboard/users')}`} href="/dashboard/users">Users</Link></li>
            <li><Link className={`sidebar-item ${isActive('/dashboard/users/create')}`} href="/dashboard/users/create">Create User</Link></li>
            <li><Link className={`sidebar-item ${isActive('/dashboard/logout')}`} href="/dashboard/users/create">Logout</Link></li>
          </ul>
        </div>

        {/* Main content area */}
        <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
          {children}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;

