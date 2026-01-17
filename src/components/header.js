import "../assets/header.css";
import logo from "../assets/Republic_Polytechnic_Logo.jpg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navi">
      <img src={logo} alt="rp logo" className="logo" />

      <section className="links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/diplomas"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          DIPLOMAS
        </NavLink>

        <NavLink
          to="/fav"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          FAV
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          REGISTER
        </NavLink>
      </section>
    </nav>
  );
}
