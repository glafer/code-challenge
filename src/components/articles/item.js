import React, { Component } from 'react';
import './item.css';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
        };
    }
    render() {
        return <div className="article-item-container">
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.author}</p>
                <p className="article-item-excerpt">{this.state.article.excerpt}</p>
            </div>
    }
}

export default ArticleItem;