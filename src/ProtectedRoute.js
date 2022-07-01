import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { DashboardWrapper } from './components'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Route
      render={props =>
        isLoggedIn ? <DashboardWrapper><Component {...props} /></DashboardWrapper> : <Redirect to="/" />
      }
      {...rest}
    />)
}
export default ProtectedRoute
