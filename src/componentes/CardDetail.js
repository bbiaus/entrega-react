import React, { useEffect, useState } from "react";
import empresaLoading from "../imagenes/empresaLoading.png";

function CardDetail({ productId }) {
  const [info, setInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch("data.json")
          .then((resp) => resp.json())
          .then((data) => {
            const productos = data.filter((item) => item.id === productId);
            setInfo(productos[0]);
            setIsLoading(false);
          }),
      2000
    );
  }, []);

  return (
    <section className="body">
      {isLoading && (
        <img alt="logo cargando" src={empresaLoading} className="loading" />
      )}
      {info && (
        <>
          <h1 className="specificTitle">{info.producto}</h1>
          <img className="specificImg" alt={`Imagen de ${info.producto}`} src={info.img} />
          <p className="specificOldPrice">{info.precio}</p>
          <p className="specificNewPrice">{info.precio * info.descuento}</p>
          <p className="specificInfo">{info.info}</p>
        </>
      )}
    </section>
  );
}

export default CardDetail;
