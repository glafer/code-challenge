import { combineReducers } from 'redux'
import articlesReducer from '../features/articles/reducers'

const mainReducer = combineReducers({
    article: articlesReducer
})

export default mainReducer