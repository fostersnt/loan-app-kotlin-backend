// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct

const ViewUsers = ({ users }) => {
  console.log("DATA === " + users);
  
  return (
    <div>
      <h1>All Users Here</h1>
      {/* <h2 className="">{users}</h2> */}
      <table className="w-full text-left border-collapse bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Email</th>
            {/* <th className="p-3 border-b">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((user, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3 border-b">{user.name}</td>
              <td className="p-3 border-b">{user.email}</td>
              {/* <td className="p-3 border-b">{user.status}</td> */}
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

// Ensure to use the layout function correctly
ViewUsers.layout = (page) => <AuthLayout children={page} />;

export default ViewUsers;
