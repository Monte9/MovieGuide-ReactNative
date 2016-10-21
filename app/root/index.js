import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app'
import reducer from '../reducers/index'

import { INITIAL_STATE } from './initial_state'

const store = createStore(reducer, 42 )

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
