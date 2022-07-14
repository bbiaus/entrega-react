import React, { useEffect, useState } from "react";
import "../stylesheets/Card.css";
import Card from "./Card";
import empresaLoading from "../imagenes/empresaLoading.png";
import CardFilter from "./CardFilter";
/* import { getFirestore, collection, getDocs } from "firebase/firestore" */


function CardList() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

	const [category, setCategory] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch("data.json")
          .then((resp) => resp.json())
          .then((data) => {
            setProducts(data);
            setIsLoading(false);
          }),
      2000
    );
  }, []);

	/* useEffect(() => {
		const db = getFirestore();

		const productsRef = collection(db, "products")

		getDocs(productsRef).then((snapshot) =>{
				setProducts(snapshot.docs.map((doc) => doc.data))
		})
	}, [])
 */
	const categoryProducts = category ? products.filter(item => item.categoria === category) : products;

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
        {categoryProducts && categoryProducts.map((i) => <Card myProduct={i} key={i.id} />)}
      </div>
    </section>
  );
}

export default CardList;
