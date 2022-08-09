import "./App.css";
import CardListContainer from "./pages/Products/CardListContainer";
import Navbar from "./componentes/Navbar";
import CardDetail from "./componentes/CardDetail.js";
import { Routes, Route } from "react-router-dom";
import EmpleadosList from "./pages/About/EmpleadosList.js";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./componentes/CartContext";
import Cart from "./componentes/Cart";
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Footer from "./componentes/Footer";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="contenedor-header">
          <Navbar />
        </div>
        <Routes>
					<Route path="/home" element={<Home />}></Route>
          <Route path="/store" element={<CardListContainer />}></Route>
          <Route path="/about" element={<EmpleadosList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
          <Route path="/productos/:productId" element={<CardDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
			<Footer />
    </CartProvider>
  );
}

export default App;
