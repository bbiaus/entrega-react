import React, { useEffect, useState } from "react";
import "../stylesheets/Card.css";
import Card from "./Card";
import empresaLoading from "../imagenes/empresaLoading.png";
import CardFilter from "./CardFilter";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


function CardList() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

	const [category, setCategory] = useState(null);

	useEffect(() => {
		const db = getFirestore();

		setIsLoading(true);

		let productsRef = collection(db, "products")

		if (category && category !== "Todo"){
			productsRef = query(productsRef, where("categoria", "==", category))
		}

		getDocs(productsRef).then((snapshot) =>{
				setProducts(snapshot.docs.map((doc) => doc.data()))
				setIsLoading(false);
		})
	}, [category])


  return (
    <section className="body">
      <div>
        <h1>Catálogo de productos</h1>
        <p>
          Todos los productos cuentan con una garantía de un minimo de 3 meses.
        </p>
      </div>
			<CardFilter handleCategoryChange={setCategory} />
      <div className="catalogo">
        {isLoading && (
          <img alt="logo cargando" src={empresaLoading} className="loading" />
        )}
        {products && !isLoading && products.map((i) => <Card myProduct={i} key={i.id} />)}
      </div>
    </section>
  );
}

export default CardList;
