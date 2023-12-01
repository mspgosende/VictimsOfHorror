import { CartWidget } from "./Components/CartWidget/CartWidget";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Welcome to Victims of Horror'}/>
    </>    
  )
}

export default App
