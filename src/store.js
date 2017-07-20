import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import mainReducer from './reducers'
import { loadArticles } from './actions/'
import {ARTICLES_QUERY} from './queries'

const loggerMiddleware = createLogger()

const store = createStore(
  mainReducer,
  applyMiddleware(loggerMiddleware, thunk)
)

store.dispatch(loadArticles(ARTICLES_QUERY))

export default store;