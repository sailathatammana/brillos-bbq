import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <header>
      <NavLink to="/" className="home">
        <img src={logo} alt="Home" />
      </NavLink>
      <nav>
        <NavLink to="/menu">
          <h4>Menu</h4>
        </NavLink>
        <NavLink to="/contact">
          <h4>Contact</h4>
        </NavLink>
      </nav>
    </header>
  );
}
