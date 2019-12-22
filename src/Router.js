import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import cookie from 'cookie'
import BusinessListings from './containers/BusinessListings'
import Details from './containers/Details'
import Login from '../src/containers/Login'
import AddBusiness from './containers/AddBusiness'
//import user from './redux/reducers'

const Router = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
        }
// Check the cookies for a cookie called "loggedIn"



const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}


return (
    <Switch>
        <Route exact path="/" component={BusinessListings}/>
        <Route path="/details/:id" component={Details} />
        <Route path="/login"  component={Login}/>
        <ProtectedRoute path="/addBusiness" component={AddBusiness}/>
        </Switch>
    );
}

export default Router;