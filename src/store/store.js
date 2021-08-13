import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieState from "./reducers/movies"

const rootReducer = combineReducers({
  movieState
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store