import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


function CartWidget() {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
        
            <Link to="/carrito"  className='navbar-item-inner flexbox-left'>
                <div className='navbar-item-inner-icon-wrapper flexbox'>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
                <span className='link-text span-cantidad'>Carrito</span>
                <span className='link-text span-cantidad'> {cantidadEnCarrito()} </span>
            </Link>
        
    )
}

export default CartWidget