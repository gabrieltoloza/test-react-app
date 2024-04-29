import Item from "./Item"


function ItemList({productos ,titulo}) {

  return (
    <div className="container">
        <h2 className="main-title">{titulo}: </h2>
        <hr />
        <div className="productos">
             {
                productos.length > 0 &&
                productos.map((prod) => {
                  return (
                    <Item key={prod.id} item={prod}/>
                  )
                }) 
             }
        </div>
    </div>
  )
}

export default ItemList