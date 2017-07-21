import { combineReducers } from 'redux'
import articlesListReducer from './articlesList'
import articleDetailsReducer from './articleDetails'

const mainReducer = combineReducers({articlesListReducer, articleDetailsReducer})

export default mainReducer