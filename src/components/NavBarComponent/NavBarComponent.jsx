import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./NavBarComponent.scss"
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent"
import { Link } from "react-router-dom"

export function NavBarComponent() {
  return (
    <header className="container-fluid top-header">
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="/assets/img/logo.svg" className="logo" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-collapsed-content" aria-controls="menu-collapsed-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-2" id="menu-collapsed-content">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle menu-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item drop-violet" to={'/category/alimento'}>Alimento</Link></li>
                  <li><Link className="dropdown-item drop-violet" to={'/category/bienestar'}>Bienestar</Link></li>
                  <li><Link className="dropdown-item drop-violet" to={'/category/juguetes'}>Juguetes</Link></li>
                </ul>
              </li>
              <CartWidgetComponent/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}