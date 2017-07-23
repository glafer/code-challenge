import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

export const ArticleCard = ({article}) => (
    <Link to={`/${article.id}`} className="article-item-container">
        <div>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p className="article-item-excerpt">{article.excerpt}</p>
        </div>
    </Link>
)