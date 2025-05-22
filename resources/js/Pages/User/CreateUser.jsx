// In a page component like Dashboard.jsx
import AppLayout from '../../Layouts/AppLayout';

const CreateUser = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

CreateUser.layout = (page) => <AppLayout children={page} />;

export default CreateUser;
