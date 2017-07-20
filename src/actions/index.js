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

