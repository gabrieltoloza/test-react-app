import { toCapital } from "../helpers/pedirDatos"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../firebase/config"

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("Productos")


    useEffect(() => {

        const productosRef = collection(db, "productos")
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef
    
        getDocs(q)
            .then((response) => {

                setProductos(
                    response.docs.map((doc) => {
                        return {
                           ...doc.data(), id: doc.id
                        }
                    })
                )
                // ! Setear el valor del titulo
                // ! Setear el valor del titulo
                // ! Setear el valor del titulo
            })

    }, [categoria])
    

  return (
    <div>
        <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer