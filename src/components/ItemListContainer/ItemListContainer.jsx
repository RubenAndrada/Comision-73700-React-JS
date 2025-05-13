import "./ItemListContainer.css"
import video from "../../assets/videoDeMateFlores.mp4"

function ItemListContainer() {
  return (
    <div className="fondo">
      <h1>Tu viaje empieza con un buen mate</h1>
      <video autoPlay muted loop  src={video} type="video/mp4"></video>
    </div>
  )
}

export default ItemListContainer