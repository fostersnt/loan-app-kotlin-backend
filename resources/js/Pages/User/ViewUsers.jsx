// resources/js/Pages/User/CreateUser.jsx
import AuthLayout from '../../Layouts/AuthLayout';  // Ensure this path is correct
import DataTable from 'react-data-table-component';
import EditAction from '../Actions/EditAction';
import DeleteAction from '../Actions/DeleteAction';
import { useState } from 'react';
import UserCreateModal from '../Modals/UserCreateModal';
import ExcelExport from '../Exports/ExcelExport';
import UserEditModal from '../Modals/UserEditModal';

const ViewUsers = ({ users }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleShowEditModal = (user_id) => {
    console.log(`CURRENT USER === ${user_id}`);

    const result = users?.find((item) => {
      if (item.id == user_id) {
        return item
      } else {
        return null;
      }
    })
    setCurrentUser(result);
    setShowEditModal(!showEditModal);
    // console.log(`CURRENT USER === ${JSON.stringify(currentUser)}`);
  }

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
          <EditAction action={() => handleShowEditModal(row.id)} label={''} />
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
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "20px", marginBottom: "20px" }}>
        <button className={selectedRows.length < 1 ? 'isDisabled' : 'selected-rows-btn'} disabled={selectedRows.length < 1} onClick={() => console.log(`SELECTED ROWS === ${JSON.stringify(selectedRows)}`)}>
          Delete Selected Rows
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='data-export'>
          <button onClick={() => ExcelExport(users, 'users_data_excel')}>EXCEL</button>
        </div>
        <UserCreateModal usersData={users} />
        {currentUser && <UserEditModal user={currentUser} show={showEditModal} onClose={() => { setShowEditModal(false); setCurrentUser(null) }} />}
      </div>
      <DataTable
        title={<div></div>}
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
