import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import css from './MessagesUser.module.css';

import MessagesUserData from './MESSAGES__USER_DATA/MessagesUserData';

const MessagesUser = (props) => {
    const URL = `/messages/${props.URL}`;
    const NAME = props.NAME;
    const DATA = props.DATA

    return (
        <div className={css.messages__user}>
            <NavLink className={css.messages__user_item} to={URL} activeClassName={css.active}> {NAME}</NavLink>

            <Route exact path={URL} render={(props) => <MessagesUserData DATA={DATA} />} />
            
        </div>
    );
};

export default MessagesUser;