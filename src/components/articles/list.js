import React, { PropTypes } from 'react'
import ArticleItem from './item.js'
import './list.css'

const ArticleList = ({articles}) =>  (
    <div className="article-list-container">
         {(articles || []).map(article => 
            <ArticleItem key={article.id} article={article} />
        )} 
    </div> 
)

ArticleList.PropTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ArticleList