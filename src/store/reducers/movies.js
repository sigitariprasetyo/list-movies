import { GET_MOVIES, RESET_MOVIES, SET_LOADING } from "../constanta"

const initialState = {
  movies: [],
  loading: false,
  hasMore: false
}

const movieState = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_MOVIES:
      return ({
        ...state,
        movies: state.movies.concat(actions.data),
        hasMore: state.movies.length <= actions.total ? true : false
      })
    case SET_LOADING:
      return ({
        ...state, loading: actions.data
      })
    case RESET_MOVIES:
      return ({
        ...state, movies: []
      })
    default:
      return state
  }
}

export default movieState