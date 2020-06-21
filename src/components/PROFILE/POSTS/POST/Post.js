import React from 'react'
import css from './Post.module.css'

const Post = (props) => {
    return (
        <div className={css.post}>{props.text}</div>
    )
}

export default Post