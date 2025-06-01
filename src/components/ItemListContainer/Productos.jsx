import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Producto from "./Producto";
import './productos.css';

function Productos({ productos }) {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (categoria) {
      setSelectedCategory(categoria.toLowerCase());
    } else {
      setSelectedCategory("");
    }
  }, [categoria]);

  const handleFilter = (cat) => {
    if (cat === "") {
      navigate("/productos");
    } else {
      navigate(`/productos/${cat}`);
    }
  };

  const filteredProd = selectedCategory
    ? productos.filter(prod => prod.categoria === selectedCategory)
    : productos;

  return (
    <>
      {/* <div>
        <button onClick={() => handleFilter("mates")}>Mates</button>
        <button onClick={() => handleFilter("bombillas")}>Bombillas</button>
        <button onClick={() => handleFilter("termos")}>Termos</button>
        <button onClick={() => handleFilter("accesorios")}>Accesorios</button>
        <button onClick={() => handleFilter("kits")}>Kits</button>
        <button onClick={() => handleFilter("")}>Todos</button>
      </div> */}

      <div className="fondo1">
        <div className="botones">
        <button onClick={() => handleFilter("mates")}>Mates</button>
        <button onClick={() => handleFilter("bombillas")}>Bombillas</button>
        <button onClick={() => handleFilter("termos")}>Termos</button>
        <button onClick={() => handleFilter("accesorios")}>Accesorios</button>
        <button onClick={() => handleFilter("kits")}>Kits</button>
        <button onClick={() => handleFilter("")}>Todos</button>
      </div>
        <div className="container-1">
          {filteredProd.map(prod => (
            <Producto key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Productos;