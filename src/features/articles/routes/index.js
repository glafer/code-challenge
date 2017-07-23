import React from 'react'
import { Route } from 'react-router-dom'

import ArticleList from '../containers/articleList'
import ArticleDetails from '../containers/articleDetails'

export const MODULE_PATH_PREFIX = ''

const articleListRoute = () => (<Route exact path={`${MODULE_PATH_PREFIX}/`} key="articleListRoute" component={ArticleList} />)
const articleDetailsRoute = () => (<Route path={`${MODULE_PATH_PREFIX}/:id`} key="articleDetailsRoute" component={ArticleDetails} />)

export const mainArticleRoutesList = () => {
    let articlesRoutes = []
    articlesRoutes.push(articleListRoute())
    articlesRoutes.push(articleDetailsRoute())
    return articlesRoutes
}