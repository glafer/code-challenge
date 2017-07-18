import React, { Component } from 'react';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
        };
    }
    render() {
        return <div className="article-item">
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.author}</p>
                <p>{this.state.article.excerpt}</p>
            </div>
    }
}

export default ArticleItem;