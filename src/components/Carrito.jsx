import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Carrito() {

    const {carrito, cantidadTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {
            carrito.map(producto =>{
                return (
                    <div key={producto.id}>
                        <h3> {producto.marca} </h3>
                        <p>Precio x1: ${producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                        <br />
                    </div>
                )
            })
        }
        {
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${cantidadTotal()}</h2>
                <br />
                <button className='agregar-al-carrito' onClick={handleVaciar}>Vaciar Carrito</button>
                <Link to='/checkout' className='agregar-al-carrito'>Finalizar Compra</Link>
            </> 
            :  <h2>El carrito esta vacio <ion-icon name="sad-outline"></ion-icon></h2>
            
        }
    </div>
  )
}

export default Carrito