/*
  *     FORMULARIOS REACT
  *   EN ESTE FICHERO USAMOS EL HOOK  "useForm()", hay que aprender mas de el y sus validaciones.
*/

import { useForm } from "react-hook-form"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import { useState } from "react"


function Contacto() {

    const {register, handleSubmit } = useForm()

    const enviar = (datos) => {
        
      const contacto = collection(db, "contactos")

      addDoc(contacto, datos)

    }


  return (
    <div className='container'>
        <h1 className='main-title'>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />

            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>

            <input type="phone" placeholder='Ingresa tu telefono' {...register("phone")}/>

            <button className='enviar' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto