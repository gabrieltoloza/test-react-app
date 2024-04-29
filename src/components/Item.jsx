import { Link } from "react-router-dom"
import { toCapital } from "../helpers/pedirDatos"


function Item({item}) {
  
  return (
    <div className="producto">
        <img src={item.imagenUrl} alt={item.marca} />
        <div>
            <h4>{toCapital(item.marca)}</h4>
            <p>Precio: ${item.precio}</p>
            <p>Categoria: {item.categoria}</p>
            <p>{item.detalles}</p>
            <Link className="ver-mas" to={`/item/${item.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item