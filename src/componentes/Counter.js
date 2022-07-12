import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Counter.css";
import minus from "../imagenes/minus.png";
import plus from "../imagenes/plus.png";
import Swal from "sweetalert2";

function Counter({ stock, initial, product, onAdd }) {
  const [num, setNum] = useState(initial);

  const [productAdded, setProductAdded] = useState(false);

  const add = () => {
    if (num > 0) {
      const previousAmount = parseInt(localStorage.getItem(product) || 0);
      const newAmount = num + previousAmount;
      const maxValue = Math.min(stock, newAmount);
      localStorage.setItem(product, maxValue);
      Swal.fire({
        icon: "success",
        title: "Se ha agregado el producto a tu carrito!",
        showConfirmButton: false,
        timer: 1500,
      });
      onAdd(num);
      setNum(0);
      setTimeout(() => {
        setProductAdded(true);
      }, 1000);
    }
  };

  const sumar = () => {
    if (num < stock) {
      setNum(num + 1);
    }
  };

  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div className="counter">
      {productAdded ? (
        <button className="submit">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/cart"
          >
            Ir al carrito
          </NavLink>
        </button>
      ) : (
        <>
          <div className="container">
            <div className="textArea">
              <button className="button" onClick={restar}>
                <img src={minus} alt="minusclick" />
              </button>

              <p className="amount">{num}</p>

              <button className="button" onClick={sumar}>
                <img src={plus} alt="plusclick" />
              </button>
            </div>
          </div>

          <button className="submit" onClick={add}>
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Counter;
