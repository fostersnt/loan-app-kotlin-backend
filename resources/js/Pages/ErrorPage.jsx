import AuthLayout from "../Layouts/AuthLayout";

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <div>{message}</div>
    </div>
  )
}

ErrorPage.layout = (page) => <AuthLayout children={page} />;

export default ErrorPage;