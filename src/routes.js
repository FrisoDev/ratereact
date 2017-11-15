import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Batches,
  SignIn,
  SignUp,
  Batch,
  StudentEval,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
       <Route exact path="/"  component={Batches} />
       <Route path="/batches/:batchId" component={Batch} />
       <Route path="/students/:studentId" component={StudentEval} />
       <Route path="/sign-in" component={SignIn} />
       <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
