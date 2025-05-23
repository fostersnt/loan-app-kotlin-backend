import AuthLayout from "../Layouts/AuthLayout";
import '../../css/error_page.css';
import { Link } from "@inertiajs/react";

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1 className="error-title">{statusCode}</h1>
        <div className="error-message">{message}</div>
        <Link href="/" className="home-button">Go Home</Link>
      </div>
    </div>
  );
}

ErrorPage.layout = (page) => <AuthLayout children={page} />;

export default ErrorPage;
