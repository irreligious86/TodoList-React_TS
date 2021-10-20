import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React.JS", isDone: false},
        {id: 4, title: "TypeScript", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
        </div>
    );
}

export default App ;
