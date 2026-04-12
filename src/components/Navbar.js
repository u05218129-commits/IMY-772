import { NavLink } from "react-router-dom";
import navImg from "../assets/images/UP_Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div class="name">
        <div class="name-and-logo">
            <img src={navImg} alt="Nav" />
            Faculty of Natural and agricultural sciences
        </div>
        
      </div>
      <div class="links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? "active" : ""}>
          Help
        </NavLink>
        <NavLink to="/report" className={({ isActive }) => isActive ? "active" : ""}>
          Report
        </NavLink>
        <NavLink to="/export" className={({ isActive }) => isActive ? "active" : ""}>
          Export
        </NavLink>
      </div>
     
    </nav>
  );
}

export default Navbar;