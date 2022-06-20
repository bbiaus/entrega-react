import React from "react";
import "../stylesheets/NavBar.css";
import CartWidget from "../componentes/CartWidget.js";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="./">
        <img
          className="navbar_logo"
          src={require("../imagenes/empresa-logo.png")}
          alt="logo"
        />
      </a>
      <ul>
        <li>
          <a href="./inicio">Inicio</a>
        </li>
        <li>
          <a href="./tienda">Tienda</a>
        </li>
        <li>
          <a href="./about">Sobre nosotros</a>
        </li>
        <li>
          <a href="./contacto">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
