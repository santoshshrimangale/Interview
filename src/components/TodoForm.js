import React, { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
    const [input,setInput]=useState('');

    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
        props.onSubmit({
             id:Math.floor(Math.random()*10000),
            text:input
        })
        setInput('')
    }
  return (
    <div>
        <form className='todo-form' onClick={handleSubmit}>
            <input type="text" placeholder='Add to do' value={input}
             name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
      <button type='button' className='todo-button'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm;