// resources/js/Pages/User/CreateUser.jsx
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct
import DataTable from 'react-data-table-component';
import EditAction from '../Actions/EditAction';
import DeleteAction from '../Actions/DeleteAction';
import UserEditModal from '../Modals/UserEditModal';
import { useState } from 'react';

const ViewUsers = ({ users }) => {
  const [selectedRows, setSelectedRows] = useState([]);

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

  const handleSelectedRowsChange = (state) => {
    // `state.selectedRows` contains the selected data
    setSelectedRows(state.selectedRows);
    // console.log('Selected rows:', state.selectedRows);
  };


  return (
    <div>
      <UserEditModal usersData={users} />
      <button onClick={() => console.log(selectedRows)}>
        Do something with selected rows
      </button>
      <DataTable
        columns={columns}
        data={users}
        pagination
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
        highlightOnHover
      />
    </div>
  );
};

ViewUsers.layout = (page) => <AuthLayout children={page} />;

export default ViewUsers;
