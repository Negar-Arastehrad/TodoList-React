import React from "react";
import "./TodoListStyle.css";
import { useContext } from 'react';
import { ThemeContext } from "../../Context/ThemeContext";


const TodoList = ({ todos, handleDelete, handleEdit,handleComplete}) => {
  
  const {theme} = useContext(ThemeContext);
  

  return (
    <div className="todolist">
      <div className="container">
        <ul>
          {todos.map((t) => (
            <li className={theme ? 'light' : 'dark'}>
              <p key={t.id} className={t.completed ? 'done span' : 'span' } >{t.todo}</p>
              <button onClick={() => handleEdit(t.id)} className={theme ? 'light' : 'dark'}>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => handleDelete(t.id)} className={theme ? 'light' : 'dark'}>
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button onClick={()=>handleComplete(t.id)}  className={theme ? 'light' : 'dark'} ><i class="fa-solid fa-check"></i></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
