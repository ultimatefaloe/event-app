import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          🎉 EventApp
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link
                to="/"
                className="hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                My Events
              </Link>
              <Link
                to="/events/new"
                className="bg-white text-indigo-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-indigo-50 transition-colors"
              >
                + New Event
              </Link>
              <span className="text-sm text-indigo-100 hidden sm:inline">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-indigo-800 hover:bg-indigo-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-indigo-50 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
