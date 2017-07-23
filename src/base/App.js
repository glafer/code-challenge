import React from 'react'

import './styles/main-styles.css'
import { AppHeader } from './components/appHeader'
import { AppFooter } from './components/appFooter'
import { routes } from './routes';

const App = () => (
  <div className="App">
    <AppHeader />
    {routes()}
    <AppFooter />
  </div>  
)
export default App
