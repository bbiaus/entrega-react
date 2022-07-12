import React, { useEffect, useState } from "react";
import empresaLoading from "../imagenes/empresaLoading.png";
import "../stylesheets/CardDetail.css";
import { useParams } from "react-router-dom";
import Counter from "./Counter";

function CardDetail() {
  const [info, setInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

	const onAdd = (quantity) => {
		console.log(`Cantidad agregada de ${info.producto}: ${quantity}`)
	} 

	const BASE_URL = "http://localhost:3000/"

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch("../data.json")
          .then((resp) => resp.json())
          .then((data) => {
            const productos = data.filter(
              (item) => item.id == params.productId
            );
            setInfo(productos[0]);
            setIsLoading(false);
          }),
      2000
    );
  }, [params.productId]);

  return (
    <section className="body">
      {isLoading && (
        <img alt="logo cargando" src={empresaLoading} className="loading" />
      )}
      {info && (
        <>
          <h1 className="specificTitle">{info.producto}</h1>
          <img
            className="specificImg"
            alt={`Imagen de ${info.producto}`}
            src={`${BASE_URL}${info.img}`}
          />
          <p className="specificOldPrice">${info.precio}</p>
          <p className="specificNewPrice">${info.precio * info.descuento}</p>
					<Counter stock={info.stock} initial={0} product={info.producto} onAdd={onAdd} />
          <p className="specificInfo">{info.info}</p>
        </>
      )}
    </section>
  );
}

export default CardDetail;
