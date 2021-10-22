import React, {useState} from 'react';
import classes from  './App.module.css';
import {Todolist} from "./components/Todolist/Todolist";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"


function App() {

    let tasksForState: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React.JS", isDone: false},
        {id: 4, title: "TypeScript", isDone: false}
    ]

    let[tasks, setTasks] = useState<Array<TaskType>>(tasksForState)
    let [filter, setFilter] = useState<FilterValuesType>("all")


    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
        // tasks = tasks.filter(t => t.id !== taskID)
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
            />
        </div>
    );
}

export default App ;
