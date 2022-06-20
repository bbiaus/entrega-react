import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="contenedor-header"> 
        <NavBar />
      </div>
      <ItemListContainer />
    </div>
  );
}

export default App;
