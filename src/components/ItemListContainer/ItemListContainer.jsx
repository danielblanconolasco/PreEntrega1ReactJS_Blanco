import React from 'react'
import { Card } from "react-bootstrap"
import "./ItemListContainer.scss"
import { Link } from 'react-router-dom'

export const ItemListContainer = ({ products }) => {
  return (  
    <div className="container"> 
      <div className="row">
        <div className="col-12 my-5">
          <h1 className='violet-dark fw-bold'>Nuestros productos</h1>
          <h3 className='violet-light'>Conoce nuestros productos y encuentra el que más te guste</h3>
        </div>
        <div className="col-12">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {products.map((product) => {
              return (
                <div className="col" key={product.id}>
                  <Card key={product.id} className="h-100">
                    <span className={product.rating < 2.5 ? `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger` : `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success`}>{product.rating}</span>
                    <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>
                    <Card.Body>
                      {product.weight ? <Card.Title>{product.title} - {product.weight} Kg</Card.Title> : <Card.Title>{product.title}</Card.Title>}
                      <Card.Subtitle>{product.brand}</Card.Subtitle>
                      {product.variation ? <Card.Text>{product.variation}</Card.Text> : <hr></hr>}
                      {product.variation ? <hr></hr> : null}
                      <Card.Text className='fw-semibold mb-0'>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</Card.Text>
                      <Card.Text className={product.stock < 10 ? `low ` : `high`} >{product.stock} en stock</Card.Text>
                      <button type="button" className="btn btn-primary btn-sm btn-violet w-100 white"><Link to={`/item/${product.id}`} className='white text-decoration-none'>Más información </Link></button>
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