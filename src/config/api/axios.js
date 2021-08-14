import axios from "axios";

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=4e56018b',
  cancelToken: axios.CancelToken
})

export default instance