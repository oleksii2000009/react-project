import React, { useState } from 'react';
  



const InputForm = ({ addTask }) => {

    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[tag, setTag] = useState("")
    const[priority, setPriority] = useState(1)
    const[date, setDate] = useState("")
    const[errors, setErrors] = useState({name: false, description: false, tag: false, priority: false, date: false})

    const Finalize = () => {
        addTask( { name, description, tag, priority, date}) 
        setName("")
        setDescription("")
        setTag("")
        setPriority("")
        setDate("")
        setErrors({name: false, description: false, tag: false, priority: false, date: false})
    }


    function checkTag(tag) {
        if (tag[0] != "#") {
            setErrors(prev => ({ ...prev, description: true }));
            setTag("")
            return false
        }
        
    }

    function checkValues() {
        if (description === "") {
            setErrors(prev => ({ ...prev, description: true }));
            return false
        }


        if (name === "") {
            setErrors(prev => ({ ...prev, name: true }));
            return false
        }
        else {
            setErrors(prev => ({ ...prev, name: false }));
        }

        if (checkTag(tag) === false) {
            setErrors(prevs => ({...prevs, tag: true}))
            return false
        }
        else {
            setErrors(prevs => ({...prevs, tag: false}))
        }
        
        if (date == "") {
            setErrors(prevs => ({...prevs, date: true}))
            return false
        }
        else {
            setErrors(prevs => ({...prevs, date: false}))
        }

        if (priority < 1 && priority > 5) {
            setErrors(prevs => ({...prevs, priority: true}))
            return false
        }
        else {
            setErrors(prevs => ({...prevs, priority: false}))
        }

        return true

        
    }

    const Check = () => {
        if (checkValues() == true) {
            Finalize()
        }
        
       
    }

    return (



        <div className='input_form'>

            <input 
            type="text" 
            value={name} 
            placeholder='Название задания' 
            onChange={ (e) => {setName(e.target.value)}}
            />  
            {errors.name && <p>Name must not be empty</p>}


            <input 
            type="text" 
            value={description} 
            placeholder='Описание задания' 
            onChange={ (e) => {setDescription(e.target.value)}}/>

            {errors.description && <p>description must not be empty</p>}

            <input 
            type="text" 
            value={tag} 
            placeholder='Название тега' 
            onChange={ (e) => {setTag(e.target.value)}}/>
            {errors.tag && <p>tag should be beggining</p>}

            <input 
            type="number" 
            value={priority} 
            placeholder='приоритет' 
            onChange={ (e) => {setPriority(e.target.value)}}/>
            {errors.tag && <p>must be at least 0 and smaller than 6</p>}
    


            <input 
            type="text" 
            value={date} 
            placeholder='Дата' 
            onChange={ (e) => {setDate(e.target.value)}}/>
            {errors.date && <p>date must not be empty</p>}

            <button onClick={() => Check()}>Delete</button>








        </div>
    );
}

export default InputForm;
