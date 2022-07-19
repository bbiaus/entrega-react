import "../stylesheets/CartWidget.css";
import cartLogo from "../imagenes/cart-logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "./CartContext"


function CartWidget() {

	const { cart } = useContext(CartContext);

	const itemsCount = cart.reduce((a, b) => a + b.quantity , 0)

  return (
    <div>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/cart"
      >
        <img className="cartLogo" alt="cartlogo" src={cartLogo} />
      </NavLink>

      <p>{itemsCount}</p>
    </div>
  );
}

export default CartWidget;
