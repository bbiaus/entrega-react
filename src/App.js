import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="contenedor-header"> 
        <Navbar />
      </div>
      <ItemListContainer />
    </div>
  );
}

export default App;
