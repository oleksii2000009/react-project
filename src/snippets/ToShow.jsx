
import React from 'react';
import list from './data';

const ToShow = ({tasks, deleteTask}) => {




    return (
        <div className='box'>
                {tasks.map((element) => (
                    <div className='one_box'>
                    <p key={element.id}> <b>Name: </b> {element.name} <b> Description:</b> {element.description} <b>Tag:  </b>{element.tag} <b> priority: </b>{element.priority} date: {element.date} 
                    <button onClick={() => deleteTask(element.id)}>Delete</button>
                    </p>
                    </div>
                ))}
        </div>
    );
}

export default ToShow;
