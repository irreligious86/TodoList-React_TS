import React, {useState} from "react";
import {FilterValuesType, TaskType} from "../../App";
import classes from "./todolist.module.css";
import {Button} from "../Button/Button";
import {FullInput} from "../FullInput/FullInput";


type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    addTask: (title: string) => void
}

export function Todolist({tasks, removeTask, ...props}: TodolistPropsType) {

    let [filter, setFilter] = useState<FilterValuesType>("all")

    let tasksForTodolist = tasks

    if ( filter === "active" ) {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    if ( filter === "completed" ) {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const changeFilterX = (filter: FilterValuesType) => {
        changeFilter(filter)
    }

    // const addTask = () => {
    //     if (title) {
    //         props.addTask(title)
    //     }
    //     setTitle('')
    // }

    const mapTaskObjectToListItem = (task: TaskType) => {

        const onClickHandler = () => removeTask(task.id)

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
           <FullInput
               callBack={props.addTask}
           />
            <ul className={classes['todolist-ul']}>
                {tasksForTodolist.map(mapTaskObjectToListItem)}
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