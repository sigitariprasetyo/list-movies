import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesState from "./reducers/movies"

const rootReducer = combineReducers({
  moviesState
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store