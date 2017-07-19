import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './item.css';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
        };
    }
    render() {
        console.log(this.state.article.id)
        return <Link to={`/${this.state.article.id}`}>
            <div className="article-item-container">
                 
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.author}</p>
                <p className="article-item-excerpt">{this.state.article.excerpt}</p>
            </div>
            </Link>
    }
}

export default ArticleItem;