// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct

const ViewUsers = ({userData}) => {
  return (
    <div>
      <h1>All Users Here</h1>
      <h2 className="">{userData}</h2>
    </div>
  );
};

// Ensure to use the layout function correctly
ViewUsers.layout = (page) => <AuthLayout children={page} />;

export default ViewUsers;
