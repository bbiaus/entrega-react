import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../stylesheets/Cart.css";
import Swal from "sweetalert2";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

function Cart() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

	const navigate = useNavigate()

  const noProducts = !cart.length;

  let totalPrice = 0;

  const newOrder = async (e) => {
    e.preventDefault();

    const { name, phone, email } = e.target;

    if (name.value && phone.value && email.value) {
      const total = cart.reduce((counter, product) => {
        return counter + product.item.precio * product.quantity;
      }, 0);

      const order = {
        client: { name: name.value, phone: phone.value, email: email.value },
        items: cart.map((i) => ({
          id: i.item.id,
          name: i.item.producto,
          price: i.item.precio,
        })),
        total,
        date: serverTimestamp(),
      };

      const db = getFirestore();

      const orderCollection = collection(db, "orders");

      const productsCollection = collection(db, "products");

      const newOrderRef = doc(orderCollection);

      const batch = writeBatch(db);
      /* usar para updatear el stock (fecha de compra?) */
      batch.set(newOrderRef, order);
      cart.forEach((product) => {
        const currentProductRef = doc(productsCollection, product.item.id);
        batch.update(currentProductRef, {
          stock: increment(product.quantity * -1),
        });
      });
      await batch.commit();

      Swal.fire({
        icon: "success",
        title: "Compra realizada con éxito",
        text: `Tu ID de orden para su seguimiento es: ${newOrderRef.id}`,
      });

		clearCart()
		navigate("../home")

    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Para realizar la compra se requiere información de contacto",
      });
    }
  };

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
                  <button
                    className="removeItem cartButton"
                    onClick={() => removeFromCart(id)}
                  >
                    Eliminar producto
                  </button>
                  <p>${finalProductPrice}</p>
                </div>
              );
            }
          )}
        </div>
        {!noProducts && (
          <div>
            <div className="cartFooter">
              <button onClick={clearCart} className="cartReset cartButton">
                Limpiar carrito
              </button>
              <div className="totalPrice">
                <p>Suma total:</p>
                <p>${totalPrice}</p>
              </div>
            </div>

            <form onSubmit={newOrder} className="cartForm">
              <label>*Nombre:</label>
              <input id="name" type="text" name="name" />
              <label>*Teléfono:</label>
              <input id="phone" type="text" name="phone" />
              <label>*Email:</label>
              <input id="email" type="email" name="email" />
              <input type="submit" className="confirm cartButton" value="Confirmar compra" />
            </form>
          </ div>
        )}
      </div>
    </div>
  );
}

export default Cart;
