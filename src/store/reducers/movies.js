import { GET_MOVIES, SET_LOADING } from "../constanta"

const initialState = {
  movies: [],
  loading: false,
  hasMore: false
}

const movieState = (state = initialState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case GET_MOVIES:
      return ({
        ...state, movies: actions.data
      })
    case SET_LOADING:
      return ({
        ...state, loading: actions.data
      })
    default:
      return state
  }
}

export default movieState