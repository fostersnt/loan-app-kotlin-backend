// resources/js/Pages/User/CreateUser.jsx
import React from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct
import { Link } from '@inertiajs/react';
import DataTable from 'react-data-table-component';

const ViewUsers = ({ users }) => {
  console.log("DATA === " + users);

  const columns = [
  {
    name: <h2>Name</h2>,
    selector: row => row.name != null ? <h3>{row.name}</h3> : <h3>N/A</h3>,
    sortable: true,
  },
  {
    name: <h2>Email</h2>,
    selector: row => row.email != null ? <h3>{row.email}</h3> : <h3>N/A</h3>,
    sortable: true,
  },
  {
    name: <h2>Msisdn</h2>,
    selector: row => row.msisdn != null ? <h3>{row.msisdn}</h3> : <h3>N/A</h3>,
    sortable: true,
  },
  {
    name: <h2>Action</h2>,
    selector: row => row.id != null ? (<Link>EDIT {row.id}</Link>) : <h3>N/A</h3>,
    sortable: true,
  },
];


  return (
    <div>
      <h1>All Users Here</h1>
      {/* <h2 className="">{users}</h2> */}
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link href="/dashboard/users/create" style={{backgroundColor: '#3498db', color: 'white', fontWeight: 'bold', width: '100px', padding: '10px', border: '0px', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>Add
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
