import React, { useEffect, useState } from "react";
import "../stylesheets/Card.css"
import Card from "./Card";
import empresaLoading from "../imagenes/empresaLoading.png"

function Body() {
  const [info, setInfo] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch("data.json")
          .then((resp) => resp.json())
          .then((data) => {
            setInfo(data);
						setIsLoading(false);
					}),
      2000
    );
  }, []);

  return (
    <section className="body">
      <div>
        <h1>Catálogo de productos</h1>
        <p>
          Todos los productos cuentan con una garantía de un minimo de 3 meses.
        </p>
      </div>

      <div className="catalogo">
        {isLoading && <img alt="logo cargando" src={empresaLoading} className="loading"/>}
        {info && info.map((i) => <Card product={i.producto} price={i.precio} stock={i.stock} img={i.img}/>)}
      </div>
    </section>
  );
}

export default Body;
