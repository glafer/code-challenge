import { connect } from 'react-redux'
import articleDetails from '../components/details'
import { loadArticle } from '../actions/actionsCreator'

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        article: state.article.articleDetailReducer.article
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: dispatch(loadArticle(ownProps.match.params.id))
    }
}

const ArticleDetails = connect(mapStateToProps, mapDispatchToProps)(articleDetails)

export default ArticleDetails