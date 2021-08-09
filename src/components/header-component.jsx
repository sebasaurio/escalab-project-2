import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

import logo from './../assets/img/logo.png'

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <img src={logo} alt="Logo"  width='40' height='40'/>
            &nbsp;
            <h1>Nutritional App</h1>
        </Toolbar>
    </AppBar>
)

export default Header
