import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "./FilterComponent.scss"

// Create a new context
export const FilterContext = createContext()

export const FilterComponent = ({ products, applyFilters, clearFilters }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error))
  }, [])

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setSelectedCategories([...selectedCategories, value])
    } else {
      setSelectedCategories(selectedCategories.filter(category => category !== value))
    }
  }

  const handleApplyFilters = () => {
    const filteredProducts = products.filter(product => {
      // Check if the product's category is included in the selected categories
      return selectedCategories.includes(product.category)
    })
    applyFilters(filteredProducts, minPrice, maxPrice)
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setMinPrice('')
    setMaxPrice('')
    clearFilters()
  }

  return (
    <div className="col-12 col-md-3 mb-3 rounded p-2 bg-light">
      {FilterContext}
      <FilterContext.Provider value={{ selectedCategories, minPrice, maxPrice }}>
        <div id="sidebar">
          <h5>Filtrar por:</h5>
          <h4>Categorías</h4>
          <ul id="categoria-filtro">
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                  /> {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </li>
            ))}
          </ul>
          <h5>Rango de precios:</h5>
          <input
            type="number"
            id="precio-min"
            className="form-control"
            placeholder="Precio mínimo"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
          <input
            type="number"
            id="precio-max"
            className="form-control"
            placeholder="Precio máximo"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
          <div className="d-grid gap-2">
            <button
              id="aplicar-filtros"
              className="btn btn-block btn-sm btn-violet-light"
              onClick={handleApplyFilters}
            >
              Aplicar Filtros
            </button>
            <button
              id="limpiar-filtros"
              className="btn btn-sm btn-border-light"
              onClick={handleClearFilters}
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  )
}
