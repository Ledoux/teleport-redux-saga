import { Redirect, Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer } from 'react-router-redux'

import App from './App'
import pageView, { PageComponentsByName } from './pages'
import createRoot from '../utils/root'

const createBrowserRoot = history => createRoot({ App,
  history,
  PageComponentsByName,
  Redirect,
  Route,
  Router: ConnectedRouter,
  routerReducer,
  views: [
    pageView
  ]
})

export default createBrowserRoot
