import "./App.css";
import CardListContainer from "./componentes/CardListContainer";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      <div className="contenedor-header"> 
        <Navbar />
      </div>
      <CardListContainer />
    </div>
  );
}

export default App;
