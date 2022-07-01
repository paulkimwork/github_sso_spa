import React from 'react'
import { Login, Coffees } from './containers'
import ProtectedRoute from './ProtectedRoute'
import { Route } from 'react-router-dom'

const Routes = () => (
    <>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/Coffees" component={Coffees} />
    </>
)

export default Routes