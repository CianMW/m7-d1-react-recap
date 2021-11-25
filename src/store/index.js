import {compose, createStore, applyMiddleware, combineReducers} from "redux"
import mainReducer from "../reducers/jobsReducer.js"
import thunk from "redux-thunk"
import favouriteReducer from "../reducers/favouriteReducer.js"
import jobsReducer from "../reducers/jobsReducer.js"


const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  data: {
    favourites : [],
    loading: true,
  },
  jobs: {
    content: [],
    error: false,
    loading: true,
  }
}
const bigReducer = combineReducers({
  data: favouriteReducer,
  jobs: jobsReducer
})

export const configureStore = createStore(bigReducer,initialState, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)))

