import React from 'react'
import classes from './Message.module.css'

type msgPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: msgPropsType) {
    return (
        <div className={classes['message']}>
            <img className={classes['avatar']} src={props.avatar} alt="avatar"/>
            <div className={classes['message-box']}>
                <h4 className={classes['message-title']}>{props.name}</h4>
                <p className={classes['message-text']}>{props.message}</p>
                <code className={classes['message-time']}>{props.time}</code>
            </div>
        </div>
    )
}

export default Message
