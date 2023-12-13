import React , {useState} from 'react'
import { Button } from 'react-bootstrap'
import { AddItemButton } from '../AddItemButton'

export const ItemQuantitySelector = ({productId}) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddProduct = () => {
    setQuantity(quantity + 1)
  }

  const handleSubstractProduct = () => {
  if(quantity > 1) {
    setQuantity(quantity - 1)
  }}

  const handleResetQuantity = () => {
    setQuantity(1)
  }

  return (
    <div className="d-flex flex-column">
    <div className="d-flex py-2 w-20">

      <Button onClick={handleSubstractProduct} className="btn-sm btn-violet">-</Button>
      <input type="number" disabled  value={quantity} id={productId} className="form-control form-control-sm mx-2"/>
      <Button onClick={handleAddProduct} className="btn-sm btn-violet">+</Button>
    </div>
      <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
    </div>
  )
}
