import { Link } from 'react-router-dom'
import "./card.css"

const Card = props => {
  const { imdbID, poster, title, modalShow, setModalShow, index } = props
  return (
    <>
      <div onClick={() => setModalShow(-1)} className="modal" style={{ display: modalShow === index ? 'block' : 'none' }} >
        <div className="modal-content">
          <img src={poster} alt="img" />
        </div>
      </div>
      <div className="card-movie">
        <div className="box-image" onClick={() => setModalShow(index)}>
          <img className="poster" src={poster} alt="img" />
        </div>

        <div className="box-title">
          <p className="p-20" key={index}>{title}</p>
          <Link className="link-detail" to={`/detail/${imdbID}`}>Detail...</Link>
        </div>
      </div>
    </>
  )
}

export default Card