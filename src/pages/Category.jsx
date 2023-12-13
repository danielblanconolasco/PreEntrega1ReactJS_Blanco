import React from 'react'
import { ItemListContainer, LoaderComponent } from '../components'
import { useParams } from 'react-router-dom'
import { useAllProductsByFilter } from '../components/Hooks/useProducts'

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByFilter("products", categoryId, "category");

  return (        
    loading ? (
        <LoaderComponent />
    ) : error ?  (
        <div>Hubo un error</div>
    ) : (
        < ItemListContainer products={products}/>
    )
      
)
}