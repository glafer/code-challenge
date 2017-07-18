import React, { Component } from 'react';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import ArticleList from './components/articles/list';

class App extends Component {


  // Renders
  render() {
    return (
      <div className="App">
        <AppHeader />
        <ArticleList />
        <AppFooter />
      </div>
    );
  }
}

export default App;
