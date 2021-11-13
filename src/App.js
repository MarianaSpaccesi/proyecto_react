import "./styles.css"
import NavBar from "./components/NavBar";
//import { HomeView } from "./components/ejemplos/HomeView/Homeview";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="titulo-main">
      <NavBar />
      <ItemListContainer greeting="La Doncella Guerrera"/>

    
    </div>
  );
}

export default App;
