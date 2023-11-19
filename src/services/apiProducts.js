import axios from "axios"

export function getAllProducts(limit = 5) {
  return axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export function getSingleProduct(id) {
  return axios.get(`https://dummyjson.com/products/${id}`)
}