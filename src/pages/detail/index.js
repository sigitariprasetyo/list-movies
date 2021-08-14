import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './detail.css'
import Header from "../../components/header/header"

const Detail = () => {
  const { imdbID } = useParams()
  const { movies } = useSelector(state => state.movieState)
  const [movie, setMovie] = useState()

  useEffect(() => {
    setMovie(movies.find(movie => movie.imdbID === imdbID))
  }, [])

  return (
    <>
      <Header title="Detail Movie" />
      <div className="box-detail">
        <Link className="link-to-home" to="/home"> Back to Home </Link>
        <div className="movie-detail">
          <div className="box-image-detail">
            <img src={movie?.Poster} alt="img" />
          </div>

          <div className="box-title-detail">
            <p className="p-20" >Title : {movie?.Title}</p>
            <p className="p-20">Type : {movie?.Type}</p>
            <p className="p-20">Year : {movie?.Year}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail