import {createStore} from "redux"
import mainReducer from "../reducers"

export const initialState = {
    count: 0
  }

export const configureStore = createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())