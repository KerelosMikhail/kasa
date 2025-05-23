import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page__code">404</div>
      <div className="error-page__message">
        Oops! The page you’re looking for doesn’t exist.
      </div>
      <Link to="/" className="error-page__link">
        Return to home page
      </Link>
    </div>
  );
}

export default ErrorPage;
