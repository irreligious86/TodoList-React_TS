import React, {useState} from "react";
import {FilterValuesType, TaskType} from "../../App";
import classes from "./todolist.module.css";

type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const [title, setTitle] = useState<string>('Task from local state')

    const addTask = () => {
        if (title) { props.addTask(title) }
        setTitle('')
    }

    const mapTaskObjectToListItem =  (task: TaskType)  => {

        // const [check, setCheck] = useState(task.isDone)
        
        return (
            <li className={classes['todolist-item']}
                key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button
                    className={classes['btn-remove']}
                    onClick={ () => props.removeTask(task.id) }
                >x</button>
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
                onChange={ event => {setTitle(event.currentTarget.value)} }
                />
                <button
                onClick={ () => addTask() }
                >+</button>
            </div>
            <ul className={classes['todolist-ul']}>
                {props.tasks.map( mapTaskObjectToListItem )}
            </ul>
            <div>
                <button
                    className={classes['btn']}
                    onClick={ ()=>props.changeFilter
                ("all")}
                >All</button>
                <button
                    className={classes['btn']}
                    onClick={ ()=>props.changeFilter
                ("active")}
                >Active</button>
                <button
                    className={classes['btn']}
                    onClick={ ()=>props.changeFilter
                ("completed")}
                >Completed</button>
            </div>
        </>
    )
}