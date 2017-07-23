import React from 'react'
import { ArticleCard } from '../card'
import './list.css'

const ArticleList = ({articles}) =>  (
    <div className="article-list-container">
         {articles.map(article => 
            <ArticleCard key={article.id} article={article} />
        )} 
    </div> 
)

export default ArticleList