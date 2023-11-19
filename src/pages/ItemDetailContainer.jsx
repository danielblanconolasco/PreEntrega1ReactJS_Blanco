import React from 'react'
import { useParams } from 'react-router-dom'
import { LoaderComponent, useSingleProduct } from '../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct(productId);
  

  return (
    loading ? (
      <LoaderComponent />
    ) : error ? (
      <div>Hubo un error</div>
    ) : (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <img className="rounded w-100" src={product.thumbnail} />
          </div>
          <div className='col-12 col-sm-6'>
            <h2>{product.title}</h2>
            <h4>{product.brand}</h4>
            <p>{product.description}</p>
            <p className='bold'>{product.price}</p>
            <button type="button" className="btn btn-primary btn-sm btn-violet">Agregar al carrito <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
          </div>
        </div>
      </div>
    )
  )
}
