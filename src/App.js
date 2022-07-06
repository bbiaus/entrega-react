import "./App.css";
import CardListContainer from "./pages/Products/CardListContainer";
import Navbar from "./componentes/Navbar";
import CardDetail from "./componentes/CardDetail.js";
import { Routes, Route } from "react-router-dom";
import EmpleadosList from "./pages/About/EmpleadosList.js";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <div className="contenedor-header">
        <Navbar />
      </div>
      <Routes>
        <Route path="/tienda" element={<CardListContainer />}></Route>
        <Route path="/about" element={<EmpleadosList />}></Route>
        <Route path="/productos/:productId" element={<CardDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
