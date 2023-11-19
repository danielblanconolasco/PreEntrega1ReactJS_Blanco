import "bootstrap/dist/css/bootstrap.min.css"
import MainLayout from "./layouts/MainLayout"
import { MainRouter } from "./routes/MainRouter"

function App() {
  return (
    <div>
      < MainLayout>
        < MainRouter />
      </MainLayout>
    </div>
  )
}

export default App