import "./ItemList.css"
import video from "../../assets/videoDeMateFlores.mp4"



function ItemList() {
  return (
    <div className="fondo">
      <h1>Tu viaje empieza con un buen mate</h1>
      <video autoPlay muted loop  src={video} type="video/mp4"></video>
    </div>
  )
}

export default ItemList