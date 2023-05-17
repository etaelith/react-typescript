import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header>
      <DarkMode />
      {location.pathname === "/user/login" ? (
        <Link to="/" className="btn">
          Home
        </Link>
      ) : (
        <Link to="user/login" className="btn">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
