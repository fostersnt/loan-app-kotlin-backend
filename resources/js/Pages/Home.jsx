// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../Layouts/AuthLayout';  // Ensure this path is correct
import DoughnutChart from './Charts/DoughnutChart';

const Home = ({ userName }) => {
  return (
    <div>
      <h1>Home Page Here</h1>
      <DoughnutChart />
    </div>
  );
};

// Ensure to use the layout function correctly
Home.layout = (page) => <AuthLayout children={page} />;

export default Home;
