import React from 'react';

import { NavLink } from 'react-router-dom';

import c from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={c.navigation}>
      
      <div className={c.vertical_line}></div>
      <NavLink className={c.navigation_item} to="/profile" activeClassName={c.active}>PROFILE</NavLink>
      <div className={c.vertical_line}></div>

      <NavLink className={c.navigation_item} to="/messages" activeClassName={c.active}>MESSAGES</NavLink>
      <div className={c.vertical_line}></div>

      <a className={c.navigation_item} href="/d">NEWS</a>
      <div className={c.vertical_line}></div>

      <a className={c.navigation_item} href="/d">MUSIC</a>
      <div className={c.vertical_line}></div>

      <a className={c.navigation_item} href="/d">SETTINGS</a>
      <div className={c.vertical_line}></div>

    </div>
  )
}

export default Navigation