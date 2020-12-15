import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ProvideAuth, useAuth } from '../../hooks/auth.js'
import Navigation from './nav.js'
import Schedule from '../schedule/schedule.js'

export default function Router() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Navigation />
        <div>
          <Switch>
            <Route exact path='/'>
              <Redirect to={{ pathname: '/schedule' }} />
            </Route>
            <LoginRoute path='/login'>

            </LoginRoute>
            <PrivateRoute path='/schedule'>
              <Schedule />
            </PrivateRoute>
            <PrivateRoute path='/payroll'>

            </PrivateRoute>
            <PrivateRoute path='/people'>

            </PrivateRoute>
            <PrivateRoute path='/resources'>

            </PrivateRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </ProvideAuth>
  )
}

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()
  return (
    <Route {...rest} render={({ location }) =>
        auth.user ? (children) :
        (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
      }
    />
  )
}

function LoginRoute({ children, ...rest }) {
  const auth = useAuth()
  return (
    <Route {...rest} render={({ location }) =>
        !auth.user ? (children) :
        (<Redirect to={{ pathname: '/schedule', state: { from: location } }} />)
      }
    />
  )
}
