import { combineReducers } from 'redux'
import { articlesReducer } from './articles'

const mainReducer = articlesReducer //combineReducers({articlesReducer})

export default mainReducer