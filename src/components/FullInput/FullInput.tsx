import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "../Todolist/todolist.module.css";
import {Button} from "../Button/Button";

type PropsType = {
callBack: (title: string) => void
}

export const FullInput = (props: PropsType) => {

    let [title, setTitle] = useState<string>('Task from local state')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) callBackHandler()
    }

    const callBackHandler = () => {
        props.callBack(title)
        setTitle('')
    }

    return (
        <div className={classes['todolist-body']}>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={classes['search-input']}
            />
            <Button
                callback={callBackHandler}
                name={'+'}
            />
        </div>
    )
}
