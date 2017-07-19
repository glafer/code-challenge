import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './details.css';
import { slugify } from '../../utils';

class ArticleDetails extends Component {
    constructor({ match }) {
        super(...arguments);
        this.state = {
            id: match.params.id,
            title: undefined,
            author: undefined,
            content: undefined,
            tags: []
        };
    }

    componentWillMount() {
        let self = this;
        request(ARTICLES_QUERY).then(response => {
            let article = response.data.articles.filter(value => value.id === self.state.id)[0];
            this.setState({ 
                title: article.title,
                author: article.author,
                content: article.content,
                tags: article.tags
            });
        });
    }

    render() {
        let tagsDom = this.state.tags.map(function (tag) {
            return <p key={`tag-${slugify(tag)}`}>{tag}</p>
        });
        return <div className="article-detail-container">
                <h2>{this.state.title}</h2>
                <p><i>{this.state.author}</i></p>
                <p>{this.state.content}</p>
                <div className="article-detail-tags">{tagsDom}</div>
                
            </div>
    }
}

export default ArticleDetails;