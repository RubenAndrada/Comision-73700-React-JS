import { Link } from "react-router-dom";

function Producto({ nombre, precio, id, imagen }) {
  return (
    <Link to={`/productos/detalle/${id}`} className="card-1">
      <img src={imagen} className="img" />
      <h2>{nombre}</h2>
      <h2>${precio}</h2>
    </Link>
  );
}

export default Producto;