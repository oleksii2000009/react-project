import React, { useState } from 'react';
  



const InputForm = ({ addTask }) => {

    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[tag, setTag] = useState("")
    const[priority, setPriority] = useState(1)
    const[date, setDate] = useState("")

    const Finalize = () => {
        addTask( { name, description, tag, priority, date}) 
        setName("")
        setDescription("")
        setTag("")
        setPriority("")
        setDate("")
    }


    return (



        <div className='input_form'>

            <input 
            type="text" 
            value={name} 
            placeholder='Название задания' 
            onChange={ (e) => {setName(e.target.value)}}/>

            <input 
            type="text" 
            value={description} 
            placeholder='Описание задания' 
            onChange={ (e) => {setDescription(e.target.value)}}/>

            <input 
            type="text" 
            value={tag} 
            placeholder='Название тега' 
            onChange={ (e) => {setTag(e.target.value)}}/>

            <input 
            type="number" 
            value={priority} 
            placeholder='Название тега' 
            onChange={ (e) => {setPriority(e.target.value)}}/>


            <input 
            type="text" 
            value={date} 
            placeholder='Дата' 
            onChange={ (e) => {setDate(e.target.value)}}/>

            <input type="submit" value="Send Request" onClick={() => Finalize()}/>








        </div>
    );
}

export default InputForm;
