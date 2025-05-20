import logo from "../assets/logo.jpg"; // Import the logo image
import { NavLink } from "react-router-dom"; // Use NavLink for active styling

function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Kasa logo"
        width="210.32"
        height="68"
      />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
