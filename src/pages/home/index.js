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
  const [sugestion, setSugestion] = useState([])
  const [displaySugest, setDisplaySugest] = useState(false)
  const wrapRef = useRef(null)

  const observe = useRef()
  const lastMovie = useCallback(node => {
    if (loading) return
    if (observe.current) observe.current.disconnect()
    observe.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && movies.length >= 10) {
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
    document.addEventListener("mousedown", handleClickOutside)
    return (() => {
      document.removeEventListener("mousedown", handleClickOutside)
    })
  }, [])

  useEffect(() => {
    if (movies.length > 0) setSugestion([...new Set(movies?.map(movie => movie?.Title))])
  }, [movies])

  const handleClickOutside = e => {
    const { current: wrap } = wrapRef
    if (wrap && !wrap.contains(e.target)) {
      setDisplaySugest(false)
    }
  }

  const handleSearch = (e) => {
    dispatch(resetMovies())
    setKeySearch(e.target.value)
    setPage(1)
  }

  return (
    <>
      <Header title="List Movies from omdbAPI" />
      <div ref={wrapRef} className="box-search" >
        <input className="input" placeholder="Search movies" type="text" value={keySearch} onClick={() => setDisplaySugest(!displaySugest)} onChange={handleSearch} />
        <div className="box-sugestion">
          {
            displaySugest && sugestion.map((el, i) => {
              return <p key={i} className="sugestion-option" onClick={() => [setKeySearch(el), setDisplaySugest(false), dispatch(resetMovies())]}>{el}</p>
            })
          }
        </div>
      </div>
      <div className="content">
        {
          movies.length > 0 && movies?.map((movie, index) => {
            if (movies.length === index + 1) {
              return (
                <div key={index} ref={lastMovie}>
                  <Card key={index} imdbID={movie.imdbID} poster={movie?.Poster} title={movie?.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
                </div>
              )
            } else {
              return (
                <Card key={index} imdbID={movie.imdbID} poster={movie?.Poster} title={movie?.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
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