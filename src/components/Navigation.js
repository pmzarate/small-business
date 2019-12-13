import React from 'react'
import { AppBar, Toolbar,
    Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
//import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* must import iconButton as well from mat-ui<IconButton color="inherit">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    ATX - Small Business Listing
                </Typography>
                <ul className="navigation">
                    <button className="nav-item" variant="contained" color="primary">Listings
                        {/* <Link to="/">Listings</Link> */}
                    </button>
                    <button className="nav-item">Login
                        {/* <Link to="/about">Login</Link> */}
                    </button>
                    {/* <li className="nav-list-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                   */}
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation