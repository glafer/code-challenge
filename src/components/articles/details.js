import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './details.css';

import { Tags } from '../tags';

const ArticleDetails = ({id, article = {}}) =>  (
    <div className="article-detail-container">
        <h2>{article.title}</h2>
        <p><i>{article.author}</i></p>
        <p>{article.content}</p>
        <Tags tags={article.tags} />    
    </div>
)


// ArticleList.PropTypes = {
//     articles: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         author: PropTypes.string.isRequired,
//         excerpt: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }

export default ArticleDetails