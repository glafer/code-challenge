import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ArticleList from '../../features/articles/containers/articleList'
import ArticleDetails from '../../features/articles/containers/articleDetails'

export const routes = () => (
    <main>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/:id" component={ArticleDetails} />
      </Switch>
    </main>
)