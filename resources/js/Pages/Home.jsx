// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../Layouts/AuthLayout';  // Ensure this path is correct

const Home = ({ userName }) => {
  return (
    <div>
      <h1>Home Page Here</h1>
    </div>
  );
};

// Ensure to use the layout function correctly
Home.layout = (page) => <AuthLayout children={page} />;

export default Home;
