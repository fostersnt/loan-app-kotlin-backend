// resources/js/Pages/User/CreateUser.jsx
import React, { useState } from 'react';
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct
import { Link } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import EditAction from '../Actions/EditAction';
import DeleteAction from '../Actions/DeleteAction';
import UserEditModal from '../Modals/GeneralModal';
import GeneralModal from '../Modals/GeneralModal';
import UserForm from './UserForm';

const ViewUsers = ({ users }) => {
  const [showModal, setShowModal] = useState(false);

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
      name: <h2 style={{ width: '100px', display: "flex", justifyContent: "space-around" }}>Action</h2>,
      selector: row => row.id != null ?
        <div style={{ width: '100px', display: "flex", justifyContent: "space-around" }}>
          <EditAction onEdit={{}} label={''} />
          <DeleteAction onEdit={{}} label={''} />
        </div> :
        <h3>N/A</h3>,
      sortable: true,
    },
  ];


  return (
    <div>
      {/* <h1>All Users Here</h1> */}
      {/* <h2 className="">{users}</h2> */}
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => setShowModal(true)} style={{ backgroundColor: '#34495e', color: 'white', fontWeight: 'bold', width: '100px', padding: '10px', border: '0px', cursor:'pointer' }}>Add
        </button>
      </div> */}
      <DataTable
        title={<div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Users List</h3>
        <button onClick={() => setShowModal(true)} style={{ backgroundColor: '#34495e', color: 'white', fontWeight: 'bold', width: '100px', padding: '10px', border: '0px', cursor:'pointer' }}>Add
        </button>
      </div>}
        columns={columns}
        data={users}
        pagination
        selectableRows
        highlightOnHover
      />
      <GeneralModal show={showModal} onClose={() => setShowModal(false)} title={'Edit User'}>
        <UserForm onSubmit={{}}/>
      </GeneralModal>
    </div>
  );
};

ViewUsers.layout = (page) => <AuthLayout children={page} />;

export default ViewUsers;
