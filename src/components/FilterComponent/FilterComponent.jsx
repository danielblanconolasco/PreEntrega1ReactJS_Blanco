import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "./FilterComponent.scss"

export const FilterComponent = ({ products }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="col-12 col-md-3 mb-3 rounded p-2 bg-light">
      <div id="sidebar">
        <h5>Filtrar por:</h5>
        <h4>Categorías</h4>
        <ul id="categoria-filtro">
          {categories.map((category) => (
            <li key={category}>
              <label>
                <input type="checkbox" value={category} /> {category}
              </label>
            </li>
          ))}
        </ul>
        <h5>Rango de precios:</h5>
        <input type="number" id="precio-min" className="form-control" placeholder="Precio mínimo"></input>
        <input type="number" id="precio-max" className="form-control" placeholder="Precio máximo"></input>
        <div className="d-grid gap-2">
          <button id="aplicar-filtros" className="btn btn-block btn-sm btn-violet-light">
            Aplicar Filtros
          </button>
          <button id="limpiar-filtros" className="btn btn-sm btn-border-light">
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  )
}
