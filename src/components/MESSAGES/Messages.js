import React from 'react';

import c from './Messages.module.css'

import MessagesUser from './MESSAGES__USER/MessagesUser';
import text from './text-test';

const Messages = () => {

    const json = [
        {
            id: 1, 
            name: 'Timur',
            text: text
        },

        {
            id: 2,
            name: 'Ahmet',
            text: "hello <br> werf3l <br>wfewfew eeef hohohoho"
        }
    ];
    return (
        <div className={c.messages}>
            {/* <MessagesUser URL="1" NAME="Timur" DATA={text}/>
            <MessagesUser URL="2" NAME="Ahmet" DATA="hello <br> werf3l <br>wfewfew eeef"/> */}
            {json.map(item => <MessagesUser URL={item.id} NAME={item.name} DATA={item.text} />
            )}

        </div>
    );
};

export default Messages;