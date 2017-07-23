import * as actionTypes from './actionTypes'

//articleList
export const requestArticles = () => ({
    type: actionTypes.REQUEST_ARTICLES
})

export const receiveArticles = (json) => ({
    type: actionTypes.RECEIVE_ARTICLES,
    articles: json.data.articles
})

export const receiveArticlesError = (error) => ({
    type: actionTypes.RECEIVE_ARTICLES_ERROR,
    articles: undefined,
    error: error
})

//articleDetails
export const requestArticle = (id) => ({
    type: actionTypes.REQUEST_ARTICLE,
    id,
    article: {}
})

export const receiveArticle = (json) => ({
    type: actionTypes.RECEIVE_ARTICLE,
    article: json.data.article
})

export const receiveArticleError = (error) => ({
    type: actionTypes.RECEIVE_ARTICLE_ERROR,
    article: undefined,
    error: error
})
