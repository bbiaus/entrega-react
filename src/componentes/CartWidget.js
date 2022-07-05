import "../stylesheets/CartWidget.css";
import cartLogo from "../imagenes/cart-logo.png";

function CartWidget() {

  return (
    <div>
      <a href="./">
        <img className="cartLogo" alt="cartlogo" src={cartLogo} />
      </a>
      <p className="cartAmount"></p>
    </div>
  );
}

export default CartWidget;
