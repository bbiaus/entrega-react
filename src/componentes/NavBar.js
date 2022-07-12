import "../stylesheets/NavBar.css";
import CartWidget from "./CartWidget.js";
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <img
          className="navbar_logo"
          src={require("../imagenes/empresa-logo.png")}
          alt="logo"
        />
      <ul>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/inicio">Inicio</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/tienda">Tienda</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about">Sobre nosotros</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contacto">Contacto</NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
