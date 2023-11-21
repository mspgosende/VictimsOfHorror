import { UserWidget } from "./Components/UserWidget/UserWidget";
import { NavBar } from "./components/NavBar/NavBar";
import { Cart } from "./Components/Cart/Cart";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
    <NavBar/>
    <UserWidget/>
    <Cart/>
    <ItemListContainer greeting={'Welcome to Victims of Horror'}/>
    </>    
  )
}

export default App
