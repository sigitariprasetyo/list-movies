import axios from "../../config/api/axios"
import { CancelToken } from "axios"
import { GET_MOVIES, RESET_MOVIES, SET_LOADING } from "../constanta"
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
        data: data.Search ? data.Search : [],
        total: Number(data.totalResult)
      })
    }

    dispatch(setLoading(false))
    return () => cancel()
  } catch (err) {
    dispatch(setLoading(false))
  }
}

export const resetMovies = () => async dispatch => {
  await dispatch({
    type: RESET_MOVIES,
  })
}

const setLoading = (loading) => dispatch => {
  dispatch({
    type: SET_LOADING,
    data: loading
  })
}