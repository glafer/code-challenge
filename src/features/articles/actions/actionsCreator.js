import * as actions from './index'
import * as apiCalls from '../api'

export function loadArticle(id) {
    return function (dispatch) {
        dispatch(actions.requestArticle(id))
        return apiCalls.getArticle(id)
            .then(response => dispatch(actions.receiveArticle(response.data)))
            .catch(error => dispatch(actions.receiveArticleError(error)))
    }
}

export function loadArticles() {
    return function (dispatch) {
        dispatch(actions.requestArticles())
        return apiCalls.getArticles()
            .then(response => dispatch(actions.receiveArticles(response.data)))
            .catch(error => dispatch(actions.receiveArticlesError(error)))
    }
}