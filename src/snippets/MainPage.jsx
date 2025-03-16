    import { useState, useEffect} from 'react';
    import React from 'react';
    import InputForm from './InputForm';
    import list from './data'
    import ToShow from './ToShow';
    import Search from './Search';

    const Main = () => {

        

        const [tasks, setTasks] = useState(() => {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : list;
        });
    
        // Сохраняем данные в localStorage при изменении tasks
        useEffect(() => {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks]);

        const deleteTask = (id) => {
            const newTasks = tasks.filter((task) => task.id !== Number(id));
            setTasks(newTasks);
        };


        const updateTask = (id, newName) => {
            setTasks(tasks.map(task => 
                task.id === id ? { ...task, name: newName } : task
            ));
        };
        

        const addTask = ( { name, description, tag, priority, date} ) => {
            setTasks([...tasks, {id: Date.now(), name, description, tag, priority, date}])
        }

        return (
            <div>
                <InputForm addTask={addTask}/>
                <Search tasks={tasks} />
                <ToShow tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
            </div>
        );
    }

    export default Main;
