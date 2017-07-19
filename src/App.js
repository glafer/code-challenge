import React, { Component } from 'react';
import { Route } from 'react-router';

import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import ArticleList from './components/articles/list';
import ArticleDetail from './components/articles/details';

class App extends Component {


  // Renders
  render() {
    return (
      <div className="App">
        <AppHeader />
        <main>
          <Route exact path="/" component={ArticleList} />
          <Route path="/:id" component={ArticleDetail} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
