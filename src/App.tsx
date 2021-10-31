import React, {useState} from 'react';
import classes from  './App.module.css';
import {Todolist} from "./components/Todolist/todolist";
import {v1} from "uuid";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"


function App() {

    let tasksForState: Array<TaskType> = [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React.JS", isDone: false},
        {id: v1(), title: "TypeScript", isDone: false}
    ]

    let[tasks, setTasks] = useState<Array<TaskType>>(tasksForState)
    let [filter, setFilter] = useState<FilterValuesType>("all")


    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender = tasks

    if ( filter === "active" ) {
        tasksForRender = tasks.filter(t => t.isDone === false)
    }

    if ( filter === "completed" ) {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className={classes['App']}>
            <Todolist
                title="What to learn"
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App ;
