import { combineReducers } from 'redux'
import * as actions from '../actions/actionTypes'

const INITIAL_STATE_ARTICLE_DETAILS = {
    id: undefined,
    article: {}
}

function articleDetailReducer(state = INITIAL_STATE_ARTICLE_DETAILS, action) {
    switch (action.type) {
        case actions.REQUEST_ARTICLE:
            return Object.assign({}, state, {
                id: action.id,
                article: state.article
            })
        case actions.RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                id: state.id,
                article: action.article
            })
        case actions.RECEIVE_ARTICLE_ERROR:
            return Object.assign({}, state, {
                id: state.id,
                article: action.article
            })
        default:
            return state
    }
}

const INITIAL_STATE_ARTICLE_LIST = {
    articles: []
}

function articleListReducer(state = INITIAL_STATE_ARTICLE_LIST, action) {
    switch (action.type) {
        case actions.REQUEST_ARTICLES:
            return Object.assign({}, state, {
                articles: []
            })
        case actions.RECEIVE_ARTICLES:
            return Object.assign({}, state, {
                articles: action.articles
            })
        case actions.RECEIVE_ARTICLES_ERROR:
            return Object.assign({}, state, {
                articles: action.articles
            })
        default:
            return state
    }
}

const articlesReducer = combineReducers({
    articleDetailReducer,
    articleListReducer
})

export default articlesReducer