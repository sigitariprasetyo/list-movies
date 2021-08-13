import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import ReactLoading from 'react-loading';
import './home.css'
import { getMovies, resetMovies } from '../../store/actions/movies'

const Home = () => {
  const dispatch = useDispatch()
  const { movies, loading, hasMore } = useSelector(state => state.movieState)
  const [modalShow, setModalShow] = useState(false)
  const [keySearch, setKeySearch] = useState("")
  const [page, setPage] = useState(1)

  const observe = useRef()
  const lastMovie = useCallback(node => {
    if (loading) return
    if (observe.current) observe.current.disconnect()
    observe.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page => page + 1)
      }
    })
    if (node) observe.current.observe(node)
  }, [loading, hasMore])

  useEffect(() => {
    let payload = {
      keySearch,
      page
    }
    if (keySearch !== "") dispatch(getMovies(payload))
  }, [keySearch, page])

  useEffect(() => {
    dispatch(resetMovies())
  }, [keySearch])

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
            if (movies.length === index + 1) {
              return (
                <div ref={lastMovie}>
                  <Card key={index} poster={movie?.Poster} title={movie?.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
                </div>
              )
            } else {
              return (
                <Card key={index} poster={movie?.Poster} title={movie?.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
              )
            }
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