import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import config from './config'
import createStore from './store'
import createRootReducer from '../reducers'

const setup = Object.assign({}, config,
  typeof window !== 'undefined' && window.__SETUP__)

const initialState = typeof window !== 'undefined' && window.__INITIAL_STATE__
 
const history = createBrowserHistory({ basename: '/' })

const rootReducer = createRootReducer({ initialState,
  setup
})

const store = createStore({ history,
  initialState,
  rootReducer,
  setup
})

const root = { history,
  ProviderComponent: Provider,
  RouterComponent: ConnectedRouter,
  setup,
  store
}

export default root
