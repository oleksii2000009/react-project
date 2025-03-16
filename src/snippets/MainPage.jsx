    import { useState } from 'react';
    import React from 'react';
    import InputForm from './InputForm';
    import list from './data'
    import ToShow from './ToShow';
    import Search from './Search';

    const Main = () => {

        const [tasks, setTasks] = useState(list)

        const deleteTask = (id) => {
            const newTasks = tasks.filter((task) => task.id !== Number(id));
            setTasks(newTasks);
        };
        

        const addTask = ( { name, description, tag, priority, date} ) => {
            setTasks([...tasks, {id: Date.now(), name, description, tag, priority, date}])
        }

        return (
            <div>
                <InputForm addTask={addTask}/>
                <Search tasks={tasks} />
                <ToShow tasks={tasks} deleteTask={deleteTask}/>
            </div>
        );
    }

    export default Main;
