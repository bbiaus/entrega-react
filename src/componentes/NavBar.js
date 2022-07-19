import "../stylesheets/NavBar.css";
import CartWidget from "./CartWidget.js";
import { NavLink } from 'react-router-dom'
import { CartContext } from "./CartContext";
import { useContext } from "react";
import CardDetail from "./CardDetail";

function Navbar() {

	const { cart } = useContext(CartContext);

	const hasProducts = !!cart.length;
	
  return (
    <nav className="navbar">
        <img
          className="navbar_logo"
          src={require("../imagenes/empresa-logo.png")}
          alt="logo"
        />
      <ul>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/home">Inicio</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/store">Tienda</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about">Sobre nosotros</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">Contacto</NavLink>
        </li>
      </ul>
      {hasProducts && <CartWidget />}
    </nav>
  );
}

export default Navbar;
