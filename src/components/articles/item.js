import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

export const ArticleItem = ({article}) => (
    <Link to={`/${article.id}`}>
        <div className="article-item-container">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p className="article-item-excerpt">{article.excerpt}</p>
        </div>
    </Link>
)