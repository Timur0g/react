import React from 'react';

import c from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={c.navigation}>

        <a className={c.navigation_item} href="/profile">PROFILE</a>
        <div className={c.vertical_line}></div>

        <a className={c.navigation_item} href="/messages">MESSAGES</a>
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