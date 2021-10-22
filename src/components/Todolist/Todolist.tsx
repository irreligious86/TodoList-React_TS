import React from "react";
import {FilterValuesType, TaskType} from "../../App";
import classes from "./todolist.module.css";

type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function Todolist(props: TodolistPropsType) {

    const mapTaskObjectToListItem =  (task: TaskType)  => {
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
                className={classes['search-input']}
                />
                <button>+</button>
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