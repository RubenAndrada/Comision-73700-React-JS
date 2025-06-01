import "./NavBar.css"
import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/matenauta.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <div>
    <nav className="barra-nav">
      <div className="logo">
        <a href="">
          <img  src={logo} alt="" />
        </a>
      </div>
      <div className="lista">
        <ul>
        <li>
          <Link to={"/"}>INICIO</Link>
        </li>
        <li>
          <Link to={"/Productos"}>TIENDA</Link>
        </li> 
        <li>
          <Link to={"/Nosotros"}>NOSOTROS</Link>
        </li>
      
      </ul>
      </div>
      
      <CartWidget/>
    </nav>
    <Outlet/>
    </div>
    
  )
}

export default NavBar