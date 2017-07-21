import React from 'react'
import { Route } from 'react-router'

import './components/main-styles.css'
import { AppHeader } from './components/appHeader'
import { AppFooter } from './components/appFooter'
import ViewArticleList from './containers/articleList'
import ViewArticleDetails from './containers/articleDetails'
import ArticleDetail from './components/articles/details'

const App = () => (
  <div className="App">
    <AppHeader />
    <main>
      <Route exact path="/" component={ViewArticleList} />
      <Route path="/:id" component={ViewArticleDetails} />
    </main>
    <AppFooter />
  </div>  
)
export default App
