import { applyMiddleware,
  compose,
  createStore as _createStore
} from 'redux'

import createMiddlewares from './middlewares'
import createRun from './run'

function createStore ({ history,
  initialState,
  rootReducer,
  setup
}) {
  // MIDDLEWARES
  const middlewares = createMiddlewares({ history,
    rootReducer,
    setup
  })

  // ENHANCERS
  const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const storeEnhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  )

  // STORE
  const store = _createStore(rootReducer,
    initialState,
    storeEnhancer
  )
  // RUN
  createRun({ middlewares,
    setup,
    store
  })

  // return
  return store
}

export default createStore
