import React from 'react'
import classes from './Post.module.css'
const Post = (props) => {
  console.log(props.author)  
  console.log(props.body)
  return (
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
  )
}

export default Post