import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/Logo_NIKE.svg";

function Nav() {
  return (
    <nav className="container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/location">Location</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button onClick={() => (window.location.href = "/cart")}>
        <FaShoppingCart size={20} />
      </button>
      <button onClick={() => (window.location.href = "/dashboard")}>
        <FaUser size={20} />
      </button>
    </nav>
  );
}

export default Nav;
