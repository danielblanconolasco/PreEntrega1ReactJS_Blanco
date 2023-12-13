import "bootstrap/dist/css/bootstrap.min.css"
import MainLayout from "./layouts/MainLayout"
import { MainRouter } from "./routes/MainRouter"
import { CartProvider } from './Context/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      < MainLayout>
        < MainRouter />
      </MainLayout>
    </CartProvider>
  )
}

export default App