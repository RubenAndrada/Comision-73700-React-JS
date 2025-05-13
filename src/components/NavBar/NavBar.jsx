import "./NavBar.css"
import logo from "../../assets/matenauta.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <nav className="barra-nav">
      <div className="logo">
        <a href="">
          <img  src={logo} alt="" />
        </a>
      </div>
      <div className="lista">
        <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">TIENDA</a>
        </li> 
        <li>
          <a href="#">RRHH</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar