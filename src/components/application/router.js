import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
import { ProvideAuth, useAuth } from '../../hooks/auth.js'

export default function Router() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/login'>

            </Route>
            <PrivateRoute path='/schedule'>

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
  let auth = useAuth()
  return (
    <Route {...rest} render={({ location }) =>
        auth.user ? (children) :
        (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
      }
    />
  )
}
