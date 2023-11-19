import { useState, useEffect } from 'react'
import { getAllProducts, getSingleProduct } from '../../services'

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllProducts(30)
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(true)) 
      .finally(() => setLoading(false))
  }, []);

  return { products, loading, error }
}


export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { product, loading, error }
}