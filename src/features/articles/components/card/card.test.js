import React from 'react'
import ReactDOM from 'react-dom'
import { ArticleCard } from './index'

const articleCardTestData = {
    title: 'title',
    excerpt: 'excerpt',
    author: 'author'
}

describe('Article Card', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ArticleCard article={articleCardTestData} />, div)
    })
})
