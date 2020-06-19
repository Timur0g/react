import React from 'react';

import c from './Messages.module.css'

import MessagesUser from './MESSAGES__USER/MessagesUser';

const Messages = () => {
    const text = `"hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> H HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"
    "hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>""hi <br> HELLO <br> How are you?<br>"`
    return (
        <div className={c.messages}>
            <MessagesUser URL="1" NAME="Timur" DATA={text}/>
            <MessagesUser URL="2" NAME="Ahmet" DATA="hello <br> ya mamu twou ebal <br> cho ti skazal suka"/>

        </div>
    );
};

export default Messages;