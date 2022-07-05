import { useState } from "react";
import "../stylesheets/Counter.css";
import minus from "../imagenes/minus.png";
import plus from "../imagenes/plus.png";
import Swal from "sweetalert2";

function Counter({ stock, initial, product }) {
  const [num, setNum] = useState(initial);

  const add = () => {
    if (num > 1) {
      const previousAmount = parseInt(localStorage.getItem(product) || 0);
		  const newAmount = num + previousAmount;
			const maxValue = Math.min(stock, newAmount)
      localStorage.setItem(product, maxValue);
      Swal.fire({
        icon: "success",
        title: "Se ha agregado el producto a tu carrito!",
        showConfirmButton: false,
        timer: 1500,
      });
      setNum(num * 0);
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
    </div>
  );
}

export default Counter;
