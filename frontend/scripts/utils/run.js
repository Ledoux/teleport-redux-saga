import createRootSaga from '../sagas'

function createRun({ middlewares,
  setup,
  store
}) {
  // ROOT
  const rootSaga = createRootSaga ({ setup, store })
  // SAGA
  middlewares.find(middleware => middleware._name === 'sagaMiddleware')
    .run(rootSaga)
}

export default createRun
