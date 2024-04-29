import { createContext, useEffect, useState } from "react";



// constante que representa la creacion del contexto global, en este caso, el contexto del carrito.
export const CartContext = createContext()



export const CartProvider = ({children}) => {


    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

    const [carrito, setCarrito] = useState(carritoInicial)

    
    // logica basica de agregar al carrito
    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad}

        const copiaCarrito = [...carrito]
        const estaEnCarrito = carrito.find((producto) => producto.id === itemAgregado.id)

        // si esta en el carrito seteamos la cantidad, sino, agregamos el elemento
        if (estaEnCarrito) {
            estaEnCarrito.cantidad += cantidad

        } else {
            copiaCarrito.push(itemAgregado)
        }
        setCarrito(copiaCarrito)

    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc,prod) => acc + prod.cantidad, 0)
    }

    const cantidadTotal = () => {
        return carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))

    }, [carrito])
    
    
                     

    return (

        // Pasamos el estado del carrito para ser usado con useContext en toda la App
        // el objeto "children" representa a todos los componentes que se serviran de dicho contexto, en este caso, el carrito
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, cantidadTotal, vaciarCarrito} } >
            {children}
        </CartContext.Provider>
    )
}