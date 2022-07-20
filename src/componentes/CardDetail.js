import React, { useContext, useEffect, useState } from "react";
import empresaLoading from "../imagenes/empresaLoading.png";
import "../stylesheets/CardDetail.css";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import { CartContext } from "./CartContext";
import { collection, doc, getDoc, getFirestore} from "firebase/firestore";

function CardDetail() {
  const [info, setInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const onAdd = (quantity) => {
    addToCart(info, quantity);
  };

  const { addToCart } = useContext(CartContext);

	useEffect(() => {
		const db = getFirestore();

		setIsLoading(true);

		let productRef = doc(collection(db, "products"), params.productId)
	
		getDoc(productRef).then((snapshot) =>{
				setInfo(snapshot.data())
				setIsLoading(false);
		})
	}, [params.productId])

  return (
    <section className="body">
      {isLoading && (
        <img alt="logo cargando" src={empresaLoading} className="loading" />
      )}
      {info && !isLoading && (
        <>
          <h1 className="specificTitle">{info.producto}</h1>
          <img
            className="specificImg"
            alt={`Imagen de ${info.producto}`}
            src={info.img}
          />
          <p className="specificOldPrice">${info.precio}</p>
          <p className="specificNewPrice">${info.precio * info.descuento}</p>
          <Counter
            stock={info.stock}
            initial={0}
            product={info.producto}
            onAdd={onAdd}
          />
          <p className="specificInfo">{info.info}</p>
        </>
      )}
    </section>
  );
}

export default CardDetail;
