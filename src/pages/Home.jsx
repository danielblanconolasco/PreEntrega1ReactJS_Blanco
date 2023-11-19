import React from 'react'
import {ItemListContainer, useAllProducts, LoaderComponent} from "../components"

export const Home = () => {
    const { products , loading , error } = useAllProducts (5)
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