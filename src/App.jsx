import "bootstrap/dist/css/bootstrap.min.css"
import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="Bienvenidos a Michigan"/>
    </div>

  )
}

export default App
