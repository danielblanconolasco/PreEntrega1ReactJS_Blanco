import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const CartWidgetComponent = () => {
    return (
        <li className="nav-item">
            <a className="nav-link menu-white" aria-disabled="true" href="#" id="cartUpdate"><FontAwesomeIcon icon={faCartShopping} /><span> 13</span></a>
        </li>
    )
}

export default CartWidgetComponent