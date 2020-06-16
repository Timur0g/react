import React from 'react';
import logo from './../../logo.svg'

import c from './Header.module.css'

const Header = () => <div className={c.header}><img src={logo} alt="logo" title="React App"/></div>

export default Header