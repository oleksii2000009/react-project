import React from 'react';

const ShowPlans = ({ projects, tasks }) => {
    const filterTasks = (taskIds) => tasks.filter(task => taskIds.includes(task.id));

    return (
        <div className='show_plans'>
            <div className='dailyPlans'>
                <h2>Plans for day:</h2>
                {filterTasks(projects.find(p => p.name === "dailyList")?.lists || []).map((element) => (
                    <div className='one_box' key={element.id}>
                        <p>
                            <b>Name: </b> {element.name} <b>Description:</b> {element.description} 
                            <b> Tag: </b> {element.tag} <b>Priority: </b>{element.priority} 
                            <b>Date:</b> {element.date} 
                        </p>
                    </div>
                ))}
            </div>
            
            <div className='weeklyPlans'>
                <h2>Plans for week:</h2>
                {filterTasks(projects.find(p => p.name === "weeklyList")?.lists || []).map((element) => (
                    <div className='one_box' key={element.id}>
                        <p>
                            <b>Name: </b> {element.name} <b>Description:</b> {element.description} 
                            <b> Tag: </b> {element.tag} <b>Priority: </b>{element.priority} 
                            <b>Date:</b> {element.date} 
                        </p>
                    </div>
                ))}
            </div>

            <div className='monthlyPlans'>
                <h2>Plans for month:</h2>
                {filterTasks(projects.find(p => p.name === "monthlyList")?.lists || []).map((element) => (
                    <div className='one_box' key={element.id}>
                        <p>
                            <b>Name: </b> {element.name} <b>Description:</b> {element.description} 
                            <b> Tag: </b> {element.tag} <b>Priority: </b>{element.priority} 
                            <b>Date:</b> {element.date} 
                        </p>
                    </div>
                ))}
            </div>

            
            {projects
                .filter(p => !["dailyList", "weeklyList", "monthlyList"].includes(p.name))
                .map(project => (
                    <div key={project.name} className='project_section'>
                        <h2>{project.name}</h2>
                        {filterTasks(project.lists).length > 0 ? (
                            filterTasks(project.lists).map((element) => (
                                <div className='one_box' key={element.id}>
                                    <p>
                                        <b>Name: </b> {element.name} <b>Description:</b> {element.description} 
                                        <b> Tag: </b> {element.tag} <b>Priority: </b>{element.priority} 
                                        <b>Date:</b> {element.date} 
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No tasks in this project.</p>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default ShowPlans;
