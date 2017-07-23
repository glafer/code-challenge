import React from 'react'
import { Switch } from 'react-router-dom'

import { mainArticleRoutesList }  from '../../features/articles/routes' 

export const routes = () => (
    <main>
      <Switch>
        { mainArticleRoutesList() }
      </Switch>
    </main>
)