import { useState } from 'react';
import React from 'react';
import InputForm from './InputForm';
import list from './data'
import ToShow from './ToShow';

const Main = () => {

    const [tasks, setTasks] = useState(list)

    const addTask = ( { name, description, tag, priority, date} ) => {
        setTasks(...tasks, {name, description, tag, priority, date})
    }

    return (
        <div>
            <InputForm addTask={addTask}/>
            <ToShow/>
        </div>
    );
}

export default Main;
