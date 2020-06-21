import React from 'react';

import css from './MessagesUserData.module.css';

const MessagesUserData = (props) => {
    return(
        <div className={css.messages__user_data}>{props.DATA}</div>
    );
};

export default MessagesUserData;