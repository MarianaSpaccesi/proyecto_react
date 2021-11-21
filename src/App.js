import "./styles.css"
import NavBar from "./components/NavBar";
//import { HomeView } from "./components/ejemplos/HomeView/Homeview";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemCount } from "./components/itemCount/ItemCount";

function App() {
  return (
    <div className="titulo-main">
      <NavBar />
      <ItemListContainer greeting="La Doncella Guerrera"/>
      <ItemCount/>
    
    </div>
  );
}

export default App;
