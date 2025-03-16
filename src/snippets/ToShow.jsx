import React from 'react';
import list from './data';

const ToShow = () => {
    return (
        <div className='box'>
            <div className='one_box'>
                {list.map((element, index) => (
                    <p key={index}> <b>Name: </b> {element.name} <b> Description:</b> {element.description} <b>Tag:  </b>{element.tag} <b> priority: </b>{element.priority} date: {element.date} </p>
                ))}
            </div>
        </div>
    );
}

export default ToShow;
