import React from 'react'
import './NavbarNuevo.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'






function NavbarNuevo() {
    return (
    <div>
        <nav id='navbar'>
            <ul className='navbar-items flexbox-col'>
                <li className='navbar-logo flexbox-left'>
                    <Link to="/" className='navbar-item-inner flexbox'>
                        Logo
                    </Link>                                      
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                            {/* <ion-icon name="search-outline"></ion-icon> */}
                            <ion-icon name="home-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Home</span>
                    </Link>                                      
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/productos" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                            <ion-icon name="grid-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Productos</span>
                    </Link>                                      
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/productos/aceites" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                             <ion-icon name="water-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Aceites</span>
                    </Link>                                      
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/productos/semillas" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                             <ion-icon name="leaf-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Semillas</span>
                    </Link>                                      
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/productos/cremas" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                            <ion-icon name="rose-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Cremas</span>
                    </Link>                                      
                </li> 
                <li className='navbar-item flexbox-left' id='cantidad-carrito'>
                    <CartWidget/>
                </li>
                <li className='navbar-item flexbox-left'>
                    <Link to="/checkout" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                            <ion-icon name="wallet-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Checkout</span>
                    </Link>                                      
                </li> 
                <li className='navbar-item flexbox-left'>
                    <Link to="/contacto" className='navbar-item-inner flexbox-left'>
                        <div className='navbar-item-inner-icon-wrapper flexbox'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        </div>
                        <span className='link-text'>Contacto</span>
                    </Link>                                      
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavbarNuevo