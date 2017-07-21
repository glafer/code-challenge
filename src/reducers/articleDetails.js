const initialStateArticleDetails = {
    id: undefined,
    article: {}
}

export default function articleDetailsReducer(state = initialStateArticleDetails, action) {
    
    switch (action.type) {
        case 'REQUEST_ARTICLE':
            return Object.assign({}, state, {
                id: action.id,
                article: state.article
            })
        case 'RECEIVE_ARTICLE':
            return Object.assign({}, state, {
                id: state.id,
                article: action.article
            })
        default:
            return state
    }
}