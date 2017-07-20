import React from 'react';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import ViewArticleList from './containers/articleList';

const App = () => (
  <div className="App">
    <AppHeader />
    <ViewArticleList />
    <AppFooter />
  </div>  
)

export default App;
