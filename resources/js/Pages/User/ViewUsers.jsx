// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct
import { Link } from '@inertiajs/react';
import DataTable from 'react-data-table-component';

const ViewUsers = ({ users }) => {
  console.log("DATA === " + users);

  const columns = [
  {
    name: 'Name',
    selector: row => row.name != null ? row.name : 'N/A',
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email != null ? row.email : 'N/A',
    sortable: true,
  },
  {
    name: 'Msisdn',
    selector: row => row.msisdn != null ? row.msisdn : 'N/A',
    sortable: true,
  },
];

  
  return (
    <div>
      <h1>All Users Here</h1>
      {/* <h2 className="">{users}</h2> */}
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link href="/users/create" style={{backgroundColor: '#3498db', color: 'white', fontWeight: 'bold', width: '100px', padding: '10px', border: '0px', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>Add
        </Link>
      </div>
      <DataTable
        title="User List"
        columns={columns}
        data={users}
        pagination
        selectableRows
        highlightOnHover
      />
    </div>
  );
};

ViewUsers.layout = (page) => <AuthLayout children={page} />;

export default ViewUsers;
