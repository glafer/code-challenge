import React from 'react'
import { Route } from 'react-router'

import ArticleList from '../features/articles/containers/articleList'
import ArticleDetails from '../features/articles/containers/articleDetails'

export const routes = () => (
    <main>
      <Route exact path="/" component={ArticleList} />
      <Route path="/:id" component={ArticleDetails} />
    </main>
)