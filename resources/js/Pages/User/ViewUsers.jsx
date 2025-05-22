// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct

const CreateUser = () => {
  return (
    <div>
      <h1>All Users Here</h1>
    </div>
  );
};

// Ensure to use the layout function correctly
CreateUser.layout = (page) => <AuthLayout children={page} />;

export default CreateUser;
