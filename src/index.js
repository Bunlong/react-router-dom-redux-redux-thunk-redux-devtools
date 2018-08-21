import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import { 
  BrowserRouter, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';

const store = configureStore()

render(
  <BrowserRouter>
    <Switch>
      <Root store={store} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
