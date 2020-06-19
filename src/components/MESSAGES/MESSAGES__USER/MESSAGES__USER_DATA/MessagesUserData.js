import React from 'react';

import c from './MessagesUserData.module.css';

const MessagesUserData = (props) => {
    return(
        <div className={c.messages__user_data}>{props.DATA}</div>
    );
};

export default MessagesUserData;