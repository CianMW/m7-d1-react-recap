import {createStore} from "redux"
import mainReducer from "../reducers"

export const initialState = {
    data: {
      likes : []
    }
  }

export const configureStore = createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())