import { connect } from 'react-redux'
import ArticleList from '../components/articles/list'

import { loadArticles } from '../actions/'
import {ARTICLES_QUERY} from '../queries'

const mapStateToProps = (state) => {
    return {
        articles: state.articlesListReducer.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: dispatch(loadArticles(ARTICLES_QUERY))
    }
}

const ViewArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default ViewArticleList;