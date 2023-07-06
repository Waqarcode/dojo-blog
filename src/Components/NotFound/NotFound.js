import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="error-heading">404 Error</h1>
            <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="error-link">Go back to the homepage</Link>
        </div>
    );
}

export default NotFound;