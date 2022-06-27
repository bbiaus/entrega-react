import React from "react";
import "../stylesheets/CartWidget.css";
import cartLogo from "../imagenes/cart-logo.png"

function CartWidget() {
  return (
    <a href="./">
      <img
        className="cartLogo"
        alt="cartlogo"
        src={cartLogo}
      />
    </a>
  );
}

export default CartWidget;
