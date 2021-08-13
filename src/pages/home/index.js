import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import ReactLoading from 'react-loading';
import './home.css'
import { getMovies } from '../../store/actions/movies'

const Home = () => {
  const dispatch = useDispatch()
  const { movies, loading } = useSelector(state => state.movieState)
  const [modalShow, setModalShow] = useState(false)
  const [keySearch, setKeySearch] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    let payload = {
      keySearch,
      page
    }
    dispatch(getMovies(payload))
  }, [keySearch, page])

  useEffect(() => {
    console.log(loading);
  }, [loading])

  const handleSearch = (e) => {
    setKeySearch(e.target.value)
    setPage(1)
  }

  return (
    <>
      <Header title="List Movies from omdbAPI" />
      <div className="box-search">
        <input className="input" placeholder="Search movies" type="text" value={keySearch} onChange={handleSearch} />
      </div>
      <div className="content">
        {
          movies?.map((movie, index) => {
            return (
              <Card poster={movie.Poster} title={movie.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
            )
          })
        }
      </div>
      {
        loading && <ReactLoading type={"bars"} color={"#fff"} height={'5%'} width={'5%'} />
      }

    </>
  )
}

export default Home