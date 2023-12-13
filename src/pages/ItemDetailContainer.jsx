import React from 'react'
import { useParams } from 'react-router-dom'
import { LoaderComponent, useSingleProduct, ItemQuantitySelector } from '../components'

export const ItemDetailContainer = () => {
  const { productId } = useParams()

  const { product, loading, error } = useSingleProduct('products', productId)
  

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
            <h3 className='bold'>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</h3>
            <p>{product.description}</p>
            <ItemQuantitySelector productId={productId}/>
          </div>
        </div>
      </div>
    )
  )
}
