// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../Layouts/AuthLayout';  // Ensure this path is correct
import DoughnutChart from './Charts/DoughnutChart';

const Home = ({ userName }) => {
  const data1 = {
    id: 1,
    label: '',
    data: [5, 6, 7],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    borderWidth: 1,
  };

  const data2 = {
    id: 2,
    label: '',
    data: [3, 2, 1],
    backgroundColor: ["#4BC0C0", "#FF9F40", "#FFCD56"],
    borderColor: ["#4BC0C0", "#FF9F40", "#FFCD56"],
    borderWidth: 1
  };

  return (
    <div>
      <h1>Home Page Here</h1>
      <DoughnutChart dataset_1={ data1 } dataset_2={ data2 } />
    </div>
  );
};

// Ensure to use the layout function correctly
Home.layout = (page) => <AuthLayout children={page} />;

export default Home;
