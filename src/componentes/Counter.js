import { useState } from "react";
import "../stylesheets/Counter.css";
import minus from "../imagenes/minus.png";
import plus from "../imagenes/plus.png";

function Counter({ stock, initial, product }) {
  const [num, setNum] = useState(initial);

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
    <div>
      <div className="container">
        <p className="title">{product}</p>
        
        <div className="textArea">
          <button className="button" onClick={restar}>
            <img src={minus} alt="minusclick"/>
          </button>

          <p className="amount">{num}</p>

          <button className="button" onClick={sumar}>
          <img src={plus} alt="plusclick" />
          </button>
        </div>

        
      </div>

      <button className="submit">Agregar al carrito</button>
      
    </div>
  );
}

export default Counter;
