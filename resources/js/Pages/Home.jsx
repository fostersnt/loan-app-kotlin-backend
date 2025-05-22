// In a page component like Dashboard.jsx
import AppLayout from '@/Layouts/AppLayout';

const Home = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

Home.layout = (page) => <AppLayout children={page} />;

export default Home;
