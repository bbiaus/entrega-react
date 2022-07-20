import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../stylesheets/Cart.css";

function Cart() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const noProducts = !cart.length;

  let totalPrice = 0;

  return (
    <div className="cartBody">
      <h1>Tu carrito</h1>
      <div className="cartContainer">
        {noProducts && (
          <>
            <h3>Tu carrito está vacío</h3>
            <p>¿Querés revisar nuestro catálogo?</p>
            <button>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/store"
              >
                ¡Hace click acá!
              </NavLink>
            </button>
          </>
        )}
        <div>
          {cart.map(
            ({ item: { producto, img, precio, descuento, id }, quantity }) => {
              const finalProductPrice = precio * descuento * quantity;

              totalPrice += finalProductPrice;

              return (
                <div className="cartItem">
                  <img alt="product" src={img} className="itemImg" />
                  <p>{producto}</p>
                  <p>x{quantity}</p>
                  <button className="removeItem" onClick={() => removeFromCart(id)}>
                    Eliminar producto
                  </button>
                  <p>${finalProductPrice}</p>
                </div>
              );
            }
          )}
        </div>
        {!noProducts && (
          <div className="cartFooter">
            <button onClick={clearCart} className="cartReset">
              Limpiar carrito
            </button>
						<button className="confirm">Confirmar compra</button>
						<div className="totalPrice">
            <p>Suma total:</p>
            <p>${totalPrice}</p>
						</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
