import React from 'react'
import { AppBar, Toolbar,
    Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'
//import { loggedOut } from '../redux/actions'
//import cookie from 'cookie'

const Navigation = (props) => {
    const style = {
        color: 'white',
    }
    
const handleLogout = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000"
    window.location.replace("/")
}

return (
    <AppBar position="relative">
            <Toolbar>
                <Typography variant="default" style={{ flexGrow: "1" }}
                color = "inherit">
                <h1> ATX - Small Business Listing</h1>
                </Typography>
                    <ul className="navigation-list">
                        <li className="nav-list-item">
                        <Link to="/" style={style}>Current Listings</Link> 
                        </li>
                        {document.cookie === "loggedIn=true" ? (
                            <>
                            <li className="nav-list-item">
                                <Link to="/addBusiness" style ={style}>Add Business</Link>
                            </li>
                            <li className="nav-list-item" onClick = {handleLogout}>
                                <Link to ="/" style={style}>Log Out</Link>
                            </li>
                            </>
                        ):(
                            <li className="nav-list-item">
                                <Link to="/login" style={style}> Login</Link>
                            </li>
                        )}
                        </ul>
                </Toolbar> 
            </AppBar>
    )
}

export default Navigation