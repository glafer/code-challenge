import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './item.css';

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
        return <div className="article-item-container">
                <h3>{this.state.title}</h3>
                <p>{this.state.author}</p>
                <p className="article-item-excerpt">{this.state.content}</p>
            </div>
    }
}

export default ArticleDetails;