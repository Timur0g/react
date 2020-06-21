import React from 'react';
import logo from './../../logo.svg'

import css from './Header.module.css'

const Header = () => <div className={css.header}><img src={logo} alt="logo" title="React App"/></div>

export default Header