

import {BrowserRouter,Routes,Route} from "react-router-dom";

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemList from "./components/ItemListContainer/ItemList";
import Productos from './components/ItemListContainer/Productos';
import Nosotros from './components/ItemListContainer/Nosotros';
import Detalle from './components/ItemListContainer/Detalle';
import Error from './components/ItemListContainer/Error'

import productosMates from "./components/Data/productos"


function App() {
 

  return (
    <> 
    
     <BrowserRouter basename="/Comision-73700-React-JS">
        <Routes>
          <Route path='/' element={<ItemListContainer/>}>
              <Route index element={<ItemList/>}/>
              <Route path="/productos" element={<Productos productos={productosMates} />} />
              <Route path="/productos/:categoria" element={<Productos productos={productosMates} />} />
              <Route path="/productos/detalle/:id" element={<Detalle />} />
              <Route path="/nosotros" element={<Nosotros/>}/>
              <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

      

  )
}

export default App
