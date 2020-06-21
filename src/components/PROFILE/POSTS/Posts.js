import React from 'react'

import css from './Posts.module.css'

import Post from './POST/Post'

const Posts = (props) => {

    // const json = [
    //     {text:'My post'},{text:'My post2'},{text:'My post3'}
    // ]

    return (
        <div className={css.posts}>
            <h1 className={css.my_posts_title}>MY POSTS</h1>

            <div className={css.input_text_post}><textarea></textarea></div>
            <div className={css.input_button_post}><button>Отправить</button></div>

            {/* <Post text='ahi'/> */}
            {props.posts.map(item => <Post text={item} />)}
        </div>
    )
}

export default Posts