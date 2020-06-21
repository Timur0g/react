import React from 'react';

import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.navigation}>
      
      <div className={css.vertical_line}></div>
      <NavLink className={css.navigation_item} to="/profile" activeClassName={css.active}>PROFILE</NavLink>
      <div className={css.vertical_line}></div>

      <NavLink className={css.navigation_item} to="/messages" activeClassName={css.active}>MESSAGES</NavLink>
      <div className={css.vertical_line}></div>

      <a className={css.navigation_item} href="/d">NEWS</a>
      <div className={css.vertical_line}></div>

      <a className={css.navigation_item} href="/d">MUSIC</a>
      <div className={css.vertical_line}></div>

      <a className={css.navigation_item} href="/d">SETTINGS</a>
      <div className={css.vertical_line}></div>

    </div>
  )
}

export default Navigation