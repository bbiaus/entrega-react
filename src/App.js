import "./App.css";
import CardListContainer from "./pages/Products/CardListContainer";
import Navbar from "./componentes/Navbar";
import CardDetail from "./componentes/CardDetail.js";
import { Routes, Route } from "react-router-dom";
import EmpleadosList from "./pages/About/EmpleadosList.js";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./componentes/CartContext";
import Cart from "./componentes/Cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="contenedor-header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/store" element={<CardListContainer />}></Route>
          <Route path="/about" element={<EmpleadosList />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
          <Route path="/productos/:productId" element={<CardDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
