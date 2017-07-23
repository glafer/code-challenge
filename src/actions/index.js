import axios from 'axios';

export function requestArticles() {
    return {
        type: 'REQUEST_ARTICLES',
        articles: []
    }
}

export function receiveArticles(json) {
    return {
        type: 'RECEIVE_ARTICLES',
        articles: json.data.articles
    }
}

export function loadArticles(query) {
    return function (dispatch) {
        dispatch(requestArticles())

        return axios.post('http://localhost:4000/graphql', { query })
            .then(response => dispatch(receiveArticles({ data: response.data.data })))
            .catch(error => error)
    }
}

export function requestArticle(id) {
    return {
        type: 'REQUEST_ARTICLE',
        id,
        article: {}
    }
}

export function receiveArticle(id, json) {
    return {
        type: 'RECEIVE_ARTICLE',
        id,
        article: json.data.article
    }
}

export function loadArticle(id, query) {
    return function (dispatch) {
        dispatch(requestArticle(id))
        return axios.post('http://localhost:4000/graphql', { query })
            .then(response => {
                //let article = response.data.data.articles.filter(article => article.id === id)[0]
                dispatch(receiveArticle(id, { data: response.data.data }))
            })
            .catch(error => error)
    }
}

