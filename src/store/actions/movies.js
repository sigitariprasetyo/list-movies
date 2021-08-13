import axios from "../../config/api/axios"
import { CancelToken } from "axios"
import { GET_MOVIES, SET_LOADING } from "../constanta"
let cancel

export const getMovies = (payload) => async dispatch => {
  cancel && cancel()
  dispatch(setLoading(true))
  try {
    const { data } = await axios({
      method: 'get',
      params: { s: payload.keySearch, page: payload.page },
      cancelToken: new CancelToken(c => cancel = c)
    })

    if (data) {
      dispatch({
        type: GET_MOVIES,
        data: data.Search
      })
    }

    dispatch(setLoading(false))
    return () => cancel()
  } catch (err) {
    dispatch(setLoading(false))
  }
}

const setLoading = (loading) => dispatch => {
  dispatch({
    type: SET_LOADING,
    data: loading
  })
}