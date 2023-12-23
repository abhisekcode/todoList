import React, { useState } from 'react'

export default function Todo() {

  const [input,setInput] = useState('');
  const [todo,setTodo] = useState([]);

      const addTodo = () => {
        if(input.trim()!==''){
          setTodo([...todo,input]);
          setInput('');
        }
  }
      const removeTodo = (index) => {
        const updatedTodo = todo.filter((_,i) => i!== index);
        setTodo(updatedTodo);
      }

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo,index)=>(
          <li key={index}>
            {todo} <button onClick={()=>removeTodo(index)}>x</button>
          </li>
        ))}
        
      </ul>
    </div>
  )
}