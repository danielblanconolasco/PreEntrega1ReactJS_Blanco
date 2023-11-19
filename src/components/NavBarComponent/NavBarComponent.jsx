import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./NavBarComponent.scss"
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent"
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'

export function NavBarComponent() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, [])

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
                {categories.map((category, index) => {
                return (
                  <li key={index}><Link to={`/category/${category}`} className="dropdown-item drop-violet">{category}</Link></li>
                );
                })}
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