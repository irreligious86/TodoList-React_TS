import React from "react";
import {FilterValuesType, TaskType} from "./App";

type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function Todolist(props: TodolistPropsType) {

    const mapTaskObjectToListItem =  (task: TaskType)  => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button
                    onClick={ () => props.removeTask(task.id) }
                >x</button>
            </li>
        )
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map( mapTaskObjectToListItem )}
            </ul>
            <div>
                <button onClick={ ()=>props.changeFilter
                ("all")}
                >All</button>
                <button onClick={ ()=>props.changeFilter
                ("active")}
                >Active</button>
                <button onClick={ ()=>props.changeFilter
                ("completed")}
                >Completed</button>
            </div>
        </div>
    )
}