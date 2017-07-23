import React from 'react'
import ReactDOM from 'react-dom'
import ArticleDetails from './index'

const articleDetailsTestData = {
    title: 'title',
    content: 'content',
    author: 'author',
    tags: [ 'tag1', 'tag2' ]
}

describe('Article Details', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ArticleDetails id="id" article={articleDetailsTestData} />, div);
    });
})
