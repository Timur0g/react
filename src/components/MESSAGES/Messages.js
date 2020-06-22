import React from 'react';

import css from './Messages.module.css'

import MessagesUser from './MESSAGES__USER/MessagesUser';

const Messages = (props) => {

    return (
        <div className={css.messages}>
            <MessagesUser URL="1" NAME="Timur" DATA={props.messages}/>
            <MessagesUser URL="2" NAME="Ahmet" DATA="hello <br> werf3l <br>wfewfew eeef"/>
            {/* {json.map(item => <MessagesUser URL={item.id} NAME={item.name} DATA={item.text} />)} */}

        </div>
    );
};

export default Messages;