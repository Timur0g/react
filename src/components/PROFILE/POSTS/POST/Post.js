import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    console.log(props)
    return (
        <div className={c.post}>{props.text}</div>
    )
}

export default Post