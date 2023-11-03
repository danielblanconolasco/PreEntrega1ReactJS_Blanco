import React from 'react';
import { Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { productos } from "../../json/productos.js"

const ItemListContainer = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="products">
            {productos.map((producto) => (
                <div className="col" key={producto.id}>
                    <Card>
                    <Card.Img variant="top" src={`../../assets/img/${producto.rutaImagen}`} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>{producto.marca}</Card.Text>
                        <Card.Text>{producto.stock}</Card.Text>
                        <Card.Text>{producto.id}</Card.Text>
                        <Button variant="btn btn-primary btn-sm btn-violet">Agregar al carrito <FontAwesomeIcon icon={faCartShopping} /></Button>
                    </Card.Body>
                    </Card>
                </div>
            ))}
    </div>
    )
}

export default ItemListContainer
