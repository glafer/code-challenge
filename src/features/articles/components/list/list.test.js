import React from 'react'
import ReactDOM from 'react-dom'
import ArticleList from './index'

let articleCardTestData1 = {
    id: 'id1',
    title: 'title',
    excerpt: 'excerpt',
    author: 'author'
}

let articleCardTestData2 = {
    id: 'id2',
    title: 'title',
    excerpt: 'excerpt',
    author: 'author'
}

const articleListTestData = [ articleCardTestData1, articleCardTestData2]

describe('Article List', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ArticleList articles={articleListTestData} />, div)
    });
})