import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import cookie from 'cookie'
import Login from './components/Login'
import BusinessListings from './components/BusinessListings'
import AddBusiness from './containers/AddBusiness'

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


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={BusinessListings}/>
            <Route path="/login" component={Login} />
           
            {/* <ProtectedRoute exact path="/" component={BusinessList} /> */}
            <ProtectedRoute path="/addBusiness" component={AddBusiness} />
           
        </Switch>
    );
};

export default Router;