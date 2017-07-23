import axios from 'axios'
import * as articleQueries from './queries'

const ARTICLES_API_URL = 'http://localhost:4000/graphql'

export const getArticle = (id) => (
    axios.post(ARTICLES_API_URL, { query: articleQueries.ARTICLE_QUERY(id) })
)

export const getArticles = () => (
    axios.post(ARTICLES_API_URL, { query: articleQueries.ARTICLES_QUERY })
)