import React, { useState } from 'react'

export default function Todo() {

  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodo([...todo, input]);
      setInput('');
    }
  }
  const removeTodo = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  }

  return (
    <div className='bg-blue-900'>
      <div className='block rounded-md text-center font-sans text-2xl text-slate-50 bg-red-400 antialiased font-bold leading-10 '>
        <p >Todo List</p>
      </div>

      <div className='container'>
        <div>
          <input className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' value={input}
            type='text'
            placeholder='Type here' name='input'
            onChange={(e) => setInput(e.target.value)} />
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={addTodo}>Add</button>
        </div>
      </div>
      <div className='container' >
        <ul>
          {todo.map((todo, index) => (
            <li className='flex justify-between' key={index}>
            <p> {todo} </p> 
            <div className='flex justify-evenly'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full justify-center' onClick={() => removeTodo(index)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}