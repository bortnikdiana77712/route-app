import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div className="links">
        <Link to="/" className="back-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
