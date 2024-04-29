import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

function Checkout() {

    const [pedidoID, setPedido] = useState("")

    const {carrito, cantidadTotal, vaciarCarrito} = useContext(CartContext)

    const {register, handleSubmit } = useForm()

    const comprar = (datos) => {
        const pedido = {
            cliente: datos,
            productos: carrito,
            total: cantidadTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((response) => {
                setPedido(response.id)
                vaciarCarrito()
            })
            .catch((err) => {
                console.log("Ocurrio un error =>", err.message)
            })    
    }

    if (pedidoID) {
        return (
            <div className="container">
                <h1 className="main-title"> Muchas Gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoID}</p>
            </div>
        )
    }


    return (

        <div className='container'>

            <h1 className='main-title'>Finalizar compra</h1>

            <form className='formulario' onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />

                <input type="email" placeholder='Ingresa tu email' {...register("email")}/>

                <input type="phone" placeholder='Ingresa tu telefono' {...register("phone")}/>

                <button className='enviar' type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout