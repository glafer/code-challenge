import React from 'react'
import './details.css'

import { Tags } from '../shared/tags'

const ArticleDetails = ({id, article = {}}) =>  (
    <div className="article-detail-container">
        <h2>{article.title}</h2>
        <p><i>{article.author}</i></p>
        <p>{article.content}</p>
        <Tags tags={article.tags} />    
    </div>
)

export default ArticleDetails