import { useContext, useState } from "react"
import ItemCounter from "./ItemCounter"
import { toCapital } from "../helpers/pedirDatos"
import { CartContext } from "../context/CartContext"


function ItemDetail({item}) {


    // estado del carrito global traido desde App.jsx mediante el "provider"
    const {agregarAlCarrito} = useContext(CartContext)
  

    const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restar = () => {
        if (cantidad == 1) {
            return
        } else {
            setCantidad(cantidad - 1)
        }
    }


    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagenUrl} alt={item.marca} />
                <div>
                    <h3 className="titulo">{toCapital(item.marca)}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">{toCapital(item.categoria)}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCounter 
                        cantidad={cantidad} 
                        sumar={sumar} 
                        restar={restar} 
                        agregarCarrito={() => {agregarAlCarrito(item, cantidad)}}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail