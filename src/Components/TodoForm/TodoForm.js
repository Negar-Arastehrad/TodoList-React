import React from 'react';
import './TodoFormStyle.css'
import { useContext } from 'react';
import { ThemeContext } from "../../Context/ThemeContext";

const TodoForm = ({ handleSubmit,todo,setTodo,editId }) => {

  const {theme} = useContext(ThemeContext);


  return (
    <div className='todoform'>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo}  onChange={ (e) => {setTodo(e.target.value)}} className={theme ? 'light' : 'dark'} placeholder='Add todo' />
                <button type="submit" className={theme ? 'light' : 'dark'}>{ editId ? "Edit" : "Add"}</button>
            </form>
        </div>
    </div>
  )
}

export default TodoForm