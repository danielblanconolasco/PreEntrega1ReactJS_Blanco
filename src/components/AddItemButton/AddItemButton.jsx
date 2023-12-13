import React, { useContext } from 'react'
import { CartContext } from '../../Context'

export const AddItemButton = ({label=`Agregar al carrito`, quantity, handleResetQuantity}) => {
    const { itemCount, setItemCount } = useContext(CartContext)

    const handleAddItem = () => {
        setItemCount(itemCount + quantity)
        handleResetQuantity()
    }

    return (
        <button onClick={ handleAddItem } type="button" className="btn btn-primary btn-sm btn-violet">
            {label} 
        </button>
    )
}
