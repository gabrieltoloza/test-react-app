import React, { useState } from 'react'

function ItemCounter({cantidad, sumar, restar, agregarCarrito}) {

    return (

                <div>
                    <div className='item-count'>
                        <button onClick={restar}>-</button>
                        <p>{cantidad}</p>
                        <button onClick={sumar}>+</button>
                    </div>
                    <button onClick={agregarCarrito} className='agregar-al-carrito'>Agregar</button>
                </div>
        
    )
}

export default ItemCounter