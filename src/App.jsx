import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavbarNuevo from './components/NavbarNuevo/NavbarNuevo'
import {CartProvider } from './context/CartContext'
import './main.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'





function App() {


    return (
        <div>

            {/* Con Provider encerramos todo los elementos hijos que necesiten de un contexto, por ejemplo un carrito */}
            <CartProvider>

                {/* Con BrowserRouter encerramos lo que necesitemos que tenga navegacion entre rutas, sin recargar la pagina */}
                <BrowserRouter>

                    <NavbarNuevo />

                    {/* Dentro de Routes definimos las rutas combinando Route con Link */}
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />}/>          
                        <Route path='/productos' element={<ItemListContainer />}/>          
                        <Route path='/productos/:categoria' element={<ItemListContainer />} />
                        <Route path='/carrito' element={<Carrito />}/>
                        <Route path='/contacto' element={<Contacto />}/>
                        <Route path='/checkout' element={<Checkout />}/>
                    </Routes>

                </BrowserRouter>

            </CartProvider>

        </div>
    )
}

export default App



