import { connect } from 'react-redux'
import ArticleList from '../components/articles/list'
import { loadArticles } from '../actions/'

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const ViewArticleList = connect(mapStateToProps)(ArticleList)

export default ViewArticleList;