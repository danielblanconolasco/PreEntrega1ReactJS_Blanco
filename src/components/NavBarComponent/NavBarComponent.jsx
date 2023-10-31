import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./NavBarComponent.scss"
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent"

function NavBarComponent() {
  return (
    <header className="container-fluid top-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="./assets/img/logo.svg" className="logo" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-collapsed-content" aria-controls="menu-collapsed-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-2" id="menu-collapsed-content">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link menu-white" href="#" id="tienda">Tienda</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle menu-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mascotas</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item drop-violet" href="#" id="perro">Perros</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item drop-violet" href="#" id="gato">Gatos</a></li>
                </ul>
              </li>
              <CartWidgetComponent/>
            </ul>
            <form className="d-flex w-auto gap-2" role="search">
              <input className="form-control" type="Buscar" placeholder="¿Qué producto estás buscando?" aria-label="Buscar" id="form-imput-search" />
              <button className="btn btn-outline-warning white" type="submit" id="search-button">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBarComponent