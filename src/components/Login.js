import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import {
  AppBar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
//import { login } from "../redux/actions";

class Login extends Component {
      state = {
      username: '',
      password: ''  
      }

handleTextChange = (e) => {
      const newState = { ...this.state }
      newState[e.target.id] = e.target.value
      this.setState(newState)
      }

handleLogin = (e) => {
      e.preventDefault()
      document.cookie = "loggedIn=true;max-age=60*1000"
        // set cookie here
        // set loggedIn = true and max-age = 60*1000 (one minute)
      window.location.replace("/")
      }

render(props) {
    return (
      <div className="login-container">
        {/* <container maxWidth="sm"> */}
        <AppBar position="static">
          <Typography>Log In</Typography>
          </AppBar>
        {/* <Container maxWidth="sm">  */}
          <form className="login-form" onSubmit={this.handleLogin}>
            <TextField
              required
              id="username"              
              name="username"
              label="Username"
              autoComplete ="username"
              onChange={this.handleTextChange}
              />
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={this.handleTextChange} />
            <Button
              type="submit"
              fullWidth
              className="login-button"
              variant="contained"
              color="primary">Sign In</Button>
          </form>
        </div>
     )
  }
}

export default Login;





  