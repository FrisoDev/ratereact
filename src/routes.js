// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  SignIn,
  SignUp,
  Batches
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Batches} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />

      </div>
    )
  }
}
