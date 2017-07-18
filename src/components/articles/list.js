import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import ArticleItem from './item.js';

class ArticleList extends Component {
      // definition
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    // lifecycle
    componentWillMount() {
        request(ARTICLES_QUERY).then(response => {
            this.setState({ articles: response.data.articles });
        });
    }
    render() {
        let articleComponents = this.state.articles.map(function (article) {
            return <ArticleItem article={article} />
        })

        return <div className="article-list">
                {articleComponents}
            </div>
    }
}

export default ArticleList;