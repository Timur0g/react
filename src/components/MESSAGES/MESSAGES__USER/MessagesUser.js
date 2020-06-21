import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import c from './MessagesUser.module.css';

import MessagesUserData from './MESSAGES__USER_DATA/MessagesUserData';

const MessagesUser = (props) => {
    const URL = `/messages/${props.URL}`;
    const NAME = props.NAME;
    const DATA = props.DATA

    return (
        <div className={c.messages__user}>
            <NavLink className={c.messages__user_item} to={URL} activeClassName={c.active}> {NAME}</NavLink>

            <Route exact path={URL} render={(props) => <MessagesUserData DATA={DATA} />} />
            
        </div>
    );
};

export default MessagesUser;