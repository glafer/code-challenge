import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import mainReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  mainReducer,
  applyMiddleware(loggerMiddleware, thunk)
)

export default store;