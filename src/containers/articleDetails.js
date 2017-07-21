import { connect } from 'react-redux'
import ArticleDetails from '../components/articles/details'

import { loadArticle } from '../actions/'
import {ARTICLES_QUERY} from '../queries'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        id: ownProps.match.params.id,
        article: state.articleDetailsReducer.article
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: dispatch(loadArticle(ownProps.match.params.id, ARTICLES_QUERY))
    }
}

const ViewArticleDetails = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails)

export default ViewArticleDetails;