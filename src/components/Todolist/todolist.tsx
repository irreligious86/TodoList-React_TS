import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType, TaskType} from "../../App";
import classes from "./todolist.module.css";
import {Button} from "../Button/button";


type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) addTask()
    }

    const changeFilterX = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const [title, setTitle] = useState<string>('Task from local state')

    const addTask = () => {
        if (title) {
            props.addTask(title)
        }
        setTitle('')
    }

    const mapTaskObjectToListItem = (task: TaskType) => {

        const onClickHandler = () => props.removeTask(task.id)

        return (
            <li className={classes['todolist-item']}
                key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <Button callback={onClickHandler} name={'x'}/>
            </li>
        )
    }

    return (
        <>
            <h3 className={classes['todolist-title']}>{props.title}</h3>
            <div className={classes['todolist-body']}>
                <input
                    value={title}
                    className={classes['search-input']}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <Button
                    callback={addTask}
                    name={'+'}
                />
            </div>
            <ul className={classes['todolist-ul']}>
                {props.tasks.map(mapTaskObjectToListItem)}
            </ul>
            <div>
                <Button
                    name={'all'}
                    callback={() => {
                        changeFilterX('all')
                    }}/>
                <Button
                    name={'active'}
                    callback={() => {
                        changeFilterX('active')
                    }}/>
                <Button
                    name={'completed'}
                    callback={() => {
                        changeFilterX('completed')
                    }}/>
            </div>
        </>
    )
}