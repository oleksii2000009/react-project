import React, { useState } from 'react';

const ToShow = ({ tasks, deleteTask, updateTask }) => {
    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState("");

    const handleEditClick = (task) => {
        setEditingId(task.id);
        setNewName(task.name);
    };

    const handleSaveClick = (id) => {
        updateTask(id, newName);
        setEditingId(null);
    };

    return (
        <div className='box'>
            <h2>Список всех задач:</h2>
            {tasks.map((element) => (
                <div className='one_box' key={element.id}>
                    {editingId === element.id ? (
                        <div>
                            <input 
                                type='text' 
                                value={newName} 
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <button onClick={() => handleSaveClick(element.id)}>Save</button>
                        </div>
                    ) : (
                        <p>
                            <b>Name: </b> {element.name} <b> Description:</b> {element.description} 
                            <b>Tag: </b> {element.tag} <b>Priority: </b>{element.priority} 
                            Date: {element.date} 
                            <button onClick={() => deleteTask(element.id)}>Delete</button>
                            <button onClick={() => handleEditClick(element)}>Edit</button>
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ToShow;