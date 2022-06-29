import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";


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
