import "bootstrap/dist/css/bootstrap.min.css"
import MainLayout from "./layouts/MainLayout"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
      < MainLayout>
      < ItemListContainer greeting="Bienvenidos a Michigan"/>
      </MainLayout>
  )
}

export default App
