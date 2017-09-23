import { fork } from 'redux-saga/effects'

function createRootSaga (config = {}) {
  // root
  function * rootSaga () {
    yield [
    ].map(fork)
  }
  // return
  return rootSaga
}

export default createRootSaga
