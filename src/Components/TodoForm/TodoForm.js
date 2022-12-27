import React from 'react';
import './TodoFormStyle.css'

const TodoForm = ({ handleSubmit,todo,setTodo,editId }) => {
  return (
    <div className='todoform'>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo}  onChange={ (e) => {setTodo(e.target.value)}} placeholder='Add todo' />
                <button type="submit">{ editId ? "Edit" : "Add"}</button>
            </form>
        </div>
    </div>
  )
}

export default TodoForm