import {createStore} from "redux"
import mainReducer from "../reducers/index.js"

export const initialState = {
    data: {
      favourites : []
    }
  }

export const configureStore = createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())