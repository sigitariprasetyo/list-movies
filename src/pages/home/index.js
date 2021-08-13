import { useState } from 'react'
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import './home.css'

const Home = () => {
  const [modalShow, setModalShow] = useState(false)

  let data = [
    {
      Title: "Eiga Doraemon: Nobita to himitsu dougu myûjiamu",
      Year: "2013",
      imdbID: "tt2768084",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZDQ0NThkNjEtNWM5My00ODQxLThlOWYtMmViZjAyMjg1NzcwXkEyXkFqcGdeQXVyNjYwNTkzMjU@._V1_SX300.jpg"
    },
    {
      Title: "Eiga Doraemon: Shin Nobita no Nippon tanjou",
      Year: "2016",
      imdbID: "tt5544700",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDk5NmFlMWYtNGY0NC00YTg4LTk0ODAtOTkzYzRlYzQyOTExXkEyXkFqcGdeQXVyNDQ1NDczMzU@._V1_SX300.jpg"
    },
    {
      Title: "Doraemon the Movie: Nobita's Treasure Island",
      Year: "2018",
      imdbID: "tt8098546",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDc0MjI0OGMtYTg1ZC00NDE1LTgzMzktNWIwY2RmYzJjNWE3XkEyXkFqcGdeQXVyMjUxNjcxMjU@._V1_SX300.jpg"
    },
    {
      Title: "Eiga Doraemon: Nobita no getsumen tansaki",
      Year: "2019",
      imdbID: "tt9735672",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNmI3MTQ2NjEtMWI1ZC00NDExLWI5MmEtMjJkYjJhMWQxOTEzXkEyXkFqcGdeQXVyNzYzNjg0NDk@._V1_SX300.jpg"
    },
    {
      Title: "Doraemon: Nobita no shin makai daibôken",
      Year: "2007",
      imdbID: "tt1260351",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYzg2N2ZiMTgtYjcxMy00MjgwLWJlNzItYTJlZWIwZTFiNTJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDc0Njc1NTY@._V1_SX300.jpg"
    }
  ]

  return (
    <>
      <Header title="List Movies from omdbAPI" />
      {
        data.map((movie, index) => {
          return (
            <Card poster={movie.Poster} title={movie.Title} modalShow={modalShow} setModalShow={setModalShow} index={index} />
          )
        })
      }
    </>
  )
}

export default Home