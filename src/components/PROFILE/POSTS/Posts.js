import React from 'react'

import css from './Posts.module.css'

import Post from './POST/Post'

const Posts = (props) => {

    const element_text_area = React.createRef();

    const onClick_add_post = () => {
        props.props.add_post(element_text_area.current.value)
        element_text_area.current.value = null
    }


    return (
        <div className={css.posts}>
            <h1 className={css.my_posts_title}>MY POSTS</h1>

            <div className={css.input_text_post}><textarea ref={element_text_area} onInput={() => props.props.change_text_area(element_text_area.current.value)}></textarea></div>
            <div className={css.input_button_post}><button onClick={onClick_add_post}>Отправить</button></div>

            {props.props.posts.map(item => <Post text={item.text} />)}
        </div>
    )
}

export default Posts