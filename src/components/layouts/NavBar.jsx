import { NavLink, Link } from "react-router-dom";
import { Moon, Sun, Plus } from "lucide-react";
import { useAuth } from "../../providers/AuthProvider";
import { LogOut } from "lucide-react";
import Button from "../Button";
const NavBar = () => {
  const { session, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
      <Link
        to="/"
        className="font-bold text-xl text-indigo-600 dark:text-indigo-400"
      >
        EventApp
      </Link>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 dark:text-indigo-400 font-medium"
              : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 dark:text-indigo-400 font-medium"
              : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Events
        </NavLink>

        {isAuthenticated && (
          <Link
            to="/events/new"
            className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
          >
            <Plus size={16} />
            New Event
          </Link>
        )}

        {isAuthenticated ? (
          <>
            <span className="text-gray-600 dark:text-gray-300">
              Welcome {session?.name.split(" ")[0]}!
            </span>
            <Button
              onClick={logout}
              className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-1 border border-indigo-600 text-indigo-600 hover:text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
