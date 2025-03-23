import { useState, useEffect } from 'react';
import React from 'react';
import InputForm from './InputForm';
import { list, Projects as initialProjects } from './data';
import ToShow from './ToShow';
import Search from './Search';
import ShowPlans from './ShowPlans';
import CreateProject from './CreateProject';

const Main = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : list;
    });

    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : initialProjects;
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = (name) => {
        const newProject = { name, lists: [] };
        setProjects((prev) => [...prev, newProject]);
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== Number(id));
        setTasks(newTasks);
        
        setProjects(prevProjects =>
            prevProjects.map(project => ({
                ...project,
                lists: project.lists.filter(taskId => taskId !== id),
            }))
        );
    };

    const updateTask = (id, newName) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, name: newName } : task
        ));
    };

    const addTask = ({ name, description, tag, priority, date }, projectName) => {
        const newTask = { id: Date.now(), name, description, tag, priority, date };
        setTasks(prevTasks => [...prevTasks, newTask]);
    
        setProjects(prevProjects => 
            prevProjects.map(project =>
                project.name === projectName
                    ? { ...project, lists: [...project.lists, newTask.id] }
                    : project
            )
        );
    };

    return (
        <div>
            <CreateProject addProject={addProject} />
            <InputForm addTask={addTask} projects={projects} />
            <Search tasks={tasks} />
            <ToShow tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
            <ShowPlans projects={projects} tasks={tasks} />
        </div>
    );
};

export default Main;
