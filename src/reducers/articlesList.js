const initialState = {
    articles: [],
    isLoaded: false
}

export default function articlesListReducer(state = initialState, action) {

    switch (action.type) {
        case 'REQUEST_ARTICLES':
            return Object.assign({}, state, {
                isLoaded: false,
                articles: []
            })
        case 'RECEIVE_ARTICLES':
            return Object.assign({}, state, {
                isLoaded: true,
                articles: action.articles
            })
        default:
            return state
    }
        return state;
}