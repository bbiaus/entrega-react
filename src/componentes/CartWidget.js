import React from "react";
import "../stylesheets/CartWidget.css";

function CartWidget() {
  return (
    <a href="./">
      <img
        className="cartLogo"
        alt="cartlogo"
        src={require("../imagenes/cart-logo.png")}
      />
    </a>
  );
}

export default CartWidget;
