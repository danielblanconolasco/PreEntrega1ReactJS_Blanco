import React from 'react'
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./ItemListContainer.scss"
import {FilterComponent} from '../FilterComponent'
import { Link } from 'react-router-dom'

export const ItemListContainer = ({ products }) => {

  return (
    <div className="container">
      <div className="row">
      <FilterComponent products={products}/>
        <div className="col-12 col-md-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {products.map((product) => {
              return (
                <div className="col" key={product.id}>
                  <Card key={product.id} className="h-100">
                    <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.brand}</Card.Text>
                      <Card.Text>{product.price}</Card.Text>
                      <button type="button" className="btn btn-primary btn-sm btn-violet">Agregar al carrito <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}