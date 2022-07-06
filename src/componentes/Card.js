import "../stylesheets/Card.css";
import Counter from "./Counter";
import { Link } from 'react-router-dom'

function Card({ myProduct }) {
  return (
    <div className="cardCounter">
      <div className="cardContainer">
        <h4 className="cardTitle">{myProduct.producto}</h4>
        <img
          className="productImage"
          alt="imagen de producto"
          src={myProduct.img}
        />
        <div className="cardFooter">
          <p className="cardPrice">${myProduct.precio}</p>
          <Link to={`/productos/${myProduct.id}`} ><button className="btnDetails">Ver detalle del producto</button></Link>
          <p className="cardStock">Stock: {myProduct.stock}</p>
        </div>
      </div>
			<Counter stock={myProduct.stock} initial={0} product={myProduct.producto}/>
    </div>
  );
}

export default Card;
