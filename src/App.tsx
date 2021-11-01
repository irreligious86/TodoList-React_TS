import React, {useState} from 'react';
import classes from  './App.module.css';
import {Todolist} from "./components/Todolist/Todolist";
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

    return (
        <div className={classes['App']}>
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App ;
