import React, { useState } from 'react';

const CreateProject = ({ addProject }) => {
    const [projectName, setProjectName] = useState("");

    const handleCreateProject = () => {
        if (!projectName.trim()) {
            alert("Project name cannot be empty!");
            return;
        }

        addProject(projectName);
        setProjectName("");
    };

    return (
        <div className="create_project">
            <input 
                type="text" 
                value={projectName} 
                placeholder="Enter project name" 
                onChange={(e) => setProjectName(e.target.value)} 
            />
            <button onClick={handleCreateProject}>Create Project</button>
        </div>
    );
};

export default CreateProject;
