import "../stylesheets/Card.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <h4 className="cardTitle">{props.product}</h4>
      <img className="productImage" alt="imagen de producto" src={props.img} />
      <div className="cardFooter">
        <p className="cardPrice">${props.price}</p>
        <button className="button">Ver detalle del producto</button>
        <p className="cardStock">Stock: {props.stock}</p>
      </div>
    </div>
  );
}

export default Card;
