import { connect } from 'react-redux'
import articleList from '../components/list'
import { loadArticles } from '../actions/actionsCreator'

const mapStateToProps = (state) => {
    return {
        articles: state.article.articleListReducer.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: dispatch(loadArticles())
    }
}

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(articleList)

export default ArticleList;