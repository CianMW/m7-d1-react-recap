import {compose, createStore, applyMiddleware} from "redux"
import mainReducer from "../reducers/jobsReducer.js"
import thunk from "redux-thunk"
import combineReducers from "redux/src/combineReducers"
import favouriteReducer from "../reducers/favouriteReducer.js"
import jobsReducer from "../reducers/jobsReducer.js"

const bigReducer = combineReducers({
  cart: favouriteReducer,
  jobs: jobsReducer
})

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTEMSION_COMPOSE__ || compose

export const initialState = {
    data: {
      favourites : []
    },
    jobs: {
      content: []
    }
  }

export const configureStore = createStore(bigReducer, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)))

