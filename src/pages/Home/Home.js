import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <h1>Bienvenid@ a Phoenix Solutions</h1>
      <h2>Contamos con la mayor variedad de productos de Argentina</h2>
      <h2 className="homeDescription">
        y ademas ofrecemos un servicio técnico impecable, para que no tengas que
        desechar nada.
      </h2>
      <p>
        Nuestros técnicos cuentan con años de experiencia en el área de la
        tecnología. No solo reparan casi cualquier cosa, sino que además van a
        saber recomendarte el cuidado necesario para que tus productos duren más
        de lo que te podes imaginar.
      </p>
      <NavLink to="../contact" className="redirect">
        Quiero saber si algo tiene reparación
      </NavLink>
      <div className="imgContainer">
        <img alt="imagen de reparacion" src="./images/repair1.jpg" />
        <img alt="imagen de reparacion" src="./images/repair2.jpg" />
        <img alt="imagen de reparacion" src="./images/repair3.jpg" />
        <img alt="imagen de reparacion" src="./images/repair4.jpg" />
      </div>
      <h3 className="homeDescription">¿Y si mi producto no tiene salvación?</h3>
      <p>
        No te preocupes! Además contamos con un staff que te va a poder ayudar a
        encontrar lo que sea que necesites, inclusive un reemplazo para esa
        vieja computadora, o esos auriculares a los que hay que moverles el
        cablecito.
      </p>
      <NavLink to="../store" className="redirect">
        Quiero chusmear la tienda
      </NavLink>
    </div>
  );
}

export default Home;
