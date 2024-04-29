import datos from "../data/productos.json"


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 500)
    })
}

export const pedirDatosPorID = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = datos.find((producto) => producto.id == id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el archivo"
            })
        }
    })
}


export const toCapital = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}