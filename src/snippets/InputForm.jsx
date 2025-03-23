import React, { useState } from 'react';

const InputForm = ({ addTask, projects }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [priority, setPriority] = useState(1);
    const [date, setDate] = useState("");
    const [selectedProject, setSelectedProject] = useState(projects[0]?.name || "");
    const [errors, setErrors] = useState({ name: false, description: false, tag: false, priority: false, date: false });

    const checkTag = (tag) => {
        if (!tag.startsWith("#")) {
            setErrors(prev => ({ ...prev, tag: true }));
            setTag("");
            return false;
        }
        return true;
    };

    const checkValues = () => {
        let valid = true;
        let newErrors = { ...errors };

        if (!name) {
            newErrors.name = true;
            valid = false;
        } else newErrors.name = false;

        if (!description) {
            newErrors.description = true;
            valid = false;
        } else newErrors.description = false;

        if (!checkTag(tag)) {
            newErrors.tag = true;
            valid = false;
        } else newErrors.tag = false;

        if (!date) {
            newErrors.date = true;
            valid = false;
        } else newErrors.date = false;

        if (priority < 1 || priority > 5) {
            newErrors.priority = true;
            valid = false;
        } else newErrors.priority = false;

        setErrors(newErrors);
        return valid;
    };

    const finalize = () => {
        const newTask = { id: Date.now(), name, description, tag, priority, date };
        addTask(newTask, selectedProject);
        setName("");
        setDescription("");
        setTag("");
        setPriority(1);
        setDate("");
    };

    const handleAddTask = () => {
        if (checkValues()) {
            finalize();
        }
    };

    return (
        <div className='input_form'>
            <input type="text" value={name} placeholder='Task Name' onChange={(e) => setName(e.target.value)} />
            {errors.name && <p>Name must not be empty</p>}

            <input type="text" value={description} placeholder='Task Description' onChange={(e) => setDescription(e.target.value)} />
            {errors.description && <p>Description must not be empty</p>}

            <input type="text" value={tag} placeholder='Tag (e.g. #work)' onChange={(e) => setTag(e.target.value)} />
            {errors.tag && <p>Tag should start with #</p>}

            <input type="number" value={priority} placeholder='Priority (1-5)' onChange={(e) => setPriority(Number(e.target.value))} />
            {errors.priority && <p>Priority must be between 1 and 5</p>}

            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            {errors.date && <p>Date must not be empty</p>}

            {/* Динамический список проектов */}
            <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
                {projects.map(project => (
                    <option key={project.name} value={project.name}>{project.name}</option>
                ))}
            </select>

            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default InputForm;
