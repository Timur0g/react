import React from 'react'

import c from './Posts.module.css'

import Post from './POST/Post'

const Posts = (props) => {
    console.log(props)
    return (
        <div className={c.posts}>
            <h1 className={c.my_posts_title}>MY POSTS</h1>

            <div className={c.input_text_post}><textarea></textarea></div>
            <div className={c.input_button_post}><button>Отправить</button></div>

            <Post text={props.text}/>
        </div>
    )
}

export default Posts