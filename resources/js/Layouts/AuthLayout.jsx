// // resources/js/Layouts/AppLayout.jsx
import React, { useState } from 'react';
import '../../css/app.css';
import { Link, usePage } from '@inertiajs/react';

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
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
        <ul className="sidebar-list">
          <li><Link className={`sidebar-item ${isActive('/')}`} href="/">Dashboard</Link></li>
          <li><Link className="sidebar-item" href="/users">Users</Link></li>
          <li><Link className="sidebar-item" href="/users/create">Create User</Link></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

