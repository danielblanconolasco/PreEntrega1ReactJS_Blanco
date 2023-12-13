import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore'
import { query, where } from 'firebase/firestore'

// Obtenemos todos los productos
export const useAllProducts = (collectionName) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect (() => {
    //Inicializar Firebase
    const db = getFirestore()

    //Obtener la coleccion de productos
    const productsCollection = collection(db, collectionName)

    //Obtener todos los productos
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id,  ...doc.data() })))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, []);

  return { products, loading, error }
}

//Obtener un unico producto
export const useSingleProduct = (collectionName, id) => {
  const [product, setProduct] = useState({})

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    // Inicializar Firebase
    const db = getFirestore()

    // Obtener el producto
    const singleProduct = doc(db, collectionName, id)
    getDoc(singleProduct)
    .then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() })
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false))
  }, [])

  return { product, loading, error }
}

//Obtener productos por categoria
export const useAllProductsByFilter = (collectionName, categoryId, fieldToFilter) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect (() => {
    //Inicializar Firebase
    const db = getFirestore()

    //Obtener la coleccion de productos
    const collectionRef  = collection(db, collectionName)

    //Obtener los productos por categoria
    const categoryQuery = query(collectionRef, where (fieldToFilter , "==", categoryId))

    //Obtener todos los productos
    getDocs(categoryQuery)
    .then((res) => {
      const data = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data)
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false))

}, [categoryId])

  return { products, loading, error }

}